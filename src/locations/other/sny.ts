import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).sound_settings ?? 0)?.['music_off'] === 0) {
    (s as any).volume = 100;
    (s as any).music_loop = 1;
  }
  scene.img('images/locations/pavlovsk/resident/dimkahome/newyear/tusa3.jpg');
  scene.text('The whole class went to Dimka\'s home. He has house music playing and lots of alcohol to drink. You go up to a table with a couple of the other girls and get a glass of vodka. Soon, everyone is drinking and celebrating the new year.');
  qspCall(s, 'willpower', 'drink', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse to drink [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse to drink [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/dimkahome/newyear/tusa3.jpg');
    scene.text('You just hold the vodka and pretend to drink before setting it back down.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['sny', '4'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Drink', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'drugs', 'alcohol', 'vodka', 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/dimkahome/newyear/drunk.jpg');
    scene.text('You drink down the shot of vodka.');
    scene.actions([
      { label: 'Nostrovia!', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['sny', '4'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter4(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/dimkahome/newyear/tusa3.jpg');
  scene.text('Boys and girls start to relax and break up into groups to talk. Someone pours more vodka into a glass and hands it to you.');
  qspCall(s, 'willpower', 'drink', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse to drink [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse to drink [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/dimkahome/newyear/tusa3.jpg');
    scene.text('You turn down the offered glass.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['sny', '5'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Drink', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'drugs', 'alcohol', 'vodka', 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/dimkahome/newyear/drunk.jpg');
    scene.text('You down the glass of vodka.');
    scene.actions([
      { label: 'Nostrovia!', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['sny', '5'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter5(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/dimkahome/newyear/tusa5.jpg');
  scene.text('Albina goes into the center of the room and begins to dance. She is a very talented dancer and knows how to move her body. She is quickly joined by Katja and her sister Vicky. While you are watching the girls, someone hands you another glass of vodka.');
  qspCall(s, 'willpower', 'drink', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse to drink [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse to drink [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/dimkahome/newyear/tusa5.jpg');
    scene.text('You turn down the offered glass.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['sny', '6'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Drink', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'drugs', 'alcohol', 'vodka', 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/dimkahome/newyear/drunk.jpg');
    scene.text('You drink down the shot of vodka and feel it burn all the way down.');
    scene.actions([
      { label: 'Nostrovia!', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['sny', '6'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter6(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/dimkahome/newyear/tusa6.jpg');
  scene.text('Albina and Katja are dancing face to face in the middle of the room. Suddenly, Albina kisses Katja on the lips. The room erupts into howling kids encouraging them to continuing. Someone hands you another glass of vodka.');
  qspCall(s, 'willpower', 'drink', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse to drink [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse to drink [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/dimkahome/newyear/tusa6.jpg');
    scene.text('You turn down the offered glass.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['sny', '7'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Drink', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'drugs', 'alcohol', 'vodka', 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/dimkahome/newyear/drunk.jpg');
    scene.text('You drink down the shot of vodka and feel it burn all the way down.');
    scene.actions([
      { label: 'Nostrovia!', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['sny', '7'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter7(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).alko ?? 0) >= 10) {
    scene.img('images/locations/pavlovsk/resident/dimkahome/newyear/vomit.jpg');
    scene.text('You start feeling dizzy and sick to your stomach. You mutter something about throwing up, and Dimka helps you rush to the toilet.');
    scene.actions([
      { label: 'Barf', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (60 * ((s as any).alko ?? 0));
    qspCall(s, 'stat', '');
    if ((!((s as any).NosovRevenge ?? 0))) {
      (s as any).partyPantyCum = 1;
      qspCall(s, 'npcgeneratec', '', 0, 'Stranger', Math.floor(Math.random() * 28) + 18);
      qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
      scene.img('images/locations/pavlovsk/resident/dimkahome/newyear/vom.jpg');
      scene.text('You wake up on the bed in Dimka\'s room. Your head hurts, your whole body aches and you feel a wet spot on your panties. Turning your head, you see some sort of white mucus. You poke a finger in the mucus and hold the finger to your nose. The pungent smell of sperm hits you. At this moment, Dimka enters the room. Seeing your panties smeared with sperm, he begins to laugh "Dammit. I thought no one else would get you before I got back, but hell, it looks like someone already fucked you."');
      qspCall(s, 'cum_call', 'clothes', ((s as any).npcID ?? 0));
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Leave', goto: ['pav_residential', ''] },
      ]);
    } else {
      if (((s as any).NosovRevenge ?? 0) === 1) {
        scene.img(`${qspFunc(s, 'tattoo_management', 'pussy_image', 6)}`);
        scene.text('You wake up lying on a chair that is fully reclined. With difficulty, you raise your head and look around at the place. You are unfamiliar with it. You feel a burning sensation in your pubic area. Looking down, you see your panties have been pulled down to expose your pussy. Just above it is a tattoo.');
        if (((s as any).pcs_tattoos ?? 0)?.['pussy'] !== 0) {
          scene.text('It looks like your old tattoo has been covered up with a new one.');
        }
        qspCall(s, 'tattoo_management', 'add', 'pussy', 6);
        (s as any).pcs_pubes = 0;
        qspCall(s, 'stat', '');
        scene.text('Looking closer, you read the word SLUT. On top of the letters lies a tattooed girl in stockings. You finally notice the man cleaning his tattoo station up, and you demand, "What the hell? Why did you tattoo me?" The man rolls his eyes. "Oh God, you came in drunk and then wonder why. Here is a sketch of the tattoo and your signature on the release form." You looks at the signature. Indeed, it is yours.');
        scene.actions([
          { label: 'Leave', goto: ['pav_residential', ''] },
        ]);
      }
    }
  } },
    ]);
  } else {
    if (((s as any).alko ?? 0) >= 6) {
      scene.img('images/locations/pavlovsk/resident/dimkahome/newyear/tit.jpg');
      scene.text('You are quite drunk and not thinking straight. Someone\'s hand pulls you into the center of the room with the dancing boys and girls. Dimka suddenly pulls your top down, exposing your breasts to everyone in the room. You sluggishly pull your top back up. Dimka takes you by the hand and drags you out of the room.');
      scene.actions([
        { label: 'Hey! Where are you dragging me?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['sny', '10'] },
      ]);
    } else {
      if (((s as any).alko ?? 0) > 3) {
        scene.img('images/locations/pavlovsk/resident/dimkahome/newyear/alb.jpg');
        if ((!((s as any).fedorKozlovQW ?? 0))) {
          scene.text('You are a little drunk but having fun when you notice Albina sitting on the couch and kissing Ivan while Fedor paws at her breasts. Looking around you some more, you notice that Katja is nowhere to be seen.');
        } else {
          scene.text('You are a little drunk but having fun when you notice Albina sitting on the couch and kissing Ivan. Looking around you some more, you notice that Katja is nowhere to be seen.');
        }
        scene.actions([
          { label: 'Search for Katja', handler: (st: GameState) => {
    (s as any).SeeKatBang = 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/dimkahome/newyear/sex/kat.jpg');
    scene.text('You begin to walk around the apartment looking for Katja. Behind one of the doors, you hear a woman moaning and the creaking of a bed. You open the door just a little to peek inside. On the edge of the bed, Katja is on her knees with her head against the mattress. Slavik stands behind her and is hammering her, his cock going balls deep in her, with the slapping of flesh barely heard over Katja\'s moaning. Slavik finally growls and pumps his sperm inside of her. As he finishes, he leans over her and whispers, "Katja, I\'ve been in love with you for a long time, do not think I am just using you." Katja mutters something and seems completely out of it.');
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go into the room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['sny', '8'] },
    ]);
  } },
        ]);
      } else {
        if (((s as any).alko ?? 0) > 0) {
          scene.img('images/locations/pavlovsk/resident/dimkahome/newyear/idi.jpg');
          scene.text('You are a bit tipsy and feel fairly relaxed at the party. There\'s some vodka shots lined up, so you could have another drink, or maybe it\'s time to head home?');
          qspCall(s, 'willpower', 'drink', 'resist');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
  }, goto: ['pav_residential', ''] },
            ]);
          }
          scene.actions([
            { label: 'Drink', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'drugs', 'alcohol', 'vodka', 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/dimkahome/newyear/drunk.jpg');
    scene.text('You down the shot of vodka and feel its warmth in your chest.');
    scene.actions([
      { label: 'Nostrovia!', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['sny', '7'] },
    ]);
  } },
          ]);
        } else {
          scene.img('images/locations/pavlovsk/resident/dimkahome/newyear/idi.jpg');
          scene.text('You are quite sober looking at these raging idiots that surround you.');
          scene.actions([
            { label: 'Leave', goto: ['pav_residential', ''] },
          ]);
        }
      }
    }
  }
  scene.build();
}

function enter8(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/dimkahome/newyear/tusa8.jpg');
  scene.text('Back in the main room, you see that most continue to drink and dance. Albina, Ivan and Fedor are nowhere to be seen anymore. Some of the girls are getting wild in the middle of the room. Christina even pulls down her pants, showing off her bare ass.');
  scene.actions([
    { label: 'Search for Albina', handler: (st: GameState) => {
    (s as any).seeAlbinaFuck = 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/dimkahome/newyear/alb.jpg');
    if ((!((s as any).fedorKozlovQW ?? 0))) {
      scene.text('You begin to walk around the apartment in search of Albina. Behind one of the doors, you hear a woman moaning and a creaking bed. Peeking in the door, you see Fedor and Ivan fucking Albina hard. Albina is covered in sweat with smeared makeup on her face and is letting out muffled moans or groans - it is hard to tell which. Fedor has his cock stuffed in her mouth, while Ivan is taking her from behind. Judging by the height and angle, it looks like he is fucking her in the ass and just tearing it up.');
    } else {
      scene.text('You begin to walk around the apartment in search of Albina. Behind one of the doors, you hear a woman moaning and a creaking bed. Peeking in the door, you see Lazar and Ivan fucking Albina hard. Albina is covered in sweat with smeared makeup on her face and is letting out muffled moans or groans - it is hard to tell which. Lazar has his cock stuffed in her mouth, while Ivan is taking her from behind. Judging by the height and angle, it looks like he is fucking her in the ass and just tearing it up.');
    }
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go into the room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['sny', '9'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter9(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/dimkahome/newyear/tusa9.jpg');
  scene.text('Virtually everyone is passed out on the floor, some in various states of undress. Dimka comes over to you. "And you\'re still on your feet? Good for you, the others have already left or passed out, let\'s go, I need you to help me with something."');
  qspCall(s, 'willpower', 'misc', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'I have to go now [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'I have to go now [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('You tell Dimka, you have to leave.');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Let\'s go', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['sny', '10'] },
  ]);
  scene.build();
}

function enter10(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/kiss/kiss1.jpg');
  scene.text('He takes you into another room. Once the two of you are alone, Dimka begins to paw at your chest and gives you a long, slobbery kiss.');
  if (((s as any).fedorKozlovQW ?? 0) >= 10) {
    scene.actions([
      { label: 'Push him away', goto: ['FedorMisc', 'Dimka Party'] },
    ]);
  } else {
    if (((s as any).fedorKozlovQW ?? 0) === -15) {
      scene.actions([
        { label: 'Push him away', goto: ['FedorMisc', 'Dimka Party 2'] },
      ]);
    } else {
      if (((s as any).NosovRevenge ?? 0) === 1  ||  ((s as any).dimaFilm ?? 0) !== 1) {
        scene.actions([
          { label: 'Push him away', handler: (st: GameState) => {
    qspCall(st, 'sny', 'no');
  } },
        ]);
      }
    }
  }
  scene.actions([
    { label: 'Kiss him', goto: ['sny', 'kiss'] },
  ]);
  scene.build();
}

function enterKiss(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A1');
  scene.img('images/locations/pavlovsk/resident/dimkahome/newyear/sex/pett.jpg');
  scene.text('You kiss Dimka, and he slowly undresses you down to your underwear. He gently wraps his hands around you, then sits down on the arm of the couch and pulls you down till you are leaning back against him. His hand reaches around, and he starts rubbing your clit with his fingers.');
  qspCall(s, 'arousal', 'kiss', 5);
  qspCall(s, 'arousal', 'foreplay', (-5));
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'wait', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/dimkahome/newyear/sex/pett2.jpg');
    // TODO-QSP: dynamic text: After he rubs your clit, you start moaning. You feel your pussy getting wet, and...
    scene.text(`After he rubs your clit, you start moaning. You feel your pussy getting wet, and he can feel your wetness through your panties after several minutes of this. He gets up and pulls you around to the front of the couch, turning you to face the couch with your back to him. He'+ iif($pantyworntype ! 'none', ' pulls down your panties and ', ')+'pushes you down on your knees, bending you over till your body is resting on the couch. He slips his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock into your wet pussy and starts fucking you slow and gentle.`);
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'arousal', 'foreplay', (-5));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'wait', handler: (st: GameState) => {
    ((s as any).npc_had_sex ?? {})['A1'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/dimkahome/newyear/sex/fuck.jpg');
    qspCall(s, 'dinSex', 'wear_condom');
    qspCall(s, 'dinsex', 'vaginal_sex', 10);
    scene.text('Suddenly, Dimka\'s friend Gosha comes into the room and sits down next to you on the couch. He pulls out his dick and starts jerking off while he watches Dimka fuck you.');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck him', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A127', 'a');
    ((s as any).npc_had_sex ?? {})['A4'] = 1;
    if (((s as any).protect ?? 0) === 1) {
      (s as any).condomDima = 1;
    }
    ((s as any).stat ?? {})['gangbang_count'] = (((s as any).stat ?? {})['gangbang_count'] ?? 0) + (1);
    scene.img('images/shared/sex/group/gang23.jpg');
    // TODO-QSP: dynamic text: You wrap your lips around Gosha's <<dick1>>cm <<$dick_girth1>> dick and start su...
    scene.text(`You wrap your lips around Gosha's ${((s as any).dick1 ?? 0)}cm ${((s as any).dick_girth1 ?? 0)} dick and start sucking it.`);
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID1 ?? 0), 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck', handler: (st: GameState) => {
    scene.img('images/shared/sex/blowjob/fa2.jpg');
    scene.text('You suck on Gosha\'s dick while Dimka fucks your pussy from behind. After a while, Gosha takes his dick out of your mouth, and a jet of sperm hits you in the face. Several more spurts join the first, splattering your face with his cum.');
    qspCall(s, 'arousal', 'vaginal', 5, ((s as any).npcID ?? 0), 'sub', 'group');
    qspCall(s, 'arousal', 'bj', (-5), ((s as any).npcID1 ?? 0), 'sub', 'group');
    qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0));
    qspCall(s, 'stat', '');
    if (((s as any).condomDima ?? 0) === 1) {
      scene.actions([
        { label: 'Further', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0));
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/dimkahome/newyear/sex/cond.jpg');
    scene.text('A few moments later, Dimka pulls out of you, takes off his condom and squeezes out his cum on your face.');
    scene.actions([
      { label: 'Wipe your eyes', goto: ['sny', 'end'] },
    ]);
  } },
      ]);
    } else {
      if ((!((s as any).condomDima ?? 0))) {
        scene.actions([
          { label: 'Further', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0));
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/facial/facial22.jpg');
    scene.text('A few moments later, Dimka pulls out of you and walks around to your face. He jerks his dick a couple of times, and then it starts spewing sperm all over your face, mixing with Gosha\'s, covering most of your face between the two of them.');
    scene.actions([
      { label: 'Wipe your eyes', goto: ['sny', 'end'] },
    ]);
  } },
        ]);
      }
    }
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

function enterNo(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  if (((s as any).alko ?? 0) < 6) {
    qspCall(s, 'willpower', 'kiss', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Push him away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Push him away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('You push yourself from Dimka. "Hey! Beat it! Are you crazy or something?"');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Give in', handler: (st: GameState) => {
    scene.text('You want to push Dimka away, but your soaking wet pussy and burning desire to get fucked make you give in despite your better judgment.');
    scene.actions([
      { label: 'Kiss him', goto: ['sny', 'kiss'] },
    ]);
  } },
    ]);
  } else {
    scene.text('In your drunken state, you mutter something unintelligible.');
    scene.actions([
      { label: 'Kiss him', goto: ['sny', 'kiss'] },
    ]);
  }
  scene.build();
}

function enterEnd(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).SNYnoseGang = ((s as any).SNYnoseGang ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/cum/facial/facial\'+rand(1, 23)+\'.jpg');
  scene.text('Having wiped cum from your eyes, you see Dimka walk over to the table and take out a hidden camera. He stops the recording and looks at his friend, "Hey Gosha, the vid came out perfect."');
  if ((!((s as any).DimaRudeQW ?? 0))) {
    (s as any).DimaRudeQW = ((s as any).DimaRudeQW ?? 0) + (1);
  }
  if ((!((s as any).dimaFilm ?? 0))) {
    (s as any).dimaFilm = 1;
  }
  if (((s as any).NosovRevenge ?? 0) === 1) {
    (s as any).NosovRevenge = 2;
    (s as any).daynosovrevenge = ((s as any).daystart ?? 0);
    scene.text('Dimka turns to you, "Well, slut, you sure fucked up this time."');
  }
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
  }, goto: ['pav_residential', ''] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case '3':
      enter3(s, scene);
      break;
    case '4':
      enter4(s, scene);
      break;
    case '5':
      enter5(s, scene);
      break;
    case '6':
      enter6(s, scene);
      break;
    case '7':
      enter7(s, scene);
      break;
    case '8':
      enter8(s, scene);
      break;
    case '9':
      enter9(s, scene);
      break;
    case '10':
      enter10(s, scene);
      break;
    case 'kiss':
      enterKiss(s, scene);
      break;
    case 'no':
      enterNo(s, scene);
      break;
    case 'end':
      enterEnd(s, scene);
      break;
    default:
      enter3(s, scene);
      break;
  }
}

export const sny: LocationDef = {
  name: 'sny',
  title: 'The whole class went to Dimka\'s home. He has house music pla',
  region: 'other',
  description: ['The whole class went to Dimka\'s home. He has house music playing and lots of alcohol to drink. You go up to a table with a couple of the other girls and get a glass of vodka. Soon, everyone is drinking and celebrating the new year.'],
  enter: enter,
};
