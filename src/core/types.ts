type Navigation =
  | { goto: [string, string, string?, string?]; call?: never; invoke?: never }
  | { call: [string, string, string?, string?]; goto?: never; invoke?: never }
  | { invoke: [string, string, string?, string?]; goto?: never; call?: never }
  | { goto?: never; call?: never; invoke?: never };

export type ActionDef = {
  label: string;
  labelFn?: (s: GameState) => string;
  handler?: (s: GameState) => void;
  visible?: (s: GameState) => boolean;
  style?: 'normal' | 'positive' | 'negative' | 'warning';
} & Navigation;

export interface SceneState {
  mainText: string;
  statText: string;
  curActs: readonly ActionDef[];
  curobjs: string;
  backimage: string;
  menuOff: boolean;
}

export interface StateFrame {
  loc: string;
  locArg: string;
  prevLoc?: string;
  prevArg?: string;
}

export interface LocationExitContext {
  targetLoc: string;
  targetArg: string;
}

export interface LocationDef {
  name: string;
  title?: string;
  background?: string;
  enter?: (s: GameState, scene: import('./scene').SceneBuilder) => void;
  exit?: (s: GameState, ctx: LocationExitContext) => void;
  component?: React.ComponentType;
  region?: string;
  locationType?: string;
  locclass?: string;
  description?: string[];
  actions?: ActionDef[];
}

export interface RoutineDef {
  name: string;
  run(s: GameState, arg: string): void;
}

export interface EventDef {
  id: string;
  title: string;
  daystart: number;
  startTs: number;
  durationTs: number;
  allDay: boolean;
  color: string;
  recur: 'none' | 'daily' | 'weekly' | 'monthly' | 'weekdays' | 'weekends';
  isPlayerEvent: boolean;
}

export interface MoodVars {
  disp_base: number;
  disp: number;
  momentum: number;
  inertia: number;
  max: number;
  min: number;
  hold_minut: number;
  leftover_mood: number;
}

export interface GameState {
  hour: number;
  minut: number;
  daystart: number;
  totminut: number;
  prevtotmin: number;

  loc: string;
  locArg: string;
  locArg2: string;
  locArg3: string;
  menuLoc: string;
  menuArg: string;
  prevLoc: string;
  prevArg: string;
  locationType: string;

  scene: SceneState;
  stateStack: StateFrame[];
  navigationVersion: number;

  pcs_mood: number;
  pcs_energy: number;
  pcs_hydra: number;
  pcs_sleep: number;
  pcs_willpwr: number;
  pcs_health: number;
  pcs_stren: number;
  pcs_agil: number;
  pcs_vital: number;
  pcs_intel: number;
  pcs_react: number;
  pcs_sprt: number;
  pcs_chrsm: number;
  pcs_prcptn: number;
  pcs_magik: number;
  pcs_faith: number;
  pcs_inhib: number;
  pcs_humint: number;
  pcs_sweat: number;
  pcs_stam: number;
  pcs_vag: number;
  pcs_ass: number;
  pcs_throat: number;
  pcs_mana: number;
  pcs_horny: number;
  money: number;
  karta: number;
  stolmoney: number;
  bankDebtLimit: number;
  bankAccount: number;
  money_overflow: number;
  karta_overflow: number;
  stolmoney_overflow: number;

  moodVars: MoodVars;
  mood_trauma: number;
  moodSE: Record<string, number>;

  stammax: number;
  willpowermax: number;
  healthmax: number;
  manamax: number;

  will_counter: number;
  pcs_willpower_feeder: number;
  will_cost: number;
  will_calc: number;
  will_arousal_mod: number;
  will_fetish_mod: number;
  will_fetish_mod_pref: number;
  will_succubus_mod: number;
  will_enforced: number;
  will_dnd: number;
  missCum: number;
  timeTresh: number;
  pcs_persuas: number;
  cycle: number;
  sexcontra: number;

  fat: number;
  vitalbuf: number;
  strenbuf: number;
  agilbuf: number;

  trait_vars: Record<string, number>;
  arch_vars: Record<string, string | number>;
  arch_effects: Record<string, number>;
  skill_levels: Record<string, number>;
  drugVars: Record<string, number>;
  mc_inventory: Record<string, number>;
  min_arousal: number;
  hair_length: number;
  butt: number;
  breast: number;
  bodysuitworntype: string;
  bodysuitwornnumber: number;
  no_exp_gain: number;
  stren_plus_lvl: number;
  inhib_exp: number;
  npcSpermPot: number;
  npcSpermVol: number;
  pillcon2: number;
  spafinloc: number;
  cumprecheck: number;
  sexunaware: number;
  sexpartkno: number;
  npc_love: Record<string, number>;
  npclastgenerated: string;
  fame: Record<string, number>;
  combatSpells: string[];
  nonComSpells: string[];
  storySpells: string[];
  cheatVars: Record<string, number>;
  pcs_mood_effects: Record<string, number>;
  sleepVars: Record<string, number>;
  pcs_condition: Record<string, number>;
  pcs_period: Record<string, number>;
  birth_control: Record<string, number>;
  vomit: Record<string, number>;
  hunterVars: Record<string, number>;
  stat: Record<string, number>;
  pain: Record<string, number>;
  MiraVars: Record<string, number>;
  npc_drunk: Record<string, number>;
  model: Record<string, number>;

  succublvl: number;
  succubusflag: number;
  pcs_dom: number;
  sub: number;

  shame: number;
  gerpes: number;
  sifilis: number;
  triper: number;
  dimaRevenge: number;
  dimaRevChoice: number;
  grupTipe: number;
  alko: number;
  alkoblock: number;
  pcs_lipbalm: number;
  sickstage: number;
  sick: number;
  sicktimer: number;
  perkice: number;
  frost: number;
  mosol: number;

  pantyworntype: string;
  pantywornnumber: number;
  clothingworntype: string;
  clothingwornnumber: number;
  PCloPants: number;
  PCloPanties: number;
  PPanThinness: number;
  PBraThinness: number;
  PCloQuality: number;
  PCloThinness: number;
  PXCloTopCut: number;
  PXCloBottomShortness: number;
  PBraQuality: number;
  PPanQuality: number;
  PShoQuality: number;
  PCoatQuality: number;
  PCloDirt: number;
  pcs_apprncbase: number;
  tits: number;
  pcs_breath: number;
  deodorant_on: number;
  deodorant_time: number;
  pcs_bmi: number;
  clit_size: number;
  temper: number;
  weatherFall: number;
  sunWeather: number;
  lashair: number;
  pcs_pubes: number;
  pcs_leghair: number;

  KGOLpers: number;
  KGHP: number;
  KGHPMAX: number;
  KGMana: number;
  KGManaMax: number;

  HotelRoom: Record<string, number>;
  hotelRoomDays: Record<string, number>;

  gschoolVars: Record<string, number | string>;
  kanikuli: number;
  week: number;
  odd_week: number;
  year: number;
  month: number;
  day: number;

  pcs_dob: number;
  birthday: number;
  birthmonth: number;
  birthyear: number;
  age: number;
  vidage: number;
  vidageday: number;

  holyday: string;
  is_natholi: number;
  nyp_day: number;
  ciklNewWeek: number;
  yearstart: number;

  start_type: Record<string, string>;
  locat: Record<string, number>;

  pcs_firstname: string;
  pcs_lastname: string;
  pcs_nickname: string;
  face_style: { type: number; avatar_path: string };
  pcs_haircol: number;
  pcs_hairlng: number;
  curly: number;
  pcs_eyecol: number;
  pcs_lashes: number;
  pcs_eyesize: number;
  glass: number;
  tsg: number;
  start_location: number;
  pcs_hairbsh: number;
  pcs_makeup: number;
  hbangs: number;
  hbraids: number;
  hpigtail: number;
  hpingripw: number;
  hscrunchw: number;
  pcs_skin: number;
  pcs_teeth: number;
  pcs_lip: number;
  pcs_apprnc: number;
  pcs_hotcat: number;
  pcs_tattoos: Record<string, number>;
  pcs_piercings: Record<string, number>;
  braworntype: string;
  brawornnumber: number;
  shoeworntype: string;
  shoewornnumber: number;
  coatworntype: string;
  coatwornnumber: number;
  bag: number;
  currentpursetype: string;
  currentpursenumber: number;
  bodyVars: Record<string, string>;
  cumloc: Record<string, number>;
  cumvol: Record<string, number>;
  university: Record<string, string>;
  npc_nickname: Record<string, string>;

  npcIndex: string[];
  npcID: string[];
  npc_dob: Record<string, number>;
  npc_rel: Record<string, number>;
  npc_rel_daily: Record<string, number>;
  npc_known: Record<string, number>;
  npc_rel_check: number;
  npc_grupTipe: Record<string, number>;
  npc_gender: Record<string, number>;
  npc_hotcat: Record<string, number>;
  hotcat_movement: Record<string, number>;
  npc_firstname: Record<string, string>;
  npc_lastname: Record<string, string>;
  npc_pic: Record<string, string>;
  aarraynumber: number;

  npcDefs: Record<string, import('../data/npcs').NpcDef>;
  npcs: Record<string, import('../data/npcs').NpcState>;

  inSleep: number;
  military: number;
  menu_off: number;

  events_list: string[];
  event_title: Record<string, string>;
  event_daystart: Record<string, number>;
  event_startTs: Record<string, number>;
  event_durationTs: Record<string, number>;
  event_allDay: Record<string, boolean>;
  event_color: Record<string, string>;
  event_recur: Record<string, string>;
  event_isPlayer: Record<string, boolean>;
  cal_player_event_count: number;
  cal_reminded: Record<string, number>;
  nextEventId: number;

  settingmode: number;
  debug: Record<string, unknown>;
  cfg_vars: Record<string, unknown>;
  statAlerts: string[];

  dateVars: Record<string, number | string>;

  misc: Record<string, number | string | boolean>;

  wardrobeSets: WardrobeSet[];
  wardrobeDefaultPage: string;
  defaultSportNumber: number;
  defaultSchoolNumber: number;

  clothingInventory: Record<string, import('./clothingTypes').ClothingItem[]>;
  PCloStrength: number;

  jobStates: Record<string, import('./jobTypes').JobState>;
  jobBookings: Record<string, string>;
  combat?: import('../systems/combat/types').CombatState;

  orgasm: number;
  orgasm_buildup: number;
  anal_slip: number;
  vaginal_slip: number;
  vgape: number;
  agape: number;
  ar_anal_lube: number;
  ar_vag_lube: number;
  auto_anal_lube: number;
  auto_vag_lube: number;
  sucskill: number;
  pcs_makupskl: number;
  last_pee: number;
  orgasm_or: string;
  orgasm_txt: string;
  tatiana: Record<string, number>;
  virgin_stats: Record<string, number | string>;
  count: Record<string, number>;
  arousal_npc_sexual: string[];
  arousal_npc_hidden_sexual: string[];
  arousal_npc_vaginal: string[];
  arousal_npc_hidden_vaginal: string[];
  arousal_npc_anal: string[];
  arousal_npc_hidden_anal: string[];
  arousal_npc_kissed: string[];
  arousal_npc_hidden_kissed: string[];
  arousal_npc_handstuff: string[];
  arousal_npc_hidden_handstuff: string[];
  arousal_npc_titstuff: string[];
  arousal_npc_hidden_titstuff: string[];
  arousal_npc_footstuff: string[];
  arousal_npc_hidden_footstuff: string[];
  arousal_npc_oral: string[];
  arousal_npc_hidden_oral: string[];
  npcID10: string;
  npcID11: string;
  dick_length10: number;
  dick_width10: number;
  silavag10: number;
  npcCondom10: string;
  dick_desc10: string;
  dick_length11: number;
  dick_width11: number;
  silavag11: number;
  npcCondom11: string;
  dick_desc11: string;
  makeup: Record<string, number>;
  lactation: Record<string, number>;
  rape: number[];
  lubonus: number;

  lastwornclothingtype: string;
  lastwornclothingnumber: number;
  lastwornunderwear: number;
  lastwornbodysuittype: string;
  lastwornbodysuitnumber: number;
  lastwornpantytype: string;
  lastwornpantynumber: number;
  lastwornbratype: string;
  lastwornbranumber: number;
  lastwornshoetype: string;
  lastwornshoenumber: number;
  lastwornpursetype: string;
  lastwornpursenumber: number;
  lastworncoattype: string;
  lastworncoatnumber: number;
  lastworn_backups: Record<string, Record<string, string | number>>;

  PBimbo: number;
  PGoth: number;
  PPunk: number;
  PPrep: number;
  PPrude: number;
  PProstitute: number;
  PMaid: number;
  PServer: number;
  PStrip: number;
  PSchool: number;
  POffice: number;
  PSport: number;
  PSwim: number;
  PCoverTop: number;
  PCoverFront: number;
  PCoverBack: number;

  PCloBra: number;
  PCloBimbo: number;
  PCloGoth: number;
  PCloPunk: number;
  PCloPrep: number;
  PCloPrude: number;
  PCloStyle2: number;
  PCloMaid: number;
  PCloServer: number;
  PCloStrip: number;
  PCloSchool: number;
  PCloOffice: number;
  PCloSport: number;
  PCloSwim: number;
  PCloCoverTop: number;
  PCloCoverFront: number;
  PCloCoverBack: number;
  PCloStyle: number;
  PCloProstitute: number;
  PCloInhibit: number;
  PCloDress: number;
  PCloSkirt: number;
  PCloTopCut: number;
  PCloBorrowed: number;
  PCloMaxStrength: number;

  PShoBimbo: number;
  PShoGoth: number;
  PShoPunk: number;
  PShoStyle2: number;
  PShoStrip: number;
  PShoSport: number;
  PShoBorrowed: number;
  PShoHeels: number;
  PShoPain: Record<string, number>;
  PShoMaxStrength: number;
  PShoStrength: number;

  PBraBorrowed: number;
  PBraDirt: number;
  PBraStrength: number;
  PBraMaxStrength: number;
  PBraCover: number;
  PBraFun: number;

  PPanBorrowed: number;
  PPanDirt: number;
  PPanStrength: number;
  PPanMaxStrength: number;
  PPanCoverFront: number;
  PPanCoverBack: number;
  PPanFun: number;
  PPanSwim: number;

  PBraSwim: number;
  PCoatBorrowed: number;
  PCoatStrength: number;
  PCoatMaxStrength: number;

  heelsminut: number;
  heelstime: number;
  sparrvol: Record<string, number>;
  underwear: Record<string, number>;
  stat_texts: Record<string, string>;
  stat_cfg: Record<string, unknown>;
  sd_icons_4: string[];
  isprok: number;
  isprokp: number;
  mesec: number;
  preg: number;
  isprok_lastday: number;

  exer_stam: number[];
  exer_stam0: number[];
  exer_stam1: number[];
  exer_stam2: number[];
  exer_stam3: number[];
  exer_stam4: number[];
  exer_stam5: number[];
  exer_rout0: number[];
  exer_rout1: number[];
  exer_rout2: number[];
  exer_rout3: number[];
  exer_rout4: number[];
  exer_rout5: number[];
  excer_name: string[];
  exer_menu: number;
  exer_auto: number;
  exercisex: number;
  timemult: number;
  timestring: string;
  sport_clothes_exercise_bonus: number;
  pushrecord: number;
  pushnum: number;
  willday_yoga: number;
  yoga_counter: number;
  lastexerciseexp: number;
  stamindx: number;
  PBraSport: number;
  PPanSport: number;

  class_data: Record<string, number>;
  class_list_institution: string[];
  class_list_name: string[];
  class_grade_desc: Record<string, string>;
  lernHome: number;
  npc_intel: Record<string, number>;

  cumspclnt: number;
  uni_lunch_bought: number;
  food_loc: number;
  recuperation: number;
  calendar_ui_week_start: number;
  calCycleOpts: Record<string, number>;
  cal_upcoming_dirty: number;
}

export interface WardrobeSet {
  name: string;
  clothingType: string;
  clothingNumber: number;
  underwearType: number;
  braType: string;
  braNumber: number;
  pantyType: string;
  pantyNumber: number;
  bodysuitType: string;
  bodysuitNumber: number;
  shoeType: string;
  shoeNumber: number;
  coatType: string;
  coatNumber: number;
  purseType: string;
  purseNumber: number;
}

export interface ThemeDef {
  name: string;
  type: 'dynamic' | 'static';
  bg: string;
  fg: string;
  accent: string;
  panel: string;
  border: string;
}
