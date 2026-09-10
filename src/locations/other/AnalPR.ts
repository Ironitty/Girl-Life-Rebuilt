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
    if (((s as any).cumanalRand ?? 0) === 0) {
      (s as any).spafinloc = 4;
      qspCall(s, 'cum_manage', '');
      scene.text('Suddenly the man groans loudly and abruptly pulls his member out of your stretched anus. The sudden emptiness feels strange, but you smile seductively at the man as he jerks himself off over your ass cheeks. When he\'s done covering your buttocks with his seed, he lets out a satisfied sigh and gives you your money.');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'locSex', 'metkaSex');
  } },
      ]);
    } else {
      (s as any).spafinloc = 7;
      qspCall(s, 'cum_manage', '');
      scene.text('Suddenly the man groans loudly and abruptly pulls his member out of your stretched anus. The sudden emptiness feels strange, but you smile seductively at the man while he jerks himself off over your ass cheeks. Then the bastard suddenly aims his cock at your clothes to shoot his load all over them!<br>You silently curse him, but force yourself to keep smiling as he lets out a satisfied sigh and places your money next to you.');
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
      qspCall(s, 'arousal', 'anal', 10, 'sub', 'unknown', 'prostitution');
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'locSex', 'metkaSex');
  } },
      ]);
    }
  }
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
