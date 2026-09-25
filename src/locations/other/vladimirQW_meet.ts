import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).vladimirQW = (s as any).vladimirQW ?? {})['stage'] = 25;
  ((s as any).vladimirQW = (s as any).vladimirQW ?? {})['day'] = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.text('<center><b>Vladimir</b></center>');
  scene.img('images/characters/city/vladimir/001.jpg');
  scene.text(`As you enter the lobby of the restaurant, Vladimir comes to you carrying a lush bouquet of roses. "Hello ${((s as any).pcs_nickname ?? '')}. Well, let's go to the restaurant?"`);
  scene.actions([
    { label: 'Take the bouquet and enter the restaurant with Vladimir', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.text('You\'re a little confused but take the bouquet of roses from Vladimir and let him steer you as he takes you by the elbow and leads you into the restaurant. He takes you to a table with a discreet "reserved" sign upon it and gallantly pulls out the chair for you to sit.');
    scene.actions([
      { label: 'Take a seat', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.text('Soon a waiter presents you with a menu and Vladimir asks you not to hesitate and to order whatever you want.');
    scene.actions([
      { label: 'Place an order', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.text(`You make the order and the waiter whisks the menu away. At the table, an awkward silence descends. Vladimir pauses for a moment and asks. "So ${((st as any).pcs_nickname ?? '')} who do you work for?"`);
    if (((st as any).job_status ?? 0)?.['city_market_saleswoman'] === 'employed') {
      (st as any).qwvladwork = 'I work in the market.';
    } else {
      if (((st as any).job_status ?? 0)?.['city_pussycats_clerk'] === 'employed') {
        (st as any).qwvladwork = 'I work in a store.';
      } else {
        if (((st as any).job_status ?? 0)?.['city_cafe_waitress'] === 'employed') {
          (st as any).qwvladwork = 'I work as a waitress in a cafe.';
        } else {
          (st as any).qwvladwork = 'By and large, nothing.';
        }
      }
    }
    scene.actions([
      { label: '', labelFn: (s: GameState) => String(((st as any).qwvladwork ?? '') ?? ''), handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.text(`"${((st as any).qwvladwork ?? '')}" You tell him.`);
    scene.text('"Right. I work behind a big desk, a businessman. I buy and sell, for short."');
    scene.text('At this time the waiter appears carrying your orders to the table. After the plates are placed, Vladimir continues.');
    scene.text('"I\'m 40 years old. Married and have a child. I\'ve been with my wife for a long time and nothing binds us together any more, I\'m ready to divorce her at any time."');
    scene.text('Vladimir pours the wine and raises a toast to the relationship.');
    scene.actions([
      { label: 'Have a drink', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    (st as any).pcs_energy = 100;
    (st as any).pcs_hydra = 100;
    qspCall(st, 'stat', '');
    scene.text('You drink the wine and begin to dig in to the salad with the fork as Vladimir says, "Let\'s move on, I hope you do not mind?" You shake your head confirming that you too find this formal conversation style a bit much.');
    scene.text('Vladimir continues "In business terms I\'m a wolf. I find it impossible to stand still, I have to constantly find new prey. Now I\'m opening another business. Therefore I could take you to work."');
    scene.text('You stop chewing your salad and stare at him. "We just met, you don\'t know me," you protest.');
    scene.text('Vladimir nods "Yes, but you\'re a special girl. Unique. I just feel it."');
    scene.text('The restaurant band has been playing throughout and now Vladimir stands, inviting you to dance.');
    scene.actions([
      { label: 'Dancing with Vladimir', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.text('Vladimir takes you by the hand and leads you to the dance floor. There you firmly embrace and begin to dance. You can clearly feel your breasts pressed firmly against his chest as his warm hands clasp your waist and pull you tight against his body.');
    scene.text('Soon the song fades and Vladimir guides you back towards your table, pulling out your chair to help you sit down. You continue to dine and talk. This time, Vladimir doesn\'t mention serious topics and recounts a story from his recent trip to a ski resort.');
    scene.text('After you eat and drink your fill, Vladimir offers a lift home. He pays the waiter, leaves a generous tip and takes you by the hand to lead you from the restaurant.');
    scene.actions([
      { label: 'Leave the restaurant', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/vladimir/car.jpg');
    scene.text('The restaurant car is already prepared for you and Vladimir helps you sit in the back seat and climbs into the seat next to you. The driver closes the door and sits behind the wheel. Without looking back, he asks where to go and you call out your address.');
    scene.text('You practically fly through the streets at breakneck speed. The driver seems to be a real ace, he deftly sweps around the turns and goes around barely moving cars, all while never hitting the brakes. Before long you pull to a halt outside your home. Vladimir shakes his head sadly, "I unfortunately have a couple of things to do, so I\'m in a hurry. I\'ll call you soon."');
    scene.text('He leans towards you, plainly expecting a kiss.');
    scene.actions([
      { label: 'Give a kiss on the cheek', handler: (st: GameState) => {
    scene.text('You move towards Vladimir and give his cheek a brief, chaste, kiss.');
    qspGoto(st, 'vladimirQW_meet', 'qwmeetdy');
  } },
      { label: 'Kiss on the lips', handler: (st: GameState) => {
    scene.text('You kiss Vladimir on the mouth, his strong, firm, lips pressing hard against your pliant mouth.');
    qspGoto(st, 'vladimirQW_meet', 'qwmeetdy');
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

function enterQwmeetdy(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/vladimir/car.jpg');
  scene.text('The door opens and the driver offers to take your hand.');
  // TODO-QSP: end & !! --- qwmeetdy ---
  scene.actions([
    { label: 'Climb out of the car with the driver\'s assistance', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/glory/001.jpg');
    scene.text('Stepping out of the car you just now get a good look at the driver. He appears to be a young man of Asian origin. Apparently confident he smiles at you with a hint of impudence.');
    scene.text(`Vladimir looks out of the car "This is my driver, Glory. He may be a little scary. I'll call you ${((st as any).pcs_nickname ?? '')}"`);
    scene.text('The Asian man smiles again and you shut the back door. Leaping into the driver\'s seat, he again looks at you greedily, undressing you with his eyes, and slams his door with a smirk. The wheels screech and the car immediately jumps away from the pavement and speeds away, disappearing into the distance.');
    scene.actions([
      { label: 'Go home', handler: (st: GameState) => {
    qspCall(st, 'dina', '');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/glory/001.jpg');
  scene.text('Glory smiles and gestures for you to get in the car on the front passenger seat.');
  scene.actions([
    { label: 'Sit next to the driver', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/glory/002.jpg');
    scene.text('You take a seat next to the driver\'s. Glory comes to the door and slams it shut before walking over to his seat and sitting behind the wheel. Glory again speeds through the city, paying little heed to traffic lights, signs and other cars.');
    qspGoto(st, 'vladimirQW_meet', 'qwslavady');
  } },
    { label: 'Sit on the back seat', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/glory/002.jpg');
    scene.text('You defiantly took a backseat and Glory mutely shut the door behind you before he walked over to his seat and sat behind the wheel. Glory again sped through the city, paying little heed to traffic lights, signs and other cars.');
    qspGoto(st, 'vladimirQW_meet', 'qwslavady');
  } },
  ]);
  scene.build();
}

function enterQwslavady(s: GameState, scene: SceneBuilder): void {
  scene.text(`Glory speaks up without looking around at you "${((s as any).pcs_nickname ?? '')}, where did you meet Volodya?"`);
  scene.text('You\'re a little surprised that the driver calls his boss Volodya but you reply that you met in the park.');
  scene.text('The driver smiles "Yeah I remember. I drove him to the park with his wife and child. Then you must already know that he has a wife and child, right?"');
  scene.text('You nod, "Yes, he told me." Glory chuckles avoiding another car at full speed "It\'s clear. Cinderella has found her prince on a white horse."');
  scene.text('Police sirens suddenly wail from behind and begin to demand over the megaphone that the Audi stop. Glory laughs and presses even harder on the gas, flooring it. "The man who can catch up to me hasn\'t been born yet."');
  scene.text('The car accelerates to a ludicrous speed, other cars moving in the same direction vanishing behind you before you can see them ahead. Glory speeds the car out of the city and the sirens fade. He grins, "I told you the shits can\'t catch me."');
  scene.text('Soon the Audi arrives at the river and stops near the pier which is almost deserted. Glory hops out of the car and helps you to your feet.');
  scene.text('You spot Vladimir walking towards you.');
  scene.actions([
    { label: 'Give a kiss on the cheek', handler: (st: GameState) => {
    scene.text('<center><b>Vladimir</b></center>');
    scene.img('images/characters/city/vladimir/001.jpg');
    scene.text('You move towards Vladimir and give his cheek a brief, chaste, kiss.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterQwmeetkatdy(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Kiss on the lips', handler: (st: GameState) => {
    scene.text('<center><b>Vladimir</b></center>');
    scene.img('images/characters/city/vladimir/001.jpg');
    scene.text('You kiss Vladimir on the mouth, his strong, firm, lips pressing hard against your pliant mouth.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterQwmeetkatdy(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterQwmeetkatdy(s: GameState, scene: SceneBuilder): void {
  scene.text('After the kiss, Vladimir holds you by the hand and takes you to meet his friends. Near the motor yacht stand two men and one woman, talking.');
  scene.text(`Vladimir brings you to the thinner of the two men, a man of a certain age with a rigid, fastidious persona. "Nicholas this is ${((s as any).pcs_nickname ?? '')}."`);
  scene.actions([
    { label: 'Greet him', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.text('<center><b>Nick</b></center>');
    scene.img('images/characters/city/nicholas/01.jpg');
    scene.text('Nicholas doesn\'t blink as he looks at you and politely comments, "Well met."');
    scene.text(`Vladimir next introduces you to the girl standing alongside Nicholas. "Isolde, ${((st as any).pcs_nickname ?? '')}. ${((st as any).pcs_nickname ?? '')}, Isolde."`);
    scene.actions([
      { label: 'Greet her', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.text('<center><b>Isolda</b></center>');
    scene.img('images/characters/city/isolde/izolda.jpg');
    scene.text('The young blonde smiles and greets you.');
    scene.text(`Vladimir brings you to his second friend. "This, Vitaly, is ${((st as any).pcs_nickname ?? '')}."`);
    scene.actions([
      { label: 'Greet him', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.text('<center><b>Vitali</b></center>');
    scene.img('images/characters/city/vitali/001.jpg');
    scene.text('The man looks at you with wide, mad eyes and smiles. "Hello beautiful, welcome to our warm company"');
    scene.text('Vladimir looks around "Well, since we\'re all here, let\'s get on the boat." Nicholas looks at the driver, Glory. "Hey Banzai, loose the moorings and get to the helm." The asian nods and begins fussing around the boat.');
    scene.actions([
      { label: 'Board the boat', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.text('<center><b>The boat</b></center>');
    scene.img('images/characters/city/vladimir/kater.jpg');
    scene.text('You board the boat and the Asian, Glory, who Nicholas calls Banzai, casts off and deftly jumps onto the boat. Glory starts the motor and speeds off to the river at full speed.');
    scene.text('Nicholas sits down on a seat beside him and Vitaly flops down to lie on the deck. Vladimir starts fussing about the deck but Nicholas interrupts him, "Vova, stop running around and let\'s make love to the girls. Sit down and talk."');
    scene.text('Isolde, in response to Nicholas\'s comment ducks into the cabin.');
    scene.actions([
      { label: 'Follow Isolde into the cabin', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.text('<center><b>Cabin</b></center>');
    scene.img('images/characters/city/isolde/izolda.jpg');
    scene.text('In the cabin is a box with a variety of provisions and Isolde competently begins to arrange food onto a tray. She nods to the tomatoes, wordlessly telling you to prepare them. You grab a knife and start to cut the tomatoes.');
    scene.actions([
      { label: 'Ask about her and Nicholas', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.text('Curious, you ask her about her relationship with Nicholas. Isolde responds immediately, "We are not married but we are dating. Nicholas doesn\'t have any family, no wife, no children. He\'s a very influential person in the city, with one cross word he can make anyone toe the line."');
    scene.text('"Nicholas acts as a mediator to resolve a variety of issues and disputes." Isolde also reveals that she works in one his offices, she does almost nothing and gets not a bad salary. Nicholas gave her the post.');
    scene.actions([
      { label: 'Ask about Vitali', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.text('You ask who Vitaly is. Isolde shrugs, "I do not really know, Nikolai calls him his cop. So probably he is a cop."');
    scene.actions([
      { label: 'Ask about Glory', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.text('You ask whether she knows Glory, she smiles, "I don\'t know much despite all my time around Banzai. He replaced the last driver rather suddenly. He\'s a brazen, crazy type but a really great driver. He\'s kind of a master racer."');
    scene.actions([
      { label: 'Carry a tray out onto deck', goto: ['vladimirQW_meet', 'qwpaluba'] },
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

function enterQwpaluba(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  (s as any).pcs_energy = 100;
  (s as any).pcs_hydra = 100;
  qspCall(s, 'stat', '');
  scene.text('<center><b>The boat</b></center>');
  scene.img('images/characters/city/vladimir/kater2.jpg');
  scene.text('You bring the tray onto the deck and put it on the table in front of the men. Vladimir begins pouring a glass of vodka and gestures invitingly for you to take a seat. Isolde appears carrying a second tray of food.');
  scene.text('Everyone bar Glory takes a seat at a table on the deck and after everyone is comfortable, Vladimir pours vodka into the glasses. Nicholas raises a toast "To the ladies here."');
  scene.text('Everyone drinks the toast and returns to their conversations. Vladimir busies himself with explaining the results of a recent vote to Nicholas and Vitaly contents himself with lounging back, smoking and staring at your feet.');
  scene.text('Isolde stands, leaning her hands on the gunwale and observing her surroundings. Glory pilots the boat along the river.');
  scene.actions([
    { label: 'Approach Isolde', handler: (st: GameState) => {
    (st as any).izoldaQW = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.text('<center><b>Isolde</b></center>');
    scene.img('images/characters/city/isolde/izolda.jpg');
    scene.text('Glory begins to make a turn along the river that would lead you back to the place from where you cast off. You cling to the rail next to Isolde to prevent you from falling out, Nicholas shouts "Banzai, be careful! You\'re not carrying firewood."');
    scene.text('You chat with Isolde about this and that as the landscape flies by. She gives you her address in the city center and invites you to come by anytime you like.');
    scene.text('The boat finally slows to a stop alongside the riverbank to allow you to disembark.');
    scene.actions([
      { label: 'Disembark', goto: ['vladimirQW_meet', 'qwbereg'] },
    ]);
  } },
    { label: 'Approach Glory', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.text('<center><b>Glory</b></center>');
    scene.img('images/characters/city/glory/001.jpg');
    scene.text('Glory grins when he sees you. "Hold on tight, I\'m going to turn." You cling to railings and the Asian driver banks the boat hard to turn back along the river. Nicholas shouts "Banzai, be careful! You\'re not carrying firewood."');
    scene.text('The driver smiles, "I can\'t help myself, I love speed. Do you like speed?"');
    scene.actions([
      { label: 'Not really', handler: (st: GameState) => {
    (st as any).slavaQW = 1;
    scene.text('"Not really," you say.');
    scene.text('Glory smiles. "You just haven\'t felt it yet. You\'d love the feeling of real speed. I hang out in the evenings in the city industrial region near the bar, "Rabotnik", come visit.');
    scene.text('The boat finally drops in speed and comes to a halt against the river\'s shore.');
    scene.actions([
      { label: 'Disembark', goto: ['vladimirQW_meet', 'qwbereg'] },
    ]);
  } },
      { label: 'Yes', handler: (st: GameState) => {
    (st as any).slavaQW = 1;
    scene.text('"Yes," you say');
    scene.text('Glory smiles. "My kind of girl. In the evenings, I hang out in the city industrial region. I go to the bar, "Rabotnik", visit and I\'ll show you what real speed is."');
    scene.text('The boat finally drops in speed and comes to a halt against the river\'s shore.');
    scene.actions([
      { label: 'Disembark', goto: ['vladimirQW_meet', 'qwbereg'] },
    ]);
  } },
    ]);
  } },
    { label: 'Talk with Vitali', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.text('<center><b>Vitali</b></center>');
    scene.img('images/characters/city/vitali/001.jpg');
    scene.text('You start talking with Vitali, he acknowledges that he is currently working as a police captain. While you speak, the boat banks sharply and begins to turn. Not expecting the sudden movement, you slide from the couch and grab at Vitali to not fall. Nicholas shouts "Banzai, be careful! You\'re not carrying firewood!"');
    scene.text('Vitaliy grabs you so that you don\'t fall to the deck. After the boat levels off from the turn he helps you back onto the couch, his hands sliding over your body and stopping against your ass. He sighs as he lets go of your body to pour more vodka');
    scene.text('The boat finally slows to a stop alongside the riverbank to allow you to disembark.');
    scene.actions([
      { label: 'Disembark', goto: ['vladimirQW_meet', 'qwbereg'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterQwbereg(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A108');
  ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  scene.text('<center><b>The boat</b></center>');
  scene.img('images/characters/city/vladimir/kater.jpg');
  scene.text('The boat is pulled to the bank and Glory jumps from the boat to tether it to the moorings. Everyone begins to descend from the boat to shore. Vladimir says "Thank you now razvezet home and then pick me up and light."');
  scene.text('Nikolai, Vitaliy and Isolde say their goodbye and get into the car. Glory sits behind the wheel and drives off. You stay near the boat together with Vladimir who asks you to help clean up.');
  scene.text('Vladimir gathers the remnants of food in a bag and throws it in the trash. You help move the boxes with untouched food off the ship and wipe the deck with a damp cloth.');
  scene.text('Finally with the cleaning completed, Vladimir sits on the sofa to rest on deck.');
  // TODO-QSP: end & !! --- qwpbereg ---
  scene.actions([
    { label: 'Sit next to him', handler: (st: GameState) => {
    scene.text('<center><b>Vladimir</b></center>');
    scene.img('images/characters/city/vladimir/001.jpg');
    scene.text('You sit next to Vladimir, and he hugs you by the shoulders. "Well, how did you like it?"');
    scene.actions([
      { label: 'It was not bad. Great boat.', handler: (st: GameState) => {
    scene.text('You tell him "It wasn\'t bad. This is a great boat you have.');
    scene.text('Vladimir chuckles "It\'s not my boat. I lent it from a friend after we had a business meeting on it. Absolutely no time to rest, so you have to combine business with the rest.');
    scene.text('Vladimir leans to your face trying to kiss you.');
    scene.actions([
      { label: 'Kiss', handler: (st: GameState) => {
    (st as any).VladimirSex = ((st as any).VladimirSex ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.text('You start kissing with Vladimir sitting on the couch. His hands slides to your chest and begins to knead your breasts through the clothing.');
    qspCall(st, 'arousal', 'kiss', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Enjoy', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/vladimir/sex/tits.jpg');
    scene.text('Vladimir lifts your shirt and begins to lick and suck at your breasts. Gentle warmth floods you and you are well caressed by Vladimir.');
    qspCall(st, 'arousal', 'foreplay', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Enjoy', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/vladimir/sex/kuni.jpg');
    scene.text('Vladimir starts to remove your clothes to get to your pussy. He begins to lick and caress your pussy with his tongue.');
    if (((st as any).pcs_horny ?? 0) >= 90) {
      qspCall(st, 'mood', 'raise', 'small');
      (st as any).orgasm_or = 'custom';
      (st as any).orgasm_txt = 'The skillful tongue of Vladimir makes you orgasm.';
    } else {
      scene.text('Vladimir\'s tongue and actions are quite exciting, but it\'s not enough.');
    }
    qspCall(st, 'arousal', 'cuni', 5, 'dom');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Give him', handler: (st: GameState) => {
    (st as any).pose = 0;
    scene.img('images/shared/sex/vag/miss/vag.jpg');
    scene.text(`${((st as any).boydesc ?? '')} spreads your legs and begins to fondle your pussy with his fingers.`);
    qspCall(st, 'dinsex', 'boy_puts_condom');
    qspCall(st, 'arousal', 'vaginal_finger', 5);
    qspCall(st, 'dinsex', 'vaginal_sex', 10);
    qspCall(st, 'dinsex', 'sexcum');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', goto: ['vladimirQW_meet', 'qwbereg2'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Put hand between legs', handler: (st: GameState) => {
    (st as any).VladimirHJ = ((st as any).VladimirHJ ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/vladimir/sex/hand.jpg');
    scene.text('You start stroking Vladimir\'s crotch and feel his cock grow stiffer. He unzips and pulls his proudly standing member out, guiding your hands onto it.');
    scene.text('You start to caress the hard and hot cock with slender fingers.');
    qspCall(st, 'arousal', 'hj', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Masturbate him', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/vladimir/sex/hand2.jpg');
    scene.text('You start stroking his cock harder and soon have Vladimir finish, groaning in your hands.');
    qspCall(st, 'arousal', 'hj', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['vladimirQW_meet', 'qwbereg2'] },
    ]);
  } },
      { label: 'Take by mouth', handler: (st: GameState) => {
    (st as any).VladimirBJ = ((st as any).VladimirBJ ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/vladimir/sex/bj.jpg');
    scene.text('Lowering down to your knees, you wrap your lips around the member of Vladimir and begin to suck him, managing to take him deep into your throat as he thrusts. Abundant amounts of drool and saliva wetting him and running out.');
    scene.text('Finally Vladimir groans and you can tell he is about to finish.');
    qspCall(st, 'arousal', 'bj', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue to suck', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/mouth/cum30.jpg');
    scene.text('His hot jet of sperm hits you in the mouth with a pungent taste. You swallow his cum, and Vladimir continues to finish in your mouth until finally the flow of hot liquid stops.');
    qspCall(st, 'arousal', 'bj', 5, 'sub');
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).boy ?? 0), 1);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: '…', goto: ['vladimirQW_meet', 'qwbereg2'] },
    ]);
  } },
      { label: 'Remove from mouth', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 2) + 0) === 1) {
      scene.img('images/shared/sex/handjob/hand.jpg');
      scene.text('You remove his member from your mouth and Vladimir finishes in your palm.');
      qspCall(st, 'arousal', 'bj', 5, 'sub');
      qspCall(st, 'arousal', 'end');
    } else {
      scene.img('images/shared/sex/cum/facial/facial16.jpg');
      scene.text('You take his member out and at this point Vladimir discharges directly on your face, covering it with warm and sticky cum.');
      qspCall(st, 'arousal', 'bj', 5, 'sub');
      qspCall(st, 'cum_call', 'face', ((st as any).boy ?? 0), 1);
      qspCall(st, 'arousal', 'end');
    }
    scene.actions([
      { label: '…', goto: ['vladimirQW_meet', 'qwbereg2'] },
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

function enterQwbereg2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  ((s as any).vladimirQW = (s as any).vladimirQW ?? {})['day'] = ((s as any).daystart ?? 0);
  ((s as any).vladimirQW = (s as any).vladimirQW ?? {})['stage'] = 35;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/vladimir/car.jpg');
  scene.text('After you\'ve finished fucking with Vladimir, you notice the familiar Audi drive up. Glory comes out of it and invites you to get in the car.');
  scene.text('You sit in the back seat of the car and Vladimir, pleased, though tired sits down next to you. Glory steps on the gas as usual and speeds down the road.');
  scene.text('Soon you are already around your porch. Vladimir promises to call you and leaves with Slava.');
  // TODO-QSP: end & !! --- qwpbereg2 ---
  scene.actions([
    { label: 'Go home', handler: (st: GameState) => {
    qspCall(st, 'dina', '');
  } },
  ]);
  scene.build();
}

function enter3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/glory/001.jpg');
  scene.text('Glory smiles and gestures for you to get in the car on the front passenger seat.');
  // TODO-QSP: end & !! --- 3 ---
  scene.actions([
    { label: 'Sit next to the driver', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/glory/002.jpg');
    scene.text('You take a seat next to the driver\'s. Glory comes to the door and slams it shut before walking over to his seat and sitting behind the wheel. Glory again speeds through the city, paying little heed to traffic lights, signs and other cars.');
    if (((st as any).slavaQW ?? 0) > 0) {
      (st as any).slavaQW = ((st as any).slavaQW ?? 0) + (1);
      scene.text('While you drive through the city, you happily chat with Slava.');
    }
    if ((!((st as any).slavaQW ?? 0))) {
      (st as any).slavaQW = 1;
      scene.text('While you drive through the city, Glory tells you that he spends much of his spare time in the bar called "Rabotnik" in the city industrial region of the city.');
    }
    qspGoto(st, 'vladimirQW_meet', 'qwmeetdin');
  } },
    { label: 'Sit on the back seat', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/glory/002.jpg');
    scene.text('You defiantly take a backseat and Glory mutely shuts the door behind you before he walks over to his seat and sits behind the wheel. Glory again speeds through the city, paying little heed to traffic lights, signs and other cars.');
    qspGoto(st, 'vladimirQW_meet', 'qwmeetdin');
  } },
  ]);
  scene.build();
}

function enterQwmeetdin(s: GameState, scene: SceneBuilder): void {
  scene.text('Finally the car stops near the restaurant.');
  // TODO-QSP: end & !! --- qwmeetdin ---
  scene.actions([
    { label: 'Out of the car', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    (st as any).pcs_energy = 100;
    (st as any).pcs_hydra = 100;
    ((st as any).vladimirQW = (st as any).vladimirQW ?? {})['day'] = ((st as any).daystart ?? 0);
    ((st as any).vladimirQW = (st as any).vladimirQW ?? {})['stage'] = 35;
    qspCall(st, 'stat', '');
    scene.text('The restaurant is the same one from your last meeting with Vladimir. He takes you to a specially reserved table. You drink and eat with Vladimir, who speaks little, mostly restrainting himself to complimenting you.');
    if ((!((st as any).VladimirKnowAboutHusband ?? 0))) {
      scene.text('Soon, you come out of the restaurant and take a seat in the car with Vladimir, thanking him you lean back in your seat, heading home. On the way back Vladimir leans towards you and pointedly whispers, "Care to invite me in?"');
      if (((st as any).husID ?? 0) === ''  &&  ((st as any).wifID ?? 0) === '') {
        scene.actions([
          { label: 'Invite', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    (st as any).nameV = 'Vladimir';
    qspCall(st, 'boyStat', 'A108');
    (st as any).NoGuy = 1;
    (st as any).InYouHome = 1;
    ((st as any).npc_gentle = (st as any).npc_gentle ?? {})[String((st as any).boy ?? 0)] = 1;
    ((st as any).npc_finance = (st as any).npc_finance ?? {})[String((st as any).boy ?? 0)] = 2;
    if (((st as any).vladimirQW ?? 0)?.['money_given'] === 0) {
      (st as any).temp_money = 5000;
    } else {
      (st as any).temp_money = 2000;
    }
    qspCall(st, 'money', 'earn', ((st as any).temp_money ?? 0), 'cash');
    ((st as any).vladimirQW = (st as any).vladimirQW ?? {})['money_given'] = ((st as any).vladimirQW['money_given'] ?? 0) + (((st as any).temp_money ?? 0));
    scene.text(`You walk with Vladimir into the bedroom. Vladimir sceptically cast his gaze about your humble abode and takes out his wallet. "I hope you will not mind if I give you some money?" He hands you ${qspFunc(s, 'money', 'string_profit', ((st as any).temp_money ?? ''))}. You take the money you are offered.`);
    (st as any).temp_money = undefined;
    scene.actions([
      { label: 'Continue', goto: ['BDsex', 'start'] },
    ]);
  } },
        ]);
      } else {
        scene.actions([
          { label: 'I am married', handler: (st: GameState) => {
    (st as any).VladimirKnowAboutHusband = 1;
    scene.text('You tell Vladimir that you have a husband. He starts apologizing time and again before he says goodbye to you.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'dina', '');
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Sorry, but I need to get on', handler: (st: GameState) => {
    qspCall(st, 'dina', '');
  } },
      ]);
    } else {
      scene.text('After the meal you leave the restaurant and get into the car with Vladimir. He suggests that you go with him, to a safe place.');
      scene.actions([
        { label: 'Sorry, but I need to get on', handler: (st: GameState) => {
    qspCall(st, 'dina', '');
  } },
        { label: 'Agree', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    (st as any).nameV = 'Vladimir';
    qspCall(st, 'boyStat', 'A108');
    (st as any).NoGuy = 1;
    ((st as any).npc_gentle = (st as any).npc_gentle ?? {})[String((st as any).boy ?? 0)] = 1;
    ((st as any).npc_finance = (st as any).npc_finance ?? {})[String((st as any).boy ?? 0)] = 2;
    (st as any).GoToGuy = 2;
    scene.text('Glory drives you to an apartment Vladimir rents. You get out of the car and go up to the apartment.');
    scene.text('Once through the door you go with Vladimir to the bedroom.');
    scene.actions([
      { label: 'Continue', goto: ['BDsex', 'start'] },
    ]);
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'qwmeetdy':
      enterQwmeetdy(s, scene);
      break;
    case '2':
      enter2(s, scene);
      break;
    case 'qwslavady':
      enterQwslavady(s, scene);
      break;
    case 'qwmeetkatdy':
      enterQwmeetkatdy(s, scene);
      break;
    case 'qwpaluba':
      enterQwpaluba(s, scene);
      break;
    case 'qwbereg':
      enterQwbereg(s, scene);
      break;
    case 'qwbereg2':
      enterQwbereg2(s, scene);
      break;
    case '3':
      enter3(s, scene);
      break;
    case 'qwmeetdin':
      enterQwmeetdin(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const vladimirQW_meet: LocationDef = {
  name: 'vladimirQW_meet',
  title: 'Vladimir',
  region: 'other',
  enter: enter,
};
