import { chromium } from 'playwright';
import { setTimeout as sleep } from 'timers/promises';
import { createServer } from 'http';
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

const ROOT = '/home/depressedtsukasa/Documents/GL';
const PORT = 4177;

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

// ---- Static analysis helpers (Node-side) ----

function collectTsFiles(dir: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...collectTsFiles(full));
    else if (entry.name.endsWith('.ts')) out.push(full);
  }
  return out;
}

// A navigation target is the first string-literal argument to a goto-family call, and only
// when that literal is a complete argument (followed by ',' or ')'). Concatenated/dynamic
// first args (e.g. doGoto('stat' & gt $curloc, ...)) are deliberately skipped.
const GOTO_PATTERNS = [
  /\bqspGoto\(\s*\w+\s*,\s*'([^']+)'\s*[,)]/g,
  /\bdoGoto\(\s*'([^']+)'\s*[,)]/g,
  /\bgoto\(\s*\w+\s*,\s*'([^']+)'\s*[,)]/g,
  /\bcall\(\s*\w+\s*,\s*'([^']+)'\s*[,)]/g,
];

// Cat 3 — genuinely missing locations. Their .qsps source files are absent from this repo
// (part of the missing QSP main asset bundle), so they were never migrated and cannot be
// reconstructed. Goto references to them are dangling but unfixable without the source.
// Evidence per name: no <name>.qsps in GL QSP/locations/, no <name>.ts in src/locations/,
// and no `if $ARGS[0] = '<name>'` label definition in any .qsps file (they are true
// location targets via gt/gs/xgt, not labels).
const MISSING_SOURCE = new Set([
  'hookup_morning',      // gt 'hookup_morning','morning' — hookup_after.qsps:2268
  'katja_pool',          // gt 'katja_pool',... — katja_sex_talk.qsps (23 refs)
  'rasputin_room_staff', // gt 'rasputin_room_staff' — rasputin_entrance.qsps:37,68
  'sex_ev_A69',          // xgt 'sex_ev_A69','coach_smoke' — sex_ev_after.qsps:2397
  'sex_ev_A34',          // gs 'sex_ev_A34',... — sex_ev_leave/condoms/shower.qsps
  'sex_ev_sex_talk_npc', // gs 'sex_ev_sex_talk_npc',... — sex_ev_sex/doggy/cowgirl/miss.qsps
]);

function extractTargets(content: string): { target: string; line: number }[] {
  const results: { target: string; line: number }[] = [];
  for (const re of GOTO_PATTERNS) {
    re.lastIndex = 0;
    let m: RegExpExecArray | null;
    while ((m = re.exec(content)) !== null) {
      // Template-literal interpolations (e.g. doGoto('${jsq(loc)}', ...)) are runtime-dynamic
      // targets generated into onclick handlers, not literal location names — skip them.
      if (m[1].startsWith('${') && m[1].endsWith('}')) continue;
      results.push({ target: m[1], line: content.slice(0, m.index).split('\n').length });
    }
  }
  return results;
}

// The location name(s) a file defines, for the connectivity graph.
function extractDefinedLocs(content: string): string[] {
  const out: string[] = [];
  const re = /\bname:\s*'([^']+)'/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(content)) !== null) out.push(m[1]);
  return out;
}

async function getState(page: any) {
  return page.evaluate(`(function() {
    var s = window.__gameStore.getState();
    return { loc: s.loc, locArg: s.locArg, prevLoc: s.prevLoc, prevArg: s.prevArg, mapOriginLoc: s.mapOriginLoc, mapOriginArg: s.mapOriginArg };
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

    // All locations are registered at app load (auto-register.ts eager glob), so the title
    // screen already exposes the full registry.
    const registered: string[] = await page.evaluate(`window.__getRegisteredLocations()`);
    check('Registered locations enumerated from app', registered.length > 100, `got ${registered.length}`);
    const registeredSet = new Set(registered);

    // ---- Phase 1: static goto-target validation (hard fail) ----
    const files = collectTsFiles(join(ROOT, 'src', 'locations'));
    const allTargets: { target: string; file: string; line: number }[] = [];
    const definedByFile = new Map<string, string[]>();
    for (const file of files) {
      const content = readFileSync(file, 'utf-8');
      const rel = file.slice(ROOT.length + 1);
      for (const t of extractTargets(content)) allTargets.push({ ...t, file: rel });
      const defs = extractDefinedLocs(content);
      if (defs.length) definedByFile.set(rel, defs);
    }

    const uniqueTargets = new Set(allTargets.map(t => t.target));
    const unregistered = allTargets.filter(t => !registeredSet.has(t.target) && !MISSING_SOURCE.has(t.target));
    const missingSourceRefs = allTargets.filter(t => MISSING_SOURCE.has(t.target));
    if (missingSourceRefs.length) {
      console.log(`\n[static] ${missingSourceRefs.length} reference(s) to ${MISSING_SOURCE.size} Cat-3 missing-source locations (excluded — source .qsps absent from repo, unfixable):`);
      for (const t of [...MISSING_SOURCE]) {
        const sites = missingSourceRefs.filter(r => r.target === t).map(r => `${r.file}:${r.line}`);
        if (sites.length) console.log(`    -> missing-source '${t}': ${sites.slice(0, 4).join(', ')}${sites.length > 4 ? ` (+${sites.length - 4} more)` : ''}`);
      }
    }
    const byTarget = new Map<string, string[]>();
    for (const u of unregistered) {
      const key = `${u.target}  (${u.file}:${u.line})`;
      if (!byTarget.has(u.target)) byTarget.set(u.target, []);
      byTarget.get(u.target)!.push(`${u.file}:${u.line}`);
    }

    console.log(`\n[static] scanned ${files.length} files, ${allTargets.length} goto targets, ${uniqueTargets.size} unique`);
    check('Every static goto target is a registered location', unregistered.length === 0,
      `${unregistered.length} unregistered target reference(s), ${byTarget.size} distinct location(s)`);
    for (const [target, sites] of byTarget) {
      console.log(`    -> unregistered '${target}': ${sites.slice(0, 6).join(', ')}${sites.length > 6 ? ` (+${sites.length - 6} more)` : ''}`);
    }

    // ---- Phase 2: connectivity (informational — static graph only, dynamic nav not captured) ----
    const adjacency = new Map<string, Set<string>>();
    for (const [file, defs] of definedByFile) {
      const targets = allTargets.filter(t => t.file === file).map(t => t.target);
      for (const d of defs) {
        if (!adjacency.has(d)) adjacency.set(d, new Set());
        for (const t of targets) adjacency.get(d)!.add(t);
      }
    }
    const reachable = new Set<string>();
    const queue = ['start'];
    reachable.add('start');
    while (queue.length) {
      const cur = queue.shift()!;
      for (const nxt of adjacency.get(cur) ?? []) {
        if (!reachable.has(nxt)) { reachable.add(nxt); queue.push(nxt); }
      }
    }
    const orphans = registered.filter(r => !reachable.has(r));
    const deadEnds = registered.filter(r => (adjacency.get(r)?.size ?? 0) === 0);
    console.log(`\n[connectivity] reachable=${reachable.size}/${registered.length}, orphans=${orphans.length}, dead-ends=${deadEnds.length} (informational)`);
    if (orphans.length) console.log(`    orphans (sample): ${orphans.slice(0, 10).join(', ')}`);
    if (deadEnds.length) console.log(`    dead-ends (sample): ${deadEnds.slice(0, 10).join(', ')}`);

    // ---- Phase 3: back-button chain (runtime, hard fail) ----
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

    const ORIGIN = 'city_center';
    await page.evaluate(`window.__gameStore.getState().doGoto(${JSON.stringify(ORIGIN)}, '')`);
    await sleep(1500);
    check('At origin city_center', (await getState(page)).loc === ORIGIN, JSON.stringify(await getState(page)));

    await page.evaluate(`window.__gameStore.getState().doGoto('map_view', ${JSON.stringify(ORIGIN)})`);
    await sleep(1500);
    const atArea = await getState(page);
    check('On area map, mapOrigin set to origin', atArea.loc === 'map_view' && atArea.mapOriginLoc === ORIGIN, JSON.stringify(atArea));

    await page.evaluate(`window.__gameStore.getState().doGoto('map_view', 'world')`);
    await sleep(1500);
    const atWorld = await getState(page);
    check('On world map, prevLoc clobbered to map_view', atWorld.loc === 'map_view' && atWorld.locArg === 'world' && atWorld.prevLoc === 'map_view', JSON.stringify(atWorld));
    check('On world map, mapOrigin preserved', atWorld.mapOriginLoc === ORIGIN && atWorld.mapOriginArg === '', JSON.stringify(atWorld));

    const clickedBottom = await clickButtonContaining(page, '<- Back');
    await sleep(1500);
    const afterBottom = await getState(page);
    check('Clicked bottom <- Back', clickedBottom);
    check('Bottom <- Back returns to origin', afterBottom.loc === ORIGIN && afterBottom.locArg === '', JSON.stringify(afterBottom));

    await page.evaluate(`window.__gameStore.getState().doGoto('map_view', ${JSON.stringify(ORIGIN)})`);
    await sleep(1500);
    await page.evaluate(`window.__gameStore.getState().doGoto('map_view', 'world')`);
    await sleep(1500);
    const clickedTop = await clickButtonContaining(page, 'Back');
    await sleep(1500);
    const afterTop = await getState(page);
    check('Clicked top bar Back', clickedTop);
    check('Top bar Back returns to origin (not map)', afterTop.loc === ORIGIN && afterTop.locArg === '', JSON.stringify(afterTop));

    if (errors.length > 0) {
      console.log('\nPage errors:', errors.length);
      errors.slice(0, 5).forEach(e => console.log('  -', e));
      check('No page errors during nav-graph test', false, errors.slice(0, 3).join(' | '));
    } else {
      check('No page errors during nav-graph test', true);
    }

    await page.screenshot({ path: '/tmp/opencode/nav-graph-test.png', fullPage: true });
    console.log(`\n=== NAV GRAPH TEST: ${passed} passed, ${failed} failed ===`);
    if (failed > 0) process.exitCode = 1;
  } catch (e: any) {
    console.error(`✗ Test crashed: ${e.message}`);
    await page.screenshot({ path: '/tmp/opencode/nav-graph-test-fail.png', fullPage: true }).catch(() => {});
    process.exitCode = 1;
  } finally {
    await browser.close();
    srv.close();
    process.exit(process.exitCode ?? 0);
  }
}

main();
