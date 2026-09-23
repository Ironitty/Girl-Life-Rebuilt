import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterBomzstartqwestdi(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('"I see you\'re a good girl who has some money problems. I have a job for you, but I can\'t say much here. You do have a passport, yes?"');
  qspCall(s, 'willpower', 'misc', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'This seems wrong', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'This seems wrong', handler: (st: GameState) => {
    (st as any).bomzQW = (-1);
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'willpower', 'pay', 'resist');
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Yes', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.text('You nod. "Yes, so are you going to tell me about this job?"');
    scene.text('"Not here," he replies. "Follow me and everything will be explained."');
    scene.text('To your surprise, the man walks towards the subway. You remind him about his financial problems, but he just smiles and approaches the ticket office.');
    scene.text('"Hi Uncle Nick," the cashier says and opens the barrier to let him through.');
    scene.text('"Thank you. Your mother is worried about you. You should call her." He then nods at you. "Can you help my young friend here?"');
    scene.text('"No problem. Just don\'t tell anyone," she says with a wink.');
    scene.actions([
      { label: 'Enter the subway', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.text('You descend into the subway and head to the industrial area, where you are taken to the porn studio.');
    if (((st as any).pfilmNO ?? 0) === 1) {
      scene.text('"I came here looking for work, but I was turned down," you tell the man.');
      scene.text('"Your pussy isn\'t the only way to earn money in this business," he replies with a smile.');
    } else {
      if (((st as any).film ?? 0) > 0) {
        scene.text('"I already earn money this way," you say with a laugh.');
        scene.text('"I know, but your pussy isn\'t the only way to earn money in this business," he replies with a smile.');
      } else {
        scene.text('"This is no place for a girl to be working!" you say in shock.');
        scene.text('"Calm down, your pussy isn\'t the only way to earn money in this business," he replies with a smile.');
      }
    }
    scene.actions([
      { label: 'Speak to the manager', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    if ((!((st as any).pornstudio ?? 0))) {
      (st as any).pornstudio = 1;
    }
    qspCall(st, 'stat', '');
    if (((st as any).film ?? 0) > 0) {
      // TODO-QSP: dynamic text: You walk into Dimitri''s office and he stares at you. "<<$pfname>>? What brings ...
      scene.text(`You walk into Dimitri's office and he stares at you. "${((st as any).pfname ?? '')}? What brings you here?"`);
    } else {
      scene.text('"You\'re not getting on camera Nick, no matter how hot, or desperate, the girl is," he says while looking you over.');
    }
    scene.text('The man ignores him. "I remember you saying you were having problems with your deliveries?"');
    scene.text('"Yes. Our people are becoming too well known."');
    scene.text('"Then this girl is just the person to help you."');
    if ((!((st as any).film ?? 0))) {
      scene.actions([
        { label: 'Inquire', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.text('"What kind of work are we talking about here?" you ask.');
    scene.text('"Transportation of goods," the manager replies. "Show me your passport and come here next Thursday. If all goes well, we will discuss the details."');
    qspCall(st, 'willpower', 'misc', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse and leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse and leave', handler: (st: GameState) => {
    (st as any).bomzQW = (-1);
    qspCall(st, 'willpower', 'pay', 'resist');
    qspGoto(st, 'city_industrial', '');
  } },
      ]);
    }
    if (((st as any).age ?? 0) < 18  &&  (!((st as any).fakepassport ?? 0))) {
      scene.actions([
        { label: 'I don\'t have a passport', handler: (st: GameState) => {
    scene.text('"I\'m sorry, but I can\'t help you without a passport. Come back when you get one."');
    scene.text('Dimitri waves you out of his office and you leave the studio.');
    (st as any).bomzQW = 3;
    ((st as any).job_hiring_step = (st as any).job_hiring_step ?? {})['city_pornstudio_delivery'] = 1;
    scene.actions([
      { label: 'Leave', goto: ['city_industrial', ''] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Show him your passport', handler: (st: GameState) => {
    if (String((st as any).locArgs?.[1] ?? '') === 'suspicious') {
      scene.text('The man walks over to the manager and whispers something in his ear.');
      scene.text('The manager seems surprised and looks at you. "We seem to have one more issue. Suspicions that you are not quite… as feminine as you appear."');
      qspCall(st, 'willpower', 'exhib', 'resist');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
  }, goto: ['city_industrial', ''] },
        ]);
      }
      scene.actions([
{ label: 'Show him your pussy', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    if (((st as any).PCloSkirt ?? 0) > 0) {
      scene.text('You raise your skirt and show him your pussy.');
      qspCall(st, 'arousal', 'flash', 5, 'sub');
    } else {
      scene.text('You lower your pants and show him your pussy.');
      qspCall(st, 'arousal', 'flash', 5, 'sub');
    }
    qspCall(st, 'arousal', 'end');
    if (((st as any).pcs_pubes ?? 0) <= 3) {
      if (((st as any).PCloSkirt ?? 0) > 0) {
        scene.img('images/locations/city/residential/sauna/sex/sauna_pussy1.jpg');
      } else {
        scene.img('images/locations/city/residential/sauna/sex/sauna_pussy1.jpg');
      }
      scene.text('"clean-shaven. Cute. Don\'t forget to come back here on Thursday."');
    } else {
      if (((st as any).pcs_pubes ?? 0) <= 10) {
        if (((st as any).PCloSkirt ?? 0) > 0) {
          scene.img('images/locations/city/residential/sauna/sex/sauna_pussy2.jpg');
        } else {
          scene.img('images/locations/city/residential/sauna/sex/sauna_pussy3.jpg');
        }
        scene.text('"A well kept garden. Don\'t forget to come back here on Thursday."');
      } else {
        if (((st as any).PCloSkirt ?? 0) > 0) {
          scene.img('images/locations/city/residential/sauna/sex/sauna_pussy4.jpg');
        } else {
          scene.img('images/locations/city/residential/sauna/sex/sauna_pussy5.jpg');
        }
        scene.text('"You do realize a bird has made a nest in your panties? Might want to find it a new home. Don\'t forget to come back here on Thursday."');
      }
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).bomzQW = 1;
    qspCall(st, 'jobs', 'set_employed', 'city_pornstudio_delivery');
  }, goto: ['city_industrial', ''] },
    ]);
  } },
]);
      return;
    } else {
      scene.text('The manager takes your details and passport. "Remember. Come back here on Thursday."');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).bomzQW = 1;
    qspCall(st, 'jobs', 'set_employed', 'city_pornstudio_delivery');
  }, goto: ['city_industrial', ''] },
      ]);
    }
  } },
      ]);
    }
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Inquire', handler: (st: GameState) => {
    scene.text('"What kind of work are we talking about here?" you ask.');
    // TODO-QSP: dynamic text: "It doesn''t matter. I can''t use one of my girls for this, so you''re free to g...
    scene.text(`"It doesn't matter. I can't use one of my girls for this, so you're free to go. I'll see you next time you're shooting, ${((st as any).pfname ?? '')}."`);
    scene.text('Dimitri waves you out of his office and you leave the studio.');
    scene.actions([
      { label: 'Leave', goto: ['city_redlight', 'start'] },
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

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/musorka.jpg');
  scene.text('A long line of trash cans for all the local apartments, shamefully hidden behind a corrugated iron fence.');
  if (((s as any).bumtolik ?? 0) === 2  &&  (Math.floor(Math.random() * 2) + 0) === 1) {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/musorka.jpg');
    scene.text('You see the homeless person who you gave money to last time. He smiles, waving at you as he walks over to say something.');
    scene.text('"Don\'t be afraid, hear me out."');
    scene.actions([
      { label: 'Listen to him', goto: ['city_trashplaceevents', 'pos8'] },
    ]);
  }
  if (((s as any).bumtolik ?? 0) === 3  &&  ((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 20  &&  (Math.floor(Math.random() * 2) + 0) === 1) {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/bumt2.jpg');
    scene.text('You see a girl feeding the homeless.');
    scene.text('"Hey, can you take a picture of me as I help this unfortunate soul?"');
    scene.text('You find the situation uncomfortable and refuse to photograph the girl.');
    scene.actions([
      { label: 'Ask what she\'s up to', goto: ['city_trashplaceevents', 'pos9'] },
    ]);
  }
  if (((s as any).musor ?? 0) > 3) {
    scene.actions([
      { label: 'Take out the trash', handler: (st: GameState) => {
    (st as any).musor = 0;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/residential/musorka.jpg');
    scene.text('You throw your trash into one of the bins.');
    if (((st as any).bomjqw ?? 0) > 0) {
      scene.text('"Hey babe, come over here and show an old man some service!"');
      scene.text('It\'s s the old bum you saw last time.');
      scene.actions([
        { label: 'Speak to him', goto: ['city_trashplaceevents', 'pos10'] },
      ]);
    }
    if ((!((st as any).bumtolik ?? 0))) {
      scene.text('"Hey there!" you hear a voice call out from the bins.');
      scene.actions([
        { label: 'See who spoke', goto: ['city_trashplaceevents', 'pos2'] },
      ]);
    } else {
      if (((st as any).bumtolik ?? 0) === 1) {
        scene.text('"Hey babe, come here and do an old man a favor!"');
        scene.text('It\'s the old bum you saw last time.');
        scene.actions([
          { label: 'Listen to him', goto: ['city_trashplaceevents', 'pos3'] },
        ]);
      }
    }
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).bomzQW ?? 0) === 0  &&  (Math.floor(Math.random() * 10) + 1) >= 8  &&  ((s as any).hour ?? 0) <= 16  &&  ((s as any).week ?? 0) !== 4) {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/bum.jpg');
    scene.text('As you\'re about to leave, a drunk old man stumbles up to you. He looks and smells like he hasn\'t washed in weeks.');
    // TODO-QSP: dynamic text: '"It''s national give ' + $func('money', 'string_price', 300) + ' to a bum day, ...
    scene.text('"It\'s national give 300₽ to a bum day, so come on then!" he drunkenly demands.');
    scene.actions([
{ label: 'Give him money', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 300, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 300, 'cash');
      qspCall(st, 'stat', '');
      scene.text('You give him some money and he thanks you before walking away. You swear you can hear him laughing…');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
      ]);
    }
  } },
{ label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    if (((st as any).start_type ?? 0)?.['magic'] === 'tg') {
      if (((st as any).daystart ?? 0) < 10  ||  ((st as any).stat ?? 0)?.['vaginal'] <= 2) {
        scene.text('"I\'d love to, but I don\'t have much money." Hell, you\'re not even accustomed to your new body, but you take care not to say anything.');
        scene.text('"Are you alright?" he asks as he looks you up and down.');
        scene.actions([
          { label: 'No', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    (st as any).podozrenie = ((st as any).podozrenie ?? 0) + (1);
    scene.text('"No, you just ogle away."');
    scene.text('The bum looks at you with suspicion.');
    qspGoto(st, 'city_trashplace', 'bomzstartqwestdi', 'suspicious');
  } },
        ]);
      } else {
        scene.text('"I\'d love to, but I don\'t have that kind of money."');
        qspGoto(st, 'city_trashplace', 'bomzstartqwestdi');
      }
    } else {
      scene.text('"I\'m sorry mister, but I don\'t have that kind of money."');
      qspGoto(st, 'city_trashplace', 'bomzstartqwestdi');
    }
  } },
{ label: 'Chase him off', handler: (st: GameState) => {
    (st as any).bomzQW = (-10);
    qspCall(st, 'stat', '');
    scene.text('"Get lost, you drunk old freak!" you shout at him.');
    scene.text('"You shouldn\'t be so rude to me. I meet a lot of people and know a lot of things. This will come back to haunt you when you least expect it!" he replies before leaving.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
]);
    return;
  }
  if (((s as any).bomzQW ?? 0) === -10  &&  (!(Math.floor(Math.random() * 6) + 0))) {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/street/drinkinghobos.jpg');
    scene.text('On your way home, you decide to take a walk between the buildings of the residential area, only to find yourself face to face with a group of four hobos drinking beer.');
    scene.text('You decide to ignore them and continue on your way, but suddenly feel a hand firmly gripping your arm.');
    scene.text('"Hey, bitch! Nobody teach you to say hello?" one of them barks as you instinctively struggle to break free from his grip. He angrily frowns at you, clenching his fingers harder around your arm.');
    scene.text('"I think this whore needs to learn some manners!" he says before turning towards his friends, who all drunkenly stand up to circle you.');
    if (((s as any).pcs_agil ?? 0) >= 50) {
      qspCall(s, 'willpower', 'humiliation', 'self');
      if (((s as any).will_cost ?? 0) > ((s as any).pcs_willpwr ?? 0)) {
        scene.actions([
          { label: 'Try to slip away', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Try to slip away', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'humiliation', 'self');
    qspCall(st, 'willpower', 'pay', 'self');
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.text('You contort your limber body and manage to slip out of his grasp. Seizing the opportunity, you quickly run all the way to your apartment without looking back.');
    scene.actions([
      { label: 'Continue', goto: ['korr', ''] },
    ]);
  } },
        ]);
      }
    }
    if (((s as any).pcs_stren ?? 0) >= 60) {
      qspCall(s, 'willpower', 'rape', 'resist');
      if (((s as any).will_cost ?? 0) > ((s as any).pcs_willpwr ?? 0)) {
        scene.actions([
          { label: 'Elbow him in the face', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Elbow him in the face', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'rape', 'resist');
    qspCall(st, 'willpower', 'pay', 'self');
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.text('Your elbow makes contact with his nose and he reels back in pain, letting you go. You hear him loudly cursing about how you\'ve broken his nose as you quickly run away, not stopping until you reach your apartment.');
    scene.actions([
      { label: 'Continue', goto: ['korr', ''] },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Beg', handler: (st: GameState) => {
    qspCall(st, 'npcgeneratec', '', 0, 'hobo', (Math.floor(Math.random() * 21) + 35), 3, 1);
    qspCall(st, 'npcStat', '', ((st as any).npclastgenerated ?? 0));
    qspCall(st, 'npcgeneratec', '', 0, 'hobo', (Math.floor(Math.random() * 21) + 35), 3, 1);
    qspCall(st, 'npcStat', '', ((st as any).npclastgenerated ?? 0), 'a');
    qspCall(st, 'npcgeneratec', '', 0, 'hobo', (Math.floor(Math.random() * 21) + 35), 3, 1);
    qspCall(st, 'npcStat', '', ((st as any).npclastgenerated ?? 0), 'b');
    scene.img('images/locations/city/residential/street/sex/hobosdeepthroat.jpg');
    scene.text('"Please let me go! I\'m sorry!" you plead, your heart pounding as the dirty old men look at you with clear lust in their eyes.');
    scene.text('"We have to make sure you understand your lesson, bitch!" the one holding your arm says as the men drag you in a dark back alley.');
    scene.text('"Let\'s put this slut\'s mouth to proper use," one of them says and they all start laughing and forcefully undressing you.');
    scene.text('"Let me go!" you protest as you struggle in vain before they force you on your knees.');
    scene.text('One of the men grins devilishly as he steps forwards and brushes his disgusting cock against your lips. "No teeth bitch, or you\'ll truly be sorry!" he threatens. You reluctantly part your lips to let him into your mouth, the taste making you nauseous as you look up at him with pleading eyes, which only makes him smirk.');
    scene.text('One of the hobos tightly grabs your hair in one hand and roughly pushes your head forwards, your eyes opening wide in shock as the man\'s cock is forced down your throat in one thrust. You do your best to overcome your gag reflex and relax your throat.');
    scene.text('You hear them laughing at you. "This bitch isn\'t so snooty anymore!" one of them says as you\'re forced to suck the disgusting cock in your mouth. After a few minutes, you see two of the other hobos moving around you and dropping their pants to reveal their cocks. "Don\'t forget about the rest of us, bitch!"');
    qspCall(st, 'arousal', 'bj', 5, ((st as any).npcID ?? 0), 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Submit', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/street/sex/hobosbj.jpg');
    scene.text('The hobo who has been fucking your throat pulls out of your mouth and grabs a can of beer before he sits against a wall and watches. The other two hobos move in front of you and insistently press their cocks against your lips, seemingly wanting you to suck them both at once. The man holding your head roughly spanks your bare ass and shoves his index finger in your anus. "Don\'t keep these gentlemen waiting, whore!" he crudely commands.');
    scene.text('You groan and wince, but decide fighting back is useless and nod. You open your mouth as wide as you can and stick out your tongue, allowing the two hobos to shove their filthy cocks inside.');
    scene.text('"Looks like this slut can\'t handle us two at once," one of them comments.');
    scene.text('"Maybe we\'ll have more luck with her other holes?" the other replies with a chuckle.');
    scene.text('"Guys, look what I found!" says the hobo who fucked your throat. You have no idea what it is, but you\'re pretty sure you won\'t like it…');
    qspCall(st, 'arousal', 'bj', 10, ((st as any).npcID ?? 0), 'rough', 'group', 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/street/sex/hobosgb.jpg');
    scene.text('"What a lucky find!" the hobo holding you in place says while the two others pull out of your mouth and you\'re suddenly lifted up. You then see what this big discovery is. A rope…');
    scene.text('"I don\'t know if this cunt is into bondage, but I\'m getting tired of keeping her still," the one holding you says.');
    scene.text('"Leave it to us. You can have her ass when we\'re done!" retorts the hobo holding the rope while his two friends start pawing at your breasts.');
    scene.text('"You\'ll thank us after we\'re done with you, bitch!" one of them laughs, but you remain speechless as the three men start tying you up with the rope, locking your arms behind your back and painfully squeezing your breasts.');
    scene.text('Once they\'re finished, they all admire your vulnerable form before one of them lays down on his back and the others lift you up, spread your legs and lower you on top of him. He playfully slaps your ass before reaching for his cock and rubs it against your labia before roughly thrusting upwards, hilting his cock balls deep in one go.');
    scene.text('You wince at the sudden penetration as you feel a hand grabbing hold of your bonds. "I\'m going in dry, slut…" is the only warning you get before you feel a cock forcefully pushing against your anus and forcing its way into your ass. The pain quickly overwhelms you and you scream as tears form in your eyes.');
    scene.text('"Shut the fuck up, bitch!" one of them shouts as he grabs your hair in one hand and roughly slaps your face with the other. "You\'re gonna be a good girl and make me feel good with that mouth." You obediently nod before leaning forward to take his cock into your mouth.');
    qspCall(st, 'arousal', 'bj', 20, ((st as any).npcID ?? 0), 'rough', 'group', 'submissive', 'gangbang');
    qspCall(st, 'arousal', 'anal', (-20), ((st as any).npcID1 ?? 0), 'rough', 'group', 'submissive', 'gangbang');
    qspCall(st, 'arousal', 'vaginal', (-20), ((st as any).npcID2 ?? 0), 'rough', 'group', 'submissive', 'gangbang');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img('images/locations/city/residential/street/sex/hobosfacial.jpg');
    scene.text('"I think it\'s time to give our little bitch a reward!" one of them pants and they all pull out of your abused holes and force you onto your knees before removing your bonds. They then circle around you and start stroking their cocks.');
    scene.text('Before long, the four hobos are all breathing heavily and you see their cocks twitching in their hands as they all start to cum. One of them aims for your mouth while the others shoot their disgusting loads all over your face.');
    scene.text('"Holy shit, this bitch swallows!" one of them exclaims as you gulp down the disgusting sperm that ended in your mouth. As soon as they\'re done, they all return to their cans of beer. "We hope you\'ll show us more respect in the future, slut."');
    scene.text('You quickly get dressed and stumble away towards the street without replying.');
    qspCall(st, 'cum_call', 'face', ((st as any).npcID ?? 0));
    qspCall(st, 'cum_call', 'mouth', ((st as any).npcID1 ?? 0));
    qspCall(st, 'cum_call', 'face', ((st as any).npcID2 ?? 0));
    ((st as any).stat = (st as any).stat ?? {})['rape_count'] = ((st as any).stat['rape_count'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    dynamicGoto(st, 'prevLoc', 'prevArg');
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
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'public_outdoors';
  const arg = s.locArg;
  switch (arg) {
    case 'bomzstartqwestdi':
      enterBomzstartqwestdi(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const city_trashplace: LocationDef = {
  name: 'city_trashplace',
  title: '"I see you\'re a good girl who has some money problems. I hav',
  region: 'city',
  locationType: 'public_outdoors',
  description: ['"I see you\'re a good girl who has some money problems. I have a job for you, but I can\'t say much here. You do have a passport, yes?"'],
  enter: enter,
};
