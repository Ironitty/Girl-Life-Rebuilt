import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'Palatka', 'start');
  (s as any).sexloc = 'Palatka';
  (s as any).location_type = 'private';
  qspCall(s, 'stat', '');
  scene.text('<center><b>tent</b></center>');
  scene.img('images/locations/city/shared/military/palatka.jpg');
  (s as any).palrand = (Math.floor(Math.random() * 11) + 0);
  if ((!((s as any).palrand ?? 0))) {
    qspGoto(s, 'Palatka', 'pal0');
  }
  if (((s as any).palrand ?? 0) === 1) {
    qspGoto(s, 'Palatka', 'pal1');
  }
  scene.text('To your surprise, the tent is a quite spacious. It has a bed, a <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027start\u0027); return false;">mirror</a>, and even has an improvised <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027vann\u0027, \u0027start\u0027); return false;">shower</a>.');
  scene.actions([
    { label: 'Leave', goto: ['Military', 'start'] },
    { label: 'Sleep', handler: (st: GameState) => {
    qspCall(st, 'sleep_simple', 'forced', 480);
    qspGoto(st, 'palatka', 'start');
  } },
  ]);
  scene.build();
}

function enterPal0(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'event';
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/shared/military/sex/pal0.jpg');
  scene.text('Once you begin to change clothes, you notice that there are two soldiers in the tent. They see you half-naked, walking up to you with their erect cocks. You long for their cocks, wondering if you should get them off or ignore them and relax after a hard day instead.');
  qspCall(s, 'willpower', 'sex', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Send', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Send', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspGoto(st, 'palatka', 'start');
  } },
    ]);
  }
  scene.actions([
    { label: 'Post', handler: (st: GameState) => {
    qspCall(st, 'npcgeneratec', '0', 'Soldier', (Math.floor(Math.random() * 17) + 18));
    qspCall(st, 'boyStat', '$npclastgenerated');
    ((st as any).boy = (st as any).boy ?? {})[0] = ((st as any).boy ?? 0);
    qspCall(st, 'npcgeneratec', '0', 'Soldier', (Math.floor(Math.random() * 17) + 18));
    ((st as any).boy = (st as any).boy ?? {})[1] = ((st as any).npclastgenerated ?? 0);
    (st as any).guy = ((st as any).guy ?? 0) + (2);
    (st as any).picrand = 22;
    qspGoto(st, 'sexdvoe', 'var');
  } },
  ]);
  scene.build();
}

function enterPal1(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'event';
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/shared/military/pal1.jpg');
  scene.text('Entering the tent, you stumble, you reflexively close your eyes, as you prepare to hit the floor face first. Much to your surprise you do not land on the floor. Instead you feel powerful, strong hands catching you. Opening your eyes in surprise, you look up and see that a well-built black soldier has caught you in his arms.');
  qspCall(s, 'willpower', 'sex', 'resist', 'easy');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Say thank you', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Say thank you ', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspGoto(st, 'palatka', 'start');
  } },
    ]);
  }
  scene.actions([
    { label: 'Repay in full', handler: (st: GameState) => {
    (st as any).sexpartkno = 1;
    qspCall(st, 'npcgeneratec', '0', 'Black Soldier', (Math.floor(Math.random() * 18) + 18));
    qspCall(st, 'boyStat', '$npclastgenerated');
    (st as any).guy = ((st as any).guy ?? 0) + (1);
    (st as any).picrand = 43;
    qspGoto(st, 'sex', 'minet');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'pal0':
      enterPal0(s, scene);
      break;
    case 'pal1':
      enterPal1(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const Palatka: LocationDef = {
  name: 'Palatka',
  title: 'tent',
  region: 'other',
  locationType: 'event',
  enter: enter,
};
