import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterTerminalOfficeScreen(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $func('wrap', 'header b center', $ARGS[1])
  scene.img('images/locations/city/industrial/terminal/\'+$ARGS[2]+\'.jpg');
  scene.build();
}

function enter00(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'TerminalOffice', '00');
  qspCall(s, 'stat', '');
  qspCall(s, 'TerminalOffice', 'TerminalOfficeScreen', 'Hall office space', 'terminal4');
  scene.text('You are standing in the lobby of the terminal office.');
  scene.actions([
    { label: 'Leave the office', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['Terminal', ''] },
    { label: 'Go to the sales department', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['TerminalOffice', '11'] },
    { label: 'Go to the accounting department', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['TerminalOffice', '21'] },
    { label: 'Go and see the Manager', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['TerminalOffice', '31'] },
  ]);
  scene.build();
}

function enter11(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'TerminalOffice', '11');
  qspCall(s, 'stat', '');
  qspCall(s, 'TerminalOffice', 'TerminalOfficeScreen', 'Sales', 'terminal2');
  scene.text('"What can I help you with?" the manager asks you.');
  if (((s as any).verakassir ?? 0) > 0) {
    qspCall(s, 'TerminalOffice', '11_buy_goods');
  }
  if (((s as any).YouNotOpenDoorDir ?? 0) === 1) {
    scene.actions([
      { label: 'Ask about the Director', handler: (st: GameState) => {
    (s as any).YouNotOpenDoorDir = 0;
    qspCall(s, 'stat', '');
    scene.text('"Excuse me, I wonder if I could meet your supervisor?" you ask.');
    // TODO-QSP: dynamic text: The Manager grins, "Yuri is usually here every Monday through Friday, between '+...
    scene.text('The Manager grins, "Yuri is usually here every Monday through Friday, between \'+func(\'time\', \'get_time_string\', 9, 0)+\' and \'+func(\'time\', \'get_time_string\', 18, 0)+\' except lunch between \'+func(\'time\', \'get_time_string\', 13, 0)+\' and \'+func(\'time\', \'get_time_string\', 14, 0)+\'."');
    scene.actions([
      { label: 'Leave', goto: ['TerminalOffice', '11'] },
    ]);
  } },
    ]);
  }
  if (((s as any).YouNotOpenDoorBuh ?? 0) === 1) {
    scene.actions([
      { label: 'Ask about the accountant', handler: (st: GameState) => {
    (s as any).YouNotOpenDoorBuh = 0;
    qspCall(s, 'stat', '');
    scene.text('"Excuse me, I wonder if I could meet your accountant?" you ask.');
    // TODO-QSP: dynamic text: The Manager grins, "Elizabeth is usually here Monday through Friday, between '+f...
    scene.text('The Manager grins, "Elizabeth is usually here Monday through Friday, between \'+func(\'time\', \'get_time_string\', 9, 0)+\' and \'+func(\'time\', \'get_time_string\', 20, 0)+\' except lunch between \'+func(\'time\', \'get_time_string\', 13, 0)+\' and \'+func(\'time\', \'get_time_string\', 14, 0)+\'."');
    scene.actions([
      { label: 'Leave', goto: ['TerminalOffice', '11'] },
    ]);
  } },
    ]);
  }
  if (((s as any).AboutDocsManager ?? 0) === 0  &&  ((s as any).BurgerQW ?? 0)?.['TerminalTask'] === 1  &&  ((s as any).BurgerQW ?? 0)?.['TerminalTaskDay'] === ((s as any).daystart ?? 0)) {
    scene.text('"I\'m Anatoly Chubais from the company "OOO Bystroushka limited". Do you have the required documents with you?"');
    scene.actions([
      { label: 'Give him the documents', handler: (st: GameState) => {
    (s as any).AboutDocsManager = 1;
    qspCall(s, 'stat', '');
    scene.text('"Looks good. Go and see Elizabeth in the account department. She needs to register you. You can find her next door."');
    scene.actions([
      { label: 'Leave', goto: ['TerminalOffice', '11'] },
    ]);
  } },
    ]);
  }
  if (((s as any).verakassir ?? 0) === 0  &&  ((s as any).YouNotOpenDoorDir ?? 0) === 0  &&  ((s as any).YouNotOpenDoorBuh ?? 0) === 0  &&  ((s as any).BurgerQW ?? 0)?.['TerminalTask'] === 0) {
    scene.text('You have nothing to say or left to do. You can leave the office.');
  }
  scene.actions([
    { label: 'Leave the office', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['TerminalOffice', '00'] },
  ]);
  scene.build();
}

function enter11BuyGoods(s: GameState, scene: SceneBuilder): void {
  (s as any).DoNotBuy = 2;
  (s as any).BuyQuantity = 0;
  (s as any).MaxQuantityHome = 0;
  (s as any).MaxQuantityGarage = 0;
  (s as any).MaxCost = 0;
  (s as any).TovarLimitHomeRepository = 30;
  (s as any).TovarLimitGarageRepository = 100;
  scene.text('You talk with the Manager about buying small trinkets…');
  if (((s as any).mc_inventory ?? 0)?.['trinkets_home'] >= ((s as any).TovarLimitHomeRepository ?? 0)) {
    scene.text('There is no more free space at home.');
  } else {
    (s as any).DoNotBuy = ((s as any).DoNotBuy ?? 0) - (1);
    // TODO-QSP: dynamic text: You have ' + mc_inventory['trinkets_home'] + ' trinkets stored in your home. You...
    scene.text(`You have ' + mc_inventory['trinkets_home'] + ' trinkets stored in your home. You're only able to store ${((s as any).TovarLimitHomeRepository ?? 0)} trinkets.`);
    (s as any).MaxQuantityHome = ((s as any).TovarLimitHomeRepository ?? 0) - ((s as any).mc_inventory ?? {})?.['trinkets_home'];
  }
  if (((s as any).YouCanGar ?? 0) > 0) {
    if (((s as any).mc_inventory ?? 0)?.['trinkets_garage'] >= ((s as any).TovarLimitGarageRepository ?? 0)) {
      scene.text('There is no space in the garage.');
    } else {
      (s as any).DoNotBuy = ((s as any).DoNotBuy ?? 0) - (1);
      // TODO-QSP: dynamic text: You have ' + mc_inventory['trinkets_garage'] + ' trinkets stored in the garage. ...
      scene.text(`You have ' + mc_inventory['trinkets_garage'] + ' trinkets stored in the garage. You're only able to store ${((s as any).TovarLimitGarageRepository ?? 0)} trinkets.`);
      (s as any).MaxQuantityGarage = ((s as any).TovarLimitGarageRepository ?? 0) - ((s as any).mc_inventory ?? {})?.['trinkets_garage'];
    }
  }
  if (((s as any).DoNotBuy ?? 0) === 2) {
    scene.text('You think about it for a while, realize that you just have nowhere to store the goods and decide to turn down the purchase.');
  } else {
    scene.actions([
      { label: 'The small trinkets cost <<$func(\'money\', \'string_price\', 100)>>. Please put in how many trinkets you want to purchase.', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 13;
    (s as any).BuyQuantity = 0;
    if (((s as any).BuyQuantity ?? 0) > (((s as any).MaxQuantityHome ?? 0) + ((s as any).MaxQuantityGarage ?? 0))) {
      // TODO-QSP: dynamic text: <b><font color=red>You have nowhere to store the surplus <<BuyQuantity-(MaxQuant...
      scene.text(`<b><font color=red>You have nowhere to store the surplus ${((s as any).BuyQuantity ?? 0)-(((s as any).MaxQuantityHome ?? 0) + ((s as any).MaxQuantityGarage ?? 0))} ' + iif(BuyQuantity - (MaxQuantityHome + MaxQuantityGarage) = 1, 'trinket', 'trinkets') + '.</front></b>`);
      scene.actions([
        { label: 'Leave', goto: ['TerminalOffice', '11'] },
      ]);
    }
    (s as any).MaxCost = ((s as any).BuyQuantity ?? 0) * 100;
    if (qspFunc(s, 'money', 'can_afford', ((s as any).MaxCost ?? 0), 'cash') === 0) {
      scene.text('You don\'t have enough money on you. You will have to withdraw money before proceeding with the purchase.');
      if (qspFunc(s, 'money', 'can_afford', ((s as any).MaxCost ?? 0)) === 1) {
        scene.text('You have enough money on your credit card, and you offer them to pay with that.');
        scene.text('"I\'m sorry, we don\'t own a card terminal," the Manager replies, "We accept only cash."');
      }
      scene.actions([
        { label: 'Leave', goto: ['TerminalOffice', '11'] },
      ]);
    } else {
      qspCall(s, 'money', 'pay', ((s as any).MaxCost ?? 0), 'cash');
      // TODO-QSP: dynamic text: You've purchased <<BuyQuantity>> trinkets, worth <<MaxCost>>.
      scene.text(`You've purchased ${((s as any).BuyQuantity ?? 0)} trinkets, worth ${((s as any).MaxCost ?? 0)}.`);
      if (((s as any).BuyQuantity ?? 0) >= ((s as any).MaxQuantityHome ?? 0)) {
        (s as any).mc_inventory['trinkets_home'] = ((s as any).mc_inventory ?? {})?.['trinkets_home'] + ((s as any).MaxQuantityHome ?? 0);
        (s as any).BuyQuantity = ((s as any).BuyQuantity ?? 0) - (((s as any).MaxQuantityHome ?? 0));
        if (((s as any).YouCanGar ?? 0) > 0) {
          // TODO-QSP: *PL 'You''ll store <<MaxQuantityHome>> trickets at home.'
        }
      } else {
        if (((s as any).YouCanGar ?? 0) > 0) {
          // TODO-QSP: *PL 'You''ll store <<BuyQuantity>> trinkets at home.'
        }
        (s as any).mc_inventory['trinkets_home'] = ((s as any).mc_inventory ?? {})?.['trinkets_home'] + ((s as any).BuyQuantity ?? 0);
        (s as any).BuyQuantity = 0;
      }
      if (((s as any).BuyQuantity ?? 0) > 0) {
        (s as any).mc_inventory['trinkets_garage'] = ((s as any).mc_inventory ?? {})?.['trinkets_garage'] + ((s as any).BuyQuantity ?? 0);
        // TODO-QSP: dynamic text: You'll store <<BuyQuantity>> trinkets in the garage.
        scene.text(`You'll store ${((s as any).BuyQuantity ?? 0)} trinkets in the garage.`);
      }
      if (((s as any).YouCanGar ?? 0) === 0  &&  qspFunc(s, 'money', 'can_afford', 100, 'cash') === 1) {
        scene.text('You\'ve purchased plenty of trinkets, but you\'ve been thinking about expanding your business. But where could you store them all? Maybe you should ask your stepfather if you could use some free space in his garage…');
      }
      scene.actions([
        { label: 'Complete your purchase', goto: ['TerminalOffice', '11'] },
      ]);
    }
  } },
      { label: 'Buy small trinkets for <<$func(\'money\', \'string_price\', 100)>> called "Eyeballs".', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 13;
    (s as any).BuyQuantity = ((s as any).MaxQuantityHome ?? 0) + ((s as any).MaxQuantityGarage ?? 0);
    (s as any).MaxCost = ((s as any).BuyQuantity ?? 0) * 100;
    if (qspFunc(s, 'money', 'can_afford', ((s as any).MaxCost ?? 0), 'cash') === 0) {
      scene.text('You don\'t have enough money on you. You will have to withdraw money before proceeding with the purchase.');
      if (qspFunc(s, 'money', 'can_afford', ((s as any).MaxCost ?? 0)) === 1) {
        scene.text('You have enough money on your credit card, and you offer them to pay with that.');
        scene.text('"I\'m sorry, we don\'t own a card terminal," the Manager replies, "We accept only cash."');
      }
      scene.actions([
        { label: 'Leave', goto: ['TerminalOffice', '11'] },
      ]);
    } else {
      qspCall(s, 'money', 'pay', ((s as any).MaxCost ?? 0), 'cash');
      // TODO-QSP: dynamic text: You've purchased <<BuyQuantity>> trinkets, worth <<MaxCost>>.
      scene.text(`You've purchased ${((s as any).BuyQuantity ?? 0)} trinkets, worth ${((s as any).MaxCost ?? 0)}.`);
      if (((s as any).BuyQuantity ?? 0) >= ((s as any).MaxQuantityHome ?? 0)) {
        (s as any).mc_inventory['trinkets_home'] = ((s as any).mc_inventory ?? {})?.['trinkets_home'] + ((s as any).MaxQuantityHome ?? 0);
        (s as any).BuyQuantity = ((s as any).BuyQuantity ?? 0) - (((s as any).MaxQuantityHome ?? 0));
        if (((s as any).YouCanGar ?? 0) > 0) {
          // TODO-QSP: dynamic text: You'll store <<MaxQuantityHome>> trickets at home.
          scene.text(`You'll store ${((s as any).MaxQuantityHome ?? 0)} trickets at home.`);
        }
      } else {
        if (((s as any).YouCanGar ?? 0) > 0) {
          // TODO-QSP: dynamic text: You'll store <<BuyQuantity>> trickets at home.
          scene.text(`You'll store ${((s as any).BuyQuantity ?? 0)} trickets at home.`);
        }
        (s as any).mc_inventory['trinkets_home'] = ((s as any).mc_inventory ?? {})?.['trinkets_home'] + ((s as any).BuyQuantity ?? 0);
        (s as any).BuyQuantity = 0;
      }
      if (((s as any).BuyQuantity ?? 0) > 0) {
        (s as any).mc_inventory['trinkets_garage'] = ((s as any).mc_inventory ?? {})?.['trinkets_garage'] + ((s as any).BuyQuantity ?? 0);
        // TODO-QSP: dynamic text: You'll store <<BuyQuantity>> trinkets in the garage.
        scene.text(`You'll store ${((s as any).BuyQuantity ?? 0)} trinkets in the garage.`);
      }
      if (((s as any).YouCanGar ?? 0) === 0  &&  qspFunc(s, 'money', 'can_afford', 100, 'cash') === 1) {
        scene.text('You\'ve purchased plenty of trinkets, but you\'ve been thinking about expanding your business. But where could you store them all? Maybe you should ask your stepfather if you could use some free space in his garage…');
      }
      scene.actions([
        { label: 'Complete your purchase', goto: ['TerminalOffice', '11'] },
      ]);
    }
  } },
    ]);
  }
  scene.build();
}

function enter21(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'TerminalOffice', '21');
  if ((!((s as any).TerminalOfficeBuhWorkTime ?? 0))) {
    (s as any).YouNotOpenDoorBuh = 1;
    qspCall(s, 'stat', '');
    qspCall(s, 'TerminalOffice', 'TerminalOfficeScreen', 'A door with a sign', 'terminal6');
    scene.text('You knock, but there is only silence. You try pushing down the handle, but realize that the door is locked. You\'ll have to come back at a different time.');
    scene.actions([
      { label: 'Move away from the door', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['TerminalOffice', '00'] },
    ]);
  } else {
    qspCall(s, 'stat', '');
    qspCall(s, 'TerminalOffice', 'TerminalOfficeScreen', 'The accountant\'s office', 'terminal3');
    scene.text('A cute girl looks up from her monitor, turns to you and asks, "What can I help you with?"');
    if (((s as any).BurgerQW ?? 0)?.['TerminalTask'] !== 1  ||  ((s as any).BurgerQW ?? 0)?.['TerminalTaskDay'] !== ((s as any).daystart ?? 0)) {
      scene.text('You have nothing to say or left to do. You can leave the office.');
    } else {
      scene.text('"I was talking with Anatoly Chubais from the company \'OOO Bystroushka limited\'. I was instructed to deliver these documents."');
      scene.text('"Yes, I\'ve been expecting these, may I?" She holds out her hand.');
      scene.actions([
        { label: 'Give her the documents', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).BurgerQW['TerminalTask'] = 2;
    qspCall(s, 'stat', '');
    scene.text('You hand the girl the folder. She opens it and quickly checks the contents.');
    scene.text('"Tell Anatoly Borisovich that Elizabeth said thank you."');
    scene.text('The girl smiles and then turns her attention to her monitor and starts rapidly typing away on her keyboard.');
    scene.actions([
      { label: 'Leave the office', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['TerminalOffice', '00'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Leave the office', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['TerminalOffice', '00'] },
    ]);
  }
  scene.build();
}

function enter31(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'TerminalOffice', '31');
  if ((!((s as any).TerminalOfficeDirWorkTime ?? 0))) {
    (s as any).YouNotOpenDoorDir = 1;
    qspCall(s, 'stat', '');
    qspCall(s, 'TerminalOffice', 'TerminalOfficeScreen', 'A door with a sign', 'terminal5');
    scene.text('You knock, but there is only silence. You try pushing down the handle, but realize that the door is locked. You\'ll have to come back at a different time.');
    scene.actions([
      { label: 'Move away from the door', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['TerminalOffice', '00'] },
    ]);
  } else {
    qspCall(s, 'TerminalOffice', 'TerminalOfficeScreen', 'The Director\'s office', 'terminal1');
    scene.text('You knock and open the door. Behind a massive desk, you see a man. He\'s talking on the phone and apparently not in the mood. He\'s a bit surprised as you aren\'t the person he was expecting, so he dismissively waves his hand, clearly indicating that you need to leave the office.');
    if ((!((s as any).AboutBussines ?? 0))) {
      scene.actions([
        { label: 'Talk', handler: (st: GameState) => {
    // TODO-QSP: delact $selact
    (s as any).AboutBussines = 1;
    qspCall(s, 'TerminalOffice', 'TerminalOfficeScreen', 'The Director\'s office', 'terminal1');
    scene.text('"I was told to come and see you about a business proposal…" you start.');
    scene.text('"I heard there was a possibility of a good, legitimate and profitable trade business going on…" you continue.');
    scene.text('The man puts the phone to his side and irritably answers, "Can\'t you see I\'m in middle of a phone call? Leave!"');
  } },
      ]);
    }
    if (((s as any).AboutDocs ?? 0) === 0  &&  ((s as any).BurgerQW ?? 0)?.['TerminalTask'] === 1  &&  ((s as any).BurgerQW ?? 0)?.['TerminalTaskDay'] === ((s as any).daystart ?? 0)) {
      scene.actions([
        { label: 'Give him the documents', handler: (st: GameState) => {
    // TODO-QSP: delact $selact
    (s as any).AboutDocs = 1;
    qspCall(s, 'TerminalOffice', 'TerminalOfficeScreen', 'The Director\'s office', 'terminal1');
    scene.text('You walk up to the desk. You\'re ignored by the man, but you refuse to turn back, you have an important assignment from the boss.');
    scene.text('"I was told by Anatoly Chubais from the company "OOO Bystroushka limited" to hand over these documents to you."');
    scene.text('The man stops talking on the phone, frowns, and, pointing towards the door, asserts, "You need to head over to the accountant\'s office."');
  } },
      ]);
    }
    if (((s as any).AboutBussines ?? 0) === 1  &&  ((s as any).AboutDocs ?? 0) === 1) {
      scene.text('You have nothing to say or left to do. You can leave the office.');
    }
    scene.actions([
      { label: 'Leave the office', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['TerminalOffice', '00'] },
    ]);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'TerminalOfficeScreen':
      enterTerminalOfficeScreen(s, scene);
      break;
    case '00':
      enter00(s, scene);
      break;
    case '11':
      enter11(s, scene);
      break;
    case '11_buy_goods':
      enter11BuyGoods(s, scene);
      break;
    case '21':
      enter21(s, scene);
      break;
    case '31':
      enter31(s, scene);
      break;
    default:
      enterTerminalOfficeScreen(s, scene);
      break;
  }
}

export const TerminalOffice: LocationDef = {
  name: 'TerminalOffice',
  title: 'You are standing in the lobby of the terminal office.',
  region: 'other',
  locationType: 'public_indoors',
  enter: enter,
};
