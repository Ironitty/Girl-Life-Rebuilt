import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  ((s as any).fightClubQW = (s as any).fightClubQW ?? {})['story'] = 1;
  scene.img('images/locations/city/shared/fightclub/sultan_portrait.jpg');
  scene.text('You climb out of the ring when you are approached by a man. ');
  scene.text('"That was impressive."');
  scene.text('"Thanks." The man is not very tall, but under the expensive suit you can see a well-trained body and on his face you recognize the traces of previous fights. He must have been a boxer in the past.');
  scene.text('"You\'re talented, no doubt about it. Would you be interested in earning real money with it?"');
  scene.text('"With kickboxing?"');
  scene.text('"Something like that," he replies with a meaningful smile, which is tinged with a certain sadness.');
  scene.text('"How much money are we talking about here?" you ask suspiciously.');
  scene.text('"A fighter with your talent and your looks can add one, and after a while two zeros to the prize money you just got here."');
  scene.text('"What\'s the catch?"');
  scene.text('"You\'re smart too! Let\'s just say the fights aren\'t on any federation\'s calendar. Quite the opposite."');
  scene.text('"That means they\'re illegal?"');
  scene.text('"In the gray area, I\'d rather say."');
  scene.text('He hands you his business card. "If you\'re interested, just give me a call and we\'ll talk somewhere more private."');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'That sounds more than suspicious', handler: (st: GameState) => {
    ((st as any).fightClubQW = (st as any).fightClubQW ?? {})['declined'] = 1;
    scene.text('"No, thanks," you politely decline and leave him standing there. He appears even sadder as before.');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['havana', 'dressing_room'] },
    ]);
  } },
    { label: 'You\'re curious', goto: ['fightClub_intro', 'card'] },
  ]);
  scene.build();
}

function enterCard(s: GameState, scene: SceneBuilder): void {
  ((s as any).fightClubQW = (s as any).fightClubQW ?? {})['story'] = 2;
  scene.img('images/locations/city/shared/fightclub/card.jpg');
  scene.text('That doesn\'t exactly inspire confidence, but You take his card. It says Sultan Maskaev, Sport Management.');
  // TODO-QSP: dynamic text: <b>Note:</b> You can now find Sultan Maskaev in your smartphone contacts. You ca...
  scene.text('<b>Note:</b> You can now find Sultan Maskaev in your smartphone contacts. You can call him on weekdays between 8:00 and 20:00!');
  qspCall(s, 'fightClub_phone', 'sultan');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the locker room', handler: (st: GameState) => {
    scene.img('images/locations/city/shared/fightclub/athlete_gym.jpg');
    scene.text('As you\'re getting changed, you\'re approached by a female kickboxer you\'ve seen a few times at the gym. "What did the Shadow want with you?');
    scene.text('"Who?"');
    // TODO-QSP: dynamic text: "'+ $func('npc_notes', 'A295')+'"
    scene.text('"\'+ $func(\'npc_notes\', \'A295\')+\'"');
    scene.text('"Why not?"');
    scene.text('"I heard, there was some dirty doping story. So you\'d better be careful with that."');
    scene.text('"Okay, thanks for the warning." You think about her words, but the story doesn\'t fit with the impression you had of Sultan Maskaev. He seemed sincere to you, and a little melancholy.');
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave the ring', goto: ['havana', 'dressing_room'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterOffice1(s: GameState, scene: SceneBuilder): void {
  ((s as any).fightClubQW = (s as any).fightClubQW ?? {})['story'] = 4;
  scene.img('images/locations/city/shared/fightclub/office1.jpg');
  scene.text('You find Sultan Maskaev\'s office above a supermarket. You knock and a hoarse voice calls out: "It\'s open."');
  scene.text('You enter. The office is not large and is littered with pictures of boxers and trophies. Sitting at a tiny desk is a man who, at first glance, looks like an ex-boxer.');
  scene.text('His eyes light up when you enter and greet him.');
  // TODO-QSP: dynamic text: "Ah, you must be <<$pcs_nickname>>. The boss has already been raving about you. ...
  scene.text(`"Ah, you must be ${((s as any).pcs_nickname || '')}. The boss has already been raving about you. I'm Oleg, I keep this place together.” He turns on his groaning chair and calls to the back. "Boss, ${((s as any).pcs_nickname || '')}'s here."`);
  scene.text('"Send her in right away, Oleg!", comes back.');
  scene.text('"You heard him, Dove, just go through, he\'s waiting for you."');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'You knock at the door and enter', goto: ['fightClub_intro', 'office2'] },
  ]);
  scene.build();
}

function enterOffice2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/shared/fightclub/sultan_portrait.jpg');
  scene.text('Sultan Maskaev comes to meet you at the door. "Excellent. I\'m glad to see you, sweetie."');
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>," you correct, slightly annoyed.
  scene.text(`"${((s as any).pcs_nickname || '')}," you correct, slightly annoyed.`);
  scene.text('He grins. "I might as well call you a superstar, because you soon will be! Come on, have a seat."');
  scene.text('He\'s obviously turned on the charm, and he\'s got a lot of it. He is a bit too quick with his compliments. You want to slow down the things a bit. Your gaze falls on a picture on the wall.');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'You point at the pic', goto: ['fightClub_intro', 'office3'] },
  ]);
  scene.build();
}

function enterOffice3(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/shared/fightclub/sultan_boxerpic.jpg');
  scene.text('"Is that you?"');
  scene.text('"Ah, yes, my manager really wanted a picture that alludes to my fight name."');
  scene.text('"The shadow?"');
  scene.text('He waves it off. "That was years ago. I\'m surprised you\'ve heard the name."');
  scene.text('"I heard you were pretty good. Why did you quit?"');
  scene.text('"The Wall."');
  scene.text('"What?"');
  scene.text('"That was his fighting name. An Armenian, not particularly fast, but tough and never got knocked out. If I had beaten him, I would have had the right to fight for the world championship. Fifth round, I had already landed a few good liver hooks and hit the short rib several times. He could hardly breathe and was already staggering. So I thought I\'d knock him out. A right, straight, a rocket, right on his chin, direct hit. But he didn\'t fall over, he didn\'t even flinch. I broke my wrist for that."');
  scene.text('"Wow."');
  scene.text('"It was like hitting a brick wall. That\'s when I finally understood why they called him The Wall. It was my last fight, because the wrist never really got stable again."');
  scene.text('"I\'m sorry about that. And The Wall? Did he fight for the world championship then?"');
  scene.text('Sultan shakes his head. "He disappeared shortly after our fight. Some say he doped himself with some secret painkillers that were actually intended for the military and got problems with the Secret Service. Others claim that he fought under the protection of an ancient Baltic witch, but that he ended up angering her. Anyway, one evening he went for a jog in the woods - and never came out again.” He sighs. "But, enough of the old days. Sit down, sweetie, and let\'s talk about your options."');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'You take a seat', goto: ['fightClub_intro', 'office4'] },
  ]);
  scene.build();
}

function enterOffice4(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/shared/fightclub/sultan_sitting.jpg');
  scene.text('"I still don\'t know exactly what this is about."');
  scene.text('"In short, I\'m offering you the opportunity to join an exclusive and lucrative fight club. We organize exciting fights in front of a select audience - and no federation talks us into any boring rules. It just has to be entertaining, and that usually means a bit of bloodshed."');
  scene.text('"So - Ultimate Fighting?"');
  scene.text('"Something like that. But we also do regular boxing matches, barenuckle boxing, taekwondo, we even had sumo wrestlers once, anything goes that entertains the public - and that people like to bet a lot of money on."');
  scene.text('"Kickboxing, too?"');
  scene.text('"No, sorry, for you it would be Ultimate Fighting, but that\'s almost the same thing, isn\'t it?"');
  scene.text('"It\'s much more brutal."');
  scene.text('"Only for the losers, and you, sweetie, are a winner - I\'ll make sure of that."');
  scene.text('You stare at him questioningly.');
  // TODO-QSP: dynamic text: "I didn''t just approach you because you''re talented, <<$pcs_nickname>>. You ha...
  scene.text(`"I didn't just approach you because you're talented, ${((s as any).pcs_nickname || '')}. You have a pretty face and an amazing body. That's our capital, and I don't want to waste it. I'll build you up slowly, choose a few easy opponents first. You'll still be able to cash in big time. How does ${qspFunc(s, 'money', 'string_profit', 10000)} for your first fight sound?"`);
  scene.text('"10.000?"');
  scene.text('"And it\'ll be a walk in the park, I promise. So - shall we make this clear?"');
  scene.text('You look at him. He seems really confident in you.');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Ultimate Fighting is too brutal for you', goto: ['fightClub_intro', 'office_end'] },
    { label: 'You are persuaded and agree', goto: ['fightClub_intro', 'office_sign'] },
  ]);
  scene.build();
}

function enterOfficeEnd(s: GameState, scene: SceneBuilder): void {
  ((s as any).fightClub = (s as any).fightClub ?? {})['declined'] = 1;
  scene.img('images/locations/city/shared/fightclub/office1.jpg');
  scene.text('You politely decline and leave. Oleg at his desk looks very disappointed.');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['city_industrial', 'start'] },
  ]);
  scene.build();
}

function enterOfficeSign(s: GameState, scene: SceneBuilder): void {
  ((s as any).fightClubQW = (s as any).fightClubQW ?? {})['story'] = 5;
  scene.img('images/locations/city/shared/fightclub/signcontract.jpg');
  scene.text('He presents you with a contract and gives you time to read it. It starts with a confidentiality agreement. Apart from that, it\'s not very long, but it contains a few interesting figures. Firstly, it mentions an absurdly high transfer fee if you wanted to change management, and secondly, it states the manager\'s share.');
  scene.text('"Twenty-five percent?" you ask, frowning. "I was thinking something like ten."');
  scene.text('"This proves that you have no idea about the business. You get 75 percent, that\'s actually pretty generous, sweetheart. I take thirty for most of my other fighters."');
  // TODO-QSP: dynamic text: "So I don''t get <<$func(''money'', ''string_profit'', 10000)>> for my first fig...
  scene.text(`"So I don't get ${qspFunc(s, 'money', 'string_profit', 10000)} for my first fight, but only ${qspFunc(s, 'money', 'string_profit', 7500)}?"`);
  scene.text('"Like I said, it\'s going to be a walk in the park, and have you ever been paid that much for walking?"');
  scene.text('"No, I haven\'t." You stare at the paper. "What if I find out this is too hard for me, what when I\'ve had enough after one fight?"');
  scene.text('He shrugs his shoulders. "Then you\'ll get out again. That would be very unfortunate, but I don\'t believe in forcing fighters to do anything. It rarely ends well."');
  scene.text('You read the contract again, but nowhere does it say that you have to complete a minimum number of fights.');
  scene.text('You take a deep breath and sign.');
  scene.text('"Very good! If you want, you can start right away on Sunday, because we always fight on Sundays. I already have the ideal opponent for you. If that\'s too quick for you, just give me a call next week and I\'ll arrange a fight for you."');
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Why put it off?', handler: (st: GameState) => {
    scene.img('images/locations/city/shared/fightclub/sultan_portrait.jpg');
    scene.text('You arrange the first fight for next Sunday. He promises to pick you up and even get you the right clothes for the fight. He looks happy.');
    // TODO-QSP: dynamic text: <b>Note:</b> On fight day (Sunday), Sultan picks you up at your apartment at ' +...
    scene.text('<b>Note:</b> On fight day (Sunday), Sultan picks you up at your apartment at 19:00 (be inside)');
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['city_industrial', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterRide(s: GameState, scene: SceneBuilder): void {
  ((s as any).fightClubQW = (s as any).fightClubQW ?? {})['story'] = 6;
  scene.img('images/locations/city/shared/fightclub/bmw_blue.jpg');
  scene.text('"Excited?" asks Sultan after the brief greeting.');
  scene.text('"It\'s not my first fight," you play it cool.');
  scene.text('"Very nice. I hope you haven\'t told anyone about this event?"');
  scene.text('You shake your head.');
  scene.text('"Good. The organizers, the audience and the fighters all value discretion. That\'s why the fight nights are never held twice in a row in the same place." He gives you a conspiratorial look. "So please don\'t expect a glossy arena."');
  scene.text('"Okay," you reply with a frown. "And what kind of people are they," you ask after a pause.');
  scene.text('"People with money and influence, the kind you\'d better not ask how they got their money and influence."');
  scene.text('"I see."');
  scene.text('"Good, it\'ll be best if you don\'t ask any questions at all. In time, you\'ll find out how things work. But if you really need to know something, ask me, not anyone else, okay?"');
  scene.text('You nod and look thoughtfully out of the car. You\'re in an area you don\'t know. ');
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'You arrive', goto: ['fightClub_intro', 'arena'] },
  ]);
  scene.build();
}

function enterArena(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/shared/fightclub/industloc1.jpg');
  scene.text('Sultan steers the car into a run-down corner of the industrial district.');
  scene.text('You see dilapidated factories and hall facades covered in graffiti. You enter a particularly dark side street. Sultan turns into a dusty hall where a lot of classy-looking cars are parked. You see a few men standing around chatting, presumably chauffeurs or bodyguards.');
  scene.text('The wealth you see there doesn\'t quite fit in with this industrial ruin. Sultan drives to the end of the hall. You get out. He points to a battered door with a nod. "That\'s the way to the changing room, Superstar. Go on ahead. I\'ll be right with you."');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'You search for the locker room', goto: ['fightClub_intro', 'changingroom'] },
  ]);
  scene.build();
}

function enterChangingroom(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/shared/fightclub/lockerold1.jpg');
  scene.text('The changing room obviously dates back to Soviet times. It smells of sweat and socialism. It doesn\'t exactly look like the big money your manager likes to talk about. Shaking your head, you start to change as Sultan enters.');
  scene.text('"Well, is my superstar ready?"');
  scene.text('"I\'m half-naked!" you protest.');
  scene.text('"Nothing I haven\'t seen before. Here, I\'ve got something for you." He throws a bag onto the bench. It\'s your fighting jersey, red, with a big dark star on the top.');
  if (qspFunc(s, 'clothing', 'is_owned', 'danilovich_outfits', 162) === 0) {
    qspCall(s, 'clothing', 'add_item', 'danilovich_outfits', 162);
  }
  qspCall(s, 'clothing', 'strip');
  qspCall(s, 'clothing', 'wear', 'danilovich_outfits', 162);
  qspCall(s, 'arousal', 'foreplay', 5, 'striptease');
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'You take it with a frown', goto: ['fightClub_intro', 'starjersey'] },
  ]);
  scene.build();
}

function enterStarjersey(s: GameState, scene: SceneBuilder): void {
  scene.img('images/pc/items/danilovich/outfits/162.jpg');
  scene.text('"Looks pretty tight."');
  scene.text('"You want to show off your assets, Superstar," he replies with a grin.');
  scene.text('"Hopefully I\'ll be able to move in it."');
  scene.text('"It\'ll be fine. By the way, you still need a fighting name, I almost forgot."');
  scene.text('"Fighting name?');
  scene.text('"It should strike fear into the hearts of your opponents," he says with pathos, then grins. "No, seriously, it\'s to make sure you stay anonymous. Some of the fighters here are pretty vindictive, you know."');
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  ((s as any).fightClubQW = (s as any).fightClubQW ?? {})['name'] = 'Dark Star';
  // TODO-QSP: end
  scene.actions([
    { label: '', labelFn: (s: GameState) => 'Choose a fight name (Default: ' + String(((s as any).fightClubQW ?? 0)?.['name'] ?? '' ?? '') + ')', handler: (st: GameState) => {
    ((st as any).fightClubQW = (st as any).fightClubQW ?? {})['name'] = 0;
    if (((st as any).fightClubQW ?? 0)?.['name'] === '') {
      ((st as any).fightClubQW = (st as any).fightClubQW ?? {})['name'] = 'Dark Star';
    }
  } },
    { label: 'Continue', goto: ['fightClub_intro', 'preparations'] },
  ]);
  scene.build();
}

function enterPreparations(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/shared/fightclub/sultan_portrait.jpg');
  scene.text('Sultan helps you with the unfamiliar gloves and provides you with some information about your opponent: "She\'s made a name for herself with wild bar brawls, but that\'s just brute force; she\'s got no technique, no stamina, and she\'s probably drunk. Just dodge her and cover her with punches. And if she does hit you, our shaman will take care of you."');
  scene.text('"Who?"');
  // TODO-QSP: dynamic text: But Sultan is already out the door to give the ring announcer your fight name "<...
  scene.text(`But Sultan is already out the door to give the ring announcer your fight name "${((s as any).fightClubQW ?? 0)?.['name'] ?? ''}".`);
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Let\'s go!', goto: ['fightClub_intro', 'firstfight'] },
  ]);
  scene.build();
}

function enterFirstfight(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/shared/fightclub/announcer.jpg');
  // TODO-QSP: dynamic text: You enter the arena to the sound of booming music. Bright spotlights blind you s...
  scene.text(`You enter the arena to the sound of booming music. Bright spotlights blind you so that you can't see much of the jeering crowd. A loud voice announces your fighting weight and size, and yells your fight name "${((s as any).fightClubQW ?? 0)?.['name'] ?? ''}" into the darkness.`);
  scene.text('You can feel the adrenaline, the blood rushing in your ears. Someone taps you on the shoulder. It\'s Oleg, who gives you an encouraging nod. You are happy and relieved, that he is in your corner. To your surprise it\'s a classical boxing ring, no cage.');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'You climb into the ring', goto: ['fightClub_intro', 'opponent'] },
  ]);
  scene.build();
}

function enterOpponent(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/shared/fightclub/opponent1.jpg');
  scene.text('Your opponent is already there. She raises her fists towards the audience as if she\'s already won, overpowering the music with her inarticulate screams. Sultan has told you her height and weight, but you still didn\'t imagine her to be this big.');
  scene.text('She screams and it sounds like hatred and destruction. This is different from the gym. This isn\'t sparring, this isn\'t a sporting showdown between amateurs - this is serious.');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'The bell rings for the first round', goto: ['fightClub_intro', 'round1'] },
  ]);
  scene.build();
}

function enterRound1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/gym/kickboxing/ring1.jpg');
  scene.text('Your opponent is obviously determined to make it a short fight. She charges at you and tries to land a haymaker. You react instinctively, back away, duck and feel the blow whizz over you. The second one follows. You also let it miss. She roars and continues to attack. You raise your guard, intercept the blow and land a few quick jabs to her face.');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'You study your opponent', handler: (st: GameState) => {
    scene.img('images/locations/city/shared/fightclub/femalefighters3.jpg');
    scene.text('She shakes, continues to attack. You dodge, gain space and land a hard kick on her hip. She roars with rage and attacks again. You dodge. She attacks, but you feel you\'re in control. Her actions are so predictable: Right swing, left swing and again.');
    scene.text('She doesn\'t even think about using her legs. You land a few more jabs to her face. She screams, spit blood and takes even more hits to her face. Suddenly the bell ends the first round.');
    qspCall(st, 'exercise', 'tier4', 5, 'jab', 'punch', 'kick', 'def');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'You go to your corner', goto: ['fightClub_intro', 'break'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBreak(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/gym/kickboxing/ring2.jpg');
  scene.text('The number girl winks at you as you drop onto the small stool. Oleg gives you water. "Stop playing with her, dove. Put an end to this before she lands another fluke."');
  scene.text('The ring bell sounds.');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Second round!', goto: ['fightClub_intro', 'round2'] },
  ]);
  scene.build();
}

function enterRound2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/shared/fightclub/opponenteye.jpg');
  scene.text('Your opponent is already badly marked. One of her eyes is already swollen shut. She attacks, in a blind rage, absolutely predictable. A walk in the park, as Sultan said. You bring your guard up, waiting for her strike, but it doesn\'t come, not from the left, instead a body hook catches you from the right.');
  scene.text('You gasp for air, jump back and block a kick with your shin. You were reckless - but this is a warning to you. It\'s time to call it a day. You let them come and counter. Your left shoots forward, catching her square in the face. She staggers back, smiles stupidly and topples over. Out.');
  qspCall(s, 'exercise', 'tier4', 5, 'jab', 'punch', 'kick', 'def');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Victory!', goto: ['fightClub_intro', 'knockout'] },
  ]);
  scene.build();
}

function enterKnockout(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/shared/fightclub/knockout.jpg');
  scene.text('Sultan was right, she was no match for you. You celebrate and collect the fight money. The arena cheers.');
  ((s as any).fightClubQW = (s as any).fightClubQW ?? {})['win'] = ((s as any).fightClubQW['win'] ?? 0) + (1);
  ((s as any).fightClubQW = (s as any).fightClubQW ?? {})['winKO'] = ((s as any).fightClubQW['winKO'] ?? 0) + (1);
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Take a victory lap', goto: ['fightClub_intro', 'victorylap'] },
  ]);
  scene.build();
}

function enterVictorylap(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/shared/fightclub/victorybypoints.jpg');
  // TODO-QSP: dynamic text: The announcer roars "<<$fightClubQW[''name'']>>", the crowd cheers and laughs. S...
  scene.text(`The announcer roars "${((s as any).fightClubQW ?? 0)?.['name'] ?? ''}", the crowd cheers and laughs. Sultan climbs into the ring and raises your fists again.`);
  scene.text('"What did I promise," he whispers to you, "a walk in the park." You grin and enjoy the feeling of victory. And than it\'s over. The speaker comes to you with a broad fake smile. He shakes your hand and murmurs: "Hurry up, we have to set up the cage for the real fights."');
  qspCall(s, 'money', 'earn', 7500, 'cash');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'You go back to the locker room', goto: ['fightClub_intro', 'thelion'] },
  ]);
  scene.build();
}

function enterThelion(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/shared/fightclub/berik_the_lion.jpg');
  scene.text('A massive figure blocks your way.');
  scene.text('"So this is the new fighter from Little Sultan. Talented - and visually appealing, too."');
  scene.text('"Thank you," you reply curtly.');
  scene.text('"I\'m Berik Tobayev, better known as The Lion, I’m one of the organizers of this club and, by the way, a former world champion. I also own a boxing stable. So if you\'re ever looking for a real manager - come to me!"');
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Someone is getting between you', goto: ['fightClub_intro', 'shadowandlion'] },
  ]);
  scene.build();
}

function enterShadowandlion(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/shared/fightclub/sultan_portrait.jpg');
  scene.text('"Hands off, Berik, that\'s my girl."');
  scene.text('Tobayev laughs. "Good find, Sultan, definitely midnight material."');
  scene.text('"Certainly not," replies Sultan and pushes you away.');
  scene.text('"An old friend?" you ask.');
  scene.text('Sultan shakes his head. "This club has its dark side. It\'s best to stay away from him."');
  scene.text('"What\'s midnight material?"');
  scene.text('"You\'re too young for that - and too good."');
  scene.text('"But what\'s that about?"');
  scene.text('"Not an issue for you, got it? Good. Take a deep breath. The ring doc will have a look at you. I\'ll be with you in a minute, but I first have to promote my new superstar out in the arena."');
  (s as any).minut = ((s as any).minut ?? 0) + 6;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'You enter the locker room', goto: ['fightClub_intro', 'ringdoctor'] },
  ]);
  scene.build();
}

function enterRingdoctor(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/shared/fightclub/shaman.jpg');
  scene.text('As you take a seat on the shabby bench, a stranger enters the locker room. His clothes are… odd and he is holding a small drum in his hands as well as the doctor\'s bag.');
  scene.text('You stare at him in amazement. Sultan had mentioned a shaman before the fight, but you thought it was a joke. "Who…?"');
  scene.text('"I\'m the ring doctor here."');
  scene.text('"You\'re a shaman!"');
  scene.text('He makes no face. "What gave me away?"');
  scene.text('"You\'re really a shaman? I mean a real one, from Siberia and all that? I was actually expecting a doctor or paramedic."');
  scene.text('"And here I am! Take your clothes off, I need to see what you\'ve got."');
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'You agree to undress', goto: ['fightClub_intro', 'undress'] },
    { label: 'You don\'t feel like undressing', goto: ['fightClub_intro', 'hesitation'] },
    { label: 'You categorically refuse', goto: ['fightClub_intro', 'refuse'] },
  ]);
  scene.build();
}

function enterUndress(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/shared/fightclub/nudelocker.jpg');
  scene.text('You undress.The shaman seems completely unimpressed by your naked body. He scans you with his hands for hidden injuries. His touch is electrifying, even though, or perhaps precisely because, he seems so completely uninterested in your naked body.');
  scene.text('"It\'s hardly worth mentioning." He sounds almost disappointed. Singing hoarsely, he rubs a sage-scented ointment on your few wounds. Where he applies it, it suddenly becomes very hot. That increases your arousal. The man has truly magical fingers! But then he suddenly stops.');
  scene.text('"There\'s another fighter, and she needs me more than you do," he says, as if sensing your disappointment.');
  scene.text('He closes his bag. "See you next time, then."');
  scene.text('As suddenly as he had appeared, he has disappeared again.');
  qspCall(s, 'arousal', 'foreplay', 10, 'striptease', 'massage');
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Time to take a shower', goto: ['fightClub_intro', 'shower'] },
  ]);
  scene.build();
}

function enterHesitation(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/shared/fightclub/shaman.jpg');
  scene.text('He shakes his head angrily. "A fight like that can cause hidden injuries. And I won\'t find them if you don\'t undress."');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Sighing, you undress', goto: ['fightClub_intro', 'undress'] },
  ]);
  scene.build();
}

function enterRefuse(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/shared/fightclub/shaman.jpg');
  scene.text('You\'re not going to undress in front of some random stranger.');
  scene.text('"Well, then don\'t." He closes his doctor bag and disappears, shaking his head.');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Time to take a shower', goto: ['fightClub_intro', 'shower'] },
  ]);
  scene.build();
}

function enterShower(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/shared/fightclub/lockerold_shower.jpg');
  scene.text('The shower looks like a nightmare, but the water is hot and refreshing.');
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Time to change', goto: ['fightClub_intro', 'wardrobe'] },
  ]);
  scene.build();
}

function enterWardrobe(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'fightClub_intro', 'wardrobe');
  scene.img('images/locations/city/shared/fightclub/lockerold2.jpg');
  scene.text('Refreshed you go back to the wardrobe. You hear loud music from the hall.');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  qspCall(s, 'wardrobe', 'default_clothing_options');
  if (((s as any).mc_inventory ?? 0)?.['deodorant'] > 0  &&  (!((s as any).deodorant_on ?? 0))) {
    // TODO-QSP: 'Your deodorant will last for <b><<mc_inventory[''deodorant'']>></b> more '+iif(mc_inventory['deodor...
    scene.actions([
      { label: 'Apply deodorant (0:01)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['deodorant'] = ((st as any).mc_inventory['deodorant'] ?? 0) - (1);
    qspCall(st, 'sweat', 'deo');
    // TODO-QSP: iif(func('body_din', 'pregnancyVisibility') = 1, '<center><img <<$set_imgh>> src="images/shared/home...
    scene.text('You apply deodorant to your armpits. It will keep you feeling fresh and clean for longer.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).menu_off = 0;
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', goto: ['fightClub_intro', 'conclusion'] },
    { label: 'Use mirror', goto: ['mirror', 'start'] },
    { label: 'Change outfit', goto: ['wardrobe', 'start'] },
  ]);
  scene.build();
}

function enterConclusion(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/shared/fightclub/sultan_portrait.jpg');
  scene.text('As you\'re about to leave the changing room, Sultan intercepts you. "Hey Superstar, your performance really made an impression. A lot of people want to see you back in the ring soon."');
  scene.text('You feel tired and suddenly don\'t know what to make of the whole thing. "She really didn\'t stand a chance, did she?"');
  // TODO-QSP: dynamic text: He looks surprised. "You feel sorry for her? That honors you, but it''s uncalled...
  scene.text(`He looks surprised. "You feel sorry for her? That honors you, but it's uncalled for. After all, she's getting ${qspFunc(s, 'money', 'string_profit', 2000)} for that, and she really had no talent at all for our art."`);
  scene.text('"Yes, that may be."');
  // TODO-QSP: dynamic text: Sultan misunderstands your thoughtfulness. "I know, <<$func(''money'', ''string_...
  scene.text(`Sultan misunderstands your thoughtfulness. "I know, ${qspFunc(s, 'money', 'string_profit', 7500)} isn't the world. But that was just the beginning! You can get rich here - but not with your first fight, of course.`);
  scene.text('It\'ll take a bit more work, but you\'re on the right track, okay? And you can take the next step as early as next Sunday. Give me a call or drop by the office. If I\'m not there, talk to Oleg, okay?"');
  scene.text('You nod. Sultan seems pretty excited. You\'d like to talk about a few things. I wonder if you\'ll have a chance to do that on the way back.');
  scene.text('Suddenly he embraces you and hugs you tightly with his paws against his well-trained body. "Actually, we should be celebrating, but I can\'t leave here yet. I\'m sorry, superstar. But Oleg is waiting outside. He\'ll drive you home."');
  scene.text('That was a bit abrupt.');
  (s as any).minut = ((s as any).minut ?? 0) + 7;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'You just want to go home', goto: ['fightClub_intro', 'drive1'] },
  ]);
  scene.build();
}

function enterDrive1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/shared/fightclub/oleg2.jpg');
  scene.text('Oleg is leaning against Sultan\'s BMW. His eyes light up when he sees you.');
  scene.text('"Well, Dove, how was your first fight?"');
  scene.text('"Pretty one-sided. You were there, Oleg."');
  scene.text('"Yeah, but I wanted to know what it was like for you. It\'s different from an amateur fight at the Havana, isn\'t it?" He holds the door open for you.');
  scene.text('"That\'s right," you say and drop into the passenger seat.');
  scene.text('Oleg wedges his burly body behind the steering wheel, starts the engine and accelerates. His driving is pretty… adventurous. More than once you find yourself mentally on the brakes as he ignores another set of traffic lights.');
  scene.text('"Does Sultan know how you drive?"');
  scene.text('"Don\'t worry, Dove, I still have the reflexes of a boxer."');
  scene.text('The way he drives, he surely needs them.');
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'You stare ahead', goto: ['fightClub_intro', 'drive2'] },
  ]);
  scene.build();
}

function enterDrive2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/shared/fightclub/car_talk.jpg');
  scene.text('"Say, Oleg, how come you\'re involved in this fight club? Somehow, I don\'t know, it doesn\'t really suit you."');
  scene.text('He gives you a sideways glance and at the last moment, swearing, swerves out of the way of a car at a crossroads whose driver was naive enough to rely on the right of way rules.');
  scene.text('"You know about Sultan\'s last fight?"');
  scene.text('"Where he broke his hand?"');
  scene.text('He nods. "And you also know that the Armenian disappeared shortly after the fight?"');
  scene.text('"Sultan told me about that, too."');
  scene.text('Oleg slows down now.');
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'You look out of the window', goto: ['fightClub_intro', 'drive3'] },
  ]);
  scene.build();
}

function enterDrive3(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/shared/fightclub/car.jpg');
  scene.text('"Nobody knew exactly what happened, it was only clear that the Armenian was doped with some miracle drug, something that couldn\'t be proven. But how did he get it? Who helped him? And who made him disappear when the whole thing came to light?');
  scene.text('Sultan would have been better off letting the matter rest, but he couldn\'t do that. A doped-up boxer had cheated him out of his chance to become Champion of the World! He basically accused the whole federation of being involved, and unfortunately there were newspapers and broadcasters who broke the story."');
  scene.text('"Oh."');
  scene.text('"Yes, oh, you could say that. Certain people didn\'t like it at all. We had a gym back then, under our office. There was a raid out of the blue, and of course those assholes slipped us heaps of drugs.');
  scene.text('Sultan was banned for life from all sports, he\'s not allowed to train or manage athletes. But boxing, fighting, that\'s his life. We had already thought about emigrating, but then Fight Club approached us."');
  scene.text('"And the people at the club don\'t care about a ban like that?"');
  scene.text('Oleg laughs. "Dove, they only respect the laws they make themselves."');
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Now you know why Sultan sometimes seems so melancholy', goto: ['fightClub_intro', 'drive4'] },
  ]);
  scene.build();
}

function enterDrive4(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/shared/fightclub/nighttraffic.jpg');
  scene.text('You lean back in your seat and let the world outside pass you by. You now understand how Sultan and Oleg ended up in this scene. And you suspect that there must be very powerful people behind the fight club.');
  scene.text('Oleg brakes hard and this snaps you out of your thoughts.');
  scene.text('"We\'re at your place, Dove. By the way, if you want to learn a bit from an old boxer - I\'m at the gym on Wednesdays and Thursdays, and it would be a pleasure to show you a trick or two."');
  scene.text('"Thanks, Oleg."');
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Give him a quick kiss on the cheek', goto: ['fightClub_intro', 'home'] },
  ]);
  scene.build();
}

function enterHome(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/shared/fightclub/oleg2.jpg');
  scene.text('Oleg laughs and accelerates as soon as you close the passenger door. He shoots off at breakneck speed.');
  scene.text('You are left alone at the side of the street.');
  scene.text('<b>Note:</b> You can train with Oleg at Havana Gym on Wednesdays and Thursdays between 9 and 12.');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt $home['location'], $home['location_arg']
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'card':
      enterCard(s, scene);
      break;
    case 'office1':
      enterOffice1(s, scene);
      break;
    case 'office2':
      enterOffice2(s, scene);
      break;
    case 'office3':
      enterOffice3(s, scene);
      break;
    case 'office4':
      enterOffice4(s, scene);
      break;
    case 'office_end':
      enterOfficeEnd(s, scene);
      break;
    case 'office_sign':
      enterOfficeSign(s, scene);
      break;
    case 'ride':
      enterRide(s, scene);
      break;
    case 'arena':
      enterArena(s, scene);
      break;
    case 'changingroom':
      enterChangingroom(s, scene);
      break;
    case 'starjersey':
      enterStarjersey(s, scene);
      break;
    case 'preparations':
      enterPreparations(s, scene);
      break;
    case 'firstfight':
      enterFirstfight(s, scene);
      break;
    case 'opponent':
      enterOpponent(s, scene);
      break;
    case 'round1':
      enterRound1(s, scene);
      break;
    case 'break':
      enterBreak(s, scene);
      break;
    case 'round2':
      enterRound2(s, scene);
      break;
    case 'knockout':
      enterKnockout(s, scene);
      break;
    case 'victorylap':
      enterVictorylap(s, scene);
      break;
    case 'thelion':
      enterThelion(s, scene);
      break;
    case 'shadowandlion':
      enterShadowandlion(s, scene);
      break;
    case 'ringdoctor':
      enterRingdoctor(s, scene);
      break;
    case 'undress':
      enterUndress(s, scene);
      break;
    case 'hesitation':
      enterHesitation(s, scene);
      break;
    case 'refuse':
      enterRefuse(s, scene);
      break;
    case 'shower':
      enterShower(s, scene);
      break;
    case 'wardrobe':
      enterWardrobe(s, scene);
      break;
    case 'conclusion':
      enterConclusion(s, scene);
      break;
    case 'drive1':
      enterDrive1(s, scene);
      break;
    case 'drive2':
      enterDrive2(s, scene);
      break;
    case 'drive3':
      enterDrive3(s, scene);
      break;
    case 'drive4':
      enterDrive4(s, scene);
      break;
    case 'home':
      enterHome(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const fightClub_intro: LocationDef = {
  name: 'fightClub_intro',
  title: 'You climb out of the ring when you are approached by a man.',
  region: 'other',
  enter: enter,
};
