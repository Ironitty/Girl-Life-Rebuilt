import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterPark(s: GameState, scene: SceneBuilder): void {
  if (((s as any).fame ?? 0)?.['pav_sex'] < 230) {
    qspCall(s, 'fame', 'pav', 'sex', 250);
  }
  qspCall(s, 'fame', '');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((s as any).week ?? 0)}.jpg`);
  scene.text('Niko turns to you as he leads you through the park. "So I know this guy that can completely fix your reputation, but when I spoke to him, he was asking for a lot of money to do it. So I figured, if we work together, then we could make the money to pay him for helping us."');
  scene.text('"Who is this friend exactly? And can he really fix my reputation?" you ask.');
  scene.text('"Well, he\'s kind of a… crime lord…" he replies. "But don\'t worry. As long as we pay up, then we have nothing to fear. He can get anything he wants. This guy is fearsome, but always true to his word."');
  scene.text('"But how much does he want exactly?"');
  scene.text('"Uh… Don\'t worry about that…" he says in an unconvincing tone. "I\'ll handle that when the time comes. Just know that it\'s a lot!"');
  scene.text('You shake your head. "How the hell will we be able to pay \'a lot\' to this man?"');
  scene.actions([
    { label: 'Listen to his reply', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/park/shady.jpg');
    scene.text('"I figured out a great way to make money fast. Just bear with me."');
    scene.text('You sigh. "Alright. What do I need to do exactly?"');
    // TODO-QSP: dynamic text: "Just follow me," he says and leads you through the park and behind the cinema. ...
    scene.text(`"Just follow me," he says and leads you through the park and behind the cinema. When you arrive, you see two men looking at you with a lustful gaze as Niko stops you. "Listen ${((s as any).pcs_firstname ?? 0)}. Those guys over there are going to help us by giving us money, but they kind of, need you to do something first."`);
    scene.text('You look back at Niko with a frown. "Do I have to have sex with them?"');
    scene.text('He wraps his arm around your neck. "You only need to suck them off. That\'s all."');
    scene.text('You lower your head. "I don\'t want to please anyone but you Niko."');
    scene.text('He strokes your cheek. "You\'ll be pleasing me by doing this. The money you earn will go toward restoring your reputation. After you\'re done then you and I could head back to my place for some \'quality time\'. Doesn\'t that sound good?"');
    scene.actions([
      { label: 'Okay', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/smile3.jpg');
    scene.text('You give Niko a forced smile. "Okay, I\'ll do it for you."');
    scene.text('He gives you a warm smile. "That\'s my girl. So beautiful, loving, daring and smart."');
    scene.text('You both continue walking towards the two men.');
    scene.actions([
      { label: 'Follow Niko\'s lead', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/park/shady.jpg');
    scene.text('As you both arrive, one of the men reaches out to touch you, but his hand is pushed away by Niko. "You need to pay up before you start touching."');
    scene.text('The guy chuckles. "Of course, of course. Where is my head?" He then nods at the other man, who reaches into his pocket and gives Niko some rubles, which Niko counts before nodding at the men and taking a step back, signaling the men to use you. The men start fondling your breasts as they kiss your neck.');
    scene.text('One of them takes off your shirt and throws it to the ground. Niko immediately picks it up as the other man pushes you down on your knees.');
    scene.actions([
      { label: 'Drop to your knees', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/3way/foreplay2.mp4');
    scene.text('You drop down to your knees in front of them. as one of the men shoves his cock into your mouth and the other pulls out and starts stroking his. You close your eyes and pretend that you\'re sucking Niko\'s dick, enjoying the warmth of it on your tongue as the occasional throbs leak pre-cum into your mouth. The other man starts pulling at your hair, which tells you that he wants his dick sucked too.');
    scene.text('You obediently switch dicks and start sucking the second man vigorously. After a few seconds, one of the men groans as he fills your mouth with his cum, which you quickly spit out.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/pc/body/cum/cumhair/cumhair1.jpg');
    scene.text('The second man soon starts groaning too as he covers your hair in his cum. Once both men are done, Niko approaches you. "Great job Princess, I\'m very proud of you."');
    scene.text('"Can we have her again sometime?" one of the men asks and Niko grins.');
    scene.text('"Sure you can. Just call me when you have the money ready and I\'ll do the rest."');
    scene.text('The two guys high five as they walk away.');
    qspCall(s, 'cum_call', 'mouth');
    qspCall(s, 'cum_call', 'hair');
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'fame', 'pav', 'sex', 10);
    qspCall(s, 'fame', 'pav', 'prostitute', 20);
    qspCall(s, 'fame', '');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/park/walk1.jpg');
    scene.text('Niko rubs the back of your head. "Let\'s get you back to my place for your reward."');
    scene.text('You quickly feel your heart warm up. "Okay, Let\'s go."');
    scene.text('Niko strokes your cheek. "So eager, aren\'t we? Good." He then chuckles as he walks you to his house.');
    scene.actions([
      { label: 'Follow Niko', goto: ['NikoEv2', 'home_date'] },
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

function enterHomeDate(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/home/bedroom/relaxing1.jpg');
  scene.text('You arrive at Niko\'s house, where he brings you to his room and lies down on the bed before motioning for you to join him.');
  scene.text('You lay down on the bed next to him as he rubs your hips. "You\'re such a perfect girl, you know that?"');
  scene.text('You give him a very pleased smile. "Well, the perfect boyfriend deserves no less." You feel a little nervous, not knowing how he will respond, but he quickly does.');
  // TODO-QSP: dynamic text: "Aww, you're so sweet <<$pcs_nickname>>. How would you like to have some fun?"
  scene.text(`"Aww, you're so sweet ${((s as any).pcs_nickname ?? 0)}. How would you like to have some fun?"`);
  scene.text('"I\'d love to!" you eagerly reply and Niko chuckles.');
  scene.text('"Good. Get washed up and we\'ll have some fun."');
  scene.text('You get up and quickly run to the bathroom to clean up.');
  scene.actions([
    { label: 'Wash up', goto: ['NikoDates', 'quick_wash'] },
  ]);
  scene.build();
}

function enterReward(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A190');
  if (((s as any).fame ?? 0)?.['pav_sex'] < 230) {
    qspCall(s, 'fame', 'pav', 'sex', 250);
  }
  qspCall(s, 'fame', '');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/volkovHome/Rooms/Niko/bedroom.jpg');
  scene.text('As soon as you enter the bedroom, you look around, but don\'t see Niko.');
  scene.actions([
    { label: '…', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/kiss3.mp4');
    scene.text('Niko grabs you from behind and starts passionately kissing and licking your neck. You tilt your head back and give in to his passionate embrace as he walks you over to the bed while removing your top. You help him undress you as you both inch closer to the bed.');
    scene.text('Once you\'re fully undressed, Niko lifts you up and drops you onto the bed before he immediately pounces on top of you and starts passionately kissing you as he rubs his penis against your vagina.');
    qspCall(s, 'arousal', 'kiss', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Spread your legs', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'strip_all');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/home/vag.mp4');
    scene.text('You spread your legs and Niko immediately rams his penis inside you, causing a jolt of pleasure. You scream out as he starts pumping you firmly for a few seconds before wrapping his hand around your neck. "Who\'s your man?"');
    scene.text('"You\'re my man," you reply and he grins.');
    scene.text('"Who do you belong to?"');
    scene.text('"Only you."');
    scene.text('"Fuck yeah! Who\'s my bitch?"');
    scene.text('"I\'m your bitch. I will always be your bitch!"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/home/vag2.mp4');
    scene.text('Niko starts pumping you even faster as he gets more excited. You tilt your head back, enjoying the hard cock ramming inside you as he asserts his dominance over you.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0));
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/yurikev/cum/throat.mp4');
    scene.text('Niko continues quickly thrusting his dick further inside you until he suddenly pulls out. "Open your mouth!"');
    scene.text('You obediently open your mouth as Niko climbs on top of your chest and shoves his dick down your throat before groaning, filling you throat with his warm seed. Niko is having such a powerful orgasm that he doesn\'t even notice that you\'re choking on his dick. You\'re forced to endure it as your eyes tear up.');
    // TODO-QSP: dynamic text: You do your best to hold back from gagging, not wanting to interrupt Niko's orga...
    scene.text(`You do your best to hold back from gagging, not wanting to interrupt Niko's orgasm. Once he's finished, he catches his breath. "You're simply divine, ${((s as any).pcs_firstname ?? 0)}."`);
    scene.text('You take a few seconds to catch you breath before leaning forward to kiss him.');
    scene.actions([
      { label: 'Kiss him', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/yurikev/avatars/threaten1.jpg');
    scene.text('You lean forward to kiss Niko when the door suddenly slams open as Yurik storms into the room. He grabs you by the hair and pulls you toward the door as Niko jumps out of the bed. "What the fuck, Yurik? I told you that I would repay you as soon as-"');
    scene.text('Yurik cuts him off. "Shut it boy! I know better than to trust you, so I\'m taking my prize now. Don\'t worry, I\'ll return her when I\'m done."');
    scene.text('Yurik continues pulling you through the hallway as Niko follows closely behind, trying to get Yurik to back down. "Come on Yurik… Just calm down man."');
    scene.text('"I am calm," Yurik replies as you reach a bedroom with a partially open door. Yurik tosses you inside and pushes Niko back before closing the door in his face.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/yurikev/intrude/yurik1.jpg');
    scene.text('You fall to the ground and look back up at Yurik in fear. You can feel your whole body trembling as Yurik wraps his hand around your neck. "Listen bitch. You\'ll do whatever I say, when I say it. Understand?"');
    scene.actions([
      { label: 'Nod', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/yurikev/sex/deek/deek.jpg');
    scene.text('You meekly nod and he smiles. "Good. You know your place." He lifts you up and drops you on the bed before he quickly removes his pants, causing his 19 centimeter penis to spring out. Yurik approaches as you lay still in complete shock.');
    scene.actions([
      { label: 'See what he does', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/yurikev/sex/throat/bed1.mp4');
    scene.text('Yurik rams his dick into your mouth, forcing it down your throat. The force of his massive penis entering your throat is too much for you to take. You gag helplessly and pleading with him. "Please sir, your dick is too big. It won\'t fit!"');
    scene.text('Yurik grunts before responding. "It will fit. Just keep your mouth open and shut up!" Yurik re-aligns his penis with your mouth and shoves it back in. You do your best to relax your throat, knowing that you have no choice but to let Yurik have his way with you.');
    scene.actions([
      { label: 'Continue sucking his dick', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/yurikev/sex/throat/bed2.mp4');
    scene.text('You can feel Yurik\'s hand rubbing on your sensitive parts. You close your eyes, trying to think of anything but the pain you feel as Yurik roughly fucks your throat. You then open your eyes and try looking around the room, but your vision is all blurry from the tears streaming from your eyes, so you close them again, waiting for this torment to be over.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0));
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/yurikev/cum/throat1.mp4');
    scene.text('Yurik suddenly grabs firmly onto the back of your head and shoves his dick as far down your throat as he can while groaning loudly. You can feel a surge of cum shooting down your throat which you have no choice but to swallow before Yurik pulls out of you as you continue swallowing the last of his cum.');
    scene.text('He starts dressing himself then walks up to you as tears stream down your face. "Whenever I\'m around, you will do whatever I say. Do you understand, girl?" You nod meekly, terrified of what he could do to you.');
    scene.text('"Good. I\'ll be seeing you around. Don\'t try to avoid me, or that will make me ANGRY."');
    scene.text('He grabs you by the hair and pulls you towards the door, where he opens it and tosses you into Niko\'s arms before closing it.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).cumspclnt = 1;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/charmer2.jpg');
    // TODO-QSP: dynamic text: You start coughing erratically as Niko holds you in his arms. "<<$pcs_firstname>...
    scene.text(`You start coughing erratically as Niko holds you in his arms. "${((s as any).pcs_firstname ?? 0)}! Please tell me that you're okay?" He gently rubs your back as you continue coughing and Niko wipes away your tears. "I'm so sorry, ${((s as any).pcs_firstname ?? 0)}. My brother is such a brutish oaf. I'll find a way to protect you from him, I promise."`);
    scene.text('You return Niko\'s hug and start crying in his arms. Niko leads you to the bathroom where he carefully splashes some water on your face and washes your face before leading you back to his room.');
    scene.actions([
      { label: 'Enter Niko\'s room', handler: (st: GameState) => {
    qspCall(s, 'sleep_simple', 'forced', 130);
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/home/bedroom/laying.jpg');
    scene.text('As you enter the room, Niko lays you down and climbs into the bed next to you, running his fingers through your hair while staring into your eyes. You feel incredibly lightheaded as your nerves have drained you of any focused thoughts. You close your eyes as you feel your energy slowly fading away…');
    scene.actions([
      { label: 'Sleep', goto: ['NikoDreams', 'friends'] },
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

function enterNikoWake(s: GameState, scene: SceneBuilder): void {
  (s as any).NikoVolkovQW = 10;
  (s as any).NikoEv = 12;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/charmer2.jpg');
  // TODO-QSP: dynamic text: You open your eyes and see Niko with a concerned look on his face, his hand on y...
  scene.text(`You open your eyes and see Niko with a concerned look on his face, his hand on your shoulder shaking you. "${((s as any).pcs_firstname ?? 0)}, are you alright? You looked like you were having an intense dream."`);
  scene.text('You quickly look around the room and take several deep breaths as Niko gives you a kiss on the forehead. "I\'m so worried about you. Are you alright?"');
  scene.text('You nod slowly. "I\'m… I\'m fine. I just had a nightmare, that\'s all."');
  scene.text('Niko continues kissing your forehead. "I\'ll do everything in my power to protect you. Just stay strong, okay?"');
  scene.text('You nod your head again. "Thank you Niko. I always feel safe in your arms."');
  scene.text('He smiles as he wraps his arms around you.');
  scene.actions([
    { label: 'Relax', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/home/bedroom/relaxing1.jpg');
    scene.text('After relaxing for a few minutes, you get up and stretch your body. "I should head home. It\'s getting late."');
    scene.text('Niko places his hand on your shoulder. "Will you be alright on your own?"');
    scene.text('"Of course," you reply. "I\'ll see you tomorrow."');
    scene.text('You lean forward and kiss Niko on the cheek before getting up, getting dressed and leaving.');
    scene.actions([
      { label: 'Walk onto the street', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore');
  }, goto: ['pav_residential', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterLunchChat(s: GameState, scene: SceneBuilder): void {
  if (((s as any).fame ?? 0)?.['pav_sex'] < 230) {
    qspCall(s, 'fame', 'pav', 'sex', 250);
  }
  qspCall(s, 'fame', '');
  (s as any).NikoDate_Day = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/smile1.jpg');
  scene.text('As you walk into the cafeteria, you feel a hand grab yours. You quickly turn to see Niko with a warm smile on his face. "I hope you\'re feeling better today."');
  scene.text('You nod and he smiles. "I have another way for us to make some money. Are you ready?"');
  qspCall(s, 'willpower', 'prostitution', 'resist', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'I can\'t right now [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'I can\'t right now', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/sad1.jpg');
    scene.text('"That sounds great, but I really need to be somewhere very soon." you reply and Niko just shrugs.');
    scene.text('"Oh well. I guess it could wait for another day. Visit me here when you\'re ready."');
    scene.text('You wave goodbye to Niko and he returns the wave as you walk away.');
    scene.actions([
      { label: 'Walk away', goto: ['gschool_lunch', 'cafeteria'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Sure', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/smile2.jpg');
    scene.text('"Great. Let\'s get going." Niko takes your hand and walks you away from the cafeteria, towards the locker room. The thought of entering the locker room again causes your heart to start pounding.');
    scene.actions([
      { label: 'Enter locker room', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A159');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big159.jpg');
    scene.text('As soon as you enter the locker room, you see Petia waiting for you.');
    scene.text('"Here she is," Niko says.');
    // TODO-QSP: dynamic text: "I heard some things about you, <<$pcs_nickname>>. Are they true?" Petia asks.
    scene.text(`"I heard some things about you, ${((s as any).pcs_nickname ?? 0)}. Are they true?" Petia asks.`);
    scene.text('You lower your head. "What have you heard?"');
    scene.text('Petia grins. "I heard that you\'re Niko\'s whore and that you do anything he tells you to do. At least that\'s what Niko said."');
    // TODO-QSP: dynamic text: You look at Niko, who has a wide smile on his face as he nods at you. "No need t...
    scene.text(`You look at Niko, who has a wide smile on his face as he nods at you. "No need to be shy ${((s as any).pcs_nickname ?? 0)}, tell him."`);
    scene.text('You lower your head again. "Yes, it\'s true…"');
    scene.text('Niko nudges you. "What\'s true?"');
    scene.actions([
      { label: 'Tell them', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('"I\'m Niko\'s whore…" you say and Petia smiles.');
    scene.text('"Good. I always knew that you were a dirty girl. Now let\'s do this."');
    scene.text('You know what he wants, but you ask Niko anyway. "What do I need to do?"');
    scene.text('"Just suck his dick," he replies. "It should be easy for you."');
    scene.text('You know that you\'ve come too far to go back now, so you approach Petia and get on your knees in front of him as he eagerly unbuttons his pants."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/smile2.jpg');
    scene.text('You\'re quickly repulsed by the vile smell of it and look up at Niko, who slowly nods.');
    // TODO-QSP: dynamic text: You take a deep breaths as Petia chuckles. "Don't be shy <<$pcs_nickname>>. I kn...
    scene.text(`You take a deep breaths as Petia chuckles. "Don't be shy ${((s as any).pcs_nickname ?? 0)}. I know that you've always wanted to be with me. Now's your chance."`);
    scene.text('"Shut the fuck up or I\'ll come over there and beat the shit out of you," Niko responds and Petia quickly shuts up as he rubs his dick against your lips.');
    scene.actions([
      { label: 'Suck Petia\'s dick', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/locker/petia.mp4');
    scene.text('"You finally open your mouth and wrap your lips around Petia\'s dick before licking and sucking it firmly. You can feel yourself blushing as you continue sucking his dick more rapidly. You can tell by Petia\'s constant squirming that he\'s close to cumming.');
    scene.actions([
      { label: 'Make Petia cum', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/mouth/cum1.11.mp4');
    scene.text('You quicken your pace and soon feel his penis throbbing in your mouth as he fills your mouth with his seed. Petia catches his breath before looking down at you. "Wow, Niko wasn\'t lying when he said that you were the best at that. We need to do this again sometime."');
    scene.actions([
      { label: 'Turn to Niko', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0));
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'arousal', 'end');
    scene.img(`images/characters/pavlovsk/school/boy/niko/nikomisc/avatars/${((s as any).week ?? 0)}.jpg`);
    scene.text('"If you have the cash, then I have the girl for you. Speaking of cash…" Niko says as he extends his hand.');
    scene.text('Petia scratches his head. "I don\'t exactly have it on me, but I\'ll be more than ha…"');
    scene.text('Niko immediately darts across the room and grabs Petia by the neck. "Where\'s my money, shithead!?"');
    scene.text('"Oh I… I… have it right here. I was just joking!" Petia suddenly replies as he reaches into his pocket and pulls out his wallet. Niko immediately snatches it and takes all the money inside before throwing it across the room.');
    scene.text('"Hey man, you didn\'t need to do that!" Petia hollers, but Niko shoves him towards the door and he quickly runs out.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'fame', 'pav', 'sex', 5);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/charmer1.jpg');
    // TODO-QSP: dynamic text: You look up to Niko, who's counting the money. "You were outstanding, <<$pcs_fir...
    scene.text(`You look up to Niko, who's counting the money. "You were outstanding, ${((s as any).pcs_firstname ?? 0)}. We'll have the money we need in no time." He then kisses you on your forehead. "Do you think that you can give me a quickie before we head back?"`);
    scene.text('You eagerly nod. "Of course. I\'m always happy to please you." You quickly unbutton his pants and wrap your lips around his dick, licking and sucking as best you can.');
    scene.actions([
      { label: 'Suck Niko\'s dick', handler: (st: GameState) => {
    qspCall(s, 'fame', '');
    qspCall(s, 'boyStat', 'A189');
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/sex/bj5.mp4');
    scene.text('You can feel your heart flutter as you start sucking Niko\'s dick.');
    scene.actions([
      { label: 'Continue sucking Niko\'s dick', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0));
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/cum/swallow8.mp4');
    scene.text('You can feel tears running down your cheeks as you lose yourself in the moment. Niko suddenly groans as he fills your mouth with his warm seed, which you try your best to swallow.');
    scene.actions([
      { label: 'Finish swallowing Niko\'s cum', handler: (st: GameState) => {
    (s as any).NikoEv = 14;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/smile2.jpg');
    // TODO-QSP: dynamic text: Niko looks down at you. "Oh <<$pcs_firstname>>, you're the most perfect being th...
    scene.text(`Niko looks down at you. "Oh ${((s as any).pcs_firstname ?? 0)}, you're the most perfect being that could ever exist."`);
    scene.text('Your cheeks are burning red. "Thank you Niko, I love you with all my heart and will always be yours. Forever."');
    scene.text('He leans forward and gives you a long kiss on your forehead. "I\'m so lucky to have you. Are you ready to head back?"');
    scene.text('You happily nod and Niko helps you up to your feet before taking your hand and walking you back to the cafeteria.');
    scene.actions([
      { label: 'Go to the cafeteria', goto: ['gschool_lunch', 'lunch'] },
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

function enterVickyTalk(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('As you\'re leaving the cafeteria, you suddenly hear someone calling out to you.');
  scene.text('"I saw what you did in the locker room!"');
  scene.actions([
    { label: 'Turn around', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/vicky/vickysmile1.jpg');
    scene.text('You turn around to see Vicky with a playful look on her face. "You seem to be spending a lot of time with the boys. Having fun out there?"');
    scene.text('You lower your head, feeling ashamed as Vicky approaches you and places both her hands on your shoulders. "You\'re still with Niko, aren\'t you?"');
    scene.text('You keep your head lowered. "Yes… I am."');
    scene.text('Vicky lightly rocks you from side to side. "Maybe this is the path for you. Maybe you are a… uhh… You know."');
    scene.actions([
      { label: 'Finish her sentence', handler: (st: GameState) => {
    (s as any).NikoEv = 15;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('"A whore?" you say as you slowly raise your head.');
    scene.text('Vicky slowly nods. "Then you accept it, huh?"');
    scene.text('You take a second to think about it. "Maybe I am. I… Just love the way he looks at me and all I can think of is pleasing him. It excites me and makes me feel alive and I don\'t even care what others think of me. I only care about what Niko thinks."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/vicky/vickySmile2.jpg');
    scene.text('Vicky gives you an approving nod. "Then this is your role. You can follow your heart all the way to the promised land or whatever… Have I mentioned that I\'m not religious?"');
    scene.text('Vicky\'s cheerfulness makes you giggle. "So if I follow my heart, then I\'ll be happy? My heart yerns for Niko, so this must be my role. I\'m Niko\'s whore…');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/vicky/vickysurprised.jpg');
    scene.text('Vicky looks at you with a surprised look on her face. "Well there you go. You\'re a whore and you don\'t care. Hmm, I guess, Whatever makes you happy is worth doing. Have fun out there little whore," she says in a playful tone before she walks away.');
    scene.actions([
      { label: 'Continue toward the hallway', goto: ['gschool_lunch', 'break'] },
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

function enterLunchChat2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).fame ?? 0)?.['pav_sex'] < 230) {
    qspCall(s, 'fame', 'pav', 'sex', 250);
  }
  qspCall(s, 'fame', '');
  (s as any).NikoDate_Day = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((s as any).week ?? 0)}.jpg`);
  // TODO-QSP: dynamic text: As you enter the cafeteria, Niko grabs your hand. "Hey <<$pcs_nickname>>, are yo...
  scene.text(`As you enter the cafeteria, Niko grabs your hand. "Hey ${((s as any).pcs_nickname ?? 0)}, are you ready to make some more money today? We're making good progress on the money we need."`);
  qspCall(s, 'willpower', 'prostitution', 'resist', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'I can\'t right now [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'I can\'t right now', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/sad1.jpg');
    scene.text('He frowns. "I\'m sorry to hear that. I\'ll try to continue finding ways for us to earn money. I might have something for you tomorrow."');
    scene.text('You nod. "Thank you for all your help. I\'ll talk to you tomorrow."');
    scene.text('You give him a kiss on the cheek before walking away.');
    scene.actions([
      { label: 'Go to the cafeteria', goto: ['gschool_lunch', 'lunch'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Sure', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/kiss1.mp4');
    scene.text('Niko leans forward and gives you a soft kiss. "You\'re always making me so proud of you." You give Niko a warm smile, causing him to give you another more passionate kiss.');
    scene.actions([
      { label: 'Sure', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/kiss3.mp4');
    scene.text('You surrender yourself to Niko\'s firm passionate kiss before he slowly pulls away and gently grabs your hand to lead you to the locker room.');
    scene.actions([
      { label: 'Enter locker room', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A159');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'outfit', 'strip_all');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big159.jpg');
    scene.text('When you enter the locker room, you see Petia waiting for you. You immediately know what he wants and turn to Niko. "Do you want me to suck his dick again?"');
    scene.text('Niko looks at you with a surprised, but pleased look on his face. "You really seem to be getting into this, good, but no, he wants to fuck you this time. Don\'t worry, he\'ll pay a lot more this time. So take off your clothes." You obediently remove your clothes as Petia watches you undress while removing his pants and stroking his penis.');
    scene.text('After fully undressing, you walk up to Petia. "How do you want me?" His jaw is hanging as he freezes while scanning your body with his eyes.');
    scene.text('"SPEAK UP LOSER! TIME IS MONEY!" Niko exclaims and Petia jumps up in shock.');
    scene.text('"Oh… Oh… Oh yes, Over… By… Um… here… Climb on me." He then quickly sits on a bench. You can see the sweat trailing down his face.');
    scene.actions([
      { label: 'Approach Petia', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((s as any).week ?? 0)}.jpg`);
    scene.text('You do as he says and walk towards him when Niko stops you. "Hey! I\'m collecting the payment first."');
    scene.text('Petia nods and hands Niko the money. "And you\'re using this too. I don\'t trust you for a second to hold your load." Niko hands Petia a condom, which he quickly puts it on before you walk in front of Petia, ready to climb on him.');
    scene.actions([
      { label: 'Climb on him', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/locker/petia2.mp4');
    scene.text('You climb on top of Petia and feel his rock-hard penis entering your vagina, the jolt of pleasure causing you to moan loudly. Petia moans with you, almost in perfect harmony, as you start riding his cock. He breathes heavily in your ear before his breath suddenly stops and he lets out a loud moan as he fills the condom, cumming almost immediately.');
    scene.actions([
      { label: 'Watch Petia cum', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'butt', ((s as any).boy ?? 0));
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big159.jpg');
    // TODO-QSP: dynamic text: You continue watching Petia twitching as he has the most powerful orgasm of his ...
    scene.text(`You continue watching Petia twitching as he has the most powerful orgasm of his life. You can see the ecstasy on his face, the blissful pleasure he's feeling leaves you feeling envious. After a few seconds, Niko approaches. "Wow. That was fucking pathetic. You won't have any chance with a woman unless you pay for it. Now get the fuck out out of here. I need to speak with ${((s as any).pcs_nickname ?? 0)}."`);
    scene.text('Petia quickly collects his things while giving you a look of deep gratitude. This has clearly been the best day of his life. He puts his pants back on before leaving the restroom while staring at you the whole way.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'fame', 'pav', 'sex', 5);
    qspCall(s, 'fame', '');
    qspCall(s, 'boyStat', 'A189');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((s as any).week ?? 0)}.jpg`);
    scene.text('After Petia leaves, Niko walks up to you and gives you a passionate kiss. "You did great today. We made some good money."');
    scene.text('"Thank you for helping me with this Niko," you reply. "And for not abandoning me."');
    scene.text('Niko starts his hands over your body. "I\'ll always look after my girl. No one will hurt you while I\'m around. Now how about we have a little fun?" You let out a moan as Niko begins rubbing your clitoris.');
    scene.text('You look him in the eyes. "I\'m always ready to please you."');
    scene.actions([
      { label: 'Please Niko', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 5);
    qspCall(s, 'arousal', 'kiss', 5);
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Men/scene6.jpg');
    scene.text('Niko quickly pulls down his pants and pushes you against the wall, where he rams his dick inside of you, evoking a loud moan from you. He starts thrusting his penis inside you, causing a gradual build of pleasure to fill your body. He continues thrusting as you moan wildly.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/bathroom/mens/sex/mensrape4.mp4');
    scene.text('Niko suddenly grabs your head with both hands and brings your face to his. "Who do you belong to?"');
    scene.text('Knowing what he wants you to say, you happily reply "I\'m yours. I will always belong to you."');
    scene.text('Niko has a confident grin on his face. "And what\'s your role?"');
    scene.text('"To please you, whenever you want and fuck anyone you desire."');
    scene.text('Niko nods his head in approval as he greatly increases his pace and his breathing increases, signifying that he\'s close to cumming.');
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Make him cum', handler: (st: GameState) => {
    (s as any).NikoEv = 16;
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/cum5.mp4');
    scene.text('Feeling so turned on and blinded by the pleasure you scream out. "Cum inside me! Please cum inside me!"');
    scene.text('Niko thrusts one more time before shaking his head. "No!"');
    scene.text('He pulls out and starts cumming on your ass.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'butt', ((s as any).boy ?? 0));
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/payback/anal.mp4');
    // TODO-QSP: dynamic text: Niko shoots his cum onto your ass before taking a few seconds to catch his breat...
    scene.text(`Niko shoots his cum onto your ass before taking a few seconds to catch his breath. "You were amazing ${((s as any).pcs_firstname ?? 0)}. So fucking hot."`);
    scene.text('You give him a soft kiss. "I\'m always happy to please you."');
    scene.text('He gives you a very pleased smile. "I really made the right choice in choosing you. That\'s for sure. I have some plans for making big money and I would like you to meet me after school where we can discuss it further. We should really head back now."');
    scene.text('He buttons up his pants before leaving the room.');
    scene.actions([
      { label: 'Return to the cafeteria', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'wear_last_worn');
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

function enterNataliaTalk(s: GameState, scene: SceneBuilder): void {
  (s as any).NikoEv = 17;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/natalia/love/sad1.jpg');
  // TODO-QSP: dynamic text: As you're leaving the cafeteria, you bump into Natalia. "Oh <<$pcs_firstname>>. ...
  scene.text(`As you're leaving the cafeteria, you bump into Natalia. "Oh ${((s as any).pcs_firstname ?? 0)}. How are you doing? I've been really worried about you. I asked my mother about how to stop repeated nightmares and she gave me these dissolvable tablets to give you. They're designed to help ease…"`);
  scene.text('You place your hand on Natalia\'s shoulder. "You don\'t need to worry about me. I don\'t get the nightmares anymore. I found the source of my nightmares and faced it head on."');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natalia/love/smile1.jpg');
    scene.text('Natalia\'s eyes light up. "Really? That\'s great! I was really worried that it would only get worse. Please let me know if they come back."');
    scene.text('You rub her arm gently. "I will. Thank you Natalia. You\'re very sweet."');
    scene.text('Natalia blushes. "I\'m… just happy to help." She then walks away while looking back at you.');
    scene.actions([
      { label: 'Continue toward the hallway', goto: ['gschool_lunch', 'break'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterEvents(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dimaFilm ?? 0) === 1  &&  ((s as any).DimaRudeBlock ?? 0) === 0  &&  (!((s as any).NikoVsDimka ?? 0))) {
    scene.actions([{ label: 'Continue', goto: ['NikoEv', 'dimka'] }]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['NikoEv2', 'Diner 1'] }]);
    if (((s as any).NikoVolkovQW ?? 0) === 10  &&  ((s as any).NikoEv ?? 0) === 18) {
      scene.actions([{ label: 'Continue', goto: ['NikoEv2', 'Reward 2'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['NikoEv2', 'Diner 2'] }]);
      if (((s as any).NikoVolkovQW ?? 0) === 10  &&  ((s as any).NikoEv ?? 0) === 20  ||  ((s as any).NikoSlut ?? 0) > 0) {
        scene.actions([{ label: 'Continue', goto: ['NikoEv2', 'Diner Slut'] }]);
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'Park':
      enterPark(s, scene);
      break;
    case 'home_date':
      enterHomeDate(s, scene);
      break;
    case 'Reward':
      enterReward(s, scene);
      break;
    case 'niko_wake':
      enterNikoWake(s, scene);
      break;
    case 'Lunch Chat':
      enterLunchChat(s, scene);
      break;
    case 'Vicky Talk':
      enterVickyTalk(s, scene);
      break;
    case 'Lunch Chat 2':
      enterLunchChat2(s, scene);
      break;
    case 'Natalia Talk':
      enterNataliaTalk(s, scene);
      break;
    case 'Events':
      enterEvents(s, scene);
      break;
    default:
      enterPark(s, scene);
      break;
  }
}

export const NikoEv2: LocationDef = {
  name: 'NikoEv2',
  title: 'Bathroom',
  region: 'other',
  description: ['Niko turns to you as he leads you through the park. "So I know this guy that can completely fix your reputation, but when I spoke to him, he was asking for a lot of money to do it. So I figured, if we work together, then we could make the money to pay him for helping us."'],
  enter: enter,
};
