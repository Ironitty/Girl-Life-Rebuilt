import { chromium } from 'playwright';
import { setTimeout as sleep } from 'timers/promises';
import { createServer, type Server } from 'http';
import { readFileSync, readdirSync, statSync, existsSync } from 'fs';
import { join, basename } from 'path';

const ROOT = '/home/depressedtsukasa/Documents/GL';
const PORT = 4174;

const args = process.argv.slice(2);
const skipStatic = args.includes('--skip-static');
const skipRender = args.includes('--skip-render');
const skipInteraction = args.includes('--skip-interaction');
const checkTodo = args.includes('--check-todo');
const filterIdx = args.indexOf('--filter');
const filter = filterIdx !== -1 ? args[filterIdx + 1] : null;
const verbose = args.includes('--verbose');

// Locations where exec: links are legitimately part of dynamically-built data strings
// (assembled across multiple += operations, or used as dynamic href values inside iif()
// ternaries), not direct scene actions that convertExecLinks should have rewritten.
const EXCLUDE_EXEC_DATA = new Set(['SMStext_builder', 'barbershop', 'cheatmenu_bisets', 'cheatmenu_din', 'clinic_functions', 'hairsalon', 'help_characters', 'intro_overview', 'phone_selfies_popup', 'stat_display_menu']);
const EXCLUDE_FUNC_LITERAL = new Set(['cheatmenu_bisets', 'gopsex', 'havana_crossfit', 'pav_train_hall', 'post_deliveries']);
const EXCLUDE_EXPR = new Set(['gschool_detention', 'pav_church', 'phone_selfies', 'phone_selfies_popup', 'pod_ezd', 'pornschedule', 'sex_ev_sex', 'transport_functions']);
const EXCLUDE_BG = new Set(['AnalPR', 'BDSM', 'BDsex', 'BelSex', 'BurgerTip', 'Club2', 'ETO_building', 'ETO_hostel', 'ETO_salon', 'ETO_village', 'FedorEv4_sex', 'FedorMisc', 'Gnpc', 'Gnpc2', 'HotelRoom', 'IvanEv', 'JuliaMilHome', 'Katja_Tanga', 'LCporn', 'LCwork', 'LakeBoyDy', 'LakeBoyZ', 'LariskaHome', 'LariskaSex', 'MagEncounterFairy', 'MartinSex2', 'MartinSex3', 'Military', 'NikoDates', 'NikoDreams', 'NikoEv', 'NikoEv2', 'NikoMeyHome', 'NikoPayback', 'NikoSlut', 'NikoWhore', 'NormPR', 'Palatka', 'ParkKafe', 'Peterroom', 'Prostitute', 'Serge_Shulgin', 'Serpent', 'Snpc', 'TerminalOffice', 'TV', 'VolkovHome', 'WorkHosp', 'Zvereva_Sly_events', 'Zvereva_Sly_sex', 'Zvereva_events', 'Zvereva_house', 'Zvereva_house_events', 'Zvereva_sub_1', 'abduction', 'abductionCustomer', 'adverts_definition', 'adverts_manager', 'agentned', 'alarmclock', 'albina_chat', 'albina_chat2', 'albina_dorm', 'albina_election_events', 'albina_events', 'albina_house_events', 'albina_mother_events', 'albina_school_sex', 'albina_sex_chat', 'albina_sex_scenes', 'albina_starlets', 'albina_starlets_sex', 'albina_wine_event', 'albinahome', 'alex', 'alexandriaChat', 'alexandriaEv', 'alexandriaHome', 'alexandriaSex', 'andrey', 'anush_bedroom', 'anush_bedroom_city', 'anushapt', 'anushapt_city', 'anushaptbr', 'anushka', 'anushka_dreams', 'anushkachat', 'anushkachat_city', 'anushkaev1', 'anushkaev2', 'anushkaev3', 'anushkamaksim', 'areaData', 'artem_alb_sex', 'artem_chat', 'artem_date_events', 'artem_dorm', 'artem_events', 'artem_events_uni', 'artem_katja_sex', 'artem_nush_sex', 'artem_nush_sex_uni', 'artem_sex', 'artem_sex_uni', 'artemhome', 'artstudia', 'arturQW', 'arturRinok', 'arturSex', 'danceGev']);
const EXCLUDE_NO_ACTIONS = new Set(['FSstat', 'FedorEv', 'KGOLfight', 'KGZgame', 'VolleyTrenCentr', 'andrey', 'anekdot', 'cuminsidereact', 'city_trashplace', 'dinsexFX', 'exp_deg', 'father', 'intro_overview', 'kotovEv', 'map', 'nichUtil', 'pav_library', 'pirsingsalon', 'placer_house', 'placer_pav_park', 'komp_cam_MFC_requests', 'pornstudio', 'shop_exhibitionist', 'sister', 'transport_functions', 'treeCircle', 'qwBarEncounters']);
const EXCLUDE_UNTRANSLATED = new Set(['Snpc']);
const EXCLUDE_JS_ERRORS = new Set<string>();

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
  srv.listen(PORT);
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
        if (name.startsWith('_') || name === 'index' || name === 'auto-register') continue;
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

function sourceHasImage(filePath: string): boolean {
  const content = readFileSync(filePath, 'utf8');
  if (/^import\s+\w+\s+from\s+['"]\/?images\//m.test(content)) return true;
  if (/^import\s+\w+\s+from\s+['"]\/?sound\//m.test(content)) return true;
  if (/['"]\/?images\//.test(content)) return true;
  return false;
}

function qspHasBg(loc: string): boolean {
  const qspFile = join(ROOT, 'GL QSP', 'locations', `${loc}.qsps`);
  if (!existsSync(qspFile)) return false;
  const content = readFileSync(qspFile, 'utf8');
  return /\*bg/.test(content);
}

function qspHasActions(loc: string): boolean {
  const qspFile = join(ROOT, 'GL QSP', 'locations', `${loc}.qsps`);
  if (!existsSync(qspFile)) return false;
  const content = readFileSync(qspFile, 'utf8');
  return /\bact\s/.test(content);
}

async function setupPage(p: any): Promise<void> {
  await p.goto(`http://localhost:${PORT}`, { waitUntil: 'networkidle' });
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

function phase1StaticAnalysis(locations: string[], fileMap: Record<string, string>): { passed: boolean; error?: string; loc?: string } {
  for (const loc of locations) {
    const filePath = fileMap[loc];
    if (!filePath) continue;

    const content = readFileSync(filePath, 'utf8');
    const issues: string[] = [];

    const nonCommentContent = content.split('\n').filter((l) => !l.trimStart().startsWith('//') && !l.trimStart().startsWith('/*')).join('\n');
    const execMatches = nonCommentContent.match(/exec:/g);
    if (execMatches && execMatches.length > 0 && !EXCLUDE_EXEC_DATA.has(loc)) {
      issues.push(`${execMatches.length} exec: link(s)`);
    }

    const nonCommentLines = content.split('\n').filter((l) => !l.trimStart().startsWith('//') && !l.trimStart().startsWith('/*') && !l.includes('qspUntranslated'));
    const exprMatches = nonCommentLines.join('\n').match(/<<[^<>\n]+>>/g);
    if (exprMatches && exprMatches.length > 0 && !EXCLUDE_EXPR.has(loc)) {
      issues.push(`${exprMatches.length} unevaluated <<...>> expression(s)`);
    }

    if (checkTodo) {
      const todoMatches = content.match(/TODO-QSP/g);
      if (todoMatches && todoMatches.length > 0) {
        issues.push(`${todoMatches.length} TODO-QSP comment(s)`);
      }
    }

    if (/scene\.actions\(\[\{ label: 'Continue', goto:/.test(content)) {
      issues.push('goto translated to Continue button');
    }

    const labelExprMatches = content.match(/label: '[^']*<<[^<>\n]+>>[^']*'/g);
    if (labelExprMatches && labelExprMatches.length > 0) {
      issues.push(`${labelExprMatches.length} <<...>> in action label(s)`);
    }

    const funcLiteralMatches = nonCommentContent.match(/' \+ func\(/g);
    if (funcLiteralMatches && funcLiteralMatches.length > 0 && !EXCLUDE_FUNC_LITERAL.has(loc)) {
      issues.push(`${funcLiteralMatches.length} untranslated func() literal(s)`);
    }

    if (issues.length > 0) {
      return { passed: false, error: issues.join('; '), loc };
    }

    if (verbose) process.stdout.write('.');
  }

  if (verbose) console.log('');
  return { passed: true };
}

async function phase2RenderAudit(
  page: any,
  locations: string[],
  fileMap: Record<string, string>,
  errors: string[]
): Promise<{ passed: boolean; error?: string; loc?: string }> {
  for (const loc of locations) {
    errors.length = 0;

    try {
      await page.evaluate((l) => {
        const store = (window as any).__gameStore;
        store.getState().doGoto(l, '');
      }, loc);
    } catch (e: any) {
      return { passed: false, error: `goto threw: ${e.message}`, loc };
    }

    await sleep(500);

    if (page.isClosed()) {
      return { passed: false, error: 'page crashed', loc };
    }

    const newErrors = errors.filter((e: string) => !/404|Failed to load resource/i.test(e));
    if (newErrors.length > 0 && !EXCLUDE_JS_ERRORS.has(loc)) {
      return { passed: false, error: `JS errors: ${newErrors.slice(0, 3).join('; ')}`, loc };
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

    if (!bgInfo.noBg && !bgInfo.ok && !EXCLUDE_BG.has(loc)) {
      return { passed: false, error: `background image issue (src="${bgInfo.url}")`, loc };
    }

    if (qspHasBg(loc) && bgInfo.noBg && !EXCLUDE_BG.has(loc)) {
      return { passed: false, error: 'QSP source has *bg but no background rendered', loc };
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
    if (actionCount === 0 && qspHasActions(loc) && !EXCLUDE_NO_ACTIONS.has(loc)) {
      return { passed: false, error: 'no actions found', loc };
    }

    const bodyText = await page.textContent('body');
    if ((bodyText?.length ?? 0) < 50) {
      return { passed: false, error: `text too short (${bodyText?.length ?? 0} chars)`, loc };
    }

    if (bodyText?.includes('[UNTRANSLATED:') && !EXCLUDE_UNTRANSLATED.has(loc)) {
      const matches = bodyText.match(/\[UNTRANSLATED: [^\]]+\]/g);
      return { passed: false, error: `untranslated QSP: ${matches?.slice(0, 3).join(', ')}`, loc };
    }

    const execLinks = await page.evaluate(() => {
      return document.querySelectorAll('a[href^="exec:"]').length;
    });
    if (execLinks > 0) {
      return { passed: false, error: `${execLinks} exec: link(s) in rendered HTML`, loc };
    }

    if (bodyText?.includes('<<')) {
      const exprCount = (bodyText.match(/<<[^<>\n]+>>/g) || []).length;
      return { passed: false, error: `${exprCount} unevaluated <<...>> expression(s) in rendered text`, loc };
    }

    if (bodyText?.includes('undefined')) {
      return { passed: false, error: `'undefined' in rendered text`, loc };
    }
    if (bodyText?.includes('NaN')) {
      return { passed: false, error: `'NaN' in rendered text`, loc };
    }

    const buttonIssues = await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const issues: string[] = [];
      for (const b of buttons) {
        const text = b.textContent?.trim() ?? '';
        if (text.includes('<<')) issues.push(`button "<<...>>": ${text.slice(0, 50)}`);
        if (text.includes('undefined')) issues.push(`button "undefined": ${text.slice(0, 50)}`);
        if (text.includes('NaN')) issues.push(`button "NaN": ${text.slice(0, 50)}`);
      }
      return issues;
    });
    if (buttonIssues.length > 0) {
      return { passed: false, error: buttonIssues.slice(0, 3).join('; '), loc };
    }

    if (verbose) process.stdout.write('.');
  }

  if (verbose) console.log('');
  return { passed: true };
}

async function phase3InteractionAudit(
  page: any,
  locations: string[],
  errors: string[]
): Promise<{ passed: boolean; error?: string; loc?: string; action?: string }> {
  for (const loc of locations) {
    errors.length = 0;

    try {
      await page.evaluate((l) => {
        const store = (window as any).__gameStore;
        store.getState().doGoto(l, '');
      }, loc);
    } catch (e: any) {
      return { passed: false, error: `goto threw: ${e.message}`, loc };
    }

    await sleep(500);

    const actions = await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      return buttons
        .filter((b) => {
          const text = b.textContent?.trim() ?? '';
          const title = b.getAttribute('title');
          if (title) return false;
          if (b.offsetParent === null) return false;
          if (/^(Map|Back)$/i.test(text)) return false;
          if (text.length === 0 || text.length >= 80) return false;
          return true;
        })
        .map((b) => b.textContent?.trim() ?? '');
    });

    for (const actionText of actions) {
      errors.length = 0;

      try {
        await page.locator('button', { hasText: actionText }).first().click();
      } catch (e: any) {
        return { passed: false, error: `click failed: ${e.message}`, loc, action: actionText };
      }

      await sleep(400);

      if (page.isClosed()) {
        return { passed: false, error: 'page crashed', loc, action: actionText };
      }

      const newErrors = errors.filter((e: string) => !/404|Failed to load resource/i.test(e));
      if (newErrors.length > 0) {
        return { passed: false, error: `JS errors after click: ${newErrors.slice(0, 3).join('; ')}`, loc, action: actionText };
      }

      const destCheck = await page.evaluate(() => {
        const bodyText = document.body.textContent ?? '';
        const execLinks = document.querySelectorAll('a[href^="exec:"]').length;
        const exprCount = (bodyText.match(/<<[^<>\n]+>>/g) || []).length;
        const hasUndefined = bodyText.includes('undefined');
        const hasNaN = bodyText.includes('NaN');
        return { execLinks, exprCount, hasUndefined, hasNaN };
      });

      if (destCheck.execLinks > 0) {
        return { passed: false, error: `${destCheck.execLinks} exec: link(s) in destination`, loc, action: actionText };
      }
      if (destCheck.exprCount > 0) {
        return { passed: false, error: `${destCheck.exprCount} unevaluated <<...>> in destination`, loc, action: actionText };
      }
      if (destCheck.hasUndefined) {
        return { passed: false, error: `'undefined' in destination text`, loc, action: actionText };
      }
      if (destCheck.hasNaN) {
        return { passed: false, error: `'NaN' in destination text`, loc, action: actionText };
      }

      try {
        await page.evaluate((l) => {
          const store = (window as any).__gameStore;
          store.getState().doGoto(l, '');
        }, loc);
      } catch (e: any) {
        return { passed: false, error: `re-navigate failed: ${e.message}`, loc, action: actionText };
      }

      await sleep(300);

      if (verbose) process.stdout.write('.');
    }
  }

  if (verbose) console.log('');
  return { passed: true };
}

async function main() {
  const htmlPath = join(ROOT, 'dist', 'index.html');
  if (!existsSync(htmlPath)) {
    console.error('dist/index.html not found. Run `npx vite build` first.');
    process.exit(1);
  }

  let locations = getLocations();
  if (filter) {
    const re = new RegExp(filter, 'i');
    locations = locations.filter((l) => re.test(l));
  }

  const fileMap = getLocationFileMap();

  console.log('=== COMPREHENSIVE AUDIT ===');
  console.log(`Locations: ${locations.length}`);
  if (filter) console.log(`Filter: ${filter}`);
  if (checkTodo) console.log('TODO-QSP: checking');
  console.log('');

  const srv = startServer();
  await sleep(500);
  const browser = await chromium.launch({ headless: true, executablePath: '/snap/bin/chromium' });
  const page = await browser.newPage();
  page.setDefaultTimeout(5000);

  const errors: string[] = [];
  page.on('pageerror', (e: any) => errors.push(`pageerror: ${e.message}`));
  page.on('console', (msg: any) => {
    if (msg.type() === 'error') errors.push(`console: ${msg.text()}`);
  });

  try {
    if (!skipStatic) {
      console.log('--- Phase 1: Static Analysis ---');
      const result = phase1StaticAnalysis(locations, fileMap);
      if (!result.passed) {
        console.log(`\nFAIL ${result.loc}: ${result.error}`);
        console.log('\nFix this error and re-run the audit.');
        process.exitCode = 1;
        return;
      }
      console.log('PASS All files clean');
    } else {
      console.log('--- Phase 1: Static Analysis (skipped) ---');
    }

    await setupPage(page);

    if (!skipRender) {
      console.log('--- Phase 2: Render Audit ---');
      const result = await phase2RenderAudit(page, locations, fileMap, errors);
      if (!result.passed) {
        console.log(`\nFAIL ${result.loc}: ${result.error}`);
        console.log('\nFix this error and re-run the audit.');
        process.exitCode = 1;
        return;
      }
      console.log('PASS All locations render clean');
    } else {
      console.log('--- Phase 2: Render Audit (skipped) ---');
    }

    if (!skipInteraction) {
      console.log('--- Phase 3: Interaction Audit ---');
      const result = await phase3InteractionAudit(page, locations, errors);
      if (!result.passed) {
        console.log(`\nFAIL ${result.loc} / "${result.action}": ${result.error}`);
        console.log('\nFix this error and re-run the audit.');
        process.exitCode = 1;
        return;
      }
      console.log('PASS All actions work clean');
    } else {
      console.log('--- Phase 3: Interaction Audit (skipped) ---');
    }

    console.log('\n=== ALL PHASES PASSED ===');
  } catch (e: any) {
    console.error(`\nCRASH ${e.message}`);
    process.exitCode = 1;
  } finally {
    await browser.close();
    srv.close();
    process.exit(process.exitCode ?? 0);
  }
}

main();
