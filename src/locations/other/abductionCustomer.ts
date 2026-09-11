import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterAbdCustomerGate(s: GameState, scene: SceneBuilder): void {
  scene.text('Your master approaches you. "Hello, slave."');
  scene.text('"I have a customer here who came to rent you for a while. Do whatever he asks of you."');
  (s as any).buyout = 0;
  scene.actions([
    { label: 'Yes, Master', goto: ['abductionCustomer', 'abdCustomerGo'] },
  ]);
  scene.build();
}

function enterAbdCustomerGateBuyout(s: GameState, scene: SceneBuilder): void {
  scene.text('Your master approaches you. "Hello, slave."');
  scene.text('"I have a customer here that came to rent you for a while. Do whatever he asks of you."');
  (s as any).buyout = 1;
  scene.actions([
    { label: 'Yes, Master', goto: ['abductionCustomer', 'abdCustomerGo'] },
  ]);
  scene.build();
}

function enterAbdCustomerGo(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  (s as any).i = Math.floor(Math.random() * 3) + 1;
  scene.img(`images/locations/shared/abduction/sex/ledonfour${((s as any).i ?? 0)}.mp4`);
  scene.text('Your master removes your regular chain and attaches a leash to your collar.');
  scene.text('You are led up the stairs into the house above your cellar.');
  scene.text('When you enter the hall, your master orders you on your knees. "Crawl on your hands and legs like the bitch you are!"');
  if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
    scene.text('You are led to the room where your customer awaits. Your leash is handed to him, and your master leaves. The room\'s only door closes behind him, leaving you alone with your customer.');
  } else {
    scene.text('You are led to the room where your customer awaits. Your leash is handed to him.');
  }
  scene.actions([
    { label: 'Continue', goto: ['abductionCustomer', 'abdCustomer'] },
  ]);
  scene.build();
}

function enterAbdCustomer(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  (s as any).charTypeRand = 3;
  (s as any).bodyTypeRand = 3;
  (s as any).heightTypeRand = 3;
  (s as any).customerAge = Math.floor(Math.random() * 76) + 15;
  (s as any).raceRand = Math.floor(Math.random() * 3) + 0;
  if ((!((s as any).raceRand ?? 0))) {
    (s as any).dickChance = 30;
    (s as any).charTypeRand = ((s as any).charTypeRand ?? 0) + (((s as any).rand ?? 0)(-3, 2));
    (s as any).bodyTypeRand = ((s as any).bodyTypeRand ?? 0) + (((s as any).rand ?? 0)(-2, 8));
    (s as any).heightTypeRand = ((s as any).heightTypeRand ?? 0) + (((s as any).rand ?? 0)(-1, 6));
  } else {
    if (((s as any).raceRand ?? 0) === 1) {
      (s as any).dickChance = 40;
      (s as any).charTypeRand = ((s as any).charTypeRand ?? 0) + (Math.floor(Math.random() * 3) + 0);
      (s as any).bodyTypeRand = ((s as any).bodyTypeRand ?? 0) + (Math.floor(Math.random() * 7) + 0);
      (s as any).heightTypeRand = ((s as any).heightTypeRand ?? 0) + (Math.floor(Math.random() * 7) + 0);
    } else {
      if (((s as any).raceRand ?? 0) === 2) {
        (s as any).dickChance = 20;
        (s as any).charTypeRand = ((s as any).charTypeRand ?? 0) + (((s as any).rand ?? 0)(-2, 2));
        (s as any).bodyTypeRand = ((s as any).bodyTypeRand ?? 0) + (((s as any).rand ?? 0)(-6, 2));
        (s as any).heightTypeRand = ((s as any).heightTypeRand ?? 0) + (((s as any).rand ?? 0)(-4, 1));
      }
    }
  }
  if (qspFunc(s, 'pcs_has_attr', 'sex_virgin') === 0) {
    (s as any).dick = 28;
  } else {
    if (((s as any).buyout ?? 0) === 1) {
      (s as any).dick = 24;
    } else {
      (s as any).dickRand = Math.floor(Math.random() * 100) + 1;
      if (((s as any).dickRand ?? 0) <= ((s as any).dickChance ?? 0)) {
        (s as any).dick = Math.floor(Math.random() * 26) + 15;
      } else {
        if (((s as any).dickRand ?? 0) <= (((s as any).dickChance ?? 0) * 2)) {
          (s as any).dick = Math.floor(Math.random() * 15) + 10;
        } else {
          (s as any).dick = Math.floor(Math.random() * 10) + 5;
        }
      }
    }
  }
  (s as any).vagDMG = (((s as any).dick ?? 0) - ((s as any).pcs_vag ?? 0)) * 2;
  (s as any).assDMG = (((s as any).dick ?? 0) - ((s as any).pcs_ass ?? 0)) * 2;
  (s as any).throatDMG = (((s as any).dick ?? 0) - ((s as any).pcs_throat ?? 0)) * 2;
  if (((s as any).dick ?? 0) >= 30) {
    (s as any).cumVol = Math.floor(Math.random() * 2) + 4;
  } else {
    if (((s as any).dick ?? 0) >= 25) {
      (s as any).cumVol = ((s as any).cumVol ?? 0) + (1);
      (s as any).cumVol = Math.floor(Math.random() * 3) + 3;
    } else {
      if (((s as any).dick ?? 0) >= 20) {
        (s as any).cumVol = Math.floor(Math.random() * 4) + 2;
      } else {
        if (((s as any).dick ?? 0) >= 15) {
          (s as any).cumVol = Math.floor(Math.random() * 3) + 2;
        } else {
          if (((s as any).dick ?? 0) >= 10) {
            (s as any).cumVol = ((s as any).cumVol ?? 0) - (1);
            (s as any).cumVol = Math.floor(Math.random() * 4) + 1;
          } else {
            (s as any).cumVol = ((s as any).cumVol ?? 0) - (2);
            (s as any).cumVol = Math.floor(Math.random() * 3) + 1;
          }
        }
      }
    }
  }
  if (((s as any).cumVol ?? 0) <= 1) {
  } else {
    if (((s as any).cumVol ?? 0) === 2) {
    } else {
      if (((s as any).cumVol ?? 0) === 3) {
      } else {
        if (((s as any).cumVol ?? 0) === 4) {
        } else {
          if (((s as any).cumVol ?? 0) >= 5) {
          }
        }
      }
    }
  }
  if (((s as any).charTypeRand ?? 0) <= 1) {
  } else {
    if (((s as any).charTypeRand ?? 0) >= 2  &&  ((s as any).charTypeRand ?? 0) <= 4) {
    } else {
      if (((s as any).charTypeRand ?? 0) >= 5) {
      }
    }
  }
  if (((s as any).bodyTypeRand ?? 0) <= 1) {
  } else {
    if (((s as any).bodyTypeRand ?? 0) >= 2  &&  ((s as any).bodyTypeRand ?? 0) <= 4) {
    } else {
      if (((s as any).bodyTypeRand ?? 0) >= 5  &&  ((s as any).bodyTypeRand ?? 0) <= 6) {
      } else {
        if (((s as any).bodyTypeRand ?? 0) >= 7) {
        }
      }
    }
  }
  if (((s as any).heightTypeRand ?? 0) <= 1) {
  } else {
    if (((s as any).heightTypeRand ?? 0) >= 2  &&  ((s as any).heightTypeRand ?? 0) <= 4) {
    } else {
      if (((s as any).heightTypeRand ?? 0) >= 5) {
      }
    }
  }
  if (((s as any).customerAge ?? 0) <= 18) {
  } else {
    if (((s as any).customerAge ?? 0) > 18  &&  ((s as any).customerAge ?? 0) <= 30) {
    } else {
      if (((s as any).customerAge ?? 0) > 30  &&  ((s as any).customerAge ?? 0) <= 45) {
      } else {
        if (((s as any).customerAge ?? 0) > 45  &&  ((s as any).customerAge ?? 0) <= 60) {
        } else {
          if (((s as any).customerAge ?? 0) > 60  &&  ((s as any).customerAge ?? 0) <= 80) {
          } else {
            if (((s as any).customerAge ?? 0) > 80) {
            }
          }
        }
      }
    }
  }
  if (((s as any).buyout ?? 0) === 1) {
    scene.img('images/locations/shared/abduction/sex/slavewhorekneel1.jpg');
    scene.text('As you are led to the room as usual, you see the man standing opposite of you.');
    scene.text('Right away, you can see that he is just another bastard coming here to use your body.');
    scene.text('Your master leaves you in the center of the room, kneeling with the leash attached to your collar.');
    scene.text('As the door closes behind him, the customer slowly turns so you can finally see his face.');
    scene.actions([
      { label: 'Look at his face', goto: ['abductionCustomer', 'abdCustomer-buyout1'] },
    ]);
  } else {
    scene.img('images/locations/shared/abduction/sex/slavewhorekneelmaster.mp4');
    // TODO-QSP: dynamic text: The customer is a <<$heightType>> <<$bodyType>> <<$raceType>>.
    scene.text(`The customer is a ${((s as any).heightType ?? 0)} ${((s as any).bodyType ?? 0)} ${((s as any).raceType ?? 0)}.`);
    // TODO-QSP: dynamic text: Kneeling in front of him, you look up and see the <<$charType>> look in his eyes...
    scene.text(`Kneeling in front of him, you look up and see the ${((s as any).charType ?? 0)} look in his eyes.`);
    // TODO-QSP: dynamic text: You then look down and see his crotch directly in front of you. It's obvious tha...
    scene.text(`You then look down and see his crotch directly in front of you. It's obvious that he has something ${((s as any).dick_girth ?? 0)} in his pants.`);
  }
  if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
    scene.text('Your master speaks to the customer. "So this is her. You can be sure she\'s a virgin as her hymen is intact."');
    scene.text('"I believe you. She\'s not the first virgin slut that you\'ve delivered to me, is she?"');
    scene.text('"No, she definitely is not! How many has it been so far? Four, five?"');
    scene.text('"In your establishment, I have paid for six virgins in total. This one is the seventh.');
    if (((s as any).age ?? 0) < 17) {
      // TODO-QSP: dynamic text: "Good number. Good slut, too. She's only <<age>> years old, so her pussy will be...
      scene.text(`"Good number. Good slut, too. She's only ${((s as any).age ?? 0)} years old, so her pussy will be especially tight."`);
      scene.text('"That\'s how I like it."');
    } else {
      scene.text('"Good number. She\'s a good slut, too."');
      scene.text('"We shall see."');
    }
    scene.actions([
      { label: 'Sob and wait', goto: ['abductionCustomer', 'abdCustomer-virgin1'] },
    ]);
  } else {
    if ((!((s as any).buyout ?? 0))) {
      scene.text('He is clearly expecting you to start pleasuring him. You decide to:');
      scene.actions([
        { label: 'Show him your body', goto: ['abductionCustomer', 'abdCustomer-show'] },
        { label: 'Unzip his pants', goto: ['abductionCustomer', 'abdCustomer-unzip'] },
      ]);
    }
  }
  scene.build();
}

function enterAbdCustomerBuyout1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/leonid/leonid.jpg');
  scene.text('As you look up at his face, a chill runs down your spine - you know him!');
  // TODO-QSP: dynamic text: You remember this man from one of the parent-school conferences. It's Dimka's da...
  scene.text(`You remember this man from one of the parent-school conferences. It's Dimka's dad, ${((s as any).bName ?? 0)}!`);
  // TODO-QSP: dynamic text: He recognizes you too. "Oh… what the? Who do we have here? Aren't you that missi...
  scene.text(`He recognizes you too. "Oh… what the? Who do we have here? Aren't you that missing girl, ${((s as any).pcs_firstname ?? 0)} ${((s as any).pcs_lastname ?? 0)}?`);
  // TODO-QSP: dynamic text: With a trembling voice, only a few words leave your mouth. "Th… that's me mister...
  scene.text(`With a trembling voice, only a few words leave your mouth. "Th… that's me mister ${((s as any).bSurname ?? 0)}…"`);
  scene.text('"You do realize that the police have already given up searching for you. As if they made any effort though…"');
  scene.text('"I-I don\'t even know how long I\'ve been here. The only thing I remember is being a plaything for these perverts…"');
  scene.text('There is a short period of silence, but despite the unexpected situation, you keep kneeling with your back straight and breasts jutting forward, as you have been trained to do.');
  scene.img('images/locations/shared/abduction/sex/slavewhorekneel2.jpg');
  // TODO-QSP: dynamic text: The look on <<$bName>>'s face then changes from surprised to something else.
  scene.text(`The look on ${((s as any).bName ?? 0)}'s face then changes from surprised to something else.`);
  scene.text('He approaches you and gently caresses your face. "Plaything, you say? And do you like it?"');
  scene.text('Surprised by such a question, you consider how to reply:');
  qspCall(s, 'willpower', 'misc', 'self', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Admit you like to be dominated, but this is too much [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Admit you like to be dominated, but this is too much [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'self', 'hard');
    qspCall(s, 'willpower', 'pay', 'self');
  }, goto: ['abductionCustomer', 'abdCustomer-buyout2'] },
    ]);
  }
  scene.actions([
    { label: 'Say you hate it', goto: ['abductionCustomer', 'abdCustomer-buyout3'] },
  ]);
  scene.build();
}

function enterAbdCustomerBuyout2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/abduction/sex/slavewhorekneelmaster.mp4');
  scene.text('"What a nice submissive slut you have become. What would your mother say about this?"');
  scene.text('"I\'d rather you didn\'t let her know how I ended up…" you meekly reply.');
  scene.text('"This establishment really gets the job done. I must commend the owner."');
  scene.text('He leaves the room and you can hear the echo of a discussion between him and your master.');
  // TODO-QSP: dynamic text: After a while, <<$bName>> returns. "Let's go <<$pcs_firstname>>." He grabs your ...
  scene.text(`After a while, ${((s as any).bName ?? 0)} returns. "Let's go ${((s as any).pcs_firstname ?? 0)}." He grabs your leash and leads you outside the room into the hallway.`);
  scene.text('"B-but… where are you taking me? I\'ve never been in this part of the house before."');
  scene.text('"You still don\'t understand, do you slut? I own you now. I\'ve just bought you and you are now my property. You are… my slave."');
  scene.text('You\'re still naked and collared as he leads you outside to his car. You are forced to get into the trunk.');
  scene.actions([
    { label: 'Continue', goto: ['abductionCustomer', 'abdCustomer-buyoutLeave'] },
  ]);
  scene.build();
}

function enterAbdCustomerBuyout3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/abduction/sex/slavewhoreleonid1.mp4');
  scene.text('"In that case, let\'s have some fun before we get straight to business."');
  scene.text('He slaps your face so hard that you lose your balance and fall face first onto the floor.');
  scene.text('You are taken by surprise by the blow - you thought you were finally about to be saved from all of this.');
  // TODO-QSP: dynamic text: However, <<$bName>> seems to be as perverted as all the other men that have used...
  scene.text(`However, ${((s as any).bName ?? 0)} seems to be as perverted as all the other men that have used you previously.`);
  scene.text('Stepping above you as you helplessly lie on the floor, he opens his zipper to pull out his dick.');
  // TODO-QSP: dynamic text: You can clearly see his <<dick>> cm long <<$dick_girth>> dick swing above you in...
  scene.text(`You can clearly see his ${((s as any).dick ?? 0)} cm long ${((s as any).dick_girth ?? 0)} dick swing above you in the air.`);
  qspCall(s, 'willpower', 'bj', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Do nothing [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Do nothing [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'bj', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
  }, goto: ['abductionCustomer', 'abdCustomer-fuckAnalRough'] },
    ]);
  }
  scene.actions([
    { label: 'Suck on it', goto: ['abductionCustomer', 'abdCustomer-suckTip'] },
  ]);
  scene.build();
}

function enterAbdCustomerBuyout4(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/abduction/sex/slavewhorefuckanalroughleonid2.jpg');
  // TODO-QSP: dynamic text: You are left lying on the floor with <<$bName>>'s cum still flowing out of your ...
  scene.text(`You are left lying on the floor with ${((s as any).bName ?? 0)}'s cum still flowing out of your gaping asshole.`);
  scene.text('You can hear the echo of his and your master\'s voices discussing something you can\'t make out.');
  // TODO-QSP: dynamic text: A few minutes later, <<$bName>> comes back into the room. "I really like you <<$...
  scene.text(`A few minutes later, ${((s as any).bName ?? 0)} comes back into the room. "I really like you ${((s as any).pcs_firstname ?? 0)}."`);
  scene.text('He grabs your leash and leads you outside the room into the hallway.');
  scene.text('"B-but… where are you taking me? I\'ve never been in this part of the house before."');
  scene.text('"You still don\'t understand, do you slut? I own you now. I\'ve just bought you and you are now my property. You are… my slave."');
  scene.text('You\'re still naked and collared as he leads you outside to his car. You are forced to get into the trunk.');
  scene.actions([
    { label: 'Continue', goto: ['abductionCustomer', 'abdCustomer-buyoutLeave'] },
  ]);
  scene.build();
}

function enterAbdCustomerBuyoutLeave(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/abduction/garage.jpg');
  scene.text('Stuffed inside the trunk, you can only hear the sound of the engine and the pavement below as he drives you somewhere unknown.');
  scene.text('After an unknown amount of time, the engine shuts off, leaving only silence.');
  // TODO-QSP: dynamic text: <<$bName>> opens the trunk. Your eyes blink to adjust to the dimly lit area, and...
  scene.text(`${((s as any).bName ?? 0)} opens the trunk. Your eyes blink to adjust to the dimly lit area, and you realize that you're in an underground parking garage.`);
  scene.text('You climb out, still naked and collared like a dog. It seems he doesn\'t care about your feelings at all.');
  scene.text('He takes your leash and leads you on all fours up the stairs. You exit through the stairwell door into a room that appears to be an office.');
  scene.actions([
    { label: 'Continue', goto: ['leonid', 'firstTime'] },
  ]);
  scene.build();
}

function enterAbdCustomerVirgin1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/abduction/sex/slavewhorevirgin1.mp4');
  scene.text('Your master leaves, and your body starts to shiver.');
  scene.text('"Don\'t worry slut. This will only hurt a lot!" the customer laughs. He is clearly enjoying himself.');
  scene.text('You quickly back up into the far corner of the room in a futile attempt to get as far away from him as you can.');
  scene.text('He walks up to you and grabs you by the hair. He drags you as a pained, terrified scream emits from your throat to something that looks like a bench in the center of the room.');
  scene.text('He forcefully yanks your hair to make you climb onto the bench like structure. He punches you in the stomach, and you collapse. He then flips you over onto your back and binds your arms above your head with handcuffs. He follows with putting your legs into stirrups, with legcuffs to hold you in place. You realize that this gives him unlimited access to your virgin pussy.');
  scene.text('Your head is bound so that you have an unobstructed view on your own pussy. This is to ensure that you watch as he tears you apart.');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', goto: ['abductionCustomer', 'abdCustomer-virgin2'] },
  ]);
  scene.build();
}

function enterAbdCustomerVirgin2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'mood', 'lower', 'huge');
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/abduction/sex/slavewhorevirgin2.mp4');
  scene.text('He starts to slowly undress, his back turned to you to enhance your terror. You hear a loud clink as his pants, holding a belt, hit the concrete floor. He slowly turns around to face you, and you can finally see his naked body. His cock sways for a moment before stopping in front of your face.');
  // TODO-QSP: dynamic text: "With renewed terror, you start to cry at the sight of his <<dick>> cm thick <<$...
  scene.text(`"With renewed terror, you start to cry at the sight of his ${((s as any).dick ?? 0)} cm thick ${((s as any).dick_girth ?? 0)} cock."`);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', goto: ['abductionCustomer', 'abdCustomer-virgin3'] },
  ]);
  scene.build();
}

function enterAbdCustomerVirgin3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/abduction/sex/slavewhorevirgin3.jpg');
  scene.text('He starts to jerk his cock while looking at your eyes, then to your bound and helpless nude body. The sight slowly makes his cock hard.');
  scene.text('You can tell he relishes looking at you in your despair.');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', goto: ['abductionCustomer', 'abdCustomer-virgin4'] },
  ]);
  scene.build();
}

function enterAbdCustomerVirgin4(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/abduction/sex/slavewhorevirgin4.jpg');
  scene.text('He finally reaches for you and brings the tip of his dick to the entrance of your virgin pussy.');
  // TODO-QSP: dynamic text: He covers his <<$dick_girth>> member in a thick layer of lube and starts to slow...
  scene.text(`He covers his ${((s as any).dick_girth ?? 0)} member in a thick layer of lube and starts to slowly press against the opening of your pussy.`);
  scene.text('With his hands, he spreads your pussy lips apart to help ease the entry for his member.');
  scene.text('"Now behold girl. You are about to become a woman!" he exclaims.');
  scene.text('He pushes it in with a single long thrust that almost hits the bottom of your virgin cunt.');
  scene.text('Pain rips through your body, spreading like a fire as a trickle of blood runs down the shaft of his cock.');
  qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
  ((s as any).stat ?? {})['vaginal'] = (((s as any).stat ?? {})['vaginal'] ?? 0) + (1);
  ((s as any).pain ?? {})['vaginal'] = (((s as any).pain ?? {})['vaginal'] ?? 0) + (20);
  qspCall(s, 'stat', '');
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'maso', 'humiliation', 'rough', 'bound');
  scene.actions([
    { label: 'Cry', goto: ['abductionCustomer', 'abdCustomer-virgin5'] },
  ]);
  scene.build();
}

function enterAbdCustomerVirgin5(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/abduction/sex/slavewhorevirgin5.mp4');
  scene.text('He pulls his cock back out and shows it to you, enjoying the expression you make seeing your blood coating it.');
  scene.text('He then slams his cock back into you. The pain you feel is renewed while he grunts in pleasure.');
  // TODO-QSP: dynamic text: He feels accomplishment in his handiwork and sneers at you as he brutally thrust...
  scene.text(`He feels accomplishment in his handiwork and sneers at you as he brutally thrusts into your pussy over and over again. He often hits your cervix with his ${((s as any).dick ?? 0)} cm long thick ${((s as any).dick_girth ?? 0)} dick.`);
  ((s as any).pain ?? {})['vaginal'] = (((s as any).pain ?? {})['vaginal'] ?? 0) + (10);
  ((s as any).pain ?? {})['cervix'] = (((s as any).pain ?? {})['cervix'] ?? 0) + (10);
  ((s as any).pain ?? {})['tummy'] = (((s as any).pain ?? {})['tummy'] ?? 0) + (10);
  qspCall(s, 'stat', '');
  qspCall(s, 'arousal', 'vaginal', 30, 'sub', 'maso', 'humiliation', 'rough', 'bound');
  scene.actions([
    { label: 'Cry', goto: ['abductionCustomer', 'abdCustomer-virgin6'] },
  ]);
  scene.build();
}

function enterAbdCustomerVirgin6(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.img('images/locations/shared/abduction/sex/slavewhorevirgin6.mp4');
  scene.text('"And now you will receive your first load of cum, whore. You will become the breeder you were always supposed to be!"');
  // TODO-QSP: dynamic text: As renewed tears stream down your cheeks, he spurts his <<$cumType>> amount of s...
  scene.text(`As renewed tears stream down your cheeks, he spurts his ${((s as any).cumType ?? 0)} amount of sperm ${((s as any).dick ?? 0)} cm deep inside your pussy. You can feel it hit your cervix, and you shudder at the thought of getting pregnant from this monster.`);
  (s as any).cumnostd = 1;
  qspCall(s, 'cum_call', 'pussy', 'deflowering pervert');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Cry more', goto: ['abductionCustomer', 'abdCustomer-virgin7'] },
  ]);
  scene.build();
}

function enterAbdCustomerVirgin7(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/abduction/sex/slavewhorevirgin7.jpg');
  scene.text('He rests with his dick deep inside you for a while. He is enjoying the sight of your cries and the despair of your situation.');
  // TODO-QSP: dynamic text: "As his <<$dick_girth>> member becomes flaccid, it slides free of your abused pu...
  scene.text(`"As his ${((s as any).dick_girth ?? 0)} member becomes flaccid, it slides free of your abused pussy. He reaches out of sight and brings into view a dildo that looks almost exactly like his own dick. You think that it has probably been modeled from it."`);
  scene.text('"The cum that I just gave you is not meant to just drip out of you. You will receive another gift from me, one that will keep my present inside you."');
  scene.text('He proceeds to lift your ass in the air so the cum doesn\'t flow out, then brutally shoves the dildo all the way inside you. The dildo is pushed so deep into you that only its brightly coloured base peeks out of your abused hole.');
  scene.text('He then takes some pieces of duct tape and wraps them over your pussy to cover your lips and keep the dildo firmly stuck inside.');
  scene.text('He uncuffs you from the bench, but pulls your arms behind your back. This is probably to keep you from removing his \'gift\'.');
  scene.text('"Now run along and enjoy my gifts even more, slut!" he laughs before leaving.');
  ((s as any).pain ?? {})['vaginal'] = (((s as any).pain ?? {})['vaginal'] ?? 0) + (10);
  ((s as any).pain ?? {})['cervix'] = (((s as any).pain ?? {})['cervix'] ?? 0) + (10);
  ((s as any).pain ?? {})['belly'] = (((s as any).pain ?? {})['belly'] ?? 0) + (20);
  qspCall(s, 'stat', '');
  qspCall(s, 'arousal', 'vaginal_dildo', 10, 'sub', 'maso', 'humiliation', 'rough', 'bound');
  scene.actions([
    { label: 'Struggle to remove the dildo', goto: ['abductionCustomer', 'abdCustomer-virgin8'] },
  ]);
  scene.build();
}

function enterAbdCustomerVirgin8(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  scene.img('images/locations/shared/abduction/sex/slavewhorevirgin8.jpg');
  // TODO-QSP: dynamic text: Your master comes in and finds you struggling on the ground. You are trying to s...
  scene.text(`Your master comes in and finds you struggling on the ground. You are trying to shake the ${((s as any).dick_girth ?? 0)} dildo out of you.`);
  scene.text('"Stop it girl. You\'ll just make it worse."');
  scene.text('He grabs your leash and leads you back down to your cell.');
  // TODO-QSP: dynamic text: As you follow your master, the plugged <<$dick_girth>> dildo moves inside you, c...
  scene.text(`As you follow your master, the plugged ${((s as any).dick_girth ?? 0)} dildo moves inside you, causing you further unpleasant sensations and pain.`);
  scene.text('Finally, you are back at your bed.');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Lie down', goto: ['abductionCustomer', 'abdCustomer-virgin9'] },
  ]);
  scene.build();
}

function enterAbdCustomerVirgin9(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sleep_simple', 'forced', 480);
  scene.img('images/locations/shared/abduction/sex/slavewhorevirgin9.jpg');
  scene.text('Your hands still bound, you are thrown on your bed and are once again chained to the wall.');
  // TODO-QSP: dynamic text: Your master leaves and you are left lying on the bed, your pussy still plugged b...
  scene.text(`Your master leaves and you are left lying on the bed, your pussy still plugged by the ${((s as any).dick ?? 0)} cm long ${((s as any).dick_girth ?? 0)} dildo.`);
  scene.actions([
    { label: 'Try to rest', goto: ['abductionCustomer', 'abdCustomer-virgin10'] },
  ]);
  scene.build();
}

function enterAbdCustomerVirgin10(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'mood', 'lower', 'huge');
  scene.img('images/locations/shared/abduction/sex/slavewhorevirgin10.mp4');
  scene.text('The sound of your master coming downstairs wakes you up. You must have fallen asleep from the exhaustion.');
  scene.text('"Kneel and get that ass in the air, slut."');
  scene.text('You\'re so desperate that you don\'t even think about not doing what he orders you. You just stick your ass as high as possible.');
  scene.text('It points so he has good access to both your ass and your ruthlessly plugged, deflowered pussy.');
  scene.text('Your master kneels down to remove the duct tape with a single pull. You yelp in pain from the tiny pubic hairs that get ripped out with the tape. He puts his fingers inside you to grab the stuck dildo.');
  scene.text('He slowly removes it. Remnants of your blood and the customer\'s sperm are smeared all over it.');
  scene.text('Your now empty pussy gives you a rush of relief as the cool air flows in to fill the void.');
  scene.text('Your master unties you and adjusts your chain. As he leaves, he stops and grins at you. "Be glad that you can only be deflowered once, you silly girl."');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdRoom'] },
  ]);
  scene.build();
}

function enterAbdCustomerUnzip(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.text('You reach towards his crotch and slowly start to unzip his trousers.');
  // TODO-QSP: dynamic text: Pressing your face underneath his crotch, you pull down his pants and a <<$dick_...
  scene.text(`Pressing your face underneath his crotch, you pull down his pants and a ${((s as any).dick_girth ?? 0)} member falls out. It lands directly on your face with a loud slap.`);
  if (((s as any).dick ?? 0) > 15  &&  ((s as any).dick ?? 0) < 25) {
    scene.img('images/locations/shared/abduction/sex/unzip1.mp4');
    // TODO-QSP: dynamic text: You admire his <<$dick_girth>> cock.
    scene.text(`You admire his ${((s as any).dick_girth ?? 0)} cock.`);
  } else {
    if (((s as any).dick ?? 0) >= 25) {
      scene.img('images/locations/shared/abduction/sex/unzip2.mp4');
      // TODO-QSP: dynamic text: You stare at his <<$dick_girth>> cock in horror. You imagine what terrible thing...
      scene.text(`You stare at his ${((s as any).dick_girth ?? 0)} cock in horror. You imagine what terrible things it will do to your tender body.`);
    } else {
      if (((s as any).dick ?? 0) < 15  &&  ((s as any).pcs_throat ?? 0) > ((s as any).dick ?? 0)) {
        scene.img('images/locations/shared/abduction/sex/unzip3.mp4');
        // TODO-QSP: dynamic text: You look at his <<$dick_girth>> cock in relief, thinking that it's nothing you c...
        scene.text(`You look at his ${((s as any).dick_girth ?? 0)} cock in relief, thinking that it's nothing you can't handle.`);
      }
    }
  }
  if (((s as any).pcs_throat ?? 0) < ((s as any).dick ?? 0)) {
    // TODO-QSP: dynamic text: It's obvious that his <<$dick_girth>> dick is above your skill level and you kno...
    scene.text(`It's obvious that his ${((s as any).dick_girth ?? 0)} dick is above your skill level and you know you can't safely swallow it whole.`);
    qspCall(s, 'willpower', 'bj', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Force yourself on his cock [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Force yourself on his cock [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'bj', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
  }, goto: ['abductionCustomer', 'abdCustomer-suckForceself'] },
      ]);
    }
    scene.actions([
      { label: 'Suck the tip', goto: ['abductionCustomer', 'abdCustomer-suckTip'] },
    ]);
  } else {
    // TODO-QSP: dynamic text: Even though his dick is <<$dick_girth>>, you know you could take it all the way ...
    scene.text(`Even though his dick is ${((s as any).dick_girth ?? 0)}, you know you could take it all the way to the base.`);
    qspCall(s, 'willpower', 'bj', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Deepthroat his cock [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Deepthroat his cock [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'bj', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
  }, goto: ['abductionCustomer', 'abdCustomer-suckDeep'] },
      ]);
    }
    scene.actions([
      { label: 'Suck the tip', goto: ['abductionCustomer', 'abdCustomer-suckTip'] },
    ]);
  }
  scene.build();
}

function enterAbdCustomerShow(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  (s as any).i = Math.floor(Math.random() * 5) + 1;
  scene.img(`images/locations/shared/abduction/sex/slavewhoretease${((s as any).i ?? 0)}.mp4`);
  scene.text('You decide to tease the customer by jiggling and squeezing your breasts.');
  scene.text('After a few minutes, it\'s obvious that he wants something more.');
  scene.actions([
    { label: 'Continue', goto: ['abductionCustomer', 'abdCustomer-unzip'] },
  ]);
  scene.build();
}

function enterAbdCustomerSuckTip(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'bj', 15, 'sub');
  qspCall(s, 'stat', '');
  (s as any).i = Math.floor(Math.random() * 5) + 1;
  scene.img(`images/locations/shared/abduction/sex/slavewhoreblowjobtip${((s as any).i ?? 0)}.mp4`);
  // TODO-QSP: dynamic text: You try your best to suck the head of his <<dick>> cm sized <<$dick_girth>> dick...
  scene.text(`You try your best to suck the head of his ${((s as any).dick ?? 0)} cm sized ${((s as any).dick_girth ?? 0)} dick.`);
  if (((s as any).pcs_throat ?? 0) < ((s as any).dick ?? 0)) {
    // TODO-QSP: dynamic text: It's obvious that his <<$dick_girth>> dick is above your skill level and you kno...
    scene.text(`It's obvious that his ${((s as any).dick_girth ?? 0)} dick is above your skill level and you know you can't safely swallow it whole.`);
  } else {
    // TODO-QSP: dynamic text: Even though his dick is <<$dick_girth>>, you know you could take it all the way ...
    scene.text(`Even though his dick is ${((s as any).dick_girth ?? 0)}, you know you could take it all the way to the base.`);
  }
  if (((s as any).charType ?? 0) === 'sadistic') {
    if (((s as any).buyout ?? 0) === 1) {
      // TODO-QSP: dynamic text: <<$bName>> is starting to get annoyed. He's obviously not happy that all you can...
      scene.text(`${((s as any).bName ?? 0)} is starting to get annoyed. He's obviously not happy that all you can do is suck the tip of his cock.`);
    } else {
      scene.text('Your customer is starting to get annoyed. He\'s obviously not happy that all you can do is suck the tip of his cock.');
    }
    // TODO-QSP: dynamic text: Suddenly, without any warning, he takes a step back, which pulls his <<$dick_gir...
    scene.text(`Suddenly, without any warning, he takes a step back, which pulls his ${((s as any).dick_girth ?? 0)} member out of your mouth.`);
    scene.text('With an angry look in his eyes, he slaps your face very hard, which knocks you to the cold floor. He then jumps on top of you and ties you up with some rope.');
    // TODO-QSP: dynamic text: "Even here, one must train the slaves himself!" he shouts at you. He forces his ...
    scene.text(`"Even here, one must train the slaves himself!" he shouts at you. He forces his ${((s as any).dick_girth ?? 0)} dick all the way down your throat.`);
    scene.text('With your hands tied, you\'re unable to resist. All you can do is struggle to avoid suffocating as best you can.');
    scene.actions([
      { label: 'Endure', goto: ['abductionCustomer', 'abdCustomer-suckForced'] },
    ]);
  } else {
    if (((s as any).charType ?? 0) === 'neutral') {
      scene.text('Your customer seems displeased by your performance. You\'re starting to worry about what he\'ll do if you don\'t satisfy him well enough…');
      (s as any).forceChance = Math.floor(Math.random() * 100) + 1;
      if (((s as any).forceChance ?? 0) <= 70) {
        scene.actions([
          { label: 'Continue sucking the tip', goto: ['abductionCustomer', 'abdCustomer-suckForced'] },
        ]);
      } else {
        scene.actions([
          { label: 'Continue sucking the tip', goto: ['abductionCustomer', 'abdCustomer-fuck'] },
        ]);
      }
      if (((s as any).pcs_throat ?? 0) < ((s as any).dick ?? 0)) {
        qspCall(s, 'willpower', 'bj', 'self');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Force yourself on his cock [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Force yourself on his cock [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'bj', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
  }, goto: ['abductionCustomer', 'abdCustomer-suckForceself'] },
          ]);
        }
      } else {
        qspCall(s, 'willpower', 'bj', 'self');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Deepthroat his cock [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Deepthroat his cock [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'bj', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
  }, goto: ['abductionCustomer', 'abdCustomer-suckDeep'] },
          ]);
        }
      }
    } else {
      if (((s as any).charType ?? 0) === 'kind') {
        // TODO-QSP: dynamic text: Your customer seems pleased with your skill, so you continue to tease the tip of...
        scene.text(`Your customer seems pleased with your skill, so you continue to tease the tip of his ${((s as any).dick_girth ?? 0)} cock. You look at him with as much sensual abandon as you can muster under the present conditions.`);
        scene.actions([
          { label: 'Continue sucking the tip', goto: ['abductionCustomer', 'abdCustomer-fuck'] },
        ]);
      }
    }
  }
  scene.build();
}

function enterAbdCustomerSuckForceself(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal_funcs', 'stretch', 'oral', 1);
  ((s as any).pain ?? {})['throat'] = (((s as any).pain ?? {})['throat'] ?? 0) + (((s as any).throatDMG ?? 0));
  qspCall(s, 'stat', '');
  (s as any).i = Math.floor(Math.random() * 3) + 1;
  scene.img(`images/locations/shared/abduction/sex/slavewhoreblowjobselfforced${((s as any).i ?? 0)}.mp4`);
  // TODO-QSP: dynamic text: Despite knowing you will probably hurt yourself, you force yourself on his <<dic...
  scene.text(`Despite knowing you will probably hurt yourself, you force yourself on his ${((s as any).dick ?? 0)} cm long cock all the way down to the base.`);
  scene.text('You start gagging, and saliva freely flows from your stuffed mouth. Your customer seems more content now.');
  qspCall(s, 'arousal', 'bj', 15, 'sub', 'rough', 'deepthroat');
  scene.actions([
    { label: 'Continue', goto: ['abductionCustomer', 'abdCustomer-fuck'] },
  ]);
  scene.build();
}

function enterAbdCustomerSuckForced(s: GameState, scene: SceneBuilder): void {
  ((s as any).pain ?? {})['throat'] = (((s as any).pain ?? {})['throat'] ?? 0) + (((s as any).throatDMG ?? 0) * 2);
  qspCall(s, 'arousal_funcs', 'stretch', 'oral', 2);
  qspCall(s, 'arousal', 'bj', 15, 'sub', 'rough', 'deepthroat', 'humiliation');
  qspCall(s, 'stat', '');
  (s as any).endPunishment = 1;
  (s as any).i = Math.floor(Math.random() * 6) + 1;
  scene.img(`images/locations/shared/abduction/sex/slavewhoreblowjobforced${((s as any).i ?? 0)}.mp4`);
  if (((s as any).buyout ?? 0) === 1) {
    // TODO-QSP: dynamic text: <<$bName>> growls and suddenly pulls his cock out of your mouth.
    scene.text(`${((s as any).bName ?? 0)} growls and suddenly pulls his cock out of your mouth.`);
  } else {
    scene.text('Your customer growls and suddenly pulls his cock out of your mouth.');
  }
  scene.text('"What kind of slave are you when you can\'t swallow my dick?"');
  scene.text('He ties you up and forces his cock down your throat. He shows little to no concern for your wellbeing.');
  scene.text('You start to gag as he keeps pushing his member deep inside you, leaving you on the brink of passing out.');
  (s as any).vagOrAss = 0;
  if (((s as any).buyout ?? 0) === 1) {
    scene.actions([
      { label: 'Continue', goto: ['abductionCustomer', 'abdCustomer-fuckAnalRough'] },
    ]);
  } else {
    if ((!((s as any).vagOrAss ?? 0))) {
      scene.actions([
        { label: 'Continue', goto: ['abductionCustomer', 'abdCustomer-fuckRough'] },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', goto: ['abductionCustomer', 'abdCustomer-fuckAnalRough'] },
      ]);
    }
  }
  scene.build();
}

function enterAbdCustomerSuckDeep(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal_funcs', 'stretch', 'oral', 1);
  qspCall(s, 'arousal', 'bj', 15, 'sub', 'deepthroat');
  qspCall(s, 'stat', '');
  (s as any).i = Math.floor(Math.random() * 6) + 1;
  scene.img(`images/locations/shared/abduction/sex/slavewhoreblowjob${((s as any).i ?? 0)}.mp4`);
  // TODO-QSP: dynamic text: You swallow his <<$dick_girth>> cock all the way down to his balls.
  scene.text(`You swallow his ${((s as any).dick_girth ?? 0)} cock all the way down to his balls.`);
  scene.actions([
    { label: 'Continue', goto: ['abductionCustomer', 'abdCustomer-fuck'] },
  ]);
  scene.build();
}

function enterAbdCustomerFuck(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'arousal_funcs', 'stretch', 'oral', 1);
  qspCall(s, 'stat', '');
  (s as any).endPunishment = 0;
  scene.img('images/locations/shared/abduction/sex/slavewhorecockremoved.jpg');
  // TODO-QSP: dynamic text: It seems the customer is done with fucking your mouth as he removes his dick and...
  scene.text(`It seems the customer is done with fucking your mouth as he removes his dick and steps back. He looks at you with a ${((s as any).charType ?? 0)} appetite in his eyes.`);
  if (((s as any).charType ?? 0) === 'sadistic') {
    scene.text('"What should I do to you next, bitch?"');
  } else {
    scene.text('"So how do you want it next, slut?"');
  }
  scene.text('You\'re not entirely sure if he means that as a rhetorical question or not.');
  if (((s as any).charType ?? 0) === 'sadistic') {
    scene.text('You want to answer him, but the moment you open your mouth to talk he slaps your face very hard. This knocks you to the cold floor and tears erupt from your eyes in response.');
    scene.text('"You thought I was actually interested in your opinion…<i>slave</i>?" he questions, laughing. "A bitch like you has no right to an opinion!"');
    scene.text('You\'re unable to do anything except whimper like a small child. He ties you up, and you know that it\'s going to get even worse now.');
    (s as any).vagOrAss = 0;
    if ((!((s as any).vagOrAss ?? 0))) {
      scene.actions([
        { label: 'Continue', goto: ['abductionCustomer', 'abdCustomer-fuckRough'] },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', goto: ['abductionCustomer', 'abdCustomer-fuckAnalRough'] },
      ]);
    }
  } else {
    scene.text('You decide to:');
    qspCall(s, 'willpower', 'sex', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Beg him to be kind [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Beg him to be kind [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'sex', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
  }, goto: ['abductionCustomer', 'abdCustomer-beg'] },
      ]);
    }
    scene.actions([
      { label: 'Be quiet', goto: ['abductionCustomer', 'abdCustomer-decide'] },
    ]);
  }
  scene.build();
}

function enterAbdCustomerDecide(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  (s as any).vagOrAss = 0;
  if (((s as any).vagOrAss ?? 0) === 1) {
    if (((s as any).charType ?? 0) === 'sadistic') {
      scene.text('"I\'ll fuck your cunt raw, bitch!"');
      scene.actions([
        { label: 'Continue', goto: ['abductionCustomer', 'abdCustomer-fuckRough'] },
      ]);
    } else {
      scene.text('"Let\'s take your tender pussy!"');
      scene.actions([
        { label: 'Continue', goto: ['abductionCustomer', 'abdCustomer-fuckNormal'] },
      ]);
    }
  } else {
    if (((s as any).charType ?? 0) === 'sadistic') {
      scene.text('"I\'ll fuck you deep in your ass, bitch!"');
      scene.actions([
        { label: 'Continue', goto: ['abductionCustomer', 'abdCustomer-fuckAnalRough'] },
      ]);
    } else {
      scene.text('"I want to see how tight your ass is."');
      scene.actions([
        { label: 'Continue', goto: ['abductionCustomer', 'abdCustomer-fuckAnal'] },
      ]);
    }
  }
  scene.build();
}

function enterAbdCustomerBeg(s: GameState, scene: SceneBuilder): void {
  (s as any).vagOrAss = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/abduction/sex/slavewhorebeg1.jpg');
  scene.text('Please be gentle to me, sir! I\'m so sore… Please!');
  if (((s as any).dick ?? 0) >= 15) {
    scene.text('"I\'m scared of your dick, sir!"');
  }
  (s as any).bekindChance = Math.floor(Math.random() * 100) + 1;
  (s as any).endPunishment = 0;
  if (((s as any).charType ?? 0) === 'neutral'  ||  ((s as any).charType ?? 0) === 'kind') {
    scene.text('"Alright girl, you\'re lucky that I\'m feeling generous today."');
    if (((s as any).vagOrAss ?? 0) === 1) {
      scene.actions([
        { label: 'Continue', goto: ['abductionCustomer', 'abdCustomer-fuckNormal'] },
      ]);
    } else {
      if (((s as any).vagOrAss ?? 0) === 2) {
        scene.actions([
          { label: 'Continue', goto: ['abductionCustomer', 'abdCustomer-fuckAnal'] },
        ]);
      }
    }
  } else {
    (s as any).endPunishment = 1;
    scene.text('"A slave has no right to ask what will happen to it!"');
    (s as any).hardChance = Math.floor(Math.random() * 100) + 1;
    scene.text('"I\'ll fuck you however I want, so shut up bitch!"');
    if (((s as any).hardChance ?? 0) <= 50) {
      if ((!((s as any).vagOrAss ?? 0))) {
        scene.actions([
          { label: 'Continue', goto: ['abductionCustomer', 'abdCustomer-fuckRough'] },
        ]);
      } else {
        scene.actions([
          { label: 'Continue', goto: ['abductionCustomer', 'abdCustomer-fuckAnalRough'] },
        ]);
      }
    } else {
      if ((!((s as any).vagOrAss ?? 0))) {
        scene.actions([
          { label: 'Continue', goto: ['abductionCustomer', 'abdCustomer-fuckNormal'] },
        ]);
      } else {
        scene.actions([
          { label: 'Continue', goto: ['abductionCustomer', 'abdCustomer-fuckAnal'] },
        ]);
      }
    }
  }
  scene.build();
}

function enterAbdCustomerFuckAnal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
  qspCall(s, 'stat', '');
  (s as any).i = Math.floor(Math.random() * 5) + 1;
  scene.img(`images/locations/shared/abduction/sex/slavewhorefuckanal${((s as any).i ?? 0)}.mp4`);
  // TODO-QSP: dynamic text: The customer puts some lubricant on his <<$dick_girth>> cock and penetrates your...
  scene.text(`The customer puts some lubricant on his ${((s as any).dick_girth ?? 0)} cock and penetrates your ass.`);
  scene.text('He doesn\'t care much about your feelings, but he\'s also not exactly hurting you on purpose.');
  if (((s as any).dick ?? 0) > ((s as any).pcs_ass ?? 0)) {
    ((s as any).pain ?? {})['asshole'] = (((s as any).pain ?? {})['asshole'] ?? 0) + (((s as any).assDMG ?? 0));
    ((s as any).pain ?? {})['tummy'] = (((s as any).pain ?? {})['tummy'] ?? 0) + (((s as any).assDMG ?? 0));
    qspCall(s, 'arousal', 'anal', 30, 'sub', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['abductionCustomer', 'abdCustomer-fuckAnalDeep'] },
    ]);
  } else {
    // TODO-QSP: dynamic text: You have no problems accommodating his <<$dick_girth>> member.
    scene.text(`You have no problems accommodating his ${((s as any).dick_girth ?? 0)} member.`);
    qspCall(s, 'arousal', 'anal', 30, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['abductionCustomer', 'abdCustomer-cumGate'] },
    ]);
  }
  scene.build();
}

function enterAbdCustomerFuckAnalRough(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal_funcs', 'stretch', 'anal', 2);
  qspCall(s, 'arousal', 'anal', 30, 'sub', 'rough', 'bound');
  qspCall(s, 'stat', '');
  (s as any).i = Math.floor(Math.random() * 5) + 1;
  scene.img(`images/locations/shared/abduction/sex/slavewhorefuckanalrough${((s as any).i ?? 0)}.mp4`);
  if (((s as any).buyout ?? 0) === 1) {
    scene.img('images/locations/shared/abduction/sex/slavewhorefuckanalroughleonid1.jpg');
    // TODO-QSP: dynamic text: <<$bName>> takes you by your leash and positions your body as if it's just meat ...
    scene.text(`${((s as any).bName ?? 0)} takes you by your leash and positions your body as if it's just meat to be used.`);
  } else {
    scene.text('The man takes you by your leash and positions your body as if it\'s just meat to be used.');
  }
  scene.text('What comes next is an excruciatingly rough ass fucking that clearly shows he has no regard for all the pain you have to endure.');
  if (((s as any).assDMG ?? 0) <= 0) {
    // TODO-QSP: dynamic text: Fortunately, his <<$dick_girth>> dick is not enough to cause you much pain. No m...
    scene.text(`Fortunately, his ${((s as any).dick_girth ?? 0)} dick is not enough to cause you much pain. No more than usual, anyway.`);
    if (((s as any).buyout ?? 0) === 1) {
      scene.actions([
        { label: 'Be silent', goto: ['abductionCustomer', 'abdCustomer-cumAss'] },
      ]);
    } else {
      if (((s as any).charType ?? 0) === 'sadistic') {
        scene.actions([
          { label: 'Be silent', goto: ['abductionCustomer', 'abdCustomer-cum'] },
        ]);
      } else {
        scene.actions([
          { label: 'Continue', goto: ['abductionCustomer', 'abdCustomer-cumGate'] },
        ]);
      }
    }
  } else {
    if (((s as any).assDMG ?? 0) <= 2) {
      // TODO-QSP: dynamic text: His <<$dick_girth>> dick is too big for you and you suffer a lot of stretching p...
      scene.text(`His ${((s as any).dick_girth ?? 0)} dick is too big for you and you suffer a lot of stretching pain as it slams against your intestinal walls.`);
      ((s as any).pain ?? {})['asshole'] = (((s as any).pain ?? {})['asshole'] ?? 0) + (((s as any).assDMG ?? 0));
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Continue', goto: ['abductionCustomer', 'abdCustomer-fuckAnalDeep'] },
      ]);
    } else {
      // TODO-QSP: dynamic text: His <<$dick_girth>> dick is insanely big for you.
      scene.text(`His ${((s as any).dick_girth ?? 0)} dick is insanely big for you.`);
      scene.text('The tip of his cock repeatedly hits your intestinal walls and stretches your anus wide.');
      ((s as any).pain ?? {})['asshole'] = (((s as any).pain ?? {})['asshole'] ?? 0) + (((s as any).assDMG ?? 0));
      ((s as any).pain ?? {})['tummy'] = (((s as any).pain ?? {})['tummy'] ?? 0) + (((s as any).assDMG ?? 0));
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Continue', goto: ['abductionCustomer', 'abdCustomer-fuckAnalDeep'] },
      ]);
    }
  }
  scene.build();
}

function enterAbdCustomerFuckAnalDeep(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
  qspCall(s, 'stat', '');
  (s as any).i = Math.floor(Math.random() * 1) + 1;
  scene.img(`images/locations/shared/abduction/sex/slavewhorefuckanaldeep${((s as any).i ?? 0)}.mp4`);
  // TODO-QSP: dynamic text: His member is <<$dick_girth>> and your ass is unable to accommodate it.
  scene.text(`His member is ${((s as any).dick_girth ?? 0)} and your ass is unable to accommodate it.`);
  if (((s as any).charType ?? 0) === 'sadistic') {
    scene.text('He doesn\'t care, even though he\'s obviously aware, and fucks you furiously hard.');
    // TODO-QSP: dynamic text: "How do like my <<$dick_girth>> cock inside you bitch? Is it deep enough for you...
    scene.text(`"How do like my ${((s as any).dick_girth ?? 0)} cock inside you bitch? Is it deep enough for you, or should I push a bit more?"`);
    scene.text('He\'s obviously enjoying this a lot.');
  }
  scene.text('With every thrust of his dick deep inside your intestines, you feel as if it\'s your very stomach being poked by it.');
  if (((s as any).buyout ?? 0) === 1) {
    // TODO-QSP: dynamic text: After about a half an hour of deep anal banging, <<$bName>> is about to cum.
    scene.text(`After about a half an hour of deep anal banging, ${((s as any).bName ?? 0)} is about to cum.`);
  } else {
    scene.text('After about a half an hour of deep anal banging, the man is about to cum.');
  }
  if ((((s as any).endPunishment ?? 0) === 1  ||  ((s as any).charType ?? 0) === 'sadistic')  &&  (!((s as any).buyout ?? 0))) {
    scene.text('"I\'m going to feed you my cum now, you unruly anal slut!"');
    scene.actions([
      { label: 'Be silent', goto: ['abductionCustomer', 'abdCustomer-cum'] },
    ]);
  } else {
    if (((s as any).buyout ?? 0) === 1) {
      scene.actions([
        { label: 'Be silent', goto: ['abductionCustomer', 'abdCustomer-cumAss'] },
      ]);
    } else {
      scene.actions([
        { label: 'Be silent', goto: ['abductionCustomer', 'abdCustomer-cumGate'] },
      ]);
    }
  }
  scene.build();
}

function enterAbdCustomerFuckNormal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
  qspCall(s, 'stat', '');
  (s as any).i = Math.floor(Math.random() * 5) + 1;
  scene.img(`images/locations/shared/abduction/sex/slavewhorefucknormal${((s as any).i ?? 0)}.mp4`);
  scene.text('The customer penetrates your pussy and fucks you.');
  if (((s as any).vagDMG ?? 0) <= 0) {
    scene.text('He\'s not gentle, but it isn\'t very rough either.');
    // TODO-QSP: dynamic text: You have no problems accommodating his <<$dick_girth>> dick. You almost seem to ...
    scene.text(`You have no problems accommodating his ${((s as any).dick_girth ?? 0)} dick. You almost seem to enjoy it.`);
    qspCall(s, 'arousal', 'vaginal', 30, 'sub');
    scene.actions([
      { label: 'Be silent', goto: ['abductionCustomer', 'abdCustomer-cumGate'] },
    ]);
  } else {
    if (((s as any).vagDMG ?? 0) <= 2) {
      // TODO-QSP: dynamic text: His <<$dick_girth>> dick is too big for you, and you suffer a lot of stretching ...
      scene.text(`His ${((s as any).dick_girth ?? 0)} dick is too big for you, and you suffer a lot of stretching pain as it slams against your vaginal walls.`);
      ((s as any).pain ?? {})['vaginal'] = (((s as any).pain ?? {})['vaginal'] ?? 0) + (((s as any).vagDMG ?? 0));
      qspCall(s, 'arousal', 'vaginal', 30, 'sub', 'rough');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Continue', goto: ['abductionCustomer', 'abdCustomer-fuckDeep'] },
      ]);
    } else {
      // TODO-QSP: dynamic text: His <<$dick_girth>> dick is insanely big for you.
      scene.text(`His ${((s as any).dick_girth ?? 0)} dick is insanely big for you.`);
      scene.text('The tip of his cock even penetrates your cervix, or at least it seems like it to you. The pain is almost unbearable!');
      ((s as any).pain ?? {})['vaginal'] = (((s as any).pain ?? {})['vaginal'] ?? 0) + (((s as any).vagDMG ?? 0));
      ((s as any).pain ?? {})['cervix'] = (((s as any).pain ?? {})['cervix'] ?? 0) + (((s as any).vagDMG ?? 0));
      qspCall(s, 'arousal', 'vaginal', 30, 'sub', 'rough');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Continue', goto: ['abductionCustomer', 'abdCustomer-fuckDeep'] },
      ]);
    }
  }
  scene.build();
}

function enterAbdCustomerFuckRough(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal_funcs', 'stretch', 'vaginal', 2);
  qspCall(s, 'stat', '');
  (s as any).i = Math.floor(Math.random() * 5) + 1;
  scene.img(`images/locations/shared/abduction/sex/slavewhorefuckrough${((s as any).i ?? 0)}.mp4`);
  scene.text('The man takes you by your leash and positions your body as if it\'s just meat to be used.');
  scene.text('What comes next is an excruciatingly rough fuck that clearly shows he has no regard for all the pain you have to endure.');
  if (((s as any).vagDMG ?? 0) <= 0) {
    // TODO-QSP: dynamic text: Fortunately, his <<$dick_girth>> dick is not enough to cause you much pain. No m...
    scene.text(`Fortunately, his ${((s as any).dick_girth ?? 0)} dick is not enough to cause you much pain. No more than usual, anyway.`);
    qspCall(s, 'arousal', 'vaginal', 30, 'sub', 'bound');
    if (((s as any).charType ?? 0) === 'sadistic') {
      scene.actions([
        { label: 'Be silent', goto: ['abductionCustomer', 'abdCustomer-cum'] },
      ]);
    } else {
      scene.actions([
        { label: 'Be silent', goto: ['abductionCustomer', 'abdCustomer-cumGate'] },
      ]);
    }
  } else {
    if (((s as any).vagDMG ?? 0) <= 2) {
      // TODO-QSP: dynamic text: His <<$dick_girth>> dick is too big for you, and you suffer a lot of stretching ...
      scene.text(`His ${((s as any).dick_girth ?? 0)} dick is too big for you, and you suffer a lot of stretching pain as it slams against your vaginal walls.`);
      ((s as any).pain ?? {})['vaginal'] = (((s as any).pain ?? {})['vaginal'] ?? 0) + (((s as any).vagDMG ?? 0));
      qspCall(s, 'arousal', 'vaginal', 30, 'sub', 'bound', 'rough');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Continue', goto: ['abductionCustomer', 'abdCustomer-fuckDeep'] },
      ]);
    } else {
      // TODO-QSP: dynamic text: His <<$dick_girth>> dick is insanely big for you.
      scene.text(`His ${((s as any).dick_girth ?? 0)} dick is insanely big for you.`);
      scene.text('The tip of his cock even penetrates your cervix, or at least it seems like it to you. The pain is almost unbearable!');
      scene.text('He notices this too, realizing it\'s why you\'re groaning so loudly. Enjoying your suffering, he pushes his dick even deeper inside, and you squeal like a pig.');
      ((s as any).pain ?? {})['vaginal'] = (((s as any).pain ?? {})['vaginal'] ?? 0) + (((s as any).vagDMG ?? 0) * 2);
      ((s as any).pain ?? {})['cervix'] = (((s as any).pain ?? {})['cervix'] ?? 0) + (((s as any).vagDMG ?? 0) * 2);
      qspCall(s, 'arousal', 'vaginal', 30, 'sub', 'bound', 'rough');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Continue', goto: ['abductionCustomer', 'abdCustomer-fuckDeep'] },
      ]);
    }
  }
  scene.build();
}

function enterAbdCustomerFuckDeep(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
  qspCall(s, 'stat', '');
  (s as any).i = Math.floor(Math.random() * 5) + 1;
  scene.img(`images/locations/shared/abduction/sex/slavewhorefuckdeep${((s as any).i ?? 0)}.mp4`);
  // TODO-QSP: dynamic text: His member is <<$dick_girth>> and your vagina is unable to accommodate it.
  scene.text(`His member is ${((s as any).dick_girth ?? 0)} and your vagina is unable to accommodate it.`);
  if (((s as any).charType ?? 0) === 'sadistic') {
    scene.text('He doesn\'t care about that, even though he is obviously aware of it, and fucks you furiously hard.');
    // TODO-QSP: dynamic text: "How do like my <<$dick_girth>> cock inside you bitch? Is it deep enough for you...
    scene.text(`"How do like my ${((s as any).dick_girth ?? 0)} cock inside you bitch? Is it deep enough for you, or should I push a bit more? Do you feel me entering your cervix?"`);
    scene.text('He\'s obviously enjoying this a lot.');
  }
  scene.text('With every thrust of his dick deep inside your vagina, you feel as if it\'s your very cervix being penetrated.');
  scene.text('After about half an hour of deep vaginal banging, the man is about to cum.');
  if (((s as any).endPunishment ?? 0) === 1  ||  ((s as any).charType ?? 0) === 'sadistic') {
    scene.text('"I\'m going to feed you my cum now, you unruly fuck slave!"');
    scene.actions([
      { label: 'Be silent', goto: ['abductionCustomer', 'abdCustomer-cum'] },
    ]);
  } else {
    scene.actions([
      { label: 'Be silent', goto: ['abductionCustomer', 'abdCustomer-cumGate'] },
    ]);
  }
  scene.build();
}

function enterAbdCustomerCumGate(s: GameState, scene: SceneBuilder): void {
  if (((s as any).endPunishment ?? 0) === 1) {
    scene.text('"I\'m going to feed you my cum now, you unruly slave!"');
    scene.actions([
      { label: 'Be silent', goto: ['abductionCustomer', 'abdCustomer-cum'] },
    ]);
  } else {
    if (((s as any).buyout ?? 0) === 1) {
      scene.text('"You\'re going to be filled with my seed for the first time, so be sure to cherish the memory of this moment!"');
      scene.actions([
        { label: 'Be silent', goto: ['abductionCustomer', 'abdCustomer-cumAss'] },
      ]);
    } else {
      scene.text('"So where do you want it, bitch?"');
      qspCall(s, 'willpower', 'cum_inside', 'self');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Inside your pussy [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Inside your pussy [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'cum_inside', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
  }, goto: ['abductionCustomer', 'abdCustomer-cumPussy'] },
        ]);
      }
      qspCall(s, 'willpower', 'cum_inside_anal', 'self');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Inside your ass [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Inside your ass [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'cum_inside_anal', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
  }, goto: ['abductionCustomer', 'abdCustomer-cumAss'] },
        ]);
      }
      qspCall(s, 'willpower', 'swallow', 'self');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'In your mouth [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'In your mouth [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'swallow', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
  }, goto: ['abductionCustomer', 'abdCustomer-cumMouth'] },
        ]);
      }
      scene.actions([
        { label: 'Be silent', goto: ['abductionCustomer', 'abdCustomer-cum'] },
        { label: 'On your face', goto: ['abductionCustomer', 'abdCustomer-cumFace'] },
      ]);
    }
  }
  scene.build();
}

function enterAbdCustomerCum(s: GameState, scene: SceneBuilder): void {
  (s as any).cumRand = Math.floor(Math.random() * 100) + 1;
  if (((s as any).cumRand ?? 0) > 75  &&  ((s as any).cumRand ?? 0) <= 100) {
    scene.text('He decides to cum inside your pussy.');
    scene.actions([
      { label: 'Endure it', goto: ['abductionCustomer', 'abdCustomer-cumPussy'] },
    ]);
  } else {
    if (((s as any).cumRand ?? 0) > 50  &&  ((s as any).cumRand ?? 0) <= 75) {
      scene.text('He decides to cum inside your ass.');
      scene.actions([
        { label: 'Endure it', goto: ['abductionCustomer', 'abdCustomer-cumAss'] },
      ]);
    } else {
      if (((s as any).cumRand ?? 0) > 25  &&  ((s as any).cumRand ?? 0) <= 50) {
        scene.text('He decides to cum in your mouth.');
        scene.actions([
          { label: 'Endure it', goto: ['abductionCustomer', 'abdCustomer-cumMouth'] },
        ]);
      } else {
        scene.text('He decides to cum on your face.');
        scene.actions([
          { label: 'Endure it', goto: ['abductionCustomer', 'abdCustomer-cumFace'] },
        ]);
      }
    }
  }
  scene.build();
}

function enterAbdCustomerCumPussy(s: GameState, scene: SceneBuilder): void {
  (s as any).i = Math.floor(Math.random() * 5) + 1;
  scene.img(`images/locations/shared/abduction/sex/slavewhorecumpussy${((s as any).i ?? 0)}.mp4`);
  if (((s as any).vagDMG ?? 0) > 0) {
    // TODO-QSP: dynamic text: As he pumps his cum into your vagina, you feel the tip of his <<$dick_girth>> co...
    scene.text(`As he pumps his cum into your vagina, you feel the tip of his ${((s as any).dick_girth ?? 0)} cock at your cervix and even inside it.`);
    scene.text('His cum penetrates through the cervix directly into your womb, which causes a warm, yet painful sensation to flow through you.');
    ((s as any).pain ?? {})['cervix'] = (((s as any).pain ?? {})['cervix'] ?? 0) + (((s as any).vagDMG ?? 0));
    qspCall(s, 'stat', '');
  }
  if (((s as any).cumVol ?? 0) === 3) {
    // TODO-QSP: dynamic text: With his <<$dick_girth>> dick buried inside your pussy, the customer pumps his c...
    scene.text(`With his ${((s as any).dick_girth ?? 0)} dick buried inside your pussy, the customer pumps his cum inside you.`);
    scene.text('When he pulls out, some of it drips out of you.');
  } else {
    if (((s as any).cumVol ?? 0) === 4) {
      // TODO-QSP: dynamic text: With his <<$dick_girth>> dick buried deep inside your pussy, his tip touches you...
      scene.text(`With his ${((s as any).dick_girth ?? 0)} dick buried deep inside your pussy, his tip touches your cervix as he pumps your pussy full of his cum.`);
      scene.text('As he pulls his cock out, a large amount of the cum forcefully squirts out of you.');
    } else {
      if (((s as any).cumVol ?? 0) >= 5) {
        // TODO-QSP: dynamic text: With his <<$dick_girth>> dick buried very deep inside your pussy, his tip pushes...
        scene.text(`With his ${((s as any).dick_girth ?? 0)} dick buried very deep inside your pussy, his tip pushes against your cervix and even slides inside a little.`);
        scene.text('As he pumps his cum inside you, a lot of it shoots directly into your womb. It feels painful, but the warm sensation is nothing like what you\'ve felt before.');
        scene.text('When he pulls his cock out, his cum squirts out of your pussy.');
        ((s as any).pain ?? {})['cervix'] = (((s as any).pain ?? {})['cervix'] ?? 0) + (20);
        ((s as any).pain ?? {})['tummy'] = (((s as any).pain ?? {})['tummy'] ?? 0) + (40);
      } else {
        scene.text('The customer cums inside you. When he pulls his cock out, his cum slowly drips out of your pussy.');
      }
    }
  }
  qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
  ((s as any).stat ?? {})['vaginal'] = (((s as any).stat ?? {})['vaginal'] ?? 0) + (1);
  (s as any).cumnostd = 1;
  qspCall(s, 'cum_call', 'pussy', 'customer', 0, 0, ((s as any).spot ?? 0), ((s as any).svol ?? 0));
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', goto: ['abductionCustomer', 'abdCustomer-end'] },
  ]);
  scene.build();
}

function enterAbdCustomerCumAss(s: GameState, scene: SceneBuilder): void {
  (s as any).i = Math.floor(Math.random() * 5) + 1;
  scene.img(`images/locations/shared/abduction/sex/slavewhorecumass${((s as any).i ?? 0)}.mp4`);
  if (((s as any).assDMG ?? 0) > 0) {
    // TODO-QSP: dynamic text: You can feel his <<$dick_girth>> cock slamming against your intestinal wall as h...
    scene.text(`You can feel his ${((s as any).dick_girth ?? 0)} cock slamming against your intestinal wall as he cums inside your ass.`);
    scene.text('His cum fills you, and feels as if it\'s flowed right up to your stomach.');
    ((s as any).pain ?? {})['asshole'] = (((s as any).pain ?? {})['asshole'] ?? 0) + (((s as any).assDMG ?? 0));
    qspCall(s, 'stat', '');
  }
  if (((s as any).cumVol ?? 0) === 3) {
    // TODO-QSP: dynamic text: His <<$dick_girth>> member is buried in your intestines.
    scene.text(`His ${((s as any).dick_girth ?? 0)} member is buried in your intestines.`);
    if (((s as any).buyout ?? 0) === 1) {
      // TODO-QSP: dynamic text: As <<$bName>> shoots his load, you can feel the warmth spreading inside you…
      scene.text(`As ${((s as any).bName ?? 0)} shoots his load, you can feel the warmth spreading inside you…`);
    } else {
      scene.text('As he shoots his load, you can feel the warmth spreading inside you…');
    }
    scene.text('He pulls out and his cum slowly drips from your gaping hole.');
  } else {
    if (((s as any).cumVol ?? 0) === 4) {
      // TODO-QSP: dynamic text: His <<$dick_girth>> member is buried <<dick>> centimeters deep inside your intes...
      scene.text(`His ${((s as any).dick_girth ?? 0)} member is buried ${((s as any).dick ?? 0)} centimeters deep inside your intestines, sometimes even hitting your intestinal walls.`);
      if (((s as any).buyout ?? 0) === 1) {
        // TODO-QSP: dynamic text: As <<$bName>> shoots his load, you can feel a warmth spread inside you…
        scene.text(`As ${((s as any).bName ?? 0)} shoots his load, you can feel a warmth spread inside you…`);
      } else {
        scene.text('As he shoots his load, you can feel a warmth spread inside you…');
      }
      scene.text('He pulls out and his cum squirts out of your gaping hole.');
    } else {
      if (((s as any).cumVol ?? 0) >= 5) {
        if (((s as any).buyout ?? 0) === 1) {
          // TODO-QSP: dynamic text: <<$bName>>'s <<$dick_girth>> member is buried <<dick>> centimeters deep inside y...
          scene.text(`${((s as any).bName ?? 0)}'s ${((s as any).dick_girth ?? 0)} member is buried ${((s as any).dick ?? 0)} centimeters deep inside your intestines, with each thrust forcefully hitting your intestinal walls.`);
        } else {
          // TODO-QSP: dynamic text: The customer's <<$dick_girth>> member is buried <<dick>> centimeters deep inside...
          scene.text(`The customer's ${((s as any).dick_girth ?? 0)} member is buried ${((s as any).dick ?? 0)} centimeters deep inside your intestines, with each thrust forcefully hitting your intestinal walls.`);
        }
        scene.text('You feel an increasing amount of pressure and stretching pain as he pumps your intestines full of cum.');
        scene.text('When he pulls his cock out, cum squirts out of your ravaged anus.');
        ((s as any).pain ?? {})['tummy'] = (((s as any).pain ?? {})['tummy'] ?? 0) + (20);
        qspCall(s, 'stat', '');
      } else {
        if (((s as any).buyout ?? 0) === 1) {
          // TODO-QSP: dynamic text: <<$bName>> cums inside you. When he pulls his cock out, his cum slowly leaks out...
          scene.text(`${((s as any).bName ?? 0)} cums inside you. When he pulls his cock out, his cum slowly leaks out of your gaping anus.`);
        } else {
          scene.text('The customer cums inside you. When he pulls his cock out, his cum slowly leaks out of your gaping anus.');
        }
      }
    }
  }
  if (((s as any).buyout ?? 0) === 1) {
    qspCall(s, 'npcgeneratec', '', 0, ((s as any).bName ?? 0), Math.floor(Math.random() * 17) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
  } else {
    qspCall(s, 'npcgeneratec', '', 0, 'customer', Math.floor(Math.random() * 17) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
  }
  qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
  (s as any).cumnostd = 1;
  qspCall(s, 'cum_call', 'anus', ((s as any).boy ?? 0), 0);
  ((s as any).stat ?? {})['anal'] = (((s as any).stat ?? {})['anal'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  if (((s as any).buyout ?? 0) === 1) {
    scene.actions([
      { label: 'Continue', goto: ['abductionCustomer', 'abdCustomer-buyout4'] },
    ]);
  } else {
    scene.actions([
      { label: 'Continue', goto: ['abductionCustomer', 'abdCustomer-end'] },
    ]);
  }
  scene.build();
}

function enterAbdCustomerCumMouth(s: GameState, scene: SceneBuilder): void {
  (s as any).i = Math.floor(Math.random() * 5) + 1;
  scene.img(`images/locations/shared/abduction/sex/slavewhorecummouth${((s as any).i ?? 0)}.mp4`);
  if (((s as any).throatDMG ?? 0) > 0) {
    // TODO-QSP: dynamic text: Your aching throat is penetrated again as he buries his <<$dick_girth>> cock to ...
    scene.text(`Your aching throat is penetrated again as he buries his ${((s as any).dick_girth ?? 0)} cock to the hilt inside you.`);
    scene.text('When he shoots his load, you feel his member painfully stretching your already sore throat.');
    ((s as any).pain ?? {})['throat'] = (((s as any).pain ?? {})['throat'] ?? 0) + (((s as any).throatDMG ?? 0));
    qspCall(s, 'stat', '');
  }
  if (((s as any).cumVol ?? 0) === 3) {
    scene.text('His cum fills your throat.');
  } else {
    if (((s as any).cumVol ?? 0) === 4) {
      scene.text('His cum fills your throat and trickles down into your stomach.');
      scene.text('You feel very full and bloated.');
      (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (50);
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (40);
    } else {
      if (((s as any).cumVol ?? 0) >= 5) {
        scene.text('You\'re being pumped full of cum like a slut. He completely fills your stomach and throat.');
        scene.text('You probably won\'t need another meal today…');
        (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (100);
        (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (90);
      } else {
        scene.text('The customer shoots his cum into your mouth and down your throat.');
      }
    }
  }
  (s as any).mouth = ((s as any).mouth ?? 0) + (1);
  (s as any).cumnostd = 1;
  qspCall(s, 'cum_call', 'mouth', 'customer');
  ((s as any).stat ?? {})['throat'] = (((s as any).stat ?? {})['throat'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', goto: ['abductionCustomer', 'abdCustomer-end'] },
  ]);
  scene.build();
}

function enterAbdCustomerCumFace(s: GameState, scene: SceneBuilder): void {
  (s as any).i = Math.floor(Math.random() * 5) + 1;
  scene.img(`images/locations/shared/abduction/sex/slavewhorecumface${((s as any).i ?? 0)}.mp4`);
  // TODO-QSP: dynamic text: He takes his <<$dick_girth>> dick and points it towards your face.
  scene.text(`He takes his ${((s as any).dick_girth ?? 0)} dick and points it towards your face.`);
  if (((s as any).cumVol ?? 0) === 3) {
    // TODO-QSP: dynamic text: A <<$cumType>> amount of cum lands all over your face.
    scene.text(`A ${((s as any).cumType ?? 0)} amount of cum lands all over your face.`);
  } else {
    if (((s as any).cumVol ?? 0) === 4) {
      // TODO-QSP: dynamic text: A <<$cumType>> amount of cum lands all over your face. Some even lands in your h...
      scene.text(`A ${((s as any).cumType ?? 0)} amount of cum lands all over your face. Some even lands in your hair.`);
    } else {
      if (((s as any).cumVol ?? 0) >= 5) {
        // TODO-QSP: dynamic text: A <<$cumType>> amount of cum lands all over your face and hair.
        scene.text(`A ${((s as any).cumType ?? 0)} amount of cum lands all over your face and hair.`);
        scene.text('There\'s so much that you have a solid layer covering your face.');
      } else {
        // TODO-QSP: dynamic text: A <<$cumType>> amount of cum is splattered across your face and in your mouth.
        scene.text(`A ${((s as any).cumType ?? 0)} amount of cum is splattered across your face and in your mouth.`);
      }
    }
  }
  scene.text('The customer seems content and looks at you in satisfaction.');
  (s as any).mouth = ((s as any).mouth ?? 0) + (1);
  (s as any).cumnostd = 1;
  qspCall(s, 'cum_call', 'face', 'customer');
  ((s as any).stat ?? {})['mouth'] = (((s as any).stat ?? {})['mouth'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', goto: ['abductionCustomer', 'abdCustomer-end'] },
  ]);
  scene.build();
}

function enterAbdCustomerEnd(s: GameState, scene: SceneBuilder): void {
  if (((s as any).endPunishment ?? 0) === 1) {
    scene.text('The customer goes to the bathroom before calling for your master.');
    scene.actions([
      { label: 'Continue', goto: ['abductionCustomer', 'abdCustomer-endPunishment'] },
    ]);
  } else {
    if (((s as any).buyout ?? 0) === 1) {
      // TODO-QSP: dynamic text: <<$bName>> leaves you lying on the ground, his cum still dripping out of your as...
      scene.text(`${((s as any).bName ?? 0)} leaves you lying on the ground, his cum still dripping out of your ass, and calls for your master.`);
      scene.actions([
        { label: 'Continue', goto: ['abductionCustomer', 'abdCustomer-endPunishment'] },
      ]);
    } else {
      scene.text('The customer goes to the bathroom, and you are immediately taken back to the basement.');
      scene.actions([
        { label: 'Go back', goto: ['abduction', 'abdRoom'] },
      ]);
    }
  }
  scene.build();
}

function enterAbdCustomerEndPunishment(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/abduction/sex/kneelingslave1.jpg');
  // TODO-QSP: iif(buyout = 1, $bName, 'The customer') + ' tells your master how unruly you were and that further t...
  scene.text('Kneeling, you look up at your master only to see his grim face. You can tell something bad will happen.');
  scene.actions([
    { label: 'Back to the basement', goto: ['abduction', 'abdFailedCustomer'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'abdCustomerGate':
      enterAbdCustomerGate(s, scene);
      break;
    case 'abdCustomerGateBuyout':
      enterAbdCustomerGateBuyout(s, scene);
      break;
    case 'abdCustomerGo':
      enterAbdCustomerGo(s, scene);
      break;
    case 'abdCustomer':
      enterAbdCustomer(s, scene);
      break;
    case 'abdCustomer-buyout1':
      enterAbdCustomerBuyout1(s, scene);
      break;
    case 'abdCustomer-buyout2':
      enterAbdCustomerBuyout2(s, scene);
      break;
    case 'abdCustomer-buyout3':
      enterAbdCustomerBuyout3(s, scene);
      break;
    case 'abdCustomer-buyout4':
      enterAbdCustomerBuyout4(s, scene);
      break;
    case 'abdCustomer-buyoutLeave':
      enterAbdCustomerBuyoutLeave(s, scene);
      break;
    case 'abdCustomer-virgin1':
      enterAbdCustomerVirgin1(s, scene);
      break;
    case 'abdCustomer-virgin2':
      enterAbdCustomerVirgin2(s, scene);
      break;
    case 'abdCustomer-virgin3':
      enterAbdCustomerVirgin3(s, scene);
      break;
    case 'abdCustomer-virgin4':
      enterAbdCustomerVirgin4(s, scene);
      break;
    case 'abdCustomer-virgin5':
      enterAbdCustomerVirgin5(s, scene);
      break;
    case 'abdCustomer-virgin6':
      enterAbdCustomerVirgin6(s, scene);
      break;
    case 'abdCustomer-virgin7':
      enterAbdCustomerVirgin7(s, scene);
      break;
    case 'abdCustomer-virgin8':
      enterAbdCustomerVirgin8(s, scene);
      break;
    case 'abdCustomer-virgin9':
      enterAbdCustomerVirgin9(s, scene);
      break;
    case 'abdCustomer-virgin10':
      enterAbdCustomerVirgin10(s, scene);
      break;
    case 'abdCustomer-unzip':
      enterAbdCustomerUnzip(s, scene);
      break;
    case 'abdCustomer-show':
      enterAbdCustomerShow(s, scene);
      break;
    case 'abdCustomer-suckTip':
      enterAbdCustomerSuckTip(s, scene);
      break;
    case 'abdCustomer-suckForceself':
      enterAbdCustomerSuckForceself(s, scene);
      break;
    case 'abdCustomer-suckForced':
      enterAbdCustomerSuckForced(s, scene);
      break;
    case 'abdCustomer-suckDeep':
      enterAbdCustomerSuckDeep(s, scene);
      break;
    case 'abdCustomer-fuck':
      enterAbdCustomerFuck(s, scene);
      break;
    case 'abdCustomer-decide':
      enterAbdCustomerDecide(s, scene);
      break;
    case 'abdCustomer-beg':
      enterAbdCustomerBeg(s, scene);
      break;
    case 'abdCustomer-fuckAnal':
      enterAbdCustomerFuckAnal(s, scene);
      break;
    case 'abdCustomer-fuckAnalRough':
      enterAbdCustomerFuckAnalRough(s, scene);
      break;
    case 'abdCustomer-fuckAnalDeep':
      enterAbdCustomerFuckAnalDeep(s, scene);
      break;
    case 'abdCustomer-fuckNormal':
      enterAbdCustomerFuckNormal(s, scene);
      break;
    case 'abdCustomer-fuckRough':
      enterAbdCustomerFuckRough(s, scene);
      break;
    case 'abdCustomer-fuckDeep':
      enterAbdCustomerFuckDeep(s, scene);
      break;
    case 'abdCustomer-cumGate':
      enterAbdCustomerCumGate(s, scene);
      break;
    case 'abdCustomer-cum':
      enterAbdCustomerCum(s, scene);
      break;
    case 'abdCustomer-cumPussy':
      enterAbdCustomerCumPussy(s, scene);
      break;
    case 'abdCustomer-cumAss':
      enterAbdCustomerCumAss(s, scene);
      break;
    case 'abdCustomer-cumMouth':
      enterAbdCustomerCumMouth(s, scene);
      break;
    case 'abdCustomer-cumFace':
      enterAbdCustomerCumFace(s, scene);
      break;
    case 'abdCustomer-end':
      enterAbdCustomerEnd(s, scene);
      break;
    case 'abdCustomer-endPunishment':
      enterAbdCustomerEndPunishment(s, scene);
      break;
    default:
      enterAbdCustomerGate(s, scene);
      break;
  }
}

export const abductionCustomer: LocationDef = {
  name: 'abductionCustomer',
  title: 'Your master approaches you. "Hello, slave."',
  region: 'other',
  description: ['Your master approaches you. "Hello, slave."'],
  enter: enter,
};
