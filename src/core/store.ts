import { create } from 'zustand';
import type { GameState, ActionDef } from './types';
import { advanceTime, toDate } from './time';
import { goto } from './location';
import { pushState } from './stateStack';
import { computeStats } from './stats';
import { processAction, returnFromCall, type Reminder } from './engine';
import { saveGame as idbSave, loadGame as idbLoad } from './save';
import { updateLocationMusic } from './locationMusic';
import { pushSnapshot, undo, redo, restoreLast, clearHistory } from './debugHistory';

const debugLog: { time: string; type: string; detail: string }[] = [];
function logAction(type: string, detail: string) {
  const time = new Date().toLocaleTimeString();
  debugLog.push({ time, type, detail });
  if (debugLog.length > 20) debugLog.shift();
  (window as any).__debugLog = debugLog;
  fetch('/__debug', { method: 'POST', body: `${time} ${type} ${detail}`, keepalive: true }).catch(() => {});
}

interface GameStore extends GameState {
  reminders: Reminder[];
  set: (partial: Partial<GameState> | ((state: GameState) => Partial<GameState> | void)) => void;
  doGoto: (loc: string, arg: string) => void;
  doCall: (loc: string, arg: string) => void;
  doPush: () => void;
  doPop: () => void;
  doAdvanceTime: (minutes: number) => void;
  doAction: (action: ActionDef) => void;
  undoAction: () => void;
  redoAction: () => void;
  clearDebugHistory: () => void;
  dismissReminders: () => void;
  saveGame: (slot: number) => Promise<void>;
  loadGame: (slot: number) => Promise<void>;
}

export const initialState = {
  hour: 9,
  minut: 0,
  daystart: 1,
  totminut: 13200,
  prevtotmin: 13200,

  loc: 'start',
  locArg: '',
  menuLoc: 'start',
  menuArg: '',
  prevLoc: '',
  prevArg: '',
  locationType: 'public',

  scene: {
    mainText: '',
    statText: '',
    curActs: [],
    curobjs: '',
    backimage: '',
    menuOff: false,
  },
  stateStack: [],
  navigationVersion: 0,

  pcs_mood: 50,
  pcs_energy: 80,
  pcs_hydra: 80,
  pcs_sleep: 80,
  pcs_willpwr: 50,
  pcs_health: 100,
  pcs_stren: 5,
  pcs_agil: 5,
  pcs_vital: 5,
  pcs_intel: 5,
  pcs_react: 5,
  pcs_sprt: 5,
  pcs_chrsm: 5,
  pcs_prcptn: 5,
  pcs_magik: 0,
  pcs_faith: 50,
  pcs_inhib: 50,
  pcs_sweat: 0,
  pcs_stam: 100,
  pcs_vag: 0,
  pcs_ass: 0,
  pcs_throat: 0,
  pcs_mana: 0,
  pcs_horny: 0,
  money: 0,

  moodVars: {
    disp_base: 50,
    disp: 50,
    momentum: 0,
    inertia: 0,
    max: 100,
    min: 1,
    hold_minut: 0,
    leftover_mood: 0,
  },
  mood_trauma: 0,
  moodSE: {},

  stammax: 100,
  willpowermax: 50,
  healthmax: 100,
  manamax: 100,

  will_counter: 0,
  pcs_willpower_feeder: 0,

  fat: 0,
  vitalbuf: 0,
  strenbuf: 0,
  agilbuf: 0,

  trait_vars: {},
  arch_vars: {},
  arch_effects: {},
  skill_levels: {},
  fame: {},
  combatSpells: [],
  nonComSpells: [],
  storySpells: [],
  cheatVars: {},
  pcs_mood_effects: {},
  sleepVars: {},
  pcs_condition: {},
  pcs_period: {},
  birth_control: {},
  vomit: {},
  hunterVars: {},
  stat: {},
  pain: {},
  MiraVars: {},
  npc_drunk: {},
  model: {},
  transportVars: { trainpass_day: 0, buspass_day: 0 },

  succublvl: 0,
  succubusflag: 0,
  pcs_dom: 0,
  sub: 0,

  shame: 0,
  alko: 0,
  alkoblock: 0,
  pcs_lipbalm: 0,
  sickstage: 0,
  sick: 0,
  sicktimer: 0,
  perkice: 0,
  frost: 0,
  mosol: 0,

  pantyworntype: 'none',
  pantywornnumber: 0,
  clothingworntype: 'none',
  clothingwornnumber: 0,
  PCloPants: 0,
  PCloPanties: 0,
  PPanThinness: 0,
  PBraThinness: 0,
  PCloQuality: 3,
  PCloThinness: 2,
  PXCloTopCut: 2,
  PXCloBottomShortness: 2,
  PBraQuality: 3,
  PPanQuality: 3,
  PShoQuality: 3,
  PCoatQuality: 0,
  PCloDirt: 0,
  pcs_apprncbase: 0,
  tits: 2,
  pcs_breath: 1,
  deodorant_on: 1,
  pcs_bmi: 21,
  clit_size: 0,
  temper: 0,
  weatherFall: 0,
  sunWeather: 1,
  lashair: 0,
  pcs_pubes: 0,
  pcs_leghair: 0,

  KGOLpers: 0,
  KGHP: 0,
  KGHPMAX: 0,
  KGMana: 0,
  KGManaMax: 0,

  HotelRoom: {},
  hotelRoomDays: {},

  gschoolVars: {},
  kanikuli: 0,
  week: 1,
  odd_week: 0,
  year: 2016,
  month: 1,
  day: 1,

  pcs_dob: 20000101,
  birthday: 1,
  birthmonth: 1,
  birthyear: 2000,
  age: 16,
  vidage: 16,
  vidageday: 360,

  holyday: '',
  is_natholi: 0,
  nyp_day: 31,
  ciklNewWeek: 0,
  yearstart: 0,

  start_type: {},
  locat: {},

  pcs_firstname: '',
  pcs_lastname: '',
  pcs_nickname: '',
  face_style: { type: 0, avatar_path: '' },
  pcs_haircol: 0,
  pcs_hairlng: 480,
  curly: 0,
  pcs_eyecol: 0,
  pcs_lashes: 1,
  pcs_eyesize: 1,
  glass: 0,
  tsg: 1,
  start_location: 0,
  pcs_hairbsh: 0,
  pcs_makeup: 1,
  hbangs: 0,
  hbraids: 0,
  hpigtail: 0,
  hpingripw: 0,
  hscrunchw: 0,
  pcs_skin: 50,
  pcs_teeth: 0,
  pcs_lip: 2,
  pcs_apprnc: 0,
  pcs_hotcat: 0,
  pcs_tattoos: {},
  pcs_piercings: {},
  braworntype: 'none',
  brawornnumber: 0,
  shoeworntype: 'none',
  shoewornnumber: 0,
  coatworntype: 'none',
  coatwornnumber: 0,
  bag: 0,
  currentpursetype: 'none',
  currentpursenumber: 0,
  bodyVars: { desc: 'slim', img: 'images/pc/body/shape/0.jpg' },
  cumloc: {},
  cumvol: {},
  university: {},
  npc_nickname: {},

  npcIndex: [],
  npcID: [],
  npc_dob: {},
  npc_rel: {},
  npc_gender: {},
  npc_hotcat: {},
  hotcat_movement: {},
  npc_firstname: {},
  npc_lastname: {},
  npc_pic: {},
  aarraynumber: 0,

  npcDefs: {},
  npcs: {},

  inSleep: 0,
  military: 0,
  menu_off: 0,

  events_list: [],
  event_title: {},
  event_daystart: {},
  event_startTs: {},
  event_durationTs: {},
  event_allDay: {},
  event_color: {},
  event_recur: {},
  event_isPlayer: {},
  cal_player_event_count: 0,
  cal_reminded: {},
  nextEventId: 1,

  settingmode: 0,
  debug: {},
  cfg_vars: {},
  statAlerts: [],

  dateVars: toDate(1),

  misc: {},

  wardrobeSets: Array.from({ length: 100 }, () => ({
    name: '',
    clothingType: 'none',
    clothingNumber: 0,
    underwearType: 0,
    braType: 'none',
    braNumber: 0,
    pantyType: 'none',
    pantyNumber: 0,
    bodysuitType: 'none',
    bodysuitNumber: 0,
    shoeType: 'none',
    shoeNumber: 0,
    coatType: 'none',
    coatNumber: 0,
    purseType: 'none',
    purseNumber: 0,
  })),
  wardrobeDefaultPage: 'default1',
  defaultSportNumber: 0,
  defaultSchoolNumber: 0,

  clothingInventory: {},
  PCloStrength: 0,

  jobStates: {},
  jobBookings: {},

  orgasm: 0,
  orgasm_buildup: 0,
  anal_slip: 0,
  vaginal_slip: 0,
  vgape: 0,
  agape: 0,
  ar_anal_lube: 0,
  ar_vag_lube: 0,
  auto_anal_lube: 0,
  auto_vag_lube: 0,
  sucskill: 0,
  pcs_makupskl: 0,
  last_pee: 0,
  orgasm_or: '',
  orgasm_txt: '',
  tatiana: {},
  virgin_stats: {},
  count: {},
  arousal_npc_sexual: [],
  arousal_npc_hidden_sexual: [],
  arousal_npc_vaginal: [],
  arousal_npc_hidden_vaginal: [],
  arousal_npc_anal: [],
  arousal_npc_hidden_anal: [],
  arousal_npc_kissed: [],
  arousal_npc_hidden_kissed: [],
  arousal_npc_handstuff: [],
  arousal_npc_hidden_handstuff: [],
  arousal_npc_titstuff: [],
  arousal_npc_hidden_titstuff: [],
  arousal_npc_footstuff: [],
  arousal_npc_hidden_footstuff: [],
  arousal_npc_oral: [],
  arousal_npc_hidden_oral: [],
  npcID10: '',
  npcID11: '',
  dick_length10: 0,
  dick_width10: 0,
  silavag10: 0,
  npcCondom10: '',
  dick_desc10: '',
  dick_length11: 0,
  dick_width11: 0,
  silavag11: 0,
  npcCondom11: '',
  dick_desc11: '',
  makeup: {},
  lactation: {},
  rape: [0, 0],
  lubonus: 0,

  lastwornclothingtype: 'nude',
  lastwornclothingnumber: 0,
  lastwornunderwear: 0,
  lastwornbodysuittype: 'none',
  lastwornbodysuitnumber: 0,
  lastwornpantytype: 'none',
  lastwornpantynumber: 0,
  lastwornbratype: 'none',
  lastwornbranumber: 0,
  lastwornshoetype: 'none',
  lastwornshoenumber: 0,
  lastwornpursetype: 'none',
  lastwornpursenumber: 0,
  lastworncoattype: 'none',
  lastworncoatnumber: 0,
  lastworn_backups: {},

  PBimbo: 0,
  PGoth: 0,
  PPunk: 0,
  PPrep: 0,
  PPrude: 0,
  PProstitute: 0,
  PMaid: 0,
  PServer: 0,
  PStrip: 0,
  PSchool: 0,
  POffice: 0,
  PSport: 0,
  PSwim: 0,
  PCoverTop: 0,
  PCoverFront: 0,
  PCoverBack: 0,

  PCloBra: 0,
  PCloBimbo: 0,
  PCloGoth: 0,
  PCloPunk: 0,
  PCloPrep: 0,
  PCloPrude: 0,
  PCloStyle2: 0,
  PCloMaid: 0,
  PCloServer: 0,
  PCloStrip: 0,
  PCloSchool: 0,
  PCloOffice: 0,
  PCloSport: 0,
  PCloSwim: 0,
  PCloCoverTop: 0,
  PCloCoverFront: 0,
  PCloCoverBack: 0,
  PCloStyle: 0,
  PCloProstitute: 0,
  PCloInhibit: 0,
  PCloDress: 0,
  PCloSkirt: 0,
  PCloTopCut: 0,
  PCloBorrowed: 0,
  PCloMaxStrength: 0,

  PShoBimbo: 0,
  PShoGoth: 0,
  PShoPunk: 0,
  PShoStyle2: 0,
  PShoStrip: 0,
  PShoSport: 0,
  PShoBorrowed: 0,
  PShoHeels: 0,
  PShoPain: { severe: 80, medium: 60, mild: 40 },
  PShoMaxStrength: 0,

  PBraBorrowed: 0,
  PBraDirt: 0,
  PBraStrength: 0,
  PBraMaxStrength: 0,
  PBraCover: 0,
  PBraFun: 0,

  PPanBorrowed: 0,
  PPanDirt: 0,
  PPanStrength: 0,
  PPanMaxStrength: 0,
  PPanCoverFront: 0,
  PPanCoverBack: 0,
  PPanFun: 0,
  PPanSwim: 0,

  PBraSwim: 0,
  PCoatBorrowed: 0,
  PCoatStrength: 0,
  PCoatMaxStrength: 0,

  heelsminut: 0,
  heelstime: 0,
  sparrvol: {},
  underwear: { type: 0 },
  stat_texts: {},
  stat_cfg: {},
  sd_icons_4: [],
  isprok: 0,
  isprokp: 0,
  mesec: 0,
  preg: 0,
  isprok_lastday: 0,

  exer_stam: [0, 0, 0, 0, 0, 0],
  exer_stam0: [0, 0, 0, 0, 0, 0],
  exer_stam1: [0, 0, 0, 0, 0, 0],
  exer_stam2: [0, 0, 0, 0, 0, 0],
  exer_stam3: [0, 0, 0, 0, 0, 0],
  exer_stam4: [0, 0, 0, 0, 0, 0],
  exer_stam5: [0, 0, 0, 0, 0, 0],
  exer_rout0: [0, 0, 0, 0, 0, 0],
  exer_rout1: [0, 0, 0, 0, 0, 0],
  exer_rout2: [0, 0, 0, 0, 0, 0],
  exer_rout3: [0, 0, 0, 0, 0, 0],
  exer_rout4: [0, 0, 0, 0, 0, 0],
  exer_rout5: [0, 0, 0, 0, 0, 0],
  excer_name: ['', 'Default 1', 'Default 2', 'Default 3', 'Default 4', 'Default 5'],
  exer_menu: 0,
  exer_auto: 0,
  exercisex: 0,
  timemult: 0,
  timestring: '',
  sport_clothes_exercise_bonus: 0,
  pushrecord: 0,
  pushnum: 0,
  willday_yoga: 0,
  yoga_counter: 0,
  lastexerciseexp: 0,
  stamindx: 0,
  PBraSport: 0,
  PPanSport: 0,

  class_data: {},
  class_list_institution: [],
  class_list_name: [],
  class_grade_desc: {},
  lernHome: 0,
  npc_intel: {},

  cumspclnt: 0,
  uni_lunch_bought: 0,
  food_loc: 0,
  recuperation: 0,
  calendar_ui_week_start: 0,
  calCycleOpts: {},
  cal_upcoming_dirty: 0,
};

const GAME_STATE_KEYS = Object.keys(initialState) as (keyof GameState)[];

function extractState(s: GameStore): GameState {
  const state = {} as GameState;
  for (const key of GAME_STATE_KEYS) {
    state[key] = s[key] as never;
  }
  return state;
}

export const useGameStore = create<GameStore>((set, get) => ({
  ...(initialState as unknown as GameState),
  reminders: [],

  set: (partial) => {
    if (typeof partial === 'function') {
      set(s => {
        const result = (partial as (state: GameState) => Partial<GameState> | void)(s);
        return result ?? {};
      });
    } else {
      set(partial);
    }
  },

  doGoto: (loc, arg) => {
    logAction('GOTO', `${loc}${arg ? ':' + arg : ''}`);
    const s = extractState(get());
    pushSnapshot(s, s.loc, `GOTO ${loc}${arg ? ':' + arg : ''}`);
    try {
      goto(s, loc, arg);
      computeStats(s);
      let soundOn = true;
      try {
        const raw = localStorage.getItem('gl_settings');
        if (raw) soundOn = (JSON.parse(raw) as { soundOn?: boolean }).soundOn ?? true;
      } catch { /* ignore */ }
      updateLocationMusic(s.loc, s.hour, s.month, soundOn);
      set({ ...s, reminders: [] });
    } catch (err) {
      const restored = restoreLast();
      if (restored) set({ ...restored, reminders: [] });
      console.error('doGoto rollback:', err);
    }
  },

  doCall: (loc, arg) => {
    logAction('CALL', `${loc}${arg ? ':' + arg : ''}`);
    const s = extractState(get());
    pushSnapshot(s, s.loc, `CALL ${loc}${arg ? ':' + arg : ''}`);
    try {
      pushState(s);
      goto(s, loc, arg);
      computeStats(s);
      set({ ...s, reminders: [] });
    } catch (err) {
      const restored = restoreLast();
      if (restored) set({ ...restored, reminders: [] });
      console.error('doCall rollback:', err);
    }
  },

  doPush: () => {
    const s = extractState(get());
    pushState(s);
    set({ ...s });
  },

  doPop: () => {
    const s = extractState(get());
    returnFromCall(s);
    set({ ...s, reminders: [] });
  },

  doAdvanceTime: (minutes) => {
    const s = extractState(get());
    pushSnapshot(s, s.loc, `ADVANCE +${minutes}m`);
    try {
      advanceTime(s, minutes);
      computeStats(s);
      set({ ...s, reminders: [] });
    } catch (err) {
      const restored = restoreLast();
      if (restored) set({ ...restored, reminders: [] });
      console.error('doAdvanceTime rollback:', err);
    }
  },

  doAction: (action) => {
    const s = extractState(get());
    pushSnapshot(s, s.loc, action.label);
    try {
      const reminders = processAction(s, action);
      logAction('CLICK', `"${action.label}" → ${s.loc}${s.locArg ? ':' + s.locArg : ''}`);
      set({ ...s, reminders });
    } catch (err) {
      const restored = restoreLast();
      if (restored) set({ ...restored, reminders: [] });
      console.error('doAction rollback:', err);
    }
  },

  undoAction: () => {
    const s = extractState(get());
    const restored = undo(s);
    if (restored) {
      computeStats(restored);
      set({ ...restored, reminders: [] });
      logAction('UNDO', `→ ${restored.loc}`);
    }
  },

  redoAction: () => {
    const s = extractState(get());
    const restored = redo(s);
    if (restored) {
      computeStats(restored);
      set({ ...restored, reminders: [] });
      logAction('REDO', `→ ${restored.loc}`);
    }
  },

  clearDebugHistory: () => {
    clearHistory();
  },

  dismissReminders: () => set({ reminders: [] }),

  saveGame: async (slot) => {
    const s = extractState(get());
    await idbSave(slot, s);
  },

  loadGame: async (slot) => {
    const loaded = await idbLoad(slot);
    if (loaded) {
      const merged = { ...initialState, ...loaded, reminders: [], navigationVersion: 0 };
      set(merged);
      const s = extractState(get());
      goto(s, s.loc, s.locArg);
      computeStats(s);
      set({ ...s });
    }
  },
}));

if (typeof window !== 'undefined') {
  (window as any).__gameStore = useGameStore;
}
