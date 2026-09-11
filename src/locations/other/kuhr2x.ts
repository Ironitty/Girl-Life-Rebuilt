import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'kuhr2x', '');
  (s as any).elektro = ((s as any).elektro ?? 0) + (1);
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'kit_din', '');
  scene.text('<center><b>Kitchen</b></center>');
  scene.img('images/locations/pushkin/apartment/kuhr2x.jpg');
  if ((Math.floor(Math.random() * 51) + 0) === 0  &&  ((s as any).santehnikDolg ?? 0) === 0  &&  ((s as any).daystart ?? 0) > ((s as any).kransloman ?? 0)[1] + 90) {
    (s as any).kransloman = 1;
    ((s as any).kransloman ?? {})[1] = ((s as any).daystart ?? 0);
  }
  if (((s as any).kransloman ?? 0) === 1) {
    // TODO-QSP: xgt 'kuhr2x', 'leak'
  }
  if (((s as any).mc_inventory ?? 0)?.['dish_plates'] > 0) {
    // TODO-QSP: dynamic text: <b><<mc_inventory['dish_plates']>></b> clean plates are stored in the cupboard.
    scene.text(`<b>${((s as any).mc_inventory ?? 0)?.['dish_plates']}</b> clean plates are stored in the cupboard.`);
  } else {
    scene.text('<b><font color = red>You have no clean dishes left.</font></b>');
  }
  if (((s as any).dirttarelka ?? 0) > 0) {
    // TODO-QSP: dynamic text: <b><<dirttarelka>></b> dirty dishes are lying in the sink. <a href="exec:gs 'kit...
    scene.text(`<b>${((s as any).dirttarelka ?? 0)}</b> dirty dishes are lying in the sink. <a href="exec:gs 'kit_din', 'dirtarm'">Wash the dishes</a>.`);
  }
  if (((s as any).mc_inventory ?? 0)?.['dish_soap'] > 0) {
    // TODO-QSP: dynamic text: There is dishwashing liquid next to the sink, enough for <b><<mc_inventory['dish...
    scene.text(`There is dishwashing liquid next to the sink, enough for <b>${((s as any).mc_inventory ?? 0)?.['dish_soap']}</b> uses.`);
  } else {
    scene.text('<center><b>You need to buy dishwashing liquid before you can wash the dishes.</b></center>');
  }
  if (((s as any).mc_inventory ?? 0)?.['food_basic'] > 0) {
    if (((s as any).mc_inventory ?? 0)?.['dish_plates'] === 0  ||  ((s as any).edahot ?? 0) > 0) {
    }
    if (((s as any).mc_inventory ?? 0)?.['dish_plates'] > 0  &&  (!((s as any).edahot ?? 0))) {
    }
    // TODO-QSP: dynamic text: There's enough food for <b><<mc_inventory['food_basic']>></b> ' + iif(mc_invento...
    scene.text(`There's enough food for <b>${((s as any).mc_inventory ?? 0)?.['food_basic']}</b> ' + iif(mc_inventory['food_basic'] = 1, 'serving', 'servings') + '. ${((s as any).edagot ?? 0)}`);
  } else {
    if (((s as any).mc_inventory ?? 0)?.['food_diet'] === 0  &&  ((s as any).mc_inventory ?? 0)?.['food_basic'] === 0) {
      scene.text('<center><b>The fridge is empty. You have nothing to eat.</b></center>');
    }
  }
  qspCall(s, 'kit_din', 'edahota');
  qspCall(s, 'lover_living', 'kitchen');
  qspCall(s, 'core_library', 'kitchen', 'full');
  if (((s as any).mc_inventory ?? 0)?.['dildo_suction'] > 0  &&  ((s as any).pcs_horny ?? 0) >= 50) {
    scene.actions([
      { label: 'Masturbate with a dildo', goto: ['kuhr2x', 'dildo'] },
    ]);
  }
  scene.actions([
    { label: 'Return to the corridor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['korr2x', ''] },
  ]);
  scene.build();
}

function enterLeak(s: GameState, scene: SceneBuilder): void {
  scene.text('You notice a leak in your sink. It\'s broken and you\'ll need to call a plumber.');
  if ((!((s as any).Grisha ?? 0))) {
    scene.actions([
      { label: 'Call the plumber', goto: ['kit_din', 'santehnik'] },
    ]);
  } else {
    scene.actions([
      { label: 'Call Grisha', goto: ['kit_din', 'santehnikgr'] },
    ]);
  }
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['korr2x', ''] },
  ]);
  scene.build();
}

function enterDildo(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_inhib ?? 0) < 30) {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
  }
  qspCall(s, 'mood', 'raise', 'small');
  qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
  if (((s as any).husID ?? 0) !== ''  &&  ((s as any).spouseVars ?? 0)?.['drink'] !== 10  &&  (((s as any).week ?? 0) >= 6  ||  ((s as any).hour ?? 0) >= 17)) {
    scene.actions([{ label: 'Continue', goto: ['husbsex', 'husb_mastr_vtor'] }]);
  } else {
    if (((s as any).wifID ?? 0) !== ''  &&  ((s as any).spouseVars ?? 0)?.['drink'] !== 10  &&  (((s as any).week ?? 0) >= 6  ||  ((s as any).hour ?? 0) >= 17)) {
      scene.actions([{ label: 'Continue', goto: ['husbsex', 'husb_mastr_vtor'] }]);
    } else {
      qspCall(s, 'npcStat', 'D1');
      scene.img('images/shared/sex/mast/mastr.mp4');
      scene.text('Unable to control yourself, you immediately reach for your dildo so you can take care of your lustful desires. You waste no time in attaching the suction base of the dildo to the floor before lowering yourself slowly onto it.');
      scene.text('Shivers run down your spine as you feel the thick head spreading your lips and soon the whole length begins to slide deep inside your hole. A throaty moan overwhelms the room when the dildo bottoms out inside you.');
      scene.text('After shifting your legs and getting more comfortable, you start to rock your hips and bounce on it, moaning louder and louder as you keep increasing the power and pace of your thrusts. Your ass is hammering against the floor with each thrust and it takes you just a few minutes to reach orgasm, your toes curling tightly as your entire body is overwhelmed in pleasure.');
      scene.text('Your juices drip down the length of the dildo, pooling on the floor beneath you. You take a few deep breaths and a satisfied smile grows on your face. That was just what you needed!');
    }
  }
  qspCall(s, 'arousal', 'vaginal_dildo', 10, 'masturbate', 'no_orgasm_msg');
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Breathe', goto: ['kuhr2x', ''] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'leak':
      enterLeak(s, scene);
      break;
    case 'dildo':
      enterDildo(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const kuhr2x: LocationDef = {
  name: 'kuhr2x',
  title: 'Kitchen',
  region: 'other',
  locationType: 'private',
  locclass: 'kitr',
  enter: enter,
};
