import { chromium } from 'playwright';
import { setTimeout as sleep } from 'timers/promises';
import { createServer } from 'http';
import { readFileSync } from 'fs';
import { join } from 'path';

const ROOT = '/home/depressedtsukasa/Documents/GL';
const PORT = 4185;

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
  srv.listen(PORT);
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
    if (ok) { passed++; console.log(`\u2713 ${label}`); }
    else { failed++; console.log(`\u2717 ${label}${detail ? ': ' + detail : ''}`); }
  }

  // Run qspEval on an expression with the live store state, after applying optional overrides.
  async function evalExpr(expr: string, overrides: Record<string, unknown> = {}) {
    return page.evaluate(`(function() {
      var s = window.__gameStore.getState();
      var ov = ${JSON.stringify(overrides)};
      for (var k in ov) {
        if (k.indexOf('.') !== -1) {
          var parts = k.split('.');
          var obj = s;
          for (var i = 0; i < parts.length - 1; i++) {
            if (typeof obj[parts[i]] !== 'object' || obj[parts[i]] === null) obj[parts[i]] = {};
            obj = obj[parts[i]];
          }
          obj[parts[parts.length - 1]] = ov[k];
        } else {
          s[k] = ov[k];
        }
      }
      return window.__qspEval(${JSON.stringify(expr)}, s);
    })()`);
  }

  try {
    await page.goto(`http://localhost:${PORT}`, { waitUntil: 'networkidle' });
    await sleep(1500);
    await page.keyboard.down('Shift');
    await page.keyboard.press('q');
    await page.keyboard.up('Shift');
    await sleep(2000);
    await page.evaluate(`(function(){ var b=Array.from(document.querySelectorAll('button')); for (var x of b){ if((x.textContent||'').indexOf('Quick Start')!==-1){ x.click(); return; } } })()`);
    await sleep(2500);
    check('qspEval is exposed in the page', await page.evaluate(`typeof window.__qspEval === 'function'`));

    // ---- 1. Equality: true branch ----
    let r = await evalExpr(`iif($sex_ev['loc'] = 'house_party', 'TRUE_BRANCH', 'FALSE_BRANCH')`, { 'sex_ev.loc': 'house_party' });
    check('Equality true -> true branch', r === 'TRUE_BRANCH', JSON.stringify(r));

    // ---- 2. Equality: false branch ----
    r = await evalExpr(`iif($sex_ev['loc'] = 'house_party', 'TRUE_BRANCH', 'FALSE_BRANCH')`, { 'sex_ev.loc': 'somewhere_else' });
    check('Equality false -> false branch', r === 'FALSE_BRANCH', JSON.stringify(r));

    // ---- 3. Nested iif ----
    r = await evalExpr(`iif($sex_ev['catch_breath'] = 1, iif($sex_ev['loc'] = 'house_party', 'A', 'B'), 'C')`, { 'sex_ev.catch_breath': 1, 'sex_ev.loc': 'house_party' });
    check('Nested iif resolves inner true', r === 'A', JSON.stringify(r));
    r = await evalExpr(`iif($sex_ev['catch_breath'] = 1, iif($sex_ev['loc'] = 'house_party', 'A', 'B'), 'C')`, { 'sex_ev.catch_breath': 1, 'sex_ev.loc': 'elsewhere' });
    check('Nested iif resolves inner false', r === 'B', JSON.stringify(r));
    r = await evalExpr(`iif($sex_ev['catch_breath'] = 1, iif($sex_ev['loc'] = 'house_party', 'A', 'B'), 'C')`, { 'sex_ev.catch_breath': 0, 'sex_ev.loc': 'house_party' });
    check('Nested iif outer false -> C', r === 'C', JSON.stringify(r));

    // ---- 4. Apostrophe + double-quote string (artem_katja_sex.ts:236) ----
    r = await evalExpr(`iif( katjaQW['QWstage'] = 5, 'You notice Katja's hesitation. "Why don't you get his cock out?"', 'Katja smiles.')`, { 'katjaQW.QWstage': 5 });
    check("Apostrophe string true branch", typeof r === 'string' && r.includes("Katja's hesitation") && r.includes("don't you get his cock out"), JSON.stringify(r));
    r = await evalExpr(`iif( katjaQW['QWstage'] = 5, 'You notice Katja's hesitation. "Why don't you get his cock out?"', 'Katja smiles.')`, { 'katjaQW.QWstage': 3 });
    check('Apostrophe string false branch', r === 'Katja smiles.', JSON.stringify(r));

    // ---- 5. ! inequality (sex_ev_dress_talking.ts:1136) ----
    r = await evalExpr(`iif($sex_ev['loc'] ! 'pc_home', 'NOT_HOME', 'IS_HOME')`, { 'sex_ev.loc': 'house_party' });
    check('! inequality true (loc != pc_home)', r === 'NOT_HOME', JSON.stringify(r));
    r = await evalExpr(`iif($sex_ev['loc'] ! 'pc_home', 'NOT_HOME', 'IS_HOME')`, { 'sex_ev.loc': 'pc_home' });
    check('! inequality false (loc == pc_home)', r === 'IS_HOME', JSON.stringify(r));

    // ---- 6. and / or ----
    r = await evalExpr(`iif($sex_ev['catch_breath'] = 1 and $sex_ev['loc'] = 'house_party', 'BOTH', 'NEITHER')`, { 'sex_ev.catch_breath': 1, 'sex_ev.loc': 'house_party' });
    check('and: both true -> BOTH', r === 'BOTH', JSON.stringify(r));
    r = await evalExpr(`iif($sex_ev['catch_breath'] = 1 and $sex_ev['loc'] = 'house_party', 'BOTH', 'NEITHER')`, { 'sex_ev.catch_breath': 1, 'sex_ev.loc': 'elsewhere' });
    check('and: one false -> NEITHER', r === 'NEITHER', JSON.stringify(r));
    r = await evalExpr(`iif($sex_ev['catch_breath'] = 1 or $sex_ev['loc'] = 'house_party', 'EITHER', 'NONE')`, { 'sex_ev.catch_breath': 0, 'sex_ev.loc': 'house_party' });
    check('or: one true -> EITHER', r === 'EITHER', JSON.stringify(r));

    // ---- 7. Arithmetic precedence ----
    r = await evalExpr(`iif(2 + 3 * 2 = 8, 'MATH_OK', 'MATH_BAD')`);
    check('Arithmetic 2+3*2=8', r === 'MATH_OK', JSON.stringify(r));
    r = await evalExpr(`iif((2 + 3) * 2 = 10, 'PAREN_OK', 'PAREN_BAD')`);
    check('Parenthesized (2+3)*2=10', r === 'PAREN_OK', JSON.stringify(r));
    r = await evalExpr(`iif(10 mod 3 = 1, 'MOD_OK', 'MOD_BAD')`);
    check('Modulo 10 mod 3 = 1', r === 'MOD_OK', JSON.stringify(r));

    // ---- 8. String concatenation ----
    r = await evalExpr(`iif(1 = 1, 'a' + 'b' + 'c', 'x')`);
    check('String concat abc', r === 'abc', JSON.stringify(r));

    // ---- 9. func() money can_afford (strela.ts:80) ----
    // Neutralize the price modifier and initialize karta/bankDebtLimit (undefined in
    // Quick Start state would make canAffordInner's 'both' branch NaN).
    r = await evalExpr(`iif(func('money', 'can_afford', 30000), 'AFFORD', 'CANT')`, { money: 999999, karta: 0, bankDebtLimit: 0, 'cfg_vars.neg_mult_opt': 0 });
    check('func money can_afford true (rich)', r === 'AFFORD', JSON.stringify(r));
    r = await evalExpr(`iif(func('money', 'can_afford', 30000), 'AFFORD', 'CANT')`, { money: 5, karta: 0, bankDebtLimit: 0, 'cfg_vars.neg_mult_opt': 0 });
    check('func money can_afford false (broke)', r === 'CANT', JSON.stringify(r));

    // ---- 10. stat record access (sex_ev_anal.ts:70) ----
    r = await evalExpr(`iif(stat['no_sex_swearing'] = 0, 'SWear', 'NoSwear')`, { 'stat.no_sex_swearing': 0 });
    check('stat record = 0 -> true branch', r === 'SWear', JSON.stringify(r));
    r = await evalExpr(`iif(stat['no_sex_swearing'] = 0, 'SWear', 'NoSwear')`, { 'stat.no_sex_swearing': 1 });
    check('stat record = 1 -> false branch', r === 'NoSwear', JSON.stringify(r));

    // ---- 11. rand deterministic ----
    r = await evalExpr(`iif(rand(1, 1) = 1, 'RAND_OK', 'RAND_BAD')`);
    check('rand(1,1)=1', r === 'RAND_OK', JSON.stringify(r));

    // ---- 12. not ----
    r = await evalExpr(`iif(not ($sex_ev['loc'] = 'pc_home'), 'NOT_OK', 'NOT_BAD')`, { 'sex_ev.loc': 'house_party' });
    check('not (false) -> true', r === 'NOT_OK', JSON.stringify(r));

    // ---- 13. Comparison < > ----
    r = await evalExpr(`iif(katjaQW['QWstage'] > 3 and katjaQW['QWstage'] < 10, 'RANGE_OK', 'RANGE_BAD')`, { 'katjaQW.QWstage': 5 });
    check('Range 3 < 5 < 10', r === 'RANGE_OK', JSON.stringify(r));

    // ---- 14. Parse failure returns raw expr (no crash) ----
    r = await evalExpr(`iif(, , )`);
    check('Malformed expr returns raw (no crash)', typeof r === 'string' && r.length > 0, JSON.stringify(r));

    if (errors.length > 0) {
      console.log('\nPage errors:', errors.length);
      errors.slice(0, 5).forEach(e => console.log('  -', e));
      check('No page errors during qspEval', false, errors.slice(0, 3).join(' | '));
    } else {
      check('No page errors during qspEval', true);
    }

    console.log(`\n=== QSP_EVAL BRANCH TEST: ${passed} passed, ${failed} failed ===`);
    if (failed > 0) process.exitCode = 1;
  } catch (e: any) {
    console.error(`\u2717 Test crashed: ${e.message}`);
    process.exitCode = 1;
  } finally {
    await browser.close();
    srv.close();
    process.exit(process.exitCode ?? 0);
  }
}

main();
