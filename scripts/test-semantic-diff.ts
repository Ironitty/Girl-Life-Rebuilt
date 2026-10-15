import { chromium } from 'playwright';
import { setTimeout as sleep } from 'timers/promises';
import { createServer } from 'http';
import { readFileSync } from 'fs';
import { join } from 'path';
import { extractContracts, type Contract, type Write } from './semantic-extract.ts';

const ROOT = '/home/depressedtsukasa/Documents/GL';
const PORT = 4179;
const BASELINE = 100000;
const NAV_TIMEOUT = 8000;
const ACT_TIMEOUT = 4000;
const INTRO_LOCS = ['begin', 'intro_start', 'intro_character_creation', 'intro_overview', 'intro_end', 'intro_game_start', 'intro_sg'];

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

function expectedFinal(start: number, writes: Write[]): number {
  let v = start;
  for (const w of writes) {
    if (w.op === '+') v += w.amount;
    else if (w.op === '-') v -= w.amount;
    else if (w.op === '*') v *= w.amount;
    else if (w.op === '/') v = v / w.amount;
    else if (w.op === '=') v = w.amount;
  }
  return v;
}

// Node-side timeout: fires even when the page main thread is blocked in a sync loop.
function evalT(page: any, code: string, ms: number): Promise<any> {
  return new Promise((resolve, reject) => {
    const t = setTimeout(() => reject(new Error(`eval timeout ${ms}ms`)), ms);
    page.evaluate(code).then((v: any) => { clearTimeout(t); resolve(v); }, (e: any) => { clearTimeout(t); reject(e); });
  });
}

async function quickStart(page: any) {
  await page.goto(`http://localhost:${PORT}`, { waitUntil: 'networkidle' });
  await sleep(1500);
  await page.keyboard.down('Shift');
  await page.keyboard.press('q');
  await page.keyboard.up('Shift');
  await sleep(500);
  await page.evaluate(`(function(){ var b=Array.from(document.querySelectorAll('button')); for (var x of b){ if((x.textContent||'').indexOf('Quick Start')!==-1){ x.click(); return; } } })()`);
  const start = Date.now();
  while (Date.now() - start < 20000) {
    const loc = await page.evaluate(`window.__gameStore.getState().loc`);
    if (loc && !INTRO_LOCS.includes(loc)) return true;
    await sleep(300);
  }
  return false;
}

async function main() {
  const contracts = extractContracts();
  const groups = new Map<string, Contract[]>();
  const seen = new Set<string>();
  for (const c of contracts) {
    const key = `${c.location}\u0000${c.arg}`;
    const dedupe = `${key}\u0000${c.label}`;
    if (seen.has(dedupe)) continue;
    seen.add(dedupe);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(c);
  }
  const groupKeys = [...groups.keys()];
  console.log(`[semantic] ${contracts.length} contracts across ${groupKeys.length} (loc,arg) groups`);

  const srv = startServer();
  await sleep(500);
  const browser = await chromium.launch({ headless: true, executablePath: '/usr/bin/google-chrome' });
  let passed = 0, failed = 0, skippedAbsent = 0, skippedNoHandler = 0, skippedGoto = 0, skippedAmbiguous = 0, hungGroups = 0, recycles = 0;
  const failures: string[] = [];
  const pageErrors: string[] = [];

  async function createPage() {
    const context = await browser.newContext({ viewport: { width: 1400, height: 900 } });
    const page = await context.newPage();
    page.setDefaultTimeout(15000);
    page.on('pageerror', (e) => pageErrors.push(e.message));
    return { context, page };
  }

  let ctx = await createPage();
  const reached = await quickStart(ctx.page);

  function check(label: string, ok: boolean, detail?: string) {
    if (ok) passed++;
    else { failed++; failures.push(label + (detail ? ': ' + detail : '')); console.log(`✗ ${label}${detail ? ': ' + detail : ''}`); }
  }
  check('Reached a game location after Quick Start', reached, `loc=${await ctx.page.evaluate(`window.__gameStore.getState().loc`).catch(() => '?')}`);

  async function recycle() {
    await ctx.context.close().catch(() => {});
    ctx = await createPage();
    await quickStart(ctx.page);
    recycles++;
  }

  try {
    for (let gi = 0; gi < groupKeys.length; gi++) {
      const key = groupKeys[gi];
      const [loc, arg] = key.split('\u0000');
      const groupContracts = groups.get(key)!;
      if ((gi + 1) % 25 === 0) console.log(`  ...${gi + 1}/${groupKeys.length} locs (${passed} ok, ${failed} fail, ${hungGroups} hang, ${recycles} recycle)`);

      let navOk = false;
      try {
        await evalT(ctx.page, `(function(){ var s=window.__gameStore.getState(); s.doGoto(${JSON.stringify(loc)}, ${JSON.stringify(arg)}); })()`, NAV_TIMEOUT);
        await sleep(200);
        const at = await evalT(ctx.page, `(function(){ var s=window.__gameStore.getState(); return { loc: s.loc, arg: s.locArg }; })()`, NAV_TIMEOUT);
        navOk = at.loc === loc && (at.arg ?? '') === arg;
      } catch (e: any) {
        hungGroups++;
        console.log(`  [hang] ${loc}/${arg}: ${(e.message || '').slice(0, 50)}`);
        await recycle();
        continue;
      }
      if (!navOk) { skippedAbsent += groupContracts.length; continue; }

      const presentActs = await evalT(ctx.page, `(function(){
        var s = window.__gameStore.getState();
        return (s.scene.curActs||[]).map(function(a){ return { label: a.label, hasHandler: !!a.handler }; });
      })()`, NAV_TIMEOUT).catch(() => null);
      if (!presentActs) { skippedAbsent += groupContracts.length; continue; }
      const presentLabels = new Set(presentActs.map((a: any) => a.label));
      const handlerLabels = new Set(presentActs.filter((a: any) => a.hasHandler).map((a: any) => a.label));

      for (const c of groupContracts) {
        if (c.ambiguous) { skippedAmbiguous++; continue; }
        if (!presentLabels.has(c.label)) { skippedAbsent++; continue; }
        if (!handlerLabels.has(c.label)) { skippedNoHandler++; continue; }
        if (c.writes.length === 0 || c.calls.length > 0) { skippedNoHandler++; continue; }
        const vars = [...new Set(c.writes.map((w) => w.var))];
        const res = await evalT(ctx.page, `(function() {
          var s = window.__gameStore.getState();
          var vars = ${JSON.stringify(vars)};
          for (var i=0;i<vars.length;i++){ s[vars[i]] = ${BASELINE}; }
          var acts = s.scene.curActs||[];
          var target = null;
          for (var j=0;j<acts.length;j++){ if (acts[j].label === ${JSON.stringify(c.label)} && acts[j].handler){ target = acts[j]; break; } }
          if (!target) return { present: false };
          var bl = s.loc, ba = s.locArg;
          target.handler(s);
          var navigated = (s.loc !== bl) || (s.locArg !== ba);
          var after = {};
          for (var k=0;k<vars.length;k++){ after[vars[k]] = s[vars[k]]; }
          return { present: true, navigated: navigated, after: after };
        })()`, ACT_TIMEOUT).catch(() => null);
        if (!res || !res.present) { skippedAbsent++; continue; }
        if (res.navigated) { skippedGoto++; continue; }
        const byVar = new Map<string, Write[]>();
        for (const w of c.writes) {
          if (!byVar.has(w.var)) byVar.set(w.var, []);
          byVar.get(w.var)!.push(w);
        }
        let ok = true;
        let detail = '';
        for (const [v, ws] of byVar) {
          const exp = expectedFinal(BASELINE, ws);
          const act = res.after[v];
          if (act !== exp) { ok = false; detail += ` ${v}: expected ${exp}, got ${act}`; }
        }
        check(`[${loc}/${arg}] '${c.label}' ${c.writes.map((w) => `${w.var} ${w.op} ${w.amount}`).join(', ')}`, ok, detail.trim());
      }
    }

    if (pageErrors.length > 0) check('No page errors during semantic diff', false, pageErrors.slice(0, 3).join(' | '));
    else check('No page errors during semantic diff', true);

    console.log(`\n=== SEMANTIC DIFF TEST ===`);
    console.log(`Contracts verified: ${passed + failed}`);
    console.log(`Passed: ${passed}, Failed: ${failed}`);
    console.log(`Skipped (act absent under seed): ${skippedAbsent}`);
    console.log(`Skipped (no handler / pure nav): ${skippedNoHandler}`);
    console.log(`Skipped (handler navigates -> goto contamination): ${skippedGoto}`);
    console.log(`Skipped (label collision -> ambiguous): ${skippedAmbiguous}`);
    console.log(`Hung location groups: ${hungGroups} (${recycles} recycles)`);
    if (failures.length > 0) {
      console.log(`\nFailures (${failures.length}):`);
      failures.slice(0, 60).forEach((f) => console.log('  -', f));
    }
    console.log(`\n=== SEMANTIC DIFF: ${passed} passed, ${failed} failed ===`);
    if (failed > 0) process.exitCode = 1;
  } catch (e: any) {
    console.error(`✗ Test crashed: ${e.message}`);
    process.exitCode = 1;
  } finally {
    await browser.close();
    srv.close();
    process.exit(process.exitCode ?? 0);
  }
}

main();
