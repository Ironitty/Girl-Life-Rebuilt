import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterHomesex(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A25');
  scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/walkhome/walksex1.jpg');
  scene.text('Sonia unlocks the door and the two of you head inside. As soon as you do, you start kissing again with renewed vigor. Fumbling behind her, Sonia manages to close the door and the two of you stumble into the dining room, where you back into the table.');
  scene.text('Breaking your kiss, she takes hold of your hips with her hands and lifts slightly, trying to get you to sit on the table.');
  qspCall(s, 'arousal', 'foreplay', 2, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Sit', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/walkhome/walksex2.jpg');
    scene.text('She helps you sit on the table and pushes her hips between your knees so she\'s between your legs. She gently squeezes and massages your breasts as she starts kissing you again.');
    scene.text('After a few minutes, she starts to tug at your top, pulling it up to expose your breasts before she asks you to lie back.');
    qspCall(s, 'arousal', 'foreplay', 1, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Lay back', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/walkhome/walksex3.jpg');
    scene.text('You lie back on the table and she leans forward and starts kissing your chest. She slowly makes her way to one of your nipples and suckles and nips at it. As she does this, her other hand massages your other breast.');
    qspCall(s, 'arousal', 'foreplay', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Enjoy', handler: (st: GameState) => {
    if (((s as any).pantyworntype ?? 0) === 'none') {
      scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/walkhome/walksex3.jpg');
      scene.text('She pulls your clothes aside and reaches for your panties. When she doesn\'t find any, she smiles at you.');
      scene.text('"Dirty girl," she grins before she starts to kiss her way down your stomach.');
    } else {
      scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/walkhome/walksex4.jpg');
      scene.text('She pulls your clothes aside until she gets to your panties, which she gently starts pulling off. She tosses them aside and starts kissing your ankle, making her way back up your legs towards your inner thighs.');
    }
    qspCall(s, 'arousal', 'foreplay', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let her eat you', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/walkhome/walksex5.jpg');
    scene.text('Her kisses slowly lead her to your crotch until you feel her soft lips kiss your clit. She starts to lick and suck on it and you feel your pussy getting wet.');
    scene.text('She then slides her tongue down, slips it between your pussy lips and starts eating you out in earnest.');
    qspCall(s, 'arousal', 'cuni', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get up', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/walkhome/walksex6.jpg');
    scene.text('She expertly sucks at your clit and licks your pussy. You don\'t know if she\'s done this a lot or is just a natural, but you really don\'t care.');
    scene.text('As you start moaning a little louder, she stops and puts a finger to your lips. "Shh! Don\'t wake anyone! Come on, let\'s go to my room."');
    qspCall(s, 'arousal', 'cuni', 2, 'lesbian');
    qspCall(s, 'stat', '');
    if (((s as any).mc_inventory ?? 0)?.['strapon'] === 1  &&  ((s as any).soniaQW ?? 0)?.['sex'] === 1) {
      scene.actions([
        { label: 'Show her your strap-on', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'D<<strapNumber>>');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/livingroom/strapon/strapon2.jpg');
    scene.text('As she leads you to her room, you grab her hand and pull her back. She looks at you with questioning eyes, wondering if you\'ve changed your mind. Her eyes grow wide when you pull your strap-on out of your purse and show it to her.');
    scene.text('"Oh my god!" she utters with her hands over her mouth and sits down on the couch.');
    scene.text('You sit next to her with a huge smile and hold the strap-on between you. She reaches over and touches it with a huge grin on her face. "What do you want to do with this?"');
    if (((s as any).spellKnown ?? 0)?.['penisenvy'] === 1  &&  ((s as any).mc_inventory ?? 0)?.['strapon'] === 1  &&  ((s as any).strapNumber ?? 0) > 0) {
      scene.actions([
        { label: 'Put on your strapon and cast Penis Envy', handler: (st: GameState) => {
    scene.img('images/pc/activities/misc/puton_strapon1.mp4');
    scene.text('"I\'m going to fuck you with my cock," you tell her.');
    scene.text('She bites her lower lip, turned on at the idea before taking you by the hand and leading you to her bedroom. You both start to get undressed and you pull the harness up over your hips and pull the straps tight until it fits snugly.');
    if ((!((s as any).penisEnvyVariable ?? 0))) {
      scene.actions([
        { label: 'Cast Penis Envy', handler: (st: GameState) => {
    qspCall(s, 'castSpell', 'penisenvy');
    scene.img('images/pc/magic/cast_spell.jpg');
    if (((s as any).spellSuccess ?? 0) > 0) {
      scene.text('You cast the spell and feel the magic coursing through your body. It centers on your pelvic region and you feel the dildo meld with your body as it slowly twitches.');
      scene.text('Once the magical sensation has passed, you look down and see a dick the same size as the dildo was, hanging down in front of you. You can\'t help but smile and hope Sonia will enjoy this as much as you will.');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/pc/magic/penis_envy/reveal_bottomless1.jpg');
    scene.text('You turn around so Sonia can see your new dick. Her eyes grow wide as she stares at your dick hanging down. "Wow, that looks so real!"');
    scene.text('You smile. "It\'s a new realistic dildo that\'s supposed to look and feel real. Not to mention it shoots fake cum."');
    scene.text('She gives you a curious gaze as you give your dick a few strokes, which causes it to get even harder before you lay down on her bed on your back. "Get over here and suck my dick."');
    scene.actions([
      { label: 'Get your dick sucked', goto: ['soniaev1', 'strapon_magic_bedroom'] },
    ]);
  } },
      ]);
    } else {
      scene.text('You cast the spell and feel the magic coursing through your body. It centers on your pelvic region as you feel the dildo meld with your body, but you lose your focus and the magic slowly flutters and dissipates, leaving you feeling a little cold.');
      scene.text('You look down and see the harness and dildo still in place, but no real dick. You sigh at your failure. Hopefully Sonia didn\'t notice your disappointment at the spell failing.');
      scene.text('You give the dildo a few tugs to ensure it will stay in place before you climb up on her bed on your knees. "Suck my dick."');
      scene.actions([
        { label: 'Suck my dick', goto: ['soniaev1', 'strapon_fucking'] },
      ]);
    }
  } },
      ]);
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Fuck me with it', goto: ['soniaev1', 'strapon_fucked'] },
      { label: 'Going to fuck you with it', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bedroom/strapon/strapon.jpg');
    scene.text('"I\'m going to fuck you with my cock," you tell her.');
    scene.text('She bites her lower lip, turned on at the idea before taking you by the hand and leading you to her bedroom. You both start to get undressed and you pull the harness up over your hips and pull the straps tight until it fits snugly.');
    scene.text('Giving the dildo a few tugs to ensure it will stay in place, you climb up on her bed on your knees. "Suck my dick."');
    scene.actions([
      { label: 'Get your dildo sucked', goto: ['soniaev1', 'strapon_fucking'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Go to her room', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/walkhome/walksex7.jpg');
    scene.text('You nod and slide off the table before the two of you walk to her room, hand in hand. Once there, she pushes you down on the bed and climbs on top of you. Reaching for your face, she stares into your eyes for a moment before she starts kissing you again. You can taste your own wetness on her lips and tongue.');
    qspCall(s, 'arousal', 'foreplay', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Take her dress off', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/walkhome/walksex8.jpg');
    scene.text('Stopping your make out session for a moment, you pull her dress over the top of her head and toss it aside before you go back to kissing and fondling each other.');
    qspCall(s, 'arousal', 'foreplay', 1, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go down on her', goto: ['soniaev1', 'eatsonia'] },
      { label: 'Get finger banged', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/walkhome/walksex9.jpg');
    scene.text('She\'s been leading the action so far, and you decide to just follow her lead. She pulls off most of the rest of your clothes and tosses them aside before she lies down next to you. Her hand slides between your legs and you spread them wider.');
    scene.text('You feel one finger slide into your wet pussy, soon followed by a second. She fingers you until your pussy is soaking wet and she adds a third finger.');
    qspCall(s, 'arousal', 'vaginal_finger', 2, 'lesbian', 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get eaten out again', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/walkhome/walksex10.jpg');
    scene.text('As she finger bangs your pussy, she slides down and replaces her fingers with her tongue. She then goes back to eating you out, her face getting covered in your wetness.');
    scene.text('After a few minutes, she stops. "My turn."');
    qspCall(s, 'arousal', 'cuni', 2, 'lesbian', 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go down on her', goto: ['soniaev1', 'eatsonia'] },
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
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterEatsonia(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A25');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/walkhome/walksex11.jpg');
  scene.text('You lay her down on her back, then kiss her stomach and her pussy over her panties. She watches you, moaning softly while biting her lip. She clearly wants more, but you take your time.');
  scene.text('After you tease her for a while, you take hold of her wet panties and slowly slide them down her legs. Once they\'re free, you toss them aside.');
  qspCall(s, 'arousal', 'foreplay', 1, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Lick her pussy', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/walkhome/walksex12.jpg');
    scene.text('You place your head between her legs and start kissing and licking her pussy, finding it already soaking wet. It doesn\'t take long until she places her hand on your head to encourage you to be more aggressive. You oblige her and start lapping and tonguing her pussy.');
    qspCall(s, 'arousal', 'cuni_give', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep licking her pussy', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/walkhome/walksex13.jpg');
    scene.text('You suck and lick her clit for a few minutes before you stick your tongue back inside her pussy. You hear her moan and feel the hand on your head adding more pressure as she starts grinding her crotch against you, covering your whole face in her juices.');
    scene.text('"I want to eat you at the same time," she suddenly blurts out.');
    qspCall(s, 'arousal', 'cuni_give', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: '69', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/walkhome/walksex14.jpg');
    scene.text('The two of you get into a 69 position. She gets on top and almost sits on your face. You start to lick at her pussy at the same time you can feel her licking at yours.');
    scene.text('The combination of having your pussy eaten out while you\'re eating out another pussy is almost too much.');
    qspCall(s, 'arousal', 'cuni', (-2), 'lesbian');
    qspCall(s, 'arousal', 'cuni_give', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Cum!', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/walkhome/walksex15.jpg');
    scene.text('Her moans start coming louder and longer before you\'re suddenly drenched in her wetness. You can feel her body shaking as she has an orgasm.');
    qspCall(s, 'arousal', 'cuni', (-2), 'lesbian');
    qspCall(s, 'arousal', 'cuni_give', 2, 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Afterglow', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    if (!(s as any).soniaQW) (s as any).soniaQW = {}; (s as any).soniaQW['sex'] = 1;
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/walkhome/walksex16.jpg');
    if (((s as any).home ?? 0)?.['current'] !== 'parents_home') {
      scene.text('Once your orgasms have passed, she climbs off you and lies down next to you to cuddle. The two of you lie intertwined, basking together in the afterglow. As much as you\'d like to stay, you know you can\'t. You know you need to get home.');
      scene.text('You reluctantly disentangle yourself from her and she gives you a small smile.');
      scene.text('"Sorry, but I need to get going," you tell her.');
    } else {
      scene.text('Once the orgasms have passed, she climbs off you and lies down next to you to cuddle. The two of you lie intertwined, basking together in the afterglow. As much as you\'d like to stay, you know you can\'t. You know you need to get home.');
      scene.text('You reluctantly disentangle yourself from her and she gives you a small smile.');
      // TODO-QSP: dynamic text: "Sorry, I need to get going or my <<$npc_nickname['A29']>> will have a fit," you...
      scene.text(`"Sorry, I need to get going or my ${((s as any).npc_nickname ?? 0)?.['A29']} will have a fit," you tell her.`);
    }
    scene.text('She nods. "I understand. It was fun, though."');
    scene.text('You smile at her and give her a lingering kiss before you get dressed. "Yeah, it was."');
    scene.text('As you finish dressing, she throws on a nightshirt and walks you to the door. "See you at school."');
    scene.text('You bid her farewell before you walk out and she closes the door behind you and locks it.');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
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

function enterStraponFucked(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A25');
  qspCall(s, 'npcStat', 'D4', 'a');
  scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/livingroom/strapon/strapon1.jpg');
  scene.text('"I want you to put this on and fuck me with it," you tell her.');
  scene.text('Her grin gets even bigger. "I\'d love to fuck you with this," she says as she takes the strap-on and strokes the shaft of the attached dildo. She lays it aside and leans in to kiss you, caressing your neck as she gives you a long, slow, passionate kiss.');
  scene.text('She then breaks the kiss and quickly gets undressed. You follow suit and undress as well. Once you\'re both naked, she gently pushes you back on the couch until you\'re lying on your back and she moves to straddle your face.');
  qspCall(s, 'arousal', 'foreplay', 2, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Eat her out', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/livingroom/strapon/strapon3.jpg');
    scene.text('Once she straddles your face and lowers herself down, you start eagerly licking her slit and clit. You can hear her moan as your tongue works her pussy, feeling it getting wet as her hand slides down your stomach to your crotch before you feel two of her fingers slide inside you and start finger banging you.');
    qspCall(s, 'arousal', 'cuni_give', (-2), 'lesbian');
    qspCall(s, 'arousal', 'vaginal_finger', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: '69', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/livingroom/strapon/strapon4.jpg');
    scene.text('Once your pussy is wet from her fingering, she stops and bends over to start licking it as you continue to do the same to hers. The sensation of having your pussy licked while licking another is intoxicating. You both start moaning louder in pleasure before Sonia stands up and climbs off you.');
    qspCall(s, 'arousal', 'cuni_give', (-2), 'lesbian');
    qspCall(s, 'arousal', 'cuni', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'What\'s next', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/livingroom/strapon/strapon5.jpg');
    scene.text('You watch as she picks up the harness and starts sliding it on, pulling it over her hips. Once in place, she starts tightening up the straps so the harness fits snugly. When she finishes, she strokes the dildo a few times like it was a dick while grinning at you.');
    scene.text('"I better make sure your pussy is nice and wet before I fuck it," she says before she crawls forward and places her face between your legs. She then starts licking at your already wet pussy.');
    qspCall(s, 'arousal', 'cuni', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Mount her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/livingroom/strapon/strapon6.jpg');
    scene.text('A few minutes pass until she seems content that you\'re wet enough. She turns and sits on the couch before pulling you towards her.');
    scene.text('"Come and ride my dick," she says with a giggle.');
    // TODO-QSP: dynamic text: You straddle her lap and, with her help, slowly lower yourself down. The <<dick1...
    scene.text(`You straddle her lap and, with her help, slowly lower yourself down. The ${((s as any).dick1 ?? 0)}cm ${((s as any).dick_girth1 ?? 0)} dildo slides into your wet pussy, causing you to moan as it fills you up. You then start to slowly ride her, controlling the speed and depth of the dildo inside you as Sonia licks, kisses and suckles at your nipples.`);
    scene.text('The better it feels, the faster and deeper you start riding her.');
    qspCall(s, 'arousal', 'vaginal_strap', (-2), ((s as any).npcID1 ?? 0), 'lesbian');
    qspCall(s, 'arousal', 'foreplay', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Turn around', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/livingroom/strapon/strapon7.jpg');
    scene.text('Your enjoyment is interrupted when Sonia slaps you on the ass. "Get up and turn around so I can fuck you properly."');
    scene.text('You get off her and turn around before getting down on all fours, presenting yourself to her. She scoots up behind you on her knees and quickly slides the wet dildo back into your pussy, causing you to moan. She then grabs hold of your hips and starts fucking you, picking up speed and eventually working the dildo deep in your pussy as you moan louder.');
    scene.text('Your pleasure is interrupted when you hear Sonia\'s mother call out from the bedroom. "Sonia, is that you? You should be in bed! Is something wrong?"');
    scene.text('Sonia jumps off the couch, pulling the dildo out of your pussy as she does. "Everything\'s fine, mom! A friend stopped by for a few minutes to talk about schoolwork. She was just leaving!"');
    scene.text('She quickly takes the harness off and throws her dress over her head as fast as she can. You take the hint and quickly get dressed as well.');
    qspCall(s, 'arousal', 'vaginal_strap', 3, ((s as any).npcID1 ?? 0), 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Aftermath', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (!(s as any).soniaQW) (s as any).soniaQW = {}; (s as any).soniaQW['sex'] = 1;
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/livingroom/strapon/strapon1.jpg');
    if (((s as any).home ?? 0)?.['current'] !== 'parents_home') {
      scene.text('Once you\'re both fully dressed, you both sit on the couch and giggle a little at almost getting caught having sex. Sonia leans forward and gives you a long, slow kiss on the lips.');
      scene.text('"Thanks for walking me home," she smiles. "I had fun, but I should be in bed already."');
    } else {
      scene.text('Once you\'re both fully dressed, you both sit on the couch and giggle a little at almost getting caught having sex. Sonia leans forward and gives you a long, slow kiss on the lips.');
      scene.text('"Thanks for walking me home," she smiles. "I had fun, but if I don\'t go to bed soon, my mom is going to throw a fit!"');
      // TODO-QSP: dynamic text: You laugh a little and nod. "I know the feeling. My <<$npc_nickname['A29']>> wil...
      scene.text(`You laugh a little and nod. "I know the feeling. My ${((s as any).npc_nickname ?? 0)?.['A29']} will likely give me hell for being out this late too."`);
    }
    scene.text('When she walks you to the door, she gives you a little wave before closing and locking the door. You turn and head to the street.');
    qspCall(s, 'arousal', 'foreplay', 5, 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
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

function enterStraponFucking(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A25');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bedroom/strapon/strapon.jpg');
  scene.text('"I\'m going to fuck you with my cock," you tell her.');
  scene.text('She bites her lower lip, turned on at the idea before taking you by the hand and leading you to her bedroom. You both get undressed before you pull the harness up over your hips and pull the straps tight until it fits snugly.');
  scene.text('Giving the dildo a few tugs to ensure it will stay in place, you climb up on her bed on your knees. "Suck my dick."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Suck my dick', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bedroom/strapon/straponbj.jpg');
    scene.text('Only halfway undressed when you say it, she grins and climbs on the bed before getting on all fours. She takes the dildo into her mouth and starts sucking it. It looks like she really knows what she\'s doing and you briefly wonder just how many dicks she might have sucked.');
    scene.text('After she has the dildo nice and wet with her slobber, you stop her. "Hope you\'re ready because I\'m going to fuck your…"');
    qspCall(s, 'arousal', 'foreplay', 2, 'lesbian');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'anal', 'force');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Ass [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Ass [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'force');
  }, goto: ['soniaev1', 'strapon_anal'] },
      ]);
    }
    scene.actions([
      { label: 'Pussy', goto: ['soniaev1', 'strapon_pussy'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterStraponPussy(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A25');
  qspCall(s, 'npcStat', 'D4', 'a');
  scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bedroom/strapon/straponvag1.jpg');
  // TODO-QSP: dynamic text: She turns around, presenting herself to you as she pulls off the rest of her clo...
  scene.text(`She turns around, presenting herself to you as she pulls off the rest of her clothes. You scoot up behind her and rub the tip of the dildo against her slit, which appears to already be soaking wet. The ${((s as any).dick1 ?? 0)}cm ${((s as any).dick_girth1 ?? 0)} dildo easily slides into her pussy and she starts moaning.`);
  scene.text('She then looks back over her shoulder at you with a hungry, lust-filled look and you slide the dildo all the way inside her until you feel your hips pressing up against her ass.');
  qspCall(s, 'arousal', 'vaginal_strap_give', 2, ((s as any).npcID1 ?? 0), 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Fuck her pussy', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bedroom/strapon/straponvag2.jpg');
    scene.text('You start fucking her with hard, deep thrusts and the room is filled with the sounds of her moaning and of the leather harness slapping against her ass cheeks. You hold onto her hip with one hand as you thrust the full length of your dildo firmly and rapidly into her pussy.');
    scene.text('A few minutes later, she starts loudly moaning and starts to tremble, having an orgasm from the fucking you\'re giving her. Once it passes, you pull the dildo out of her. "Now we\'re going to do something else."');
    qspCall(s, 'arousal', 'vaginal_strap_give', 2, ((s as any).npcID1 ?? 0), 'lesbian');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'anal', 'force');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Fuck her ass [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Fuck her ass [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'force');
  }, goto: ['soniaev1', 'strapon_anal'] },
      ]);
    }
    scene.actions([
      { label: 'Make her eat you out', goto: ['soniaev1', 'strapon_eaten'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterStraponAnal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A25');
  qspCall(s, 'npcStat', 'D4', 'a');
  (s as any).strapanal = 1;
  scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bedroom/strapon/straponanal1.jpg');
  scene.text('"I\'m going to fuck your ass," you tell her.');
  // TODO-QSP: dynamic text: She looks unsure. "Can't you just fuck my pussy instead, <<$pcs_nickname>>?"
  scene.text(`She looks unsure. "Can't you just fuck my pussy instead, ${((s as any).pcs_nickname ?? 0)}?"`);
  scene.text('After making sure the dildo and her ass are lubed up enough, your answer to her question is to press the head of the dildo against her asshole and push forward. You feel her start to pull away, but you quickly reach up and place a hand on her shoulder, pulling her back.');
  // TODO-QSP: dynamic text: With her now held in place and the pressure mounting, you look down and watch as...
  scene.text(`With her now held in place and the pressure mounting, you look down and watch as the head of the dildo pops into her asshole. You hear her hiss in pain, but also moan in pleasure as you slowly work the ${((s as any).dick1 ?? 0)}cm ${((s as any).dick_girth1 ?? 0)} dildo deeper inside with each thrust until almost the full length is in her ass.`);
  qspCall(s, 'arousal', 'anal_strap_give', 2, ((s as any).npcID1 ?? 0), 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Pound her ass', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bedroom/strapon/straponanal2.jpg');
    scene.text('You finally work the full length up her ass until your hips are slapping against her ass cheeks. You then start fucking her ass with firm thrusts that bottom the dildo out inside her.');
    scene.text('She bites her lower lip, and you can tell it hurts, but you also know at least part of her is enjoying this.');
    // TODO-QSP: dynamic text: "Not so hard, <<$pcs_nickname>>!" she cries out as you start to really pound her...
    scene.text(`"Not so hard, ${((s as any).pcs_nickname ?? 0)}!" she cries out as you start to really pound her ass.`);
    qspCall(s, 'arousal', 'anal_strap_give', 2, ((s as any).npcID1 ?? 0), 'lesbian');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'anal', 'force');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Tear her ass up [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Tear her ass up [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).strapanal = 2;
    qspCall(s, 'willpower', 'pay', 'force');
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bedroom/strapon/straponrough.jpg');
    scene.text('"Shut up and take it, slut!" you tell her as you start to really hammer her ass. She tries to pull away, but you grab hold of her hips and hold her tight. She leans forward until her shoulders are on the bed, changing the angle, but you merely adjust by getting up on your feet and pile driving the dildo into her ass.');
    scene.text('"Ow! It hurts!" she cries out.');
    scene.text('"Don\'t worry, you\'ll get used to it," you bluntly reply as you keep hammering her ass. "Besides, didn\'t you want to walk on the wild side?"');
    scene.text('That seems to have shut her up, but you decide you don\'t want to be too mean and stop. Pulling the dildo out of her ass, you hear her sigh in relief.');
    scene.text('"Very well, you can eat my pussy now, then," you demand.');
    qspCall(s, 'arousal', 'anal_strap_give', 2, ((s as any).npcID1 ?? 0), 'lesbian', 'dom', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Make her eat you out', goto: ['soniaev1', 'strapon_eaten'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Ease up', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bedroom/strapon/straponanal1.jpg');
    scene.text('You decide to ease up a little and try to read her body language, adjusting your speed and depth to what makes her moan the most. After a few minutes of this, her body is wracked by another orgasm.');
    scene.text('With that, you finally pull the dildo out of her and start taking off the harness.');
    scene.text('"Now you\'re going to eat my pussy," you tell her.');
    qspCall(s, 'arousal', 'anal_strap_give', 2, ((s as any).npcID1 ?? 0), 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Make her eat you', goto: ['soniaev1', 'strapon_eaten'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterStraponEaten(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A25');
  scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bedroom/strapon/eaten1.jpg');
  scene.text('You take the harness off and toss it aside before you lie down on the bed and spread your legs. Without being told, Sonia crawls over and starts to lick at your pussy and suck on your clit. Several minutes go by as you feel your arousal mounting.');
  qspCall(s, 'arousal', 'cuni', 2, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Just like that', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bedroom/strapon/eaten2.jpg');
    scene.text('She slips a finger into your pussy and starts fingering you as she licks, kisses and sucks at your clit. You grab her by the hair and start grinding your crotch against her face, smearing it with your wetness. You want to sit on her face, so you push her away from you.');
    scene.text('"Lie on your back," you order firmly.');
    qspCall(s, 'arousal', 'cuni', (-2), 'lesbian');
    qspCall(s, 'arousal', 'vaginal_finger', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Sit on her face', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bedroom/strapon/facesit.jpg');
    scene.text('She rolls over onto her back as you get up. You move over and straddle her face, slowly lowering yourself down until your pussy makes contact with her tongue again. You can feel her licking your pussy while sliding her tongue inside you. You rotate your hips and grind yourself against her face, coating her with your juices.');
    qspCall(s, 'arousal', 'cuni', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: '69', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bedroom/strapon/69.jpg');
    scene.text('You start to feel a little tired and roll off her. "I want to lick your pussy while you lick mine," you tell her.');
    scene.text('She climbs up and straddles your face before bending forward to go back to licking your pussy. You lick hers in return.');
    scene.text('Several minutes of this goes by until her body shudders and she has an orgasm, coating your face in her juices.');
    qspCall(s, 'arousal', 'cuni', (-2), 'lesbian');
    qspCall(s, 'arousal', 'cuni_give', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Afterglow', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bedroom/strapon/afterglow.jpg');
    scene.text('She rolls off you and the two of you lie side by side for several minutes, panting and recovering. As you start to get up to get dressed, she pulls you over and the two of you share a long, slow, passionate kiss for several minutes before you break apart and sit up together.');
    qspCall(s, 'arousal', 'foreplay', 5, 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (!(s as any).soniaQW) (s as any).soniaQW = {}; (s as any).soniaQW['sex'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bedroom/strapon/selfie.jpg');
    scene.text('Sonia grabs her phone and takes a selfie of the two of you, your faces still glistening with each other\'s pussy juices before the two of you get dressed.');
    scene.text('"Did you have fun?" you ask her.');
    if (((s as any).strapanal ?? 0) === 1) {
      scene.text('She grins. "I feel amazing! That was great, I loved it." She then blushes a little as she realizes how much she\'s gushing about how much she enjoyed it.');
      scene.text('You smile at her. "Even having your butt fucked?"');
      scene.text('She blushes deeply and nods. "Yeah, I even liked that. Even if my ass hurts a little, I still had fun."');
      scene.text('You give her a quick kiss. "I had fun too, but I should get going. It\'s late."');
    } else {
      if (((s as any).strapanal ?? 0) === 2) {
        scene.text('She grins. "I feel amazing! That was great, I loved it." She then blushes a little as she realizes how much she\'s gushing about how much she enjoyed it.');
        scene.text('You smile at her. "Even having your butt fucked?"');
        scene.text('She blushes and purses her lips. "Yeah, even that at first. It hurt a little, but then started to feel good until you got rougher. My ass feels like it\'s on fire now!" she says a little sourly.');
        scene.text('You give her a quick kiss. "Sorry, I just got carried away. But as you get used to it, it won\'t hurt anymore and just feel good," you assure her.');
        scene.text('She gives a slightly dubious look, clearly not convinced, but isn\'t willing to argue, so she just settles on a nod.');
        scene.text('You give her another kiss. "Trust me, but I need to get going. It\'s late."');
      } else {
        scene.text('She grins. "I feel amazing! That was great, I loved it." She blushes a little as she realizes how much she\'s gushing about how much she enjoyed it.');
        scene.text('You give her a quick kiss. "I had fun too, but I should get going. It\'s late."');
      }
    }
    // TODO-QSP: dynamic text: Once you're both dressed and cleaned up, she walks you to her front door. "Goodn...
    scene.text(`Once you're both dressed and cleaned up, she walks you to her front door. "Goodnight, ${((s as any).pcs_nickname ?? 0)}."`);
    scene.text('"Night," you reply before you walk out and she closes the door behind you. You hear it lock as you turn and walk to the street.');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
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

function enterShowerSex(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A25');
  qspCall(s, 'din_van', 'showerdin');
  scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bathroom/shower/join1.jpg');
  scene.text('Sonia keeps showering as she watches you get undressed. Once you\'re fully nude, you step into the shower and join her as you take turns helping the other one lather up with the soap.');
  scene.text('Once you\'ve cleaned yourselves, Sonia\'s wet hands starts to slide across your wet body, slowly working their way from your breasts down to your pussy...');
  qspCall(s, 'arousal', 'foreplay', 5, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Let her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bathroom/shower/join2.jpg');
    scene.text('As her hand slides down to your clit, you naturally spread your legs wider to give her easier access. As you do, her hand slides even lower and she slips two fingers into your pussy and starts to slowly finger-bang you.');
    scene.text('As she\'s doing this, she leans in and starts kissing you.');
    qspCall(s, 'arousal', 'vaginal_finger', (-2), 'lesbian');
    qspCall(s, 'arousal', 'kiss', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep kissing her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bathroom/shower/join3.jpg');
    scene.text('Sonia breaks the kiss and slowly works her way down to your breasts to kiss and suckle at your nipple before she gets down on her knees. Her kisses slowly lead her to your crotch until you feel her soft lips kiss your clit.');
    scene.text('She then starts to lick and suck on it and you feel your pussy getting wet before she slips her tongue between your pussy lips and starts eating you out in earnest.');
    qspCall(s, 'arousal', 'cuni', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Enjoy yourself', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bathroom/shower/join4.jpg');
    scene.text('She reaches up to fondle your breasts with one hand while her mouth continues to lick and suck on your clit while occasionally sliding her tongue inside your pussy. You feel yourself getting wetter and wetter as you get more and more aroused.');
    qspCall(s, 'arousal', 'cuni', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let her eat you', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bathroom/shower/join5.jpg');
    scene.text('She expertly sucks at your clit and licks your pussy. You don\'t know if she\'s done this a lot or is just a natural, but you really don\'t care. Your soft moans begin to get louder and louder as she eats you out. Then she suddenly stops, removing her mouth and tongue from your pussy.');
    scene.text('You want to tell her to keep going, but she slowly stands up and leans in to kiss you.');
    qspCall(s, 'arousal', 'cuni', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Kiss her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bathroom/shower/join6.jpg');
    scene.text('You lean towards her as she leans in, your lips meeting as the two of you start to kiss. You can taste yourself on her wet lips as your tongues dance around one another in your mouths and her hands caress and fondle your breasts at the same time.');
    scene.text('After what feels like an eternity, you break the kiss and the look in her eyes tells you all you need to know; you lower yourself down and return the favor.');
    qspCall(s, 'arousal', 'kiss', (-1), 'lesbian');
    qspCall(s, 'arousal', 'foreplay', 1, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get down on your knees', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bathroom/shower/join7.jpg');
    scene.text('You kiss your way down her body until you get to her clit, which you kiss and suck before sliding your tongue between her slit and into her soaking wet pussy. Sonia starts moaning softly as you eat her out.');
    qspCall(s, 'arousal', 'cuni', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Lick her pussy', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bathroom/shower/join8.jpg');
    scene.text('You expertly suck at her clit and lick her pussy. As you do, her moans get even louder and she starts rocking her hips and grinding her pussy against your face as you feel her juices starting to cover your chin.');
    scene.text('As you keep going, you can\'t help but notice the shower water that was once nice and warm is starting to get unpleasantly cold. Sonia quickly moves to turn the shower off. "Fuck, that\'s cold enough to kill the mood!"');
    scene.text('You should move this outside the tub...');
    qspCall(s, 'arousal', 'cuni', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Lay down on the floor', goto: ['soniaev1', 'shower_sex_cuni'] },
      { label: 'Have Sonia lay down on the floor', goto: ['soniaev1', 'shower_sex_cuni_give'] },
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

function enterShowerSexCuni(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A25');
  if (!(s as any).showerSexTemp) (s as any).showerSexTemp = {}; (s as any).showerSexTemp['cuni'] = 1;
  scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bathroom/shower/join9.jpg');
  scene.text('You lay down on your back on the floor and spread your legs, inviting Sonia with your pussy.');
  scene.text('Sonia grins at your antics and gets down on all four between your legs before she leans forward to kiss you on the lips. She then leans back and lowers her head down between your legs, where she proceeds to kiss your other lips before slipping her tongue between them as she starts to eat you out.');
  qspCall(s, 'arousal', 'cuni', 2, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Enjoy getting your pussy licked', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bathroom/shower/join10.jpg');
    scene.text('As she alternates between sucking on your clit and licking and burying her tongue in your pussy, she slowly slides her knees back, lowering herself down with her arms until she\'s laying on her stomach with her head between your legs.');
    scene.text('You keep moaning louder and louder as she works your pussy with her mouth.');
    qspCall(s, 'arousal', 'cuni', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Bask in the bliss', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bathroom/shower/join11.jpg');
    scene.text('You try not to be too loud as she continues to work her magic on you, only for someone to suddenly bang on the door.');
    scene.text('"Hurry up already! What\'s taking so long?!" her brother yells through the door.');
    scene.text('Sonia lifts her head and turns to face the door. "Shut up and go away!"');
    scene.text('You can hear him muttering something, but it\'s hard to make out as Sonia turns back to look at you and you both giggle. Perhaps you should end things here?');
    qspCall(s, 'arousal', 'cuni', 2, 'lesbian');
    qspCall(s, 'stat', '');
    if (((s as any).showerSexTemp ?? 0)?.['cuni_give'] === 0) {
      scene.actions([
        { label: 'Return the favor', goto: ['soniaev1', 'shower_sex_cuni_give'] },
      ]);
    }
    scene.actions([
      { label: 'Afterglow', goto: ['soniaev1', 'shower_sex_afterglow'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterShowerSexCuniGive(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A25');
  if (!(s as any).showerSexTemp) (s as any).showerSexTemp = {}; (s as any).showerSexTemp['cuni_give'] = 1;
  scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bathroom/shower/join12.jpg');
  scene.text('You have Sonia lay back on the floor and spread her legs as you get down on all fours beside her and dip your head between them.');
  scene.text('She moans softly and her hand reaches for the back of your head, her fingers entwined in your hair as you suckle her clit and lick her wet pussy lips.');
  qspCall(s, 'arousal', 'cuni_give', 2, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Lick her pussy', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bathroom/shower/join13.jpg');
    scene.text('Her moans get louder as she forces your face into her crotch and rocks her hips, grinding her soaking wet pussy against your face and coating it in her juices.');
    qspCall(s, 'arousal', 'cuni_give', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep licking her pussy', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bathroom/shower/join14.jpg');
    scene.text('"OH FUCK, OH FUCK! Just like that!" she moans as she grips your hair tightly and grinds her pussy against your face as you keep eating her out.');
    scene.text('Seconds later, she starts to shake and shudder as one hand flies up to her mouth to try and muffle her cries of pleasure as her juices coat your face.');
    qspCall(s, 'arousal', 'cuni_give', 2, 'lesbian');
    qspCall(s, 'stat', '');
    if (((s as any).showerSexTemp ?? 0)?.['cuni'] === 0) {
      scene.actions([
        { label: 'Your turn', goto: ['soniaev1', 'shower_sex_cuni'] },
      ]);
    }
    scene.actions([
      { label: 'Afterglow', goto: ['soniaev1', 'shower_sex_afterglow'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterShowerSexAfterglow(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A25');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bathroom/shower/join15.jpg');
  scene.text('You\'re both breathing hard from your encounter as she pulls you towards her and you start to passionately kiss, giving you a taste of your juices on her tongue as they intermingle in your mouths.');
  scene.text('After a few minutes, you break the kiss, both grinning. "I guess we should get dressed," she says, sounding a little reluctant, like she might not mind going for another round. "Before my brother comes and forces the door open."');
  scene.text('With that, you both get up and start to dry off. Once you\'re both dressed, you leave the bathroom and head to her room, where she lays down on her bed.');
  qspCall(s, 'arousal', 'kiss', 2, 'lesbian');
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to Sonia\'s room', goto: ['soniahome', 'sonia_room'] },
  ]);
  scene.build();
}

function enterStraponMagicBedroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A25');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bedroom/penis_envy/anal/magic_hj.jpg');
  scene.text('She crawls over to you and bats your dick back and forth like a cat playing with its toy. "It looks and feels <i>so</i> real!"');
  scene.text('She seems mesmerized by it, which you suppose shouldn\'t be a big surprise since it not only looks real but, thanks to your magic, <i>is</i> real. After a moment\'s hesitation, she starts stroking it with her hand.');
  scene.text('"I said suck my dick, not play with it!" you tell her and she looks up at you and giggles.');
  qspCall(s, 'arousal', 'magic_hj', 1, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Suck my dick', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bedroom/penis_envy/anal/magic_bj1.jpg');
    scene.text('She takes the head of your dick into her mouth and starts sucking as she continues to give you a handjob, which feels <i>amazing</i>.');
    qspCall(s, 'arousal', 'magic_bj', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'That feels so good', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bedroom/penis_envy/anal/magic_bj2.jpg');
    scene.text('Her lips wrap more tightly around the shaft as she takes more of your dick into her mouth and <i>really</i> starts working it.');
    scene.text('You\'re torn between just letting her suck you off or fucking her.');
    qspCall(s, 'arousal', 'magic_bj', 2, 'lesbian');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'anal', 'force');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Fuck her ass [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Fuck her ass [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'force');
  }, goto: ['soniaev1', 'strapon_magic_bedroom_anal'] },
      ]);
    }
    scene.actions([
      { label: 'Fuck her pussy', goto: ['soniaev1', 'strapon_magic_bedroom_pussy'] },
      { label: 'Just get a blowjob', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bedroom/penis_envy/anal/magic_bj3.jpg');
    scene.text('You decide you just want her to suck you off. "That\'s it, suck my dick like a good little slut."');
    scene.text('She smiles around the shaft at your words and starts taking even more of it into her mouth as she picks up her pace and starts really sucking you off. After a few minutes, you can\'t help yourself and start moaning.');
    qspCall(s, 'arousal', 'magic_bj', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep sucking my dick', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bedroom/penis_envy/anal/magic_bj4.jpg');
    scene.text('You feel your balls starting to tighten as she continues to work your cock. You try to hold off for as long as you can, but the urge to cum becomes too strong.');
    scene.text('You scramble off the bed and pull her with you, forcing her to kneel in front of you as you stroke the shaft of your cock.');
    qspCall(s, 'arousal', 'magic_bj', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Cum on her face', goto: ['soniaev1', 'strapon_magic_bedroom_face'] },
      { label: 'Cum in her mouth', goto: ['soniaev1', 'strapon_magic_bedroom_mouth'] },
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

function enterStraponMagicBedroomPussy(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A25');
  qspCall(s, 'npcStat', 'D4', 'a');
  scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bedroom/penis_envy/anal/magic_vag1.jpg');
  scene.text('You look down at her as she sucks your dick and smile. You really want to fuck her pussy now.');
  scene.text('"Take your clothes off and lay on your back," you tell her firmly.');
  scene.text('She bites her lower lip and then does as ordered. She seems to enjoy being told what to do since she quickly undresses and lays on her bed on her back, already spreading her legs for you.');
  scene.text('You rub the tip of your dick against the slit of her pussy and can already feel how wet she is, so you gently slide your dick inside her, causing both of you to moan softly. You then start to slowly fuck her, pushing your dick deeper into her pussy with each thrust.');
  qspCall(s, 'arousal', 'magic_vaginal', 2, ((s as any).npcID1 ?? 0), 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep fucking her pussy', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bedroom/penis_envy/anal/magic_vag2.jpg');
    scene.text('You start fucking her with hard, deep thrusts and the room is soon filled with the sounds of her moaning and of your hips slapping against her ass cheeks.');
    scene.text('You hold onto her hip with one hand as you thrust the full length of your cock firmly and rapidly into her pussy.');
    scene.text('A few minutes later, she starts loudly moaning. "Yes, yes! Fuck me harder!"');
    qspCall(s, 'arousal', 'magic_vaginal', 2, ((s as any).npcID1 ?? 0), 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Pound her pussy', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bedroom/penis_envy/anal/magic_vag3.jpg');
    scene.text('At her encouragement, you start pounding her pussy balls deep, as hard and fast as you can. You feel your balls slapping against her ass cheeks as you thrust all the way into her.');
    scene.text('A few minutes later, she starts loudly moaning and starts to tremble, having an orgasm from the fucking you\'re giving her. Once it passes, you pull the dick out of her pussy.');
    scene.text('You feel the urge to cum building, and can finish on her stomach, on her face, or make her suck you off before cumming in her mouth. You could also fuck her asshole first...');
    qspCall(s, 'arousal', 'magic_vaginal', 2, ((s as any).npcID1 ?? 0), 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Cum on her stomach', goto: ['soniaev1', 'strapon_magic_bedroom_tummy'] },
      { label: 'Cum on her face', goto: ['soniaev1', 'strapon_magic_bedroom_face1'] },
      { label: 'Cum in her mouth', goto: ['soniaev1', 'strapon_magic_bedroom_mouth1'] },
      { label: 'Fuck her ass', goto: ['soniaev1', 'strapon_magic_bedroom_anal'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterStraponMagicBedroomAnal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A25');
  qspCall(s, 'npcStat', 'D4', 'a');
  (s as any).magicanal = 1;
  scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bedroom/penis_envy/anal/magic_anal1.jpg');
  scene.text('"I\'m going to fuck your ass," you tell her.');
  // TODO-QSP: dynamic text: She looks unsure as you reach over and grab some lube out of her nightstand. "Ca...
  scene.text(`She looks unsure as you reach over and grab some lube out of her nightstand. "Can't you just fuck my pussy instead, ${((s as any).pcs_nickname ?? 0)}?"`);
  scene.text('After making sure your dick and her ass are lubed up enough, you press the head of your dick against her asshole and push forward, watching as the head of your cock pops into her asshole.');
  // TODO-QSP: dynamic text: You hear her hiss in pain, but also moan in pleasure as you slowly work the <<di...
  scene.text(`You hear her hiss in pain, but also moan in pleasure as you slowly work the ${((s as any).dick1 ?? 0)}cm ${((s as any).dick_girth1 ?? 0)} dick deeper inside with each thrust until almost the full length is in her ass.`);
  qspCall(s, 'arousal', 'magic_anal', 2, ((s as any).npcID1 ?? 0), 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Pound her ass', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bedroom/penis_envy/anal/magic_anal2.jpg');
    scene.text('You finally work the full length of your cock up her ass and your hips slap against her ass cheeks as you start fucking her with firm thrusts.');
    scene.text('She bites her lower lip, but seems to be getting off on it a lot more than she\'s letting on.');
    // TODO-QSP: dynamic text: "OH FUCK! Harder, <<$pcs_nickname>>! Fuck my ass harder!" she cries out as you s...
    scene.text(`"OH FUCK! Harder, ${((s as any).pcs_nickname ?? 0)}! Fuck my ass harder!" she cries out as you start to really pound her ass.`);
    qspCall(s, 'arousal', 'magic_anal', 2, ((s as any).npcID1 ?? 0), 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Really pound her ass', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bedroom/penis_envy/anal/magic_anal3.jpg');
    scene.text('You pound her asshole without mercy, as hard and fast as you can. She moans and cries out even more before her body is wracked by an orgasm.');
    scene.text('This causes her asshole to clench so tightly around the shaft of your cock that you can\'t take it any more. You feel yourself about to cum, so you quickly pull out of her ass and manage to hold back.');
    scene.text('At this point, you could finish yourself off and cum on her stomach, on her face, or in her mouth. You could also shove your dick back up her ass and fill it with your cum.');
    qspCall(s, 'arousal', 'magic_anal', 2, ((s as any).npcID1 ?? 0), 'lesbian', 'dom', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Cum on her stomach', goto: ['soniaev1', 'strapon_magic_bedroom_tummy'] },
      { label: 'Cum on her face', goto: ['soniaev1', 'strapon_magic_bedroom_face1'] },
      { label: 'Cum in her mouth', goto: ['soniaev1', 'strapon_magic_bedroom_mouth2'] },
      { label: 'Cum in her ass', goto: ['soniaev1', 'strapon_magic_bedroom_anal_cum'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterStraponMagicBedroomFace(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A25');
  scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bedroom/penis_envy/anal/magic_cumface.jpg');
  scene.text('With Sonia kneeling in front of you, you start stroking your cock. It only takes a few seconds before you feel the sudden release and your cum starts spurting all over her face.');
  scene.text('You milk every last drop of cum out of your cock before you look down to see Sonia looking back up at you with a huge grin on her cum covered face.');
  scene.text('"Oh. My. God! That was so amazing! It felt and looked so real!" she grins as she gets off her knees and stands up before she suddenly leans in and kisses you.');
  qspCall(s, 'arousal', 'magicd_hj', 1, 'masturbate');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get kissed', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bedroom/penis_envy/anal/magic_cumkiss.jpg');
    scene.text('You feel her tongue dart into your mouth as she kisses you and can taste your cum on her lips. The two of you then share a kiss for a minute or two, some of your cum rubbing off her face onto your own as you do.');
    qspCall(s, 'arousal', 'kiss', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get cleaned up', goto: ['soniaev1', 'strapon_magic_bedroom_afterglow'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterStraponMagicBedroomFace1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A25');
  scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bedroom/penis_envy/anal/magic_cumface.jpg');
  scene.text('You climb off the bed and pull her off with you, forcing her to kneel in front of you.');
  scene.text('You then start stroking your cock. It only takes a few seconds before you feel the sudden release and your cum starts spurting all over her face.');
  scene.text('You milk every last drop of cum out of your cock before you look down to see Sonia looking back up at you with a huge grin on her cum covered face.');
  scene.text('"Oh. My. God! That was so amazing! It felt and looked so real!" she grins as she gets off her knees and stands up before she suddenly leans in and kisses you.');
  qspCall(s, 'arousal', 'magicd_hj', 1, 'masturbate');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get kissed', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bedroom/penis_envy/anal/magic_cumkiss.jpg');
    scene.text('You feel her tongue dart into your mouth as she kisses you and can taste your cum on her lips. The two of you then share a kiss for a minute or two, some of your cum rubbing off her face onto your own as you do.');
    qspCall(s, 'arousal', 'kiss', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get cleaned up', goto: ['soniaev1', 'strapon_magic_bedroom_afterglow'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterStraponMagicBedroomMouth(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A25');
  scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bedroom/penis_envy/anal/magic_cummouth.jpg');
  scene.text('You stick your dick back in her mouth and she starts sucking it again. It only takes a few seconds before you feel the sudden release and your cum starts spurting into her mouth.');
  scene.text('You milk every last drop of cum out of your cock before you look down to see Sonia looking back up at you with an open mouth full of cum. She then reaches and pulls you down so you\'re kneeling in front of her as she grins at you.');
  qspCall(s, 'arousal', 'magicd_bj', 1);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Open your mouth', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bedroom/penis_envy/anal/magic_cumswap.jpg');
    scene.text('You open your mouth and she leans over you as your cum drools out of her mouth in one long, thick, viscous rope.');
    scene.text('You feel it land on your tongue, now tasting your cum mixed with Sonia\'s spit. Once she\'s spit all of it into your mouth, she starts kissing you.');
    qspCall(s, 'arousal', 'kiss', 1);
    qspCall(s, 'cum_call', 'mouth_swallow', 'A#', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get cleaned up', goto: ['soniaev1', 'strapon_magic_bedroom_afterglow'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterStraponMagicBedroomMouth1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A25');
  scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bedroom/penis_envy/anal/magic_cummouth.jpg');
  scene.text('You climb off the bed and pull her off with you before forcing her to kneel in front of you.');
  scene.text('You then stick your dick back in her mouth and she starts sucking it again. It only takes a few seconds before you feel the sudden release and your cum starts spurting into her mouth.');
  scene.text('You milk every last drop of cum out of your cock before you look down to see Sonia looking back up at you with an open mouth full of cum. She then reaches and pulls you down so you\'re kneeling in front of her as she grins at you.');
  qspCall(s, 'arousal', 'magicd_bj', 1);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Open your mouth', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bedroom/penis_envy/anal/magic_cumswap.jpg');
    scene.text('You open your mouth and she leans over you as your cum drools out of her mouth in one long, thick, viscous rope.');
    scene.text('You feel it land on your tongue, now tasting your cum mixed with Sonia\'s spit. Once she\'s spit all of it into your mouth, she starts kissing you.');
    qspCall(s, 'arousal', 'kiss', 1);
    qspCall(s, 'cum_call', 'mouth_swallow', 'A#', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get cleaned up', goto: ['soniaev1', 'strapon_magic_bedroom_afterglow'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterStraponMagicBedroomMouth2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A25');
  scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bedroom/penis_envy/anal/magic_cummouth.jpg');
  scene.text('You climb off the bed and pull her off with you before forcing her to kneel in front of you.');
  scene.text('"Open your mouth," you order and she does as you say as you start stroking your dick.');
  scene.text('It only takes a few seconds before you feel the sudden release and your cum starts spurting into her mouth.');
  scene.text('You milk every last drop of cum out of your cock before you look down to see Sonia looking back up at you with an open mouth full of cum. She then reaches and pulls you down so you\'re kneeling in front of her as she grins at you.');
  qspCall(s, 'arousal', 'magicd_hj', 1, 'masturbate');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get kissed', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bedroom/penis_envy/anal/magic_cumkiss.jpg');
    scene.text('You feel her tongue dart into your mouth as she kisses you and can taste your cum on her lips. The two of you then share a kiss for a minute or two, some of your cum rubbing off her face onto your own as you do.');
    qspCall(s, 'arousal', 'kiss', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get cleaned up', goto: ['soniaev1', 'strapon_magic_bedroom_afterglow'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterStraponMagicBedroomTummy(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A25');
  scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bedroom/penis_envy/anal/magic_cumtummy.jpg');
  scene.text('She looks up at you as you take your dick in your hand and start stroking it. After a few seconds, you feel the sudden release, groaning as you start shooting ropes of cum all over her stomach.');
  scene.text('She looks down and watches you cover her stomach in your cum. "Wow, that looks so real!" she says as she sits up.');
  qspCall(s, 'arousal', 'magicd_hj', 1, 'masturbate');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Take the harness off', goto: ['soniaev1', 'strapon_magic_bedroom_afterglow'] },
  ]);
  scene.build();
}

function enterStraponMagicBedroomAnalCum(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A25');
  scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bedroom/penis_envy/anal/magic_cumanal.jpg');
  scene.text('You look down and see her gaping asshole just begging to be filled again. Without another thought, you shove your dick back up her ass and start slowly thrusting again before you feel your balls tighten up and you feel the sudden release.');
  scene.text('You groan softly as you pump your cum into her ass. Once you finish, you pull out of her and a glob of cum leaks out of her ass.');
  scene.text('"Oh my God, that was so amazing! It felt so real," she says as she sits up.');
  qspCall(s, 'arousal', 'magic_anal', 1, ((s as any).npcID1 ?? 0), 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Take the harness off', goto: ['soniaev1', 'strapon_magic_bedroom_afterglow'] },
  ]);
  scene.build();
}

function enterStraponMagicBedroomAfterglow(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A25');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  if (!(s as any).soniaQW) (s as any).soniaQW = {}; (s as any).soniaQW['sex'] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/sonia/sex/home/bedroom/strapon/selfie.jpg');
  scene.text('You unbuckle the harness, breaking the magic. You can feel the magic flow away and lose the sensation of your magic dick as it turns back into a normal dildo.');
  scene.text('Both of you then get cleaned up, but before you can get dressed, Sonia grabs her phone and takes a selfie of the two of you.');
  scene.text('"Did you have fun?" you ask.');
  if (((s as any).soniaQW ?? 0)?.['happyslut'] >= 1) {
    if (((s as any).magicanal ?? 0) === 1) {
      scene.text('She grins. "I feel amazing! That was great, I loved it." She then blushes a little as she realizes how much she\'s gushing about how much she enjoyed it.');
      scene.text('You smile at her. "Even having your butt fucked?"');
      scene.text('She nods with a lusty look in her eye. "Yeah, I loved it. It feels so good having a dick buried deep in your ass."');
      scene.text('You give her a quick kiss. "I had fun too, but I should get going. It\'s late."');
    } else {
      scene.text('She grins. "I feel amazing! That was great, I loved it." She blushes a little as she realizes how much she\'s gushing about how much she enjoyed it.');
      scene.text('You give her a quick kiss. "I had fun too, but I should get going. It\'s late."');
    }
    // TODO-QSP: dynamic text: Once you're both dressed, she walks you to her front door. "Goodnight, <<$pcs_ni...
    scene.text(`Once you're both dressed, she walks you to her front door. "Goodnight, ${((s as any).pcs_nickname ?? 0)}."`);
    scene.text('"Night," you reply before you walk out and she closes the door behind you. You hear it lock as you turn and walk to the street.');
  } else {
    if (((s as any).magicanal ?? 0) === 1) {
      scene.text('She grins. "I feel amazing! That was great, I loved it." She then blushes a little as she realizes how much she\'s gushing about how much she enjoyed it.');
      scene.text('You smile at her. "Even having your butt fucked?"');
      scene.text('She blushes deeply and nods. "Yeah, I even liked that. Even if my ass hurts a little, I still had fun."');
      scene.text('You give her a quick kiss. "I had fun too, but I should get going. It\'s late."');
    } else {
      scene.text('She grins. "I feel amazing! That was great, I loved it." She blushes a little as she realizes how much she\'s gushing about how much she enjoyed it.');
      scene.text('You give her a quick kiss. "I had fun too, but I should get going. It\'s late."');
    }
    // TODO-QSP: dynamic text: Once you're both dressed, she walks you to her front door. "Goodnight, <<$pcs_ni...
    scene.text(`Once you're both dressed, she walks you to her front door. "Goodnight, ${((s as any).pcs_nickname ?? 0)}."`);
    scene.text('"Night," you reply before you walk out and she closes the door behind you. You hear it lock as you turn and walk to the street.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['pav_residential', ''] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'homesex':
      enterHomesex(s, scene);
      break;
    case 'eatsonia':
      enterEatsonia(s, scene);
      break;
    case 'strapon_fucked':
      enterStraponFucked(s, scene);
      break;
    case 'strapon_fucking':
      enterStraponFucking(s, scene);
      break;
    case 'strapon_pussy':
      enterStraponPussy(s, scene);
      break;
    case 'strapon_anal':
      enterStraponAnal(s, scene);
      break;
    case 'strapon_eaten':
      enterStraponEaten(s, scene);
      break;
    case 'shower_sex':
      enterShowerSex(s, scene);
      break;
    case 'shower_sex_cuni':
      enterShowerSexCuni(s, scene);
      break;
    case 'shower_sex_cuni_give':
      enterShowerSexCuniGive(s, scene);
      break;
    case 'shower_sex_afterglow':
      enterShowerSexAfterglow(s, scene);
      break;
    case 'strapon_magic_bedroom':
      enterStraponMagicBedroom(s, scene);
      break;
    case 'strapon_magic_bedroom_pussy':
      enterStraponMagicBedroomPussy(s, scene);
      break;
    case 'strapon_magic_bedroom_anal':
      enterStraponMagicBedroomAnal(s, scene);
      break;
    case 'strapon_magic_bedroom_face':
      enterStraponMagicBedroomFace(s, scene);
      break;
    case 'strapon_magic_bedroom_face1':
      enterStraponMagicBedroomFace1(s, scene);
      break;
    case 'strapon_magic_bedroom_mouth':
      enterStraponMagicBedroomMouth(s, scene);
      break;
    case 'strapon_magic_bedroom_mouth1':
      enterStraponMagicBedroomMouth1(s, scene);
      break;
    case 'strapon_magic_bedroom_mouth2':
      enterStraponMagicBedroomMouth2(s, scene);
      break;
    case 'strapon_magic_bedroom_tummy':
      enterStraponMagicBedroomTummy(s, scene);
      break;
    case 'strapon_magic_bedroom_anal_cum':
      enterStraponMagicBedroomAnalCum(s, scene);
      break;
    case 'strapon_magic_bedroom_afterglow':
      enterStraponMagicBedroomAfterglow(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const soniaev1: LocationDef = {
  name: 'soniaev1',
  title: 'Sonia unlocks the door and the two of you head inside. As so',
  region: 'other',
  enter: enter,
};
