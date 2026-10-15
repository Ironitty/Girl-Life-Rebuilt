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

async function getLoc(page: any) {
  return page.evaluate(`(function() {
    var s = window.__gameStore.getState();
    return { loc: s.loc, locArg: s.locArg };
  })()`);
}

async function getButtons(page: any): Promise<string[]> {
  return page.evaluate(`(function() {
    var btns = Array.from(document.querySelectorAll('button'));
    return btns.map(function(b) { return b.textContent.trim(); });
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
    await page.goto('http://localhost:4174', { waitUntil: 'networkidle' });
    await sleep(1500);

    // Step 1: Press Shift+Q on TitleScreen to jump to game screen
    await page.keyboard.down('Shift');
    await page.keyboard.press('q');
    await page.keyboard.up('Shift');
    await sleep(2000);

    const afterQS = await getLoc(page);
    const afterQSBtns = await getButtons(page);
    console.log('After Shift+Q loc:', JSON.stringify(afterQS));
    console.log('After Shift+Q buttons:', JSON.stringify(afterQSBtns));

    // Step 2: Navigate to begin:warning
    await page.evaluate(`window.__gameStore.getState().doGoto('begin', 'warning')`);
    await sleep(1500);

    const warnState = await getLoc(page);
    const warnBtns = await getButtons(page);
    console.log('At warning:', JSON.stringify(warnState));
    console.log('Warning buttons:', JSON.stringify(warnBtns));

    check('On begin:warning', warnState.loc === 'begin' && warnState.locArg === 'warning', JSON.stringify(warnState));

    // Step 3: Click "Quick Start" on the warning screen
    const clickedQS = await clickButtonContaining(page, 'Quick Start');
    check('Clicked Quick Start button', clickedQS);

    // Step 4: Wait for the game to load — poll until past all intro screens
    const introLocs = ['begin', 'intro_start', 'intro_character_creation', 'intro_overview', 'intro_end', 'intro_game_start', 'intro_sg'];
    let finalLoc = '';
    const qsStart = Date.now();
    while (Date.now() - qsStart < 20000) {
      const st = await getLoc(page);
      if (!introLocs.includes(st.loc) && st.loc !== '' && st.loc !== undefined) {
        finalLoc = st.loc;
        break;
      }
      await sleep(300);
    }
    await sleep(500);

    const postState = await page.evaluate(`(function() {
      var s = window.__gameStore.getState();
      return {
        loc: s.loc,
        locArg: s.locArg,
        start_type: s.start_type,
        start_location: s.start_location,
        pcs_firstname: s.pcs_firstname,
        birthday: s.birthday,
        tsg: s.tsg,
        bodyLen: document.body.innerHTML.length
      };
    })()`);
    console.log('Post-QS state:', JSON.stringify(postState, null, 2));
    const postBtns = await getButtons(page);
    console.log('Post-QS buttons:', JSON.stringify(postBtns));

    check('Reached a game location', finalLoc !== '' && !introLocs.includes(finalLoc), `loc=${postState.loc}`);
    check('Character has a name', postState.pcs_firstname !== '' && postState.pcs_firstname !== undefined, `name=${postState.pcs_firstname}`);
    check('Character has a birthday', postState.birthday > 0, `birthday=${postState.birthday}`);
    check('Start type has loc', postState.start_type && postState.start_type.loc !== undefined && postState.start_type.loc !== '', JSON.stringify(postState.start_type));
    check('Start type has magic', postState.start_type && postState.start_type.magic !== undefined && postState.start_type.magic !== '', JSON.stringify(postState.start_type));
    check('Page has content', postState.bodyLen > 500, `bodyLen=${postState.bodyLen}`);

    if (errors.length > 0) {
      console.log('\nPage errors:', errors.length);
      errors.slice(0, 5).forEach(e => console.log('  -', e));
    }

    await page.screenshot({ path: '/tmp/opencode/quickstart-test.png', fullPage: true });
    console.log(`\n=== QUICKSTART TEST: ${passed} passed, ${failed} failed ===`);
    if (failed > 0) process.exitCode = 1;
  } catch (e: any) {
    console.error(`✗ Test crashed: ${e.message}`);
    await page.screenshot({ path: '/tmp/opencode/quickstart-test-fail.png', fullPage: true }).catch(() => {});
    process.exitCode = 1;
  } finally {
    await browser.close();
    srv.close();
    process.exit(process.exitCode ?? 0);
  }
}

main();
