import { chromium } from 'playwright';
import http from 'http';
import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const server = http.createServer((req, res) => {
  let filePath = path.join(distDir, req.url === '/' ? 'index.html' : req.url!);
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) filePath = path.join(distDir, 'index.html');
  const ext = path.extname(filePath);
  const types: Record<string, string> = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml', '.mp3': 'audio/mpeg', '.ogg': 'audio/ogg', '.woff': 'font/woff', '.woff2': 'font/woff2' };
  res.writeHead(200, { 'Content-Type': types[ext] || 'application/octet-stream' });
  fs.createReadStream(filePath).pipe(res);
});

async function setupPage(p: any): Promise<void> {
  await p.goto(`http://localhost:4174`, { waitUntil: 'networkidle' });
  await p.waitForTimeout(500);
  await p.locator('button', { hasText: /^Start$/ }).click();
  await p.waitForTimeout(500);
  await p.locator('button', { hasText: 'Quick Start' }).click();
  await p.waitForTimeout(500);
  await p.locator('input[placeholder="Elena"]').first().fill('Test');
  await p.locator('button', { hasText: /^Continue$/ }).click();
  await p.waitForTimeout(500);
  await p.locator('button', { hasText: /^Continue$/ }).click();
  await p.waitForTimeout(500);
  await p.locator('button', { hasText: /End of August/ }).click();
  await p.waitForTimeout(500);
  await p.locator('button', { hasText: 'Pavlovsk' }).first().click();
  await p.waitForTimeout(500);
  await p.locator('button', { hasText: 'Popular' }).first().click();
  await p.waitForTimeout(500);
  await p.locator('button', { hasText: 'Sociable' }).first().click();
  await p.waitForTimeout(500);
  await p.locator('button', { hasText: /^Continue$/ }).click();
  await p.waitForTimeout(500);
  await p.locator('button', { hasText: 'Start Game' }).click();
  await p.waitForTimeout(1000);
}

async function main() {
  await new Promise<void>((r) => server.listen(4174, r));
  const browser = await chromium.launch({ executablePath: '/snap/bin/chromium', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  const errors: string[] = [];
  const logs: string[] = [];
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('console', (msg) => { if (msg.text().startsWith('[SCENE.TEXT]') || msg.text().startsWith('[MIRROR L179]')) logs.push(msg.text()); });
  
  await setupPage(page);
  
  const TEST_STATE = {
    picrand: 1, SexTypeCheck: 1, moodType: 'fairly normal', holeType: 1,
    droutine: { morning_count: 0, evening_count: 0, current_label: '' },
    date_ev: { unique_npc: 1, loc: 'npc_home', leave_dialogue: 'Bye', leave_action: '' },
    date_ev_exit: { exit_file: 'city_center', exit_arg: 'start' },
    fightTimType: 'fight', fightTimNum: 1, fightEnding: 1,
    sleepVars: { events_active: 1 },
    cgd_clothes: { A9: ' shirt, jeans, socks, briefs', A10: ' track jacket, tracksuit pants, socks, briefs', A11: ' shirt, shorts, socks, briefs' },
    casino_chips: 100, deckFace: [5,5,5,5,5,5,5,5,5,5,5,5,5],
    temp_player_hand: [0,1], temp_dealer_hand: [2,3], numHands: 1, currentHand: 0,
    menu_settings: '_menu_settings', menu_loc: 'start', menu_arg: 'start',
    npc_img_path: { A274: 'images/characters/pushkin/maya', A275: 'images/characters/ballet', A276: 'images/characters/ballet', A277: 'images/characters/ballet', A278: 'images/characters/ballet', A279: 'images/characters/ballet', A280: 'images/characters/pushkin/gasha', A281: 'images/characters/ballet', A282: 'images/characters/ballet', A284: 'images/characters/ballet', A285: 'images/characters/ballet', A286: 'images/characters/ballet' },
    zz_stage: 1, pro_rand: 1, lern_imgset: 2, salonpicrand: 0,
    npcID: 'A34', npcID1: 'A34', npcID2: 'A34',
    pc_descFull: { makeup: '', skin: '' },
    pc_desc: { 'eye size': '', 'eye colour': '' },
    pcs_lashes_txt: '', set_imgh: '', pcs_apprnc_text: '', hair: '', mc_inventory: {},
  };
  
  // Navigate to fightClub_intro:wardrobe first (like the audit does)
  await page.evaluate(([l, s, ts]) => {
    const store = (window as any).__gameStore;
    const st = store.getState();
    for (const [k, v] of Object.entries(ts)) (st as any)[k] = v;
    const origRandom = Math.random;
    Math.random = () => 0;
    store.getState().doGoto(l, s);
    Math.random = origRandom;
  }, ['fightClub_intro', 'wardrobe', TEST_STATE]);
  await page.waitForTimeout(500);
  
  // Click "Use mirror" button
  const btn = page.locator('button', { hasText: 'Use mirror' }).first();
  const btnCount = await btn.count();
  console.log('Button count:', btnCount);
  if (btnCount > 0) {
    await btn.click();
    await page.waitForTimeout(500);
  }

  // Monkey-patch SceneBuilder.text to trace calls
  const textCalls = await page.evaluate(() => {
    const s = (window as any).__gameStore.getState();
    const results: string[] = [];
    const origText = (window as any).__origSceneText;
    if (origText) {
      // Re-run enterStart with tracing
      const loc = (window as any).__getRegisteredLocations?.();
      return results;
    }
    return results;
  });

  // Simpler: check what the first non-empty text would be
  const firstText = await page.evaluate(() => {
    const s = (window as any).__gameStore.getState();
    const candidates = [
      { label: 'pcs_apprnc_text', val: `${((s as any).pcs_apprnc_text || '')}` },
      { label: 'hair', val: `${((s as any).hair || '')}` },
      { label: 'line179', val: '' + ((s as any).pc_descFull ?? 0)?.['makeup'] ?? '' + '. Your \' + iif(pcs_eyesize > 1, \'' + ((s as any).pc_desc ?? 0)?.['eye size'] ?? '' + ' \', \') + \'eyes are ' + ((s as any).pc_desc ?? 0)?.['eye colour'] ?? '' + ' ' + ((s as any).pcs_lashes_txt || '') + '.' },
      { label: 'line185', val: `You have ${((s as any).pcs_lipbalm_str || '')} ${((s as any).pc_desc ?? 0)?.['lip size'] ?? ''} lips.` },
      { label: 'line188', val: `${((s as any).pc_descFull ?? 0)?.['skin'] ?? ''}` },
    ];
    return candidates;
  });
  console.log('Text candidates:', JSON.stringify(firstText, null, 2));
  
  const exprResult = await page.evaluate(() => {
    const s = (window as any).__gameStore.getState();
    const exact = '' + ((s as any).pc_descFull ?? 0)?.['makeup'] ?? '' + '. Your \' + iif(pcs_eyesize > 1, \'' + ((s as any).pc_desc ?? 0)?.['eye size'] ?? '' + ' \', \') + \'' + ((s as any).pc_desc ?? 0)?.['eye colour'] ?? '' + ' eyes ' + ((s as any).pcs_lashes_txt || '') + '.';
    return { exact, type: typeof exact };
  });
  console.log('Line 179 expression:', JSON.stringify(exprResult, null, 2));
  const state = await page.evaluate(() => {
    const st = (window as any).__gameStore.getState();
    return {
      loc: st.loc, locArg: st.locArg,
      pc_descFull: (st as any).pc_descFull,
      pc_desc: (st as any).pc_desc,
      pcs_lashes_txt: (st as any).pcs_lashes_txt,
      pcs_apprnc_text: (st as any).pcs_apprnc_text,
      hair: (st as any).hair,
      newstylemirror: (st as any).newstylemirror,
      pcs_lipbalm_str: (st as any).pcs_lipbalm_str,
      pcs_eyesize: (st as any).pcs_eyesize,
      mainText: st.scene.mainText,
      statText: st.scene.statText,
    };
  });
  console.log('State:', JSON.stringify(state, null, 2));
  const bodyText = await page.textContent('body');
  const undefinedIdx = bodyText?.indexOf('undefined') ?? -1;
  if (undefinedIdx >= 0) {
    console.log('FOUND "undefined" at index', undefinedIdx);
    console.log('Context:', JSON.stringify(bodyText?.slice(Math.max(0, undefinedIdx - 150), undefinedIdx + 150)));
  } else {
    console.log('No "undefined" found in body text');
  }
  console.log('SCENE.TEXT calls:', JSON.stringify(logs, null, 2));
  console.log('JS errors:', errors.filter(e => !/404|Failed to load resource/i.test(e)));
  
  await browser.close();
  server.close();
}
main().catch(console.error);
