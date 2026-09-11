import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enter1(s: GameState, scene: SceneBuilder): void {
  (s as any).prosti = 0;
  (s as any).protect = 1;
  qspCall(s, 'stat', '');
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    scene.img('images/locations/shared/sex/car/sexcar1.jpg');
    scene.text('You obediently lie down on your back in the back seat, and the man pounces you eagerly. Within seconds, his cock is deep inside you.');
  } else {
    scene.img('images/locations/shared/sex/car/sexcar2.jpg');
    scene.text('You immediately feel the man\'s hands on your ass cheeks when you get on your hands and knees in the back seat. The man confidently guides his cock to your pussy, and slowly thrusts it inside you.');
  }
  scene.text('After a few minutes of fucking you, the man groans and you feel his hips spasming against yours. He pulls out of you and takes the filled condom off his slowly shrinking cock.');
  qspCall(s, 'dinsex', 'boy_puts_condom');
  qspCall(s, 'dinsex', 'vaginal_sex', 15, 'sub', 'unknown', 'prostitution');
  qspCall(s, 'dinsex', 'sexcum');
  scene.text('The man ties a knot in the condom and tosses it out of the window carelessly, very satisfied with your performance.');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get out of his car', handler: (st: GameState) => {
    dynamicGoto(st, 'locSex', 'metkaSex');
  } },
  ]);
  scene.build();
}

function enter2(s: GameState, scene: SceneBuilder): void {
  (s as any).prosti = 0;
  qspCall(s, 'stat', '');
  scene.img(`images/locations/shared/sex/car/sexcar${((s as any).picpRand ?? 0)}.jpg`);
  (s as any).prostRand = Math.floor(Math.random() * 100) + 1;
  if (((s as any).prostRand ?? 0) <= 50) {
    (s as any).picpRand = Math.floor(Math.random() * 7) + 3;
    (s as any).pose = 1;
    scene.text('You lean against the car and expose your bare ass to the man. He\'s not wasting any time and immediately gets behind you, eagerly rubbing his cock against your vagina.');
  } else {
    if (((s as any).prostRand ?? 0) <= 75) {
      (s as any).picpRand = Math.floor(Math.random() * 3) + 10;
      (s as any).pose = 1;
      scene.text('You get down on your hands and knees like he wants, and brace yourself when you feel him pressing his cock against your pussy in a none too gentle fashion.');
    } else {
      (s as any).pose = 0;
      (s as any).picpRand = Math.floor(Math.random() * 7) + 13;
      scene.text('He groans in your ear: "Get on the hood, on your back!"');
      scene.text('You quickly do as he says, and let out a soft moan when he rubs his cock against your pussy lips.');
    }
  }
  qspCall(s, 'arousal', 'vaginal', 15, 'sub', 'unknown', 'prostitution');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
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
    default:
      enterDefault(s, scene);
      break;
  }
}

export const NormPR: LocationDef = {
  name: 'NormPR',
  title: 'You obediently lie down on your back in the back seat, and t',
  region: 'other',
  locationType: 'event',
  enter: enter,
};
