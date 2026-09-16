import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_dolls', 'start');
  (s as any).location_type = 'public_indoors';
  if (((s as any).anushkaQW ?? 0)?.['dolls'] === 0) {
    ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['dolls'] = 1;
  }
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Patch Work Dolls</b></center>');
  scene.img('images/locations/city/island/dolls/dolls.jpg');
  scene.text('');
  scene.text('The store has a small front on a side street, but one glance is all you need to tell this is not your average clothing store.');
  scene.text('Inside the store, shelves and racks of gothic and punk clothes are crammed into every available space - anybody setting out to find an inch of wall would have their work cut out for them.');
  scene.text('The checkout counter is near the entrance.');
  if (((s as any).doll_staff_day ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).doll_staff = Math.floor(Math.random() * 2) + 0;
    (s as any).doll_staff_day = ((s as any).daystart ?? 0);
  }
  if ((!((s as any).doll_staff ?? 0))) {
    if (((s as any).know_Savva ?? 0) === 1) {
      // TODO-QSP: dynamic text: As you walk in, Savva waves at you and smiles. "Hi <<$pcs_nickname>>, great to s...
      scene.text(`As you walk in, Savva waves at you and smiles. "Hi ${((s as any).pcs_nickname || '')}, great to see you again! Let me know if I can help you with anything."`);
    }
    scene.actions([
      { label: 'Go to the counter', goto: ['shop_dolls', 'savva'] },
    ]);
  } else {
    if (((s as any).know_Viola ?? 0) === 1) {
      scene.text('As you walk in, Viola winks at you.');
    }
    scene.actions([
      { label: 'Go to the counter', goto: ['shop_dolls', 'viola'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Browse clothing', goto: ['shop_dolls', 'browse'] },
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['city_island', ''] },
  ]);
  scene.build();
}

function enterBrowse(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_dolls', 'browse');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Patch Work Dolls</b></center>');
  scene.img('images/locations/city/island/dolls/dollsshop.jpg');
  scene.text('');
  scene.text('The store has a small front on a side street, but one glance is all you need to tell this is not your average clothing store.');
  scene.text('Inside the store, shelves and racks of alternative clothes are crammed into every available space - anybody setting out to find an inch of wall would have their work cut out for them.');
  scene.text('The checkout counter is near the entrance.');
  if (((s as any).anushkaQW ?? 0)?.['dolls'] === 2) {
    ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['discount'] = (-10);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['shop_dolls', 'start'] },
    { label: 'View dresses', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_dolls', 'dress'] },
    { label: 'View other outfits', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_dolls', 'clothing'] },
    { label: 'View shoes', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_dolls', 'shoes'] },
    { label: 'View purses', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_dolls', 'purses'] },
    { label: 'View coats', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_dolls', 'coats'] },
  ]);
  scene.build();
}

function enterDress(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_dolls', 'dress');
  (s as any).locclass = 'changingroom';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Patchwork Dolls dresses</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'clothing', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'dolls_dress');
    // TODO-QSP: gs 'shop_utils', 'init', 'set_steps', 3, Clothingstock mod 3
    // TODO-QSP: gs 'shop_utils', 'init', 'set_discount', anushkaQW['discount']
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
    qspGoto(s, 'shop_dolls', 'browse');
  } },
  ]);
  scene.build();
}

function enterClothing(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_dolls', 'clothing');
  (s as any).locclass = 'changingroom';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Patchwork Dolls clothing</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'clothing', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'dolls_outfits');
    // TODO-QSP: gs 'shop_utils', 'init', 'set_steps', 2, (Clothingstock / 3) mod 2
    // TODO-QSP: gs 'shop_utils', 'init', 'set_discount', anushkaQW['discount']
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
    qspGoto(s, 'shop_dolls', 'browse');
  } },
  ]);
  scene.build();
}

function enterShoes(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_dolls', 'shoes');
  (s as any).locclass = 'changingroom';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Patchwork Dolls shoes</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'shoes', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'dolls');
    // TODO-QSP: gs 'shop_utils', 'init', 'set_discount', anushkaQW['discount']
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
    qspGoto(s, 'shop_dolls', 'browse');
  } },
  ]);
  scene.build();
}

function enterPurses(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_dolls', 'purses');
  (s as any).locclass = 'changingroom';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Patchwork Dolls purses</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'purses', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'dolls');
    // TODO-QSP: gs 'shop_utils', 'init', 'set_discount', anushkaQW['discount']
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
    qspGoto(s, 'shop_dolls', 'browse');
  } },
  ]);
  scene.build();
}

function enterCoats(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_dolls', 'coats');
  (s as any).locclass = 'changingroom';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Patchwork Dolls coats</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'coats', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'dolls');
    // TODO-QSP: gs 'shop_utils', 'init', 'set_discount', anushkaQW['discount']
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
    qspGoto(s, 'shop_dolls', 'browse');
  } },
  ]);
  scene.build();
}

function enterSavva(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/savva/savva.jpg');
  if ((!((s as any).know_Savva ?? 0))) {
    scene.text('You see a young man at the counter; he looks about your sister\'s age, but has a shy, quiet, almost girlish quality about him.');
    scene.text('"Can I help you?" he asks so quietly that you can barely hear him.');
  } else {
    // TODO-QSP: dynamic text: Savva is working the counter today. As you walk up, he gives you a friendly smil...
    scene.text(`Savva is working the counter today. As you walk up, he gives you a friendly smile. "Hey ${((s as any).pcs_nickname || '')}, nice to see you again. What can I help you with?"`);
  }
  if (((s as any).anushkaQW ?? 0)?.['dolls'] === 2) {
    scene.actions([
      { label: 'Anushka sent me', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A204', 3);
    scene.img('images/characters/city/savva/savva.jpg');
    scene.text('"Anushka, a friend of mine, sent me," you tell him with a smile.');
    scene.text('He laughs. "You must lead a real interesting life if she\'s your friend. So you\'re from Pavlovsk too?"');
    scene.text('You nod. "Yeah, we go to school together actually."');
    scene.text('He nods back. "Cool. I still find it hard to believe that a girl like that has good enough grades to go to the university. Guess I\'ll see a lot more of her when that happens."');
    scene.text('"She\'s a wild one, that\'s for sure. Anyway, she told me you could help and that you \'owe her one.\'"');
    scene.text('He snorts and shakes his head. "She must be failing math since she doesn\'t seem to know how to count, but she\'s pretty cool, and if she sent you, then you have to be okay too. So what\'s your name?"');
    scene.text('You tell him your name and he types out a few things on the computer. A few minutes later, you hear the sound of something printing before he hands over a card.');
    scene.text('"Here\'s a VIP customer card, good for ten percent off anything in the store. Now you can tell her she owes me, like I\'m ever likely to collect," he says with a laugh.');
    scene.actions([
      { label: 'Continue', goto: ['shop_dolls', 'savva'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask him about the store', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A204', 2);
    scene.img('images/characters/city/savva/savva.jpg');
    scene.text('You ask him about the store and he tells you it opened a few years ago, mostly to cater to university students. They occasionally get hassled by the local gopniks or police, but he likes the job.');
    scene.text('He then asks if you need any help finding an outfit.');
    scene.actions([
      { label: 'Continue', goto: ['shop_dolls', 'savva'] },
    ]);
  } },
    { label: 'Flirt with him', handler: (st: GameState) => {
    scene.img('images/characters/city/savva/savva.jpg');
    scene.text('You think he\'s pretty cute in a girlish kind of way, so you chat with him about a variety of things and flirt for all you\'re worth.');
    scene.text('He seems happy to talk, especially about fashion and music, but he\'s either gay or completely oblivious to your flirting.');
    scene.actions([
      { label: 'Continue', goto: ['shop_dolls', 'savva'] },
    ]);
  } },
    { label: 'Chat with him', handler: (st: GameState) => {
    (s as any).know_Savva = 1;
    qspCall(s, 'npc_relationship', 'modify', 'A204', 3);
    scene.img('images/characters/city/savva/savva.jpg');
    scene.text('You decide to chat with him. He seems happy to talk with you, especially about fashion and music, and you spend some time chatting about a variety of topics.');
    if (((s as any).npc_rel ?? 0)?.['A204'] > 50) {
      scene.text('As you do, you eventually touch upon his latest date, some "cutest boy he\'s ever seen" that he met in the store some time ago. He seems to have been dying to tell somebody about it because he just gushes about how handsome the young man is and how great the sex was… Next week, he\'ll likely be talking about another one.');
    }
    scene.actions([
      { label: 'Continue', goto: ['shop_dolls', 'savva'] },
    ]);
  } },
    { label: 'Return', goto: ['shop_dolls', 'start'] },
  ]);
  scene.build();
}

function enterViola(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big205.jpg');
  if ((!((s as any).know_Viola ?? 0))) {
    scene.text('You see a young woman at the counter who is about a year or two older than your sister. She\'s reading a magazine when you walk up, only glancing up at you as you stop at the counter. "How can I help you?"');
  } else {
    // TODO-QSP: dynamic text: "What's up, <<$pcs_nickname>>? You here to do a little shopping or to kill some ...
    scene.text(`"What's up, ${((s as any).pcs_nickname || '')}? You here to do a little shopping or to kill some time?"`);
  }
  if (((s as any).anushkaQW ?? 0)?.['dolls'] === 2) {
    scene.actions([
      { label: 'Anushka sent me', handler: (st: GameState) => {
    ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['dolls'] = 3;
    qspCall(s, 'npc_relationship', 'modify', 'A205', 5);
    scene.img('images/characters/shared/headshots_main/big205.jpg');
    scene.text('"Anushka, a friend of mine, sent me," you tell her with a smile.');
    scene.text('She perks up. "You\'re friends with Nush? Why didn\'t you say so? How is she doing? Raising hell and having fun if I know her!"');
    scene.text('You can\'t help but grin a little. If you\'re not mistaken, Viola has a thing for Anushka. "She\'s good. I was asking her where she got her clothes since you know she has such good taste and she said you guys could help me out. Oh and she said to tell you that you \'owe her one\' or something like that."');
    scene.text('She laughs at that last bit. "I seem to always be owing her. Not sure how math works in her head, but if she sent you, then you\'re in good hands. What\'s your name?"');
    scene.text('You tell her your name and she types out a few things on the computer. A few minutes later, you hear the sound of something printing before she hands over a card.');
    scene.text('"Here\'s a VIP customer card, good for ten percent off anything in the store. Now you can tell her she owes me," she says with a wink.');
    scene.actions([
      { label: 'Continue', goto: ['shop_dolls', 'viola'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask her about the store', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big205.jpg');
    scene.text('You ask her about the store and she tells you the place is only a few years old and is the only place to buy a decent outfit in the whole city; unless you\'re willing to shop online, that is, which leads her to talk about the woes of online shopping where clothes don\'t fit and never seem to have anywhere near as good a quality as they seem to in the pictures.');
    scene.text('You get the impression that the topic really bothers her and she could go on for some time if you let her.');
    scene.actions([
      { label: 'Continue', goto: ['shop_dolls', 'viola'] },
    ]);
  } },
    { label: 'Flirt with her', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A205', 3);
    scene.img('images/characters/shared/headshots_main/big205.jpg');
    scene.text('You start flirting and she returns the favor to a point, occasionally touching your hand or shoulder while laughing at some of the things you say, but she never fully commits to flirting back; she\'s either playing hard to get, trying to put you in a good mood to buy stuff, or is just messing with you - you\'re unsure which.');
    scene.actions([
      { label: 'Continue', goto: ['shop_dolls', 'viola'] },
    ]);
  } },
    { label: 'Chat with her', handler: (st: GameState) => {
    (s as any).know_Viola = 1;
    qspCall(s, 'npc_relationship', 'modify', 'A205', 2);
    scene.img('images/characters/shared/headshots_main/big205.jpg');
    scene.text('You decide to chat with her, and the two of you talk about a variety of topics. She seems happy to talk with you, especially about fashion, techniques for dying your hair, music, and the injustices of life. She mentions how the gopniks hassle some of the gay boys that shop here.');
    scene.text('Some time passes before you decide to do something else.');
    scene.actions([
      { label: 'Continue', goto: ['shop_dolls', 'viola'] },
    ]);
  } },
    { label: 'Return', goto: ['shop_dolls', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'browse':
      enterBrowse(s, scene);
      break;
    case 'dress':
      enterDress(s, scene);
      break;
    case 'clothing':
      enterClothing(s, scene);
      break;
    case 'shoes':
      enterShoes(s, scene);
      break;
    case 'purses':
      enterPurses(s, scene);
      break;
    case 'coats':
      enterCoats(s, scene);
      break;
    case 'savva':
      enterSavva(s, scene);
      break;
    case 'viola':
      enterViola(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const shop_dolls: LocationDef = {
  name: 'shop_dolls',
  title: 'Patch Work Dolls',
  region: 'other',
  locationType: 'public_indoors',
  locclass: 'changingroom',
  description: ['The store has a small front on a side street, but one glance is all you need to tell this is not your average clothing store.'],
  enter: enter,
};
