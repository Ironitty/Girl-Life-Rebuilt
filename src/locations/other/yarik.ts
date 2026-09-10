import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Apartment businessman Yaroslav</b></center>');
  scene.img('images/characters/city/yaroslav/entrance.jpg');
  scene.actions([
    { label: 'Ring the doorbell', handler: (st: GameState) => {
    if (((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) <= 17  &&  ((s as any).yaq ?? 0) === 1) {
      scene.img('images/characters/city/yaroslav/sex/rabotu_1.jpg');
      scene.text('Yaroslav opens the door.');
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>! Hi! Come on in."
      scene.text(`"${((s as any).pcs_nickname ?? 0)}! Hi! Come on in."`);
      scene.actions([
        { label: 'Enter the apartment', goto: ['yarik', 'yaqw'] },
      ]);
    } else {
      scene.text('You rang the doorbell but no one answers.');
    }
  } },
    { label: 'Leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
  }, goto: ['city_center', ''] },
  ]);
  scene.build();
}

function enterYaqw(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/yaroslav/sex/rabotu_2.jpg');
  scene.text('I need you to tidy up, dust, and wash some clothes.');
  scene.actions([
    { label: 'Agree', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 120;
    qspCall(s, 'mood', 'raise', 'large');
    qspCall(s, 'sweat', 'add', 10);
    qspCall(s, 'stat', '');
    scene.text('You clean Yaroslav\'s apartment, as he sits sorting through some papers and reading them.');
    if ((Math.floor(Math.random() * 3) + 0) !== 0) {
      // TODO-QSP: dynamic text: Suddenly he turns to you. "<<$pcs_nickname>>, can you also clean the floor in th...
      scene.text(`Suddenly he turns to you. "${((s as any).pcs_nickname ?? 0)}, can you also clean the floor in the bathroom?"`);
      if (((s as any).yarikwork ?? 0) > 0) {
        scene.actions([
          { label: 'Agree', goto: ['yarik', '3'] },
        ]);
      } else {
        scene.actions([
          { label: 'Agree', goto: ['yarik', '1'] },
        ]);
      }
      scene.actions([
        { label: 'Decline', handler: (st: GameState) => {
    qspCall(s, 'money', 'earn', 1500);
    (s as any).uborkayar = ((s as any).uborkayar ?? 0) + (1);
    // TODO-QSP: dynamic text: "It's OK I don't want to make you late. Here is <<$func('money', 'string_profit'...
    scene.text(`"It's OK I don't want to make you late. Here is ${qspFunc(s, 'money', 'string_profit', 1500)} for a job well done. Come again at the same time any evening if you want the work."`);
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
    ]);
  } },
      ]);
    } else {
      qspCall(s, 'money', 'earn', 1500);
      (s as any).uborkayar = ((s as any).uborkayar ?? 0) + (1);
      // TODO-QSP: dynamic text: After you have finished, he pays you <<$func('money', 'string_profit', 1500)>> a...
      scene.text(`After you have finished, he pays you ${qspFunc(s, 'money', 'string_profit', 1500)} and tells you to come back at the same time any evening for more work.`);
      scene.actions([
        { label: 'Leave', goto: ['city_center', ''] },
      ]);
    }
  } },
    { label: 'Leave', goto: ['city_center', ''] },
  ]);
  scene.build();
}

function enter1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  scene.img('images/characters/city/yaroslav/sex/rabotu_3.jpg');
  scene.text('As you get started with the floor, you sit down and start to think about the things you have sunk to doing, your clothes wet, armpits starting to smell. Well at least you will earn some money for your efforts.');
  scene.actions([
    { label: 'Scrub the floor', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/city/yaroslav/sex/rabotu_4.jpg');
    scene.text('Apparently deciding to check how you are coping, Yaroslav stands in the doorway of the bathroom, watching you. As you clean, you start to imagine the situation becoming more sexual and fantasize about seducing Yaroslav.');
    if (((s as any).uborkayar ?? 0) > 2) {
      scene.actions([
        { label: 'Seduce him', goto: ['yarik', '2'] },
      ]);
    }
    scene.actions([
      { label: 'Carry on cleaning', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'money', 'earn', 2000);
    scene.img('images/characters/city/yaroslav/sex/rabotu_6.jpg');
    // TODO-QSP: dynamic text: You finish the floor and polish the shower screen. Yaroslav seems happy with you...
    scene.text(`You finish the floor and polish the shower screen. Yaroslav seems happy with your work and pays you ${qspFunc(s, 'money', 'string_profit', 2000)}.`);
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/yaroslav/sex/rabotu_5.jpg');
  scene.text('"Hey!" You spin around "Are you looking at my ass?" You cried indignantly, but instead of trying to prevent him, you make sure he gets a good look at it.');
  scene.actions([
    { label: 'Stand', handler: (st: GameState) => {
    scene.img('images/characters/city/yaroslav/sex/rabotu_6.jpg');
    scene.text('Yaroslav starts to make excuses, as you stand up. Locking eyes with him you slowly wash the shower screen. "Listen, I want to earn a little more money and you\'re a good looking guy." You say, propositioning Yaroslav.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    scene.img('images/characters/city/yaroslav/sex/rabotu_7.jpg');
    scene.text('Yaroslav says nothing, so you decide to give him a bit of a show so that he can see exactly what you are suggesting.');
    // TODO-QSP: dynamic text: "I can't say the thought didn't cross my mind <<$pcs_nickname>>. I'll tell you w...
    scene.text(`"I can't say the thought didn't cross my mind ${((s as any).pcs_nickname ?? 0)}. I'll tell you what, if I'm feeling horny I will ask you to clean the bathroom. If you want to mess around I'll give you a nice bonus."`);
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    (s as any).yarikwork = 1;
    qspCall(s, 'money', 'earn', 3000);
    // TODO-QSP: dynamic text: You accept his terms. He tells you he can't right now as he has a project to com...
    scene.text(`You accept his terms. He tells you he can't right now as he has a project to complete for the morning, but pays you ${qspFunc(s, 'money', 'string_profit', 3000)} and encourages you to come back at the same time any evening.`);
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
    ]);
  } },
      { label: 'Decline', handler: (st: GameState) => {
    (s as any).yaq = 0;
    scene.text('You tell him that you have changed your mind and do not want to do this.');
    scene.text('"You fucking cock-teasing bitch! Leading me on like that, then changing your mind! Get the fuck out and don\'t come back."');
    scene.text('He is clearly furious and has no intention of paying you now. You release your only option is to leave before he gets violent.');
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A86');
  (s as any).sexpartkno = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.img('images/characters/city/yaroslav/sex/rabotu_5.jpg');
  scene.text('You give the floor a quick wash as you wait for Yaroslav to appear in the doorway.');
  scene.text('"Are you looking at my ass?" You ask, giving him a good look at it.');
  scene.text('He smiles and says, "Very much so, now let\'s talk business."');
  scene.actions([
    { label: 'Stand up and remove top', handler: (st: GameState) => {
    scene.img('images/characters/city/yaroslav/sex/rabotu_9.jpg');
    scene.text('You stand by the shower and slowly remove your top and bra. Looking at the wad of cash in his hand you say, "It depends how much you would like to spend."');
    scene.text('"I\'ll give you 250 for a show"');
    if (((s as any).yarikwork ?? 0) > 2) {
      scene.text('"I\'ll give you 500 for a blowjob."');
      scene.actions([
        { label: 'Blow him', goto: ['yarik', '5'] },
      ]);
    }
    if (((s as any).yarikwork ?? 0) > 4) {
      scene.text('"I\'ll give you 1000 for sex."');
      scene.actions([
        { label: 'Have sex', goto: ['yarik', '6'] },
      ]);
    }
    if (((s as any).yarikwork ?? 0) > 8) {
      scene.text('"I\'ll give you 1500 for anal sex."');
      scene.actions([
        { label: 'Have anal', goto: ['yarik', '7'] },
      ]);
    }
    scene.actions([
      { label: 'Put on a show', goto: ['yarik', '4'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter4(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'foreplay', 5);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/yaroslav/sex/rabotu_8.jpg');
  scene.text('You squeeze out your sponge over your breasts and start to rub them seductively, "Oh dear, I\'m so wet…"');
  scene.actions([
    { label: 'Show him', handler: (st: GameState) => {
    scene.img('images/characters/city/yaroslav/sex/rabotu_14.jpg');
    scene.text('"Let me show you." You strip off the rest of your clothes and sit on a unit, lifting you legs to show Yaroslav everything.');
    qspCall(s, 'arousal', 'foreplay', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finger yourself', handler: (st: GameState) => {
    scene.img('images/characters/city/yaroslav/sex/rabotu_15.jpg');
    scene.text('You stick 2 fingers into your vagina, and thrust them back and forth. You feel your excitement grow.');
    qspCall(s, 'arousal', 'vaginal_finger', 5, 'masturbate');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Take a shower', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).noshampoo = 1;
    qspCall(s, 'din_van', 'showerdin');
    qspCall(s, 'money', 'earn', 2250);
  }, goto: ['yarik', 'end'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter5(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/yaroslav/sex/rabotu_10.jpg');
  scene.text('Looking down, you see that his cock is, wow, that\'s a really delicious looking cock. You lick your lips in anticipation.');
  scene.actions([
    { label: 'Approach', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/city/yaroslav/sex/rabotu_13.jpg');
    scene.text('You let your shorts drop to the floor and walk up to Yaroslav. You surprise him with a long, lingering kiss as you grip his cock in your hand. As you pull back his breath is heavy and his eyeshave glazed over.');
    scene.actions([
      { label: 'Kneel down', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/city/yaroslav/sex/rabotu_12.jpg');
    scene.text('You slowly drop to your knees and began to lick the head of his cock sensually. Yaroslav clearly enjoys the attention and you keep your eyes locked on his.');
    scene.actions([
      { label: 'Suck it', handler: (st: GameState) => {
    scene.img('images/characters/city/yaroslav/sex/rabotu_11.jpg');
    // TODO-QSP: dynamic text: He starts to move his hips, trying to get more, you hold him back for a few seco...
    scene.text(`He starts to move his hips, trying to get more, you hold him back for a few seconds, then wrap your ${((s as any).pc_desc ?? 0)?.['lips']} lips around the pulsating member shift your focus to maximising his pleasure.`);
    qspCall(s, 'boyStat', 'A86');
    qspCall(s, 'arousal', 'bj', 10);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'cum_call', 'face', 'A86', 1, 0, 0, 0, 20);
    qspCall(s, 'cum_call', 'breasts', 'A86', 1, 0, 0, 0, 20);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/yaroslav/sex/rabotu_27.jpg');
    scene.text('As he is about to come, Yaroslav moaning and holding the base of his own cock, pulls back and sprays his spunk all over your face. You sit there catching your breath as sperm drips down onto you breasts.');
    scene.actions([
      { label: 'Take a shower', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).noshampoo = 1;
    qspCall(s, 'din_van', 'showerdin');
    qspCall(s, 'money', 'earn', 2250);
  }, goto: ['yarik', 'end'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter6(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A86');
  scene.img('images/characters/city/yaroslav/sex/rabotu_14.jpg');
  scene.text('"Let\'s fuck then." You strip off the rest of your clothes and sit on a unit, lifting you legs to show Yaroslav everything.');
  qspCall(s, 'arousal', 'foreplay', 5);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Wait', handler: (st: GameState) => {
    scene.img('images/characters/city/yaroslav/sex/rabotu_16.jpg');
    scene.text('Yaroslav strips off his clothes, his cock is already fully erect. He walks up to you and rubs the head of it around your pussy.');
    qspCall(s, 'arousal', 'foreplay', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Fuck', handler: (st: GameState) => {
    scene.img('images/characters/city/yaroslav/sex/rabotu_17.jpg');
    scene.text('You nod to show him you are ready and he slowly pushes his member past your lips and fills your pussy, you let out a small moan of pleasure.');
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/yaroslav/sex/rabotu_19.jpg');
    scene.text('He lifts your legs and holds them straight up, he can\'t reach as deeply, but the change of sensation is more than making up for that.');
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Change position', handler: (st: GameState) => {
    scene.img('images/characters/city/yaroslav/sex/rabotu_26.jpg');
    scene.text('Yaroslav withdraws and helps you down from the unit. You climb on top of him and ride him. You move your hips, occasionally lifting until it was almost free, then thrusting down on the full length.');
    qspCall(s, 'arousal', 'vaginal', 10);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Change back', handler: (st: GameState) => {
    scene.img('images/characters/city/yaroslav/sex/rabotu_18.jpg');
    scene.text('You get off of Yaroslav and help him to his feet. He lifts you ack onto the unit and quickly starts to pond you once more.');
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/yaroslav/sex/rabotu_20.jpg');
    scene.text('Breathing heavily and getting slick with sweat, Yaroslav lifts your right leg up and places it on top of your left one. This gives you another new feeling of stimulation and gret respect for his endurance.');
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/characters/city/yaroslav/sex/rabotu_27.jpg');
    scene.text('Briskly, Yaroslav pulls you from the unit and puts you on your knees. Your face has barely reached his penis, when it sprays you with sperm, covering your face and chest.');
    qspCall(s, 'cum_call', 'face', 'A86', 1, 0, 0, 0, 20);
    qspCall(s, 'cum_call', 'breasts', 'A86', 1, 0, 0, 0, 20);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Take a shower', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).noshampoo = 1;
    qspCall(s, 'din_van', 'showerdin');
    qspCall(s, 'money', 'earn', 3000);
  }, goto: ['yarik', 'end'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter7(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/yaroslav/sex/rabotu_22.jpg');
  scene.text('"Let\'s do this then." You strip off the rest of your clothes and sit on a unit, you twist to the side and lift your butt check to expose your ass.');
  scene.actions([
    { label: 'Wait', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A86');
    scene.img('images/characters/city/yaroslav/sex/rabotu_24.jpg');
    scene.text('Yaroslav approaches you, he just goes for it without any pause or warning. You are about to shout expecting pain, but just bit your lip in pleasure as you realize he has entered your pussy.');
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/yaroslav/sex/rabotu_23.jpg');
    scene.text('You start to get in the mood and enjoy the sex, when he removes his penis and starts to work it against your anus. Slowly you feel him enter and the head of his penis starts to fill your butt.');
    qspCall(s, 'arousal', 'anal', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/yaroslav/sex/rabotu_21.jpg');
    scene.text('He turns you to your side and starts to drive his full length home. He supports your head with his hand and you suck on his thumb the initial pain giving way to bliss.');
    qspCall(s, 'arousal', 'anal', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Change position', handler: (st: GameState) => {
    scene.img('images/characters/city/yaroslav/sex/rabotu_25.jpg');
    scene.text('You push Yaroslav back and getting the hint he withdraws and helps you down. Lying on his back he guides your anus back on to his cock and you set your own rhythm trying to bring yourself to orgasm.');
    qspCall(s, 'arousal', 'anal', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', 'A86', 1, 0, 0, 0, 20);
    qspCall(s, 'cum_call', 'breasts', 'A86', 1, 0, 0, 0, 20);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/yaroslav/sex/rabotu_27.jpg');
    scene.text('As he is about to come, Yaroslav moaning and holding the base of his own cock, pulls back and sprays his spunk all over your face. You sit there catching your breath as sperm drips down onto you breasts.');
    scene.actions([
      { label: 'Take a shower', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).noshampoo = 1;
    qspCall(s, 'din_van', 'showerdin');
    qspCall(s, 'money', 'earn', 3500);
  }, goto: ['yarik', 'end'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterEnd(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_hairbsh = 0;
  (s as any).noshampoo = 1;
  qspCall(s, 'din_van', 'showerdin');
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/yaroslav/sex/rabotu_28.jpg');
  scene.text('Yaroslav leaves you to shower and gives you your wage and the bonus as per your agreement. He tells you he will be around every evening at the same time.');
  scene.actions([
    { label: 'Get dressed and leave', handler: (st: GameState) => {
    (s as any).yarikwork = ((s as any).yarikwork ?? 0) + (1);
  }, goto: ['city_center', ''] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'yaqw':
      enterYaqw(s, scene);
      break;
    case '1':
      enter1(s, scene);
      break;
    case '2':
      enter2(s, scene);
      break;
    case '3':
      enter3(s, scene);
      break;
    case '4':
      enter4(s, scene);
      break;
    case '5':
      enter5(s, scene);
      break;
    case '6':
      enter6(s, scene);
      break;
    case '7':
      enter7(s, scene);
      break;
    case 'end':
      enterEnd(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const yarik: LocationDef = {
  name: 'yarik',
  title: 'Apartment businessman Yaroslav',
  region: 'other',
  enter: enter,
};
