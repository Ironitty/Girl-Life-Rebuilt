import { chromium } from 'playwright';
import { createServer } from 'http';
import { createReadStream, existsSync, statSync } from 'fs';
import { join, extname } from 'path';

const ROOT = '/home/depressedtsukasa/Documents/GL';
const PORT = 4175;
const CT: Record<string, string> = { '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.json': 'application/json', '.woff2': 'font/woff2', '.ttf': 'font/ttf', '.mp3': 'audio/mpeg', '.ogg': 'audio/ogg', '.wav': 'audio/wav' };

function startServer() {
  return new Promise<ReturnType<typeof createServer>>((resolve) => {
    const srv = createServer((req, res) => {
      const url = new URL(req.url ?? '/', `http://localhost:${PORT}`);
      let filePath = join(ROOT, 'dist', url.pathname);
      if (!existsSync(filePath) || statSync(filePath).isDirectory()) filePath = join(ROOT, 'dist', 'index.html');
      if (!existsSync(filePath)) { res.writeHead(404); res.end('Not found'); return; }
      const ct = CT[extname(filePath)] ?? 'application/octet-stream';
      const st = statSync(filePath);
      res.writeHead(200, { 'Content-Type': ct, 'Content-Length': st.size });
      createReadStream(filePath).pipe(res);
    });
    srv.listen(PORT, () => resolve(srv));
  });
}

async function main() {
  const srv = await startServer();
  const browser = await chromium.launch({ headless: true, executablePath: '/usr/bin/google-chrome', args: ['--disable-gpu', '--disable-gpu-compositing', '--disable-dev-shm-usage'] });
  const page = await browser.newPage();
  const errors: string[] = [];

  page.on('pageerror', (err) => {
    errors.push(`PAGEERROR: ${err.message}\n${err.stack}`);
  });
  page.on('crash', () => {
    errors.push('PAGE CRASHED');
  });
  page.on('requestfailed', (req) => {
    errors.push(`REQUEST FAILED: ${req.url()} ${req.failure()?.errorText}`);
  });
  page.on('dialog', async (dialog) => {
    errors.push(`DIALOG: ${dialog.type()} ${dialog.message()}`);
    await dialog.dismiss();
  });
  page.on('console', (msg) => {
    if (msg.type() === 'log') {
      errors.push(`CONSOLE[log]: ${msg.text()}`);
    }
  });
  page.on('console', (msg) => {
    if (msg.type() === 'error' || msg.type() === 'warning') {
      errors.push(`CONSOLE[${msg.type()}]: ${msg.text()}`);
    }
  });

  await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  const hasStore = await page.evaluate(() => !!(window as any).__gameStore);
  console.log('Store loaded:', hasStore);
  if (!hasStore) { console.log('Page failed to load store'); process.exit(1); }

  await page.evaluate(() => {
    window.addEventListener('error', (e: ErrorEvent) => {
      console.error('WINDOW ERROR:', e.message, e.filename, e.lineno, e.colno, e.error?.stack);
    });
    window.addEventListener('unhandledrejection', (e: PromiseRejectionEvent) => {
      console.error('UNHANDLED REJECTION:', e.reason?.message, e.reason?.stack);
    });
  });

  try {
    await page.evaluate(async () => {
    const store = (window as any).__gameStore;
    if (!store) { console.error('NO STORE'); return; }
    const st = store.getState();
    const ts: Record<string, unknown> = {
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
      aarraynumber: 50,
      curloc: 'city_artisan_quarter',
      region: 'city',
      droutine: { morning_count: 0, evening_count: 0, current_label: '' },
      date_ev: { unique_npc: 1, loc: 'npc_home', leave_dialogue: 'Bye', leave_action: '', film_decide: 'action', prev_arg: 'talk_menu', dialogue_setting: '' },
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
    };
    for (const [k, v] of Object.entries(ts)) (st as any)[k] = v;
    console.log('Running reset_all...');
    try {
      store.getState().doGoto('intro_functions', 'reset_all');
      console.log('reset_all done');
    } catch (e: any) {
      console.error('reset_all ERROR:', e.message, e.stack);
    }
  });
  } catch (e: any) {
    console.error('EVALUATE ERROR:', e.message);
  }
  try { await page.waitForTimeout(5000); } catch { /* page closed */ }

  console.log('=== ERRORS ===');
  errors.forEach(e => console.log(e));
  console.log('=== END ===');

  await browser.close();
  srv.close();
}

main().catch(console.error);
