import { chromium } from 'playwright';
import { setTimeout as sleep } from 'timers/promises';
import { createServer, type Server } from 'http';
import { readFileSync, readdirSync, statSync, mkdirSync, existsSync } from 'fs';
import { join, basename } from 'path';

const ROOT = '/home/depressedtsukasa/Documents/GL';

const args = process.argv.slice(2);
const filterIdx = args.indexOf('--filter');
const filter = filterIdx !== -1 ? args[filterIdx + 1] : null;
const screenshot = args.includes('--screenshot');
const verbose = args.includes('--verbose');

function startServer(): Server {
  const html = readFileSync(join(ROOT, 'dist', 'index.html'));
  const srv = createServer((req, res) => {
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
  srv.listen(4173);
  return srv;
}

function getLocations(): string[] {
  const locDir = join(ROOT, 'src', 'locations');
  const locations: string[] = [];
  function scanDir(dir: string) {
    const entries = readdirSync(dir);
    for (const entry of entries) {
      const fullPath = join(dir, entry);
      const stat = statSync(fullPath);
      if (stat.isDirectory()) {
        if (entry === '_shared') continue;
        scanDir(fullPath);
      } else if (entry.endsWith('.ts')) {
        const name = basename(entry, '.ts');
        if (name.startsWith('_')) continue;
        locations.push(name);
      }
    }
  }
  scanDir(locDir);
  return locations.sort();
}

function getLocationFileMap(): Record<string, string> {
  const locDir = join(ROOT, 'src', 'locations');
  const map: Record<string, string> = {};
  function scanDir(dir: string) {
    const entries = readdirSync(dir);
    for (const entry of entries) {
      const fullPath = join(dir, entry);
      const stat = statSync(fullPath);
      if (stat.isDirectory()) {
        if (entry === '_shared') continue;
        scanDir(fullPath);
      } else if (entry.endsWith('.ts')) {
        const name = basename(entry, '.ts');
        if (name.startsWith('_')) continue;
        map[name] = fullPath;
      }
    }
  }
  scanDir(locDir);
  return map;
}

function stripHandlers(code: string): string {
  let out = code;
  let idx = 0;
  while (true) {
    const h = out.indexOf('handler:', idx);
    if (h === -1) break;
    const arrow = out.indexOf('=>', h);
    if (arrow === -1) break;
    const open = out.indexOf('{', arrow);
    if (open === -1) break;
    let depth = 0;
    let close = -1;
    for (let i = open; i < out.length; i++) {
      if (out[i] === '{') depth++;
      else if (out[i] === '}') { depth--; if (depth === 0) { close = i; break; } }
    }
    if (close === -1) break;
    out = out.slice(0, h) + out.slice(close + 1);
    idx = h;
  }
  return out;
}

const locationFileMap = getLocationFileMap();
const imageCache: Record<string, boolean> = {};
function sourceHasImage(loc: string): boolean {
  if (loc in imageCache) return imageCache[loc];
  const p = locationFileMap[loc];
  let has = false;
  if (p) {
    try {
      const c = readFileSync(p, 'utf8');
      const def = c.match(/function enterDefault\(s: GameState, scene: SceneBuilder\): void \{([\s\S]*?)\n\}/);
      const scope = def ? def[1] : c;
      has = /scene\.img\(|scene\.background\(/.test(stripHandlers(scope));
    } catch { has = false; }
  }
  imageCache[loc] = has;
  return has;
}

async function setupPage(p: any): Promise<void> {
  await p.goto('http://localhost:4173', { waitUntil: 'networkidle' });
  await sleep(500);
  await p.locator('button', { hasText: /^Start$/ }).click();
  await sleep(500);
  await p.locator('button', { hasText: 'Quick Start' }).click();
  await sleep(500);
  await p.locator('input[placeholder="Elena"]').first().fill('Test');
  await p.locator('button', { hasText: /^Continue$/ }).click();
  await sleep(500);
  await p.locator('button', { hasText: /^Continue$/ }).click();
  await sleep(500);
  await p.locator('button', { hasText: /End of August/ }).click();
  await sleep(500);
  await p.locator('button', { hasText: 'Pavlovsk' }).first().click();
  await sleep(500);
  await p.locator('button', { hasText: 'Popular' }).first().click();
  await sleep(500);
  await p.locator('button', { hasText: 'Sociable' }).first().click();
  await sleep(500);
  await p.locator('button', { hasText: /^Continue$/ }).click();
  await sleep(500);
  await p.locator('button', { hasText: 'Start Game' }).click();
  await sleep(1000);
}

async function main() {
  const srv = startServer();
  await sleep(500);
  let browser = await chromium.launch({ headless: true, executablePath: '/snap/bin/chromium' });
  let page = await browser.newPage();

  const errors: string[] = [];
  page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(`console: ${msg.text()}`);
  });

  try {
    await setupPage(page);

    const EXCLUDE_NO_ACTIONS = new Set([
      // Utility locations (no title, not meant for direct navigation)
      'cumreaction','map_toggle','nill','nogorslut','notification','npc','npcStat','npcStat_clean','placer','portnoi','spellBook','treeCircActs','treeCircEntry',
      // Display locations (has title but 0 action refs by design)
      'FSstat','anekdot','cuminsidereact','dinsexFX','exp_deg','map','spell',
      // Conditional locations (actions only under specific game states)
      'KGOLfight','KGZgame','VolleyTrenCentr','andrey','city_kafeend','city_trashplace','father','FedorEv','intro_overview','kotovEv','nichUtil','pav_library','pirsingsalon','placer_pav_park','pornstudio','shop_exhibitionist','sister','transport_functions',
      // Hub/stub locations (text-link navigation or empty by design)
      'pushkin_sq','pushkin_theatre','placer_house','treeCircle',
    ]);
    // Utility locations whose enter() touches state (arrays/dynamic vars) not initialized in the default audit state.
    const EXCLUDE_JS_ERRORS = new Set<string>([
      'saveupdater','stat_sklattrib',
    ]);
    const EXCLUDE_BG_IMAGE = new Set([
      // NPC-specific locations requiring valid numnpc state
      'Gnpc','Gnpc2','Snpc',
      // Dynamic image (ev${dancegevtipe}.jpg) — default state resolves to a non-existent file
      'danceGev',
    ]);
    // Locations whose source sets an image only under states not met by the default audit state.
    const EXCLUDE_NO_BG = new Set<string>([
      'Serpent','andrey','food_menu','furisex','gad_backwater','gad_swampspring','journal_portfolio','katalkin','komp','pav_park_meet_kol_event','placer_act','placer_end','podval_rape','sister',
    ]);

    let locations = getLocations();
    if (filter) {
      const re = new RegExp(filter, 'i');
      locations = locations.filter((l) => re.test(l));
    }

    console.log('=== RENDER AUDIT ===');
    console.log(`Locations to check: ${locations.length}`);
    if (filter) console.log(`Filter: ${filter}`);
    console.log('');

    const results: { loc: string; passed: boolean; issues: string[] }[] = [];
    const startTime = Date.now();

    for (let i = 0; i < locations.length; i++) {
      const loc = locations[i];
      const issues: string[] = [];

      errors.length = 0;

      try {
        await page.evaluate((l) => {
          const store = (window as any).__gameStore;
          store.getState().doGoto(l, '');
        }, loc);
      } catch (e: any) {
        issues.push(`goto threw: ${e.message}`);
      }

      await sleep(500);

      if (page.isClosed()) {
        issues.push('page crashed');
        results.push({ loc, passed: false, issues });
        console.log(`  [page crashed at ${loc}, recovering...]`);
        let newPage: any;
        try {
          newPage = await browser.newPage();
        } catch {
          await browser.close().catch(() => {});
          browser = await chromium.launch({ headless: true, executablePath: '/snap/bin/chromium' });
          newPage = await browser.newPage();
        }
        newPage.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));
        newPage.on('console', (msg) => { if (msg.type() === 'error') errors.push(`console: ${msg.text()}`); });
        await setupPage(newPage);
        page = newPage;
        continue;
      }

      const newErrors = errors.filter((e) => !/404|Failed to load resource/i.test(e));
      if (newErrors.length > 0 && !EXCLUDE_JS_ERRORS.has(loc)) {
        issues.push(`JS errors: ${newErrors.slice(0, 3).join('; ')}`);
      }

      const bgInfo = await page.evaluate(async () => {
        const main = document.querySelector('main');
        if (!main) return { noBg: true };
        const bg = getComputedStyle(main).backgroundImage;
        if (!bg || bg === 'none') return { noBg: true };
        const match = bg.match(/url\("?(.*?)"?\)/);
        if (!match) return { noBg: true };
        const url = match[1];
        if (url.includes('undefined') || url.includes('null')) {
          return { noBg: false, url, ok: false };
        }
        try {
          const resp = await fetch(url, { method: 'HEAD' });
          return { noBg: false, url, ok: resp.ok };
        } catch {
          return { noBg: false, url, ok: false };
        }
      });
      if (bgInfo.noBg && sourceHasImage(loc) && !EXCLUDE_NO_BG.has(loc)) {
        issues.push('missing background image (source sets image, none rendered)');
      }
      if (!bgInfo.noBg && !bgInfo.ok && !EXCLUDE_BG_IMAGE.has(loc)) {
        issues.push(`background image issue (src="${bgInfo.url}")`);
      }

      const actionCount = await page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        const actions = buttons.filter((b) => {
          const text = b.textContent?.trim() ?? '';
          const title = b.getAttribute('title');
          if (title) return false;
          if (/^(Map|Back)$/i.test(text)) return false;
          if (text.length === 0 || text.length >= 80) return false;
          return true;
        });
        return actions.length;
      });
      if (actionCount === 0 && !EXCLUDE_NO_ACTIONS.has(loc)) {
        issues.push('no actions found');
      }

      const bodyText = await page.textContent('body');
      if ((bodyText?.length ?? 0) < 50) {
        issues.push(`text too short (${bodyText?.length ?? 0} chars)`);
      }
      if (bodyText?.includes('[UNTRANSLATED:')) {
        const matches = bodyText.match(/\[UNTRANSLATED: [^\]]+\]/g);
        issues.push(`untranslated QSP: ${matches?.slice(0, 3).join(', ')}`);
      }

      const srcPath = locationFileMap[loc];
      if (srcPath) {
        try {
          const src = readFileSync(srcPath, 'utf8');
          if (/scene\.actions\(\[\{ label: 'Continue', goto:/.test(src)) {
            issues.push('goto translated to Continue button (should be qspGoto)');
          }
        } catch { /* ignore */ }
      }

      const passed = issues.length === 0;
      results.push({ loc, passed, issues });

      if (!passed) {
        console.log(`  ✗ ${loc}: ${issues.join(', ')}`);
      }

      if (verbose) {
        const status = passed ? '✓' : '✗';
        const issueStr = issues.length > 0 ? ` [${issues.join(', ')}]` : '';
        console.log(`${status} ${loc}${issueStr}`);
      }

      if (screenshot && !passed) {
        const shotDir = '/tmp/render-audit';
        if (!existsSync(shotDir)) mkdirSync(shotDir, { recursive: true });
        await page.screenshot({ path: join(shotDir, `${loc}.png`), fullPage: true }).catch(() => {});
      }

      if ((i + 1) % 100 === 0) {
        const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
        console.log(`  Progress: ${i + 1}/${locations.length} (${elapsed}s)`);
      }
    }

    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
    const passedCount = results.filter((r) => r.passed).length;
    const failedCount = results.filter((r) => !r.passed).length;

    console.log('');
    console.log(`=== RESULTS (${elapsed}s) ===`);
    console.log(`Total: ${results.length}`);
    console.log(`Passed: ${passedCount}`);
    console.log(`Failed: ${failedCount}`);

    if (failedCount > 0) {
      console.log('');
      console.log('--- FAILURES ---');
      for (const r of results.filter((r) => !r.passed)) {
        console.log(`${r.loc}: ${r.issues.join(', ')}`);
      }
    }

    const issueCounts: Record<string, number> = {};
    for (const r of results) {
      for (const issue of r.issues) {
        const key = issue.startsWith('JS errors') ? 'JS errors' :
          issue.startsWith('image') ? 'image issues' :
          issue.startsWith('no actions') ? 'no actions' :
          issue.startsWith('text') ? 'text issues' :
          issue.startsWith('goto threw') ? 'goto threw' :
          'other';
        issueCounts[key] = (issueCounts[key] ?? 0) + 1;
      }
    }
    if (Object.keys(issueCounts).length > 0) {
      console.log('');
      console.log('--- SUMMARY ---');
      for (const [key, count] of Object.entries(issueCounts).sort((a, b) => b[1] - a[1])) {
        console.log(`${key}: ${count}`);
      }
    }

    if (failedCount > 0) process.exitCode = 1;
  } catch (e: any) {
    console.error(`✗ Audit crashed: ${e.message}`);
    process.exitCode = 1;
  } finally {
    await browser.close();
    srv.close();
    process.exit(process.exitCode ?? 0);
  }
}

main();
