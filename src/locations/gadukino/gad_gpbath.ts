import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gad_gpbath', 'start');
  (s as any).location_type = 'bathroom';
  qspCall(s, 'miroslava_schedule', '');
  (s as any).frost = 0;
  scene.text('<center><h4>Bath</h4></center>');
  scene.img('images/locations/gadukino/gp_dacha/bana.jpg');
  scene.text('A small room with a low, smoky ceiling, a small stove, a couple of stainless steel water tanks, and a blackened wooden shelf.');
  scene.text('Grandma\'s enema bulb is hidden behind some stuff on the shelf.');
  // TODO-QSP: dynamic text: You can check your weight on your grandma''s old mechanical <a href="exec:msg ''...
  scene.text(`You can check your weight on your grandma's old mechanical <a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: msg /u0027<center>Your weight is ${(((s as any).pcs_weight ?? 0)?.[0] ?? '')}.${(((s as any).pcs_weight ?? 0)?.[1] ?? '')} kg<br>Your body mass index (BMI) is ${(((s as any).pcs_bmi ?? 0)?.[0] ?? '')}.${(((s as any).pcs_bmi ?? 0)?.[1] ?? '')}.<br>${qspUntranslated(s, "bodyVars[\\u0027bmi_desc\\u0027]", { location: "gad_gpbath" })}</center>/u0027 */ return s; }); return false;">scales</a>.`);
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetLeaveActs(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (qspFunc(s, 'miroslava_schedule', 'is_here')) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWith_Mira(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAlone(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSetLeaveActs(s: GameState, scene: SceneBuilder): void {
  if (((s as any).clothingworntype ?? 0) !== 'nude') {
    scene.actions([
      { label: 'Go outside', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gad_gpyard', 'start'] },
    ]);
  } else {
    scene.actions([
      { label: 'Get dressed and leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'outfit', 'restore', 'swim');
    qspCall(st, 'stat', '');
    qspGoto(st, 'gad_gpyard', 'start');
  } },
      { label: 'Go outside naked', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 3) + 0));
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['nudity_trouble'] = ((st as any).grandmaQW['nudity_trouble'] ?? 0) + ((Math.floor(Math.random() * 3) + 0));
    scene.img('images/locations/gadukino/grandparents/gaddvor_nude.jpg');
    scene.text('It\'s undoubtedly risky leaving the bathhouse like this. But, while it\'s unlikely anyone saw you go outside naked, there\'s a thrill in potentially getting caught.');
    qspCall(st, 'arousal', 'flash', 10, 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['gad_gpyard', 'start'] },
    ]);
  } },
      { label: 'Go outside in your underwear', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 2) + 0));
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['nudity_trouble'] = ((st as any).grandmaQW['nudity_trouble'] ?? 0) + ((Math.floor(Math.random() * 2) + 0));
    scene.img('images/locations/gadukino/grandparents/gaddvor_nude.jpg');
    scene.text('It\'s undoubtedly risky leaving the bathhouse like this. But, while it\'s unlikely anyone saw you go outside in your underwear, there\'s a thrill in potentially getting caught.');
    qspCall(st, 'arousal', 'flashlite', 10, 'exhibitionism');
    if ((((st as any).pantyworntype ?? 0) !== 'none'  ||  ((st as any).braworntype ?? 0) !== 'none')) {
      qspCall(st, 'panties', 'wear', (((st as any).lastwornpantytype ?? 0)?.['swim']), (((st as any).lastwornpantynumber ?? 0)?.['swim']));
      qspCall(st, 'bras', 'wear', (((st as any).lastwornbratype ?? 0)?.['swim']), (((st as any).lastwornbranumber ?? 0)?.['swim']));
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['gad_gpyard', 'start'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterAlone(s: GameState, scene: SceneBuilder): void {
  if (((s as any).week ?? 0) >= 6) {
    if (((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) <= 18) {
      // TODO-QSP: dynamic text: 'You put the wood into the stove to feed the fire. The banya will be ready to us...
      scene.text('You put the wood into the stove to feed the fire. The banya will be ready to use around 19:00.');
    } else {
      if (((s as any).hour ?? 0) > 18  &&  ((s as any).hour ?? 0) < 22) {
        scene.text('The banya is now ready.');
        if (((s as any).banaday ?? 0) !== ((s as any).daystart ?? 0)) {
          scene.actions([
            { label: 'Relax in the banya (2:00)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 120;
    (st as any).pcs_sweat = (Math.floor(Math.random() * 6) + 0);
    (st as any).noshampoo = 1;
    qspCall(st, 'din_van', 'showerdin');
    (st as any).pcs_hairbsh = 0;
    (st as any).pcs_makeup = 1;
    (st as any).banaday = ((st as any).daystart ?? 0);
    if (((st as any).frost ?? 0) > 0) {
      (st as any).frost = 0;
    }
    if (((st as any).sauna_daystart ?? 0) !== ((st as any).daystart ?? 0)) {
      (st as any).sauna_daystart = ((st as any).daystart ?? 0);
      (st as any).pcs_skin = ((st as any).pcs_skin ?? 0) + ((Math.floor(Math.random() * 3) + 2));
      (st as any).pcs_willpwr = ((st as any).pcs_willpwr ?? 0) + (3);
    }
    scene.img('images/locations/gadukino/gp_dacha/par.jpg');
    if (((st as any).clothingworntype ?? 0) !== 'nude') {
      scene.text('You strip out of your clothes.');
      ((st as any).lastwornclothingtype = (st as any).lastwornclothingtype ?? {})['swim'] = ((st as any).clothingworntype ?? 0);
      ((st as any).lastwornclothingnumber = (st as any).lastwornclothingnumber ?? {})['swim'] = ((st as any).clothingwornnumber ?? 0);
      qspCall(st, 'clothing', 'strip');
    }
    if (((st as any).pantyworntype ?? 0) !== 'none') {
      scene.text('You strip out of your underwear.');
      ((st as any).lastwornpantytype = (st as any).lastwornpantytype ?? {})['swim'] = ((st as any).pantyworntype ?? 0);
      ((st as any).lastwornpantynumber = (st as any).lastwornpantynumber ?? {})['swim'] = ((st as any).pantywornnumber ?? 0);
      ((st as any).lastwornbratype = (st as any).lastwornbratype ?? {})['swim'] = ((st as any).braworntype ?? 0);
      ((st as any).lastwornbranumber = (st as any).lastwornbranumber ?? {})['swim'] = ((st as any).brawornnumber ?? 0);
      qspCall(st, 'underwear', 'remove');
    }
    qspCall(st, 'stat', '');
    scene.text('You sit down and relax. Then, after a proper banya session, you pick up a bucket filled with cold water, pour it over yourself, and head over to the shower. You feel like a completely new person.');
    if (((st as any).deodorant_on ?? 0) === 1) {
      qspCall(st, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the water.');
    }
    scene.actions([
      { label: 'Finish', goto: ['gad_gpbath', 'start'] },
    ]);
  } },
          ]);
        }
      } else {
        // TODO-QSP: dynamic text: 'The banya is not in use at this time. However, it is available between '+func('...
        scene.text('The banya is not in use at this time. However, it is available between 19:00 and 22:00 during the weekend.');
      }
    }
  } else {
    if (((s as any).week ?? 0) < 6) {
      // TODO-QSP: dynamic text: 'The banya is not used during the week. However, it is usually ready to use from...
      scene.text('The banya is not used during the week. However, it is usually ready to use from 19:00 during the weekend.');
    }
  }
  if (((s as any).mc_inventory ?? 0)?.['shampoo'] > 0  ||  (((s as any).locat ?? 0)?.['Fam_inGad'] === 1  &&  qspFunc(s, 'homes_properties', 'has_access', 'parents_home'))) {
    scene.actions([
      { label: 'Wash your body (0:25)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 25;
    if (((st as any).locat ?? 0)?.['Fam_inGad'] === 1  &&  qspFunc(s, 'homes_properties', 'has_access', 'parents_home')) {
      (st as any).noshampoo = 1;
    }
    qspCall(st, 'din_van', 'showerdin');
    if (((st as any).frost ?? 0) > 0) {
      (st as any).frost = 0;
    }
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/village/mit.jpg');
    if (((st as any).clothingworntype ?? 0) !== 'nude') {
      scene.text('You strip out of your clothes.');
      ((st as any).lastwornclothingtype = (st as any).lastwornclothingtype ?? {})['swim'] = ((st as any).clothingworntype ?? 0);
      ((st as any).lastwornclothingnumber = (st as any).lastwornclothingnumber ?? {})['swim'] = ((st as any).clothingwornnumber ?? 0);
      qspCall(st, 'clothing', 'strip');
    }
    if (((st as any).pantyworntype ?? 0) !== 'none'  &&  ((st as any).braworntype ?? 0) !== 'none') {
      scene.text('You strip out of your underwear.');
      ((st as any).lastwornpantytype = (st as any).lastwornpantytype ?? {})['swim'] = ((st as any).pantyworntype ?? 0);
      ((st as any).lastwornpantynumber = (st as any).lastwornpantynumber ?? {})['swim'] = ((st as any).pantywornnumber ?? 0);
      ((st as any).lastwornbratype = (st as any).lastwornbratype ?? {})['swim'] = ((st as any).braworntype ?? 0);
      ((st as any).lastwornbranumber = (st as any).lastwornbranumber ?? {})['swim'] = ((st as any).brawornnumber ?? 0);
      qspCall(st, 'underwear', 'remove');
    }
    qspCall(st, 'stat', '');
    scene.text('You lather up your washcloth and start scrubbing your body. Next, you rinse off the soap and begin to lather your hair with shampoo. After rinsing off the shampoo, you feel completely clean.');
    if (((st as any).deodorant_on ?? 0) === 1) {
      qspCall(st, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the water.');
    }
    scene.actions([
      { label: 'Finish', goto: ['gad_gpbath', 'start'] },
    ]);
  } },
    ]);
  } else {
    scene.text('You\'ve run out of shampoo and will have to buy some more before you can wash.');
  }
  qspCall(s, 'din_van', 'private');
  qspCall(s, 'home_events', 'bathroom');
  // TODO-QSP: end
  scene.build();
}

function enterWith_Mira(s: GameState, scene: SceneBuilder): void {
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    scene.actions([
      { label: 'Bathe with Mira', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'backup', 'swim');
    ((st as any).lastwornclothingtype = (st as any).lastwornclothingtype ?? {})['swim'] = ((st as any).lastwornclothingtype ?? 0);
    ((st as any).lastwornclothingnumber = (st as any).lastwornclothingnumber ?? {})['swim'] = ((st as any).lastwornclothingnumber ?? 0);
    qspCall(st, 'underwear', 'remove');
    qspCall(st, 'stat', '');
    scene.img('images/characters/gadukino/mira/miraban.jpg');
    scene.text('You watch Mira removing her panties from the corner of your eye.');
    qspCall(st, 'arousal', 'erotic_nudity', 5);
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWith_MiraCore(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Undress and bathe with Mira', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'backup', 'swim');
    qspCall(st, 'clothing', 'strip');
    qspCall(st, 'underwear', 'remove');
    qspCall(st, 'stat', '');
    scene.img('images/characters/gadukino/mira/miraban.jpg');
    scene.text('While you undress, you notice Mira removing her panties from the corner of your eye.');
    qspCall(st, 'arousal', 'erotic_nudity', 5);
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWith_MiraCore(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterWith_MiraCore(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Watch Mira clean herself', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/gadukino/mira/miraban1.jpg');
    scene.text('You feel the hot steam penetrate into your pores while you blissfully watch Mira lather up. She sometimes throws at you short glances and smiles hesitantly in response…');
    qspCall(st, 'arousal', 'erotic_nudity', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Steam', handler: (st: GameState) => {
    (st as any).noshampoo = 1;
    qspCall(st, 'din_van', 'showerdin');
    (st as any).pcs_hairbsh = 0;
    (st as any).pcs_makeup = 1;
    (st as any).banaday = ((st as any).daystart ?? 0);
    if (((st as any).frost ?? 0) > 0) {
      (st as any).frost = 0;
    }
    (st as any).pcs_skin = ((st as any).pcs_skin ?? 0) + (5);
    qspCall(st, 'stat', '');
    scene.img('images/characters/gadukino/mira/miraban2.jpg');
    scene.text('Mira finally finishes lathering herself; you take the loofah and lather yourself from head to toe. You enjoy yourselves in the warm bath, relaxing in each other\'s company, occasionally exchanging meaningless anecdotes…');
    if (((st as any).deodorant_on ?? 0) === 1) {
      qspCall(st, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the water.');
    }
    qspCall(st, 'arousal', 'erotic_nudity', 25);
    qspCall(st, 'arousal', 'end');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetLeaveActs(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
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
    case 'set_leave_acts':
      enterSetLeaveActs(s, scene);
      break;
    case 'alone':
      enterAlone(s, scene);
      break;
    case 'with_Mira':
      enterWith_Mira(s, scene);
      break;
    case 'with_Mira_core':
      enterWith_MiraCore(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gad_gpbath: LocationDef = {
  name: 'gad_gpbath',
  title: 'You\'ve run out of shampoo and will have to buy some more bef',
  region: 'gadukino',
  locationType: 'bathroom',
  enter: enter,
};
