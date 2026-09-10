import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).belact = ((s as any).belact ?? 0) - (1);
  (s as any).picrand = Math.floor(Math.random() * 13) + 0;
  scene.img(`images/shared/sex/blowjob/bj${((s as any).picrand ?? 0)}.mp4`);
  // TODO-QSP: dynamic text: You take <<$boydesc>>'s <<dick>> cm cock in your mouth and begin stimulating his...
  scene.text(`You take ${((s as any).boydesc ?? 0)}'s ${((s as any).dick ?? 0)} cm cock in your mouth and begin stimulating his glans. You can clearly see on ${((s as any).boydesc ?? 0)}'s face that he's getting irritated at you for trying to prolong things and just wants you to suck him off quickly.`);
  // TODO-QSP: dynamic text: You do your best to suck him off, trying to go deep as possible, but <<$boydesc>...
  scene.text(`You do your best to suck him off, trying to go deep as possible, but ${((s as any).boydesc ?? 0)} is not pleased. He grabs you by the back of your head and begins forcing it closer and closer towards his fat stomach. You start gagging but he just tells you to relax your throat and it will all be fine.`);
  qspCall(s, 'arousal', 'bj', 10, 'sub', 'prostitution', 'deepthroat');
  qspCall(s, 'stat', '');
  if (((s as any).belact ?? 0) <= 0) {
    // TODO-QSP: dynamic text: <<$boydesc>> groans, clearly enjoying himself. He stands up, grabs you by the ha...
    scene.text(`${((s as any).boydesc ?? 0)} groans, clearly enjoying himself. He stands up, grabs you by the hair, and begins fucking your mouth. "Wider, you little slut, I don't want to feel any teeth."`);
    scene.text('Not daring to make him more upset, you make sure your teeth don\'t get in the way and open your mouth even wider.');
    scene.actions([
      { label: 'Open wide', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth_swallow', 'A113', 1);
    qspCall(s, 'stat', '');
    (s as any).picrand = Math.floor(Math.random() * 11) + 0;
    scene.img(`images/shared/sex/cum/mouth/cum${((s as any).picrand ?? 0)}.mp4`);
    // TODO-QSP: dynamic text: <<$boydesc>> indicates that he's about to come, telling you to "Open wide, <<$pc...
    scene.text(`${((s as any).boydesc ?? 0)} indicates that he's about to come, telling you to "Open wide, ${((s as any).pcs_nickname ?? 0)}. You're going to swallow every little drop."`);
    scene.text('You meekly nod and let out "Yes, Mr. Bely…" doing as he says, opening your mouth as wide as you can. He jerks himself off all over your face and you soon feel his warm jets of sperm landing on your left cheek. He adjusts his aim a bit and some of it ends up in your mouth as well. You decide to just sit there with your eyes closed and your mouth open until he tells you otherwise, doing your best to ignore the taste.');
    (s as any).belsexpayment = 300;
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get up', goto: ['BelSex', 'shower'] },
    ]);
  } },
    ]);
  }
  if (((s as any).belact ?? 0) > 0) {
    (s as any).belyvag = Math.floor(Math.random() * 4) + 0;
    if (((s as any).belyvag ?? 0) === 0) {
      // TODO-QSP: dynamic text: <<$boydesc>> grunts loudly while you suck him off. "Time to give you a real poun...
      scene.text(`${((s as any).boydesc ?? 0)} grunts loudly while you suck him off. "Time to give you a real pounding!"`);
      scene.actions([
        { label: 'Get in position', goto: ['BelSex', 'vaginal1'] },
      ]);
    } else {
      // TODO-QSP: dynamic text: <<$boydesc>> paws at your ass while you suck him off before he tells you "Get on...
      scene.text(`${((s as any).boydesc ?? 0)} paws at your ass while you suck him off before he tells you "Get on your back, ${((s as any).pcs_nickname ?? 0)}. I'm going to fill you up."`);
      if (((s as any).belyvag ?? 0) === 2) {
        // TODO-QSP: dynamic text: <<$boydesc>> looks down on you as you're sucking. He pulls out his cock, lifts y...
        scene.text(`${((s as any).boydesc ?? 0)} looks down on you as you're sucking. He pulls out his cock, lifts you up and throws you onto the bed. "Show me your ass, ${((s as any).pcs_nickname ?? 0)}."`);
        scene.actions([
          { label: 'Get on all fours', goto: ['BelSex', 'doggy'] },
        ]);
      } else {
        // TODO-QSP: dynamic text: <<$boydesc>> lies down on his back and begins playing with his cock waiting for ...
        scene.text(`${((s as any).boydesc ?? 0)} lies down on his back and begins playing with his cock waiting for you to straddle him.`);
        scene.actions([
          { label: 'Ride him', goto: ['BelSex', 'cowgirl'] },
        ]);
      }
      scene.actions([
        { label: 'Lie down on your back', goto: ['BelSex', 'vaginal2'] },
      ]);
    }
  }
  scene.build();
}

export const BelSex: LocationDef = {
  name: 'BelSex',
  title: 'Not daring to make him more upset, you make sure your teeth ',
  region: 'other',
  description: ['Not daring to make him more upset, you make sure your teeth don\'t get in the way and open your mouth even wider.'],
  enter: enter,
};
