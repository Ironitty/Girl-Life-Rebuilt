import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

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
    if (((s as any).bumtolik ?? 0) === 7) {
      (s as any).bumtolik = 8;
      scene.text('There are some clients sitting by the next table you\'re about to set. As you start, one of the clients comments, "Look at this beauty right here. You\'re new here, right?! Yeah, you are; I remember all the tits that have come into this place."');
      scene.text('Startled, you stammer, "W-What?! I-I… M-Mind your own business!" Your cheeks turn red as the client keeps eying you intensely…');
    }
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
  if ((!((s as any).locArgs?.[1] ?? 0))) {
    scene.text('You arrive at the address and knock on the door. Vika opens it.');
    // TODO-QSP: dynamic text: - Oh, hey, <<$pcs_nickname>>! Do you mind if I call you that?
    scene.text(`- Oh, hey, ${((s as any).pcs_nickname ?? 0)}! Do you mind if I call you that?`);
    scene.text('- No, not at all, - you reply with a smile.');
    scene.text('- And Misha, I told you he\'s a pleasant conversationalist. He likes you!');
    scene.text('- I enjoyed conversing with him too.');
    scene.text('- Damn, I\'m getting jealous! - she chuckles. - Well, I\'ll run now. Let\'s talk next time. Look, don\'t misbehave while I\'m gone! - she says, playfully poking you in the ribs before walking away.');
  }
  if (((s as any).locArgs?.[1] ?? 0) === 1) {
    scene.text('As usual, when you arrive to see Michael, Vika opens the door.');
    // TODO-QSP: dynamic text: - Hi, <<$pcs_nickname>>. We've been waiting for you.
    scene.text(`- Hi, ${((s as any).pcs_nickname ?? 0)}. We've been waiting for you.`);
    scene.text('- Well, here I am, - you respond.');
    scene.text('- Let\'s go then. I\'m off! - she says cheerfully.');
  }
  if (((s as any).locArgs?.[1] ?? 0) === 2  ||  ((s as any).locArgs?.[1] ?? 0) === 4) {
    scene.text('You arrive at Michael\'s place, and Vika opens the door.');
    // TODO-QSP: dynamic text: - Hi, <<$pcs_nickname>>.
    scene.text(`- Hi, ${((s as any).pcs_nickname ?? 0)}.`);
    scene.text('- Hi, - you reply.');
    scene.text('- Come in already!');
  }
  if (((s as any).locArgs?.[1] ?? 0) === 3) {
    scene.text('You arrive at Michael\'s, and the door is already open for you by Vika.');
    // TODO-QSP: dynamic text: - Hi, <<$pcs_nickname>>.
    scene.text(`- Hi, ${((s as any).pcs_nickname ?? 0)}.`);
    scene.text('- Hi, - you respond.');
    scene.text('- How are you feeling today? - she asks.');
    scene.text('- Thanks, I\'m feeling pretty normal, - you answer with a smile.');
  }
  if (((s as any).locArgs?.[1] ?? 0) === 5) {
    if (((s as any).MishaLove ?? 0) === 1) {
      scene.text('You arrive at Michael\'s, and Vika opens the door for you.');
      // TODO-QSP: dynamic text: - Hi, <<$pcs_nickname>>.
      scene.text(`- Hi, ${((s as any).pcs_nickname ?? 0)}.`);
      scene.text('- Hi, - you reply.');
      scene.text('- Come in already!');
    } else {
      if (((s as any).nanny_story ?? 0) === 1) {
        scene.text('You arrive at Michael\'s and knock on the door. No one answers. You knock for about two minutes until Vika finally opens it.');
        // TODO-QSP: dynamic text: - Oh, hey, <<$pcs_nickname>>! - she says.
        scene.text(`- Oh, hey, ${((s as any).pcs_nickname ?? 0)}! - she says.`);
        scene.text('- Hi! Why did it take so long to answer? - you ask.');
        scene.text('- It seemed like the knocking came from the neighbors\' door, not ours, she explains. Let\'s go already.');
        scene.text('You notice she looks a bit disheveled, which is unusual for her.');
      }
    }
  }
  scene.actions([
    { label: 'Continue', goto: ['buklinik_event', 'hall'] },
  ]);
  scene.build();
}

function enterEvent2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).nanny_cleaning ?? 0) === 0  ||  (!((s as any).nanny_food ?? 0))) {
    // TODO-QSP: exit
  }
  if (((s as any).MishaLove ?? 0) === 1) {
    scene.actions([
      { label: 'I am finished', goto: ['buklinik_event', 'event2_MishaLove_finished'] },
    ]);
  } else {
    if (((s as any).nanny_story ?? 0) === 1) {
      scene.actions([
        { label: 'I am finished', goto: ['buklinik_event', 'event2_nanny_story_finished'] },
      ]);
    } else {
      if (((s as any).nanny_act ?? 0) === 1) {
        scene.actions([
          { label: 'I am finished', goto: ['buklinik_event', 'event2_nanny_act1'] },
        ]);
      } else {
        if (((s as any).nanny_act ?? 0) === 2) {
          scene.actions([
            { label: 'I am finished', goto: ['buklinik_event', 'event2_nanny_act2'] },
          ]);
        } else {
          if (((s as any).nanny_act ?? 0) === 3  &&  (!((s as any).nanny_vika ?? 0))) {
            scene.actions([
              { label: 'About your request', goto: ['buklinik_event', 'event2_nanny_act3'] },
            ]);
          } else {
            if (((s as any).nanny_act ?? 0) === 4  &&  (!((s as any).nanny_vika ?? 0))) {
              scene.actions([
                { label: 'Let\'s continue', goto: ['buklinik_event', 'event2_nanny_act4'] },
              ]);
            } else {
              if (((s as any).nanny_act ?? 0) === 5  &&  (!((s as any).nanny_vika ?? 0))) {
                scene.actions([
                  { label: 'So let\'s start', goto: ['buklinik_event', 'event2_nanny_act5'] },
                ]);
              } else {
                if (((s as any).nanny_act ?? 0) === 6  &&  (!((s as any).nanny_vika ?? 0))) {
                  scene.actions([
                    { label: 'So let\'s start', goto: ['buklinik_event', 'event2_nanny_act6'] },
                  ]);
                }
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterEvent2_MishaLoveFinished(s: GameState, scene: SceneBuilder): void {
  (s as any).nanny_cleaning = 0;
  (s as any).nanny_food = 0;
  scene.text('<center><b>Michael A.</b></center>');
  scene.img('images/locations/city/industrial/mercyclinic/misha.jpg');
  scene.text('You said that everything is done. To which he replied:');
  scene.text('- Well… you know Light, I\'ve been thinking about your last kiss; I can\'t get you off my mind.');
  scene.text('- Michael, what about Vika? - you asked.');
  scene.text('- Well, she was going to America to study. - he said.');
  scene.text('- I\'m sorry, but I can\'t. - you told him.');
  // TODO-QSP: dynamic text: - <<$pcs_firstname>>, I love you with all my heart; please answer me! - he plead...
  scene.text(`- ${((s as any).pcs_firstname ?? 0)}, I love you with all my heart; please answer me! - he pleaded, and you looked into his eyes full of hope.`);
  scene.text('- I\'m sorry, Misha, I\'m sorry again, but no, you don\'t have to do this. - you said, holding back tears.');
  scene.text('And you went into the kitchen to wait for Vika. When she arrived, you were in a hurry to leave.');
  scene.text('<br><b>END of CURRENT STORY : YOURSELF</b>');
  scene.actions([
    { label: 'Go', goto: ['buklinik', 'olga2'] },
  ]);
  scene.build();
}

function enterEvent2NannyStoryFinished(s: GameState, scene: SceneBuilder): void {
  (s as any).nanny_cleaning = 0;
  (s as any).nanny_food = 0;
  scene.text('<center><b>Michael A.</b></center>');
  scene.img('images/locations/city/industrial/mercyclinic/misha.jpg');
  scene.text('- I am finished, you said, addressing Misha.');
  scene.text('- Well, he replied.');
  scene.text('- I noticed that Vika looked a bit disheveled. What\'s going on with her? you asked.');
  scene.text('- Well, it\'s because we didn\'t open the door right away, he said with a smile.');
  scene.text('- What does that mean? you asked, surprised.');
  scene.text('- It means that we\'re together now, he explained.');
  scene.text('- Really? I\'m so happy for you! How did it happen? Tell us! you urged.');
  scene.text('- Okay, now I will tell you… he agreed.');
  scene.actions([
    { label: 'Listen', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/mercyclinic/massage.mp4');
    scene.text('So she kneaded my muscles, and we talked about different topics.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/mercyclinic/massage2.mp4');
    scene.text('I started to think about where I could invite her.');
    scene.actions([
      { label: 'Listen', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/mercyclinic/6.mp4');
    scene.text('I decided to invite her on a picnic, and she consented.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/mercyclinic/shave.mp4');
    scene.text('It was awkward that I invited her and organized everything. Then I thought it would be better to ask my brother to arrange everything to surprise Vika, but it was too late. So, I took her to the picnic, and she decided to shave me.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/mercyclinic/walk0.mp4');
    scene.text('Then we went to the park and chatted.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/mercyclinic/walk1.jpg');
    scene.text('While we were in the park, she suddenly touched my shoulder and told me that she had written a request for permission for an internship in America, and it was approved, so soon Vika would be leaving.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/mercyclinic/walk2.jpg');
    scene.text('In my chest, I felt a pang; suddenly, I realized she was going to fly to another country, and I might never see her again. I understood that this meant a lot to her, but I tried to talk her out of it. However, she said that it would be a very good experience for her.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/mercyclinic/walk3.jpg');
    scene.text('Then I asked, "Are you leaving me here all alone?"');
    scene.text('- Well, we can still keep in touch. I\'ll tell you how I live there, and you can tell me how you like it here. - she said.');
    scene.text('I realized that this might be my last chance, so I confessed to her:');
    scene.text('- Vika, I love you!');
    scene.text('- What did you say? - she repeated.');
    scene.text('- I love you. - I reaffirmed.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/mercyclinic/6.mp4');
    scene.text('- Misha, I love you, but… you\'re very precious to me. - she said.');
    scene.text('- I\'ll get through this… - before I could finish, she interrupted.');
    scene.text('- Dima, I\'m really sorry, but it\'s unlikely we can achieve something together.');
    scene.text('- But I fell in love with you the first day we met. I thought it would be nice if I could get a hug. I admired your perfect white skin, coral features, and strong, supple figure; it captivated my mind and drew me into learning about you. I dreamed of being able to touch you; I\'d be so happy. I was just bursting with wanting your attention; I\'d never been so happy.');
    scene.text('- Oh, Misha… ');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/mercyclinic/kiss.mp4');
    scene.text('She kissed me and said, "Now I have to return home?"');
    scene.text('I was very surprised; before, she had only kissed me on the cheek or forehead. Yet, she refused to leave me.');
    scene.actions([
      { label: 'And then what?', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/mercyclinic/picnic.mp4');
    scene.text('Then we chatted about little things, and we had a great time.');
    scene.actions([
      { label: 'Listen', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/mercyclinic/walk4.mp4');
    scene.text('Then we went back home; on the way, she whispered to me: - Well, if we meet now, we should "do it".');
    scene.text('I didn\'t expect to hear that; just two hours ago, she had become my girlfriend and proposed we get engaged, but at the same time, I was happy. She probably thought that I, destiny, so I couldn\'t wait to show her all the things you\'ve taught me.');
    scene.actions([
      { label: 'Oh, come on', handler: (st: GameState) => {
    scene.text('<center><b>Michael A.</b></center>');
    scene.img('images/locations/city/industrial/mercyclinic/misha.jpg');
    scene.text('- Oh, come on. - you said to him.');
    scene.text('- No, if it wasn\'t for you, I would never have succeeded, and so we made love all night. - he said.');
    scene.text('- ALL NIGHT?? You\'ve made great progress; congratulations. - you said in surprise.');
    scene.text('- You wouldn\'t believe how surprised Vika was; by the way, before you arrived, we also did "this". - he boasted.');
    scene.text('- I\'m so happy for you! - you replied.');
    scene.text('Then Vika came in and entered the room.');
    scene.text('- Hi, guys. - she said.');
    scene.text('- Oh, here comes our lucky one. - you teased, smirking.');
    scene.text('She looked at Misha:');
    scene.text('- Did you tell her everything? - she asked Misha.');
    scene.text('- Yeah, I\'m sorry. - he replied.');
    scene.text('- Yeah, well, it\'s all right. - she said.');
    scene.text('- Well, I think I\'ll go and leave you two alone. - you winked at them and left.');
    scene.text('<br><b>END of CURRENT STORY: VIKA</b>');
    scene.actions([
      { label: 'Go', goto: ['buklinik', 'olga2'] },
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

function enterEvent2NannyAct1(s: GameState, scene: SceneBuilder): void {
  (s as any).nanny_cleaning = 0;
  (s as any).nanny_food = 0;
  (s as any).nanny_act = 2;
  (s as any).bumtolik = 11;
  scene.text('- Great! Now just wait for Victoria, and you\'re free for today. After a while, Vika arrived.');
  scene.text('- So, how was your first working day? - she asked.');
  scene.text('- Yes, you were right; it was nothing complicated.');
  scene.text('- I told you! - she said with a smile.');
  scene.text('- Well, I should probably get going. - you replied.');
  scene.actions([
    { label: 'Say goodbye and leave', goto: ['buklinik', 'olga2'] },
  ]);
  scene.build();
}

function enterEvent2NannyAct2(s: GameState, scene: SceneBuilder): void {
  (s as any).nanny_cleaning = 0;
  (s as any).nanny_food = 0;
  (s as any).nanny_act = 3;
  scene.img('images/locations/city/industrial/mercyclinic/misha.jpg');
  scene.text('Well, Vika is bound to come back soon. - He said.');
  scene.text('Hmm… Vika seems like an interesting person. She communicates nicely with Michael. Could there be something between them? A thought slipped into your mind.');
  scene.text('I need to know! Maybe I should ask Michael? No, better not. But damn, it\'s so interesting! Yeah, screw it; I\'ll ask directly.');
  scene.actions([
    { label: 'Ask Vika', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/mercyclinic/misha.jpg');
    scene.text('You ventured out and asked about Michael and Vika.');
    scene.text('- Well, Vika is a student studying at a medical university. I found her on Craigslist about half a year ago when I decided to fire the original sitter. Overall, she\'s a good girl. I remember once she took me on a picnic with her friends; it was great.');
    scene.actions([
      { label: 'What\'s going on between you two?', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/mercyclinic/misha.jpg');
    scene.text('- What\'s going on between you two? - you asked without stopping.');
    scene.text('- You! Still no taco… she probably can\'t. - he replied sadly.');
    scene.text('- Why? I think you like her a lot!');
    scene.text('- But she has a boyfriend!');
    scene.text('- Think of it this way, as they say: "It\'s not a wall, it\'s an opportunity."');
    scene.text('- I don\'t know… part of me… I.. I\'m afraid… - Michael began to stutter.');
    scene.text('- What are you afraid of? - you asked, eager to know the answer.');
    scene.text('- I\'m afraid to show that I… I\'m still a virgin. She probably needs someone more experienced and skilled.');
    scene.text('- Oh, okay. That\'s quite natural. Many are afraid they don\'t have enough experience to please their partner.');
    scene.text('- I don\'t want to live my life without sex.');
    scene.text('- Well… nobody probably wants that. - you replied somewhat confused.');
    scene.text('- Maybe you… can help me? - it was evident he was embarrassed asking you.');
    scene.text('- How can I help?');
    scene.text('- I need to… gain experience.');
    scene.text('- WHAT??? Michael, what can you do? - you said, offended.');
    scene.text('- I\'m sorry; I didn\'t mean to offend or insult you, just…');
    scene.text('- Just what? What do you take me for?');
    scene.text('- I\'m sorry again… I shouldn\'t have suggested that. Just forget it.');
    qspCall(s, 'willpower', 'sex', 'resist', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Wait For Vika [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Wait For Vika [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).bumtolik = 3000;
    qspCall(s, 'willpower', 'sex', 'resist', 'easy');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('Silently, without speaking to Michael, you waited for Vika, who looked at you sadly. As soon as she arrived, you prepared to leave. Vika was surprised that you didn\'t even say goodbye.');
    scene.text('<br><b>END of CURRENT STORY : REFUSE</b>');
    scene.actions([
      { label: 'Go', goto: ['buklinik', 'olga2'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Okay, I\'ll think about it!', handler: (st: GameState) => {
    (s as any).nanny_vika = 1;
    (s as any).bumtolik = 12;
    scene.text('- Okay, I\'ll consider it, but no promises.');
    scene.text('- Really? - Michael asked, happy.');
    scene.text('- Yes, it\'s true.');
    scene.text('- Thank you very much! I can\'t believe my ears.');
    scene.text('You chatted about other topics, calming down a bit. By this point, Vika had already arrived, so you said goodbye and left.');
    scene.actions([
      { label: 'Go', goto: ['buklinik', 'olga2'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterEvent2NannyAct3(s: GameState, scene: SceneBuilder): void {
  (s as any).nanny_cleaning = 0;
  (s as any).nanny_food = 0;
  (s as any).nanny_act = 4;
  (s as any).bumtolik = 13;
  (s as any).buklinikDay = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/industrial/mercyclinic/misha.jpg');
  scene.text('- About your request…');
  scene.text('- Please, give up. - he interrupted.');
  scene.text('You turned the little lever to start the oxygen flow and held it up to the mouth of Misha.');
  scene.text('On the first day, Misha told how to use the breathing apparatus, and you were already accustomed to using it.');
  scene.text('He took a few breaths of air and his lips parted.');
  scene.text('- Yes, I\'m listening. - he said.');
  scene.actions([
    { label: 'Let\'s…', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/mercyclinic/misha.jpg');
    scene.text('- Let\'s discuss how our… you know, said you. He was relieved to agree. Home, have you considered how all this happened and decided to make a list of instructions and exercises necessary to help him? Of course, the situation in which Michael found himself demanded some adjustments, but you didn\'t quite understand how to implement it. - Our pace will depend on you. Today, I would like to know you better, and if you feel that you are ready, we shall proceed to the exercises.');
    scene.actions([
      { label: 'Do you have any experience?', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/mercyclinic/misha.jpg');
    scene.text('He replied that his sexual experience was limited to a few occasional touches from nurses and the sudden excitement when he was helped to take a bath. It was always accompanied by a feeling of embarrassment and shame. "Sometimes I can captivate myself with the thought that perhaps Vika or someone else is waiting for me in this world, but, to be honest, I think there is no hope. It seems to me that I look out the window of an expensive restaurant and see people feasting on luxurious dishes that I will never try," he said.');
    scene.text('You felt sorry for him - surely he was right when he spoke about the inability to find a mate? Despite the fact that you were familiar not so long ago, he managed to please you. Would you meet him or be afraid? Suddenly, such a thought came to your mind. You would like to assure Michael that he and Victoria could do it, but at the same time, you were afraid to give false hope.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/industrial/mercyclinic/misha.jpg');
    scene.text('I don\'t know how to predict fate; I\'ll just help you prepare to meet the right woman so you could build a strong, healthy relationship, you said. - Let\'s talk about how everything will go, and what your body is capable of.');
    scene.text('- Suppose you have entered into a relationship with someone who you think is perfect for you. What do you feel?');
    scene.text('- Many things, probably. Anxiety, joy, relief.');
    scene.text('He talked for 15 minutes. As he was ready for it, it was time to move on to physical exercises.');
    scene.text('- Do you think you can already start? Can you look at your body?');
    scene.text('Yeah, I\'d like to do that.');
    scene.actions([
      { label: 'Undress him', handler: (st: GameState) => {
    scene.text('Now I had to undress him, so I had to remove Michael\'s clothes and see his body for the first time. Suddenly, I was gripped by fear. He was so fragile. What if I hurt him or did anything to his body?');
    scene.text('- Misha, at any time, if I do something you don\'t like, let me know. Not only for our collaboration, but for you, it is important to learn how to talk to your partner about how you feel. If it makes you feel bad or uncomfortable, just tell me to stop, okay?');
    scene.text('"Okay," he replied, and his face flushed with a shade of anxiety.');
    scene.text('Remember, we do it all for you, so if you want me to do something slower or stop doing it altogether, just tell me about it.');
    scene.text('You gently raised the blanket. He was dressed in a red long-sleeved shirt and black training pants. "Slowly and carefully, slowly and gently," I said to myself, like a spell. - Start with the shirt." I undid the first button, then the other until the very end. Then, a button on the wrist of the left sleeve. Then, I pulled out the sleeve as much as possible. The collar slipped down on one shoulder. He had spent very little time outside and was very pale. Against the red fabric of the shirt, his skin was as pure white as salt. I vigorously rubbed my hands together to warm them up and slipped my hand under the shirt. You gently took his thin hand, simultaneously pulling the sleeve and placing his hand on the bed. When the sleeve was almost cleared, Michael shouted - very loudly. Oh my God! Did I hurt him?');
    scene.actions([
      { label: 'Oh my God! What happened?', handler: (st: GameState) => {
    scene.text('- What happened? asked you.');
    scene.text('"Nail, nail caught on the shirt," he said.');
    scene.text('- Nothing, nothing… Let me see - you released your finger from the shirt.');
    scene.text('To myself, I noted that I should not forget to tell Vika to cut his nails. Well, or do it later.');
    scene.text('- Misha, I need to know if something is wrong, but the cry is not very sexy. I know we have to be very careful with your body, so you should always say if something bothers you, but try to do it more calmly. Remember that one of our main objectives is to help you with whatever problems your communication with the future partner may have, and what happened now can greatly scare and discourage any desire; my skin shivered, and I was hoping Michael wouldn\'t notice. - Do you need to breathe before we continue?');
    scene.text('To my surprise, he refused. Finally, I removed the sleeve from his left hand and moved to the right.');
    scene.actions([
      { label: 'Remove his pants', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/industrial/mercyclinic/pants.mp4');
    scene.text('It\'s time to remove the pants. The left thigh was lifted and rolled to one side so that the bone was hanging, and the part of the left buttock was visible. He weighed seventy pounds and was light enough that I could pull down the elastic band of his pants and underwear, sliding them down to his knees without lifting him from the bed. I pulled the trouser legs down, revealing his fragile body entirely.');
    scene.text('- How are you feeling, Misha? Are you hot?');
    scene.text('"Yes," he replied quietly.');
    scene.actions([
      { label: 'Undress myself', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    qspCall(s, 'stat', '');
    scene.text('It was my turn to undress. I took off all my clothes and put them on the chair. He watched.');
    scene.text('- I\'ve never seen a naked woman, he said, stammering.');
    scene.text('Despite his thin body, Michael had chubby cheeks, which were now covered with a pink blush.');
    scene.text('- That\'s why I\'m here - you cheered him and lay next to him on the bed. - For sex to bring pleasure, it is very important to be able to relax, so now I\'ll show you an exercise that will help.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.text('At this point, you have decided to learn to breathe deeply, from your diaphragm, focusing exclusively on the process of breathing: a long, full breath, and immediately a slow exhale. Mikhail couldn\'t take deep breaths, but I still asked him to focus on his breath, even if it was difficult.');
    scene.text('Close your eyes and try to clear your mind of everything unnecessary; think only about breathing, you said.');
    scene.text('For a few minutes, we lay next to each other, closing our eyes and concentrating on our breaths and exhalations. I rolled over on my side and clung to him; the heat of his body warmed my breast and thigh.');
    scene.text('- Well, you said.');
    scene.actions([
      { label: 'Touch him', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    qspCall(s, 'stat', '');
    scene.text('My hands began to explore it, starting with the toes and ending at the head, noting every feature: skin tone, temperature, freckles, scars. All you did was provide an opportunity to see which parts of his body respond better to touch. It is not only the genitals that can be a source of fun and excitement.');
    scene.text('- Tickled?');
    scene.text('- No, it\'s good.');
    scene.text('You slowly ran your palms over his thighs and continued on your way. Michael\'s cock was already hard, the scrotum swollen and suffused with a thick brownish-red. You gently took the cock in your hand and held the tip of your finger around it.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/industrial/mercyclinic/sex/cum.mp4');
    scene.text('When I let go of his hand and my fingers were already on Misha\'s stomach, he let out a light grunt and came. Frowning, he quietly swore. Then he said: "Sorry."');
    scene.text('- Don\'t worry, it\'s all right, you replied.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.text('- Let\'s define the scale of your arousal to understand what stage you\'re at. From one to ten. One - the initial excitement phase, ten - orgasm. At first, it may be difficult to determine with precision, but it becomes easier afterward. This will help prolong an erection, I explain to you.');
    scene.text('You took a paper napkin from your bag and gently wiped his penis and stomach.');
    scene.text('Can you tell me which parts of your body were most sensitive to touch? you asked.');
    scene.text('- I was very pleased when you touched my legs and face, but honestly, every touch excited me.');
    scene.text('Misha asked if he could kiss my breasts…');
    scene.actions([
      { label: 'Give your chest', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/industrial/mercyclinic/sex/nipple.mp4');
    scene.text('You brought your left breast to his lips.');
    scene.text('Now, the other one, you said with fake seriousness.');
    scene.text('You leaned over him so that he could kiss your right breast.');
    scene.text('I heard a short sob, and you realized that he needed air. You sat up on your elbows and handed him the Respirator. He took a few sips, and a smile played on his lips while he breathed.');
    scene.actions([
      { label: 'Well, on this, we\'re finished', handler: (st: GameState) => {
    (s as any).nanny_vika = 1;
    scene.text('You put yourself and Michael got dressed, waiting for Vika, you said goodbye and left.');
    scene.actions([
      { label: 'Go', goto: ['buklinik', 'olga2'] },
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

function enterEvent2NannyAct4(s: GameState, scene: SceneBuilder): void {
  (s as any).nanny_cleaning = 0;
  (s as any).nanny_food = 0;
  (s as any).nanny_act = 5;
  (s as any).bumtolik = 14;
  (s as any).buklinikDay = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/industrial/mercyclinic/misha.jpg');
  scene.text('- Of course! - he said immediately');
  scene.text('Michael seemed less nervous than the first time, and indeed you too. The tasks that stood in front of you and the problems you had to fight - all this appeared before you in a clearer light. You had to help Michael lose his virginity and prepare him for a happy sex life with a future partner.');
  scene.text('But still, you had doubts about the possibility of a long-term relationship for Michael, but your classes could give him confidence in case such a possibility still exists that…');
  scene.text('You talked a little bit about your last visit. Michael said that he experienced the same thing before he went to college: in his head, thousands of circumstances prevented him from doing so, but he still did and was glad that he decided.');
  scene.text('Then he announced that today he wants to try something new…');
  scene.text('- I want to do something that makes you happy.');
  scene.text('- Well, I won\'t give up.');
  scene.text('It is a natural desire, thought you. He didn\'t want to passively accept the affection; he wanted to respond to it.');
  scene.actions([
    { label: 'Undress him', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/mercyclinic/pants.mp4');
    scene.text('Having not stripped Michael to the end, you notice that he\'s already excited. When you removed his pants, you had to pull the rubber band, because it\'s touching his hard cock.');
    scene.actions([
      { label: 'Undress herself', handler: (st: GameState) => {
    scene.text('You undressed.');
    scene.actions([
      { label: 'Lie down on the bed', handler: (st: GameState) => {
    (s as any).guy = ((s as any).guy ?? 0) + (1);
    scene.text('When you were about to fall on the bed, Michael shouted: "My God, my God, my God," - cumshot.');
    scene.text('He is so very red that two huge red poppies blossomed on his cheeks.');
    scene.text('- All right, Mark, though, you lay down and put your arms around him, feeling the frequent beat of his heart. Remember the breathing exercises I showed you last time?');
    scene.text('You closed your eyes for a few moments and focused on your breathing. The pulse became slower. You ran a hand on Michael\'s arm.');
    scene.text('- You were going to please me, you said.');
    scene.text('Michael smiled, gradually overcoming his shyness.');
    scene.text('- I like your nipples. Would you like me to lick them?');
    scene.actions([
      { label: 'I would like', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/mercyclinic/sex/tits.mp4');
    scene.text('In truth, you liked it, but you chose to flirt a little, her silence proving the opposite. You were frightened that Michael stopped breathing for a few seconds. In your head flashed a newspaper headline: "Smothered to death by breasts." You glanced at the mask and tube, which were lying a few inches from his mouth.');
    scene.text('I can do it. I do!.');
    scene.text('- I would like that very much, you said.');
    scene.text('You threw a hand over his tiny body and pressed his palms to the pillow on either side of his head. Placing the breast in turn to his mouth, you had to make a move, like a push-up. You shifted the weight onto your left hand and raised your right to ensure that you could quickly reach the breathing tubes.');
    scene.text('- There are worse things I could choke on, said Michael.');
    scene.text('You slowly bent your arm, twisting your hip to the left to lower your right nipple to his lips. Michael grabbed your wet mouth and drew in.');
    scene.text('- It is very nice.');
    scene.text('After a few seconds, you took the nipple from his lips.');
    scene.actions([
      { label: 'You need air?', handler: (st: GameState) => {
    scene.text('- Do you need air? - you asked crossly.');
    scene.text('- No, I want your nipple!');
    scene.text('This time you bowed to him with the left breast, and he eagerly dug into it. You had never seen him inhale oxygen with such pleasure.');
    scene.text('When you again took the breast, Michael asked if he could touch the area behind the testicles.');
    scene.actions([
      { label: 'Comply with the request', handler: (st: GameState) => {
    scene.text('I held out my hand and asked exactly how much area he had in mind. When I put a finger on the perineum, the strip of skin between the scrotum and the anus, he said: "Here." I easily rubbed it, and Michael said: "Stronger." I pushed harder, and he groaned with pleasure.');
    scene.text('You suddenly wanted him to make you a pussy.');
    scene.actions([
      { label: 'Want Cunnilingus', handler: (st: GameState) => {
    ((s as any).stat ?? {})['cuni'] = (((s as any).stat ?? {})['cuni'] ?? 0) + (1);
    scene.img('images/locations/city/industrial/mercyclinic/sex/facesitting.mp4');
    scene.text('You told him about it. He immediately agreed. You sat on his face and began to slowly move your hips. Arousal gushed on, and you reached…');
    scene.actions([
      { label: 'speed up', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/mercyclinic/sex/tube.mp4');
    scene.text('With excitement, you began, almost jumping on his face, and heard:');
    scene.text('- Ahem… bwhc… I can\'t breathe!');
    scene.text('- God, my! - you screamed.');
    scene.text('- Respirator… pipes… - after saying the last word you gave him.');
    scene.text('- I think it\'s worth waiting for later, you said.');
    scene.text('After inhaling, he asked if we could have sex. You asked him to listen to your breath, reached into your purse for a condom, and quickly put it on.');
    scene.actions([
      { label: 'take the dick', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A185');
    (s as any).spafinloc = 1;
    qspCall(s, 'cum_manage', '');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/industrial/mercyclinic/sex/cum2.mp4');
    scene.text('You slung it over his legs and sank down so that his penis touched your pubic hair. Before you could insert his cock, he came.');
    scene.text('- All right, all right, you.');
    scene.text('Michael closed his eyes and pressed his lips together. His cheeks acquired a pinkish hue.');
    scene.text('- All right, - you said again.');
    scene.text('You ruffled his hair, and he smiled and opened his eyes. The whites set, and his face acquired a dreamy expression; you already knew it was his regular state after the orgasm.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/mercyclinic/sex/end.jpg');
    scene.text('You lay quietly on the bed next to each other. Then he asked if you knew Shakespeare\'s eighteenth sonnet.');
    scene.actions([
      { label: 'No', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/mercyclinic/sex/end.jpg');
    scene.text('- No, I haven\'t read it, you replied.');
    scene.text('- I learned it to read to you, he said. - Shall I compare thee to a summer\'s day? - he began. - Some air, said Michael after the first line.');
    scene.text('You brought the tube to his lips, and oxygen filled his lungs. He parted his lips, and you cleaned up.');
    scene.text('Thou art more lovely and more temperate:');
    scene.text('Rough winds do shake the darling buds of May,');
    scene.text('And summer\'s lease hath all too short a date;');
    scene.text('Sometime too hot the eye of heaven shines,');
    scene.text('And often is his gold complexion dimmed;');
    scene.text('And every fair from fair sometime declines,');
    scene.text('By chance or nature\'s changing course untrimmed;');
    scene.text('But thy eternal summer shall not fade,');
    scene.text('Nor lose possession of that fair thou ow\'st;');
    scene.text('Nor shall death brag thou wander\'st in his shade,');
    scene.text('When in eternal lines to time thou grow\'st:');
    scene.text('So long as men can breathe or eyes can see,');
    scene.text('So long lives this, and this gives life to thee.');
    scene.text('Finished Michael.');
    scene.actions([
      { label: 'that\'s fine', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/industrial/mercyclinic/sex/end.jpg');
    scene.text('- Misha, it was perfect. I want you to know how glad I am that we met and that we had a chance to help you.');
    scene.text('You ran a finger along his hip and down his leg. You felt an excitement not yet experienced all the time you were together. You took his face in your hands and kissed his forehead.');
    scene.actions([
      { label: 'Well, on this we\'re finished', handler: (st: GameState) => {
    (s as any).nanny_vika = 1;
    (s as any).noshampoo = 1;
    qspCall(s, 'din_van', 'showerdin');
    scene.text('You take a quick shower and get dressed, then you say goodbye to Michael and you are ready to leave. Soon Vika arrives.');
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the shower.');
    }
    scene.actions([
      { label: 'Leave', goto: ['buklinik', 'olga2'] },
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

function enterEvent2NannyAct5(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A185');
  (s as any).nanny_cleaning = 0;
  (s as any).nanny_food = 0;
  (s as any).nanny_act = 6;
  (s as any).bumtolik = 15;
  (s as any).buklinikDay = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/industrial/mercyclinic/misha.jpg');
  scene.text('- So let\'s start? - you asked. He agreed and said he was looking forward to today. He was beginning to think he could have sex and get pleasure from it like "normal" people.');
  scene.text('Furthermore, he was able to give pleasure to you. For a person in Michael\'s position, whose sexual needs were perceived at best as an inconvenience, this must have given him incredible confidence. He wanted to believe he could bring someone pleasure in bed.');
  scene.actions([
    { label: 'Remove clothing', handler: (st: GameState) => {
    scene.text('You undressed him and yourself. As usual, Misha was lying on the left edge of the bed. His head was always turned to the right, so only in this position could he see you when you lay next to him. You sat on the right edge of the mattress and threw your legs over his. Then you rolled onto your side and clung to him. His cock was already excited. You kissed him on the forehead.');
    scene.text('- You\'re holding up longer than before. This is progress, you said gently, running your hand over his face and chest. You kissed his lips and lowered your hand to touch his perineum and scrotum. You felt his scrotum lift, knowing it was a sign of an approaching orgasm. You took his hand and asked him to rate his state on a scale of arousal.');
    scene.text('- Try to define where you are, from one to ten.');
    scene.text('He thought his condition was close to seven. Then you asked him to do a breathing exercise that you had taught him. You placed a hand on his thigh and ran your fingers toward his member.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/mercyclinic/sex/cum.mp4');
    scene.text('A muffled sound turned into a moan, and he came.');
    scene.text('- I wanted that to happen later, - Misha said reproachfully.');
    scene.text('- It\'s all right. Remember what happened last time? You can have another orgasm.');
    scene.text('- I wanted to have sex tonight.');
    scene.text('- Let\'s see if we can do that.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.text('You slowly ran your hands up and down his body. You took his face in your hands and kissed him on the nose and lips. Then you positioned yourself over him, resting your knees on either side of his body so he could reach your breasts. He licked them, running his tongue around your nipples.');
    scene.text('Michael\'s member tensed for a second time, and you quickly put a condom on it.');
    scene.text('I\'ll just put the tip in and see what happens.');
    scene.actions([
      { label: 'Insert the penis', handler: (st: GameState) => {
    qspCall(s, 'cum_manage', '');
    scene.img('images/locations/city/industrial/mercyclinic/sex/sex.mp4');
    scene.text('You took his cock in your hand and placed the head at your pussy, asking him to rate his level of arousal. At first, you didn\'t move, then you lowered yourself down. After about a minute, he reached orgasm.');
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/mercyclinic/misha.jpg');
    scene.text('- Did you come? asked Misha, and his face showed a disappointed expression when you answered no, immediately assuring him that you would try again.');
    scene.text('- Did you like it?');
    scene.text('I think so. It all happened so fast.');
    scene.text('- It was fast, but you were inside me. That\'s a big step forward, Misha.');
    scene.text('He smiled and closed his eyes as if lost in deep thought. This always happened after an orgasm.');
    scene.text('You felt great relief. It may sound like a small achievement, but for Michael, this was a significant step. He was able to maintain an erection a little longer. Even though his hands couldn\'t move without your help, he had learned how to use his lips and tongue to bring you pleasure.');
    scene.text('This process began when he first touched your breast in the initial session, and now he had advanced much further. If you\'re lucky, this progress could be useful to him in a relationship with a future partner.');
    scene.actions([
      { label: 'Well, we will conclude here for today', handler: (st: GameState) => {
    (s as any).nanny_vika = 1;
    (s as any).noshampoo = 1;
    qspCall(s, 'din_van', 'showerdin');
    scene.text('You take a quick shower and dress both yourself and Michael, then say goodbye to him and get ready to leave. Soon, Vika arrives.');
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the shower.');
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go', goto: ['buklinik', 'olga2'] },
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

function enterEvent2NannyAct6(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A185');
  (s as any).buklinikDay = ((s as any).daystart ?? 0);
  scene.text('Misha undressed you and himself. His cock was almost hard.');
  scene.actions([
    { label: 'Further', handler: (st: GameState) => {
    scene.text('You held his penis in your hands for a few minutes and he asked if he could kiss your vagina.');
    qspCall(s, 'arousal', 'hj', 2);
    scene.actions([
      { label: 'Of course', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/mercyclinic/sex/lick.mp4');
    scene.text('You leaned over his mouth. He gently kissed it, ran his tongue inside. He was licking your little lips, and his tongue penetrated even deeper, quickly touching your lips. He kissed the clitoris. A wonderful feeling. You were excited. He\'s really good, a talent! You decided to reciprocate his oral caress.');
    qspCall(s, 'arousal', 'cuni', 2);
    scene.actions([
      { label: 'Go down to the member', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/mercyclinic/sex/dickplay.mp4');
    scene.text('You ran a finger across his cock, and he jerked slightly, which caused you to smile.');
    qspCall(s, 'arousal', 'hj', 2);
    scene.actions([
      { label: 'Suck', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/mercyclinic/sex/suck.mp4');
    scene.text('You sucked his dick.');
    qspCall(s, 'arousal', 'bj', 5);
    scene.actions([
      { label: 'Take the dick', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A185');
    qspCall(s, 'cum_manage', '');
    scene.img('images/locations/city/industrial/mercyclinic/sex/anal.mp4');
    scene.text('You put on a condom and slid your finger on his back, easily tightening the member by hand. You slung your leg over to make sure his cock was inside you, and began to move, rocking. You felt your vagina swell. Together with him, you reached the highest point of arousal. You took a breath, but then stopped to ask Misha how he rated his arousal.');
    scene.text('- About eight, he said.');
    scene.text('You quickened the pace. Misha came. His excitement lasted longer than during any of your previous sessions.');
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'arousal', 'end');
    scene.text('He almost immediately asked if you had an orgasm. When you said you did, he beamed.');
    scene.actions([
      { label: 'You need oxygen?', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/mercyclinic/misha.jpg');
    scene.text('- Do you need oxygen? he asked.');
    scene.text('No, I don\'t really need it, he said. - If I could, I\'d give you respiratory therapy, and you could get money from my health insurance.');
    scene.text('You both laughed.');
    scene.text('- You were amazing today! - you said.');
    scene.text('- Thank you. - he replied, smiling.');
    scene.text('- Perhaps it\'s time for us to leave it at that, you\'ve already learned a lot.');
    scene.text('- Is it really necessary? - he asked hopefully.');
    scene.text('- Yes, it\'s time.');
    scene.text('- But… but I really like you!');
    scene.text('- I like you too, but remember why we started all of this? Let\'s not complicate things. - you said.');
    scene.text('- Yeah, you\'re probably right.');
    scene.actions([
      { label: 'Wait for Vika', handler: (st: GameState) => {
    (s as any).nanny_vika = 1;
    (s as any).noshampoo = 1;
    qspCall(s, 'din_van', 'showerdin');
    scene.text('You take a quick shower and dress yourself and Misha.');
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the shower.<br>');
    }
    scene.text('Vika soon came, and quickly passed by you, saying: Oh, excuse me, I need the toilet!.');
    scene.text('- Well, it\'s time to say goodbye, Misha. - you said sadly.');
    scene.actions([
      { label: 'Kiss on the cheek', handler: (st: GameState) => {
    (s as any).nanny_story = 1;
    (s as any).bumtolik = 16;
    scene.img('images/locations/city/industrial/mercyclinic/kiss_cheek.jpg');
    scene.text('Goodbye, Misha.');
    scene.actions([
      { label: 'Go', goto: ['buklinik', 'olga2'] },
    ]);
  } },
      { label: 'Kiss on the lips', handler: (st: GameState) => {
    (s as any).nanny_story = 1;
    (s as any).bumtolik = 16;
    (s as any).MishaLove = 1;
    scene.img('images/shared/sex/kiss/kiss_lips.mp4');
    scene.text('Goodbye, Misha.');
    scene.actions([
      { label: 'Go', goto: ['buklinik', 'olga2'] },
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
    case 'event2_MishaLove_finished':
      enterEvent2_MishaLoveFinished(s, scene);
      break;
    case 'event2_nanny_story_finished':
      enterEvent2NannyStoryFinished(s, scene);
      break;
    case 'event2_nanny_act1':
      enterEvent2NannyAct1(s, scene);
      break;
    case 'event2_nanny_act2':
      enterEvent2NannyAct2(s, scene);
      break;
    case 'event2_nanny_act3':
      enterEvent2NannyAct3(s, scene);
      break;
    case 'event2_nanny_act4':
      enterEvent2NannyAct4(s, scene);
      break;
    case 'event2_nanny_act5':
      enterEvent2NannyAct5(s, scene);
      break;
    case 'event2_nanny_act6':
      enterEvent2NannyAct6(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const buklinik_event: LocationDef = {
  name: 'buklinik_event',
  title: 'Entrance hall',
  region: 'other',
  locationType: 'public_indoors',
  locclass: 'kitr',
  enter: enter,
};
