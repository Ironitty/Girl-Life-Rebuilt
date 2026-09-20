import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).frost ?? 0) > 0) {
    (s as any).frost = 0;
  }
  qspCall(s, 'core_library', 'setloc', 'city_irinaroom', 'start');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Irina\'s front door</b></center>');
  scene.img('images/locations/shared/apartment/podezdhr.jpg');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspGoto(st, 'city_residential', '');
  } },
    { label: 'Ring Ira\'s doorbell', handler: (st: GameState) => {
    if (((st as any).hour ?? 0) >= 16  &&  ((st as any).hour ?? 0) <= 21  &&  ((st as any).week ?? 0) >= 6  &&  ((st as any).IrinaQW ?? 0) !== 2) {
      scene.text('You ring the doorbell, and hear light footsteps coming towards the door. Irina opens up the door and tells you to enter, delighted to see you.');
      scene.actions([
        { label: 'Enter apartment', goto: ['city_irinaroom', 'first'] },
      ]);
    } else {
      scene.text('When you ring the doorbell, no one answers.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspGoto(st, 'city_residential', '');
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterFirst(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_irinaroom', 'first');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Apartment Ira</b></center>');
  scene.img('images/characters/city/ira/irinaroom.jpg');
  scene.text('It\'s a small studio apartment which Irina keeps neat and tidy. There\'s not much to see, there\'s a decently sized living room with a smaller kitchen area.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Have a drink in the kitchen', goto: ['city_irinaroom', 'first1'] },
  ]);
  scene.build();
}

function enterFirst1(s: GameState, scene: SceneBuilder): void {
  (s as any).locclass = 'kitr';
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'mood', 'raise', 'small');
  (s as any).alko = ((s as any).alko ?? 0) + (4);
  if (((s as any).pcs_hydra ?? 0) >= 100) {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (5);
  } else {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (10);
  }
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/ira/irinaqw.jpg');
  scene.text('You and Irina head into the kitchen, where she takes out a bottle of wine and also some crackers and cheese for you to enjoy. You\'re really enjoying each other\'s company.');
  scene.text('The conversation is turning more heated, as both of you are feeling the effect of the wine.');
  if (((s as any).IrinaQW ?? 0) === 1) {
    scene.actions([
      { label: 'Suggest drinking to sisterhood', goto: ['city_irinaroom', 'first2'] },
    ]);
  }
  if (((s as any).IrinaQW ?? 0) >= 10) {
    scene.actions([
      { label: 'Kiss her', goto: ['city_irinaroom', 'kiss'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enterKiss(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/ira/irinakiss.jpg');
  scene.text('As your eyes meet, you grab hold of the opportunity and almost lunge towards Irina as you start passionately kissing her. Taken aback for a second, she relaxes and responds by teasing you as she bites your lip as you go back to making out. You can\'t contain yourself as you start exploring her body, touching her sensitive spots with your hands.');
  qspCall(s, 'arousal', 'kiss', 10, 'lesbian');
  qspCall(s, 'mood', 'raise', 'medium');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Have sex', goto: ['city_irinaroom', 'sex'] },
  ]);
  scene.build();
}

function enterSex(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/ira/sex/irinasex.jpg');
  if (((s as any).pcs_horny ?? 0) < 50) {
    scene.text('Her eyes are saying everything, and before you know it you\'ve ended up in her bed. Once in bed, you quickly get undressed, and explore each other\'s bodies for a long moment. The anticipation is unbearable as you start playing with her clit and slide a finger inside her as she starts moaning profoundly, shortly thereafter orgasming. With her wanting to return the favor, she excitedly starts eating you out, but she\'s being sloppy and isn\'t able to make you orgasm…');
    (s as any).orgasm_or = 'no';
    qspCall(s, 'arousal', 'cuni', 60, 'lesbian');
    qspCall(s, 'arousal', 'cuni_give', (-60), 'lesbian');
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'stat', '');
  }
  if (((s as any).pcs_horny ?? 0) >= 50) {
    scene.text('Her eyes are saying everything, and before you know it you\'ve ended up in her bed. Once in bed, she undresses you, and starts exploring your body, turning you on even more. The anticipation is unbearable as she starts playing with your clit and it doesn\'t take long before she slides a finger inside you as you start moaning profoundly. Playing off your reactions, she picks up the pace and it doesn\'t take long before you orgasm. As you calm down, you excitedly return the favor and start eating her out, returning the favor.');
    (s as any).orgasm_or = 'yes';
    qspCall(s, 'arousal', 'cuni', 60, 'lesbian');
    qspCall(s, 'arousal', 'cuni_give', (-60), 'lesbian');
    qspCall(s, 'mood', 'raise', 'large');
    qspCall(s, 'stat', '');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'city_residential', '');
  } },
  ]);
  scene.build();
}

function enterFirst2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'mood', 'raise', 'large');
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/ira/irinaqw1.jpg');
  // TODO-QSP: dynamic text: You toast to sisterhood, and you notice that Irina is looking at you strangely, ...
  scene.text(`You toast to sisterhood, and you notice that Irina is looking at you strangely, but she follows along and raises her glass and begins laughing, "I didn't expect to hear that from you, ${((s as any).pcs_firstname || '')}." You feel a slight bond building between the two of you.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Kiss', goto: ['city_irinaroom', 'first3'] },
  ]);
  scene.build();
}

function enterFirst3(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/ira/irinaqw2.jpg');
  scene.text('Without being able to hold out further, you kiss Ira on her warm, soft lips. Irina is noticeably flustered after the kiss and looks at you, a little embarrassed and frightened.');
  qspCall(s, 'mood', 'raise', 'large');
  qspCall(s, 'arousal', 'kiss', 5, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Undress her', goto: ['city_irinaroom', 'first4'] },
    { label: 'Drink some more', goto: ['city_irinaroom', 'first5'] },
  ]);
  scene.build();
}

function enterFirst4(s: GameState, scene: SceneBuilder): void {
  (s as any).IrinaQW = 2;
  qspCall(s, 'mood', 'lower', 'large');
  qspCall(s, 'stat', '');
  scene.text('You smile mischievously as you tug at Irinas\' blouse, but before you\'re able to start unbuttoning her, she pushes you off, and leaps from her chair screaming, "What are you doing?! I\'m not a lesbian! Get out!"');
  scene.text('She seems freaked out by your forwardness and points towards the door.');
  scene.text('"I-I\'m sor…" you try to tell her, but she\'s not really in the mood to hear your excuses and just stands by the door waiting for you to leave as quickly as possible.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspGoto(st, 'city_residential', '');
  } },
  ]);
  scene.build();
}

function enterFirst5(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/ira/sex/irinaqw3.jpg');
  // TODO-QSP: dynamic text: The two of you continue drinking, with Irina getting quite intoxicated as she st...
  scene.text(`The two of you continue drinking, with Irina getting quite intoxicated as she starts laughing at something and manages to spill her glass of wine all over the both of you. "I'm so sorry, ${((s as any).pcs_firstname || '')}… I didn't mean to… Come with me." She grabs you by the hand and staggers towards the bathroom.`);
  scene.text('She leads you inside the bathroom and starts undressing herself as she turns on the shower and steps into it. Seeing her naked body, you decide to follow suit and quickly undress and climb into the shower.');
  scene.text('"Could you help me out with my back?" She hands you a loofah, and as you start lathering her body you notice her nipples are erect.');
  (s as any).IrinaQW = 10;
  (s as any).alko = ((s as any).alko ?? 0) + (3);
  (s as any).noshampoo = 1;
  qspCall(s, 'din_van', 'showerdin');
  (s as any).pcs_hairbsh = 1;
  (s as any).pcs_makeup = 1;
  if (((s as any).deodorant_on ?? 0) === 1) {
    qspCall(s, 'sweat', 'remove_deo');
    scene.text('<br>Your deodorant gets washed away in the shower.');
  }
  qspCall(s, 'arousal', 'foreplay', 15, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Kiss', goto: ['city_irinaroom', 'first6'] },
  ]);
  scene.build();
}

function enterFirst6(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/ira/sex/irinaqw4.jpg');
  scene.text('Dropping the loofah on the ground, you turn Irina around and passionately start kissing her. She lets out faint moans as your hands travel all over her, making her even more turned on than before.');
  scene.text('Between moans, she says "Don\'t stop, please. I\'m all yours…"');
  qspCall(s, 'arousal', 'kiss', 5, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Fondle her breasts', goto: ['city_irinaroom', 'first7'] },
  ]);
  scene.build();
}

function enterFirst7(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/ira/sex/irinaqw5.jpg');
  scene.text('Giving into temptation, you lower your head and start sucking and licking her hard nipples. As your hand slides down towards her pussy, Irina moans even louder in pleasure.');
  qspCall(s, 'arousal', 'foreplay_give', 5, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Lick her pussy', goto: ['city_irinaroom', 'first8'] },
  ]);
  scene.build();
}

function enterFirst8(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/ira/sex/irinaqw6.jpg');
  scene.text('You keep on your journey downwards as your mouth continues wandering lower and lower until you arrive at the end goal, Irina\'s moist pussy. You barely brush against it with your fingers, making her flinch with excitement.');
  scene.text('"Enough teasing," you proclaim as your tongue begins licking her clit. The foreplay has prepared her body for a quick orgasm, and before you know it, she reaches her climax as she grabs you by the hair, without letting you move away as she loses herself in the orgasm.');
  scene.text('As she comes back to her senses, Irina quickly gets into the position to please you. She points at the edge of the tub for you to take a seat and starts eating you out.');
  qspCall(s, 'arousal', 'cuni', 10, 'lesbian');
  qspCall(s, 'arousal', 'cuni_give', (-10), 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Enjoy', goto: ['city_irinaroom', 'first9'] },
  ]);
  scene.build();
}

function enterFirst9(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/ira/sex/irinaqw7.jpg');
  scene.text('You\'re just as excited as she was and it doesn\'t take long before Irina\'s tongue has the same effect as you had on her, "Don\'t you dare to stop, I\'m so near." panting you reach the climax and bury her head inside you.');
  scene.text('Your knees are weak, but you have her rise up and lick your juices from her lips. "This is only the start, I\'m so going to have fun with you," you tell her as she starts blushing…');
  (s as any).orgasm_or = 'yes';
  qspCall(s, 'arousal', 'cuni', 10, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'city_residential', '');
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
    case 'first':
      enterFirst(s, scene);
      break;
    case 'first1':
      enterFirst1(s, scene);
      break;
    case 'kiss':
      enterKiss(s, scene);
      break;
    case 'sex':
      enterSex(s, scene);
      break;
    case 'first2':
      enterFirst2(s, scene);
      break;
    case 'first3':
      enterFirst3(s, scene);
      break;
    case 'first4':
      enterFirst4(s, scene);
      break;
    case 'first5':
      enterFirst5(s, scene);
      break;
    case 'first6':
      enterFirst6(s, scene);
      break;
    case 'first7':
      enterFirst7(s, scene);
      break;
    case 'first8':
      enterFirst8(s, scene);
      break;
    case 'first9':
      enterFirst9(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const city_irinaroom: LocationDef = {
  name: 'city_irinaroom',
  title: 'Irina\'s front door',
  region: 'city',
  locclass: 'kitr',
  enter: enter,
};
