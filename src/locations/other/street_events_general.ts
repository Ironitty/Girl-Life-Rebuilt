import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterRandomRape(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'prcptn', Math.floor(Math.random() * 2) + 1);
  (s as any).streetev_day = ((s as any).daystart ?? 0);
  // TODO-QSP: $streetev_title
  scene.img('images/locations/shared/street/rapist.jpg');
  if ((Math.floor(Math.random() * 100) + 1) + ((s as any).pcs_observ ?? 0) >= 100) {
    scene.text('You notice a hooded man standing in a darkened alleyway up ahead. Feeling he is up to no good you cross the street to the other side before you get to him. You see him look your direction before fading back into the darkness of the alleyway.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    ]);
  } else {
    scene.text('As you walk down the street, a man jumps out of the shadows and suddenly grabs you. As you\'re caught off-guard, he manages to drag you into a nearby alleyway. You try to scream but his strong hand covers your mouth. You attempt to get free, but his other arm wraps around your waist and lifts you off the ground as he drags you further down the alleyway.');
    qspCall(s, 'npcgeneratec', '', 0, 'Rapist', Math.floor(Math.random() * 28) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'stat', '');
    if (((s as any).succubusQW ?? 0) === 14) {
      scene.actions([
        { label: 'Lure him in and feed (this can take a lot of time)', handler: (st: GameState) => {
    scene.text('You wait until he has dragged you into the alley before turning on him.');
    scene.actions([
      { label: 'Continue', goto: ['succubus', 'RapistFight'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Attempt to escape', handler: (st: GameState) => {
    if (((s as any).pcs_run ?? 0) < 170) {
      (s as any).peshimraperand = ((s as any).rand ?? 0)(0, 10 * ((((s as any).pcs_run ?? 0) + 10) / 20 + 1));
    } else {
      (s as any).peshimraperand = 11;
    }
    if (((s as any).peshimraperand ?? 0) <= 10) {
      scene.img('images/locations/shared/street/rapist.jpg');
      scene.text('You try to run away, but you\'re not quick enough, and he catches you before you even get close to the end of the alleyway. He places a hand over your mouth so you can\'t scream and drags you back into the alley.');
      scene.actions([
        { label: 'Struggle', goto: ['street_events_general', 'rape'] },
      ]);
    } else {
      scene.img('images/locations/shared/street/alleynight.jpg');
      scene.text('You manage to lose him and get to a safer well lit area.');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
      ]);
    }
  } },
      { label: 'Struggle', goto: ['street_events_general', 'rape'] },
    ]);
  }
  return;
  scene.build();
}

function enterRandomRobbery(s: GameState, scene: SceneBuilder): void {
  (s as any).streetev_day = ((s as any).daystart ?? 0);
  qspCall(s, 'exp_gain', 'prcptn', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  (s as any).temp = (Math.floor(Math.random() * 100) + 1) + ((s as any).pcs_observ ?? 0);
  // TODO-QSP: $streetev_title
  scene.img('images/locations/shared/street/mugger.jpg');
  if (((s as any).temp ?? 0) >= 100) {
    scene.text('You notice a hooded man standing in a darkened doorway up ahead. Feeling he is up to no good you cross the street to the other side before you get to him. You see him look your direction before fading back into the darkness of the doorway.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    ]);
  } else {
    scene.text('Suddenly a man wearing a hoodie steps out from a darkened doorway in your path. He has one hand in his pocket, and the other he extends towards you. You can\'t see his face as he says, "Give me all your money bitch, and you won\'t get hurt."');
    scene.actions([
      { label: 'Attempt to escape', handler: (st: GameState) => {
    scene.img('images/locations/shared/street/alleynight.jpg');
    if (((s as any).pcs_run ?? 0) < 170) {
      (s as any).peshimraperand = ((s as any).rand ?? 0)(0, 10 * ((((s as any).pcs_run ?? 0) + 10) / 20 + 1));
    } else {
      (s as any).peshimraperand = 11;
    }
    if (((s as any).peshimraperand ?? 0) <= 10) {
      scene.text('He drags you into an alley.');
      qspCall(s, 'money', 'set', 0, 'cash');
      qspCall(s, 'stat', '');
      scene.text('You try to run away, but you\'re not quick enough, and he catches you. He grabs your purse and rummages in it, knocking most of the contents out on the ground. Once he has your money, he throws the purse back at you and then takes off running. You try to calm yourself down as you squat to gather your stuff back up and put them back in your purse.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
      ]);
    } else {
      scene.text('You manage to lose him and get to a safer well lit area.');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
      ]);
    }
  } },
      { label: 'Don\'t fight, just give him your money', handler: (st: GameState) => {
    qspCall(s, 'money', 'set', 0, 'cash');
    qspCall(s, 'stat', '');
    scene.text('You quickly open your purse. As you do, he grabs it from you and rummages in it. Knocking most of the contents out on the ground. Once he has your money, he throws the purse back at you and then takes off running. You try to calm yourself down as you squat to gather your stuff back up and put them back in your purse.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    ]);
  } },
      { label: 'Fight', handler: (st: GameState) => {
    scene.text('You clutch your purse to your body and tell him, "Fuck you, asshole!" He snarls and lunges at you.');
    scene.actions([
      { label: 'Defend yourself', handler: (st: GameState) => {
    qspCall(s, 'npcgeneratec', '', 0, 'Robber', Math.floor(Math.random() * 28) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'fight', 'initFight');
    qspCall(s, 'fight_npcdata', 'robber');
  }, goto: ['fight', 'start'] },
    ]);
  } },
    ]);
  }
  return;
  scene.build();
}

function enterRandomSnatching(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).streetev_day = ((s as any).daystart ?? 0);
  // TODO-QSP: $streetev_title
  scene.img('images/locations/shared/street/pursesnatch.jpg');
  if ((Math.floor(Math.random() * 301) + 0) < (((s as any).pcs_agil ?? 0) + ((s as any).pcs_stren ?? 0))) {
    scene.text('As you are walking down the street minding your own business, you are suddenly jerked sideways and nearly pulled off your feet. You quickly regain your balance, and instinctively, your fingers hold your purse tighter as you feel something tugging on it. A man is trying to snatch your purse, but he runs away when you don\'t let go of it immediately.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    ]);
  } else {
    scene.text('As you are walking down the street minding your own business, you are suddenly jerked sideways and nearly pulled off your feet. As you stumble to regain your balance, you realize a man has just snatched your purse from you and is running away with it.');
    scene.actions([
      { label: 'It\'s only money and a bag', handler: (st: GameState) => {
    qspCall(s, 'purses', 'dispose');
    qspCall(s, 'money', 'set', 0, 'cash');
    qspCall(s, 'stat', '');
    dynamicGoto(st, 'loc');
  } },
      { label: 'Chase him', handler: (st: GameState) => {
    if ((((s as any).pcs_run ?? 0) + ((s as any).pcs_stam ?? 0)) < (Math.floor(Math.random() * 131) + 120)) {
      qspCall(s, 'purses', 'dispose');
      qspCall(s, 'money', 'set', 0, 'cash');
      qspCall(s, 'stat', '');
      // TODO-QSP: $streetev_title
      scene.img('images/locations/shared/street/purselose.jpg');
      scene.text('You chase after him, screaming at him to stop or for someone to stop him, but he quickly out paces you, and soon, you lose sight of him. After a couple of blocks of not seeing him anymore, you stop and lean against the wall to catch your breath.');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
      ]);
    } else {
      qspCall(s, 'npcgeneratec', '', 0, 'Purse Snatcher', Math.floor(Math.random() * 28) + 18);
      qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
      // TODO-QSP: $streetev_title
      scene.img('images/locations/shared/street/pursechase.jpg');
      scene.text('You chase after him, screaming at him to stop or for someone to stop him. All that working out is paying off, you are gaining on him. He keeps glancing back as you get closer, he turns and ducks down an alley when you are nearly on top of him. He leaps over an overturned trash can, obviously still hoping to get away from you. You easily leap over it as well, and a few steps later, you tackle him, sending both of you rolling on the ground. You both get back to your feet at the same time. Realising he can\'t escape, he lunges at you.');
      qspCall(s, 'fight', 'initFight');
      qspCall(s, 'fight_npcdata', 'snatcher');
      scene.actions([
        { label: 'Fight', goto: ['fight', 'start'] },
      ]);
    }
  } },
    ]);
  }
  return;
  scene.build();
}

function enterMistmeet(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['lesbimistress', 'mistmeet'] }]);
  scene.build();
}

function enterFailedCelebBlackmail(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcgeneratec', '', 0, 'Rapist', 0, 0, 1);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
  qspCall(s, 'npcgeneratec', '', 0, 'Rapist', 0, 0, 1);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'a');
  (s as any).minut = ((s as any).minut ?? 0) + 360;
  (s as any).fingal = ((s as any).fingal ?? 0) + (1);
  (s as any).guy = ((s as any).guy ?? 0) + (4);
  ((s as any).stat ?? {})['rape_count'] = (((s as any).stat ?? {})['rape_count'] ?? 0) + (2);
  (s as any).shantpopala = ((s as any).shantpopala ?? 0) - (1);
  scene.img('images/locations/shared/street/kidnap.jpg');
  scene.text('As you walk down the sidewalk, you hear the screeching of tires. You quickly move to the far side of the sidewalk, afraid a car is about to hit you. As you turn your head to the noise, you see a black jeep sliding to a stop next to you. Before the jeep even comes to a complete stop, two large men jump out and start running towards you. You are stunned for a moment, unsure what\'s going on, then you turn to run, but before you make it five steps, one of them grabs you, calling out to the other man to help out as well. They quickly drag you over to the jeep and throw you in the back.');
  scene.text('"You\'re doing this for a living? Taking pictures of naked people in the park?" one of them shouts, holding one of the pictures to your face you took a while back, trying to blackmail them.');
  scene.text('"No… what? What the hell is going on? I don\'t know what you\'re talking about!" you try to feign innocence.');
  scene.text('"Don\'t lie you stupid bitch, we know it was you," he says just before he hits you with something in the head, knocking you out.');
  return;
  scene.actions([
    { label: 'Wake up', handler: (st: GameState) => {
    scene.text('You wake up somewhere out of town, tied up and naked. You look down at yourself and notice traces of cum on your body. It also seems like that cum is flowing from your ass and your pussy.');
    scene.text('You notice that the blokes who captured you are sitting next to you and seem to be having a break, some of them are smoking.');
    scene.text('"Oh, she is finally awake, then the next fuck-cycle will be far more fun," one of the men says as he notices you moving. Some of them start getting evil grins on their faces.');
    scene.text('They get up and come back at you. Barely a minute later, you wish your were still knocked out as these jackasses have their way with you. You try to resist, but the tape hinders you from moving. Not long after, everything fades to black and you lose consciousness again.');
    scene.text('You feel groggy as you wake up, but it feels like someone is grabbing you by the hair and shouting at you. "Let this be a lesson for you, bitch," he shouts, then kicks you in the stomach and leaves. As you collapse on the ground holding your stomach in pain, you take a glimpse at the street and see the assholes speed away in their black jeep. The main road is about 200m away. You crawl most of the way there, but soon you can walk again, and eventually you find your way back to one of the main streets.');
    qspCall(s, 'arousal', 'bj', 20, ((s as any).npcID ?? 0), 'group', 'rough', 'sub');
    qspCall(s, 'arousal', 'bj', 20, ((s as any).npcID1 ?? 0), 'group', 'rough', 'sub');
    qspCall(s, 'arousal', 'vaginal', 20, ((s as any).npcID ?? 0), 'group', 'rough', 'sub');
    qspCall(s, 'arousal', 'vaginal', 20, ((s as any).npcID1 ?? 0), 'group', 'rough', 'sub');
    qspCall(s, 'arousal', 'anal', 20, ((s as any).npcID ?? 0), 'group', 'rough', 'sub');
    qspCall(s, 'arousal', 'anal', 20, ((s as any).npcID1 ?? 0), 'group', 'rough', 'sub');
    qspCall(s, 'cum_call', 'stomach', (((Math.floor(Math.random() * 2) + 0)===0) ? (((s as any).npcID ?? 0)) : (((s as any).npcID1 ?? 0))));
    qspCall(s, 'cum_call', 'butt', (((Math.floor(Math.random() * 2) + 0)===0) ? (((s as any).npcID ?? 0)) : (((s as any).npcID1 ?? 0))));
    qspCall(s, 'cum_call', 'mouth', (((Math.floor(Math.random() * 2) + 0)===0) ? (((s as any).npcID ?? 0)) : (((s as any).npcID1 ?? 0))));
    qspCall(s, 'cum_call', 'face', (((Math.floor(Math.random() * 2) + 0)===0) ? (((s as any).npcID ?? 0)) : (((s as any).npcID1 ?? 0))));
    qspCall(s, 'cum_call', 'clothes', (((Math.floor(Math.random() * 2) + 0)===0) ? (((s as any).npcID ?? 0)) : (((s as any).npcID1 ?? 0))));
    qspCall(s, 'cum_call', 'anus', (((Math.floor(Math.random() * 2) + 0)===0) ? (((s as any).npcID ?? 0)) : (((s as any).npcID1 ?? 0))));
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterNichTarasAbduct(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['nichTaras', 'van'] }]);
  scene.build();
}

function enterDivorceParty(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/divorcee/limo.jpg');
  scene.text('You\'re walking down the street when a car speeds past you. It\'s nothing to be particularly interested in until it suddenly comes to a squealing stop ahead. You slow your pace and watch it idle for a few moments, only just now noticing the muffled music coming from inside it as you near it. The window rolls down, and the sound of an obnoxious pop song spills out, followed by a woman. Her whole top half is leaning out the car window, which almost leads to her falling out, but a pair of hands from inside the car steady her. "Ah fucking shit tits… <i>fuck</i>," she curses as she spills the drink in her hand onto the sidewalk. "Hey… hey you! Come here for a s-sec," she calls to you with a beckoning wave of her free hand.');
  return;
  scene.actions([
    { label: '"Uhm…"', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/divorcee/limo.jpg');
    scene.text('Understandably, you hesitate, but she picks up on that and shakes her head wildly, "Don\'t worry, I\'m not gonna, like, shnatch you up or a-anything, I just gotta queshtion!" If it wasn\'t obvious before, it\'s clear now that the woman is drunk. But that doesn\'t mean she\'s a bad person, and judging from the limo chauffeuring her and her friends around, you could think of worse people to kidnap you. You walk over to her, and she welcomes you with an excited giggle. "I\'m Marta," she introduces herself. "And you see my friend here?" She moves to give you a peek into the limo filled with two other women and points out the one in red before continuing.');
    scene.text('"That\'s Eva and her lying, whore of a husband had been cheating on her with some… some cheap, loose pussy, dog faced CUNT!" she shouts angrily before taking a deep breath. "So she divorced his sorry ass, and now she\'s a free woman who deserves ONLY the best things in life! And you know what one of those things is?" she asks, and you awkwardly shake your head.');
    scene.text('"It\'s to make out with a pretty little thing like you," Marta grins and gives you (a very poor attempt at) a wink. "So? What do you say? Wanna give her a little kiss?"');
    qspCall(s, 'willpower', 'misc', 'self', 'medium');
    if (((s as any).will_cost ?? 0) > ((s as any).pcs_willpwr ?? 0)) {
      scene.actions([
        { label: 'Agree [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Agree [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    (s as any).divorce_party = 2;
    qspCall(s, 'arousal', 'kiss', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/divorcee/makeout.jpg');
    scene.text('You look behind her and see Eva blushing, trying to hide behind the rim of her cup as she takes a drink. She\'s actually really pretty and younger than you thought. You\'re not sure why her husband would cheat on her, but you\'re not going to pass up the opportunity to have some fun with her. "You\'re right, she does deserve the <i>best</i>, and I can give her just that," you purr with a knowing smile.');
    scene.text('In an instant, the other women are cheering and giggling as they lead Eva to the window. She tries to reluctantly argue against this, but she makes no real effort to stop them. "Uhm… hi?" she says sheepishly, her eyes avoiding yours as she bites her lip nervously. "My name is Eva…"');
    // TODO-QSP: dynamic text: "Oh, I know…" Your hand cups her cheek gently, and you guide her head back, her ...
    scene.text(`"Oh, I know…" Your hand cups her cheek gently, and you guide her head back, her gaze now meeting yours. "I'm ${((s as any).pcs_nickname ?? 0)}," you say before leaning in to kiss her. As soon as your lips meet, any resistance she had before melts away. Her lips part, and your tongues intertwine. You can taste the sweet alcohol she had been drinking as she eagerly presses against you with a soft moan. When you finally pull away, Eva is breathless with a dazed yet satisfied look.`);
    scene.text('"Holy shit that was <i>amazing</i>!" Marta laughs as Eva collapses back into the car seat. Marta is back at the window with a wide grin, "Look, I even caught it on camera!" She holds up her phone and you see a shaky but still rather clear video of the two of you making out. "Hey, you know what, why don\'t you come out with us? I know Eva would love to have you come!" Marta winks again, obviously hinting at the double meaning there.');
    qspCall(s, 'willpower', 'drink', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    qspCall(s, 'arousal', 'end');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    }
    scene.actions([
      { label: 'Join them', handler: (st: GameState) => {
    qspCall(s, 'drugs', 'alcohol', 'vodka');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/divorcee/drinks.jpg');
    scene.text('As soon as you enter the limo, Marta is shoving a red cup filled with a strong, yet sweet mixed drink into your hands. "C\'mon, have a drink!" You have a feeling she won\'t take no for an answer, so you start drinking with everyone else. You spend your time getting to know everyone, learning that the other woman is called Alla. Marta often leads the conversation, so you just sit back and enjoy her antics, and while you do, you sometimes catch Eva eying you hungrily. It isn\'t long before you arrive at the club.');
    scene.text('You don\'t recognize the area, and you start to wonder where you are exactly, but you\'re given no time to dwell on it as you\'re ushered past the long line of people waiting and led through the club to a private room upstairs.');
    scene.text('Just outside the door, Marta stops everyone. "And now, what you\'ve all been waiting for…"');
    scene.text('"You\'re the only one that knows what\'s going on, you didn\'t tell us anything!" Alla points out.');
    scene.text('"Okay, what <i>I\'ve</i> been waiting for," Marta teases before slowly opening the door.');
    scene.actions([
      { label: 'Go inside', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/divorcee/d3.jpg');
    scene.text('"Oh my God, Marta!" Eva exclaims as her and Alla squeal with delight at the sight of a tall, dark and handsome man standing in the middle of the room, proudly displaying his bulging erection as it presses against his briefs. "A male stripper? Really?!"');
    scene.text('"That\'s right! This is Yefim, and he\'s gonna make sure you forget you were ever married," Marta tells Eva before sitting her down in front of the man who begins to straddle her. The three of you surround the two of them, clapping and cheering as he dances and grinds against Eva, his erection just a few inches from her face. While Eva is being coy about it, you can\'t help but think about just what he\'s packing in those briefs.');
    scene.text('"Look at him, he\'s hard just for you!"');
    scene.text('"Why not give him a <i>hand</i>, Eva!"');
    scene.text('"Don\'t just leave him like that!"');
    // TODO-QSP: dynamic text: You end up so distracted by your thoughts that you almost don't feel Marta nudgi...
    scene.text(`You end up so distracted by your thoughts that you almost don't feel Marta nudging you. "We gotta get her in the mood, ${((s as any).pcs_nickname ?? 0)}."`);
    scene.actions([
      { label: 'Help Eva relax', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/divorcee/d4.jpg');
    scene.text('You place your hands on Eva\'s shoulders. "Don\'t worry, just relax…" you whisper against her ear as your hands slide down to her chest. You massage her tits gently through her top, smiling when you hear her let out a breathy moan. Feeling her nipples start to poke through the thin fabric, you lightly trace your finger around each one until they\'re stiff and hard. "See, isn\'t this fun?" Slowly, you pull open Eva\'s dress to expose her bare chest. A quick hard pinch to her nipples causes her to whimper and squirm as you continue to play with her tits.');
    scene.text('Marta and Alla are quick to catch on. Following your lead, they start to pull and tug not just on her clothes, but also on Yefim\'s red briefs until his cock is freed and twitching eagerly in Eva\'s face.');
    scene.text('"Don\'t you want to have a little taste?" Yefim asks while stroking his dick teasingly. Eva doesn\'t need any more convincing. She leans forward and runs her tongue along the underside of his shaft before her lips wrap around the tip. Bobbing her head, she swallows every inch of this stranger\'s cock with ease as you and the others watch. "Hey babe, don\'t get too carried away, we just started," Marta giggles as she gently pushes Yefim away from her friend, his cock coming free from Eva\'s mouth with a wet pop. Marta leads him to the couch where she has him lie down before kneeling beside him and calling Eva over.');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'clit_finger', 10, 'masturbate');
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/divorcee/d5.jpg');
    scene.text('The two of them wrap their lips around each side of Yefim\'s throbbing cock, sliding up and down, nibbling and sucking on every veiny inch. You feel the heat between your legs growing as you watch one focus on the reddened tip while the other kisses a trail down to his balls. He throws his head back and lets out a grunt, one of his hands gripping the back of Eva\'s head as she laps up the leaking precum.');
    scene.text('Overwhelmed by your lust, you rub your legs together, itching to touch yourself. You look around the room and are relieved to see Alla had the same idea as you as she\'s sitting down with her legs spread, playing with herself while watching her friends. Without hesitation, you slide your own hand between your legs and shiver as your fingers glide along your slick folds, spreading them to find your clit. You follow the same pace as Eva and Marta, when they slowly kiss along his length, flicking the tips of their tongue along his glans, you take your time with long, hard strokes against your clit. As soon as you see he\'s had enough of their teasing and forces Marta to deepthroat him fast and hard, fucking her mouth while Eva watches, you begin fingering yourself frantically. You\'re edging closer and closer, but you get an amazing idea when you see him throw his head back and groan loudly.');
    scene.actions([
      { label: 'Sit on his face', handler: (st: GameState) => {
    scene.img('images/locations/shared/divorcee/d6.jpg');
    scene.text('"Want to put that mouth to better use?" you tease with a smile as you present your dripping wet pussy to Yefim. Licking his lips, he pulls you over and helps you straddle his face. He grips your thighs and holds you in place as his tongue delves between your swollen pussy lips. You tremble and gasp, his tongue expertly flicking and massaging your clit when he isn\'t playing with your labia. You grind your hips down as the pleasure builds, crying out as you cum on his tongue. Your pussy clenches, and your body tenses as you ride out the bliss.');
    qspCall(s, 'arousal', 'cuni', 15);
    scene.text('"Alright, that\'s enough," you hear Marta say. She watches you slide off his face with a smirk, taking a moment to admire how wet his lips are with your juices before turning her attention to Eva. "I don\'t think he can hold out much longer, so why don\'t we end this with a <i>bang</i>!" You don\'t know when Alla finished, but she\'s here pulling Eva aside to undress her. When they\'re done, Yefim switches spots with Eva, with her now on her back. "Now keep those legs spread, babe," Marta says as Yefim positions himself between her legs.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Enjoy the show', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/divorcee/d7.jpg');
    scene.text('"Fuck, you\'re tight…" Yefim growls as he slides the first few inches of his cock inside her.');
    scene.text('Eva inhales sharply as he slowly fills her. "Oh <i>fuck</i>!" she pants heavily as he sets a rhythm of steady, shallow thrusts.');
    scene.text('Marta can\'t keep from smiling as she watches her dear friend enjoying herself. "I know, it\'s been a while since you\'ve been properly fucked…" she coos, "but like I said earlier… he\'s going to fuck you until you can\'t remember that bastard\'s name."');
    scene.text('Hearing this, Yefim pulls Eva\'s hips down hard to slam into his, burying balls deep inside her in one stroke. She lets out a strangled moan as he pulls out to slam back into her again and again. Eva can barely manage to get a word out as she gasps and moans beneath him. You and the girls watch excitedly as he continues to pound into her with renewed vigor, having angled his hips to hit her sweet spot until her walls clench around him and she cums hard with a strained cry. Yefim thrusts a few more times before pulling out and shooting his load all over her flushed and sweaty body.');
    scene.text('"Wow, you even managed to reach her tits," Marta says in amazement while pointing out the cum splattered across Eva\'s chest. Yefim just chuckles and collapses back against the couch in exhaustion much like how Eva lay breathless and limp next to him, basking in the aftermath. "Well I think we need something to remember this night forever," Marta suggests before pulling out her phone. Carefully, you all help Eva sit up and gather around her. "Say \'Jizz\'!"');
    scene.actions([
      { label: 'Pose', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/divorcee/d8.jpg');
    scene.text('You all take a few to catch your breath and relax before cleaning yourselves up. "Hey, you were great tonight! I\'m so glad we met you," Marta grins as she gives you a quick hug. "If you\'re ready, I can drop you back home."');
    scene.text('You nod and say your thanks and goodbyes to Yefim before heading back to the limo. The ride back is a lot quieter than earlier, with Eva and Marta sleeping against each other while Alla makes small talk with you until you arrive back home. With a small, tired smile, Alla hugs you goodbye, and you take one last look at Marta and Eva before getting out.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
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
    }
    scene.actions([
      { label: 'Keep walking', handler: (st: GameState) => {
    (s as any).divorce_party = ((s as any).divorce_party ?? 0) + (1);
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterRandomLover(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 100) + 0) < 40 - (20 / (((s as any).stat ?? 0)?.['lesbian_count'] + 1))) {
    scene.actions([{ label: 'Continue', goto: ['dateF', 'start'] }]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['dateM', 'start'] }]);
  }
  return;
  scene.build();
}

function enterMinorGuitarMan(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  // TODO-QSP: $streetev_title
  scene.img('images/locations/shared/street/guitarb\'+ rand(1, 2) +\'.jpg');
  scene.text('As you walk down the sidewalk, you notice a man playing a guitar. He has his guitar case open, and you can see some money in it already. Several other people have stopped to listen to him play. He isn\'t half bad.');
  return;
  scene.actions([
    { label: 'Ignore', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    { label: 'Listen', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'mood', 'raise', 'small');
    qspCall(s, 'stat', '');
    scene.text('You stop and listen to him play several songs. He really is pretty good. You wonder why he is playing on the street. Perhaps the old adage about starving artists applies to musicians as well.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
      { label: 'Give him money [+$func(\'money\', \'get_cost_string\', 50, \'c...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 50, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'money', 'pay', 50, 'cash');
      qspCall(s, 'mood', 'raise', 'small');
      qspCall(s, 'stat', '');
      scene.text('You reach into your purse and pull out some money. You drop it into his case. He looks up at you and smiles and nods his head, but keeps playing. With your good deed done, you go on your way.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
      ]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMinorGuitarGirl(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  // TODO-QSP: $streetev_title
  scene.img('images/locations/shared/street/guitarg1.jpg');
  scene.text('As you walk down the sidewalk, you notice a girl playing a guitar. She has her guitar case open, and you can see some money in it already. Several other people have stopped to listen to her play. She isn\'t half bad.');
  return;
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    { label: 'Listen', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'mood', 'raise', 'small');
    qspCall(s, 'stat', '');
    // TODO-QSP: $streetev_title
    scene.img('images/locations/shared/street/guitarg1.jpg');
    scene.text('You stop and listen to her play several songs. She really is pretty good. You wonder why she is playing on the street. Perhaps the old adage about starving artists applies to musicians as well.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
      { label: 'Give her money [+$func(\'money\', \'get_cost_string\', 50, \'c...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 50, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'money', 'pay', 50, 'cash');
      qspCall(s, 'mood', 'raise', 'small');
      qspCall(s, 'stat', '');
      // TODO-QSP: $streetev_title
      scene.img('images/locations/shared/street/guitarg1.jpg');
      scene.text('You reach into your purse and pull out some money. You drop it into her case. She looks up at you and smiles and nods her head, but keeps playing. With your good deed done you go on your way.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
      ]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMinorViolinMan(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  // TODO-QSP: $streetev_title
  scene.img('images/locations/shared/street/violinb1.jpg');
  scene.text('As you walk down the sidewalk, you notice a man playing a violin. He has his violin case open, and you can see some money in it already. Several other people have stopped to listen to him play. He isn\'t half bad.');
  return;
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    { label: 'Listen', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'mood', 'raise', 'small');
    qspCall(s, 'stat', '');
    // TODO-QSP: $streetev_title
    scene.img('images/locations/shared/street/violinb1.jpg');
    scene.text('You stop and listen to him play several songs. He really is pretty good. You wonder why he is playing on the street. Perhaps the old adage about starving artists applies to musicians as well.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
      { label: 'Give him money [+$func(\'money\', \'get_cost_string\', 50, \'c...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 50, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'money', 'pay', 50, 'cash');
      qspCall(s, 'mood', 'raise', 'small');
      qspCall(s, 'stat', '');
      // TODO-QSP: $streetev_title
      scene.img('images/locations/shared/street/violinb1.jpg');
      scene.text('You reach into your purse and pull out some money. You drop it into his case. He looks up at you and smiles and nods his head, but keeps playing. With your good deed done, you go on your way.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
      ]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMinorViolinGirl(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  // TODO-QSP: $streetev_title
  scene.img('images/locations/shared/street/violing1.jpg');
  scene.text('As you walk down the sidewalk, you notice a girl playing a violin. She has her violin case open, and you can see some money in it already. Several other people have stopped to listen to her play. She isn\'t half bad.');
  return;
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    { label: 'Listen', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'mood', 'raise', 'small');
    qspCall(s, 'stat', '');
    // TODO-QSP: $streetev_title
    scene.img('images/locations/shared/street/violing1.jpg');
    scene.text('You stop and listen to her play several songs. She really is pretty good. You wonder why she is playing on the street. Perhaps the old adage about starving artists applies to musicians as well.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
      { label: 'Give her money [+$func(\'money\', \'get_cost_string\', 50, \'c...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 50, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'money', 'pay', 50, 'cash');
      qspCall(s, 'mood', 'raise', 'small');
      qspCall(s, 'stat', '');
      // TODO-QSP: $streetev_title
      scene.img('images/locations/shared/street/violing1.jpg');
      scene.text('You reach into your purse and pull out some money. You drop it into her case. She looks up at you and smiles and nods her head, but keeps playing. With your good deed done, you go on your way.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
      ]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMinorPortraits(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  // TODO-QSP: $streetev_title
  scene.img('images/locations/shared/street/artist.jpg');
  // TODO-QSP: dynamic text: As you walk down the street, you see a man sitting in a chair with a sign saying...
  scene.text('As you walk down the street, you see a man sitting in a chair with a sign saying "Will draw portrait for \' + $func(\'money\', \'string_price\', 50) + \'."');
  return;
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    { label: 'Get your portrait done [+$func(\'money\', \'get_cost_string\', 50, \'c...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 50, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 30;
      qspCall(s, 'money', 'pay', 50, 'cash');
      qspCall(s, 'mood', 'raise', 'small');
      qspCall(s, 'stat', '');
      // TODO-QSP: $streetev_title
      scene.img('images/locations/shared/street/artist.jpg');
      scene.text('You stop next to her and smile. "I would like you to draw me please." She gives you a friendly smile in return, pointing towards the other chair. "Please take a seat," she says, following this with a glance to the can sitting next to the chair. You understand and pull out the money and put it in the can. You sit for a while as she draws your portrait. After some time, she is finished and shows it to you. It is really very good and might make a good gift to give someone. You thank her for it and go on your way.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterMinorGroping_1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  // TODO-QSP: $streetev_title
  scene.img('images/locations/shared/street/assgrab.jpg');
  scene.text('As you walk down the street, you feel a hand grab your ass and squeeze it hard. You jerk away and look over your shoulder, and you see a guy grinning at you.');
  if (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 0) {
    qspCall(s, 'mood', 'raise', 'tiny');
  } else {
    qspCall(s, 'mood', 'lower', 'medium');
  }
  return;
  scene.actions([
    { label: 'Ignore', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    { label: 'Slap him', handler: (st: GameState) => {
    // TODO-QSP: $streetev_title
    scene.img('images/locations/shared/street/slapb.jpg');
    scene.text('You turn around. and as you do, you swing your hand, palm open, and deliver a hard smack to his face. The pop is loud enough to draw attention, and the guy recoils from it rubbing his face, seemingly surprised you smacked him. "Don\'t touch me asshole." With that, you turn and continue on your way.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMinorGroping_2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  // TODO-QSP: $streetev_title
  scene.img('images/locations/shared/street/street_groped\'+ rand(1, 2) +\'.jpg');
  scene.text('As you walk down the street, someone comes up behind you and grabs your ass, sqeezing it tightly. You flinch while quickly turning around angrily but only seeing your perpetrator running away.');
  if (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 1) {
    qspCall(s, 'arousal', 'flash', (-5));
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'mood', 'raise', 'small');
    scene.text('You can\'t help but smile, loving the \'extra\' attention even if it wasn\'t your idea. You casually continue on your way, but with an extra bit of sway in your hips.');
  } else {
    if (((s as any).trait_vars ?? 0)?.['exhibitionist'] === 1) {
      qspCall(s, 'mood', 'raise', 'tiny');
      scene.text('You swear loudly in his direction, checking your purse to see if he stole something. You continue on your way, albeit a little more annoyed than you were before.');
    } else {
      qspCall(s, 'mood', 'lower', 'small');
      scene.text('You blush bright red and hurry on your way.');
    }
  }
  qspCall(s, 'stat', '');
  return;
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
  ]);
  scene.build();
}

function enterMinorUnconscious(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'exp_gain', 'prcptn', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  // TODO-QSP: $streetev_title
  scene.img('images/locations/shared/street/beatup.jpg');
  scene.text('As you walk down the street, you pass a man that is badly beaten lying unconscious on the sidewalk. You stop a moment, unsure what to do, but everyone else just ignores him.');
  return;
  scene.actions([
    { label: 'Ignore him', handler: (st: GameState) => {
    scene.img('images/locations/shared/street/beatup.jpg');
    scene.text('Not being sure what you could do to help, you continue on your way and wonder what happened to him.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    ]);
  } },
    { label: 'Call police', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    qspCall(s, 'mood', 'raise', 'small');
    qspCall(s, 'stat', '');
    // TODO-QSP: $streetev_title
    scene.img('images/locations/shared/police/patrol.jpg');
    scene.text('You call the police and are told to wait for the officers, it takes some time before the do. When a car finally pulls the officers get out and ask you a few questions then tell you to be on your way. You look back and they call in and start talking to the man, you continue on your way finally.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMinorClothesGrabbed(s: GameState, scene: SceneBuilder): void {
  if (((s as any).PCloSkirt ?? 0) > 0  &&  ((s as any).pantyworntype ?? 0) !== 'none'  &&  ((s as any).PCloOnePiece ?? 0) === 1) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    // TODO-QSP: $streetev_title
    scene.img('images/locations/shared/street/bottomed1.mp4');
    scene.text('As you walk down the street, you are suddenly pushed forward hard. You nearly lose your balance and only barely catch yourself. While you are half bent over and trying to recover, you feel someone yank up your dress and yank down your panties, exposing your ass and pussy for everyone to see. You quickly regain your balance. As you do, you pull up your panties and smooth your dress back in place. By that time, whoever did this is long gone.');
    // TODO-QSP: *p 'You look around and notice several people staring at you. You are sure they''ve seen everything....
    if (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 1) {
      qspCall(s, 'arousal', 'flash', (-5));
      qspCall(s, 'arousal', 'end');
      qspCall(s, 'mood', 'raise', 'small');
      scene.text('You can\'t help but smile, loving the attention even if it wasn\'t your idea. You casually continue on your way, but with an extra bit of sway in your hips.');
    } else {
      if (((s as any).trait_vars ?? 0)?.['exhibitionist'] === 1) {
        qspCall(s, 'mood', 'lower', 'tiny');
        scene.text('You\'re annoyed with the prankster, worrying that the elastic on your panties might have been stretched in the act, but otherwise feel unembarrassed and continue on your way.');
      } else {
        qspCall(s, 'mood', 'lower', 'small');
        scene.text('You blush bright red and hurry on your way.');
      }
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    ]);
  } else {
    if (((s as any).PCloSkirt ?? 0) > 0  &&  ((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).PCloOnePiece ?? 0) === 1) {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      // TODO-QSP: $streetev_title
      scene.img('images/locations/shared/street/sharkdress\'+ rand(1, 2) +\'.mp4');
      scene.text('As you walk down the street, someone comes up behind you, grabs the top of your dress and yanks it down around your ankles, which leaves you standing stark naked. You quickly squat down and grab your dress, pulling it back up and into place. By that time, who ever did this is long gone.');
      // TODO-QSP: *p 'You look around and notice several people staring at you. You are sure they''ve seen everything....
      if (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 1) {
        qspCall(s, 'arousal', 'flash', (-5));
        qspCall(s, 'arousal', 'end');
        qspCall(s, 'mood', 'raise', 'small');
        scene.text('You can\'t help but smile, loving the attention even if it wasn\'t your idea. You casually continue on your way, but with an extra bit of sway in your hips.');
      } else {
        if (((s as any).trait_vars ?? 0)?.['exhibitionist'] === 1) {
          scene.text('You swear loudly, worrying less about how you were just exposed in the street and more about whether the prankster might have damaged your clothing. Satisfied that it appears to be unharmed, you continue on your way, albeit a little more annoyed than you were before.');
        } else {
          qspCall(s, 'mood', 'lower', 'small');
          scene.text('You blush bright red and hurry on your way.');
        }
      }
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
      ]);
    } else {
      if (((s as any).PCloSkirt ?? 0) > 0  &&  ((s as any).pantyworntype ?? 0) !== 'none') {
        (s as any).minut = ((s as any).minut ?? 0) + 5;
        // TODO-QSP: $streetev_title
        scene.img('images/locations/shared/street/bottomeds\'+ rand(1, 2) +\'.mp4');
        scene.text('As you walk down the street, someone comes up behind you and grabs your skirt and panties, yanking them down. Your skirt ends up around your ankles and your panties halfway down your thighs, which leaves your ass and pussy on fully display to everyone around. You quickly pull up your panties and then squat down and grab your skirt, pulling it back up and into place. By that time, whoever did this is long gone.');
        // TODO-QSP: *p 'You look around and notice several people staring at you. You are sure they''ve seen everything....
        if (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 1) {
          qspCall(s, 'arousal', 'flash', (-5));
          qspCall(s, 'arousal', 'end');
          qspCall(s, 'mood', 'raise', 'small');
          scene.text('You can\'t help but smile, loving the attention even if it wasn\'t your idea. You casually continue on your way, but with an extra bit of sway in your hips.');
        } else {
          if (((s as any).trait_vars ?? 0)?.['exhibitionist'] === 1) {
            qspCall(s, 'mood', 'lower', 'tiny');
            scene.text('You swear loudly, worrying less about how your pussy was just exposed in the street and more about whether the prankster might have damaged your panties and skirt. Satisfied that they appear to be unharmed, you continue on your way, albeit a little more annoyed than you were before.');
          } else {
            qspCall(s, 'mood', 'lower', 'small');
            scene.text('You blush bright red and hurry on your way.');
          }
        }
        qspCall(s, 'stat', '');
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
        ]);
      } else {
        (s as any).minut = ((s as any).minut ?? 0) + 5;
        // TODO-QSP: $streetev_title
        scene.img('images/locations/shared/street/topped\'+ rand(1, 2) +\'.mp4');
        scene.text('As you walk down the street, someone comes up behind you and grabs your top, yanking it down, which leaves your tits on full display to everyone around. You quickly pull your top back up. By that time, whoever did this is long gone.');
        // TODO-QSP: *p 'You look around and notice several people staring at you. You are sure they''ve seen everything....
        if (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 1) {
          qspCall(s, 'arousal', 'flash', (-5));
          qspCall(s, 'arousal', 'end');
          qspCall(s, 'mood', 'raise', 'small');
          scene.text('You can\'t help but smile, loving the attention even if it wasn\'t your idea. You casually continue on your way, but with an extra bit of sway in your hips.');
        } else {
          if (((s as any).trait_vars ?? 0)?.['exhibitionist'] === 1) {
            qspCall(s, 'mood', 'lower', 'tiny');
            scene.text('You swear loudly, worrying less about how your tits were just flashed to everyone in the street and more about whether the prankster might have damaged your top. Satisfied that it appears to be unharmed, you continue on your way, albeit a little more annoyed than you were before.');
          } else {
            qspCall(s, 'mood', 'lower', 'small');
            scene.text('You blush bright red and hurry on your way.');
          }
        }
        qspCall(s, 'stat', '');
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
        ]);
      }
    }
  }
  return;
  scene.build();
}

function enterMinorWindSkirt(s: GameState, scene: SceneBuilder): void {
  if (((s as any).PCloSkirt ?? 0) > 0  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).pantyworntype ?? 0) !== 'none') {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    // TODO-QSP: $streetev_title
    scene.img('images/locations/shared/street/breeze.mp4');
    scene.text('As you walk down the street, a strong breeze suddenly blows down it, which causes your skirt to blow up, exposing your panty-clad ass to everyone on the street. You quickly push it back down, but as soon as you let go, the breeze blows it right back up. You fight against the breeze for almost a minute before it finally stops.');
    if (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 1) {
      qspCall(s, 'arousal', 'flash', (-5));
      qspCall(s, 'arousal', 'end');
      qspCall(s, 'mood', 'raise', 'small');
      scene.text('You look around and notice several people staring at you. You are sure they\'ve seen everything. You can\'t help but smile, loving the attention even if it wasn\'t your idea. You casually continue on your way, but with an extra bit of sway in your hips.');
    } else {
      if (((s as any).trait_vars ?? 0)?.['exhibitionist'] === 1) {
        qspCall(s, 'mood', 'lower', 'tiny');
        scene.text('You look around and notice several people staring at you. <i>What\'re they staring for? It\'s just underwear…</i> you think to yourself and continue on your way.');
      } else {
        qspCall(s, 'mood', 'lower', 'small');
        scene.text('You look around and notice several people staring at you. You are sure they\'ve seen everything. You blush bright red and hurry on your way.');
      }
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    ]);
  } else {
    if (((s as any).PCloSkirt ?? 0) > 2  &&  ((s as any).sunWeather ?? 0) === 0  &&  ((s as any).pantyworntype ?? 0) === 'none') {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'stat', '');
      // TODO-QSP: $streetev_title
      scene.img('images/locations/shared/street/breeze_rainy.mp4');
      scene.text('A strong windy breeze blows down the street which causes your skirt to blow up entirely, exposing all of your crotch to the people around. You struggle pushing it back down where it belongs, as the breeze continues to expose you.');
      if (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 1) {
        qspCall(s, 'arousal', 'flash', (-5));
        qspCall(s, 'arousal', 'end');
        qspCall(s, 'mood', 'raise', 'small');
        scene.text('You look around and notice several people staring at you. You are sure they\'ve seen everything. You can\'t help but smile, loving the attention even if it wasn\'t your idea. You casually continue on your way, but with an extra bit of sway in your hips.');
      } else {
        if (((s as any).trait_vars ?? 0)?.['exhibitionist'] === 1) {
          qspCall(s, 'mood', 'lower', 'tiny');
          scene.text('You look around and notice several people staring at you. <i>They have probably seen that I don\'t wear underwear.</i> you think to yourself and continue on your way.');
        } else {
          qspCall(s, 'mood', 'lower', 'small');
          scene.text('You look around and notice several people staring at you. You are sure they\'ve seen everything. You blush bright red and hurry on your way.');
        }
      }
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
      ]);
    } else {
      scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc'); } }]);
    }
  }
  return;
  scene.build();
}

function enterMinorNoBra(s: GameState, scene: SceneBuilder): void {
  if (((s as any).PCloThinness ?? 0) === 4) {
    qspCall(s, 'stat', '');
    // TODO-QSP: $streetev_title
    scene.img('images/locations/shared/street/street_no_bra1.mp4');
    scene.text('As you walk down the street you feel your breasts wobbling freely under your outfit, which can probably be seen by people walking by too.');
    if (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 1) {
      qspCall(s, 'arousal', 'flash', (-5));
      qspCall(s, 'arousal', 'end');
      qspCall(s, 'mood', 'raise', 'small');
      scene.text('You can\'t help but smile, loving the attention. You casually continue on your way, but with an extra bit of sway in your tits.');
    } else {
      if (((s as any).trait_vars ?? 0)?.['exhibitionist'] === 1) {
        qspCall(s, 'mood', 'lower', 'tiny');
        scene.text('You feel ashamed and blush bright red and hurry on your way, thinking it was a bad idea not wearing a bra today and such a thin outfit.');
      } else {
        qspCall(s, 'mood', 'lower', 'small');
        scene.text('You blush bright red and hurry on your way.');
      }
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    ]);
  } else {
    if (((s as any).PCloThinness ?? 0) >= 5) {
      qspCall(s, 'stat', '');
      // TODO-QSP: $streetev_title
      scene.img('images/locations/shared/street/street_no_bra\'+ rand(2, 4) +\'.mp4');
      scene.text('As you walk down the street you feel your breasts wobbling freely under your thin outfit, stretching it, emphasizing the outline of your tits, which can definitely be seen by people walking by too. As you look closely both men and women are staring at your jiggling tits.');
      if (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 1) {
        qspCall(s, 'arousal', 'flash', (-5));
        qspCall(s, 'arousal', 'end');
        qspCall(s, 'mood', 'raise', 'small');
        scene.text('You can\'t help but smile, loving the attention. You casually continue on your way, but with an extra bit of sway in your tits.');
      } else {
        if (((s as any).trait_vars ?? 0)?.['exhibitionist'] === 1) {
          qspCall(s, 'mood', 'lower', 'tiny');
          scene.text('You feel ashamed and blush bright red and hurry on your way, thinking it was a bad idea not wearing a bra today and such a thin outfit.');
        } else {
          qspCall(s, 'mood', 'lower', 'small');
          scene.text('You blush bright red and hurry on your way.');
        }
      }
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
      ]);
    } else {
      scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc'); } }]);
    }
  }
  return;
  scene.build();
}

function enterMinorHeteroCouple(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  // TODO-QSP: $streetev_title
  scene.img('images/locations/shared/street/couple1.mp4');
  scene.text('As you walk down the street, you see a couple making out passionately. The guy reaches around and starts squeezing the girls ass. You can\'t help but watch them as you walk by, feeling your own arousal growing.');
  qspCall(s, 'arousal', 'voyeur', 5);
  qspCall(s, 'arousal', 'end');
  return;
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
  ]);
  scene.build();
}

function enterMinorLesbianCouple(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  // TODO-QSP: $streetev_title
  scene.img('images/locations/shared/street/lesbians.jpg');
  scene.text('As you walk down the street, you see a couple of girls making out passionately. You can\'t help but watch them as you walk by, feeling your own arousal growing.');
  qspCall(s, 'arousal', 'voyeur', 5);
  qspCall(s, 'arousal', 'end');
  return;
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
  ]);
  scene.build();
}

function enterMinorWomanWindow(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
  qspCall(s, 'exp_gain', 'prcptn', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  // TODO-QSP: $streetev_title
  scene.img('images/locations/shared/street/lostkey.jpg');
  scene.text('As you pass by an alleyway, you glance down and see a woman wearing a very nice dress with nice high heels trying to jimmy a window. A few moments later, she slides the window open and then crawls through, giving a nice view of her ass as she does. Once inside, she quickly shuts the window. As you continue on, you wonder if maybe she lost her keys. Or maybe she was just a very well dressed burglar.');
  return;
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
  ]);
  scene.build();
}

function enterMinorGuysFighting(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  // TODO-QSP: $streetev_title
  scene.img('images/locations/shared/street/fightb.jpg');
  scene.text('As you walk down the street, two guys just ahead of you start pushing each other. Seconds later, they are throwing punches. The fight escalates quickly.');
  return;
  scene.actions([
    { label: 'Ignore it', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    { label: 'Stop and watch', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    // TODO-QSP: $streetev_title
    scene.img('images/locations/shared/street/fightb.jpg');
    scene.text('You love a good fight, so you like many others stop and watch them duke it out. It goes on for a while as they trade blows. One of them finally gets the upper hand and gets the other one down and starts beating him. He doesn\'t stop until one of his friends pulls him off. With the fight over, everyone leaves. You can hear police sirens and decide it is time to leave yourself.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMinorGirlsFighting(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  // TODO-QSP: $streetev_title
  if (((s as any).loc ?? 0) === 'pav_commercial'  ||  ((s as any).loc ?? 0) === 'pav_residential') {
    scene.img('images/locations/shared/street/town/fightg1.jpg');
  } else {
    scene.img('images/locations/shared/street/city/fightg1.jpg');
  }
  scene.text('As you walk down the street, two girls just ahead of you start pushing each other. One of them slaps the other, and the fight escalates quickly, with hair pulling, scratching and even some kicks and punches, along with a slew of verbal insults hurled at each other.');
  return;
  scene.actions([
    { label: 'Ignore it', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    { label: 'Stop and watch', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    // TODO-QSP: $streetev_title
    if (((s as any).loc ?? 0) === 'pav_commercial'  ||  ((s as any).loc ?? 0) === 'pav_residential') {
      scene.img('images/locations/shared/street/town/fightg1.jpg');
    } else {
      scene.img('images/locations/shared/street/city/fightg1.jpg');
    }
    scene.text('You love a good fight, so you like many others stop and watch them duke it out. It goes on for a while as they trade blows. One of them finally gets the upper hand and gets the other one down and starts beating her. Once the girl on bottom stops fighting back, the winner starts ripping her clothes off. Once she has the bottom girl completely naked, she gets up and hurls a few more insults before walking away. With the fight over, everyone leaves. The girl that lost tries to gather up her torn clothes and put them back on as she loudly weeps.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
      { label: 'Help her', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('You help her up and try to help her the best you can to get her clothes back in place. She wipes her eyes thanking you, then gives you a quick hug before she hurries away.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMinorWomanFlashing(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  // TODO-QSP: $streetev_title
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
    scene.img('images/locations/shared/street/girlflashw\'+ rand(1, 2) +\'.jpg');
  } else {
    scene.img('images/locations/shared/street/girlfash1.jpg');
  }
  scene.text('As you walk down the street, you pass a woman wearing a long coat. All of a sudden, she flashes you with a huge grin on her face. She flashes several other people as well. She seems to be enjoying the attention she is getting.');
  qspCall(s, 'arousal', 'erotic_nudity', 5);
  if (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 0) {
    scene.actions([
      { label: 'Flash her back', handler: (st: GameState) => {
    qspCall(s, 'flash', 'tits', 'outdoors', 1, 1);
    // TODO-QSP: $streetev_title
    if (((s as any).PCloSkirt ?? 0) > 0) {
      scene.img('images/pc/activities/flashing/dress/outside/tits/\' + rand(1, 12) + \'.jpg');
      scene.text('You grin at her as she flashes you, and you lift your shirt, flashing your tits back at her, which makes her laugh.');
    } else {
      scene.img('images/pc/activities/flashing/pants/outside/tits/\' + rand(1, 14) + \'.jpg');
      scene.text('You grin at her as she flashes you, and you lift your shirt, flashing your tits back at her, which makes her laugh.');
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    ]);
  } },
    ]);
  }
  return;
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
  ]);
  scene.build();
}

function enterMinorGirlFlashing(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  // TODO-QSP: $streetev_title
  scene.img('images/locations/shared/street/nopanties.jpg');
  scene.text('As you walk down the street, you pass a young girl sitting on the sidewalk with some friends next to her. You throw a glance at her and surprisingly see her spread her legs revealing her bare pussy to you, all while smiling.');
  qspCall(s, 'arousal', 'erotic_nudity', 5);
  qspCall(s, 'arousal', 'end');
  return;
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
  ]);
  scene.build();
}

function enterMinorGirlsGossiping(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  // TODO-QSP: $streetev_title
  scene.img('images/locations/shared/street/girls1.jpg');
  if (((s as any).pcs_hotcat ?? 0) > 6) {
    qspCall(s, 'mood', 'raise', 'medium');
    scene.text('As you walk down the street, you pass a group of girls. You hear them start talking about you as you pass by.');
    scene.text('"I love her outfit, she really knows how to dress."');
    scene.text('"I know, look at her shoes, they are just perfect."');
    scene.text('"What about her makeup? I wish I could do mine that good."');
    scene.text('They keep talking about you until they are out of earshot. You can\'t help but smile and feel great after that.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    ]);
  } else {
    qspCall(s, 'mood', 'lower', 'tiny', 0);
    scene.text('As you walk down the street, you pass a group of girls. You hear them start talking about you as you pass by.');
    scene.text('"Oh my god, look at her outfit. Does she really think that she can pull that off with a body like that?"');
    scene.text('"I know! And look at her hair, has she even heard of a brush?"');
    scene.text('You feel your cheeks burning as they continue to make fun of you.');
    scene.actions([
      { label: 'Ignore them', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
      { label: 'Tell them off', handler: (st: GameState) => {
    // TODO-QSP: $streetev_title
    scene.img('images/locations/shared/street/girls1.jpg');
    scene.text('You spin around to face them. "Just what\'s your problem bitches?" One of the girls steps up to you. "You best back yourself up bitch before I smack the shit out of you."');
    scene.actions([
      { label: 'Hurry away in shame', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
      { label: 'Bring it Bitch!', handler: (st: GameState) => {
    // TODO-QSP: $streetev_title
    scene.img('images/locations/shared/street/girlgang.jpg');
    scene.text('You give her a small shove to force her to step back. "Bring it on then, bitch." The words barely leave your mouth before she jumps you. Soon all of her friends join in, leaving you to fight them all.');
    qspCall(s, 'fight', 'initFight');
    qspCall(s, 'fight_npcdata', 'girls');
  }, goto: ['fight', 'start'] },
    ]);
  } },
    ]);
  }
  return;
  scene.build();
}

function enterMinorHandoutFlyers(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  // TODO-QSP: $streetev_title
  scene.img('images/locations/shared/street/flyerman.jpg');
  // TODO-QSP: dynamic text: As you walk down the street, you run across a man handing out flyers. As you get...
  scene.text('As you walk down the street, you run across a man handing out flyers. As you get near him, he waves you over, "Hello there young lady, would you like to earn a little extra money? All you have to do is take some of these flyers and hand them out for half an hour, and I will pay you \' + $func(\'money\', \'string_profit\', 75) + \'. What do you say?"');
  return;
  scene.actions([
    { label: 'No thanks', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    { label: 'Distribute flyers to earn money ( [+$func(\'money\', \'string_profit\', 75) + \')...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'money', 'earn', 75, 'cash');
    qspCall(s, 'mood', 'lower', 'tiny');
    qspCall(s, 'stat', '');
    // TODO-QSP: $streetev_title
    if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
      scene.img('images/locations/shared/street/flyerw.jpg');
    } else {
      scene.img('images/locations/shared/street/flyer.jpg');
    }
    // TODO-QSP: dynamic text: For thirty minutes, you stand on the street, chatting up random people, trying t...
    scene.text('For thirty minutes, you stand on the street, chatting up random people, trying to give them one of your flyers. After that, you are paid \' + $func(\'money\', \'string_profit\', 75) + \' for your effort by the man, and he offers you the same deal to hand out more.');
    scene.actions([
      { label: 'Distribute flyers to earn money ( [+$func(\'money\', \'string_profit\', 75) + \')...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'money', 'earn', 75, 'cash');
    qspCall(s, 'mood', 'lower', 'tiny');
    qspCall(s, 'stat', '');
    // TODO-QSP: $streetev_title
    if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
      scene.img('images/locations/shared/street/flyerw.jpg');
    } else {
      scene.img('images/locations/shared/street/flyer.jpg');
    }
    // TODO-QSP: dynamic text: For thirty minutes, you stand on the street, chatting up random people, trying t...
    scene.text('For thirty minutes, you stand on the street, chatting up random people, trying to give them one of your flyers. After that, you are paid \' + $func(\'money\', \'string_profit\', 75) + \' for your effort by the man, and he offers you the same deal to hand out more.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    ]);
  } },
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMinorGirlBeggar(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  // TODO-QSP: $streetev_title
  scene.img('images/locations/shared/street/homelessg.jpg');
  scene.text('As you walk down the street, you pass a girl sitting on a barrel just inside of an alleyway, holding up a sign saying that she is homeless, pleading for help.');
  return;
  scene.actions([
    { label: 'Ignore her', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    { label: 'Give her money [+$func(\'money\', \'get_cost_string\', 50, \'c...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 50, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 50, 'cash');
      qspCall(s, 'mood', 'raise', 'tiny');
      qspCall(s, 'stat', '');
      // TODO-QSP: $streetev_title
      scene.img('images/locations/shared/street/homelessg.jpg');
      scene.text('You open your purse up and pull out the money you can spare and hand it to her. She thanks you profusely and gives you a heart warming smile.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
      ]);
    }
  } },
    { label: 'Give her money [+$func(\'money\', \'get_cost_string\', 100, \'...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 100, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 100, 'cash');
      qspCall(s, 'mood', 'raise', 'small');
      qspCall(s, 'stat', '');
      // TODO-QSP: $streetev_title
      scene.img('images/locations/shared/street/homelessg.jpg');
      scene.text('You open your purse up and pull out the money you can spare and hand it to her. She thanks you profusely and gives you a heart warming smile.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
      ]);
    }
  } },
    { label: 'Give her money [+$func(\'money\', \'get_cost_string\', 250, \'...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 250, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 250, 'cash');
      qspCall(s, 'mood', 'raise', 'medium');
      qspCall(s, 'stat', '');
      // TODO-QSP: $streetev_title
      scene.img('images/locations/shared/street/homelessg.jpg');
      scene.text('You open your purse up and pull out the money you can spare and hand it to her. She thanks you profusely and gives you a heart warming smile.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
      ]);
    }
  } },
    { label: 'Give her money [+$func(\'money\', \'get_cost_string\', 500, \'...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 500, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 500, 'cash');
      qspCall(s, 'mood', 'raise', 'large');
      qspCall(s, 'stat', '');
      // TODO-QSP: $streetev_title
      scene.img('images/locations/shared/street/homelessg.jpg');
      scene.text('You open your purse up and pull out the money you can spare and hand it to her. She thanks you profusely and gives you a heart warming smile.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
      ]);
    }
  } },
    { label: 'Give her money [+$func(\'money\', \'get_cost_string\', 1000, ...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 1000, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 1000, 'cash');
      // TODO-QSP: $streetev_title
      scene.img('images/locations/shared/street/homelessg.jpg');
      qspCall(s, 'mood', 'raise', 'huge');
      scene.text('You open your purse up and pull out the money you can spare and hand it to her. She thanks you profusely and gives you a heart warming smile.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterMinorNakedWoman(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  // TODO-QSP: $streetev_title
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
    scene.img('images/locations/shared/street/nakedgw1.jpg');
  } else {
    scene.img('images/locations/shared/street/nakedg\'+ rand(1, 3) +\'.jpg');
  }
  scene.text('As you walk down the street, you pass a naked young woman. She seems to be loving the attention she is getting. Otherwise, she is acting like any other person on the street.');
  qspCall(s, 'arousal', 'erotic_nudity', 5);
  qspCall(s, 'arousal', 'end');
  return;
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
  ]);
  scene.build();
}

function enterMinorMotorcycleNaked(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  // TODO-QSP: $streetev_title
  scene.img('images/locations/shared/street/nakedgmbike.jpg');
  scene.text('As you walk down the street, a motorcycle drives by slowly. Several people are taking pictures. The man driving waves at them, while behind him sits a naked girl only wearing a motorcycle helmet. A few moments later, the traffic clears up a bit and they zoom off.');
  qspCall(s, 'arousal', 'erotic_nudity', 5);
  qspCall(s, 'arousal', 'end');
  return;
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
  ]);
  scene.build();
}

function enterMinorGirlSplit(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  // TODO-QSP: $streetev_title
  scene.img('images/locations/shared/street/splitsread.jpg');
  scene.text('As you walk down the street, you pass a young girl reading a magazine. All of a sudden she lifts her foot, doing a standing split. You look at her in confusement, wondering why she\'s behaving oddly. As you\'re about to step up to her, it\'s like she wakes up from a daze. She blushes and quickly runs away from you.');
  return;
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
  ]);
  scene.build();
}

function enterMinorBoysBeer(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  // TODO-QSP: $streetev_title
  scene.img('images/locations/shared/street/teens.jpg');
  scene.text('As you walk down the street, you pass a group of teens. Just as you are about to pass them, one of the boys calls out. "Hey! Want a beer?" he says as he offers you one.');
  return;
  scene.actions([
    { label: 'Decline', handler: (st: GameState) => {
    // TODO-QSP: $streetev_title
    scene.img('images/locations/shared/street/teens.jpg');
    scene.text('You shake your head no and mumble thanks but no thanks and continue on your way.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    ]);
  } },
    { label: 'Join them', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'drugs', 'alcohol', 'beer');
    qspCall(s, 'stat', '');
    // TODO-QSP: $streetev_title
    scene.img('images/locations/shared/street/teens.jpg');
    scene.text('You stop a moment and consider it then walk over and take the offered beer. You sit and talk with them for a while and drink the beer. After a bit, you decide you should be on your way. You thank them for the beer and say goodbye as you head out.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterFightRape(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'fight', 'initFight');
  qspCall(s, 'fight_npcdata', 'rapist');
  scene.actions([{ label: 'Continue', goto: ['fight', 'start'] }]);
  scene.build();
}

function enterRape(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'rape_events', 'urban_rape');
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'random_rape':
      enterRandomRape(s, scene);
      break;
    case 'random_robbery':
      enterRandomRobbery(s, scene);
      break;
    case 'random_snatching':
      enterRandomSnatching(s, scene);
      break;
    case 'mistmeet':
      enterMistmeet(s, scene);
      break;
    case 'failed_celeb_blackmail':
      enterFailedCelebBlackmail(s, scene);
      break;
    case 'nich_taras_abduct':
      enterNichTarasAbduct(s, scene);
      break;
    case 'divorce_party':
      enterDivorceParty(s, scene);
      break;
    case 'random_lover':
      enterRandomLover(s, scene);
      break;
    case 'minor_guitar_man':
      enterMinorGuitarMan(s, scene);
      break;
    case 'minor_guitar_girl':
      enterMinorGuitarGirl(s, scene);
      break;
    case 'minor_violin_man':
      enterMinorViolinMan(s, scene);
      break;
    case 'minor_violin_girl':
      enterMinorViolinGirl(s, scene);
      break;
    case 'minor_portraits':
      enterMinorPortraits(s, scene);
      break;
    case 'minor_groping_1':
      enterMinorGroping_1(s, scene);
      break;
    case 'minor_groping_2':
      enterMinorGroping_2(s, scene);
      break;
    case 'minor_unconscious':
      enterMinorUnconscious(s, scene);
      break;
    case 'minor_clothes_grabbed':
      enterMinorClothesGrabbed(s, scene);
      break;
    case 'minor_wind_skirt':
      enterMinorWindSkirt(s, scene);
      break;
    case 'minor_no_bra':
      enterMinorNoBra(s, scene);
      break;
    case 'minor_hetero_couple':
      enterMinorHeteroCouple(s, scene);
      break;
    case 'minor_lesbian_couple':
      enterMinorLesbianCouple(s, scene);
      break;
    case 'minor_woman_window':
      enterMinorWomanWindow(s, scene);
      break;
    case 'minor_guys_fighting':
      enterMinorGuysFighting(s, scene);
      break;
    case 'minor_girls_fighting':
      enterMinorGirlsFighting(s, scene);
      break;
    case 'minor_woman_flashing':
      enterMinorWomanFlashing(s, scene);
      break;
    case 'minor_girl_flashing':
      enterMinorGirlFlashing(s, scene);
      break;
    case 'minor_girls_gossiping':
      enterMinorGirlsGossiping(s, scene);
      break;
    case 'minor_handout_flyers':
      enterMinorHandoutFlyers(s, scene);
      break;
    case 'minor_girl_beggar':
      enterMinorGirlBeggar(s, scene);
      break;
    case 'minor_naked_woman':
      enterMinorNakedWoman(s, scene);
      break;
    case 'minor_motorcycle_naked':
      enterMinorMotorcycleNaked(s, scene);
      break;
    case 'minor_girl_split':
      enterMinorGirlSplit(s, scene);
      break;
    case 'minor_boys_beer':
      enterMinorBoysBeer(s, scene);
      break;
    case 'fight_rape':
      enterFightRape(s, scene);
      break;
    case 'rape':
      enterRape(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const street_events_general: LocationDef = {
  name: 'street_events_general',
  title: 'You notice a hooded man standing in a darkened alleyway up a',
  region: 'other',
  enter: enter,
};
