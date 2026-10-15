import { chromium } from 'playwright';
import { setTimeout as sleep } from 'timers/promises';
import { createServer } from 'http';
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

const ROOT = '/home/depressedtsukasa/Documents/GL';
const PORT = 4178;
const DRIVE_TIMEOUT = 6000;
const MAX_FUNCS_PER_MODULE = 4;
const INTRO_LOCS = ['begin', 'intro_start', 'intro_character_creation', 'intro_overview', 'intro_end', 'intro_game_start', 'intro_sg'];

// ---- CLI flags: --limit N (drive only the first N modules), --filter <regex> (modules whose name matches) ----
const args = process.argv.slice(2);
let LIMIT = Infinity;
let FILTER: RegExp | null = null;
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--limit') LIMIT = parseInt(args[++i], 10);
  else if (args[i] === '--filter') FILTER = new RegExp(args[++i]);
}

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

// ---- TEST_STATE (copied verbatim from render-interaction-audit.ts so drives run against a
// fully-populated store, matching how the audit seeds state before driving a location) ----
const TEST_STATE: Record<string, unknown> = {
  arch_vars: { main_active: '', bimbo_points: 0, preppy_points: 0, prude_points: 0, punk_points: 0, goth_points: 0 },
  arch_const: { point_cap: 2000000, point_min: 50000, points_full_effect: 500000 },
  KGD: { lvl: 1, HP: 100, damage: 10, Infantrie: 1, Cavalry: 1, Archers: 1, sput_2: 0, sput_3: 0, sput_4: 0, sput_5: 0, sput_6: 0 },
  KDG: { HP: 100, razm: 1 },
  hour: 12,
  ReturnAdr: 'forest_edge',
  foto_persuade: 0,
  lib_book_loaned: '',
  lib_debt: 0,
  radomirQW: {},
  dimkaWarn: 0,
  dimlinaQW: 0,
  ml_musicstorevisited: 0,
  KGZVars: { dist: 3, dead: 0, weapon_texta: 'fists' },
  bankDebtLimit: 0,
  stolmoney: 0,
  tvtime: 0,
  dimaFilm: 0,
  dima_chat_counter: 0,
  NikoGOPParty: 0,
  emily: { status: 0 },
  rolanmeet: 0,
  kafesvidsex: 0,
  slaveEventCount: 0,
  mistressqwest: 0,
  masseuse: { meet_lei: 0 },
  IgorevnaBDSM: 0,
  slavafuck: 0,
  knowMartin: 0,
  totminut: 1000,
  floor1_event_time: 0,
  floor2_event_time: 0,
  floor3_event_time: 0,
  floor4_event_time: 0,
  floor5_event_time: 0,
  knowsfairy: 0,
  anushkaQW: { guitar_day: 0 },
  brotherQW: { sex_ed: 0 },
  brothersexed: 0,
  brotherwash: 0,
  workertool: 0,
  prst_caught: 0,
  policeQW: { shoplift_caught: 0 },
  hypnoBra: 0,
  juliaQW: {},
  pussycats_fired_count: 1,
  bdsmclub: { role: 'sub' },
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
  aarraynumber: 50,
  curloc: 'city_artisan_quarter',
  region: 'city',
  droutine: { morning_count: 0, evening_count: 0, current_label: '' },
  date_ev: { unique_npc: 1, loc: 'npc_home', leave_dialogue: 'Bye', leave_action: '', film_decide: 'action', prev_arg: 'talk_menu', dialogue_setting: '' },
  shop_utils_view: { link: 'view_grid', type: 'bra', number: 1 },
  underwear: { pair: 1 },
  sex_ev: { pos_speed: 'anal1', initiative: 'girl', change_pos: 0, first_anal_insertion: 1, anal_count: 1, reset_pos: 'anal', virgin_deny: 0 },
  prostitute: { client_scene: 'Blowjob', scene_reduction: 0 },
  dick: 15,
  dick_girth: 'thick',
  pantyworntype: 'cotton',
  braworntype: 'cotton',
  shoeworntype: 'none',
  shoewornnumber: 0,
  hotelRoomDays: {},
  daystart: 0,
  temp_player_bets: [100],
  pcs_throat: 20,
  pcs_vag: 20,
  pcs_inhib: 30,
  pcs_makeup: 0,
  pcs_hairbsh: 0,
  count: {},
  temp_rand: 5,
  date_ev_exit: { exit_file: 'city_center', exit_arg: 'start' },
  fightTimType: 'fight',
  fightTimNum: 1,
  fightEnding: 1,
  sleepVars: { events_active: 1 },
  cgd_clothes: { A9: ' shirt, jeans, socks, briefs', A10: ' track jacket, tracksuit pants, socks, briefs', A11: ' shirt, shorts, socks, briefs' },
  casino_chips: 100,
  epayments: { value: 100, description: 'item', method: '', item_variable: '', quantity: 1, banner: '', paid: 0, loc: '', loc_arg: '' },
  wloc: 'default1',
  kamasutra_page: 1,
  strip_club: { strip_tips: 50 },
  pcs_eyecolor: 'brown',
  noWillpower: '',
  brothel_vars: { orgasm_meter: 0, rage_meter: 0, electro_counter: 0, like: 0, did_whip: 0, did_cane: 0, did_pinch: 0, did_punch: 0, did_tied_1: 0, did_tied_2: 0, did_tied_3: 0, did_tied_4: 0, did_tied_5: 0, did_tied_6: 0, did_tied_7: 0, receptionist_annoy: 0 },
  spellKnown: { penisenvy: 0 },
  penisEnvyVariable: 0,
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
  npc_nickname: { A34: 'Test', A29: '' },
  know_virgin: {},
  npc_dob: { A34: 20000101 },
  npc_hotcat: { A34: 0 },
  npc_gentle: { A34: 1 },
  npc_rough: { A34: 0 },
  npc_sexdrive: { A34: 5 },
  npc_know_bc: { A34: 1 },
  npc_know_not_bc: { A34: 0 },
  npc_perstype: { C0: '' },
  carraynumber: 0,
  mod_name: {},
  money: 10000,
  week: 1,
  pcs_mood: 50,
  pcs_energy: 80,
  pcs_hydra: 80,
  cumspclnt: 0,
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
  pain: { ankles: 0, armL: 0, armR: 0, asscheeks: 0, asshole: 0, back: 0, breasts: 0, cervix: 0, cheeks: 0, chest: 0, clitoris: 0, ears: 0, eyebrows: 0, eyes: 0, feet: 0, fingers: 0, hair: 0, hands: 0, head: 0, hips: 0, jaw: 0, labia: 0, legL: 0, legR: 0, lips: 0, mouth: 0, neck: 0, nipples: 0, nose: 0, pubic: 0, ribs: 0, shoulders: 0, thighs: 0, throat: 0, toes: 0, tongue: 0, tummy: 0, urethra: 0, vaginal: 0, wrists: 0, total: 0, damage: 0, relief: 0, timer: 0 },
  painParts: ['ankles', 'armL', 'armR', 'asscheeks', 'asshole', 'back', 'breasts', 'cervix', 'cheeks', 'chest', 'clitoris', 'ears', 'eyebrows', 'eyes', 'feet', 'fingers', 'hair', 'hands', 'head', 'hips', 'jaw', 'labia', 'legL', 'legR', 'lips', 'mouth', 'neck', 'nipples', 'nose', 'pubic', 'ribs', 'shoulders', 'thighs', 'throat', 'toes', 'tongue', 'tummy', 'urethra', 'vaginal', 'wrists'],
  painMod: { ankles: 2, armL: 2, armR: 2, asscheeks: 2, asshole: 9, back: 5, breasts: 8, cervix: 8, cheeks: 3, chest: 7, clitoris: 10, ears: 6, eyebrows: 6, eyes: 8, feet: 2, fingers: 4, hair: 1, hands: 3, head: 6, hips: 5, jaw: 4, labia: 8, legL: 3, legR: 3, lips: 6, mouth: 4, neck: 7, nipples: 9, nose: 5, pubic: 6, ribs: 5, shoulders: 2, thighs: 4, throat: 6, toes: 4, tongue: 7, tummy: 6, urethra: 6, vaginal: 8, wrists: 2 },
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
  loc_s: 'city_center',
  args_s: 'start',
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
  default_entry_max: 0,
  default_entry_name: '',
  clothing_default_page_num: 1,
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
  pcs_piercings: {} as Record<string, number>,
  sexcontra: 0,
  npcSpermPot: 0,
  temp_obm_job: '',
  temp_obm_data: '',
  temp_obm_film_type: '',
  temp_obm_cost: 0,
  porns: 0,
  locclass: '',
  shared_apt: { servicePaid: 0, rentLeft: 0 },
  npcStatVars: {},
  npclastcalledn: 0,
  npc_stat_pref_traits: {},
  npc_stat_pref_values: {},
  npcAge: [30],
  pcs_react: 5,
  pcs_mana: 0,
  cmbs_set: '',
  cmbs_class: 0,
  temp_cmd_path: '',
  temp_cmd_subpath: '',
  temp_cmd_desc: '',
  temp_cmd_img: '',
  temp_table: '',
  temp_set: '',
  temp_set_index: 0,
  cs_display_text: '',
  cs_export_text: '',
  temp_export_text: '',
  cmbs_exp_set: '',
  cmd_exp_i: 0,
  cmd_class_str: '',
  cmd_imgnums: 0,
  temp_cmd_img_addon: '',
  temp_cmd_image: '',
  temp_base_folder: '',
  temp_img_num: 0,
  temp_bs_class_str: '',
  temp_cmd_img_name: '',
  temp_cmd_desc_adv: '',
  temp_cmd_path_adv: '',
  temp_cmd_subpath_adv: '',
  temp_cmd_desc_adv2: '',
  temp_cmd_path_adv2: '',
  temp_cmd_subpath_adv2: '',
  Tatianaday: 1,
  city_cafe: { lunch_talk: 1 },
  bellawatch: 0,
  LudaQW: { KnowsSexActive: 5 },
  pharmacy_timers: {},
  petkaQW: {},
  post_vars: { round: 1, danger: 0, load: 0 },
  ballet_day: 1,
  martinpos: 'sideways',
  breaktype: 'second',
  NikoBreakup: 0,
  NikoIntro: 2,
  pavserhom: 0,
  psiha: 0,
  mistresscontract: 0,
  lesbiQW: 1,
  home: { current: 'pav_complex', location: 'pav_complex', entrance: 'pav_complex' },
  vanrPar_bathtub_dildo: 1,
  vanrPar_bath_shower_dildo: 1,
  vanrPar_suction_dildo: 1,
  motherQW: { bathroom_dildos: 1 },
  motherKnowDildo: 0,
  npc_selfish: { A34: 1 },
  npc_abusive: {},
  npc_caretaker: {},
  alkoParty: 0,
  alko: 0,
  TatianaMissionQW: 0,
  sucpcinfo: 0,
  girls_smoke: 0,
  school_period: 1,
  gnewQW: 0,
  gopnew: { feed: 0, fight: 0, ran: 0 },
  balletqw: { daystart: 0 },
  psiho: 0,
  psi1day: 0,
  pharmacyfirstbirthcontrol: 0,
  pharmacyfirstpregtest: 0,
  appointment_state: 'active',
  appointment_state_wait: -5,
  ludaQW: { pharm_purchase: '' },
  npc_finance: { A34: 1 },
  npc_assertive: { A34: 0 },
  npc_pushy: { A34: 0 },
};

function collectTsFiles(dir: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...collectTsFiles(full));
    else if (entry.name.endsWith('.ts')) out.push(full);
  }
  return out;
}

// A qspCall site is qspCall(<statevar>, '<module>', '<func>', ...). The module and func are
// string literals; the state var is an identifier. Concatenated/dynamic module names (e.g.
// qspCall(s, $loc, 'cleanup')) are deliberately skipped — only literal modules are triaged.
const QSPCALL_RE = /qspCall\(\s*\w+\s*,\s*'([^']+)'\s*,\s*'([^']*)'/g;

// Build module -> ordered-unique-funcs from every qspCall call site, restricted to the 457
// unmapped modules. This makes the drive faithful: each module is driven with the func(s) the
// game actually calls it with, not an arbitrary one.
function buildFuncMap(modules: Set<string>): Map<string, string[]> {
  const map = new Map<string, string[]>();
  const files = collectTsFiles(join(ROOT, 'src', 'locations'));
  for (const file of files) {
    const content = readFileSync(file, 'utf-8');
    QSPCALL_RE.lastIndex = 0;
    let m: RegExpExecArray | null;
    while ((m = QSPCALL_RE.exec(content)) !== null) {
      const mod = m[1];
      const func = m[2];
      if (!modules.has(mod)) continue;
      if (mod.startsWith('${') && mod.endsWith('}')) continue;
      let list = map.get(mod);
      if (!list) { list = []; map.set(mod, list); }
      if (!list.includes(func)) list.push(func);
    }
  }
  return map;
}

type DriveResult = { module: string; func: string; cls: 'recurse' | 'hang' | 'error' | 'no-op' | 'ok'; sig: string };

async function main() {
  const srv = startServer();
  await sleep(500);

  const moduleList = readFileSync(join(ROOT, 'scripts', 'qspcall-unmapped.txt'), 'utf-8')
    .split('\n').map(s => s.trim()).filter(Boolean);
  const modulesSet = new Set(moduleList);
  const funcMap = buildFuncMap(modulesSet);

  let modules = moduleList;
  if (FILTER) modules = modules.filter(m => FILTER!.test(m));
  if (Number.isFinite(LIMIT)) modules = modules.slice(0, LIMIT);

  console.log(`[triage] ${moduleList.length} unmapped modules total; driving ${modules.length} (filter=${FILTER?.source ?? 'none'}, limit=${Number.isFinite(LIMIT) ? LIMIT : 'all'})`);
  console.log(`[triage] ${funcMap.size} of the full list have known qspCall funcs; the rest are driven with func=''`);

  const browser = await chromium.launch({ headless: true, executablePath: '/usr/bin/google-chrome' });
  const results: DriveResult[] = [];
  let recycles = 0;

  async function createPage() {
    const context = await browser.newContext({ viewport: { width: 1400, height: 900 } });
    const page = await context.newPage();
    page.setDefaultTimeout(15000);
    const errors: string[] = [];
    page.on('pageerror', (e) => errors.push(e.message));
    return { context, page, errors };
  }

  async function quickStart(page: any) {
    await page.goto(`http://localhost:${PORT}`, { waitUntil: 'networkidle' });
    await sleep(1500);
    await page.keyboard.down('Shift');
    await page.keyboard.press('q');
    await page.keyboard.up('Shift');
    await sleep(500);
    await page.evaluate(`(function() {
      var btns = Array.from(document.querySelectorAll('button'));
      for (var b of btns) { if (b.textContent.indexOf('Quick Start') !== -1) { b.click(); return true; } }
      return false;
    })()`);
    const start = Date.now();
    while (Date.now() - start < 20000) {
      const st = await page.evaluate(`(function(){ var s = window.__gameStore.getState(); return { loc: s.loc }; })()`);
      if (st.loc && !INTRO_LOCS.includes(st.loc)) return;
      await sleep(300);
    }
  }

  function evalT(page: any, fn: any, evalArgs: any, ms: number): Promise<any> {
    return new Promise((resolve, reject) => {
      const t = setTimeout(() => reject(new Error(`eval timeout ${ms}ms`)), ms);
      page.evaluate(fn, evalArgs).then((v: any) => { clearTimeout(t); resolve(v); }, (e: any) => { clearTimeout(t); reject(e); });
    });
  }

  let ctx = await createPage();
  await quickStart(ctx.page);
  console.log(`[triage] quick-started; at loc=${await ctx.page.evaluate('window.__gameStore.getState().loc')}`);

  // Drive one (module, func) via the exact qspCall path. Returns a classified result.
  async function drive(module: string, func: string): Promise<DriveResult> {
    const page = ctx.page;
    const errBefore = ctx.errors.length;
    try {
      // String-based evaluate (args inlined via JSON.stringify) — avoids the esbuild `__name`
      // helper that a serialized arrow-with-nested-function leaves undefined in the page.
      const res = await evalT(page, `(function(m, f, ts) {
        const w = window;
        const VOLATILE = new Set(['scene', 'stateStack', 'navigationVersion', 'reminders', 'locArgs', 'ARGS', 'prevLoc', 'prevArg', 'loc', 'locArg', 'locArg2', 'locArg3', 'menuLoc', 'menuArg', 'locationType']);
        const st = w.__gameStore.getState();
        for (const [k, v] of Object.entries(ts)) st[k] = v;
        function snapStr(s) {
          const out = {};
          for (const [k, v] of Object.entries(s)) {
            if (typeof v === 'function' || VOLATILE.has(k)) continue;
            out[k] = v;
          }
          return JSON.stringify(out);
        }
        const before = snapStr(st);
        const bl = st.loc, ba = st.locArg;
        w.__qspCall(st, m, f);
        const after = snapStr(st);
        const al = st.loc, aa = st.locArg;
        return { before, after, bl, ba, al, aa };
      })(${JSON.stringify(module)}, ${JSON.stringify(func)}, ${JSON.stringify(TEST_STATE)})`, undefined, DRIVE_TIMEOUT);

      const navigated = res.al !== res.bl || res.aa !== res.ba;
      const stateChanged = res.before !== res.after;
      if (navigated) return { module, func, cls: 'ok', sig: `nav -> ${res.al}:${res.aa}` };
      if (stateChanged) return { module, func, cls: 'ok', sig: 'state changed' };
      return { module, func, cls: 'no-op', sig: 'no state change, no navigation' };
    } catch (e: any) {
      const msg = e?.message || String(e);
      if (/call stack|RangeError|Maximum call stack/i.test(msg)) return { module, func, cls: 'recurse', sig: msg.slice(0, 90) };
      if (/eval timeout/i.test(msg)) return { module, func, cls: 'hang', sig: `main thread blocked > ${DRIVE_TIMEOUT}ms` };
      if (/is not a function/i.test(msg)) return { module, func, cls: 'error', sig: msg.slice(0, 90) };
      const newErrs = ctx.errors.slice(errBefore);
      const nf = newErrs.find((x: string) => /is not a function/i.test(x));
      if (nf) return { module, func, cls: 'error', sig: nf.slice(0, 90) };
      if (page.isClosed()) return { module, func, cls: 'hang', sig: 'page crashed' };
      return { module, func, cls: 'error', sig: msg.slice(0, 90) };
    }
  }

  async function recycle() {
    await ctx.context.close().catch(() => {});
    ctx = await createPage();
    await quickStart(ctx.page);
    recycles++;
  }

  try {
    for (const module of modules) {
      const funcs = (funcMap.get(module) ?? ['']).slice(0, MAX_FUNCS_PER_MODULE);
      for (const func of funcs) {
        const r = await drive(module, func);
        results.push(r);
        if (r.cls === 'hang' || r.cls === 'recurse') await recycle();
      }
      if (results.length % 25 === 0) console.log(`[triage] ${results.length} drives done (${recycles} recycles)`);
    }
  } catch (e: any) {
    console.error(`✗ Triage crashed: ${e.message}`);
  }

  // ---- Report grouped by class ----
  const byClass = new Map<string, DriveResult[]>();
  for (const r of results) {
    if (!byClass.has(r.cls)) byClass.set(r.cls, []);
    byClass.get(r.cls)!.push(r);
  }
  const order = ['recurse', 'hang', 'error', 'no-op', 'ok'];
  console.log(`\n=== QSPCALL FALLBACK TRIAGE: ${results.length} drives across ${modules.length} modules (${recycles} page recycles) ===`);
  for (const cls of order) {
    const list = byClass.get(cls) ?? [];
    console.log(`\n[${cls}] ${list.length}`);
    for (const r of list) console.log(`    ${r.module}  func='${r.func}'  — ${r.sig}`);
  }

  const actionable = (byClass.get('recurse')?.length ?? 0) + (byClass.get('hang')?.length ?? 0) + (byClass.get('error')?.length ?? 0);
  console.log(`\n[actionable work-list] recurse=${byClass.get('recurse')?.length ?? 0}, hang=${byClass.get('hang')?.length ?? 0}, error=${byClass.get('error')?.length ?? 0} (total ${actionable})`);
  console.log(`[informational] no-op=${byClass.get('no-op')?.length ?? 0} (Cat-3 stub candidates), ok=${byClass.get('ok')?.length ?? 0}`);

  await ctx.page.screenshot({ path: '/tmp/opencode/qspcall-triage.png', fullPage: true }).catch(() => {});
  if (actionable > 0) process.exitCode = 1;

  await browser.close();
  srv.close();
  process.exit(process.exitCode ?? 0);
}

main();
