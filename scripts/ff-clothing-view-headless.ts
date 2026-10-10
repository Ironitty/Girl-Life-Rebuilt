import puppeteer from 'puppeteer-core';
import { mkdirSync } from 'fs';

const url = 'file:///home/depressedtsukasa/Documents/GL/dist/index.html';
const out = process.argv[2] || '/tmp/clothing-view-headless.png';
const width = 1400;
const height = 900;
const target = process.argv[3] || 'clothing_view:';

const profileDir = '/tmp/ff-puppeteer-profile-cv';
mkdirSync(profileDir, { recursive: true });

const browser = await puppeteer.launch({
  browser: 'firefox',
  executablePath: '/usr/bin/firefox',
  headless: true,
  args: ['-headless', '--no-remote', '-profile', profileDir],
});

const page = await browser.newPage();
await page.setViewport({ width, height });
await page.goto(url, { waitUntil: 'load' });
await new Promise(r => setTimeout(r, 2000));

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

async function clickButton(text: string | RegExp) {
  await page.evaluate((t) => {
    const re = typeof t === 'string' ? new RegExp(`^${t}$`) : t;
    const btns = Array.from(document.querySelectorAll('button'));
    const btn = btns.find(b => re.test(b.textContent?.trim() ?? ''));
    btn?.click();
  }, text);
}

async function clickButtonContains(text: string) {
  await page.evaluate((t) => {
    const btns = Array.from(document.querySelectorAll('button'));
    const btn = btns.find(b => (b.textContent ?? '').includes(t));
    btn?.click();
  }, text);
}

await clickButton('Start');
await sleep(500);
await clickButton('Quick Start');
await sleep(500);
await page.evaluate(() => {
  const input = document.querySelector('input[placeholder="Elena"]') as HTMLInputElement;
  if (input) {
    input.value = 'Test';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.dispatchEvent(new Event('change', { bubbles: true }));
  }
});
await clickButton('Continue');
await sleep(500);
await clickButton('Continue');
await sleep(500);
await clickButtonContains('End of August');
await sleep(500);
await clickButtonContains('Pavlovsk');
await sleep(500);
await clickButtonContains('Popular');
await sleep(500);
await clickButtonContains('Sociable');
await sleep(500);
await clickButton('Continue');
await sleep(500);
await clickButton('Start Game');
await sleep(1000);

await page.keyboard.down('Shift');
await page.keyboard.press('KeyQ');
await page.keyboard.up('Shift');
await sleep(1500);

const idx = target.indexOf(':');
const loc = idx >= 0 ? target.slice(0, idx) : target;
const arg = idx >= 0 ? target.slice(idx + 1) : '';
await page.evaluate((l, a) => {
  const store = (window as any).__gameStore;
  if (store) {
    store.getState().doGoto(l, a);
  }
}, loc, arg);

await sleep(2000);
await page.screenshot({ path: out, fullPage: false });
console.log(`Screenshot saved: ${out}`);

await browser.close();
