import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterKurit(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'drugs', 'smoke');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/apartment/kurit.jpg');
  scene.text('You put the cigarette in your mouth and tightly squeeze it with your lips as you light it. You inhale the smoke and hold it in for for a second before continuing and enjoying your smoke.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Throw the cigarette butt over the railing', goto: ['balkon', 'start'] },
  ]);
  scene.build();
}

function enterDemo1(s: GameState, scene: SceneBuilder): void {
  (s as any).sosedBalDay = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.text('<center><font size="5" color="maroon"><b>Balcony</b></font></center>');
  if (((s as any).pantyworntype ?? 0) !== 'none') {
    scene.img('images/locations/city/residential/apartment/balcony_underwear3.jpg');
    qspCall(s, 'arousal', 'flashlite', 5, 'exhibitionism');
  } else {
    scene.img('images/locations/city/residential/apartment/balcony_naked3.jpg');
    qspCall(s, 'arousal', 'flash', 5, 'exhibitionism');
  }
  scene.text('<center>You defiantly pose on the balcony, much to the delight of your neighbor. He eagerly looks at you while furiously masturbating before he cums and returns to his apartment.</center>');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['balkon', 'start'] },
  ]);
  scene.build();
}

function enterPalec1(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 21) + 10));
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  (s as any).sosedBalDay = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  if (((s as any).pantyworntype ?? 0) !== 'none') {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/pc/reactions/fuckyou_underwear.jpg"></cen...
    scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/pc/reactions/fuckyou_underwear.jpg"></center>`);
  }
  if (((s as any).pantyworntype ?? 0) === 'none') {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/pc/reactions/fuckyou_naked.jpg"></center>
    scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/pc/reactions/fuckyou_naked.jpg"></center>`);
  }
  scene.text('<center>You flip off the neighbor, who quickly heads back indoors.</center>');
  // TODO-QSP: end
  scene.actions([
    { label: 'Further', goto: ['balkon', 'start'] },
  ]);
  scene.build();
}

function enterNiz(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  if (((s as any).alko ?? 0) < 12) {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      scene.img('images/locations/city/residential/apartment/balcony_naked2.jpg');
    } else {
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        scene.img('images/locations/city/residential/apartment/balcony_underwear2.jpg');
      } else {
        scene.img('images/locations/city/residential/apartment/balcony_dressed2.jpg');
      }
    }
    scene.actions([
      { label: 'Enjoy the view', handler: (st: GameState) => {
    if (((st as any).hour ?? 0) >= 8  &&  ((st as any).hour ?? 0) <= 19) {
      scene.img('images/locations/city/residential/apartment/bal1.jpg');
    } else {
      scene.img('images/locations/city/residential/apartment/bal2.jpg');
    }
    scene.text('You look at the beautiful landscape from your balcony. The view is fantastic and you feel more relaxed.');
    scene.actions([
      { label: 'Further', goto: ['balkon', 'start'] },
    ]);
  } },
    ]);
  } else {
    scene.text('This was probably a bad decision. You feel a little light headed and don\'t feel comfortable standing on your balcony drunk…');
    scene.actions([
      { label: 'Continue', goto: ['balkon', 'start'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSosed(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Balcony</b></center>');
  scene.img('images/locations/city/residential/apartment/sosed.jpg');
  scene.text('<center>You notice your neighbor to the left standing on his balcony, staring at your naked body.</center>');
  if (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 0) {
    qspCall(s, 'willpower', 'exhib', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Flip him off', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Flip him off', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'exhib', 'self');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    qspGoto(st, 'balkon2', 'palec1');
  } },
      ]);
    }
    scene.actions([
      { label: 'Show off your body', goto: ['balkon2', 'demo1'] },
    ]);
  } else {
    qspCall(s, 'willpower', 'exhib', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Show off your body', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Show off your body', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'exhib', 'self');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    qspGoto(st, 'balkon2', 'demo1');
  } },
      ]);
    }
    scene.actions([
      { label: 'Flip him off', goto: ['balkon2', 'palec1'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterMasopt(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_inhib ?? 0) < 30) {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 3) + 1));
  }
  qspCall(s, 'mood', 'raise', 'small');
  scene.img('images/locations/city/residential/apartment/sex/balcony_dildo.jpg');
  if (((s as any).mc_inventory ?? 0)?.['dildo_small'] === 1) {
    scene.actions([
      { label: 'Rub your clit with the dildo', handler: (st: GameState) => {
    qspCall(st, 'arousal_funcs', 'stretch', 'vaginal', (Math.floor(Math.random() * 3) + 0));
    scene.img(`images/locations/city/residential/apartment/sex/balcony_dildo${(Math.floor(Math.random() * 2) + 1)}.jpg`);
    scene.text('You start rubbing yourself, gradually building up a wetness between your legs. Feeling aroused enough, you take out your dildo and start teasing your clit by gently rubbing it.');
    scene.text('You then slowly push the head inside your pussy and start slowly fucking yourself, gradually picking up the pace. The feeling of your pussy being stretched out is overwhelming and you let out a quiet whimper as you continue fucking yourself.');
    (st as any).orgasm_or = 'yes';
    (st as any).orgasm_txt = 'After pleasuring yourself intensely with the dildo for a few minutes, you try to keep your voice down as you reach orgasm.';
    qspCall(st, 'arousal', 'vaginal_dildo', 10, 'exhibitionism');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['balkon', 'start'] },
    ]);
  } },
      { label: 'Play with your ass', handler: (st: GameState) => {
    qspCall(st, 'arousal_funcs', 'stretch', 'anal', (Math.floor(Math.random() * 3) + 0));
    scene.img('images/locations/city/residential/apartment/sex/balcony_anal1.mp4');
    scene.text('You start rubbing yourself, gradually building up a wetness between your legs. As you play with your clit, your horniness takes over and you start fantasizing about using a different hole today…');
    scene.text('You brush one of your wet fingers against your anus before you take a deep breath and insert it, probing your ass as a wave of pleasure flows through you.');
    qspCall(st, 'arousal', 'anal_finger', 5, 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Use the dildo', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/apartment/sex/balcony_anal2.mp4');
    scene.text('As you\'re pleasuring yourself with your finger, you grab your dildo and start sucking it, trying to lube it as much as you can.');
    scene.text('Not able to contain yourself, you remove your finger and slowly insert the dildo into your ass. You feel discomfort at first, but the pleasant feeling of the dildo penetrating you makes you forget all about it.');
    scene.text('As your anus relaxes, you start thrusting the dildo at a faster speed, gradually feeling your arousal growing.');
    (st as any).orgasm_or = 'yes';
    (st as any).orgasm_txt = 'Within seconds, an orgasm overwhelms you in an intense wave of pure pleasure.';
    qspCall(st, 'arousal', 'anal_dildo', 5, 'exhibitionism');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Go back', goto: ['balkon', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Masturbate', handler: (st: GameState) => {
    qspCall(st, 'arousal_funcs', 'stretch', 'vaginal', (Math.floor(Math.random() * 2) + 0));
    qspGoto(st, 'balkon2', 'finger');
  } },
  ]);
  scene.build();
}

function enterFinger(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/apartment/sex/balcony_mas1-1.jpg');
  scene.text('Standing naked in the open is arousing you. Feeling emboldened, you stick your fingers in your mouth, preparing them for what\'s to come…');
  qspCall(s, 'arousal', 'foreplay', 2, 'exhibitionism', 'masturbate');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Rub your clit', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/apartment/sex/balcony_mas1-2.jpg');
    scene.text('You run your wet fingers down your body and stop at your pussy lips. You slowly start rubbing your clit as you feel the first surge of pleasure consuming you.');
    (st as any).orgasm_or = 'no';
    qspCall(st, 'arousal', 'clit_finger', 3, 'masturbate', 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Insert your fingers', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/apartment/sex/balcony_mas1-3.jpg');
    scene.text('Your clit is now swelling with desire, and you can\'t ignore it any longer. You take your middle finger and insert it into your pussy.');
    scene.text('As you ease into it, you close your eyes as you speed up your movements.');
    (st as any).orgasm_or = 'no';
    qspCall(st, 'arousal', 'vaginal_finger', 5, 'masturbate', 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Open your eyes', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/apartment/sex/balcony_mas1-4.jpg');
    if (((st as any).trait_vars ?? 0)?.['exhibitionist'] > 0) {
      qspCall(st, 'arousal', 'flash', 2);
      scene.text('When you open your eyes, you notice one of your neighbors peering out the window at you.');
      scene.actions([
        { label: 'Give him a show', goto: ['balkon2', 'finger_solo'] },
      ]);
    } else {
      (st as any).orgasm_or = 'yes';
      (st as any).orgasm_txt = 'Overtaken by the thrill of the risk of being caught in such a compromising act and the diligent work of your skilled fingers, you bring yourself to to an intense orgasm. You grip the railing for support as your juices squirt out of you.';
      scene.text('Your orgasm is so intense that you\'re seeing stars and it almost feels like you\'re going to pass out. You somehow manage to keep your composure before you quickly head back inside.');
      qspCall(st, 'arousal', 'clit_finger', 2, 'masturbate');
      qspCall(st, 'arousal', 'end');
      scene.actions([
        { label: 'Head back inside', handler: (st: GameState) => {
    qspCall(st, 'dina', 'brodils');
  } },
      ]);
    }
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterFingerSolo(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/apartment/sex/balcony_mas1-5.jpg');
  scene.text('Ignoring everything around you, you re-focus on yourself once again and start teasing yourself, pressing your fingers on your already throbbing clit. It doesn\'t take long before you slide your fingers inside your pussy, causing you to squirm at the sensation.');
  (s as any).orgasm_or = 'no';
  qspCall(s, 'arousal', 'clit_finger', 3, 'masturbate', 'exhibitionism');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep it up', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/apartment/sex/balcony_mas1-6.jpg');
    scene.text('Slowly pacing the speed at which your fingers enter your pussy, you feel your tight walls becoming wet and sticky with your own juices as they drip onto the ground.');
    (st as any).orgasm_or = 'no';
    qspCall(st, 'arousal', 'vaginal_finger', 3, 'masturbate', 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Faster', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/apartment/sex/balcony_mas1-7.jpg');
    scene.text('You pick up the pace as you fantasize about being taken like this in the open, your finger frantically sliding in and out of your soaking wet pussy with ease.');
    (st as any).orgasm_or = 'no';
    qspCall(st, 'arousal', 'vaginal_finger', 3, 'masturbate', 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Faster', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/apartment/sex/balcony_mas1-8.jpg');
    scene.text('You\'re way too horny to pace yourself now and insert another finger, expanding the pleasant feeling.');
    (st as any).orgasm_or = 'no';
    qspCall(st, 'arousal', 'vaginal_finger', 3, 'masturbate', 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Just a little more', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/apartment/sex/balcony_mas1-9.jpg');
    scene.text('By now, you\'re loudly moaning, not caring if anyone hears you as your fingers hit your g-spot. You make one last effort and thrust your fingers deep inside you as you feel a…');
    (st as any).orgasm_or = 'no';
    qspCall(st, 'arousal', 'vaginal_finger', 3, 'masturbate', 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Climax', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/apartment/sex/balcony_orgasm.jpg');
    (st as any).orgasm_or = 'yes';
    (st as any).orgasm_txt = 'Within seconds, your toes curl as you feel a wave of ecstasy sweeping all over your body, your legs and hands shaking in delight of a possibility that someone might have noticed you.';
    scene.text('After a few seconds, you remove your fingers from your pussy, which is still pulsating from the intense orgasm.');
    qspCall(st, 'arousal', 'vaginal_finger', 3, 'masturbate', 'exhibitionism');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/residential/apartment/sex/balcony_mas1-10.jpg');
    scene.text('As you come to your senses, you can hear some of your neighbours applauding your performance. You decide giving them one last show as you stand up and slowly suck your juices from your fingers, savouring the memory.');
    scene.text('As you finish, you give everyone a playful wave as you get dressed.');
    scene.actions([
      { label: 'Leave', goto: ['balkon', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'kurit':
      enterKurit(s, scene);
      break;
    case 'demo1':
      enterDemo1(s, scene);
      break;
    case 'palec1':
      enterPalec1(s, scene);
      break;
    case 'niz':
      enterNiz(s, scene);
      break;
    case 'sosed':
      enterSosed(s, scene);
      break;
    case 'masopt':
      enterMasopt(s, scene);
      break;
    case 'finger':
      enterFinger(s, scene);
      break;
    case 'finger_solo':
      enterFingerSolo(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const balkon2: LocationDef = {
  name: 'balkon2',
  title: 'Balcony',
  region: 'other',
  enter: enter,
};
