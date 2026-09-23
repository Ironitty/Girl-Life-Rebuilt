import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_fashionista', 'start');
  ((s as any).NatbelQW = (s as any).NatbelQW ?? {})['underwearShop'] = 0;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'outfit', 'backup', 'fashionista');
  scene.text('<center><b>Fashionista</b></center>');
  scene.img('images/locations/city/citycenter/mall/fashionista/fashionista.jpg');
  scene.text('This store features many big name brands and designer clothing. Even their bags look cool.');
  scene.text('You can try on outfits via the changing room.');
  if (((s as any).pantyworntype ?? 0) !== 'none') {
    scene.actions([
      { label: 'Enter changing room (strip to underwear)', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/fashionista/underwear.jpg');
    qspCall(st, 'clothing', 'strip');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 1]; enterChangingroom(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'outfit', 'remove_backup', 'fashionista');
    qspGoto(st, 'city_mall', '');
  } },
    { label: 'View purses', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_fashionista', 'purses'] },
    { label: 'Enter changing room (strip naked)', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/fashionista/nude.jpg');
    qspCall(st, 'clothing', 'strip');
    qspCall(st, 'underwear', 'strip');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 1]; enterChangingroom(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_fashionista', 'start');
  ((s as any).NatbelQW = (s as any).NatbelQW ?? {})['underwearShop'] = 0;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'outfit', 'backup', 'fashionista');
  scene.text('<center><b>Fashionista</b></center>');
  scene.img('images/locations/city/citycenter/mall/fashionista/fashionista.jpg');
  scene.text('This store features many big name brands and designer clothing. Even their bags look cool.');
  scene.text('You can try on outfits via the changing room.');
  if (((s as any).pantyworntype ?? 0) !== 'none') {
    scene.actions([
      { label: 'Enter changing room (strip to underwear)', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/fashionista/underwear.jpg');
    qspCall(st, 'clothing', 'strip');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 1]; enterChangingroom(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'outfit', 'remove_backup', 'fashionista');
    qspGoto(st, 'city_mall', '');
  } },
    { label: 'View purses', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_fashionista', 'purses'] },
    { label: 'Enter changing room (strip naked)', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/fashionista/nude.jpg');
    qspCall(st, 'clothing', 'strip');
    qspCall(st, 'underwear', 'strip');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 1]; enterChangingroom(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterChangingroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_fashionista', 'changingroom');
  (s as any).locclass = 'changingroom';
  qspCall(s, 'stat', '');
  if (String((s as any).locArgs?.[1] ?? '') === 1) {
    scene.text('As you walk through the store, you notice that there\'s nobody in the changing rooms. Feeling a bit bored, you look at some clothes and grab several items to try on before heading into one of the changing rooms.');
  } else {
    scene.img('images/locations/city/citycenter/mall/fashionista/changingroom.jpg');
    scene.text('You are in the changing rooms in Fashionista with several outfits available to try on.');
  }
  if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).week ?? 0) === 7  &&  ((s as any).rimma ?? 0)?.['photo'] === 0) {
    ((s as any).rimma = (s as any).rimma ?? {})['photo'] = 1;
    ((s as any).rimma = (s as any).rimma ?? {})['day'] = ((s as any).daystart ?? 0);
    scene.img('images/characters/city/rimma/photo.jpg');
    scene.text('While in the changing room, you get a strange feeling, like you\'re being watched, but think nothing of it and start posing like a model.');
    scene.text('You\'re startled when you think you hear what sounds like a camera clicking, but you can\'t see anyone and you\'re not going to run out and check while naked.');
    scene.actions([
{ label: 'Disregard', goto: ['shop_fashionista', 'changingroom'] },
]);
    return;
  }
  qspCall(s, 'shortgs', 'clothing_state');
  if (((s as any).pantyworntype ?? 0) === 'none') {
    scene.actions([
      { label: 'Put on underwear', handler: (st: GameState) => {
    qspCall(st, 'underwear', 'wear');
    qspGoto(st, 'shop_fashionista', 'changingroom');
  } },
    ]);
  }
  if (((s as any).pantyworntype ?? 0) !== 'none') {
    scene.actions([
      { label: 'Get naked', handler: (st: GameState) => {
    qspCall(st, 'underwear', 'strip');
    qspGoto(st, 'shop_fashionista', 'changingroom');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Try on dresses', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_fashionista', 'dressingclothes'] },
    { label: 'Try on outfits', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_fashionista', 'dressingoutfit'] },
    { label: 'Try on bra', handler: (st: GameState) => {
    if (((st as any).NatbelQW ?? 0)?.['seethrough'] === 0  &&  ((st as any).NatbelQW ?? 0)?.['underwearShop'] === 0  &&  ((st as any).NatbelQW ?? 0)?.['QWstage'] > 5) {
      qspGoto(st, 'shop_fashionista', 'natbel_bra_event');
    }
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspGoto(st, 'shop_fashionista', 'dressingbra');
  } },
    { label: 'Try on panties', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_fashionista', 'dressingpanties'] },
    { label: 'Get dressed and go back to the store', goto: ['shop_fashionista', 'changingend'] },
  ]);
  scene.build();
}

function enterDressingclothes(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_fashionista', 'dressingclothes');
  (s as any).locclass = 'changingroom';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Fashionista clothing</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'clothing', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'fashionista_dress');
    // TODO-QSP: gs 'shop_utils', 'init', 'set_steps', 4, Clothingstock mod 4
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'shop_utils', 'cleanup');
    qspGoto(st, 'shop_fashionista', 'changingroom');
  } },
  ]);
  scene.build();
}

function enterDressingoutfit(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_fashionista', 'dressingoutfit');
  (s as any).locclass = 'changingroom';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Fashionista clothing</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'clothing', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'fashionista_outfits');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'shop_utils', 'cleanup');
    qspGoto(st, 'shop_fashionista', 'changingroom');
  } },
  ]);
  scene.build();
}

function enterDressingbra(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_fashionista', 'dressingbra');
  (s as any).locclass = 'changingroom';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Fashionista bras</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'bra', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'fashionista');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'shop_utils', 'cleanup');
    qspGoto(st, 'shop_fashionista', 'changingroom');
  } },
  ]);
  scene.build();
}

function enterDressingpanties(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_fashionista', 'dressingpanties');
  (s as any).locclass = 'changingroom';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Fashionista panties</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'panties', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'fashionista');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'shop_utils', 'cleanup');
    qspGoto(st, 'shop_fashionista', 'changingroom');
  } },
  ]);
  scene.build();
}

function enterChangingend(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'outfit', 'restore', 'fashionista');
  qspGoto(s, 'shop_fashionista', 'start');
  // TODO-QSP: end
  scene.build();
}

function enterPurses(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_fashionista', 'purses');
  (s as any).locclass = 'changingroom';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Fashionista purses</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'purses', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'fashionista');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'shop_utils', 'cleanup');
  }, goto: ['shop_fashionista', 'start'] },
  ]);
  scene.build();
}

function enterNatbelBraEvent(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/fashionista/nude.jpg');
  scene.text('As you try on a particularly spicy set of see-through underwear, you notice that it doesn\'t quite fit you.');
  // TODO-QSP: dynamic text: '"This should fit Natasha perfectly though. And it only costs ' + $func('money',...
  scene.text('"This should fit Natasha perfectly though. And it only costs 750₽." You think to yourself, imagining the look on her face if you make her wear it.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Buy it', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 750) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      scene.img('images/locations/city/citycenter/mall/fashionista/nude.jpg');
      scene.text('You put the underwear aside for now so that you can take it to the register with you.');
      qspCall(st, 'money', 'pay', 750);
      ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['seethrough'] = 1;
      scene.actions([
        { label: 'Stay in the changing room', goto: ['shop_fashionista', 'changingroom'] },
        { label: 'Get dressed and go back to the store', goto: ['shop_fashionista', 'changingend'] },
      ]);
    }
  } },
    { label: 'Don\'t buy it', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/fashionista/nude.jpg');
    scene.text('Deciding against it, you look through the rest of the underwear for something that would fit you better.');
    ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['underwearShop'] = 1;
    scene.actions([
      { label: 'Stay in the changing room', goto: ['shop_fashionista', 'changingroom'] },
      { label: 'Get dressed and go back to the store', goto: ['shop_fashionista', 'changingend'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterRima(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).location_type = 'event';
  qspCall(s, 'stat', '');
  scene.text('Turning your head, you think nobody noticed, but your actions have attracted the saleswoman. The seller is a young girl in a little-too-narrow shirt with the logo of the Boutique, it\'s not enough that her shirt was so tight, but she had to unbutton the top button as well (You think if it was a woman\'s shirt it would be okay, but since it\'s a man you wonder what the administration must be thinking.) she came up to you a little bit uncomfortably and quickly asked:');
  scene.text('"Can I help you with anything?" the seller asks.');
  // TODO-QSP: end
  scene.actions([
    { label: 'No, thank you', goto: ['shop_fashionista', 'start'] },
    { label: 'Silently leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 8;
  }, goto: ['city_center', ''] },
    { label: 'Stare at her breasts', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('Seeing that the she is a novice saleswoman and that you are most likely her first client, you decided to go for it. Just as you opened your mouth to say some harsh sentence, your eyes came to rest on her chest. The bra together with the shirt successfully emphasized her breasts, and even though only the upper part of her chest was visible, your imagination filled in the rest. You wonder what her nipples are like The thought crossed your mind surprisingly');
    scene.text('"Yes, you can give me a few minutes of your time, "You said.');
    scene.text('Your words make an impression on the saleswoman, and she blushes slightly Embarrassed.');
    scene.text('"Yes, yes, yes - often we ask: what dress color do you like? shape of the neckline of the dress? do you want more freedom to move? or turn? do you want to highlight your perfect figure?"');
    scene.text('"Stop, stop, - you\'re a person and not a stranger, first tell me what you would like me to call you" Your words make an impression on the girl, she is flattered by your words. ');
    scene.text('"Irina" she says, before correcting herself "Saleswoman Rima."');
    // TODO-QSP: dynamic text: "May I call you Rimma?" You ask."I''m <<$pcs_nickname>>".
    scene.text(`"May I call you Rimma?" You ask."I'm ${((st as any).pcs_nickname ?? '')}".`);
    scene.text('"Yes, of course, if you\'d like.", responds Rima, smiling shyly.');
    qspCall(st, 'arousal', 'erotic', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Choose a dress with Rimma', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    if (((st as any).pcs_hairbsh ?? 0) === 1  &&  ((st as any).pcs_makeup ?? 0) > 1  &&  ((st as any).pcs_leghair ?? 0) <= 0  &&  ((st as any).pcs_sweat ?? 0) < 20  &&  ((st as any).clothingworntype ?? 0) === 'moncheri') {
      scene.text('You choose some things and evaluate them together with Rima while hanging out a bit.');
      scene.text('"Rima, where is the dressing room?" You ask suddenly.');
      scene.text('Come with me - Rima didn\'t notice that the invisible barrier between you is lost: the seller and the buyer.');
      scene.actions([
        { label: 'Go inside the dressing room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.text('You and Rima went together into the dressing room.');
    scene.actions([
      { label: 'You do not like the dress', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.text('As a result, you spent time together, while in your head you wonder about Rima, and her mysterious and curious body.');
    scene.text('As you go home you suddenly feel eyes on you');
    scene.actions([
      { label: 'Ignore', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 8;
  }, goto: ['city_center', ''] },
      { label: 'Look around', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.text('You start to turn your head, looking around sharply.');
    scene.text('You notice that a girl is looking at you.');
    scene.actions([
      { label: 'Approach her', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.text('You silently move towards her and give her a look');
    // TODO-QSP: nl
    scene.text('"Good afternoon," you announce. "Do I know you?"');
    scene.text('"Good day," she says, "Do you not remember me?"');
    scene.text('The girl does not respond to your sharpness');
    scene.text('"In principle, there is no way out of the situation that you had?" the girl answers');
    scene.text('"What is the situation where when?" You will not hide anger.');
    scene.text('"Yes, in the vacant lot where you were having \'fun\' with a dog" girl replied with a grin.');
    scene.actions([
      { label: 'Yes you ohereli! (Go)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 8;
  }, goto: ['city_center', ''] },
      { label: 'Extort taken in head? What do you want?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).QWdogReiq = 2;
    (st as any).QWdogreiqTimer = 7;
    qspCall(st, 'stat', '');
    scene.text('"So you decided to blackmail me? And how much do you want?" You spit viciously ');
    scene.text('Again, your words fail to disturb her. She cocks her head to the side, and asks "Is your tantrum over?"');
    scene.text('You tell her irritably that you have not even begun to get angry.');
    scene.text('"No, you\'re still upset let\'s meet next week." The girl says suddenly.');
    scene.text('"I guess…" you say, shaking your head.');
    scene.text('"That\'s fine, my name is Margaret" she says, looking at you expectantly.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>" you reply.
    scene.text(`"${((st as any).pcs_nickname ?? '')}" you reply.`);
    scene.text('"I\'m looking forward to our meeting." she says as she leaves.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 8;
  }, goto: ['city_center', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Take your panties off in front of Rimma', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.text('You remove your panties in front Rimma and noticed how her cheeks glowed red, and her breathing quickened.');
    scene.actions([
      { label: 'Do you like me?', handler: (st: GameState) => {
    if ((!((st as any).RimmaSex ?? 0))) {
      (st as any).RimmaSex = 1;
      (st as any).girl = ((st as any).girl ?? 0) + (1);
    }
    (st as any).rimmaday = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    scene.img('mod/bestmod/images/beast/zoo/primer.jpg');
    scene.text('"Rimma, do you like me?" you ask quietly');
    scene.text('"yes, very much" Rimma answers excitedly');
    scene.text('"Then lick me" you demand');
    scene.text('Rimma kneels down and begins to kiss your body, not very skillfully at first, starting by timidly kissing your belly then licking and covering all of your body as she grew more confident. Rimma successfully made your pussy very wet. She starts kissing and licking your crotch little by little, then bites at it. The unexpectedness makes the body flow into a sweet languor. ');
    scene.text('You smell of sex, Rimma looks up at you from between your legs for a second');
    scene.text('After putting her right palm gently on the pubis, Rimma fingers spread your wet lips, poking out her tongue and running it inside.');
    scene.text('The soft reciprocating action of the tongue on the clitoris excits you and causes a mild spasm. Rimma suddenly begins to press her tongue on your clitoris. Your body is already weak and no longer obeys your brain, only trying not moan load enough to alert the whole store.');
    (st as any).orgasm_or = 'custom';
    (st as any).orgasm_txt = 'Suddenly, Your body begins to shake and is covered in a soft wave of spasms, with the last spasm you cum. You let out a loud moan while falling to your knees.';
    scene.text('You collapse to the floor, exhausted with pleasure.');
    qspCall(st, 'arousal', 'cuni', 10, 'dom', 'lesbian');
    qspCall(st, 'arousal', 'vaginal_finger', (-10), 'dom', 'lesbian');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'leave the dressing room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).QWdogReiq = 2;
    (st as any).QWdogreiqTimer = 7;
    qspCall(st, 'stat', '');
    scene.text('Rimma walked you to the door.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, did you like it?" Rimma asked, blushing.
    scene.text(`"${((st as any).pcs_nickname ?? '')}, did you like it?" Rimma asked, blushing.`);
    scene.text('"What do you think? I want more, Do you want to continue?"');
    scene.text('"No, I can\'t, my parents are waiting at home" Rimma tells you, looking upset. ');
    scene.text('"Then how about next week?" you offer');
    scene.text('"let\'s do it" Rimma looks very happy.');
    scene.text('You head home, on the way you hear a woman\'s voice behind you:');
    scene.text('"Goodnight" said the strange woman.');
    scene.text('Looking closely you recognize her as girl at the vacant lot.');
    scene.text('"Hi" you cheerfully answered, "was it you that was watching me the entire time?"');
    scene.text('"Yes," she smiled in response. "I saw you in the boutique, but I didn\'t dare to approach you at that time, so I decided to wait outside for you."');
    scene.text('"But why did you wait?"');
    scene.text('"Now it\'s too late, Meet me next week so we can talk" She looks at you, waiting for your response');
    // TODO-QSP: dynamic text: "Let''s meet then," You agree"By way I''m <<$pcs_nickname>>"
    scene.text(`"Let's meet then," You agree"By way I'm ${((st as any).pcs_nickname ?? '')}"`);
    scene.text('"Margaret" She responds');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 8;
  }, goto: ['city_center', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.text('You and Rimma search for a dress, but couldn\'t find one. You leave and Rimma is a little sad in saying goodbye to you.');
      scene.text('You think it might help keep her attention if you make a real effort with your appearance and wear one of the nice outfits from here.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 8;
  }, goto: ['city_center', ''] },
      ]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'event';
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'changingroom':
      enterChangingroom(s, scene);
      break;
    case 'dressingclothes':
      enterDressingclothes(s, scene);
      break;
    case 'dressingoutfit':
      enterDressingoutfit(s, scene);
      break;
    case 'dressingbra':
      enterDressingbra(s, scene);
      break;
    case 'dressingpanties':
      enterDressingpanties(s, scene);
      break;
    case 'changingend':
      enterChangingend(s, scene);
      break;
    case 'purses':
      enterPurses(s, scene);
      break;
    case 'natbel_bra_event':
      enterNatbelBraEvent(s, scene);
      break;
    case 'rima':
      enterRima(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const shop_fashionista: LocationDef = {
  name: 'shop_fashionista',
  title: 'Fashionista',
  region: 'other',
  locationType: 'event',
  locclass: 'changingroom',
  description: ['This store features many big name brands and designer clothing. Even their bags look cool.'],
  enter: enter,
};
