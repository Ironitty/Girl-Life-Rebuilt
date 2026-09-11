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
    if (((s as any).miraorgasm ?? 0) === 1  &&  (!((s as any).you_orgasm ?? 0))) {
      scene.actions([
        { label: 'Continue', goto: ['mirasex', 'miralick_dog'] },
        { label: 'Stand up', goto: ['mirasex', 'miralick_stand2'] },
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
    }
  }
  scene.build();
}

function enterLickmiraStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).MiraVars ?? 0)?.['had_sex'] === 0) {
    (s as any).MiraVars['had_sex'] = 1;
    (s as any).girl = ((s as any).girl ?? 0) + (1);
  }
  (s as any).MiraVars['arousal'] = ((s as any).MiraVars['arousal'] ?? 0) + (10);
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
  qspCall(s, 'stat', '');
  scene.img('images/characters/gadukino/mira/sex/lickmira_start.jpg');
  if (((s as any).stat ?? 0)?.['lesbian_count'] < 10) {
    scene.text('You gently touch Mira\'s panties and begin pulling them down. She is excitedly hot and wiggles her ass to help you get them off faster…');
  } else {
    scene.text('Kneeling down, you reached for Mira\'s panties and began pulling them off her. She is excitedly hot and wiggles her ass to help you get them off faster…');
  }
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'arousal', 'cuni_give', (-10), 'lesbian');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Lick', goto: ['mirasex', 'lickmira_mis2'] },
  ]);
  scene.build();
}

function enterLickmiraMis2(s: GameState, scene: SceneBuilder): void {
  (s as any).MiraVars['arousal'] = ((s as any).MiraVars['arousal'] ?? 0) + (10);
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
  qspCall(s, 'stat', '');
  if (((s as any).MiraVars ?? 0)?.['arousal'] >= 50  &&  (Math.floor(Math.random() * 3) + 0) !== 0) {
    (s as any).miraorgasm = 1;
    scene.img('images/characters/gadukino/mira/sex/lickmira_mis_cum.jpg');
    // TODO-QSP: $textmis[rand(1, 3)]+$textlick[iif(stat['lesbian_count'] < 10, rand(7, 9), rand(10, 12))]+$text_emot...
    qspCall(s, 'mirasex', 'miralick_orgasm');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'arousal', 'cuni_give', (-10), 'lesbian');
    qspCall(s, 'stat', '');
    if ((!((s as any).you_orgasm ?? 0))) {
      scene.text('After Mira\'s orgasms, you get out between her legs and wipe her juices off your face. Then, you clean yourself up and head home.');
    }
  } else {
    if (((s as any).MiraVars ?? 0)?.['arousal'] < 50) {
      scene.img('images/characters/gadukino/mira/sex/lickmira_mis\'+rand(1, 3)+\'.jpg');
      // TODO-QSP: $textmis[rand(1, 3)]+$textlick[iif(stat['lesbian_count'] < 10, rand(7, 9), rand(10, 12))]+$text_emot...
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'arousal', 'cuni_give', (-10), 'lesbian');
      qspCall(s, 'stat', '');
    }
  }
  if (((s as any).miraorgasm ?? 0) === 0  &&  (!((s as any).you_orgasm ?? 0))) {
    scene.actions([
      { label: 'Continue licking Mira', goto: ['mirasex', 'lickmira_mis2'] },
      { label: 'Lie on the ground', goto: ['mirasex', '69_1'] },
      { label: 'Stand up', goto: ['mirasex', 'miralick_stand2'] },
      { label: 'Get on all fours', goto: ['mirasex', 'miralick_dog'] },
    ]);
  } else {
    if (((s as any).miraorgasm ?? 0) === 1  &&  (!((s as any).you_orgasm ?? 0))) {
      scene.actions([
        { label: 'Stand up', goto: ['mirasex', 'miralick_stand2'] },
        { label: 'Get on all fours', goto: ['mirasex', 'miralick_dog'] },
      ]);
    } else {
      if (((s as any).miraorgasm ?? 0) === 0  &&  ((s as any).you_orgasm ?? 0) === 1) {
        scene.actions([
          { label: 'Continue licking Mira', goto: ['mirasex', 'lickmira_mis2'] },
        ]);
      } else {
        scene.text('After Mira\'s orgasms, you get out between her legs and wipe her juices off your face. Then, you clean yourself up and head back to the village with Mira.');
        scene.actions([
          { label: 'Leave', handler: (st: GameState) => {
    qspCall(s, 'mirasex', 'end');
  } },
        ]);
      }
    }
  }
  scene.build();
}

function enterMiralickStart(s: GameState, scene: SceneBuilder): void {
  (s as any).MiraVars['cuni_given'] = ((s as any).MiraVars['cuni_given'] ?? 0) + (1);
  if (((s as any).pantyworntype ?? 0) !== 'none') {
    scene.img('images/characters/gadukino/mira/sex/mira_start_tanga1.jpg');
    scene.text('Mira pulls down your panties with a smile while looking you in the eyes. You lean against the tree, close your eyes, and wait for her to continue…');
  } else {
    scene.img('images/characters/gadukino/mira/sex/mira_start_tanga0.jpg');
    // TODO-QSP: dynamic text: Dropping to her knees and not finding any panties, Mira licked your <<$pc_desc['...
    scene.text(`Dropping to her knees and not finding any panties, Mira licked your ${((s as any).pc_desc ?? 0)?.['pussy']} vagina, sampling its taste and causing an involuntary moan of pleasure from you. You lean against the tree, close your eyes, and wait for her to continue…`);
  }
  qspCall(s, 'arousal', 'foreplay', 5, 'lesbian');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Moan', goto: ['mirasex', 'miralick_stand2'] },
  ]);
  scene.build();
}

function enterMiralickOrgasm(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_horny ?? 0) >= 50) {
  }
  scene.build();
}

function enter69_1(s: GameState, scene: SceneBuilder): void {
  (s as any).MiraVars['arousal'] = ((s as any).MiraVars['arousal'] ?? 0) + (10);
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  if (((s as any).MiraVars ?? 0)?.['arousal'] >= 50  &&  ((s as any).pcs_horny ?? 0) >= 50  &&  (Math.floor(Math.random() * 3) + 0) !== 0) {
    (s as any).miraorgasm = 1;
    (s as any).MiraVars['arousal'] = 0;
    scene.img('images/characters/gadukino/mira/sex/lickmira_69_cum\'+rand(1, 2)+\'.jpg');
    // TODO-QSP: $text69[4]+$textlick[iif(stat['lesbian_count'] < 10, rand(7, 9), rand(10, 12))]+$text_emotions[iif(p...
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'arousal', 'cuni', (-10), 'lesbian');
    qspCall(s, 'arousal', 'cuni_give', (-10), 'lesbian');
    qspCall(s, 'stat', '');
  } else {
    if (((s as any).MiraVars ?? 0)?.['arousal'] < 50  &&  ((s as any).pcs_horny ?? 0) >= 50  &&  (Math.floor(Math.random() * 3) + 0) !== 0) {
      (s as any).you_orgasm = 1;
      scene.img('images/characters/gadukino/mira/sex/lickmira_69_cum1.jpg');
      // TODO-QSP: $text69[4] + $textlick[iif(stat['lesbian_count'] < 10, rand(7, 9), rand(10, 12))] + $text_emotions[i...
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'arousal', 'cuni', (-10), 'lesbian');
      qspCall(s, 'arousal', 'cuni_give', (-10), 'lesbian');
      qspCall(s, 'stat', '');
    } else {
      if (((s as any).MiraVars ?? 0)?.['arousal'] >= 50  &&  ((s as any).pcs_horny ?? 0) < 50  &&  (Math.floor(Math.random() * 3) + 0) !== 0) {
        (s as any).miraorgasm = 1;
        (s as any).MiraVars['arousal'] = 0;
        scene.img('images/characters/gadukino/mira/sex/lickmira_69_cum2.jpg');
        // TODO-QSP: $text69[4]+$textlick[iif(stat['lesbian_count'] < 10, rand(7, 9), rand(10, 12))]+$text_emotions[iif(p...
        scene.text('After a while, Mira cums, her juices covering your face. For a minute, she rides the wave of pleasure before she turns her attention to you…');
        (s as any).minut = ((s as any).minut ?? 0) + 5;
        qspCall(s, 'arousal', 'cuni', (-10), 'lesbian');
        qspCall(s, 'arousal', 'cuni_give', (-10), 'lesbian');
        qspCall(s, 'stat', '');
      } else {
        scene.img('images/characters/gadukino/mira/sex/lickmira_69_\'+rand(1, 3)+\'.jpg');
        // TODO-QSP: $text69[4]+$textlick[iif(stat['lesbian_count'] < 10, rand(7, 9), rand(10, 12))]+$text_emotions[iif(p...
        (s as any).minut = ((s as any).minut ?? 0) + 5;
        qspCall(s, 'arousal', 'cuni', (-10), 'lesbian');
        qspCall(s, 'arousal', 'cuni_give', (-10), 'lesbian');
        qspCall(s, 'stat', '');
      }
    }
  }
  if (((s as any).miraorgasm ?? 0) === 0  &&  (!((s as any).you_orgasm ?? 0))) {
    scene.actions([
      { label: 'Continue licking', goto: ['mirasex', '69_1'] },
      { label: 'Get on your knees', goto: ['mirasex', 'lickmira_mis2'] },
      { label: 'Stand up', goto: ['mirasex', 'miralick_stand2'] },
      { label: 'Get on all fours', goto: ['mirasex', 'miralick_dog'] },
    ]);
  } else {
    if (((s as any).miraorgasm ?? 0) === 1  &&  (!((s as any).you_orgasm ?? 0))) {
      scene.actions([
        { label: 'Stand up', goto: ['mirasex', 'miralick_stand2'] },
        { label: 'Get on all fours', goto: ['mirasex', 'miralick_dog'] },
      ]);
    } else {
      if (((s as any).miraorgasm ?? 0) === 0  &&  ((s as any).you_orgasm ?? 0) === 1) {
        scene.actions([
          { label: 'Get on your knees', goto: ['mirasex', 'lickmira_mis2'] },
        ]);
      } else {
        scene.actions([
          { label: 'Leave', handler: (st: GameState) => {
    qspCall(s, 'mirasex', 'end');
  } },
        ]);
      }
    }
  }
  scene.build();
}

function enterMiralickStand2(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  (s as any).MiraVars['arousal'] = ((s as any).MiraVars['arousal'] ?? 0) + (5);
  if (((s as any).pcs_horny ?? 0) >= 50) {
    (s as any).you_orgasm = 1;
    scene.img('images/characters/gadukino/mira/sex/miralick_stand_cum.jpg');
    // TODO-QSP: $textstand[rand(1, 3)]+$textlick[iif(MiraVars['cuni_given'] < 10, rand(1, 3), rand(4, 6))]+$text_emo...
  } else {
    scene.img('images/characters/gadukino/mira/sex/miralick_stand\'+rand(1, 2)+\'.jpg');
    // TODO-QSP: $textstand[rand(1, 3)]+$textlick[iif(MiraVars['cuni_given'] < 10, rand(1, 3), rand(4, 6))]+$text_emo...
  }
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'arousal', 'cuni', (-10), 'lesbian');
  qspCall(s, 'stat', '');
  if (((s as any).miraorgasm ?? 0) === 0  &&  (!((s as any).you_orgasm ?? 0))) {
    scene.actions([
      { label: 'Continue standing', goto: ['mirasex', 'miralick_stand2'] },
      { label: 'Get on your knees', goto: ['mirasex', 'lickmira_mis2'] },
      { label: 'Lie on the ground', goto: ['mirasex', '69_1'] },
      { label: 'Get on all fours', goto: ['mirasex', 'miralick_dog'] },
    ]);
  } else {
    if (((s as any).miraorgasm ?? 0) === 1  &&  (!((s as any).you_orgasm ?? 0))) {
      scene.actions([
        { label: 'Continue standing', goto: ['mirasex', 'miralick_stand2'] },
        { label: 'Get on all fours', goto: ['mirasex', 'miralick_dog'] },
      ]);
    } else {
      if (((s as any).miraorgasm ?? 0) === 0  &&  ((s as any).you_orgasm ?? 0) === 1) {
        scene.actions([
          { label: 'Get on your knees', goto: ['mirasex', 'lickmira_mis2'] },
        ]);
      } else {
        scene.actions([
          { label: 'Leave', handler: (st: GameState) => {
    qspCall(s, 'mirasex', 'end');
  } },
        ]);
      }
    }
  }
  scene.build();
}

function enterEnd(s: GameState, scene: SceneBuilder): void {
  (s as any).miraorgasm = 0;
  (s as any).you_orgasm = 0;
  qspCall(s, 'arousal', 'end');
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  scene.actions([{ label: 'Continue', goto: ['gadukino', ''] }]);
  scene.build();
}

function enterMiralickFirst(s: GameState, scene: SceneBuilder): void {
  (s as any).MiraVars['cuni_given'] = ((s as any).MiraVars['cuni_given'] ?? 0) + (1);
  if (((s as any).MiraVars ?? 0)?.['had_sex'] === 0) {
    (s as any).MiraVars['had_sex'] = 1;
    (s as any).girl = ((s as any).girl ?? 0) + (1);
  }
  if (((s as any).pantyworntype ?? 0) !== 'none') {
    scene.img('images/characters/gadukino/mira/sex/mira_start_tanga1.jpg');
    scene.text('Kneeling down, Mira timidly reaches for your panties. She locks eyes with you and smiles shyly. You relax against the tree, close your eyes and tremble in anticipation.');
  } else {
    scene.img('images/characters/gadukino/mira/sex/mira_start_tanga0.jpg');
    scene.text('Dropping to her knees and not finding you wearing panties, Mira timidly touches your vagina, causing you an involuntary moan of pleasure. You lean against the tree and close your eyes, waiting for her to continue…');
  }
  qspCall(s, 'arousal', 'foreplay', 5, 'lesbian');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Moan', goto: ['mirasex', 'miralick_stand1'] },
  ]);
  scene.build();
}

function enterMiralickStand1(s: GameState, scene: SceneBuilder): void {
  (s as any).MiraVars['arousal'] = ((s as any).MiraVars['arousal'] ?? 0) + (Math.floor(Math.random() * 6) + 0);
  (s as any).mira_counter = ((s as any).mira_counter ?? 0) + (1);
  qspCall(s, 'stat', '');
  if (((s as any).mira_counter ?? 0) < (Math.floor(Math.random() * 3) + 3)) {
    scene.img('images/characters/gadukino/mira/sex/miralick_stand\'+rand(1, 2)+\'.jpg');
    // TODO-QSP: $textstand[rand(1, 3)]+$textlick[iif(MiraVars['cuni_given'] < 10, rand(1, 3), rand(4, 6))]+$text_emo...
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'arousal', 'cuni', (-10), 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Moan', goto: ['mirasex', 'miralick_stand1'] },
    ]);
  } else {
    scene.img('images/characters/gadukino/mira/sex/miralick_stand_cum.jpg');
    // TODO-QSP: $textstand[rand(1, 3)]+$textlick[iif(MiraVars['cuni_given'] < 10, rand(1, 3), rand(4, 6))]+$text_emo...
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'arousal', 'cuni', (-10), 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    qspCall(st, 'arousal', 'end');
  }, goto: ['gadukino', ''] },
    ]);
  }
  scene.build();
}

function enterLickmiraFirst(s: GameState, scene: SceneBuilder): void {
  if (((s as any).MiraVars ?? 0)?.['had_sex'] === 0) {
    (s as any).MiraVars['had_sex'] = 1;
    (s as any).girl = ((s as any).girl ?? 0) + (1);
  }
  scene.img('images/characters/gadukino/mira/sex/lickmira_start.jpg');
  if (((s as any).stat ?? 0)?.['lesbian_count'] < 10) {
    scene.text('You gently touch Mira\'s panties and begin pulling them down. She is excitedly hot and wiggles her ass to help you get them off faster…');
  } else {
    scene.text('Kneeling down, you reach for Mira\'s panties and begin pulling them off her. She is excitedly hot and wiggles her ass to help you get them off faster…');
  }
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'arousal', 'cuni_give', (-10), 'lesbian');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Lick', goto: ['mirasex', 'lickmira_mis1'] },
  ]);
  scene.build();
}

function enterLickmiraMis1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).MiraVars ?? 0)?.['arousal'] < 50  &&  (!(Math.floor(Math.random() * 2) + 0))) {
    (s as any).MiraVars['arousal'] = ((s as any).MiraVars['arousal'] ?? 0) + (20);
    scene.img('images/characters/gadukino/mira/sex/lickmira_mis\'+rand(1, 3)+\'.jpg');
    // TODO-QSP: $textmis[rand(1, 3)]+$textlick[iif(stat['lesbian_count'] < 10, rand(7, 9), rand(10, 12))]+$text_emot...
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'arousal', 'cuni_give', (-10), 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue licking Mira', goto: ['mirasex', 'lickmira_mis1'] },
    ]);
  } else {
    (s as any).miraorgasm = 1;
    (s as any).MiraVars['arousal'] = 0;
    scene.img('images/characters/gadukino/mira/sex/lickmira_mis_cum.jpg');
    // TODO-QSP: $textmis[rand(1, 3)]+$textlick[iif(stat['lesbian_count'] < 10, rand(7, 9), rand(10, 12))]+$text_emot...
    qspCall(s, 'mirasex', 'miralick_orgasm');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'arousal', 'cuni_give', (-10), 'lesbian');
    qspCall(s, 'stat', '');
    if (((s as any).pcs_horny ?? 0) < 60) {
      scene.text('After Mira\'s orgasms, you get out between her legs and wipe her juices off your face. Then, you clean yourself up and head home.');
    } else {
      scene.text('After Mira\'s orgasms, you get out between her legs and wipe her juices off your face. Then, you clean yourself up and smile at Mira before returning to the village with her.');
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'arousal', 'end');
  }, goto: ['gadukino', ''] },
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
    case 'lickmira_start':
      enterLickmiraStart(s, scene);
      break;
    case 'lickmira_mis2':
      enterLickmiraMis2(s, scene);
      break;
    case 'miralick_start':
      enterMiralickStart(s, scene);
      break;
    case 'miralick_orgasm':
      enterMiralickOrgasm(s, scene);
      break;
    case '69_1':
      enter69_1(s, scene);
      break;
    case 'miralick_stand2':
      enterMiralickStand2(s, scene);
      break;
    case 'end':
      enterEnd(s, scene);
      break;
    case 'miralick_first':
      enterMiralickFirst(s, scene);
      break;
    case 'miralick_stand1':
      enterMiralickStand1(s, scene);
      break;
    case 'lickmira_first':
      enterLickmiraFirst(s, scene);
      break;
    case 'lickmira_mis1':
      enterLickmiraMis1(s, scene);
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
