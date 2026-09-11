import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_exhibitionist', 'start');
  if (((s as any).exhibitionQW ?? 0) === 3) {
    (s as any).exhibitionQW = 4;
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Simply Salacious</b></center>');
  scene.img('images/locations/pushkin/exhibitshop/shop.jpg');
  scene.text('A modern looking store where the clothing is all very revealing and not nearly as classy as the store itself.');
  if (((s as any).hypnoClothes ?? 0) === 1  &&  ((s as any).exhibitionQW ?? 0) === 4) {
    scene.actions([
      { label: 'Look for Ksenya', goto: ['shop_exhibitionist', 'ksenya_intro'] },
    ]);
  }
  if (((s as any).exhibitionQW ?? 0) === 5  &&  ((s as any).daystart ?? 0) >= ((s as any).exhibitionQW ?? 0)?.['daystart'] + 3  &&  ((s as any).KsenyaQW ?? 0) >= 3) {
    if ((Math.floor(Math.random() * 2) + 1) === 1) {
      scene.actions([{ label: 'Continue', goto: ['shop_exhibitionist', 'ksenya_date'] }]);
    }
  }
  if (((s as any).exhibitionQW ?? 0) === 5  &&  ((s as any).exhibitionQW ?? 0)?.['daystart'] !== ((s as any).daystart ?? 0)) {
    if (((s as any).KsenyaQW ?? 0) === 2) {
      scene.actions([
        { label: 'Ask to see Ksenya', goto: ['shop_exhibitionist', 'ksenya_shop'] },
      ]);
    } else {
      scene.actions([
        { label: 'Talk to Ksenya', goto: ['shop_exhibitionist', 'ksenya_chat'] },
      ]);
    }
  }
  if (((s as any).hour ?? 0) >= 18) {
    scene.text('The shop is closing and you have to leave.');
    return;
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pushkin_sq', ''] },
    { label: 'View outfits', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_exhibitionist', 'outfits'] },
    { label: 'View dresses', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_exhibitionist', 'dresses'] },
    { label: 'View panties', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_exhibitionist', 'panties'] },
    { label: 'View bras', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_exhibitionist', 'bras'] },
    { label: 'View bodysuits', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_exhibitionist', 'bodysuit'] },
  ]);
  scene.build();
}

function enterOutfits(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_exhibitionist', 'outfits');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Salacious outfits</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'clothing', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'salacious_outfits');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['shop_exhibitionist', 'start'] },
  ]);
  scene.build();
}

function enterDresses(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_exhibitionist', 'dresses');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Salacious dresses</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'clothing', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'salacious_dress');
    // TODO-QSP: gs 'shop_utils', 'init', 'set_steps', 2, Clothingstock mod 2
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['shop_exhibitionist', 'start'] },
  ]);
  scene.build();
}

function enterPanties(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_exhibitionist', 'panties');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Salacious panties</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'panties', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'salacious');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['shop_exhibitionist', 'start'] },
  ]);
  scene.build();
}

function enterBras(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_exhibitionist', 'bras');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Salacious bras</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'bras', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'salacious');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['shop_exhibitionist', 'start'] },
  ]);
  scene.build();
}

function enterBodysuit(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_exhibitionist', 'bodysuit');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Salacious bodysuits</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'bodysuits', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'salacious');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['shop_exhibitionist', 'start'] },
  ]);
  scene.build();
}

function enterKsenyaIntro(s: GameState, scene: SceneBuilder): void {
  (s as any).exhibitionQW = 5;
  ((s as any).exhibitionQW ?? {})['daystart'] = ((s as any).daystart ?? 0);
  qspCall(s, 'willpower', 'misc', 'force', 'hard');
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/park/ksenya/ksenya7.jpg');
  scene.text('"Hello?" you call out. "I\'m looking for Ksenya. Is she around?"');
  scene.text('The cashier nods. "Yes, follow me," she says before leading you to the back of the store.');
  scene.text('"Miss Ksenya? You have a visitor," the cashier says and Ksenya stands up before walking over to give you a hug.');
  // TODO-QSP: dynamic text: "Hey <<$pcs_firstname>>, what can I do for you?"
  scene.text(`"Hey ${((s as any).pcs_firstname ?? 0)}, what can I do for you?"`);
  scene.text('"I was wondering if you had school uniforms for sale? My therapist told me that you might have some in your shop."');
  scene.text('"The one in town?" she asks.');
  scene.text('"Yes? Do you know him?" you reply.');
  scene.text('She sighs. "Yes, he\'s my father. He\'s asked me to keep them in stock for some reason," she admits. "If we don\'t have one right now, check back in a few days."');
  scene.text('"Tell me, has…" She briefly pauses before continuing. "Has anything changed recently? Like has anything recently been different? Wearing things you haven\'t before? Doing things you don\'t normally do?"');
  scene.text('You take a moment to think about things.');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Yes [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Yes [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'hard');
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/park/ksenya/ksenya8.jpg');
    scene.text('"Yes? I no longer like wearing underwear. Are you referring to that?" you inquire.');
    scene.text('"Is he doing hypnosis with you?" she asks and you nod your head. "I think you may be in trouble if you continue seeing him."');
    scene.text('"Nothing has happened to me that I am aware of," you assure her.');
    scene.text('"I trust you, but please let me know if anything happens. My father is not trustworthy, so please be careful." She walks you out of the store after giving you a hug. "If you ever want to talk to me, please come see me."');
    scene.actions([
      { label: 'Continue', goto: ['shop_exhibitionist', 'start'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'No', handler: (st: GameState) => {
    scene.img('images/locations/shared/park/ksenya/ksenya8.jpg');
    scene.text('"No? Why?" you ask.');
    scene.text('"No reason. If you ever want to hang out, just stop by the shop and we can chat," she says as she walks you back to the front of the store.');
    scene.actions([
      { label: 'Continue', goto: ['shop_exhibitionist', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterKsenyaChat(s: GameState, scene: SceneBuilder): void {
  ((s as any).exhibitionQW ?? {})['daystart'] = ((s as any).daystart ?? 0);
  qspCall(s, 'npc_relationship', 'modify', 'A263', 1);
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/park/ksenya/ksenya9.jpg');
  scene.text('You meet up with Ksenya and spend the next hour talking about random things. Flashing, clothing, and just everyday stuff.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['shop_exhibitionist', 'start'] },
  ]);
  scene.build();
}

function enterKsenyaDate(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Simply Salacious</b></center>');
  scene.img('images/locations/pushkin/exhibitshop/shop.jpg');
  scene.text('You walk into the exhibitionist store and see Ksenya behind the counter.');
  // TODO-QSP: dynamic text: She walks over to you and gives you a big hug. "<<$pcs_nickname>>! How are you, ...
  scene.text(`She walks over to you and gives you a big hug. "${((s as any).pcs_nickname ?? 0)}! How are you, love?" she asks before giving you a quick kiss on the lips.`);
  scene.text('"I\'m okay," you say, returning the kiss.');
  scene.text('"What brings you here today? Looking for new clothes?" she asks.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask her out', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A263', 2);
    scene.img('images/locations/shared/park/ksenya/ksenya8.jpg');
    scene.text('"Not today. I wanted to see if you wanted to go and see a movie or something?" you ask.');
    scene.text('"Oh, like a date?" she asks and gives you another hug. "I would love to! Just let me close up," she says and moves behind the counter to turn off the \'Open\' sign before placing a \'Be Back Later\' sign on the door.');
    scene.actions([
      { label: 'Wait for Ksenya', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A263');
    qspCall(s, 'npc_relationship', 'modify', 'A263', 2);
    scene.text('The two of you get into her Ferrari and drive to the local cinema, where you spend a few minutes in her car kissing before you head into the theatre.');
    qspCall(s, 'arousal', 'kiss', 5, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Take a seat', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    scene.text('You both get some snacks before taking your seats. It\'s dark when the movie starts and the theatre is empty.');
    scene.text('The adverts haven\'t even finished before she pulls you over to her and you cuddle and kiss a little, touching each other and stealing kisses throughout the movie.');
    qspCall(s, 'arousal', 'kiss', 10, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Make out', handler: (st: GameState) => {
    scene.text('You\'re ignoring the movie at this point and are just making out as her hand snakes under your clothes and starts groping your breasts as she kisses your neck.');
    scene.text('You moan out loud, but when you try to touch her in return, she stops you.');
    scene.text('"Not right now; this is for you…" she whispers into your ear before pushing her tongue into your mouth.');
    qspCall(s, 'arousal', 'foreplay', 10, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let her eat you out', handler: (st: GameState) => {
    scene.text('By now, she has removed most of your clothes and is between your legs, eating you out. You are glad you are alone in the movie theatre as Ksenya\'s tongue is making you moan out loudly. Your rapidly approaching orgasm is interrupted when the lights of the theatre turn back on.');
    scene.text('She helps you redress and you weakly exit the theatre.');
    qspCall(s, 'arousal', 'cuni', 10, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go back to her car', handler: (st: GameState) => {
    scene.text('She drives to a secluded area and gets on top of you, pushing your seat back and quickly removing her clothes and yours. She hastily grabs your breasts and suckles on your nipples.');
    if (((s as any).lactation ?? 0)?.['active'] >= 1) {
      scene.text('"Mmm, you have milk? It\'s tasty!" she says and spends a moment on your nipples, drinking your sweet milk. "I may partake in this more often," she says and goes back to your nipples.');
    }
    scene.text('She spends a few more minutes on your nipples before pulling back and moving her leg between yours and one of yours between hers as you start to grind on each other.');
    qspCall(s, 'arousal', 'foreplay', 10, 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Relax', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    scene.text('You lay under her for a while as the two of you relax in each other\'s arms.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, that was amazing! I hope we can do this again soon," she say...
    scene.text(`"${((s as any).pcs_nickname ?? 0)}, that was amazing! I hope we can do this again soon," she says without pulling back, not wanting to part from you as she kisses you sweetly.`);
    scene.text('"I\'d like that," you reply while running a hand through her hair.');
    scene.text('"I need to get back to the store. Is there any place you want me to drop you off?" she asks as she slowly gets up and starts to get dressed in the cramped space of the car.');
    scene.text('You pull your clothes back on before smiling at her. "I\'d like you to drop me off at…" ');
    scene.actions([
      { label: 'Pavlovsk Residential', goto: ['pav_residential', ''] },
      { label: 'Pavlovsk Industrial', goto: ['pav_industrial', ''] },
      { label: 'Pavlovsk commercial', goto: ['pav_commercial', ''] },
      { label: 'Five Eight Estate', goto: ['pav_complex', 'start'] },
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
      { label: 'Run', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A263', (-5));
  }, goto: ['pushkin_sq', ''] },
    ]);
  } },
    { label: 'Leave', goto: ['pushkin_sq', ''] },
  ]);
  scene.build();
}

function enterKsenyaShop(s: GameState, scene: SceneBuilder): void {
  (s as any).KsenyaQW = 3;
  scene.img('images/characters/pushkin/ksenya/shop1.jpg');
  scene.text('You\'re taken to Ksenya\'s office. It\'s open a crack and you look inside. You see her sitting on a chair looking back at you.');
  // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>. Come in, come in. To what do I owe the pleasure?" she as...
  scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)}. Come in, come in. To what do I owe the pleasure?" she asks and closes the door behind you, after which she hugs you gently.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pushkin/ksenya/shop2.jpg');
    scene.text('"I want to ask about what happened at the lake. Was that… for me?" you ask while blushing.');
    scene.text('"Which part?" she asks while sitting on the edge of her chair. She doesn\'t seem that bothered by being seen in her underwear.');
    scene.text('"The… flashing part when you saw me," you say without making eye contact.');
    scene.text('"Maybe…" she teases.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pushkin/ksenya/shop3.jpg');
    scene.text('"Did you like what you saw?" she asks.');
    scene.text('You look at her as she teasingly starts removing her bra.');
    scene.text('"I did. I think you\'re very beautiful." you reply.');
    scene.text('"Would you like to be my girlfriend?" she asks bluntly.');
    scene.text('"What?!" you ask in surprise.');
    scene.text('"You\'re the closest thing I have to a friend, and I want you to be my girlfriend," she repeats.');
    scene.actions([
      { label: 'Sure', handler: (st: GameState) => {
    scene.img('images/shared/sex/kiss/kiss_lips.mp4');
    scene.text('She walks over and gives you a gentle hug before she moves your hair behind your ear and leans in to kiss you. The kiss lingers for a few seconds before she pulls back.');
    scene.text('Before anything can be done further, there\'s a sudden knock st the door. "Miss? You\'re needed in the store."');
    scene.text('"Be right there," she says and turns back to you. "I\'ll see you later."');
    scene.text('Her hand slowly rubs your cheek as she walks away from you, leaving you alone in her office. After you collect your bearings, you leave and see her arguing with a customer as you exit the store.');
    scene.actions([
      { label: 'Leave the store', goto: ['pushkin_sq', ''] },
    ]);
  } },
      { label: 'No thanks', handler: (st: GameState) => {
    scene.img('images/characters/pushkin/ksenya/shop4.jpg');
    scene.text('"Sorry Ksenya, but this is moving too fast. I don\'t think I\'m ready for that right now," you reply.');
    scene.text('She looks upset at your answer as she leans on the chair. "That\'s okay. I\'ll be here when you\'re ready," she says before returning to her desk like nothing happened.');
    scene.text('You walk out of her office feeling like you\'re no longer welcome there today.');
    scene.actions([
      { label: 'Leave the store', goto: ['pushkin_sq', ''] },
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
    case 'outfits':
      enterOutfits(s, scene);
      break;
    case 'dresses':
      enterDresses(s, scene);
      break;
    case 'panties':
      enterPanties(s, scene);
      break;
    case 'bras':
      enterBras(s, scene);
      break;
    case 'bodysuit':
      enterBodysuit(s, scene);
      break;
    case 'ksenya_intro':
      enterKsenyaIntro(s, scene);
      break;
    case 'ksenya_chat':
      enterKsenyaChat(s, scene);
      break;
    case 'ksenya_date':
      enterKsenyaDate(s, scene);
      break;
    case 'ksenya_shop':
      enterKsenyaShop(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const shop_exhibitionist: LocationDef = {
  name: 'shop_exhibitionist',
  title: 'Simply Salacious',
  region: 'other',
  locationType: 'public_indoors',
  locclass: 'changingroom',
  description: ['A modern looking store where the clothing is all very revealing and not nearly as classy as the store itself.'],
  enter: enter,
};
