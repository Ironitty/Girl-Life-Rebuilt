import { firefox } from 'playwright';
import { mkdirSync } from 'fs';
(async () => {
  const profileDir = '/tmp/ff-pw-profile';
  mkdirSync(profileDir, { recursive: true });
  const ctx = await firefox.launchPersistentContext(profileDir, { 
    executablePath: '/usr/bin/firefox', 
    headless: false,
    args: ['--no-remote'],
    viewport: { width: 1400, height: 900 }
  });
  const page = ctx.pages()[0] || await ctx.newPage();
  await page.goto('file:///home/depressedtsukasa/Documents/GL/index.html');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: '/tmp/ff-pw.png' });
  console.log('Screenshot saved');
  await ctx.close();
})().catch(e => { console.error(e.message); process.exit(1); });
