import puppeteer from 'puppeteer-core';
import { mkdirSync } from 'fs';
import { createServer, type Server } from 'http';
import { readFileSync } from 'fs';
import { join } from 'path';

const ROOT = '/home/depressedtsukasa/Documents/GL';
const url = 'http://localhost:4175';
const out = process.argv[2] || '/tmp/wardrobe-screenshot.png';
const width = 1400;
const height = 900;
const target = process.argv[3] || 'wardrobe:start';

const profileDir = '/tmp/ff-puppeteer-profile3';
mkdirSync(profileDir, { recursive: true });

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

const srv = startServer();
await new Promise(r => setTimeout(r, 500));

const browser = await puppeteer.launch({
  browser: 'firefox',
  executablePath: '/usr/bin/firefox',
  headless: false,
  args: ['--no-remote', '-profile', profileDir],
});

const page = await browser.newPage();
await page.setViewport({ width, height });
await page.goto(url, { waitUntil: 'load' });
await new Promise(r => setTimeout(r, 1000));

// Quick Start via Shift+Q
await page.keyboard.down('Shift');
await page.keyboard.press('q');
await page.keyboard.up('Shift');
await new Promise(r => setTimeout(r, 500));

// Click through the pipeline screens
for (let i = 0; i < 12; i++) {
  const btns = await page.$$('button, a[href="#"]');
  if (btns.length > 0) {
    await btns[btns.length - 1].click();
    await new Promise(r => setTimeout(r, 300));
  }
}

await new Promise(r => setTimeout(r, 500));

// Navigate to target location via the store
const [loc, arg] = target.split(':');
await page.evaluate((l, a) => {
  const store = (window as any).__gameStore;
  if (store) {
    store.getState().doGoto(l, a);
  }
}, loc, arg || '');

await new Promise(r => setTimeout(r, 1000));
await page.screenshot({ path: out, fullPage: false });
console.log(`Screenshot saved: ${out}`);

await browser.close();
srv.close();
