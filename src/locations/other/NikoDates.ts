import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterDate1_1(s: GameState, scene: SceneBuilder): void {
  (s as any).NikoDate_Day = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/1/d.jpg');
  scene.text('As you ride the train, Niko pulls out his phone. "Would you like to take a photo together?" You give him a smile and nod as he wraps his arm around your waist and pulls you towards him. He then lifts his phone above you before snapping a photo. You spend the rest of the journey discussing your favorite musical artists and bands.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the train', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/1/entrance.jpg');
    scene.text('The train arrives at the station and you both get off. "Are you ready to have a great time?" he asks.');
    scene.text('You smirk. "We\'ll see about that, won\'t we?"');
    scene.text('Niko chuckles as he wraps his arm around your neck and walks you to the amusement park, where he pays for the tickets before handing one to you.');
    scene.actions([
      { label: 'Enter amusement park', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/1/d1.jpg');
    scene.text('When you both enter, you turn and Niko\'s warm smile staring back at you. "There\'s so much to do here. Maybe we should try out the shooting range first? What do you think?"');
    scene.text('"Sure, that sounds like fun!" you reply and he leads you to the shooting range.');
    scene.actions([
      { label: 'Shooting range', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/1/d2.jpg');
    scene.text('When you both arrive at the shooting range. Niko leans in closer to you. "How about we make this more fun? If I can shoot more bottles than you, then you\'ll have to do anything I ask. The same applies if you win. Sound fair?"');
    scene.text('You giggle. "So you\'ll have to do anything I want if I win?"');
    scene.text('"<i>Anything</i>," he whispers in your ear.');
    (s as any).VK = Math.floor(Math.random() * 5) + 1;
    if (((s as any).VK ?? 0) < 5) {
      scene.actions([
        { label: 'Compete', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/1/d3.jpg');
    scene.text('You grab a plastic gun and start shooting the bottles as quickly as possible. After a few minutes, the scores get tallied up and… Niko won. The man operating the stall hands Niko a stuffed bear, which he holds below his chin with an innocent smile on his face. "Since I won, I would like to know if it would be too brazen of me to ask you for a kiss?"');
    scene.actions([
      { label: 'Agree to kiss', handler: (st: GameState) => {
    (s as any).NikoSub = ((s as any).NikoSub ?? 0) + (5);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/charmer1.jpg');
    scene.text('You cast your eyes down, feeling more bashful as Niko approaches you, his face mere inches from yours. "So. May I?"');
    scene.text('You finally build up the courage to answer. "You… you may…"');
    scene.actions([
      { label: 'Kiss him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/kiss1.mp4');
    // TODO-QSP: dynamic text: Niko gives you a warm smile as he leans forward and presses his lips against you...
    scene.text(`Niko gives you a warm smile as he leans forward and presses his lips against yours, sharing a very gently but firm kiss. After you finish kissing, you look up at Niko and see a very pleased smile on his face. "You're so beautiful, ${((s as any).pcs_firstname ?? 0)}. Your lips are as soft as silk. So perfect." You can feel your face quickly flushing as you turn your head, trying to hide your embarrassment.`);
    scene.text('Niko chuckles lightly. "We\'re not done yet. Let\'s go to the boxing game next."');
    scene.actions([
      { label: 'Follow him', goto: ['NikoDates', 'stranger_danger'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Compete', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/sad2.jpg');
    scene.text('You grab a plastic gun and start shooting the bottles as quickly as possible. After a few minutes, the scores get tallied up and… You won. The man operating the stall hands you a plastic gnome as Niko looks at the score, a little shocked as he scratches the back of his head. "I guess… You won. So what do you desire for your prize?" he asks as he moves his face closer to yours.');
    scene.actions([
      { label: 'Kiss me', handler: (st: GameState) => {
    (s as any).NikoSub = ((s as any).NikoSub ?? 0) + (5);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/smile1.jpg');
    // TODO-QSP: dynamic text: You cast your eyes down, feeling more bashful as Niko approaches you, his face m...
    scene.text(`You cast your eyes down, feeling more bashful as Niko approaches you, his face mere inches from yours. "So what can I do for you, ${((s as any).pcs_firstname ?? 0)}?"`);
    scene.text('You finally build up the courage to answer. "I want you to… kiss me."');
    scene.text('"As you wish," he replies.');
    scene.actions([
      { label: 'Kiss him', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/kiss1.mp4');
    // TODO-QSP: dynamic text: He leans forward and presses his lips against yours, sharing a very gently but f...
    scene.text(`He leans forward and presses his lips against yours, sharing a very gently but firm kiss. After you finish kissing, you look up and Niko and see a very pleased smile on his face. "You're so beautiful, ${((s as any).pcs_firstname ?? 0)}. Your lips are as soft as silk. So perfect." You can feel your face quickly flushing as you turn your head, trying to hide your embarrassment.`);
    scene.text('Niko chuckles lightly. "We\'re not done yet. Let\'s go to the boxing game next."');
    scene.actions([
      { label: 'Follow him', goto: ['NikoDates', 'stranger_danger'] },
    ]);
  } },
    ]);
  } },
      { label: 'Ride the child ride', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/sad1.jpg');
    scene.text('"I want you to take this and go and ride that kiddie ride over there." You hand him the plastic gnome that you won before pointing at the kiddie ride across from you.');
    scene.actions([
      { label: 'Watch him ride', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/1/winner.jpg');
    scene.text('Niko lowers his sunglasses. "I guess a deal is a deal." He heads for the ride while you walk up and take a photo of him on your phone. After he finishes his ride, he hands you back your gnome. "Well you beat me, but I hope you\'ll take pity on me and let me take you to that boxing game over there."');
    scene.actions([
      { label: 'Follow him', goto: ['NikoDates', 'stranger_danger'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterStrangerDanger(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).YurikEv) (s as any).YurikEv = {}; (s as any).YurikEv['Stranger'] = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((s as any).week ?? 0)}.jpg`);
  scene.text('As you walk over to the boxing game, Niko pats on his pockets. "Oh shit! I think I dropped my wallet back there. Give me a minute," he says before quickly running off.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/stranger/stranger1.jpg');
    // TODO-QSP: dynamic text: You wait for Niko under the shade of a nearby pillar when you see a burly bearde...
    scene.text(`You wait for Niko under the shade of a nearby pillar when you see a burly bearded man quickly approaching you while licking his lips. You start backing away from him when he reaches out and grabs your arm, pulling you toward him while he covers your mouth with his other hand. He starts dragging you into a nearby bush while reaching into your shirt when you suddenly hear someone shout "Hey shithead!" You turn to see Niko ramming his fist against the burly man's face, knocking him to the ground before he turns to you. "${((s as any).pcs_firstname ?? 0)}! He didn't hurt you, did he?"`);
    scene.text('You shake your head. "No, I\'m fine now. Thanks to you."');
    scene.text('"You can always feel safe with me," he replies and you give him a warm smile as he grabs your hand and leads you toward the boxing game.');
    scene.actions([
      { label: 'Follow him', goto: ['NikoDates', 'date1_2'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterDate1_2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'boyStat', 'A189');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/1/boxing.jpg');
  scene.text('Niko takes your hand and leads you to the boxing vending game, where he puts a coin into the machine, causing it to light up as he turns to you. "How about another wager? If I win, then you\'ll have to grant me a request. Fair?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Sure', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/1/d4.jpg');
    scene.text('"You\'ve got yourself a deal," you reply and Niko gives you a confident smirk as he winds up his fist before taking a deep breath and ramming it into the punching bag, causing the scoreboard to light up as it tallies the score. Niko receives a stuffed bear as his prize before turning to you. "Looks like I won. Now let\'s go somewhere more private."');
    scene.text('You tilt your head. "More private?" Niko gives you a wink as he takes your hand and leads you to a less populated side of the amusement park.');
    scene.actions([
      { label: 'Follow him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/charmer1.jpg');
    scene.text('You both end up behind an out of order ride where Niko brings his face close to yours. "You promised to do me a favor. May I please gaze upon your naked body?"');
    scene.text('"You want me to strip? Here?" you ask.');
    scene.text('Niko holds your arms. "Yes, I would. Don\'t worry, no one will see us here."');
    qspCall(s, 'willpower', 'exhib', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) >= ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'I can\'t [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: <center><b><h4><font color=#E400FF><<"Nikolai [Niko] Volkov">></font></h4></b></...
    scene.text(`<center><b><h4><font color=#E400FF>${'Nikolai [Niko] Volkov'}</font></h4></b></center>`);
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/sad1.jpg');
    scene.text('You look up at Niko. "Sorry, but I can\'t."');
    // TODO-QSP: dynamic text: He gives you a very disappointed look. "Come on, <<$pcs_firstname>>! We had a de...
    scene.text(`He gives you a very disappointed look. "Come on, ${((s as any).pcs_firstname ?? 0)}! We had a deal."`);
    scene.text('"I\'m sorry, but I can\'t."');
    scene.text('He gives you a sad look. "Well I guess it\'s alright. I wouldn\'t want you to be uncomfortable. I just figured that you were a confident girl. I guess I was wrong." He gives you a sarcastic grin.');
    scene.text('"Hey! I am confident, okay? I just don\'t want to make things too easy for you."');
    scene.text('"Whatever you say, princess…" he says before taking you by the hand and leading you towards the front of the amusement park.');
    scene.actions([
      { label: 'Follow him', goto: ['NikoDates', 'home_sad'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'I can\'t [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    }
    scene.actions([
      { label: 'Strip', handler: (st: GameState) => {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/1/nude/strip1.jpg');
    scene.text('You slowly pull down your top, revealing your breasts as you stare Niko in his eyes, noticing his lustful gaze as you continue removing your clothes. You can feel your body tremble a little as Niko watches you with a bulge in his pants that continues to grow larger. You slowly start removing your pants, feeling your cheeks grow flushed.');
    // TODO-QSP: dynamic text: "You're doing really good, <<$pcs_firstname>>. Please keep going," he says, whic...
    scene.text(`"You're doing really good, ${((s as any).pcs_firstname ?? 0)}. Please keep going," he says, which gives you the confidence to continue stripping.`);
    qspCall(s, 'arousal', 'flash', 5, 'sub', 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish undressing', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'strip_all');
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/1/nude/nude.jpg');
    // TODO-QSP: dynamic text: You finish removing your clothes and Niko smiles. "You have such a divine body, ...
    scene.text(`You finish removing your clothes and Niko smiles. "You have such a divine body, ${((s as any).pcs_firstname ?? 0)}. So perfect." You feel your face growing flushed as you place your hands on your face, trying to hide your embarrassment.`);
    qspCall(s, 'arousal', 'flash', 5, 'sub', 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/1/nude/cover.jpg');
    scene.text('You suddenly hear Niko snapping pictures with his phone, causing you to quickly cover yourself. "I didn\'t agree to taking pictures!"');
    // TODO-QSP: dynamic text: He gives you a meek smile. "It's okay, <<$pcs_firstname>>. I'll never let these ...
    scene.text(`He gives you a meek smile. "It's okay, ${((s as any).pcs_firstname ?? 0)}. I'll never let these pictures get out, honestly. I just need to preserve this beautiful moment that I'm spending with you. Please let me take a few photos… for us."`);
    qspCall(s, 'arousal', 'flash', 2, 'sub', 'exhibitionism');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'exhib', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Disagree [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Disagree [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/sad2.jpg');
    scene.text('"I trust you but I… I just can\'t."');
    scene.text('He gives you an exaggerated frown. "You have such a beautiful body and I just want you to feel more confident."');
    scene.text('You lower your head. "I don\'t quite have that confidence… yet."');
    scene.text('He smiles. "We could work on that if you like."');
    scene.text('"Maybe, but not today," you reply.');
    scene.text('"Fair enough," he replies. "Let\'s get you home."');
    scene.text('He helps you get dressed before taking your hand and walking you towards the train station.');
    scene.actions([
      { label: 'Follow him', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'wear_last_worn');
  }, goto: ['NikoDates', 'home_sad'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/1/nude/pose1.jpg');
    scene.text('You slowly lower your hands. "Okay, I trust you. Take as many picture as you want."');
    // TODO-QSP: dynamic text: His eyes light up. "Thank you, <<$pcs_firstname>>. You're simply divine." You sm...
    scene.text(`His eyes light up. "Thank you, ${((s as any).pcs_firstname ?? 0)}. You're simply divine." You smile for Niko as he continues taking photos of you. "Can you give me a few poses? I wish to capture your beauty in all it's splendour."`);
    qspCall(s, 'arousal', 'flash', 5, 'sub', 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Start posing', handler: (st: GameState) => {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/1/nude/pose2.jpg');
    scene.text('You nod your head and start striking a few poses, feeling both nervous and excited at the same time. After a few poses, Niko walks over to the teddy bear that he won earlier and throws it at you. "Why don\'t you pose with this? It will look so cute."');
    qspCall(s, 'arousal', 'flash', (-10), 'sub', 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Pose with bear', handler: (st: GameState) => {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/1/nude/pose3.jpg');
    scene.text('You hold the bear to your chest as you give Niko an innocent smile. You can feel your heart beat slowing down as you start feeling more comfortable and less nervous.');
    qspCall(s, 'arousal', 'flash', (-5), 'sub', 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue posing', handler: (st: GameState) => {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/1/nude/pose4.jpg');
    scene.text('Niko starts fidgeting as you drop to your knees in multiple poses. The stuffed bear slips out of your hand, causing you to lean over to pick it up. You pick up the bear before looking up to see Niko standing directly in front of you with a lustful gaze as he unbuttons his pants, causing you to gasp. This opens your mouth just enough for his dick to slide in.');
    qspCall(s, 'arousal', 'flash', (-5), 'sub', 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck his dick', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 5, 'sub');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/park/bj.mp4');
    scene.text('You look up to see a longing look on Niko\'s face, showing you how badly he wants you to please him, so you eagerly start sucking his dick, wanting to reward him for all the sweet things he\'s said and done for you.');
    scene.actions([
      { label: 'Make him cum', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 5, 'sub');
    qspCall(s, 'cum_call', 'mouth_swallow', 'A189', 1);
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/cum/swallow4.mp4');
    scene.text('You stare into his eyes, feeling more turned on at how badly he craves you. You soon hear him groan as he pumps his cum down your throat, which you do your best to swallow.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (s as any).NikoStrip = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/smile1.jpg');
    // TODO-QSP: dynamic text: Once he's completely spent, he looks down at you with a smile. "You are a goddes...
    scene.text(`Once he's completely spent, he looks down at you with a smile. "You are a goddess, ${((s as any).pcs_nickname ?? 0)}. Thank you."`);
    scene.text('You give him a smile. "I\'m always glad to help out."');
    scene.text('He chuckles. "I should call upon your \'help\' more often then."');
    scene.text('You give him a sarcastic smirk. "Don\'t push it."');
    scene.text('This causes you both to burst into laughter before he grabs your hand and raises it to his face before giving it a kiss. "Are you ready to head home?"');
    scene.actions([
      { label: 'Yes', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore');
  }, goto: ['NikoDates', 'home1'] },
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
  } },
    ]);
  } },
    ]);
  } },
    { label: 'No', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/sad1.jpg');
    scene.text('You giggle. "Sorry, but I don\'t really like gambling. How about just playing for fun?"');
    scene.text('Niko sighs before replying. "Where\'s the fun in that?"');
    scene.text('"The fun is playing a good game, of course!" you reply as Niko places his hand over his face as he shakes his head.');
    scene.text('"Ugh. Fine. Suit yourself." He then haphazardly punches the bag, causing the scoreboard to to light up as it tallies the score. He wins second place, earning him a cheap watch which he scoffs at before stuffing it in his pocket. "Well, I guess we\'re done here. Let\'s get going." He looks a little disappointed as he places his hand on your shoulder and walks you towards the train station.');
    scene.actions([
      { label: 'Yes', goto: ['NikoDates', 'home_sad'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterHome1(s: GameState, scene: SceneBuilder): void {
  (s as any).NikoEv = 3;
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/1/exit.jpg');
  // TODO-QSP: dynamic text: You walk out of the amusement park and head towards the train station. You board...
  scene.text(`You walk out of the amusement park and head towards the train station. You board the train and spend the journey discussing your favorite hobbies until the train reaches Pavlovsk, where you both exit the train before Niko gives you a hug. "You're an amazing girl, ${((s as any).pcs_firstname ?? 0)}. I anxiously await our next meeting. Take care." He gives you a kiss on the forehead before letting go of you and walking away.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk to town', goto: ['pav_residential', ''] },
  ]);
  scene.build();
}

function enterHomeSad(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/1/exit.jpg');
  scene.text('You walk out of the amusement park and head towards the train station. You board the train and spend the journey discussing your favorite hobbies until the train reaches Pavlovsk, where you both exit the train before Niko turns to you and says, "I hope you enjoyed yourself today. Hopefully next time we can do something more… interesting." He gives you a kiss on the hand before letting go of you and walking away.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk to town', goto: ['pav_residential', ''] },
  ]);
  scene.build();
}

function enterDate2(s: GameState, scene: SceneBuilder): void {
  (s as any).NikoDate_Day = ((s as any).daystart ?? 0);
  qspCall(s, 'boyStat', 'A189');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/2/boat/boat1.jpg');
  scene.text('When you arrive at the lake, Niko takes you to a worn out dock where you see a boat with paddles and fishing rods inside.');
  scene.text('"Have you ever fished before?" he asks.');
  scene.text('You tilt your head. "I haven\'t, but I guess I\'m willing to try it out."');
  scene.text('He smiles. "Great! Let\'s get started." He carefully guides you onto the boat before you both get comfortably seated and Niko gently paddles the boat out onto the lake.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Learn how to fish', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/2/boat/boat2.jpg');
    scene.text('Niko shows you how to properly catch fish. "You make this look so easy," you say. "Where did you learn to fish?"');
    scene.text('He smiles. "My father used to always teach me when I was little."');
    scene.text('"Where is he now?" you ask. "Do you still live with him?"');
    scene.text('"No… He passed away a few years ago."');
    scene.text('"I\'m sorry to hear that. Were you two close?"');
    scene.text('"I rarely saw him. He was always so focused on his studies."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: <center><b><h4><font color=#E400FF><<"Nikolai [Niko] Volkov">></font></h4></b></...
    scene.text(`<center><b><h4><font color=#E400FF>${'Nikolai [Niko] Volkov'}</font></h4></b></center>`);
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/sad2.jpg');
    scene.text('"Was he a teacher?" you ask.');
    scene.text('"No, he was a psychiatrist who was obsessed with finding a cure for psychosis."');
    scene.text('You tilt your head. "What could have made him so absorbed by that?"');
    scene.text('He takes a deep breath. "My little brother was diagnosed with psychosis and he was always screaming to himself in his room. My father didn\'t want him put in an asylum, so he had to keep him in the house to protect him and everyone else. My sister Matilda was really upset. She and Eduard were very close before he was diagnosed, so my brother and I did our best to console her and keep her mind off of it."');
    scene.text('You place your hand on Niko\'s shoulder. "Did she ever move on from her loss?"');
    scene.text('He sits in silence for a few seconds before responding. "She died… My big brother only needed to watch her for a few minutes, but of course he was too distracted by that bitch Vio…" You place your hand on his shoulder, causing him to calm down before continuing. "His girlfriend distracted him and he didn\'t see our sister run onto the street chasing after our spooked cat… A car came out of nowhere and she… She didn\'t survive. All because of Yurik! One simple fucking job and he failed!"');
    scene.actions([
      { label: 'Place your hand on his shoulder', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: <center><b><h4><font color=#E400FF><<"Nikolai [Niko] Volkov">></font></h4></b></...
    scene.text(`<center><b><h4><font color=#E400FF>${'Nikolai [Niko] Volkov'}</font></h4></b></center>`);
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/sad1.jpg');
    scene.text('Niko takes a long breath and remains silent for a few seconds before shaking his head. "Never mind. It was a long time ago and I\'ve moved on. Want to try something interesting?"');
    scene.text('You raise an eyebrow. "What do you have in mind?"');
    // TODO-QSP: dynamic text: He unbuttons his pants. "I'm really feeling stressed right now. If you can help ...
    scene.text(`He unbuttons his pants. "I'm really feeling stressed right now. If you can help me relax, then I would be so grateful… Can you please do this little favor for me, ${((s as any).pcs_firstname ?? 0)}? Please?" He gives you an innocent frown.`);
    if (((s as any).NikoEv ?? 0) === 3) {
      scene.actions([
        { label: 'No way', handler: (st: GameState) => {
    (s as any).NikoPayback = 1;
    (s as any).NikoVolkovQW = (-1);
    (s as any).NikoLuv = (-20);
    (s as any).NikoEv = (-1);
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.text(`<center><b>${'Nikolai [Niko] Volkov'}</b></center>`);
    scene.img(`images/characters/pavlovsk/school/boy/niko/nikomisc/avatars/${((s as any).week ?? 0)}.jpg`);
    scene.text('You shake your head. "No way. I\'m not that kind of girl. I told you that."');
    // TODO-QSP: dynamic text: Niko get noticeably angry. "Come on <<$pcs_firstname>>, I'm not asking you to do...
    scene.text(`Niko get noticeably angry. "Come on ${((s as any).pcs_firstname ?? 0)}, I'm not asking you to donate one of your kidneys. Just a quick…"`);
    scene.text('You cut him off. "I SAID NO!" Niko grabs your head and starts pushing it toward his crotch.');
    scene.text('"Come on, it won\'t take long."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/fight/grab.jpg');
    scene.text('You quickly pull away and slap him, causing him to pause for a second before he raises his hand and smacks you across the face. "YOU FUCKING UNGRATEFUL BITCH! I\'ve done so much for you and you toss it in my face. Get the fuck out and swim!"');
    scene.text('He grabs you by the neck and pushes you off the boat before angrily paddling away as you do your best to swim back to the shore. You arrive at the shore completely drenched, so you hang your clothes on a nearby tree and wait for them to dry.');
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the water.</br>');
    }
    scene.actions([
      { label: 'Get dressed', goto: ['pav_lake', ''] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Sure', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/2/boat/boat3.jpg');
    scene.text('You give him an innocent smile as you nod your head and he strokes on your cheek. "That\'s my girl. I knew I made the right choice with you."');
    scene.text('You reach into Niko\'s pants and wrap your fingers around his penis, gripping it firmly before pulling it out of his pants and gently licking the tip. Niko continues stroking your cheek while giving you an adoring smile.');
    scene.actions([
      { label: 'Suck his dick', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/2/boat/boat4.jpg');
    scene.text('You wrap your lips around Niko\'s dick, taking as much of it into your mouth as you can before licking and sucking the shaft. Niko begins lightly moaning while keeping his eyes on you, making you feel very sexy. His eyes suddenly begin squinting as he groans, filling your mouth with his warm seed. You try your best to swallow it, but with the rocking boat and your poor position on the seat, some of it leaks out of your mouth and onto the floor of the boat.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/2/boat/boat5.jpg');
    // TODO-QSP: dynamic text: Niko pats your head gently. "You were outstanding, <<$pcs_firstname>>. Thank you...
    scene.text(`Niko pats your head gently. "You were outstanding, ${((s as any).pcs_firstname ?? 0)}. Thank you. You are one sexy girl."`);
    scene.text('You give him an innocent smile as he lays back and wraps his arms around you. You both spend the next few hours chatting about your past experiences.');
    scene.actions([
      { label: 'Continue', goto: ['NikoDates', 'date2_2'] },
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

function enterDate2_2(s: GameState, scene: SceneBuilder): void {
  (s as any).NikoDate_Day = ((s as any).daystart ?? 0);
  qspCall(s, 'boyStat', 'A189');
  (s as any).minut = ((s as any).minut ?? 0) + 120;
  qspCall(s, 'stat', '');
  scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((s as any).week ?? 0)}.jpg`);
  scene.text('Once you both caught a few fish, Niko starts paddling the boat back towards the dock, where he gently guides you off the boat before taking the bag of fish and carrying it on his back while leading you back into town.');
  scene.text('"Can you give me a minute to drop these off so they don\'t go bad?"');
  scene.text('"What about my share of the precious cargo?" you sarcastically reply and he chuckles.');
  scene.text('"You can stop by anytime for a good fish dinner. There\'s no way that Yurik and I can finish all these anytime soon." He quickly heads inside before coming back out and giving you a kiss on the cheek. He then takes your hand and leads you towards the train station, where you both board a train to the industrial district of the city.');
  scene.text('As soon as you arrive, he takes you to a bar while talking on the phone. When you arrive at the bar, he hangs up the phone. "Are you ready to have as many drinks as you can take before passing out?"');
  scene.text('You scratch your head. "So you want to get me drunk I see."');
  scene.text('He smirks. "No, I just want to get to know the real you. There\'s a saying which states that you never know, truly know, someone until you see them drunk. So are you ready to have some fun?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Yes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).fakepassport = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/smile3.jpg');
    scene.text('"Sure," you reply. "But how are we going to get inside? We aren\'t exactly the drinking age."');
    scene.text('Niko grins as he pulls out two ID cards. "I had a guy who specializes in fake documents create these for us. That\'s why I needed to take that picture on the train."');
    scene.text('You giggle. "You\'re so clever! Alright, let\'s go."');
    scene.text('Niko happily grabs your hands and leads you into the bar, where he orders a drink for you before searching for some open seats. You end up sitting on some stools.');
    scene.text('"I told you a bit about my family, so what\'s your story?" he asks.');
    scene.actions([
      { label: 'Answer his question', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/2/d1.jpg');
    scene.text('You smile. "My story might be a bit boring. I live with my mother, stepfather, sister and half brother."');
    scene.text('"Have you ever met your biological father?" he asks.');
    scene.text('"Well, my father…" You suddenly see a shadowy figure quickly grab onto Niko and toss him on the ground before reaching out for you.');
    scene.actions([
      { label: 'Pull back', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/stranger/stranger2.jpg');
    scene.text('You try to pull away from him, but he\'s too quick and grabs onto your shirt before pulling you into the restroom. Another man tries to block him, but the burly man quickly punches him, sending him flying into the wall where he slumps over. As you reach the restroom, the burly man begins roughly fondling your breasts. You try to let out a scream, but he covers your mouth and starts undressing you before he suddenly gets pulled off of you.');
    scene.actions([
      { label: 'See what happens', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((s as any).week ?? 0)}.jpg`);
    scene.text('The man throws a punch that misses Niko before Niko counters with a head butt, sending the burly man flying into the wall. Niko climbs on top of him and starts punching him.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/2/d2.jpg');
    scene.text('After a few seconds, Niko climbs off the man and turns to you. "Are you okay? He didn\'t hurt you, did he?"');
    scene.text('You quickly hug him. "I\'m fine. Thank you Niko. I feel so safe with you." You kiss his neck as he leads you back to the bar for a few drinks.');
    scene.actions([
      { label: 'See what happens', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/stranger/stranger2.jpg');
    scene.text('Niko hands you another drink when you see the restroom door open and the burly man steps out, brushes off the dirt from his jacket and casually leaves the bar without looking back. You try to focus on what Niko is saying as he chats about various topics with you.');
    scene.actions([
      { label: 'Continue drinking', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/2/d3.jpg');
    scene.text('After three drinks, you begin feeling so tipsy that you\'re starting to slur your words. Niko chuckles as he hands you a shot glass. "Here. One last shot for the train ride back." He gives you a confident grin as you down the shot before he lifts you up on his shoulder. "Time to take you back." He pays the tab before carrying you out of the bar to the train station.');
    scene.actions([
      { label: 'See what happens', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/train.mp4');
    scene.text('Niko carries you onto the train as you stumble the whole way. Your stomach numbs and your heart races as you feel your body getting weaker, so you lean on Niko until you reach your stop. You look up at the bright lights of the station, where you can feel yourself drifting away…');
    scene.actions([
      { label: '…', goto: ['NikoDates', 'date_rape'] },
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

function enterDateRape(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A189');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/2/d4.jpg');
  scene.text('You open your eyes to see Niko carrying you to his house, you are feeling very lightheaded as you almost fall to the ground. Niko catches you then begins carrying you up the stairs to his place before opening the door, carrying you inside.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Enter', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'strip_all');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/2/Home/1.jpg');
    scene.text('You can feel the room spinning as Niko carries you into his bedroom and drops you on the bed. You look around the room as you lose feeling in your legs. You can faintly feel your clothes being removed before you slowly look down to see Niko spreading your vaginal lips as he looks inside your pussy.');
    if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
      scene.text('Niko smiles widely as he talks to himself. "Ah, a virgin. I\'ve always wanted to fuck a virgin. Lucky me." He then walks toward his desk and pulls out a camera, placing it by the bedside facing you.');
    } else {
      scene.text('Niko shrugs as he talks to himself. "Of course she isn\'t a virgin. That would have been too good." He then walks toward his desk and pulls out a camera, placing it by the bedside facing you.');
    }
    scene.actions([
      { label: 'See what happens', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/2/Home/2.jpg');
    scene.text('Niko removes his pants and spreads your legs as he aligns his penis with your pussy. You hear him moan as he pushes his dick inside your pussy. Your entire body is too numb to feel anything as you look around the room, feeling too lightheaded to understand exactly what\'s happening.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/2/Home/3.jpg');
    scene.text('Thrust after thrust, Niko fucks you before pausing to turn you over. He then starts pounding you from behind.');
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Moan', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/2/Home/4.jpg');
    scene.text('His breathing becomes more rapid as he fucks you faster before he quickly pulls out of you and groans as his cum splatters over your ass. You can slightly feel the warmth of his cum slowly dripping on your ass as Niko takes a few seconds to catch his breath before checking his camera. He then walks up to you and kisses your forehead before leaving the room. You lay still for a few minutes before feeling your consciousness fade…');
    qspCall(s, 'cum_call', 'butt', 'A189', 1);
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: '…', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'restore');
    if (((s as any).NikoEv ?? 0) < 4) {
      (s as any).NikoEv = 4;
    }
    (s as any).NikoDate = 0;
    qspCall(s, 'sleep_simple', 'sleep_until', 6, 0);
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/2/Home/wake.jpg');
    scene.text('You awaken to birds chirping and roll around in the bed before a splitting headache suddenly hits you as Niko walks into the room with a bowl of cereal in his hand and lays down next to you. "Hey you\'re up. You were way too tipsy yesterday, so I took you to my place to catch some shut eye." He takes a spoonful of cereal and puts it in his mouth, chomping down on his breakfast before continuing. "I hope you slept well."');
    scene.text('"I feel awful!" you reply. "My head is killing me."');
    scene.text('Niko chuckles. "You had so many shots yesterday, I couldn\'t keep you away from the bottle!"');
    scene.text('You scratch your head. "Was I really that wild yesterday? I can\'t remember a thing."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/smile1.jpg');
    scene.text('Niko kisses your leg. "You were a bit wild. It was a side of you that I haven\'t seen before and I liked it."');
    scene.text('"Really?" you reply. "Well, I guess I could try cutting loose a bit more often."');
    scene.text('Niko pats your ass gently. "Now that\'s what I like to hear! So would you like some cereal? I have plenty downstairs."');
    scene.text('You shake your head. "No, I need head back home, but thanks for the offer." You give Niko a kiss on the cheek before walking out the room, where Niko guides you out the door.');
    scene.actions([
      { label: 'Walk to the residential district', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
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

function enterCafeteria(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A189');
  (s as any).NikoDate = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/hold.jpg');
  // TODO-QSP: dynamic text: As you get up to walk out of the cafeteria, Niko wraps his arms around your shou...
  scene.text(`As you get up to walk out of the cafeteria, Niko wraps his arms around your shoulders and kisses you on the cheek. "Hey ${((s as any).pcs_nickname ?? 0)}, how is my princess doing?"`);
  scene.text('You smile. "Your princess is doing well and is much happier now that you\'re here." Niko sits down next to you and you both spend the next few minutes gossiping about your classmates.');
  scene.text('He then leans toward you and whispers in your ear. "Do you remember when you said that you wanted to be more daring?"');
  scene.text('"I said I wanted to cut loose more."');
  scene.text('"Yeah, same thing. So how about you be more \'daring\' right now?"');
  scene.text('You tilt your head. "What do you mean?"');
  scene.text('He gives you a wolfish grin. "I want you to suck me off right now." You can feel your face growing red.');
  scene.text('"I… I don\'t know. What if someone sees us?" Niko rubs your back with one hand while he starts unbuttoning his pants with the other.');
  scene.text('"That\'s the fun part. Let\'s see what happens, shall we?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Suck his dick', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/cafeteria/bj.jpg');
    scene.text('Not wanting to disappoint him, you meekly nod your head before slowly lowering yourself, trying your best not to make any quick movements. You slowly wrap your lips around Niko\'s penis, feeling the warmth of his dick in your mouth as you spend the next few minutes doing your best to please him while feeling the sweat dripping down your neck, terrified that someone might see you. Niko slides his hand down your shirt, exposing your breast and causing you to start trembling in fear and wishing that you were invisible.');
    scene.actions([
      { label: 'Make him cum', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth_swallow', 'A189', 1);
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/sex/bj2.mp4');
    // TODO-QSP: dynamic text: After a few minutes, his hand tightens around your breast as his penis begins th...
    scene.text(`After a few minutes, his hand tightens around your breast as his penis begins throbbing in your mouth, causing his cum to shoot down your throat, which you swallow as best you can. Once he's fully spent, he pulls you up and kisses your forehead. "That's my girl, so beautiful and daring too. You really are a precious gem, ${((s as any).pcs_firstname ?? 0)}."`);
    scene.text('His words warm your already rapidly beating heart, leaving you speechless as he gives you a wink before buttoning his pants and walking away.');
    scene.actions([
      { label: 'Watch him walk away', goto: ['gschool_lunch', 'break'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDate3(s: GameState, scene: SceneBuilder): void {
  (s as any).NikoDate_Day = ((s as any).daystart ?? 0);
  qspCall(s, 'boyStat', 'A189');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/3/d.jpg');
  scene.text('As soon as you reach the lake, Niko scoffs. "What the hell are these people doing here?! It\'s normally secluded."');
  scene.text('You see a bunch of people relaxing by the lake and even see some food carts scattered around.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Talk to Niko', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/3/d1.jpg');
    scene.text('You grab onto Niko\'s hand. "Let\'s sit over there."');
    scene.text('Niko chuckles. "Sure thing, let\'s have some fun." He places the beach towel on the ground and lights a cigarette before you both sit down by the shore.');
    scene.text('"My skin feels so dry. Can you help me out?" you ask with a wink and Niko quickly reaches into his bag, pulling out the sunscreen which he starts applying to your skin.');
    scene.actions([
      { label: 'Talk to Niko', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('' + qspUntranslated(s, "FUNC('face_image')>", { location: "NikoDates" }) + '');
    scene.text('"Do you mind if I ask you some more questions about your… family?" you ask as Niko applies the sunscreen. "I\'m really interested in getting to know you better."');
    scene.text('He pauses for a second before replying. "Sure, why not? Ask away."');
    scene.text('"You told me that you had a sister who… passed away, but you never told me what happened to your younger brother or your father."');
    scene.text('He continues applying the sunscreen to your skin as he answers. "After my sister\'s death, my brother and I have never really spoken much, at least not without it ending in a fight."');
    scene.actions([
      { label: 'Continue listening', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/sad2.jpg');
    scene.text('"It wasn\'t my fault, but of course I received some of the blame for Yurik\'s failure. I just can\'t believe how fast it happened. One second she was on the sidewalk holding the cat then… Anyway, our sister died and my brother\'s bitch of a girlfriend went missing shortly after. Good fucking riddance I say. She was nothing but a controlling bitch who deserved what she got…" Niko suddenly places his hand over his mouth, shutting himself up. It seems as if he caught himself saying something he shouldn\'t have…');
    scene.actions([
      { label: 'Go on', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/sad2.jpg');
    scene.text('Realizing that Niko is tensing up, you decide to shift the conversation back to his parents. "What happened to your parents?"');
    scene.text('"They died," he quickly answers.');
    scene.text('"But how?"');
    scene.text('He shrugs and remains silent, not interested in answering.');
    scene.text('"… So what happened to your biological mother?" you ask.');
    scene.text('"I never met her. She left my father shortly after I was born. Yurik told me that she was just a gold digger who only wanted my father\'s money, but after a long heated argument, she left without ever looking back. What a greedy bitch!"');
    scene.text('"Are there any happy memories that you have with your family?"');
    scene.text('He shrugs. "None that aren\'t surrounded in bad memories. Let\'s talk about something else."');
    scene.actions([
      { label: 'Chat with him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('' + qspUntranslated(s, "FUNC('face_image')>", { location: "NikoDates" }) + '');
    scene.text('You spend the next few minutes talking about various topics before Niko interrupts.');
    // TODO-QSP: dynamic text: "Hey <<$pcs_firstname>>, would you consider yourself a daring girl?"
    scene.text(`"Hey ${((s as any).pcs_firstname ?? 0)}, would you consider yourself a daring girl?"`);
    scene.text('You scratch your head. "I don\'t know."');
    scene.text('He grins. "Well let\'s find out right now," he says as he unbuttons his pants. "I dare you to suck me off right now."');
    scene.text('You look at all the people around you. "But there are people around!"');
    scene.text('"So?" he shrugs. "Come on, show me how daring you are. It will be really sexy." You bite your lip as you take one last look around.');
    scene.actions([
      { label: 'Jerk him off', handler: (st: GameState) => {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (2);
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/3/d2.mp4');
    scene.text('You reach down and pull out his penis before wrapping your fingers around it and stroking it firmly. You can feel your heart pounding as you think of what might happen if someone sees you…');
    qspCall(s, 'arousal', 'hj', (-5));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Lick it', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/3/d3.mp4');
    scene.text('After a few seconds, you lean forward and start licking the tip of his penis while occasionally looking around to see if anyone notices what you\'re doing.');
    // TODO-QSP: dynamic text: Niko pats the back of your head. "You're doing great, <<$pcs_nickname>>. Keep it...
    scene.text(`Niko pats the back of your head. "You're doing great, ${((s as any).pcs_nickname ?? 0)}. Keep it up," he says in a soft, encouraging voice. You nod and start slowly sliding his penis into your mouth.`);
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck his dick', handler: (st: GameState) => {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (2);
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/sex/bj1.mp4');
    scene.text('You start eagerly sucking Niko\'s dick, feeling both nervous and excited. You look up at Niko to see a very proud look on his face, informing you that you\'re doing a good job and encouraging you to keep going.');
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue sucking', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/sex/bj2.mp4');
    // TODO-QSP: dynamic text: After a few more seconds, Niko closes his eyes and lightly grunts as a sudden bu...
    scene.text(`After a few more seconds, Niko closes his eyes and lightly grunts as a sudden burst of warm liquid fills your mouth. You do your best to relax your throat and let his seed slide down your throat into your belly. Niko looks down at you as he gently strokes your cheek. "You're so sexy, ${((s as any).pcs_nickname ?? 0)}. I certainly picked the right girl."`);
    scene.text('He then gives you a wink as you lower your head, feeling your cheeks growing red from both Niko\'s words and the realization that you just sucked him off at a public beach.');
    scene.text('"Let\'s go somewhere more private where we can talk without any worry of getting interrupted," he says as he buttons up his pants. You nod your head and Niko leads you to a nearby dock where you both take a seat.');
    qspCall(s, 'cum_call', 'mouth', 'A189', 1);
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/3/d4.jpg');
    scene.text('As you both get comfortably seated, you take this time to ask Niko another personal question. "I hate to keep prying, but I feel that there\'s more to your story that you might need to get off your chest. Can you tell me how your brother died?"');
    scene.text('He takes a few seconds to reply. "There was a fire in our old home and before you ask, no they didn\'t die in the fire. My brother and I set up a Christmas tree, but we never realized how close we placed it to the fireplace. It would have been alright if we didn\'t place rattling ornaments on the tree."');
    scene.text('"How can rattling ornaments cause a fire?" you curiously ask.');
    scene.actions([
      { label: 'Listen to him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/sad2.jpg');
    scene.text('"Our little brother was always drawn to rattling things like bells and the like. He must have seen the bells on the tree and tried to climb it, or maybe knocked it down because the next thing we knew, the house was on fire and our little brother was trapped inside. My father rushed in to save him and managed to get him out. He and my step mother tried to rush him to the hospital but… They never made it… A car crash… None of them survived and nothing else really matters…"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/3/d5.jpg');
    scene.text('A wave of water suddenly splashes on Niko\'s back, causing him to jump up. "Fuck, that was cold! We should probably get going. Are you ready?"');
    scene.actions([
      { label: 'Yes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/3/d6.jpg');
    scene.text('You nod and are preparing to leave when something catches Niko\'s eye. "You\'re wearing the necklace that I gave you, yes?" You look down at the necklace and happily smile as you nod.');
    scene.text('"I really like it. Thank you for giving it to me."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/3/d7.jpg');
    scene.text('Niko chuckles. "I knew that the necklace would look beautiful with you in it…"');
    scene.text('You chuckle. "Don\'t you mean that this necklace would make me look beautiful?"');
    scene.text('He just grins. "I meant what I said."');
    scene.text('You cast your eyes, feeling your face growing flushed. "You\'re too sweet…"');
    scene.text('"I only speak the truth," he says as he continues getting ready to leave.');
    scene.actions([
      { label: 'Prepare to head home', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/3/d8.jpg');
    scene.text('You gather your stuff together and get up as Niko takes you back home. On the way back, you both notice an ice cream stand.');
    scene.text('"Would you like some ice cream?" he asks.');
    scene.text('"Sure," you reply. "I would love some."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/3/d9.jpg');
    scene.text('"Don\'t worry, I won\'t plump you up. I have no interest in dating a cow." He sticks his tongue out as he walks over to the ice cream stand and lets you choose any one you want. You spend the next few seconds looking over the choices before you decide to go with plain vanilla.');
    scene.text('"Make that two vanilla cones," he says and you give him a happy smile as he rubs your lower back while returning the smile.');
    scene.actions([
      { label: 'Wait for ice cream', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/3/d10.jpg');
    scene.text('Niko receives the ice cream cones and hands you one.');
    // TODO-QSP: dynamic text: "You're smoking hot, <<$pcs_nickname>>. Maybe this will cool you down a bit?"
    scene.text(`"You're smoking hot, ${((s as any).pcs_nickname ?? 0)}. Maybe this will cool you down a bit?"`);
    scene.text('You giggle as you take the ice cream. "I always feel hot when you\'re around…"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/3/d11.jpg');
    scene.text('Niko gives you a very pleased smile. "How about we head back to my place for some more alone time then?"');
    scene.text('You give him a seductive grin. "Sounds like fun."');
    scene.text('"Oh we\'ll have a lot of fun," he responds. Let\'s go."');
    scene.text('You head toward Niko\'s home while chatting about various topics along the way.');
    scene.actions([
      { label: 'Follow him', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['NikoDates', 'home'] },
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

function enterHome(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A189');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/charmer1.jpg');
  scene.text('You arrive at his house and Niko holds the door open for you, inviting you inside. He gives your ass a firm smack as you walk in the door. "We only have about two hours before my brother shows up, so let\'s not waste any time." He grabs your hand and leads you to the living room.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'kiss', 5);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/3/home/home1.jpg');
    scene.text('As soon as you enter the living room, Niko starts kissing your neck and pawing at your breasts before pushing you onto the couch as he removes your clothes. You lay back on the sofa, enjoying Niko caressing your body and passionately kissing you as he continues removing your clothes.');
    scene.actions([
      { label: 'Return the kiss', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/3/home/home2.jpg');
    scene.text('Once Niko fully undresses you, he breaks off the kiss and lowers himself down to your waist. You can feel your cheeks growing red as he starts gently licking your clitoris.');
    qspCall(s, 'outfit', 'strip_all');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'arousal', 'kiss', (-10));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/3/home/home3.jpg');
    scene.text('Niko licking your sensitive area causes your thoughts to race.');
    scene.text('"Your turn now," he says as he grabs you by the shoulders and lifts you up before pushing you down on your knees.');
    qspCall(s, 'arousal', 'kiss', 5);
    qspCall(s, 'arousal', 'cuni', (-5));
    qspCall(s, 'arousal', 'foreplay', (-5));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Pull his pants down', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/3/home/home4.jpg');
    scene.text('You eagerly pull his pants down, causing his hard cock to swing out and almost hit you in the face. You slowly stroke the shaft before Niko grabs the back of your head and pushes his dick into your mouth, causing you to gag for a second before the feeling passes and you start sucking.');
    scene.actions([
      { label: 'Continue sucking his dick', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/3/home/home5.jpg');
    scene.text('Niko brushes your hair from your face as he stares into your eyes with a very satisfied grin. You spend the next few minutes sucking his dick, feeling it occasionally throb in your mouth before he pulls you off his dick and drops you onto the couch.');
    scene.actions([
      { label: 'Vaginal', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/3/home/home6.jpg');
    scene.text('He slowly pushes his dick inside you, causing a rush of pleasure as his hard cock pushes its way inside you. You lay back and enjoy the thrusts as you stare into Niko\'s eyes, feeling his lustful gaze almost hypnotizing you into submission, wanting him to fuck you harder while feeling helpless to stop it.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'stomach', 'A189', 1);
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/3/home/home7.jpg');
    scene.text('Niko suddenly pulls out of you as he groans and starts covering your stomach with his seed. You let out a load moan as you feel the warmth of his cum wash over you.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/home/livingroom/couch.jpg');
    scene.text('Niko climbs off you and heads to the kitchen, returning a few seconds later with a beer. He takes a seat on the couch next to you.');
    // TODO-QSP: dynamic text: "You were great, <<$pcs_nickname>>. If you want to wash up, the bathroom is two ...
    scene.text(`"You were great, ${((s as any).pcs_nickname ?? 0)}. If you want to wash up, the bathroom is two rooms down that way." He leans over and gives you a kiss on the cheek.`);
    scene.actions([
      { label: 'Wash up', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore');
  }, goto: ['NikoDates', 'bathroom'] },
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

function enterBathroom(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/volkovHome/Rooms/bathroom.jpg');
  scene.text('The bathroom seems rather clean and contains a sink, a toilet, a <a href="exec:gt \'mirror\', \'start\'">mirror</a> and a bathtub.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Quick wash (0:10)', goto: ['NikoDates', 'quick_wash'] },
    { label: 'Leave', handler: (st: GameState) => {
    if (((s as any).NikoEv ?? 0) === 5) {
      scene.actions([{ label: 'Continue', goto: ['NikoDates', 'yurik_intro'] }]);
    } else {
      if (((s as any).NikoEv ?? 0) === 11) {
        scene.actions([{ label: 'Continue', goto: ['NikoEv2', 'Reward'] }]);
      }
    }
  } },
  ]);
  scene.build();
}

function enterQuickWash(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  (s as any).pcs_hairbsh = 0;
  (s as any).pcs_makeup = 1;
  (s as any).cumspclnt = 1;
  qspCall(s, 'cum_cleanup', '');
  if (((s as any).pcs_sweat ?? 0) < 30) {
    (s as any).pcs_sweat = 15 + (Math.floor(Math.random() * 5) + 0);
  } else {
    (s as any).pcs_sweat = ((s as any).pcs_sweat ?? 0) - (10 + (Math.floor(Math.random() * 5) + 0));
  }
  qspCall(s, 'stat', '');
  scene.text('<center><b>Bathroom</b></center>');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/facecleanse.jpg');
  scene.text('You approach the sink to clean yourself as thoroughly as possible while taking a few seconds to enjoy a splash of warm water on your face, leaving you feeling refreshed as you finish up and walk away from the sink.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Dry off', handler: (st: GameState) => {
    if (((s as any).NikoEv ?? 0) === 5) {
      scene.actions([{ label: 'Continue', goto: ['NikoDates', 'yurik_intro'] }]);
    } else {
      if (((s as any).NikoEv ?? 0) === 11) {
        scene.actions([{ label: 'Continue', goto: ['NikoEv2', 'Reward'] }]);
      }
    }
  } },
  ]);
  scene.build();
}

function enterYurikIntro(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/volkovHome/Rooms/garage/garage.jpg');
  scene.text('As you walk out of the bathroom, you look around for Niko, only to hear loud hammering coming from outside. You follow the noise to an old garage, where you push the door open and see a motorcycle with a lot of tools and parts scattered around the room. You begin examining the parts when you suddenly hear someone shout "Hands off my shit!"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Turn around', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/yurikev/avatars/yurik.jpg');
    scene.text('You turn around to see a man covered in tattoos standing across the room from you. You take a closer look and recognize him as the burly bearded man that attacked you before. "You\'re the one who attacked me!" you gasp.');
    scene.text('The bearded man chuckles. "Oh yeah. you\'re the girl that Nikolai is dating. He got you here a lot quicker than I thought. That boy works fast, I see." The man approaches you as you let out a scream, causing Niko to storm into the room.');
    scene.actions([
      { label: 'See what Niko does', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (!(s as any).YurikEv) (s as any).YurikEv = {}; (s as any).YurikEv['Name'] = 'Yurik';
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/yurikev/avatars/yurik1.jpg');
    scene.text('"What the fu… Oh shit! <i>Yurik</i>? You said you were going to be out all day!"');
    scene.text('Yurik grins. "I was, until I noticed how excited you were when I told you. I figured that you were trying to steal my revolver again, but I see that you were just delivering my gift to me early. I never should have doubted you, baby brother."');
    scene.actions([
      { label: 'Turn to Niko', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((s as any).week ?? 0)}.jpg`);
    scene.text('You quickly turn to Niko. "What\'s he talking about? What does he mean by \'gift\'?"');
    scene.text('Niko quickly jogs up to Yurik and the two whisper to each other while clearly not agreeing. They argue for a few seconds until Yurik finally shakes his head. "You better deliver Niko. I won\'t wait long." He then leaves the room, clearly upset with the outcome.');
    scene.actions([
      { label: 'Watch Yurik leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/smile2.jpg');
    scene.text('After Yurik angrily storms out of the room, Niko wraps his arm around your shoulder. "That brother of mine is such a wild card. Are you alright?"');
    scene.text('You pull away from him. "I\'ll ask again. What did he mean by \'gift\'? You didn\'t send him after me, did you?"');
    scene.text('He chuckles for a few seconds before replying. "Of course not! He was just talking… about a bet we had a few days ago where I promised him fifty rubles if he won an arm wrestling contest. That\'s all, really."');
    scene.text('You stare him in the eyes for a few seconds.');
    scene.actions([
      { label: 'Listen to Niko', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/charmer3.jpg');
    // TODO-QSP: dynamic text: His posture lowers. "I know it sounds hard to believe, but please try to believe...
    scene.text(`His posture lowers. "I know it sounds hard to believe, but please try to believe me. I would never do anything to harm you. You mean everything to me, ${((s as any).pcs_firstname ?? 0)}. All the time I've spent with you has been the greatest time in my life… I love you." He lifts your hands to his face and kisses them repeatedly.`);
    scene.actions([
      { label: 'I believe you', handler: (st: GameState) => {
    (s as any).NikoDate = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/kiss1.mp4');
    // TODO-QSP: dynamic text: His eyes light up as he starts kissing your hands even faster. "Thank you, <<$pc...
    scene.text(`His eyes light up as he starts kissing your hands even faster. "Thank you, ${((s as any).pcs_firstname ?? 0)}! I always knew that you were one of the good ones. Want to watch some TV together?"`);
    scene.text('You give him a smile. "I\'d love to, but I need to head home. I\'ll see you tomorrow."');
    scene.text('He returns the smile. "I always look forward to seeing you again."');
    scene.text('He walks you out the front door, where he gives you a passionate kiss before closing the door.');
    scene.actions([
      { label: 'Walk away', goto: ['pav_residential', ''] },
    ]);
  } },
      { label: 'I don\'t believe you', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/charmer2.jpg');
    scene.text('You pull your hands away from him. "This doesn\'t add up."');
    // TODO-QSP: dynamic text: He frowns. "I know this doesn't make too much sense, but sometimes the truth sou...
    scene.text(`He frowns. "I know this doesn't make too much sense, but sometimes the truth sounds confusing. I care for you, ${((s as any).pcs_firstname ?? 0)} so can you please try to believe me?" He gives you a cute sad face.`);
    scene.actions([
      { label: 'Alright, I believe you', handler: (st: GameState) => {
    (s as any).NikoDate = 0;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/kiss1.mp4');
    // TODO-QSP: dynamic text: His eyes light up as he starts kissing your hands even faster. "Thank you, <<$pc...
    scene.text(`His eyes light up as he starts kissing your hands even faster. "Thank you, ${((s as any).pcs_firstname ?? 0)}! I always knew that you were one of the good ones. Want to watch some TV together?"`);
    scene.text('You give him a smile. "I\'d love to, but I need to head home. I\'ll see you tomorrow."');
    scene.text('He returns the smile. "I always look forward to seeing you again."');
    scene.text('He walks you out the front door, where he gives you a passionate kiss before closing the door.');
    scene.actions([
      { label: 'Walk away', goto: ['pav_residential', ''] },
    ]);
  } },
      { label: 'No, I don\'t believe you <font color=#FF00FF>[Break up with Niko]</font>', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'set', 'A189', 10);
    (s as any).NikoVolkovQW = (-1);
    (s as any).NikoLuv = (-8);
    (s as any).NikoEv = 0;
    (s as any).NikoDate = (-1);
    (s as any).NikoPayback = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img(`images/characters/pavlovsk/school/boy/niko/nikomisc/avatars/${((s as any).week ?? 0)}.jpg`);
    scene.text('You shake your head. "I\'m not falling for it, Niko! You had your brother attack me so you could act tough and pretend to be my knight in shining armor."');
    scene.actions([
      { label: 'Wait for his response', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/fight/grab.jpg');
    scene.text('He gets noticeably angry at your response. "I\'VE DONE SO MUCH FOR YOU! HOW COULD YOU JUST TURN ON ME LIKE THIS?" He clenches his fist and grabs you by the throat before winding his fist to punch you.');
    scene.actions([
      { label: 'Protect yourself', handler: (st: GameState) => {
    (s as any).NikoDate = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/yurikev/avatars/slap.jpg');
    scene.text('Just as Niko is about to punch you, he\'s suddenly slapped and knocked back. You turn to see Yurik with a stern look on his face. "What has come over you? Haven\'t I taught you better than to use a closed fist on a girl? Have some self respect, boy!"');
    scene.actions([
      { label: 'See what happens', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/bruised1.jpg');
    scene.text('Niko remains silent as he rubs his face and Yurik turns to you. "Get out of here, girl! Niko and I have a debt to discuss." He pushes you out of the room before slamming the door closed behind you. You quickly leave the house without looking back.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
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
  } },
  ]);
  scene.build();
}

function enterHallwayStrip(s: GameState, scene: SceneBuilder): void {
  (s as any).NikoDate_Day = ((s as any).daystart ?? 0);
  qspCall(s, 'boyStat', 'A189');
  qspCall(s, 'stat', '');
  scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((s as any).week ?? 0)}.jpg`);
  scene.text('As you enter the cafeteria, Niko grabs your hand and whispers in your ear. "Are you ready for another \'daring\' activity?"');
  scene.text('You look back to him and say…');
  // TODO-QSP: end
  scene.actions([
    { label: 'Sounds fun', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).NikoEv = 6;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/smile1.jpg');
    scene.text('Niko leads you out of the cafeteria as the other students enter. You wait for a few seconds before he leans forward and whispers in your ear. "Take off your clothes."');
    scene.text('You look at him in shock. "But we\'re in the hallway outside of the cafeteria! Someone will see me for sure."');
    scene.text('He just grins. "Everyone in there is too focused on chatting and eating. I doubt anyone will even look in this direction and if they do, then I\'ll cover you up before anyone recognizes you. You can trust me."');
    scene.actions([
      { label: 'Start stripping', handler: (st: GameState) => {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (1);
    qspCall(s, 'arousal', 'flash', 2, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/strip/strip1.jpg');
    scene.text('You look around to make sure that no one is looking before slowly reaching for your shirt and sliding it off while looking back at Niko, seeing the pleased grin on his face as you continue stripping for him. You constantly look back at the cafeteria, checking if someone has noticed you. After removing your shirt, you look Niko in the eye. "There… I took off my top… I feel more daring now… Thank you, but I should go now." You then quickly try to put on your top when Niko grabs it.');
    scene.text('"Come on now, don\'t let fear get the better of you. Take it all off."');
    scene.text('You grab onto Niko\'s hand, "Please… I… I can\'t. Someone will see me."');
    scene.text('"Don\'t get cold feet now. Take it all off," he whispers in your ear.');
    scene.actions([
      { label: 'Continue stripping', handler: (st: GameState) => {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (2);
    qspCall(s, 'outfit', 'strip_all');
    qspCall(s, 'arousal', 'flash', 2, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/strip/strip2.jpg');
    scene.text('You can feel your heart racing as you meekly nod and start fully undressing, not even checking if anyone is watching anymore as your hands tremble.');
    // TODO-QSP: dynamic text: Niko rubs on his crotch. "Damn <<$pcs_firstname>>. You're so beautiful and so fu...
    scene.text(`Niko rubs on his crotch. "Damn ${((s as any).pcs_firstname ?? 0)}. You're so beautiful and so fucking sexy."`);
    scene.text('You can feel your heart pounding and cheeks completely flushed as you give Niko a warm smile. "Thanks, I…" Your thoughts are racing too fast to finish your sentence as Niko takes out his phone.');
    scene.text('"Why don\'t you give me some poses? I need a new wallpaper for my phone."');
    scene.actions([
      { label: 'Pose', handler: (st: GameState) => {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (2);
    qspCall(s, 'arousal', 'flash', 2, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/strip/strip3.jpg');
    scene.text('You start striking multiple poses, being sure to look back at Niko after each pose, who rubs his crotch as he films you on his phone. You can feel your heart racing at the thrill of posing naked at school. Niko gives you an approving nod. "Sit down and spread your legs."');
    scene.actions([
      { label: 'Spread your legs', handler: (st: GameState) => {
    (s as any).NikoEv = 6;
    qspCall(s, 'arousal', 'flash', 2, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/strip/strip4.jpg');
    scene.text('You do exactly as he says while completely forgetting about where you are. After a minute of posing, you suddenly hear someone say "Dude, check out this girl! She\'s hot."');
    scene.text('You suddenly remember where you are and franticly start grabbing your clothes as Niko puts his hand on your shoulder. "Relax, those guys weren\'t talking about you." He then points at two students looking at pictures of girls on their phones. You let out a sigh of relief as Niko\'s grip on your shoulder tightens. "I want you to suck me off, right now."');
    scene.actions([
      { label: 'Suck his dick', handler: (st: GameState) => {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (2);
    scene.img('images/shared/sex/blowjob/kotovbj23.mp4');
    scene.text('You can feel your heart pounding with both fear and excitement as Niko unbuttons his pants and pulls out his cock, stroking it as he stares at your body. You drop to your knees and wrap your lips around his dick.');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'arousal', 'bj', (-5));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Make him cum', handler: (st: GameState) => {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (2);
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/cum/swallow4.mp4');
    // TODO-QSP: dynamic text: You quicken your pace until you see Niko's head slam into the wall as he shoots ...
    scene.text(`You quicken your pace until you see Niko's head slam into the wall as he shoots his warm seed into your mouth. You do your best to swallow every drop of his warm nectar, despite it's sharp, tart taste before Niko looks down to you. "Thank you ${((s as any).pcs_firstname ?? 0)}. You are truly a goddess. Now let's get you dressed before someone notices us."`);
    scene.text('He kneels down and picks up your clothes before helping you get dressed while occasionally checking to see if anyone has noticed. Once you\'re fully dressed, he whispers in your ear. "You were extremely daring today, I look forward to next time." He gives you a kiss on the cheek before walking back into the cafeteria.');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'cum_call', 'mouth_swallow', 'A189', 1);
    qspCall(s, 'arousal', 'bj', (-5));
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Enter the cafeteria', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore');
  }, goto: ['gschool_lunch', 'lunch'] },
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
    { label: 'I can\'t right now', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/sad2.jpg');
    scene.text('He just shrugs. "Too bad. I must have caught you at a bad time. I\'ll try again later. Until then stay sexy." He gives your ass a firm smack before turning around and walking away.');
    scene.actions([
      { label: 'Enter the cafeteria', goto: ['gschool_lunch', 'lunch'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAfterSchool(s: GameState, scene: SceneBuilder): void {
  (s as any).NikoDate_Day = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'boyStat', 'A189');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/hold.jpg');
  scene.text('As you walk out of the school, Niko wraps his arms around your neck and whispers in your ear. "What\'s my daring girl doing on such a fine day?"');
  scene.text('You turn to face him, flashing him a sweet smile. "Just waiting for my boyfriend to surprise me with an exciting activity."');
  scene.text('He chuckles. "I have some plans for you. Are you ready for some daring activities?"');
  qspCall(s, 'willpower', 'misc', 'resist', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'I can\'t right now [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'I can\'t right now [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/sad2.jpg');
    scene.text('"I\'m sorry to hear that, maybe another time then?" he says.');
    scene.text('"You bet," you reply and lean forward to give him a kiss on the cheek before walking away.');
    scene.actions([
      { label: 'Move away', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Yes', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/jewelry/collar.jpg');
    scene.text('He pulls out a purple and black collar and dangles it in front of you. "You\'ll be wearing this today as we go for a stroll." You look at the collar while nervously biting your lip. Niko wraps his arm around your neck and takes you behind the school.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'strip_all');
    qspCall(s, 'arousal', 'flash', 5, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/exhibition/strip1.jpg');
    scene.text('When you reach the back of the school, Niko orders you to undress. You meekly nod your head and start removing your clothes until you\'re completely naked. "Why don\'t you crawl like a good pet while I put this collar on you?" You drop to your knees and start crawling.');
    scene.actions([
      { label: 'Continue crawling', handler: (st: GameState) => {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'arousal', 'flash', 5, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/locker/wos.jpg');
    scene.text('After a few seconds, Niko approaches you and places the collar around your neck before attaching a leash to it. "Let\'s go for a walk, toward the courtyard."');
    scene.text('Your heart immediately skips a beat. "I can\'t walk around like this! Everyone is out there and will see me for sure."');
    scene.text('"Not feeling daring enough?" he grins.');
    scene.text('You quickly start putting your clothes back on. "There\'s no way I can do this! I need to go!"');
    scene.text('Niko sighs. "Okay, how about we just walk around fully clothed? Would that work?"');
    scene.text('You sigh in relief. "That will be fine."');
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'restore');
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (1);
    qspCall(s, 'arousal', 'BDSM', 5, 'humiliation');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/exhibition/clothed1.jpg');
    scene.text('After you are fully dressed then Niko pulls up on the collar, bringing you to your feet. "Let\'s go for a walk." You respond, "With the collar on?" Niko replies, "Well of course. What fun would a regular walk be?"');
    scene.actions([
      { label: 'Follow him', handler: (st: GameState) => {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (1);
    qspCall(s, 'arousal', 'BDSM', 5, 'humiliation');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/exhibition/clothed2.jpg');
    scene.text('You nod your head then begin walking with Niko. You both spend the next few minutes, walking around town while chatting with Niko. Every once in a while someone would stop and stare at the collar and leash around your neck while you pretend not to notice and keep walking. After a few more minutes, Niko pulls you toward him, using the collar, "I want you to start crawling." You reply, "But I…" Niko cuts you off, "Don\'t worry, we are pretty much at the end of our walk anyway."');
    scene.actions([
      { label: 'Crawl', handler: (st: GameState) => {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (2);
    qspCall(s, 'arousal', 'BDSM', 5, 'humiliation');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/exhibition/clothed3.mp4');
    scene.text('You drop down on your hands and knees and start crawling. You can see people staring at you as you crawl behind Niko like a pet. The hard gravel pressed against your hands and knees is increasing your discomfort, but the thought of becoming more confident, daring and making Niko happy drives you to continue. After a few seconds, you suddenly hear someone say "What do we have here? A cute little puppy and her owner?"');
    scene.actions([
      { label: 'Turn around', handler: (st: GameState) => {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (1);
    qspCall(s, 'arousal', 'BDSM', 2, 'humiliation');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/10.jpg');
    scene.text('You quickly turn to see Dan leaning over you as Niko laughs. "I\'m just taking my girl for a walk."');
    // TODO-QSP: dynamic text: Dan smirks as he looks down at you. "Is that <<$pcs_firstname>>? Any chance I co...
    scene.text(`Dan smirks as he looks down at you. "Is that ${((s as any).pcs_firstname ?? 0)}? Any chance I could buy this pet of yours?"`);
    scene.actions([
      { label: 'Listen', handler: (st: GameState) => {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (2);
    qspCall(s, 'arousal', 'BDSM', 5, 'humiliation');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/exhibition/denis.jpg');
    scene.text('Niko chuckles. "How much are you offering?"');
    scene.text('Dan smirks. "I have a few coins and a condom wrapper."');
    scene.text('"Sold!" Niko replies and the boys both laugh as Dan pets your head.');
    // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, you can always stop by my place for a clothing optional ...
    scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)}, you can always stop by my place for a clothing optional party. Don't worry, I have a special chew toy for you to nibble on." He chuckles as he walks away and Niko pats your head.`);
    scene.text('"That guy can be a wild card at times. I hope you enjoyed our adventure today."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).NikoEv = 7;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/kiss2.mp4');
    scene.text('Niko kneels down in front of you and removes the collar from your neck before kissing your lips passionately for a few seconds and gently stroking your cheek. "You\'ll always be my perfect little princess. I have an important test to take tomorrow, so I will be very busy, but feel free to stop by the disco and we can have a good time." He then stands up and walks away.');
    scene.actions([
      { label: 'Stand up', goto: ['pav_residential', ''] },
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

function enterDisco(s: GameState, scene: SceneBuilder): void {
  (s as any).NikoDate_Day = ((s as any).daystart ?? 0);
  qspCall(s, 'boyStat', 'A189');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((s as any).week ?? 0)}.jpg`);
  // TODO-QSP: dynamic text: As you enter the disco, someone gives your ass a firm smack, causing you to hop ...
  scene.text(`As you enter the disco, someone gives your ass a firm smack, causing you to hop up in shock. You quickly dart around to see Niko with a confident smile on his face. "Hey ${((s as any).pcs_nickname ?? 0)}, I'm glad that you're here. This place has been so dull today, but with you here, the party can actually start."`);
  scene.text('You return the smile. "Party huh? I\'m always ready to party."');
  scene.text('He hands you a bottle. "Care for a drink?"');
  qspCall(s, 'willpower', 'drink', 'resist', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'I really need to go [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'I really need to go [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/sad2.jpg');
    scene.text('He just shrugs. "Too bad. I really wanted to spend some time with you today, but if you have something important to do then I won\'t keep you from it."');
    scene.text('You give him a kiss on the cheek. "Maybe some other time."');
    scene.text('"I\'d like that," he smiles. "Goodbye for now."');
    scene.text('You wave at Niko as you walk away.');
    scene.actions([
      { label: 'Move away', goto: ['pav_disco', ''] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Drink', handler: (st: GameState) => {
    qspCall(s, 'drugs', 'alcohol', 'vodka');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/rekshome/party/party_rex_party_gost_2_2.mp4');
    scene.text('You happily take the bottle and give Niko a wink. You both take a seat and start chatting about various topics as Niko continues pouring you more beer. After a few minutes, you start feeling the alcohol kicking in, causing you to feel groggy as Niko grabs your ass. "Are you up for a dance?"');
    scene.actions([
      { label: 'Dance', handler: (st: GameState) => {
    qspCall(s, 'exp_gain', 'danc', Math.floor(Math.random() * 3) + 1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/disco/dance1.mp4');
    scene.text('"You bet I am!" you say as you grab Niko\'s hand and lead him to the dance floor, where you both spend the next few minutes dancing while you occasionally grind against him, feeling his hard cock rubbing against your ass.');
    scene.actions([
      { label: 'Grind on Niko', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/disco/dance2.mp4');
    scene.text('Knowing how turned on he is fills you with a rush of excitement as you continue teasing his cock with your ass before Niko leans his head over your shoulder. "I want you to suck my dick, right now." You feel your heart racing as you look around and see all the people. Niko notices that you\'re not comfortable, so he leads you to a corner of the dance floor behind some empty chairs where he strokes your cheek. "How about we do it here?"');
    scene.actions([
      { label: 'Unbutton his pants', handler: (st: GameState) => {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/blowjob/kotovbj2.mp4');
    scene.text('You feel too lightheaded to resist, so you drop down to your knees in front of Niko and unbutton his pants. His hard dick springs out of his pants and almost hits you in the face as you feel your heart racing. Niko gently strokes your cheek, causing you to feel more at ease.');
    scene.actions([
      { label: 'Stroke his cock', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 2);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/disco/bj1.mp4');
    scene.text('You stroke his dick before licking the tip of it in a circular motion while staring him in the eye, noticing his lustful gaze as he watches you.');
    scene.actions([
      { label: 'Suck his dick', handler: (st: GameState) => {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (1);
    qspCall(s, 'arousal', 'bj', 3);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/disco/bj2.mp4');
    scene.text('Wanting to please Niko, you slide his dick into your mouth and start licking and sucking it intently. Niko moans and grabs your hair as you continue sucking his dick. His eyes start squinting as you pick up the pace, wanting him to cum for you.');
    scene.actions([
      { label: 'Make him cum', handler: (st: GameState) => {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (1);
    qspCall(s, 'cum_call', 'mouth_swallow', 'A189', 1);
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/cum/swallow3.mp4');
    scene.text('Niko\'s head suddenly jerks back as he bites his lip and shoots his cum down your throat. You do your best to swallow every drop, not wanting any to go to waste.');
    scene.actions([
      { label: 'Lick his dick clean', handler: (st: GameState) => {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (1);
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/disco/bj1.mp4');
    scene.text('You finish licking the cum off his dick when Niko leans forward and gives you a kiss on the forehead. "That\'s my girl, getting braver every day. I\'m gonna go clean up. Be right back."');
    scene.text('He walks toward the restroom, leaving you by yourself. You see a few guys snickering as they both whisper to each other. You slowly stand up, feeling your face growing red. You walk to the other side of the dance floor while keeping an eye out for Niko.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 5);
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/pavlovsk/resident/rekshome/party/party_rex_party_gost_13_2.mp4');
    scene.text('You\'re waiting for Niko when you suddenly feel a hand sliding up your skirt and rubbing your clitoris. "Oh, Niko…" you whisper as you spread your legs and tilt your head back, enjoying the sensation as the rubbing gets more rapid before you feel his fingers enter your vagina, gripping your g-spot and rubbing it firmly.');
    scene.actions([
      { label: 'Turn around and kiss him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big10.jpg');
    scene.text('You turn and wrap your arms around the man behind you, but quickly recoil in shock when you realize that it\'s Dan, not Niko. "What the fuck are you doing, Dan?" you exclaim.');
    scene.text('He chuckles. "I was just giving you what you wanted. I didn\'t hear you complaining between the moans." You push Dan away, who cackles as he walks away.');
    scene.actions([
      { label: 'Look for Niko', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/disco/valentin.jpg');
    scene.text('You stumble around looking for Niko and find him drinking with Valentin. "Niko! You said that you\'d… Be right back. I was waiting… For you…"');
    scene.text('"Oh shit, I totally forgot! Sorry, would you like me to walk you home?"');
    scene.text('"It\'s cool," you reply. "We all forget things sometimes… I\'ll be fine on my own."');
    scene.actions([
      { label: 'Wait for his response', handler: (st: GameState) => {
    (s as any).NikoEv = 8;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/2/d4.jpg');
    scene.text('"Damn Niko, she looks wasted! You should probably take her home," Valentin says.');
    // TODO-QSP: dynamic text: Niko looks at you. "You're right. Come on <<$pcs_firstname>>, I'm taking you hom...
    scene.text(`Niko looks at you. "You're right. Come on ${((s as any).pcs_firstname ?? 0)}, I'm taking you home."`);
    scene.text('You try to object. "I\'m fine… I… I can…"');
    scene.text('He igrores your protests and lifts you onto his back before carrying you home.');
    scene.actions([
      { label: 'Rest on Niko\'s back', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['korrPar', ''] },
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
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterAfterSchool2(s: GameState, scene: SceneBuilder): void {
  (s as any).NikoDate_Day = ((s as any).daystart ?? 0);
  qspCall(s, 'boyStat', 'A189');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/hold.jpg');
  scene.text('As you walk out of the school, Niko wraps his arms around your neck and whispers in your ear. "How is my fearless girl doing today?"');
  scene.text('You turn to face him, flashing him a sweet smile. "I\'m feeling a lot better with you here."');
  scene.text('His smile widens. "How about we do something really daring today?"');
  qspCall(s, 'willpower', 'misc', 'resist', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'I can\'t right now [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'I can\'t right now [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/sad2.jpg');
    scene.text('"I\'m sorry to hear that," he replies. "Maybe another time then?"');
    scene.text('"You bet," you reply and lean forward to give him a kiss on the cheek before walking away.');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Sure', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/jewelry/collar.jpg');
    scene.text('Niko pulls out the purple and black collar from the other day and dangles it in front of you. "How about we go through with the plan I had last time? I want you to wear only this collar as we go for a nice stroll through the school. The school is pretty much empty right now, so I doubt that anyone will see us."');
    scene.text('You nervously bit your lip. "I guess we could try that. You\'ll cover me up if we get caught, right?"');
    scene.text('"Of course I will. I\'ll always keep you safe. You can trust me." He then leads you behind the school.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'strip_all');
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (1);
    qspCall(s, 'arousal', 'flash', 5, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/exhibition/strip2.jpg');
    scene.text('When you reach the back of the school, he orders you to strip. You start undressing as Niko stares at your body with a very confident smile on his face. Once you\'re completely nude, he says "Good. Now crawl up to me like a good little pet."');
    scene.text('You drop to your hands and knees and start crawling towards him in the sexiest way you can. Niko kneels down in front of you and places the collar around your neck. Once the collar is firmly in place, Niko runs his hands down your back and starts squeezing your ass firmly. "Alright, let\'s get moving."');
    scene.text('He starts leading you towards the school.');
    scene.actions([
      { label: 'Follow him', handler: (st: GameState) => {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (2);
    qspCall(s, 'arousal', 'flash', 5, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/exhibition/crawl1.jpg');
    // TODO-QSP: dynamic text: You can feel your heart and thoughts racing as Niko leads you down the stairs to...
    scene.text(`You can feel your heart and thoughts racing as Niko leads you down the stairs towards the back door of the school. "You're doing great ${((s as any).pcs_nickname ?? 0)}. You look so damn sexy right now." You give him a strained smile as your body trembles.`);
    scene.text('You arrive at the back door and Niko opens it before leading you inside.');
    scene.actions([
      { label: 'Enter the school', handler: (st: GameState) => {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (2);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'arousal', 'flash', 5, 'exhibitionism', 'humiliation');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/exhibition/crawl2.mp4');
    scene.text('You enter the school and Niko leads you further inside. You can hear some people talking in one of the nearby rooms and quickly look up at Niko. "Someone\'s here!"');
    scene.text('He just grins. "Well let\'s hope they don\'t see us then." Your heart is pounding as Niko gives your collar a firm tug forward and stands right in front of you. "Suck my dick."');
    scene.actions([
      { label: 'Suck his dick', handler: (st: GameState) => {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (2);
    qspCall(s, 'arousal', 'bj', 5, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/blowjob/kotovbj23.mp4');
    scene.text('You obediently wrap your lips around his dick and start eagerly sucking it.');
    scene.actions([
      { label: 'Make him cum', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/cum/swallow4.mp4');
    scene.text('You suddenly hear Niko groan as he shoots his load down your throat, which you do your best to swallow before you slowly look up at him as he buttons up his pants. "You were outstanding today. I always have a blast when I\'m with you. Here are your clothes. You should get dressed before anyone sees us."');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'cum_call', 'mouth_swallow', 'A189', 1);
    qspCall(s, 'arousal', 'bj', (-5));
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    (s as any).NikoEv = 9;
    qspCall(s, 'outfit', 'restore');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/smile1.jpg');
    scene.text('You grab your clothes and start getting dressed in the hallway, not even worried about anyone seeing you anymore. After you finish getting dressed, Niko gives you a firm hug. "You really impressed me today and are becoming quite fearless. I need to get going, but make sure to pay me a visit at lunchtime. I\'ll have a special activity ready." He gives your ass a firm smack before walking out of the school building.');
    scene.actions([
      { label: 'Leave the school', goto: ['gschool_grounds', 'main'] },
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

function enterTeacherBlock(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/teacher/raven/angry.jpg');
  scene.text('Niko wraps his arm around your neck and starts leading you to the locker room when you suddenly hear a voice behind you. "No walking in the halls until class is back in session!" You turn to see Ms Braakman standing in the hallway, looking very unhappy with the two of you.');
  scene.text('"Come on teach, we\'re aren\'t doing anything wrong!" Niko replies with his best seductive smile.');
  scene.text('"It\'s \'we are not doing anything wrong\'," she states. You\'re not sure why, but being corrected causes Niko to tense up. "You know the rules," she continues. "During lunch, you have to stay in the cafeteria, the open classroom or the hallway between them. We already let you hang out in the stairwell, so don\'t push it. Now unless you two want detention, I don\'t want to see you here again. Understood?"');
  scene.text('Niko grunts. "Fine! You really need to lighten up." He then lowers his voice and mutters under his breath. "Better yet, try getting laid. It would help you not be such an up tight bitch."');
  scene.text('Ms Braakman scowls. "What was that?"');
  scene.text('Niko starts to seeth, but puts on a sweet smile when he turns back towards her. "Nothing, we were just talking about what we wanted for lunch."');
  scene.text('Ms Braakman points in the direction of the cafeteria. "Cafeteria, NOW!"');
  scene.text('Niko pulls you in close to him and kisses the side of your head. "Don\'t worry, we\'ll get our chance to have some fun."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk away', goto: ['gschool_lunch', 'break'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'date1_1':
      enterDate1_1(s, scene);
      break;
    case 'stranger_danger':
      enterStrangerDanger(s, scene);
      break;
    case 'date1_2':
      enterDate1_2(s, scene);
      break;
    case 'home1':
      enterHome1(s, scene);
      break;
    case 'home_sad':
      enterHomeSad(s, scene);
      break;
    case 'date2':
      enterDate2(s, scene);
      break;
    case 'date2_2':
      enterDate2_2(s, scene);
      break;
    case 'date_rape':
      enterDateRape(s, scene);
      break;
    case 'cafeteria':
      enterCafeteria(s, scene);
      break;
    case 'date3':
      enterDate3(s, scene);
      break;
    case 'home':
      enterHome(s, scene);
      break;
    case 'bathroom':
      enterBathroom(s, scene);
      break;
    case 'quick_wash':
      enterQuickWash(s, scene);
      break;
    case 'yurik_intro':
      enterYurikIntro(s, scene);
      break;
    case 'hallway_strip':
      enterHallwayStrip(s, scene);
      break;
    case 'after_school':
      enterAfterSchool(s, scene);
      break;
    case 'disco':
      enterDisco(s, scene);
      break;
    case 'after_school2':
      enterAfterSchool2(s, scene);
      break;
    case 'teacher_block':
      enterTeacherBlock(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const NikoDates: LocationDef = {
  name: 'NikoDates',
  title: '<<"Nikolai [Niko] Volkov">>',
  region: 'other',
  locationType: 'public_indoors',
  enter: enter,
};
