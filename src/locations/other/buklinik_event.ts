import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterPos1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).buklinikDay = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/industrial/mercyclinic/bukli_spal.jpg');
  // TODO-QSP: dynamic text: The succeeded clients look at you, "Good afternoon! I wanted to introduce myself...
  scene.text(`The succeeded clients look at you, "Good afternoon! I wanted to introduce myself. My name is ${((s as any).pcs_nickname ?? 0)} and I am the new volunteer. Don't hesitate to get in touch with me and I'll try my best to help you all."`);
  scene.text('The majority of them mumble between themselves before going back to loitering around. All except one. "Hey girl! The name\'s Vladimir! Why are you standing there all scared? Come in and sit with us. I\'ll introduce you to everyone."');
  scene.actions([
    { label: 'Leave', goto: ['buklinik', 'holl'] },
    { label: 'Stay by the door', goto: ['buklinik_event', 'pos5'] },
    { label: 'Take a seat', goto: ['buklinik_event', 'pos2'] },
  ]);
  scene.build();
}

function enterPos2(s: GameState, scene: SceneBuilder): void {
  (s as any).bumtolik = 7;
  scene.img('images/locations/city/industrial/mercyclinic/bukli_pos2.jpg');
  scene.text('Not wanting to be unfriendly, being the first day and all, you head over to the male area of the dormitory. "Thank you for inviting me in, I don\'t want to be bothersome."');
  scene.text('As you walk past some of the men, you feel a bit unsettled. They are undressing you with their hungry eyes, and you can\'t shake the feeling that you\'d be in trouble if you weren\'t in a safe place.');
  scene.text('Vladimir calls you over, "Take a seat, young lady. There\'s nothin\' to worry about."');
  scene.text('You take a seat at a small table in the middle of the room. In no time, you\'re surrounded by the men. "Meet Vitaly, Paul Afanasyevitch, Oleg, Kostya, and slow Albert."');
  scene.text('Suddenly, you feel one of them touch you. "So young and smooth…" while someone else takes a sniff of you, "Delicious…"');
  scene.actions([
    { label: 'Try to get away', goto: ['buklinik_event', 'pos3'] },
  ]);
  scene.build();
}

function enterPos3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'lower', 'medium');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/industrial/mercyclinic/bukli_grop2.jpg');
  scene.text('"I-I have to go. W-What are you doing? Stop it," you yell out.');
  scene.text('You manage to stand up, but as you\'re surrounded, they easily keep you in place. "Where are you going, girl? Did you see that ass?!"');
  scene.text('You feel someone squeezing your ass. "Come on, show us your tits!"');
  scene.text('Slow Albert grabs you around the waist and starts dry humping you, while one of the others starts pulling on your clothes, exposing your breasts.');
  scene.actions([
    { label: 'Look towards the door', goto: ['buklinik_event', 'pos4'] },
  ]);
  scene.build();
}

function enterPos4(s: GameState, scene: SceneBuilder): void {
  scene.img('images/pc/reactions/bukli_angry.jpg');
  scene.text('"What the fuck are you doing?!" Olga yells from the doorway, "What is wrong with you?! You get fed, washed, and you have a place to sleep, and you repay us by acting like this?! You ungrateful swine!"');
  scene.text('Olga decisively walks towards you, grabs you by the hand, and leads you out. "It\'s her first day here, and I don\'t want to lose another volunteer because of you lot! You\'re on a thin line; I\'ll have a talk with Vera and we\'ll see how to deal with you!"');
  scene.text('Olga slams the door behind her and turns towards you, "Are you okay? Did they hurt you?"');
  scene.text('"Just a little shaken, that is all," you reply.');
  scene.text('She grabs you by the shoulders. "Whatever you do, don\'t drop your guard around anyone here. They see you as easy prey and will jump you as soon as they see an opportunity."');
  scene.actions([
    { label: 'Nod', goto: ['buklinik', 'holl'] },
  ]);
  scene.build();
}

function enterPos5(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'lower', 'tiny');
  (s as any).bumtolik = 7;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/industrial/mercyclinic/bukli_spal.jpg');
  scene.text('You shake your head. "Thank you for the invite, but I\'ll stay here. I don\'t want to be a bother…"');
  scene.text('The men quickly lose interest and start going on with their business.');
  scene.text('Vladimir looks irritated. "Well, if you\'re just going to stand there and glare, fuck off from here!"');
  scene.text('Feeling threatened, you decide it would be wise to leave.');
  scene.actions([
    { label: 'Go back into the corridor', goto: ['buklinik', 'holl'] },
  ]);
  scene.build();
}

function enterPos6(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/industrial/mercyclinic/bukli_eat.jpg');
  scene.text('Olga cheerfully greets you. "Thank you for agreeing to help out. Just set the tables. Some of the clients are a bit special to say the least, so you\'ll have to make do. And be sure to keep the apron on; you do not want your clothes to get dirty."');
  scene.text('You nod, "Got it! Should be easy enough."');
  scene.actions([
    { label: 'Set the tables', goto: ['buklinik_event', 'pos7'] },
  ]);
  scene.build();
}

function enterPos7(s: GameState, scene: SceneBuilder): void {
  (s as any).buklinikDay = ((s as any).daystart ?? 0);
  // TODO-QSP: gs 'exp_gain', 'medcn', rand (0, 3)
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/industrial/mercyclinic/bukli_eat2.jpg');
  if (((s as any).bumtolik ?? 0) > 7) {
    scene.text('You quietly set the tables, avoiding the clients to your best ability.');
  } else {
    (s as any).bumtolik = 8;
    scene.text('There are some clients sitting by the next table you\'re about to set. As you start, one of the clients comments, "Look at this beauty right here. You\'re new here, right?! Yeah, you are; I remember all the tits that have come into this place."');
    scene.text('Startled, you stammer, "W-What?! I-I… M-Mind your own business!" Your cheeks turn red as the client keeps eying you intensely…');
  }
  scene.actions([
    { label: 'Finish', goto: ['buklinik', 'olga2'] },
  ]);
  scene.build();
}

function enterPos8(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'exp_gain', 'medcn', rand (0, 3)
  if (((s as any).bumtolik ?? 0) === 8) {
    (s as any).bumtolik = 9;
  }
  (s as any).buklinikDay = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 120;
  qspCall(s, 'mood', 'raise', 'small');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/industrial/mercyclinic/bukli_sitter1.jpg');
  scene.text('You head over to the elderly client and do some work around the house. As you finish, you chat a bit with the elderly client who is truly grateful for all of your help.');
  scene.actions([
    { label: 'Return', goto: ['buklinik', 'olga2'] },
  ]);
  scene.build();
}

function enterPos9(s: GameState, scene: SceneBuilder): void {
  (s as any).buklinikDay = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 120;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/industrial/mercyclinic/bukli_mission.jpg');
  scene.text('You and several other volunteers head out and scour the parks, trying to find the alcoholic Olga sent you to find.');
  scene.text('You get close to a makeshift camp as one of the volunteers shouts, "Why did you leave?! Come with us, we\'ll take you back to the shelter."');
  scene.text('He shouts back, "Fuck off! Why would I?! I\'m fine here; I see lovely ladies jog past here every day. I won\'t return unless you\'ve got hot girls at that shit place."');
  // TODO-QSP: dynamic text: The volunteer turns to you, "We've been going back and forth with this old perve...
  scene.text(`The volunteer turns to you, "We've been going back and forth with this old pervert for weeks. ${((s as any).pcs_nickname ?? 0)}, do you have any idea how to lure him back?"`);
  scene.text('You notice the old man\'s eyes dart towards your hips and back; maybe someone could distract him with a panty flash, but they\'d have to be pretty horny to even consider it.');
  if (((s as any).pcs_horny ?? 0) > 50  &&  ((s as any).pantyworntype ?? 0) !== 'none'  &&  ((s as any).PCloSkirt ?? 0) > 1  &&  ((s as any).pcs_inhib ?? 0) > 20) {
    scene.actions([
      { label: 'I have an idea', goto: ['buklinik_event', 'pos10'] },
    ]);
  }
  scene.actions([
    { label: 'Let me work on this, I think I have an idea', goto: ['buklinik', 'olga2'] },
  ]);
  scene.build();
}

function enterPos10(s: GameState, scene: SceneBuilder): void {
  (s as any).bumtolik = 10;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  // TODO-QSP: gs 'exp_gain', 'medcn', rand (0, 3)
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/industrial/mercyclinic/bukli_mission1.jpg');
  scene.text('You have the perfect idea that might persuade the old drunk. You sit in front of the makeshift shelter and tell the others to back off while you tell him that you have something to show him.');
  scene.text('Making sure the others don\'t notice it, you show him a little peek of your panties as he stands there dumbfounded.');
  scene.text('With his guard down, you yell out to the others to grab him, and the rest surround him, grabbing him.');
  scene.text('While the commotion is going on, you hide what you were doing and join in to help out. The alcoholic starts yelling, "Did you see what she did?! She showed me her panties!"');
  scene.text('He looks around, bleary-eyed and confused, as a volunteer berates him. "Why would she do that?! You reek of alcohol; it\'s just your mind playing tricks on you. Come on now, we\'re taking you back."');
  scene.text('The drunk starts fighting, refusing to come along, "What! No! I am a free man! You have no right doing this! I\'m not crazy; she really did it!"');
  scene.text('After a short tussle, the others manage to get him under control and lead him away.');
  scene.text('As things quiet down, you get approached by a volunteer, "No one has been able to get him that under control; how did you do it?"');
  scene.text('With a smirk, you reply, "A girl has to keep some secrets."');
  scene.actions([
    { label: 'Head back to the shelter', goto: ['buklinik', 'olga2'] },
  ]);
  scene.build();
}

function enterHall(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'buklinik_event', 'hall');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Entrance hall</b></center>');
  scene.img('images/locations/city/industrial/mercyclinic/kor.jpg');
  if (((s as any).nanny_vika ?? 0) === 1) {
    scene.text('The beautiful <a href="exec:gt \'buklinik_event\',\'vika\'">Vika</a> is standing by the mirror.');
    scene.actions([
      { label: 'Go', goto: ['city_industrial', ''] },
    ]);
  }
  scene.actions([
    { label: 'Bathroom Michael', goto: ['buklinik_event', 'room'] },
    { label: 'Kitchen', goto: ['buklinik_event', 'kitchen'] },
  ]);
  scene.build();
}

function enterRoom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'buklinik_event', 'room');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Bathroom Michael</b></center>');
  scene.img('images/locations/city/industrial/mercyclinic/kom.jpg');
  if (((s as any).nanny_clean_day ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Start cleaning', handler: (st: GameState) => {
    (s as any).nanny_cleaning = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 45;
    (s as any).nanny_clean_day = ((s as any).daystart ?? 0);
    qspCall(s, 'mood', 'lower', 'small');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/industrial/mercyclinic/uborka.jpg');
    scene.text('You cleaned the apartment.');
    scene.actions([
      { label: 'Finish cleaning', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  }
  scene.text('<a href="exec:gt \'buklinik_event\',\'misha\'">Michael</a> lies in bed reading a book.');
  scene.actions([
    { label: 'Out', goto: ['buklinik_event', 'hall'] },
  ]);
  scene.build();
}

function enterKitchen(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'buklinik_event', 'kitchen');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Kitchen</b></center>');
  scene.img('images/locations/city/industrial/mercyclinic/kuh.jpg');
  if (((s as any).nanny_cook_day ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Cook', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 45;
    (s as any).nanny_cook_day = ((s as any).daystart ?? 0);
    (s as any).nanny_food = 1;
    scene.img('images/locations/city/industrial/mercyclinic/gotovka.jpg');
    scene.text('You cook the food and feed Michael.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Leave', goto: ['buklinik_event', 'hall'] },
  ]);
  scene.build();
}

function enterVika(s: GameState, scene: SceneBuilder): void {
  (s as any).VikaAge = ((s as any).age ?? 0) + 5;
  scene.img('images/characters/city/vika/0.jpg');
  // TODO-QSP: dynamic text: The nurse Vika is a little older than you, at <<VikaAge>> years.
  scene.text(`The nurse Vika is a little older than you, at ${((s as any).VikaAge ?? 0)} years.`);
  scene.actions([
    { label: 'Chat', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: $zz_str[0] = 'You talk with Vika, laugh, and tell each other jokes. She is a very cheerful girl.'
    // TODO-QSP: $zz_str[1] = 'You ask Vika about the university. She says that she is studying medicine in her last ...
    // TODO-QSP: $zz_str[2] = 'You ask Vika about her boyfriend. She smiles and says, "Well, I have a boyfriend. Can ...
    // TODO-QSP: $zz_str[3] = 'You talk to Vika, and she tells you about what happened before at the dances, but due ...
    // TODO-QSP: $zz_str[4] = 'You are talking with Vika, discussing the latest trends in fashion.'
    // TODO-QSP: $zz_str[5] = 'You chat with Vika a bit and discuss Michael.'
    // TODO-QSP: $zz_str[6] = 'You talk to Vika; she tells you that Michael is a good and generous man.'
    scene.img('images/characters/city/vika/1.jpg');
    scene.text('You decided to chat with Vika.');
    scene.actions([
      { label: 'Leave', goto: ['buklinik_event', 'hall'] },
    ]);
  } },
    { label: 'But don\'t be late?', handler: (st: GameState) => {
    (s as any).nanny_vika = 0;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/vika/2.jpg');
    // TODO-QSP: dynamic text: - Oh, right! well I ran. While, <<$pcs_nickname>>.
    scene.text(`- Oh, right! well I ran. While, ${((s as any).pcs_nickname ?? 0)}.`);
    scene.text('- So Far, Vika.');
    scene.text('Well, I guess I gotta go to Michael, see you.');
    scene.actions([
      { label: 'For the work', goto: ['buklinik_event', 'hall'] },
    ]);
  } },
    { label: 'Leave', goto: ['buklinik_event', 'hall'] },
  ]);
  scene.build();
}

function enterMisha(s: GameState, scene: SceneBuilder): void {
  (s as any).MishaAge = ((s as any).age ?? 0) + 20;
  scene.text('<center><b>Michael A.</b></center>');
  scene.img('images/locations/city/industrial/mercyclinic/misha.jpg');
  // TODO-QSP: dynamic text: Michael was paralyzed after an illness, affecting his entire body. His fingers, ...
  scene.text(`Michael was paralyzed after an illness, affecting his entire body. His fingers, toes, and head, are the only things he can move. He is ${((s as any).MishaAge ?? 0)} years old. His spine is severely curved, preventing him from sitting in a regular chair.`);
  qspCall(s, 'buklinik_event', 'event2');
  scene.actions([
    { label: 'Chat', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: $zz_str[0] = 'You were talking with Michael, and I learned that he was born in Pavlovo, just like yo...
    // TODO-QSP: $zz_str[1] = 'At an early age, he lost a sister, Anastasia, to pneumonia. Then, for several years, h...
    // TODO-QSP: $zz_str[2] = 'He explains that in his childhood, he loved to play with the neighborhood children… Bu...
    // TODO-QSP: $zz_str[3] = 'Despite the physical difficulties he had to overcome, Michael received a diploma in En...
    // TODO-QSP: $zz_str[4] = 'You talk with Michael, and he tells you about the "iron lung," a device that allows hi...
    // TODO-QSP: $zz_str[5] = 'You talk with Michael, and he tells you that he''s not actually lame; it''s just that ...
    // TODO-QSP: $zz_str[6] = '"Are you a believer?", he asked you. "Not particularly.", you answered. "And I still b...
    scene.img('images/locations/city/industrial/mercyclinic/misha.jpg');
    scene.text('You decided to chat with Michael.');
    scene.actions([
      { label: 'Leave', goto: ['buklinik_event', 'room'] },
    ]);
  } },
    { label: 'Leave', goto: ['buklinik_event', 'room'] },
  ]);
  scene.build();
}

function enterEvent0(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Your colleague Olga</b></center>');
  scene.img('images/locations/city/industrial/mercyclinic/bukli_olga.jpg');
  scene.text('- The fact is that we need to send a nurse to a special person. His name is Misha, and he is disabled.');
  scene.text('Most of his thirty-six years, Michael spent with a device called "iron lung," after suffering of polio.');
  scene.text('He can only breathe on his own for a short time; he constantly needs a breathing apparatus.');
  scene.text('- Wow! - you answered in surprise.');
  scene.text('- In general, go to this address - they will explain what you need to do there.');
  (s as any).nanny_act = 0;
  scene.actions([
    { label: 'Go', goto: ['buklinik_event', 'event1'] },
  ]);
  scene.build();
}

function enterEvent1(s: GameState, scene: SceneBuilder): void {
  (s as any).nanny_act = 1;
  (s as any).buklinik = 11;
  (s as any).buklinikDay = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'exp_gain', 'medcn', Math.floor(Math.random() * 4) + 0);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/vika/3.jpg');
  scene.text('You arrived at the address and knocked on the door. A young girl opened it and asked:');
  scene.text('- Are you from the mercy clinic?');
  scene.text('- Yes, - you replied, looking at the girl. She seemed quite cute. She invited you to enter.');
  scene.actions([
    { label: 'Enter', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/mercyclinic/kor.jpg');
    scene.text('You barely had time to log in when she immediately started asking if you had experience in disability care or any medical knowledge, and she asked a few different questions that you gradually answered. After the questioning, she glanced behind her and went into the next room.');
    scene.actions([
      { label: 'Go for it', handler: (st: GameState) => {
    scene.text('Entering the room, you saw something very strange: it was an apparatus for artificial respiration, like the iron lung Olya mentioned. The girl approached the device.');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/mercyclinic/4.mp4');
    scene.text('It was a man; you thought it was Mikhail.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.text('Once she rescued him, he greeted you:');
    scene.text('- Hello, my name is Michael.');
    // TODO-QSP: dynamic text: - Hello, I am <<$pcs_nickname>>. - you replied.
    scene.text(`- Hello, I am ${((s as any).pcs_nickname ?? 0)}. - you replied.`);
    scene.text('- Oh, I haven\'t even introduced myself. My name is Vika! - the girl interjected.');
    scene.text('- Do you have any experience? - Michael asked.');
    scene.text('- No, not really, - you simply answered.');
    scene.text('- Well, it\'s not difficult, - she said. - You can do it. I had no experience when I first came to work with Misha, but I figured it all out quickly.');
    scene.text('- Well, yes, you are quite clever, - Michael said with a smile.');
    scene.text('- Oh, come on, - Vika replied.');
    scene.text('- So, what is my job? - you asked.');
    scene.text('- In fact, it\'s nothing complicated. You will need to clean the apartment, cook food, and wait for my return. You won\'t have to massage my muscles or anything like that; I do that myself. But if you want…');
    scene.text('- No, no, of course not! - you immediately said.');
    scene.text('- I hope you understand everything. If it were not for some personal stuff, we wouldn\'t need another nurse, - she said.');
    scene.text('- Understood, - you replied.');
    // TODO-QSP: dynamic text: - Well, okay, then. I'll go now, Michael. - she kissed him on the forehead. - I'...
    scene.text(`- Well, okay, then. I'll go now, Michael. - she kissed him on the forehead. - I'll be back, ${((s as any).pcs_firstname ?? 0)}. - she waved goodbye and closed the door.`);
    scene.text('- Here we are, all alone, - Michael said a little sadly.');
    scene.actions([
      { label: 'Don\'t worry; everything will be fine', goto: ['buklinik_event', 'hall'] },
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

function enterEntrance(s: GameState, scene: SceneBuilder): void {
  (s as any).buklinikDay = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/vika/\'+iif(ARGS[1]=0, 5, 3)+\'.jpg');
  if (((s as any).ARGS ?? 0)[1] === 0) {
    scene.text('You arrive at the address and knock on the door. Vika opens it.');
    // TODO-QSP: dynamic text: - Oh, hey, <<$pcs_nickname>>! Do you mind if I call you that?
    scene.text(`- Oh, hey, ${((s as any).pcs_nickname ?? 0)}! Do you mind if I call you that?`);
    scene.text('- No, not at all, - you reply with a smile.');
    scene.text('- And Misha, I told you he\'s a pleasant conversationalist. He likes you!');
    scene.text('- I enjoyed conversing with him too.');
    scene.text('- Damn, I\'m getting jealous! - she chuckles. - Well, I\'ll run now. Let\'s talk next time. Look, don\'t misbehave while I\'m gone! - she says, playfully poking you in the ribs before walking away.');
  }
  if (((s as any).ARGS ?? 0)[1] === 1) {
    scene.text('As usual, when you arrive to see Michael, Vika opens the door.');
    // TODO-QSP: dynamic text: - Hi, <<$pcs_nickname>>. We've been waiting for you.
    scene.text(`- Hi, ${((s as any).pcs_nickname ?? 0)}. We've been waiting for you.`);
    scene.text('- Well, here I am, - you respond.');
    scene.text('- Let\'s go then. I\'m off! - she says cheerfully.');
  }
  if (((s as any).ARGS ?? 0)[1] === 2  ||  ((s as any).ARGS ?? 0)[1] === 4) {
    scene.text('You arrive at Michael\'s place, and Vika opens the door.');
    // TODO-QSP: dynamic text: - Hi, <<$pcs_nickname>>.
    scene.text(`- Hi, ${((s as any).pcs_nickname ?? 0)}.`);
    scene.text('- Hi, - you reply.');
    scene.text('- Come in already!');
  }
  if (((s as any).ARGS ?? 0)[1] === 3) {
    scene.text('You arrive at Michael\'s, and the door is already open for you by Vika.');
    // TODO-QSP: dynamic text: - Hi, <<$pcs_nickname>>.
    scene.text(`- Hi, ${((s as any).pcs_nickname ?? 0)}.`);
    scene.text('- Hi, - you respond.');
    scene.text('- How are you feeling today? - she asks.');
    scene.text('- Thanks, I\'m feeling pretty normal, - you answer with a smile.');
  }
  if (((s as any).ARGS ?? 0)[1] === 5) {
    if (((s as any).MishaLove ?? 0) === 1) {
      scene.text('You arrive at Michael\'s, and Vika opens the door for you.');
      // TODO-QSP: dynamic text: - Hi, <<$pcs_nickname>>.
      scene.text(`- Hi, ${((s as any).pcs_nickname ?? 0)}.`);
      scene.text('- Hi, - you reply.');
      scene.text('- Come in already!');
    } else {
      scene.text('You arrive at Michael\'s and knock on the door. No one answers. You knock for about two minutes until Vika finally opens it.');
      // TODO-QSP: dynamic text: - Oh, hey, <<$pcs_nickname>>! - she says.
      scene.text(`- Oh, hey, ${((s as any).pcs_nickname ?? 0)}! - she says.`);
      scene.text('- Hi! Why did it take so long to answer? - you ask.');
      scene.text('- It seemed like the knocking came from the neighbors\' door, not ours, she explains. Let\'s go already.');
      scene.text('You notice she looks a bit disheveled, which is unusual for her.');
    }
  }
  scene.actions([
    { label: 'Continue', goto: ['buklinik_event', 'hall'] },
  ]);
  scene.build();
}

function enterEvent2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).nanny_cleaning ?? 0) === 0  ||  ((s as any).nanny_food ?? 0) === 0) {
    // TODO-QSP: exit
  }
  if (((s as any).MishaLove ?? 0) === 1) {
    scene.actions([
      { label: 'I am finished', goto: ['buklinik_event', 'event2_MishaLove_finished'] },
    ]);
  } else {
    if (((s as any).nanny_act ?? 0) === 1) {
      scene.actions([
        { label: 'I am finished', goto: ['buklinik_event', 'event2_nanny_act1'] },
      ]);
    } else {
      if (((s as any).nanny_act ?? 0) === 3  &&  ((s as any).nanny_vika ?? 0) === 0) {
        scene.actions([
          { label: 'About your request', goto: ['buklinik_event', 'event2_nanny_act3'] },
        ]);
      } else {
        if (((s as any).nanny_act ?? 0) === 5  &&  ((s as any).nanny_vika ?? 0) === 0) {
          scene.actions([
            { label: 'So let\'s start', goto: ['buklinik_event', 'event2_nanny_act5'] },
          ]);
        } else {
          scene.actions([
            { label: 'So let\'s start', goto: ['buklinik_event', 'event2_nanny_act6'] },
          ]);
        }
        scene.actions([
          { label: 'Let\'s continue', goto: ['buklinik_event', 'event2_nanny_act4'] },
        ]);
      }
      scene.actions([
        { label: 'I am finished', goto: ['buklinik_event', 'event2_nanny_act2'] },
      ]);
    }
    scene.actions([
      { label: 'I am finished', goto: ['buklinik_event', 'event2_nanny_story_finished'] },
    ]);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'pos1':
      enterPos1(s, scene);
      break;
    case 'pos2':
      enterPos2(s, scene);
      break;
    case 'pos3':
      enterPos3(s, scene);
      break;
    case 'pos4':
      enterPos4(s, scene);
      break;
    case 'pos5':
      enterPos5(s, scene);
      break;
    case 'pos6':
      enterPos6(s, scene);
      break;
    case 'pos7':
      enterPos7(s, scene);
      break;
    case 'pos8':
      enterPos8(s, scene);
      break;
    case 'pos9':
      enterPos9(s, scene);
      break;
    case 'pos10':
      enterPos10(s, scene);
      break;
    case 'hall':
      enterHall(s, scene);
      break;
    case 'room':
      enterRoom(s, scene);
      break;
    case 'kitchen':
      enterKitchen(s, scene);
      break;
    case 'vika':
      enterVika(s, scene);
      break;
    case 'misha':
      enterMisha(s, scene);
      break;
    case 'event0':
      enterEvent0(s, scene);
      break;
    case 'event1':
      enterEvent1(s, scene);
      break;
    case 'entrance':
      enterEntrance(s, scene);
      break;
    case 'event2':
      enterEvent2(s, scene);
      break;
    default:
      enterPos1(s, scene);
      break;
  }
}

export const buklinik_event: LocationDef = {
  name: 'buklinik_event',
  title: 'Entrance hall',
  region: 'other',
  locationType: 'public_indoors',
  locclass: 'kitr',
  description: ['The majority of them mumble between themselves before going back to loitering around. All except one. "Hey girl! The name\'s Vladimir! Why are you standing there all scared? Come in and sit with us. I\'ll introduce you to everyone."'],
  enter: enter,
};
