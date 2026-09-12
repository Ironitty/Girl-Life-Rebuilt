import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).ParrotQW ?? 0)?.['Level'] === 1  &&  ((s as any).ParrotQW ?? 0)?.['Failed'] === 0) {
    scene.actions([{ label: 'Continue', goto: ['zoomagazine', 'event_1'] }]);
  }
  qspCall(s, 'core_library', 'setloc', 'zoomagazine', 'start');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Pet Emporium</b></center>');
  scene.img('images/locations/city/citycenter/mall/pet shop/shop.jpg');
  if ((!((s as any).krolik ?? 0))) {
    // TODO-QSP: 'Rabbit - ' + $func('money', 'string_price', 2000)
    scene.actions([
      { label: 'Buy a rabbit [+$func(\'money\', \'get_cost_string\', 2000)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 2000) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      if (((s as any).home ?? 0)?.['current'] === 'city_apartment'  ||  ((s as any).home ?? 0)?.['current'] === 'old_town_apartment') {
        (s as any).minut = ((s as any).minut ?? 0) + 10;
        (s as any).krolik = ((s as any).krolik ?? 0) + (1);
        qspCall(s, 'money', 'pay', 2000);
        scene.img('images/locations/city/citycenter/mall/pet shop/pets/rabbit.jpg');
        scene.text('<center><b>You bought a rabbit.</b></center>');
        if (((s as any).namekrol ?? 0) === '') {
        }
      } else {
        scene.text('You need to have your own place before you can buy a rabbit.');
      }
      scene.actions([
        { label: 'Move away from the counter', goto: ['zoomagazine', 'start'] },
      ]);
    }
  } },
    ]);
  }
  if (((s as any).rex ?? 0)?.['owned'] === 0  &&  ((s as any).home ?? 0)?.['current'] !== 'parents_home') {
    // TODO-QSP: 'Dog - ' + $func('money', 'string_price', 3000)
    scene.actions([
      { label: 'Buy a dog [+$func(\'money\', \'get_cost_string\', 3000)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 3000) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      if (((s as any).home ?? 0)?.['current'] === 'city_apartment'  ||  ((s as any).home ?? 0)?.['current'] === 'old_town_apartment'  ||  ((s as any).home ?? 0)?.['current'] === 'matryona_mansion') {
        (s as any).minut = ((s as any).minut ?? 0) + 10;
        if (!(s as any).rex) (s as any).rex = {}; (s as any).rex['owned'] = 1;
        qspCall(s, 'money', 'pay', 3000);
        scene.img('images/locations/city/citycenter/mall/pet shop/pets/dog.jpg');
        scene.text('<center><b>You bought a dog.</b></center>');
        if (!(s as any).rex) (s as any).rex = {}; (s as any).rex['name'] = 0;
        if (((s as any).rex ?? 0)?.['name'] === '') {
          if (!(s as any).rex) (s as any).rex = {}; (s as any).rex['name'] = 'Rex';
        }
      } else {
        scene.text('You need to have your own place before you can buy a dog.');
      }
      scene.actions([
        { label: 'Move away from the counter', goto: ['zoomagazine', 'start'] },
      ]);
    }
  } },
    ]);
  }
  if (((s as any).ParrotQW ?? 0)?.['Owned1'] === 0  &&  ((s as any).home ?? 0)?.['current'] !== 'parents_home') {
    // TODO-QSP: 'Parrot - ' + $func('money', 'string_price', 3000)
    scene.actions([
      { label: 'Buy a parrot [+$func(\'money\', \'get_cost_string\', 3000)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 3000) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      if (((s as any).home ?? 0)?.['current'] === 'city_apartment'  ||  ((s as any).home ?? 0)?.['current'] === 'old_town_apartment') {
        (s as any).minut = ((s as any).minut ?? 0) + 10;
        if (!(s as any).ParrotQW) (s as any).ParrotQW = {}; (s as any).ParrotQW['Owned1'] = 1;
        qspCall(s, 'money', 'pay', 3000);
        scene.img('images/locations/city/citycenter/mall/pet shop/pets/parrot.jpg');
        scene.text('<center><b>You bought a parrot.</b></center>');
        if (!(s as any).ParrotQW) (s as any).ParrotQW = {}; (s as any).ParrotQW['Name1'] = 0;
        if (((s as any).ParrotQW ?? 0)?.['Name1'] === '') {
          if (!(s as any).ParrotQW) (s as any).ParrotQW = {}; (s as any).ParrotQW['Name1'] = 'Polly';
        }
      } else {
        scene.text('You need to have your own place before you can buy a parrot.');
      }
      scene.actions([
        { label: 'Move away from the counter', goto: ['zoomagazine', 'start'] },
      ]);
    }
  } },
    ]);
  }
  if (((s as any).ParrotQW ?? 0)?.['Owned2'] === 0  &&  ((s as any).home ?? 0)?.['current'] === 'parents_home') {
    // TODO-QSP: 'Parrot - ' + $func('money', 'string_price', 3000)
    scene.actions([
      { label: 'Buy a parrot for your parent\'s apartment [+$func(\'money\', \'get_cost_string\', 3000)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 3000) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 10;
      if (!(s as any).ParrotQW) (s as any).ParrotQW = {}; (s as any).ParrotQW['Owned2'] = ((s as any).ParrotQW['Owned2'] ?? 0) + (1);
      if (!(s as any).ParrotQW) (s as any).ParrotQW = {}; (s as any).ParrotQW['SisKeepParrot'] = 0;
      if (!(s as any).ParrotQW) (s as any).ParrotQW = {}; (s as any).ParrotQW['BuyDate'] = ((s as any).daystart ?? 0);
      qspCall(s, 'money', 'pay', 3000);
      scene.img('images/locations/city/citycenter/mall/pet shop/pets/parrot.jpg');
      scene.text('<center><b>You bought a parrot.</b></center>');
      if (!(s as any).ParrotQW) (s as any).ParrotQW = {}; (s as any).ParrotQW['Name2'] = 0;
      if (((s as any).ParrotQW ?? 0)?.['Name2'] === '') {
        if (!(s as any).ParrotQW) (s as any).ParrotQW = {}; (s as any).ParrotQW['Name2'] = 'Polly';
      }
      scene.actions([
        { label: 'Move away from the counter', goto: ['zoomagazine', 'start'] },
      ]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['city_mall', ''] },
  ]);
  scene.build();
}

function enterEvent_1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('When you enter the pet store you see the owner talking to some customers.');
  scene.text('In normal circumstances you would simply wait your turn but you are in a hurry now.');
  scene.text('You notice a little ladder standing next to the men and decide to create a distraction.');
  scene.text('You start climbing the ladder, pretending you need something from the top shelves');
  scene.text('The men take a small look but mostly ignore you. But when you lift up your skirt a little, that sure gets their attention.');
  scene.img('images/locations/city/citycenter/mall/pet shop/pet2.jpg');
  scene.text('The men, who were having a lively conversation suddenly go quiet.');
  scene.text('You take your chances and ask the owner if you could talk to him in private.');
  scene.img('images/locations/city/citycenter/mall/pet shop/pet8.jpg');
  scene.text('He wraps up his conversation with the other men and takes you to the back office.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('"So little girl, what\'s the big emergency" the pet shop owner asks you.');
    scene.text('"Well, a few months ago I bought a parrot from this shop. Everything was fine at first but the last couple of weeks he has been saying some things he really should not be saying." you begin to explain.');
    scene.text('The owner smirks, "Oh, what kind of things would that be?"');
    scene.text('"Just remarks about my body and my sister\'s activities." you continue on.');
    scene.text('"If you want me to help you, you will have to give me some more details, what exactly has he been saying?" the owner asks inquisitively.');
    scene.text('Your face turns red and, with some reluctance, you tell him the parrot has been saying you have a great body.');
    scene.text('Smiling, the owner replies, "Okay, I might have a solution for this, but I will have to determine if the parrot was lying or not. So, in a nutshell, you will have to show me that body of yours."');
    scene.text('You realize the owner is probably just an old pervert trying to get some, but this is your only chance to save your bird.');
    scene.actions([
      { label: 'Berate him for wasting your time and leave the store', handler: (st: GameState) => {
    if (!(s as any).ParrotQW) (s as any).ParrotQW = {}; (s as any).ParrotQW['Failed'] = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 3;
  }, goto: ['city_mall', ''] },
      { label: 'Show your body', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npcgeneratec', '', 0);
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/mall/pet shop/pet1.jpg');
    // TODO-QSP: dynamic text: You slide up your top and show off your <a href="exec:gs 'obj_din', 'show_tits'"...
    scene.text(`You slide up your top and show off your <a href="exec:gs 'obj_din', 'show_tits'">${((s as any).titsize ?? 0)}</a> breasts.`);
    scene.text('The owner licks his lips, "Hmm, he was definitely not lying about your top half. Ok, show me the rest."');
    scene.img('images/locations/city/citycenter/mall/pet shop/pet9.jpg');
    scene.text('You take off your pants and show your fully nude body to the owner.');
    scene.text('The owner is widely grinning, "So he was not lying at all. I now know what the solution is".');
    scene.text('The owner goes back to the counter and starts mixing up a few different liquids in a vial.');
    scene.text('He hands you over the vial, "Okay, it is almost done, just two more ingredients needed…"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/pet shop/pet4.jpg');
    scene.text('The owner comes over to you and starts rubbing your breasts.');
    scene.text('"Wait, what are you doing?" you ask. "How is this going to get me the final ingredients?"');
    scene.text('"Just trust me!" the man says before lightly licking your nipple.');
    scene.text('He then grabs you by the waist and sits you on top of the counter.');
    scene.text('He proceeds to place his head between your legs and starts licking you.');
    scene.text('Sliding his tongue into your wet pussy, he elicits a light shiver from you before dragging his tongue lightly against your clit, causing you to purr with pleasure.');
    scene.text('Once you are wet enough, he takes a tissue and collects some of your juices, "That\'s the first ingredient, on to the next."');
    qspCall(s, 'arousal', 'cuni', 15);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/pet shop/pet5.jpg');
    // TODO-QSP: dynamic text: The man unbuttons his pants and takes out his erect <<dick>> cm penis, "Now, I n...
    scene.text(`The man unbuttons his pants and takes out his erect ${((s as any).dick ?? 0)} cm penis, "Now, I need you to sit on your knees and suck this cock if you want to get to the last ingredient."`);
    scene.text('You are almost certain you are being conned now, but the pussy licking you received just moments ago made you so horny that you couldn\'t stop now, even if you wanted.');
    scene.text('You do as you are told and take the dick in your mouth');
    scene.text('You start pleasuring him to the best of your abilities.');
    scene.text('A few minutes into it, the man gestures you to get up and turn around.');
    qspCall(s, 'arousal', 'bj', 15);
    scene.img('images/locations/city/citycenter/mall/pet shop/pet6.jpg');
    qspCall(s, 'dinsex', 'vaginal_sex');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/locations/city/citycenter/mall/pet shop/pet7.jpg');
    scene.text('After a few minutes the owner pulls his dick out of you and turns you around, stroking his dick as he orgasms all over your face.');
    scene.text('He takes another tissue and wipes some of the cum off your face.');
    scene.text('He then goes to the counter and mixes both your juices in the vial, "Here you go miss, one parrot inhibitor potion for you, on the house."');
    scene.text('Taking the potion, you place it in your pocket and leave the store.');
    qspCall(s, 'cum_call', 'face', ((s as any).npclastgenerated ?? 0));
    (s as any).guy = ((s as any).guy ?? 0) + (1);
    if (!(s as any).ParrotQW) (s as any).ParrotQW = {}; (s as any).ParrotQW['Level'] = 2;
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave the store', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['city_mall', ''] },
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
    case 'start':
      enterStart(s, scene);
      break;
    case 'event_1':
      enterEvent_1(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const zoomagazine: LocationDef = {
  name: 'zoomagazine',
  title: 'Pet Emporium',
  region: 'other',
  enter: enter,
};
