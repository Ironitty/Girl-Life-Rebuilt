import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gad_gpbath', 'start');
  qspCall(s, 'miroslava_schedule', '');
  (s as any).frost = 0;
  scene.text('<center><h4>Bath</h4></center>');
  scene.img('images/locations/gadukino/gp_dacha/bana.jpg');
  scene.text('A small room with a low, smoky ceiling, a small stove, a couple of stainless steel water tanks, and a blackened wooden shelf.');
  scene.text('Grandma\'s enema bulb is hidden behind some stuff on the shelf.');
  // TODO-QSP: dynamic text: You can check your weight on your grandma's old mechanical <a href="exec:msg '<c...
  scene.text(`You can check your weight on your grandma's old mechanical <a href="exec:msg '<center>Your weight is ${qspUntranslated(s, "pcs_weight[0]", { location: "gad_gpbath" })}.${qspUntranslated(s, "pcs_weight[1]", { location: "gad_gpbath" })} kg<br>Your body mass index (BMI) is ${qspUntranslated(s, "pcs_bmi[0]", { location: "gad_gpbath" })}.${qspUntranslated(s, "pcs_bmi[1]", { location: "gad_gpbath" })}.<br>${((s as any).bodyVars ?? 0)?.['bmi_desc']}</center>'">scales</a>.`);
  qspCall(s, 'stat', '');
  qspCall(s, 'gad_gpbath', 'set_leave_acts');
  if (qspFunc(s, 'miroslava_schedule', 'is_here')) {
    qspCall(s, 'gad_gpbath', 'with_Mira');
  } else {
    qspCall(s, 'gad_gpbath', 'alone');
  }
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
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'outfit', 'restore', 'swim');
    qspCall(s, 'stat', '');
  }, goto: ['gad_gpyard', 'start'] },
      { label: 'Go outside naked', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 0);
    (s as any).grandmaQW['nudity_trouble'] = ((s as any).grandmaQW['nudity_trouble'] ?? 0) + (Math.floor(Math.random() * 3) + 0);
    scene.img('images/locations/gadukino/grandparents/gaddvor_nude.jpg');
    scene.text('It\'s undoubtedly risky leaving the bathhouse like this. But, while it\'s unlikely anyone saw you go outside naked, there\'s a thrill in potentially getting caught.');
    qspCall(s, 'arousal', 'flash', 10, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['gad_gpyard', 'start'] },
    ]);
  } },
      { label: 'Go outside in your underwear', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 0);
    (s as any).grandmaQW['nudity_trouble'] = ((s as any).grandmaQW['nudity_trouble'] ?? 0) + (Math.floor(Math.random() * 2) + 0);
    scene.img('images/locations/gadukino/grandparents/gaddvor_nude.jpg');
    scene.text('It\'s undoubtedly risky leaving the bathhouse like this. But, while it\'s unlikely anyone saw you go outside in your underwear, there\'s a thrill in potentially getting caught.');
    qspCall(s, 'arousal', 'flashlite', 10, 'exhibitionism');
    if ((((s as any).pantyworntype ?? 0) !== 'none'  ||  ((s as any).braworntype ?? 0) !== 'none')) {
      // TODO-QSP: gs 'panties', 'wear', $lastwornpantytype['swim'], lastwornpantynumber['swim']
      // TODO-QSP: gs 'bras', 'wear', $lastwornbratype['swim'], lastwornbranumber['swim']
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['gad_gpyard', 'start'] },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterAlone(s: GameState, scene: SceneBuilder): void {
  if (((s as any).week ?? 0) >= 6) {
    if (((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) <= 18) {
      // TODO-QSP: dynamic text: You put the wood into the stove to feed the fire. The banya will be ready to use...
      scene.text('You put the wood into the stove to feed the fire. The banya will be ready to use around \'+func(\'time\', \'get_time_string\', 19, 0)+\'.');
    } else {
      if (((s as any).hour ?? 0) > 18  &&  ((s as any).hour ?? 0) < 22) {
        scene.text('The banya is now ready.');
        if (((s as any).banaday ?? 0) !== ((s as any).daystart ?? 0)) {
          scene.actions([
            { label: 'Relax in the banya (2:00)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 120;
    (s as any).pcs_sweat = Math.floor(Math.random() * 6) + 0;
    (s as any).noshampoo = 1;
    qspCall(s, 'din_van', 'showerdin');
    (s as any).pcs_hairbsh = 0;
    (s as any).pcs_makeup = 1;
    (s as any).banaday = ((s as any).daystart ?? 0);
    if (((s as any).frost ?? 0) > 0) {
      (s as any).frost = 0;
    }
    if (((s as any).sauna_daystart ?? 0) !== ((s as any).daystart ?? 0)) {
      (s as any).sauna_daystart = ((s as any).daystart ?? 0);
      (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + (Math.floor(Math.random() * 3) + 2);
      (s as any).pcs_willpwr = ((s as any).pcs_willpwr ?? 0) + (3);
    }
    scene.img('images/locations/gadukino/gp_dacha/par.jpg');
    if (((s as any).clothingworntype ?? 0) !== 'nude') {
      scene.text('You strip out of your clothes.');
      (s as any).lastwornclothingtype['swim'] = ((s as any).clothingworntype ?? 0);
      (s as any).lastwornclothingnumber['swim'] = ((s as any).clothingwornnumber ?? 0);
      qspCall(s, 'clothing', 'strip');
    }
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.text('You strip out of your underwear.');
      (s as any).lastwornpantytype['swim'] = ((s as any).pantyworntype ?? 0);
      (s as any).lastwornpantynumber['swim'] = ((s as any).pantywornnumber ?? 0);
      (s as any).lastwornbratype['swim'] = ((s as any).braworntype ?? 0);
      (s as any).lastwornbranumber['swim'] = ((s as any).brawornnumber ?? 0);
      qspCall(s, 'underwear', 'remove');
    }
    qspCall(s, 'stat', '');
    scene.text('You sit down and relax. Then, after a proper banya session, you pick up a bucket filled with cold water, pour it over yourself, and head over to the shower. You feel like a completely new person.');
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the water.');
    }
    scene.actions([
      { label: 'Finish', goto: ['gad_gpbath', 'start'] },
    ]);
  } },
          ]);
        }
      } else {
        // TODO-QSP: dynamic text: The banya is not in use at this time. However, it is available between '+func('t...
        scene.text('The banya is not in use at this time. However, it is available between \'+func(\'time\', \'get_time_string\', 19, 0)+\' and \'+func(\'time\', \'get_time_string\', 22, 0)+\' during the weekend.');
      }
    }
  } else {
    if (((s as any).week ?? 0) < 6) {
      // TODO-QSP: dynamic text: The banya is not used during the week. However, it is usually ready to use from ...
      scene.text('The banya is not used during the week. However, it is usually ready to use from \'+func(\'time\', \'get_time_string\', 19, 0)+\' during the weekend.');
    }
  }
  if (((s as any).mc_inventory ?? 0)?.['shampoo'] > 0  ||  (((s as any).locat ?? 0)?.['Fam_inGad'] === 1  &&  qspFunc(s, 'homes_properties', 'has_access', 'parents_home'))) {
    scene.actions([
      { label: 'Wash your body (0:25)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 25;
    if (((s as any).locat ?? 0)?.['Fam_inGad'] === 1  &&  qspFunc(s, 'homes_properties', 'has_access', 'parents_home')) {
      (s as any).noshampoo = 1;
    }
    qspCall(s, 'din_van', 'showerdin');
    if (((s as any).frost ?? 0) > 0) {
      (s as any).frost = 0;
    }
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/village/mit.jpg');
    if (((s as any).clothingworntype ?? 0) !== 'nude') {
      scene.text('You strip out of your clothes.');
      (s as any).lastwornclothingtype['swim'] = ((s as any).clothingworntype ?? 0);
      (s as any).lastwornclothingnumber['swim'] = ((s as any).clothingwornnumber ?? 0);
      qspCall(s, 'clothing', 'strip');
    }
    if (((s as any).pantyworntype ?? 0) !== 'none'  &&  ((s as any).braworntype ?? 0) !== 'none') {
      scene.text('You strip out of your underwear.');
      (s as any).lastwornpantytype['swim'] = ((s as any).pantyworntype ?? 0);
      (s as any).lastwornpantynumber['swim'] = ((s as any).pantywornnumber ?? 0);
      (s as any).lastwornbratype['swim'] = ((s as any).braworntype ?? 0);
      (s as any).lastwornbranumber['swim'] = ((s as any).brawornnumber ?? 0);
      qspCall(s, 'underwear', 'remove');
    }
    qspCall(s, 'stat', '');
    scene.text('You lather up your washcloth and start scrubbing your body. Next, you rinse off the soap and begin to lather your hair with shampoo. After rinsing off the shampoo, you feel completely clean.');
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
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
  scene.build();
}

function enterWith_Mira(s: GameState, scene: SceneBuilder): void {
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    scene.actions([
      { label: 'Bathe with Mira', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'backup', 'swim');
    (s as any).lastwornclothingtype['swim'] = ((s as any).lastwornclothingtype ?? 0);
    (s as any).lastwornclothingnumber['swim'] = ((s as any).lastwornclothingnumber ?? 0);
    qspCall(s, 'underwear', 'remove');
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/miraban.jpg');
    scene.text('You watch Mira removing her panties from the corner of your eye.');
    qspCall(s, 'arousal', 'erotic_nudity', 5);
    qspCall(s, 'stat', '');
    qspCall(s, 'gad_gpbath', 'with_Mira_core');
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Undress and bathe with Mira', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'backup', 'swim');
    qspCall(s, 'clothing', 'strip');
    qspCall(s, 'underwear', 'remove');
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/miraban.jpg');
    scene.text('While you undress, you notice Mira removing her panties from the corner of your eye.');
    qspCall(s, 'arousal', 'erotic_nudity', 5);
    qspCall(s, 'stat', '');
    qspCall(s, 'gad_gpbath', 'with_Mira_core');
  } },
    ]);
  }
  scene.build();
}

function enterWith_MiraCore(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Watch Mira clean herself', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/miraban1.jpg');
    scene.text('You feel the hot steam penetrate into your pores while you blissfully watch Mira lather up. She sometimes throws at you short glances and smiles hesitantly in response…');
    qspCall(s, 'arousal', 'erotic_nudity', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Steam', handler: (st: GameState) => {
    (s as any).noshampoo = 1;
    qspCall(s, 'din_van', 'showerdin');
    (s as any).pcs_hairbsh = 0;
    (s as any).pcs_makeup = 1;
    (s as any).banaday = ((s as any).daystart ?? 0);
    if (((s as any).frost ?? 0) > 0) {
      (s as any).frost = 0;
    }
    (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + (5);
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/miraban2.jpg');
    scene.text('Mira finally finishes lathering herself; you take the loofah and lather yourself from head to toe. You enjoy yourselves in the warm bath, relaxing in each other\'s company, occasionally exchanging meaningless anecdotes…');
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the water.');
    }
    qspCall(s, 'arousal', 'erotic_nudity', 25);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'gad_gpbath', 'set_leave_acts');
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
      enterStart(s, scene);
      break;
  }
}

export const gad_gpbath: LocationDef = {
  name: 'gad_gpbath',
  title: 'You\'ve run out of shampoo and will have to buy some more before you can wash.',
  region: 'gadukino',
  locationType: 'bathroom',
  description: ['A small room with a low, smoky ceiling, a small stove, a couple of stainless steel water tanks, and a blackened wooden shelf.'],
  enter: enter,
};
