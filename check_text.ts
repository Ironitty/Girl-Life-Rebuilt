import { chromium } from 'playwright';
import * as fs from 'fs';
import * as path from 'path';

// Load and evaluate TEST_STATE in Node (TS-aware)
const auditContent = fs.readFileSync('/home/depressedtsukasa/Documents/GL/scripts/comprehensive-audit.ts', 'utf8');
const testStateMatch = auditContent.match(/const TEST_STATE: Record<string, unknown> = \{[\s\S]*?\n\};/);
if (!testStateMatch) throw new Error('TEST_STATE not found');
const testStateCode = testStateMatch[0].replace('const TEST_STATE: Record<string, unknown> = ', '').replace(/;\s*$/, '');
// Strip TS type annotations for eval
const jsCode = testStateCode
  .replace(/ as Record<string, string>/g, '')
  .replace(/ as Record<string, number>/g, '')
  .replace(/ as string\[\]/g, '')
  .replace(/ as number\[\]/g, '');
const TEST_STATE = eval('(' + jsCode + ')');
const testStateJson = JSON.stringify(TEST_STATE);

async function main() {
  const browser = await chromium.launch({ executablePath: '/opt/google/chrome/chrome' });
  const page = await browser.newPage();
  const errors: string[] = [];
  page.on('pageerror', (e) => errors.push(e.message));
  await page.goto('http://localhost:4174', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  await page.click('button:has-text("Start")');
  await page.waitForTimeout(500);
  await page.click('button:has-text("Quick Start")');
  await page.waitForTimeout(1000);

  await page.evaluate((tsJson) => {
    const TEST_STATE = JSON.parse(tsJson);
    const store = (window as any).__gameStore;
    const st = store.getState();
    for (const [k, v] of Object.entries(TEST_STATE)) (st as any)[k] = v;
    store.getState().doGoto('item_cart', 'cancel');
  }, testStateJson);
  await page.waitForTimeout(500);

  const bodyText = await page.evaluate(() => document.body.textContent || '');
  const undefinedIdx = bodyText.indexOf('undefined');
  console.log('=== UNDEFINED AT INDEX:', undefinedIdx);
  if (undefinedIdx >= 0) {
    console.log('=== CONTEXT ===');
    console.log(bodyText.slice(Math.max(0, undefinedIdx - 300), undefinedIdx + 300));
  }
  console.log('=== ERRORS ===');
  console.log(errors.join('\n') || 'none');
  await browser.close();
  process.exit(0);
}
main().catch(console.error);
