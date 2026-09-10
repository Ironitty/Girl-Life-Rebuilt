import puppeteer from 'puppeteer-core';
import { mkdirSync } from 'fs';

const url = process.argv[2] || 'file:///home/depressedtsukasa/Documents/GL/index.html';
const out = process.argv[3] || '/tmp/ff-screenshot.png';
const width = parseInt(process.argv[4] || '1400');
const height = parseInt(process.argv[5] || '900');
const delay = parseInt(process.argv[6] || '1500');

const profileDir = '/tmp/ff-puppeteer-profile';
mkdirSync(profileDir, { recursive: true });

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
await page.screenshot({ path: out, fullPage: false });
console.log(`Screenshot saved: ${out}`);
await browser.close();
