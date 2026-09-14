import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterBVikaPresentStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/university/girl/vika/vika1.jpg');
  scene.text('"Where are we going?" you ask as you try to cover yourself the best you can using the bathrobe.');
  scene.text('Vika stops near the door at the end of the corridor.');
  scene.text('"Put this on, it\'s a surprise!" she tells you as she hands you a blindfold.');
  scene.text('"Em, okay…" you reply before you put the blindfold on and Vika makes sure you can\'t see anything before she takes your hand and leads you inside the room.');
  scene.text('You carefully follow her to the back of the room, clutching her hand so you don\'t fall. As you walk, you can hear some other movement in the room.');
  scene.text('"If this is a surprise party, then I\'m not really dressed for it," you whisper.');
  scene.text('"Don\'t worry, we\'re here. Just wait here," Vika says as she lets go of your hand and you hear her whisper something before she closes the door.');
  scene.text('You hear some footsteps before someone suddenly squeezes your ass and paws at your breasts.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Remove the blindfold', goto: ['vikaev1', 'b_vika_present_1'] },
  ]);
  scene.build();
}

function enterBVikaPresent_1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
  (s as any).b_present_guys = 6;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/university/girl/vika/sex/b_present_1.jpg');
  scene.text('You quickly tear off the blindfold and notice six men of different ages standing around you.');
  scene.text('"Surprise!" Vika screams while happily jumping around.');
  scene.text('As you\'re trying to figure out what\'s going on, you fail to notice that your bathrobe has been removed and hands are pawing at you.');
  scene.text('"Vika… Oh… What\'s going on?" you ask, barely able to gather your thoughts.');
  scene.text('"It\'s my gift for you. Don\'t you like it? You choose, they\'re your sex slaves for the day!"');
  if (((s as any).stat ?? 0)?.['men_fucked'] < 6) {
    scene.actions([
      { label: 'Say that there\'s too many of them', goto: ['vikaev1', 'b_vika_present_2'] },
    ]);
  } else {
    scene.actions([
      { label: 'Tell them all to stay', goto: ['vikaev1', 'b_vika_present_3'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Yell at Vika and leave', goto: ['vikaev1', 'b_vika_present_out'] },
  ]);
  scene.build();
}

function enterBVikaPresentOut(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'set', 'A220', 0);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/university/girl/vika/sex/b_present_1.jpg');
  scene.text('"Are you fucking serious, Vika?!" you yell, your reaction causing the men to quickly step away.');
  scene.text('"I… I thought you\'d like it…" she mumbles, trying to justify her actions.');
  scene.text('"You really thought I\'d appreciate being gangbanged like a simple whore?!"');
  scene.text('You quickly pull the bathrobe back on before returning to your room.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['uni_dorm', 'dorm_room'] },
  ]);
  scene.build();
}

function enterBVikaPresent_2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/university/girl/vika/sex/b_present_2.jpg');
  scene.text('You smile coyly and turn towards the men. You grab one of them and press his head on your breast as you feel another reach under the teddy and fondling your nipples.');
  scene.text('"I don\'t know, Vika… I\'ve never been with this many men at once. Hell, I haven\'t been with this many men in total!"');
  scene.text('As you say this, someone\'s thick fingers start caressing your crotch through the teddy.');
  scene.text('"It\'s nothing to worry about. It\'ll be a great experience for you, so just enjoy yourself. I\'ll make sure you aren\'t interrupted."');
  scene.text('She leaves the room and locks it from the outside. Once she\'s gone, the men relax a little and start stroking their cocks through their pants.');
  qspCall(s, 'arousal', 'foreplay', 10, 'gangbang');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get down on your knees', goto: ['vikaev1', 'b_vika_present_blow'] },
  ]);
  scene.build();
}

function enterBVikaPresent_3(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/university/girl/vika/sex/b_present_2.jpg');
  scene.text('You smile coyly and turn towards the men. You grab one of them and press his head on your breast. You feel one of the men touching you under the teddy, fondling your breasts and nipples.');
  scene.text('"Thank you, Vika! This is a wonderful birthday present! Boys, come to me!"');
  scene.text('Someone\'s thick fingers immediately start caressing your crotch through the teddy.');
  scene.text('"I knew you\'d love it! Enjoy yourself. I\'ll make sure you aren\'t interrupted."');
  scene.text('She leaves the room and locks it from the outside. Once she\'s gone, the men relax a little and start stroking their cocks through their pants.');
  qspCall(s, 'arousal', 'foreplay', 10, 'gangbang');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get down on your knees', goto: ['vikaev1', 'b_vika_present_blow'] },
  ]);
  scene.build();
}

function enterBVikaPresentBlow(s: GameState, scene: SceneBuilder): void {
  (s as any).picrand = Math.floor(Math.random() * 4) + 1;
  scene.img(`images/characters/city/university/girl/vika/sex/b_present_blow${((s as any).picrand || '')}.jpg`);
  scene.text('You get down on your knees and are instantly surrounded on all sides by large, rock-hard cocks.');
  scene.text('You grab the closest one, giving it a lick then wrapping your lips around it and swallowing it. You savor and enjoy the strangers cock, playing with his head and using your tongue to carefully lick every centimeter of his shaft.');
  scene.text('The other men put their cocks right in front of you. You grab two of them and begin slowly jerking them off.');
  qspCall(s, 'arousal', 'bj', 10, 'gangbang');
  qspCall(s, 'arousal', 'hj', (-10), 'gangbang');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep on sucking', goto: ['vikaev1', 'b_vika_present_blow1'] },
  ]);
  scene.build();
}

function enterBVikaPresentBlow1(s: GameState, scene: SceneBuilder): void {
  (s as any).picrand = Math.floor(Math.random() * 4) + 1;
  scene.img(`images/characters/city/university/girl/vika/sex/b_present_blow${((s as any).picrand || '')}.jpg`);
  scene.text('Trying your best to appease everyone, you make sure that no cock gets left out, but one of the men is clearly irritated that he has to wait for his turn; he shoves his cock in your mouth and forces his way down your throat, making you choke.');
  scene.text('The rest, seeing that you\'re not resisting, join in. Before you know it, your mouth is being fucked by all of them in turn.');
  qspCall(s, 'arousal', 'bj', 10, 'gangbang', 'deepthroat', 'rough');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep on sucking', goto: ['vikaev1', 'b_vika_present_blow1'] },
    { label: 'Let them fuck you', goto: ['vikaev1', 'b_vika_present_sex1'] },
  ]);
  scene.build();
}

function enterBVikaPresentSex1(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).stat) (s as any).stat = {}; (s as any).stat['anal'] = ((s as any).stat['anal'] ?? 0) + (6);
  (s as any).pcs_hairbsh = 0;
  if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
    (s as any).pcs_makeup = 0;
  }
  if (((s as any).pcs_ass ?? 0) > 15) {
    scene.img('images/characters/city/university/girl/vika/sex/b_present_sex2.jpg');
  } else {
    qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
    scene.img('images/characters/city/university/girl/vika/sex/b_present_sex1.jpg');
  }
  scene.text('One of the guys picks you up and carries you over to the sofa, where he throws you down on the sofa. Without hesitating, you start sucking him off as another man comes over and has you jerk him off.');
  scene.text('At the same time, another comes up from behind and spreads your legs, examining your holes.');
  if (((s as any).mc_inventory ?? 0)?.['lubricant'] === 0) {
    (s as any).lubonus = 2;
    scene.text('He starts playing around your anus. As there\'s no lubricant to be found, he spits on his finger and slowly spreads it around, making it somewhat easier for penetration.');
  } else {
    if (!(s as any).mc_inventory) (s as any).mc_inventory = {}; (s as any).mc_inventory['lubricant'] = ((s as any).mc_inventory['lubricant'] ?? 0) - (1);
    (s as any).lubonus = 10;
    scene.text('One of the men standing in the background hands over a bottle of lube to the guy playing with your anus. You feel the cold liquid land on your bare ass before he uses his fingers to rub the lube around and into your anus.');
  }
  if (((s as any).pcs_ass ?? 0) > 15) {
    scene.text('His cock penetrates your ass deeply, and he\'s able to keep the perfect pace so you can continue to take care of the other guys without any interruption.');
    scene.text('After a while, he begins picking up his pace, making you moan even though your mouth is occupied.');
  } else {
    (s as any).agape = ((s as any).agape ?? 0) + (2);
    scene.text('Not wanting to waste everyone\'s time, the man grabs you by the hips and thrusts his cock into your ass. You feel a sharp pain and cry out as he pushes deeper, your anus stretching to accommodate his girth.');
    scene.text('You\'re barely able to contain yourself and inadvertently bite down on the cock in your mouth, making its owner shout out loudly.');
    scene.text('The guy in your ass smirks, but gives little care about his friend. Instead, he picks up the pace, and before you know it, he\'s pounding your ass.');
  }
  qspCall(s, 'arousal', 'anal', 10, 'gangbang');
  qspCall(s, 'arousal', 'bj', (-10), 'gangbang');
  qspCall(s, 'arousal', 'hj', (-10), 'gangbang');
  qspCall(s, 'stat', '');
  scene.text('As the excitement takes over, you unwrap your lips from the cock you\'ve been sucking.');
  scene.text('"I want to get fucked in both my holes at the same time!" you cry out.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Take me all at once', goto: ['vikaev1', 'b_vika_present_sex2'] },
  ]);
  scene.build();
}

function enterBVikaPresentSex2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).picrand = Math.floor(Math.random() * 8) + 1;
  scene.img(`images/characters/city/university/girl/vika/sex/b_present_dp${((s as any).picrand || '')}.jpg`);
  if (((s as any).picrand ?? 0) < 3) {
    scene.text('They make you ride one of the men\'s cock while another guy standing behind you spreads your ass cheeks and slowly enters you. It takes a while until they\'re able to sync their movements, but as soon they get a good rhythm going, you feel a surge come upon you and start moaning loudly.');
    scene.text('They don\'t let you moan too long as a third guy steps in front of you and shoves his cock deep into your throat. Your sounds are muffled thanks to his constant thrusting, and you do your best to focus on pleasing him.');
    scene.text('The guys treat you like a fuck doll, drilling you hard in all the available holes. They often change positions, giving you plenty of opportunities to taste your own juices.');
    qspCall(s, 'arousal', 'anal', 10, 'gangbang');
    qspCall(s, 'arousal', 'bj', 10, 'gangbang');
    qspCall(s, 'arousal', 'vaginal', 10, 'gangbang');
    qspCall(s, 'arousal', 'hj', (-10), 'gangbang');
  } else {
    if (((s as any).picrand ?? 0) < 5) {
      scene.text('As you lie down on one of the men, he quickly grabs his cock and thrusts into your ass. The others all stand and observe for a while until another one decides to step up and penetrate your pussy. Thanks to their fine pacing, it doesn\'t take long before you start moaning loudly from the pleasure you\'re feeling.');
      scene.text('Some of the men tell you how they love hearing you scream with pleasure while two of them grab your hands and place them on their rock-hard cocks so you can keep them prepared.');
      scene.text('The guys treat you like a fuck doll, drilling your holes so hard that they often need a rest and switch positions. Not wanting to let their cocks go limp, you help them out by jerking them off.');
      qspCall(s, 'arousal', 'anal', 10, 'gangbang');
      qspCall(s, 'arousal', 'hj', 10, 'gangbang');
      qspCall(s, 'arousal', 'vaginal', (-10), 'gangbang');
    } else {
      if (((s as any).picrand ?? 0) === 5) {
        scene.text('They have you get down on all fours before two of the men step up behind you, one penetrating your ass while the other penetrates your pussy. They\'re thrusting pretty furiously, stretching your holes out and making you moan loudly from the pleasure.');
        scene.text('They don\'t let you moan too long as a third guy steps in front of you and shoves his cock deep into your throat. Your sounds are muffled thanks to his constant thrusting, and you do your best to focus on pleasing him.');
        scene.text('The guys treat you like a fuck doll, drilling you hard in all the available holes. They often change positions, giving you plenty of opportunities to taste your own juices.');
        qspCall(s, 'arousal', 'anal', 10, 'gangbang');
        qspCall(s, 'arousal', 'bj', 10, 'gangbang');
        qspCall(s, 'arousal', 'vaginal', (-10), 'gangbang');
      } else {
        scene.text('The guy fucking you in the ass suddenly grabs you by the thighs and lifts you up before he continues to pound you. Another guy steps in front of you and shoves his cock in your pussy. The sensation is phenomenal, and it doesn\'t take long before you start moaning loudly.');
        scene.text('The pleasant feeling is driving you crazy, and you lose control of yourself. Instead of slowing down, the guys instead pick up the pace and continue fucking you.');
        scene.text('Just when you\'re about to orgasm, though, they stop and let two others take over, who proceed to fuck you in the same position.');
        qspCall(s, 'arousal', 'anal', 10, 'gangbang');
        qspCall(s, 'arousal', 'vaginal', (-10), 'gangbang');
      }
    }
  }
  (s as any).b_present_cum = Math.floor(Math.random() * 2) + 0;
  if (((s as any).b_present_cum ?? 0) === 1) {
    (s as any).b_present_ass_or_vag = Math.floor(Math.random() * 2) + 1;
    if (((s as any).b_present_ass_or_vag ?? 0) === 1) {
      (s as any).b_present_guys = ((s as any).b_present_guys ?? 0) - (1);
      qspCall(s, 'cum_manage', '');
      scene.text('One of them grunts loudly as you feel him filling your pussy with his warm cum.');
    } else {
      if (((s as any).b_present_ass_or_vag ?? 0) === 2) {
        (s as any).b_present_guys = ((s as any).b_present_guys ?? 0) - (1);
        (s as any).spafinloc = 3;
        qspCall(s, 'cum_manage', '');
        scene.text('One of the guys lets out a loud roar as you feel him filling your ass with his warm cum.');
      }
    }
  }
  if (((s as any).b_present_guys ?? 0) === 2) {
    scene.text('You\'re a bit surprised that there are only two guys remaining. You expected a bit more from them…');
    scene.actions([
      { label: 'Tell them to cum on your face', goto: ['vikaev1', 'b_vika_present_cum'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Further', goto: ['vikaev1', 'b_vika_present_sex2'] },
  ]);
  scene.build();
}

function enterBVikaPresentCum(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'raise', 'large');
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'arousal', 'end');
  (s as any).spafinloc = 12;
  qspCall(s, 'cum_manage', '');
  (s as any).spafinloc = 11;
  qspCall(s, 'cum_manage', '');
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/university/girl/vika/sex/b_present_cum.jpg');
  scene.text('"I want you to completely cover my face," you say as you dismount the cock inside you and position yourself on the floor, ready to get coated…');
  scene.text('No one says a word as they energetically jerk off while you keep touching your clit.');
  scene.text('It doesn\'t take long before they start grunting and groaning as your face is covered by their warm cum.');
  scene.text('You sit with a satisfied grin on your face, cum slowly trickling from your holes as you use your fingers to scoop up the cum on your face before sucking on them.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['uni_dorm', 'dorm_room'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'b_vika_present_start':
      enterBVikaPresentStart(s, scene);
      break;
    case 'b_vika_present_1':
      enterBVikaPresent_1(s, scene);
      break;
    case 'b_vika_present_out':
      enterBVikaPresentOut(s, scene);
      break;
    case 'b_vika_present_2':
      enterBVikaPresent_2(s, scene);
      break;
    case 'b_vika_present_3':
      enterBVikaPresent_3(s, scene);
      break;
    case 'b_vika_present_blow':
      enterBVikaPresentBlow(s, scene);
      break;
    case 'b_vika_present_blow1':
      enterBVikaPresentBlow1(s, scene);
      break;
    case 'b_vika_present_sex1':
      enterBVikaPresentSex1(s, scene);
      break;
    case 'b_vika_present_sex2':
      enterBVikaPresentSex2(s, scene);
      break;
    case 'b_vika_present_cum':
      enterBVikaPresentCum(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const vikaev1: LocationDef = {
  name: 'vikaev1',
  title: '"Where are we going?" you ask as you try to cover yourself t',
  region: 'other',
  enter: enter,
};
