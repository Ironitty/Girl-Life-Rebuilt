import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterFameEvents(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'fame_events', 'select', 'pav');
  scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc', 'loc_arg'); } }]);
  scene.build();
}

function enterMinorProstitutes(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  // TODO-QSP: $streetev_title
  scene.img('images/locations/shared/street/town/hookers.jpg');
  scene.text('As you walk down the street, you see a couple of half-naked women standing on a corner. They approach cars that slow down or men that walk by. It is clear they are prostitutes trying to find customers.');
  return;
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
  ]);
  scene.build();
}

function enterMinorNakedHawker(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  // TODO-QSP: $streetev_title
  scene.img('images/locations/shared/street/town/nakedmarket.jpg');
  scene.text('As you walk down the street, you pass a young girl standing in front of a table covered in various items in front of a house. Despite the cold, she is completely naked other than her boots and hat. She is calling for people to come over and take a look at the items for sale. You must admit her technique seems to be working. She and her items are getting a lot of attention.');
  scene.actions([
    { label: 'Ignore her', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    { label: 'Browse her wares', handler: (st: GameState) => {
    // TODO-QSP: $streetev_title
    scene.img('images/locations/shared/street/town/nakedmarket.jpg');
    scene.text('You walk over and look over several of the items she has for sale.');
    (s as any).tovpay1 = (Math.floor(Math.random() * 6) + 3) * 100;
    // TODO-QSP: dynamic text: She has some cosmetics for ' + $func('money', 'string_price', tovpay1) + '.
    scene.text('She has some cosmetics for \' + $func(\'money\', \'string_price\', tovpay1) + \'.');
    (s as any).tovpay2 = (Math.floor(Math.random() * 7) + 3) * 10;
    // TODO-QSP: dynamic text: She has lip balm for ' + $func('money', 'string_price', tovpay2) + '.
    scene.text('She has lip balm for \' + $func(\'money\', \'string_price\', tovpay2) + \'.');
    (s as any).tovpay3 = (Math.floor(Math.random() * 4) + 2) * 100;
    // TODO-QSP: dynamic text: She has some vitamins for ' + $func('money', 'string_price', tovpay3) + '.
    scene.text('She has some vitamins for \' + $func(\'money\', \'string_price\', tovpay3) + \'.');
    // TODO-QSP: dynamic text: She has a romance novel (' + $func('money', 'string_price', 300) + ')
    scene.text('She has a romance novel (\' + $func(\'money\', \'string_price\', 300) + \')');
    if (qspFunc(s, 'money', 'can_afford', 300, 'cash') === 1) {
      qspCall(s, 'library_functions', 'set_single_book_buy_act', 'a romance novel', 'romance', 300);
    }
    scene.actions([
      { label: 'Buy the cosmetics [+$func(\'money\', \'get_cost_string\', tovpay...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((s as any).tovpay1 ?? 0), 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 15;
      qspCall(s, 'money', 'pay', ((s as any).tovpay1 ?? 0), 'cash');
      ((s as any).mc_inventory ?? {})['cosmetics'] = (((s as any).mc_inventory ?? {})['cosmetics'] ?? 0) + (Math.floor(Math.random() * 31) + 10);
      qspCall(s, 'stat', '');
      scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc'); } }]);
    }
  } },
      { label: 'Buy the lip balm [+$func(\'money\', \'get_cost_string\', tovpay...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((s as any).tovpay2 ?? 0), 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 15;
      ((s as any).mc_inventory ?? {})['lipbalm'] = (((s as any).mc_inventory ?? {})['lipbalm'] ?? 0) + (20);
      qspCall(s, 'money', 'pay', ((s as any).tovpay2 ?? 0), 'cash');
      scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc'); } }]);
    }
  } },
      { label: 'Buy the vitamins [+$func(\'money\', \'get_cost_string\', tovpay...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((s as any).tovpay3 ?? 0), 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 15;
      ((s as any).mc_inventory ?? {})['vitamins'] = (((s as any).mc_inventory ?? {})['vitamins'] ?? 0) + (20);
      qspCall(s, 'money', 'pay', ((s as any).tovpay3 ?? 0), 'cash');
      scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc'); } }]);
    }
  } },
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMinorImprovisedMarket(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  // TODO-QSP: $streetev_title
  scene.img('images/locations/shared/street/town/yardsale.jpg');
  scene.text('As you walk down the street, you pass several tables full of various items. It seems several people have got together and set up an impromptu market here.');
  scene.actions([
    { label: 'Ignore it', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    { label: 'Browse the wares', handler: (st: GameState) => {
    // TODO-QSP: $streetev_title
    scene.img('images/locations/shared/street/town/nakedmarket.jpg');
    scene.text('You walk over and look over several of the items they have for sale.');
    (s as any).tovpay1 = (Math.floor(Math.random() * 6) + 3) * 100;
    // TODO-QSP: dynamic text: They have some cosmetics for ' + $func('money', 'string_price', tovpay1) + '.
    scene.text('They have some cosmetics for \' + $func(\'money\', \'string_price\', tovpay1) + \'.');
    (s as any).tovpay2 = (Math.floor(Math.random() * 7) + 3) * 10;
    // TODO-QSP: dynamic text: They have lip balm for ' + $func('money', 'string_price', tovpay2) + '.
    scene.text('They have lip balm for \' + $func(\'money\', \'string_price\', tovpay2) + \'.');
    (s as any).tovpay3 = (Math.floor(Math.random() * 4) + 2) * 100;
    // TODO-QSP: dynamic text: They have some vitamins for ' + $func('money', 'string_price', tovpay3) + '.
    scene.text('They have some vitamins for \' + $func(\'money\', \'string_price\', tovpay3) + \'.');
    // TODO-QSP: dynamic text: They have a romance novel (' + $func('money', 'string_price', 300) + ')
    scene.text('They have a romance novel (\' + $func(\'money\', \'string_price\', 300) + \')');
    if (qspFunc(s, 'money', 'can_afford', 300, 'cash') === 1) {
      qspCall(s, 'library_functions', 'set_single_book_buy_act', 'a romance novel', 'romance', 300);
    }
    scene.actions([
      { label: 'Buy the cosmetics [+$func(\'money\', \'get_cost_string\', tovpay...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((s as any).tovpay1 ?? 0), 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 15;
      qspCall(s, 'money', 'pay', ((s as any).tovpay1 ?? 0), 'cash');
      ((s as any).mc_inventory ?? {})['cosmetics'] = (((s as any).mc_inventory ?? {})['cosmetics'] ?? 0) + (Math.floor(Math.random() * 31) + 10);
      qspCall(s, 'stat', '');
      scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc'); } }]);
    }
  } },
      { label: 'Buy the lip balm [+$func(\'money\', \'get_cost_string\', tovpay...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((s as any).tovpay2 ?? 0), 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 15;
      ((s as any).mc_inventory ?? {})['lipbalm'] = (((s as any).mc_inventory ?? {})['lipbalm'] ?? 0) + (20);
      qspCall(s, 'money', 'pay', ((s as any).tovpay2 ?? 0), 'cash');
      scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc'); } }]);
    }
  } },
      { label: 'Buy the vitamins [+$func(\'money\', \'get_cost_string\', tovpay...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((s as any).tovpay3 ?? 0), 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 15;
      ((s as any).mc_inventory ?? {})['vitamins'] = (((s as any).mc_inventory ?? {})['vitamins'] ?? 0) + (20);
      qspCall(s, 'money', 'pay', ((s as any).tovpay3 ?? 0), 'cash');
      scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc'); } }]);
    }
  } },
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMinorOlderWomenShaming(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  if (((s as any).trait_vars ?? 0)?.['exhibitionist'] === 0) {
    qspCall(s, 'mood', 'lower', 'small');
  }
  if (((s as any).trait_vars ?? 0)?.['exhibitionist_exp'] >= 30) {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (((s as any).trait_vars ?? {})?.['exhibitionist_exp']/5);
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: $streetev_title
  scene.img('images/locations/shared/street/oldladies.jpg');
  scene.text('As you walk by a group of old women sitting on a bench next to one of the buildings, you overhear them talking loudly in your direction. "Look at that whore! She is walking around in a short skirt and no panties, everyone can see her ass!" Another one responds to the first. "She should be ashamed of herself, even whores have more decency than her."');
  if (((s as any).loc ?? 0) !== 'pav_residential'  &&  ((s as any).loc ?? 0) !== 'pav_commercial') {
    scene.text('Then a third joins in. "Her mother is the one that should be ashamed, what kind of mother raises a daughter that acts like that?"');
  } else {
    scene.text('Then a third joins in. "Well what would you expect from a daughter of Natasha, the apple doesn\'t fall far from the tree." The others murmur in agreement.');
  }
  if (((s as any).pcs_inhib ?? 0) >= 50) {
    scene.text('<i>What? So now it\'s a crime to prefer going commando?</i> you think to yourself in annoyance as you continue passing by.');
  } else {
    if (((s as any).trait_vars ?? 0)?.['exhibitionist'] === 0) {
      scene.text('You blush in shame from the old ladies\' caustic remarks and hurry on your way.');
    }
  }
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'fame_events':
      enterFameEvents(s, scene);
      break;
    case 'minor_prostitutes':
      enterMinorProstitutes(s, scene);
      break;
    case 'minor_naked_hawker':
      enterMinorNakedHawker(s, scene);
      break;
    case 'minor_improvised_market':
      enterMinorImprovisedMarket(s, scene);
      break;
    case 'minor_older_women_shaming':
      enterMinorOlderWomenShaming(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const street_events_pav: LocationDef = {
  name: 'street_events_pav',
  title: 'As you walk down the street, you see a couple of half-naked ',
  region: 'other',
  enter: enter,
};
