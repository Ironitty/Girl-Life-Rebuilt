import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ executablePath: '/snap/bin/chromium', args: ['--no-sandbox'] });
  const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
  const logs: string[] = [];
  page.on('console', (msg) => logs.push(msg.text()));
  page.on('pageerror', (err) => logs.push('PAGE ERROR: ' + err.message));

  await page.goto('http://localhost:4174', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);

  // Click through the new game pipeline
  await page.locator('button', { hasText: /^Start$/ }).click();
  await page.waitForTimeout(300);
  await page.locator('button', { hasText: 'Quick Start' }).click();
  await page.waitForTimeout(300);
  await page.locator('input[placeholder="Elena"]').first().fill('Test');
  await page.locator('button', { hasText: /^Continue$/ }).click();
  await page.waitForTimeout(300);
  await page.locator('button', { hasText: /^Continue$/ }).click();
  await page.waitForTimeout(300);
  await page.locator('button', { hasText: /End of August/ }).click();
  await page.waitForTimeout(300);
  await page.locator('button', { hasText: 'Pavlovsk' }).first().click();
  await page.waitForTimeout(300);
  await page.locator('button', { hasText: 'Popular' }).first().click();
  await page.waitForTimeout(300);
  await page.locator('button', { hasText: 'Sociable' }).first().click();
  await page.waitForTimeout(300);
  await page.locator('button', { hasText: /^Continue$/ }).click();
  await page.waitForTimeout(300);
  await page.locator('button', { hasText: 'Start Game' }).click();
  await page.waitForTimeout(1000);

  // Navigate to bdsm_ballroom:ballroom
  await page.evaluate(() => {
    const store = (window as any).__gameStore;
    const origRandom = Math.random;
    Math.random = () => 0;
    store.getState().doGoto('bdsm_ballroom', 'ballroom');
    Math.random = origRandom;
  });
  await page.waitForTimeout(500);

  const buttons = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('button')).map(b => b.textContent?.trim()).filter(Boolean);
  });
  console.log('Buttons on ballroom:', JSON.stringify(buttons));

  // Click "Go to the Foyer"
  await page.locator('button', { hasText: 'Go to the Foyer' }).first().click();
  await page.waitForTimeout(500);

  const afterClick = await page.evaluate(() => {
    const body = document.body.textContent ?? '';
    const store = (window as any).__gameStore;
    const s = store.getState();
    return {
      hasNoContent: body.includes('No content for this location'),
      loc: s.loc,
      locArg: s.locArg,
      navVersion: s.navigationVersion,
      sceneHasText: !!(s.scene && s.scene.mainText),
      sceneHasImage: !!(s.scene && s.scene.backimage),
      sceneActs: s.scene ? s.scene.curActs.length : -1,
      sceneTextSnippet: s.scene?.mainText?.substring(0, 200) ?? 'EMPTY',
      bodySnippet: body.substring(0, 500),
    };
  });
  console.log('After click:', JSON.stringify(afterClick, null, 2));
  const relevantLogs = logs.filter(l => !l.includes('404') && !l.includes('vite') && !l.includes('React DevTools') && !l.includes('Download'));
  if (relevantLogs.length) console.log('Console logs:', relevantLogs.join('\n'));

  await browser.close();
})();
