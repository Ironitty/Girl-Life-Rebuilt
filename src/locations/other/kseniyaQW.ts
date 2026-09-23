import { qspCall, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterEvent1(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'public_outdoors';
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).exhibitionQW = 1;
  if (((s as any).trait_vars ?? 0)?.['exhibitionist'] < 1) {
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['exhibitionist_exp'] = Math.max(((s as any).trait_vars ?? 0)?.['exhibitionist_exp'], 10);
    qspCall(s, 'traits', 'level', 'exhibitionist', 1);
  }
  qspCall(s, 'stat', '');
  scene.text('<center><b>Woman</b></center>');
  scene.img('images/locations/shared/park/ksenya/ksenya1.jpg');
  if (String((s as any).locArgs?.[1] ?? '') === 1) {
    scene.text('As you wander through the park you see someone in a field, who waves you over. As you get closer you realize it is a pretty looking woman of some kind of Asian descent, she gives you an enigmatic smile then runs off.');
  } else {
    scene.text('While searching for a place to expose yourself, you catch sight of a woman between some tall stalks of grass in the corner of your eye. Although it is difficult to see her face, you can see her large chest, and she appears to be a pretty looking woman of some kind of Asian descent. When you finally decide to meet her, you discover that she has already disappeared.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish walk', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterEvents(s: GameState, scene: SceneBuilder): void {
  if (((s as any).exhibitionQW ?? 0) === 1) {
    scene.actions([
      { label: 'Find the flashing woman', handler: (st: GameState) => {
    if (((st as any).hour ?? 0) > 9  &&  ((st as any).hour ?? 0) <= 18  &&  (!(Math.floor(Math.random() * 4) + 0))) {
      qspGoto(st, 'kseniyaQW', 'event2');
    } else {
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      scene.text('You look around the park but can\'t find her.');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
      ]);
    }
  } },
    ]);
  } else {
    if (((s as any).exhibitionQW ?? 0) === 2) {
      scene.actions([
        { label: 'Search for Ksenya', handler: (st: GameState) => {
    if (((st as any).hour ?? 0) > 9  &&  ((st as any).hour ?? 0) <= 18  &&  (!(Math.floor(Math.random() * 4) + 0))) {
      qspGoto(st, 'kseniyaQW', 'event3');
    } else {
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      scene.text('You look around the park but can\'t find her.');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
      ]);
    }
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterEvent2(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'public_outdoors';
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).exhibitionQW = 2;
  if (((s as any).trait_vars ?? 0)?.['exhibitionist'] < 2) {
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['exhibitionist_exp'] = Math.max(((s as any).trait_vars ?? 0)?.['exhibitionist_exp'], 50);
    qspCall(s, 'traits', 'level', 'exhibitionist', 2);
  }
  qspCall(s, 'stat', '');
  scene.text('<center><b>ksenya</b></center>');
  scene.img('images/locations/shared/park/ksenya/ksenya2.jpg');
  scene.text('While looking for the flashing woman, you find her kneeling near some tall grass. Without thinking, you walk up to her.');
  scene.text('"Hello" you say.');
  scene.text('This causes her to jump a tad. "Oh, Hi" she says covering her nipples with her hands. "I\'m Ksenya." She stands up and offers a hand. "I\'ve seen you before" she replies. "Flashing people around the park here. It\'s really nice to come across someone who likes to flaunt what they got" she jokes. "Hey, um, I was wondering if you could help me with some pictures…, um." Since she didn\'t ask your name, she is confused.');
  // TODO-QSP: dynamic text: You realize her mistake and say, "I''m <<$pcs_firstname>>"
  scene.text(`You realize her mistake and say, "I'm ${((s as any).pcs_firstname ?? '')}"`);
  scene.text('"Right, can I ask if you could help me with some pictures?" You see, I want to be a model, and I need some pictures. Can you help?" she asks."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Sure, why not?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'exp_gain', 'photoskl', 2);
    qspCall(st, 'stat', '');
    scene.text('<center><b>ksenya</b></center>');
    scene.img('images/locations/shared/park/ksenya/ksenya3.jpg');
    scene.text('"I want some tasteful teasing pictures to send to some agents. Let me show you where I wanna start." She says and hands you her phone and then walks towards the field. You take a look at her phone to get it set and take a picture by mistake of her back. "Oops" you think to yourself');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'exp_gain', 'photoskl', 2);
    qspCall(st, 'stat', '');
    scene.text('<center><b>ksenya</b></center>');
    scene.img('images/locations/shared/park/ksenya/ksenya4.jpg');
    scene.text('When she reaches a nearby tree, she removes her sheer, see-through dress and holds on to it herself. You take another shot, this time on purpose. She looks up at you and smiles which gets another picture. After one or two more.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'exp_gain', 'photoskl', 2);
    qspCall(st, 'stat', '');
    scene.text('<center><b>ksenya</b></center>');
    scene.img('images/locations/shared/park/ksenya/ksenya5.jpg');
    scene.text('She says "Ok, one more." She says and moves behind some tall grass. She removes all her clothes and stands naked behind it. You snap one or two more pictures before she walks up to you, getting dressed.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'exp_gain', 'photoskl', 2);
    qspCall(st, 'stat', '');
    scene.text('<center><b>ksenya</b></center>');
    scene.img('images/locations/shared/park/ksenya/ksenya6.jpg');
    scene.text('She walks over to you now wearing her sheer dress, and takes her phone back. "These are cute," she says looking at them. "Ever thought of doing photography?" she says and then gives you a kiss on your cheek before she runs off with a wave and a final word "See you around"');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
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
  scene.build();
}

function enterEvent3(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'public_outdoors';
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>ksenya</b></center>');
  scene.img('images/locations/shared/park/ksenya/ksenya6.jpg');
  scene.text('As you did before you find Ksenya near the edge of the park, exposing herself. She gives you that same look, you just can\'t seem to place.');
  // TODO-QSP: dynamic text: "Hi, <<$pcs_firstname>>. It''s your turn, are you up for this?"
  scene.text(`"Hi, ${((s as any).pcs_firstname ?? '')}. It's your turn, are you up for this?"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'No, sorry', handler: (st: GameState) => {
    scene.text('You tell her that you don\'t want to do it now.');
    scene.text('"That\'s OK, we all lose our nerve sometimes. When you are ready come and find me again."');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    { label: 'Yes', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).exhibitionQW = 3;
    if (((st as any).trait_vars ?? 0)?.['exhibitionist'] < 2) {
      ((st as any).trait_vars = (st as any).trait_vars ?? {})['exhibitionist_exp'] = Math.max(((st as any).trait_vars ?? 0)?.['exhibitionist_exp'], 50);
      qspCall(st, 'traits', 'level', 'exhibitionist', 2);
    }
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/park/ksenya/strip1.jpg');
    scene.text('Cool, the light is not great here at this time, but there\'s a great spot just around the corner.');
    scene.text('She leads you to a small clearing and you start to undress. Ksenya gives you a bag for your clothing, "So they\'ll stay safe and clean."');
    if (((st as any).pantyworntype ?? 0) !== 'none') {
      scene.actions([
        { label: 'Take your panties off', handler: (st: GameState) => {
    scene.img('images/locations/shared/park/ksenya/strip2.jpg');
    scene.text('You look at Ksenya, who seems busy checking if there\'s no one around. Eventually you decide to remove your panties, here goes nothing!');
    scene.actions([
      { label: 'Continue', goto: ['kseniyaQW', 'event3_1'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', goto: ['kseniyaQW', 'event3_1'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterEvent3_1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/park/ksenya/strip3.jpg');
  scene.text('You stand up completely naked, with everything but your shoes in the bag.');
  scene.text('"Oh crap, I packed my phone. I meant to give it to you, how are you going to take pictures of me now?" you tell her.');
  // TODO-QSP: dynamic text: "It''s OK <<$pcs_firstname>>, I can take the pictures on my phone and message th...
  scene.text(`"It's OK ${((s as any).pcs_firstname ?? '')}, I can take the pictures on my phone and message them to you. What's your number?"`);
  scene.text('You give her your phone number and she quickly types the number into her phone, "Cool, firstly that bag is not going to look good in the shot."');
  scene.text('She looks around quickly. "There\'s nowhere safe to stash them, but it\'s OK, I can carry them."');
  (s as any).orgasm_or = 'no';
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'arousal', 'flash', (-10));
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get started', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'mdlng', (Math.floor(Math.random() * 3) + 0));
    scene.img('images/locations/shared/park/ksenya/strip4.jpg');
    scene.text('You hand her the bag and strike a pose, Ksenya laughs.');
    scene.text('"More natural! Bah, that ugly building is in frame, try doing the same on the path." She points to the track by the clearing.');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'arousal', 'flash', (-10));
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Pose on the track', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'mdlng', (Math.floor(Math.random() * 3) + 0));
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/park/ksenya/strip5.jpg');
    scene.text('You walk over to the path, lift you arms over your head and try to look more natural.');
    scene.text('"Much better." Ksenya takes a couple of pictures, then whispers, "Someone\'s coming."');
    scene.text('She points towards a tree by the side of the track.');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'arousal', 'flash', (-10));
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get behind the tree', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'mdlng', (Math.floor(Math.random() * 3) + 0));
    scene.img('images/locations/shared/park/ksenya/strip6.jpg');
    scene.text('A man walks past with his dog, he doesn\'t seem to notice or care and you quickly relax.');
    scene.text('He is still behind you, as you start posing again. You\'re really getting into this and can\'t stop smiling.');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'arousal', 'flash', (-10));
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'One more pose', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'mdlng', (Math.floor(Math.random() * 3) + 0));
    scene.img('images/locations/shared/park/ksenya/strip7.jpg');
    scene.text('Still smiling you find a large tree stump and sit down on it. You realize you are exposing yourself quite a bit in this position.');
    scene.text('Ksenya shoots more pictures and you feel yourself relax more.');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'arousal', 'flash', (-10));
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'mdlng', (Math.floor(Math.random() * 3) + 0));
    scene.img('images/locations/shared/park/ksenya/strip8.jpg');
    scene.text('Starting to get concerned you tell Ksenya you are done and want your clothes back.');
    scene.text('She suddenly looks very stern and says, "If you want your clothes, you are going to have to spread those legs."');
    scene.text('She has your clothes, bag and everything, shit this isn\'t good.');
    scene.text('You have no real choice so you open up your legs and try to look sexy for the last time.');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'arousal', 'flash', (-10));
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/shared/park/ksenya/strip9.jpg');
    scene.text('You playfully ask Ksenya if are done now and ask her if you can get your clothes back, hoping a different approach will work.');
    scene.text('"Over there. Sit down and put your hand between your legs, that\'s the one. And make it look sensual," she tells you sounding like a professional photographer.');
    scene.text('As you try and pose you realize your pussy is soaking wet and any lingering inhibition regarding nudity is completely overcome.');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'arousal', 'flash', (-10), 'sub');
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'stat', '');
    scene.text('Ksenya hands you back your clothes and gives you a business card, it\'s for a shop in Old Town. How odd.');
    scene.text('"I know I tricked you there but I find special customers for a very private shop. The address is on the card."');
    scene.text('""You have a lovely body by the way." Ksenya blows you a kiss and leaves. By the time you are dressed she is long gone.');
    // TODO-QSP: dynamic text: 'You look at the card again, "Simply Salacious" just off Pushkin Okhlopkov Squar...
    scene.text('You look at the card again, "Simply Salacious" just off Pushkin Okhlopkov Square. Open Mon-Sat, 8:00 - 18:00');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
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
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'event1':
      enterEvent1(s, scene);
      break;
    case 'events':
      enterEvents(s, scene);
      break;
    case 'event2':
      enterEvent2(s, scene);
      break;
    case 'event3':
      enterEvent3(s, scene);
      break;
    case 'event3_1':
      enterEvent3_1(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const kseniyaQW: LocationDef = {
  name: 'kseniyaQW',
  title: 'Woman',
  region: 'other',
  locationType: 'public_outdoors',
  enter: enter,
};
