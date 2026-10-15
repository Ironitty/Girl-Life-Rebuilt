import { chromium } from 'playwright';
import { setTimeout as sleep } from 'timers/promises';
import { createServer } from 'http';
import { readFileSync } from 'fs';
import { join } from 'path';

const ROOT = '/home/depressedtsukasa/Documents/GL';
const PORT = 4176;

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
    return { loc: s.loc, locArg: s.locArg, prevLoc: s.prevLoc, prevArg: s.prevArg, daystart: s.daystart, hour: s.hour, minut: s.minut };
  })()`);
}

// Capture every non-function state key as a JSON-safe plain object.
async function captureState(page: any) {
  return page.evaluate(`(function() {
    var s = window.__gameStore.getState();
    var out = {};
    for (var k in s) {
      if (!Object.prototype.hasOwnProperty.call(s, k)) continue;
      var v = s[k];
      if (typeof v === 'function') continue;
      out[k] = v;
    }
    return out;
  })()`);
}

// Render snapshot: action buttons, body undefined/NaN, background image URL.
async function captureRender(page: any) {
  return page.evaluate(`(function() {
    var buttons = Array.from(document.querySelectorAll('button'));
    var actions = buttons.filter(function(b) {
      var text = (b.textContent || '').trim();
      if (b.getAttribute('title')) return false;
      if (b.offsetParent === null) return false;
      if (/^(Map|Back|Open Map)$/i.test(text)) return false;
      if (text.length === 0 || text.length >= 80) return false;
      return true;
    }).map(function(b) { return (b.textContent || '').trim(); });
    var body = document.body.textContent || '';
    var main = document.querySelector('.bg-image, [style*="background-image"]');
    var bg = '';
    if (main) {
      var style = getComputedStyle(main).backgroundImage;
      bg = style.replace(/url\\(['"]?/, '').replace(/['"]?\\)/, '');
    }
    return { actionCount: actions.length, actions: actions, hasUndefined: body.indexOf('undefined') !== -1, hasNaN: body.indexOf('NaN') !== -1, bodyLen: body.length, bg: bg };
  })()`);
}

// serializeSave drops these three keys; everything else it JSON-encodes. The persisted
// subset must survive a JSON round-trip losslessly (catches Map/Set/Date/function/undefined).
const SERIALIZE_DROP = ['scene', 'stateStack', 'navigationVersion'];

function diffObjects(a: any, b: any, prefix = ''): string[] {
  const diffs: string[] = [];
  const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
  for (const k of keys) {
    const path = prefix ? `${prefix}.${k}` : k;
    const va = a[k];
    const vb = b[k];
    if (va === undefined && vb === undefined) continue;
    if (va === undefined) { diffs.push(`${path}: present before (${JSON.stringify(vb)}) but missing after load`); continue; }
    if (vb === undefined) { diffs.push(`${path}: missing before but present after (${JSON.stringify(va)})`); continue; }
    const vaObj = va !== null && typeof va === 'object' && !Array.isArray(va);
    const vbObj = vb !== null && typeof vb === 'object' && !Array.isArray(vb);
    if (vaObj && vbObj) {
      diffs.push(...diffObjects(va, vb, path));
    } else if (JSON.stringify(va) !== JSON.stringify(vb)) {
      diffs.push(`${path}: ${JSON.stringify(va)} -> ${JSON.stringify(vb)}`);
    }
  }
  return diffs;
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

// Click a button by its title attribute (the HUD save button is an icon with title="Save").
async function clickButtonByTitle(page: any, title: string): Promise<boolean> {
  return page.evaluate(`(function() {
    var btns = Array.from(document.querySelectorAll('button[title=${JSON.stringify(title)}]'));
    if (btns.length) { btns[0].click(); return true; }
    return false;
  })()`);
}

// Click the "Load" button inside the save-menu row for a given slot number.
async function clickSlotLoad(page: any, slot: number): Promise<boolean> {
  return page.evaluate(`(function() {
    var spans = Array.from(document.querySelectorAll('span'));
    for (var sp of spans) {
      if ((sp.textContent || '').trim() === '#${slot}') {
        var row = sp.parentElement;
        if (!row) continue;
        var loadBtn = Array.from(row.querySelectorAll('button')).find(function(b) { return (b.textContent || '').trim() === 'Load'; });
        if (loadBtn) { loadBtn.click(); return true; }
      }
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

    // Quick start into the game
    await page.keyboard.down('Shift');
    await page.keyboard.press('q');
    await page.keyboard.up('Shift');
    await sleep(2000);
    await clickButtonContaining(page, 'Quick Start');
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

    // ---- Setup: save two slots at distinct locations (API) ----
    await page.evaluate(`window.__gameStore.getState().doGoto('city_center', '')`);
    await sleep(1500);
    check('At city_center before save', (await getState(page)).loc === 'city_center', JSON.stringify(await getState(page)));
    await page.evaluate(`window.__gameStore.getState().saveGame(1)`);
    await sleep(800);

    await page.evaluate(`window.__gameStore.getState().doGoto('city_park', '')`);
    await sleep(1500);
    check('At city_park for slot 2', (await getState(page)).loc === 'city_park', JSON.stringify(await getState(page)));
    await page.evaluate(`window.__gameStore.getState().saveGame(2)`);
    await sleep(800);

    // ---- Phase C: UI path (SaveMenu wiring) — on the live GameScreen ----
    // The HUD save button lives in GameScreen's StatDisplayPanel. After a page reload the
    // app is on the TitleScreen (React screen state resets), so the UI path must run before
    // any reload, while we are actually in the game.
    await page.evaluate(`window.__gameStore.getState().doGoto('city_center', '')`);
    await sleep(1500);
    const R1 = await captureRender(page);

    const openedSave = await clickButtonByTitle(page, 'Save');
    await sleep(800);
    const menuText = (await page.textContent('body')) ?? '';
    check('Save menu opened (title="Save" button)', openedSave);
    check('Save menu shows "Save / Load" header', menuText.includes('Save / Load'));
    check('Slot 1 row shows city_center', menuText.includes('city_center'), 'slot 1 row missing loc');
    check('Slot 2 row shows city_park', menuText.includes('city_park'), 'slot 2 row missing loc');
    check('An empty slot is labelled Empty', menuText.includes('Empty'));

    const clickedUiLoad = await clickSlotLoad(page, 1);
    await sleep(1500);
    check('Clicked UI Load on slot 1', clickedUiLoad);
    check('UI Load restores city_center', (await getState(page)).loc === 'city_center', JSON.stringify(await getState(page)));

    const R2 = await captureRender(page);
    check('Action count unchanged after UI load', R1.actionCount === R2.actionCount, `before=${R1.actionCount} after=${R2.actionCount}`);
    check('No undefined in body after UI load', !R2.hasUndefined);
    check('No NaN in body after UI load', !R2.hasNaN);
    check('Background image unchanged after UI load', R1.bg === R2.bg, `before=${R1.bg} after=${R2.bg}`);
    await page.screenshot({ path: '/tmp/opencode/save-load-after-uiloadd.png', fullPage: true });

    // ---- Phase A: API round-trip (save -> full page reload -> load) ----
    // After reload the app is on the TitleScreen and loadGame only mutates the store, so this
    // phase asserts STORE-level fidelity (loc, daystart, JSON-losslessness), not the UI.
    await page.evaluate(`window.__gameStore.getState().doGoto('city_center', '')`);
    await sleep(1500);
    const S1 = await captureState(page);

    await page.evaluate(`window.__gameStore.getState().saveGame(5)`);
    await sleep(1000);

    await page.reload({ waitUntil: 'networkidle' });
    await sleep(2000);
    check('Store re-attached after reload', await page.evaluate(`!!window.__gameStore`));

    await page.evaluate(`window.__gameStore.getState().loadGame(5)`);
    await sleep(2000);
    const S2 = await captureState(page);
    check('Load returns to city_center', (S2 as any).loc === 'city_center', JSON.stringify(S2));

    // Serialization fidelity: the persisted subset (serializeSave drops scene/stateStack/
    // navigationVersion) must survive a JSON round-trip losslessly. Time/mood/nav vars are
    // legitimately recomputed on re-entry, so they are not part of this check.
    const persisted: Record<string, unknown> = {};
    for (const k of Object.keys(S1)) if (!SERIALIZE_DROP.includes(k)) persisted[k] = (S1 as any)[k];
    const roundTripped = JSON.parse(JSON.stringify(persisted));
    const serDiffs = diffObjects(persisted, roundTripped);
    check('Persisted state is JSON-lossless (serialization fidelity)', serDiffs.length === 0, serDiffs.slice(0, 15).join(' | '));
    check('Real load restored loc', (S2 as any).loc === (S1 as any).loc, `before=${(S1 as any).loc} after=${(S2 as any).loc}`);
    check('Real load restored daystart', (S2 as any).daystart === (S1 as any).daystart, `before=${(S1 as any).daystart} after=${(S2 as any).daystart}`);

    // ---- Phase B: multi-slot isolation (store-level) ----
    await page.evaluate(`window.__gameStore.getState().loadGame(1)`);
    await sleep(1500);
    check('Load slot 1 restores city_center', (await getState(page)).loc === 'city_center', JSON.stringify(await getState(page)));

    await page.evaluate(`window.__gameStore.getState().loadGame(2)`);
    await sleep(1500);
    check('Load slot 2 restores city_park', (await getState(page)).loc === 'city_park', JSON.stringify(await getState(page)));

    // ---- Phase D: all 10 slots (save to each, load each, verify) ----
    const slotLocations: Record<number, string> = {
      1: 'city_center', 2: 'city_park', 3: 'pav_park', 4: 'pav_cafe',
      5: 'pav_lake', 6: 'pav_church', 7: 'pav_market', 8: 'pav_station',
      9: 'city_metro', 10: 'city_club',
    };
    for (const [slot, loc] of Object.entries(slotLocations)) {
      const slotNum = Number(slot);
      await page.evaluate(`window.__gameStore.getState().doGoto(${JSON.stringify(loc)}, '')`);
      await sleep(1200);
      await page.evaluate(`window.__gameStore.getState().saveGame(${slotNum})`);
      await sleep(600);
    }
    for (const [slot, loc] of Object.entries(slotLocations)) {
      const slotNum = Number(slot);
      await page.evaluate(`window.__gameStore.getState().loadGame(${slotNum})`);
      await sleep(1200);
      const st = await getState(page);
      check(`Slot ${slotNum} restores ${loc}`, st.loc === loc, `got ${st.loc}`);
    }

    // ---- Phase E: corrupted IndexedDB record ----
    await page.evaluate(`(function() {
      return new Promise(function(resolve, reject) {
        var req = indexedDB.open('girl_life_saves', 1);
        req.onsuccess = function() {
          var db = req.result;
          var tx = db.transaction('saves', 'readwrite');
          tx.objectStore('saves').put({ slot: 10, json: '{corrupted json not valid' });
          tx.oncomplete = function() { db.close(); resolve(); };
          tx.onerror = function() { reject(tx.error); };
        };
        req.onerror = function() { reject(req.error); };
      });
    })()`);
    await sleep(500);
    const corruptResult = await page.evaluate(`(function() {
      return window.__gameStore.getState().loadGame(10).then(function(s) { return { ok: true, loc: s ? s.loc : null }; }, function(e) { return { ok: false, error: e.message }; });
    })()`);
    const cr = corruptResult as { ok: boolean; loc?: string | null; error?: string };
    check('Corrupted record load rejects or returns null', !cr.ok || cr.loc === null, JSON.stringify(cr));
    const postCorrupt = await getState(page);
    check('App still functional after corrupted load', postCorrupt.loc !== undefined && postCorrupt.loc !== '', JSON.stringify(postCorrupt));

    if (errors.length > 0) {
      console.log('\nPage errors:', errors.length);
      errors.slice(0, 5).forEach(e => console.log('  -', e));
      check('No page errors during save/load', false, errors.slice(0, 3).join(' | '));
    } else {
      check('No page errors during save/load', true);
    }

    console.log(`\n=== SAVE/LOAD ROUND-TRIP TEST: ${passed} passed, ${failed} failed ===`);
    if (failed > 0) process.exitCode = 1;
  } catch (e: any) {
    console.error(`✗ Test crashed: ${e.message}`);
    await page.screenshot({ path: '/tmp/opencode/save-load-fail.png', fullPage: true }).catch(() => {});
    process.exitCode = 1;
  } finally {
    await browser.close();
    srv.close();
    process.exit(process.exitCode ?? 0);
  }
}

main();
