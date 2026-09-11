import puppeteer from 'puppeteer-core';
import { mkdirSync } from 'fs';

const url = process.argv[2] || 'file:///home/depressedtsukasa/Documents/GL/dist/index.html';
const outDir = process.argv[3] || '/tmp/ff-shots';
const width = parseInt(process.argv[4] || '1400');
const height = parseInt(process.argv[5] || '900');
const delay = parseInt(process.argv[6] || '1500');

const profileDir = '/tmp/ff-puppeteer-profile';
mkdirSync(profileDir, { recursive: true });
mkdirSync(outDir, { recursive: true });

const browser = await puppeteer.launch({
  browser: 'firefox',
  executablePath: '/usr/bin/firefox',
  headless: false,
  args: ['--no-remote', '-profile', profileDir],
});

const page = await browser.newPage();
await page.setViewport({ width, height });
await page.goto(url, { waitUntil: 'load' });
await new Promise(r => setTimeout(r, delay));

const titlePath = `${outDir}/title.png`;
await page.screenshot({ path: titlePath });
console.log(`Title screenshot saved: ${titlePath}`);

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

const locPath = `${outDir}/random-location.png`;
await page.screenshot({ path: locPath });
console.log(`Random location screenshot saved: ${locPath}`);

await browser.close();
