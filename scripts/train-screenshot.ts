import { chromium } from 'playwright';
import { setTimeout as sleep } from 'timers/promises';
import { createServer, type Server } from 'http';
import { readFileSync } from 'fs';
import { join } from 'path';

const ROOT = '/home/depressedtsukasa/Documents/GL';

function startServer(): Server {
  const html = readFileSync(join(ROOT, 'index.html'));
  const srv = createServer((req, res) => {
    if (req.url === '/' || req.url === '/index.html') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
    } else {
      try {
        const data = readFileSync(join(ROOT, req.url!));
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
  srv.listen(4175);
  return srv;
}

async function main() {
  const srv = startServer();
  await sleep(500);
  const browser = await chromium.launch({ headless: true, executablePath: '/snap/bin/chromium' });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1400, height: 900 });

  await page.goto('http://localhost:4175', { waitUntil: 'networkidle' });
  await sleep(500);

  await page.locator('button', { hasText: /^Start$/ }).click();
  await sleep(400);
  await page.locator('button', { hasText: 'Quick Start' }).click();
  await sleep(400);

  await page.locator('input[placeholder="Elena"]').first().fill('Test');
  await page.locator('button', { hasText: /^Continue$/ }).click();
  await sleep(400);

  await page.locator('button', { hasText: /^Continue$/ }).click();
  await sleep(400);

  await page.locator('button', { hasText: /End of August/ }).click();
  await sleep(400);

  await page.locator('button', { hasText: 'Pavlovsk' }).first().click();
  await sleep(400);

  await page.locator('button', { hasText: 'Popular' }).first().click();
  await sleep(400);

  await page.locator('button', { hasText: 'Sociable' }).first().click();
  await sleep(400);

  await page.locator('button', { hasText: /^Continue$/ }).click();
  await sleep(400);

  await page.locator('button', { hasText: 'Start Game' }).click();
  await sleep(500);

  // Test train with different args
  const args = ['', 'center', 'center_tickets', 'communal', 'communal_tickets'];
  for (const arg of args) {
    await page.evaluate((a) => {
      const store = (window as any).__gameStore;
      if (store) store.getState().doGoto('train', a);
    }, arg);
    await sleep(600);

    const state = await page.evaluate(() => {
      const s = (window as any).__gameStore.getState();
      return { loc: s.loc, arg: s.locArg, mainText: s.mainText?.substring(0, 80), actCount: s.curActs?.length, acts: s.curActs?.map((a: any) => a.label) };
    });
    console.log(`ARG="${arg}":`, JSON.stringify(state, null, 2));
  }

  // Final screenshot on center view
  await page.evaluate(() => {
    const store = (window as any).__gameStore;
    if (store) store.getState().doGoto('train', 'center');
  });
  await sleep(600);
  await page.screenshot({ path: '/tmp/train-view.png', fullPage: false });
  console.log('Screenshot saved: /tmp/train-view.png');

  await browser.close();
  srv.close();
}

main().catch(e => { console.error(e); process.exit(1); });
