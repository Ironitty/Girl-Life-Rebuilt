import { chromium } from 'playwright';
import { setTimeout as sleep } from 'timers/promises';
import { createServer } from 'http';
import { readFileSync } from 'fs';
import { join } from 'path';

const ROOT = '/home/depressedtsukasa/Documents/GL';

function startServer() {
  const html = readFileSync(join(ROOT, 'dist', 'index.html'));
  const srv = createServer((req: any, res: any) => {
    if (req.url === '/' || req.url === '/index.html') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
    } else {
      try {
        const data = readFileSync(join(ROOT, 'public', req.url!));
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
  srv.listen(4174);
  return srv;
}

async function main() {
  const srv = startServer();
  await sleep(500);
  const browser = await chromium.launch({ headless: true, executablePath: '/usr/bin/google-chrome' });
  const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
  let passed = 0;
  let failed = 0;
  const errors: string[] = [];
  page.on('pageerror', (e) => errors.push(e.message));

  function check(label: string, ok: boolean, detail?: string) {
    if (ok) { passed++; console.log(`✓ ${label}`); }
    else { failed++; console.log(`✗ ${label}${detail ? ': ' + detail : ''}`); }
  }

  try {
    await page.goto('http://localhost:4174', { waitUntil: 'networkidle' });
    await sleep(500);

    async function clickBtn(text: string) {
      return page.evaluate((t: string) => {
        var btns = Array.from(document.querySelectorAll('button'));
        for (var b of btns) { if (b.textContent.trim() === t || b.textContent.includes(t)) { b.click(); return true; } }
        return false;
      }, text);
    }
    async function clickFirstBtn() {
      return page.evaluate(() => {
        var btns = Array.from(document.querySelectorAll('button'));
        if (btns.length > 0) { btns[0].click(); return true; }
        return false;
      });
    }

    await clickBtn('Start'); await sleep(1000);
    await clickBtn('Continue'); await sleep(1000);
    await clickBtn('Normal'); await sleep(1000);
    await clickBtn('Standard'); await sleep(1500);
    for (var i = 0; i < 10; i++) {
      var c = await clickBtn('Continue');
      if (!c) break;
      await sleep(1000);
    }
    await clickFirstBtn(); await sleep(1500);
    await clickFirstBtn(); await sleep(1500);
    await clickFirstBtn(); await sleep(1500);
    await clickFirstBtn(); await sleep(1500);
    var confirmed = await clickBtn('Confirm') || await clickBtn('Done') || await clickBtn('Start');
    if (!confirmed) {
      await page.evaluate(() => { var btns = Array.from(document.querySelectorAll('button')); if (btns.length > 0) btns[btns.length-1].click(); });
    }
    await sleep(2000);
    for (var i = 0; i < 5; i++) {
      var state = await page.evaluate(() => ({ bodyLen: document.body.innerHTML.length, loc: window.__gameStore.getState().loc }));
      if (state.bodyLen > 3000) break;
      var c2 = await clickBtn('Confirm') || await clickBtn('Done') || await clickBtn('Start') || await clickBtn('Continue');
      if (!c2) await clickFirstBtn();
      await sleep(1500);
    }

    // Setup: give player some owned items
    await page.evaluate(`(function() {
      var s = window.__gameStore.getState();
      s.cats_outfits = s.cats_outfits || {};
      s.cats_outfits[1] = 1;
      s.cats_outfits[2] = 1;
      s.shop_display_types = ['cats_outfits'];
    })()`);

    // Navigate to wardrobe list
    await page.evaluate(`(function() {
      window.__gameStore.getState().doGoto('clothing_view', 'view_list', 0);
    })()`);
    await sleep(3000);

    const before = await page.evaluate(`(function() {
      var s = window.__gameStore.getState();
      return { loc: s.loc, locArg: s.locArg, outfitfilter: s.outfitfilter, outfitfilter_check: s.outfitfilter_check };
    })()`);
    console.log('Before click:', JSON.stringify(before));
    check('Wardrobe list loaded', before.loc === 'clothing_view' && before.locArg === 'view_list', `loc=${before.loc}, arg=${before.locArg}`);
    check('outfitfilter_check populated', before.outfitfilter_check !== undefined, JSON.stringify(before.outfitfilter_check));

    // Find the filter button and check its onclick
    const btnInfo = await page.evaluate(`(function() {
      var imgs = Array.from(document.querySelectorAll('img[src*="prostitute"]'));
      if (imgs.length === 0) return { found: false };
      var img = imgs[0];
      var a = img.closest('a');
      if (!a) return { found: false, reason: 'no anchor' };
      return { found: true, src: img.src, onclick: a.getAttribute('onclick') };
    })()`);
    console.log('Button info:', JSON.stringify(btnInfo, null, 2));
    check('Filter button found', btnInfo.found === true, JSON.stringify(btnInfo));

    // Click the filter button
    const clicked = await page.evaluate(`(function() {
      var imgs = Array.from(document.querySelectorAll('img[src*="prostitute"]'));
      if (imgs.length === 0) return 'no img';
      var a = imgs[0].closest('a');
      if (!a) return 'no anchor';
      a.click();
      return 'clicked: ' + imgs[0].src;
    })()`);
    console.log('Click result:', clicked);
    await sleep(3000);

    const after = await page.evaluate(`(function() {
      var s = window.__gameStore.getState();
      return { loc: s.loc, locArg: s.locArg, outfitfilter: s.outfitfilter, outfitfilter_check: s.outfitfilter_check };
    })()`);
    console.log('After click:', JSON.stringify(after));

    check('Loc stayed clothing_view', after.loc === 'clothing_view', `loc=${after.loc}`);
    check('LocArg stayed view_list', after.locArg === 'view_list', `arg=${after.locArg}`);
    check('Filter set to 1', after.outfitfilter?.prostitution === 1, `filter=${JSON.stringify(after.outfitfilter)}`);
    check('outfitfilter_check updated', after.outfitfilter_check?.prostitution !== '1', `check=${JSON.stringify(after.outfitfilter_check)}`);

    if (errors.length > 0) {
      console.log('\nPage errors:', errors.length);
      errors.slice(0, 5).forEach(e => console.log('  -', e));
    }

    await page.screenshot({ path: '/tmp/opencode/filter-click-test.png', fullPage: true });
    console.log(`\n=== FILTER CLICK TEST: ${passed} passed, ${failed} failed ===`);
    if (failed > 0) process.exitCode = 1;
  } catch (e: any) {
    console.error(`✗ Test crashed: ${e.message}`);
    await page.screenshot({ path: '/tmp/opencode/filter-click-test-fail.png', fullPage: true }).catch(() => {});
    process.exitCode = 1;
  } finally {
    await browser.close();
    srv.close();
    process.exit(process.exitCode ?? 0);
  }
}

main();
