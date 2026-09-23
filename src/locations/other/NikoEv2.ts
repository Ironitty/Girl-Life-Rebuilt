import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterPark(s: GameState, scene: SceneBuilder): void {
  if (((s as any).fame ?? 0)?.['pav_sex'] < 230) {
    qspCall(s, 'fame', 'pav', 'sex', 250);
  }
  qspCall(s, 'fame', '');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((s as any).week ?? '')}.jpg`);
  scene.text('Niko turns to you as he leads you through the park. "So I know this guy that can completely fix your reputation, but when I spoke to him, he was asking for a lot of money to do it. So I figured, if we work together, then we could make the money to pay him for helping us."');
  scene.text('"Who is this friend exactly? And can he really fix my reputation?" you ask.');
  scene.text('"Well, he\'s kind of a… crime lord…" he replies. "But don\'t worry. As long as we pay up, then we have nothing to fear. He can get anything he wants. This guy is fearsome, but always true to his word."');
  scene.text('"But how much does he want exactly?"');
  scene.text('"Uh… Don\'t worry about that…" he says in an unconvincing tone. "I\'ll handle that when the time comes. Just know that it\'s a lot!"');
  scene.text('You shake your head. "How the hell will we be able to pay \'a lot\' to this man?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Listen to his reply', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/park/shady.jpg');
    scene.text('"I figured out a great way to make money fast. Just bear with me."');
    scene.text('You sigh. "Alright. What do I need to do exactly?"');
    // TODO-QSP: dynamic text: "Just follow me," he says and leads you through the park and behind the cinema. ...
    scene.text(`"Just follow me," he says and leads you through the park and behind the cinema. When you arrive, you see two men looking at you with a lustful gaze as Niko stops you. "Listen ${((st as any).pcs_firstname ?? '')}. Those guys over there are going to help us by giving us money, but they kind of, need you to do something first."`);
    scene.text('You look back at Niko with a frown. "Do I have to have sex with them?"');
    scene.text('He wraps his arm around your neck. "You only need to suck them off. That\'s all."');
    scene.text('You lower your head. "I don\'t want to please anyone but you Niko."');
    scene.text('He strokes your cheek. "You\'ll be pleasing me by doing this. The money you earn will go toward restoring your reputation. After you\'re done then you and I could head back to my place for some \'quality time\'. Doesn\'t that sound good?"');
    scene.actions([
      { label: 'Okay', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/smile3.jpg');
    scene.text('You give Niko a forced smile. "Okay, I\'ll do it for you."');
    scene.text('He gives you a warm smile. "That\'s my girl. So beautiful, loving, daring and smart."');
    scene.text('You both continue walking towards the two men.');
    scene.actions([
      { label: 'Follow Niko\'s lead', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/park/shady.jpg');
    scene.text('As you both arrive, one of the men reaches out to touch you, but his hand is pushed away by Niko. "You need to pay up before you start touching."');
    scene.text('The guy chuckles. "Of course, of course. Where is my head?" He then nods at the other man, who reaches into his pocket and gives Niko some rubles, which Niko counts before nodding at the men and taking a step back, signaling the men to use you. The men start fondling your breasts as they kiss your neck.');
    scene.text('One of them takes off your shirt and throws it to the ground. Niko immediately picks it up as the other man pushes you down on your knees.');
    scene.actions([
      { label: 'Drop to your knees', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/3way/foreplay2.mp4');
    scene.text('You drop down to your knees in front of them. as one of the men shoves his cock into your mouth and the other pulls out and starts stroking his. You close your eyes and pretend that you\'re sucking Niko\'s dick, enjoying the warmth of it on your tongue as the occasional throbs leak pre-cum into your mouth. The other man starts pulling at your hair, which tells you that he wants his dick sucked too.');
    scene.text('You obediently switch dicks and start sucking the second man vigorously. After a few seconds, one of the men groans as he fills your mouth with his cum, which you quickly spit out.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/pc/body/cum/cumhair/cumhair1.jpg');
    scene.text('The second man soon starts groaning too as he covers your hair in his cum. Once both men are done, Niko approaches you. "Great job Princess, I\'m very proud of you."');
    scene.text('"Can we have her again sometime?" one of the men asks and Niko grins.');
    scene.text('"Sure you can. Just call me when you have the money ready and I\'ll do the rest."');
    scene.text('The two guys high five as they walk away.');
    qspCall(st, 'cum_call', 'mouth');
    qspCall(st, 'cum_call', 'hair');
    qspCall(st, 'arousal', 'bj', 5);
    qspCall(st, 'arousal', 'bj', 5);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'fame', 'pav', 'sex', 10);
    qspCall(st, 'fame', 'pav', 'prostitute', 20);
    qspCall(st, 'fame', '');
    qspCall(st, 'stat', '');
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
  // TODO-QSP: dynamic text: "Aww, you''re so sweet <<$pcs_nickname>>. How would you like to have some fun?"
  scene.text(`"Aww, you're so sweet ${((s as any).pcs_nickname ?? '')}. How would you like to have some fun?"`);
  scene.text('"I\'d love to!" you eagerly reply and Niko chuckles.');
  scene.text('"Good. Get washed up and we\'ll have some fun."');
  scene.text('You get up and quickly run to the bathroom to clean up.');
  // TODO-QSP: end
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
  // TODO-QSP: end
  scene.actions([
    { label: '…', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/kiss3.mp4');
    scene.text('Niko grabs you from behind and starts passionately kissing and licking your neck. You tilt your head back and give in to his passionate embrace as he walks you over to the bed while removing your top. You help him undress you as you both inch closer to the bed.');
    scene.text('Once you\'re fully undressed, Niko lifts you up and drops you onto the bed before he immediately pounces on top of you and starts passionately kissing you as he rubs his penis against your vagina.');
    qspCall(st, 'arousal', 'kiss', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Spread your legs', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'strip_all');
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/home/vag.mp4');
    scene.text('You spread your legs and Niko immediately rams his penis inside you, causing a jolt of pleasure. You scream out as he starts pumping you firmly for a few seconds before wrapping his hand around your neck. "Who\'s your man?"');
    scene.text('"You\'re my man," you reply and he grins.');
    scene.text('"Who do you belong to?"');
    scene.text('"Only you."');
    scene.text('"Fuck yeah! Who\'s my bitch?"');
    scene.text('"I\'m your bitch. I will always be your bitch!"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'vaginal', 5);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/home/vag2.mp4');
    scene.text('Niko starts pumping you even faster as he gets more excited. You tilt your head back, enjoying the hard cock ramming inside you as he asserts his dominance over you.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'cum_call', 'mouth', ((st as any).boy ?? 0));
    qspCall(st, 'arousal', 'vaginal', 5);
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/yurikev/cum/throat.mp4');
    scene.text('Niko continues quickly thrusting his dick further inside you until he suddenly pulls out. "Open your mouth!"');
    scene.text('You obediently open your mouth as Niko climbs on top of your chest and shoves his dick down your throat before groaning, filling you throat with his warm seed. Niko is having such a powerful orgasm that he doesn\'t even notice that you\'re choking on his dick. You\'re forced to endure it as your eyes tear up.');
    // TODO-QSP: dynamic text: You do your best to hold back from gagging, not wanting to interrupt Niko''s org...
    scene.text(`You do your best to hold back from gagging, not wanting to interrupt Niko's orgasm. Once he's finished, he catches his breath. "You're simply divine, ${((st as any).pcs_firstname ?? '')}."`);
    scene.text('You take a few seconds to catch you breath before leaning forward to kiss him.');
    scene.actions([
      { label: 'Kiss him', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/yurikev/avatars/threaten1.jpg');
    scene.text('You lean forward to kiss Niko when the door suddenly slams open as Yurik storms into the room. He grabs you by the hair and pulls you toward the door as Niko jumps out of the bed. "What the fuck, Yurik? I told you that I would repay you as soon as-"');
    scene.text('Yurik cuts him off. "Shut it boy! I know better than to trust you, so I\'m taking my prize now. Don\'t worry, I\'ll return her when I\'m done."');
    scene.text('Yurik continues pulling you through the hallway as Niko follows closely behind, trying to get Yurik to back down. "Come on Yurik… Just calm down man."');
    scene.text('"I am calm," Yurik replies as you reach a bedroom with a partially open door. Yurik tosses you inside and pushes Niko back before closing the door in his face.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/yurikev/intrude/yurik1.jpg');
    scene.text('You fall to the ground and look back up at Yurik in fear. You can feel your whole body trembling as Yurik wraps his hand around your neck. "Listen bitch. You\'ll do whatever I say, when I say it. Understand?"');
    scene.actions([
      { label: 'Nod', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/yurikev/sex/deek/deek.jpg');
    scene.text('You meekly nod and he smiles. "Good. You know your place." He lifts you up and drops you on the bed before he quickly removes his pants, causing his 19 centimeter penis to spring out. Yurik approaches as you lay still in complete shock.');
    scene.actions([
      { label: 'See what he does', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/yurikev/sex/throat/bed1.mp4');
    scene.text('Yurik rams his dick into your mouth, forcing it down your throat. The force of his massive penis entering your throat is too much for you to take. You gag helplessly and pleading with him. "Please sir, your dick is too big. It won\'t fit!"');
    scene.text('Yurik grunts before responding. "It will fit. Just keep your mouth open and shut up!" Yurik re-aligns his penis with your mouth and shoves it back in. You do your best to relax your throat, knowing that you have no choice but to let Yurik have his way with you.');
    scene.actions([
      { label: 'Continue sucking his dick', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'bj', 5);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/yurikev/sex/throat/bed2.mp4');
    scene.text('You can feel Yurik\'s hand rubbing on your sensitive parts. You close your eyes, trying to think of anything but the pain you feel as Yurik roughly fucks your throat. You then open your eyes and try looking around the room, but your vision is all blurry from the tears streaming from your eyes, so you close them again, waiting for this torment to be over.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).boy ?? 0));
    qspCall(st, 'arousal', 'bj', 5);
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/yurikev/cum/throat1.mp4');
    scene.text('Yurik suddenly grabs firmly onto the back of your head and shoves his dick as far down your throat as he can while groaning loudly. You can feel a surge of cum shooting down your throat which you have no choice but to swallow before Yurik pulls out of you as you continue swallowing the last of his cum.');
    scene.text('He starts dressing himself then walks up to you as tears stream down your face. "Whenever I\'m around, you will do whatever I say. Do you understand, girl?" You nod meekly, terrified of what he could do to you.');
    scene.text('"Good. I\'ll be seeing you around. Don\'t try to avoid me, or that will make me ANGRY."');
    scene.text('He grabs you by the hair and pulls you towards the door, where he opens it and tosses you into Niko\'s arms before closing it.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).cumspclnt = 1;
    qspCall(st, 'cum_cleanup', '');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/charmer2.jpg');
    // TODO-QSP: dynamic text: You start coughing erratically as Niko holds you in his arms. "<<$pcs_firstname>...
    scene.text(`You start coughing erratically as Niko holds you in his arms. "${((st as any).pcs_firstname ?? '')}! Please tell me that you're okay?" He gently rubs your back as you continue coughing and Niko wipes away your tears. "I'm so sorry, ${((st as any).pcs_firstname ?? '')}. My brother is such a brutish oaf. I'll find a way to protect you from him, I promise."`);
    scene.text('You return Niko\'s hug and start crying in his arms. Niko leads you to the bathroom where he carefully splashes some water on your face and washes your face before leading you back to his room.');
    scene.actions([
      { label: 'Enter Niko\'s room', handler: (st: GameState) => {
    qspCall(st, 'sleep_simple', 'forced', 130);
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
  scene.text(`You open your eyes and see Niko with a concerned look on his face, his hand on your shoulder shaking you. "${((s as any).pcs_firstname ?? '')}, are you alright? You looked like you were having an intense dream."`);
  scene.text('You quickly look around the room and take several deep breaths as Niko gives you a kiss on the forehead. "I\'m so worried about you. Are you alright?"');
  scene.text('You nod slowly. "I\'m… I\'m fine. I just had a nightmare, that\'s all."');
  scene.text('Niko continues kissing your forehead. "I\'ll do everything in my power to protect you. Just stay strong, okay?"');
  scene.text('You nod your head again. "Thank you Niko. I always feel safe in your arms."');
  scene.text('He smiles as he wraps his arms around you.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Relax', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
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
      { label: 'I can\'t right now', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'I can\'t right now', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Sure', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/smile2.jpg');
    scene.text('"Great. Let\'s get going." Niko takes your hand and walks you away from the cafeteria, towards the locker room. The thought of entering the locker room again causes your heart to start pounding.');
    scene.actions([
      { label: 'Enter locker room', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A159');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big159.jpg');
    scene.text('As soon as you enter the locker room, you see Petia waiting for you.');
    scene.text('"Here she is," Niko says.');
    // TODO-QSP: dynamic text: "I heard some things about you, <<$pcs_nickname>>. Are they true?" Petia asks.
    scene.text(`"I heard some things about you, ${((st as any).pcs_nickname ?? '')}. Are they true?" Petia asks.`);
    scene.text('You lower your head. "What have you heard?"');
    scene.text('Petia grins. "I heard that you\'re Niko\'s whore and that you do anything he tells you to do. At least that\'s what Niko said."');
    // TODO-QSP: dynamic text: You look at Niko, who has a wide smile on his face as he nods at you. "No need t...
    scene.text(`You look at Niko, who has a wide smile on his face as he nods at you. "No need to be shy ${((st as any).pcs_nickname ?? '')}, tell him."`);
    scene.text('You lower your head again. "Yes, it\'s true…"');
    scene.text('Niko nudges you. "What\'s true?"');
    scene.actions([
      { label: 'Tell them', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('' + qspFunc(s, '$face_image', '') + '');
    scene.text('"I\'m Niko\'s whore…" you say and Petia smiles.');
    scene.text('"Good. I always knew that you were a dirty girl. Now let\'s do this."');
    scene.text('You know what he wants, but you ask Niko anyway. "What do I need to do?"');
    scene.text('"Just suck his dick," he replies. "It should be easy for you."');
    scene.text('You know that you\'ve come too far to go back now, so you approach Petia and get on your knees in front of him as he eagerly unbuttons his pants."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/smile2.jpg');
    scene.text('You\'re quickly repulsed by the vile smell of it and look up at Niko, who slowly nods.');
    // TODO-QSP: dynamic text: You take a deep breaths as Petia chuckles. "Don''t be shy <<$pcs_nickname>>. I k...
    scene.text(`You take a deep breaths as Petia chuckles. "Don't be shy ${((st as any).pcs_nickname ?? '')}. I know that you've always wanted to be with me. Now's your chance."`);
    scene.text('"Shut the fuck up or I\'ll come over there and beat the shit out of you," Niko responds and Petia quickly shuts up as he rubs his dick against your lips.');
    scene.actions([
      { label: 'Suck Petia\'s dick', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'bj', 5);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/locker/petia.mp4');
    scene.text('"You finally open your mouth and wrap your lips around Petia\'s dick before licking and sucking it firmly. You can feel yourself blushing as you continue sucking his dick more rapidly. You can tell by Petia\'s constant squirming that he\'s close to cumming.');
    scene.actions([
      { label: 'Make Petia cum', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/cum/mouth/cum1.11.mp4');
    scene.text('You quicken your pace and soon feel his penis throbbing in your mouth as he fills your mouth with his seed. Petia catches his breath before looking down at you. "Wow, Niko wasn\'t lying when he said that you were the best at that. We need to do this again sometime."');
    scene.actions([
      { label: 'Turn to Niko', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth', ((st as any).boy ?? 0));
    qspCall(st, 'arousal', 'bj', 5);
    qspCall(st, 'arousal', 'end');
    scene.img(`images/characters/pavlovsk/school/boy/niko/nikomisc/avatars/${((st as any).week ?? '')}.jpg`);
    scene.text('"If you have the cash, then I have the girl for you. Speaking of cash…" Niko says as he extends his hand.');
    scene.text('Petia scratches his head. "I don\'t exactly have it on me, but I\'ll be more than ha…"');
    scene.text('Niko immediately darts across the room and grabs Petia by the neck. "Where\'s my money, shithead!?"');
    scene.text('"Oh I… I… have it right here. I was just joking!" Petia suddenly replies as he reaches into his pocket and pulls out his wallet. Niko immediately snatches it and takes all the money inside before throwing it across the room.');
    scene.text('"Hey man, you didn\'t need to do that!" Petia hollers, but Niko shoves him towards the door and he quickly runs out.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'fame', 'pav', 'sex', 5);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/charmer1.jpg');
    // TODO-QSP: dynamic text: You look up to Niko, who''s counting the money. "You were outstanding, <<$pcs_fi...
    scene.text(`You look up to Niko, who's counting the money. "You were outstanding, ${((st as any).pcs_firstname ?? '')}. We'll have the money we need in no time." He then kisses you on your forehead. "Do you think that you can give me a quickie before we head back?"`);
    scene.text('You eagerly nod. "Of course. I\'m always happy to please you." You quickly unbutton his pants and wrap your lips around his dick, licking and sucking as best you can.');
    scene.actions([
      { label: 'Suck Niko\'s dick', handler: (st: GameState) => {
    qspCall(st, 'fame', '');
    qspCall(st, 'boyStat', 'A189');
    qspCall(st, 'arousal', 'bj', 5);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/sex/bj5.mp4');
    scene.text('You can feel your heart flutter as you start sucking Niko\'s dick.');
    scene.actions([
      { label: 'Continue sucking Niko\'s dick', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).boy ?? 0));
    qspCall(st, 'arousal', 'bj', 5);
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/cum/swallow8.mp4');
    scene.text('You can feel tears running down your cheeks as you lose yourself in the moment. Niko suddenly groans as he fills your mouth with his warm seed, which you try your best to swallow.');
    scene.actions([
      { label: 'Finish swallowing Niko\'s cum', handler: (st: GameState) => {
    (st as any).NikoEv = 14;
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/smile2.jpg');
    // TODO-QSP: dynamic text: Niko looks down at you. "Oh <<$pcs_firstname>>, you''re the most perfect being t...
    scene.text(`Niko looks down at you. "Oh ${((st as any).pcs_firstname ?? '')}, you're the most perfect being that could ever exist."`);
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
  scene.img('' + qspFunc(s, '$$face_image') + '');
  scene.text('As you\'re leaving the cafeteria, you suddenly hear someone calling out to you.');
  scene.text('"I saw what you did in the locker room!"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Turn around', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/vicky/vickysmile1.jpg');
    scene.text('You turn around to see Vicky with a playful look on her face. "You seem to be spending a lot of time with the boys. Having fun out there?"');
    scene.text('You lower your head, feeling ashamed as Vicky approaches you and places both her hands on your shoulders. "You\'re still with Niko, aren\'t you?"');
    scene.text('You keep your head lowered. "Yes… I am."');
    scene.text('Vicky lightly rocks you from side to side. "Maybe this is the path for you. Maybe you are a… uhh… You know."');
    scene.actions([
      { label: 'Finish her sentence', handler: (st: GameState) => {
    (st as any).NikoEv = 15;
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('' + qspFunc(s, '$$face_image') + '');
    scene.text('"A whore?" you say as you slowly raise your head.');
    scene.text('Vicky slowly nods. "Then you accept it, huh?"');
    scene.text('You take a second to think about it. "Maybe I am. I… Just love the way he looks at me and all I can think of is pleasing him. It excites me and makes me feel alive and I don\'t even care what others think of me. I only care about what Niko thinks."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/vicky/vickySmile2.jpg');
    scene.text('Vicky gives you an approving nod. "Then this is your role. You can follow your heart all the way to the promised land or whatever… Have I mentioned that I\'m not religious?"');
    scene.text('Vicky\'s cheerfulness makes you giggle. "So if I follow my heart, then I\'ll be happy? My heart yerns for Niko, so this must be my role. I\'m Niko\'s whore…');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
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
  scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((s as any).week ?? '')}.jpg`);
  // TODO-QSP: dynamic text: As you enter the cafeteria, Niko grabs your hand. "Hey <<$pcs_nickname>>, are yo...
  scene.text(`As you enter the cafeteria, Niko grabs your hand. "Hey ${((s as any).pcs_nickname ?? '')}, are you ready to make some more money today? We're making good progress on the money we need."`);
  qspCall(s, 'willpower', 'prostitution', 'resist', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'I can\'t right now', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'I can\'t right now', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Sure', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/kiss1.mp4');
    scene.text('Niko leans forward and gives you a soft kiss. "You\'re always making me so proud of you." You give Niko a warm smile, causing him to give you another more passionate kiss.');
    scene.actions([
      { label: 'Sure', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/kiss3.mp4');
    scene.text('You surrender yourself to Niko\'s firm passionate kiss before he slowly pulls away and gently grabs your hand to lead you to the locker room.');
    scene.actions([
      { label: 'Enter locker room', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A159');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'outfit', 'strip_all');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big159.jpg');
    scene.text('When you enter the locker room, you see Petia waiting for you. You immediately know what he wants and turn to Niko. "Do you want me to suck his dick again?"');
    scene.text('Niko looks at you with a surprised, but pleased look on his face. "You really seem to be getting into this, good, but no, he wants to fuck you this time. Don\'t worry, he\'ll pay a lot more this time. So take off your clothes." You obediently remove your clothes as Petia watches you undress while removing his pants and stroking his penis.');
    scene.text('After fully undressing, you walk up to Petia. "How do you want me?" His jaw is hanging as he freezes while scanning your body with his eyes.');
    scene.text('"SPEAK UP LOSER! TIME IS MONEY!" Niko exclaims and Petia jumps up in shock.');
    scene.text('"Oh… Oh… Oh yes, Over… By… Um… here… Climb on me." He then quickly sits on a bench. You can see the sweat trailing down his face.');
    scene.actions([
      { label: 'Approach Petia', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((st as any).week ?? '')}.jpg`);
    scene.text('You do as he says and walk towards him when Niko stops you. "Hey! I\'m collecting the payment first."');
    scene.text('Petia nods and hands Niko the money. "And you\'re using this too. I don\'t trust you for a second to hold your load." Niko hands Petia a condom, which he quickly puts it on before you walk in front of Petia, ready to climb on him.');
    scene.actions([
      { label: 'Climb on him', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'vaginal', 5);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/locker/petia2.mp4');
    scene.text('You climb on top of Petia and feel his rock-hard penis entering your vagina, the jolt of pleasure causing you to moan loudly. Petia moans with you, almost in perfect harmony, as you start riding his cock. He breathes heavily in your ear before his breath suddenly stops and he lets out a loud moan as he fills the condom, cumming almost immediately.');
    scene.actions([
      { label: 'Watch Petia cum', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'butt', ((st as any).boy ?? 0));
    qspCall(st, 'arousal', 'vaginal', 5);
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big159.jpg');
    // TODO-QSP: dynamic text: You continue watching Petia twitching as he has the most powerful orgasm of his ...
    scene.text(`You continue watching Petia twitching as he has the most powerful orgasm of his life. You can see the ecstasy on his face, the blissful pleasure he's feeling leaves you feeling envious. After a few seconds, Niko approaches. "Wow. That was fucking pathetic. You won't have any chance with a woman unless you pay for it. Now get the fuck out out of here. I need to speak with ${((st as any).pcs_nickname ?? '')}."`);
    scene.text('Petia quickly collects his things while giving you a look of deep gratitude. This has clearly been the best day of his life. He puts his pants back on before leaving the restroom while staring at you the whole way.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'fame', 'pav', 'sex', 5);
    qspCall(st, 'fame', '');
    qspCall(st, 'boyStat', 'A189');
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((st as any).week ?? '')}.jpg`);
    scene.text('After Petia leaves, Niko walks up to you and gives you a passionate kiss. "You did great today. We made some good money."');
    scene.text('"Thank you for helping me with this Niko," you reply. "And for not abandoning me."');
    scene.text('Niko starts his hands over your body. "I\'ll always look after my girl. No one will hurt you while I\'m around. Now how about we have a little fun?" You let out a moan as Niko begins rubbing your clitoris.');
    scene.text('You look him in the eyes. "I\'m always ready to please you."');
    scene.actions([
      { label: 'Please Niko', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay', 5);
    qspCall(st, 'arousal', 'kiss', 5);
    qspCall(st, 'arousal', 'vaginal', 5);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Men/scene6.jpg');
    scene.text('Niko quickly pulls down his pants and pushes you against the wall, where he rams his dick inside of you, evoking a loud moan from you. He starts thrusting his penis inside you, causing a gradual build of pleasure to fill your body. He continues thrusting as you moan wildly.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/bathroom/mens/sex/mensrape4.mp4');
    scene.text('Niko suddenly grabs your head with both hands and brings your face to his. "Who do you belong to?"');
    scene.text('Knowing what he wants you to say, you happily reply "I\'m yours. I will always belong to you."');
    scene.text('Niko has a confident grin on his face. "And what\'s your role?"');
    scene.text('"To please you, whenever you want and fuck anyone you desire."');
    scene.text('Niko nods his head in approval as he greatly increases his pace and his breathing increases, signifying that he\'s close to cumming.');
    qspCall(st, 'arousal', 'vaginal', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Make him cum', handler: (st: GameState) => {
    (st as any).NikoEv = 16;
    qspCall(st, 'arousal', 'vaginal', 5);
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/cum/cum5.mp4');
    scene.text('Feeling so turned on and blinded by the pleasure you scream out. "Cum inside me! Please cum inside me!"');
    scene.text('Niko thrusts one more time before shaking his head. "No!"');
    scene.text('He pulls out and starts cumming on your ass.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'butt', ((st as any).boy ?? 0));
    qspCall(st, 'arousal', 'vaginal', 5);
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/payback/anal.mp4');
    // TODO-QSP: dynamic text: Niko shoots his cum onto your ass before taking a few seconds to catch his breat...
    scene.text(`Niko shoots his cum onto your ass before taking a few seconds to catch his breath. "You were amazing ${((st as any).pcs_firstname ?? '')}. So fucking hot."`);
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
  // TODO-QSP: dynamic text: As you''re leaving the cafeteria, you bump into Natalia. "Oh <<$pcs_firstname>>....
  scene.text(`As you're leaving the cafeteria, you bump into Natalia. "Oh ${((s as any).pcs_firstname ?? '')}. How are you doing? I've been really worried about you. I asked my mother about how to stop repeated nightmares and she gave me these dissolvable tablets to give you. They're designed to help ease…"`);
  scene.text('You place your hand on Natalia\'s shoulder. "You don\'t need to worry about me. I don\'t get the nightmares anymore. I found the source of my nightmares and faced it head on."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
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
    qspGoto(s, 'NikoEv', 'dimka');
  } else {
    if (((s as any).NikoVolkovQW ?? 0) === 10  &&  ((s as any).NikoEv ?? 0) === 17) {
      qspGoto(s, 'NikoEv2', 'Diner 1');
    } else {
      if (((s as any).NikoVolkovQW ?? 0) === 10  &&  ((s as any).NikoEv ?? 0) === 18) {
        qspGoto(s, 'NikoEv2', 'Reward 2');
      } else {
        if (((s as any).NikoVolkovQW ?? 0) === 10  &&  ((s as any).NikoEv ?? 0) === 19) {
          qspGoto(s, 'NikoEv2', 'Diner 2');
        } else {
          if (((s as any).NikoVolkovQW ?? 0) === 10  &&  ((s as any).NikoEv ?? 0) === 20  ||  ((s as any).NikoSlut ?? 0) > 0) {
            qspGoto(s, 'NikoEv2', 'Diner Slut');
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDiner1(s: GameState, scene: SceneBuilder): void {
  (s as any).NikoBreakup = 3;
  if (((s as any).fame ?? 0)?.['pav_sex'] < 230) {
    qspCall(s, 'fame', 'pav', 'sex', 250);
  }
  qspCall(s, 'fame', '');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/smile3.jpg');
  // TODO-QSP: dynamic text: Niko notices you approaching and gives you a warm smile. "Hello <<$pcs_firstname...
  scene.text(`Niko notices you approaching and gives you a warm smile. "Hello ${((s as any).pcs_firstname ?? '')}. I've been making many preparations and I believe that we're ready to go big league with this business, so we have a very busy afternoon ahead of us. Are you ready to start really making money? I'll also be giving you a cut of the profits because I won't have my girl going home empty handed after working so hard."`);
  qspCall(s, 'willpower', 'prostitution', 'resist', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'I can\'t right now', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'I can\'t right now', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/sad1.jpg');
    scene.text('"That sounds great, but I really need to be somewhere very soon."');
    scene.text('Niko shrugs. "Oh well. I guess it could wait for another day. Visit me here when you\'re ready."');
    scene.text('You wave at Niko and he returns the wave as you walk away.');
    scene.actions([
      { label: 'Walk away', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'I\'m ready', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/park/walk1.jpg');
    scene.text('Niko wraps his arm around your waist and guides you through the residential district towards the highway. You both spend a few minutes chatting about various topics on the way there. When you arrive at the highway, Niko leads you toward a diner with many trucks and motorcycles parked outside. You enter the diner and see a bunch of truckers and bikers eating lunch.');
    scene.text('Niko approaches one of the bikers sitting in the corner. "Riding a bike all day must be tough work. I bet you could use some relief right about now."');
    scene.text('The biker stares at Niko with a very angry look on his face. "You\'re cruising for a bruising kid."');
    scene.text('Niko looks puzzled. "So you aren\'t interested?"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/highway/borisdiner/npc/1.jpg');
    scene.text('"Of course I\'m not interested because I\'m not a fucking faggot!" the biker harshly responds.');
    scene.text('Niko pauses for a second then bursts into laughter. "Oh no, I didn\'t mean… I meant my girl here will take care of you. For a price of course."');
    scene.text('The biker chuckles. "I see now. I thought you were hitting on me, kid. You\'re lucky you weren\'t, but let me take a look at her."');
    scene.actions([
      { label: 'Let the biker examine you', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/highway/borisdiner/npc/1.jpg');
    scene.text('You step forward and wait to see what the biker will do. The biker begins looking you up and down. "Can I touch her?" he asks Niko. "I just want to make sure that she isn\'t hiding anything down there." The biker points toward your vagina.');
    scene.text('Niko chuckles. "Fine, make it quick."');
    scene.text('The biker rubs on your vagina for a few seconds. "Okay I\'m interested. How much?"');
    // TODO-QSP: dynamic text: "<<$func(''money'', ''string_profit'', 2000)>>," Niko replies and the biker scra...
    scene.text(`"${qspFunc(s, 'money', 'string_profit', 2000)}," Niko replies and the biker scratches his beard.`);
    scene.text('"She better be real good for that price."');
    scene.text('"She certainly is," Niko smiles.');
    scene.text('"So you say," the biker responds. "But what guarantee do I have that you\'re telling the truth? She could be a breathing blow up doll for all I know."');
    scene.text('"How about this?" Niko asks. "This one time only, you can use her now and pay me afterward. Doesn\'t that sound fair?"');
    scene.text('The biker nods. "You have yourself a deal. Come on girl, we\'re doing this in the bathroom." The man grabs you by the arm and leads you to the restroom, where he takes off his pants and points at his dick. "Alright girl, get to work."');
    scene.actions([
      { label: 'Suck his dick', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'cum_call', 'face');
    qspCall(st, 'arousal', 'bj', 5);
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/1/BJ1.jpg');
    scene.text('You drop to your knees in front of him and wrap your lips around his dick before you start licking and sucking, doing your best to please him as the man starts moaning loudly. You increase the pace while feeling him fidgeting. After a few seconds, the man says "Oh fuck girrrrrl!"');
    scene.text('He starts squirming as he sprays his load into your mouth and all over your face. When he finishes, you look up at the biker and see an adoring look on his face as he looks down at you.');
    scene.actions([
      { label: 'Give him a smile', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/1/BJCum1.jpg');
    scene.text('You give him a friendly smile as the cum leaks from your mouth. "You\'re an amazing girl. You were definitely worth every ruble," he says and you give the tip of his cock a kiss before he buttons his pants up and gives you a wink before leaving the restroom. You wait for him to leave before spitting out the cum into the sink and following him out of the restroom.');
    scene.actions([
      { label: 'Leave the restroom', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/highway/borisdiner/npc/1.jpg');
    // TODO-QSP: dynamic text: You see the biker shake hands with Niko and give him the money. Niko counts the ...
    scene.text(`You see the biker shake hands with Niko and give him the money. Niko counts the money and gives the biker an approving nod before turning to you. "Good job ${((st as any).pcs_nickname ?? '')}. We're making some good progre…"`);
    scene.actions([
      { label: 'Turn around', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/pc/body/cum/cumface/blonde/15.jpg');
    scene.text('You turn to see a nearby trucker examining your face. "Is that what I think it is? Hey guys, look at this girl. She\'s walking around with cum on her face!" You freeze in place as the truckers and bikers surround you and start talking to each other.');
    scene.actions([
      { label: 'Listen to them', handler: (st: GameState) => {
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + (2);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/pc/body/cum/cumface/blonde/15.jpg');
    scene.text('"Wow, she walks around like that?" one of the bikers asks.');
    scene.text('"Well she\'s obviously a slut looking for customers," another replies.');
    if (((st as any).pcs_bmi ?? 0) >= 26) {
      scene.text('"A slut, huh?" a trucker asks. "She looks more like a cow to me."');
      scene.text('"Yeah, she looks like my old lady," another biker says. "But a pussy\'s a pussy, I guess."');
    } else {
      scene.text('"A slut, huh?" a trucker asks. "I wouldn\'t mind trying out her services."');
      scene.text('"I wonder how much she\'s charging?" another biker asks.');
    }
    // TODO-QSP: dynamic text: Niko chuckles. "She''s my girl and it will be <<$func(''money'', ''string_profit...
    scene.text(`Niko chuckles. "She's my girl and it will be ${qspFunc(s, 'money', 'string_profit', 2000)}, per customer."`);
    scene.text('All of the truckers and bikers start lining up in front of Niko and giving him money before approaching you. They start undressing you as they roughly finger your holes. You close your eyes as one of the men pushes you down on your knees and another shoves his dick into your mouth.');
    scene.actions([
      { label: 'Suck their dicks', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'strip_all');
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/gang/1.jpg');
    scene.text('You start obediently sucking the man\'s dick. You close your eyes and try to focus when the man suddenly groans and pulls out of your mouth before covering your face in his cum. Another man quickly takes his place as the man behind you grabs your head and pulls it toward his dick which you immediately wrap your lips around, sucking eagerly as the men talk to each other.');
    scene.actions([
      { label: 'Listen to what they say', handler: (st: GameState) => {
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/gang/2.jpg');
    scene.text('"This girl is smoking hot!" a trucker says. "I hope she comes around here more often."');
    scene.text('"Oh she can cum around here as much as she wants!" another man replies.');
    scene.text('The guys start laughing as the man whose dick you\'re sucking groans, giving you barely enough time to pull it out of your mouth before it covers your face with his warm cum. You feel the man\'s cum dripping down your face as another biker approaches and takes a close look at you. "I\'m not sticking my dick in her cum covered mouth." He then lifts you up and places you down on a nearby stool.');
    qspCall(st, 'cum_call', 'face');
    qspCall(st, 'arousal', 'bj', 5);
    qspCall(st, 'arousal', 'bj', (-5));
    qspCall(st, 'arousal', 'bj', (-5));
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Vaginal', handler: (st: GameState) => {
    qspCall(st, 'cum_call', '');
    qspCall(st, 'arousal', 'vaginal', 5);
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/gang/3.jpg');
    scene.text('The men hold your legs open as you suddenly feel the man shove his dick inside your pussy, causing a jolt of pleasure to fill your body and evoke a loud moan from you.');
    scene.text('"This whore really likes getting her pussy fucked," a biker says.');
    scene.text('"I bet she\'s been waiting to get fucked all day!" a trucker replies.');
    if (((st as any).sexcontra ?? 0) >= 3  ||  ((st as any).protect ?? 0) >= 2) {
      scene.text('You close your eyes and only focus on the pleasure building up inside you when the man fucking you suddenly groans and you feel his warm seed filling the condom inside you. The man continues thrusting, trying to milk himself inside you as another trucker approaches you. "Looks like that hole is all used up. I guess I\'ll have to take this one." He starts rubbing his dick against your anus.');
    } else {
      scene.text('You close your eyes and only focus on the pleasure building up inside you when the man fucking you suddenly groans and you feel his warm seed filling your pussy. The man continues thrusting inside you, trying to milk himself dry inside you as another trucker approaches you. "Looks like that hole is all used up. I guess I\'ll have to take this one." He starts rubbing his dick against your anus.');
    }
    scene.actions([
      { label: 'Anal', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/gang/4.jpg');
    scene.text('The man suddenly shoves his dick into your ass, causing a surge of pain to shoot through you. You scream out in pain as Niko shouts "Hey, take it easy! She\'s not a fucking blow up doll!"');
    scene.text('The man nods and gives your ass a few seconds to adjust to his dick before casually fucking it.');
    scene.actions([
      { label: 'Anal', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/gang/5.jpg');
    scene.text('As the man continues fucking your ass, another man grabs your head and turns it to face a third man\'s dick, which you immediately wrap your lips around before licking and sucking it eagerly. The pain in your ass fades as pleasure takes it\'s place. You close your eyes and submit to the pleasure when another man approaches you.');
    qspCall(st, 'arousal', 'bj', 5);
    qspCall(st, 'arousal', 'anal', (-5));
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Both holes', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/gang/6.jpg');
    if (((st as any).sexcontra ?? 0) >= 3  ||  ((st as any).protect ?? 0) >= 2) {
      scene.text('The man shoves his dick into your pussy at the same time that the man fucking your ass cums, filling the condom with his warm seed. Shortly after the man leaves, another takes his place, so now you have both of your holes being fucked simultaneously.');
    } else {
      scene.text('The man shoves his dick into your pussy at the same time that the man fucking your ass cums, filling your ass with his warm seed. Shortly after the man leaves, another takes his place, so now you have both of your holes being fucked simultaneously.');
    }
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/gang/7.jpg');
    if (((st as any).sexcontra ?? 0) >= 3  ||  ((st as any).protect ?? 0) >= 2) {
      scene.text('You moan loudly, fully submitting to the pleasure of both of your holes being fucked. As you\'re moaning, another man shoves his dick in your mouth, almost gagging you.');
    } else {
      scene.text('You moan loudly, fully submitting to the pleasure of both your holes being fucked. As you\'re moaning, another man shoves his dick in your mouth, almost gagging you.');
    }
    qspCall(st, 'cum_call', 'anus');
    qspCall(st, 'arousal', 'bj', 5);
    qspCall(st, 'arousal', 'anal', 5);
    qspCall(st, 'arousal', 'vaginal', (-5));
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Suck his dick', handler: (st: GameState) => {
    qspCall(st, 'fame', 'pav', 'sex', 30);
    qspCall(st, 'fame', 'pav', 'prostitute', 60);
    qspCall(st, 'fame', '');
    (st as any).NikoEv = 18;
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Men/Gang/Cum/cum2.jpg');
    if (((st as any).sexcontra ?? 0) >= 3  ||  ((st as any).protect ?? 0) >= 2) {
      scene.text('Completely entranced in the pleasure, you firmly suck on the man\'s dick, wanting only to give the men the same pleasure that they\'re giving you. The men start breathing heavily for a few seconds before groaning almost simultaneously, filling their condoms at the same time. The men milk their cocks for a few seconds before sitting back in their seats.');
      scene.text('You look around to see who\'s next when you notice that everyone is sitting down, chatting with each other as if nothing had happened. Niko helps you onto your feet. "You were amazing today! I\'m so proud of you. Get washed up and I\'ll take you home. You\'ll get a nice reward tomorrow." You meekly nod as Niko walks you to the bathroom.');
    } else {
      scene.text('Completely entranced in the pleasure, you firmly suck on the man\'s dick, wanting only to give the men the same pleasure that they\'re giving you. The men start breathing heavily for a few seconds before groaning almost simultaneously, filling your body from all sides with cum. The men milk their cocks inside you for a few seconds before sitting back in their seats.');
      scene.text('You look around to see who\'s next when you notice that everyone is sitting down, chatting with each other as if nothing had happened. Niko helps you onto your feet. "You did amazing today! I\'m so proud of you. Get washed up and I\'ll take you home. You\'ll get a nice reward tomorrow." You meekly nod as Niko walks you to the bathroom.');
    }
    qspCall(st, 'cum_call', 'face');
    qspCall(st, 'arousal', 'bj', 5);
    qspCall(st, 'cum_call', 'anus');
    qspCall(st, 'arousal', 'anal', 5);
    qspCall(st, 'cum_call', '');
    qspCall(st, 'arousal', 'vaginal', (-5));
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Wash up in the restroom', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'wear_last_worn');
  }, goto: ['NikoEv2', 'Diner Washup'] },
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

function enterDinerWashup(s: GameState, scene: SceneBuilder): void {
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
  scene.text('You grab a few paper towels and approach the sink to clean yourself as thoroughly as possible while taking a few seconds to enjoy a splash of warm water on your face, leaving you feeling refreshed as you finish up and walk away from the sink.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Dry off', goto: ['NikoEv2', 'Diner Exit'] },
  ]);
  scene.build();
}

function enterDinerExit(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'money', 'earn', 2400);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/diner/payment.jpg');
  // TODO-QSP: dynamic text: You walk out of the diner to find Niko waiting for you. "You did great today, <<...
  scene.text(`You walk out of the diner to find Niko waiting for you. "You did great today, ${((s as any).pcs_nickname ?? '')}. I'm so proud of you. Here's your share of the profits."`);
  // TODO-QSP: dynamic text: He hands you <<$func(''money'', ''string_profit'', 2400)>> and you look up at hi...
  scene.text(`He hands you ${qspFunc(s, 'money', 'string_profit', 2400)} and you look up at him. "I thought that you would give me half? There were at least six men in there."`);
  scene.text('Niko places his hand on your shoulder with a sympathetic look on his face. "I wanted to split it half way, but it would take us too long to pay up on that debt. You don\'t want your reputation to remain this way, do you?"');
  scene.text('You lower your head. "I don\'t… I\'m sorry. I was just being greedy."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Listen to Niko', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/kiss2.mp4');
    // TODO-QSP: dynamic text: Niko wraps his arm around your neck. "No need to apologize. I will always look a...
    scene.text(`Niko wraps his arm around your neck. "No need to apologize. I will always look after you. I love you ${((st as any).pcs_firstname ?? '')}."`);
    scene.text('You look up at him with a wide smile before kissing him passionately for a minute. He then takes you home.');
    scene.actions([
      { label: 'Enter apartment', goto: ['korrPar', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterReward2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A189');
  if (((s as any).fame ?? 0)?.['pav_sex'] < 230) {
    qspCall(s, 'fame', 'pav', 'sex', 250);
  }
  qspCall(s, 'fame', '');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/kiss.jpg');
  scene.text('As you approach Niko, he throws his cigarette to the ground and wraps his arm around your lower back before pulling you towards him and giving you a very passionate kiss. You eagerly begin massaging his tongue with yours in a long passionate kiss that lasts for a full minute before Niko slowly pulls away. "I\'ve been thinking about you all day and I\'m ready to reward you for all your hard work." He starts leading you to his house.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Niko\'s house', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/kiss3.mp4');
    scene.text('As soon as you enter Niko\'s house, he pulls you toward him and gives you another passionate kiss as he starts undressing you. When he finishes, he starts removing his clothes before pulling you to the bedroom and pushing you onto the bed.');
    scene.actions([
      { label: 'Lay back', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'strip_all');
    qspCall(st, 'arousal', 'cuni', 5);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/home/cuni.mp4');
    scene.text('Niko spreads your legs and starts firmly but gently licking your pussy. You lay back, enjoying Niko\'s soft tongue on your clitoris before looking down at him. "Your tongue is so soft… Please keep doing that."');
    scene.text('Niko gives you a wink as he continues, causing the pleasure inside you to build up quickly. After a few minutes, it reaches its climax and your body suddenly erupts into pleasure, causing your muscles to tighten up as you spasm, unable to focus on anything but the pleasure. You take a few seconds to catch your breath before looking down at Niko, who has a loving smile on his face.');
    (st as any).orgasm_or = 'yes';
    scene.actions([
      { label: 'Lick his dick', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'bj', 5);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/sex/lick1.mp4');
    scene.text('You get on your knees and crawl up to Niko before lightly gripping the shaft of his dick and slowly licking up the shaft to the top, where you gently kiss the tip while staring into his eyes.');
    // TODO-QSP: dynamic text: Niko places his hand on your face. "You''re so beautiful <<$pcs_firstname>>, the...
    scene.text(`Niko places his hand on your face. "You're so beautiful ${((st as any).pcs_firstname ?? '')}, the perfect girl." You can feel your heart beating faster at his words.`);
    scene.actions([
      { label: 'Suck his dick', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'bj', 5);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/home/bj.mp4');
    // TODO-QSP: dynamic text: You start sucking on Niko''s dick and he tilts his head back as he lets out a li...
    scene.text(`You start sucking on Niko's dick and he tilts his head back as he lets out a light moan before looking down at you. "Come here, ${((st as any).pcs_firstname ?? '')}." He beckons you to come closer.`);
    scene.actions([
      { label: 'Ride him', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'vaginal', 5);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/home/cowgirlkiss2.mp4');
    scene.text('You crawl up to Niko\'s face then give him a passionate kiss as you grab onto his penis and guide it inside of your vagina. You begin thrusting yourself on top of Niko\'s dick, pushing it deeper inside you. Niko suddenly grabs onto your back then kisses you more firmly while pushing himself deeper inside you. After a few seconds, Niko ends the kiss to catch his breath and you take this time to look him in the eyes as you say,');
    scene.actions([
      { label: 'Confess your love', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/home/cowgirlkiss.mp4');
    scene.text('"I love you Niko. I love you with all my heart and every fiber of my being."');
    // TODO-QSP: dynamic text: Niko has a guilty look on his face. "I love you too <<$pcs_firstname>>. You''re ...
    scene.text(`Niko has a guilty look on his face. "I love you too ${((st as any).pcs_firstname ?? '')}. You're very precious to me."`);
    scene.text('You continue staring into Niko\'s eyes as he continues thrusting his dick inside you. Niko\'s grunts as he says, "I have to pull out now."');
    qspCall(st, 'arousal', 'vaginal', (-5));
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Make him cum', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth_swallow', 'A189', 1);
    qspCall(st, 'arousal', 'bj', 5);
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/cum/swallow8.mp4');
    scene.text('You quickly climb off Niko before wrapping your lips around his dick and sucking. Niko tilts his head back and starts cumming in your mouth as you do your best to suck every drop out of his dick. His cum fills your mouth as you continue swallowing and sucking his dick dry. Once he\'s fully spent, he gently brings your face to his and gives you a gentle kiss on the lips. "I\'m so lucky to have such a beautiful and obedient girl like you."');
    scene.text('"I feel so lucky to have you in my life too, Nikolai," you reply.');
    scene.text('Niko rubs your forehead before getting up and heading to the bathroom to get washed up.');
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore');
  }, goto: ['VolkovHome', 'Niko Bedroom'] },
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

function enterYurikBJ(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A190');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/yurikev/home/livingroom.jpg');
  scene.text('As you reach the bottom of the stairs, you suddenly hear someone calling out to you. "Hey girl."');
  scene.text('You turn to see Yurik sitting in the living room in front of the TV. He motions you to come toward him, so you comply. "Suck my dick," he says while pointing at his crotch. You meekly nod your head, knowing what could happen if you dare to disobey him. You walk up to him and unbutton his pants before pulling out his giant dick and wrapping your lips around it.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Suck his dick', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/niko/yurikev/sex/bj/bj1.mp4');
    scene.text('You start sucking Yurik\'s massive dick, trying your best to fit as much of it in your mouth as you can. Yurik continues watching the TV as if you weren\'t even there. Trying to get a response from him, you pull his dick out of your mouth and start licking the tip of it, which causes him to grunt and look down at you.');
    qspCall(st, 'arousal', 'bj', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/niko/yurikev/sex/abuse/slap1.mp4');
    scene.text('Yurik suddenly give you a firm, but not very powerful slap. "Don\'t go fucking around down there. I told you to suck, not play with my dick, so get back to sucking."');
    qspCall(st, 'arousal', 'bj', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Nod', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/niko/yurikev/sex/bj/bj1.mp4');
    scene.text('You meekly nod and continue sucking his dick. After a few seconds, Yurik looks down at you. "You don\'t need to worry girl. You\'re doing good." You suddenly feel a lot more confident, knowing that he actually does enjoy what you\'re doing for him. After a few seconds, you can hear him breathing loudly.');
    qspCall(st, 'arousal', 'bj', (-5));
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Make him cum', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).boy ?? 0));
    qspCall(st, 'arousal', 'bj', 5);
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/yurikev/sex/bj/bj1.mp4');
    scene.text('You quicken your pace and Yurik suddenly groans as he starts pumping your mouth full of his cum, which you do your best to swallow. Once he\'s spent, he looks down at you. "I\'m done girl. You can go back to Niko now." You get up and start walking away when you hear him add "Good job girl." You walk back up the stairs with a smile on your face.');
    scene.actions([
      { label: 'Head back upstairs', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    (st as any).NikoEv = 19;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/smile1.jpg');
    scene.text('As you reach the top of the stairs, you see Niko walk out of the bathroom. He gives you a smile. "Are you ready to head home? I\'m ready to walk you home whenever you\'re ready."');
    scene.text('You return the smile as you nod. Niko then takes your hand and walks you out of the house towards your apartment. When you reach your apartment he turns to you. "I had a wonderful time with you today. It\'s fun to sometimes relax and enjoy each other\'s company isn\'t it?"');
    scene.text('You nod happily as you reply. "I always enjoy being with you."');
    scene.text('Niko chuckles. "You\'re too sweet. Anyway, have a good night." He leans forward and gives you a kiss on the cheek before turning around and walking away.');
    scene.actions([
      { label: 'Enter apartment', goto: ['KorrPar', ''] },
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

function enterDiner2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).fame ?? 0)?.['pav_sex'] < 230) {
    qspCall(s, 'fame', 'pav', 'sex', 250);
  }
  qspCall(s, 'fame', '');
  qspCall(s, 'stat', '');
  scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((s as any).week ?? '')}.jpg`);
  // TODO-QSP: dynamic text: As soon as Niko notices you, he tosses his cigarette aside. "Hey <<$pcs_nickname...
  scene.text(`As soon as Niko notices you, he tosses his cigarette aside. "Hey ${((s as any).pcs_nickname ?? '')}. You ready to make some money?"`);
  qspCall(s, 'willpower', 'prostitution', 'resist', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'I can\'t right now', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'I can\'t right now', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/sad1.jpg');
    scene.text('"That sounds great, but I really need to be somewhere very soon."');
    scene.text('Niko shrugs. "Oh well. I guess it could wait for another day. Visit me here when you\'re ready."');
    scene.text('You wave at Niko and he returns the wave as you walk away.');
    scene.actions([
      { label: 'Walk away', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Sure', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/park/walk1.jpg');
    scene.text('You nod your head and Niko smiles. "Excellent. Today, we\'re going back to the diner to make a lot of money. We\'re making great progress and I\'d like us to keep it up."');
    // TODO-QSP: dynamic text: You give Niko a nervous smile as he places his hands on your cheeks. "Don''t wor...
    scene.text(`You give Niko a nervous smile as he places his hands on your cheeks. "Don't worry ${((st as any).pcs_nickname ?? '')}. I'll make sure that the customer only go one, or two at a time. No more group activities unless you're cool with it."`);
    scene.text('You give Niko a grateful nod as he takes your hand and leads you towards the diner.');
    scene.actions([
      { label: 'Enter the diner', handler: (st: GameState) => {
    (st as any).NikoDiner = (Math.floor(Math.random() * 2) + 2);
    (st as any).NikoSlut = 2;
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/highway/borisdiner/patrons.jpg');
    scene.text('As soon as you enter the diner, all of the patrons turn to you and start happily greeting you.');
    scene.text('"Hey girl, glad to see you back."');
    scene.text('"You\'re looking good, girl."');
    scene.text('"I wish my wife looked as good as you."');
    scene.text('"Is that the girl you were talking about? The slu…" Another guy shoves him in the ribs. "Watch what you say. We don\'t want her to leave."');
    scene.text('You can feel your cheeks growing red as you respond to all of the attention. "Thank you all for welcoming me back. I\'m… glad to be back."');
    scene.text('Niko nods. "I agree. It\'s good to be back. If anyone would like to spend some time with my girl here then let me know what you want and I\'ll set it up."');
    scene.text('Niko guides you to the corner of the room and sits down with you as a few men line up nearby. "What\'s your name, girl?" one of them asks.');
    scene.actions([
      { label: 'Give them your real name', handler: (st: GameState) => {
    (st as any).NikoSlutName = ((st as any).pcs_firstname ?? 0);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('' + qspFunc(s, '$$face_image') + '');
    // TODO-QSP: dynamic text: "My name is <<$pcs_firstname>>," you say. "It''s nice to meet you."
    scene.text(`"My name is ${((st as any).pcs_firstname ?? '')}," you say. "It's nice to meet you."`);
    // TODO-QSP: dynamic text: "<<$pcs_firstname>>. Very cute name," he says. "It really suits you."
    scene.text(`"${((st as any).pcs_firstname ?? '')}. Very cute name," he says. "It really suits you."`);
    scene.text('You give the men a friendly smile as one of them approaches Niko.');
    scene.actions([
      { label: 'Continue', goto: ['NikoSlut', 'Customer 1'] },
    ]);
  } },
      { label: 'Choose a name', handler: (st: GameState) => {
    (st as any).NikoSlutName = window.prompt("What should the patrons call you?") ?? '';
    if (((st as any).NikoSlutName ?? 0) === '') {
      (st as any).NikoSlutName = 'Violet';
    }
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('' + qspFunc(s, '$$face_image') + '');
    // TODO-QSP: dynamic text: "My name is <<$NikoSlutName>>," you say. "It''s nice to meet you."
    scene.text(`"My name is ${((st as any).NikoSlutName ?? '')}," you say. "It's nice to meet you."`);
    // TODO-QSP: dynamic text: "<<$NikoSlutName>> huh?" he replies. "That is is a pretty name."
    scene.text(`"${((st as any).NikoSlutName ?? '')} huh?" he replies. "That is is a pretty name."`);
    scene.text('You give the men a friendly smile as one of them approaches Niko.');
    scene.actions([
      { label: 'Continue', goto: ['NikoSlut', 'Customer 1'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDinerExit2(s: GameState, scene: SceneBuilder): void {
  (s as any).VKLenaBully = 1;
  if (((s as any).NikoSlut ?? 0) < 3) {
    // TODO-QSP: gs 'money', 'earn', NikoProfit * 400
  }
  (s as any).NikoSlut = 1;
  (s as any).NikoEv = 20;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/kiss1.mp4');
  scene.text('As you and Niko leave the diner, he grabs onto your hand and spins you around before giving you a passionate kiss. You close your eyes and enjoy the caress of Niko\'s tongue massaging yours before he slowly pulls away. "You\'ve been doing an outstanding job and I\'m so proud of you. If we continue doing this everyday, then we\'ll have the money to fix your reputation in no time. Speaking of money, here\'s your share of the profits."');
  scene.text('He hands you your cut of the profits before wrapping his arm around your neck and walking you home while chatting with you about some of his favorite music groups. As you both pass by the park, you can hear someone singing behind you. "Little slut, little slut, there she goes. Little slut, little slut with her leaking holes."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Turn around', handler: (st: GameState) => {
    (st as any).NikoProfit = 0;
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/bully/park/1.jpg');
    scene.text('You turn and see Lena and Lera following you. They both have wide grins on their faces. "Hey slut! How many cocks have you sucked today?" Lena asks.');
    scene.text('"I think the easier question would be how many cocks have you not sucked today?" Lera replies.');
    scene.text('You try to ignore them as they walk in front of you and Niko. "Why don\'t you give us a little show, slut?" Lena says.');
    scene.text('"Not now ladies!" Niko replies in a stern tone and Lena smiles.');
    scene.text('"Awww. Are we hurting your little whore\'s feelings?" she laughs as Lera walks directly in front of you, blocking you from moving.');
    scene.text('"We\'re waiting for your show, slut!" she says.');
    scene.actions([
      { label: 'See what Niko does', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img(`images/characters/pavlovsk/school/boy/niko/nikomisc/avatars/${((st as any).week ?? '')}.jpg`);
    scene.text('"Enough!" Niko shouts. "Why don\'t you both go to the disco? I heard that Vicky\'s been fucking the boys there. Roman sent me the pictures and said that Vicky is the new town slut. You should check it out."');
    scene.text('"Oh my, I totally don\'t want to miss that," Lera sarcastically replies. "Hey Lena, we need to start running over there before it\'s too late." She then jogs in place before giggling.');
    scene.text('"As if we would ever believe any of your bullshit. Niko!" Lena says and Niko shakes his head before barging through them as he pulls you with him. You try to ignore the girls as Niko leads you to your apartment.');
    scene.text('"Little slut, little slut, where does she go? Little slut, little slut, who will she blow?" Lena sings.');
    scene.text('"Everyone, silly!" Lera answers. They follow you for another minute before getting bored and leaving.');
    scene.actions([
      { label: 'Walk home with Niko', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/endkiss.mp4');
    // TODO-QSP: dynamic text: You finally make it to your apartment, where Niko grabs onto your shoulder and f...
    scene.text(`You finally make it to your apartment, where Niko grabs onto your shoulder and flips you around before giving you a very passionate kiss before whispering in your ear. "I love you ${((st as any).pcs_firstname ?? '')}. Never forget it."`);
    scene.text('You can feel your face growing flushed. "I love you too Nikolai. I love you with all my heart." You then give him another passionate kiss before backing into your apartment.');
    scene.actions([
      { label: 'Enter apartment', goto: ['korrPar', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDinerSlut(s: GameState, scene: SceneBuilder): void {
  if (((s as any).YurikRep ?? 0) === 0  &&  ((s as any).fame ?? 0)?.['pav_sex'] < 230) {
    qspCall(s, 'fame', 'pav', 'sex', 250);
  }
  qspCall(s, 'stat', '');
  scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((s as any).week ?? '')}.jpg`);
  // TODO-QSP: dynamic text: As soon as Niko notices you, he tosses his cigarette aside. "Hey <<$pcs_nickname...
  scene.text(`As soon as Niko notices you, he tosses his cigarette aside. "Hey ${((s as any).pcs_nickname ?? '')}. Ready to make some money?"`);
  qspCall(s, 'willpower', 'prostitution', 'resist', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'I can\'t right now', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'I can\'t right now', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/sad1.jpg');
    scene.text('"That sounds great, but I really need to be somewhere very soon."');
    scene.text('He shrugs. "Oh well. I guess it could wait for another day. Visit me here when you\'re ready."');
    scene.text('You wave at Niko and he returns the wave as you walk away.');
    scene.actions([
      { label: 'Walk away', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Sure', handler: (st: GameState) => {
    (st as any).NikoDiner = (Math.floor(Math.random() * 2) + 2);
    (st as any).NikoSlut = 2;
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/park/walk1.jpg');
    scene.text('You nod and Niko smiles. "You\'re always making me so proud. Let\'s get going."');
    scene.text('He takes your hand and leads you towards the diner.');
    scene.actions([
      { label: 'Walk to the diner', handler: (st: GameState) => {
    (st as any).alko = ((st as any).alko ?? 0) + (1);
    (st as any).NikoDiner = (Math.floor(Math.random() * 2) + 2);
    (st as any).NikoSlut = 2;
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/drink.jpg');
    scene.text('You both arrive at the diner and Niko takes a seat before offering you one. He orders a few drinks as you both make yourself comfortable and spend the next few minutes chatting while you wait for customers to arrive.');
    scene.actions([
      { label: 'Wait for customers', goto: ['NikoSlut', 'Customers'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterNikoSearch(s: GameState, scene: SceneBuilder): void {
  (s as any).NikoDate_Day = ((s as any).daystart ?? 0);
  (s as any).NikoEv = 22;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big10.jpg');
  // TODO-QSP: dynamic text: As you''re leaving the cafeteria, you walk toward the restroom to check up on Ni...
  scene.text(`As you're leaving the cafeteria, you walk toward the restroom to check up on Niko. When you arrive, you can see the boys chatting with each other before turning to you and whispering at each other before Dan grabs onto your arm. "Hey ${((s as any).pcs_firstname ?? '')}. I know why you're here. You miss our dicks, don't you?"`);
  scene.text('You recoil. "No, I was just looking for…"');
  scene.text('Dan grips your arm tighter as he unbuttons his pants. "Don\'t worry, my dick is right here." He pushes you down to your knees and presses his dick against your lips while the other gopniks circle around you.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Suck Dan\'s dick', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/restroom/2.jpg');
    // TODO-QSP: dynamic text: You lick the tip of Dan''s dick before taking it into your mouth and sucking it ...
    scene.text(`You lick the tip of Dan's dick before taking it into your mouth and sucking it firmly. Vitek and Vasily take out their dicks and start lightly stroking them before you reach out and grab onto their dicks. "You're doing well, ${((st as any).pcs_nickname ?? '')}. Can you suck me next?" Vasily asks and you nod before pulling away from Dan and wrapping your lips around Vasily's dick, sucking it gently while Vitek paws at your breasts through your shirt. After a few seconds, Vitek grows impatient and pushes his dick against your lips.`);
    if (((st as any).kotovLoveQW ?? 0) < 0) {
      scene.text('"What are you waiting for, slut? Start sucking my dick. You made a fool of me and you\'ll make up for it." You can feel your heart rapidly beating as you start sucking on Vitek\'s dick, fearful of angering him further.');
    } else {
      // TODO-QSP: dynamic text: "Come on <<$pcs_nickname>>, don''t forget about me." You alternate between sucki...
      scene.text(`"Come on ${((st as any).pcs_nickname ?? '')}, don't forget about me." You alternate between sucking their dicks as they talk to each other about you.`);
    }
    scene.actions([
      { label: '', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/restroom/1.jpg');
    scene.text('');
    scene.actions([
      { label: 'Continue toward the hallway', goto: ['gschool_lunch', 'break'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterNikoSearch2(s: GameState, scene: SceneBuilder): void {
  (s as any).NikoDate_Day = ((s as any).daystart ?? 0);
  (s as any).NikoEv = 22;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big10.jpg');
  scene.text('As you\'re leaving the cafeteria, you carefully approach the restroom. When you arrive, you carefully peek through the door to see that no one\'s there. You can\'t help but feel a bit relieved that none of the boys are there, but you soon hear some boys chatting in the hallway behind you, so you quickly run into one of the stalls while hoping that they don\'t enter. To your dismay, they enter the restroom while continuing their conversation.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Listen to them', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big10.jpg');
    scene.text('"I saw him leaving class holding Dimka\'s books like his little whipping boy. That guy has to be the biggest pussy I\'ve ever seen," Vasily says.');
    scene.text('"I swear that guy is a fag," Vitek replies.');
    scene.text('Dan interrupts them. "Who\'s in that stall? Are you taking a shit in there?"');
    scene.text('Dan knocks on the door a few times before walking away as the guys continue laughing and chatting.');
    scene.actions([
      { label: 'Continue listening', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big10.jpg');
    scene.text('"Where the fuck is Sonia?" Dan asks. "I haven\'t seen her all day."');
    scene.text('"Do you miss her or did she forget to take your call?" Vasily replies in a mocking tone.');
    scene.text('"I just wanted to empty my balls is all," Dan says.');
    if (((st as any).kotovLoveQW ?? 0) < 0) {
      // TODO-QSP: dynamic text: "We can always fetch <<$pcs_firstname>>," Vitek suggests. "She won''t dare say n...
      scene.text(`"We can always fetch ${((st as any).pcs_firstname ?? '')}," Vitek suggests. "She won't dare say no."`);
    } else {
      // TODO-QSP: dynamic text: "You can always look for <<$pcs_firstname>>," Vitek suggests. "She seems to know...
      scene.text(`"You can always look for ${((st as any).pcs_firstname ?? '')}," Vitek suggests. "She seems to know her place."`);
    }
    scene.text('Dan stretches for a second. "I might just do that. Any of you want to join in?"');
    scene.text('You can feel your heart pounding as you continue listening to them talk about you.');
    scene.text('Vitek casually gets up. "Sure why not?" The boys then leave the restroom.');
    scene.actions([
      { label: 'Carefully leave the stall', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big10.jpg');
    // TODO-QSP: dynamic text: You wait for a few seconds after the boys leave and quietly exit the stall, peek...
    scene.text(`You wait for a few seconds after the boys leave and quietly exit the stall, peeking out of the restroom door to see no one around. You let out a quick sigh of relief as you walk toward the girl's restroom to wait out recess when you suddenly hear someone behind you. "Hey ${((st as any).pcs_nickname ?? '')}, just the girl we're looking for."`);
    scene.text('You freeze in your tracks as Dan grabs your hand. "Let\'s have some fun."');
    scene.text('You try to say something, but your mind is racing too fast. Dan pulls you towards the restroom as the other boys follow closely behind.');
    scene.actions([
      { label: 'Follow them to the restroom', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big10.jpg');
    scene.text('"I haven\'t had your pussy in a while. Take off your clothes," Dan orders and you meekly nod before removing your clothes.');
    scene.actions([
      { label: 'Carefully leave the stall', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('' + qspFunc(s, '$face_image', '') + '');
    scene.text('');
    scene.actions([
      { label: 'Carefully leave the stall', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('' + qspFunc(s, '$face_image', '') + '');
    scene.text('');
    scene.actions([
      { label: '', goto: ['', ''] },
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

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).NikoEv ?? 0) === 21  &&  String((s as any).locArgs?.[0] ?? '') !== 'Niko Search') {
    qspGoto(s, 'NikoEv2', 'Niko Search');
  }
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
    case 'Diner 1':
      enterDiner1(s, scene);
      break;
    case 'Diner Washup':
      enterDinerWashup(s, scene);
      break;
    case 'Diner Exit':
      enterDinerExit(s, scene);
      break;
    case 'Reward 2':
      enterReward2(s, scene);
      break;
    case 'Yurik BJ':
      enterYurikBJ(s, scene);
      break;
    case 'Diner 2':
      enterDiner2(s, scene);
      break;
    case 'Diner Exit 2':
      enterDinerExit2(s, scene);
      break;
    case 'Diner Slut':
      enterDinerSlut(s, scene);
      break;
    case 'Niko Search':
      enterNikoSearch(s, scene);
      break;
    case 'Niko Search 2':
      enterNikoSearch2(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const NikoEv2: LocationDef = {
  name: 'NikoEv2',
  title: 'Bathroom',
  region: 'other',
  enter: enter,
};
