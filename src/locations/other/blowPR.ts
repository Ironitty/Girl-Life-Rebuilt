import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).guy = ((s as any).guy ?? 0) + (1);
  qspCall(s, 'arousal', 'bj', 1, 'unknown', 'prostitution');
  if ((Math.floor(Math.random() * 101) + 0) >= 70) {
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
  if ((!((s as any).prosti ?? 0))) {
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
    if (((s as any).prosti ?? 0) === 1) {
      scene.text('After you give the man a blowjob for a while, he grunts that he\'s ready to fuck you now.');
      scene.actions([
        { label: 'Continue', goto: ['NormPR', '1'] },
      ]);
    } else {
      if (((s as any).prosti ?? 0) === 2) {
        scene.text('After you give the man a blowjob for a while, he grunts that he\'s ready to fuck your ass now.');
        scene.actions([
          { label: 'Continue', goto: ['AnalPR', '1'] },
        ]);
      }
    }
  }
  scene.build();
}

function enter2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'dinSex', 'std_trigger_oral');
  qspCall(s, 'arousal', 'bj', 5, 'unknown', 'prostitution');
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/blowjob/bjp\'+rand(8, 13)+\'.jpg');
  scene.text('You close your lips around his member and flick your tongue over the tip of his cock teasingly. It stands at full erection in no time.');
  scene.actions([
    { label: 'Suck on his cock', goto: ['blowPR', '12'] },
  ]);
  scene.build();
}

function enter12(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if ((!((s as any).prosti ?? 0))) {
    (s as any).bjrand = Math.floor(Math.random() * 100) + 1;
    if (((s as any).bjrand ?? 0) <= 50) {
      (s as any).spafinloc = 12;
      qspCall(s, 'cum_manage', '');
      (s as any).pcs_breath = 0;
      if (((s as any).stat ?? 0)?.['bj'] <= 15) {
        scene.img('images/shared/sex/cum/mouth/cum32.jpg');
        scene.text('You don\'t have much experience giving blowjobs, and even though you do your best, the man can tell you\'re not very good at it.');
        scene.text('Your mouth makes him feel good nevertheless, and after a few minutes the man groans and cums in your mouth. You wince from the unpleasant taste of his sperm, earning you a doubtful look from him.');
        scene.text('You can tell he wished you were a bit more eager and skilled, but is still fairly satisfied with your performance.');
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'locSex', 'metkaSex');
  } },
        ]);
      } else {
        scene.img('images/shared/sex/cum/mouth/cum33.jpg');
        scene.text('Your trained tongue slides up and down his shaft, and you pull out all of your tricks to make him feel good. You even use some techniques you learned to stall his orgasm for a moment, making it all the more intense for him when he shoots his load into your mouth.');
        scene.text('When you swallow his load obediently, the man smiles at you with a delighted look on his face. You really made him feel great!');
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'locSex', 'metkaSex');
  } },
        ]);
      }
    } else {
      if (((s as any).bjrand ?? 0) <= 80) {
        (s as any).spafinloc = 11;
        qspCall(s, 'cum_manage', '');
        if (((s as any).stat ?? 0)?.['bj'] <= 15) {
          scene.img('images/shared/sex/cum/facial/facial17.jpg');
          scene.text('You don\'t have much experience giving blowjobs, and even though you do your best, the man can tell you\'re not very good at it.');
          scene.text('When the man cums, he suddenly pulls his cock out of your mouth and shoots his load all over your face. Not expecting this, you didn\'t have time to close your eyes and some of it ends up in your eye… ouch!');
          if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
            (s as any).pcs_makeup = 0;
            scene.text('The cum on your face makes a mess of your make-up, too.');
          }
          scene.text('You try to remain professional enough to smile at him and ignore the pain, but the man can clearly tell you\'re uncomfortable. He doesn\'t seem to care.');
          scene.actions([
            { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'locSex', 'metkaSex');
  } },
          ]);
        } else {
          scene.img('images/shared/sex/cum/facial/facial18.jpg');
          scene.text('Your trained tongue slides up and down his shaft, and you pull out all of your tricks to make him feel good. You even use some techniques you learned to stall his orgasm for a moment, making it all the more intense for him when he orgasms.');
          scene.text('You quickly release his cock from your mouth and tilt your head backwards with your eyes closed, making him squirt his load onto your chin with a fake smile on your face.');
          if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
            scene.text('Even though the man thinks you\'re delighted with him cumming all over you, in truth you\'re mostly focusing on not smearing your make-up!');
          }
          scene.text('The man grins happily when he looks at his work of art, and gives you the money he owed you. You made his day!');
          scene.actions([
            { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'locSex', 'metkaSex');
  } },
          ]);
        }
      } else {
        if (((s as any).bjrand ?? 0) <= 100) {
          if (((s as any).stat ?? 0)?.['bj'] <= 15) {
            (s as any).spafinloc = 7;
            qspCall(s, 'cum_manage', '');
            scene.img('images/shared/sex/cum/chest/bjt2.jpg');
            scene.text('You don\'t have much experience giving blowjobs, and even though you do your best, the man can tell you\'re not very good at it.');
            scene.text('While you\'re sucking him off, the man tries to pull your clothes aside to expose your breasts. You moan uncomfortably with his cock still in your mouth, letting him know that was not part of the deal!');
            scene.text('He\'s clearly displeased, but lets go and refocuses his efforts on fucking your throat.');
            scene.text('When he\'s close to cumming, he pulls his cock out of your mouth. When he begins to jerks off furiously, you close your eyes and tilt your head back… except you don\'t feel anything land on your face!');
            scene.text('You open your eyes again after a few seconds and notice in horror that he dumped his load onto your clothes, leaving stains everywhere! You silently curse him but force yourself to smile… he is still your customer, after all.');
            scene.actions([
              { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'locSex', 'metkaSex');
  } },
            ]);
          } else {
            qspCall(s, 'money', 'earn', 500);
            scene.img('images/shared/sex/cum/chest/bjt.jpg');
            scene.text('Your trained tongue slides up and down his shaft, and you pull out all of your tricks to make him feel good. You even use some techniques you learned to stall his orgasm for a while.');
            scene.text('While you\'re sucking him off, the man tries to pull your clothes aside to expose your breasts. Understanding what he wants, you expose your boobs readily. His cock erupts almost immediately at the sight of them, and he removes his cock from your mouth so he can spray his sperm over your tits.');
            // TODO-QSP: dynamic text: The man grins happily when he looks at his work of art across your boobs, and gi...
            scene.text(`The man grins happily when he looks at his work of art across your boobs, and gives you an extra ${qspFunc(s, 'money', 'string_profit', 500)} as a tip. You really made his day!`);
            (s as any).spafinloc = 15;
            qspCall(s, 'cum_manage', '');
            scene.actions([
              { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'locSex', 'metkaSex');
  } },
            ]);
          }
        }
      }
    }
    qspCall(s, 'arousal', 'end');
  } else {
    if (((s as any).prosti ?? 0) === 1) {
      scene.text('After you suck him off for a while, the guy reminds you that that\'s not why you\'re here. He\'s ready to fuck you now.');
      scene.actions([
        { label: 'Further', goto: ['NormPR', '2'] },
      ]);
    } else {
      if (((s as any).prosti ?? 0) === 2) {
        scene.text('After you suck him off for a while, the guy reminds you that that\'s not why you\'re here. He\'s ready to fuck your ass now.');
        scene.actions([
          { label: 'Further', goto: ['AnalPR', '2'] },
        ]);
      }
    }
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
    case '2':
      enter2(s, scene);
      break;
    case '12':
      enter12(s, scene);
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
