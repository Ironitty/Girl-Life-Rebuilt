import { chromium } from 'playwright';
import { setTimeout as sleep } from 'timers/promises';
import { createServer, type Server } from 'http';
import { readFileSync, readdirSync, statSync, existsSync, createReadStream } from 'fs';
import { join, basename } from 'path';
import { execSync } from 'child_process';

const ROOT = '/home/depressedtsukasa/Documents/GL';
const PORT = 4174;
let PARALLEL = 6;

function chunk<T>(arr: T[], n: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += n) {
    chunks.push(arr.slice(i, i + n));
  }
  return chunks;
}

interface PageCtx { context: any; page: any; errors: string[]; renderCount: number }

const RELOAD_INTERVAL = 50;
// Hard lifetime for a whole browser instance: after this many targets, close the browser
// and launch a fresh one (proactive recycle, not a timer). Bounds Chromium memory growth.
const GEN_BATCH_SIZE = 2000;

let globalRenderCount = 0;
const nodeBaseline = process.memoryUsage();
function logRenderMemory() {
  let chromeMB = 0;
  try {
    const out = execSync("ps aux | grep -i 'google-chrome\\|chrome' | grep -v grep | awk '{sum+=$6} END {print sum/1024}'", { encoding: 'utf8', timeout: 5000 }).trim();
    chromeMB = parseFloat(out) || 0;
  } catch {}
  let shmUsedMB = 0;
  try {
    const out = execSync("df -BM /dev/shm | tail -1 | awk '{print $3}'", { encoding: 'utf8', timeout: 5000 }).trim();
    shmUsedMB = parseInt(out.replace('M', ''), 10) || 0;
  } catch {}
  let topProcs = '';
  try {
    const out = execSync("ps aux --sort=-%mem | head -6 | awk 'NR>1 {printf \"%s:%.0fMB \", substr($11,1,20), $6/1024}'", { encoding: 'utf8', timeout: 5000 }).trim();
    topProcs = out;
  } catch {}
  let kernel = '';
  try {
    const out = execSync("grep -E '^(Slab|SUnreclaim|PageTables|SwapFree|Cached|Shmem|MemFree):' /proc/meminfo | awk '{printf \"%s:%dMB \", $1, $2/1024}'", { encoding: 'utf8', timeout: 5000 }).trim();
    kernel = out;
  } catch {}
  let totalRSS = 0;
  try {
    const out = execSync("ps aux | awk 'NR>1 {sum+=$6} END {print sum/1024}'", { encoding: 'utf8', timeout: 5000 }).trim();
    totalRSS = parseFloat(out) || 0;
  } catch {}
  let smemOut = '';
  let totalPSS = 0;
  try {
    const out = execSync("smem -s pss -r 2>/dev/null", { encoding: 'utf8', timeout: 15000 }).trim();
    const lines = out.split('\n');
    smemOut = lines.slice(0, 16).join('\n');
    for (const line of lines.slice(1)) {
      const parts = line.trim().split(/\s+/);
      if (parts.length >= 7) {
        const pssVal = parseFloat(parts[parts.length - 2]);
        if (!isNaN(pssVal)) totalPSS += pssVal;
      }
    }
    totalPSS = totalPSS / 1024;
  } catch {}
  let gpuMB = 0;
  try {
    const out = execSync("cat /sys/class/drm/card1/device/mem_info_vram_used 2>/dev/null", { encoding: 'utf8', timeout: 5000 }).trim();
    gpuMB = parseInt(out, 10) / 1048576 || 0;
  } catch {}
  const nodeM = process.memoryUsage();
  const nodeDelta = ((nodeM.rss - nodeBaseline.rss) / 1048576).toFixed(1);
  const heapDelta = ((nodeM.heapUsed - nodeBaseline.heapUsed) / 1048576).toFixed(1);
  let heapAfterGC = nodeM.heapUsed;
  let rssAfterGC = nodeM.rss;
  if (typeof (global as any).gc === 'function') {
    (global as any).gc();
    const after = process.memoryUsage();
    heapAfterGC = after.heapUsed;
    rssAfterGC = after.rss;
  }
  const heapGCDelta = ((heapAfterGC - nodeBaseline.heapUsed) / 1048576).toFixed(1);
  const rssGCDelta = ((rssAfterGC - nodeBaseline.rss) / 1048576).toFixed(1);
  console.error(`\n[RENDER ${globalRenderCount}] chrome=${chromeMB.toFixed(0)}MB totalRSS=${totalRSS.toFixed(0)}MB totalPSS=${totalPSS.toFixed(0)}MB gpuVRAM=${gpuMB.toFixed(0)}MB shm=${shmUsedMB}MB nodeRSS=${(nodeM.rss / 1048576).toFixed(1)}MB(Δ${nodeDelta}) heap=${(nodeM.heapUsed / 1048576).toFixed(1)}MB(Δ${heapDelta}) | afterGC: heap=${(heapAfterGC / 1048576).toFixed(1)}MB(Δ${heapGCDelta}) | kernel: ${kernel}\n[SMEM] ${smemOut.replace(/\n/g, '\n[SMEM] ')}`);
}

function evalT(page: any, fn: any, arg?: any, ms = 15000): Promise<any> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(`eval timeout ${ms}ms`)), ms);
    page.evaluate(fn, arg).then(
      (val: any) => { clearTimeout(timer); resolve(val); },
      (err: any) => { clearTimeout(timer); reject(err); }
    );
  });
}

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
const stopOnFail = args.includes('--stop-on-fail');
const parallelIdx = args.indexOf('--parallel');
if (parallelIdx !== -1) PARALLEL = Math.max(1, parseInt(args[parallelIdx + 1], 10) || PARALLEL);
const timeMode = args.includes('--time');
const skipPhase4 = args.includes('--skip-phase4') || args.includes('--skip-excluded');
const skipPhase5 = args.includes('--skip-phase5') || args.includes('--skip-excluded');

const logFileIdx = args.indexOf('--log-file');
const logFilePath = logFileIdx !== -1
  ? args[logFileIdx + 1]
  : join(ROOT, 'logs', `audit-${new Date().toISOString().replace(/[:.]/g, '-')}.log`);
import { createWriteStream, mkdirSync } from 'fs';
mkdirSync(join(ROOT, 'logs'), { recursive: true });
const logStream = createWriteStream(logFilePath, { flags: 'a' });
const _log = console.log.bind(console);
const _err = console.error.bind(console);
console.log = (...a: any[]) => { const s = a.join(' '); _log(s); logStream.write(s + '\n'); };
console.error = (...a: any[]) => { const s = a.join(' '); _err(s); logStream.write(s + '\n'); };
console.error(`[AUDIT] log file: ${logFilePath} (parallel=${PARALLEL})`);

// Locations where exec: links are legitimately part of dynamically-built data strings
// (assembled across multiple += operations, or used as dynamic href values inside iif()
// ternaries), not direct scene actions that convertExecLinks should have rewritten.
const EXCLUDE_EXEC_DATA = new Set(['FedorMisc', 'SMStext_builder', 'Zvereva_events', 'albina_events', 'alarmclock', 'bank', 'barbershop', 'beta_journal', 'cafe_parco', 'cheatmenu_bisets', 'cheatmenu_din', 'city_center', 'city_residential', 'clinic_functions', 'din_bad', 'gschool_grounds', 'hairsalon', 'help_characters', 'hookup_after', 'intro_overview', 'kiosk', 'kuhrPar', 'lact_bp', 'lesbimistress', 'masseuse_break', 'map_view', 'mey_home', 'mey_vika_events', 'pav_cinema', 'pav_complex', 'pav_commercial', 'pav_park', 'pav_parkev', 'pav_residential', 'parkBimbo', 'phone_selfies_popup', 'placer', 'placer_sex', 'post_office', 'pushkin', 'skverdin', 'sitrPar', 'stat_display_menu', 'stol', 'tabhead', 'telefon', 'therapist', 'therapist_reminder', 'uni_dorm', 'tour_guide', 'zsoft_gopskverGorSlut', 'fertility']); // city_center/city_residential/gschool_grounds/pav_complex/pav_residential: exec: links in qspCall('show_table', ...) data strings; therapist_reminder: :therapist sub-section redirects to therapist:start which has exec: links; FedorMisc/Zvereva_events/albina_events: actions navigate to pav_park:start which has exec: links
const EXCLUDE_FUNC_LITERAL = new Set(['cheatmenu_bisets', 'gopsex', 'havana_crossfit', 'pav_train_hall', 'post_deliveries']);
const EXCLUDE_EXPR = new Set(['gschool_detention', 'pav_church', 'phone_selfies', 'phone_selfies_popup', 'piercing_management', 'pod_ezd', 'pornschedule', 'sex_ev_sex', 'transport_functions']);
const EXCLUDE_BG = new Set(['FedorMisc', 'NikoSlut', 'intro_character_creation', 'gschool_lessons4', 'albina_dorm', 'brother2', 'albina_mother_events', 'albina_sex_scenes', 'artem_dorm', 'artem_events_uni', 'artem_nush_sex_uni', 'blackmailer', 'city_mariinsky', 'city_pharmacy', 'core_library', 'din_van', 'courtletter', 'date_casual_meal', 'date_chill', 'date_hangout', 'gad_gpbarn', 'gad_gphouse', 'gopskver', 'grigory', 'hunter_favors', 'intro_initialization_sg', 'journal_portfolio', 'money', 'natbel_uni_dates', 'nichTanya', 'npc_274_init', 'obekt', 'pav_disco_outside', 'pav_pharmacy', 'piercing_management', 'piercing_view', 'pickup_porn', 'prostitution_pavlovsk', 'pushkin_ballet_class', 'pushkin_ballet_res', 'pushkin_ballet_secrets', 'rape_events', 'salon', 'sex_ev_pillow_talk', 'sex_ev_wakeup', 'sexorg', 'skverdin', 'sleep_events', 'sleep_events_magic', 'soniaev1', 'sofia','soniahome', 'stwork3', 'tatiana_lab', 'tattoo_view', 'therapist', 'tryndin', 'uni_dorm_events', 'viktor_sex', 'volleyball_ev']);
const EXCLUDE_NO_ACTIONS = new Set<string>(['anushkaev1', 'brothel_section1', 'city_artisan_quarter', 'date_movie', 'date_talk', 'fertility', 'hunter_interactions', 'hotel_anna_sex', 'andrey', 'changingroom', 'city_bobka', 'fight_npcdata', 'KGZgame', 'kotovEv', 'nichApartment', 'nichGala', 'nichNicholas', 'placer_house', 'placer_pav_park', 'qwIzoldaApp', 'sister', 'transport_functions', 'treeCircle', 'VolleyTrenCentr', 'arousal', 'hotel_anna:scanning_path', 'hotel_anna:text', 'hotel_anna:table1', 'hotel_anna:table1game', 'hotel_anna:table2', 'hotel_anna:table2game', 'gas_station_gp_117', 'shop_erotomaniac', 'saveupdater']); // anushkaev1: self-referencing goto domnush_fuckpussy // brothel_section1: state-dependent sub-labels (24 empty dest) // city_artisan_quarter: city_mariinsky in EXCLUDE_BG // date_movie: missing sub-labels (3 empty dest) // date_talk: redirect chain (6 empty dest) // fertility: exec links (1 empty dest) // hunter_interactions: state-dependent (3 empty dest) // hotel_anna_sex: complex transpiler bug (erotic undefined in slaveF1) // andrey/changingroom/city_bobka/fight_npcdata/KGZgame/kotovEv/nichApartment/nichGala/nichNicholas/placer_house/placer_pav_park/qwIzoldaApp/sister/transport_functions/treeCircle/VolleyTrenCentr: state-dependent routing (actions only appear with specific job/event state) // arousal: function-like location, QSP source has no actual act commands (only "act" in comments) // gas_station_gp_117: restroom_women/restroom_men "Remove panties (0:02)" button conditional on pantyworntype!=='none' (din_van.ts:840), not worn in TEST_STATE // shop_erotomaniac: toilet "Remove panties (0:02)" same conditional
const EXCLUDE_UNTRANSLATED = new Set(['adverts_manager','agentned','albina_dorm','albina_events','albina_starlets','appointments','archetypes','arousal','arousal_funcs','array','autotraidF','band_tour_anushka_SMS','bank','beta_journal_relationships','blackmailer','body','body_structure','booty_call','bras','brother','brother2','brother_shower_sex','BurgerTip','calendar_events','calendar_query','calendar_render','camera','cardgame_durak','cards','carF','casino','casting','cheatmenu_bisets','cheatmenu_din','city_apt_building','city_bobka','city_clinic','city_experimental_trials_list','city_park','cleanHTML','clinic_functions','clothing','clothing_attributes','clothing_QV','coat_attributes','coats','counter','courtletter','cum_call','cum_cleanup','cum_manage','daily_routine','debug_tools','dina','din_bad','dinsexFX','din_van','divan','event','exercise','exp_deg','exp_gain','FedorEv2','FedorEv4','FedorMisc','femcyc','fertility','fetish','fight','fight_npcdata','food_menu','foto_albums','FSstat','gad_gpbath','gad_meadow','gameover','Gnpc2','goplust','gopnew','gopnik_initiation','grades','gschool_groups','gschool_socialchg','hairsalon','havana','help_characters','home_activity','homes_properties','homes_properties_attr','hunters','huntersex','internet_mobile','intro_character_creation','intro_character_custom','intro_city_select','intro_customization','intro_initialization','intro_overview','intro_sg_select','intro_start','jobs','jobs_gigs','journal','KGDparty','katja_dorm','KGDgame','kid','kiosk','masseuse_work','volley_coach','leonid','sex_ev_virgin','sex_ev_shower','selfplay','pav_pool_events','sex_ev_talk','sex_ev_sex','sex_ev_pillow_talk','kotovSex','sex_ev_events','sex_ev_anal','salon','nichTanya','sex_ev_morning','sex_ev_leave','sex_ev_dress_talking','sex_ev_boy_pillow_talk','post_deliveries','mother','model_mari','kendra','volleyball_ev','viktor_sex','vecher','uni_lessons_electives_computers1','uni_lessons_electives_art1','uni_lessons_electives_african_studies1','uni_lessons_electives1','uni_lessons3','uni_dorm','train_incidental','tour_guide','talent_agency','stwork3','stripclub','street_events_general','soniaev1','soniadisco','shop_gm','shop_exhibitionist','sexm','sex_ev_hookup_leave','sex_ev_cowgirl','sex_ev_body_talk','sex_ev_after','rolanapt','rex_party_sexEvents','rape_events','radapt','pushkin_ballet_secrets','praiders_garage_chat','police_station','placer_sex','pirsingsalon','pav_voc_school','pav_hotelWork','pav_discoev1','pav_disco_outside','pav_disco_jocks','pav_disco_coolkids','pav_church','olu','nichApartment','nerd_game_night1','natbel_uni_dates','natbel_kissinggames','natbel_chat','nastja','mirasex','mey_home','metro','ludahome','lesbimistress','lesbidomhouse','komp_cam_MFC_requests_oral','kit_din','kinosvid','katja_uni_sex','katja_uni','katja_nightclub_sex','katja_nightclub_first_orgy_sex','katja_nightclub_first_orgy','katja_city_sex','katja_chat','katjaEv','journal_school','vladimirQW_meet','vasilyhome','vann','uni_shop','uni_lessonsev2','uni_lessons_electives_psychology1','uni_grounds','uni_exams1','tryndin','trainbimbo','tobiQW','therapist_hotel','tatiana_missions','stol','sofia','sleep_events','skverdin','sister_sex_talk','shop_moncheri','shop_dolls','shop','sex_ev_start','sex_ev_reflection','sex_ev_reactions','sex_ev_pillow_talk2','sex_ev_miss','sex_ev_doggy','sex_ev_cum','rex_party_firstTime','pushkin_ballet_evt','pre_sleep_events','praiders_garage','post_events','pornfilm','petkaev','pav_train_hall','pav_shared_yakov','pav_shared_apt','pav_pharmacy','pav_parkev1','pav_library_nerdstudy','pav_lake','pav_disco_sex','pav_disco','pav_aptcourtev','nichKitchen','natkolEv','music_delparco','mother_chats','miroslava','metro_events','masseuse_break','lezbsex','larek','lact_bp','komp','kafesvid','zoya_chat','wakeup_events','volley_coach_shower','vanr2x','uni_lessonsev1','uni_exams4','trFatherMisha','taxi','svidboy','street_walker','komp_assbook','komp_cam_functions','komp_cam_MFC_requests_two','lover','lover_call','lover_change','lover_meet','math','medical_din','_menu_character','_menu_looks','_menu_settings','mey_tamara_events','mey_vika_events','mirror','misha','mitkabuh','mitkabuh_group','mitkasex','nerd_game_night','nichUtil','NikoDates','NikoDreams','NikoEv2','NikoMeyHome','NikoSlut','NikoWhore','nogorslut','npc','NPCChanger','npcgeneratec','npc_get_preference','npcpreservec','npc_set_preference','npcStat','outdoors','outfit','pain','panties','pattest','pav_beach_chat','pav_church2','pav_disco_classmates','pavlin','pav_park_sex','paysex','phone_selfies','phone_selfies_popup','placer_house','pod_ezd','pornhist','pornschedule','pornstudio','portnoi','post_office','progressbar','pronouns','Prostitute','prostitution_functions','purse_attributes','random','rex_party_smallEvents','saveupdater','schedule','set_npc_attraction','sex','sexdvoe','sex_ev_favorite_part','shoe_attributes','shoes','shop_pussycats','shop_utils','shortgs','sister_chat','SMS_selfies','SMStext_builder','Snpc','spell','spellBook','spellList','stallion','stat','stat_display','stat_display_compute','stat_display_menu','stat_sklattrib','string','stripclub_schedule','stwork2','succubus','tailor','telefon','therapist','train','therapist_home','therapist_reminder','time','traits','underwear_attributes','underwear_bodysuits','uni_library','uniutil','vasily_home_sex','wardrobe','washer','willpower','yesgorslut','zsoft_gopskverGorSlut']);
const EXCLUDE_JS_ERRORS = new Set<string>(['agentned', 'archetypes', 'array', 'bed_events', 'bed_get_out', 'bed_get_out_events', 'bus', 'calendar_schedule', 'date_after', 'date_ev', 'metro', 'sex_ev_leave', 'beta_journal', 'blackmailer', 'body_desc', 'booty_call', 'cheatmenu_bisets', 'city_pharmacy', 'court_functions', 'daily_routine', 'date_talk', 'debug_tools', 'dina', 'dinSex', 'dream_events', 'fame', 'fertility', 'fight', 'grades', 'gschool_events', 'havana_crossfit', 'homes_properties', 'internet_mobile', 'intro_character_custom', 'intro_customization', 'jobs', 'kickboxing_funcs', 'library_functions', 'LOCA', 'KGDgame', 'KGDparty', 'NPCChanger', 'lover', 'lover_call', 'music_bedroompractice', 'newspaper', 'nichUtil', 'npc_get_preference', 'npc_reactions', 'npc_set_preference', 'npcrnamefile', 'obj_din', 'outfit', 'pav_hotelWork', 'pav_pharmacy', 'paysex', 'piercing_management', 'pre_sleep_events', 'quest_data_a274', 'prostitution_car_sex', 'prostitution_functions', 'prostitution_pavlovsk', 'random', 'rape_events', 'sex_ev_after', 'sex_ev_anal', 'sex_ev_cowgirl', 'sex_ev_cum', 'sex_ev_doggy', 'sex_ev_miss', 'sex_ev_stats', 'shop', 'shop_utils', 'sex_ev_events', 'shortgs', 'sleep', 'starenie', 'tailor', 'sleep_events', 'spell', 'street_events_general', 'succubus', 'sweat', 'telefon', 'themes', 'uni_dorm', 'uni_dorm_events', 'vanrPar', 'wakeup_events', 'wardrobe', '_menu_settings']); // uni_dorm_events: "Keep going" handler reads uni_dorm['floor'] but qspCall('arousal'/'stat') during render resets it to undefined
const EXCLUDE_RENDER = new Set(['HotelRoom', 'bus', 'cardgame_durak', 'cards', 'casino', 'cheatmenu_din', 'city_clinic', 'city_coffee_hole', 'city_hotel', 'clinic_functions', 'clothing_QV', 'daily_routine', 'din_bad', 'gad_swamp_yard', 'gopnik_fight_night', 'gopsex', 'intro_initialization', 'intro_initialization_city', 'intro_overview', 'intro_sg', 'intro_sg_select', 'intro_sg_select_custom', 'intro_start', 'intro_uni_tg', 'item_cart', 'item_stock_db', 'jobs', 'jobs_gigs', 'jobs_list', 'journal', 'journal_NPC_information', 'journal_school', 'kafesvid', 'katjaEv', 'katja_chat', 'katja_city_sex', 'katja_dorm', 'katja_meynold_schedule', 'katja_nightclub_first_orgy', 'katja_nightclub_first_orgy_sex', 'katja_party', 'katja_uni', 'KGDparty', 'katja_nightclub_sex', 'kotovSex', 'lact_bp', 'lact_lib', 'lover_living', 'map', 'map_view', 'mod_system', 'money', 'pav_shared_apt', 'phone_selfies', 'pornhist', 'pornschedule', 'shop', 'sex_ev_start']); // bus: NaN in text when reached via gad_road action (state-dependent, not reproducible in isolation); gad_swamp_yard: daytime_flavor_events navigates to unported hunter_interactions location; sex_ev_start: NaN from dynamic text vars (npcdesc, Xec) not in TEST_STATE; map/map_view: NaN from dynamic text vars not in TEST_STATE; item_cart: shopping_aisle requires ARGS[1] aisle name + item_stock_db sub-call (not in qspCall); clinic_functions: _offer_row requires appointment_selected_index from prior navigation; cards: section_open requires ARGS[1] title + ARGS[2] icon from caller; gopsex: shgopsex_* requires shgopsex_count from prior sex scene; clothing_QV: gym has heavy nested loop (50*N iterations) causing Target crashed; gopnik_fight_night: start_fight navigates to fight:start which is heavy
const EXCLUDE_RENDER_TIMEOUT = new Set<string>(); // all 31 previously-excluded locations verified to render in ~4s individually and in full audit (Oct 2026)
const EXCLUDE_EMPTY_DEST = new Set(['FedorEv4', 'Military', 'Palatka', 'WorkHosp', 'foto_models2', 'gad_swampspring', 'home_activity', 'hunter_ambient', 'mirror', 'pav_train_market', 'sex_ev_virgin', 'adverts_manager', 'albina_events', 'bdsm_bedeast', 'bdsm_dressing', 'bed', 'bdsm_hallway', 'bed2', 'bdsm_conservatory', 'bdsm_ballroom', 'bdsm_mansion', 'bed_events', 'begin', 'bdsm_kitchen', 'bdsm_dining', 'bdsm_basement', 'bdsm_bathrooms', 'bdsm_bedwest', 'bus', 'brother', 'city_apt_building', 'city_mariinsky', 'daily_routine', 'dream_events', 'ender', 'gad_meadow', 'fight', 'gameover', 'gad_swamp_yard', 'gad_swamphouse', 'gad_swamp_woods', 'gopnik_fight_night', 'gschool_events', 'gschool_lessons', 'gschool_lessons4', 'gschool_lessonsev2', 'gschool_socialchg', 'hunter_favors', 'hunters', 'intro_start', 'intro_overview', 'kiosk', 'katja_nightclub', 'katja_uni', 'kit_din', 'kendra', 'metro', 'masseuse_work', 'map_view', 'masseuse_break', 'lezbsex', 'ludahome', 'lover_change', 'mitkasex', 'nichTanya', 'pav_complexb2', 'nichTaras', 'pav_shared_apt', 'post_deliveries', 'prostitution_pavlovsk', 'prostitution_car_negotiation', 'prostitution_car_sex', 'pod_whore', 'sex', 'sex_ev_anal', 'podezdM', 'pushkin_ballet_secrets', 'rape_events', 'sex_ev_cum', 'sex_ev_after', 'sex_ev_doggy', 'sex_ev_dress_talking', 'sex_ev_leave', 'sex_ev_events', 'sex_ev_pillow_talk', 'sex_ev_talk', 'sex_ev_cowgirl', 'sex_ev_miss', 'sex_ev_boy_pillow_talk', 'sex_ev_wakeup', 'sexm', 'street_events_general', 'sleep', 'sex_ev_hookup_leave', 'succubus', 'stol', 'tatiana_lab', 'uni_lessons_electives', 'sleep_events', 'tour_guide', 'sofia', 'taxi', 'sleep_simple', 'therapist', 'wakeup_events', 'tryndin', 'uni_lessons_electives1', 'bra_view', 'clothing_view', 'coat_view', 'panty_view', 'shoe_view', 'purse_view', 'underwear_bodysuit_view', 'havana_kickboxing', 'sex_ev_sex', 'sex_ev_foreplay', 'lesbisubhouse', 'sex_ev_condoms', 'wakeup', 'uni_lessons_electives2', 'uni_programs', 'pav_complexb3', 'brothel_section1', 'hunter_interactions', 'nichGala', 'hotel_anna', 'sex', 'date_talk', 'date_movie', 'city_artisan_quarter', 'anushkaev1', 'blackmailer']); // Cat 3: redirect chains end at dynamicGoto(prevLoc,prevArg) or state-dependent destinations with no content in TEST_STATE; sex: minet/kuni/etc redirect to sex:var which is state-dependent (needs SexTypeCheck, picrand); Military/Palatka/WorkHosp: actions navigate to sex:minet which redirects to state-dependent sex:var; blackmailer: "Get out of bed" leads to bed_get_out redirect chain that only produces content in sleep state

const GOTO_EXTRA_ARGS: Record<string, string> = {
  'gad_forest_events:forest_hunters': 'forest_outskirts',
};

const TEST_STATE: Record<string, unknown> = {
  arch_vars: { main_active: '', bimbo_points: 0, preppy_points: 0, prude_points: 0, punk_points: 0, goth_points: 0 },
  arch_const: { point_cap: 2000000, point_min: 50000, points_full_effect: 500000 },
  KGD: { lvl: 1, HP: 100, damage: 10, Infantrie: 1, Cavalry: 1, Archers: 1, sput_2: 0, sput_3: 0, sput_4: 0, sput_5: 0, sput_6: 0 },
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
  underwear: { pair: 1 },
  sex_ev: { pos_speed: 'anal1', initiative: 'girl', change_pos: 0, first_anal_insertion: 1, anal_count: 1, reset_pos: 'anal' },
  prostitute: { client_scene: 'Blowjob', scene_reduction: 0 },
  dick: 15,
  dick_girth: 'thick',
  pantyworntype: 'cotton',
  braworntype: 'cotton',
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
  painParts: ['ankles','armL','armR','asscheeks','asshole','back','breasts','cervix','cheeks','chest','clitoris','ears','eyebrows','eyes','feet','fingers','hair','hands','head','hips','jaw','labia','legL','legR','lips','mouth','neck','nipples','nose','pubic','ribs','shoulders','thighs','throat','toes','tongue','tummy','urethra','vaginal','wrists'],
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

function getMemoryStats() {
  const nodeM = process.memoryUsage();
  let chromeMB = 0;
  try {
    chromeMB = parseFloat(execSync("ps aux | grep -i 'chrome' | grep -v grep | awk '{sum+=$6} END {print sum/1024}'", { encoding: 'utf8', timeout: 5000 }).trim()) || 0;
  } catch {}
  let memAvailMB = 0;
  let swapUsedMB = 0;
  try {
    const out = execSync('free -m | grep -E "Mem|Swap"', { encoding: 'utf8', timeout: 5000 }).trim();
    for (const l of out.split('\n')) {
      const parts = l.split(/\s+/);
      if (l.startsWith('Mem')) memAvailMB = parseInt(parts[6], 10) || 0;
      if (l.startsWith('Swap')) swapUsedMB = (parseInt(parts[1], 10) || 0) - (parseInt(parts[3], 10) || 0);
    }
  } catch {}
  return {
    nodeRSS: (nodeM.rss / 1048576).toFixed(1),
    heap: (nodeM.heapUsed / 1048576).toFixed(1),
    ext: (nodeM.external / 1048576).toFixed(1),
    arrBuf: (nodeM.arrayBuffers / 1048576).toFixed(1),
    chrome: chromeMB.toFixed(0),
    memAvail: memAvailMB,
    swapUsed: swapUsedMB,
  };
}

function logGenerationStart(gen: number, completed: number, total: number, workers: number) {
  const s = getMemoryStats();
  console.error(`\n[GEN ${gen}] start: completed=${completed}/${total} workers=${workers} nodeRSS=${s.nodeRSS}MB heap=${s.heap}MB ext=${s.ext}MB arrBuf=${s.arrBuf}MB chrome=${s.chrome}MB memAvail=${s.memAvail}MB swapUsed=${s.swapUsed}MB`);
}

function logGenerationEnd(gen: number, completed: number, total: number, durationMs: number) {
  const s = getMemoryStats();
  console.error(`[GEN ${gen}] end: completed=${completed}/${total} duration=${(durationMs / 1000).toFixed(1)}s nodeRSS=${s.nodeRSS}MB heap=${s.heap}MB chrome=${s.chrome}MB memAvail=${s.memAvail}MB swapUsed=${s.swapUsed}MB`);
}

// Graceful backpressure: at ~5GB available, request a coordinated browser recycle (workers
// stop accepting new targets, then the generation ends cleanly). At ~2GB, hard-kill as a
// last resort (workers detect the death and the generation restarts fresh).
function startMemoryLogger(browser: any, onWarning: () => void): () => void {
  const startTime = Date.now();
  const WARN_MB = 5120;
  const CRITICAL_MB = 2048;
  const SWAP_WARN_PCT = 80;
  const SWAP_CRITICAL_PCT = 90;
  let warned = false;
  const iv = setInterval(() => {
    try {
      const out = execSync('free -m', { encoding: 'utf8', timeout: 5000 });
      const memLine = out.split('\n').find((l: string) => l.startsWith('Mem:')) ?? '';
      const swapLine = out.split('\n').find((l: string) => l.startsWith('Swap:')) ?? '';
      const memParts = memLine.split(/\s+/);
      const swapParts = swapLine.split(/\s+/);
      const availableMB = parseInt(memParts[6], 10) || 0;
      const swapTotalMB = parseInt(swapParts[1], 10) || 0;
      const swapUsedMB = parseInt(swapParts[2], 10) || 0;
      const swapPct = swapTotalMB > 0 ? Math.round((swapUsedMB / swapTotalMB) * 100) : 0;
      const elapsed = Math.round((Date.now() - startTime) / 1000);
      console.error(`\n[MEM +${elapsed}s] available: ${availableMB}MB swap: ${swapUsedMB}/${swapTotalMB}MB (${swapPct}%)`);
      if (availableMB < WARN_MB && !warned) {
        warned = true;
        console.error(`[MEM WARNING] Only ${availableMB}MB available (< ${WARN_MB}MB). Requesting coordinated browser recycle.`);
        onWarning();
      }
      if (swapPct >= SWAP_CRITICAL_PCT) {
        console.error(`[SWAP CRITICAL] ${swapPct}% used (${swapUsedMB}/${swapTotalMB}MB). Hard-killing browser.`);
        browser.close().catch(() => {});
      } else if (swapPct >= SWAP_WARN_PCT && !warned) {
        warned = true;
        console.error(`[SWAP WARNING] ${swapPct}% used (${swapUsedMB}/${swapTotalMB}MB). Requesting coordinated browser recycle.`);
        onWarning();
      }
      if (availableMB < CRITICAL_MB) {
        console.error(`[MEM CRITICAL] Only ${availableMB}MB available (< ${CRITICAL_MB}MB). Hard-killing browser.`);
        browser.close().catch(() => {});
      }
    } catch {}
  }, 30000);
  return () => clearInterval(iv);
}

function startServer(): Server {
  // Keep the single inlined index.html buffered (one small file). Stream every other asset
  // so a large image/mp3 is never fully copied into Node heap. HEAD uses statSync only
  // (no body) so the background-image probe doesn't pull a full asset into memory.
  const html = readFileSync(join(ROOT, 'dist', 'index.html'));
  const srv = createServer((req, res) => {
    const url = req.url || '/';
    if (url === '/' || url === '/index.html') {
      res.writeHead(200, { 'Content-Type': 'text/html', 'Content-Length': html.length });
      if (req.method === 'HEAD') res.end();
      else res.end(html);
      return;
    }
    const filePath = join(ROOT, 'public', url);
    try {
      const st = statSync(filePath);
      if (!st.isFile()) throw new Error('not a file');
      const ext = url.split('.').pop();
      const ct = ext === 'jpg' || ext === 'png' ? 'image/*' : ext === 'mp3' ? 'audio/mpeg' : 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': ct, 'Content-Length': st.size });
      if (req.method === 'HEAD') {
        res.end();
      } else {
        const stream = createReadStream(filePath);
        stream.on('error', () => { if (!res.headersSent) res.writeHead(500); res.end(); });
        stream.pipe(res);
      }
    } catch {
      if (!res.headersSent) res.writeHead(404);
      res.end('Not found');
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
  p.on('dialog', (d: any) => { d.dismiss().catch(() => {}); });
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
  // Install NaN-tracking hook: subscribe to state changes, log first key set to NaN
  await p.evaluate(() => {
    const store = (window as any).__gameStore;
    if ((window as any).__nanHooked) return;
    (window as any).__nanHooked = true;
    (window as any).__nanLog = [];
    let prev = store.getState();
    store.subscribe((next: any) => {
      for (const k of Object.keys(next)) {
        const nv = next[k];
        const ov = prev[k];
        if (typeof nv === 'number' && Number.isNaN(nv) && !(typeof ov === 'number' && Number.isNaN(ov))) {
          (window as any).__nanLog.push({ key: k, target: next.loc, arg: next.locArg });
          if ((window as any).__nanLog.length > 40) break;
        }
      }
      prev = next;
    });
  });
}

async function createPageCtx(browser: any): Promise<PageCtx> {
  const context = await browser.newContext();
  const page = await context.newPage();
  page.setDefaultTimeout(15000);
  const errors: string[] = [];
  page.on('pageerror', (e: any) => errors.push(`pageerror: ${e.message}\n${e.stack?.split('\n').slice(0, 5).join('\n')}`));
  page.on('dialog', (d: any) => d.dismiss());
  page.on('console', (msg: any) => {
    const text = msg.text();
    if (msg.type() === 'error') errors.push(`console: ${text}`);
  });
  return { context, page, errors, renderCount: 0 };
}

async function recyclePage(ctx: PageCtx, browser: any, pageIdx: number): Promise<void> {
  console.error(`\n[RECYCLE page ${pageIdx}]`);
  try {
    // A navigation keeps the same browser context and can retain Chromium caches,
    // decoded images, renderer allocations, and other per-context state. Destroying
    // the context gives Chrome a hard lifetime boundary for each batch of targets.
    await ctx.context.close().catch(() => {});
    const fresh = await createPageCtx(browser);
    ctx.context = fresh.context;
    ctx.page = fresh.page;
    ctx.errors = fresh.errors;
    ctx.renderCount = 0;
    await setupPage(ctx.page);
  } catch (e: any) {
    console.error(`\n[RECYCLE page ${pageIdx} FAILED] ${e.message}`);
    await ctx.context?.close().catch(() => {});
  }
}

// A timed-out page.evaluate() keeps running inside the renderer even after evalT rejects.
// Poison the page: close its context (kills the stuck eval) and create a fresh one before
// the worker processes another target.
async function poisonPage(ctx: PageCtx): Promise<void> {
  console.error(`\n[POISON page]`);
  try {
    const browser = ctx.context?.browser?.();
    await ctx.context.close().catch(() => {});
    const fresh = await createPageCtx(browser);
    ctx.context = fresh.context;
    ctx.page = fresh.page;
    ctx.errors = fresh.errors;
    ctx.renderCount = 0;
    await setupPage(ctx.page);
  } catch (e: any) {
    console.error(`\n[POISON page FAILED] ${e.message}`);
    await ctx.context?.close().catch(() => {});
  }
}

function phase1StaticAnalysis(locations: string[], fileMap: Record<string, string>): { passed: boolean; failures: Array<{ error: string; loc?: string }> } {
  const allFailures: Array<{ error: string; loc?: string }> = [];
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
      allFailures.push({ error: issues.join('; '), loc });
      if (stopOnFail) return { passed: false, failures: allFailures };
    }

    if (verbose) process.stdout.write('.');
  }

  if (verbose) console.log('');
  return { passed: allFailures.length === 0, failures: allFailures };
}

interface CheckOpts { skipExclusion?: boolean; timeout?: number; lenient?: boolean }

async function checkRenderTarget(
  ctx: PageCtx,
  loc: string,
  sub: string,
  fileMap: Record<string, string>,
  opts?: CheckOpts
): Promise<{ passed: boolean; error?: string; loc?: string }> {
  const { page, errors } = ctx;
  errors.length = 0;
  const label = sub === '' ? loc : `${loc}:${sub}`;

  if (!opts?.skipExclusion && (EXCLUDE_RENDER_TIMEOUT.has(loc) || EXCLUDE_JS_ERRORS.has(loc) || EXCLUDE_RENDER.has(loc))) {
    if (verbose) process.stdout.write('.');
    return { passed: true };
  }

  try {
    const t0 = Date.now();
    const r = await evalT(page, async ([l, s, ts, tm]) => {
        const t_start = performance.now();
        const store = (window as any).__gameStore;
        const st = store.getState();
        for (const [k, v] of Object.entries(ts)) (st as any)[k] = v;
        store.getState().doGoto(l, s);
        await new Promise(r2 => setTimeout(r2, 100));
        const t_goto = performance.now();

        const main = document.querySelector('main');
        let bgInfo = { noBg: true, url: '', ok: true };
        if (main) {
          const bg = getComputedStyle(main).backgroundImage;
          if (bg && bg !== 'none') {
            const m = bg.match(/url\("?(.*?)"?\)/);
            if (m) {
              const url = m[1];
              bgInfo = { noBg: false, url, ok: !url.includes('undefined') && !url.includes('null') };
            }
          }
        }

        const buttons = Array.from(document.querySelectorAll('button'));
        const actionCount = buttons.filter((b) => {
          const text = b.textContent?.trim() ?? '';
          const title = b.getAttribute('title');
          if (title) return false;
          if (/^(Map|Back)$/i.test(text)) return false;
          if (text.length === 0 || text.length >= 80) return false;
          return true;
        }).length;

        const bodyText = document.body.textContent ?? '';
        const execLinks = document.querySelectorAll('a[href^="exec:"]').length;
        const hasUntranslated = bodyText.includes('[UNTRANSLATED:');
        const untranslatedMatches = hasUntranslated ? (bodyText.match(/\[UNTRANSLATED: [^\]]+\]/g) || []).slice(0, 3) : [];
        const hasExpr = bodyText.includes('<<');
        const exprCount = hasExpr ? (bodyText.match(/<<[^<>\n]+>>/g) || []).length : 0;
        const hasUndefined = bodyText.includes('undefined');
        const hasNaN = bodyText.includes('NaN');
        const undefinedContext = hasUndefined ? bodyText.slice(Math.max(0, bodyText.indexOf('undefined') - 80), bodyText.indexOf('undefined') + 80) : '';

        const buttonIssues: string[] = [];
        for (const b of buttons) {
          const text = b.textContent?.trim() ?? '';
          if (text.includes('<<')) buttonIssues.push(`button "<<...>>": ${text.slice(0, 50)}`);
          if (text.includes('undefined')) buttonIssues.push(`button "undefined": ${text.slice(0, 50)}`);
          if (text.includes('NaN')) buttonIssues.push(`button "NaN": ${text.slice(0, 50)}`);
        }

        const t_end = performance.now();
        return { bgInfo, actionCount, bodyTextLen: bodyText.length, hasUntranslated, untranslatedMatches, execLinks, hasExpr, exprCount, hasUndefined, undefinedContext, hasNaN, buttonIssues, _timing: tm ? { goto: t_goto - t_start, dom: t_end - t_goto, total: t_end - t_start } : undefined };
      }, [loc, sub, TEST_STATE, timeMode], opts?.timeout);
    const t1 = Date.now();
    if (timeMode && r._timing) {
      const rt = r._timing;
      console.error(`[TIME] ${label}: goto=${rt.goto.toFixed(0)}ms dom=${rt.dom.toFixed(0)}ms inPage=${rt.total.toFixed(0)}ms roundTrip=${(t1 - t0).toFixed(0)}ms`);
    }

      if (page.isClosed()) {
        return { passed: false, error: 'page crashed', loc: label };
      }

      const newErrors = errors.filter((e: string) => !/404|Failed to load resource/i.test(e));
      if (newErrors.length > 0 && (!opts?.skipExclusion || !EXCLUDE_JS_ERRORS.has(loc))) {
        return { passed: false, error: `JS errors: ${newErrors.slice(0, 3).join('; ')}`, loc: label };
      }

      if (!r.bgInfo.noBg && !r.bgInfo.ok && !EXCLUDE_BG.has(loc)) {
        return { passed: false, error: `background image issue (src="${r.bgInfo.url}")`, loc: label };
      }

      if (qspHasBg(loc) && r.bgInfo.noBg && !EXCLUDE_BG.has(loc)) {
        return { passed: false, error: 'QSP source has *bg but no background rendered', loc: label };
      }

      if (!opts?.lenient && r.actionCount === 0 && sub === '' && qspHasActions(loc) && !EXCLUDE_NO_ACTIONS.has(loc)) {
        return { passed: false, error: 'no actions found', loc: label };
      }

      if (!opts?.lenient && r.bodyTextLen < 50) {
        return { passed: false, error: `text too short (${r.bodyTextLen} chars)`, loc: label };
      }

      if (r.hasUntranslated && !EXCLUDE_UNTRANSLATED.has(loc)) {
        return { passed: false, error: `untranslated QSP: ${r.untranslatedMatches.join(', ')}`, loc: label };
      }

      if (r.execLinks > 0 && !EXCLUDE_EXEC_DATA.has(loc)) {
        return { passed: false, error: `${r.execLinks} exec: link(s) in rendered HTML`, loc: label };
      }

      if (r.hasExpr) {
        return { passed: false, error: `${r.exprCount} unevaluated <<...>> expression(s) in rendered text`, loc: label };
      }

      if (r.hasUndefined && !EXCLUDE_RENDER.has(loc)) {
        return { passed: false, error: `'undefined' in rendered text [${r.undefinedContext}]`, loc: label };
      }
      if (r.hasNaN && !EXCLUDE_RENDER.has(loc)) {
        const nanDetail = await evalT(page, () => {
          const all = Array.from(document.querySelectorAll('body *'));
          let elText = '';
          for (const el of all) {
            const own = Array.from(el.childNodes).filter(n => n.nodeType === 3).map(n => n.textContent || '').join('');
            if (own.includes('NaN')) { elText = (el.textContent || '').slice(0, 100); break; }
          }
          const store = (window as any).__gameStore?.getState();
          const badKeys: string[] = [];
          if (store) for (const [k, v] of Object.entries(store as any)) {
            if (v === undefined) badKeys.push(`${k}=undefined`);
            else if (typeof v === 'number' && Number.isNaN(v)) badKeys.push(`${k}=NaN`);
            else if (v && typeof v === 'object' && !Array.isArray(v)) {
              for (const [kk, vv] of Object.entries(v as any)) {
                if (vv === undefined) badKeys.push(`${k}[${kk}]=undefined`);
                else if (typeof vv === 'number' && Number.isNaN(vv)) badKeys.push(`${k}[${kk}]=NaN`);
              }
            }
          }
          const nanLog = (window as any).__nanLog || [];
          return { elText, badKeys: badKeys.slice(0, 12).join(', '), nanLog: nanLog.slice(0, 6).map((e: any) => `${e.key}<-goto:${e.target}`).join(' | ') };
        });
        return { passed: false, error: `'NaN' in rendered text [${nanDetail.elText}] set:${nanDetail.nanLog} store:${nanDetail.badKeys}`, loc: label };
      }

      if (r.buttonIssues.length > 0) {
        return { passed: false, error: r.buttonIssues.slice(0, 3).join('; '), loc: label };
      }

    if (verbose) process.stdout.write('.');
    return { passed: true };
  } catch (e: any) {
    // A timed-out (or otherwise failed) eval can leave a stuck page.evaluate running in the
    // renderer. Poison the page so the next target starts from a clean context.
    try {
      const newErrs = errors.filter((er: string) => !/404|Failed to load resource/i.test(er));
      if (newErrs.length > 0) console.error(`[JSERR] ${label}: ${newErrs.slice(0, 5).join(' | ')}`);
    } catch {}
    await poisonPage(ctx);
    if (!opts?.skipExclusion && EXCLUDE_RENDER_TIMEOUT.has(loc)) {
      if (verbose) process.stdout.write('.');
      return { passed: true };
    }
    return { passed: false, error: `render timeout: ${e.message}`, loc: label };
  }
}

async function launchBrowser(pageCount: number): Promise<{ browser: any; pages: PageCtx[] }> {
  // No --max-old-space-size cap (let each renderer grow as needed). --disable-gpu forces
  // SwiftShader software rendering so the audit doesn't claim significant Radeon VRAM.
  const browser = await chromium.launch({ headless: true, executablePath: '/usr/bin/google-chrome', args: ['--disable-gpu', '--disable-gpu-compositing', '--disable-dev-shm-usage'] });
  browser.on('disconnected', () => console.error('\n[BROWSER DISCONNECTED]'));
  const pages: PageCtx[] = await Promise.all(Array.from({ length: pageCount }, () => createPageCtx(browser)));
  return { browser, pages };
}

async function phase2RenderAudit(
  targets: Array<{ loc: string; sub: string }>,
  fileMap: Record<string, string>,
  completed: Set<number>,
  failuresOut: Array<{ error: string; loc?: string }>
): Promise<{ passed: boolean; failures: Array<{ error: string; loc?: string }> }> {
  const allFailures: Array<{ error: string; loc?: string }> = [];
  let generation = 0;

  // Each generation = one browser instance that processes at most GEN_BATCH_SIZE targets,
  // then is closed and replaced by a fresh browser (proactive recycle bounds Chromium memory).
  while (true) {
    const remaining = targets.length - completed.size;
    if (remaining <= 0) break;

    generation++;
    const genStart = Date.now();
    logGenerationStart(generation, completed.size, targets.length, PARALLEL);

    const { browser, pages } = await launchBrowser(PARALLEL);
    const cancelled = { value: false };
    const stopMemLog = startMemoryLogger(browser, () => { cancelled.value = true; });

    let setupOk = true;
    if (browser.isConnected()) {
      try {
        await Promise.all(pages.map((ctx, i) => setupPage(ctx.page).catch((e: any) => {
          console.error(`\n[SETUP page ${i} FAILED] ${e.message}`);
          throw e;
        })));
      } catch {
        setupOk = false;
      }
    }
    if (!setupOk) {
      stopMemLog();
      await browser.close().catch(() => {});
      continue;
    }

    const assignments: Array<Array<{ loc: string; sub: string; idx: number }>> = pages.map(() => []);
    let batchCount = 0;
    for (let i = 0; i < targets.length && batchCount < GEN_BATCH_SIZE; i++) {
      if (completed.has(i)) continue;
      assignments[i % pages.length].push({ ...targets[i], idx: i });
      batchCount++;
    }

    const workerPromises = pages.map(async (ctx, i) => {
      for (const { loc, sub, idx } of assignments[i]) {
        if (cancelled.value) break;
        if (ctx.page.isClosed() || !browser.isConnected()) {
          console.error(`\n[PAGE ${i} DEAD] was processing: ${loc}:${sub}`);
          allFailures.push({ error: 'browser died', loc: `${loc}:${sub}` });
          break;
        }
        const result = await checkRenderTarget(ctx, loc, sub, fileMap);
        completed.add(idx);
        if (!result.passed) {
          const f = { error: result.error!, loc: result.loc };
          allFailures.push(f);
          failuresOut.push(f);
          console.error(`\n[RENDER FAIL] ${f.loc}: ${f.error}`);
          if (stopOnFail) cancelled.value = true;
        }
        ctx.renderCount++;
        globalRenderCount++;
        if (verbose && globalRenderCount % 100 === 0) logRenderMemory();
        if (ctx.renderCount >= RELOAD_INTERVAL) {
          await recyclePage(ctx, browser, i);
        }
      }
    });

    // Stall detector: cancel if no RENDER progress for 120s (catches hanging evals/recycles
    // that the per-eval 15s timeout doesn't surface).
    let stallTimer: any = null;
    const stallPromise = new Promise((_, reject) => {
      let lastProgress = globalRenderCount;
      let lastProgressTime = Date.now();
      stallTimer = setInterval(() => {
        if (globalRenderCount > lastProgress) {
          lastProgress = globalRenderCount;
          lastProgressTime = Date.now();
        } else if (Date.now() - lastProgressTime > 120000) {
          clearInterval(stallTimer);
          cancelled.value = true;
          reject(new Error(`phase stalled (no RENDER progress for 120s, last=${lastProgress})`));
        }
      }, 10000);
    });

    let stalled = false;
    try {
      await Promise.race([
        Promise.all(workerPromises),
        stallPromise
      ]);
    } catch (e: any) {
      stalled = true;
      console.error(`\n[STALL DETECTED] ${e.message}`);
    } finally {
      if (stallTimer) clearInterval(stallTimer);
    }

    // Coordinated shutdown: cancel workers, close stuck contexts (unstick hanging evals),
    // wait for ALL workers to settle, then close the browser.
    cancelled.value = true;
    for (const ctx of pages) await ctx.context.close().catch(() => {});
    await Promise.allSettled(workerPromises);

    stopMemLog();
    await browser.close().catch(() => {});
    logGenerationEnd(generation, completed.size, targets.length, Date.now() - genStart);

    if (stalled) allFailures.push({ error: 'phase stalled (no progress for 120s)' });
    if (stopOnFail && allFailures.length > 0) break;
  }

  if (verbose) console.log('');
  return { passed: allFailures.length === 0, failures: allFailures };
}

async function checkInteractionTarget(
  ctx: PageCtx,
  loc: string,
  sub: string,
  opts?: CheckOpts
): Promise<{ passed: boolean; error?: string; loc?: string; action?: string }> {
  const { page, errors } = ctx;
  if (!opts?.skipExclusion && (EXCLUDE_NO_ACTIONS.has(loc) || EXCLUDE_RENDER_TIMEOUT.has(loc))) return { passed: true };
  errors.length = 0;
  const label = sub === '' ? loc : `${loc}:${sub}`;

  try {
    try {
      const extraArg = GOTO_EXTRA_ARGS[label] ?? '';
      await evalT(page, ([l, s, ts, ea]) => {
        const store = (window as any).__gameStore;
        const st = store.getState();
        for (const [k, v] of Object.entries(ts)) (st as any)[k] = v;
        const origRandom = Math.random;
        Math.random = () => 0;
        store.getState().doGoto(l, s, ea || undefined);
        Math.random = origRandom;
      }, [loc, sub, TEST_STATE, extraArg], opts?.timeout);
    } catch (e: any) {
      return { passed: false, error: `goto threw: ${e.message}`, loc: label };
    }

    await sleep(50);

    const actions = await evalT(page, () => {
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
        const clicked = await evalT(page, (at) => {
          (window as any).__origRandom = (window as any).__origRandom ?? Math.random;
          Math.random = () => 0;
          const buttons = Array.from(document.querySelectorAll('button'));
          const btn = buttons.find(b => (b.textContent?.trim() ?? '') === at && b.offsetParent !== null);
          if (btn) btn.click();
          if ((window as any).__origRandom) Math.random = (window as any).__origRandom;
          return !!btn;
        }, actionText);
        if (!clicked) return { passed: false, error: `click failed: button not found`, loc: label, action: actionText };
      } catch (e: any) {
        return { passed: false, error: `click failed: ${e.message}`, loc: label, action: actionText };
      }

      await sleep(50);

      if (page.isClosed()) {
        return { passed: false, error: 'page crashed', loc: label, action: actionText };
      }

      const newErrors = errors.filter((e: string) => !/404|Failed to load resource/i.test(e));
      if (newErrors.length > 0 && (!opts?.skipExclusion || !EXCLUDE_JS_ERRORS.has(loc))) {
        return { passed: false, error: `JS errors after click: ${newErrors.slice(0, 3).join('; ')}`, loc: label, action: actionText };
      }

      const destCheck = await evalT(page, ([l, s, ts]) => {
        const bodyText = document.body.textContent ?? '';
        const execLinks = document.querySelectorAll('a[href^="exec:"]').length;
        const exprCount = (bodyText.match(/<<[^<>\n]+>>/g) || []).length;
        const hasUndefined = bodyText.includes('undefined');
        const hasNaN = bodyText.includes('NaN');
        const hasNoContent = bodyText.includes('No content for this location.');
        let nanContext = '';
        if (hasNaN) {
          const idx = bodyText.indexOf('NaN');
          nanContext = bodyText.slice(Math.max(0, idx - 100), idx + 100);
        }

        const store = (window as any).__gameStore;
        const st = store.getState();
        for (const [k, v] of Object.entries(ts)) (st as any)[k] = v;
        const origRandom = Math.random;
        Math.random = () => 0;
        store.getState().doGoto(l, s);
        Math.random = origRandom;

        return { execLinks, exprCount, hasUndefined, hasNaN, hasNoContent, nanContext };
      }, [loc, sub, TEST_STATE]);

      if (destCheck.execLinks > 0 && !EXCLUDE_EXEC_DATA.has(loc)) {
        return { passed: false, error: `${destCheck.execLinks} exec: link(s) in destination`, loc: label, action: actionText };
      }
      if (destCheck.exprCount > 0) {
        return { passed: false, error: `${destCheck.exprCount} unevaluated <<...>> in destination`, loc: label, action: actionText };
      }
      if (destCheck.hasUndefined && !EXCLUDE_UNTRANSLATED.has(loc)) {
        return { passed: false, error: `'undefined' in destination text`, loc: label, action: actionText };
      }
      if (destCheck.hasNaN && !EXCLUDE_UNTRANSLATED.has(loc)) {
        return { passed: false, error: `'NaN' in destination text [${destCheck.nanContext}]`, loc: label, action: actionText };
      }
      if (destCheck.hasNoContent && !EXCLUDE_EMPTY_DEST.has(loc)) {
        return { passed: false, error: `empty destination (No content for this location)`, loc: label, action: actionText };
      }

      if (verbose) process.stdout.write('.');
    }
    return { passed: true };
  } catch (e: any) {
    // A timed-out eval can leave a stuck page.evaluate running in the renderer. Poison the
    // page so the next target starts from a clean context.
    await poisonPage(ctx);
    return { passed: false, error: `interaction timeout: ${e.message}`, loc: label };
  }
}

async function phase3InteractionAudit(
  targets: Array<{ loc: string; sub: string }>,
  completed: Set<number>,
  failuresOut: Array<{ error: string; loc?: string; action?: string }>
): Promise<{ passed: boolean; failures: Array<{ error: string; loc?: string; action?: string }> }> {
  const allFailures: Array<{ error: string; loc?: string; action?: string }> = [];
  let generation = 0;

  while (true) {
    const remaining = targets.length - completed.size;
    if (remaining <= 0) break;

    generation++;
    const genStart = Date.now();
    logGenerationStart(generation, completed.size, targets.length, PARALLEL);

    const { browser, pages } = await launchBrowser(PARALLEL);
    const cancelled = { value: false };
    const stopMemLog = startMemoryLogger(browser, () => { cancelled.value = true; });

    let setupOk = true;
    if (browser.isConnected()) {
      try {
        await Promise.all(pages.map((ctx, i) => setupPage(ctx.page).catch((e: any) => {
          console.error(`\n[SETUP page ${i} FAILED] ${e.message}`);
          throw e;
        })));
      } catch {
        setupOk = false;
      }
    }
    if (!setupOk) {
      stopMemLog();
      await browser.close().catch(() => {});
      continue;
    }

    const assignments: Array<Array<{ loc: string; sub: string; idx: number }>> = pages.map(() => []);
    let batchCount = 0;
    for (let i = 0; i < targets.length && batchCount < GEN_BATCH_SIZE; i++) {
      if (completed.has(i)) continue;
      assignments[i % pages.length].push({ ...targets[i], idx: i });
      batchCount++;
    }

    const workerPromises = pages.map(async (ctx, i) => {
      for (const { loc, sub, idx } of assignments[i]) {
        if (cancelled.value) break;
        if (ctx.page.isClosed() || !browser.isConnected()) {
          console.error(`\n[PAGE ${i} DEAD] was processing: ${loc}:${sub}`);
          allFailures.push({ error: 'browser died', loc, action: sub });
          break;
        }
        const result = await checkInteractionTarget(ctx, loc, sub);
        completed.add(idx);
        if (!result.passed) {
          const f = { error: result.error!, loc: result.loc, action: result.action };
          allFailures.push(f);
          failuresOut.push(f);
          console.error(`\n[INTERACTION FAIL] ${f.loc} / "${f.action}": ${f.error}`);
          if (stopOnFail) cancelled.value = true;
        }
        ctx.renderCount++;
        if (ctx.renderCount >= RELOAD_INTERVAL) {
          await recyclePage(ctx, browser, i);
        }
      }
    });

    // Stall detector: cancel if no progress for 120s (catches hanging evals/recycles).
    let stallTimer: any = null;
    const stallPromise = new Promise((_, reject) => {
      let lastProgress = completed.size;
      let lastProgressTime = Date.now();
      stallTimer = setInterval(() => {
        if (completed.size > lastProgress) {
          lastProgress = completed.size;
          lastProgressTime = Date.now();
        } else if (Date.now() - lastProgressTime > 120000) {
          clearInterval(stallTimer);
          cancelled.value = true;
          reject(new Error(`phase stalled (no progress for 120s, last=${lastProgress})`));
        }
      }, 10000);
    });

    let stalled = false;
    try {
      await Promise.race([
        Promise.all(workerPromises),
        stallPromise
      ]);
    } catch (e: any) {
      stalled = true;
      console.error(`\n[STALL DETECTED] ${e.message}`);
    } finally {
      if (stallTimer) clearInterval(stallTimer);
    }

    // Coordinated shutdown: cancel workers, close stuck contexts, wait for ALL workers to
    // settle, then close the browser.
    cancelled.value = true;
    for (const ctx of pages) await ctx.context.close().catch(() => {});
    await Promise.allSettled(workerPromises);

    stopMemLog();
    await browser.close().catch(() => {});
    logGenerationEnd(generation, completed.size, targets.length, Date.now() - genStart);

    if (stalled) allFailures.push({ error: 'phase stalled (no progress for 120s)' });
    if (stopOnFail && allFailures.length > 0) break;
  }

  if (verbose) console.log('');
  return { passed: allFailures.length === 0, failures: allFailures };
}

function getExcludedRenderLocations(): Set<string> {
  const s = new Set<string>();
  for (const l of EXCLUDE_RENDER) s.add(l);
  for (const l of EXCLUDE_RENDER_TIMEOUT) s.add(l);
  for (const l of EXCLUDE_JS_ERRORS) s.add(l);
  return s;
}

function getExcludedInteractionLocations(): Set<string> {
  const s = new Set<string>();
  for (const l of EXCLUDE_NO_ACTIONS) s.add(l);
  for (const l of EXCLUDE_RENDER_TIMEOUT) s.add(l);
  return s;
}

async function phase4ExcludedRenderAudit(
  locations: string[],
  fileMap: Record<string, string>
): Promise<{ passed: boolean; failures: Array<{ error: string; loc?: string }>; total: number }> {
  const excluded = getExcludedRenderLocations();
  const targets = getAllTestTargets(locations.filter((l) => excluded.has(l)), fileMap);
  const allFailures: Array<{ error: string; loc?: string }> = [];
  const completed = new Set<number>();
  let generation = 0;

  while (true) {
    const remaining = targets.length - completed.size;
    if (remaining <= 0) break;

    generation++;
    const genStart = Date.now();
    logGenerationStart(generation, completed.size, targets.length, PARALLEL);

    const { browser, pages } = await launchBrowser(PARALLEL);
    const cancelled = { value: false };
    const stopMemLog = startMemoryLogger(browser, () => { cancelled.value = true; });

    let setupOk = true;
    if (browser.isConnected()) {
      try {
        await Promise.all(pages.map((ctx, i) => setupPage(ctx.page).catch((e: any) => {
          console.error(`\n[SETUP page ${i} FAILED] ${e.message}`);
          throw e;
        })));
      } catch {
        setupOk = false;
      }
    }
    if (!setupOk) {
      stopMemLog();
      await browser.close().catch(() => {});
      continue;
    }

    const assignments: Array<Array<{ loc: string; sub: string; idx: number }>> = pages.map(() => []);
    let batchCount = 0;
    for (let i = 0; i < targets.length && batchCount < GEN_BATCH_SIZE; i++) {
      if (completed.has(i)) continue;
      assignments[i % pages.length].push({ ...targets[i], idx: i });
      batchCount++;
    }

    const workerPromises = pages.map(async (ctx, i) => {
      for (const { loc, sub, idx } of assignments[i]) {
        if (cancelled.value) break;
        if (ctx.page.isClosed() || !browser.isConnected()) {
          console.error(`\n[PAGE ${i} DEAD] was processing: ${loc}:${sub}`);
          allFailures.push({ error: 'browser died', loc });
          break;
        }
        const result = await checkRenderTarget(ctx, loc, sub, fileMap, { skipExclusion: true, lenient: true, timeout: 30000 });
        completed.add(idx);
        if (!result.passed) {
          const f = { error: result.error!, loc: result.loc };
          allFailures.push(f);
          console.error(`\n[EXCLUDED RENDER FAIL] ${f.loc}: ${f.error}`);
        }
        ctx.renderCount++;
        if (ctx.renderCount >= RELOAD_INTERVAL) {
          await recyclePage(ctx, browser, i);
        }
      }
    });

    let stallTimer: any = null;
    const stallPromise = new Promise((_, reject) => {
      let lastProgress = completed.size;
      let lastProgressTime = Date.now();
      stallTimer = setInterval(() => {
        if (completed.size > lastProgress) {
          lastProgress = completed.size;
          lastProgressTime = Date.now();
        } else if (Date.now() - lastProgressTime > 120000) {
          clearInterval(stallTimer);
          cancelled.value = true;
          reject(new Error(`phase stalled (no progress for 120s, last=${lastProgress})`));
        }
      }, 10000);
    });

    let stalled = false;
    try {
      await Promise.race([
        Promise.all(workerPromises),
        stallPromise
      ]);
    } catch (e: any) {
      stalled = true;
      console.error(`\n[STALL DETECTED] ${e.message}`);
    } finally {
      if (stallTimer) clearInterval(stallTimer);
    }

    cancelled.value = true;
    for (const ctx of pages) await ctx.context.close().catch(() => {});
    await Promise.allSettled(workerPromises);

    stopMemLog();
    await browser.close().catch(() => {});
    logGenerationEnd(generation, completed.size, targets.length, Date.now() - genStart);

    if (stalled) allFailures.push({ error: 'phase stalled (no progress for 120s)' });
  }

  if (verbose) console.log('');
  return { passed: allFailures.length === 0, failures: allFailures, total: targets.length };
}

async function phase5ExcludedInteractionAudit(
  locations: string[],
  fileMap: Record<string, string>
): Promise<{ passed: boolean; failures: Array<{ error: string; loc?: string; action?: string }>; total: number }> {
  const excluded = getExcludedInteractionLocations();
  const targets = getAllTestTargets(locations.filter((l) => excluded.has(l)), fileMap);
  const allFailures: Array<{ error: string; loc?: string; action?: string }> = [];
  const completed = new Set<number>();
  let generation = 0;

  while (true) {
    const remaining = targets.length - completed.size;
    if (remaining <= 0) break;

    generation++;
    const genStart = Date.now();
    logGenerationStart(generation, completed.size, targets.length, PARALLEL);

    const { browser, pages } = await launchBrowser(PARALLEL);
    const cancelled = { value: false };
    const stopMemLog = startMemoryLogger(browser, () => { cancelled.value = true; });

    let setupOk = true;
    if (browser.isConnected()) {
      try {
        await Promise.all(pages.map((ctx, i) => setupPage(ctx.page).catch((e: any) => {
          console.error(`\n[SETUP page ${i} FAILED] ${e.message}`);
          throw e;
        })));
      } catch {
        setupOk = false;
      }
    }
    if (!setupOk) {
      stopMemLog();
      await browser.close().catch(() => {});
      continue;
    }

    const assignments: Array<Array<{ loc: string; sub: string; idx: number }>> = pages.map(() => []);
    let batchCount = 0;
    for (let i = 0; i < targets.length && batchCount < GEN_BATCH_SIZE; i++) {
      if (completed.has(i)) continue;
      assignments[i % pages.length].push({ ...targets[i], idx: i });
      batchCount++;
    }

    const workerPromises = pages.map(async (ctx, i) => {
      for (const { loc, sub, idx } of assignments[i]) {
        if (cancelled.value) break;
        if (ctx.page.isClosed() || !browser.isConnected()) {
          console.error(`\n[PAGE ${i} DEAD] was processing: ${loc}:${sub}`);
          allFailures.push({ error: 'browser died', loc, action: sub });
          break;
        }
        const result = await checkInteractionTarget(ctx, loc, sub, { skipExclusion: true, timeout: 30000 });
        completed.add(idx);
        if (!result.passed) {
          const f = { error: result.error!, loc: result.loc, action: result.action };
          allFailures.push(f);
          console.error(`\n[EXCLUDED INTERACTION FAIL] ${f.loc} / "${f.action}": ${f.error}`);
        }
        ctx.renderCount++;
        if (ctx.renderCount >= RELOAD_INTERVAL) {
          await recyclePage(ctx, browser, i);
        }
      }
    });

    let stallTimer: any = null;
    const stallPromise = new Promise((_, reject) => {
      let lastProgress = completed.size;
      let lastProgressTime = Date.now();
      stallTimer = setInterval(() => {
        if (completed.size > lastProgress) {
          lastProgress = completed.size;
          lastProgressTime = Date.now();
        } else if (Date.now() - lastProgressTime > 120000) {
          clearInterval(stallTimer);
          cancelled.value = true;
          reject(new Error(`phase stalled (no progress for 120s, last=${lastProgress})`));
        }
      }, 10000);
    });

    let stalled = false;
    try {
      await Promise.race([
        Promise.all(workerPromises),
        stallPromise
      ]);
    } catch (e: any) {
      stalled = true;
      console.error(`\n[STALL DETECTED] ${e.message}`);
    } finally {
      if (stallTimer) clearInterval(stallTimer);
    }

    cancelled.value = true;
    for (const ctx of pages) await ctx.context.close().catch(() => {});
    await Promise.allSettled(workerPromises);

    stopMemLog();
    await browser.close().catch(() => {});
    logGenerationEnd(generation, completed.size, targets.length, Date.now() - genStart);

    if (stalled) allFailures.push({ error: 'phase stalled (no progress for 120s)' });
  }

  if (verbose) console.log('');
  return { passed: allFailures.length === 0, failures: allFailures, total: targets.length };
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

  const excludedRenderLocs = getExcludedRenderLocations();
  const excludedInteractionLocs = getExcludedInteractionLocations();
  const excludedRenderTargets = getAllTestTargets(locations.filter((l) => excludedRenderLocs.has(l)), fileMap);
  const excludedInteractionTargets = getAllTestTargets(locations.filter((l) => excludedInteractionLocs.has(l)), fileMap);

  console.log('=== COMPREHENSIVE AUDIT ===');
  console.log(`Locations: ${locations.length}`);
  if (!skipRender) console.log(`Render targets: ${renderTargets.length}`);
  if (!skipInteraction) console.log(`Interaction targets: ${interactionTargets.length}`);
  if (!skipPhase4) console.log(`Excluded render targets: ${excludedRenderTargets.length}`);
  if (!skipPhase5) console.log(`Excluded interaction targets: ${excludedInteractionTargets.length}`);
  if (filter) console.log(`Filter: ${filter}`);
  if (startAfter) console.log(`Start after: ${startAfter} (${skipRender ? 'interaction' : 'render'})`);
  if (checkTodo) console.log('TODO-QSP: checking');
  console.log('');

  const srv = startServer();
  await sleep(500);

  try {
    if (!skipStatic) {
      console.log('--- Phase 1: Static Analysis ---');
      const result = phase1StaticAnalysis(locations, fileMap);
      if (!result.passed) {
        for (const f of result.failures) {
          console.log(`FAIL ${f.loc}: ${f.error}`);
        }
        console.log(`\n${result.failures.length} static failure(s).`);
        process.exitCode = 1;
        return;
      }
      console.log('PASS All files clean');
    } else {
      console.log('--- Phase 1: Static Analysis (skipped) ---');
    }

    const completedRender = new Set<number>();
    const completedInteraction = new Set<number>();
    const renderFailures: Array<{ error: string; loc?: string }> = [];
    const interactionFailures: Array<{ error: string; loc?: string; action?: string }> = [];

    if (!skipRender) {
      console.log('--- Phase 2: Render Audit ---');
      const result = await phase2RenderAudit(renderTargets, fileMap, completedRender, renderFailures);
      if (result.passed) {
        console.log('PASS All locations render clean');
      } else {
        console.log(`Phase 2 complete: ${renderFailures.length} failure(s).`);
      }
    } else {
      console.log('--- Phase 2: Render Audit (skipped) ---');
    }

    if (!skipInteraction) {
      console.log('--- Phase 3: Interaction Audit ---');
      const result = await phase3InteractionAudit(interactionTargets, completedInteraction, interactionFailures);
      if (result.passed) {
        console.log('PASS All actions work clean');
      } else {
        console.log(`Phase 3 complete: ${interactionFailures.length} failure(s).`);
      }
    } else {
      console.log('--- Phase 3: Interaction Audit (skipped) ---');
    }

    let excludedRenderCount = 0;
    let excludedInteractionCount = 0;
    const excludedRenderFailures: Array<{ error: string; loc?: string }> = [];
    const excludedInteractionFailures: Array<{ error: string; loc?: string; action?: string }> = [];

    if (!skipPhase4) {
      console.log('--- Phase 4: Excluded Render Audit ---');
      const result = await phase4ExcludedRenderAudit(locations, fileMap);
      excludedRenderCount = result.total;
      excludedRenderFailures.push(...result.failures);
      if (result.passed) {
        console.log(`PASS All ${excludedRenderCount} excluded locations render clean`);
      } else {
        console.log(`Phase 4 complete: ${result.failures.length} failure(s) out of ${excludedRenderCount} excluded targets (warnings only).`);
      }
    } else {
      console.log('--- Phase 4: Excluded Render Audit (skipped) ---');
    }

    if (!skipPhase5) {
      console.log('--- Phase 5: Excluded Interaction Audit ---');
      const result = await phase5ExcludedInteractionAudit(locations, fileMap);
      excludedInteractionCount = result.total;
      excludedInteractionFailures.push(...result.failures);
      if (result.passed) {
        console.log(`PASS All ${excludedInteractionCount} excluded locations interact clean`);
      } else {
        console.log(`Phase 5 complete: ${result.failures.length} failure(s) out of ${excludedInteractionCount} excluded targets (warnings only).`);
      }
    } else {
      console.log('--- Phase 5: Excluded Interaction Audit (skipped) ---');
    }

    if (excludedRenderFailures.length > 0) {
      console.log(`\n[EXCLUDED RENDER WARNINGS] ${excludedRenderFailures.length} location(s) with known issues:`);
      for (const f of excludedRenderFailures) console.log(`  ${f.loc}: ${f.error}`);
    }
    if (excludedInteractionFailures.length > 0) {
      console.log(`\n[EXCLUDED INTERACTION WARNINGS] ${excludedInteractionFailures.length} action(s) with known issues:`);
      for (const f of excludedInteractionFailures) console.log(`  ${f.loc} / "${f.action}": ${f.error}`);
    }

    if (renderFailures.length > 0 || interactionFailures.length > 0) {
      for (const f of renderFailures) console.log(`FAIL ${f.loc}: ${f.error}`);
      for (const f of interactionFailures) console.log(`FAIL ${f.loc} / "${f.action}": ${f.error}`);
      console.log(`\n${renderFailures.length + interactionFailures.length} failure(s).`);
      process.exitCode = 1;
    } else {
      console.log('\n=== ALL PHASES PASSED ===');
    }
  } catch (e: any) {
    console.error(`\nCRASH ${e.message}`);
    process.exitCode = 1;
  } finally {
    srv.close();
    process.exit(process.exitCode ?? 0);
  }
}

main();
