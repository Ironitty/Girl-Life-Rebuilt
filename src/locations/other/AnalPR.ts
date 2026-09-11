import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter1(s: GameState, scene: SceneBuilder): void {
  (s as any).prosti = 0;
  // TODO-QSP: gs 'money', 'earn', ProsMoney*100
  qspCall(s, 'stat', '');
  qspCall(s, 'arousal', 'auto_lube', 'anal');
  if (((s as any).pcs_ass ?? 0) < ((s as any).dick ?? 0)) {
    qspCall(s, 'arousal', 'anal', 5, 'rough', 'sub', 'unknown', 'prostitution');
    qspCall(s, 'stat', '');
  }
  if (((s as any).pcs_ass ?? 0) >= ((s as any).dick ?? 0)) {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (((s as any).pcs_ass ?? 0));
    qspCall(s, 'arousal', 'anal', 5, 'sub', 'unknown', 'prostitution');
    qspCall(s, 'stat', '');
  }
  scene.img('images/shared/sex/anal/doggy/anal30.jpg');
  // TODO-QSP: dynamic text: You immediately feel the man's hands on your ass cheeks when you get on your han...
  scene.text(`You immediately feel the man's hands on your ass cheeks when you get on your hands and knees in the back seat. The man confidently guides his condom-covered cock to your sphincter and slowly thrusts all of his ${((s as any).dick ?? 0)} centimeters inside you.`);
  // TODO-QSP: dynamic text: <<$analsex>>
  scene.text(`${((s as any).analsex ?? 0)}`);
  scene.text('After a few minutes of fucking your ass, the man groans, and you feel his hips spasming against your ass. He pulls out of you then takes the filled condom off his slowly shrinking cock.');
  scene.text('The man ties a knot at the open end of the condom and carelessly tosses it out of the window.');
  (s as any).spafinloc = 3;
  qspCall(s, 'arousal', 'anal', 10, 'sub', 'unknown', 'prostitution');
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'cum_manage', '');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'locSex', 'metkaSex');
  } },
  ]);
  scene.build();
}

function enter2(s: GameState, scene: SceneBuilder): void {
  (s as any).prosti = 0;
  qspCall(s, 'stat', '');
  qspCall(s, 'arousal', 'auto_lube', 'anal');
  if (((s as any).pcs_ass ?? 0) < ((s as any).dick ?? 0)) {
    qspCall(s, 'arousal', 'anal', (-5), 'rough', 'sub', 'unknown', 'prostitution');
    qspCall(s, 'stat', '');
  }
  if (((s as any).pcs_ass ?? 0) >= ((s as any).dick ?? 0)) {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (((s as any).pcs_ass ?? 0));
    qspCall(s, 'arousal', 'anal', (-5), 'sub', 'unknown', 'prostitution');
    qspCall(s, 'stat', '');
  }
  scene.img(`images/shared/sex/anal/mis/cowl${Math.floor(Math.random() * 6) + 1}.jpg`);
  scene.text('As soon as you lie down on the hood of the car, the man parts your legs and eagerly presses the tip of his cock against your anus.');
  qspCall(s, 'arousal', 'anal', 10, 'sub', 'unknown', 'prostitution');
  qspCall(s, 'stat', '');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Continue', goto: ['AnalPR', '3'] },
    ]);
  } else {
    qspCall(s, 'money', 'earn', 2000);
    (s as any).cumanalRand = Math.floor(Math.random() * 3) + 0;
    if ((!((s as any).cumanalRand ?? 0))) {
      (s as any).spafinloc = 4;
      qspCall(s, 'cum_manage', '');
      scene.text('Suddenly the man groans loudly and abruptly pulls his member out of your stretched anus. The sudden emptiness feels strange, but you smile seductively at the man as he jerks himself off over your ass cheeks. When he\'s done covering your buttocks with his seed, he lets out a satisfied sigh and gives you your money.');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'locSex', 'metkaSex');
  } },
      ]);
    } else {
      if (((s as any).cumanalRand ?? 0) === 1) {
        (s as any).spafinloc = 7;
        qspCall(s, 'cum_manage', '');
        scene.text('Suddenly the man groans loudly and abruptly pulls his member out of your stretched anus. The sudden emptiness feels strange, but you smile seductively at the man while he jerks himself off over your ass cheeks. Then the bastard suddenly aims his cock at your clothes to shoot his load all over them!<br>You silently curse him, but force yourself to keep smiling as he lets out a satisfied sigh and places your money next to you.');
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'locSex', 'metkaSex');
  } },
        ]);
      } else {
        if (((s as any).cumanalRand ?? 0) === 2) {
          (s as any).spafinloc = 3;
          qspCall(s, 'cum_manage', '');
          scene.text('Suddenly the man groans loudly and he holds still with his cock deep inside you. He very slowly pulls out, which results in a trickle of his sperm slowly running out of your slightly gaping ass.');
          scene.text('He admires his work for a moment before giving you the money he owes you with a satisfied smile on his face.');
          scene.actions([
            { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'locSex', 'metkaSex');
  } },
          ]);
        }
      }
    }
    qspCall(s, 'arousal', 'anal', 10, 'sub', 'unknown', 'prostitution');
    qspCall(s, 'arousal', 'end');
  }
  scene.build();
}

function enter3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('When the man stops, at first you think it\'s because he came, but then you hear swearing.');
  scene.text('"What the fuck!? What kind of dirty whore are you? This is disgusting!" he yells.');
  scene.text('When you turn around, you see the problem. His dick is covered in shit! You really should have given yourself an enema first before you sold your ass like this…');
  scene.text('The man shouts angrily, "Get lost you whore… you\'re lucky I\'m letting you leave without beating you up! You can forget about your money!"');
  if (((s as any).pcs_intel ?? 0) >= 50) {
    // TODO-QSP: act 'Apologize and make amends': gt 'AnalPR', '5'
  }
  scene.actions([
    { label: 'Leave quietly', handler: (st: GameState) => {
    dynamicGoto(st, 'locSex', 'metkaSex');
  } },
    { label: 'Insist he pays anyway', goto: ['AnalPR', '4'] },
  ]);
  scene.build();
}

function enter4(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'earn', ProsMoney * 100
  qspCall(s, 'mood', 'lower', 'large');
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) - (((s as any).pcs_health ?? 0)/5);
  qspCall(s, 'arousal_funcs', 'stretch', 'oral', 1);
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/blowjob/bjr.jpg');
  scene.text('"Hey, I did what you wanted! You owe m-," you begin to say, but he doesn\'t let you finish. The man angrily punches you in the stomach, which makes you double over in pain.');
  scene.text('"Fine! You\'ll get your money… but you will correct your mistake you whore," he snarls angrily.');
  scene.text('He kneels down then thrusts his smelly cock all the way into your mouth. He says with a mean grin, "Start sucking slut. It\'s not coming out until it\'s completely clean!"');
  scene.text('The taste and stench are terrible. You really have to fight the urge to vomit. You barely manage, partially because you\'re afraid of what he would do otherwise…');
  scene.text('A few minutes later, long after you licked and sucked his cock clean, the man is still fucking your throat violently. He finally groans and cums inside your mouth.');
  scene.text('He scoffs at you when he pulls away as you roll to your stomach and dry heave a few times. That was disgusting!');
  scene.text('He carelessly throws the money he owes you onto the ground then drives off without saying another word.');
  (s as any).spafinloc = 12;
  qspCall(s, 'arousal', 'bj', 10, 'sub', 'humiliation', 'rough', 'deepthroat', 'unknown', 'prostitution');
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'cum_manage', '');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'locSex', 'metkaSex');
  } },
  ]);
  scene.build();
}

function enter5(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal_funcs', 'stretch', 'oral', 1);
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/blowjob/bjr1.jpg');
  scene.text('You understand perfectly why he\'s upset… that wasn\'t very smart of you. You\'ll have to think of a solution fast!');
  scene.text('"I\'m sorry sir! Please allow me to make it up to you…," you tell him as you drop to your knees obediently. This is going to be unpleasant, but you have to do something to keep him happy!');
  scene.text('The man watches in disgust as you close your lips around his dirty cock. The taste and smell is awful! He\'s still upset, but you can see his anger slowly fade away when you lick his dirty cock clean. It\'s fully erect again by now and you can tell he\'s still very horny despite your mishap.');
  scene.text('He then says, "Good enough. Lie down in the grass."');
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'humiliation', 'unknown', 'prostitution');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Let him fuck you', goto: ['AnalPR', '6'] },
  ]);
  scene.build();
}

function enter6(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
  // TODO-QSP: gs 'money', 'earn', ProsMoney*110
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/sex/car/sexcar20.jpg');
  scene.text('You lie down obediently while giving the man a humble look as he takes his place between your legs. He quickly puts a condom on, not taking any more chances with you. You still have that awful taste in your mouth, but do your best to focus on giving the man pleasure.');
  scene.text('The man drives his cock deep inside you and begins to fuck your pussy using long, firm strokes. He groans every time his hips slap against your buttocks, and the intensity with which he fucks you makes you cry out as well.');
  scene.text('After a few minutes, the man groans, and you feel his hips spasming against your body. He pulls out of you and takes the filled condom off his slowly shrinking cock.');
  scene.text('While you lay on the grass recovering from all the things you just had to do to not lose your customer, he theatrically throws a number of bills onto your body one by one. He\'s smiling again and is clearly in a good mood. He\'s even added a little extra!');
  qspCall(s, 'arousal', 'vaginal', 10, 'sub', 'humiliation', 'rough', 'unknown', 'prostitution');
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'cum_manage', '');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'locSex', 'metkaSex');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case '1':
      enter1(s, scene);
      break;
    case '2':
      enter2(s, scene);
      break;
    case '3':
      enter3(s, scene);
      break;
    case '4':
      enter4(s, scene);
      break;
    case '5':
      enter5(s, scene);
      break;
    case '6':
      enter6(s, scene);
      break;
    default:
      enter1(s, scene);
      break;
  }
}

export const AnalPR: LocationDef = {
  name: 'AnalPR',
  title: 'After a few minutes of fucking your ass, the man groans, and',
  region: 'other',
  locationType: 'event',
  description: ['After a few minutes of fucking your ass, the man groans, and you feel his hips spasming against your ass. He pulls out of you then takes the filled condom off his slowly shrinking cock.'],
  enter: enter,
};
