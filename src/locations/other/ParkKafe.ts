import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'ParkKafe', 'start');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  (s as any).park_food = (((s as any).pcs_ate ?? 0) + ((s as any).pcs_drank ?? 0));
  scene.text('<center><b>Park Café</b></center>');
  scene.img('images/locations/city/centralpark/parkcafe.jpg');
  scene.text('The café is a gathering point located in the center of the park. It\'s open all year round while offering different foods and beverages that depend on the season.');
  scene.text('The café is surrounded by lovely gardens and a natural forest, and every visitor usually takes a moment to enjoy the beautiful scenery.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the café', goto: ['parkKafe', 'end'] },
    { label: 'Have a seat', goto: ['parkKafe', 'table'] },
    { label: 'Order take-out (0:20) [+$func(\'money\', \'get_cost_string\', 350)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 350) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 350);
      scene.actions([{ label: 'Continue', goto: ['food', 'fast_food'] }]);
    }
  } },
  ]);
  scene.build();
}

function enterTable(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'ParkKafe', 'table');
  scene.text('<center><b>Park Café</b></center>');
  scene.img('images/locations/city/centralpark/cafe/cafe_inside.jpg');
  scene.text('You take a seat at an empty table. You look around at both the patrons at the café and the breathtaking scenery that surrounds you. There is a menu in front of you that you can order from.');
  if (((s as any).park_food ?? 0) < (((s as any).pcs_ate ?? 0) + ((s as any).pcs_drank ?? 0))) {
    (s as any).pk_rand = Math.floor(Math.random() * 7) + 1;
    if (((s as any).pk_rand ?? 0) === 1) {
      scene.text('Observing the people while enjoying your meal, you notice a <a href="exec:gt \'ParkKafe\', \'youth\'">group</a> of younger people making noise.');
    }
    if (((s as any).pk_rand ?? 0) === 2) {
      scene.text('Observing the people while enjoying your meal, you notice a younger lonely <a href="exec:gt \'ParkKafe\', \'the_boy\'">man</a> sitting by the table.');
    }
    if (((s as any).pk_rand ?? 0) === 3) {
      scene.text('You\'re watching the world go by when you spot some <a href="exec:gt \'ParkKafe\', \'blacks\'">black men</a> laughing and chatting.');
    }
    if (((s as any).pk_rand ?? 0) === 4) {
      scene.text('Observing the people while enjoying your meal, you notice a <a href="exec:gt \'ParkKafe\', \'woman\'">woman</a> who has just received her meal.');
    }
    if (((s as any).pk_rand ?? 0) === 5) {
      scene.text('Observing the people while enjoying your meal, you notice a middle-aged <a href="exec:gt \'ParkKafe\', \'man\'">man</a> sitting and observing the people at the café.');
    }
    if (((s as any).pk_rand ?? 0) === 6) {
      scene.text('Observing the people while enjoying your meal, you notice an <a href="exec:gt \'ParkKafe\', \'seniors\'">old man</a> walking back and forth outside the café.');
    }
    if (((s as any).pk_rand ?? 0) === 7) {
      scene.text('Observing the people while enjoying your meal, you notice two <a href="exec:gt \'ParkKafe\', \'guys\'">sporty guys</a> sitting at a table drinking beer.');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Get up from the table', goto: ['parkKafe', 'start'] },
    { label: 'Order from the menu (0:05)', handler: (st: GameState) => {
    // TODO-QSP: gs 'food_menu'
  } },
  ]);
  scene.build();
}

function enterGuys(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).pcs_hotcat ?? 0) < 5) {
    scene.text('You look at them intensely, but you don\'t think they notice you.');
    scene.actions([
      { label: 'Leave', goto: ['parkKafe', 'end', '\'cafe\''] },
    ]);
  } else {
    if (((s as any).kloftimes ?? 0) > 0) {
      scene.text('You notice Jora and Semyon sitting a bit further away from you. They clearly notice you as one of them nods towards your general direction to the other one.');
      scene.text('In the end, they ignore you and continue drinking beer and talking to each other.');
      scene.actions([
        { label: 'Leave', goto: ['parkKafe', 'end', '\'cafe\''] },
      ]);
    } else {
      scene.text('One of them notices you looking and approaches to ask if you would like to join them.');
      qspCall(s, 'willpower', 'drink', 'resist');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Turn them down [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Turn them down [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'drink', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.actions([{ label: 'Continue', goto: ['parkKafe', 'end', '\'cafe\''] }]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Drink beer with the guys', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A44');
    qspCall(s, 'npcgeneratec', '', 0, 'Sporty Guy', Math.floor(Math.random() * 18) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'fame', 'city', 'sex', 3);
    qspCall(s, 'drugs', 'alcohol', 'beer');
    scene.text('One of the guys orders another round at the bar and brings you all a beer. You realize that you\'ve gotten drunk a little too quickly for only one beer, but the guys have already started guiding you into the woods.');
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      if ((!((s as any).parkara ?? 0))) {
        (s as any).parkara = 1;
      }
      scene.img('images/characters/city/jora/sex/022.jpg');
      scene.text('You don\'t understand what\'s going on as they shove you down on your knees. Gazing up, you\'re greeted by the sight of their cocks hanging in your face.');
      scene.text('Still feeling hazy, you drunkenly comply and start sucking their cocks in turn.');
      scene.text('They both quickly finish in your mouth and force you to swallow their cum.');
      (s as any).parkarainmouthnow = 1;
      qspCall(s, 'arousal', 'bj', 5);
      qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0));
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Continue', goto: ['parkkafe', 'klof 1'] },
      ]);
    } else {
      if ((!((s as any).parkara ?? 0))) {
        (s as any).parkara = 1;
      }
      scene.img('images/characters/city/jora/sex/004.jpg');
      scene.text('One guy lies down and roughly pulls you on top. He groans in pleasure when his hard member rubs against your tight pussy, then he starts fucking your pussy relentlessly. The other guy lines up behind you and shoves his penis up your ass. You moan, both in pain and pleasure, at the sensation of being filled in both holes.');
      scene.text('One of them finishes deep inside you while the other pulls out and cums on your ass.');
      qspCall(s, 'arousal', 'anal', 5);
      qspCall(s, 'arousal', 'vaginal', (-5));
      qspCall(s, 'cum_call', '', '', ((s as any).boy ?? 0));
      qspCall(s, 'cum_call', 'anus', ((s as any).boy ?? 0));
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Continue', goto: ['parkkafe', 'klof 1'] },
      ]);
    }
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterKlof1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).klofQW = 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/jora/11 1.jpg');
  scene.text('You try to stand up, but immediately fall back on your ass, still feeling dizzy.');
  if ((!((s as any).parkarainmouthnow ?? 0))) {
    scene.text('Your pussy feels itchy as something warm and sticky trickles down your leg.');
    scene.text('"Did you like it, baby?" one of them mockingly asks.');
  } else {
    scene.text('You can still taste their cum on your tongue.');
    scene.text('"Did you like it, baby?" one of them mockingly asks.');
    (s as any).parkarainmouthnow = 0;
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Yes', goto: ['event', 'klof 2'] },
    { label: 'No', goto: ['parkKafe', 'end'] },
  ]);
  scene.build();
}

function enterSeniors(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/centralpark/cafe/oldman.jpg');
  if (((s as any).pcs_hotcat ?? 0) < 6) {
    scene.text('The old man keeps pacing up and down, but doesn\'t seem to pay any attention to you. He stops and starts to seemingly chat a very pretty looking young woman.');
    scene.actions([
      { label: 'Leave', goto: ['parkKafe', 'end', '\'cafe\''] },
    ]);
  } else {
    scene.text('The old man suddenly stops in his tracks. "Hey, girl! You don\'t want to drink that piss that they serve. Come with me and I\'ll get you the real stuff…"');
    scene.text('You look around, thinking that he\'s yelling at someone else, but you notice he\'s got his eyes locked on you.');
    scene.text('Pointing at yourself, he starts yelling again. "Yes, you!"');
    qspCall(s, 'willpower', 'drink', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Reject him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Reject him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'willpower', 'drink', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/reply.jpg');
    scene.text('Still confused as to why he singled you out, you shake your head.');
    scene.text('He seems almost offended by your rejection. "Stupid girl! Fine! Drink this piss water then. I don\'t care."');
    scene.text('He stomps away angrily. You\'re still not really clear about what just happened…');
    scene.actions([
      { label: 'Walk away', goto: ['parkKafe', 'end', '\'cafe\''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Ask him what he wants', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/reply.jpg');
    scene.text('He smiles at you and looks your body over in a lusty way. "Why don\'t we go some place private and you can make an old man feel young again?"');
    scene.text('The way he asks leaves no doubt in your mind on what he wants.');
    scene.text('You cross your arms. "Why would I go anywhere with you? You could be a rapist or a murderer for all I know!"');
    scene.text('"Look at me! I\'m an old man! What harm can I do to you?"');
    scene.text('You remain undecided. "I don\'t know… How can I trust you?"');
    scene.text('He looks confident. "I promise you\'ll have a great time!"');
    scene.actions([
      { label: 'Go with him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/oldman.jpg');
    scene.text('"Fine! I\'ll come along…"');
    scene.text('The old man starts laughing. "Great! Now hurry and let\'s go!"');
    scene.text('You\'re still not sure about this, but free alcohol is free alcohol and he\'s old, so he shouldn\'t be too much of a danger to you.');
    scene.text('He\'s surprisingly fast for his age and you\'re having a hard time keeping up as you pass through some shrubbery and end up in a clearing, where you see another man…');
    scene.text('"I thought it was supposed to be just the two of us?" you ask.');
    scene.text('"Don\'t worry, he\'s my friend," he reassures you. "Here, take a sip!"');
    scene.text('He hands you a bottle of… something.');
    scene.actions([
      { label: 'Take a sip', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'drugs', 'alcohol', 'vodka', 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/sip.jpg');
    scene.text('You examine the bottle; it\'s some brand of vodka that you\'ve never heard of before. When you take a sip, the foul taste of the clearly cheap vodka hits you straight away and makes you stick out your tongue in disgust.');
    scene.text('As you turn around to hand the bottle back, a gasp escapes your lips. The two men are standing naked in front of you.');
    scene.text('"What the hell are you doing?!" you yell.');
    scene.text('"A favor for a favor, girl! We gave you something to drink and now you need to repay us," one of them grins.');
    scene.actions([
      { label: 'Let them have their way', handler: (st: GameState) => {
    qspCall(s, 'npcgeneratec', '', 0, 'Senior citizen', Math.floor(Math.random() * 21) + 60, Math.floor(Math.random() * 2) + 3, 1);
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'npcgeneratec', '', 0, 'Senior citizen', Math.floor(Math.random() * 21) + 60, Math.floor(Math.random() * 2) + 3, 1);
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/sex/foreplayold.jpg');
    scene.text('"Don\'t worry, girl. We\'ll take good care of you…," one of them says in a calm manner as they approach you.');
    scene.text('You flinch instinctively as they start undressing you. "Look at this body… You\'ve caught us a real nice one here…"');
    scene.text('One of them suddenly kneels in front of you and slowly starts rubbing your thighs before he starts licking your clit as the other starts making out with you.');
    scene.text('He kisses you softly on the lips before he shoves his tongue into your mouth, the taste of stale smoke and cheap vodka making you feel sick.');
    qspCall(s, 'arousal', 'foreplay', 10, ((s as any).npcID ?? 0), 'group', 'sub');
    qspCall(s, 'arousal', 'kiss', (-10), ((s as any).npcID ?? 0), 'group', 'sub');
    qspCall(s, 'arousal', 'cuni', (-10), ((s as any).npcID1 ?? 0), 'group', 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/sex/bjold.jpg');
    scene.text('With hunger in their eyes, they tell you to kneel down and start serving them. You comply and start sucking one of them while jerking the other off.');
    scene.text('Both the men start grunting straight away as they have you switch back and forth between sucking and jerking them off.');
    scene.text('"Now it\'s time to have our fun with that little pussy…" you hear one of them say as they both back away.');
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID ?? 0), 'group', 'sub');
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID1 ?? 0), 'group', 'sub');
    qspCall(s, 'arousal', 'hj', (-5), ((s as any).npcID ?? 0), 'group', 'sub');
    qspCall(s, 'arousal', 'hj', (-5), ((s as any).npcID1 ?? 0), 'group', 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Have sex', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/sex/sexold.jpg');
    scene.text('They have you get on your knees as they move in behind you and slowly start teasing you.');
    scene.text('As you turn your head around, you see one of them spit in his hand and lube his cock before you feel it sliding into your pussy.');
    scene.text('As he starts fucking you, the other man steps in front of you and shoves his cock down your throat. "If I have to wait my turn, then I might as well get my cock sucked…"');
    scene.text('After a while, they pull out and switch positions, the second man being a bit more aggressive as he fucks your pussy hard.');
    qspCall(s, 'arousal', 'bj', 8, ((s as any).npcID ?? 0), 'group', 'sub', 'deepthroat');
    qspCall(s, 'arousal', 'bj', 2, ((s as any).npcID1 ?? 0), 'group', 'sub', 'deepthroat');
    qspCall(s, 'arousal', 'vaginal', (-2), ((s as any).npcID ?? 0), 'group', 'sub');
    qspCall(s, 'arousal', 'vaginal', (-8), ((s as any).npcID1 ?? 0), 'group', 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let them cum', handler: (st: GameState) => {
    scene.img('images/locations/city/centralpark/cafe/sex/finishold.jpg');
    scene.text('"Are you satisfied?" the man getting sucked off asks the other.');
    scene.text('The other man only lets out short grunts as he pulls out and smoves round in front of you. "Let\'s cover this bitch\'s face."');
    scene.text('It doesn\'t take long before you feel their cum splattering over your face.');
    scene.text('"You\'ve paid off your debt, so you\'re free to go," one of them says and points towards the shrubbery as they return to their bottle and start drinking.');
    qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0));
    qspCall(s, 'cum_call', 'face', ((s as any).npcID1 ?? 0));
    qspCall(s, 'fame', 'city', 'sex', 3);
    qspCall(s, 'stat', '');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Return to the café', goto: ['parkKafe', 'end', '\'cafe\''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Flip them off', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/reply.jpg');
    scene.text('"Eat shit, you old pervs!" you yell as you take a step back.');
    scene.text('"Come on, girl! You need to repay us!"');
    scene.text('His cock is flopping around as he takes a step closer to you.');
    scene.text('You flip them off and throw the bottle. It shatters on the ground as you start running away.');
    scene.text('"You fucking bitch!" you hear them yell after you.');
    scene.actions([
      { label: 'Return to the café', goto: ['parkKafe', 'end', '\'cafe\''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Reject', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/reply.jpg');
    scene.text('You\'ll forgive me if I don\'t feel safe going somewhere with a complete stranger," you reply.');
    scene.text('He seems almost offended by your rejection. "Stupid girl! Fine! Drink this piss water then. I don\'t care."');
    scene.text('He stomps away angrily as you wonder what his real intentions were. Nothing good by the sounds of it…');
    scene.actions([
      { label: 'Go back to your table', goto: ['parkKafe', 'end'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterMan(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).pcs_hotcat ?? 0) >= 6) {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    scene.img('images/locations/city/centralpark/cafe/drink.jpg');
    scene.text('You suddenly feel the familiar sensation of someone observing you, their eyes locked to your back.');
    scene.text('Intrigued, you nonchalantly turn around. To your dismay, you\'re not able to recognize who it might have been.');
    scene.text('The bartender then suddenly appears and places a drink down in front of you.');
    scene.text('"What\'s this? I didn\'t order this," you say with a puzzled stare.');
    scene.text('The bartender smiles. "It\'s from the gentleman over there." He nods towards a slightly older man.');
    scene.actions([
      { label: 'Politely thank him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/parkcafe.jpg');
    scene.text('You look over towards the man, smile, and politely nod your thanks to him.');
    scene.text('The man probably expected a different outcome, but there\'s nothing he can do except smile and nod back.');
    scene.actions([
      { label: 'Go back to your own', goto: ['parkKafe', 'end', '\'cafe\''] },
    ]);
  } },
      { label: 'Walk over to him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 25;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/walkover.jpg');
    scene.text('Not wanting to be rude, you grab the drink and head towards his table. As you near the table you notice the man stiffen a little.');
    scene.text('"Thanks for the drink," you say as you pull out a chair and take a seat. "Mind if I take a seat?"');
    scene.text('The man relaxes a little and smiles confidently before nodding. "Of course. I\'m glad you wanted to come over…"');
    scene.text('"Why\'s that?"');
    scene.text('"I\'m here on business for the first time. I heard this city had lots of beautiful women and I\'m pleased to say that I\'m not disappointed," he replies.');
    scene.text('The two of you continue talking with each other and you find that he\'s quite flirty and charming.');
    scene.text('"My company provided me with an apartment. Shall we continue this there?" he asks with a knowing grin.');
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 25;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/agree.jpg');
    scene.text('You give him a flirty smile. "I guess I\'m down for a little fun…"');
    scene.text('He smiles. "I\'m sure we\'ll have a great time. I know I will with a a beauty like you!"');
    scene.text('Before you know it, the two of you are standing in front of his apartment and he leads you inside.');
    scene.actions([
      { label: 'Head into his apartment', handler: (st: GameState) => {
    scene.img('images/locations/city/centralpark/cafe/sex/kissing1.jpg');
    scene.text('As soon as you enter the apartment, he\'s all over you, eagerly undressing you as he passionately kisses you.');
    scene.text('His lips are surprisingly soft as they lock with yours and he gently slips in his tongue. Your mind is going all over the place as you feel his hands sliding down your body and stopping at your thighs. He then teasingly moves his hand inwards, causing you to let out a soft moan.');
    scene.text('You can feel yourself getting wet as he continues to tease you.');
    qspCall(s, 'arousal', 'kiss', 5);
    qspCall(s, 'arousal', 'foreplay', (-5));
    qspCall(s, 'stat', '');
    if (((s as any).stat ?? 0)?.['vaginal'] === 0) {
      scene.actions([
        { label: 'Stop, I\'m a virgin', handler: (st: GameState) => {
    scene.img('images/locations/city/centralpark/cafe/sex/kissing2.jpg');
    scene.text('You suddenly snap back to reality and hastily push him away. "Wait, I\'m a virgin!"');
    scene.text('Your words seem to have had the opposite effect on him as he slyly grins. "Oh, is that so? That makes me even harder… The last virgin I was with was my wife…"');
    scene.text('He goes back to kissing your neck and playing with your breasts, which arouses you further.');
    qspCall(s, 'arousal', 'kiss', 5);
    qspCall(s, 'arousal', 'foreplay', (-5));
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'sex', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Stop! [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Stop! [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'willpower', 'sex', 'resist');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/sex/kissing2.jpg');
    scene.text('"Stop!" you yell. "I can\'t do this! I\'m sorry, but I don\'t want to lose my virginity with you…"');
    scene.text('The man quickly stops and backs away from you. "Okay, I\'m not going to force you to do anything you don\'t want…"');
    scene.text('Your eyes tear up a little as the embarrassment hits you. "I need to go…"');
    scene.text('You swiftly redress yourself and head towards the door. You take one last look at the man, who looks rather displeased…');
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Give in', handler: (st: GameState) => {
    scene.img('images/locations/city/centralpark/cafe/sex/cuni.jpg');
    scene.text('You know that you shouldn\'t be doing this, but you\'re not able to hold back.');
    scene.text('"I want you to be my first…" you meekly say as you look into his eyes.');
    scene.text('The man grins. "I\'ll gladly be your first," he says as he kisses you again. His hand gently touches your clit, which makes you even wetter. "I don\'t usually do this, but since I\'m taking your virginity…"');
    scene.text('He slides down and his tongue starts playing with your clit. He knows what he\'s doing and you can\'t believe how good it feels. Your whole body is tense, though, and you don\'t know what you should be doing…');
    qspCall(s, 'arousal', 'cuni', 10);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep going', handler: (st: GameState) => {
    scene.img('images/locations/city/centralpark/cafe/sex/cuni1.jpg');
    scene.text('"D… fe… od…"');
    scene.text('You can barely make out his muffled voice as he eats you out and can\'t contain yourself as you suddenly orgasm inside his mouth. Your body goes numb with pleasure and you don\'t want the feeling to stop…');
    scene.text('You\'re panting hard as your senses return. "That was amazing…"');
    scene.text('"You came quite hard there," he winks.');
    qspCall(s, 'arousal', 'cuni', 10);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Reward him', handler: (st: GameState) => {
    scene.img('images/locations/city/centralpark/cafe/sex/virginsex.jpg');
    scene.text('You have him stand up, exposing his hard cock.');
    scene.text('"Wow!" you gasp.');
    scene.text('He turns you over and has you lift up your ass. "Just look at you…"');
    scene.text('"Don\'t worry. I\'ll break you in slow," he comments as he slowly enters your pussy from behind, your whole body stiffening as something unknown enters it.');
    scene.text('"You feeling okay?" he asks.');
    scene.text('You nod and he grabs your hips before pushing a little further, a bolt of pain suddenly shooting through you as your virgin pussy stretches out for his cock.');
    scene.text('It\'s a strange and slightly painful sensation that you both love and hate, but in the end, the arousal takes over as you manage to endure the pain and start enjoying yourself as he slowly starts thrusting into you.');
    qspCall(s, 'arousal', 'vaginal', 10);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Cum inside me', handler: (st: GameState) => {
    qspCall(s, 'cum_call', '', '');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/sex/cuminside.jpg');
    scene.text('After a few minutes, he starts grunting as his thrusts become more rapid. "Your pussy is too tight! I\'m going to cum!"');
    scene.text('You\'re enjoying yourself so much that you don\'t even care if he cums inside you. Taking your silence as consent, his cock suddenly starts twitching inside you as you feel something warm and sticky start filling your now deflowered pussy.');
    scene.text('He thrusts one final time before pulling out of you, your pussy suddenly feeling empty as he taps his spent cock on your ass.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(s, 'mood', 'raise', 'large');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/sex/finished.jpg');
    scene.text('He leans in and kisses you as his cum dribbles out of you and runs down your leg. "You were great for it being your first time."');
    scene.text('You blush as it hits you that you\'ve just lost your virginity. "I\'m glad I lost it to you. It was amazing…"');
    scene.text('The two of you get dressed and chat a little before you decide to leave.');
    scene.text('"I had a great time," you say as you wink.');
    scene.text('"Me too! They didn\'t lie about the girls here," he replies with a smile.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
    ]);
  } },
    ]);
  } },
      { label: 'Pull out', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'stomach');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/sex/cumoutside.jpg');
    scene.text('After a few minutes, he starts grunting as his thrusts become more rapid. "Your pussy is too tight! I\'m going to cum!"');
    scene.text('As much as you\'re enjoying it, you don\'t want to risk getting pregnant during your first time.');
    scene.text('"P-pull out…" you manage to say in between your moans.');
    scene.text('He pulls out and you roll onto your back as he jerks his cock. A few seconds later, his cum splatters all over your stomach.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(s, 'mood', 'raise', 'large');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/sex/finished.jpg');
    scene.text('Once he\'s finished, he leans in and kisses you. "You were great for it being your first time…"');
    scene.text('You blush as it hits you that you\'ve just lost your virginity, "I\'m glad I lost it to you. It was amazing…"');
    scene.text('The two of you get dressed and chat a little before you decide to leave.');
    scene.text('"I had a great time," you say as you wink.');
    scene.text('"Me too! They didn\'t lie about the girls here," he replies with a smile.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
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
      { label: 'Keep going', handler: (st: GameState) => {
    scene.img('images/locations/city/centralpark/cafe/sex/bj.jpg');
    scene.text('"I see that you\'re all good to go. Now get me ready too," he exclaims as he takes a seat.');
    scene.text('You scoot over and start licking the tip of his cock before wrapping your lips around his shaft and taking it into your mouth.');
    scene.text('He throws his head back and lets out a grunt as you pick up the pace. "Easy now, girl! Do you want me to cum so soon?"');
    scene.text('You pop his cock out of your mouth and smile up at him.');
    scene.text('"Tell me how you want me to fuck you," he grins.');
    qspCall(s, 'arousal', 'bj', 10, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Missionary style', handler: (st: GameState) => {
    scene.img('images/locations/city/centralpark/cafe/sex/mission.jpg');
    scene.text('"Will you fuck me missionary?" you ask.');
    scene.text('Without any hesitation, he has you on your back and you moan softly as his cock stretches your pussy and slides inside you.');
    scene.text('"Fuck, your pussy feels great!" he says as he starts thrusting.');
    scene.text('He reaches just the right spot and you\'re soon near an orgasm, letting him know that by almost screaming out that he should continue fucking you just like that.');
    scene.text('Before you know it, your inner walls clamp down around his cock and your body starts shaking as you orgasm hard.');
    scene.text('He gives you a small breather before he continues fucking you rapidly, and recognizing the usual grunts, you know what\'s about to happen…');
    qspCall(s, 'arousal', 'vaginal', 15);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Cum inside me', handler: (st: GameState) => {
    qspCall(s, 'cum_call', '', '');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/sex/cuminside.jpg');
    scene.text('After a few minutes, he starts grunting as his thrusts become more rapid. "I\'m going to cum!"');
    scene.text('You\'re enjoying yourself so much that you don\'t even care if he cums inside you. Taking your silence as consent, his cock suddenly starts twitching inside you as you feel his cum start filling your pussy.');
    scene.text('He thrusts one final time before pulling out and tapping his spent cock on your pussy.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(s, 'mood', 'raise', 'large');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/sex/finished.jpg');
    scene.text('He leans in and kisses you as you spread your legs and let his cum dribble out of your pussy. "You were great. Talk about getting lucky with my first try…"');
    scene.text('You chuckle. "Lucky for you, you were also good."');
    scene.text('The two of you get dressed and chat a little before you decide to leave,');
    scene.text('"I had a great time," you say as you wink.');
    scene.text('"Me too! They didn\'t lie about the girls here," he replies with a smirk.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
    ]);
  } },
    ]);
  } },
      { label: 'Pull out', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'stomach');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/sex/cumoutside.jpg');
    scene.text('After a few minutes, he starts grunting as his thrusts become more rapid. "Your pussy is too tight! I\'m going to cum!"');
    scene.text('"P-pull out…" you manage to say in between your moans.');
    scene.text('He pulls out and jerks his cock. A few seconds later, his cum splatters all over your stomach.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(s, 'mood', 'raise', 'large');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/sex/finished.jpg');
    scene.text('Once he\'s finished, he leans in and kisses you one last time. "You were great. Talk about getting lucky with my first try…"');
    scene.text('You chuckle. "Lucky for you, you were also good."');
    scene.text('The two of you get dressed and chat a little before you decide to leave.');
    scene.text('"I had a great time," you say as you wink.');
    scene.text('"Me too! They didn\'t lie about the girls here," he replies with a smirk.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Tell him you want to spoon', handler: (st: GameState) => {
    scene.img('images/locations/city/centralpark/cafe/sex/spoon.jpg');
    scene.text('You lay with your back to him and tuck yourself in as he teases your slit with his hard cock.');
    scene.text('You let out a soft moan when he pushes his cock inside you and starts slowly thrusting. Your moans get louder as he picks up his pace.');
    scene.text('He then really picks up the pace and it doesn\'t take long before you reach climax. You forget all about him as your pussy walls clamp down around his cock and you have an amazing orgasm.');
    scene.text('He gives you a small breather before he continues fucking you rapidly. You recognize the usual grunts, so you know what\'s about to happen…');
    qspCall(s, 'arousal', 'vaginal', 15);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Cum inside me', handler: (st: GameState) => {
    qspCall(s, 'cum_call', '', '');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/sex/cuminside.jpg');
    scene.text('He keeps fucking you as his grunts are getting more frequently, "I\'m cumming…"');
    scene.text('You\'re enjoying yourself so much that you don\'t even care if he cums inside you. Taking your silence as consent, his cock suddenly starts twitching inside you as you feel his cum start filling your pussy.');
    scene.text('He thrusts one final time before pulling out, leaving your pussy feeling empty.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(s, 'mood', 'raise', 'large');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/sex/finished.jpg');
    scene.text('He leans in and kisses you as his cum dribbles out of your pussy. "You were great. Talk about getting lucky with my first try…"');
    scene.text('You chuckle. "Lucky for you, you were also good."');
    scene.text('The two of you get dressed and chat a little before you decide to leave.');
    scene.text('"I had a great time," you say as you wink.');
    scene.text('"Me too! They didn\'t lie about the girls here," he replies with a smirk.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
    ]);
  } },
    ]);
  } },
      { label: 'Pull out', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'stomach');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/sex/cumoutside.jpg');
    scene.text('After a few minutes, he starts grunting as his thrusts become more rapid. "Your pussy is too tight! I\'m going to cum!"');
    scene.text('"P-pull out…" you manage to say in between your moans.');
    scene.text('He pulls out and gets up on his knees as he jerks his cock. A few seconds later, his cum splatters all over your stomach.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(s, 'mood', 'raise', 'large');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/sex/finished.jpg');
    scene.text('Once he\'s finished, he leans in and kisses you one last time. "You were great. Talk about getting lucky with my first try…"');
    scene.text('You chuckle. "Lucky for you, you were also good."');
    scene.text('The two of you get dressed and chat a little before you decide to leave.');
    scene.text('"I had a great time," you say as you wink.');
    scene.text('"Me too! They didn\'t lie about the girls here," he replies with a smirk.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Tell him you want to ride him', handler: (st: GameState) => {
    scene.img('images/locations/city/centralpark/cafe/sex/reversecow.jpg');
    scene.text('"Let me take care of you," you slyly smile as you turn your back to him and mount him, letting out a moan as you lower yourself onto his cock.');
    scene.text('You start bouncing on his cock as he grabs your breasts. "Just like that, girl! You\'re fucking amazing!"');
    scene.text('You soon find the right pace and moan loudly as you hammer yourself up and down on his cock. You don\'t care that you\'ve just met him, you\'re going to orgasm and there\'s no one to stop you.');
    scene.text('A few seconds later, you slam down on his cock once more and feel your inner walls clamp down around him as your legs shake, barely able to support you as your orgasm rocks your body.');
    scene.text('You take a small breather before continuing. It doesn\'t take long before you recognize the usual grunts and know what awaits…');
    qspCall(s, 'arousal', 'vaginal', 15, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Cum inside me', handler: (st: GameState) => {
    qspCall(s, 'cum_call', '', '');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/sex/reversecow.jpg');
    scene.text('You continue bouncing on his cock as his grunts become more frequent. "I\'m cumming…" he groans.');
    scene.text('You\'re enjoying yourself so much that you don\'t even care if he cums inside you. You keep riding him until you feel his cock twitching inside you and his cum starts filling your pussy.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(s, 'mood', 'raise', 'large');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/sex/finished.jpg');
    scene.text('Once he\'s finished, you lift yourself off of him and flop down on the sofa as he leans in and kisses you. You can feel his cum dribbling out of your pussy.');
    scene.text('"You were great," he pants. "Talk about getting lucky with my first try…"');
    scene.text('You chuckle. "Lucky for you, you were also good."');
    scene.text('The two of you get dressed and chat a little before you decide to leave.');
    scene.text('"I had a great time," you say as you wink.');
    scene.text('"Me too! They didn\'t lie about the girls here," he replies with a smirk.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
    ]);
  } },
    ]);
  } },
      { label: 'Pull out', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'stomach');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/sex/cumoutside.jpg');
    scene.text('You continue bouncing on his cock as his grunts become more frequent. "I\'m cumming!"');
    scene.text('You quickly pull yourself off of him and flop down on the sofa. Barely a few seconds later, his cum suddenly splatters all over your stomach.');
    scene.text('"That was close…" he pants. "At least I won\'t have any kids showing up at my door."');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(s, 'mood', 'raise', 'large');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/sex/finished.jpg');
    scene.text('He leans in and kisses you one last time. "You were great. Talk about getting lucky with my first try…"');
    scene.text('You chuckle. "Lucky for you, you were also good."');
    scene.text('The two of you get dressed and chat a little before you decide to leave.');
    scene.text('"I had a great time," you say as you wink.');
    scene.text('"Me too! They didn\'t lie about the girls here," he replies with a smirk.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
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
      { label: 'Reject him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/argue.jpg');
    scene.text('Your smile quickly turns into a frown. "I might be beautiful, but I\'m not dumb."');
    scene.text('The man, noticing that he messed up, tries to save the situation. "That came out wrong! I didn\'t mean it like that!"');
    scene.text('"I see that ring on your finger," you tell him. "Go back to your wife instead of chasing girls, jerk!"');
    scene.actions([
      { label: 'Leave', goto: ['parkKafe', 'end', '\'cafe\''] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    scene.text('You stealthily glance at the man, but he doesn\'t seem to be that interested in you.');
    scene.actions([
      { label: 'Leave', goto: ['parkKafe', 'end', '\'cafe\''] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterWoman(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/centralpark/cafe/girl1.jpg');
  scene.text('As you take a seat by your table, you notice a younger woman playing with her freshly ordered food. She doesn\'t really seem too impressed by it and looks around, as if looking for something…');
  scene.text('She spots you looking her way and makes eye contact. You\'re not really sure why she\'s so keen on getting your attention.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Make eye contact', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/sex/girl2.jpg');
    scene.text('You meet her gaze and she subtlety signals with her eyes that you should take a look farther down as she slyly smiles.');
    scene.text('Your eyes slowly scan down her body as she spreads her legs. To your surprise, she\'s not wearing any panties, giving you a full view of her shaved pussy.');
    scene.text('You automatically turn red out of embarrassment, but she just laughs it off and goes back to playing with her food.');
    qspCall(s, 'arousal', 'erotic_nudity', 5, 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['parkKafe', 'end', '\'cafe\''] },
    ]);
  } },
    { label: 'Look away', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/girl1.jpg');
    scene.text('Not knowing what she wants, you look away and avoid making eye contact.');
    scene.text('Upon seeing that you\'re not budging, she quickly gives up and goes back to playing with her food.');
    scene.actions([
      { label: 'Leave', goto: ['parkKafe', 'end', '\'cafe\''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterYouth(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/centralpark/cafe/drinking.jpg');
  if (((s as any).pcs_hotcat ?? 0) < 6) {
    scene.text('You look at the group of snickering youths, but they don\'t pay attention to you and are mostly ignoring everyone around them.');
    scene.actions([
      { label: 'Leave', goto: ['parkKafe', 'end', '\'cafe\''] },
    ]);
  } else {
    scene.text('As you take a seat, you notice a loud group of young people. Judging by the bottles on their table, you can tell that they\'ve been drinking for a while.');
    scene.text('As you\'re waiting to be served, you notice that some of them look at and then point towards you and whisper something.');
    scene.text('One of the group, a young woman, then approaches you, clearly tipsy from alcohol. "Me… Me and my… friends were wondering if you would like to… Like to join us?"');
    scene.text('She turns around and looks towards her friends before turning back to you and leaning into your personal space. "Listen, I was… dared to come over to talk to you and…" She cuts herself off, clearly having forgotten what she wanted to say. "So what do you say?! I promise it\'s nothing… nothing dangerous…"');
    qspCall(s, 'willpower', 'misc', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Decline [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Decline [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/parkcafe.jpg');
    scene.text('You look her in the eyes. "I\'m not interested…"');
    scene.text('Her body slumps a little. "Can I… Can I convince you… In any way?"');
    scene.text('You shake your head. "I\'m pretty sure that I don\'t want to partake in whatever it is you have planned."');
    scene.text('"Too bad… We would\'ve had lots of fun…" she says before she staggers back to her friends and tells them the bad news.');
    scene.text('They barely pay any attention to her and start partying once again as if nothing had happened.');
    scene.actions([
      { label: 'Return to what you were doing', goto: ['parkKafe', 'end', '\'cafe\''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Tag along', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/join.jpg');
    scene.text('You smile and nod. "Sure!"');
    scene.text('The girl squeals and hugs you before she quickly grabs your hand and drags you along to the group.');
    scene.text('"I did my part!" she yells out as the two of you sit down amongst the rest of the group.');
    scene.text('The others greet you. "Thanks for joining us. How much has she said?"');
    scene.text('"Not much!" the girl drunkenly yells. "I just said… it was a dare, but I haven\'t told her… about the next part!"');
    scene.text('You look at them suspiciously. "The next part?"');
    scene.text('They start to snicker. "The next part is quite simple. We want the two of you to walk around the park and give us a little show."');
    scene.text('"What kind of show?"');
    scene.text('They look at you like you\'re an idiot. "To fuck of course!"');
    scene.actions([
      { label: 'Decline', handler: (st: GameState) => {
    qspCall(s, 'mood', 'lower', 'medium');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/angry.jpg');
    scene.text('"You want us to do <i>what</i>?!" you angrily reply.');
    scene.text('"Calm down, it\'s just for fun!"');
    scene.text('"Do I look like some cheap whore to you?!" you yell back.');
    scene.text('Before they\'re able to answer, you jump up and head back to your table, fuming at what they just wanted you to do.');
    scene.actions([
      { label: 'Return to your table', goto: ['parkKafe', 'end', '\'cafe\''] },
    ]);
  } },
      { label: 'Accept', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'mood', 'raise', 'small');
    qspCall(s, 'underwear', 'remove');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/smile.jpg');
    scene.text('"That\'s all you wanted us to do?" you ask. "What are we waiting for? Let\'s go!"');
    scene.text('"Wait!" one of the group shouts. "Before you run off, hand over your panties!"');
    scene.text('The two of you quickly take them off and throw them on the table before you drag her outside.');
    scene.text('The girl is having a hard time keeping up as she\'s still tipsy. "Wait up! I can\'t go on! We should find a spot here."');
    scene.text('The rest of the group is shouting and hollering as they watch the two of you.');
    scene.actions([
      { label: 'Pick the bench', handler: (st: GameState) => {
    qspCall(s, 'flash', 'full', 'outdoors', 4, 1);
    qspCall(s, 'fame', 'city', 'sex', 3);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/sex/bench1.jpg');
    scene.text('"How about that bench over there?" you ask and point towards a bench right across from the rest of the group.');
    scene.text('At first, you\'re both careful and scared of showing yourselves off, but your worries hastily disperse as the two of you start flaunting your bodies.');
    scene.text('You both reveal one body part after another, passersby gawking at the two of you, but you pay little attention towards them.');
    scene.text('As you keep teasing each other, the girl slyly smiles. "How about we give them a show they\'ll never forget?"');
    scene.actions([
      { label: 'Start making out', handler: (st: GameState) => {
    scene.img('images/locations/city/centralpark/cafe/sex/bench2.jpg');
    scene.text('She leans in and presses her lips against yours. You start making out, which excites all those that are eyeing you.');
    scene.text('You forget that you\'re outside and exposed as you shut off from the rest of the world, only focusing on her.');
    scene.text('"You taste great…" you tell her as she backs off and looks lustfully at you.');
    scene.text('"This is only the start…" she whispers.');
    qspCall(s, 'arousal', 'flash', 5, 'exhibitionism', 'lesbian', 'humiliation');
    qspCall(s, 'arousal', 'kiss', (-5), 'exhibitionism', 'lesbian', 'humiliation');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Play with your breasts', handler: (st: GameState) => {
    scene.img('images/locations/city/centralpark/cafe/sex/bench3.jpg');
    scene.text('She slowly slides down your body, stopping at your exposed breasts. She starts playing with them and slowly teases your nipples.');
    scene.text('Her finger gently touches your already hard nipple.');
    scene.text('"Aren\'t you excited?" she teasingly asks. "Let me taste you…"');
    scene.text('As she utters those words, she sticks out her tongue and starts licking your nipples, her warm breath making you even more excited. When she starts sucking and biting on your nipple, you can barely keep your composure.');
    qspCall(s, 'arousal', 'flash', 5, 'exhibitionism', 'lesbian', 'humiliation');
    qspCall(s, 'arousal', 'massage', (-5), 'exhibitionism', 'lesbian', 'humiliation');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'She goes down on you', handler: (st: GameState) => {
    scene.img('images/locations/city/centralpark/cafe/sex/bench4.jpg');
    scene.text('"Turn around!"" she commands.');
    scene.text('She spreads your cheeks and starts slowly licking your asshole, causing you to gasp.');
    scene.text('It doesn\'t take long before you slowly feel the tip of her tongue enter your asshole. She presses deeper and you can\'t help but moan loudly before she suddenly pulls back.');
    scene.text('"Do you think that we gave them a good show?" she smiles before dressing herself and running back to the hysterical group.');
    qspCall(s, 'arousal', 'flash', 5, 'exhibitionism', 'lesbian', 'humiliation');
    qspCall(s, 'arousal', 'rimming', (-5), 'exhibitionism', 'lesbian', 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Return to the group', handler: (st: GameState) => {
    qspCall(s, 'underwear', 'wear');
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/join.jpg');
    scene.text('When you return to the group, the girl has already started asking if they were pleased with the show and if you\'ve managed to complete the dare.');
    scene.text('The group is still flabbergasted as they didn\'t expect it to play out the way it did, but are very pleased with the show.');
    scene.text('The next few minutes are spent putting your panties back on and chatting with the rest of the group. You can hear the girl describe how good you taste.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Walk away', goto: ['parkKafe', 'end', '\'cafe\''] },
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
      { label: 'Pick the lawn', handler: (st: GameState) => {
    qspCall(s, 'flash', 'full', 'outdoors', 4, 1);
    qspCall(s, 'fame', 'city', 'sex', 3);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/sex/lawn1.jpg');
    scene.text('"How about right here on the lawn?" You point towards a patch of grass hidden from the café, but still visible to the group.');
    scene.text('At first, you\'re both careful and scared of showing yourselves off, but your worries hastily disperse as the two of you start flaunting your bodies.');
    scene.text('You both reveal one body part after another, passersby gawking at the two of you, but you pay little attention towards them.');
    scene.text('As you keep teasing each other, the girl slyly smiles. "How about we give them a show they\'ll never forget?"');
    scene.actions([
      { label: 'Start making out', handler: (st: GameState) => {
    scene.img('images/locations/city/centralpark/cafe/sex/lawn2.jpg');
    scene.text('She leans in and presses her lips onto yours. You start making out, which excites all those that are eying you.');
    scene.text('You forget that you\'re outside and exposed as you shut off from the rest of the world, only focusing on her.');
    scene.text('"You taste great…" you tell her as she backs off and looks lustfully at you.');
    scene.text('"This is only the start," she whispers.');
    qspCall(s, 'arousal', 'flash', 5, 'exhibitionism', 'lesbian', 'humiliation');
    qspCall(s, 'arousal', 'kiss', (-5), 'exhibitionism', 'lesbian', 'humiliation');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Play with your breasts', handler: (st: GameState) => {
    scene.img('images/locations/city/centralpark/cafe/sex/lawn3.jpg');
    scene.text('She slowly slides down your body, stopping at your exposed breasts. She starts playing with your right breast by softly teasing your hard nipple.');
    scene.text('"Aren\'t you excited?" she teasingly says. "Let me taste you…"');
    scene.text('As she utters those words, she sticks out her tongue and starts licking your nipples, her warm breath making you even more excited. When she starts sucking and biting on your nipple, you can barely keep your composure.');
    qspCall(s, 'arousal', 'flash', 5, 'exhibitionism', 'lesbian', 'humiliation');
    qspCall(s, 'arousal', 'massage', (-5), 'exhibitionism', 'lesbian', 'humiliation');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Return to the group', handler: (st: GameState) => {
    qspCall(s, 'underwear', 'wear');
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/join.jpg');
    scene.text('You let out a moan, but before it escalates any further, she stops and smiles. "Can\'t have too much fun."');
    scene.text('You frown, feeling like you\'ve been robbed, but the girl has already dressed herself and ran back towards the group.');
    scene.text('When you return to the group, the girl has already started asking if they were pleased with the show and if you\'ve managed to complete the dare.');
    scene.text('The group is still flabbergasted as they didn\'t expect it to play out the way it did, but are very pleased with the show.');
    scene.text('The next few minutes are spent putting your panties back on and chatting with the rest of the group. At the same time, you can hear the girl describe how good you taste.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Walk away', goto: ['parkKafe', 'end', '\'cafe\''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Pick the gazebo', handler: (st: GameState) => {
    qspCall(s, 'flash', 'full', 'outdoors', 4, 1);
    qspCall(s, 'fame', 'city', 'sex', 3);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/sex/gazebo1.jpg');
    scene.text('The two of you look around, trying to figure out where you can perform the dare.');
    scene.text('"How about in the gazebo?" she asks before she grabs your hand and leads you towards it.');
    scene.text('"Will the others be able to see us there?" you ask, but she just ignores you.');
    scene.text('At first, you\'re both careful and scared of showing yourselves off, but your worries hastily disperse as the two of you start flaunting your bodies. There\'s an older gentleman walking around, but you don\'t pay too much attention towards him.');
    scene.text('As you keep teasing each other, the girl slyly smiles. "How about we give the old man a little show?"');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Play with your breasts', handler: (st: GameState) => {
    scene.img('images/locations/city/centralpark/cafe/sex/gazebo2.jpg');
    scene.text('She slowly slides down your body, stopping at your exposed breasts. She starts playing with your right breast by slowly teasing your hard nipple.');
    scene.text('"Aren\'t you excited?" she teasingly says. "Let me taste you…"');
    scene.text('As she utters those words, she sticks out her tongue and starts licking your nipples, her warm breath making you even more excited. When she starts sucking and biting on your nipple, you can barely keep your composure.');
    scene.text('You let out a loud moan and the older gentleman stops in his tracks. He stares at the two of you while trying to figure out what\'s going on.');
    qspCall(s, 'arousal', 'flash', 5, 'exhibitionism', 'lesbian', 'humiliation');
    qspCall(s, 'arousal', 'massage', (-5), 'exhibitionism', 'lesbian', 'humiliation');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Play with her breasts', handler: (st: GameState) => {
    scene.img('images/locations/city/centralpark/cafe/sex/gazebo3.jpg');
    scene.text('She quickly raises her head. "Wait, the old man is looking at us!"');
    scene.text('You\'re too into it now, though, and start playing with her breast.');
    scene.text('You tease her by gently licking her nipple. She lets out a muffled moan, but remains composed.');
    scene.text('Wanting to break her, you slide your hand towards her exposed pussy. When you reach her clit, you slowly start massaging it, which makes her moan loudly.');
    scene.text('You start thinking about your next move when the old man suddenly walks up to the gazebo.');
    scene.text('"What on Earth do you think you are you doing?!" he yells. "This is a <i>public</i> area! This is not the place for this kind of… debauchery!"');
    qspCall(s, 'arousal', 'flash', 5, 'exhibitionism', 'lesbian', 'humiliation');
    qspCall(s, 'arousal', 'massage_give', (-5), 'exhibitionism', 'lesbian', 'dom');
    qspCall(s, 'arousal', 'clit_finger_give', (-5), 'exhibitionism', 'lesbian', 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Return to the group', handler: (st: GameState) => {
    qspCall(s, 'underwear', 'wear');
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/join.jpg');
    scene.text('"What\'s your problem, old man? Just enjoy the show!" the girl says before the two of you dress yourselves and run off giggling as he yells after you.');
    scene.text('When you return, the girl starts telling the group what happened and that you managed to complete the dare. They sit in awe as the two of you tell them about the old man that interrupted you.');
    scene.text('The next few minutes are spent putting your panties back on and chatting with the rest of the group when the old man suddenly passes by.');
    scene.text('"There he is!" the girl exclaims and points at him.');
    scene.text('The group start making a lot of noise, laughing as the man passes by.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Walk away', goto: ['parkKafe', 'end', '\'cafe\''] },
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
  // TODO-QSP: end
  scene.build();
}

function enterBlacks(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A82', 'like');
  qspCall(s, 'stat', '');
  if (((s as any).DjibrilQW ?? 0)?.['meet'] === 1  &&  ((s as any).npc_had_sex ?? 0)?.['A82'] >= 1  &&  ((s as any).DjibrilQW ?? 0)?.['african_gangbang'] === 0) {
    scene.img('images/locations/city/centralpark/cafe/djibril1.jpg');
    scene.text('Djibril gives you a huge grin and waves you over. You don\'t want to be rude, so you get up to walk over to their table.');
    scene.text('As you approach, Djibril speaks and gestures to each of the others as he says their names. Some smile, or wave, while others look at you with that hungry sexual look.');
    // TODO-QSP: dynamic text: "Hello again, <<$pcs_nickname>>. This is my dorm roommate, Farai. The rest are f...
    scene.text(`"Hello again, ${((s as any).pcs_nickname ?? 0)}. This is my dorm roommate, Farai. The rest are friends of mine that live in the dorms as well. This is Lebogang, Ermias, Haruna and Arendse."`);
    if (((s as any).npc_had_sex ?? 0)?.['A243'] !== 0  ||  ((s as any).ErmiasQW ?? 0)?.['dorm_bj'] === 1) {
      scene.text('You and Ermias knowingly grin at each other, but the rest of the group don\'t seem to notice.');
    }
    scene.text('After the introductions, Djibril attempts to pull you into his lap.');
    scene.actions([
      { label: 'Pull away', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A82', 'dislike');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/djibril1.jpg');
    scene.text('You pull away from him. "What are you doing?!"');
    scene.text('His friends laugh as he blushes. "Sorry, I just thought after last time… Anyway, we should get going."');
    scene.text('With that, he gets up to head for the door and his friends follow him.');
    scene.actions([
      { label: 'Leave', goto: ['parkKafe', 'end', '\'cafe\''] },
    ]);
  } },
      { label: 'Sit in his lap', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A82', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/africantable2.jpg');
    scene.text('You take a seat on his lap and one of them looks at Djibril.');
    scene.text('"Is this the girl?" he asks and Djibril nods.');
    scene.text('They all smile and start talking to you in an overtly flirty and sexual way before Djibril stops them.');
    scene.text('"We were just about to head back to our dorm and were wondering if you wanted to come back with us for a gangbang? I promise it will be a lot of fun."');
    scene.actions([
      { label: 'Accept', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    if (!(s as any).DjibrilQW) (s as any).DjibrilQW = {}; (s as any).DjibrilQW['invite'] = 1;
    qspCall(s, 'npc_relationship', 'modify', 'A82', 'like');
    qspCall(s, 'npc_relationship', 'modify', 'A242', 'like');
    qspCall(s, 'npc_relationship', 'modify', 'A243', 'like');
    qspCall(s, 'npc_relationship', 'modify', 'A244', 'like');
    qspCall(s, 'npc_relationship', 'modify', 'A245', 'like');
    qspCall(s, 'npc_relationship', 'modify', 'A246', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/walktodorm.jpg');
    scene.text('You smile at them. "Sure, that sounds like fun."');
    scene.text('They share some looks, then smile back at you.');
    scene.text('As you leave, Djibril wraps his arm around your shoulder and walks with you while the rest lead the way. You walk out of the park and board the metro.');
    scene.text('During the trip, they all flatter you by telling you how pretty you are before you finally arrive at the university dorms.');
    scene.actions([
      { label: 'Change your mind', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A82', 'loathe');
    qspCall(s, 'npc_relationship', 'modify', 'A242', 'hate');
    qspCall(s, 'npc_relationship', 'modify', 'A243', 'hate');
    qspCall(s, 'npc_relationship', 'modify', 'A244', 'hate');
    qspCall(s, 'npc_relationship', 'modify', 'A245', 'hate');
    qspCall(s, 'npc_relationship', 'modify', 'A246', 'hate');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/walktodorm.jpg');
    scene.text('When you think about it some more, you decide that you don\'t want to be gangbanged by a bunch of African college guys and pretend to check your phone.');
    scene.text('"Oh, sorry guys, I just noticed the time and I have to go."');
    scene.text('You slip away from Djibril and walk away from them. You don\'t glance back, but you\'re sure they\'re unhappy.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_island', ''] },
    ]);
  } },
      { label: 'Go to dorm', goto: ['djibrilev1', 'djibrilgb'] },
    ]);
  } },
    ]);
  } },
      { label: 'Decline', handler: (st: GameState) => {
    if (!(s as any).DjibrilQW) (s as any).DjibrilQW = {}; (s as any).DjibrilQW['invite'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/reply.jpg');
    scene.text('You shake your head as you get up from your table. "No thank you."');
    scene.text('"Come on, Djibril," one of his friends says. "Let\'s go."');
    scene.text('He glances over at them, then looks back at you. "Sorry, I have to go, but it was nice meeting you again. Have a nice day."');
    scene.text('He turns and leaves to join his friends outside, but stops at the door. "Hey, if you want, why don\'t you stop by my dorm some time?"');
    scene.text('He tells you which building it is and which room is his before he heads outside and walks away with his friends.');
    scene.actions([
      { label: 'Leave', goto: ['parkKafe', 'end', '\'cafe\''] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).DjibrilQW ?? 0)?.['meet'] === 1  &&  ((s as any).DjibrilQW ?? 0)?.['african_gangbang'] > 0) {
      scene.img('images/locations/city/centralpark/cafe/africantable1.jpg');
      scene.text('You notice Djibril sitting with a few other young African men at another table. They see you and start talking amongst themselves. From their constant glances, you\'re sure that they\'re talking about you.');
      // TODO-QSP: dynamic text: Djibril gives you a huge grin and waves you over. "Hello again, <<$pcs_nickname>...
      scene.text(`Djibril gives you a huge grin and waves you over. "Hello again, ${((s as any).pcs_nickname ?? 0)}! We were about to head back to our dorm and were wondering if you'd like to come with us again?"`);
      scene.actions([
        { label: 'Accept', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    if (!(s as any).DjibrilQW) (s as any).DjibrilQW = {}; (s as any).DjibrilQW['invite'] = 1;
    qspCall(s, 'npc_relationship', 'modify', 'A82', 'like');
    qspCall(s, 'npc_relationship', 'modify', 'A242', 'like');
    qspCall(s, 'npc_relationship', 'modify', 'A243', 'like');
    qspCall(s, 'npc_relationship', 'modify', 'A244', 'like');
    qspCall(s, 'npc_relationship', 'modify', 'A245', 'like');
    qspCall(s, 'npc_relationship', 'modify', 'A246', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/walktodorm.jpg');
    scene.text('You smile at them. "Sure, that sounds like fun."');
    scene.text('They share some looks, then smile back at you.');
    scene.text('As you leave, Djibril wraps his arm around your shoulder and walks with you while the rest lead the way. You walk out of the park and board the metro.');
    scene.text('During the trip, they all flatter you by telling you how pretty you are and how good you were last time before you finally arrive at the university dorms.');
    scene.actions([
      { label: 'Change your mind', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A82', 'hate');
    qspCall(s, 'npc_relationship', 'modify', 'A242', 'hate');
    qspCall(s, 'npc_relationship', 'modify', 'A243', 'hate');
    qspCall(s, 'npc_relationship', 'modify', 'A244', 'hate');
    qspCall(s, 'npc_relationship', 'modify', 'A245', 'hate');
    qspCall(s, 'npc_relationship', 'modify', 'A246', 'hate');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/walktodorm.jpg');
    scene.text('When you think about it some more, you decide that you don\'t want to be gangbanged by a bunch of African college guys and pretend to check your phone.');
    scene.text('"Oh, sorry guys, I just noticed the time and I have to go."');
    scene.text('You slip away from Djibril and walk away from them. You don\'t glance back, but you\'re sure they\'re unhappy.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_island', ''] },
    ]);
  } },
      { label: 'Go to dorm', goto: ['djibrilev1', 'djibrilgb'] },
    ]);
  } },
        { label: 'Decline', handler: (st: GameState) => {
    if (!(s as any).DjibrilQW) (s as any).DjibrilQW = {}; (s as any).DjibrilQW['invite'] = 1;
    qspCall(s, 'npc_relationship', 'modify', 'A82', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A242', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A243', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A244', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A245', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A246', 'dislike');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/reply.jpg');
    scene.text('You shake your head as you get up from your table. "No thank you."');
    scene.text('"Come on, Djibril," one of his friends says. "Let\'s go."');
    scene.text('He glances over at them, then looks back at you. "Sorry, I have to go, but it was nice meeting you again. Have a nice day."');
    scene.text('He turns and leaves to join his friends outside, but stops at the door. "Hey, if you want, why don\'t you stop by my dorm some time?"');
    scene.text('He tells you which building it is and which room is his before he heads outside and walks away with his friends.');
    scene.actions([
      { label: 'Leave', goto: ['parkKafe', 'end', '\'cafe\''] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).DjibrilQW ?? 0)?.['meet'] === 1  &&  ((s as any).pcs_hotcat ?? 0) >= 5) {
        if (!(s as any).DjibrilQW) (s as any).DjibrilQW = {}; (s as any).DjibrilQW['invite'] = 1;
        scene.img('images/locations/city/centralpark/cafe/djibril_talk.jpg');
        scene.text('Djibril gives you a huge grin and waves you over. As you approach their table, Djibril speaks and gestures to each of the others as he says their names. Some smile, or wave, while others look at you with that hungry sexual look.');
        // TODO-QSP: dynamic text: "Hello again <<$pcs_nickname>>, this is my dorm roommate, Farai. The rest are fr...
        scene.text(`"Hello again ${((s as any).pcs_nickname ?? 0)}, this is my dorm roommate, Farai. The rest are friends of mine that live in the dorms as well. This is Lebogang, Ermias, Haruna, and Arendse."`);
        if (((s as any).npc_had_sex ?? 0)?.['A243'] !== 0  ||  ((s as any).ErmiasQW ?? 0)?.['dorm_bj'] === 1) {
          scene.text('You and Ermias knowingly grin at each other, but the rest of the group don\'t seem to notice.');
        }
        scene.text('You talk to them for a while and they are very flirty with you before Ermias looks at his phone. "Come on, Djibril. We need to go."');
        scene.text('Djibril glances over at him as the rest of them all get up. "Sorry, I have to go, but it was nice meeting you again. Have a nice day." Just as they\'re about to leave, Djibril stops. "We were about to head back to our dorm and I was wondering if you\'d like to come with us? I promise it will be a lot of fun."');
        scene.actions([
          { label: 'Accept', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    qspCall(s, 'npc_relationship', 'modify', 'A82', 'like');
    qspCall(s, 'npc_relationship', 'modify', 'A242', 'like');
    qspCall(s, 'npc_relationship', 'modify', 'A243', 'like');
    qspCall(s, 'npc_relationship', 'modify', 'A244', 'like');
    qspCall(s, 'npc_relationship', 'modify', 'A245', 'like');
    qspCall(s, 'npc_relationship', 'modify', 'A246', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/walktodorm.jpg');
    scene.text('You smile at them. "Sure, that sounds like fun."');
    scene.text('They share some looks, then smile back at you.');
    scene.text('As you leave, Djibril wraps his arm around your shoulder and walks with you while the rest lead the way. You walk out of the park and board the metro.');
    scene.text('During the trip, they all flatter you by telling you how pretty you are and how good you were last time before you finally arrive at the university dorms.');
    scene.actions([
      { label: 'Change your mind', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A82', 'hate');
    qspCall(s, 'npc_relationship', 'modify', 'A242', 'hate');
    qspCall(s, 'npc_relationship', 'modify', 'A243', 'hate');
    qspCall(s, 'npc_relationship', 'modify', 'A244', 'hate');
    qspCall(s, 'npc_relationship', 'modify', 'A245', 'hate');
    qspCall(s, 'npc_relationship', 'modify', 'A246', 'hate');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/walktodorm.jpg');
    scene.text('When you think about it some more, you decide that you don\'t want to be gangbanged by a bunch of African college guys and pretend to check your phone.');
    scene.text('"Oh, sorry guys, I just noticed the time and I have to go."');
    scene.text('You slip away from Djibril and walk away from them. You don\'t glance back, but you\'re sure they\'re unhappy.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_island', ''] },
    ]);
  } },
      { label: 'Go to dorm', goto: ['djibrilev1', 'djibrilgb'] },
    ]);
  } },
          { label: 'Decline', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A82', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A242', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A243', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A244', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A245', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A246', 'dislike');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/reply.jpg');
    scene.text('You shake your head as you get up from your table. "No thank you."');
    scene.text('"Come on, Djibril," one of his friends says. "Let\'s go."');
    scene.text('He glances over at them, then looks back at you. "Sorry, I have to go, but it was nice meeting you again. Have a nice day."');
    scene.text('He turns and leaves to join his friends outside, but stops at the door. "Hey, if you want, why don\'t you stop by my dorm some time?"');
    scene.text('He tells you which building it is and which room is his before he heads outside and walks away with his friends.');
    scene.actions([
      { label: 'Leave', goto: ['parkKafe', 'end', '\'cafe\''] },
    ]);
  } },
        ]);
      } else {
        if (((s as any).DjibrilQW ?? 0)?.['meet'] === 1) {
          if (!(s as any).DjibrilQW) (s as any).DjibrilQW = {}; (s as any).DjibrilQW['invite'] = 1;
          scene.img('images/locations/city/centralpark/cafe/djibril_talk.jpg');
          scene.text('You notice Djibril sitting with a few other young African men at another table. They see you and start talking amongst themselves.');
          // TODO-QSP: dynamic text: After a few minutes, Djibril heads over to your table as his friends head outsid...
          scene.text(`After a few minutes, Djibril heads over to your table as his friends head outside. "Hello again ${((s as any).pcs_nickname ?? 0)}, I didn't expect to see you here."`);
          scene.text('You talk to him for a few minutes before one of his friends peeks their head back inside. "Come on, Djibril! Let\'s go!"');
          scene.text('He glances over at them, then looks back at you. "Sorry, I have to go, but it was nice meeting you again. Have a nice day."');
          scene.text('He turns and leaves to join his friends outside before stopping at the door. "Hey if you want, why don\'t you stop by my dorm some time?"');
          scene.text('He tells you which building it is and which room is his before he heads outside with his friends and they walk away.');
          scene.actions([
            { label: 'Leave', goto: ['parkKafe', 'end', '\'cafe\''] },
          ]);
        } else {
          if (((s as any).pcs_hotcat ?? 0) >= 5) {
            if (!(s as any).DjibrilQW) (s as any).DjibrilQW = {}; (s as any).DjibrilQW['meet'] = 1;
            scene.text('A few young African men sitting at another table see you and start talking amongst themselves. From the constant glances you receive, you\'re sure they\'re talking about you.');
            scene.text('Eventually, they all get up and come over to your table. One of them steps forward and introduces himself. "Hey, I\'m Djibril."');
            scene.text('As he speaks, he gestures to each of the others as he says their names. Some smile, or wave, while others look at you with that hungry sexual look. "This is my dorm roommate, Farai. The rest are friends of mine that live in the dorms as well. This is Lebogang, Ermias, Haruna, and Arendse. What\'s your name?"');
            if (((s as any).npc_had_sex ?? 0)?.['A243'] !== 0  ||  ((s as any).ErmiasQW ?? 0)?.['dorm_bj'] === 1) {
              scene.text('You and Ermias knowingly grin at each other, but the rest of the group don\'t seem to notice.');
            }
            // TODO-QSP: dynamic text: You smile at him. "<<$pcs_firstname>> <<$pcs_lastname>>, but most people just ca...
            scene.text(`You smile at him. "${((s as any).pcs_firstname ?? 0)} ${((s as any).pcs_lastname ?? 0)}, but most people just call me ${((s as any).pcs_nickname ?? 0)}."`);
            scene.text('He looks surprised. "Are you from Pavlovsk?" When you nod your head, he looks even more surprised. "Do you have an Aunt Luda, dating Olu?"');
            scene.text('Now it\'s your turn to look surprised. "Yes, how did you know that?"');
            scene.text('He shakes his head with a slight laugh. "He\'s my uncle. They told me about you. Small world, huh?"');
            scene.text('You giggle. "Yeah, it really is…"');
            scene.text('"We were about to head back to our dorm and were wondering if you would like to come with us?" he asks. "I promise it will be a lot of fun."');
            scene.actions([
              { label: 'Accept', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    qspCall(s, 'npc_relationship', 'modify', 'A82', 'like');
    qspCall(s, 'npc_relationship', 'modify', 'A242', 'like');
    qspCall(s, 'npc_relationship', 'modify', 'A243', 'like');
    qspCall(s, 'npc_relationship', 'modify', 'A244', 'like');
    qspCall(s, 'npc_relationship', 'modify', 'A245', 'like');
    qspCall(s, 'npc_relationship', 'modify', 'A246', 'like');
    if (!(s as any).DjibrilQW) (s as any).DjibrilQW = {}; (s as any).DjibrilQW['invite'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/walktodorm.jpg');
    scene.text('You smile at them. "Sure, that sounds like fun."');
    scene.text('They share some looks, then smile back at you.');
    scene.text('As you leave, Djibril wraps his arm around your shoulder and walks with you while the rest lead the way. You walk out of the park and board the metro.');
    scene.text('During the trip, they all flatter you by telling you how pretty you are and you have no doubt in your mind about what they want as you finally arrive at the university dorms.');
    scene.actions([
      { label: 'Change your mind', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A82', 'hate');
    qspCall(s, 'npc_relationship', 'modify', 'A242', 'hate');
    qspCall(s, 'npc_relationship', 'modify', 'A243', 'hate');
    qspCall(s, 'npc_relationship', 'modify', 'A244', 'hate');
    qspCall(s, 'npc_relationship', 'modify', 'A245', 'hate');
    qspCall(s, 'npc_relationship', 'modify', 'A246', 'hate');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/walktodorm.jpg');
    scene.text('When you think about it some more, you decide that you don\'t want to be gangbanged by a bunch of African college guys and pretend to check your phone.');
    scene.text('"Oh, sorry guys, I just noticed the time and I have to go."');
    scene.text('You slip away from Djibril and walk away from them. You don\'t glance back, but you\'re sure they\'re unhappy.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_island', ''] },
    ]);
  } },
      { label: 'Go to dorm', goto: ['djibrilev1', 'djibrilgb'] },
    ]);
  } },
              { label: 'Decline', handler: (st: GameState) => {
    if (!(s as any).DjibrilQW) (s as any).DjibrilQW = {}; (s as any).DjibrilQW['invite'] = 1;
    qspCall(s, 'npc_relationship', 'modify', 'A82', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A242', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A243', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A244', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A245', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A246', 'dislike');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/reply.jpg');
    scene.text('You shake your head as you get up from your table. "No thank you."');
    scene.text('"Come on, Djibril," one of his friends says. "Let\'s go."');
    scene.text('He glances over at them, then looks back at you. "Sorry, I have to go, but it was nice meeting you again. Have a nice day."');
    scene.text('He turns and leaves to join his friends outside, but stops at the door. "Hey, if you want, why don\'t you stop by my dorm some time?"');
    scene.text('He tells you which building it is and which room is his before he heads outside and walks away with his friends.');
    scene.actions([
      { label: 'Leave', goto: ['parkKafe', 'end', '\'cafe\''] },
    ]);
  } },
            ]);
          } else {
            scene.img('images/locations/city/centralpark/cafe/african_students.jpg');
            scene.text('You stealthily glance over at the black men, but it seems like they\'re not interested in you since they never look in your direction.');
            scene.actions([
              { label: 'Leave', goto: ['parkKafe', 'end', '\'cafe\''] },
            ]);
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterTheBoy(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).pcs_hotcat ?? 0) < 5  &&  (!((s as any).gosh ?? 0))) {
    scene.img('images/characters/shared/headshots_main/big127.jpg');
    scene.text('The two of you exchange glances, but that\'s about all that happens. After a while, he finishes his meal and leaves the café without either of you saying anything to each other.');
    scene.actions([
      { label: 'Leave', goto: ['parkKafe', 'end', '\'cafe\''] },
    ]);
  } else {
    if ((!((s as any).gosh ?? 0))) {
      scene.img('images/characters/shared/headshots_main/big127.jpg');
      scene.text('The two of you exchange glances and it doesn\'t take long before he walks over to your table to introduce himself, "Hi, I\'m Gosha!"');
      // TODO-QSP: dynamic text: You smile. "<<$pcs_firstname>>, but you can call me <<$pcs_nickname>>."
      scene.text(`You smile. "${((s as any).pcs_firstname ?? 0)}, but you can call me ${((s as any).pcs_nickname ?? 0)}."`);
      scene.text('"Cute name!" he says as the two of you become acquainted with one another. You learn that he\'s a student at the nearby university and he invites you visit him. He smiles as he gives you directions to his dorm.');
      // TODO-QSP: dynamic text: "Well, I won't disturb you anymore, <<$pcs_nickname>>! Don't be a stranger and c...
      scene.text(`"Well, I won't disturb you anymore, ${((s as any).pcs_nickname ?? 0)}! Don't be a stranger and come by!"`);
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).gosh = 1;
  }, goto: ['parkKafe', 'end', 'cafe'] },
      ]);
    } else {
      scene.img('images/characters/shared/headshots_main/big127.jpg');
      scene.text('The two of you exchange glances and you swear you recognize him from somewhere. Then it hits you… it\'s Gosha! Just as you remember, he comes to the same realization. Before you know it, he\'s heading over.');
      // TODO-QSP: dynamic text: "Hi, <<$pcs_nickname>>! I'm surprised to see you here."
      scene.text(`"Hi, ${((s as any).pcs_nickname ?? 0)}! I'm surprised to see you here."`);
      scene.actions([
        { label: 'Greet him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A127', 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/greet.jpg');
    scene.text('You make an awkward-looking facial expression. "Oh, hi Gosha! I didn\'t recognize you there."');
    scene.text('"I didn\'t realize I\'d changed that much since last time!" he jests.');
    scene.text('You hit him jokingly on the shoulder. "Glad you\'re not offended. I would\'ve been so upset if you had been!"');
    if ((!((s as any).goshsex ?? 0))) {
      // TODO-QSP: dynamic text: "Are you here alone, <<$pcs_nickname>>?" he asks.
      scene.text(`"Are you here alone, ${((s as any).pcs_nickname ?? 0)}?" he asks.`);
      scene.text('You nod. "I heard some great things about this park, so I was exploring."');
      scene.text('He breaks out in a wide smile. "Well, you\'re in luck then because I know every nook and cranny in this park. Let me show you around!"');
      scene.actions([
        { label: 'Accept', handler: (st: GameState) => {
    qspCall(s, 'mood', 'raise', 'small');
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/walk.jpg');
    scene.text('"I\'d love to!" you exclaim and the two of you quickly head off.');
    scene.text('You both take a walk around the park for a while as Gosha shows you all the different sights.');
    scene.text('"This is my favorite spot, here." He points towards a little hill overlooking the whole park.');
    scene.text('You\'re really enjoying yourself and time flies by quickly before you end up back at the café.');
    // TODO-QSP: dynamic text: "I'm sorry <<$pcs_nickname>>, but I've got to run! Hope to see you around again!...
    scene.text(`"I'm sorry ${((s as any).pcs_nickname ?? 0)}, but I've got to run! Hope to see you around again!" He excuses himself and disappears.`);
    scene.actions([
      { label: 'Leave', goto: ['parkKafe', 'end', '\'cafe\''] },
    ]);
  } },
        { label: 'Decline', handler: (st: GameState) => {
    qspCall(s, 'mood', 'lower', 'small');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/parkcafe.jpg');
    scene.text('"I\'m sorry, but I can\'t today. I need to be on my way," you reply.');
    // TODO-QSP: dynamic text: "No worries, <<$pcs_nickname>>! Next time!" he responds, joyful as usual.
    scene.text(`"No worries, ${((s as any).pcs_nickname ?? 0)}! Next time!" he responds, joyful as usual.`);
    scene.text('"I actually need to be heading off too," he says. "I\'ll see you around, okay?"');
    scene.text('You nod. "I\'ll see you around, Gosha!"');
    scene.text('He says his goodbyes and quickly leaves the café.');
    scene.actions([
      { label: 'Leave', goto: ['parkKafe', 'end', '\'cafe\''] },
    ]);
  } },
      ]);
    } else {
      scene.text('"I know of an amazing hidden spot in this park which I want to show you!" he winks suggestively, which clearly hints at something.');
      scene.actions([
        { label: 'Sounds interesting', handler: (st: GameState) => {
    qspCall(s, 'mood', 'raise', 'tiny');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/talk.jpg');
    scene.text('You ponder the proposition for a short while. You know what this probably will lead to, but you\'re too intrigued to let this opportunity pass by. "Okay, I want to see this hidden spot you\'re raving about."');
    scene.text('He smiles as he grabs you by the hand and starts leading you outside. "It\'s so great! There\'s a great view, and it\'s totally secluded!"');
    scene.text('The two of you start walking deeper inside the park, leaving the café behind.');
    scene.actions([
      { label: 'Keep walking', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/walk.jpg');
    scene.text('You walk for quite a while and have to keep asking him if you\'ve arrived yet. You notice that he\'s getting a bit annoyed by you asking all the time, but you\'re too pumped to find out where he\'s taking you.');
    scene.text('He points at a cut out part of the fence. "Through here."');
    scene.text('"I don\'t really know about this…" you tell him. "Isn\'t this illegal? What if we get caught?"');
    scene.text('He waves your worries away. "Don\'t worry about it. I\'ve done this a dozen times and have never been caught."');
    qspCall(s, 'willpower', 'misc', 'self', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Head back [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Head back [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'npc_relationship', 'modify', 'A127', (-1));
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/parkcafe.jpg');
    scene.text('You stumble on your words. "I-I\'m sorry, but I can\'t…"');
    scene.text('You notice the disappointment on his face, but he can\'t do anything but accept it. "It\'s okay. I just thought you\'d like to see some really cool views was all."');
    scene.text('The two of you walk slowly back. You\'re afraid to say anything, and he seems to be a bit upset that you didn\'t want to go along with him. As you near the café, you say your goodbyes and he leaves.');
    scene.actions([
      { label: 'Head back to the café', goto: ['parkKafe', 'end', '\'cafe\''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Go through the fence', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/fence.jpg');
    scene.text('"If you say so, but if we get caught I\'m blaming it all on you," you teasingly say.');
    // TODO-QSP: dynamic text: He grins as he goes through the fence and walks up a well worn path. "Hurry up, ...
    scene.text(`He grins as he goes through the fence and walks up a well worn path. "Hurry up, ${((s as any).pcs_nickname ?? 0)}, before someone sees us!"`);
    scene.text('As you hunker down to press yourself through the fence, you decide to have a bit of fun. "Help, I\'m stuck!" you yell out.');
    scene.text('Gosha starts looking nervously around and hastily walks back towards you. As he approaches, you press yourself through and stick out your tongue. He sighs when he sees that you\'re only joking around.');
    scene.actions([
      { label: 'Reach the secluded area', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/secluded.jpg');
    // TODO-QSP: dynamic text: "Funny <<$pcs_nickname>>, real funny…" he mumbles.
    scene.text(`"Funny ${((s as any).pcs_nickname ?? 0)}, real funny…" he mumbles.`);
    scene.text('You make a funny face in response and the two of you start laughing.');
    scene.text('"This way, then…" he says and the two of you head up the path. You walk through some thick bushes and up a small hill.');
    scene.text('When you reach the top, you stop by a clearing. "So what do you say? Great place, no?"');
    scene.text('You nod. "Yeah, it\'s really awesome and no one can see you here."');
    scene.text('He walks up next to you. "How about a reward for showing you this place?"');
    qspCall(s, 'willpower', 'bj', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Suggest a blowjob [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Suggest a blowjob [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A127', 1);
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'fame', 'city', 'sex', 3);
    scene.img('images/locations/city/centralpark/cafe/sex/bjgosha.jpg');
    scene.text('You give him a teasing smile as you squat down in front of him. "You\'re lucky it\'s really secluded here."');
    scene.text('He\'s already hard as you start to unbutton his pants. He looks excitingly at you, ready for what\'s to come.');
    scene.text('You pull down his pants and his cock pops out, ready for you. You look at him and lick your lips as you move in. You start playing with his head and he groans lightly.');
    scene.text('"Want me to keep going?" you playfully ask. The only response you get is him silently nodding his head, so you take his cock into your mouth and start sucking him off as Gosha grabs the back of your head to push you deeper.');
    // TODO-QSP: dynamic text: "Don't stop, <<$pcs_nickname>>…" you hear him groan. He's rock-hard and you can ...
    scene.text(`"Don't stop, ${((s as any).pcs_nickname ?? 0)}…" you hear him groan. He's rock-hard and you can feel that he's ready to cum.`);
    scene.text('You tease him a little more before he explodes in your mouth.');
    qspCall(s, 'arousal', 'bj', 15, 'sub');
    qspCall(s, 'cum_call', 'mouth', '127', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Head back to the café', goto: ['parkKafe', 'end', '\'cafe\''] },
    ]);
  } },
      ]);
    }
    qspCall(s, 'willpower', 'flash', 'resist', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'What for? [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'What for? [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'npc_relationship', 'modify', 'A127', (-1));
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/parkcafe.jpg');
    scene.text('You cross your arms. "What should I reward you for? For showing me this? It\'s a nice place, but nothing you should get rewarded for."');
    scene.text('You can see he\'s clearly annoyed by your response, but keeps his mouth shut. "Let\'s head back then."');
    scene.text('The walk back is awkward with the two of you barely saying a word to each other.');
    // TODO-QSP: dynamic text: "I need to go and meet a friend. It was good seeing you, <<$pcs_nickname>>…" He ...
    scene.text(`"I need to go and meet a friend. It was good seeing you, ${((s as any).pcs_nickname ?? 0)}…" He gives you stand offish hug before he leaves.`);
    scene.actions([
      { label: 'Head back to the café', goto: ['parkKafe', 'end', '\'cafe\''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Flash him', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A127', 1);
    scene.img('images/locations/city/centralpark/cafe/sex/flash.jpg');
    scene.text('You look around to make sure no one can see you before you quickly pull up your shirt, exposing your breasts.');
    scene.text('He stands there not saying a word, only watching you closely. As he starts approaching you, you pull up your shirt. "No touching allowed."');
    scene.text('You can clearly see that he has more in mind, but he\'s keeping his distance and respecting your wishes for now. "You\'re going to leave me like that?"');
    scene.text('You let out a laugh. "Yeah. Did you expect something more for only showing me this place?"');
    scene.text('The two of you chat for a while before heading back to the café.');
    qspCall(s, 'arousal', 'flash', 15, 'sub', 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Head back to the café', goto: ['parkKafe', 'end', '\'cafe\''] },
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
        { label: 'Decline', handler: (st: GameState) => {
    qspCall(s, 'mood', 'lower', 'small');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/parkcafe.jpg');
    scene.text('"I\'m sorry, but I can\'t today. I need to be on my way," you reply.');
    // TODO-QSP: dynamic text: "No worries, <<$pcs_nickname>>! Next time!" he responds, joyful as usual.
    scene.text(`"No worries, ${((s as any).pcs_nickname ?? 0)}! Next time!" he responds, joyful as usual.`);
    scene.text('"I actually need to be heading off too," he says. "I\'ll see you around, okay?"');
    scene.text('You nod. "I\'ll see you around, Gosha!"');
    scene.text('He says his goodbyes and quickly leaves the café.');
    scene.actions([
      { label: 'Leave', goto: ['parkKafe', 'end', '\'cafe\''] },
    ]);
  } },
      ]);
    }
  } },
        { label: 'Leave', goto: ['parkKafe', 'end', '\'cafe\''] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterEnd(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  if (((s as any).locArgs?.[1] ?? 0) === 'city_residential') {
    scene.actions([{ label: 'Continue', goto: ['city_residential', ''] }]);
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'cafe') {
      scene.actions([{ label: 'Continue', goto: ['parkKafe', 'start'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['city_park', 'start'] }]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'table':
      enterTable(s, scene);
      break;
    case 'guys':
      enterGuys(s, scene);
      break;
    case 'klof 1':
      enterKlof1(s, scene);
      break;
    case 'seniors':
      enterSeniors(s, scene);
      break;
    case 'man':
      enterMan(s, scene);
      break;
    case 'woman':
      enterWoman(s, scene);
      break;
    case 'youth':
      enterYouth(s, scene);
      break;
    case 'blacks':
      enterBlacks(s, scene);
      break;
    case 'the_boy':
      enterTheBoy(s, scene);
      break;
    case 'end':
      enterEnd(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const ParkKafe: LocationDef = {
  name: 'ParkKafe',
  title: 'Park Café',
  region: 'other',
  locationType: 'public_indoors',
  enter: enter,
};
