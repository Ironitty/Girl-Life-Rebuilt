import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDate1_1(s: GameState, scene: SceneBuilder): void {
  (s as any).NikoDate_Day = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/1/d.jpg');
  scene.text('As you ride the train, Niko pulls out his phone. "Would you like to take a photo together?" You give him a smile and nod as he wraps his arm around your waist and pulls you towards him. He then lifts his phone above you before snapping a photo. You spend the rest of the journey discussing your favorite musical artists and bands.');
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
  (s as any).YurikEv['Stranger'] = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((s as any).week ?? 0)}.jpg`);
  scene.text('As you walk over to the boxing game, Niko pats on his pockets. "Oh shit! I think I dropped my wallet back there. Give me a minute," he says before quickly running off.');
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
        { label: 'I can\'t [+$func(\'willpower\', \'get_willcost_string\'...]' }, // TODO-QSP: empty action body
        { label: 'Follow him', goto: ['NikoDates', 'home_sad'] },
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
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Disagree', handler: (st: GameState) => {
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
      { label: 'I can\'t', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
    ]);
  } },
    ]);
  } },
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
    default:
      enterDate1_1(s, scene);
      break;
  }
}

export const NikoDates: LocationDef = {
  name: 'NikoDates',
  title: '<<"Nikolai [Niko] Volkov">>',
  region: 'other',
  locationType: 'public_indoors',
  description: ['As you ride the train, Niko pulls out his phone. "Would you like to take a photo together?" You give him a smile and nod as he wraps his arm around your waist and pulls you towards him. He then lifts his phone above you before snapping a photo. You spend the rest of the journey discussing your favorite musical artists and bands.'],
  enter: enter,
};
