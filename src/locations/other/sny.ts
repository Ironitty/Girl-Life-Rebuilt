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
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse to drink', handler: (st: GameState) => {
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
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse to drink', handler: (st: GameState) => {
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
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse to drink', handler: (st: GameState) => {
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
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse to drink', handler: (st: GameState) => {
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
    if (((s as any).NosovRevenge ?? 0) === 0) {
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
      scene.img(`${qspFunc(s, '\'tattoo_management\'', '\'pussy_image\'', 6)}`);
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
  } },
    ]);
  } else {
    scene.img('images/locations/pavlovsk/resident/dimkahome/newyear/tit.jpg');
    scene.text('You are quite drunk and not thinking straight. Someone\'s hand pulls you into the center of the room with the dancing boys and girls. Dimka suddenly pulls your top down, exposing your breasts to everyone in the room. You sluggishly pull your top back up. Dimka takes you by the hand and drags you out of the room.');
    if (((s as any).alko ?? 0) > 3) {
      scene.img('images/locations/pavlovsk/resident/dimkahome/newyear/alb.jpg');
      if (((s as any).fedorKozlovQW ?? 0) === 0) {
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
      scene.img('images/locations/pavlovsk/resident/dimkahome/newyear/idi.jpg');
      scene.text('You are a bit tipsy and feel fairly relaxed at the party. There\'s some vodka shots lined up, so you could have another drink, or maybe it\'s time to head home?');
      qspCall(s, 'willpower', 'drink', 'resist');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Leave', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
  }, goto: ['pav_residential', ''] },
        ]);
      }
      scene.img('images/locations/pavlovsk/resident/dimkahome/newyear/idi.jpg');
      scene.text('You are quite sober looking at these raging idiots that surround you.');
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
        { label: 'Leave', goto: ['pav_residential', ''] },
      ]);
    }
    scene.actions([
      { label: 'Hey! Where are you dragging me?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['sny', '10'] },
    ]);
  }
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
