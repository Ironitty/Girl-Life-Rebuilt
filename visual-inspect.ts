/// <reference types="node" />
import { chromium, firefox } from 'playwright';
import fs from 'fs';

const htmlPath = 'file:///home/depressedtsukasa/Documents/GL/index.html';
const outDir = '/tmp/opencode/screenshots';
fs.mkdirSync(outDir, { recursive: true });

async function shoot(browser: any, name: string) {
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await ctx.newPage();
  const errors: string[] = [];
  page.on('pageerror', (e: Error) => errors.push(e.message));
  page.on('console', (msg: any) => { if (msg.type() === 'error') errors.push(msg.text()); });
  await page.goto(htmlPath, { waitUntil: 'networkidle', timeout: 15000 }).catch(() => {});
  await page.waitForTimeout(2000);
  await page.screenshot({ path: `${outDir}/${name}-title.png` });

  const startBtn = page.locator('text=Start').first();
  if (await startBtn.isVisible().catch(() => false)) {
    await startBtn.click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: `${outDir}/${name}-after-start.png` });
  }
  console.log(`${name} errors: ${errors.length ? errors.join(' | ') : 'none'}`);
  await ctx.close();
}

(async () => {
  const ch = await chromium.launch({ headless: true, executablePath: '/snap/bin/chromium' });
  await shoot(ch, 'chromium');
  await ch.close();

  const ff = await firefox.launch({ headless: true, executablePath: '/snap/firefox/current/usr/lib/firefox/firefox' });
  await shoot(ff, 'firefox');
  await ff.close();

  console.log('Screenshots saved to', outDir);
})();
