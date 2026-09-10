import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterMirakiss(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A64');
  (s as any).MiraVars['arousal'] = ((s as any).MiraVars['arousal'] ?? 0) + (10);
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  scene.img('images/characters/gadukino/mira/mirakiss\'+rand(1, 4)+\'.jpg');
  (s as any).temp = Math.floor(Math.random() * 4) + 1;
  if (((s as any).temp ?? 0) === 1) {
    scene.text('You passionately bite Mira\'s luscious lips. She responds to your kiss no less passionately, causing you to moan out of joy.');
  }
  if (((s as any).temp ?? 0) === 2) {
    scene.text('You kiss Mira as her soft lips, and slim, nimble tongue penetrate your mouth.');
  }
  if (((s as any).temp ?? 0) === 3) {
    // TODO-QSP: dynamic text: Mira gently kisses your <<$pc_desc['lips']>> lips, and you feel the thrill of he...
    scene.text(`Mira gently kisses your ${((s as any).pc_desc ?? 0)?.['lips']} lips, and you feel the thrill of her kiss washing over you.`);
  }
  if (((s as any).temp ?? 0) === 4) {
    // TODO-QSP: dynamic text: Mira passionately kisses your <<$pc_desc['lips']>> lips, and you return the kiss...
    scene.text(`Mira passionately kisses your ${((s as any).pc_desc ?? 0)?.['lips']} lips, and you return the kiss, feeling exhilaration in every part of your body.`);
  }
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'arousal', 'kiss', (-10), 'lesbian');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_horny ?? 0) < 20  ||  ((s as any).MiraVars ?? 0)?.['arousal'] < 20) {
    scene.actions([
      { label: 'Continue kissing', goto: ['mirasex', 'mirakiss'] },
      { label: 'stop kissing', handler: (st: GameState) => {
    scene.img('images/characters/gadukino/mira/mirakiss\'+rand(1, 4)+\'.jpg');
    scene.text('you give her one last kiss and tell her that you just aren\'t in the mood right now and pull back');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'say goodbye', goto: ['gad_meadow', 'start'] },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Escalate', goto: ['mirasex', 'foreplay'] },
    ]);
  }
  scene.build();
}

function enterForeplay(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/gadukino/mira/sex/miraforeplay\'+rand(1, 4)+\'.jpg');
  (s as any).temp = Math.floor(Math.random() * 3) + 1;
  if (((s as any).temp ?? 0) === 1) {
    scene.text('You kiss Mira passionately, stroking her crotch and arousing you even more.');
  }
  if (((s as any).temp ?? 0) === 2) {
    scene.text('You give Mira a gentle kiss while stroking her pussy through her panties…');
  }
  if (((s as any).temp ?? 0) === 3) {
    // TODO-QSP: dynamic text: You kiss Mira, your <<$pc_desc['lips']>> lips touching her lips in a hot kiss, a...
    scene.text(`You kiss Mira, your ${((s as any).pc_desc ?? 0)?.['lips']} lips touching her lips in a hot kiss, and your hand on her crotch making her moan excitedly.`);
  }
  scene.text('Mira starts to unbutton your top.');
  qspCall(s, 'arousal', 'foreplay', 5, 'lesbian');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Allow her to continue', handler: (st: GameState) => {
    scene.img('images/characters/gadukino/mira/sex/miraforeplay\'+rand(5, 7)+\'.jpg');
    (s as any).temp = Math.floor(Math.random() * 3) + 1;
    if (((s as any).temp ?? 0) === 1) {
      // TODO-QSP: dynamic text: Mira fondles your <<$titsize>> breasts, gently squeezing them in her hands and k...
      scene.text(`Mira fondles your ${((s as any).titsize ?? 0)} breasts, gently squeezing them in her hands and kissing them.`);
    }
    if (((s as any).temp ?? 0) === 2) {
      scene.text('You feel her hot breath on your chest and her slick tongue caressing your nipples and giving you great pleasure.');
    }
    if (((s as any).temp ?? 0) === 3) {
      scene.text('Mira fondles your breasts, gently squeezing them in her hands. Then, she kisses and teases your nipples with her tongue.');
    }
    (s as any).MiraVars['arousal'] = ((s as any).MiraVars['arousal'] ?? 0) + (10);
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    qspCall(s, 'arousal', 'foreplay', 5, 'lesbian');
    qspCall(s, 'stat', '');
    if (((s as any).npc_rel ?? 0)?.['A60'] < 30) {
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'arousal', 'end');
  }, goto: ['gadukino', ''] },
      ]);
    } else {
      scene.actions([
        { label: 'Lick Mira', goto: ['mirasex', 'lickmira_start'] },
      ]);
    }
    scene.actions([
      { label: 'Continue', goto: ['mirasex', 'horny_talk'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterHornyTalk(s: GameState, scene: SceneBuilder): void {
  (s as any).MiraVars['arousal'] = ((s as any).MiraVars['arousal'] ?? 0) + (5);
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
  qspCall(s, 'stat', '');
  scene.img('images/characters/gadukino/mira/sex/horny_talk.jpg');
  scene.text('Mira caught your gaze and smiled. She turns you around and lifts your top so she can grope your breast.');
  scene.text('You hold a tree branch for support and let her. After a few minutes, she guides your free hand into her panties.');
  scene.text('You feel she is pretty wet right now! She lets your hand stay in her panties for another couple of moments.');
  qspCall(s, 'arousal', 'foreplay', 5, 'lesbian');
  if (((s as any).npc_rel ?? 0)?.['A60'] < 15) {
    scene.text('"Get the fuck off me, you slut." Mira says, pulling away. She doesn\'t sound convincing, but you must improve your relationship to take things further.');
    scene.text('She walks home alone, singing a song. You watch her for a moment before heading back to the village.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'arousal', 'end');
  }, goto: ['gadukino', ''] },
    ]);
  } else {
    scene.text('Mira moans in enjoyment and then starts to pull at your panties.');
    scene.text('You help her pull them down, and she steps out of them.');
    scene.actions([
      { label: 'Continue', goto: ['mirasex', 'mirafinger'] },
    ]);
  }
  qspCall(s, 'stat', '');
  scene.build();
}

function enterMirafinger(s: GameState, scene: SceneBuilder): void {
  (s as any).MiraVars['arousal'] = ((s as any).MiraVars['arousal'] ?? 0) + (5);
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  qspCall(s, 'stat', '');
  scene.img('images/characters/gadukino/mira/sex/mirafinger_dog\'+rand(1, 4)+\'.jpg');
  scene.text('Mira bends you over and slowly slides her fingers inside you.');
  // TODO-QSP: $textdog[4]+$textfinger[rand(1, 3)]+$text_emotions[iif(pcs_horny < 60, 1, iif(pcs_horny < 80, 2, 4))...
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'arousal', 'vaginal_finger', (-10), 'lesbian');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Moan', goto: ['mirasex', 'miralick_dog'] },
  ]);
  scene.build();
}

function enterMiralickDog(s: GameState, scene: SceneBuilder): void {
  (s as any).MiraVars['arousal'] = ((s as any).MiraVars['arousal'] ?? 0) + (5);
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  qspCall(s, 'stat', '');
  if (((s as any).pcs_horny ?? 0) >= 50  &&  (Math.floor(Math.random() * 3) + 0) !== 0) {
    (s as any).you_orgasm = 1;
    scene.img('images/characters/gadukino/mira/sex/miralick_dog_cum.jpg');
  } else {
    scene.img('images/characters/gadukino/mira/sex/miralick_dog\'+rand(1, 2)+\'.jpg');
  }
  // TODO-QSP: $textdog[rand(1, 3)] + $textlick[iif(MiraVars['cuni_given'] < 10, rand(1, 3), rand(4, 6))] + $text_e...
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'arousal', 'cuni', (-10), 'lesbian');
  qspCall(s, 'stat', '');
  if (((s as any).miraorgasm ?? 0) === 0  &&  (!((s as any).you_orgasm ?? 0))) {
    scene.actions([
      { label: 'Get on your knees', goto: ['mirasex', 'lickmira_mis2'] },
      { label: 'Continue', goto: ['mirasex', 'miralick_dog'] },
      { label: 'Stand up', goto: ['mirasex', 'miralick_stand2'] },
      { label: 'Lie on the ground', goto: ['mirasex', '69_1'] },
    ]);
  } else {
    if (((s as any).miraorgasm ?? 0) === 0  &&  ((s as any).you_orgasm ?? 0) === 1) {
      scene.actions([
        { label: 'It\'s Mira\'s turn', goto: ['mirasex', 'lickmira_mis2'] },
      ]);
    } else {
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    qspCall(s, 'mirasex', 'end');
  } },
      ]);
    }
    scene.actions([
      { label: 'Continue', goto: ['mirasex', 'miralick_dog'] },
      { label: 'Stand up', goto: ['mirasex', 'miralick_stand2'] },
    ]);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'mirakiss':
      enterMirakiss(s, scene);
      break;
    case 'foreplay':
      enterForeplay(s, scene);
      break;
    case 'horny_talk':
      enterHornyTalk(s, scene);
      break;
    case 'mirafinger':
      enterMirafinger(s, scene);
      break;
    case 'miralick_dog':
      enterMiralickDog(s, scene);
      break;
    default:
      enterMirakiss(s, scene);
      break;
  }
}

export const mirasex: LocationDef = {
  name: 'mirasex',
  title: 'You passionately bite Mira\'s luscious lips. She responds to ',
  region: 'other',
  description: ['You passionately bite Mira\'s luscious lips. She responds to your kiss no less passionately, causing you to moan out of joy.'],
  enter: enter,
};
