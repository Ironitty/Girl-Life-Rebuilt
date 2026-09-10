import { describe, it, expect, vi } from 'vitest';

vi.mock('../stats', () => ({ computeStats: vi.fn() }));
vi.mock('../loca', () => ({ loca: vi.fn() }));
vi.mock('../../systems/calendar', () => ({ checkReminders: vi.fn(() => []) }));

import type { GameState, ActionDef } from '../types';
import { SceneBuilder } from '../scene';
import { registerLocation, goto, call, invoke } from '../location';
import { processAction, returnFromCall } from '../engine';
import { serializeSave, deserializeSave } from '../save';
import { pushState, popState } from '../stateStack';

function createTestState(overrides: Partial<GameState> = {}): GameState {
  const base: GameState = {
    hour: 9,
    minut: 0,
    daystart: 1,
    totminut: 540,
    prevtotmin: 540,
    loc: 'test_start',
    locArg: '',
    menuLoc: 'test_start',
    menuArg: '',
    prevLoc: '',
    prevArg: '',
    locationType: '',
    scene: { mainText: '', statText: '', curActs: [], curobjs: '', backimage: '', menuOff: false },
    stateStack: [],
    pcs_mood: 50,
    pcs_energy: 80,
    pcs_hydra: 50,
    pcs_sleep: 70,
    pcs_willpwr: 50,
    pcs_health: 80,
    pcs_stren: 5,
    pcs_agil: 5,
    pcs_vital: 5,
    pcs_intel: 5,
    pcs_react: 5,
    pcs_sprt: 5,
    pcs_chrsm: 5,
    pcs_prcptn: 5,
    pcs_magik: 1,
    pcs_faith: 1,
    pcs_inhib: 50,
    pcs_sweat: 0,
    pcs_stam: 50,
    pcs_vag: 0,
    pcs_ass: 0,
    pcs_throat: 0,
    pcs_mana: 50,
    pcs_horny: 0,
    money: 100,
    moodVars: { disp_base: 50, disp: 50, momentum: 0, inertia: 0, max: 100, min: 0, hold_minut: 0, leftover_mood: 0 },
    mood_trauma: 0,
    moodSE: {},
    stammax: 100,
    willpowermax: 100,
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
    pantyworntype: '',
    pantywornnumber: 0,
    clothingworntype: '',
    clothingwornnumber: 0,
    PCloPants: 0,
    PCloPanties: 0,
    PPanThinness: 0,
    PBraThinness: 0,
    PCloQuality: 0,
    PCloThinness: 0,
    PXCloTopCut: 0,
    PXCloBottomShortness: 0,
    PBraQuality: 0,
    PPanQuality: 0,
    PShoQuality: 0,
  } as unknown as GameState;
  return { ...base, ...overrides };
}

describe('SceneBuilder', () => {
  it('builds text and actions fluently', () => {
    const scene = new SceneBuilder()
      .text('Hello world')
      .background('images/test.jpg')
      .action({ label: 'Go', goto: ['dest', ''] });

    expect(scene.mainText).toBe('Hello world');
    expect(scene.backimage).toBe('images/test.jpg');
    expect(scene.curActs).toHaveLength(1);
    expect(scene.curActs[0].label).toBe('Go');
  });

  it('builds a SceneState', () => {
    const scene = new SceneBuilder().text('Test').action({ label: 'A' });
    const built = scene.build();

    expect(built.mainText).toBe('Test');
    expect(built.curActs).toHaveLength(1);
  });
});

describe('goto', () => {
  it('navigates to a registered location and calls enter', () => {
    const visited: string[] = [];
    registerLocation({
      name: 'test_dest',
      enter(s, scene) {
        visited.push(s.loc);
        scene.text('Arrived');
      },
    });

    const s = createTestState();
    goto(s, 'test_dest', 'sub');

    expect(s.loc).toBe('test_dest');
    expect(s.locArg).toBe('sub');
    expect(s.scene.mainText).toBe('Arrived');
    expect(visited).toEqual(['test_dest']);
  });

  it('sets locationType based on prefix', () => {
    registerLocation({ name: 'pav_test', enter: () => {} });
    const s = createTestState();
    goto(s, 'pav_test', '');
    expect(s.locationType).toBe('pav');
  });

  it('tracks prevLoc on change', () => {
    registerLocation({ name: 'test_a', enter: () => {} });
    registerLocation({ name: 'test_b', enter: () => {} });
    const s = createTestState({ loc: 'test_a' });
    goto(s, 'test_b', '');
    expect(s.prevLoc).toBe('test_a');
    expect(s.loc).toBe('test_b');
  });
});

describe('call / returnFromCall', () => {
  it('pushes state and returns correctly', () => {
    registerLocation({ name: 'test_caller', enter: () => {} });
    registerLocation({ name: 'test_callee', enter: () => {} });

    const s = createTestState({ loc: 'test_caller' });
    call(s, 'test_callee', 'arg1');

    expect(s.loc).toBe('test_callee');
    expect(s.stateStack).toHaveLength(1);
    expect(s.stateStack[0].loc).toBe('test_caller');

    returnFromCall(s);
    expect(s.loc).toBe('test_caller');
    expect(s.stateStack).toHaveLength(0);
  });

  it('supports nested calls (LIFO)', () => {
    registerLocation({ name: 'test_l1', enter: () => {} });
    registerLocation({ name: 'test_l2', enter: () => {} });
    registerLocation({ name: 'test_l3', enter: () => {} });

    const s = createTestState({ loc: 'test_l1' });
    call(s, 'test_l2', '');
    call(s, 'test_l3', '');

    expect(s.stateStack).toHaveLength(2);
    returnFromCall(s);
    expect(s.loc).toBe('test_l2');
    returnFromCall(s);
    expect(s.loc).toBe('test_l1');
  });
});

describe('invoke', () => {
  it('executes enter without changing loc', () => {
    let entered = false;
    registerLocation({
      name: 'test_sub',
      enter(s) {
        entered = true;
        s.money += 10;
      },
    });

    const s = createTestState({ loc: 'test_main', money: 100 });
    invoke(s, 'test_sub', '');

    expect(entered).toBe(true);
    expect(s.money).toBe(110);
    expect(s.loc).toBe('test_main');
    expect(s.locArg).toBe('');
  });
});

describe('processAction', () => {
  it('executes handler then navigates via goto', () => {
    registerLocation({ name: 'test_ticket', enter: () => {} });

    const s = createTestState({ money: 100 });
    const action: ActionDef = {
      label: 'Buy ticket',
      handler: (st) => { st.money -= 20; },
      goto: ['test_ticket', 'platform'],
    };

    processAction(s, action);

    expect(s.money).toBe(80);
    expect(s.loc).toBe('test_ticket');
    expect(s.locArg).toBe('platform');
  });

  it('executes handler then calls via call', () => {
    registerLocation({ name: 'test_shop', enter: () => {} });

    const s = createTestState({ money: 100, loc: 'test_home' });
    const action: ActionDef = {
      label: 'Visit shop',
      handler: (st) => { st.money -= 5; },
      call: ['test_shop', ''],
    };

    processAction(s, action);

    expect(s.money).toBe(95);
    expect(s.loc).toBe('test_shop');
    expect(s.stateStack).toHaveLength(1);
    expect(s.stateStack[0].loc).toBe('test_home');
  });

  it('invokes without changing location', () => {
    let invoked = false;
    registerLocation({
      name: 'test_calc',
      enter(s) { invoked = true; s.money += 50; },
    });

    const s = createTestState({ loc: 'test_home', money: 100 });
    const action: ActionDef = {
      label: 'Calculate',
      invoke: ['test_calc', ''],
    };

    processAction(s, action);

    expect(invoked).toBe(true);
    expect(s.money).toBe(150);
    expect(s.loc).toBe('test_home');
  });

  it('handler-only action does not navigate', () => {
    const s = createTestState({ loc: 'test_stay', money: 50 });
    const action: ActionDef = {
      label: 'Rest',
      handler: (st) => { st.pcs_energy += 10; },
    };

    processAction(s, action);

    expect(s.pcs_energy).toBe(90);
    expect(s.loc).toBe('test_stay');
  });
});

describe('save round-trip', () => {
  it('serializes and deserializes state correctly', () => {
    const s = createTestState({ money: 42, loc: 'test_somewhere', pcs_mood: 77 });
    const json = serializeSave(s);
    const loaded = deserializeSave(json);

    expect(loaded.money).toBe(42);
    expect(loaded.loc).toBe('test_somewhere');
    expect(loaded.pcs_mood).toBe(77);
    expect(loaded.stateStack).toBeUndefined();
    expect(loaded.scene).toBeUndefined();
  });

  it('excludes stateStack and scene from save', () => {
    const s = createTestState({
      stateStack: [{ loc: 'a', locArg: 'b' }],
      scene: { mainText: 'x', statText: '', curActs: [], curobjs: '', backimage: '', menuOff: false },
    });
    const json = serializeSave(s);
    const data = JSON.parse(json);

    expect(data.stateStack).toBeUndefined();
    expect(data.scene).toBeUndefined();
  });

  it('preserves schemaVersion', () => {
    const s = createTestState();
    const json = serializeSave(s);
    const data = JSON.parse(json);

    expect(data.schemaVersion).toBe(2);
  });
});

describe('stateStack', () => {
  it('pushState and popState are symmetric', () => {
    const s = createTestState({ loc: 'origin', locArg: 'start' });
    pushState(s);
    s.loc = 'elsewhere';
    s.locArg = 'changed';

    popState(s);
    expect(s.loc).toBe('origin');
    expect(s.locArg).toBe('start');
  });
});
