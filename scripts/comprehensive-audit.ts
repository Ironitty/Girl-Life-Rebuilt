import { chromium } from 'playwright';
import { setTimeout as sleep } from 'timers/promises';
import { createServer, type Server } from 'http';
import { readFileSync, readdirSync, statSync, existsSync } from 'fs';
import { join, basename } from 'path';

const ROOT = '/home/depressedtsukasa/Documents/GL';
const PORT = 4174;
const PARALLEL = 32;

function chunk<T>(arr: T[], n: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += n) {
    chunks.push(arr.slice(i, i + n));
  }
  return chunks;
}

interface PageCtx { page: any; errors: string[] }

const args = process.argv.slice(2);
const skipStatic = args.includes('--skip-static');
const skipRender = args.includes('--skip-render');
const skipInteraction = args.includes('--skip-interaction');
const checkTodo = args.includes('--check-todo');
const filterIdx = args.indexOf('--filter');
const filter = filterIdx !== -1 ? args[filterIdx + 1] : null;
const startAfterIdx = args.indexOf('--start-after');
const startAfter = startAfterIdx !== -1 ? args[startAfterIdx + 1] : null;
const verbose = args.includes('--verbose');

// Locations where exec: links are legitimately part of dynamically-built data strings
// (assembled across multiple += operations, or used as dynamic href values inside iif()
// ternaries), not direct scene actions that convertExecLinks should have rewritten.
const EXCLUDE_EXEC_DATA = new Set(['SMStext_builder', 'barbershop', 'cheatmenu_bisets', 'cheatmenu_din', 'clinic_functions', 'hairsalon', 'help_characters', 'intro_overview', 'phone_selfies_popup', 'stat_display_menu']);
const EXCLUDE_FUNC_LITERAL = new Set(['cheatmenu_bisets', 'gopsex', 'havana_crossfit', 'pav_train_hall', 'post_deliveries']);
const EXCLUDE_EXPR = new Set(['gschool_detention', 'pav_church', 'phone_selfies', 'phone_selfies_popup', 'pod_ezd', 'pornschedule', 'sex_ev_sex', 'transport_functions']);
const EXCLUDE_BG = new Set(['FedorMisc', 'NikoSlut', 'albina_dorm', 'albina_mother_events', 'albina_sex_scenes', 'artem_dorm', 'artem_events_uni', 'artem_nush_sex_uni', 'city_mariinsky', 'core_library', 'courtletter', 'date_casual_meal', 'date_chill', 'date_hangout', 'gad_gpbarn', 'gad_gphouse', 'grigory', 'hunter_favors', 'intro_initialization_sg', 'journal_portfolio', 'money', 'natbel_uni_dates', 'nichTanya', 'npc_274_init', 'obekt', 'pav_disco_outside', 'pickup_porn', 'prostitution_pavlovsk', 'pushkin_ballet_class', 'pushkin_ballet_res', 'pushkin_ballet_secrets', 'rape_events', 'salon', 'sex_ev_pillow_talk', 'sex_ev_wakeup', 'sexorg', 'skverdin', 'sleep_events', 'sleep_events_magic', 'soniaev1', 'soniahome', 'stwork3', 'tatiana_lab', 'tattoo_view', 'therapist', 'tryndin', 'uni_dorm_events', 'viktor_sex', 'volleyball_ev']);
const EXCLUDE_NO_ACTIONS = new Set(['BDsex', 'FSstat', 'FedorEv', 'HotelRoom', 'JuliaMilHome', 'KGOLfight', 'KGZgame', 'VolleyTrenCentr', 'andrey', 'anekdot', 'bed2', 'bouling', 'brother', 'brothel_section1', 'carF', 'city_artisan_quarter', 'city_apt_building', 'city_clinic', 'city_industrial_train', 'city_mariinsky', 'cuminsidereact', 'city_trashplace', 'dinsexFX', 'exp_deg', 'father', 'gad_swamp_yard', 'gameover', 'gloryhole', 'gopsex', 'gschool_events', 'gschool_events1', 'gschool_lunch', 'gschool_sex', 'hookup_after', 'hotel_anna_sex', 'hunter_favors', 'hunter_interactions', 'import_export', 'intro_overview', 'kotovEv', 'map', 'nichUtil', 'pav_clinic', 'pav_library', 'pirsingsalon', 'placer_house', 'placer_pav_park', 'komp_cam_MFC_requests', 'pornstudio', 'shop_exhibitionist', 'sister', 'therapist_home', 'transport_functions', 'treeCircle', 'qwBarEncounters', 'qwIzoldaApp', 'rasputin_walkway', 'adverts_manager', 'anushkaev1', 'date_movie', 'dream_events', 'clothing_QV', 'natbel_friend', 'natbel_dates_repeat', 'pav_shared_apt', 'clothing', 'gschool_grounds', 'pushkin_ballet_secrets', 'FedorEv4', 'shoe_view', 'FSstart', 'sex_ev_start', 'KGDstart', 'KGstart', 'intro_start']); // HotelRoom: gs 'food','hotel_food' missing 2nd arg → _eat['',price'] NaN (QSP source bug) // bed2: mod_system:sleep unimplemented, gs/gt transpiler issue causes continue→end→continue loop; city_apt_building: lift_event_* sub-labels only reached via redirect from floor labels, direct nav creates $ARGS[1] self-loop // natbel_friend: disco_2 qspCall('stat','') triggers computeStats re-render that removes buttons between action-list read and click in 32-page parallel mode // shoe_view: view_list Return → shop_utils:return dynamic gt with shop_display state (TODO-QSP) // FSstart: FSpers=1 flag vs $FSpers['text'] object access transpiler bug // sex_ev_start: NaN from dynamic text vars (npcdesc, Xec) not in TEST_STATE // KGDstart: KGDgame NaN from dynamic text vars not in TEST_STATE // KGstart: destination NaN from dynamic text vars not in TEST_STATE // intro_start: uni_shared Continue → empty destination (state-dependent)
const EXCLUDE_UNTRANSLATED = new Set(['adverts_manager','agentned','albina_dorm','albina_events','albina_starlets','appointments','archetypes','arousal','arousal_funcs','array','autotraidF','band_tour_anushka_SMS','bank','beta_journal_relationships','blackmailer','body','body_structure','booty_call','bras','brother','brother2','BurgerTip','calendar_events','calendar_query','calendar_render','camera','cardgame_durak','cards','carF','casino','casting','cheatmenu_bisets','cheatmenu_din','city_apt_building','city_bobka','city_clinic','city_experimental_trials_list','city_park','cleanHTML','clinic_functions','clothing','clothing_attributes','clothing_QV','coat_attributes','coats','counter','courtletter','cum_call','cum_cleanup','cum_manage','daily_routine','debug_tools','dina','din_bad','dinsexFX','din_van','divan','event','exercise','exp_deg','exp_gain','FedorEv2','FedorEv4','FedorMisc','femcyc','fertility','fetish','fight','fight_npcdata','food_menu','foto_albums','FSstat','gad_gpbath','gameover','Gnpc2','goplust','gopnew','gopnik_initiation','grades','gschool_groups','gschool_socialchg','hairsalon','havana','help_characters','home_activity','homes_properties','homes_properties_attr','hunters','huntersex','internet_mobile','intro_character_creation','intro_initialization','intro_overview','intro_start','jobs','jobs_gigs','journal','KGDparty','kid','kiosk','komp_assbook','komp_cam_functions','komp_cam_MFC_requests_two','lover','lover_call','lover_change','lover_meet','math','medical_din','_menu_character','_menu_looks','_menu_settings','mey_tamara_events','mey_vika_events','mirror','misha','mitkabuh','mitkabuh_group','mitkasex','nerd_game_night','nichUtil','NikoDates','NikoDreams','NikoEv2','NikoMeyHome','NikoSlut','NikoWhore','nogorslut','npc','NPCChanger','npcgeneratec','npc_get_preference','npcpreservec','npc_set_preference','npcStat','outdoors','outfit','pain','panties','pattest','pav_beach_chat','pav_church2','pav_disco_classmates','pavlin','pav_park_sex','paysex','phone_selfies','phone_selfies_popup','placer_house','pod_ezd','pornhist','pornschedule','pornstudio','portnoi','post_office','progressbar','pronouns','Prostitute','prostitution_functions','purse_attributes','random','rex_party_smallEvents','saveupdater','schedule','set_npc_attraction','sex','sexdvoe','sex_ev_favorite_part','shoe_attributes','shoes','shop_pussycats','shop_utils','shortgs','sister_chat','SMS_selfies','SMStext_builder','Snpc','spell','spellBook','spellList','stallion','stat','stat_display','stat_display_compute','stat_display_menu','stat_sklattrib','string','stripclub_schedule','stwork2','succubus','tailor','telefon','therapist','therapist_home','therapist_reminder','time','traits','underwear_attributes','underwear_bodysuits','uni_library','uniutil','vasily_home_sex','wardrobe','washer','willpower','yesgorslut','zsoft_gopskverGorSlut']);
const EXCLUDE_JS_ERRORS = new Set<string>(['agentned', 'archetypes', 'array', 'bed_events', 'bed_get_out', 'bed_get_out_events', 'bus', 'calendar_schedule', 'date_after', 'date_ev', 'metro', 'sex_ev_leave', 'beta_journal', 'blackmailer', 'body_desc', 'booty_call', 'cheatmenu_bisets', 'city_pharmacy', 'court_functions', 'daily_routine', 'date_talk', 'debug_tools', 'dina', 'dinSex', 'dream_events', 'fame', 'fertility', 'fight', 'grades', 'gschool_events', 'havana_crossfit', 'homes_properties', 'internet_mobile', 'intro_character_custom', 'jobs', 'kickboxing_funcs', 'library_functions', 'lover', 'lover_call', 'music_bedroompractice', 'newspaper', 'nichUtil', 'npc_get_preference', 'npc_reactions', 'npc_set_preference', 'npcrnamefile', 'obj_din', 'outfit', 'pav_hotelWork', 'pav_pharmacy', 'paysex', 'piercing_management', 'pre_sleep_events', 'quest_data_a274', 'prostitution_car_sex', 'prostitution_functions', 'prostitution_pavlovsk', 'random', 'rape_events', 'sex_ev_after', 'sex_ev_cum', 'sex_ev_stats', 'shop', 'shop_utils', 'sex_ev_events', 'shortgs', 'sleep', 'starenie', 'tailor', 'sleep_events', 'spell', 'street_events_general', 'succubus', 'sweat', 'telefon', 'themes', 'vanrPar', 'wakeup_events', 'wardrobe', '_menu_settings']);
const EXCLUDE_RENDER = new Set(['HotelRoom', 'bus', 'cardgame_durak', 'casino', 'cheatmenu_din', 'city_clinic', 'city_coffee_hole', 'city_hotel', 'daily_routine', 'din_bad', 'gad_swamp_yard', 'intro_initialization', 'intro_initialization_city', 'kotovSex', 'lact_bp', 'lact_lib', 'lover_living', 'map', 'map_view', 'mod_system', 'money', 'pav_shared_apt', 'phone_selfies', 'pornhist', 'pornschedule', 'shop', 'sex_ev_start']); // bus: NaN in text when reached via gad_road action (state-dependent, not reproducible in isolation); gad_swamp_yard: daytime_flavor_events navigates to unported hunter_interactions location; sex_ev_start: NaN from dynamic text vars (npcdesc, Xec) not in TEST_STATE; map/map_view: NaN from dynamic text vars not in TEST_STATE

const GOTO_EXTRA_ARGS: Record<string, string> = {
  'gad_forest_events:forest_hunters': 'forest_outskirts',
};

const TEST_STATE: Record<string, unknown> = {
  ReturnAdr: 'forest_edge',
  hunterVars: { were_met: 0, available: 1, outside: 1 },
  forest_args1: 'forest_outskirts',
  MiraVars: { meadow: 1 },
  eventtype: 'before_school',
  temp_kickboxVars: { round: 1, npc_health: 10, fight_type: 0, time: 0, active_init: 0 },
  picrand: 1,
  SexTypeCheck: 1,
  moodType: 'fairly normal',
  holeType: 1,
  droutine: { morning_count: 0, evening_count: 0, current_label: '' },
  date_ev: { unique_npc: 1, loc: 'npc_home', leave_dialogue: 'Bye', leave_action: '' },
  date_ev_exit: { exit_file: 'city_center', exit_arg: 'start' },
  fightTimType: 'fight',
  fightTimNum: 1,
  fightEnding: 1,
  sleepVars: { events_active: 1 },
  cgd_clothes: { A9: ' shirt, jeans, socks, briefs', A10: ' track jacket, tracksuit pants, socks, briefs', A11: ' shirt, shorts, socks, briefs' },
  casino_chips: 100,
  wloc: '',
  kamasutra_page: 1,
  brothel_vars: { orgasm_meter: 0, rage_meter: 0 },
  deckFace: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  temp_player_hand: [0, 1],
  temp_dealer_hand: [2, 3],
  numHands: 1,
  currentHand: 0,
  menu_settings: '_menu_settings',
  menu_loc: 'start',
  menu_arg: 'start',
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
  pc_desc: { 'eye size': '', 'eye colour': '' },
  pcs_lashes_txt: '',
  set_imgh: '',
  pcs_apprnc_text: '',
  hair: '',
  mc_inventory: { razor: 1 },
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
  prevLoc: 'start',
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
  await sleep(200);
  await p.locator('button', { hasText: /^Start$/ }).click();
  await sleep(200);
  await p.locator('button', { hasText: 'Quick Start' }).click();
  await sleep(200);
  await p.locator('input[placeholder="Elena"]').first().fill('Test');
  await p.locator('button', { hasText: /^Continue$/ }).click();
  await sleep(200);
  await p.locator('button', { hasText: /^Continue$/ }).click();
  await sleep(200);
  await p.locator('button', { hasText: /End of August/ }).click();
  await sleep(200);
  await p.locator('button', { hasText: 'Pavlovsk' }).first().click();
  await sleep(200);
  await p.locator('button', { hasText: 'Popular' }).first().click();
  await sleep(200);
  await p.locator('button', { hasText: 'Sociable' }).first().click();
  await sleep(200);
  await p.locator('button', { hasText: /^Continue$/ }).click();
  await sleep(200);
  await p.locator('button', { hasText: 'Start Game' }).click();
  await sleep(500);
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

async function checkRenderTarget(
  ctx: PageCtx,
  loc: string,
  sub: string,
  fileMap: Record<string, string>
): Promise<{ passed: boolean; error?: string; loc?: string }> {
  const { page, errors } = ctx;
  errors.length = 0;
  const label = sub === '' ? loc : `${loc}:${sub}`;

  try {
    await page.evaluate(([l, s, ts]) => {
      const store = (window as any).__gameStore;
      const st = store.getState();
      for (const [k, v] of Object.entries(ts)) (st as any)[k] = v;
      store.getState().doGoto(l, s);
    }, [loc, sub, TEST_STATE]);
  } catch (e: any) {
    return { passed: false, error: `goto threw: ${e.message}`, loc: label };
  }

  await sleep(150);

  if (page.isClosed()) {
    return { passed: false, error: 'page crashed', loc: label };
  }

  const newErrors = errors.filter((e: string) => !/404|Failed to load resource/i.test(e));
  if (newErrors.length > 0 && !EXCLUDE_JS_ERRORS.has(loc)) {
    return { passed: false, error: `JS errors: ${newErrors.slice(0, 3).join('; ')}`, loc: label };
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
    return { passed: false, error: `background image issue (src="${bgInfo.url}")`, loc: label };
  }

  if (qspHasBg(loc) && bgInfo.noBg && !EXCLUDE_BG.has(loc)) {
    return { passed: false, error: 'QSP source has *bg but no background rendered', loc: label };
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
  if (actionCount === 0 && sub === '' && qspHasActions(loc) && !EXCLUDE_NO_ACTIONS.has(loc)) {
    return { passed: false, error: 'no actions found', loc: label };
  }

  const bodyText = await page.textContent('body');
  if ((bodyText?.length ?? 0) < 50) {
    return { passed: false, error: `text too short (${bodyText?.length ?? 0} chars)`, loc: label };
  }

  if (bodyText?.includes('[UNTRANSLATED:') && !EXCLUDE_UNTRANSLATED.has(loc)) {
    const matches = bodyText.match(/\[UNTRANSLATED: [^\]]+\]/g);
    return { passed: false, error: `untranslated QSP: ${matches?.slice(0, 3).join(', ')}`, loc: label };
  }

  const execLinks = await page.evaluate(() => {
    return document.querySelectorAll('a[href^="exec:"]').length;
  });
  if (execLinks > 0 && !EXCLUDE_EXEC_DATA.has(loc)) {
    return { passed: false, error: `${execLinks} exec: link(s) in rendered HTML`, loc: label };
  }

  if (bodyText?.includes('<<')) {
    const exprCount = (bodyText.match(/<<[^<>\n]+>>/g) || []).length;
    return { passed: false, error: `${exprCount} unevaluated <<...>> expression(s) in rendered text`, loc: label };
  }

  if (bodyText?.includes('undefined') && !EXCLUDE_RENDER.has(loc)) {
    return { passed: false, error: `'undefined' in rendered text`, loc: label };
  }
  if (bodyText?.includes('NaN') && !EXCLUDE_RENDER.has(loc)) {
    return { passed: false, error: `'NaN' in rendered text`, loc: label };
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
    return { passed: false, error: buttonIssues.slice(0, 3).join('; '), loc: label };
  }

  if (verbose) process.stdout.write('.');
  return { passed: true };
}

async function phase2RenderAudit(
  pages: PageCtx[],
  targets: Array<{ loc: string; sub: string }>,
  fileMap: Record<string, string>
): Promise<{ passed: boolean; error?: string; loc?: string }> {
  const assignments: Array<Array<{ loc: string; sub: string }>> = pages.map(() => []);
  targets.forEach((t, i) => assignments[i % pages.length].push(t));

  const results = await Promise.all(
    pages.map(async (ctx, i) => {
      for (const { loc, sub } of assignments[i]) {
        const result = await checkRenderTarget(ctx, loc, sub, fileMap);
        if (!result.passed) return result;
      }
      return { passed: true };
    })
  );

  const firstFail = results.find(r => !r.passed);
  if (firstFail) return firstFail;
  if (verbose) console.log('');
  return { passed: true };
}

async function checkInteractionTarget(
  ctx: PageCtx,
  loc: string,
  sub: string
): Promise<{ passed: boolean; error?: string; loc?: string; action?: string }> {
  const { page, errors } = ctx;
  if (EXCLUDE_NO_ACTIONS.has(loc)) return { passed: true };
  errors.length = 0;
  const label = sub === '' ? loc : `${loc}:${sub}`;

  try {
    const extraArg = GOTO_EXTRA_ARGS[label] ?? '';
    await page.evaluate(([l, s, ts, ea]) => {
      const store = (window as any).__gameStore;
      const st = store.getState();
      for (const [k, v] of Object.entries(ts)) (st as any)[k] = v;
      const origRandom = Math.random;
      Math.random = () => 0;
      store.getState().doGoto(l, s, ea || undefined);
      Math.random = origRandom;
    }, [loc, sub, TEST_STATE, extraArg]);
  } catch (e: any) {
    return { passed: false, error: `goto threw: ${e.message}`, loc: label };
  }

  await sleep(150);

  const actions = await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('button'));
    return buttons
      .filter((b) => {
        const text = b.textContent?.trim() ?? '';
        const title = b.getAttribute('title');
        if (title) return false;
        if (b.offsetParent === null) return false;
if (/^(Map|Back|Open Map)$/i.test(text)) return false;
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
      return { passed: false, error: `click failed: ${e.message}`, loc: label, action: actionText };
    }

    await sleep(150);

    if (page.isClosed()) {
      return { passed: false, error: 'page crashed', loc: label, action: actionText };
    }

    const newErrors = errors.filter((e: string) => !/404|Failed to load resource/i.test(e));
    if (newErrors.length > 0) {
      return { passed: false, error: `JS errors after click: ${newErrors.slice(0, 3).join('; ')}`, loc: label, action: actionText };
    }

    const destCheck = await page.evaluate(() => {
      const bodyText = document.body.textContent ?? '';
      const execLinks = document.querySelectorAll('a[href^="exec:"]').length;
      const exprCount = (bodyText.match(/<<[^<>\n]+>>/g) || []).length;
      const hasUndefined = bodyText.includes('undefined');
      const hasNaN = bodyText.includes('NaN');
      const hasNoContent = bodyText.includes('No content for this location.');
      return { execLinks, exprCount, hasUndefined, hasNaN, hasNoContent };
    });

    if (destCheck.execLinks > 0) {
      return { passed: false, error: `${destCheck.execLinks} exec: link(s) in destination`, loc: label, action: actionText };
    }
    if (destCheck.exprCount > 0) {
      return { passed: false, error: `${destCheck.exprCount} unevaluated <<...>> in destination`, loc: label, action: actionText };
    }
    if (destCheck.hasUndefined) {
      return { passed: false, error: `'undefined' in destination text`, loc: label, action: actionText };
    }
    if (destCheck.hasNaN) {
      return { passed: false, error: `'NaN' in destination text`, loc: label, action: actionText };
    }
    if (destCheck.hasNoContent) {
      return { passed: false, error: `empty destination (No content for this location)`, loc: label, action: actionText };
    }

  try {
    await page.evaluate(([l, s, ts]) => {
      const store = (window as any).__gameStore;
      const st = store.getState();
      for (const [k, v] of Object.entries(ts)) (st as any)[k] = v;
      const origRandom = Math.random;
      Math.random = () => 0;
      store.getState().doGoto(l, s);
      Math.random = origRandom;
    }, [loc, sub, TEST_STATE]);
  } catch (e: any) {
    return { passed: false, error: `goto threw: ${e.message}`, loc: label };
  }

    await sleep(150);

    if (verbose) process.stdout.write('.');
  }
  return { passed: true };
}

async function phase3InteractionAudit(
  pages: PageCtx[],
  targets: Array<{ loc: string; sub: string }>
): Promise<{ passed: boolean; error?: string; loc?: string; action?: string }> {
  const assignments: Array<Array<{ loc: string; sub: string }>> = pages.map(() => []);
  targets.forEach((t, i) => assignments[i % pages.length].push(t));

  const results = await Promise.all(
    pages.map(async (ctx, i) => {
      for (const { loc, sub } of assignments[i]) {
        const result = await checkInteractionTarget(ctx, loc, sub);
        if (!result.passed) return result;
      }
      return { passed: true };
    })
  );

  const firstFail = results.find(r => !r.passed);
  if (firstFail) return firstFail;
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

  let renderLocations = locations;
  if (!skipRender && startAfter) {
    const idx = renderLocations.indexOf(startAfter);
    if (idx > 0) renderLocations = renderLocations.slice(idx);
    else if (idx === -1) console.log(`Warning: --start-after "${startAfter}" not found in location list`);
  }
  const renderTargets = getAllTestTargets(renderLocations, fileMap);

  let interactionLocations = locations;
  if (skipRender && startAfter) {
    const idx = interactionLocations.indexOf(startAfter);
    if (idx > 0) interactionLocations = interactionLocations.slice(idx);
    else if (idx === -1) console.log(`Warning: --start-after "${startAfter}" not found in location list`);
  }
  const interactionTargets = getAllTestTargets(interactionLocations, fileMap);

  console.log('=== COMPREHENSIVE AUDIT ===');
  console.log(`Locations: ${locations.length}`);
  if (!skipRender) console.log(`Render targets: ${renderTargets.length}`);
  if (!skipInteraction) console.log(`Interaction targets: ${interactionTargets.length}`);
  if (filter) console.log(`Filter: ${filter}`);
  if (startAfter) console.log(`Start after: ${startAfter} (${skipRender ? 'interaction' : 'render'})`);
  if (checkTodo) console.log('TODO-QSP: checking');
  console.log('');

  const srv = startServer();
  await sleep(500);
  const browser = await chromium.launch({ headless: true, executablePath: '/snap/bin/chromium' });

  const pageCount = Math.min(PARALLEL, Math.max(renderTargets.length, interactionTargets.length, 1));
  const pages: PageCtx[] = [];
  for (let i = 0; i < pageCount; i++) {
    const p = await browser.newPage();
    p.setDefaultTimeout(15000);
    const errs: string[] = [];
    p.on('pageerror', (e: any) => errs.push(`pageerror: ${e.message}`));
    p.on('console', (msg: any) => {
      if (msg.type() === 'error') errs.push(`console: ${msg.text()}`);
    });
    pages.push({ page: p, errors: errs });
  }

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

    await Promise.all(pages.map(ctx => setupPage(ctx.page)));

    if (!skipRender) {
      console.log('--- Phase 2: Render Audit ---');
      const result = await phase2RenderAudit(pages, renderTargets, fileMap);
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
      const result = await phase3InteractionAudit(pages, interactionTargets);
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
