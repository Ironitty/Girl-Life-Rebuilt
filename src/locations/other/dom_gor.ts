import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'dom_gor';
  (s as any).loc_arg = ((s as any).locArgs?.[0] ?? 0);
  (s as any).locM = 'dom_gor';
  (s as any).locM_arg = ((s as any).locArgs?.[0] ?? 0);
  (s as any).location_type = 'private';
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Your room</b></center>');
  scene.img('images/locations/pavlovsk/resident/vitekhome/kotovkom.jpg');
  scene.text('Your room in a hostel. The room is small, leaving only the bare minimum. 2 <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027bed/u0027, /u0027start/u0027); return false;">beds</a>, a <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">mirror</a>, a <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027wardrobe/u0027, /u0027start/u0027); return false;">wardrobe</a>, and a <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027TV/u0027, /u0027start/u0027); return false;">TV</a>.');
  if (((s as any).teacher ?? 0)?.['level'] > 20  &&  ((s as any).parkrunday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) < 21  &&  ((s as any).hour ?? 0) > 6) {
    if (((s as any).clothing ?? 0)?.['sports'] === 0) {
      scene.text('You could go for a jog around the park if you were wearing sports clothing and shoes.');
    } else {
      scene.actions([
        { label: 'Go for a jog around the park (30 minutes)', handler: (st: GameState) => {
    (st as any).parkrunday = ((st as any).daystart ?? 0);
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'mood', 'raise', 'tiny');
    qspCall(st, 'exp_gain', 'run', 2);
    (st as any).fat = ((st as any).fat ?? 0) - (8);
    qspCall(st, 'sweat', 'add', 30);
    scene.img('images/locations/shared/park/parkbeg.jpg');
    scene.text('You run a few laps around the park, enjoying the fresh air and exercise.');
    (st as any).parkrand = (Math.floor(Math.random() * 11) + 0);
    if (((st as any).parkrand ?? 0) > 4  &&  ((st as any).beguch ?? 0) < 3) {
      scene.text('As you make your way through the park, you notice a familiar face—one of your pupils from school. They wave and jog over, asking if they can join you for your run.');
      scene.actions([
        { label: 'Run together', handler: (st: GameState) => {
    (st as any).beguch = ((st as any).beguch ?? 0) + (1);
    scene.img('images/locations/pavlovsk/hostel/stop.jpg');
    scene.text('You and your pupil fall into an easy rhythm, chatting between breaths as you make your way around the park path.');
    // TODO-QSP: dynamic text: "Miss <<$pcs_lastname>>, you are so beautiful, and we are all very fond of you!"...
    scene.text(`"Miss ${((st as any).pcs_lastname ?? '')}, you are so beautiful, and we are all very fond of you!" the student says earnestly.`);
    scene.text('You smile at the compliment. "Thank you! That\'s nice to hear."');
    scene.actions([
      { label: 'Complete run', goto: ['pav_park', 'start'] },
    ]);
  } },
      ]);
    } else {
      if (((st as any).parkrand ?? 0) > 4  &&  ((st as any).beguch ?? 0) >= 3  &&  ((st as any).beguch ?? 0) < 6) {
        scene.text('You spot one of your pupils in the park. When they see you, they jog over and ask if they can join you.');
        scene.actions([
          { label: 'Run together', handler: (st: GameState) => {
    (st as any).beguch = ((st as any).beguch ?? 0) + (1);
    scene.img('images/locations/pavlovsk/hostel/stop2.jpg');
    scene.text('After running for a while, you both stop to do some stretching exercises for your muscles.');
    scene.text('As you stretch, your pupil sighs. "If only the girls at school could be more like you!"');
    scene.text('You smile knowingly. "You should try getting to know them better. They might surprise you."');
    scene.actions([
      { label: 'Complete run', goto: ['pav_park', 'start'] },
    ]);
  } },
        ]);
      } else {
        if (((st as any).parkrand ?? 0) > 4  &&  ((st as any).beguch ?? 0) >= 6  &&  ((st as any).beguch ?? 0) < 9) {
          scene.text('You recognize one of your pupils jogging in the park. They notice you too and ask to join your run.');
          scene.actions([
            { label: 'Run together', handler: (st: GameState) => {
    (st as any).beguch = ((st as any).beguch ?? 0) + (1);
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (3);
    scene.img('images/locations/pavlovsk/hostel/stop3.jpg');
    scene.text('You run together at a comfortable pace, stopping occasionally to catch your breath and chat.');
    // TODO-QSP: dynamic text: During one of your breaks, your pupil looks at you hesitantly. "<<$pcs_nickname>...
    scene.text(`During one of your breaks, your pupil looks at you hesitantly. "${((st as any).pcs_nickname ?? '')}, would it be okay if I took a picture of you?"`);
    scene.text('"What are you planning to do with my photo?" you ask, raising an eyebrow.');
    scene.text('The pupil blushes furiously. "I would never use it to… you know… masturbate or anything!"');
    scene.text('You laugh. "I never suggested you would!"');
    scene.text('"I\'m sorry, it was a bad idea," they mumble, clearly embarrassed.');
    scene.text('"I\'m just teasing you," you say with a grin. "Sure, you can take a photo. Just remember to send me a copy."');
    scene.text('You find a nice background, strike a pose, and let your student take a few pictures before continuing your run.');
    scene.actions([
      { label: 'Complete run', goto: ['pav_park', 'start'] },
    ]);
  } },
          ]);
        }
      }
    }
    scene.actions([
      { label: 'Complete run', goto: ['pav_park', 'start'] },
    ]);
  } },
      ]);
    }
  }
  if (((s as any).hour ?? 0) < 23) {
    scene.actions([
      { label: 'Lie on the couch (1:00)', handler: (st: GameState) => {
    qspCall(st, 'sleep_simple', '');
  } },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['food_basic'] > 0) {
    // TODO-QSP: dynamic text: In the refrigerator food is stored that''s good for <b><<mc_inventory[''food_bas...
    scene.text(`In the refrigerator food is stored that's good for <b>${(((s as any).mc_inventory ?? 0)?.['food_basic'] ?? '')}</b> servings.`);
  }
  if (((s as any).mc_inventory ?? 0)?.['food_diet'] === 0  &&  ((s as any).mc_inventory ?? 0)?.['food_basic'] === 0) {
    // TODO-QSP: $func('wrap', 'v_neg b', 'The fridge is empty, nothing to eat in sight.')
  }
  if (((s as any).mc_inventory ?? 0)?.['food_diet'] > 0) {
    // TODO-QSP: dynamic text: The refrigerator contains healthy meals that are good for <b><<mc_inventory[''fo...
    scene.text(`The refrigerator contains healthy meals that are good for <b>${(((s as any).mc_inventory ?? 0)?.['food_diet'] ?? '')}</b> servings.`);
  }
  qspCall(s, 'kit_din', 'kitchen_acts');
  if (((s as any).hostel ?? 0)?.['status'] > 0) {
    scene.actions([
      { label: 'Go to shared bathroom', goto: ['ETO_hostel', 'shared_bathroom'] },
    ]);
  }
  qspCall(s, 'prostitution_functions', 'prostitute_outfit_at_home');
  qspCall(s, 'daily_routine', 'offer_here');
  if (qspFunc(s, 'homes_properties', 'is_current_home') === 0) {
    scene.actions([
      { label: 'Set this small room as your main home', handler: (st: GameState) => {
    qspCall(st, 'homes_properties', '');
  }, goto: ['dom_gor', ''] },
    ]);
  }
  scene.actions([
    { label: 'Go out onto the street', handler: (st: GameState) => {
    if (((st as any).clothingworntype ?? 0) === 'nude') {
      scene.text('<center><b>You need to get dressed.</b></center>');
      dynamicGoto(st, 'curloc');
    } else {
      if (((st as any).sick ?? 0) > 72) {
        scene.text('<center><b>You feel too ill to travel through the streets.</b></center>');
        dynamicGoto(st, 'curloc');
      } else {
        (st as any).minut = ((st as any).minut ?? 0) + 15;
        qspGoto(st, 'pav_commercial', '');
      }
    }
  } },
  ]);
  scene.build();
}

export const dom_gor: LocationDef = {
  name: 'dom_gor',
  title: 'Your room',
  region: 'other',
  locationType: 'private',
  description: ['You could go for a jog around the park if you were wearing sports clothing and shoes.'],
  enter: enter,
};
