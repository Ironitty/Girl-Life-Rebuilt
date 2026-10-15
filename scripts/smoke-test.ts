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
  srv.listen(4173);
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
    if (msg.type() === 'error') errors.push(`console: ${msg.text()}`);
  });

  try {
    await page.goto('http://localhost:4173', { waitUntil: 'networkidle' });
    await sleep(500);

    // 1. Title screen visible
    const body = await page.textContent('body');
    check(`Title screen renders (${body?.length ?? 0} chars)`, (body?.length ?? 0) > 50);
    check('Shows "Girl Life" title', body?.includes('Girl Life') ?? false);
    check('Shows Start button', body?.includes('Start') ?? false);
    check('Shows Load button', body?.includes('Load') ?? false);

    // 2. Screenshot title screen
    await page.screenshot({ path: '/tmp/opencode/smoke-title.png', fullPage: true });
    check('Title screenshot saved', true);

    // 3. No console errors
    check(`No console errors (${errors.length})`, errors.length === 0);
    if (errors.length) errors.forEach((e) => console.log(`  ${e}`));

    // 4. Click Start → pipeline (warning screen)
    await page.locator('button', { hasText: /^Start$/ }).click();
    await sleep(500);
    const warnBody = await page.textContent('body');
    check('Warning screen shows after Start', warnBody?.includes('Warning') ?? false);

    // 5. Quick Start → game screen (directly, no pipeline)
    await page.locator('button', { hasText: 'Quick Start' }).click();
    await sleep(1000);
    const gameBody = await page.textContent('body');
    check('Game screen shows after Quick Start', (gameBody?.length ?? 0) > 50);
    check('Shows status bar', gameBody?.includes('Status') ?? false);
    await page.screenshot({ path: '/tmp/opencode/smoke-game.png', fullPage: true });

    // 5. Save menu from game
    const saveBtn = page.locator('button[title="Save"]');
    if (await saveBtn.count() > 0) {
      await saveBtn.first().click();
      await sleep(300);
      const saveText = await page.textContent('body');
      check('Save menu opens with 10 slots', (saveText?.includes('#1') && saveText?.includes('#10')) ?? false);
      await page.locator('button', { hasText: '✕' }).first().click();
      await sleep(200);
    } else {
      check('Save button in game', false);
    }

    // 6. Settings menu
    const settingsBtn = page.locator('button[title="Menu & Cheatmenu"]');
    if (await settingsBtn.count() > 0) {
      await settingsBtn.first().click();
      await sleep(300);
      const settingsText = await page.textContent('body');
      check('Settings menu opens', settingsText?.toLowerCase().includes('theme') ?? false);
      await page.locator('button', { hasText: '✕' }).first().click();
      await sleep(200);
    } else {
      check('Settings button in game', false);
    }

    // 7. Map button
    const mapBtn = page.locator('button', { hasText: /^map$/i });
    if (await mapBtn.count() > 0) {
      await mapBtn.first().click();
      await sleep(500);
      await page.screenshot({ path: '/tmp/opencode/smoke-map.png' });
      check('Map view opens', true);
    } else {
      check('Map button exists', false);
    }

    // 8. Random location via shift+Q, then click a random button
    await page.goto('http://localhost:4173', { waitUntil: 'networkidle' });
    await sleep(500);
    await page.keyboard.down('Shift');
    await page.keyboard.press('q');
    await page.keyboard.up('Shift');
    await sleep(1000);
    const randBody = await page.textContent('body');
    check('Random location loaded via shift+Q', (randBody?.length ?? 0) > 50);

    const allButtons = await page.locator('button').all();
    const actionBtns: { btn: any; text: string }[] = [];
    const navBtns: { btn: any; text: string }[] = [];
    for (const b of allButtons) {
      const t = (await b.textContent())?.trim() ?? '';
      const title = await b.getAttribute('title');
      if (title) continue;
      if (t.length === 0 || t.length >= 80) continue;
      if (/^(Map|Back)$/i.test(t)) { navBtns.push({ btn: b, text: t }); continue; }
      actionBtns.push({ btn: b, text: t });
    }
    const pickPool = actionBtns.length > 0 ? actionBtns : navBtns;
    if (pickPool.length > 0) {
      const pick = pickPool[Math.floor(Math.random() * pickPool.length)];
      const errsBefore = errors.length;
      await pick.btn.click();
      await sleep(500);
      const afterBody = await page.textContent('body');
      const newErrs = errors.slice(errsBefore).filter((e) => !/404|Failed to load resource/i.test(e));
      check(`Random button "${pick.text}" works (no crash)`, (afterBody?.length ?? 0) > 50 && newErrs.length === 0);
      if (newErrs.length) newErrs.forEach((e) => console.log(`  ${e}`));
    } else {
      check('Random action button found', false);
    }

    console.log(`\n=== SMOKE TEST: ${passed} passed, ${failed} failed ===`);
    if (failed > 0) process.exitCode = 1;
  } catch (e: any) {
    console.error(`✗ Test crashed: ${e.message}`);
    await page.screenshot({ path: '/tmp/opencode/smoke-fail.png', fullPage: true }).catch(() => {});
    process.exitCode = 1;
  } finally {
    await browser.close();
    srv.close();
    process.exit(process.exitCode ?? 0);
  }
}

main();
