import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterMirakiss(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A64');
  ((s as any).MiraVars = (s as any).MiraVars ?? {})['arousal'] = ((s as any).MiraVars['arousal'] ?? 0) + (10);
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/characters/gadukino/mira/mirakiss` + (Math.floor(Math.random() * 4) + 1) + '.jpg"></center>');
  (s as any).temp = (Math.floor(Math.random() * 4) + 1);
  if (((s as any).temp ?? 0) === 1) {
    scene.text('You passionately bite Mira\'s luscious lips. She responds to your kiss no less passionately, causing you to moan out of joy.');
  }
  if (((s as any).temp ?? 0) === 2) {
    scene.text('You kiss Mira as her soft lips, and slim, nimble tongue penetrate your mouth.');
  }
  if (((s as any).temp ?? 0) === 3) {
    scene.text(`Mira gently kisses your ${(((s as any).pc_desc ?? 0)?.['lips'] ?? '')} lips, and you feel the thrill of her kiss washing over you.`);
  }
  if (((s as any).temp ?? 0) === 4) {
    scene.text(`Mira passionately kisses your ${(((s as any).pc_desc ?? 0)?.['lips'] ?? '')} lips, and you return the kiss, feeling exhilaration in every part of your body.`);
  }
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'arousal', 'kiss', (-10), 'lesbian');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_horny ?? 0) < 20  ||  ((s as any).MiraVars ?? 0)?.['arousal'] < 20) {
    scene.actions([
      { label: 'Continue kissing', goto: ['mirasex', 'mirakiss'] },
      { label: 'stop kissing', handler: (st: GameState) => {
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/characters/gadukino/mira/mirakiss` + (Math.floor(Math.random() * 4) + 1) + '.jpg"></center>');
    scene.text('you give her one last kiss and tell her that you just aren\'t in the mood right now and pull back');
    qspCall(st, 'arousal', 'end');
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
  scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/characters/gadukino/mira/sex/miraforeplay` + (Math.floor(Math.random() * 4) + 1) + '.jpg"></center>');
  (s as any).temp = (Math.floor(Math.random() * 3) + 1);
  if (((s as any).temp ?? 0) === 1) {
    scene.text('You kiss Mira passionately, stroking her crotch and arousing you even more.');
  }
  if (((s as any).temp ?? 0) === 2) {
    scene.text('You give Mira a gentle kiss while stroking her pussy through her panties…');
  }
  if (((s as any).temp ?? 0) === 3) {
    scene.text(`You kiss Mira, your ${(((s as any).pc_desc ?? 0)?.['lips'] ?? '')} lips touching her lips in a hot kiss, and your hand on her crotch making her moan excitedly.`);
  }
  scene.text('Mira starts to unbutton your top.');
  qspCall(s, 'arousal', 'foreplay', 5, 'lesbian');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Allow her to continue', handler: (st: GameState) => {
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/characters/gadukino/mira/sex/miraforeplay` + (Math.floor(Math.random() * 3) + 5) + '.jpg"></center>');
    (st as any).temp = (Math.floor(Math.random() * 3) + 1);
    if (((st as any).temp ?? 0) === 1) {
      scene.text(`Mira fondles your ${((st as any).titsize ?? '')} breasts, gently squeezing them in her hands and kissing them.`);
    }
    if (((st as any).temp ?? 0) === 2) {
      scene.text('You feel her hot breath on your chest and her slick tongue caressing your nipples and giving you great pleasure.');
    }
    if (((st as any).temp ?? 0) === 3) {
      scene.text('Mira fondles your breasts, gently squeezing them in her hands. Then, she kisses and teases your nipples with her tongue.');
    }
    ((st as any).MiraVars = (st as any).MiraVars ?? {})['arousal'] = ((st as any).MiraVars['arousal'] ?? 0) + (10);
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
    qspCall(st, 'arousal', 'foreplay', 5, 'lesbian');
    qspCall(st, 'stat', '');
    if (((st as any).npc_rel ?? 0)?.['A60'] < 30) {
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'arousal', '');
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
  ((s as any).MiraVars = (s as any).MiraVars ?? {})['arousal'] = ((s as any).MiraVars['arousal'] ?? 0) + (5);
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
    qspCall(st, 'arousal', '');
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
  ((s as any).MiraVars = (s as any).MiraVars ?? {})['arousal'] = ((s as any).MiraVars['arousal'] ?? 0) + (5);
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  qspCall(s, 'stat', '');
  scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/characters/gadukino/mira/sex/mirafinger_dog` + (Math.floor(Math.random() * 4) + 1) + '.jpg"></center>');
  scene.text('Mira bends you over and slowly slides her fingers inside you.');
  scene.text('$textdog[4]+$textfinger[rand(1, 3)]+$text_emotions[iif(pcs_horny < 60, 1, iif(pcs_horny < 80, 2, 4))]');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'arousal', 'vaginal_finger', (-10), 'lesbian');
  qspCall(s, 'stat', '');
  (s as any).textdog = undefined;
  (s as any).textlick = undefined;
  (s as any).text_emotions = undefined;
  (s as any).text_cum = undefined;
  scene.actions([
    { label: 'Moan', goto: ['mirasex', 'miralick_dog'] },
  ]);
  scene.build();
}

function enterMiralickDog(s: GameState, scene: SceneBuilder): void {
  ((s as any).MiraVars = (s as any).MiraVars ?? {})['arousal'] = ((s as any).MiraVars['arousal'] ?? 0) + (5);
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  qspCall(s, 'stat', '');
  if (((s as any).pcs_horny ?? 0) >= 50  &&  (Math.floor(Math.random() * 3) + 0) !== 0) {
    (s as any).you_orgasm = 1;
    (s as any).orgasm_or = 'yes';
    (s as any).orgasm_txt = 'You cannot hold out anymore from Mira\'s stimulation, and you cum in her face with a shudder.';
    scene.img('images/characters/gadukino/mira/sex/miralick_dog_cum.jpg');
  } else {
    scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/characters/gadukino/mira/sex/miralick_dog` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
  }
  scene.text('$textdog[rand(1, 3)] + $textlick[iif(MiraVars[\'cuni_given\'] < 10, rand(1, 3), rand(4, 6))] + $text_emotions[iif(pcs_horny < 60, 1, iif(pcs_horny < 80, 2, 4))]');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'arousal', 'cuni', (-10), 'lesbian');
  qspCall(s, 'stat', '');
  (s as any).textdog = undefined;
  (s as any).textlick = undefined;
  (s as any).text_emotions = undefined;
  (s as any).text_cum = undefined;
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
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      }
    }
  }
  scene.build();
}

function enterLickmiraStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).MiraVars ?? 0)?.['had_sex'] === 0) {
    ((s as any).MiraVars = (s as any).MiraVars ?? {})['had_sex'] = 1;
    (s as any).girl = ((s as any).girl ?? 0) + (1);
  }
  ((s as any).MiraVars = (s as any).MiraVars ?? {})['arousal'] = ((s as any).MiraVars['arousal'] ?? 0) + (10);
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
  ((s as any).MiraVars = (s as any).MiraVars ?? {})['arousal'] = ((s as any).MiraVars['arousal'] ?? 0) + (10);
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
  qspCall(s, 'stat', '');
  if (((s as any).MiraVars ?? 0)?.['arousal'] >= 50  &&  (Math.floor(Math.random() * 3) + 0) !== 0) {
    (s as any).miraorgasm = 1;
    scene.img('images/characters/gadukino/mira/sex/lickmira_mis_cum.jpg');
    scene.text('$textmis[rand(1, 3)]+$textlick[iif(stat[\'lesbian_count\'] < 10, rand(7, 9), rand(10, 12))]+$text_emotions[7]');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiralickOrgasm(s, scene); (s as any).locArgs = __savedLocArgs; }
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'arousal', 'cuni_give', (-10), 'lesbian');
    qspCall(s, 'stat', '');
    if ((!((s as any).you_orgasm ?? 0))) {
      scene.text('After Mira\'s orgasms, you get out between her legs and wipe her juices off your face. Then, you clean yourself up and head home.');
    }
  } else {
    if (((s as any).MiraVars ?? 0)?.['arousal'] < 50) {
      scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/characters/gadukino/mira/sex/lickmira_mis` + (Math.floor(Math.random() * 3) + 1) + '.jpg"></center>');
      scene.text('$textmis[rand(1, 3)]+$textlick[iif(stat[\'lesbian_count\'] < 10, rand(7, 9), rand(10, 12))]+$text_emotions[iif(pcs_horny < 60, 5, iif(pcs_horny < 80, 6, 7))]');
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
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      }
    }
  }
  (s as any).textmis = undefined;
  (s as any).textlick = undefined;
  (s as any).text_emotions = undefined;
  (s as any).text_cum = undefined;
  scene.build();
}

function enterMiralickStart(s: GameState, scene: SceneBuilder): void {
  ((s as any).MiraVars = (s as any).MiraVars ?? {})['cuni_given'] = ((s as any).MiraVars['cuni_given'] ?? 0) + (1);
  if (((s as any).pantyworntype ?? 0) !== 'none') {
    scene.img('images/characters/gadukino/mira/sex/mira_start_tanga1.jpg');
    scene.text('Mira pulls down your panties with a smile while looking you in the eyes. You lean against the tree, close your eyes, and wait for her to continue…');
  } else {
    scene.img('images/characters/gadukino/mira/sex/mira_start_tanga0.jpg');
    scene.text(`Dropping to her knees and not finding any panties, Mira licked your ${(((s as any).pc_desc ?? 0)?.['pussy'] ?? '')} vagina, sampling its taste and causing an involuntary moan of pleasure from you. You lean against the tree, close your eyes, and wait for her to continue…`);
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
    (s as any).orgasm_or = 'custom';
    (s as any).orgasm_txt = 'Suddenly Mira begins to cum. You are still between her legs but keep licking as her warm cum covers your face and drips down onto your breasts.';
  }
  scene.build();
}

function enter69_1(s: GameState, scene: SceneBuilder): void {
  ((s as any).MiraVars = (s as any).MiraVars ?? {})['arousal'] = ((s as any).MiraVars['arousal'] ?? 0) + (10);
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  if (((s as any).MiraVars ?? 0)?.['arousal'] >= 50  &&  ((s as any).pcs_horny ?? 0) >= 50  &&  (Math.floor(Math.random() * 3) + 0) !== 0) {
    (s as any).miraorgasm = 1;
    ((s as any).MiraVars = (s as any).MiraVars ?? {})['arousal'] = 0;
    scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/characters/gadukino/mira/sex/lickmira_69_cum` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
    scene.text('$text69[4]+$textlick[iif(stat[\'lesbian_count\'] < 10, rand(7, 9), rand(10, 12))]+$text_emotions[iif(pcs_horny < 60, 5, iif(pcs_horny < 80, 6, 7))]+$text69[5]+$textlick[iif(MiraVars[\'cuni_given\'] < 10, rand(1, 3), rand(4, 6))] + $text_emotions[iif(pcs_horny < 60, 1, iif(pcs_horny < 80, 2, 3))]');
    (s as any).orgasm_or = 'custom';
    (s as any).orgasm_txt = 'Mira and you cum together. Your mouth filled with her taste, and her scent filled the air. You lie for a minute blissed out before you slowly regain your senses and get ready to go.';
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'arousal', 'cuni', (-10), 'lesbian');
    qspCall(s, 'arousal', 'cuni_give', (-10), 'lesbian');
    qspCall(s, 'stat', '');
  } else {
    if (((s as any).MiraVars ?? 0)?.['arousal'] < 50  &&  ((s as any).pcs_horny ?? 0) >= 50  &&  (Math.floor(Math.random() * 3) + 0) !== 0) {
      (s as any).you_orgasm = 1;
      scene.img('images/characters/gadukino/mira/sex/lickmira_69_cum1.jpg');
      scene.text('$text69[4] + $textlick[iif(stat[\'lesbian_count\'] < 10, rand(7, 9), rand(10, 12))] + $text_emotions[iif(pcs_horny < 60, 5, iif(pcs_horny < 80, 6, 7))] + $text69[5] + $textlick[iif(MiraVars[\'cuni_given\'] < 10, rand(1, 3), rand(4, 6))] + $text_emotions[iif(pcs_horny < 60, 1, iif(pcs_horny < 80, 2, 3))] + $text_cum[1]');
      (s as any).orgasm_or = 'yes';
      (s as any).orgasm_txt = 'The stimulation from Mira\'s ministrations and your efforts to get her off hits you hard, and you cum. You take a moment and then decide to focus on Mira.';
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'arousal', 'cuni', (-10), 'lesbian');
      qspCall(s, 'arousal', 'cuni_give', (-10), 'lesbian');
      qspCall(s, 'stat', '');
    } else {
      if (((s as any).MiraVars ?? 0)?.['arousal'] >= 50  &&  ((s as any).pcs_horny ?? 0) < 50  &&  (Math.floor(Math.random() * 3) + 0) !== 0) {
        (s as any).miraorgasm = 1;
        ((s as any).MiraVars = (s as any).MiraVars ?? {})['arousal'] = 0;
        scene.img('images/characters/gadukino/mira/sex/lickmira_69_cum2.jpg');
        scene.text('$text69[4]+$textlick[iif(stat[\'lesbian_count\'] < 10, rand(7, 9), rand(10, 12))]+$text_emotions[iif(pcs_horny < 60, 5, iif(pcs_horny < 80, 6, 7))]+$text69[5]+$textlick[iif(MiraVars[\'cuni_given\'] < 10, rand(1, 3), rand(4, 6))]+$text_emotions[iif(pcs_horny < 60, 1, iif(pcs_horny < 80, 2, 3))]');
        scene.text('After a while, Mira cums, her juices covering your face. For a minute, she rides the wave of pleasure before she turns her attention to you…');
        (s as any).minut = ((s as any).minut ?? 0) + 5;
        qspCall(s, 'arousal', 'cuni', (-10), 'lesbian');
        qspCall(s, 'arousal', 'cuni_give', (-10), 'lesbian');
        qspCall(s, 'stat', '');
      } else {
        scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/characters/gadukino/mira/sex/lickmira_69_` + (Math.floor(Math.random() * 3) + 1) + '.jpg"></center>');
        scene.text('$text69[4]+$textlick[iif(stat[\'lesbian_count\'] < 10, rand(7, 9), rand(10, 12))]+$text_emotions[iif(pcs_horny < 60, 5, iif(pcs_horny < 80, 6, 7))]+$text69[5]+$textlick[iif(MiraVars[\'cuni_given\'] < 10, rand(1, 3), rand(4, 6))]+$text_emotions[iif(pcs_horny < 60, 1, iif(pcs_horny < 80, 2, 3))]');
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
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      }
    }
  }
  (s as any).text69 = undefined;
  (s as any).textlick = undefined;
  (s as any).text_emotions = undefined;
  (s as any).text_cum = undefined;
  scene.build();
}

function enterMiralickStand2(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  ((s as any).MiraVars = (s as any).MiraVars ?? {})['arousal'] = ((s as any).MiraVars['arousal'] ?? 0) + (5);
  if (((s as any).pcs_horny ?? 0) >= 50) {
    (s as any).you_orgasm = 1;
    scene.img('images/characters/gadukino/mira/sex/miralick_stand_cum.jpg');
    scene.text('$textstand[rand(1, 3)]+$textlick[iif(MiraVars[\'cuni_given\'] < 10, rand(1, 3), rand(4, 6))]+$text_emotions[3]');
    (s as any).orgasm_txt = 'Mira licks your pussy. It feels great. In fact, it feels incredible, you can\'t hold back anymore, and a warmth spreads through your abdomen as you cum.';
    (s as any).orgasm_or = 'yes';
  } else {
    scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/characters/gadukino/mira/sex/miralick_stand` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
    scene.text('$textstand[rand(1, 3)]+$textlick[iif(MiraVars[\'cuni_given\'] < 10, rand(1, 3), rand(4, 6))]+$text_emotions[iif(pcs_horny < 60, 1, iif(pcs_horny < 80, 2, 3))]');
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
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      }
    }
  }
  (s as any).textstand = undefined;
  (s as any).textlick = undefined;
  (s as any).text_emotions = undefined;
  (s as any).text_cum = undefined;
  scene.build();
}

function enterEnd(s: GameState, scene: SceneBuilder): void {
  (s as any).miraorgasm = 0;
  (s as any).you_orgasm = 0;
  qspCall(s, 'arousal', 'end');
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspGoto(s, 'gadukino', '');
  scene.build();
}

function enterMiralickFirst(s: GameState, scene: SceneBuilder): void {
  ((s as any).MiraVars = (s as any).MiraVars ?? {})['cuni_given'] = ((s as any).MiraVars['cuni_given'] ?? 0) + (1);
  if (((s as any).MiraVars ?? 0)?.['had_sex'] === 0) {
    ((s as any).MiraVars = (s as any).MiraVars ?? {})['had_sex'] = 1;
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
  ((s as any).MiraVars = (s as any).MiraVars ?? {})['arousal'] = ((s as any).MiraVars['arousal'] ?? 0) + ((Math.floor(Math.random() * 6) + 0));
  (s as any).mira_counter = ((s as any).mira_counter ?? 0) + (1);
  qspCall(s, 'stat', '');
  if (((s as any).mira_counter ?? 0) < (Math.floor(Math.random() * 3) + 3)) {
    scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/characters/gadukino/mira/sex/miralick_stand` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
    scene.text('$textstand[rand(1, 3)]+$textlick[iif(MiraVars[\'cuni_given\'] < 10, rand(1, 3), rand(4, 6))]+$text_emotions[iif(pcs_horny < 60, 1, iif(pcs_horny < 80, 2, 3))]');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'arousal', 'cuni', (-10), 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Moan', goto: ['mirasex', 'miralick_stand1'] },
    ]);
  } else {
    (s as any).mira_counter = undefined;
    scene.img('images/characters/gadukino/mira/sex/miralick_stand_cum.jpg');
    scene.text('$textstand[rand(1, 3)]+$textlick[iif(MiraVars[\'cuni_given\'] < 10, rand(1, 3), rand(4, 6))]+$text_emotions[3]+$text_cum[1]');
    (s as any).orgasm_or = 'custom';
    (s as any).orgasm_txt = 'Mira continues to lick you until you cum. Then, after some time, you head back to the village together.';
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'arousal', 'cuni', (-10), 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    qspCall(st, 'arousal', '');
  }, goto: ['gadukino', ''] },
    ]);
  }
  (s as any).textstand = undefined;
  (s as any).textlick = undefined;
  (s as any).text_emotions = undefined;
  (s as any).text_cum = undefined;
  scene.build();
}

function enterLickmiraFirst(s: GameState, scene: SceneBuilder): void {
  if (((s as any).MiraVars ?? 0)?.['had_sex'] === 0) {
    ((s as any).MiraVars = (s as any).MiraVars ?? {})['had_sex'] = 1;
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
    ((s as any).MiraVars = (s as any).MiraVars ?? {})['arousal'] = ((s as any).MiraVars['arousal'] ?? 0) + (20);
    scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/characters/gadukino/mira/sex/lickmira_mis` + (Math.floor(Math.random() * 3) + 1) + '.jpg"></center>');
    scene.text('$textmis[rand(1, 3)]+$textlick[iif(stat[\'lesbian_count\'] < 10, rand(7, 9), rand(10, 12))]+$text_emotions[iif(pcs_horny < 60, 5, iif(pcs_horny < 80, 6, 7))]');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'arousal', 'cuni_give', (-10), 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue licking Mira', goto: ['mirasex', 'lickmira_mis1'] },
    ]);
  } else {
    (s as any).miraorgasm = 1;
    ((s as any).MiraVars = (s as any).MiraVars ?? {})['arousal'] = 0;
    scene.img('images/characters/gadukino/mira/sex/lickmira_mis_cum.jpg');
    scene.text('$textmis[rand(1, 3)]+$textlick[iif(stat[\'lesbian_count\'] < 10, rand(7, 9), rand(10, 12))]+$text_emotions[7]+$text_cum[2]');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMiralickOrgasm(s, scene); (s as any).locArgs = __savedLocArgs; }
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
    qspCall(st, 'arousal', '');
  }, goto: ['gadukino', ''] },
    ]);
  }
  (s as any).textmis = undefined;
  (s as any).textlick = undefined;
  (s as any).text_emotions = undefined;
  (s as any).text_cum = undefined;
  ((s as any).textstand = (s as any).textstand ?? {})[1] = 'Leaning against the tree, you feel Mira\'s hot breath and the stimulating touch of her tongue between your legs. ';
  ((s as any).textstand = (s as any).textstand ?? {})[2] = 'Closing your eyes and leaning against the tree, you feel the light touch of Mira\'s tongue lick your vagina. ';
  ((s as any).textstand = (s as any).textstand ?? {})[3] = 'Leaning against the tree, you feel Mira\'s hot breath and the light touch of her tongue on your vagina. ';
  ((s as any).textdog = (s as any).textdog ?? {})[1] = 'Standing with your ass facing Mira, you feel her hot breath and the stimulating touch of her tongue on your pussy. ';
  ((s as any).textdog = (s as any).textdog ?? {})[2] = 'Closing your eyes and sticking your ass out in front of Mira, you feel the light touch of her tongue to your vagina. ';
  ((s as any).textdog = (s as any).textdog ?? {})[3] = 'Standing with your ass facing Mira, you feel her hot breath between your legs and the exciting touch of her tongue and fingers in your vagina. ';
  ((s as any).textdog = (s as any).textdog ?? {})[4] = 'Standing with your ass facing Mira, you feel the stimulating touch of her hands caressing your wet pussy. ';
  ((s as any).textmis = (s as any).textmis ?? {})[1] = 'Mira is sitting on the rock in front of you, her legs spread wide, watching your progress. ';
  ((s as any).textmis = (s as any).textmis ?? {})[2] = 'Sitting on the stone with her legs spread wide, Mira enjoys the caress of your lips and tongue. ';
  ((s as any).textmis = (s as any).textmis ?? {})[3] = 'Mira is relaxing with her legs spread wide apart, feeling your hot breath on her crotch and the stimulating touch of your tongue in her vagina. ';
  ((s as any).text69 = (s as any).text69 ?? {})[1] = 'You and Mira lie on top of one another, greedily licking the other\'s pussy. ';
  ((s as any).text69 = (s as any).text69 ?? {})[2] = 'You lie on the ground, and right before your eyes is Mira\'s dripping wet pussy. ';
  ((s as any).text69 = (s as any).text69 ?? {})[3] = 'Spread her legs wide apart. Mira is hanging her pussy over you, enjoying your hot breath on her crotch, and feeling the stimulating touch of your tongue on her vagina. ';
  ((s as any).text69 = (s as any).text69 ?? {})[4] = 'You lie on the ground with Mira, throwing a leg over you, and she takes a position on top. You feel Mira\'s hot breath between your legs and the stimulating touch of her tongue on your pussy. ';
  ((s as any).text69 = (s as any).text69 ?? {})[5] = 'Licking Mira, you feel her hot breath between your legs and the stimulating touch of her tongue simultaneously. ';
  ((s as any).textlick = (s as any).textlick ?? {})[1] = 'Spreading your labia with her fingers, she licks clumsily, her inexperienced tongue swiping across the length of your pussy. ';
  ((s as any).textlick = (s as any).textlick ?? {})[2] = 'She timidly kisses your labia, sometimes touching gently touching your clitoris. ';
  ((s as any).textlick = (s as any).textlick ?? {})[3] = 'She carefully moves her inexperienced tongue from top to bottom, sometimes gently touching your clitoris. ';
  ((s as any).textlick = (s as any).textlick ?? {})[4] = 'Spreading your labia with her fingers, she licks skillfully, swiping her tongue across the length of your pussy and tickling your clitoris. ';
  ((s as any).textlick = (s as any).textlick ?? {})[5] = 'She kisses your pussy, sometimes trying to penetrate a naughty finger in your ' + (((s as any).pc_desc ?? 0)?.['pussy']) + ' vagina. ';
  ((s as any).textlick = (s as any).textlick ?? {})[6] = 'She quickly but skillfully licks your pussy from top to bottom, sometimes making a circular motion and gently touching your clitoris. ';
  ((s as any).textlick = (s as any).textlick ?? {})[7] = 'Your face buried between her legs, your lick clumsily, swiping your inexperienced tongue over her vagina. ';
  ((s as any).textlick = (s as any).textlick ?? {})[8] = 'You timidly kiss her labia, sometimes attempting to finger her clitoris. ';
  ((s as any).textlick = (s as any).textlick ?? {})[9] = 'You gently move your inexperienced tongue from top to bottom, across her pussy, and sometimes gently touch her clitoris. ';
  ((s as any).textlick = (s as any).textlick ?? {})[10] = 'Your face is buried between her legs. You lick her enthusiastically, swiping your tongue across the length of her pussy, not forgetting about her clitoris. ';
  ((s as any).textlick = (s as any).textlick ?? {})[11] = 'You kiss her pussy, caress her labia lips, and occasionally penetrate them with your tongue to lick her clitoris. ';
  ((s as any).textlick = (s as any).textlick ?? {})[12] = 'You quickly and skillfully lick her pussy, penetrating her vagina and caressing her clitoris. ';
  ((s as any).textfinger = (s as any).textfinger ?? {})[1] = 'You feel a quick movement of her fingers, moving back and forth in your pussy. ';
  ((s as any).textfinger = (s as any).textfinger ?? {})[2] = 'She moves two fingers inside your ' + (((s as any).pc_desc ?? 0)?.['pussy']) + ' vagina. ';
  ((s as any).textfinger = (s as any).textfinger ?? {})[3] = 'She moves her fingers along the entire length of your ' + (((s as any).pc_desc ?? 0)?.['pussy']) + ', making you squirm. ';
  ((s as any).text_emotions = (s as any).text_emotions ?? {})[1] = 'Causing a storm of emotions to wash over you. ';
  ((s as any).text_emotions = (s as any).text_emotions ?? {})[2] = 'Causing your screams of pleasure. ';
  ((s as any).text_emotions = (s as any).text_emotions ?? {})[3] = 'Making moans of pleasure escape your lips and forcing her to move her hips to meet yours. ';
  ((s as any).text_emotions = (s as any).text_emotions ?? {})[4] = 'Making moans of pleasure escape your lips and forcing her to move her ass to meet yours. ';
  ((s as any).text_emotions = (s as any).text_emotions ?? {})[5] = 'Making her tremble from every touch. ';
  ((s as any).text_emotions = (s as any).text_emotions ?? {})[6] = 'Making moans of pleasure escape her lips. ';
  ((s as any).text_emotions = (s as any).text_emotions ?? {})[7] = 'Make her whole body arch and press your head deeper into her crotch. ';
  ((s as any).text_cum = (s as any).text_cum ?? {})[1] = 'Gradually, a pleasant warmth grows and spreads from your belly. Then the sensations wash over you, and your body is uncontrollable in the hot waves of orgasm. Finally, you involuntarily scream in pleasure as your whole body squirms and shudders. ';
  ((s as any).text_cum = (s as any).text_cum ?? {})[2] = 'After some time, Mira began to tremble, and her pussy started rhythmically pulsing in front of your face. Finally, she arched in orgasm, moaned, and held your head with her feet as her juices flooded your face. ';
  ((s as any).text_cum = (s as any).text_cum ?? {})[3] = 'Gradually, a pleasant warmth grows and spreads from your belly. Then the sensations wash over you, and your body is uncontrollable in the hot waves of orgasm. You involuntarily scream in pleasure as your whole body squirms and shudders. At the same time, you notice that Mira trembled all over and her pussy started rhythmically pulsing. Finally, she arched in orgasm, moaned, and held your head with her feet as her juices flooded your face. ';
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
      enterDefault(s, scene);
      break;
  }
}

export const mirasex: LocationDef = {
  name: 'mirasex',
  title: 'You passionately bite Mira\'s luscious lips. She responds to ',
  region: 'other',
  enter: enter,
};
