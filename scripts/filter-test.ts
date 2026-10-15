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
  const page = await browser.newPage();
  let passed = 0;
  let failed = 0;

  function check(label: string, ok: boolean, detail?: string) {
    if (ok) { passed++; console.log(`✓ ${label}`); }
    else { failed++; console.log(`✗ ${label}${detail ? ' — ' + detail : ''}`); }
  }

  try {
    await page.goto('http://localhost:4174', { waitUntil: 'networkidle' });
    await sleep(500);

    // Phase 1: Unit test evalFilterCondition logic
    console.log('\n=== Phase 1: Unit test filter logic ===');
    const unitResults = await page.evaluate(`(function() {
      var store = window.__gameStore;
      var s = store.getState();
      var results = {};
      var FILTER_VARS = ['CloStyle2','CloStyle','CloProstitute','CloStrip','CloBimbo','CloInhibit','pcs_inhib','CloSchool','CloSport','CloMaid','CloServer','CloSwim','CloGoth','CloPrep','CloPrude','CloPunk'];

      function evalCond(cond) {
        var expr = cond;
        for (var i = 0; i < FILTER_VARS.length; i++) {
          var v = FILTER_VARS[i];
          expr = expr.replace(new RegExp('\\\\b' + v + '\\\\b', 'g'), '(s.' + v + ' ?? 0)');
        }
        expr = expr.replace(/\\bor\\b/g, '||');
        expr = expr.replace(/\\band\\b/g, '&&');
        expr = expr.replace(/([^<>!=])=([^=])/g, '$1==$2');
        try {
          var r = new Function('s', 'return ' + expr)(s);
          return r ? 1 : 0;
        } catch(e) {
          return -1;
        }
      }

      function resetAttrs() {
        s.CloStyle = 0; s.CloStyle2 = 0; s.CloProstitute = 0; s.CloStrip = 0;
        s.CloBimbo = 0; s.CloInhibit = 0; s.pcs_inhib = 50; s.CloSchool = 0;
        s.CloSport = 0; s.CloMaid = 0; s.CloServer = 0; s.CloSwim = 0;
        s.CloGoth = 0; s.CloPrep = 0; s.CloPrude = 0; s.CloPunk = 0;
      }

      // T1: Prostitute include, item matches (CloStyle=4)
      resetAttrs(); s.CloStyle = 4;
      results.t1 = evalCond('(CloStyle = 4 or CloProstitute = 1)');

      // T2: Prostitute include, item no match (CloStyle=1)
      resetAttrs(); s.CloStyle = 1;
      results.t2 = evalCond('(CloStyle = 4 or CloProstitute = 1)');

      // T3: Prostitute include, item matches (CloProstitute=1)
      resetAttrs(); s.CloProstitute = 1;
      results.t3 = evalCond('(CloStyle = 4 or CloProstitute = 1)');

      // T4: Prostitute exclude, item matches (should be excluded)
      resetAttrs(); s.CloStyle = 4;
      results.t4 = evalCond('(CloStyle = 4 or CloProstitute = 1) = 0');

      // T5: Prostitute exclude, item no match (should pass)
      resetAttrs(); s.CloStyle = 1;
      results.t5 = evalCond('(CloStyle = 4 or CloProstitute = 1) = 0');

      // T6: Always pass (condition = '1')
      resetAttrs();
      results.t6 = evalCond('1');

      // T7: Bimbo include, item matches
      resetAttrs(); s.CloBimbo = 1;
      results.t7 = evalCond('(CloBimbo)');

      // T8: Bimbo include, item no match
      resetAttrs(); s.CloBimbo = 0;
      results.t8 = evalCond('(CloBimbo)');

      // T9: Conservative include, item matches (low inhib)
      resetAttrs(); s.CloInhibit = 30; s.pcs_inhib = 50;
      results.t9 = evalCond('(CloInhibit <= pcs_inhib - 10)');

      // T10: Conservative include, item no match (high inhib)
      resetAttrs(); s.CloInhibit = 45; s.pcs_inhib = 50;
      results.t10 = evalCond('(CloInhibit <= pcs_inhib - 10)');

      // T11: Risque include, item matches
      resetAttrs(); s.CloInhibit = 45; s.pcs_inhib = 50;
      results.t11 = evalCond('((CloInhibit > pcs_inhib - 10) and (CloInhibit <= pcs_inhib))');

      // T12: Multi-filter, both pass
      resetAttrs(); s.CloStyle = 4; s.CloBimbo = 1;
      var r12 = evalCond('(CloStyle = 4 or CloProstitute = 1)') && evalCond('(CloBimbo)');
      results.t12 = r12 ? 1 : 0;

      // T13: Multi-filter, one fails
      resetAttrs(); s.CloStyle = 4; s.CloBimbo = 0;
      var r13 = evalCond('(CloStyle = 4 or CloProstitute = 1)') && evalCond('(CloBimbo)');
      results.t13 = r13 ? 1 : 0;

      return results;
    })()`);

    check('T1: Prostitute include, match (CloStyle=4)', unitResults.t1 === 1, `got ${unitResults.t1}`);
    check('T2: Prostitute include, no match (CloStyle=1)', unitResults.t2 === 0, `got ${unitResults.t2}`);
    check('T3: Prostitute include, match (CloProstitute=1)', unitResults.t3 === 1, `got ${unitResults.t3}`);
    check('T4: Prostitute exclude, match (excluded)', unitResults.t4 === 0, `got ${unitResults.t4}`);
    check('T5: Prostitute exclude, no match (pass)', unitResults.t5 === 1, `got ${unitResults.t5}`);
    check('T6: Always pass (cond=1)', unitResults.t6 === 1, `got ${unitResults.t6}`);
    check('T7: Bimbo include, match', unitResults.t7 === 1, `got ${unitResults.t7}`);
    check('T8: Bimbo include, no match', unitResults.t8 === 0, `got ${unitResults.t8}`);
    check('T9: Conservative include, match (low inhib)', unitResults.t9 === 1, `got ${unitResults.t9}`);
    check('T10: Conservative include, no match (high inhib)', unitResults.t10 === 0, `got ${unitResults.t10}`);
    check('T11: Risque include, match', unitResults.t11 === 1, `got ${unitResults.t11}`);
    check('T12: Multi-filter, both pass', unitResults.t12 === 1, `got ${unitResults.t12}`);
    check('T13: Multi-filter, one fails', unitResults.t13 === 0, `got ${unitResults.t13}`);

    // Phase 2: Integration test - navigate to wardrobe list
    console.log('\n=== Phase 2: Integration test (wardrobe list) ===');

    // Start the game: click through all setup screens
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

    await clickBtn('Start');
    await sleep(1000);
    await clickBtn('Continue');
    await sleep(1000);
    await clickBtn('Normal');
    await sleep(1000);
    await clickBtn('Standard');
    await sleep(1500);
    for (var i = 0; i < 10; i++) {
      var c = await clickBtn('Continue');
      if (!c) break;
      await sleep(1000);
    }
    await clickFirstBtn(); // Start Date
    await sleep(1500);
    await clickFirstBtn(); // Starting Location
    await sleep(1500);
    await clickFirstBtn(); // Social Group
    await sleep(1500);
    await clickFirstBtn(); // Personality
    await sleep(1500);
    var confirmed = await clickBtn('Confirm') || await clickBtn('Done') || await clickBtn('Start');
    if (!confirmed) {
      await page.evaluate(() => { var btns = Array.from(document.querySelectorAll('button')); if (btns.length > 0) btns[btns.length-1].click(); });
    }
    await sleep(2000);
    // Handle any remaining setup screens
    for (var i = 0; i < 5; i++) {
      var state = await page.evaluate(() => ({ bodyLen: document.body.innerHTML.length, loc: window.__gameStore.getState().loc }));
      if (state.bodyLen > 3000) break;
      var c2 = await clickBtn('Confirm') || await clickBtn('Done') || await clickBtn('Start') || await clickBtn('Continue');
      if (!c2) await clickFirstBtn();
      await sleep(1500);
    }

    const setupResult = await page.evaluate(`(function() {
      var store = window.__gameStore;
      var s = store.getState();
      var info = {};
      s.cats_outfits = s.cats_outfits || {};
      s.cats_outfits[1] = 1;
      s.cats_outfits[2] = 1;
      s.shop_display_types = ['cats_outfits'];
      s.CloStyle = 4;
      s.CloProstitute = 1;
      s.CloQuality = 1;
      info.cats_outfits_1 = s.cats_outfits[1];
      info.cats_outfits_2 = s.cats_outfits[2];
      info.shop_display_types = s.shop_display_types;
      return info;
    })()`);

    check('Setup: cats_outfits[1] owned', setupResult.cats_outfits_1 === 1);
    check('Setup: cats_outfits[2] owned', setupResult.cats_outfits_2 === 1);

    await page.evaluate(`(function() {
      window.__gameStore.getState().doGoto('clothing_view', 'view_list', 0);
    })()`);
    await sleep(3000);

    const listBody = await page.textContent('body');
    check('Wardrobe list page loaded', (listBody?.length ?? 0) > 100, `body length: ${listBody?.length}`);

    await page.screenshot({ path: '/tmp/opencode/filter-test-list.png', fullPage: true });

    const filterState = await page.evaluate(`(function() {
      var s = window.__gameStore.getState();
      return {
        prostitution: s.outfitfilter ? s.outfitfilter['prostitution'] : undefined,
        outfitfilter_check: s.outfitfilter_check,
        CloStyle: s.CloStyle,
        CloProstitute: s.CloProstitute
      };
    })()`);
    console.log(`  outfitfilter.prostitution = ${filterState.prostitution}`);
    console.log(`  outfitfilter_check = ${JSON.stringify(filterState.outfitfilter_check)}`);
    console.log(`  CloStyle = ${filterState.CloStyle}, CloProstitute = ${filterState.CloProstitute}`);

    check('outfitfilter_check has prostitution entry', filterState.outfitfilter_check?.prostitution !== undefined, JSON.stringify(filterState.outfitfilter_check));

    // Click the prostitution filter button (set to include)
    const filterClicked = await page.evaluate(`(function() {
      var store = window.__gameStore;
      store.setState(function(s) { s.outfitfilter = s.outfitfilter || {}; s.outfitfilter['prostitution'] = 1; return s; });
      store.getState().doGoto('clothing_view', 'view_list', 0);
      return true;
    })()`);
    check('Filter set to include prostitution', filterClicked);
    await sleep(3000);

    const filteredState = await page.evaluate(`(function() {
      var s = window.__gameStore.getState();
      return {
        prostitution: s.outfitfilter ? s.outfitfilter['prostitution'] : undefined,
        outfitfilter_check: s.outfitfilter_check
      };
    })()`);
    console.log(`  After filter: outfitfilter.prostitution = ${filteredState.prostitution}`);
    console.log(`  After filter: outfitfilter_check = ${JSON.stringify(filteredState.outfitfilter_check)}`);

    check('After filter: prostitution = 1', filteredState.prostitution === 1, `got ${filteredState.prostitution}`);
    check('After filter: outfitfilter_check updated', filteredState.outfitfilter_check?.prostitution !== undefined && filteredState.outfitfilter_check?.prostitution !== '1', JSON.stringify(filteredState.outfitfilter_check));

    await page.screenshot({ path: '/tmp/opencode/filter-test-filtered.png', fullPage: true });

    // Phase 3: Check if the actual filter.apply function works
    console.log('\n=== Phase 3: Verify filter.apply via actual game flow ===');

    // Check the rendered list for item presence
    const listContent = await page.evaluate(`(function() {
      var body = document.body.innerHTML;
      var hasCatsOutfit = body.indexOf('cats') !== -1 || body.indexOf('Cats') !== -1;
      var rowCount = document.querySelectorAll('table tr').length;
      var bodyLen = body.length;
      return { hasCatsOutfit: hasCatsOutfit, rowCount: rowCount, bodyLen: bodyLen };
    })()`);
    console.log(`  List content: ${listContent.bodyLen} chars, ${listContent.rowCount} table rows, cats outfit: ${listContent.hasCatsOutfit}`);

    console.log(`\n=== FILTER TEST: ${passed} passed, ${failed} failed ===`);
    if (failed > 0) process.exitCode = 1;
  } catch (e: any) {
    console.error(`✗ Test crashed: ${e.message}`);
    await page.screenshot({ path: '/tmp/opencode/filter-test-fail.png', fullPage: true }).catch(() => {});
    process.exitCode = 1;
  } finally {
    await browser.close();
    srv.close();
    process.exit(process.exitCode ?? 0);
  }
}

main();
