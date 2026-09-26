import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterDMother1(s: GameState, scene: SceneBuilder): void {
  scene.text('You try having a talk with your mother, but she dislikes you way too much to even pretend to be interested in what you have to say. After a while, you give up and leave her alone. Maybe she\'ll be in a better mood later.');
  if (((s as any).mothersorryday ?? 0)!==((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Apologize', handler: (st: GameState) => {
    (st as any).mothersorryday = ((st as any).daystart ?? 0);
    ((st as any).npc_rel = (st as any).npc_rel ?? {})['A29'] = ((st as any).npc_rel['A29'] ?? 0) + ((((st as any).pcs_intel ?? 0)/10)+(((st as any).pcs_apprnc ?? 0)/20));
    qspCall(st, 'stat', '');
    scene.text('You profusely apologize to your mother and promise you\'ll try to be a better person. Even though she\'s still upset with you, you can tell her attitude towards you is slightly milder than before.');
    scene.actions([
      { label: 'Move away from her', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterDMother2(s: GameState, scene: SceneBuilder): void {
  scene.text('You try to have a talk with your mother, but her answers are really short and she sounds kind of annoyed. After a few minutes she cuts the conversation short, saying she has other things to do now.');
  if (((s as any).mothersorryday ?? 0)!==((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Try to get on her good side', handler: (st: GameState) => {
    (st as any).mothersorryday = ((st as any).daystart ?? 0);
    ((st as any).npc_rel = (st as any).npc_rel ?? {})['A29'] = ((st as any).npc_rel['A29'] ?? 0) + ((((st as any).pcs_intel ?? 0)/10)+(((st as any).pcs_apprnc ?? 0)/20));
    qspCall(st, 'stat', '');
    scene.text('You cling onto your mother and try to butter her up a little, talking about things she enjoys. This actually gets her to engage in conversation with you and after a while she seems to be a bit friendlier towards you.');
    scene.actions([
      { label: 'Move away from her', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterDMother3(s: GameState, scene: SceneBuilder): void {
  (s as any).motherTalk = 0;
  if (((s as any).motherTalk ?? 0) === 1) {
    scene.text(`You have a chat with your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')}, and she talks about how she and her friends used to make fun of the teachers at school when she was young.`);
  }
  if (((s as any).motherTalk ?? 0) === 2) {
    scene.text(`You barely have any memories of your real father, and are curious about him. When you see your mother in the kitchen you decide to ask: "${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')}… about my real father… what was he like? What happened between you two?"`);
    scene.text('You seem to have struck a sore spot. Your mother\'s face saddens, and after a few seconds she replies: "I have no idea where Mikhail is and what he does now, I haven\'t seen him in many years. We went to the same school when we were young, and were dating back then… nothing serious. Things weren\'t great between us, but then I got pregnant with your sister Anya. Our parents forced us to get married. We tried to make the most of it, and for a while things didn\'t seem so bad. A few months after I had you, we got into a huge argument though. We decided we couldn\'t live together any more, and got divorced." You can\'t help but notice she won\'t tell you what the argument was about, but you don\'t interrupt her. It\'s rare enough to get her to talk about your real father as it is.');
    scene.text('"A year later I married Vladimir, your stepfather. We had Kolka together, but Vladimir always treated you and Anya as if they were his own daughters too. He looked after you, bathed you, told you stories at night and took you for walks whenever he could." Those memories seem to have cheered her up, and she has a serene smile on her face. "Vladimir really is a wonderful man…" she adds, while you thank her for the story and let her get back to what she was doing.');
  }
  if (((s as any).motherTalk ?? 0) === 3) {
    scene.text(`You have a chat with your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')}, and she talks about how to properly apply and remove make-up and how to care for your skin.`);
  }
  if (((s as any).motherTalk ?? 0) === 4) {
    scene.text(`You have a chat with your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')}, and she tells you how she likes to go to the village and see the countryside.`);
  }
  if (((s as any).motherTalk ?? 0) === 5) {
    scene.text(`You have a chat with your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')}, and she tells you that the market is a great place to find a lot of cheap and useful things.`);
  }
  if (((s as any).motherTalk ?? 0) === 6) {
    scene.text(`You have a chat with your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')}, and she tells you that she previously worked as a salesgirl at the market. The wages were rather poor however, and when she got harassed by Gopniks during her work one too many times she quit.`);
  }
  if (((s as any).motherTalk ?? 0) === 7) {
    scene.text(`You have a chat with your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')}, and she tells you how she misses her youth and envies you.`);
  }
  if (((s as any).motherTalk ?? 0) === 8) {
    scene.text(`You have a chat with your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')}, and she tells you how she was angry with Anya, when she decided not to go to the university.`);
  }
  if (((s as any).motherTalk ?? 0) === 9) {
    scene.text(`You have a chat with your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')}, and she tells you that education is very important and that she hopes you won't make the same mistake your sister made by not going to the university.`);
  }
  if (((s as any).motherTalk ?? 0) === 10) {
    scene.text(`You have a chat with your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')}, and she tells you she had to go to the tailor at the garment factory to get some clothes adjusted after she had went up a few sizes. She proudly added that she had to go back and have them readjusted again when she lost the weight a few months later.`);
  }
  scene.build();
}

function enterDMother4(s: GameState, scene: SceneBuilder): void {
  (s as any).result = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/characters/pavlovsk/resident/mom/posuda' + (Math.floor(Math.random() * 3) + 1) + '.jpg"></center><br>Your <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027mother\u0027, \u0027\u0027); return false;">' + (((s as any).npc_nickname ?? 0)?.['A29']) + '</a> stands near the sink, washing dishes.';
  scene.build();
}

function enterDMother5(s: GameState, scene: SceneBuilder): void {
  (s as any).result = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/characters/pavlovsk/resident/mom/gotovka.jpg"></center><br>Your <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027mother\u0027, \u0027\u0027); return false;">' + (((s as any).npc_nickname ?? 0)?.['A29']) + '</a> is preparing meals.';
  scene.build();
}

function enterDMother6(s: GameState, scene: SceneBuilder): void {
  (s as any).result = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/characters/pavlovsk/resident/mom/tea.jpg"></center><br>Your <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027mother\u0027, \u0027\u0027); return false;">' + (((s as any).npc_nickname ?? 0)?.['A29']) + '</a> is drinking tea.';
  scene.build();
}

function enterDMother7(s: GameState, scene: SceneBuilder): void {
  (s as any).result = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/characters/pavlovsk/resident/mom/prost' + (Math.floor(Math.random() * 11) + 1) + '.jpg"></center><br>Your <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027mother\u0027, \u0027\u0027); return false;">' + (((s as any).npc_nickname ?? 0)?.['A29']) + '</a> is busy in the kitchen and unaware of your presence.';
  scene.build();
}

function enterDMother8(s: GameState, scene: SceneBuilder): void {
  (s as any).result = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/characters/pavlovsk/resident/mom/uborka' + (Math.floor(Math.random() * 3) + 1) + '.jpg"></center><br>Your <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027mother\u0027, \u0027\u0027); return false;">' + (((s as any).npc_nickname ?? 0)?.['A29']) + '</a> is cleaning with a broom in her hand.';
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'd_mother[1]':
      enterDMother1(s, scene);
      break;
    case 'd_mother[2]':
      enterDMother2(s, scene);
      break;
    case 'd_mother[3]':
      enterDMother3(s, scene);
      break;
    case 'd_mother[4]':
      enterDMother4(s, scene);
      break;
    case 'd_mother[5]':
      enterDMother5(s, scene);
      break;
    case 'd_mother[6]':
      enterDMother6(s, scene);
      break;
    case 'd_mother[7]':
      enterDMother7(s, scene);
      break;
    case 'd_mother[8]':
      enterDMother8(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const dinmother: LocationDef = {
  name: 'dinmother',
  title: 'You try having a talk with your mother, but she dislikes you',
  region: 'other',
  enter: enter,
};
