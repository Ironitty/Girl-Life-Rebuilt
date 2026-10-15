import { chromium } from 'playwright';
import { setTimeout as sleep } from 'timers/promises';
import { createServer, type Server } from 'http';
import { readFileSync } from 'fs';
import { join } from 'path';

const ROOT = '/home/depressedtsukasa/Documents/GL';

function startServer(): Server {
  const html = readFileSync(join(ROOT, 'dist', 'index.html'));
  const srv = createServer((req, res) => {
    if (req.url === '/' || req.url === '/index.html') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
    } else {
      try {
        const data = readFileSync(join(ROOT, 'public', req.url!));
        const ext = req.url!.split('.').pop();
        const ct = ext === 'jpg' || ext === 'png' ? 'image/*' : ext === 'mp3' ? 'audio/mpeg' : 'application/octet-stream';
        res.writeHead(200, { 'Content-Type': ct });
        res.end(data);
      } catch {
        res.writeHead(404);
        res.end('Not found');
      }
    }
  });
  srv.listen(4174);
  return srv;
}

async function main() {
  const srv = startServer();
  await sleep(500);
  const browser = await chromium.launch({ headless: true, executablePath: '/usr/bin/google-chrome' });
  const page = await browser.newPage();
  const errors: string[] = [];
  let passed = 0;
  let failed = 0;

  function check(label: string, ok: boolean) {
    if (ok) { passed++; console.log(`✓ ${label}`); }
    else { failed++; console.log(`✗ ${label}`); }
  }

  page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));
  page.on('console', (msg) => {
    const text = msg.text();
    if (msg.type() === 'error') errors.push(`console: ${text}`);
    if (text.includes('[DEBUG]')) console.log(text);
  });

  try {
    await page.goto('http://localhost:4174', { waitUntil: 'networkidle' });
    await sleep(500);

    // Quick Start
    await page.locator('button', { hasText: /^Start$/ }).click();
    await sleep(500);
    await page.locator('button', { hasText: 'Quick Start' }).click();
    await sleep(2000);

    // Check state
    const state = await page.evaluate(`(function() {
      var store = window.__gameStore;
      if (!store) return { error: 'no __gameStore' };
      var s = store.getState();
      return {
        gm_school: s.gm_school,
        gm_school_h: s.gm_school_h,
        gm_school_b: s.gm_school_b,
        gm_school_s: s.gm_school_s,
        gm_school_dirt: s.gm_school_dirt,
        start_type: s.start_type,
        gschoolVars: s.gschoolVars,
        pcs_hips: s.pcs_hips,
        CloMaxStrength: s.CloMaxStrength
      };
    })()`);

    console.log('\nState dump:');
    console.log(JSON.stringify(state, null, 2));

    check('gm_school[6] exists', (state as any).gm_school?.[6] === 1);
    check('gm_school_h[6] > 0', ((state as any).gm_school_h?.[6] ?? 0) > 0);
    check('gm_school_b[6] > 0', ((state as any).gm_school_b?.[6] ?? 0) > 0);
    check('start_type.loc === sg', (state as any).start_type?.loc === 'sg');
    check('gschoolVars defined', (state as any).gschoolVars !== undefined);
    check('pcs_hips > 0', ((state as any).pcs_hips ?? 0) > 0);
    check('CloMaxStrength > 0', ((state as any).CloMaxStrength ?? 0) > 0);

    // Verify display format logic (unit-level check on the transform)
    const h6 = (state as any).gm_school_h?.[6] ?? 0;
    const expected = h6 >= 1000 ? (h6 / 1000).toFixed(1) + 'k' : String(h6);
    check(`Format logic: ${h6} → "${expected}"`, expected === '10.0k');

    if (errors.length > 0) {
      check(`No console errors (${errors.length})`, false);
      errors.forEach((e) => console.log(`  ${e}`));
    } else {
      check('No console errors', true);
    }

    console.log(`\n=== SCHOOL OUTFIT TEST: ${passed} passed, ${failed} failed ===`);
    if (failed > 0) process.exitCode = 1;
  } catch (e: any) {
    console.error(`✗ Test crashed: ${e.message}`);
    process.exitCode = 1;
  } finally {
    await browser.close();
    srv.close();
    process.exit(process.exitCode ?? 0);
  }
}

main();
