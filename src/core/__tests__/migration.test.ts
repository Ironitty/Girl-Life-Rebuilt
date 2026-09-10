import { describe, it, expect } from 'vitest';
import {
  parseSave,
  validateEnvelope,
  runMigrations,
  validateGameState,
  loadSave,
  formatSaveError,
  SaveError,
  CURRENT_SCHEMA_VERSION,
} from '../migration';

function makeSave(overrides: Record<string, unknown> = {}): string {
  return JSON.stringify({
    schemaVersion: 1,
    savedAt: 1700000000000,
    slot: 1,
    loc: 'start',
    locArg: '',
    daystart: 1,
    money: 100,
    ...overrides,
  });
}

describe('migration pipeline', () => {
  describe('parseSave', () => {
    it('parses valid JSON', () => {
      const result = parseSave(makeSave());
      expect(result.loc).toBe('start');
    });

    it('throws on invalid JSON', () => {
      expect(() => parseSave('not json')).toThrow(SaveError);
    });

    it('throws on JSON array', () => {
      expect(() => parseSave('[1,2,3]')).toThrow(SaveError);
    });

    it('throws on JSON null', () => {
      expect(() => parseSave('null')).toThrow(SaveError);
    });

    it('throws on JSON string', () => {
      expect(() => parseSave('"hello"')).toThrow(SaveError);
    });
  });

  describe('validateEnvelope', () => {
    it('accepts valid envelope', () => {
      const data = JSON.parse(makeSave());
      const env = validateEnvelope(data);
      expect(env.schemaVersion).toBe(1);
      expect(env.slot).toBe(1);
    });

    it('throws on missing schemaVersion', () => {
      const data = JSON.parse(makeSave());
      delete data.schemaVersion;
      expect(() => validateEnvelope(data)).toThrow(SaveError);
    });

    it('throws on non-integer schemaVersion', () => {
      const data = JSON.parse(makeSave());
      data.schemaVersion = 1.5;
      expect(() => validateEnvelope(data)).toThrow(SaveError);
    });

    it('throws on zero schemaVersion', () => {
      const data = JSON.parse(makeSave());
      data.schemaVersion = 0;
      expect(() => validateEnvelope(data)).toThrow(SaveError);
    });

    it('throws on missing savedAt', () => {
      const data = JSON.parse(makeSave());
      delete data.savedAt;
      expect(() => validateEnvelope(data)).toThrow(SaveError);
    });

    it('throws on missing slot', () => {
      const data = JSON.parse(makeSave());
      delete data.slot;
      expect(() => validateEnvelope(data)).toThrow(SaveError);
    });
  });

  describe('runMigrations', () => {
    it('returns data unchanged at current version', () => {
      const data = JSON.parse(makeSave());
      const result = runMigrations(data, 1);
      expect(result.schemaVersion).toBe(CURRENT_SCHEMA_VERSION);
    });

    it('throws on unknown version with no migration path', () => {
      const data = JSON.parse(makeSave());
      expect(() => runMigrations(data, 99)).toThrow(SaveError);
    });
  });

  describe('validateGameState', () => {
    it('accepts valid state', () => {
      const data = JSON.parse(makeSave());
      const result = validateGameState(data);
      expect(result.loc).toBe('start');
    });

    it('throws on missing loc', () => {
      const data = JSON.parse(makeSave());
      delete data.loc;
      expect(() => validateGameState(data)).toThrow(SaveError);
    });

    it('throws on missing daystart', () => {
      const data = JSON.parse(makeSave());
      delete data.daystart;
      expect(() => validateGameState(data)).toThrow(SaveError);
    });

    it('throws on empty loc', () => {
      const data = JSON.parse(makeSave());
      data.loc = '';
      expect(() => validateGameState(data)).toThrow(SaveError);
    });
  });

  describe('loadSave (full pipeline)', () => {
    it('loads a valid save', () => {
      const state = loadSave(makeSave()) as Record<string, unknown>;
      expect(state.loc).toBe('start');
      expect(state.money).toBe(100);
      expect(state.schemaVersion).toBeUndefined();
      expect(state.savedAt).toBeUndefined();
      expect(state.slot).toBeUndefined();
    });

    it('throws on invalid JSON', () => {
      expect(() => loadSave('garbage')).toThrow(SaveError);
    });

    it('throws on missing required fields', () => {
      const json = JSON.stringify({ schemaVersion: 1, savedAt: 1, slot: 1 });
      expect(() => loadSave(json)).toThrow(SaveError);
    });
  });

  describe('formatSaveError', () => {
    it('formats SaveError', () => {
      const msg = formatSaveError(new SaveError('test error'));
      expect(msg).toContain('This save file could not be loaded');
      expect(msg).toContain('test error');
    });

    it('formats unknown error', () => {
      const msg = formatSaveError(new Error('boom'));
      expect(msg).toContain('This save file could not be loaded');
      expect(msg).toContain('boom');
    });

    it('formats non-error value', () => {
      const msg = formatSaveError('string error');
      expect(msg).toContain('This save file could not be loaded');
      expect(msg).toContain('string error');
    });
  });

  describe('JSON serialization round-trip', () => {
    it('representative state survives JSON.stringify/parse', () => {
      const state = {
        loc: 'city_center',
        locArg: '',
        daystart: 5,
        money: 1500,
        pcs_mood: 72,
        pcs_energy: 85,
        hour: 14,
        minut: 30,
        totminut: 20100,
        prevtotmin: 20100,
        menuLoc: 'city_center',
        menuArg: '',
        prevLoc: 'map_view',
        prevArg: 'city_center',
        locationType: 'public_outdoors',
        moodVars: { disp_base: 50, disp: 72, momentum: 0, inertia: 0, max: 100, min: 0, hold_minut: 0, leftover_mood: 0 },
        mood_trauma: 0,
        moodSE: {},
        stammax: 100,
        willpowermax: 100,
        healthmax: 100,
        manamax: 50,
        will_counter: 0,
        pcs_willpower_feeder: 0,
        fat: 0,
        vitalbuf: 0,
        strenbuf: 0,
        agilbuf: 0,
        trait_vars: { kind: 3, brave: 1 },
        arch_vars: { introvert: 2 },
        arch_effects: {},
        skill_levels: { cooking: 2 },
        fame: { city: 5 },
        combatSpells: ['fireball'],
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
        stat: { strength: 3, agility: 2 },
        pain: {},
        MiraVars: {},
        npc_drunk: {},
        model: {},
        succublvl: 0,
        succubusflag: 0,
        pcs_dom: 0,
        sub: 0,
        shame: 10,
        alko: 0,
        alkoblock: 0,
        pcs_lipbalm: 0,
        sickstage: 0,
        sick: 0,
        sicktimer: 0,
        perkice: 0,
        frost: 0,
        mosol: 0,
        pantyworntype: 'cotton',
        pantywornnumber: 1,
        clothingworntype: 'dress',
        clothingwornnumber: 3,
        PCloPants: 0,
        PCloPanties: 1,
        PPanThinness: 2,
        PBraThinness: 1,
        PCloQuality: 3,
        PCloThinness: 2,
        PXCloTopCut: 0,
        PXCloBottomShortness: 0,
        PBraQuality: 2,
        PPanQuality: 2,
        PShoQuality: 1,
        PCoatQuality: 0,
        PCloDirt: 0,
        pcs_apprncbase: 5,
        tits: 2,
        pcs_breath: 0,
        deodorant_on: 1,
        pcs_bmi: 21,
        clit_size: 1,
        temper: 15,
        weatherFall: 0,
        sunWeather: 1,
        lashair: 0,
        pcs_pubes: 1,
        pcs_leghair: 1,
        KGOLpers: 0,
        KGHP: 0,
        KGHPMAX: 0,
        KGMana: 0,
        KGManaMax: 0,
        HotelRoom: {},
        hotelRoomDays: {},
        gschoolVars: {},
        kanikuli: 0,
        week: 3,
        odd_week: 1,
        year: 2024,
        month: 9,
        day: 15,
        pcs_dob: 20000101,
        birthday: 1,
        birthmonth: 1,
        birthyear: 2000,
        age: 18,
        vidage: 0,
        vidageday: 0,
        holyday: '',
        is_natholi: 0,
        nyp_day: 0,
        ciklNewWeek: 0,
        yearstart: 2024,
        start_type: {},
        locat: {},
        pcs_firstname: 'Test',
        pcs_lastname: 'Player',
        pcs_nickname: '',
        face_style: { type: 1, avatar_path: 'face_1.png' },
        pcs_haircol: 2,
        pcs_hairlng: 3,
        curly: 0,
        pcs_eyecol: 1,
        pcs_lashes: 2,
        pcs_eyesize: 1,
        glass: 0,
        tsg: 0,
        start_location: 1,
        pcs_hairbsh: 2,
        pcs_makeup: 1,
        hbangs: 0,
        hbraids: 0,
        hpigtail: 0,
        hpingripw: 0,
        hscrunchw: 0,
        pcs_skin: 2,
        pcs_teeth: 1,
        pcs_lip: 1,
        pcs_apprnc: 5,
        pcs_hotcat: 0,
        pcs_tattoos: {},
        pcs_piercings: {},
        braworntype: 'sports',
        brawornnumber: 1,
        shoeworntype: 'sneakers',
        shoewornnumber: 1,
        coatworntype: 'none',
        coatwornnumber: 0,
        bag: 1,
        currentpursetype: 'basic',
        currentpursenumber: 1,
        bodyVars: {},
        cumloc: {},
        cumvol: {},
        university: {},
        npc_nickname: {},
        npcIndex: ['npc1', 'npc2'],
        npcID: ['id1', 'id2'],
        npc_dob: { npc1: 20000101, npc2: 19990101 },
        npc_rel: { npc1: 50, npc2: 30 },
        npc_gender: { npc1: 1, npc2: 2 },
        npc_hotcat: { npc1: 0, npc2: 0 },
        hotcat_movement: {},
        npc_firstname: { npc1: 'Alice', npc2: 'Bob' },
        npc_lastname: { npc1: 'Smith', npc2: 'Jones' },
        npc_pic: { npc1: 'alice.png', npc2: 'bob.png' },
        aarraynumber: 0,
        npcDefs: {},
        npcs: { npc1: { met: true, relationship: 50 }, npc2: { met: false, relationship: 0 } },
        inSleep: 0,
        military: 0,
        menu_off: 0,
        events_list: ['evt_1'],
        event_title: { evt_1: 'Test Event' },
        event_daystart: { evt_1: 5 },
        event_startTs: { evt_1: 20100 },
        event_durationTs: { evt_1: 60 },
        event_allDay: { evt_1: false },
        event_color: { evt_1: '#ff0000' },
        event_recur: { evt_1: 'none' },
        event_isPlayer: { evt_1: true },
        cal_player_event_count: 1,
        cal_reminded: {},
        nextEventId: 2,
        settingmode: 0,
        debug: {},
        cfg_vars: {},
        statAlerts: [],
        dateVars: {},
        misc: { jobTerminated: 0 },
        wardrobeSets: [],
        wardrobeDefaultPage: 'default1',
        defaultSportNumber: 0,
        defaultSchoolNumber: 0,
        clothingInventory: { dress: [{ type: 'dress', number: 3, quality: 3 }] },
        PCloStrength: 0,
        jobStates: {},
        jobBookings: {},
      };

      const json = JSON.stringify(state);
      const restored = JSON.parse(json);

      expect(restored.loc).toBe('city_center');
      expect(restored.money).toBe(1500);
      expect(restored.pcs_mood).toBe(72);
      expect(restored.moodVars.disp).toBe(72);
      expect(restored.trait_vars.kind).toBe(3);
      expect(restored.skill_levels.cooking).toBe(2);
      expect(restored.combatSpells).toEqual(['fireball']);
      expect(restored.npcIndex).toEqual(['npc1', 'npc2']);
      expect(restored.npcs.npc1.relationship).toBe(50);
      expect(restored.events_list).toEqual(['evt_1']);
      expect(restored.event_isPlayer.evt_1).toBe(true);
      expect(restored.nextEventId).toBe(2);
      expect(restored.misc.jobTerminated).toBe(0);
      expect(restored.clothingInventory.dress[0].quality).toBe(3);
    });
  });
});
