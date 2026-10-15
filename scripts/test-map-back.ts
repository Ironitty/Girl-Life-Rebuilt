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

async function getState(page: any) {
  return page.evaluate(`(function() {
    var s = window.__gameStore.getState();
    return { loc: s.loc, locArg: s.locArg, prevLoc: s.prevLoc, prevArg: s.prevArg, mapOriginLoc: s.mapOriginLoc, mapOriginArg: s.mapOriginArg };
  })()`);
}

async function getButtons(page: any): Promise<string[]> {
  return page.evaluate(`(function() {
    return Array.from(document.querySelectorAll('button')).map(function(b) { return b.textContent.trim(); });
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

  const ORIGIN = 'city_center';
  const ORIGIN_ARG = '';

  try {
    await page.goto('http://localhost:4174', { waitUntil: 'networkidle' });
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

    // Establish a real origin location
    await page.evaluate(`window.__gameStore.getState().doGoto(${JSON.stringify(ORIGIN)}, ${JSON.stringify(ORIGIN_ARG)})`);
    await sleep(1500);
    const atOrigin = await getState(page);
    check('At origin location city_center', atOrigin.loc === ORIGIN, JSON.stringify(atOrigin));

    // Path that clobbers prevLoc: origin -> area map -> world map
    await page.evaluate(`window.__gameStore.getState().doGoto('map_view', 'city_center')`);
    await sleep(1500);
    const atArea = await getState(page);
    check('On area map, mapOrigin set to origin', atArea.loc === 'map_view' && atArea.mapOriginLoc === ORIGIN, JSON.stringify(atArea));

    await page.evaluate(`window.__gameStore.getState().doGoto('map_view', 'world')`);
    await sleep(1500);
    const atWorld = await getState(page);
    check('On world map, prevLoc clobbered to map_view', atWorld.loc === 'map_view' && atWorld.locArg === 'world' && atWorld.prevLoc === 'map_view', JSON.stringify(atWorld));
    check('On world map, mapOrigin preserved', atWorld.mapOriginLoc === ORIGIN && atWorld.mapOriginArg === ORIGIN_ARG, JSON.stringify(atWorld));

    // Bottom "<- Back" should return to the origin, not the area map
    const clickedBottom = await clickButtonContaining(page, '<- Back');
    await sleep(1500);
    const afterBottom = await getState(page);
    check('Clicked bottom <- Back', clickedBottom);
    check('Bottom <- Back returns to origin', afterBottom.loc === ORIGIN && afterBottom.locArg === ORIGIN_ARG, JSON.stringify(afterBottom));

    // Re-navigate to the world map, then use the top bar "Back"
    await page.evaluate(`window.__gameStore.getState().doGoto('map_view', 'city_center')`);
    await sleep(1500);
    await page.evaluate(`window.__gameStore.getState().doGoto('map_view', 'world')`);
    await sleep(1500);
    const atWorld2 = await getState(page);
    check('Back on world map, mapOrigin still origin', atWorld2.loc === 'map_view' && atWorld2.mapOriginLoc === ORIGIN, JSON.stringify(atWorld2));

    const clickedTop = await clickButtonContaining(page, 'Back');
    await sleep(1500);
    const afterTop = await getState(page);
    check('Clicked top bar Back', clickedTop);
    check('Top bar Back returns to origin (not map)', afterTop.loc === ORIGIN && afterTop.locArg === ORIGIN_ARG, JSON.stringify(afterTop));

    if (errors.length > 0) {
      console.log('\nPage errors:', errors.length);
      errors.slice(0, 5).forEach(e => console.log('  -', e));
    }

    await page.screenshot({ path: '/tmp/opencode/map-back-test.png', fullPage: true });
    console.log(`\n=== MAP BACK TEST: ${passed} passed, ${failed} failed ===`);
    if (failed > 0) process.exitCode = 1;
  } catch (e: any) {
    console.error(`✗ Test crashed: ${e.message}`);
    await page.screenshot({ path: '/tmp/opencode/map-back-test-fail.png', fullPage: true }).catch(() => {});
    process.exitCode = 1;
  } finally {
    await browser.close();
    srv.close();
    process.exit(process.exitCode ?? 0);
  }
}

main();
