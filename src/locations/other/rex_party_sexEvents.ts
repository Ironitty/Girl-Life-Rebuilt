import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterIraLenaFun(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'boys') {
    scene.text('<center><b>Ira and Lena</b></center>');
    if ((Math.floor(Math.random() * 2) + 1) === 1) {
      scene.img('images/locations/pavlovsk/resident/rekshome/party/party_iralena_3_2.mp4');
    } else {
      scene.img('images/locations/pavlovsk/resident/rekshome/party/party_iralena_3_1.jpg');
    }
    scene.text('Music pumping puts you in the mood of fierce desire to have fun with Lena and Ira. Dancing with them, you start pulling their clothes off and they follow suit, taking your clothes off until all three of you are half naked just wearing your underwear.');
    scene.text('The buzz of the booze makes you feel a lot more liberated as you slap each of the girls on the ass, which they return the favor and soon all three of you are taking turns slapping each other\'s asses, in front of the guys.');
    qspCall(s, 'arousal', 'foreplay', 5, 'exhibitionism', 'lesbian');
    qspCall(s, 'stat', '');
    if ((Math.floor(Math.random() * 2) + 1) === 1) {
      if ((!((s as any).rex_love ?? 0))) {
        scene.text('Seeing what you are doing, Rex walks over and grabs you, then drags you into another room.');
      }
      if (((s as any).rex_love ?? 0) === 1) {
        scene.text('Seeing what you are doing, Rex walks over and grabs you, then drags you into another room.');
      }
      if (((s as any).rex_love ?? 0) === 1) {
        scene.text('Rex glares in the direction of Roma and your female companions.');
      }
      if (((s as any).rex_love ?? 0) === 1) {
        // TODO-QSP: act 'Stay with Rex': gt 'rex_party_smallEvents', 'rex_talk'
      }
      scene.actions([
        { label: 'Go with him', goto: ['rex_party_sexEvents', 'ira_lena_rex'] },
      ]);
    } else {
      scene.text('Seeing what you are doing, a couple of guys walk over and grab you, then they drag you into another room.');
      if (((s as any).rex_love ?? 0) === 1) {
        scene.text('Rex glares in the direction of your female companions.');
      }
      if (((s as any).rex_love ?? 0) === 1) {
        // TODO-QSP: act 'Stay with Rex': gt 'rex_party_smallEvents', 'rex_talk'
      }
      scene.actions([
        { label: 'Go with them', goto: ['rex_party_sexEvents', 'ira_fun_boys'] },
      ]);
    }
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'girls') {
    qspCall(s, 'npcStat', 'A259');
    qspCall(s, 'npcStat', 'A258', 'a');
    scene.text('<center><b>Ira and Lena</b></center>');
    scene.img(`images/locations/pavlovsk/resident/rekshome/party/party_iralena_7_${Math.floor(Math.random() * 2) + 1}.jpg`);
    scene.text('While you dance Lena moves in close to you and soon you are dancing up against each other, she leans in and kisses you. You momentarily dumbfounded, her lips are soft and they taste sweet as you kiss her back. Ira with fervent interest is watching the two of you.');
    scene.text('Soon Ira joins the two of you, then all three of you start kissing each other. Your hands exploring each other\'s bodies, as you begin to remove each other\'s clothes right in the middle of the room, in front of everyone.');
    qspCall(s, 'arousal', 'kiss', 3, ((s as any).npcID ?? 0), 'lesbian', 'group');
    qspCall(s, 'arousal', 'kiss', 2, ((s as any).npcID1 ?? 0), 'lesbian', 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      { label: 'Continue cuddling', handler: (st: GameState) => {
    scene.text('<center><b>Ira and Lena</b></center>');
    scene.img('images/locations/pavlovsk/resident/rekshome/party/party_iralena_7_3.jpg');
    scene.text('You, along with Lena and Ira undress each other as you continue you to kiss and caress each other until you are all completely naked right in the middle of the room, in front of all the other guys and girls.');
    if (((s as any).rex_love ?? 0) === 1) {
      scene.text('Rex curiously stares only at you.');
    }
    scene.text('As your fingers and tongues begin to explore each other\'s naked bodies you finally realize where you are, surrounded by guys who start cheering and whistling loudly pulling you at of the moment.');
    scene.text('You have gone too far, the girls and you gather up your things as you leave the room the guys calmed down and continued to have fun discussing the incident.');
    qspCall(s, 'arousal', 'foreplay', 5, ((s as any).npcID ?? 0), 'lesbian', 'group');
    qspCall(s, 'arousal', 'foreplay', (-5), ((s as any).npcID1 ?? 0), 'lesbian', 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      { label: 'Drag the girls in another room', handler: (st: GameState) => {
    scene.text('<center><b>Ira and Lena</b></center>');
    scene.img('images/locations/pavlovsk/resident/rekshome/party/party_iralena_7_4.jpg');
    scene.text('As you leave the room, you are far to turned on to stop now, so you grab Ira and Lena by the hands and pull them into one of the empty bedrooms with you. "Well, girls, should we continue here, without prying eyes." you ask');
    scene.text('They answer you by dropping their things on the floor and join you in kissing and fondling each other again.');
    qspCall(s, 'arousal', 'foreplay', 5, 'lesbian', 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Start bed games', handler: (st: GameState) => {
    scene.text('<center><b>Ira and Lena</b></center>');
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      scene.img(`images/locations/pavlovsk/resident/rekshome/party/party_iralena_7_${Math.floor(Math.random() * 3) + 5}.jpg`);
    } else {
      scene.img(`images/locations/pavlovsk/resident/rekshome/party/party_iralena_7_${Math.floor(Math.random() * 2) + 8}.mp4`);
    }
    scene.text('Together, laying down comfortably you continue to kiss and caress each other.');
    scene.text('You lick each other, using your tongue and fingers to explore each other\'s pussies. Lapping up and swallowing each other\'s juices, stopping only to share a passionate kiss with one another.');
    scene.text('You work each other\'s bodies, sometimes two on one and other times each giving and receiving from different girls. As you feel yourself getting close, you pay extra attention to whom ever seems to be lagging behind, emphasizing the sensual caress in the most erogenous places.');
    scene.text('Soon, the three of you are moaning almost as one, all nearing your peak.');
    qspCall(s, 'arousal', 'kiss', 3, ((s as any).npcID ?? 0), 'lesbian', 'group');
    qspCall(s, 'arousal', 'kiss', 2, ((s as any).npcID1 ?? 0), 'lesbian', 'group');
    qspCall(s, 'arousal', 'cuni', 2, ((s as any).npcID ?? 0), 'lesbian', 'group');
    qspCall(s, 'arousal', 'cuni', 3, ((s as any).npcID1 ?? 0), 'lesbian', 'group');
    qspCall(s, 'arousal', 'cuni_give', 3, ((s as any).npcID ?? 0), 'lesbian', 'group');
    qspCall(s, 'arousal', 'cuni_give', 2, ((s as any).npcID1 ?? 0), 'lesbian', 'group');
    qspCall(s, 'arousal', 'vaginal_finger', 2, ((s as any).npcID ?? 0), 'lesbian', 'group');
    qspCall(s, 'arousal', 'vaginal_finger', 3, ((s as any).npcID1 ?? 0), 'lesbian', 'group');
    qspCall(s, 'arousal', 'vaginal_finger_give', (-5), ((s as any).npcID ?? 0), 'lesbian', 'group');
    qspCall(s, 'arousal', 'vaginal_finger_give', (-5), ((s as any).npcID1 ?? 0), 'lesbian', 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Cum', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).iralenasleep = ((s as any).iralenasleep ?? 0) + (1);
    scene.text('<center><b>Ira and Lena</b></center>');
    scene.img('images/locations/pavlovsk/resident/rekshome/party/party_iralena_7_10.mp4');
    scene.text('Laying side by side with you in the middle, your hands on each other\'s clits, rubbing and caressing them until an incredibly strong orgasm overtakes you all, and the three of you wither in sweet release. "Uhh, who says we need men anyways?" All of your answers with satisfied giggles.');
    scene.text('Continuing to be in ecstasy, you slowly come down on your sexual high, as you do you slowly fall asleep.');
    qspCall(s, 'arousal', 'vaginal_finger', 3, ((s as any).npcID ?? 0), 'lesbian', 'group');
    qspCall(s, 'arousal', 'vaginal_finger', 2, ((s as any).npcID1 ?? 0), 'lesbian', 'group');
    qspCall(s, 'arousal', 'vaginal_finger_give', (-5), ((s as any).npcID ?? 0), 'lesbian', 'group');
    qspCall(s, 'arousal', 'vaginal_finger_give', (-5), ((s as any).npcID1 ?? 0), 'lesbian', 'group');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Fall asleep', goto: ['rex_party_smallEvents', 'sleep'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterIraLenaRex(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Ira and Lena</b></center>');
  if ((!((s as any).rex_love ?? 0))) {
    qspCall(s, 'npcStat', 'A57');
  } else {
    qspCall(s, 'npcStat', 'A56');
  }
  if ((Math.floor(Math.random() * 2) + 1) === 1) {
    scene.img('images/locations/pavlovsk/resident/rekshome/party/party_iralena_4_2.mp4');
  } else {
    scene.img('images/locations/pavlovsk/resident/rekshome/party/party_iralena_4_1.jpg');
  }
  // TODO-QSP: dynamic text: You go with <<$boydesc>>, Lena and Ira follow a little ways behind and without w...
  scene.text(`You go with ${((s as any).boydesc ?? 0)}, Lena and Ira follow a little ways behind and without waiting for them, he puts you down on your knees.`);
  scene.text('You finish stripping naked, he has his cock out stroking it watching as you got undressed, seeing his cock you start sucking it at once.');
  scene.text('Just as you start sucking his cock, Lena and Ira belatedly join you. They start kissing each other and undressing.');
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'unknown');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Suck together', handler: (st: GameState) => {
    scene.text('<center><b>Ira and Lena</b></center>');
    if ((Math.floor(Math.random() * 2) + 1) === 1) {
      scene.img(`images/locations/pavlovsk/resident/rekshome/party/party_iralena_5_${Math.floor(Math.random() * 2) + 1}.jpg`);
    } else {
      scene.img('images/locations/pavlovsk/resident/rekshome/party/party_iralena_5_3.mp4');
    }
    scene.text('Lena and Ira come over and kneel down next to you, one of them on each side of you. Each of you take turn sucking his cock, while the other two kiss each other or suck on his balls.');
    qspCall(s, 'arousal', 'bj', 5, 'sub', 'unknown', 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Lie on your back', handler: (st: GameState) => {
    qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
    qspCall(s, 'cum_call', 'precum', ((s as any).npcID ?? 0), 1);
    scene.text('<center><b>Ira and Lena</b></center>');
    scene.img('images/locations/pavlovsk/resident/rekshome/party/party_iralena_5_4.jpg');
    scene.text('You lay down on your back legs wide apart, Ira crawls over to you on all fours and buries her face between your legs and begins kissing, licking and sucking on your clit.');
    // TODO-QSP: dynamic text: <<$boydesc>> takes advantage of Ira's position and slides his cock inside of her...
    scene.text(`${((s as any).boydesc ?? 0)} takes advantage of Ira's position and slides his cock inside of her and begins to fuck her roughly.`);
    // TODO-QSP: dynamic text: Ira bouncing her hips back and forth, fucking him as much as he was fucking her ...
    scene.text(`Ira bouncing her hips back and forth, fucking him as much as he was fucking her as she keeps licking your pussy, Lena starts kissing ${((s as any).boydesc ?? 0)}, while her hand caress his balls.`);
    // TODO-QSP: dynamic text: Time flies fast, Ira, Lena and yourself have all switched positions many times, ...
    scene.text(`Time flies fast, Ira, Lena and yourself have all switched positions many times, letting him fuck all three of you, ${((s as any).boydesc ?? 0)} can take no more.`);
    qspCall(s, 'arousal', 'cuni', 5, 'sub', 'unknown', 'lesbian');
    qspCall(s, 'arousal', 'vaginal', (-5), 'sub', 'unknown');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Cum', goto: ['rex_party_sexEvents', 'ira_lena_rex_cum'] },
    ]);
  } },
      { label: 'Bend over', handler: (st: GameState) => {
    qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
    qspCall(s, 'cum_call', 'precum', ((s as any).npcID ?? 0), 1);
    scene.text('<center><b>Ira and Lena</b></center>');
    scene.img('images/locations/pavlovsk/resident/rekshome/party/party_iralena_5_5.jpg');
    // TODO-QSP: dynamic text: You bend over in front of him, Lena and Ira obediently bend over in front of <<$...
    scene.text(`You bend over in front of him, Lena and Ira obediently bend over in front of ${((s as any).boydesc ?? 0)} as well. One of them to each side of you, giving him a lovely view of all three of your asses.`);
    // TODO-QSP: dynamic text: <<$boydesc>> enjoys the spectacular view of your graceful asses. He fucks you fi...
    scene.text(`${((s as any).boydesc ?? 0)} enjoys the spectacular view of your graceful asses. He fucks you first, while he slaps the girls on the ass, as he pounds into you.`);
    scene.text('You got the feeling he meant to take turns fucking each of you, but he grunts and can no longer hold back.');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'unknown', 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Cum', goto: ['rex_party_sexEvents', 'ira_lena_rex_cum'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterIraLenaRexCum(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'foreplay', 5, 'group', 'lesbian');
  (s as any).spafinloc = 7;
  qspCall(s, 'cum_manage', '');
  scene.text('<center><b>Ira and Lena</b></center>');
  if ((Math.floor(Math.random() * 2) + 1) === 1) {
    (s as any).spafinloc = 12;
    qspCall(s, 'cum_manage', '');
    (s as any).spafinloc = 14;
    qspCall(s, 'cum_manage', '');
    scene.img('images/locations/pavlovsk/resident/rekshome/party/party_iralena_5_6.jpg');
    // TODO-QSP: dynamic text: <<$boydesc>> pulls out of you and blows his load all over your ass, covering it ...
    scene.text(`${((s as any).boydesc ?? 0)} pulls out of you and blows his load all over your ass, covering it in his spunk.`);
    scene.text('Lena and Ira without hesitation began to lick up all the cum, then they kiss you and each other, sharing the taste of sperm with you.');
    scene.text('');
  } else {
    (s as any).spafinloc = 11;
    qspCall(s, 'cum_manage', '');
    (s as any).spafinloc = 12;
    qspCall(s, 'cum_manage', '');
    scene.img(`images/locations/pavlovsk/resident/rekshome/party/party_iralena_5_${Math.floor(Math.random() * 2) + 7}.mp4`);
    scene.text('With a slap on your ass he pulls out, knowing what he wants you turn around and open your mouth, sticking out your tongue, your girlfriends obediently follow suit and open their mouths, sticking out there tongues as well.');
    // TODO-QSP: dynamic text: <<$boydesc>> jerks his cock until he starts shooting his sperm all over the thre...
    scene.text(`${((s as any).boydesc ?? 0)} jerks his cock until he starts shooting his sperm all over the three of you, he does his best to aim for your mouths and tries to make sure he gets at least a little in all of your mouths. Once his dick stops spurting cum the three of you start licking up the cum that missed your mouths and kissing, exchanging his sperm from one mouth to another mouth, until it finally ends up back in your mouth and you swallow it.`);
    scene.text('');
  }
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterIraFunBoys(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'arousal_funcs', 'stretch', 'vaginal', 2);
  qspCall(s, 'stat', '');
  qspCall(s, 'npcgeneratec', '', 0, 'Boy from Rex\'s Party', 17);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
  qspCall(s, 'npcgeneratec', '', 0, 'Boy from Rex\'s Party', 17);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'a');
  scene.text('<center><b>Ira and Lena</b></center>');
  scene.img('images/locations/pavlovsk/resident/rekshome/party/reksparty_party_toilet_7_4.jpg');
  scene.text('The three guys each pull one of you into the bathroom, they quickly help you girls finish getting undressed until your all naked. Once you are all completely naked the guys crowd around you in a circle and pull their dicks out of pants and begin stroking them, looking at you expectantly.');
  scene.actions([
    { label: 'Suck', handler: (st: GameState) => {
    scene.text('<center><b>Ira and Lena</b></center>');
    scene.img(`images/locations/pavlovsk/resident/rekshome/party/party_iralena_6_${Math.floor(Math.random() * 2) + 1}.jpg`);
    scene.text('With Lena and Ira, you get down on your knees in front of the guys, each of you take one of the cocks into your mouth and begin sucking on it. After a bit you switch which cock your sucking on, until all three of you have sucked all the guys cocks.');
    qspCall(s, 'arousal', 'bj', 5, 'sub', 'group', 'unknown');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Fuck', goto: ['rex_party_sexEvents', 'ira_boys_fuck'] },
    ]);
  } },
    { label: 'Fuck', goto: ['rex_party_sexEvents', 'ira_boys_fuck'] },
  ]);
  scene.build();
}

function enterIraBoysFuck(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Ira and Lena</b></center>');
  scene.img(`images/locations/pavlovsk/resident/rekshome/party/party_iralena_6_${Math.floor(Math.random() * 2) + 3}.jpg`);
  scene.text('Two of the guys, you, Ira, and Lena all take it into the bedroom. The two boys start off fucking Ira and Lena, while you fondled the girls. Eventually they switch and one of them bends you over and starts fucking your pussy, while another fucks Ira, leaving Lena to take turns kissing you and Ira. In time the boys keep switching until both of them have fucked all three of you several times. After several orgasms each, Ira, Lena and you lay back on the bed.');
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'group', 'unknown');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Cum', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'cum_call', 'precum', ((s as any).npcID1 ?? 0));
    qspCall(s, 'cum_call', 'stomach', ((s as any).npcID1 ?? 0));
    qspCall(s, 'cum_call', 'precum', ((s as any).npcID2 ?? 0));
    qspCall(s, 'cum_call', 'stomach', ((s as any).npcID2 ?? 0));
    (s as any).iralenasleep = ((s as any).iralenasleep ?? 0) + (1);
    scene.text('<center><b>Ira and Lena</b></center>');
    scene.img('images/locations/pavlovsk/resident/rekshome/party/party_iralena_6_5.jpg');
    scene.text('As Lena, Ira, and you lay on the bed side by side, the two boys jerk themselves off to finish. Spraying all three of your naked bodies with their spunk. As the boys get dressed and leave, the three of you kiss and lick the sperm off each other\'s bodies until you get too tired and fall asleep in a tangle.');
    qspCall(s, 'cum_cleanup', '', 14);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Fall asleep', goto: ['rex_party_smallEvents', 'sleep'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterRexSex(s: GameState, scene: SceneBuilder): void {
  (s as any).sexstart = 1;
  (s as any).sexvar = 3;
  qspCall(s, 'npcStat', 'A57');
  qspCall(s, 'dinsex2', 'stamina_npc');
  qspCall(s, 'cum_call', 'precum', ((s as any).npcID ?? 0), 1);
  if ((Math.floor(Math.random() * 2) + 1) === 1) {
    scene.img(`images/locations/pavlovsk/resident/rekshome/party/party_rex_party_gost_14_${Math.floor(Math.random() * 6) + 1}.jpg`);
  } else {
    scene.img('images/locations/pavlovsk/resident/rekshome/party/party_rex_party_gost_14_7.mp4');
  }
  if (((s as any).rex_love ?? 0) === 1) {
    // TODO-QSP: 'Rex gently grabbed you by the hair and began to move his penis to your mouth.
  }
  // TODO-QSP: caress it, my love, he asked with a smile.'
  if ((!((s as any).rex_love ?? 0))) {
    // TODO-QSP: 'Entering the room, Rex grabbed you by the hair and began to move his penis to your mouth.
  }
  // TODO-QSP: stroke it, bitch, he asked with a vicious smile.'
  scene.text('You took his head into your mouth and started sucking, after a few moments Rex started pushing his penis forcing you to swallow it even deeper. You were almost choking on his dick.');
  // TODO-QSP: dynamic text: You keep sucking his dick. ' + iif( rex_love = 0, 'Rex', 'Your lover') + ' looks...
  scene.text('You keep sucking his dick. \' + iif( rex_love = 0, \'Rex\', \'Your lover\') + \' looks at you and you can see in his eyes that he is ready for the next step.');
  qspCall(s, 'arousal', 'bj', 5, 'sub');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Lie on your back', goto: ['rex_party_sexEvents', 'rex_sex_missionary'] },
    { label: 'Get on all fours', goto: ['rex_party_sexEvents', 'rex_sex_dog'] },
    { label: 'Get on top', goto: ['rex_party_sexEvents', 'rex_sex_cow'] },
  ]);
  scene.build();
}

function enterRexSexCow(s: GameState, scene: SceneBuilder): void {
  (s as any).sexvar = ((s as any).sexvar ?? 0) - (1);
  qspCall(s, 'dinsex2', 'stamina_npc');
  qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
  (s as any).rex_sex = ((s as any).rex_sex ?? 0) + (1);
  scene.img(`images/locations/pavlovsk/resident/rekshome/party/party_rex_party_gost_10_${Math.floor(Math.random() * 5) + 1}.mp4`);
  scene.text('You jumped on top of Rex and took full control of the situation. Judging by his pleading eyes you knew he would not be able to resist.');
  scene.text('You lower yourself on his dick and start moving slowly until his dick his fully inserted into your pussy. Then you start increasing the pace. You let go of all your inhibitions and begin to moan very loud.');
  scene.text('You Lean on his hands and begin to move you body even faster than before. You can see that this is bringing Rex to ecstasy.');
  scene.text('His hands grabbed you by the waist and he started to help you move up and down on his powerful dick! You opened your mouth wide, and were taking a lot of deep breaths');
  if (((s as any).sexvar ?? 0) > 1) {
    scene.text('Slightly lowering the pace, Rex asks you to change position.');
  }
  if (((s as any).sexvar ?? 0) === 1) {
    scene.text('<br>He indicates that he will cum soon.');
  }
  qspCall(s, 'arousal', 'vaginal', 5, 'sub');
  qspCall(s, 'stat', '');
  if ((!((s as any).sexvar ?? 0))) {
    // TODO-QSP: act 'Make him cum': gt 'rex_party_sexEvents', 'rex_sex_cum'
  }
  if (((s as any).sexvar ?? 0) > 0) {
    // TODO-QSP: act 'Lie on your back': gt 'rex_party_sexEvents', 'rex_sex_missionary'
  }
  if (((s as any).sexvar ?? 0) > 0) {
    // TODO-QSP: act 'Get on all fours': gt 'rex_party_sexEvents', 'rex_sex_dog'
  }
  scene.build();
}

function enterRexSexDog(s: GameState, scene: SceneBuilder): void {
  (s as any).sexvar = ((s as any).sexvar ?? 0) - (1);
  qspCall(s, 'dinsex2', 'stamina_npc');
  qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
  (s as any).rex_sex = ((s as any).rex_sex ?? 0) + (1);
  if ((Math.floor(Math.random() * 2) + 1) === 1) {
    scene.img(`images/locations/pavlovsk/resident/rekshome/party/party_rex_party_gost_9_${Math.floor(Math.random() * 4) + 2}.mp4`);
  } else {
    scene.img('images/locations/pavlovsk/resident/rekshome/party/party_rex_party_gost_9_1.jpg');
  }
  scene.text('You got on all fours giving Rex full control over your hot body.');
  scene.text('Rex immediately drove his big dick inside your pussy.');
  scene.text('You were feeling the passion and desire burning inside you and you begged him to fuck you.');
  scene.text('Rex starts fucking you with full force and you can feel and hear his balls slapping against your ass.');
  if (((s as any).sexvar ?? 0) > 1) {
    scene.text('Slightly lowering the pace, Rex asks you to change position.');
  }
  if (((s as any).sexvar ?? 0) === 1) {
    scene.text('<br>He indicates that he will cum soon.');
  }
  qspCall(s, 'arousal', 'vaginal', 5, 'sub');
  qspCall(s, 'stat', '');
  if ((!((s as any).sexvar ?? 0))) {
    // TODO-QSP: act 'Make him cum': gt 'rex_party_sexEvents', 'rex_sex_cum'
  }
  if (((s as any).sexvar ?? 0) > 0) {
    // TODO-QSP: act 'Get on top': gt 'rex_party_sexEvents', 'rex_sex_cow'
  }
  if (((s as any).sexvar ?? 0) > 0) {
    // TODO-QSP: act 'Lie on your back': gt 'rex_party_sexEvents', 'rex_sex_missionary'
  }
  scene.build();
}

function enterRexSexMissionary(s: GameState, scene: SceneBuilder): void {
  (s as any).sexvar = ((s as any).sexvar ?? 0) - (1);
  qspCall(s, 'dinsex2', 'stamina_npc');
  qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
  scene.img(`images/locations/pavlovsk/resident/rekshome/party/party_rex_party_gost_8_${Math.floor(Math.random() * 5) + 1}.mp4`);
  scene.text('You lie down on your back, lasciviously opening your legs. Rex moves himself between them.');
  scene.text('Rex started teasing you by rubbing the head of his penis against your lips and clitoris. After a few moments he started pushing and entered your juicy pussy.');
  scene.text('His movements are strong, persistent and he is moving faster and faster…');
  scene.text('Blissful feelings start filling your mind. You are groaning and getting gradually louder…');
  if (((s as any).sexvar ?? 0) > 1) {
    scene.text('Slightly lowering the pace, Rex asks you to change position.');
  }
  if (((s as any).sexvar ?? 0) === 1) {
    scene.text('<br>He indicates that he will cum soon.');
  }
  qspCall(s, 'arousal', 'vaginal', 5, 'sub');
  qspCall(s, 'stat', '');
  if (((s as any).sexvar ?? 0) > 0) {
    // TODO-QSP: act 'Get on all fours': gt 'rex_party_sexEvents', 'rex_sex_dog'
  }
  if (((s as any).sexvar ?? 0) > 0) {
    // TODO-QSP: act 'Get on top': gt 'rex_party_sexEvents', 'rex_sex_cow'
  }
  if ((!((s as any).sexvar ?? 0))) {
    // TODO-QSP: act 'Make him cum': gt 'rex_party_sexEvents', 'rex_sex_cum'
  }
  scene.build();
}

function enterRexSexCum(s: GameState, scene: SceneBuilder): void {
  (s as any).sexstart = 0;
  (s as any).minut = 7;
  (s as any).spafinloc = 7;
  (s as any).sexpartkno = 1;
  (s as any).sexvolume = 8;
  qspCall(s, 'cum_manage', '');
  (s as any).spafinloc = 11;
  (s as any).sexpartkno = 1;
  (s as any).sexvolume = 12;
  qspCall(s, 'cum_manage', '');
  (s as any).spafinloc = 12;
  (s as any).sexpartkno = 1;
  (s as any).sexvolume = 20;
  qspCall(s, 'cum_manage', '');
  if ((!((s as any).rex_love ?? 0))) {
    (s as any).party_boys_in = ((s as any).party_boys_in ?? 0) + (1);
  }
  if (((s as any).rex_love ?? 0) === 1) {
    (s as any).Rex_save = ((s as any).Rex_save ?? 0) + (1);
  }
  scene.img(`images/locations/pavlovsk/resident/rekshome/party/party_rex_party_gost_11_${Math.floor(Math.random() * 4) + 1}.mp4`);
  scene.text('Rex quickly shoved his dick in your mouth and immediately poured out all the accumulated love juices.');
  scene.text('Cum filled your mouth. It soon overflows onto your lips and chin, Rex used his hand to push out the last drops and smeared them all over your face.');
  scene.text('It seems the evening was a success, you can\'t keep you eyes open any longer and start to fall asleep…');
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Fall asleep', goto: ['rex_party_smallEvents', 'sleep'] },
  ]);
  scene.build();
}

function enterRexToiletBj(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'npcStat', 'A57');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/rekshome/party/party_girls_party_gost_7.jpg');
  // TODO-QSP: dynamic text: Rex drags you to the toilet, sporting a huge erection. You quickly squat down an...
  scene.text(`Rex drags you to the toilet, sporting a huge erection. You quickly squat down and eagerly plunge his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock into your mouth. Rex exclaims excitedly, "Wow, you are really unpredictable, and for that I love you." With that, he fucks you in the mouth, while you suck on him passionately. Soon you can tell he is about to blow his load.`);
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 8);
    qspCall(s, 'arousal', 'end');
    (s as any).spafinloc = 12;
    qspCall(s, 'cum_manage', '');
    (s as any).spafinloc = 11;
    qspCall(s, 'cum_manage', '');
    (s as any).spafinloc = 7;
    qspCall(s, 'cum_manage', '');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/rekshome/party/party_girls_party_gost_8.jpg');
    scene.text('You eagerly open your mouth and instantly get hit by a stream of semen. Rex groans passionately as he finishes. "Ooh, babe, that was fantastic. You know how to get me in a good mood. You clean yourself up, while I go back to the guests."');
    scene.actions([
      { label: 'Move away', goto: ['rex_party', 'Toilet'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSisterFun(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npcStat', 'A33');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Anya</b></center>');
  scene.img(`images/locations/pavlovsk/resident/rekshome/party/party_sister_3_${Math.floor(Math.random() * 2) + 1}.mp4`);
  scene.text('The alcohol has hit you hard. You feel a little light headed, but warm and happy. Anya cheerfully stumbles up to you.');
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>, let's dance like there's no tomorrow!" Pulling her top off, ...
  scene.text(`"${((s as any).pcs_nickname ?? 0)}, let's dance like there's no tomorrow!" Pulling her top off, she helps you remove yours.`);
  scene.text('Before long, you and Anya have both stripped down to your panties and are dancing and shaking your tits for anyone that wants to watch.');
  if (((s as any).rex_love ?? 0) === 1) {
    scene.text('Rex watches you and your sister with great curiosity.');
  }
  scene.actions([
    { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    { label: 'Kiss', handler: (st: GameState) => {
    scene.text('<center><b>Anya</b></center>');
    scene.img(`images/locations/pavlovsk/resident/rekshome/party/party_sister_3_${Math.floor(Math.random() * 2) + 3}.jpg`);
    scene.text('As you dance half naked with your sister, the strong intoxication and excitement turns you on, and you start kissing her.');
    scene.text('She doesn\'t resist. Instead, she responds in kind, and soon you are both embraced in a deep passionate makeout, your tongues exploring each other\'s mouths.');
    if (((s as any).rex_love ?? 0) === 1) {
      scene.text('Rex continues to watch you and your sister with great curiosity.');
    }
    scene.text('Wild desire seizes you. As you continue to kiss, you pull her towards one of the bedrooms.');
    qspCall(s, 'arousal', 'kiss', 5, 'lesbian', 'incest');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go to Rex\'s room', handler: (st: GameState) => {
    scene.text('<center><b>Anya</b></center>');
    scene.img(`images/locations/pavlovsk/resident/rekshome/party/party_sister_3_${Math.floor(Math.random() * 6) + 5}.jpg`);
    scene.text('Once in the room, you push the door closed and then push Anya down on the bed. You quickly crawl on top of her as you continue to kiss and caress her.');
    scene.text('Anya, panting with excitement, caresses your body in return and just as fiercely returns the kiss.');
    qspCall(s, 'arousal', 'foreplay', 5, 'lesbian', 'incest');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Lick Anya\'s pussy', handler: (st: GameState) => {
    (s as any).sister_party_dom = 1;
    scene.text('<center><b>Anya</b></center>');
    scene.img(`images/locations/pavlovsk/resident/rekshome/party/party_sister_4_${Math.floor(Math.random() * 3) + 1}.mp4`);
    scene.text('You kiss her breasts and stomach right down to her panties. You pull her panties down, exposing her already soaking wet pussy, which you begin to lick.');
    scene.text('Both of you moan in pleasure. You feel hot with desire and can\'t help but think that, despite all your sister\'s protests that she isn\'t a lesbian, she is just kidding herself. She loves having lesbian sex way too much.');
    scene.text('Kissing, licking and sucking her clit, your face is wet with her juices. Her body twitches, and she moans loudly from your actions.');
    scene.text('After her moaning starts getting louder, you plunge your tongue inside of her, eliciting a cry of pleasure as you tongue fuck her pussy, slipping your tongue in and out of her.');
    qspCall(s, 'arousal', 'cuni_give', 5, 'lesbian', 'incest');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Caress Anya with your hand', goto: ['rex_party_sexEvents', 'sister_hand'] },
    ]);
  } },
      { label: 'Lie on your back', handler: (st: GameState) => {
    (s as any).sister_party_dom = 2;
    scene.text('<center><b>Anya</b></center>');
    scene.img(`images/locations/pavlovsk/resident/rekshome/party/party_sister_4_${Math.floor(Math.random() * 3) + 1}.mp4`);
    scene.text('You roll over as Anya climbs on top of you. As she kisses her way down to your nipples, your body arches in pleasure as you feel your pussy getting wet already.');
    scene.text('Kissing and licking her way down your body, she pulls your panties off and gently kisses your clit. Her tongue gently flicking your clit elicits deep moans of pleasure from you. You feel a full tremor run through your body as her tongue slips inside of you.');
    // TODO-QSP: dynamic text: "Mmm <<$pcs_nickname>>, you taste so sweet," Anya murmurs. You can't help but sm...
    scene.text(`"Mmm ${((s as any).pcs_nickname ?? 0)}, you taste so sweet," Anya murmurs. You can't help but smile at the skill of her tongue and again silently question her claims that she isn't into girls.`);
    scene.text('Anya\'s tongue works wonders, filling you with mounting pleasure as it strokes inside of you, penetrating you as deeply as it can go. She starts to tongue fuck your pussy.');
    qspCall(s, 'arousal', 'cuni', 5, 'lesbian', 'incest');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let Anya caress you with her hand', goto: ['rex_party_sexEvents', 'sister_hand'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSisterHand(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Anya</b></center>');
  scene.img(`images/locations/pavlovsk/resident/rekshome/party/party_sister_5_${Math.floor(Math.random() * 3) + 1}.mp4`);
  if (((s as any).sister_party_dom ?? 0) === 1) {
    scene.text('After licking your sister\'s pussy for some time, you pull your head away from her and start rubbing her clit with your fingers.');
    scene.text('She moans and bucks her hips against your hand. You then slip several of your fingers inside of her pussy and start rapidly finger blasting her wet hole.');
    scene.text('Her moans get louder, and she starts to fuck your fingers, pleading with you not to stop.');
    qspCall(s, 'arousal', 'vaginal_finger_give', 5, 'lesbian', 'incest');
    qspCall(s, 'stat', '');
  } else {
    scene.text('After receiving plenty of oral attention from Anya, she withdraws and starts rubbing your wet pussy with her fingers.');
    scene.text('She slips a finger into your wet hole, then a second and finally a third. She then starts finger fucking you in earnest.');
    scene.text('You start trying to hump her hand as you wither in pleasure, begging her not to stop.');
    qspCall(s, 'arousal', 'vaginal_finger', 5, 'lesbian', 'incest');
    qspCall(s, 'stat', '');
  }
  scene.actions([
    { label: 'Caress each other', handler: (st: GameState) => {
    scene.text('<center><b>Anya</b></center>');
    if ((Math.floor(Math.random() * 2) + 1) === 1) {
      scene.img(`images/locations/pavlovsk/resident/rekshome/party/party_sister_6_${Math.floor(Math.random() * 3) + 1}.mp4`);
      scene.text('Stopping a moment so you can both catch your breath, neither of you wants it to end, but you are both also desperate for release.');
      scene.text('Anya smiles wickedly at you. "Well little sis, let\'s see who eats pussy better and brings the other to orgasm first."');
      scene.text('With those words, you simultaneously seek out each other\'s crotch and start licking, sucking and using your fingers and tongue to fuck the other. You both start moaning and panting, close to your sweet releases.');
      scene.text('');
      qspCall(s, 'arousal', 'vaginal_finger_give', 5, 'lesbian', 'incest');
      qspCall(s, 'arousal', 'vaginal_finger', 5, 'lesbian', 'incest');
      qspCall(s, 'arousal', 'cuni_give', (-5), 'lesbian', 'incest');
      qspCall(s, 'arousal', 'cuni', 5, 'lesbian', 'incest');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Cum', goto: ['rex_party_sexEvents', 'sister_cum'] },
      ]);
    } else {
      if ((Math.floor(Math.random() * 2) + 1) === 1) {
        scene.img('images/locations/pavlovsk/resident/rekshome/party/party_sister_7_1.mp4');
      } else {
        scene.img('images/locations/pavlovsk/resident/rekshome/party/party_sister_7_2.jpg');
      }
      if (((s as any).sister_party_dom ?? 0) === 2) {
        scene.text('You let Anya know you also want to caress her pussy with your fingers.');
      }
      if (((s as any).sister_party_dom ?? 0) === 1) {
        scene.text('Anya lets you know she also wants to caress your pussy with her fingers.');
      }
      scene.text('With delicate and skillful hands, you plunge your fingers into each other, at times pulling them out to lick and suck on them. Both of you moan and pant, close to your sweet releases.');
      scene.text('');
      qspCall(s, 'arousal', 'vaginal_finger_give', 5, 'lesbian', 'incest');
      qspCall(s, 'arousal', 'vaginal_finger', 5, 'lesbian', 'incest');
      qspCall(s, 'arousal', 'cuni_give', (-5), 'lesbian', 'incest');
      qspCall(s, 'arousal', 'cuni', 5, 'lesbian', 'incest');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Cum', goto: ['rex_party_sexEvents', 'sister_cum'] },
      ]);
    }
  } },
    { label: 'Move to scissoring', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Anya</b></center>');
    scene.img(`images/locations/pavlovsk/resident/rekshome/party/party_sister_8_${Math.floor(Math.random() * 4) + 1}.mp4`);
    scene.text('Opening up your legs, you rub your wet pussies against one another in a slow motion, both moaning in pleasure as you look into each other\'s eyes. You slowly pick up speed as you continue to grind your pussies against one another.');
    qspCall(s, 'arousal', 'trib', 5, 'lesbian', 'incest');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Cum', goto: ['rex_party_sexEvents', 'sister_cum'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSisterCum(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Anya</b></center>');
  scene.img(`images/locations/pavlovsk/resident/rekshome/party/party_sister_9_${Math.floor(Math.random() * 2) + 1}.mp4`);
  scene.text('Your bodies convulse and spasm at the same time as a pure wave of pleasure overwhelms you both. In time, both of you will claim the other came first, but for now, you are lost in the ecstasy of the moment.');
  // TODO-QSP: dynamic text: "Oh <<$pcs_nickname>>, if you weren't my sister, I would marry you," your sister...
  scene.text(`"Oh ${((s as any).pcs_nickname ?? 0)}, if you weren't my sister, I would marry you," your sister mumbles.`);
  scene.text('Your warm, wet and limp bodies lie entangled in a moment of pure bliss before you fall asleep in each other\'s arms.');
  qspCall(s, 'arousal', 'vaginal_finger', 5);
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Fall asleep', goto: ['rex_party_smallEvents', 'sleep'] },
  ]);
  scene.build();
}

function enterDjBoobs(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'flash', 5);
  (s as any).dj_boobs = 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/rekshome/party/party_boy_2.jpg');
  scene.text('"Like this boys?" you ask as you put your breasts on the turntable and move it a bit with your breasts.');
  scene.text('Not much sound comes out from your attempt, but the guys seem to love it all the same.');
  scene.actions([
    { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    { label: 'Take off your top', goto: ['rex_party_sexEvents', 'dj_cock'] },
  ]);
  scene.build();
}

function enterDjCock(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/rekshome/party/party_boy_3.jpg');
  scene.text('Seeing the interest from the smiling guys watching you, you get rid of your top and bra and then place your naked breasts on the turntable, trying to play it topless. "I think I did better that time. What do you think?"');
  scene.text('The guy pulls out his erection and says "Not bad. Maybe try this instead."');
  scene.actions([
    { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    { label: 'Give his dick a try', goto: ['rex_party_sexEvents', 'dj_suck'] },
  ]);
  scene.build();
}

function enterDjSuck(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'foreplay', 5);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/rekshome/party/party_boy_4.jpg');
  scene.text('You grab his hard cock and place the head on the spinning record, barely touching it. The guy squirms a bit. Perhaps it was a little painful for him?');
  if (((s as any).rex_love ?? 0) === 1) {
    scene.text('You don\'t think Rex would like you playing these games with the DJ. You\'ve had a little fun, but that\'s enough.');
  }
  if ((!((s as any).rex_love ?? 0))) {
    scene.actions([
      { label: 'Kiss it and make it better', handler: (st: GameState) => {
    qspCall(s, 'npcgeneratec', '', 0, 'The DJ at Rex\'s Party', Math.floor(Math.random() * 6) + 17);
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
    scene.img('images/locations/pavlovsk/resident/rekshome/party/party_boy_5.jpg');
    scene.text('You decide to make amends to the guy and kiss the head of his cock.');
    // TODO-QSP: dynamic text: You find you don't want to stop and passionately start sucking his <<dick>>cm <<...
    scene.text(`You find you don't want to stop and passionately start sucking his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick right there in front of everyone.`);
    scene.text('After you suck him for a bit, he pulls you up and turns you around. Pulling your panties down, he pushes you forward, bending you over.');
    qspCall(s, 'arousal', 'bj', 5, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Bend over', handler: (st: GameState) => {
    qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
    qspCall(s, 'cum_manage', '');
    scene.img('images/locations/pavlovsk/resident/rekshome/party/party_boy_6.mp4');
    scene.text('You let him bend you over as he begins to rub the head of his dick against your pussy lips.');
    // TODO-QSP: dynamic text: He abruptly pushes his <<dick>>cm <<$dick_girth>> dick inside of you and starts ...
    scene.text(`He abruptly pushes his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick inside of you and starts fucking you with a fast pace.`);
    scene.text('Within just a few moments, he grunts and you feel him shooting his load deep into your wet pussy.');
    qspCall(s, 'arousal', 'vaginal', 5, 'exhibitionism');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cuminsidereact', '');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterToiletBoysBj(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/rekshome/party/party_girls_party_gost_10.jpg');
  scene.text('The boys take you to the bathroom and put you on your knees, unzipping their pants. Even in such a drunken state, you can still guess, what they want you to do.');
  scene.actions([
    { label: 'Suck', handler: (st: GameState) => {
    qspCall(s, 'npcgeneratec', '', 0, 'Boy from Rex\'s Party', 17);
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'npcgeneratec', '', 0, 'Boy from Rex\'s Party', 17);
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'a');
    qspCall(s, 'arousal', 'hj', 5, ((s as any).npcID ?? 0), 'group', 'gangbang');
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID1 ?? 0), 'group', 'gangbang');
    (s as any).guy = ((s as any).guy ?? 0) + (3);
    (s as any).stat['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/rekshome/party/party_girls_party_gost_11.jpg');
    scene.text('You try to service them both awkwardly, stroking them both while trying to lick the heads of their dick, in your drunken state you can\'t keep up any kind of rhythm with your hands. One of the guys tells you to just use your mouth.');
    scene.actions([
      { label: 'Remove hands', handler: (st: GameState) => {
    (s as any).i = Math.floor(Math.random() * 2) + 1;
    if (((s as any).i ?? 0) === 1) {
      // TODO-QSP: dynamic text: <center><video autoplay loop <<$set_imgh>> src="images/locations/pavlovsk/reside...
      scene.text(`<center><video autoplay loop ${((s as any).set_imgh ?? 0)} src="images/locations/pavlovsk/resident/rekshome/party/party_girls_party_gost_12_1.mp4"></video></center>`);
    }
    if (((s as any).i ?? 0) === 2) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/rekshome/part...
      scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/pavlovsk/resident/rekshome/party/party_girls_party_gost_12_3.jpg"></center>`);
    }
    scene.text('You dutifully remove your hands and instinctively begin to fondle your pussy with your free hand. The guys take turns fucking your mouth, sliding their cocks until their balls are against you chin, making your gag and your eyes water, while the other masturbates. Soon you bring them both to the point where they are ready to come.');
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID ?? 0), 'group', 'gangbang');
    qspCall(s, 'arousal', 'clit_finger', (-5), ((s as any).npcID1 ?? 0), 'masturbate');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth', ((s as any).npcID ?? 0), 1, '', '', 20);
    qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0), 1, '', '', 20);
    qspCall(s, 'cum_call', 'clothes', ((s as any).npcID1 ?? 0), 1, '', '', 20);
    qspCall(s, 'cum_call', 'hair', ((s as any).npcID1 ?? 0), 1, '', '', 20);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/rekshome/party/party_girls_party_gost_13.jpg');
    scene.text('Still squatting and barely able to stay in this position they grab their hard dicks and masturbate them until you get splashed with their semen, spurts of cum cover your face and hair. The boys wipe off the last drop of cum from their limp dicks onto your face and cackle as they leave you alone in the room.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Move away', goto: ['rex_party', 'Toilet'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterGirlOrgy(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
  qspCall(s, 'stat', '');
  scene.img(`images/locations/pavlovsk/resident/rekshome/party/party_girls_party_gost_16_${Math.floor(Math.random() * 2) + 1}.jpg`);
  scene.text('You decide that you want to be alone with the girls. You close the door, making sure that none of the boys will disturb you.');
  scene.actions([
    { label: 'Proceed', handler: (st: GameState) => {
    scene.img(`images/locations/pavlovsk/resident/rekshome/party/party_girls_party_gost_17_${Math.floor(Math.random() * 2) + 4}.jpg`);
    scene.text('You continue your lesbian play. It is an insane orgy as you caress each other, using your tongues and gentle fingers on every available hole. Time flies as you bring each other to orgasm, convulsing from the pleasure.');
    qspCall(s, 'arousal', 'kiss', 5, 'lesbian', 'group');
    qspCall(s, 'arousal', 'cuni', 5, 'lesbian', 'group');
    qspCall(s, 'arousal', 'cuni_give', 5, 'lesbian', 'group');
    qspCall(s, 'arousal', 'vaginal_finger', 5, 'lesbian', 'group');
    qspCall(s, 'arousal', 'vaginal_finger_give', 5, 'lesbian', 'group');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Fall asleep', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img(`images/locations/pavlovsk/resident/rekshome/party/party_girls_party_gost_18_${Math.floor(Math.random() * 2) + 1}.jpg`);
    scene.text('Covered in each other\'s juices and warm embraces you quickly fall asleep. After some time you are woken up by someone shouting at you and slapping your face.');
    scene.actions([
      { label: 'Wake up', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 90;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/rekshome/party/reksparty_party_kuh_7.jpg');
    scene.text('You slowly wake up as Anya keeps slapping you in the face.');
    scene.text('"Well that was fun. How are you feeling?"');
    scene.text('"Everything hurts, I\'m dizzy. Give me a little more sleep." you answer with a weak voice.');
    scene.text('"Get up stupid. Our parents are going to kill us, if we don\'t spend the night at home."');
    scene.actions([
      { label: 'Going home', goto: ['bedrPar', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterOrgy(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).rex_love ?? 0))) {
    qspCall(s, 'npcgeneratec', '', 0, 'Boy from Rex\'s Party', 17);
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'npcgeneratec', '', 0, 'Boy from Rex\'s Party', 17);
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'a');
    qspCall(s, 'npcgeneratec', '', 0, 'Boy from Rex\'s Party', 17);
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'b');
  } else {
    qspCall(s, 'npcStat', 'A57');
    qspCall(s, 'npcgeneratec', '', 0, 'Boy from Rex\'s Party', 17);
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'a');
    qspCall(s, 'npcgeneratec', '', 0, 'Boy from Rex\'s Party', 17);
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'b');
  }
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    scene.img('images/locations/pavlovsk/resident/rekshome/party/party_girls_party_gost_19.jpg');
    // TODO-QSP: dynamic text: The guys soon are unable to withstand just watching, decide to join the fun. The...
    scene.text('The guys soon are unable to withstand just watching, decide to join the fun. The guys walk up in front of you girls and unbutton their pants, pulling out their hard dicks. You and the other pretty girls look at each other and decide to go with it. You kneel down in front of \' + iif(rex_love = 0, \'one of the guys\', \'Rex\') + \' and happily begin to suck his already rock-hard member. After you and the girls make the guys cum, each of you swallowing down the sperm, you continue with the fun.');
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID ?? 0), 'gangbang');
    qspCall(s, 'cum_call', 'mouth', ((s as any).npcID ?? 0));
    qspCall(s, 'cum_call', 'face', ((s as any).npcID1 ?? 0));
    qspCall(s, 'cum_call', 'clothes', ((s as any).npcID2 ?? 0));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } else {
    scene.img(`images/locations/pavlovsk/resident/rekshome/party/party_girls_party_gost_20_${Math.floor(Math.random() * 2) + 1}.jpg`);
    scene.text('The guys soon are unable to withstand just watching, decide to join the fun. Soon you kiss and caress each other in unison. Rex closely keeps you to himself, not letting any of the other guys touch you.');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img(`images/locations/pavlovsk/resident/rekshome/party/party_girls_party_gost_21_${Math.floor(Math.random() * 6) + 1}.jpg`);
    scene.text('You don\'t really recall how your adult game turned into a raging orgy. Everyone is divided into pairs who passionately fuck each other. There are not enough girls for every guy and you notice how they are huddling around your sister with Roma as Anya gladly accepts any dick that is put in front of her. The apartment is dipped into an atmosphere of wild and depraved sex, groans and cries of pleasure coming from every corner. Time seems to have stopped and eventually everyone is just fucking each other until they run out of energy.');
    qspCall(s, 'arousal', 'vaginal', 30, ((s as any).npcID ?? 0), 'group', 'gangbang');
    qspCall(s, 'arousal', 'bj', (-10), ((s as any).npcID ?? 0), 'group', 'gangbang');
    qspCall(s, 'arousal', 'vaginal', 10, ((s as any).npcID1 ?? 0), 'group', 'gangbang');
    qspCall(s, 'arousal', 'bj', (-10), ((s as any).npcID1 ?? 0), 'group', 'gangbang');
    qspCall(s, 'arousal', 'vaginal', 10, ((s as any).npcID2 ?? 0), 'group', 'gangbang');
    qspCall(s, 'arousal', 'bj', (-10), ((s as any).npcID2 ?? 0), 'group', 'gangbang');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', 'mouth', ((s as any).npcID ?? 0));
    qspCall(s, 'cum_call', 'face', ((s as any).npcID1 ?? 0));
    qspCall(s, 'cum_call', 'clothes', ((s as any).npcID2 ?? 0));
    qspCall(s, 'cuminsidereact', '', ((s as any).npcdesc ?? 0));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Fall asleep', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img(`images/locations/pavlovsk/resident/rekshome/party/reksparty_party_kuh_6_${Math.floor(Math.random() * 8) + 1}.jpg`);
    scene.text('After everything that happened, you fall asleep instantly, plunging into a sweet dream. You went to sleep all smeared with sperm, but you do not care. After some time you are woken up by someone shouting at you and slapping your face.');
    scene.actions([
      { label: 'Wake up', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 90;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/rekshome/party/reksparty_party_kuh_7.jpg');
    scene.text('You slowly wake up as Anya keeps slapping you in the face.');
    scene.text('"Well that was fun. How are you feeling?"');
    scene.text('"Everything hurts, I\'m dizzy. Give me a little more sleep." you answer with a weak voice.');
    scene.text('"Get up stupid. Our parents are going to kill us, if we don\'t spend the night at home."');
    scene.actions([
      { label: 'Going home', goto: ['bedrPar', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterGangbangOutdoor(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcgeneratec', '', 0, 'Boy from Rex\'s Party', 17);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'a');
  qspCall(s, 'npcgeneratec', '', 0, 'Boy from Rex\'s Party', 17);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'b');
  qspCall(s, 'npcgeneratec', '', 0, 'Boy from Rex\'s Party', 17);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'c');
  (s as any).temp_rand = Math.floor(Math.random() * 4) + 0;
  if ((!((s as any).temp_rand ?? 0))) {
    scene.img('images/locations/pavlovsk/resident/rekshome/party/reksparty_party_kuh_4_4.mp4');
    // TODO-QSP: dynamic text: Together they get you out to the street and one of the guys pushes you down to y...
    scene.text(`Together they get you out to the street and one of the guys pushes you down to your knees and pull his cock out. "Come on, ${((s as any).pcs_nickname ?? 0)}, start sucking." You put you hand on his member and start to lick the whole length before wrapping your lips around the head. You keep sucking, taking turns on the guy's dicks, until they are all hard and ready. Then one of them tells you to bend over.`);
    qspCall(s, 'arousal', 'bj', 3, ((s as any).npcID1 ?? 0), 'sub', 'gangbang');
    qspCall(s, 'arousal', 'bj', 3, ((s as any).npcID2 ?? 0), 'sub', 'gangbang');
    qspCall(s, 'arousal', 'bj', 3, ((s as any).npcID2 ?? 0), 'sub', 'gangbang');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Bend over', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/rekshome/party/reksparty_party_kuh_4_5.mp4');
    // TODO-QSP: dynamic text: "Bend over, <<$pcs_nickname>>, and show us your tight, wet hole." You get in a c...
    scene.text(`"Bend over, ${((s as any).pcs_nickname ?? 0)}, and show us your tight, wet hole." You get in a comfortable position and the guys take turns fucking your wet pussy. You really enjoy yourself as you move your hips towards their rock-hard members, making them glide in and out of your pussy, not wanting to wait their turn they start to fuck your ass as well. The guys finish on your ass and back, except the last one who groans and tells you: "Ah, ${((s as any).pcs_nickname ?? 0)}, open up, I want to cum in your mouth!"`);
    qspCall(s, 'arousal', 'vaginal', 5, ((s as any).npcID1 ?? 0), 'sub', 'gangbang');
    qspCall(s, 'arousal', 'anal', (-3), ((s as any).npcID1 ?? 0), 'sub', 'gangbang');
    qspCall(s, 'arousal', 'vaginal', 5, ((s as any).npcID2 ?? 0), 'sub', 'gangbang');
    qspCall(s, 'arousal', 'anal', (-3), ((s as any).npcID2 ?? 0), 'sub', 'gangbang');
    qspCall(s, 'arousal', 'vaginal', 5, ((s as any).npcID3 ?? 0), 'sub', 'gangbang');
    qspCall(s, 'arousal', 'anal', (-3), ((s as any).npcID3 ?? 0), 'sub', 'gangbang');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Open your mouth', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/locations/pavlovsk/resident/rekshome/party/reksparty_party_kuh_4_6.mp4');
    // TODO-QSP: dynamic text: You turn around and kneel in front of him, playfully sticking out your tongue. T...
    scene.text(`You turn around and kneel in front of him, playfully sticking out your tongue. The drunk guy gives a little jerk and sprays of sperm jets into your mouth. "Ah, ${((s as any).pcs_nickname ?? 0)}, you are truly the best bitch at this party!" the guys all laugh. You try to join in, but your laughter is stifled by the mouthful of sperm.`);
    qspCall(s, 'cum_call', 'back', ((s as any).npcID1 ?? 0));
    qspCall(s, 'cum_call', 'butt', ((s as any).npcID2 ?? 0));
    qspCall(s, 'cum_call', 'mouth', ((s as any).npcID3 ?? 0));
    qspCall(s, 'cum_call', 'face', ((s as any).npcID3 ?? 0));
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Swallow', goto: ['rex_party_sexEvents', 'boys_swalow'] },
      { label: 'Spit out', goto: ['rex_party_sexEvents', 'boys_spit'] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    scene.img('images/locations/pavlovsk/resident/rekshome/party/reksparty_party_kuh_4_7.jpg');
    // TODO-QSP: dynamic text: The boys have fun dragging you into the street, and you immediately go down on y...
    scene.text(`The boys have fun dragging you into the street, and you immediately go down on your knees. "Hey, ${((s as any).pcs_nickname ?? 0)}, try our lollipops." You get excited as more and more members are put in front of your plump lips. You open your lips and even feel turned on while sucking them. You talk dirty, squeeze your boobs together and even give a little moan with their dicks in your mouth. After everyone is hard and you had your fun you get up, still sucking on one of their members with your mouth, and the boys tell you to bend over.`);
    qspCall(s, 'arousal', 'bj', 3, ((s as any).npcID1 ?? 0), 'sub', 'gangbang');
    qspCall(s, 'arousal', 'bj', 3, ((s as any).npcID2 ?? 0), 'sub', 'gangbang');
    qspCall(s, 'arousal', 'bj', 3, ((s as any).npcID3 ?? 0), 'sub', 'gangbang');
    qspCall(s, 'stat', '');
    if (((s as any).temp_rand ?? 0) === 2) {
      scene.img('images/locations/pavlovsk/resident/rekshome/party/reksparty_party_kuh_4_9.jpg');
      scene.text('You are dragged into the street, undressed and unceremoniously pushed down on a bench. You give a sigh of pleasure when the guys begin to slowly fuck your mouth and pussy.');
      scene.text('They take turns fucking you and letting you suck their cock, they even start fucking you in the ass.');
      scene.text('Their cocks glide in and out of your holes, going deeper with every thrust.');
      qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID1 ?? 0), 'sub', 'gangbang');
      qspCall(s, 'arousal', 'anal', 3, ((s as any).npcID1 ?? 0), 'sub', 'gangbang');
      qspCall(s, 'arousal', 'bj', (-3), ((s as any).npcID1 ?? 0), 'sub', 'gangbang');
      qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID2 ?? 0), 'sub', 'gangbang');
      qspCall(s, 'arousal', 'anal', 3, ((s as any).npcID2 ?? 0), 'sub', 'gangbang');
      qspCall(s, 'arousal', 'bj', (-3), ((s as any).npcID2 ?? 0), 'sub', 'gangbang');
      qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID3 ?? 0), 'sub', 'gangbang');
      qspCall(s, 'arousal', 'anal', 3, ((s as any).npcID3 ?? 0), 'sub', 'gangbang');
      qspCall(s, 'arousal', 'bj', (-3), ((s as any).npcID3 ?? 0), 'sub', 'gangbang');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Go on', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    // TODO-QSP: $temp_cumloc[0] = 'vagina'
    // TODO-QSP: $temp_cumloc[1] = 'labia'
    // TODO-QSP: $temp_cumloc[2] = 'anus'
    // TODO-QSP: $temp_cumloc[3] = 'butt'
    // TODO-QSP: $temp_cumloc[4] = 'back'
    qspCall(s, 'cum_call', 'precum', ((s as any).npcID1 ?? 0));
    qspCall(s, 'cum_call', 'butt', ((s as any).npcID1 ?? 0));
    if ((!(Math.floor(Math.random() * 6) + 0))) {
      (s as any).temp_rand = Math.floor(Math.random() * 5) + 0;
      // TODO-QSP: gs 'cum_call', $temp_cumloc[temp_rand], $npcID1, 0, 0, 20
    }
    qspCall(s, 'cum_call', 'precum', ((s as any).npcID2 ?? 0));
    qspCall(s, 'cum_call', 'vagina', ((s as any).npcID2 ?? 0));
    if ((!(Math.floor(Math.random() * 6) + 0))) {
      (s as any).temp_rand = Math.floor(Math.random() * 5) + 0;
      // TODO-QSP: gs 'cum_call', $temp_cumloc[temp_rand], $npcID2, 0, 0, 20
    }
    qspCall(s, 'cum_call', 'precum', ((s as any).npcID3 ?? 0));
    qspCall(s, 'cum_call', 'back', ((s as any).npcID3 ?? 0));
    if ((!(Math.floor(Math.random() * 6) + 0))) {
      (s as any).temp_rand = Math.floor(Math.random() * 5) + 0;
      // TODO-QSP: gs 'cum_call', $temp_cumloc[temp_rand], $npcID3, 0, 0, 20
    }
    scene.img('images/locations/pavlovsk/resident/rekshome/party/reksparty_party_kuh_4_10.jpg');
    // TODO-QSP: dynamic text: The guys a very drunk and soon begin to focus on your pussy and ass, fucking you...
    scene.text(`The guys a very drunk and soon begin to focus on your pussy and ass, fucking you roughly. Enthralled by the moment the guys cum wherever they want. You feel hot jets of sperm hitting your back and ass. Some of them even cum inside of you. After they are done, one of them exclaims, "Uhh, the crown for the best whore of the evening certainly belongs to you, ${((s as any).pcs_nickname ?? 0)}." Exhausted and quite a mess you drunkenly stumble into a room.`);
    qspCall(s, 'arousal', 'vaginal', 5, ((s as any).npcID1 ?? 0), 'sub', 'gangbang');
    qspCall(s, 'arousal', 'anal', (-5), ((s as any).npcID1 ?? 0), 'sub', 'gangbang');
    qspCall(s, 'arousal', 'vaginal', 5, ((s as any).npcID2 ?? 0), 'sub', 'gangbang');
    qspCall(s, 'arousal', 'anal', (-5), ((s as any).npcID2 ?? 0), 'sub', 'gangbang');
    qspCall(s, 'arousal', 'vaginal', 5, ((s as any).npcID3 ?? 0), 'sub', 'gangbang');
    qspCall(s, 'arousal', 'anal', (-5), ((s as any).npcID3 ?? 0), 'sub', 'gangbang');
    qspCall(s, 'cuminsidereact', 'one of the guys from the party');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Fall asleep', goto: ['rex_party_smallEvents', 'sleep'] },
    ]);
  } },
      ]);
    } else {
      scene.img('images/locations/pavlovsk/resident/rekshome/party/reksparty_party_kuh_4_11.jpg');
      scene.text('Out on the street, one of the guys immediately grabs you from behind, and tells you to bend over. You obediently follow his order as he spits in his hand and rubs his saliva all over your pussy. His member easily enters you and he brazenly grabs you by the hips and starts pumping you hard balls deep, completely unconcerned if you are enjoying yourself or not. The guy spanks you, his hand coming down in sweeping strokes on your ass, as he drives his dick in your pussy. You feel yourself getting wet from the forceful fucking and begin to rhythmically wag your ass enjoying every movement while holding two of the other guy\'s members in your hands. Not quite done the first guy helps you up.');
      qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID1 ?? 0), 'sub', 'gangbang');
      qspCall(s, 'arousal', 'hj', (-3), ((s as any).npcID1 ?? 0), 'sub', 'gangbang');
      qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID2 ?? 0), 'sub', 'gangbang');
      qspCall(s, 'arousal', 'hj', (-3), ((s as any).npcID2 ?? 0), 'sub', 'gangbang');
      qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID3 ?? 0), 'sub', 'gangbang');
      qspCall(s, 'arousal', 'hj', (-3), ((s as any).npcID3 ?? 0), 'sub', 'gangbang');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Get up', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    // TODO-QSP: $temp_cumloc[0] = 'vagina'
    // TODO-QSP: $temp_cumloc[1] = 'labia'
    // TODO-QSP: $temp_cumloc[2] = 'anus'
    // TODO-QSP: $temp_cumloc[3] = 'butt'
    // TODO-QSP: $temp_cumloc[4] = 'back'
    // TODO-QSP: $temp_cumloc[5] = 'legs'
    // TODO-QSP: $temp_cumloc[6] = 'arms'
    // TODO-QSP: $temp_cumloc[7] = 'face'
    // TODO-QSP: $temp_cumloc[8] = 'mouth'
    // TODO-QSP: $temp_cumloc[9] = 'hands'
    // TODO-QSP: $temp_cumloc[10] = 'stomach'
    // TODO-QSP: $temp_cumloc[11] = 'breasts'
    // TODO-QSP: $temp_cumloc[12] = 'hair'
    qspCall(s, 'cum_call', 'precum', ((s as any).npcID1 ?? 0));
    qspCall(s, 'cum_call', 'anus', ((s as any).npcID1 ?? 0));
    if ((Math.floor(Math.random() * 6) + 0) === 5) {
      (s as any).temp_rand = Math.floor(Math.random() * 13) + 0;
      // TODO-QSP: gs 'cum_call', $temp_cumloc[temp_rand], $npcID1, 0, 0, 0, 20
      if ((!((s as any).temp_rand ?? 0))) {
        (s as any).i2 = 1;
      }
    }
    qspCall(s, 'cum_call', 'precum', ((s as any).npcID2 ?? 0));
    (s as any).temp_rand = Math.floor(Math.random() * 13) + 0;
    // TODO-QSP: gs 'cum_call', $temp_cumloc[temp_rand], $npcID2, 0, 0, 0, 20
    if ((!((s as any).temp_rand ?? 0))) {
      (s as any).i2 = 1;
    }
    if ((Math.floor(Math.random() * 6) + 0) === 5) {
      (s as any).temp_rand = Math.floor(Math.random() * 13) + 0;
      // TODO-QSP: gs 'cum_call', $temp_cumloc[temp_rand], $npcID2, 0, 0, 0, 20
      if ((!((s as any).temp_rand ?? 0))) {
        (s as any).i2 = 1;
      }
    }
    qspCall(s, 'npcStat', '', ((s as any).npcID3 ?? 0));
    qspCall(s, 'cum_call', 'precum', ((s as any).npcID3 ?? 0));
    (s as any).temp_rand = Math.floor(Math.random() * 13) + 0;
    // TODO-QSP: gs 'cum_call', $temp_cumloc[temp_rand], $npcID3, 0, 0, 0, 20
    if ((!((s as any).temp_rand ?? 0))) {
      (s as any).i2 = 1;
    }
    if ((Math.floor(Math.random() * 6) + 0) === 5) {
      (s as any).temp_rand = Math.floor(Math.random() * 13) + 0;
      // TODO-QSP: gs 'cum_call', $temp_cumloc[temp_rand], $npcID3, 0, 0, 0, 20
      if ((!((s as any).temp_rand ?? 0))) {
        (s as any).i2 = 1;
      }
    }
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/rekshome/party/reksparty_party_kuh_4_12.mp4');
    scene.text('You rest your hands on a railing and the guy slips his cock in your ass and continues pumping, emptying his balls inside your ass before long. Another stud comes over and stupidly continues with the monotonous movements, using both of your holes looking to get off soon. When he starts to twitch, clearly being close to orgasm, he abruptly pulls his dick out of your vagina and you can feel warm drops on your back and buttocks.');
    scene.text('"I\'m next. Move!" says a voice from behind you. "Someone else can use her mouth." echoes another voice. Before long the rest of the guys finish too. Exhausted and quite a mess you drunkenly stumble into a room.');
    qspCall(s, 'arousal', 'bj', 3, ((s as any).npcID1 ?? 0), 'sub', 'gangbang');
    qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID1 ?? 0), 'sub', 'gangbang');
    qspCall(s, 'arousal', 'anal', (-3), ((s as any).npcID1 ?? 0), 'sub', 'gangbang');
    qspCall(s, 'arousal', 'bj', 3, ((s as any).npcID2 ?? 0), 'sub', 'gangbang');
    qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID2 ?? 0), 'sub', 'gangbang');
    qspCall(s, 'arousal', 'anal', (-3), ((s as any).npcID2 ?? 0), 'sub', 'gangbang');
    qspCall(s, 'arousal', 'bj', 3, ((s as any).npcID3 ?? 0), 'sub', 'gangbang');
    qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID3 ?? 0), 'sub', 'gangbang');
    qspCall(s, 'arousal', 'anal', (-3), ((s as any).npcID3 ?? 0), 'sub', 'gangbang');
    qspCall(s, 'stat', '');
    if (((s as any).i2 ?? 0) === 1) {
      qspCall(s, 'cuminsidereact', 'one of the guys from the party');
    }
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Fall asleep', goto: ['rex_party_smallEvents', 'sleep'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Bend over', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    // TODO-QSP: $temp_cumloc[0] = 'vagina'
    // TODO-QSP: $temp_cumloc[1] = 'labia'
    // TODO-QSP: $temp_cumloc[2] = 'anus'
    // TODO-QSP: $temp_cumloc[3] = 'butt'
    // TODO-QSP: $temp_cumloc[4] = 'back'
    // TODO-QSP: $temp_cumloc[5] = 'legs'
    // TODO-QSP: $temp_cumloc[6] = 'arms'
    // TODO-QSP: $temp_cumloc[7] = 'face'
    // TODO-QSP: $temp_cumloc[8] = 'mouth'
    // TODO-QSP: $temp_cumloc[9] = 'hands'
    // TODO-QSP: $temp_cumloc[10] = 'stomach'
    // TODO-QSP: $temp_cumloc[11] = 'breasts'
    // TODO-QSP: $temp_cumloc[12] = 'hair'
    (s as any).temp_rand = Math.floor(Math.random() * 13) + 0;
    qspCall(s, 'cum_call', 'precum', ((s as any).npcID1 ?? 0));
    // TODO-QSP: gs 'cum_call', $temp_cumloc[temp_rand], $npcID1
    if ((!((s as any).temp_rand ?? 0))) {
      (s as any).i2 = 1;
    }
    if ((!(Math.floor(Math.random() * 6) + 0))) {
      (s as any).temp_rand = Math.floor(Math.random() * 13) + 0;
      // TODO-QSP: gs 'cum_call', $temp_cumloc[temp_rand], $npcID1, 0, 0, 0, 20
      if ((!((s as any).temp_rand ?? 0))) {
        (s as any).i2 = 1;
      }
    }
    (s as any).temp_rand = Math.floor(Math.random() * 13) + 0;
    qspCall(s, 'cum_call', 'precum', ((s as any).npcID2 ?? 0));
    // TODO-QSP: gs 'cum_call', $temp_cumloc[temp_rand], $npcID2
    if ((!((s as any).temp_rand ?? 0))) {
      (s as any).i2 = 1;
    }
    if ((!(Math.floor(Math.random() * 6) + 0))) {
      (s as any).temp_rand = Math.floor(Math.random() * 13) + 0;
      // TODO-QSP: gs 'cum_call', $temp_cumloc[temp_rand], $npcID2, 0, 0, 0, 20
      if ((!((s as any).temp_rand ?? 0))) {
        (s as any).i2 = 1;
      }
    }
    (s as any).temp_rand = Math.floor(Math.random() * 13) + 0;
    qspCall(s, 'cum_call', 'precum', ((s as any).npcID3 ?? 0));
    // TODO-QSP: gs 'cum_call', $temp_cumloc[temp_rand], $npcID3
    if ((!((s as any).temp_rand ?? 0))) {
      (s as any).i2 = 1;
    }
    if ((!(Math.floor(Math.random() * 6) + 0))) {
      (s as any).temp_rand = Math.floor(Math.random() * 13) + 0;
      // TODO-QSP: gs 'cum_call', $temp_cumloc[temp_rand], $npcID3, 0, 0, 0, 20
      if ((!((s as any).temp_rand ?? 0))) {
        (s as any).i2 = 1;
      }
    }
    scene.img('images/locations/pavlovsk/resident/rekshome/party/reksparty_party_kuh_4_8.mp4');
    scene.text('You dutifully oblige and bend over not letting the member out of your mouth. One of the guys enters your aching pussy. In time they switch positions and even start fucking you in the ass. You feel relaxed and relish having their cocks in every hole, completely giving yourself up to the boys. After playing with you the guys finish one by one. Half awake and drunk you hardly care where they cum on you. Exhausted and quite a mess you drunkenly stumble into a room.');
    qspCall(s, 'arousal', 'vaginal', 5, ((s as any).npcID1 ?? 0), 'sub', 'gangbang');
    qspCall(s, 'arousal', 'anal', (-5), ((s as any).npcID1 ?? 0), 'sub', 'gangbang');
    qspCall(s, 'arousal', 'vaginal', 5, ((s as any).npcID2 ?? 0), 'sub', 'gangbang');
    qspCall(s, 'arousal', 'anal', (-5), ((s as any).npcID2 ?? 0), 'sub', 'gangbang');
    qspCall(s, 'arousal', 'vaginal', 5, ((s as any).npcID3 ?? 0), 'sub', 'gangbang');
    qspCall(s, 'arousal', 'anal', (-5), ((s as any).npcID3 ?? 0), 'sub', 'gangbang');
    if (((s as any).i2 ?? 0) === 1) {
      qspCall(s, 'cuminsidereact', 'one of the guys from the party');
    }
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Fall asleep', goto: ['rex_party_smallEvents', 'sleep'] },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'ira_lena_fun':
      enterIraLenaFun(s, scene);
      break;
    case 'ira_lena_rex':
      enterIraLenaRex(s, scene);
      break;
    case 'ira_lena_rex_cum':
      enterIraLenaRexCum(s, scene);
      break;
    case 'ira_fun_boys':
      enterIraFunBoys(s, scene);
      break;
    case 'ira_boys_fuck':
      enterIraBoysFuck(s, scene);
      break;
    case 'rex_sex':
      enterRexSex(s, scene);
      break;
    case 'rex_sex_cow':
      enterRexSexCow(s, scene);
      break;
    case 'rex_sex_dog':
      enterRexSexDog(s, scene);
      break;
    case 'rex_sex_missionary':
      enterRexSexMissionary(s, scene);
      break;
    case 'rex_sex_cum':
      enterRexSexCum(s, scene);
      break;
    case 'rex_toilet_bj':
      enterRexToiletBj(s, scene);
      break;
    case 'sister_fun':
      enterSisterFun(s, scene);
      break;
    case 'sister_hand':
      enterSisterHand(s, scene);
      break;
    case 'sister_cum':
      enterSisterCum(s, scene);
      break;
    case 'dj_boobs':
      enterDjBoobs(s, scene);
      break;
    case 'dj_cock':
      enterDjCock(s, scene);
      break;
    case 'dj_suck':
      enterDjSuck(s, scene);
      break;
    case 'toilet_boys_bj':
      enterToiletBoysBj(s, scene);
      break;
    case 'girl_orgy':
      enterGirlOrgy(s, scene);
      break;
    case 'orgy':
      enterOrgy(s, scene);
      break;
    case 'gangbang_outdoor':
      enterGangbangOutdoor(s, scene);
      break;
    default:
      enterIraLenaFun(s, scene);
      break;
  }
}

export const rex_party_sexEvents: LocationDef = {
  name: 'rex_party_sexEvents',
  title: 'Ira and Lena',
  region: 'other',
  description: ['Music pumping puts you in the mood of fierce desire to have fun with Lena and Ira. Dancing with them, you start pulling their clothes off and they follow suit, taking your clothes off until all three of you are half naked just wearing your underwear.'],
  enter: enter,
};
