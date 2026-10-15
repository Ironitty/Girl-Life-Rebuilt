import { chromium } from 'playwright';
import { setTimeout as sleep } from 'timers/promises';
import { createServer } from 'http';
import { readFileSync } from 'fs';
import { join } from 'path';

const ROOT = '/home/depressedtsukasa/Documents/GL';
const PORT = 4180;

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

async function getState(page: any) {
  return page.evaluate(`(function() {
    var s = window.__gameStore.getState();
    return { loc: s.loc, daystart: s.daystart, hour: s.hour, minut: s.minut, totminut: s.totminut, day: s.day, month: s.month, week: s.week, year: s.year };
  })()`);
}

// Seed hour/minut/daystart/totminut on the live state, run the 'time' rollover (enterDefault),
// and return the resulting time + date fields. totminut is set stale (0) so the rollover triggers.
async function runTime(page: any, hour: number, minut: number, daystart: number, staleTotminut: number) {
  return page.evaluate(`(function() {
    var s = window.__gameStore.getState();
    s.hour = ${hour}; s.minut = ${minut}; s.daystart = ${daystart}; s.totminut = ${staleTotminut};
    window.__qspCall(s, 'time', '');
    return { hour: s.hour, minut: s.minut, daystart: s.daystart, totminut: s.totminut, day: s.day, month: s.month, week: s.week, year: s.year };
  })()`);
}

async function clickButtonContaining(page: any, text: string): Promise<boolean> {
  return page.evaluate(`(function() {
    var btns = Array.from(document.querySelectorAll('button'));
    for (var b of btns) {
      if (b.textContent.indexOf(${JSON.stringify(text)}) !== -1) { b.click(); return true; }
    }
    return false;
  })()`);
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
    await page.goto(`http://localhost:${PORT}`, { waitUntil: 'networkidle' });
    await sleep(1500);

    // Quick start into the game so the live state has a valid date/NPC context.
    await page.keyboard.down('Shift');
    await page.keyboard.press('q');
    await page.keyboard.up('Shift');
    await sleep(2000);
    await page.evaluate(`(function(){ var b=Array.from(document.querySelectorAll('button')); for (var x of b){ if((x.textContent||'').indexOf('Quick Start')!==-1){ x.click(); return; } } })()`);
    const introLocs = ['begin', 'intro_start', 'intro_character_creation', 'intro_overview', 'intro_end', 'intro_game_start', 'intro_sg'];
    let reached = false;
    const qsStart = Date.now();
    while (Date.now() - qsStart < 20000) {
      const st = await getState(page);
      if (!introLocs.includes(st.loc) && st.loc !== '' && st.loc !== undefined) { reached = true; break; }
      await sleep(300);
    }
    await sleep(500);
    check('Reached a game location after Quick Start', reached, JSON.stringify(await getState(page)));
    const base = await getState(page);
    const D0 = base.daystart;

    // ---- 1. Minute rollover: 90 min at hour 0 -> hour 1, minut 30, same day ----
    const r1 = await runTime(page, 0, 90, D0, 0);
    check('Minute rollover: 90m -> hour 1', r1.hour === 1, JSON.stringify(r1));
    check('Minute rollover: 90m -> minut 30', r1.minut === 30, JSON.stringify(r1));
    check('Minute rollover: day unchanged', r1.daystart === D0, JSON.stringify(r1));
    check('Minute rollover: totminut consistent', r1.totminut === r1.minut + r1.hour * 60 + r1.daystart * 1440, JSON.stringify(r1));

    // ---- 2. Hour->day rollover: 23:90 -> next day 00:30 ----
    const r2 = await runTime(page, 23, 90, D0, 0);
    check('Day rollover: hour wraps to 0', r2.hour === 0, JSON.stringify(r2));
    check('Day rollover: minut 30', r2.minut === 30, JSON.stringify(r2));
    check('Day rollover: daystart +1', r2.daystart === D0 + 1, JSON.stringify(r2));
    check('Day rollover: totminut consistent', r2.totminut === r2.minut + r2.hour * 60 + r2.daystart * 1440, JSON.stringify(r2));

    // ---- 3. Exact day boundary: 23:60 -> next day 00:00 ----
    const r3 = await runTime(page, 23, 60, D0, 0);
    check('Exact day boundary: hour 0', r3.hour === 0, JSON.stringify(r3));
    check('Exact day boundary: minut 0', r3.minut === 0, JSON.stringify(r3));
    check('Exact day boundary: daystart +1', r3.daystart === D0 + 1, JSON.stringify(r3));

    // ---- 4. No-op when time is already consistent (totminut matches) ----
    const consistentTot = 5 * 60 + D0 * 1440 + 30;
    const r4 = await runTime(page, 5, 30, D0, consistentTot);
    check('No-op: hour unchanged when totminut consistent', r4.hour === 5, JSON.stringify(r4));
    check('No-op: minut unchanged', r4.minut === 30, JSON.stringify(r4));
    check('No-op: daystart unchanged', r4.daystart === D0, JSON.stringify(r4));

    // ---- 5. Multi-hour rollover: 20:150 (2.5h) -> next day 23:30 ----
    const r5 = await runTime(page, 20, 150, D0, 0);
    // 150 min = 2h30m. 20:00 + 2:30 = 22:30 same day. (No day wrap.)
    check('Multi-hour: 20:150 -> hour 22', r5.hour === 22, JSON.stringify(r5));
    check('Multi-hour: 20:150 -> minut 30', r5.minut === 30, JSON.stringify(r5));
    check('Multi-hour: day unchanged', r5.daystart === D0, JSON.stringify(r5));

    // ---- 6. Week consistency: the weekday formula is stable over 7 days ----
    const weekAt = (d: number) => page.evaluate(`(function(){ var s=window.__gameStore.getState(); s.daystart=${d}; window.__qspCall(s,'time','update_date'); return s.week; })()`);
    const wStart = await weekAt(D0);
    const wEnd = await weekAt(D0 + 7);
    check('Week consistency: same weekday 7 days apart', wStart === wEnd, `d=${D0} week=${wStart} vs d=${D0 + 7} week=${wEnd}`);
    const wNext = await weekAt(D0 + 1);
    const expectedNext = wStart === 7 ? 1 : wStart + 1;
    check('Week consistency: next day is next weekday', wNext === expectedNext, `d=${D0} week=${wStart}, d=${D0 + 1} week=${wNext}, expected=${expectedNext}`);

    // ---- 7. Month boundary: find a daystart whose next day starts a new month ----
    const dateAt = (d: number) => page.evaluate(`(function(){ var s=window.__gameStore.getState(); s.daystart=${d}; window.__qspCall(s,'time','update_date'); return { month: s.month, day: s.day, year: s.year }; })()`);
    let monthBoundary = -1;
    let mbBefore: any = null;
    for (let d = D0; d < D0 + 400; d++) {
      const m1 = await dateAt(d);
      const m2 = await dateAt(d + 1);
      if (m1.month !== m2.month) { monthBoundary = d; mbBefore = m1; break; }
    }
    check('Found a month boundary daystart', monthBoundary > 0, `scanned from ${D0}`);
    if (monthBoundary > 0) {
      const mb = await runTime(page, 23, 60, monthBoundary, 0);
      check('Month boundary: daystart advanced', mb.daystart === monthBoundary + 1, JSON.stringify(mb));
      check('Month boundary: month rolled to next', mb.month === mbBefore.month + 1 || (mbBefore.month === 12 && mb.month === 1), `before month=${mbBefore.month} after=${mb.month}`);
      check('Month boundary: day is 1 of new month', mb.day === 1, JSON.stringify(mb));
    }

    // ---- 8. Action-based time advance: QSP acts that do `minut += X` must advance time by exactly X ----
    // city_suburbs.qsps:26-28 define three always-available, deterministic navigation acts. The transpiled
    // handler does a raw `minut += X` (navigation does NOT recompute totminut — that only happens in
    // advanceTime / the time location's enter), so the correct measure is the raw `minut` delta, with
    // hour/daystart unchanged (these amounts cause no rollover from a seeded minut=0).
    const timeActions = [
      { label: 'Walk to the Metro', delta: 20, qsp: 'city_suburbs.qsps:27' },
      { label: 'Walk to the main road', delta: 15, qsp: 'city_suburbs.qsps:26' },
      { label: 'Walk to the bus station', delta: 5, qsp: 'city_suburbs.qsps:28' },
    ];
    const timeSnapshot = () => page.evaluate(`(function(){ var s=window.__gameStore.getState(); return { minut: s.minut, hour: s.hour, daystart: s.daystart }; })()`);
    for (const act of timeActions) {
      await page.evaluate(`(function() {
        var s = window.__gameStore.getState();
        s.hour = 10; s.minut = 0; s.daystart = ${D0}; s.totminut = 10*60 + ${D0}*1440;
        s.doGoto('city_suburbs', 'start');
      })()`);
      await sleep(1200);
      const before = await timeSnapshot();
      const clicked = await clickButtonContaining(page, act.label);
      await sleep(1200);
      const after = await timeSnapshot();
      check(`Action '${act.label}' (${act.qsp}) advances time by ${act.delta}`,
        clicked && after.minut - before.minut === act.delta && after.hour === before.hour && after.daystart === before.daystart,
        `clicked=${clicked} minut ${before.minut}->${after.minut} (delta ${after.minut - before.minut}), hour ${before.hour}->${after.hour}, daystart ${before.daystart}->${after.daystart}`);
    }

    if (errors.length > 0) {
      console.log('\nPage errors:', errors.length);
      errors.slice(0, 5).forEach(e => console.log('  -', e));
      check('No page errors during time advance', false, errors.slice(0, 3).join(' | '));
    } else {
      check('No page errors during time advance', true);
    }

    console.log(`\n=== TIME-ADVANCE TEST: ${passed} passed, ${failed} failed ===`);
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
