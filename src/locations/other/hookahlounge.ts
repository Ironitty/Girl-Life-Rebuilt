import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'hookahlounge';
  (s as any).loc_arg = 'start';
  (s as any).menu_loc = 'hookahlounge';
  (s as any).menu_arg = 'start';
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Hookah Lounge</b></center>');
  scene.img('images/locations/city/redlight/hookahlounge/HookahLounge.jpg');
  scene.text('You enter the lounge');
  if (((s as any).smoketab ?? 0) === 1) {
    scene.actions([
      { label: 'Sit Down', goto: ['hookahlounge', 'Smoke_Hookah'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the Lounge', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_redlight', 'start'] },
    { label: 'Go to counter', goto: ['hookahlounge', 'Hookah_Aliyyah'] },
  ]);
  scene.build();
}

function enterHookah_Aliyyah(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Untitled Hookah Lounge</b></center>');
  scene.img('images/characters/city/aliyyah/Hookah_Aliyyah.jpg');
  scene.text('At the counter, you see a young Muslim woman. She appears quite timid. Nonetheless, she greets you with a smile as you walk up. She squeaks "What do you need, ma\'am?"');
  scene.text('I\'d like to buy a seat at a hookah, please.');
  // TODO-QSP: dynamic text: 'Okay, that will be ' + $func('money', 'string_price', 100) + ' please.'
  scene.text('Okay, that will be 100₽ please.');
  if ((!((s as any).smoketab ?? 0))) {
    scene.actions([
      { label: 'Pay for an hour and leave the counter', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 100, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      // TODO-QSP: dynamic text: You glance at her name badge, before looking back at her. Smiling, you hand over...
      scene.text(`You glance at her name badge, before looking back at her. Smiling, you hand over the required amount and say "Here you go, ${(((st as any).npc_firstname ?? 0)?.['A262'] ?? '')}!"`);
      qspCall(st, 'money', 'pay', 100, 'cash');
      (st as any).smoketab = 1;
      qspGoto(st, 'hookahlounge', 'start');
    }
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Leave the counter', goto: ['hookahlounge', 'start'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSmoke_Hookah(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/redlight/hookahlounge/HookahSit.jpg');
  scene.text('You sit down at a booth');
  // TODO-QSP: end
  scene.actions([
    { label: 'Smoke using hookah', handler: (st: GameState) => {
    (st as any).smoketab = 0;
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    qspCall(st, 'drugs', 'smoke', 1);
    scene.img('images/locations/city/redlight/hookahlounge/HookahSmoke.jpg');
    scene.text('You smoke using the hookah');
    scene.actions([
      { label: 'Stop using Hookah', goto: ['hookahlounge', 'start'] },
    ]);
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
    case 'Hookah_Aliyyah':
      enterHookah_Aliyyah(s, scene);
      break;
    case 'Smoke_Hookah':
      enterSmoke_Hookah(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const hookahlounge: LocationDef = {
  name: 'hookahlounge',
  title: 'Hookah Lounge',
  region: 'other',
  locationType: 'public_indoors',
  enter: enter,
};
