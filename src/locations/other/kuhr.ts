import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'kuhr', '');
  (s as any).location_type = 'private';
  (s as any).locclass = 'kitr';
  (s as any).elektro = ((s as any).elektro ?? 0) + (1);
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'kit_din', '');
  scene.text('<center><b>Kitchen</b></center>');
  if ((!((s as any).remkuhr ?? 0))) {
    scene.img('images/locations/city/residential/apartment/kuhr.jpg');
  } else {
    scene.img('images/locations/city/residential/apartment/kuhr2.jpg');
  }
  if ((Math.floor(Math.random() * 51) + 0) === 0  &&  ((s as any).santehnikDolg ?? 0) === 0  &&  ((s as any).remkuhr ?? 0) === 0  &&  ((s as any).daystart ?? 0) > ((s as any).kransloman ?? 0)[1] + 90) {
    (s as any).kransloman = 1;
    ((s as any).kransloman = (s as any).kransloman ?? {})[1] = ((s as any).daystart ?? 0);
  }
  if (((s as any).kransloman ?? 0) === 1) {
    qspGoto(s, 'kuhr', 'leak');
  }
  if (((s as any).mc_inventory ?? 0)?.['dish_plates'] > 0) {
    // TODO-QSP: dynamic text: <b><<mc_inventory['dish_plates']>></b> clean plates are stored in the cupboard.
    scene.text(`<b>${((s as any).mc_inventory ?? 0)?.['dish_plates'] ?? ''}</b> clean plates are stored in the cupboard.`);
  } else {
    scene.text('<center><b>You have no clean dishes left.</b></center>');
  }
  if (((s as any).dirttarelka ?? 0) > 0) {
    // TODO-QSP: dynamic text: <b><<dirttarelka>></b> dirty dishes are lying in the sink. <a href="exec:gs 'kit...
    scene.text(`<b>${((s as any).dirttarelka || '')}</b> dirty dishes are lying in the sink. <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027kit_din\\u0027, \\u0027dirtarm\\u0027); return false;">Wash the dishes</a>.`);
  }
  if (((s as any).mc_inventory ?? 0)?.['dish_soap'] > 0) {
    // TODO-QSP: dynamic text: There is dishwashing liquid next to the sink, enough for <b><<mc_inventory['dish...
    scene.text(`There is dishwashing liquid next to the sink, enough for <b>${((s as any).mc_inventory ?? 0)?.['dish_soap'] ?? ''}</b> uses.`);
  } else {
    scene.text('<center><b>You need to buy dishwashing liquid before you can wash the dishes.</b></center>');
  }
  if (((s as any).mc_inventory ?? 0)?.['food_basic'] > 0) {
    if (((s as any).mc_inventory ?? 0)?.['dish_plates'] === 0  ||  ((s as any).edahot ?? 0) > 0) {
      (s as any).edagot = '';
    }
    if (((s as any).mc_inventory ?? 0)?.['dish_plates'] > 0  &&  (!((s as any).edahot ?? 0))) {
      (s as any).edagot = '<a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027kit_din\\u0027, \\u0027edagotd\\u0027); return false;">Cook a meal</a>';
    }
    // TODO-QSP: dynamic text: There's enough food for <b><<mc_inventory['food_basic']>></b> ' + iif(mc_invento...
    scene.text(`There's enough food for <b>${((s as any).mc_inventory ?? 0)?.['food_basic'] ?? ''}</b> ' + iif(mc_inventory['food_basic'] = 1, 'serving', 'servings') + '. ${((s as any).edagot || '')}`);
  } else {
    if (((s as any).mc_inventory ?? 0)?.['food_diet'] === 0  &&  ((s as any).mc_inventory ?? 0)?.['food_basic'] === 0) {
      scene.text('<center><b>The fridge is empty. You have nothing to eat.</b></center>');
    }
  }
  qspCall(s, 'kit_din', 'edahota');
  qspCall(s, 'lover_living', 'kitchen');
  qspCall(s, 'core_library', 'kitchen', 'full');
  if (((s as any).musor ?? 0) > 3) {
    scene.actions([
      { label: 'Take out the trash', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      scene.text('You can\'t go out to the trash cans naked!');
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 3;
      qspGoto(s, 'city_trashplace', '');
    }
  } },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['dildo_suction'] > 0  &&  ((s as any).pcs_horny ?? 0) >= 50) {
    scene.actions([
      { label: 'Masturbate with a dildo', goto: ['kuhr', 'dildo'] },
    ]);
  }
  if (((s as any).pcs_horny ?? 0) >= 50) {
    scene.actions([
      { label: 'Masturbate', goto: ['selfplay', 'start'] },
    ]);
  }
  if (((s as any).fullmorrout ?? 0) === 1) {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    scene.actions([
      { label: '<font color = maroon><b>Leave the apartment and go outside</b></font>', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspGoto(s, 'city_residential', '');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the corridor', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspGoto(s, 'korr', '');
  } },
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspGoto(s, 'korr', '');
  } },
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
    qspGoto(s, 'husbsex', 'husb_mastr_vtor');
  } else {
    if (((s as any).wifID ?? 0) !== ''  &&  ((s as any).spouseVars ?? 0)?.['drink'] !== 10  &&  (((s as any).week ?? 0) >= 6  ||  ((s as any).hour ?? 0) >= 17)) {
      qspGoto(s, 'husbsex', 'husb_mastr_vtor');
    } else {
      qspCall(s, 'npcStat', 'D1');
      scene.img('images/shared/sex/mast/mastr.mp4');
      scene.text('Unable to control yourself anymore, you immediately reach for your dildo so you can finally take care of your lustful desires. You waste no time and attach the suction base of the dildo onto the floor before slowly lowering yourself.');
      scene.text('Shivers run down your spine as you feel the thick head spreading your pussy lips and soon the whole length starts to slide deep inside your hole. A throaty moan overwhelms the room when it finally bottoms out inside you, sending you to the heavens and back.');
      scene.text('After shifting your legs and getting more comfortable, you start to rock your hips and bounce on it, moaning louder and louder as you keep increasing the power and pace of your thrusts. You\'re soon hammering your ass against the cold floor time and it takes you just a few minutes to reach orgasm, your toes curling tightly as a wonderful feeling run through your entire body.');
      scene.text('You\'re soon twitching on the dildo and juices drip down its length, soaking the floor beneath you. You take a few deep breaths and a smile grows along your face. That was just what you needed!');
    }
  }
  (s as any).orgasm_or = 'custom';
  qspCall(s, 'arousal', 'vaginal_dildo', 10, 'masturbate', 'no_orgasm_msg');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Breathe', goto: ['kuhr', ''] },
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

export const kuhr: LocationDef = {
  name: 'kuhr',
  title: 'Kitchen',
  region: 'other',
  locationType: 'private',
  locclass: 'kitr',
  enter: enter,
};
