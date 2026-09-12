import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterSisboyQWParty(s: GameState, scene: SceneBuilder): void {
  ((s as any).sisterQW ?? {})['partycount'] = (((s as any).sisterQW ?? {})['partycount'] ?? 0) + (1);
  ((s as any).sisterQW ?? {})['party'] = 2;
  if (((s as any).sisterQW ?? 0)?.['rexbday'] === 1) {
    ((s as any).sisterQW ?? {})['rexbday'] = 2;
  }
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/rekshome/party/sisboyqwparty_8.jpg');
  scene.text('Once you burst into Rex\'s house, the loud music immediately drowns out just about any other noise.');
  scene.text('You help the guys lay out the table. They carry the drinks and you the snacks, but there is so much booze that it covers the table, leaving nowhere to put the snacks.');
  scene.text('Everyone starts to thump in unison, dealing, laughing and telling funny stories.');
  scene.text('You cheerfully ask Anya, "You won\'t leave me alone at the party will you?"');
  // TODO-QSP: dynamic text: Anya smiles and hands you a bottle of vodka. "Of course not <<$pcs_nickname>>."
  scene.text(`Anya smiles and hands you a bottle of vodka. "Of course not ${((s as any).pcs_nickname ?? 0)}."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Decline the drink', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/rekshome/party/sisboyqwparty_9.jpg');
    scene.text('You politely try to refuse the drink, but everyone watching has gathered round and started chanting, "Drink! Drink! Drink! Drink! Drink! Drink!"');
    scene.text('Giving in to peer pressure, you take the bottle from Anya\'s hand and gulp down a huge swig of vodka.');
    scene.actions([
      { label: 'Go dance', goto: ['rex_party_firstTime', 'dance'] },
      { label: 'Drink', goto: ['rex_party_firstTime', 'drink'] },
      { label: 'Sit', goto: ['rex_party_firstTime', 'sit'] },
    ]);
  } },
    { label: 'Accept the drink', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'drugs', 'alcohol', 'vodka');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/rekshome/party/sisboyqwparty_9.jpg');
    scene.text('You take the bottle from her hand. "Well, let\'s party!" you say and gulp down a huge swig of vodka.');
    // TODO-QSP: dynamic text: Roma looks at Anya and smirks. "Look, <<$pcs_nickname>> is drinking more than yo...
    scene.text(`Roma looks at Anya and smirks. "Look, ${((s as any).pcs_nickname ?? 0)} is drinking more than you!" Everyone then begins to drink heavily.`);
    scene.actions([
      { label: 'Go dance', goto: ['rex_party_firstTime', 'dance'] },
      { label: 'Drink', goto: ['rex_party_firstTime', 'drink'] },
      { label: 'Sit', goto: ['rex_party_firstTime', 'sit'] },
    ]);
  } },
    { label: 'Get up to dance', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'drugs', 'alcohol', 'vodka');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/rekshome/party/sisboyqwparty_9.jpg');
    scene.text('Standing, you try to get out from behind the table to go dancing, but no one is actually dancing. They are all just sitting and drinking.');
    scene.text('Seeing what you\'re doing, Rex pulls you over. "Where are you going? It\'s only the beginning! Hold the bottle and let\'s drink, otherwise I will be offended."');
    // TODO-QSP: dynamic text: You can't deny the ' + iif(sisterQW['rexbday'] = 2, 'birthday boy', 'host of the...
    scene.text('You can\'t deny the \' + iif(sisterQW[\'rexbday\'] = 2, \'birthday boy\', \'host of the party\') + \', so you take the bottle from his hand and gulp down a huge shot, feeling it burn down your throat. You hear others shouting in encouragement.');
    scene.actions([
      { label: 'Go dance', goto: ['rex_party_firstTime', 'dance'] },
      { label: 'Drink', goto: ['rex_party_firstTime', 'drink'] },
      { label: 'Sit', goto: ['rex_party_firstTime', 'sit'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterDance(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/rekshome/party/sisboyqwparty_10.jpg');
  scene.text('You drunkenly stumble around to go and dance.');
  scene.text('You do not need to be persuaded. You are on the same wavelength with everyone else and pull your top off, dancing in your bra.');
  scene.text('The boys carry on dancing, jumping and bumping into each other. Even though you are almost half-naked, it seems like no one is paying any attention to you.');
  // TODO-QSP: dynamic text: Anya approaches you. "Cheer up <<$pcs_nickname>>! Go get in the center and have ...
  scene.text(`Anya approaches you. "Cheer up ${((s as any).pcs_nickname ?? 0)}! Go get in the center and have fun dancing, among other things…"`);
  if (((s as any).sisterQW ?? 0)?.['rexbday'] === 2) {
    scene.actions([
      { label: 'Congratulate Rex personally', goto: ['rex_party_firstTime', 'reks'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Drink', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'drugs', 'alcohol', 'whiskey');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/rekshome/party/sisboyqwparty_13.jpg');
    scene.text('You want to drink again and again. The boys quickly give you two bottles of whiskey, and without any hesitation, you start to pour both of them into your mouth. The whiskey spills out of your mouth as you are unable to drink it all fast enough. It pours all down your body.');
    scene.text('Your clothes are soaked in alcohol, and everyone can see your nipples poking through your wet bra.');
    scene.text('Two guys, mad with energy, begin to dance around you, persistently lapping at the booze on your body.');
    scene.actions([
      { label: 'Dance with them', goto: ['rex_party_firstTime', 'two_boy'] },
    ]);
  } },
    { label: 'Keep dancing', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/rekshome/party/sisboyqwparty_18.mp4');
    scene.text('You\'re drunk, but still able to control yourself. You want to continue dancing.');
    scene.text('Your erotic movements have attracted the attention of many guys, and two of them approach.');
    qspCall(s, 'arousal', 'foreplay', 10);
    qspCall(s, 'stat', '');
    if (((s as any).sisterQW ?? 0)?.['rexbday'] === 2) {
      scene.actions([
        { label: 'Congratulate Rex personally', goto: ['rex_party_firstTime', 'reks'] },
      ]);
    }
    if (((s as any).sisterQW ?? 0)?.['AnyaRomaQW'] === 0) {
      scene.actions([
        { label: 'Look for Anya', goto: ['rex_party_firstTime', 'anya_find'] },
      ]);
    }
    scene.actions([
      { label: 'Dance with them', goto: ['rex_party_firstTime', 'two_boy'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAnyaFind(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('You look for your sister but can\'t find her. "Where the hell did she go?" You look everywhere in desperation.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Look in the bathroom', goto: ['rex_party_firstTime', 'anya_toilet'] },
    { label: 'Look in the kitchen', goto: ['rex_party_firstTime', 'anya_kit'] },
    { label: 'Look in the bedroom', goto: ['rex_party_firstTime', 'anya_bed'] },
  ]);
  scene.build();
}

function enterAnyaKit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) < 21) {
    (s as any).minut = ((s as any).minut ?? 0) + (((20 - ((s as any).hour ?? 0)) * 60) + (60 - ((s as any).minut ?? 0)));
  }
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).sisterQW ?? {})['AnyaRomaQW'] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/rekshome/party/sisboyqwparty_24.jpg');
  scene.text('You walk into the kitchen and look around for your sister. You see two drunk girls having fun in the corner of the room, but neither of them know where your sister is. Suddenly, you hear heavy breathing behind you.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Turn around', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/rekshome/party/sisboyqwparty_25.jpg');
    scene.text('Turning around, you find Anya completely naked, drinking from a bottle with tears running down her face while looking at Roma. "Well it\'s over between us. Go to hell dog!"');
    scene.text('Roma doesn\'t say anything in response, and Anya turns and runs away in tears. You glare at him for a few few moments, then rush after her.');
    qspCall(s, 'arousal', 'erotic_nudity', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Chase Anya', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/rekshome/party/sisboyqwparty_26.jpg');
    scene.text('It takes you a while to find Anya again, but you eventually find her on her knees in front of two unfamiliar guys. "What are you doing? Stop and think about this!" you plead to your sister.');
    scene.text('Anya keeps drunkenly sucking the guys off, and they turn to look at you. "Come and join us or get the fuck out."');
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wait', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/rekshome/party/sisboyqwparty_27.jpg');
    scene.text('You decide not to argue with them, afraid of what they might do and wait.');
    scene.text('The guys push Anya down on her stomach. One kneels down in front of her and sticks his cock back in her mouth, while the other kneels down behind her, shoves his dick in her ass and begins to fuck her hard.');
    scene.text('Turning to look at you again, one of the guys leers and pats the floor next to Anya. "Come over here and join us if you\'re so worried about her. Then we will take turns fucking you both in the ass."');
    qspCall(s, 'arousal', 'voyeur_sex', 10);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'arousal', 'end');
    // TODO-QSP: gt $home['bedroom'], $home['bedroom_arg']
  } },
      { label: 'Join', handler: (st: GameState) => {
    (s as any).sisterknowslut = 2;
    qspCall(s, 'npcgeneratec', '', 0, 'Boy from Rex\'s Party', 17, 1, 1);
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'npcgeneratec', '', 0, 'Boy from Rex\'s Party', 17, 1, 1);
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'a');
    scene.img('images/locations/pavlovsk/resident/rekshome/party/sisboyqwparty_28.jpg');
    scene.text('You frown upon seeing your sister being used like this, but maybe it would be better for her if you let them use you too so she wouldn\'t be the sole object of their lust? "OK, who wants to fuck me first?" you say as you walk over and take your clothes off.');
    scene.text('The one that had been talking to you and fucking your sister\'s mouth pulls away from her and shoves you down on your hands and knees. Without waiting, he shoves his cock in your ass and begins to furiously fuck you.');
    scene.text('Your hands tighten as you grimace in pain, trying to think about anything but the pain of having your ass torn up.');
    scene.text('This goes on for some time, though the boys do switch places from time to time, taking turns fucking you and Anya in the ass. Finally, and mercifully, they cum inside of both of you. After they are finished, they laugh and leave the room.');
    scene.text('You gather your clothes up and get dressed. You then help Anya get dressed and help her home.');
    qspCall(s, 'cum_call', 'anus', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'arousal', 'anal', 5, ((s as any).npcID ?? 0), 'rough', 'sub', 'group', 'unknown');
    qspCall(s, 'arousal', 'anal', 5, ((s as any).npcID1 ?? 0), 'rough', 'sub', 'group', 'unknown');
    if (((s as any).hour ?? 0) < 20  ||  ((s as any).hour ?? 0) === 21  &&  ((s as any).minut ?? 0) < 45) {
      (s as any).minut = ((s as any).minut ?? 0) + (((21 - ((s as any).hour ?? 0)) * 60) + (45 - ((s as any).minut ?? 0)));
    }
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    // TODO-QSP: gt $home['bedroom'], $home['bedroom_arg']
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

function enterAnyaToilet(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/rekshome/party/sisboyqwparty_22.jpg');
  scene.text('You walk into the bathroom and find some guy pushing some poor girl\'s head into the toilet. Thankfully, it isn\'t Anya, and not wanting to get involved any further, you leave.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Look in the kitchen', goto: ['rex_party_firstTime', 'anya_kit'] },
    { label: 'Look in the bedroom', goto: ['rex_party_firstTime', 'anya_bed'] },
  ]);
  scene.build();
}

function enterAnyaBed(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/rekshome/party/sisboyqwparty_23.jpg');
  scene.text('In the bedroom, you see two guys jerking off onto the face of some poor unconscious girl as one of them says to the other, "Let\'s get the fuck out of here before she wakes up. I don\'t want to deal with her ex-boyfriend. He\'s one of the boxers."');
  scene.text('Anya isn\'t here, so you keep searching.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Look in the bathroom', goto: ['rex_party_firstTime', 'anya_toilet'] },
    { label: 'Look in the kitchen', goto: ['rex_party_firstTime', 'anya_kit'] },
  ]);
  scene.build();
}

function enterReks(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'drugs', 'alcohol', 'champagne');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/rekshome/party/sisboyqwparty_19.jpg');
  scene.text('"Hey girl! Damn, you\'ve been having fun. Oh yeah, you\'re Anya\'s little sister, right? I know she\'s… That\'s odd, I haven\'t seen her. Although I have been drinking bubbly all day. Here, drink up!"');
  scene.text('He starts pouring the sweet champagne down your throat. He\'s so drunk that he pours it too fast, and as much as you try to keep up, a lot of it spills on you and the floor.');
  scene.text('Then, without a word, Rex just staggers off.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Look for Anya', goto: ['rex_party_firstTime', 'anya_find'] },
    { label: 'Follow Rex to the toilet for birthday sex', handler: (st: GameState) => {
    (s as any).toiletRexSex = 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/rekshome/party/sisboyqwparty_20.jpg');
    // TODO-QSP: dynamic text: You go to the bathroom, only to find Rex already there, having just finished tak...
    scene.text(`You go to the bathroom, only to find Rex already there, having just finished taking a piss with his dick still out in his hand. "Oh ${((s as any).pcs_nickname ?? 0)}, you again? I'm here already…"`);
    scene.text('Stopping him mid-sentence, you push him down onto the toilet and pull his hand away from his cock. You start undressing and watch his cock stiffen as he stares at your naked body. You climb on and straddle him. Lowering yourself onto his cock, you feel it slide into your wet pussy. "Happy birthday," you whisper in his ear.');
    scene.text('"Fucking hell," he mumbles as you ride him.');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Doggystyle', handler: (st: GameState) => {
    (s as any).rexSex = 1;
    qspCall(s, 'boyStat', 'A57');
    (s as any).sexpartkno = 1;
    qspCall(s, 'cum_manage', '');
    scene.img('images/locations/pavlovsk/resident/rekshome/party/sisboyqwparty_21.mp4');
    scene.text('Rex growls as he grabs you and lifts you off him. He gets up, bends you over and plunges his dick right back into your pussy, beginning to furiously fuck you balls deep.');
    scene.text('"Not so fast, not so deep," you beg him. However, the pain of his frantic balls deep fucking soon gives way to waves of deep pleasure as he keeps pounding you.');
    // TODO-QSP: dynamic text: With a final grunt, he shoots his load deep inside your pussy. "Wow <<$pcs_nickn...
    scene.text(`With a final grunt, he shoots his load deep inside your pussy. "Wow ${((s as any).pcs_nickname ?? 0)}, you are hotter than your sister!" He then zips his pants and leaves you alone in the bathroom.`);
    qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Look for Anya', goto: ['rex_party_firstTime', 'anya_find'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterTwoBoy(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcgeneratec', '', 0, 'unknown guy', Math.floor(Math.random() * 23) + 18, 1, 1);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
  qspCall(s, 'npcgeneratec', '', 0, 'unknown guy', Math.floor(Math.random() * 23) + 18, 1, 1);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'a');
  scene.img('images/locations/pavlovsk/resident/rekshome/party/sisboyqwparty_14.mp4');
  scene.text('They rub your body, grab your boobs and squeeze your ass. Under the influence of alcohol, you really like it and just enjoy the moment.');
  scene.text('Seeing that you aren\'t resisting, they pull you into the next room.');
  qspCall(s, 'arousal', 'foreplay', 5, ((s as any).npcID ?? 0), 'sub', 'group', 'unknown');
  qspCall(s, 'arousal', 'foreplay', (-5), ((s as any).npcID1 ?? 0), 'sub', 'group', 'unknown');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/rekshome/party/sisboyqwparty_15.jpg');
    scene.text('As you enter the room, they push you down on the bed and pull out their cocks.');
    scene.text('In a drunken fog, you try to grab one, then the other, but you are so drunk that the room is spinning.');
    scene.text('One of the guys starts licking your pussy, and you can hear yourself moaning in passion.');
    qspCall(s, 'arousal', 'cuni', 5, ((s as any).npcID ?? 0), 'sub', 'group', 'unknown');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Doggystyle', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/rekshome/party/sisboyqwparty_16.jpg');
    scene.text('They lift you up onto your knees. Their hands help hold you steady as one of them slides his dick into your pussy and the other shoves his cock in your mouth.');
    scene.text('The guys start laughing, obviously having fun fucking you as they talk and joke to each other. "She looks a bit young. I think she might be Anya\'s little sister."');
    scene.text('"Fuck, I think you\'re right. She\'s a sweet little thing, but I don\'t fuck schoolgirls. I\'ll trade you."');
    qspCall(s, 'arousal', 'vaginal', 5, ((s as any).npcID ?? 0), 'sub', 'group', 'unknown');
    qspCall(s, 'arousal', 'bj', (-5), ((s as any).npcID1 ?? 0), 'sub', 'group', 'unknown');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Switch', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/rekshome/party/sisboyqwparty_17.jpg');
    scene.text('The guys switch places and continue to rhythmically fuck you. After they have fucked you for a while, you somewhat come to your senses. "Oh yeah, wake up bitch! Suck and fuck us harder."');
    scene.text('Still mostly out of it, you obey and begin to suck harder until he starts to cum. He pulls out of your mouth and splatters your entire face in his cum. The second guy cums quickly too, pulling out of your pussy and covering your ass with his cum.');
    scene.text('After spending some time cleaning yourself up, you decide to go and find your sister.');
    qspCall(s, 'arousal', 'vaginal', 5, ((s as any).npcID1 ?? 0), 'sub', 'group', 'unknown');
    qspCall(s, 'arousal', 'bj', (-5), ((s as any).npcID ?? 0), 'sub', 'group', 'unknown');
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0));
    qspCall(s, 'cum_call', 'face', ((s as any).npcID1 ?? 0));
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Look For Anya', goto: ['rex_party_firstTime', 'anya_find'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDrink(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'drugs', 'alcohol', 'vodka');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/rekshome/party/sisboyqwparty_11.jpg');
  // TODO-QSP: dynamic text: Everyone undresses to the waist and goes into the hall to dance. "Come dance <<$...
  scene.text(`Everyone undresses to the waist and goes into the hall to dance. "Come dance ${((s as any).pcs_nickname ?? 0)}, you don't want to be left alone," Anya calls out to you.`);
  scene.text('Not now Anya. I want to drink some more first," you reply, but not taking no for an answer, Anya drags you out to dance with her and her friends.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go dance', goto: ['rex_party_firstTime', 'dance'] },
  ]);
  scene.build();
}

function enterSit(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/rekshome/party/sisboyqwparty_12.jpg');
  // TODO-QSP: dynamic text: You are starting to feel a little dizzy after drinking so much and so sit down f...
  scene.text(`You are starting to feel a little dizzy after drinking so much and so sit down for a while. Anya and her friends then approach you. "${((s as any).pcs_nickname ?? 0)}? Why are you just sitting there? Come dance with us." Not taking no for an answer, Anya drags you out to dance with her and her friends.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Go dance', goto: ['rex_party_firstTime', 'dance'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'sisboyQW_party':
      enterSisboyQWParty(s, scene);
      break;
    case 'dance':
      enterDance(s, scene);
      break;
    case 'anya_find':
      enterAnyaFind(s, scene);
      break;
    case 'anya_kit':
      enterAnyaKit(s, scene);
      break;
    case 'anya_toilet':
      enterAnyaToilet(s, scene);
      break;
    case 'anya_bed':
      enterAnyaBed(s, scene);
      break;
    case 'reks':
      enterReks(s, scene);
      break;
    case 'two_boy':
      enterTwoBoy(s, scene);
      break;
    case 'drink':
      enterDrink(s, scene);
      break;
    case 'sit':
      enterSit(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const rex_party_firstTime: LocationDef = {
  name: 'rex_party_firstTime',
  title: 'Once you burst into Rex\'s house, the loud music immediately ',
  region: 'other',
  locclass: 'kitr',
  enter: enter,
};
