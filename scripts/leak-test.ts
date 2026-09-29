import { chromium } from 'playwright';
import { spawn, execSync } from 'child_process';
import { readdirSync, statSync, readFileSync } from 'fs';
import { join, basename, dirname } from 'path';
import { fileURLToPath } from 'url';

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
const PORT = 4175;
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

function getLocationFileMap(): Record<string, string> {
  const locDir = join(ROOT, 'src', 'locations');
  const map: Record<string, string> = {};
  function scanDir(dir: string) {
    for (const entry of readdirSync(dir)) {
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

function getSubLocations(locName: string, fileMap: Record<string, string>): string[] {
  const filePath = fileMap[locName];
  if (!filePath) return [''];
  const content = readFileSync(filePath, 'utf8');
  const cases = [...content.matchAll(/case\s+'([^']+)':/g)].map(m => m[1]);
  const subs = [''];
  for (const c of cases) {
    if (!subs.includes(c)) subs.push(c);
  }
  return subs;
}

function getAllTestTargets(locations: string[], fileMap: Record<string, string>): Array<{ loc: string; sub: string }> {
  const targets: Array<{ loc: string; sub: string }> = [];
  for (const loc of locations) {
    const subs = getSubLocations(loc, fileMap);
    for (const sub of subs) {
      targets.push({ loc, sub });
    }
  }
  return targets;
}

const TEST_STATE: Record<string, unknown> = {
  arch_vars: { main_active: '', bimbo_points: 0, preppy_points: 0, prude_points: 0, punk_points: 0, goth_points: 0 },
  arch_const: { point_cap: 2000000, point_min: 50000, points_full_effect: 500000 },
  KGD: { lvl: 1, HP: 100, damage: 10, Infantrie: 1, Cavalry: 1, Archers: 1 },
  KDG: { HP: 100, razm: 1 },
  hour: 12,
  ReturnAdr: 'forest_edge',
  hunterVars: { were_met: 0, available: 1, outside: 1 },
  forest_args1: 'forest_outskirts',
  MiraVars: { meadow: 2 },
  excer_name: { 1: 'Running', 2: 'Yoga', 3: 'Hula hoop' },
  eventtype: 'before_school',
  temp_kickboxVars: { round: 1, npc_health: 10, fight_type: 0, time: 0, active_init: 0 },
  picrand: 1,
  SexTypeCheck: 1,
  moodType: 'fairly normal',
  holeType: 1,
  droutine: { morning_count: 0, evening_count: 0, current_label: '' },
  date_ev: { unique_npc: 1, loc: 'npc_home', leave_dialogue: 'Bye', leave_action: '' },
  shop_utils_view: { link: 'view_grid', type: 'bra', number: 1 },
  sex_ev: { pos_speed: 'anal1', initiative: 'girl', change_pos: 0, first_anal_insertion: 1, anal_count: 1, reset_pos: 'anal' },
  prostitute: { client_scene: 'Blowjob', scene_reduction: 0 },
  dick: 15,
  dick_girth: 'thick',
  hotelRoomDays: {},
  daystart: 0,
  temp_player_bets: [100],
  pcs_throat: 20,
  pcs_vag: 20,
  pcs_inhib: 30,
  temp_rand: 5,
  date_ev_exit: { exit_file: 'city_center', exit_arg: 'start' },
  fightTimType: 'fight',
  fightTimNum: 1,
  fightEnding: 1,
  sleepVars: { events_active: 1 },
  cgd_clothes: { A9: ' shirt, jeans, socks, briefs', A10: ' track jacket, tracksuit pants, socks, briefs', A11: ' shirt, shorts, socks, briefs' },
  casino_chips: 100,
  wloc: 'default1',
  kamasutra_page: 1,
  strip_club: { strip_tips: 50 },
  pcs_eyecolor: 'brown',
  noWillpower: '',
  brothel_vars: { orgasm_meter: 0, rage_meter: 0 },
  deckFace: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  uni_dorm: { floor: 'floor1' },
  transportVars: { trainpass_day: 0, train_wait_center: 5, train_wait_pavlovsk: 10 },
  temp_player_hand: [0, 1],
  temp_dealer_hand: [2, 3],
  shop_display: { hub_subloc: 'view_list' },
  sclocrt: 'city_center',
  scargrt: 'start',
  numHands: 1,
  currentHand: 0,
  menu_settings: '_menu_settings',
  menu_loc: 'start',
  menu_arg: 'start',
  fame: { city_modelling: 100 },
  npc_img_path: { A274: 'images/characters/pushkin/maya', A275: 'images/characters/ballet', A276: 'images/characters/ballet', A277: 'images/characters/ballet', A278: 'images/characters/ballet', A279: 'images/characters/ballet', A280: 'images/characters/pushkin/gasha', A281: 'images/characters/ballet', A282: 'images/characters/ballet', A284: 'images/characters/ballet', A285: 'images/characters/ballet', A286: 'images/characters/ballet' },
  zz_stage: 1,
  pro_rand: 1,
  lern_imgset: 2,
  salonpicrand: 0,
  npcID: 'A34',
  npcID1: 'A34',
  npcID2: 'A34',
  npc_usedname: { A34: 'TestNpc' },
  pc_descFull: { makeup: '', skin: '' },
  pc_desc: { 'eye size': '', 'eye colour': '', butt: 'round', breast: 'small' },
  pcs_lashes_txt: '',
  set_imgh: '',
  pcs_apprnc_text: '',
  hair: '',
  mc_inventory: { razor: 1, cosmetics: 1, shampoo: 1, lipbalm: 1, enema_kit: 1, painkillers: 1, trinkets_home: 0, trinkets_garage: 0 },
  npcIndex: ['A34'],
  npc_rel: { A34: { like: 50, respect: 50, trust: 50, love: 50, sex: 50 } },
  npc_gender: { A34: 'male' },
  npc_firstname: { A34: 'Test' },
  npc_lastname: { A34: 'Npc' },
  npc_pic: { A34: 'images/characters/shared/headshots_main/1.jpg' },
  npc_nickname: { A34: 'Test' },
  npc_dob: { A34: 20000101 },
  npc_hotcat: { A34: 0 },
  npc_gentle: { A34: 1 },
  npc_rough: { A34: 0 },
  npc_sexdrive: { A34: 5 },
  npc_know_bc: { A34: 1 },
  npc_know_not_bc: { A34: 0 },
  money: 10000,
  pcs_mood: 50,
  pcs_energy: 80,
  pcs_hydra: 80,
  pcs_sleep: 80,
  pcs_willpwr: 50,
  pcs_health: 100,
  pcs_stam: 100,
  pcs_horny: 0,
  pcs_sweat: 0,
  cheatVars: {},
  succublvl: 0,
  pcs_sprt: 5,
  pcs_intel: 5,
  pcs_vital: 5,
  pcs_stren: 5,
  pcs_agil: 5,
  pcs_magik: 0,
  pcs_persuas: 5,
  pcs_bushcraft: 20,
  stat: {},
  pain: {},
  trait_vars: {},
  sifilis: 0,
  sick: 0,
  missCum: 0,
  timeTresh: 0,
  moodVars: { disp_base: 50, disp: 50, momentum: 0, inertia: 0, max: 100, min: 1, hold_minut: 0, leftover_mood: 0 },
  stammax: 100,
  willpowermax: 50,
  healthmax: 100,
  manamax: 100,
  fat: 0,
  vitalbuf: 0,
  strenbuf: 0,
  agilbuf: 0,
  pcs_nickname: 'Test',
  pcs_firstname: 'Test',
  pcs_lastname: 'Npc',
  pcs_hotcat: 5,
  numnpc: 1,
  picpRand: 1,
  rel_id: 1,
  car: { ID: 1 },
  setloc: { imagepath: 'locations/city/residential/', StageImage: 'test.jpg', StageTitle: 'Test' },
  modelfoto: { debut_image: 1 },
  sub: 0,
  inSleep: 0,
  menu_off: 0,
  military: 0,
  settingmode: 0,
  loc: 'start',
  locArg: '',
  locArg2: '',
  locArg3: '',
  locArgs: [] as string[],
  prevLoc: 'city_center',
  prevArg: 'start',
  VKWoods: 2,
  locationType: 'public',
  scene: { mainText: '', statText: '', curActs: [], curobjs: '', backimage: '', menuOff: false },
  stateStack: [],
  navigationVersion: 0,
  CloQuality: 0, CloThinness: 0, CloTopCut: 0, CloBra: 0, CloPanties: 0,
  CloPantsShortness: 0, CloSkirtShortness: 0, CloDress: 0, CloOnePiece: 0,
  CloInhibit: 0, CloCoverFront: 0, CloCoverBack: 0, CloCoverTop: 0,
  CloStyle: 0, CloStyle2: 0, CloStyle3: 0,
  CloBimbo: 0, CloGoth: 0, CloPunk: 0, CloPrep: 0, CloPrude: 0,
  CloProstitute: 0, CloMaid: 0, CloServer: 0, CloStrip: 0, CloSchool: 0,
  CloOffice: 0, CloSport: 0, CloSwim: 0, CloPrice: 0, CloDirt: 0,
  CloStrength: 0, CloMaxStrength: 0,
  BraMaterial: 0, BraType: 0, BraFun: 0, BraQuality: 0, BraThinness: 0,
  BraCover: 4, BraSport: 0, BraPrice: 0, BraDirt: 0, BraStrength: 0, BraMaxStrength: 0,
  PanMaterial: 0, PanType: 0, PanFun: 0, PanQuality: 0, PanThinness: 0,
  PanCoverFront: 4, PanCoverBack: 4, PanSport: 0, PanPrice: 0, PanDirt: 0,
  PanStrength: 0, PanMaxStrength: 0,
  ShoQuality: 0, ShoHeels: 0, ShoCut: 0, ShoStyle: 0, ShoStyle2: 0,
  ShoStrip: 0, ShoSport: 0, ShoBimbo: 0, ShoGoth: 0, ShoPunk: 0,
  ShoPrice: 0, ShoStrength: 0, ShoMaxStrength: 0, ShoSkill: 0,
  ShoPain: { severe: 0, medium: 0, mild: 0 },
  CoatWarm: 0, CoatQuality: 0, CoatPrice: 0, CoatStrength: 0, CoatMaxStrength: 0,
  coat_description: '',
  PurseQuality: 0, PursePrice: 0, PurseStrength: 0,
  hypnoClothes: 0, pcs_hips: 0,
  CloLosTyp: [] as string[], CloLosNum: [] as number[],
  theme_hex: {} as Record<string, string>,
  bodysuitworntype: 'none', bodysuitwornnumber: 0,
  default_entry: 0,
  default_sport_number: {} as Record<string, number>,
  default_school_number: {} as Record<string, number>,
  def_clothing_name: [] as string[],
  defclothingtype: [] as string[], defclothingnumber: [] as number[],
  defunderwear: [] as number[],
  defbratype: [] as string[], defbranumber: [] as number[],
  defpantytype: [] as string[], defpantynumber: [] as number[],
  defbodysuittype: [] as string[], defbodysuitnumber: [] as number[],
  defshoetype: [] as string[], defshoenumber: [] as number[],
  defcoattype: [] as string[], defcoatnumber: [] as number[],
  defpursetype: [] as string[], defpursenumber: [] as number[],
};

async function main() {
  const fileMap = getLocationFileMap();
  const locs = Object.keys(fileMap).sort();
  const targets = getAllTestTargets(locs, fileMap);
  console.log(`Testing ${targets.length} render targets (${locs.length} unique locations)`);

  const server = spawn('npx', ['vite', '--port', String(PORT), '--strictPort'], {
    stdio: 'pipe',
    detached: false,
  });
  await sleep(3000);

  const browser = await chromium.launch({
    headless: true,
    executablePath: '/usr/bin/google-chrome',
    args: ['--js-flags=--max-old-space-size=512'],
  });
  let crashed = false;
  const setupPage = async (p: any) => {
    p.setDefaultTimeout(3000);
    p.on('dialog', (d: any) => d.dismiss().catch(() => {}));
    p.on('crash', () => { crashed = true; console.log('PAGE CRASHED'); });
    return p;
  };
  let page = await setupPage(await browser.newPage());

  const raceTimeout = (ms: number) => new Promise<never>((_, rej) => setTimeout(() => rej(new Error('race-timeout')), ms));
  const safeEval = async (fn: any, arg?: any): Promise<any> => {
    const t0 = Date.now();
    try {
      return await Promise.race([page.evaluate(fn, arg), raceTimeout(5000)]);
    } catch (e: any) {
      const dt = Date.now() - t0;
      if (crashed) throw new Error(`crash (detected in ${dt}ms)`);
      throw e;
    }
  };

  const loadGame = async () => {
    await page.goto(`http://localhost:${PORT}`, { waitUntil: 'networkidle', timeout: 15000 });
    await sleep(200);
    await page.locator('button', { hasText: /^Start$/ }).click();
    await sleep(200);
    await page.locator('button', { hasText: 'Quick Start' }).click();
    await sleep(200);
    await page.locator('input[placeholder="Elena"]').first().fill('Test');
    await page.locator('button', { hasText: /^Continue$/ }).click();
    await sleep(200);
    await page.locator('button', { hasText: /^Continue$/ }).click();
    await sleep(200);
    await page.locator('button', { hasText: /End of August/ }).click();
    await sleep(200);
    await page.locator('button', { hasText: 'Pavlovsk' }).first().click();
    await sleep(200);
    await page.locator('button', { hasText: 'Popular' }).first().click();
    await sleep(200);
    await page.locator('button', { hasText: 'Sociable' }).first().click();
    await sleep(200);
    await page.locator('button', { hasText: /^Continue$/ }).click();
    await sleep(200);
    await page.locator('button', { hasText: 'Start Game' }).click();
    await sleep(500);
  };

  console.log('Loading game...');
  await loadGame();

  const baseline = await page.evaluate(() => ({
    heap: (performance as any).memory?.usedJSHeapSize ?? 0,
    dom: document.querySelectorAll('*').length,
    images: document.images.length,
  }));
  const nodeBaseline = process.memoryUsage();
  console.log(`Baseline: heap=${(baseline.heap / 1048576).toFixed(1)}MB dom=${baseline.dom} images=${baseline.images} nodeRSS=${(nodeBaseline.rss / 1048576).toFixed(1)}MB`);

  let consecutiveFailures = 0;
  const recoverPage = async () => {
    await page.close().catch(() => {});
    crashed = false;
    page = await setupPage(await browser.newPage());
    await loadGame();
    consecutiveFailures++;
  };

  const SKIP = new Set(['KGDparty', 'KGDgame', 'castSpell', 'femcyc', 'npcStat_clean', 'pattest']);
  for (let i = 0; i < targets.length; i++) {
    const { loc, sub } = targets[i];
    if (SKIP.has(loc)) continue;
    const label = sub === '' ? loc : `${loc}:${sub}`;
    try {
      await safeEval(([l, s, ts]: [string, string, Record<string, unknown>]) => {
        const store = (window as any).__gameStore;
        const st = store.getState();
        for (const [k, v] of Object.entries(ts)) (st as any)[k] = v;
        store.getState().doGoto(l, s);
      }, [loc, sub, TEST_STATE]);
      await safeEval(async () => {
        const bg = document.querySelector('.bg-image, [style*="background-image"]');
        if (bg) {
          const style = window.getComputedStyle(bg);
          const url = style.backgroundImage?.replace(/url\(['"]?/, '').replace(/['"]?\)/, '');
          if (url && url.startsWith('http')) {
            try { await fetch(url, { method: 'HEAD' }); } catch {}
          }
        }
      });
    } catch (e: any) {
      const isTimeout = e.message === 'race-timeout';
      if (isTimeout && !crashed) {
        try {
          await Promise.race([page.evaluate(() => 1), raceTimeout(2000)]);
          console.log(`SLOW at [${i + 1}/${targets.length}] ${label} (browser alive, continuing)`);
          consecutiveFailures = 0;
          continue;
        } catch {
          console.log(`HANG at [${i + 1}/${targets.length}] ${label} (main thread blocked, killing page)`);
          try {
            await recoverPage();
            continue;
          } catch {
            crashed = true;
          }
        }
      }
      if (crashed) {
        console.log(`CRASH at [${i + 1}/${targets.length}] ${label}: ${e.message}`);
        if (consecutiveFailures >= 5) {
          const nodeM = process.memoryUsage();
          console.log(`nodeRSS=${(nodeM.rss / 1048576).toFixed(1)}MB(Δ${((nodeM.rss - nodeBaseline.rss) / 1048576).toFixed(1)})`);
          break;
        }
        try {
          await recoverPage();
          continue;
        } catch {
          const nodeM = process.memoryUsage();
          console.log(`nodeRSS=${(nodeM.rss / 1048576).toFixed(1)}MB(Δ${((nodeM.rss - nodeBaseline.rss) / 1048576).toFixed(1)})`);
          break;
        }
      }
    }
    consecutiveFailures = 0;
    await sleep(50);

    if ((i + 1) % 50 === 0) {
      console.log(`[RELOAD at ${i + 1}/${targets.length}]`);
      try {
        await loadGame();
      } catch (e: any) {
        console.log(`RELOAD CRASH at ${i + 1}/${targets.length}: ${e.message}`);
        break;
      }
    }

    if ((i + 1) % 100 === 0) {
      const m = await safeEval(() => ({
        heap: (performance as any).memory?.usedJSHeapSize ?? 0,
        dom: document.querySelectorAll('*').length,
        images: document.images.length,
      }));
      const nodeM = process.memoryUsage();
      let chromeMB = 0;
      try {
        const out = execSync("ps aux | grep -i 'google-chrome\\|chrome' | grep -v grep | awk '{sum+=$6} END {print sum/1024}'", { encoding: 'utf8' }).trim();
        chromeMB = parseFloat(out) || 0;
      } catch {}
      const heapDelta = ((m.heap - baseline.heap) / 1048576).toFixed(1);
      const nodeDelta = ((nodeM.rss - nodeBaseline.rss) / 1048576).toFixed(1);
      console.log(`[${i + 1}/${targets.length}] heap=${(m.heap / 1048576).toFixed(1)}MB(Δ${heapDelta}) dom=${m.dom}(Δ${m.dom - baseline.dom}) images=${m.images}(Δ${m.images - baseline.images}) nodeRSS=${(nodeM.rss / 1048576).toFixed(1)}MB(Δ${nodeDelta}) chrome=${chromeMB.toFixed(0)}MB`);
    }
  }

  await Promise.race([browser.close(), sleep(3000)]);
  server.kill('SIGKILL');
  console.log('Done.');
  process.exit(0);
}

main().catch(e => { console.error(e); process.exit(1); });
