import { chromium } from 'playwright';
const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
(async () => {
  const browser = await chromium.launch({ headless: true, executablePath: '/snap/bin/chromium' });
  const page = await browser.newPage();
  const errors: string[] = [];
  page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));
  page.on('console', (msg) => { if (msg.type() === 'error' || msg.type() === 'warning') errors.push(`[${msg.type()}] ${msg.text()}`); });

  await page.goto('http://localhost:4173', { waitUntil: 'networkidle' });
  await sleep(500);

  await page.locator('button', { hasText: /^Start$/ }).click();
  await sleep(500);
  await page.locator('button', { hasText: 'Quick Start' }).click();
  await sleep(500);
  await page.locator('input[placeholder="Elena"]').first().fill('Test');
  await page.locator('button', { hasText: /^Continue$/ }).click();
  await sleep(500);
  await page.locator('button', { hasText: /^Continue$/ }).click();
  await sleep(500);
  await page.locator('button', { hasText: /End of August/ }).click();
  await sleep(500);
  await page.locator('button', { hasText: 'Pavlovsk' }).first().click();
  await sleep(500);
  await page.locator('button', { hasText: 'Popular' }).first().click();
  await sleep(500);
  await page.locator('button', { hasText: 'Sociable' }).first().click();
  await sleep(500);
  await page.locator('button', { hasText: /^Continue$/ }).click();
  await sleep(500);
  await page.locator('button', { hasText: 'Start Game' }).click();
  await sleep(1000);

  // Navigate to metro:island
  await page.evaluate(() => {
    const s = (window as any).__gameStore.getState();
    (window as any).__goto(s, 'metro', 'island');
  });
  await sleep(1000);

  const buttons = await page.$$eval('button', els => els.map(e => e.textContent?.trim() || ''));
  console.log('BUTTONS:', JSON.stringify(buttons, null, 2));
  const bodyText = await page.$eval('body', el => el.innerText);
  console.log('BODY (first 800):', bodyText.substring(0, 800));
  console.log('ERRORS:', JSON.stringify(errors, null, 2));

  const state = await page.evaluate(() => {
    const s = (window as any).__gameStore?.getState?.() ?? {};
    return {
      transportVars: (s as any).transportVars,
      daystart: s.daystart,
      hour: s.hour,
      minut: s.minut,
      loc: s.loc,
      locArg: s.locArg,
    };
  });
  console.log('STATE:', JSON.stringify(state, null, 2));

  await browser.close();
})();
