import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (((s as any).knowsfairy ?? 0) === 1) {
    scene.text('You find yourself in the area where you know the fairy to hang around.');
    if ((!((s as any).fairyshoo ?? 0))) {
      scene.actions([
        { label: 'Look for the fairy to chat', goto: ['MagEncounterFairy', 'fairy_chat'] },
        { label: 'Just be on your way', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    } else {
      if (((s as any).pcs_mana ?? 0) >= ((((s as any).pcs_intel ?? 0) * ((s as any).pcs_magik ?? 0) + ((s as any).pcs_magik ?? 0) * 100 + ((s as any).pcs_vital ?? 0) * 10 + ((s as any).rikudo ?? 0)) / 2)) {
        // TODO-QSP: act 'Be nice and chat with the fairy': gt 'MagEncounterFairy', 'fairy_chat'
      }
      if (((s as any).pcs_mana ?? 0) >= ((((s as any).pcs_intel ?? 0) * ((s as any).pcs_magik ?? 0) + ((s as any).pcs_magik ?? 0) * 100 + ((s as any).pcs_vital ?? 0) * 10 + ((s as any).rikudo ?? 0)) / 4)) {
        // TODO-QSP: act 'Just ignore the fairy': gt $loc, $loc_arg
      }
      scene.actions([
        { label: 'Shoo the pesky fairy away', goto: ['MagEncounterFairy', 'fairy_shoo'] },
      ]);
    }
  } else {
    scene.text('There appears to be a firefly here and its getting closer.');
    qspCall(s, 'stat', '');
    scene.text('This part of the park has a weird feel to it causing the hairs on the back of your neck to stand on end.');
    scene.text('You have the strange feeling of being watched, but looking around you don\'t see anybody.');
    scene.actions([
      { label: 'Investigate the strange glow', goto: ['MagEncounterFairy', 'fairy_chat_no1'] },
      { label: 'Shoo the pesky firefly away', goto: ['MagEncounterFairy', 'fairy_shoo'] },
      { label: 'Ignore the firefly', handler: (st: GameState) => {
    (st as any).fairyskip = ((st as any).daystart ?? 0);
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      { label: 'Shake off the feeling and move on', handler: (st: GameState) => {
    (st as any).fairyskip = ((st as any).daystart ?? 0);
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  scene.build();
}

function enterFairyChatNo1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).knowsfairy = 1;
  scene.img('images/locations/pavlovsk/park/fae.jpg');
  scene.text('You take a closer look at the floating glowing orb. What you mistook for a large firefly is actually a small woman with translucent wings on her back: A fairy!');
  scene.text('"Hello, biggie!", she says in a high pitched voice. "You can see me, right?"');
  scene.text('"It\'s so nice to meet you! Finally someone who can see me!", she goes on before you have a chance to answer. "Finally someone to chat with!!! You have no idea how annoying it is to be here and nobody recognizes you. It\'s sooo BORING!!!"');
  scene.actions([
    { label: 'Chat with the fairy', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).fairychat = 1;
    (s as any).pcs_mana = ((s as any).pcs_mana ?? 0) + (25 * ((s as any).pcs_magik ?? 0));
    qspCall(s, 'mood', 'raise', 'small');
    qspCall(s, 'stat', '');
    scene.text('You chat with the fairy. At first it feels strange to talk with a creature, you thought was a myth from children\'s books. More so, since the small beautiful woman flutters in front of your face the whole time. But the fairy is so amicable that half hour has passed before you even notice.');
    if (((s as any).fairyQW ?? 0)?.['skin_increase'] <= 10) {
      if (((s as any).pcs_skin ?? 0) <= 990) {
        (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + (10);
      } else {
        (s as any).pcs_skin = 1000;
      }
      (s as any).fairyQW['skin_increase'] = ((s as any).fairyQW['skin_increase'] ?? 0) + (1);
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
      qspCall(s, 'stat', '');
      scene.text('The fairy bids you farewell. Just as she flies off, she returns fluttering in front of your face.');
      scene.text('"You know, someone as nice as you should look just as lovely.", she says. "Hold still and don\'t breath!"');
      scene.text('Before you can do anything, the fairy blows some sparkling dust into your face. Surprised you hold your breath, albeit barely. You feel the powdery substance soak into your skin and your face starts tingling. It is not uncomfortable, rather like the brush of a feather.');
      scene.text(' \'That must have been MAGICAL FAIRY DUST!\', it hits you as the fairy flies off.');
    } else {
      scene.text('The fairy waves goodbye to you and flies away.');
    }
    scene.actions([
      { label: 'Wave goodbye', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterFairyShoo(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  if (((s as any).knowsfairy ?? 0) < 1) {
    (s as any).knowsfairy = 1;
    (s as any).fairyshoo = 1;
    (s as any).pcs_horny = 0;
    qspCall(s, 'stat', '');
    scene.text('Not paying much attention you wave your hands to chase away the (very large!?) firefly. She easily dodges your halfhearted moves.');
    scene.text('"You are a big meanie!", suddenly squeals a high pitched voice.');
    scene.text('Stunned by surprise you take a closer look at what you thought was a firefly. In the glow you can see a small woman with fluttering wings on her back. It\'s a fairy! Taking advantage of your bewilderment she blows something sparkling in your face. Flabbergasted as you are you inhale the substance.');
    scene.text('Instantly you become completely horny and your face flushes with arousal.');
    scene.text('"Maybe this will teach you." she says with a pout and flies off.');
    scene.actions([
      { label: 'Move along', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } else {
    (s as any).fairyshoo = ((s as any).fairyshoo ?? 0) + (1);
    (s as any).pcs_horny = 0;
    (s as any).fairycurse = ((s as any).daystart ?? 0) + (((s as any).fairyshoo ?? 0) - 1) * 2;
    qspCall(s, 'stat', '');
    scene.text('"Still a meanie, I see!", squeals the fairy "Well, have it your way."');
    scene.actions([
      { label: 'Get away from the fairy', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  scene.build();
}

function enterFairyChat(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/fae.jpg');
  scene.text('You take the few steps over to the glowing orb that apparently only you can recognize as what it truly is: a fairy.');
  scene.actions([
    { label: 'Chat with the fairy', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    if (((s as any).fairyshoo ?? 0) === 1  &&  (Math.floor(Math.random() * 3) + 1) === 2) {
      (s as any).fairyshoo = 0;
    } else {
      (s as any).fairyshoo = ((s as any).fairyshoo ?? 0) - (1);
    }
    (s as any).fairychat = ((s as any).fairychat ?? 0) + (1);
    (s as any).pcs_mana = ((s as any).pcs_mana ?? 0) + (25 * ((s as any).pcs_magik ?? 0));
    qspCall(s, 'mood', 'raise', 'small');
    qspCall(s, 'MagEncounterFairy', 'fairychattopic');
    if (((s as any).fairyQW ?? 0)?.['skin_increase'] <= 10  &&  ((s as any).fairyQW ?? 0)?.['day'] !== ((s as any).daystart ?? 0)  &&  (!((s as any).fairyshoo ?? 0))) {
      if (((s as any).pcs_skin ?? 0) <= 990) {
        (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + (10);
      } else {
        (s as any).pcs_skin = 1000;
      }
      (s as any).fairyQW['skin_increase'] = ((s as any).fairyQW['skin_increase'] ?? 0) + (1);
      (s as any).fairyQW['day'] = ((s as any).daystart ?? 0);
      qspCall(s, 'stat', '');
      scene.text('The fairy bids you farewell.');
      qspCall(s, 'stat', '');
      scene.text('Just as she flies off, she returns fluttering in front of your face.');
      scene.text('"You know, you could still look lovelier.", she says. "Don\'t move."');
      scene.text('Remembering the last time you hold your breath and close your eyes. Just a moment later you feel your skin start tingling, again, as if brushed by a feather.');
      scene.actions([
        { label: 'Go on your way', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    } else {
      (s as any).succubusQW = 1;
      (s as any).pcs_horny = 0;
      (s as any).fairyQW['day'] = ((s as any).daystart ?? 0);
      qspCall(s, 'stat', '');
      scene.text('The fairy bids you farewell.');
      qspCall(s, 'stat', '');
      scene.text('Just as she flies off, she returns fluttering in front of your face.');
      scene.text('"You know, you\'re almost a magical creature now.", she says. "Don\'t move."');
      scene.text('Remembering the last time you hold your breath and close your eyes. Just a moment later you feel a much more intense tingling, this time seeming to go all the way through you.');
      if (((s as any).fairyQW ?? 0)?.['day'] !== ((s as any).daystart ?? 0)  &&  (((s as any).pcs_nips ?? 0) < 80  ||  ((s as any).clit_size ?? 0) < 80)) {
        (s as any).fairyQW['day'] = ((s as any).daystart ?? 0);
        scene.text('The fairy takes another quick look at you, rubs her chin, and says "Hmm, since you\'ve been a little nice to me, maybe I could be a little nice to you."');
        scene.actions([
          { label: 'Huh?', handler: (st: GameState) => {
    scene.text('You look at her, puzzled, wondering if you heard her right. She just shrugs her shoulders and says "Okay, if you\'re not interested"');
    scene.actions([
      { label: 'Go on your way', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
          { label: 'Sure', handler: (st: GameState) => {
    (s as any).fday_surprise = ((s as any).fday_surprise ?? 0) + (1);
    (s as any).fairy_surprise = Math.floor(Math.random() * 8) + 1;
    if (((s as any).fairy_surprise ?? 0) === 1) {
      (s as any).pcs_nips = ((s as any).pcs_nips ?? 0) + (5);
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
      scene.img(`images/pc/body/nipples/nipples${((s as any).max ?? 0)(1, ((s as any).min ?? 0)(5, ((s as any).pcs_nips ?? 0) / 20 + 1))}.jpg`);
      scene.text('You hear a giggle. Suddenly, your nipples get really firm and pointed, and seem to be a bit larger now.');
      scene.text('You can\'t help but rub both breasts, feeling the warm tingling in them, and in your pussy.');
    } else {
      (s as any).pcs_nips = ((s as any).pcs_nips ?? 0) - (5);
      scene.img(`images/pc/body/nipples/nipples${((s as any).max ?? 0)(1, ((s as any).min ?? 0)(5, ((s as any).pcs_nips ?? 0) / 20 + 1))}.jpg`);
      scene.text('You hear a giggle. Suddenly, your nipples get really firm and pointed, yet seem to be smaller than before.');
      scene.text('You can\'t help but rub both breasts, feeling the warm tingling in them, and in your pussy.');
      if (((s as any).fairy_surprise ?? 0) === 3) {
        (s as any).clit_size = ((s as any).clit_size ?? 0) + (5);
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
        scene.img(`images/pc/body/clit/clit${((s as any).max ?? 0)(1, ((s as any).min ?? 0)(5, ((s as any).clit_size ?? 0) / 20 + 1))}.jpg`);
        scene.text('You hear a giggle and you feel a warm tingle at the top of your slit, you reach down and part your pussy lips with your fingers.');
        scene.text('Your clitoris has swollen, and seems to stand out even more than before! You can\'t help but rub all around it, feeling the warm tingling and the moisture build at the entrance.');
        scene.text('The fairy admires the changes she\'s made, and smiles at you, looking again at your puffy pussy and licking her lips.');
        scene.text('You two say your goodbyes and the fairy flies off.');
      } else {
        (s as any).clit_size = ((s as any).clit_size ?? 0) - (5);
        scene.img(`images/pc/body/clit/clit${((s as any).max ?? 0)(1, ((s as any).min ?? 0)(5, ((s as any).clit_size ?? 0) / 20 + 1))}.jpg`);
        scene.text('You hear a giggle and you feel a warm tingle at the top of your slit, you reach down and part your pussy lips with your fingers.');
        scene.text('Your clitoris has shrunk, and seems to more demure than before! You can\'t help but rub all around it, feeling the warm tingling and the moisture build at the entrance.');
        if (((s as any).fairy_surprise ?? 0) <= 6) {
          (s as any).min_arousal = ((s as any).min_arousal ?? 0) + (Math.floor(Math.random() * 5) + 1);
          scene.text('You hear a giggle, then sparkles surround your body and you get all tingly.');
          scene.text('You suddenly feel flustered and more aroused than before.');
        } else {
          (s as any).min_arousal = ((s as any).min_arousal ?? 0) - (Math.floor(Math.random() * 5) + 1);
          scene.text('You hear a giggle, then sparkles surround your body and you get all tingly.');
          scene.text('You suddenly feel colder and less aroused than before.');
        }
        qspCall(s, 'stat', '');
        scene.actions([
          { label: 'Go on your way', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
        ]);
      }
    }
    qspCall(s, 'stat', '');
  } },
        ]);
      }
      scene.actions([
        { label: 'Go on your way', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'fairy_chat_no1':
      enterFairyChatNo1(s, scene);
      break;
    case 'fairy_shoo':
      enterFairyShoo(s, scene);
      break;
    case 'fairy_chat':
      enterFairyChat(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const MagEncounterFairy: LocationDef = {
  name: 'MagEncounterFairy',
  title: 'You find yourself in the area where you know the fairy to ha',
  region: 'other',
  description: ['You find yourself in the area where you know the fairy to hang around.'],
  enter: enter,
};
