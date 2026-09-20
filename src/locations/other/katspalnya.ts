import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).loc_arg = 'start';
  (s as any).loc = 'katspalnya';
  (s as any).location_type = 'private';
  (s as any).locclass = 'bedr';
  (s as any).menu_loc = 'katspalnya';
  (s as any).menu_arg = 'start';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Katja\'s apartment</b></center>');
  scene.img('images/characters/city/katja/bedroom.jpg');
  scene.text('Katja\'s apartment. It\'s mostly just one large room, with a huge bed in it. There\'s a small couch to the side.');
  if (((s as any).hour ?? 0) >= 18  &&  ((s as any).hour ?? 0) < 23) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027katspalnya/u0027, /u0027kat/u0027); return false;">Kat</a> is sitting on the couch. She\'s watching TV.');
  }
  if (((s as any).hour ?? 0) >= 23  ||  ((s as any).hour ?? 0) < 6) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027katspalnya/u0027, /u0027katslip/u0027); return false;">Kat</a> is sound asleep in her huge bed.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave Kat\'s apartment', goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enterKatslip(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  if (((s as any).katjob ?? 0) === 0  &&  ((s as any).npc_rel ?? 0)?.['A219'] > 60) {
    qspGoto(s, 'katspalnya', 'katjobs');
  }
  scene.img('images/characters/city/katja/kat.jpg');
  // TODO-QSP: dynamic text: When you awaken Kat, she rubs her eyes tiredly: "Hey, <<$pcs_nickname>>… what''s...
  scene.text(`When you awaken Kat, she rubs her eyes tiredly: "Hey, ${((s as any).pcs_nickname ?? '')}… what's up?"`);
  if (((s as any).npc_rel ?? 0)?.['A219'] > 50) {
    scene.actions([
      { label: 'Seduce her', goto: ['lezbsex', 'start'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Chat with her for a while', goto: ['katspalnya', 'start'] },
  ]);
  scene.build();
}

function enterKat(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  if (((s as any).katjob ?? 0) === 0  &&  ((s as any).npc_rel ?? 0)?.['A219'] > 60) {
    qspGoto(s, 'katspalnya', 'katjobs');
  }
  scene.img('images/characters/city/katja/kat.jpg');
  // TODO-QSP: dynamic text: Kat smiles when she sees you approach and says cheerfully: "<<$pcs_nickname>>, h...
  scene.text(`Kat smiles when she sees you approach and says cheerfully: "${((s as any).pcs_nickname ?? '')}, hi! How's it going? Come, sit with me!"`);
  if (((s as any).npc_rel ?? 0)?.['A219'] > 50) {
    scene.actions([
      { label: 'Seduce her', goto: ['lezbsex', 'start'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Make up an excuse and leave', goto: ['katspalnya', 'start'] },
    { label: 'Chat with Kat', handler: (st: GameState) => {
    if ((!((st as any).telkat ?? 0))) {
      (st as any).telkat = 1;
    }
    qspCall(st, 'npc_relationship', 'modify', 'A219', 1);
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    scene.img('images/characters/city/katja/kat.jpg');
    scene.text('You talk with Kat for half an hour, occasionally glancing at the TV. She\'s a lot of fun to be around.');
    scene.actions([
      { label: 'Finish', goto: ['katspalnya', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterKatjobs(s: GameState, scene: SceneBuilder): void {
  (s as any).katjob = 1;
  ((s as any).job_hiring_step = (s as any).job_hiring_step ?? {})['city_hospital_nurse'] = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  scene.img('images/characters/city/katja/kat.jpg');
  scene.text('Kat talks about her job for a while, and then suggests: "By the way… if you want, I can put in a good word for you! Maybe you could work at the clinic as well!"');
  // TODO-QSP: end
  scene.actions([
    { label: '"But I\'m not qualified to work as a nurse!"', handler: (st: GameState) => {
    scene.text('You shrug off the idea at first, saying: "But I\'m not a nurse! I wouldn\'t know what to do!"');
    scene.text('Kat laughs and says: "Oh, come on! Do you think I knew what I was doing when I started? Just wear the fancy coat and be there, you\'ll learn as you go! It\'ll be fun, I promise! We could have so much fun, working together!"');
    scene.text('"Well, okay, I\'ll think about it!" you say, earning you an enthusiastic hug and a "Yay!" cheer from Kat. How bad could it be?');
    scene.actions([
      { label: 'Continue', goto: ['katspalnya', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).sexloc = 'katspalnya';
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'katslip':
      enterKatslip(s, scene);
      break;
    case 'kat':
      enterKat(s, scene);
      break;
    case 'katjobs':
      enterKatjobs(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const katspalnya: LocationDef = {
  name: 'katspalnya',
  title: 'Katja\'s apartment',
  region: 'other',
  locationType: 'private',
  locclass: 'bedr',
  enter: enter,
};
