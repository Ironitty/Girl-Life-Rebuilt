import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).guy = ((s as any).guy ?? 0) + (1);
  qspCall(s, 'arousal', 'bj', 1, 'unknown', 'prostitution');
  if (Math.floor(Math.random() * 101) + 0 >= 70) {
    qspCall(s, 'dinSex', 'std_trigger');
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/sex/car/bj.jpg');
  scene.text('You slide your hand onto his crotch, once you\'re in his car. The man quickly drives to a quiet area, about two streets away. You can feel an impressive bulge when you reach into his pants, and compliment him on his nice cock when you liberate it. He\'s nearly fully erect already, and if you look closely you can actually see the cock throbbing.');
  if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0) {
    // TODO-QSP: act 'Put on a condom, using your mouth': sexcontra = 3
    scene.actions([{ label: 'Continue', goto: ['blowPR', '1'] }]);
  }
  if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] === 0) {
    // TODO-QSP: act 'Get him hard with your mouth': gt 'blowPR', '2'
  }
  scene.build();
}

function enter1(s: GameState, scene: SceneBuilder): void {
  (s as any).protect = 1;
  qspCall(s, 'dinSex', 'std_trigger_oral');
  (s as any).protect = 0;
  (s as any).mc_inventory['equipped_condoms'] = ((s as any).mc_inventory['equipped_condoms'] ?? 0) - (1);
  qspCall(s, 'arousal', 'bj', 5, 'unknown', 'prostitution');
  qspCall(s, 'stat', '');
  (s as any).tmppicrand = Math.floor(Math.random() * 7) + 1;
  if (((s as any).tmppicrand ?? 0) === 1) {
    scene.img('images/shared/sex/blowjob/bjp.jpg');
  } else {
    scene.img(`images/shared/sex/blowjob/bjp${((s as any).tmppicrand ?? 0)}.jpg`);
  }
  scene.text('You put a condom between your lips and slowly guide your mouth to his penis, gently rolling the condom down using only your lips. You can tell the guy is impressed with your skills.');
  if (((s as any).prosti ?? 0) === 0) {
    scene.text('You proceed to give him a blowjob, licking and sucking his condom-clad penis. The taste of the rubber is a bit unpleasant, but you do a good job and in no time the guy groans loudly.');
    scene.text('When you feel his cock slowly softening between your lips, you pull your head back. The man ties a knot in the condom and tosses it away carelessly.');
    (s as any).spafinloc = 12;
    qspCall(s, 'cum_manage', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'locSex', 'metkaSex');
  } },
    ]);
  } else {
    scene.text('After you give the man a blowjob for a while, he grunts that he\'s ready to fuck you now.');
    if (((s as any).prosti ?? 0) === 2) {
      scene.text('After you give the man a blowjob for a while, he grunts that he\'s ready to fuck your ass now.');
      scene.actions([
        { label: 'Continue', goto: ['AnalPR', '1'] },
      ]);
    }
    scene.actions([
      { label: 'Continue', goto: ['NormPR', '1'] },
    ]);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case '1':
      enter1(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const blowPR: LocationDef = {
  name: 'blowPR',
  title: 'You slide your hand onto his crotch, once you\'re in his car.',
  region: 'other',
  locationType: 'event',
  description: ['You slide your hand onto his crotch, once you\'re in his car. The man quickly drives to a quiet area, about two streets away. You can feel an impressive bulge when you reach into his pants, and compliment him on his nice cock when you liberate it. He\'s nearly fully erect already, and if you look closely you can actually see the cock throbbing.'],
  enter: enter,
};
