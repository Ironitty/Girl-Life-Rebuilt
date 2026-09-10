import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Camera & Photography Store</b></center>');
  scene.img('images/locations/city/citycenter/mall/photoshop/shop.jpg');
  scene.text('The shop is dedicated to cameras and is celebrating this fact by displaying a myriad of them along every wall. A singular counter sits just off the adjacent wall with the shopkeeper standing behind it, clearly eager for some trade to enter his shop.');
  if (((s as any).photography_start ?? 0) === 1  &&  ((s as any).week ?? 0) >= 6  &&  ((s as any).photography ?? 0)?.['datecheck'] !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Ask about work', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/mall/photoshop/owner.jpg');
    scene.text('You walk up to Branko. "Excuse me Branko, but you said you might have some work for me. Would you happen to have anything?"');
    // TODO-QSP: dynamic text: He smiles at you. "Yes yes, I remember. You're <<$pcs_nickname>>, right? Let me ...
    scene.text(`He smiles at you. "Yes yes, I remember. You're ${((s as any).pcs_nickname ?? 0)}, right? Let me check."`);
    scene.text('He opens a laptop sitting on the counter next to him and taps on the keys before he looks up at you.');
    (s as any).photography['datecheck'] = ((s as any).daystart ?? 0);
    qspCall(s, 'photography_work', 'job_init');
    qspCall(s, 'jobs_gigs', 'disp_evt', 1);
  } },
    ]);
  }
  if (((s as any).photographyEv ?? 0) === 2  &&  (!((s as any).photography_start ?? 0))) {
    scene.actions([
      { label: 'Show portfolio', goto: ['shop_photography', 'showportfolio'] },
    ]);
  }
  qspCall(s, 'jobs_gigs', 'disp_evt', 3);
  scene.actions([
    { label: 'Talk to the shop owner', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    if ((!((s as any).photographyEv ?? 0))) {
      (s as any).photographyEv = 1;
      scene.img('images/locations/city/citycenter/mall/photoshop/owner.jpg');
      scene.text('"Hello there! What\'s your name?" the friendly man behind the counter asks with a smile.');
      // TODO-QSP: dynamic text: "<<$pcs_firstname>>," you reply.
      scene.text(`"${((s as any).pcs_firstname ?? 0)}," you reply.`);
      // TODO-QSP: dynamic text: "Nice to meet you, <<$pcs_firstname>>. You look like the sort of person who woul...
      scene.text(`"Nice to meet you, ${((s as any).pcs_firstname ?? 0)}. You look like the sort of person who would be interested in a quality camera. In fact, judging by the sort of person I see before me, I have just the camera right here that would be perfect for you. Only ${qspFunc(s, 'money', 'string_price', 20000)}!"`);
      scene.text('"Well, I <i>have</i> been thinking about getting into photography… It might be worth it," you reply and he immediately launches into a long-winded discussion about the joys you can have with a camera.');
      scene.text('He talks about what the camera in question can do, along with all it\'s features. It does sound like the perfect camera for someone that\'s serious about getting into photography, but is that you?');
      qspCall(s, 'shop_photography', 'camera_options', 'first');
    } else {
      scene.img('images/locations/city/citycenter/mall/photoshop/owner.jpg');
      // TODO-QSP: dynamic text: The owner smiles when he sees you. "Aha! I remember you! <<$pcs_firstname>>! How...
      scene.text(`The owner smiles when he sees you. "Aha! I remember you! ${((s as any).pcs_firstname ?? 0)}! How fantastic it is that you should return to my shop! Have you changed your mind about buying a camera?"`);
      qspCall(s, 'shop_photography', 'camera_options', 'repeat');
      // TODO-QSP: dynamic text: The owner smiles when he sees you. "Aha! I remember you! <<$pcs_firstname>>! How...
      scene.text(`The owner smiles when he sees you. "Aha! I remember you! ${((s as any).pcs_firstname ?? 0)}! How fantastic it is that you should return to my shop! How are you getting on with your recent purchase? Brilliantly I hope? I know what I see and I see brilliance before me, so it can only be that you would get on brilliantly!"`);
      scene.actions([
        { label: 'Walk away', goto: ['shop_photography', 'start'] },
      ]);
    }
  } },
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['city_mall', ''] },
  ]);
  scene.build();
}

function enterCameraOptions(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'money', 'can_afford', 20000) === 1) {
    scene.actions([
      { label: 'Purchase DSLR Camera for  [+$func(\'money\', \'string_price\', 20000)]', goto: ['shop_photography', 'buycamera'] },
    ]);
  } else {
    scene.actions([
      { label: 'Can\'t afford camera', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/mall/photoshop/owner.jpg');
    if (((s as any).locArgs?.[1] ?? 0) === 'first') {
      scene.text('You consider it for a moment. You\'d love to buy it, but you know you don\'t have enough money for it right now. "Maybe some other time? I can\'t really afford it, but thank you for taking the time to explain things to me."');
      scene.text('He smiles. "It was my pleasure, young lady. I hope to see you again soon."');
    } else {
      scene.text('You consider it for a moment. You\'d love to buy it, but you know you don\'t have enough money for it right now. "I\'d love to, but I still can\'t afford it. I\'m saving up to buy it, though."');
      scene.text('He smiles. "Best of luck to you then! Feel free to look around if you like."');
      scene.text('You spend a little time looking at all the cameras and accessories you can\'t really afford.');
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['city_mall', ''] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Don\'t buy camera', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/mall/photoshop/owner.jpg');
    if (((s as any).locArgs?.[1] ?? 0) === 'first') {
      scene.text('You consider it for a moment, but decide against it. "Maybe some other time, but thank you for taking the time to explain things to me."');
      scene.text('He smiles. "It was my pleasure young lady. If you change your mind, you know where to find me."');
    } else {
      scene.text('You still don\'t know if you want to get into photography. "Maybe some other time. I just wanted to look around."');
      scene.text('He smiles. "Of course, of course! Look around all you like, young lady. If you change your mind, then you know where to find me."');
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['city_mall', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBuycamera(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'money', 'pay', 20000);
  (s as any).photographyEv = 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/mall/photoshop/owner.jpg');
  scene.text('"You have made a momentous decision with this purchase! Here is your very own DSLR camera to do anything from professional commissioned photography to personal snaps of small events. And now that I have launched your photographic crusade to enlightenment, what are you indeed planning to use this opportunity for in this world of possibility?"');
  scene.text('"I\'m thinking of just building a portfolio of pictures for now; something to test how I can build up my ability to frame a scene. I might start by going around the area and looking for pictures to take to build a catalogue of photographs."');
  scene.text('"Fantastic! Brilliant! Tell you what; once you\'ve completed your portfolio, bring it in as I would love to see it! Now go! I release you into this new world of possibility!"');
  scene.actions([
    { label: 'Walk away', goto: ['shop_photography', 'start'] },
  ]);
  scene.build();
}

function enterShowportfolio(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/mall/photoshop/owner.jpg');
  if (((s as any).pcs_photoskl ?? 0) <= 35) {
    scene.text('"Ah, your portfolio! By all means, I would love to peruse through it!"');
    scene.text('"Mmmm… Not bad. You have some natural talent, but you still need to learn how to use lighting and angles better. Yes yes, you have some raw talent but you need more experience. Come back when you can, I would love to see you grow into the amazing photographer I know you can be."');
    scene.text('"Yes yes, when you get more experience I might have a fantastic business opportunity for you! You see, in addition to the shop you see before you, I also have a side business in commissioned photography and from what I\'ve seen, you might just be the person I\'m looking for; you\'ll be paid of course! But first practice, practice practice!"');
    scene.text('You frown a little. At least he likes your work. "Okay, I will. I\'ll keep practicing and when I feel I\'ve improved, I\'ll return."');
  } else {
    (s as any).photography_start = 1;
    scene.text('"Ah, your portfolio! By all means, I would love to peruse through it!"');
    scene.text('"Mmmm… These photographs are good. You have a real eye! With a little more practice, you will become a very skilled photographer."');
    scene.text('"You can call me Branko. I have a fantastic business opportunity for you! You see, in addition to the shop you see before you, I also have a side business in commissioned photography and from what I\'ve seen, you\'re the perfect person to help me with some additional work. There will be no pressure, just visit my beautiful shop at the weekend and I\'ll let you know if there\'s any photography jobs you can do for me; you\'ll be paid of course!"');
    scene.text('"Wow, that sounds interesting. I\'ll visit when I can."');
    if (((s as any).pcs_photoskl ?? 0) <= 75) {
      (s as any).photography_start = 1;
      scene.text('"Ah, your portfolio! By all means, I would love to peruse through it!"');
      scene.text('"These photographs are terrific! Sensational, absolutely sensational!"');
      scene.text('"You can call me Branko. I have a fantastic business opportunity for you! You see, in addition to the shop you see before you, I also have a side business in commissioned photography and from what I\'ve seen, you\'re the perfect person to help me with some additional work. There will be no pressure, just visit my beautiful shop and I\'ll let you know if there\'s any photography jobs you can do for me; cash in hand of course!"');
      scene.text('"Wow, that sounds interesting. I\'ll visit when I can."');
    } else {
      (s as any).photography_start = 1;
      scene.text('"Ah, your portfolio! By all means, I would love to peruse through it!"');
      scene.text('"My god… These are simply breathtaking my dear, breathtaking! I don\'t think I\'ve ever met anyone with as much potential as you in my life! With a little more seasoning, you could become one of the greatest photographers of our time!"');
      scene.text('"You can call me Branko. I have a fantastic business opportunity for you! You see, in addition to the shop you see before you, I also have a side business in commissioned photography and from what I\'ve seen, you\'re the perfect person to help me with some additional work. There will be no pressure, just visit my beautiful shop and I\'ll let you know if there\'s any photography jobs you can do for me; you\'ll be paid of course!"');
      scene.text('"Wow, that sounds interesting. I\'ll visit when I can!"');
    }
    scene.actions([
      { label: 'Walk away', goto: ['shop_photography', 'start'] },
    ]);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'camera_options':
      enterCameraOptions(s, scene);
      break;
    case 'buycamera':
      enterBuycamera(s, scene);
      break;
    case 'showportfolio':
      enterShowportfolio(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const shop_photography: LocationDef = {
  name: 'shop_photography',
  title: 'Camera & Photography Store',
  region: 'other',
  locationType: 'public_indoors',
  description: ['The shop is dedicated to cameras and is celebrating this fact by displaying a myriad of them along every wall. A singular counter sits just off the adjacent wall with the shopkeeper standing behind it, clearly eager for some trade to enter his shop.'],
  enter: enter,
};
