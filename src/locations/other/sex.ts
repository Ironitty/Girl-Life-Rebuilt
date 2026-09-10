import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).sexstart = 1;
  (s as any).sexvar = Math.floor(Math.random() * 4) + 3;
  (s as any).guy = ((s as any).guy ?? 0) + (1);
  qspCall(s, 'dinsex2', 'stamina_npc');
  scene.img('images/locations/shared/sex/sexrand/kiss.jpg');
  scene.text('You kiss for a while. It feels nice, but you want more!');
  qspCall(s, 'stat', '');
  (s as any).picrand = Math.floor(Math.random() * 2) + 0;
  // TODO-QSP: xgt 'sex', 'var'
  scene.build();
}

function enterVar(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).textrand = Math.floor(Math.random() * 4) + 1;
  if (((s as any).SexTypeCheck ?? 0) === 0  &&  ((s as any).picrand ?? 0) > 1) {
    (s as any).SexTypeCheck = 1;
    (s as any).BlowBan = qspUntranslated(s, "arrpos('BlowArray', picrand)", { location: "sex" });
    (s as any).CooneyBan = qspUntranslated(s, "arrpos('CooneyArray', picrand)", { location: "sex" });
    (s as any).MissionBan = qspUntranslated(s, "arrpos('MissionArray', picrand)", { location: "sex" });
    (s as any).CowgirlBan = qspUntranslated(s, "arrpos('CowgirlArray', picrand)", { location: "sex" });
    (s as any).DoggyBan = qspUntranslated(s, "arrpos('DoggyArray', picrand)", { location: "sex" });
    (s as any).SidewaysBan = qspUntranslated(s, "arrpos('SidewaysArray', picrand)", { location: "sex" });
    (s as any).AnalBan = qspUntranslated(s, "arrpos('AnalArray', picrand)", { location: "sex" });
  }
  if (((s as any).BlowBan ?? 0) <= 0) {
    // TODO-QSP: act 'Give him a blowjob': gt 'sex', 'minet'
  }
  if (((s as any).CooneyBan ?? 0) <= 0) {
    // TODO-QSP: act 'Cooney': gt 'sex', 'kuni'
  }
  if (((s as any).MissionBan ?? 0) <= 0) {
    // TODO-QSP: act 'Missionary': gt 'sex', 'vag'
  }
  if (((s as any).CowgirlBan ?? 0) <= 0) {
    // TODO-QSP: act 'Cowgirl': gt 'sex', 'nae'
  }
  if (((s as any).DoggyBan ?? 0) <= 0) {
    // TODO-QSP: act 'Doggy style': gt 'sex', 'rak'
  }
  if (((s as any).SidewaysBan ?? 0) <= 0) {
    // TODO-QSP: act 'Sideways': gt 'sex', 'bok'
  }
  if (((s as any).AnalBan ?? 0) <= 0) {
    // TODO-QSP: act 'In the ass': gt 'sex', 'anal'
  }
  scene.build();
}

function enterMinet(s: GameState, scene: SceneBuilder): void {
  (s as any).sexvar = ((s as any).sexvar ?? 0) - (1);
  qspCall(s, 'dinsex2', 'stamina_npc');
  (s as any).pos = 1;
  if (((s as any).sxbj ?? 0) === 0) {
    if (((s as any).svidboysex ?? 0) === 1) {
      (s as any).bja = ((s as any).bja ?? 0) + (1);
    }
    (s as any).sxbj = 1;
  }
  scene.img(`images/locations/shared/sex/sexrand/minet${((s as any).picrand ?? 0)}.jpg`);
  if (((s as any).textrand ?? 0) === 1) {
    scene.text('You take his member in your hand and pull his foreskin back, exposing the shiny head underneath. Giving him a sweet smile, you close your lips around it and run your tongue over the tip. You then continue to suck his cock vigorously, teasing him with your tongue and fondling his balls with your fingers. He moans blissfully while you service him with your mouth, not taking his eyes off you.');
  } else {
    scene.text('You kneel down and place your hand on his nearly fully erect trunk. You smile at him shyly and mutter, "That\'s a nice cock you have there…" before closing your lips around the tip and sucking him off.');
    if (((s as any).textrand ?? 0) === 3) {
      scene.text('You dart your tongue all over his shaft, licking him eagerly all the way from the tip of his cock to and including his testicles. Then your tender lips close around the well-engorged head, and you slowly take more and more of his length down your throat while you stroke the rest of his shaft that doesn\'t fit in your mouth with your hand.');
    } else {
      scene.text('You wrap your delicate fingers around his hard cock and guide it to your mouth, closing your lips around the tip. You try to take as much of his length down your throat as you can, gently caressing your own clit while you service him.');
    }
    qspCall(s, 'arousal', 'bj', 10);
    qspCall(s, 'stat', '');
    if (((s as any).sexvar ?? 0) <= 0) {
      (s as any).sexvar = 0;
      // TODO-QSP: xgt 'sex', 'end'
    } else {
      scene.text('<br>The man groans that he will cum soon.');
    }
    // TODO-QSP: xgt 'sex', 'var'
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'var':
      enterVar(s, scene);
      break;
    case 'minet':
      enterMinet(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const sex: LocationDef = {
  name: 'sex',
  title: 'You kiss for a while. It feels nice, but you want more!',
  region: 'other',
  description: ['You kiss for a while. It feels nice, but you want more!'],
  enter: enter,
};
