import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterKitchenActs(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'kit_din', 'edasnack');
  qspCall(s, 'kit_din', 'sandwich');
  qspCall(s, 'kit_din', 'edaD');
  qspCall(s, 'kit_din', 'pranik');
  qspCall(s, 'kit_din', 'fatdel');
  qspCall(s, 'kit_din', 'lekarstvo');
  qspCall(s, 'kit_din', 'vitamin');
  qspCall(s, 'kit_din', 'driwater');
  qspCall(s, 'kit_din', 'dritea');
  qspCall(s, 'kit_din', 'fill_bottle');
  // TODO-QSP: end
  scene.build();
}

function enterSantehnikgr(s: GameState, scene: SceneBuilder): void {
  (s as any).ransloman = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 25;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/apartment/sex/s3.jpg');
  scene.text('You called the plumber and Grisha arrived literally 15 minutes later. He quickly found the cause and repairs the problem.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Next', goto: ['kit_din', 'santehnikend'] },
  ]);
  scene.build();
}

function enterSantehnikend(s: GameState, scene: SceneBuilder): void {
  (s as any).kransloman = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/apartment/sex/s3.jpg');
  // TODO-QSP: dynamic text: Half an hour later he says he is finished, and it will be <<$func('money', 'stri...
  scene.text(`Half an hour later he says he is finished, and it will be ${qspFunc(s, 'money', 'string_price', 1500)}`);
  if (qspFunc(s, 'money', 'can_afford', 1500)) {
    scene.actions([
      { label: 'Pay', handler: (st: GameState) => {
    qspCall(s, 'money', 'pay', 1500);
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } else {
    if (((s as any).shameless ?? 0) > 14) {
      scene.actions([
        { label: 'Offer a favor instead', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/apartment/sex/s4.jpg');
    scene.text('You ask, "I do not have money, but can you take another form of payment?" You drop to your knees and start to unbutton his pants. The guy obviously does not mind and watches your actions. You remove his flaccid penis and tightly gripping in in your hand, start to kiss the head, gradually sucking it into your mouth.');
    qspCall(s, 'arousal', 'bj', 3, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).pcs_apprnc ?? 0) < 60) {
      (s as any).guy = ((s as any).guy ?? 0) + (1);
      scene.img('images/locations/city/residential/apartment/sex/s5.jpg');
      scene.text('You diligently sucking his dick between his legs itched from all desires, you break off a couple of times to stop and go to the sex, but he took you by the head and continued to fuck your mouth, soon he came into your mouth and swallow once you come and pick it up again member, as he put his pants and silently walked to the door, to sleep with you, he was not even going. From rastrojstva you spat out semen on the floor, looks like you do not attract even plumbing.');
      qspCall(s, 'arousal', 'bj', 5, 'sub', 'deepthroat', 'rough');
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'sexloc');
  } },
      ]);
    } else {
      if (((s as any).pcs_apprnc ?? 0) >= 60) {
        (s as any).picrand = 90;
        (s as any).textrand = Math.floor(Math.random() * 4) + 1;
        scene.actions([{ label: 'Continue', goto: ['sex', 'minet'] }]);
      }
    }
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'I do not have enough money', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/apartment/sex/s3.jpg');
    scene.text('You are embarrassed and tell the plumber, that you do not have enough money. He is visibly angry. "You call a fucking plumber and don\'t have any money? What am I supposed to do now?"');
    scene.actions([
      { label: 'Shrug', handler: (st: GameState) => {
    qspCall(st, 'kit_din', 'santehnikend1');
  } },
      { label: 'Suggest a loan', handler: (st: GameState) => {
    qspCall(st, 'kit_din', 'santehnikend2');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSantehnikend1(s: GameState, scene: SceneBuilder): void {
  (s as any).kransloman = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/apartment/sex/s3.jpg');
  scene.text('You helplessly shrug and mumble that you have no idea what to do now. The plumber examines you with oily eyes and tells you with an infamous smirk, "Maybe there is another way. I can take payment for work, but not with money."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Suggest a loan', goto: ['kit_din', 'santehnikend1'] },
    { label: 'Another way?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/apartment/sex/s3.jpg');
    scene.text('You ask the plumber what he has in mind. Instead of answering, he takes you by the shoulders and draws you to him. You rest your soft breasts against his chest and feel your stomach resting on something solid. He easily pushes your shoulders and whispers, "Come on baby, do not be shy."');
    scene.actions([
      { label: 'Kneel', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/apartment/sex/plumber/bj.jpg');
    scene.text('You slowly kneel before then smelly plumber. He unbuttons his pants and his dick slaps you in your face, making you pull back.');
    if (((s as any).stat ?? 0)?.['bj'] === 0) {
      scene.text('You have never blown a guy before and you look with horror at the cock in front of you. The plumber sees your confusion and taking you by the head pulls you to the member. Unwittingly your lips touch the crimson head.');
    } else {
      scene.text('You tilt your head forward and kiss it.');
    }
    scene.actions([
      { label: 'Suck', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/apartment/sex/plumber/bj1.jpg');
    scene.text('You cup the warm and hard cock between your lips and start sucking it, uttering slurping sounds. The plumber begins to move his hips trying to drive his cock deeper into your mouth. His solid organ fills almost your entire mouth and sticks in your throat, unwittingly choking you.');
    scene.text('Tears flow from your eyes, but the plumber has already fallen into a rage, and not paying attention to you, fucking your mouth, keeping it in. Finally he quickly pull his cock out of your wet mouth and starts masturbating in front of your face.');
    qspCall(s, 'arousal', 'bj', 3, 'sub', 'deepthroat', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Close your eyes', goto: ['kit_din', 'santehnikend3'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSantehnikend2(s: GameState, scene: SceneBuilder): void {
  (s as any).kransloman = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'money', 'debt_add', 'santehnikDolg', 1500);
  if (((s as any).Grisha ?? 0) >= 1) {
  }
  if ((!((s as any).Grisha ?? 0))) {
    (s as any).Grisha = 1;
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/apartment/sex/s3.jpg');
  // TODO-QSP: dynamic text: You offer to issue the plumber a receipt of debt. He thinks for a moment and say...
  scene.text(`You offer to issue the plumber a receipt of debt. He thinks for a moment and says, "Okay. Write a receipt. Next time I'm about, I'll look in and you give me the money. ${((s as any).textsan ?? 0)} Then teking a pen and paper you write the plumber a receipt that you owe him ${qspFunc(s, 'money', 'string_price', 1500)}. Grisha takes the paper and puts it in his pocket. "If you have another leak, call me, here's my card."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Plumber leaves', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterSantehnikend3(s: GameState, scene: SceneBuilder): void {
  (s as any).ransloman = 0;
  (s as any).spafinloc = 11;
  qspCall(s, 'cum_manage', '');
  if ((!((s as any).GrishaSex ?? 0))) {
    (s as any).GrishaSex = 1;
    (s as any).guy = ((s as any).guy ?? 0) + (1);
  }
  if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
    (s as any).pcs_makeup = 0;
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/apartment/sex/plumber/bj2.jpg');
  scene.text('You feel like you are slapped in the face by something warm and viscous. Then another and another, covering your face with his white seed. Cum drips from your face on the lips, chin and cheeks. The plumber is finally spent.');
  scene.text('You can not open your eyes because they are covered in sperm which has matted your eyelashes. The plumber chuckles and says, "Classy lady. You slut." His words touch you and you feel your cheeks flush with shame.');
  scene.text('You have try wiping the sperm from the face, hoping to unstick your eyes, but you only manage to smear it all over your face. Finally you are able to open one eye and see the plumber standing over you, he smirks as he buttons up his pants.');
  scene.text('Thereafter, the plumber turna and leaves your apartment.');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get up', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterSantehnik1(s: GameState, scene: SceneBuilder): void {
  (s as any).kransloman = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/apartment/sex/s0.jpg');
  scene.text('You find a phone number for a plumber in a kitchen draw. After 20 minutes, the plumber arrives.');
  scene.text('You lead him into the kitchen and he starts to get to work. When you reached up to one of the shelves, you notice that he is staring at your ass.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Disregard', goto: ['kit_din', 'santehnikend'] },
  ]);
  scene.build();
}

function enterSantehnik(s: GameState, scene: SceneBuilder): void {
  (s as any).kransloman = 0;
  if (((s as any).husID ?? 0) !== ''  &&  ((s as any).spouseVars ?? 0)?.['drink'] !== 10  &&  ((s as any).week ?? 0) >= 6  &&  (((s as any).hour ?? 0) <= 6  ||  ((s as any).hour ?? 0) >= 17)) {
    scene.actions([{ label: 'Continue', goto: ['lover_living', 'santehnik'] }]);
  } else {
    if (((s as any).wifID ?? 0) !== ''  &&  ((s as any).spouseVars ?? 0)?.['drink'] !== 10  &&  ((s as any).week ?? 0) >= 6  &&  (((s as any).hour ?? 0) <= 6  ||  ((s as any).hour ?? 0) >= 17)) {
      scene.actions([{ label: 'Continue', goto: ['lover_living', 'santehnik_wife'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['kit_din', 'santehnik1'] }]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDirtarm(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mc_inventory ?? 0)?.['dish_soap'] <= 0) {
    scene.text('<center><b>You have no dishwashing liquid.</b></center>');
  } else {
    ((s as any).mc_inventory ?? {})['dish_soap'] = (((s as any).mc_inventory ?? {})['dish_soap'] ?? 0) - (1);
    (s as any).minut = ((s as any).minut ?? 0) + (((s as any).dirttarelka ?? 0) * 3);
    ((s as any).mc_inventory ?? {})['dish_plates'] = (((s as any).mc_inventory ?? {})['dish_plates'] ?? 0) + (((s as any).dirttarelka ?? 0));
    (s as any).dirttarelka = 0;
    qspCall(s, 'mood', 'lower', 'tiny');
    qspCall(s, 'stat', '');
    scene.img('images/shared/home/kitchen/dirt.jpg');
    scene.text('Using the dishwashing liquid you washed the dishes.');
    scene.actions([
      { label: 'Dry your hands', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterEdagotd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/shared/home/kitchen/cook.jpg');
  scene.text('What kind of meal would you like to make?');
  // TODO-QSP: end
  scene.actions([
    { label: 'Prepare a light meal (0:20)', handler: (st: GameState) => {
    // TODO-QSP: $edameal = 'small_meal'
    // TODO-QSP: gt 'kit_din', 'edagotpk', 'small_meal'
  } },
    { label: 'Prepare a normal meal (0:25)', handler: (st: GameState) => {
    // TODO-QSP: $edameal = 'medium_meal'
    // TODO-QSP: gt 'kit_din', 'edagotpk', 'medium_meal'
  } },
    { label: 'Prepare a hearty meal (0:30)', handler: (st: GameState) => {
    // TODO-QSP: $edameal = 'large_meal'
    // TODO-QSP: gt 'kit_din', 'edagotpk', 'large_meal'
  } },
    { label: 'Nevermind', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterEdagotpk(s: GameState, scene: SceneBuilder): void {
  (s as any).edahot = ((s as any).edahot ?? 0) + (1);
  ((s as any).mc_inventory ?? {})['food_basic'] = (((s as any).mc_inventory ?? {})['food_basic'] ?? 0) - (1);
  (s as any).musor = ((s as any).musor ?? 0) + (1);
  if (((s as any).loc ?? 0) !== 'uni_dorm') {
    ((s as any).mc_inventory ?? {})['dish_plates'] = (((s as any).mc_inventory ?? {})['dish_plates'] ?? 0) - (1);
  }
  qspCall(s, 'mood', 'lower', 'tiny');
  scene.img('images/shared/home/kitchen/cook.jpg');
  scene.text('You prepare the meal.');
  if (((s as any).locArgs?.[1] ?? 0) === 'large_meal') {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    scene.actions([
      { label: 'Eat cooked food (0:20)', handler: (st: GameState) => {
    // TODO-QSP: gt 'kit_din', 'edahotd', 'large_meal'
  } },
    ]);
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'small_meal') {
      (s as any).minut = ((s as any).minut ?? 0) + 20;
      scene.actions([
        { label: 'Eat cooked food (0:10)', handler: (st: GameState) => {
    // TODO-QSP: gt 'kit_din', 'edahotd', 'small_meal'
  } },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 25;
      scene.actions([
        { label: 'Eat cooked food (0:15)', handler: (st: GameState) => {
    // TODO-QSP: gt 'kit_din', 'edahotd', 'medium_meal'
  } },
      ]);
    }
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the meal', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterEdahotd(s: GameState, scene: SceneBuilder): void {
  (s as any).edahot = 0;
  qspCall(s, 'mood', 'raise', 'small');
  if (((s as any).loc ?? 0) !== 'uni_dorm') {
    (s as any).dirttarelka = ((s as any).dirttarelka ?? 0) + (1);
  }
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).ARGS ?? {})[1] = 'medium_meal';
  }
  qspCall(s, 'food', '', ((s as any).locArgs?.[1] ?? 0));
  // TODO-QSP: end
  scene.build();
}

function enterEdahota(s: GameState, scene: SceneBuilder): void {
  if (((s as any).edahot ?? 0) > 0) {
    scene.text('<a href="exec: gt \'kit_din\', \'edahotd\', \'medium_meal\'">There\'s a warm meal on the table (0:15).</a>');
  }
  // TODO-QSP: end
  scene.build();
}

function enterEatout(s: GameState, scene: SceneBuilder): void {
  (s as any).edahot = 0;
  qspCall(s, 'mood', 'raise', 'small');
  qspCall(s, 'food', 'medium_meal');
  // TODO-QSP: end
  scene.build();
}

function enterPosudomashina(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dirttarelka ?? 0) > 0  &&  ((s as any).mc_inventory ?? 0)?.['dish_soap'] >= ((s as any).dirttarelka ?? 0)) {
    ((s as any).mc_inventory ?? {})['dish_plates'] = (((s as any).mc_inventory ?? {})['dish_plates'] ?? 0) + (((s as any).dirttarelka ?? 0));
    ((s as any).mc_inventory ?? {})['dish_soap'] = (((s as any).mc_inventory ?? {})['dish_soap'] ?? 0) - (((s as any).dirttarelka ?? 0));
    (s as any).dirttarelka = 0;
    scene.text('Your dishwasher has washed the dirty dishes.');
  } else {
    if (((s as any).mc_inventory ?? 0)?.['dish_soap'] < ((s as any).dirttarelka ?? 0)) {
      scene.text('You have run out of dishwashing liquid.');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterEdasnack(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Have a snack (0:05)', handler: (st: GameState) => {
    qspCall(st, 'food', 'snack');
  } },
  ]);
  scene.build();
}

function enterPranik(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mc_inventory ?? 0)?.['food_biscuits'] > 0) {
    if (((s as any).mc_inventory ?? 0)?.['food_biscuits'] === 1) {
      scene.text('You only have one more portion of tea biscuits.');
    } else {
      // TODO-QSP: dynamic text: You have enough tea biscuits for <b><<mc_inventory['food_biscuits']>></b> more s...
      scene.text(`You have enough tea biscuits for <b>${((s as any).mc_inventory ?? 0)?.['food_biscuits']}</b> more snacks.`);
    }
    scene.actions([
      { label: 'Eat some tea biscuits (0:05)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).mc_inventory ?? {})['food_biscuits'] = (((s as any).mc_inventory ?? {})['food_biscuits'] ?? 0) - (1);
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (30);
    qspCall(s, 'mood', 'raise', 'small');
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (20);
    (s as any).fat = ((s as any).fat ?? 0) + (4);
    (s as any).frost = 0;
    qspCall(s, 'stat', '');
    scene.img('images/shared/food/food.jpg');
    scene.text('You enjoy your biscuits. You know they\'re too sweet and can\'t be good for your figure, but they taste so good!');
    scene.actions([
      { label: 'Get up from the table', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterDritea(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Have a cup of tea (0:10)', handler: (st: GameState) => {
    qspCall(st, 'beverage', 'tea');
  } },
  ]);
  scene.build();
}

function enterEdaD(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mc_inventory ?? 0)?.['food_diet'] > 0) {
    // TODO-QSP: dynamic text: The refrigerator contains <b><<mc_inventory['food_diet']>></b> healthy meals.
    scene.text(`The refrigerator contains <b>${((s as any).mc_inventory ?? 0)?.['food_diet']}</b> healthy meals.`);
    scene.actions([
      { label: 'Eat diet food (0:20)', handler: (st: GameState) => {
    (s as any).frost = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
    qspCall(s, 'mood', 'raise', 'small');
    ((s as any).mc_inventory ?? {})['food_diet'] = (((s as any).mc_inventory ?? {})['food_diet'] ?? 0) - (1);
    scene.img('images/shared/food/food.jpg');
    if (((s as any).pcs_energy ?? 0) >= 100) {
      scene.text('You prepare a diet meal and try to eat it, but you\'re really not hungry at all. You can\'t finish the meal.');
    } else {
      if (((s as any).pcs_energy ?? 0) >= 80) {
        (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (40);
        scene.text('You try to enjoy the diet meal, but half-way in you realize you weren\'t all that hungry yet. You manage to finish the meal, but feel like it was kind of wasted.');
      } else {
        (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (80);
        scene.text('The diet meal is tasty, and you enjoy eating it.');
      }
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get up from the table', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterFatdel(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mc_inventory ?? 0)?.['weight_loss_pill'] > 0) {
    scene.actions([
      { label: 'Take fat burners (0:05)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).mc_inventory ?? {})['weight_loss_pill'] = (((s as any).mc_inventory ?? {})['weight_loss_pill'] ?? 0) - (1);
    if (((s as any).pcs_hydra ?? 0) >= 100) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (25);
    } else {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (50);
    }
    (s as any).fat = ((s as any).fat ?? 0) - (20);
    scene.text('You drink the fat burning capsule. These capsules are quick release and results can be seen soon.');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get up from the table', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterDriwater(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Drink some water (0:01)', handler: (st: GameState) => {
    qspCall(st, 'beverage', 'water');
  } },
  ]);
  scene.build();
}

function enterFillBottle(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mc_inventory ?? 0)?.['refill_bottle'] > 0  &&  ((s as any).mc_inventory ?? 0)?.['refill_bottle_water'] < 4) {
    scene.text('You can fill your sports water bottle with filtrated tap water.');
    scene.actions([
      { label: 'Fill your water bottle (0:01)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    ((s as any).mc_inventory ?? {})['refill_bottle_water'] = 4;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSandwich(s: GameState, scene: SceneBuilder): void {
  if (((s as any).bag ?? 0) > 0  &&  ((s as any).mc_inventory ?? 0)?.['food_sandwich'] === 0) {
    scene.actions([
      { label: 'Make a sandwich to go (0:05)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).mc_inventory ?? {})['food_sandwich'] = 1;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterLekarstvo(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mc_inventory ?? 0)?.['antibiotics'] > 0) {
    // TODO-QSP: dynamic text: You have <b><<mc_inventory['antibiotics']>></b> antibiotics.
    scene.text(`You have <b>${((s as any).mc_inventory ?? 0)?.['antibiotics']}</b> antibiotics.`);
    if (((s as any).sick ?? 0) > 0  &&  ((s as any).lekarday ?? 0) !== ((s as any).daystart ?? 0)) {
      scene.actions([
        { label: 'Take an antibiotic (0:05)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).lekarday = ((s as any).daystart ?? 0);
    ((s as any).mc_inventory ?? {})['antibiotics'] = (((s as any).mc_inventory ?? {})['antibiotics'] ?? 0) - (1);
    (s as any).sick = ((s as any).sick ?? 0) - (((s as any).sick ?? 0) * 20 / 100);
    if (((s as any).pcs_hydra ?? 0) >= 100) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (25);
    } else {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (50);
    }
    scene.img(`images/locations/shared/apartment/event/sick/lekr${Math.floor(Math.random() * 3) + 1}.jpg`);
    scene.text('You took an antibiotic pill');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterVitamin(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mc_inventory ?? 0)?.['vitamins'] > 0) {
    // TODO-QSP: dynamic text: You have <b><<mc_inventory['vitamins']>></b> vitamin drinks.
    scene.text(`You have <b>${((s as any).mc_inventory ?? 0)?.['vitamins']}</b> vitamin drinks.`);
    if (((s as any).vitaminday ?? 0) !== ((s as any).daystart ?? 0)) {
      scene.actions([
        { label: 'Take vitamins (0:02)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    (s as any).vitaminday = ((s as any).daystart ?? 0);
    ((s as any).mc_inventory ?? {})['vitamins'] = (((s as any).mc_inventory ?? {})['vitamins'] ?? 0) - (1);
    (s as any).frost = 0;
    if (((s as any).pcs_hydra ?? 0) >= 100) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (25);
    } else {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (50);
    }
    if (((s as any).KandidozOnce ?? 0) === 1) {
      (s as any).Kandidoz = ((s as any).Kandidoz ?? 0) - (2);
    }
    if (((s as any).GerpesOnce ?? 0) === 1) {
      (s as any).Gerpes = ((s as any).Gerpes ?? 0) - (2);
    }
    if (((s as any).SifacOnce ?? 0) === 1  &&  ((s as any).Sifilis ?? 0) >= 10) {
      (s as any).Sifilis = ((s as any).Sifilis ?? 0) - (Math.floor(Math.random() * 2) + 0);
    }
    (s as any).skinDailyGain = ((s as any).skinDailyGain ?? 0) + (1);
    scene.text('You took some vitamins.');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSandwichDo(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).mc_inventory ?? {})['food_sandwich'] = 1;
  qspCall(s, 'stat', '');
  scene.text('You make a sandwich to take with you.');
  qspCall(s, 'daily_routine', 'visit_item_done', 'sandwich');
  // TODO-QSP: end
  scene.build();
}

function enterFillBottleDo(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  ((s as any).mc_inventory ?? {})['refill_bottle_water'] = 4;
  qspCall(s, 'stat', '');
  scene.text('You fill your sports water bottle with filtered tap water.');
  qspCall(s, 'daily_routine', 'visit_item_done', 'fill_bottle');
  // TODO-QSP: end
  scene.build();
}

function enterEdaDDo(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
  qspCall(s, 'mood', 'raise', 'small');
  ((s as any).mc_inventory ?? {})['food_diet'] = (((s as any).mc_inventory ?? {})['food_diet'] ?? 0) - (1);
  scene.img('images/shared/food/food.jpg');
  if (((s as any).pcs_energy ?? 0) >= 100) {
    scene.text('You prepare a diet meal and try to eat it, but you\'re really not hungry at all. You can\'t finish the meal.');
  } else {
    if (((s as any).pcs_energy ?? 0) >= 80) {
      (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (40);
      scene.text('You try to enjoy the diet meal, but half-way in you realize you weren\'t all that hungry yet. You manage to finish the meal, but feel like it was kind of wasted.');
    } else {
      (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (80);
      scene.text('The diet meal is tasty, and you enjoy eating it.');
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'daily_routine', 'visit_item_done', 'edaD');
  // TODO-QSP: end
  scene.build();
}

function enterLekarstvoDo(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).lekarday = ((s as any).daystart ?? 0);
  ((s as any).mc_inventory ?? {})['antibiotics'] = (((s as any).mc_inventory ?? {})['antibiotics'] ?? 0) - (1);
  (s as any).sick = ((s as any).sick ?? 0) - (((s as any).sick ?? 0) * 20 / 100);
  if (((s as any).pcs_hydra ?? 0) >= 100) {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (25);
  } else {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (50);
  }
  scene.img(`images/locations/shared/apartment/event/sick/lekr${Math.floor(Math.random() * 3) + 1}.jpg`);
  scene.text('You took an antibiotic pill');
  qspCall(s, 'stat', '');
  qspCall(s, 'daily_routine', 'visit_item_done', 'lekarstvo');
  // TODO-QSP: end
  scene.build();
}

function enterVitaminDo(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  (s as any).vitaminday = ((s as any).daystart ?? 0);
  ((s as any).mc_inventory ?? {})['vitamins'] = (((s as any).mc_inventory ?? {})['vitamins'] ?? 0) - (1);
  (s as any).frost = 0;
  if (((s as any).pcs_hydra ?? 0) >= 100) {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (25);
  } else {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (50);
  }
  if (((s as any).KandidozOnce ?? 0) === 1) {
    (s as any).Kandidoz = ((s as any).Kandidoz ?? 0) - (2);
  }
  if (((s as any).GerpesOnce ?? 0) === 1) {
    (s as any).Gerpes = ((s as any).Gerpes ?? 0) - (2);
  }
  if (((s as any).SifacOnce ?? 0) === 1  &&  ((s as any).Sifilis ?? 0) >= 10) {
    (s as any).Sifilis = ((s as any).Sifilis ?? 0) - (Math.floor(Math.random() * 2) + 0);
  }
  (s as any).skinDailyGain = ((s as any).skinDailyGain ?? 0) + (1);
  scene.text('You took some vitamins.');
  qspCall(s, 'stat', '');
  qspCall(s, 'daily_routine', 'visit_item_done', 'vitamin');
  // TODO-QSP: end
  scene.build();
}

function enterDriwaterDo(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'beverage', 'water');
  qspCall(s, 'daily_routine', 'visit_item_done', 'driwater');
  // TODO-QSP: end
  scene.build();
}

function enterDriteaDo(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'beverage', 'tea');
  qspCall(s, 'daily_routine', 'visit_item_done', 'dritea');
  // TODO-QSP: end
  scene.build();
}

function enterEdasnackDo(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'food', 'snack');
  qspCall(s, 'daily_routine', 'visit_item_done', 'edasnack');
  // TODO-QSP: end
  scene.build();
}

function enterCookMealDo(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/shared/home/kitchen/cook.jpg');
  if (((s as any).mc_inventory ?? 0)?.['food_basic'] > 0  &&  ((s as any).edahot ?? 0) === 0  &&  (((s as any).mc_inventory ?? 0)?.['dish_plates'] > 0  ||  ((s as any).loc ?? 0) === 'uni_dorm')) {
    scene.text('What kind of meal would you like to prepare?');
    scene.actions([
      { label: 'Prepare a light meal (0:20)', handler: (st: GameState) => {
    // TODO-QSP: gt 'kit_din', 'cook_meal_pk', 'small_meal'
  } },
      { label: 'Prepare a normal meal (0:25)', handler: (st: GameState) => {
    // TODO-QSP: gt 'kit_din', 'cook_meal_pk', 'medium_meal'
  } },
      { label: 'Prepare a hearty meal (0:30)', handler: (st: GameState) => {
    // TODO-QSP: gt 'kit_din', 'cook_meal_pk', 'large_meal'
  } },
    ]);
  } else {
    if (((s as any).edahot ?? 0) > 0) {
      scene.text('There is already a warm meal on the table - no need to cook again.');
      scene.actions([
        { label: 'Nevermind', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', 'kit_din', 'cook_meal_do');
  } },
      ]);
    } else {
      if (((s as any).mc_inventory ?? 0)?.['dish_plates'] <= 0) {
        scene.text('You have no clean plates to cook with. Wash the dishes first.');
        scene.actions([
          { label: 'Nevermind', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', 'kit_din', 'cook_meal_do');
  } },
        ]);
      } else {
        scene.text('There is no food in the refrigerator to cook with.');
        scene.actions([
          { label: 'Nevermind', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', 'kit_din', 'cook_meal_do');
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCookMealPk(s: GameState, scene: SceneBuilder): void {
  (s as any).edahot = ((s as any).edahot ?? 0) + (1);
  ((s as any).mc_inventory ?? {})['food_basic'] = (((s as any).mc_inventory ?? {})['food_basic'] ?? 0) - (1);
  (s as any).musor = ((s as any).musor ?? 0) + (1);
  if (((s as any).loc ?? 0) !== 'uni_dorm') {
    ((s as any).mc_inventory ?? {})['dish_plates'] = (((s as any).mc_inventory ?? {})['dish_plates'] ?? 0) - (1);
  }
  qspCall(s, 'mood', 'lower', 'tiny');
  if (((s as any).locArgs?.[1] ?? 0) === 'large_meal') {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'small_meal') {
      (s as any).minut = ((s as any).minut ?? 0) + 20;
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 25;
    }
  }
  qspCall(s, 'stat', '');
  scene.img('images/shared/home/kitchen/cook.jpg');
  scene.text('You prepare the meal and leave it on the table, still warm.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', 'kit_din', 'cook_meal_do');
  } },
  ]);
  scene.build();
}

function enterEatMealDo(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/shared/home/kitchen/cook.jpg');
  if (((s as any).home_name ?? 0)?.[String((s as any).loc ?? 0)] === 'parents_home') {
    qspCall(s, 'kit_din', 'parents_meal_options');
  } else {
    (s as any).eat_opt_count = 0;
    scene.text('What would you like to eat?');
    if (((s as any).edahot ?? 0) > 0) {
      (s as any).eat_opt_count = ((s as any).eat_opt_count ?? 0) + (1);
      scene.actions([
        { label: 'Eat the warm meal - light portion (0:10)', handler: (st: GameState) => {
    // TODO-QSP: gt 'kit_din', 'eat_warm_pk', 'small_meal'
  } },
        { label: 'Eat the warm meal - normal portion (0:15)', handler: (st: GameState) => {
    // TODO-QSP: gt 'kit_din', 'eat_warm_pk', 'medium_meal'
  } },
        { label: 'Eat the warm meal - hearty portion (0:20)', handler: (st: GameState) => {
    // TODO-QSP: gt 'kit_din', 'eat_warm_pk', 'large_meal'
  } },
      ]);
    }
    if (((s as any).mc_inventory ?? 0)?.['food_basic'] > 0  &&  (((s as any).mc_inventory ?? 0)?.['dish_plates'] > 0  ||  ((s as any).loc ?? 0) === 'uni_dorm')) {
      (s as any).eat_opt_count = ((s as any).eat_opt_count ?? 0) + (1);
      scene.actions([
        { label: 'Cook and eat - light (0:30)', handler: (st: GameState) => {
    // TODO-QSP: gt 'kit_din', 'eat_cooked_pk', 'small_meal'
  } },
        { label: 'Cook and eat - normal (0:40)', handler: (st: GameState) => {
    // TODO-QSP: gt 'kit_din', 'eat_cooked_pk', 'medium_meal'
  } },
        { label: 'Cook and eat - hearty (0:50)', handler: (st: GameState) => {
    // TODO-QSP: gt 'kit_din', 'eat_cooked_pk', 'large_meal'
  } },
      ]);
    }
    if (((s as any).mc_inventory ?? 0)?.['food_diet'] > 0) {
      (s as any).eat_opt_count = ((s as any).eat_opt_count ?? 0) + (1);
      scene.actions([
        { label: 'Eat diet food (0:20)', goto: ['kit_din', 'eat_diet_pk'] },
      ]);
    }
    if (qspFunc(s, 'daily_routine', 'home_has_food')) {
      (s as any).eat_opt_count = ((s as any).eat_opt_count ?? 0) + (1);
      scene.actions([
        { label: 'Eat a light meal (0:10)', handler: (st: GameState) => {
    qspCall(st, 'food', 'small_meal');
  } },
        { label: 'Eat a normal meal (0:15)', handler: (st: GameState) => {
    qspCall(st, 'food', 'medium_meal');
  } },
        { label: 'Eat a hearty meal (0:20)', handler: (st: GameState) => {
    qspCall(st, 'food', 'large_meal');
  } },
      ]);
    }
    if ((!((s as any).eat_opt_count ?? 0))) {
      scene.text('There is nothing available to eat right now. You will need to go shopping.');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Nevermind', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', 'kit_din', 'eat_meal_do');
  } },
  ]);
  scene.build();
}

function enterParentsMealOptions(s: GameState, scene: SceneBuilder): void {
  if (((s as any).breakfast_day ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).locat ?? 0)?.['Fam_inGad'] === 0  &&  ((((s as any).hour ?? 0) === 6  &&  ((s as any).minut ?? 0) >= 45)  ||  (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) < 15))) {
    if (((s as any).cumloc ?? 0)[11] === 1  ||  ((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1) {
      scene.actions([
        { label: 'Eat breakfast with your family', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A29', (-20));
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/prost6.jpg');
    // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> glares at you as you sit down and you realize you ...
    scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} glares at you as you sit down and you realize you still have cum on you!`);
    scene.text('"How disgusting! And at the breakfast table! Have you no shame?! Get out of my sight, whore!"');
    scene.text('Knowing there\'s nothing you can say, you simply mumble an apology and quickly head to the bathroom.');
    scene.actions([
      { label: 'Go to the bathroom', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'abort');
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['vanrPar', ''] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).PSwim ?? 0) !== 1  &&  ((s as any).clothingworntype ?? 0) !== 'nude') {
        scene.actions([
          { label: 'Eat breakfast with your family (0:20)', handler: (st: GameState) => {
    qspCall(s, 'food', 'family_meals', 'breakfast');
    qspCall(s, 'npc_relationship', 'modify', 'A29', 1);
    (s as any).breakfast_day = ((s as any).daystart ?? 0);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/home/breakfasthome.jpg');
    scene.text('As you sit down and join your family for breakfast, your stepfather engages you in conversation.');
    if (((s as any).kanikuli ?? 0) === 0  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).home ?? 0)?.['current'] === 'parents_home'  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0) {
      if (((s as any).class ?? 0)?.['school_grade_average'] >= 80) {
        // TODO-QSP: dynamic text: "So how are you doing in school, <<$pcs_nickname>>?" he asks.
        scene.text(`"So how are you doing in school, ${((s as any).pcs_nickname ?? 0)}?" he asks.`);
        scene.text('You smile at him. "Really great. We were just learning something interesting the other day."');
        if ((((s as any).motherKnowSpravka ?? 0) > 0  ||  ((s as any).motherKnowWhore ?? 0) > 0)  &&  (((s as any).npc_rel ?? 0)?.['A29'] <= 20  ||  ((s as any).npc_QW ?? 0)?.['A29'] === 1)) {
          scene.text('You go on to talk about some of the stuff you\'ve learned recently in school. He nods, while your mother just listens in frosty silence.');
          scene.text('"I\'m surprised you found time to study inbetween all the sleeping around you\'re doing," she scoffs.');
          scene.text('"Not at the breakfast table, dear," your stepfather says and tries continuing the conversation, but the tense awkwardness between you and your mother causes the conversation to fizzle out.');
          scene.text('While the food was good, the company could have been a lot better.');
        } else {
          scene.text('You go on to talk about some of the stuff you\'ve learned recently in school. He nods in approval, while your mother gives you a proud smile and Kolka rolls his eyes.');
          scene.text('The rest of breakfast is taken up with some small talk about what everyone has been up to of late. You thoroughly enjoy your breakfast with your family.');
        }
      } else {
        // TODO-QSP: dynamic text: "So how are you doing in school, <<$pcs_nickname>>?" he asks.
        scene.text(`"So how are you doing in school, ${((s as any).pcs_nickname ?? 0)}?" he asks.`);
        scene.text('You glance at him. "Um… Okay, I guess…"');
        if ((((s as any).motherKnowSpravka ?? 0) > 0  ||  ((s as any).motherKnowWhore ?? 0) > 0)  &&  (((s as any).npc_rel ?? 0)?.['A29'] <= 20  ||  ((s as any).npc_QW ?? 0)?.['A29'] === 1)) {
          scene.text('You notice your mother frowning at you, so you quickly try to change the subject, but she won\'t let you.');
          scene.text('"Maybe if you bothered to spend time studying instead of sleeping around, your grades would be as good as your brother\'s," she scoffs.');
          scene.text('"Not at the breakfast table, dear," your stepfather says and tries continuing the conversation, but the tense awkwardness between you and your mother causes the conversation to fizzle out.');
          scene.text('While the food was good, the company could have been a lot better.');
        } else {
          scene.text('You notice your mother frowning at you and quickly try to change the subject, but they won\'t let you. You do your best to make them think you\'re doing better than you are, but they don\'t buy it. Kolka snickers at you getting grilled.');
          scene.text('The rest of breakfast is taken up talking about how Kolka is doing in school. He seems to be doing better than you and is showered with praise from your mother and stepfather. The food was good, even if the conversation wasn\'t the best.');
        }
      }
    } else {
      if (((s as any).kanikuli ?? 0) !== 0) {
        scene.text('You smile at him. "I\'m enjoying some time away from school hanging out with my friends. It\'s nice to just relax for a change."');
        if ((((s as any).motherKnowSpravka ?? 0) > 0  ||  ((s as any).motherKnowWhore ?? 0) > 0)  &&  (((s as any).npc_rel ?? 0)?.['A29'] <= 20  ||  ((s as any).npc_QW ?? 0)?.['A29'] === 1)) {
          scene.text('Your mother speaks up. "Maybe use this time to catch up on your studying instead of sleeping around. You can still make it into university even if you are-"');
          scene.text('You roll your eyes, but before either of you can say something, your stepfather lays his hand on your mother\'s. "Not at the breakfast table, dear."');
          scene.text('She just glares at you both before sighing.');
        } else {
          scene.text('Your mother speaks up. "It wouldn\'t hurt to study your school books and get ahead of your courses to get better grades."');
          scene.text('You roll your eyes, but before you can respond, your stepfather lays his hand on your mother\'s. "Let her enjoy herself, dear. This is her last year before she goes to university after all," he says with a little emphasis.');
          scene.text('You just sigh and nod as you both know that\'s what your mother wants.');
        }
      } else {
        scene.text('"So have you found a cute boy who\'s head over heels in love with you and wants to take you out on dates?" he asks in a slightly teasing tone.');
        if ((((s as any).motherKnowSpravka ?? 0) > 0  ||  ((s as any).motherKnowWhore ?? 0) > 0)  &&  (((s as any).npc_rel ?? 0)?.['A29'] <= 20  ||  ((s as any).npc_QW ?? 0)?.['A29'] === 1)) {
          scene.text('You\'re about to answer when your mother scoffs. "I\'m sure she\'s found herself <i>plenty</i> of boys by now."');
          scene.text('"Natasha!" your stepfather yells. "I know you have your... opinion on the matter, but that\'s hardly an appropriate reponse!"');
          scene.text('Kolka just snickers outside of your stepfather\'s view as your mother gives you a disapproving glare.');
        } else {
          scene.text('Your mother smacks his arm. "She\'s too young for that! She needs to focus on school!"');
          scene.text('You\'re about to answer when Kolka chimes in. "Like any boy would want to be seen with her!"');
          scene.text('This earns him a playful punch on the arm from you and before long, you\'re all bantering at the table.');
        }
      }
    }
    scene.actions([
      { label: 'Get up from the table', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
    ]);
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Eat breakfast with your family', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A29', (-10));
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/home/breakfasthome.jpg');
    scene.text('Everyone stares at you as you sit down for breakfast.');
    scene.text('"What?" you exclaim.');
    if ((((s as any).motherKnowSpravka ?? 0) > 0  ||  ((s as any).motherKnowWhore ?? 0) > 0)  &&  (((s as any).npc_rel ?? 0)?.['A29'] <= 20  ||  ((s as any).npc_QW ?? 0)?.['A29'] === 1)) {
      scene.text('"Of course my whore of a so called daughter thinks <i>this</i> is appropriate at the breakfast table! Go and put some clothes on, you shameless slut!" she growls before throwing you out of the room.');
    } else {
      // TODO-QSP: dynamic text: Your mother stands up from her seat, nearly knocking the chair over in the proce...
      scene.text(`Your mother stands up from her seat, nearly knocking the chair over in the process. "What on God's earth are you doing, ${((s as any).pcs_nickname ?? 0)}?! Have you have no shame?! Go and get dressed <i>immediately</i>, young lady!"`);
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(s, 'daily_routine', 'abort');
    (s as any).minut = ((s as any).minut ?? 0) + (1);
  } },
    ]);
  } },
        ]);
      }
    }
  } else {
    if (((s as any).breakfast_day ?? 0) !== ((s as any).daystart ?? 0)  &&  (((s as any).hour ?? 0) === 6  &&  ((s as any).minut ?? 0) >= 45  ||  ((s as any).hour ?? 0) === 7  ||  ((s as any).hour ?? 0) === 8)) {
      scene.actions([
        { label: 'Eat breakfast alone (0:20)', handler: (st: GameState) => {
    (s as any).breakfast_day = ((s as any).daystart ?? 0);
    qspCall(s, 'food', 'family_meals', 'breakfast');
    qspCall(s, 'food', 'aftermeal');
    qspCall(s, 'stat', '');
    scene.img('images/shared/food/breakfast_\'+rand(0, 1)+\'.jpg');
    // TODO-QSP: dynamic text: You enjoy a quiet breakfast by yourself. The portions were moderate and<<$mtxt>>...
    scene.text(`You enjoy a quiet breakfast by yourself. The portions were moderate and${((s as any).mtxt ?? 0)} You accompany it with a mug of tea.`);
    scene.actions([
      { label: 'Get up from the table', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).dinner_day ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).locat ?? 0)?.['Fam_inGad'] === 0  &&  ((s as any).hour ?? 0) === 18  &&  ((s as any).minut ?? 0) <= 30) {
        if (((s as any).cumloc ?? 0)[11] === 1  ||  ((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1) {
          scene.actions([
            { label: 'Eat dinner with your family', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A29', (-20));
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/prost6.jpg');
    // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> glares at you as you sit down and you realize you ...
    scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} glares at you as you sit down and you realize you still have cum on you!`);
    scene.text('"How disgusting! And at the dinner table! Have you no shame?! Get out of my sight, whore!"');
    scene.text('Knowing there\'s nothing you can say, you simply mumble an apology and quickly head to the bathroom.');
    scene.actions([
      { label: 'Go to the bathroom', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'abort');
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['vanrPar', ''] },
    ]);
  } },
          ]);
        } else {
          if (((s as any).PSwim ?? 0) !== 1  &&  ((s as any).clothingworntype ?? 0) !== 'nude') {
            scene.actions([
              { label: 'Eat dinner with your family (0:20)', handler: (st: GameState) => {
    qspCall(s, 'food', 'family_meals', 'dinner');
    qspCall(s, 'npc_relationship', 'modify', 'A29', 1);
    (s as any).dinner_day = ((s as any).daystart ?? 0);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/home/dinnerhome.jpg');
    // TODO-QSP: dynamic text: You sit down and join your family for dinner and your stepfather starts teasing ...
    scene.text(`You sit down and join your family for dinner and your stepfather starts teasing you. "So. Do you have a boyfriend yet, ${((s as any).pcs_nickname ?? 0)}?"`);
    if ((((s as any).motherKnowSpravka ?? 0) > 0  ||  ((s as any).motherKnowWhore ?? 0) > 0)  &&  (((s as any).npc_rel ?? 0)?.['A29'] <= 20  ||  ((s as any).npc_QW ?? 0)?.['A29'] === 1)) {
      scene.text('You\'re about to answer when your mother scoffs. "I\'m sure she\'s found herself <i>plenty</i> of boys by now."');
      scene.text('"Natasha!" your stepfather yells. "I know you have your... opinion on the matter, but that\'s hardly an appropriate reponse!"');
      if (((s as any).locat ?? 0)?.['Anya'] === 12) {
        scene.text('Anya rolls her eyes and Kolka snickers as your mother gives you a disapproving glare.');
      } else {
        scene.text('Kolka just snickers outside of your stepfather\'s view as your mother gives you a disapproving glare.');
      }
    } else {
      if (((s as any).fame ?? 0)?.['pav_slut'] > 150  &&  (!((s as any).motherKnowSpravka ?? 0))) {
        scene.text('You\'re about to respond when your mother interrupts you. "Of course not! She\'s still too young to be thinking about boys!"');
        scene.text('Kolka then chimes in. "Like any boy would date her when she sucks them all off anyway."');
        scene.text('She turns towards him. "That\'s not funny! Apologize to your sister right now! Right now!"');
        if (((s as any).locat ?? 0)?.['Anya'] === 12) {
          scene.text('Anya smirks as Kolka freezes in place and decides he doesn\'t want to be the one to tell her about your reputation. He quickly apologizes to you.');
        } else {
          scene.text('Kolka freezes in place and decides he doesn\'t want to be the one to tell her about your reputation. He quickly apologizes to you.');
        }
        scene.text('Your stepfather clears his throat and quickly changes the subject, talking about how his work went. After that, you have a fairly enjoyable dinner.');
      } else {
        if (((s as any).fame ?? 0)?.['pav_slut'] > 150) {
          scene.text('You\'re about to respond when your mother interrupts you. "She\'s too young to worry about that and… we talked about it." She gives you a meaningful glance and you shut your mouth.');
          scene.text('Kolka then chimes in. "Like any boy would date her when she sucks them all off anyway."');
          scene.text('She turns towards Kolka. "That\'s not funny!" She then glances at you. "She might have made some mistakes, but she\'s trying to be a better girl now. Now apologize to your sister right now!"');
          if (((s as any).locat ?? 0)?.['Anya'] === 12) {
            scene.text('Anya just smirks as Kolka freezes in place and apologizes to you.');
          } else {
            scene.text('Startled, Kolka freezes in place and apologizes to you.');
          }
          scene.text('Your stepfather clears his throat and quickly changes the subject, talking about how his work went. After that, you have a fairly enjoyable dinner.');
        } else {
          if (((s as any).npc_QW ?? 0)?.['A29'] === 2) {
            scene.text('You\'re about to respond when your mother interrupts you. "We\'ve spoken about this. It\'s okay if she starts dating so long as she\'s careful, but I\'d prefer if she focused on university first. She has plenty of time to settle down after that."');
            // TODO-QSP: dynamic text: "Is that what <<$pcs_nickname>> wants?" he asks. "Maybe she wants to settle down...
            scene.text(`"Is that what ${((s as any).pcs_nickname ?? 0)} wants?" he asks. "Maybe she wants to settle down and start a family of her own without worrying about university?"`);
            scene.text('Your mother gives him a hard stare and he drops it before he starts talking about some of the stuff that happened at his work. All and all, you have a fairly enjoyable dinner.');
          } else {
            scene.text('You\'re about to respond when your mother interrupts you. "Of course not! She\'s still too young to be thinking about boys!"');
            scene.text('Your stepfather sighs. "She\'s old enough to start dating, dear."');
            scene.text('Your mother gives him a hard stare. "No, she isn\'t. She needs to focus on school and then university before she can start thinking about boys."');
            scene.text('Your stepfather decides to drop it and start talking about some of the stuff that happened at his work. All and all, you have a fairly enjoyable dinner.');
          }
        }
      }
    }
    scene.actions([
      { label: 'Get up from the table', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
    ]);
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Eat dinner with your family', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A29', (-10));
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/home/dinnerhome.jpg');
    scene.text('Everyone stares at you as you sit down for dinner.');
    scene.text('"What?" you exclaim.');
    if ((((s as any).motherKnowSpravka ?? 0) > 0  ||  ((s as any).motherKnowWhore ?? 0) > 0)  &&  (((s as any).npc_rel ?? 0)?.['A29'] <= 20  ||  ((s as any).npc_QW ?? 0)?.['A29'] === 1)) {
      scene.text('"Of course my whore of a so called daughter thinks <i>this</i> is appropriate at the dinner table! Go and put some clothes on, you shameless slut!" she growls before throwing you out of the room.');
    } else {
      // TODO-QSP: dynamic text: Your mother stands up from her seat, nearly knocking the chair over in the proce...
      scene.text(`Your mother stands up from her seat, nearly knocking the chair over in the process. "What on God's earth are you doing, ${((s as any).pcs_nickname ?? 0)}?! Have you have no shame?! Go and get dressed <i>immediately</i>, young lady!"`);
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(s, 'daily_routine', 'abort');
    (s as any).minut = ((s as any).minut ?? 0) + (1);
  } },
    ]);
  } },
            ]);
          }
        }
      } else {
        scene.actions([
          { label: 'Eat a hearty meal (0:20)', handler: (st: GameState) => {
    qspCall(st, 'food', 'large_meal');
  } },
          { label: 'Eat a normal meal (0:15)', handler: (st: GameState) => {
    qspCall(st, 'food', 'medium_meal');
  } },
          { label: 'Eat a light meal (0:10)', handler: (st: GameState) => {
    qspCall(st, 'food', 'small_meal');
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterEatWarmPk(s: GameState, scene: SceneBuilder): void {
  (s as any).edahot = 0;
  qspCall(s, 'mood', 'raise', 'small');
  if (((s as any).loc ?? 0) !== 'uni_dorm') {
    (s as any).dirttarelka = ((s as any).dirttarelka ?? 0) + (1);
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'small_meal') {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'food', 'small_meal_stats');
    qspCall(s, 'food', 'small_meal_text');
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'large_meal') {
      (s as any).minut = ((s as any).minut ?? 0) + 20;
      qspCall(s, 'food', 'large_meal_stats');
      qspCall(s, 'food', 'large_meal_text');
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 15;
      qspCall(s, 'food', 'medium_meal_stats');
      qspCall(s, 'food', 'medium_meal_text');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', 'kit_din', 'eat_meal_do');
  } },
  ]);
  scene.build();
}

function enterEatCookedPk(s: GameState, scene: SceneBuilder): void {
  ((s as any).mc_inventory ?? {})['food_basic'] = (((s as any).mc_inventory ?? {})['food_basic'] ?? 0) - (1);
  (s as any).musor = ((s as any).musor ?? 0) + (1);
  if (((s as any).loc ?? 0) !== 'uni_dorm') {
    ((s as any).mc_inventory ?? {})['dish_plates'] = (((s as any).mc_inventory ?? {})['dish_plates'] ?? 0) - (1);
  }
  qspCall(s, 'mood', 'lower', 'tiny');
  qspCall(s, 'mood', 'raise', 'small');
  if (((s as any).locArgs?.[1] ?? 0) === 'small_meal') {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'food', 'small_meal_stats');
    qspCall(s, 'food', 'small_meal_text');
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'large_meal') {
      (s as any).minut = ((s as any).minut ?? 0) + 50;
      qspCall(s, 'food', 'large_meal_stats');
      qspCall(s, 'food', 'large_meal_text');
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 40;
      qspCall(s, 'food', 'medium_meal_stats');
      qspCall(s, 'food', 'medium_meal_text');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', 'kit_din', 'eat_meal_do');
  } },
  ]);
  scene.build();
}

function enterEatDietPk(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
  qspCall(s, 'mood', 'raise', 'small');
  ((s as any).mc_inventory ?? {})['food_diet'] = (((s as any).mc_inventory ?? {})['food_diet'] ?? 0) - (1);
  scene.img('images/shared/food/food.jpg');
  if (((s as any).pcs_energy ?? 0) >= 100) {
    scene.text('You prepare a diet meal and try to eat it, but you\'re really not hungry at all. You can\'t finish the meal.');
  } else {
    if (((s as any).pcs_energy ?? 0) >= 80) {
      (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (40);
      scene.text('You try to enjoy the diet meal, but half-way in you realise you weren\'t all that hungry yet. You manage to finish the meal, but it feels like it was somewhat wasted.');
    } else {
      (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (80);
      scene.text('The diet meal is tasty, and you enjoy eating it.');
    }
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', 'kit_din', 'eat_meal_do');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'kitchen_acts':
      enterKitchenActs(s, scene);
      break;
    case 'santehnikgr':
      enterSantehnikgr(s, scene);
      break;
    case 'santehnikend':
      enterSantehnikend(s, scene);
      break;
    case 'santehnikend1':
      enterSantehnikend1(s, scene);
      break;
    case 'santehnikend2':
      enterSantehnikend2(s, scene);
      break;
    case 'santehnikend3':
      enterSantehnikend3(s, scene);
      break;
    case 'santehnik1':
      enterSantehnik1(s, scene);
      break;
    case 'santehnik':
      enterSantehnik(s, scene);
      break;
    case 'dirtarm':
      enterDirtarm(s, scene);
      break;
    case 'edagotd':
      enterEdagotd(s, scene);
      break;
    case 'edagotpk':
      enterEdagotpk(s, scene);
      break;
    case 'edahotd':
      enterEdahotd(s, scene);
      break;
    case 'edahota':
      enterEdahota(s, scene);
      break;
    case 'eatout':
      enterEatout(s, scene);
      break;
    case 'posudomashina':
      enterPosudomashina(s, scene);
      break;
    case 'edasnack':
      enterEdasnack(s, scene);
      break;
    case 'pranik':
      enterPranik(s, scene);
      break;
    case 'dritea':
      enterDritea(s, scene);
      break;
    case 'edaD':
      enterEdaD(s, scene);
      break;
    case 'fatdel':
      enterFatdel(s, scene);
      break;
    case 'driwater':
      enterDriwater(s, scene);
      break;
    case 'fill_bottle':
      enterFillBottle(s, scene);
      break;
    case 'sandwich':
      enterSandwich(s, scene);
      break;
    case 'lekarstvo':
      enterLekarstvo(s, scene);
      break;
    case 'vitamin':
      enterVitamin(s, scene);
      break;
    case 'sandwich_do':
      enterSandwichDo(s, scene);
      break;
    case 'fill_bottle_do':
      enterFillBottleDo(s, scene);
      break;
    case 'edaD_do':
      enterEdaDDo(s, scene);
      break;
    case 'lekarstvo_do':
      enterLekarstvoDo(s, scene);
      break;
    case 'vitamin_do':
      enterVitaminDo(s, scene);
      break;
    case 'driwater_do':
      enterDriwaterDo(s, scene);
      break;
    case 'dritea_do':
      enterDriteaDo(s, scene);
      break;
    case 'edasnack_do':
      enterEdasnackDo(s, scene);
      break;
    case 'cook_meal_do':
      enterCookMealDo(s, scene);
      break;
    case 'cook_meal_pk':
      enterCookMealPk(s, scene);
      break;
    case 'eat_meal_do':
      enterEatMealDo(s, scene);
      break;
    case 'parents_meal_options':
      enterParentsMealOptions(s, scene);
      break;
    case 'eat_warm_pk':
      enterEatWarmPk(s, scene);
      break;
    case 'eat_cooked_pk':
      enterEatCookedPk(s, scene);
      break;
    case 'eat_diet_pk':
      enterEatDietPk(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const kit_din: LocationDef = {
  name: 'kit_din',
  title: 'You have no dishwashing liquid.',
  region: 'other',
  enter: enter,
};
