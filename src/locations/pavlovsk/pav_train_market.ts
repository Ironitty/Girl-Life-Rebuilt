import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_train_market', 'start');
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    if (((s as any).month ?? 0) >= 11  &&  ((s as any).month ?? 0) <= 12  ||  ((s as any).month ?? 0) >= 1  &&  ((s as any).month ?? 0) <= 3) {
      if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 23) {
      }
      if (((s as any).hour ?? 0) >= 0  &&  ((s as any).hour ?? 0) <= 7) {
      }
    } else {
      if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 23) {
      }
      if (((s as any).hour ?? 0) >= 0  &&  ((s as any).hour ?? 0) <= 7) {
      }
    }
  }
  qspCall(s, 'stat', '');
  scene.text('<center><h2>Market</h2></center>');
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
    scene.img('images/locations/pavlovsk/market/grinokw.jpg');
  } else {
    scene.img('images/locations/city/residential/market/rinok.jpg');
  }
  scene.text('This small open-air market is located near the train station. None of the stall owners accept card payments, so you\'ll need cash on hand to buy anything here.');
  scene.text('A sign on one of the stalls says, "Cash paid for secondhand clothes"; you can sell <a href="exec:gs \'portnoi\'">all your unwanted clothes here</a>.');
  if ((!((s as any).pavtrain_book ?? 0))) {
    scene.text('Perhaps you will find some books when you stroll through the market.');
  }
  if ((!((s as any).pavmarket_porn ?? 0))) {
    scene.text('Rumor has it that you can find some spicy toys around here somewhere.');
  }
  if (((s as any).arturQW ?? 0) === 1  &&  (((s as any).week ?? 0) === 6  ||  ((s as any).week ?? 0) === 7)  &&  ((s as any).hour ?? 0) < 12) {
    // TODO-QSP: act 'Wait for Arthur to arrive': hour = 12
    scene.actions([{ label: 'Continue', goto: ['pav_train_market', 'start'] }]);
  }
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 18) {
    scene.text('The market stalls are buzzing with shoppers. Everyone seems to be in a good mood, and you can hear back-and-forth bargaining as you pass by.');
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 100  &&  (!(Math.floor(Math.random() * 10) + 0))) {
      qspCall(s, 'stat', '');
      scene.text('An Armenian man suddenly approaches you.');
      scene.text('"You girl who like men, no? Come meet real men, have good time," he says in broken Russian.');
      return;
      scene.actions([
        { label: 'Reject him', handler: (st: GameState) => {
    scene.text('You pretend not to understand what he\'s saying, smiling and shaking your head as you move away from him.');
    scene.actions([
      { label: 'Return', goto: ['pav_train_market', 'start'] },
    ]);
  } },
        { label: 'Go with him', goto: ['gevent', '3'] },
      ]);
    }
    if (((s as any).pavtrain_book ?? 0) === 1) {
      // TODO-QSP: act 'Go to the book stall': minut += 5
      // TODO-QSP: gt 'pav_train_market', 3
    }
    if (((s as any).pavmarket_porn ?? 0) === 1) {
      // TODO-QSP: act 'Go to the porn stall': minut += 5
      // TODO-QSP: gt 'pav_train_market', 4
    }
    if (((s as any).arturKnow ?? 0) === 1  &&  (!((s as any).arturQW ?? 0))) {
      scene.actions([
        { label: 'Look for Arthur', goto: ['arturRinok', 'start'] },
      ]);
    } else {
      if (((s as any).arturQW ?? 0) === 1  &&  (((s as any).week ?? 0) === 6  ||  ((s as any).week ?? 0) === 7)) {
        if (((s as any).hour ?? 0) === 12  ||  ((s as any).hour ?? 0) === 13) {
          scene.actions([
            { label: 'Look for Arthur', goto: ['arturRinok', 'work_1'] },
          ]);
        }
      } else {
        if (((s as any).arturQW ?? 0) === 2) {
          if (((s as any).hour ?? 0) === 16  &&  ((s as any).minut ?? 0) <= 30) {
            scene.actions([
              { label: 'Look for Arthur', goto: ['arturRinok', 'work_2'] },
            ]);
          } else {
            if (((s as any).hour ?? 0) < 16) {
              scene.actions([
                { label: 'Wait for Arthur to arrive', handler: (st: GameState) => {
    (st as any).hour = 16;
    (st as any).minut = 0;
  }, goto: ['pav_train_market', 'start'] },
              ]);
            }
          }
        }
      }
    }
    if (((s as any).mc_inventory ?? 0)?.['tapestry'] > 0  &&  (!((s as any).gobQW ?? 0))) {
      scene.actions([
        { label: 'Sell tapestry', handler: (st: GameState) => {
    (s as any).gobQW = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.text('You stand quietly by the entrance to the market, displaying your tapestries while waiting for customers and displaying your tapestries.');
    // TODO-QSP: dynamic text: Buyers soon start to gather, but a large, muscular man quickly approaches you. "...
    scene.text('Buyers soon start to gather, but a large, muscular man quickly approaches you. "It is illegal to trade in the market without a trader\'s license, but I may be interested in buying your tapestries, \'+$func(\'money\', \'string_price\', 1000)+\' apiece. Come and see me at my stall."');
    scene.text('Not wanting to get into trouble, you pack your stuff away. The man has already left, but you saw which direction he went in and he should be easy to find.');
    scene.actions([
      { label: 'Leave', goto: ['pav_train_market', 'start'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).mc_inventory ?? 0)?.['tapestry'] > 0  &&  ((s as any).gobQW ?? 0) >= 1) {
        scene.actions([
          { label: 'Sell tapestry', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.text('You go to the man who offered to buy your tapestries. You find him by his stall, smiling.');
    if (((s as any).gobQW ?? 0) === 2) {
      scene.text('Roman welcomes you. He is interested and businesslike as he asks what you have for sale.');
    } else {
      if (((s as any).gobQW ?? 0) === 1) {
        (s as any).gobQW = 2;
        (s as any).minut = ((s as any).minut ?? 0) + 5;
        // TODO-QSP: dynamic text: The man greets you and introduces himself as Roman. You tell him that your name ...
        scene.text(`The man greets you and introduces himself as Roman. You tell him that your name is ${((s as any).pcs_nickname ?? 0)} and after a brief chat, he says he wants to see what you have for sale.`);
      }
    }
    if (((s as any).mc_inventory ?? 0)?.['tapestry'] > 1) {
      scene.actions([
        { label: 'Sell all of your tapestries', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You show Roman your tapestries, and he gives you '+$func('money', 'string_profit...
    scene.text('You show Roman your tapestries, and he gives you \'+$func(\'money\', \'string_profit\', mc_inventory[\'tapestry\'] * 1000)+\'. You take the money and give him the tapestries.');
    // TODO-QSP: gs 'money', 'earn', mc_inventory['tapestry'] * 1000
    ((s as any).mc_inventory ?? {})['tapestry'] = 0;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['pav_train_market', 'start'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Leave', goto: ['pav_train_market', 'start'] },
      { label: 'Show your tapestry', handler: (st: GameState) => {
    ((s as any).mc_inventory ?? {})['tapestry'] = (((s as any).mc_inventory ?? {})['tapestry'] ?? 0) - (1);
    qspCall(s, 'money', 'earn', 1000);
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You show your tapestry to Roman, and he gives you '+$func('money', 'string_profi...
    scene.text('You show your tapestry to Roman, and he gives you \'+$func(\'money\', \'string_profit\', 1000)+\'. You take the money and give him the tapestry.');
    scene.actions([
      { label: 'Leave', goto: ['pav_train_market', 'start'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
    }
    if (((s as any).ShowerIvan ?? 0) === 5  &&  ((s as any).porndeal ?? 0) === 0  &&  (Math.floor(Math.random() * 10) + 1) <= 4  &&  ((s as any).ricewine ?? 0) !== 1  &&  ((s as any).lookwine ?? 0) !== ((s as any).daystart ?? 0)) {
      qspCall(s, 'stat', '');
      (s as any).minut = ((s as any).minut ?? 0) + 20;
      (s as any).lookwine = ((s as any).daystart ?? 0);
      scene.img('images/locations/pavlovsk/market/chinese_stall01.jpg');
      scene.text('You\'re looking through the market when you see a stall selling Chinese food. There are several bottles on a shelf behind the old woman minding the stall.');
      scene.actions([
        { label: 'Ask about wang-goo', handler: (st: GameState) => {
    scene.text('You ask the old woman if she has any rice wine. She smiles at you and points to a basket filled with rice.');
    // TODO-QSP: dynamic text: "Onry '+$func('money', 'string_price', 2)+', hundred glam," she says in badly ac...
    scene.text('"Onry \'+$func(\'money\', \'string_price\', 2)+\', hundred glam," she says in badly accented Russian, "You buy?"');
    scene.text('"No," you reply, "I need rice wine, rice wine."');
    scene.text('She looks at you in confusion for a moment, then suddenly brightens, "Ah!" she exclaims, "Come, come!"');
    scene.text('She hurries to the other side of the stall, where several smoked piglets are hung in a row.');
    scene.text('"Here," the old woman crowed, handing you one of the pigs, "Nice swine, vely nice swine."');
    scene.text('"No, not nice swine," you sigh in despair. "Rice! Wine!"');
    // TODO-QSP: dynamic text: "Yes, yes," the woman counters. "Nice swine, only '+$func('money', 'string_price...
    scene.text('"Yes, yes," the woman counters. "Nice swine, only \'+$func(\'money\', \'string_price\', 5)+\'."');
    scene.text('Just as you\'re about to give up, a young Chinese boy arrives.');
    scene.text('"My grandmother asks why you don\'t like the piglets?" he translates as the old woman stops.');
    scene.text('"I don\'t want a pig," you reply in relief as his Russian is quite good. "I\'m looking for rice wine, wang-goo."');
    scene.text('"Ah, huangjiu!" he exclaims before he turns to his grandmother and starts speaking in Chinese.');
    scene.text('The old woman glares at you, hangs the smoked pig back up and shuffles over to the shelf with the bottles. She finally picks up one of them and brings it over to you.');
    // TODO-QSP: dynamic text: "Why you not say wanted rice wine?" she scoffs. "'+$func('money', 'string_price'...
    scene.text('"Why you not say wanted rice wine?" she scoffs. "\'+$func(\'money\', \'string_price\', 500)+\'."');
    if (qspFunc(s, 'money', 'can_afford', 500, 'cash')) {
      scene.actions([
        { label: 'Buy the wine', handler: (st: GameState) => {
    qspCall(s, 'money', 'pay', 500, 'cash');
    (s as any).ricewine = 1;
    scene.text('You hand the woman the money and she gives you the wine.');
    scene.actions([
      { label: 'Leave', goto: ['pav_train_market', 'start'] },
    ]);
  } },
      ]);
    } else {
      scene.text('You\'re shocked by the high price and realize you can\'t afford it. You apologize and turn away.');
      scene.actions([
        { label: 'Leave the market', goto: ['pav_train_market', 'start'] },
        { label: 'Continue browsing the market', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    scene.img('images/locations/pavlovsk/market/market_boy01.jpg');
    scene.text('You continue to wander through the market for another 15 minutes when the boy from the Chinese stall comes up to you.');
    scene.text('"Hey, you really want that rice wine?" he asks after checking to ensure no one is watching.');
    scene.text('"Yes," you answer. "But it\'s too expensive. I can\'t afford it."');
    scene.text('"How about we make a deal?" he asks. "Go to the porn dealer and buy me a porn magazine, and I\'ll get you the wine."');
    if ((!((s as any).pornmarkonce ?? 0))) {
      (s as any).pornmarkonce = 1;
      scene.text('"Where can I find the porn dealer?" you ask, and he happily gives you directions.');
    }
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    scene.text('You decline his offer and he walks away looking rather disappointed.');
    scene.actions([
      { label: 'Leave', goto: ['pav_train_market', 'start'] },
    ]);
  } },
      { label: 'Agree', handler: (st: GameState) => {
    (st as any).porndeal = 1;
    // TODO-QSP: gt 'pav_train_market', 4
  } },
    ]);
  } },
      ]);
    }
  } },
      ]);
    } else {
      if (((s as any).ShowerIvan ?? 0) === 5  &&  ((s as any).ricewine ?? 0) !== 1  &&  ((s as any).lookwine ?? 0) !== ((s as any).daystart ?? 0)) {
        qspCall(s, 'stat', '');
        (s as any).lookwine = ((s as any).daystart ?? 0);
        if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
          scene.img('images/locations/pavlovsk/market/grinokw.jpg');
        } else {
          scene.img('images/locations/city/residential/market/rinok.jpg');
        }
        scene.text('You look around the market, but the Chinese vendors don\'t seem to be here today.');
        scene.actions([
          { label: 'Leave', goto: ['pav_train_market', 'start'] },
        ]);
      }
    }
    if (((s as any).porndeal ?? 0) === 1  &&  ((s as any).ricewine ?? 0) !== 1  &&  ((s as any).porndealday ?? 0) !== ((s as any).daystart ?? 0)) {
      qspCall(s, 'stat', '');
      (s as any).porndealday = ((s as any).daystart ?? 0);
      (s as any).lookboy = 0;
      scene.img('images/locations/pavlovsk/market/market_boy01.jpg');
      scene.text('The boy from the Chinese stall comes up to you as you enter the market.');
      scene.text('"Do you have it?" he asks eagerly.');
      if (((s as any).haveporn ?? 0) === 1) {
        (s as any).porndeal = 2;
        (s as any).ricewine = 1;
        scene.text('"Do you have the wine?" you counter.');
        scene.text('He pulls the bottle out of his backpack and you trade items.');
        scene.actions([
          { label: 'Leave', goto: ['pav_train_market', 'start'] },
        ]);
      } else {
        scene.text('You tell him you haven\'t had time to pick the magazine up yet, but you\'re working on it.');
        scene.actions([
          { label: 'Leave', goto: ['pav_train_market', 'start'] },
        ]);
      }
    } else {
      if (((s as any).porndeal ?? 0) === 1  &&  ((s as any).ricewine ?? 0) !== 1  &&  ((s as any).porndealday ?? 0) === ((s as any).daystart ?? 0)  &&  (!((s as any).lookboy ?? 0))) {
        qspCall(s, 'stat', '');
        (s as any).lookboy = 1;
        scene.img('images/locations/pavlovsk/market/chinese_stall01.jpg');
        scene.text('You look around the market for the boy from the Chinese stall, but you can\'t find him, so you decide to look for him another day.');
        scene.actions([
          { label: 'Leave', goto: ['pav_train_market', 'start'] },
        ]);
      }
    }
    scene.actions([
      { label: 'Go back to the market entrance', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['pav_market', ''] },
      { label: 'Wander through the market', goto: ['pav_train_market', 'events'] },
      { label: 'View clothing', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_train_market', 'clo'] },
    ]);
  } else {
    // TODO-QSP: dynamic text: The market stalls are empty. The market is only open between '+func('time', 'get...
    scene.text('The market stalls are empty. The market is only open between \'+func(\'time\', \'get_time_string\', 8, 0)+\' and \'+func(\'time\', \'get_time_string\', 19, 0)+\'.');
    scene.actions([
      { label: 'Leave the market', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['pav_market', ''] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterClo(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_train_market', 'clo');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Clothes</b></center>');
  scene.text('An abundance of cheap clothing covers the racks and shelves of this market stall.');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'clothing', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'market_outfits');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['pav_train_market', 'start'] },
  ]);
  scene.build();
}

function enterEvents(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.text('<center><h2>Market</h2></center>');
  scene.img('images/locations/pavlovsk/market/brodit\'+rand(1, 16)+\'.jpg');
  scene.text('You wander around the market, taking in the sounds and colours, but nothing catches your eye.');
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 18) {
    scene.actions([
      { label: 'Wander around the market', goto: ['pav_train_market', 'events'] },
    ]);
  }
  if ((!(Math.floor(Math.random() * 4) + 0))) {
    // TODO-QSP: gt 'pav_train_market', rand(1, 19)
  }
  // TODO-QSP: end
  if (((s as any).locArgs?.[0] ?? 0) === 1) {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/market/poproshaika1.jpg');
    scene.text('You\'re strolling through the market when a beggar asks you for some change.');
    if (qspFunc(s, 'money', 'can_afford', 20, 'cash')) {
      scene.actions([
        { label: 'Give him some money', handler: (st: GameState) => {
    qspCall(s, 'money', 'pay', Math.floor(Math.random() * 18) + 3, 'cash');
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/market/podaet.jpg');
    scene.text('You give the beggar a few rubles and he kindly thanks you.');
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 18) {
      scene.actions([
        { label: 'Wander around the market', goto: ['pav_train_market', 'events'] },
      ]);
    }
    scene.actions([
      { label: 'Stop wandering', goto: ['pav_train_market', 'start'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Don\'t give money', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/market/poproshaika2.jpg');
    scene.text('You ignore the beggar and pretend not to hear him.');
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 18) {
      scene.actions([
        { label: 'Wander around the market', goto: ['pav_train_market', 'events'] },
      ]);
    }
    scene.actions([
      { label: 'Stop wandering', goto: ['pav_train_market', 'start'] },
    ]);
  } },
    ]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 2) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/market/dedgitara.jpg');
    scene.text('You see an old man playing the guitar. He\'s trying to avert as much attention as he can to himself.');
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 18) {
      scene.actions([
        { label: 'Wander around the market', goto: ['pav_train_market', 'events'] },
      ]);
    }
    scene.actions([
      { label: 'Stop wandering', goto: ['pav_train_market', 'start'] },
    ]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 3) {
    (s as any).pavtrain_book = 1;
    qspCall(s, 'stat', '');
    if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
      scene.img('images/locations/pavlovsk/market/bookw.jpg');
    } else {
      scene.img('images/locations/pavlovsk/market/book.jpg');
    }
    // TODO-QSP: dynamic text: You find a stall selling various books. There are fantasy, science fiction and r...
    scene.text('You find a stall selling various books. There are fantasy, science fiction and romance novels, all of which cost \' + $func(\'money\', \'string_price\', 350) + \' each.');
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 18) {
      scene.actions([
        { label: 'Wander around the market', goto: ['pav_train_market', 'events'] },
      ]);
    }
    qspCall(s, 'library_functions', 'set_book_buy_acts');
    scene.actions([
      { label: 'Stop wandering', goto: ['pav_train_market', 'start'] },
    ]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 4) {
    (s as any).pavmarket_porn = 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/market/pornmag.jpg');
    scene.text('You find a small stall with many shelves displaying a large variety of porn magazines. In addition, you see several sex toys and a pack of brand-new porn playing cards just behind the counter. The salesman watches over his stall with shifty eyes.');
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 18) {
      scene.actions([
        { label: 'Wander around the market', goto: ['pav_train_market', 'events'] },
      ]);
    }
    if (((s as any).mc_inventory ?? 0)?.['card'] < 2) {
      scene.actions([
        { label: 'Buy the playing cards [+$func(\'money\', \'get_cost_string\', 700, \'...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 700, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'money', 'pay', 700, 'cash');
      ((s as any).mc_inventory ?? {})['card'] = 2;
      (s as any).TimesBuyPorno = ((s as any).TimesBuyPorno ?? 0) + (1);
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/market/pornmag.jpg');
      scene.text('You try not to look into the eyes of the salesman as you count the money and hand it over before quickly grabbing the cards and shoving them in your purse.');
      scene.actions([
        { label: 'Leave', goto: ['pav_train_market', 'start'] },
        { label: 'Buy something else', handler: (st: GameState) => {
    // TODO-QSP: gt 'pav_train_market', 4
  } },
      ]);
    }
  } },
      ]);
    }
    if (((s as any).porndeal ?? 0) === 1) {
      scene.actions([
        { label: 'Buy a porn magazine for the Chinese boy [+$func(\'money\', \'get_cost_string\', 400, \'...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 400, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'money', 'pay', 400, 'cash');
      (s as any).haveporn = 1;
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/market/pornmag.jpg');
      scene.text('You try your best not to look into the eyes of the salesman as you count the money and hand it over before taking the magazine and quickly hiding it in your purse.');
      scene.actions([
        { label: 'Leave', goto: ['pav_train_market', 'start'] },
        { label: 'Buy something else', handler: (st: GameState) => {
    // TODO-QSP: gt 'pav_train_market', 4
  } },
      ]);
    }
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Browse the porn magazines', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic', 5);
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/pavlovsk/market/pornmag.jpg');
    if ((!((s as any).TimesBuyPorno ?? 0))) {
      scene.text('You look over the magazine covers, which are covered in images of half-naked girls. Many of them appear to be near your own age. The salesman notices your interest and looks at you expectantly.');
      scene.actions([
        { label: 'Look through a magazine', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/market/pornmag.jpg');
    scene.text('You pick up one of the magazines and flip through the pages. The magazine is full of images of men engaging in various sexual acts with either half-naked or fully naked girls, most of whom look close to your own age. You feel yourself getting aroused as you continue flipping through the pages.');
    scene.actions([
      { label: 'Leave', goto: ['pav_train_market', 'start'] },
      { label: 'Look for something else', handler: (st: GameState) => {
    // TODO-QSP: gt 'pav_train_market', 4
  } },
      { label: 'Ask for the price', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/market/pornmag.jpg');
    scene.text('Blushing profusely, you approach the salesman and stammer as you ask him how much the magazines cost.');
    // TODO-QSP: dynamic text: He smiles at you. "All magazines are ' + $func('money', 'string_price', 400) + '...
    scene.text('He smiles at you. "All magazines are \' + $func(\'money\', \'string_price\', 400) + \' each."');
    scene.actions([
      { label: 'Leave', goto: ['pav_train_market', 'start'] },
      { label: 'Look for something else', handler: (st: GameState) => {
    // TODO-QSP: gt 'pav_train_market', 4
  } },
      { label: 'Buy a magazine [+$func(\'money\', \'get_cost_string\', 400, \'...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 400, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'money', 'pay', 400, 'cash');
      ((s as any).mc_inventory ?? {})['mag_porn'] = 40;
      (s as any).TimesBuyPorno = ((s as any).TimesBuyPorno ?? 0) + (1);
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/market/pornmag.jpg');
      scene.text('You try not to look into the man\'s eyes as you hand him the money. You then take the magazine and quickly hide it.');
      scene.actions([
        { label: 'Leave', goto: ['pav_train_market', 'start'] },
        { label: 'Buy something else', handler: (st: GameState) => {
    // TODO-QSP: gt 'pav_train_market', 4
  } },
      ]);
    }
  } },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).TimesBuyPorno ?? 0) > 0  &&  ((s as any).TimesBuyPorno ?? 0) < 5) {
        // TODO-QSP: dynamic text: The salesman notices you approaching. "Looking to buy a magazine? They're only '...
        scene.text('The salesman notices you approaching. "Looking to buy a magazine? They\'re only \' + $func(\'money\', \'string_price\', 400) + \' each."');
        scene.actions([
          { label: 'Look through a magazine', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/market/pornmag.jpg');
    scene.text('You pick up one of the magazines and flip through the pages. The magazine is full of images of men engaging in various sexual acts with either half-naked or fully naked girls, most of whom look close to your own age. You feel yourself getting aroused as you continue flipping through the pages.');
    scene.actions([
      { label: 'Leave', goto: ['pav_train_market', 'start'] },
      { label: 'Look for something else', handler: (st: GameState) => {
    // TODO-QSP: gt 'pav_train_market', 4
  } },
      { label: 'Buy magazine [+$func(\'money\', \'get_cost_string\', 400, \'...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 400, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'money', 'pay', 400, 'cash');
      ((s as any).mc_inventory ?? {})['mag_porn'] = 40;
      (s as any).TimesBuyPorno = ((s as any).TimesBuyPorno ?? 0) + (1);
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/market/pornmag.jpg');
      scene.text('You try not to look into the man\'s eyes as you hand him the money. You then take the magazine and quickly hide it.');
      scene.actions([
        { label: 'Leave', goto: ['pav_train_market', 'start'] },
        { label: 'Buy something else', handler: (st: GameState) => {
    // TODO-QSP: gt 'pav_train_market', 4
  } },
      ]);
    }
  } },
    ]);
  } },
        ]);
      } else {
        if (((s as any).TimesBuyPorno ?? 0) >= 5) {
          scene.text('The salesman sees you approaching. "Ah, my best customer! Welcome back!"');
          scene.actions([
            { label: 'Look through a magazine', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/market/pornmag.jpg');
    scene.text('You pick up one of the magazines and flip through the pages. The magazine is full of images of men engaging in various sexual acts with either half-naked or fully naked girls, most of whom look close to your own age. You feel yourself getting aroused as you continue flipping through the pages.');
    scene.actions([
      { label: 'Leave', goto: ['pav_train_market', 'start'] },
      { label: 'Look for something else', handler: (st: GameState) => {
    // TODO-QSP: gt 'pav_train_market', 4
  } },
      { label: 'Buy magazine [+$func(\'money\', \'get_cost_string\', 400, \'...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 400, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'money', 'pay', 400, 'cash');
      ((s as any).mc_inventory ?? {})['mag_porn'] = 40;
      (s as any).TimesBuyPorno = ((s as any).TimesBuyPorno ?? 0) + (1);
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/market/pornmag.jpg');
      scene.text('You try not to look into the man\'s eyes as you hand him the money. You then take the magazine and quickly hide it.');
      scene.actions([
        { label: 'Leave', goto: ['pav_train_market', 'start'] },
        { label: 'Buy something else', handler: (st: GameState) => {
    // TODO-QSP: gt 'pav_train_market', 4
  } },
      ]);
    }
  } },
    ]);
  } },
          ]);
        }
      }
    }
    scene.actions([
      { label: 'Leave', goto: ['pav_train_market', 'start'] },
      { label: 'Look for something else', handler: (st: GameState) => {
    // TODO-QSP: gt 'pav_train_market', 4
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Stop wandering', goto: ['pav_train_market', 'start'] },
      { label: 'Ask to see the sex toys', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/market/sextoys.jpg');
    scene.text('He lets you step behind the counter to get a better look. "Take a look and let me know what you would like.');
    // TODO-QSP: dynamic text: You see several 15cm dildos, a small selection of vibrators in various colours a...
    scene.text('You see several 15cm dildos, a small selection of vibrators in various colours and many butt plugs, all of which are tagged as costing \' + $func(\'money\', \'string_price\', 700) + \' each. Near the bottom are several strap-on harnesses priced at \' + $func(\'money\', \'string_price\', 500) + \' each.');
    scene.text('The salesman only deals in cash.');
    if (((s as any).mc_inventory ?? 0)?.['dildo_normal'] === 0) {
      scene.actions([
        { label: 'Buy a 15cm dildo [+$func(\'money\', \'get_cost_string\', 700, \'...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 700, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      ((s as any).mc_inventory ?? {})['dildo_normal'] = 1;
      qspCall(s, 'money', 'pay', 700, 'cash');
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
      (s as any).TimesBuyPorno = ((s as any).TimesBuyPorno ?? 0) + (1);
      scene.img('images/pc/items/sextoys/15cm.jpg');
      if (((s as any).pcs_inhib ?? 0) < 35) {
        scene.text('You buy a dildo and hastily hide it as your face blushes with embarrassment.');
      } else {
        scene.text('You buy a dildo and calmly hide it.');
      }
      scene.actions([
        { label: 'Leave', goto: ['pav_train_market', 'start'] },
        { label: 'Buy something else', handler: (st: GameState) => {
    // TODO-QSP: gt 'pav_train_market', 4
  } },
      ]);
    }
  } },
      ]);
    }
    if (((s as any).mc_inventory ?? 0)?.['dildo_suction'] === 0) {
      scene.actions([
        { label: 'Buy a 15cm suction dildo [+$func(\'money\', \'get_cost_string\', 1000, ...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 1000, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      ((s as any).mc_inventory ?? {})['dildo_suction'] = (((s as any).mc_inventory ?? {})['dildo_suction'] ?? 0) + (1);
      qspCall(s, 'money', 'pay', 1000, 'cash');
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
      (s as any).TimesBuyPorno = ((s as any).TimesBuyPorno ?? 0) + (1);
      scene.img('images/pc/items/sextoys/15cm.jpg');
      if (((s as any).pcs_inhib ?? 0) < 35) {
        scene.text('You buy the dildo and hastily hide it as your face blushes with embarrassment.');
      } else {
        scene.text('You buy the dildo and calmly hide it.');
      }
      scene.actions([
        { label: 'Leave', goto: ['pav_train_market', 'start'] },
        { label: 'Buy something else', handler: (st: GameState) => {
    // TODO-QSP: gt 'pav_train_market', 4
  } },
      ]);
    }
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Buy another 15cm suction dildo [+$func(\'money\', \'get_cost_string\', 1000, ...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 1000, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      ((s as any).mc_inventory ?? {})['dildo_suction'] = (((s as any).mc_inventory ?? {})['dildo_suction'] ?? 0) + (1);
      qspCall(s, 'money', 'pay', 1000, 'cash');
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
      (s as any).TimesBuyPorno = ((s as any).TimesBuyPorno ?? 0) + (1);
      scene.img('images/pc/items/sextoys/15cm.jpg');
      if (((s as any).pcs_inhib ?? 0) < 35) {
        scene.text('You buy the dildo and hastily hide it as your face blushes with embarrassment.');
      } else {
        scene.text('You buy the dildo and calmly hide it.');
      }
      scene.actions([
        { label: 'Leave', goto: ['pav_train_market', 'start'] },
        { label: 'Buy something else', handler: (st: GameState) => {
    // TODO-QSP: gt 'pav_train_market', 4
  } },
      ]);
    }
  } },
      ]);
    }
    if (((s as any).mc_inventory ?? 0)?.['vibe'] === 0) {
      scene.actions([
        { label: 'Buy a vibrator [+$func(\'money\', \'get_cost_string\', 700, \'...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 700, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      ((s as any).mc_inventory ?? {})['vibe'] = 1;
      qspCall(s, 'money', 'pay', 700, 'cash');
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
      (s as any).TimesBuyPorno = ((s as any).TimesBuyPorno ?? 0) + (1);
      if (((s as any).pcs_horny ?? 0) >= 50  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 150) {
        scene.text('You buy a vibrator and hastily hide it as your face blushes with embarrassment.');
      } else {
        scene.text('You buy a vibrator and calmly hide it.');
      }
      scene.actions([
        { label: 'Leave', goto: ['pav_train_market', 'start'] },
        { label: 'Buy something else', handler: (st: GameState) => {
    // TODO-QSP: gt 'pav_train_market', 4
  } },
      ]);
    }
  } },
      ]);
    }
    if (((s as any).mc_inventory ?? 0)?.['buttplug'] === 0) {
      scene.actions([
        { label: 'Buy a butt plug [+$func(\'money\', \'get_cost_string\', 700, \'...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 700, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'money', 'pay', 700, 'cash');
      ((s as any).mc_inventory ?? {})['buttplug'] = 1;
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
      (s as any).TimesBuyPorno = ((s as any).TimesBuyPorno ?? 0) + (1);
      scene.img('images/pc/items/sextoys/bp_small.jpg');
      if (((s as any).pcs_horny ?? 0) >= 50  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 150) {
        scene.text('You buy a butt plug and hastily hide it as your face blushes with embarrassment.');
      } else {
        scene.text('You buy a butt plug and calmly hide it.');
      }
      scene.actions([
        { label: 'Leave', goto: ['pav_train_market', 'start'] },
        { label: 'Buy something else', handler: (st: GameState) => {
    // TODO-QSP: gt 'pav_train_market', 4
  } },
      ]);
    }
  } },
      ]);
    }
    if (((s as any).mc_inventory ?? 0)?.['dildo_normal'] > 0) {
      if (((s as any).mc_inventory ?? 0)?.['strapon'] === 0) {
        scene.actions([
          { label: 'Buy strap-on harness [+$func(\'money\', \'get_cost_string\', 500, \'...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 500, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      ((s as any).mc_inventory ?? {})['strapon'] = 1;
      (s as any).strapNumber = 2;
      qspCall(s, 'money', 'pay', 500, 'cash');
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
      (s as any).TimesBuyPorno = ((s as any).TimesBuyPorno ?? 0) + (1);
      scene.img('images/pc/items/sextoys/harness.jpg');
      if (((s as any).pcs_horny ?? 0) >= 50  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 150) {
        scene.text('You buy a strap-on harness and hastily hide it as your face blushes with embarrassment.');
      } else {
        scene.text('You buy a strap-on harness and calmly hide it.');
      }
      scene.actions([
        { label: 'Leave', goto: ['pav_train_market', 'start'] },
        { label: 'Buy something else', handler: (st: GameState) => {
    // TODO-QSP: gt 'pav_train_market', 4
  } },
      ]);
    }
  } },
        ]);
      }
    } else {
      if (((s as any).mc_inventory ?? 0)?.['strapon'] === 0  &&  ((s as any).mc_inventory ?? 0)?.['dildo_normal'] === 0) {
        scene.actions([
          { label: 'Buy strap-on harness with a 15cm dildo [+$func(\'money\', \'get_cost_string\', 1200, ...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 1200, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      ((s as any).mc_inventory ?? {})['strapon'] = 1;
      ((s as any).mc_inventory ?? {})['dildo_normal'] = 1;
      (s as any).strapNumber = 2;
      qspCall(s, 'money', 'pay', 1200, 'cash');
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
      (s as any).TimesBuyPorno = ((s as any).TimesBuyPorno ?? 0) + (1);
      scene.img('images/pc/items/sextoys/harness.jpg');
      if (((s as any).pcs_horny ?? 0) >= 50  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 150) {
        scene.text('You buy a strap-on harness and dildo and hastily hide them as your face blushes with embarrassment.');
      } else {
        scene.text('You buy a strap-on harness and dildo and calmly hide them.');
      }
      scene.actions([
        { label: 'Leave', goto: ['pav_train_market', 'start'] },
        { label: 'Buy something else', handler: (st: GameState) => {
    // TODO-QSP: gt 'pav_train_market', 4
  } },
      ]);
    }
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Leave', goto: ['pav_train_market', 'start'] },
      { label: 'Look for something else', handler: (st: GameState) => {
    // TODO-QSP: gt 'pav_train_market', 4
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 5) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/market/dedgitara.jpg');
    scene.text('You see an old man playing the guitar. He\'s trying to avert as much attention as he can to himself.');
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 18) {
      scene.actions([
        { label: 'Wander around the market', goto: ['pav_train_market', 'events'] },
      ]);
    }
    scene.actions([
      { label: 'Stop wandering', goto: ['pav_train_market', 'start'] },
    ]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 6) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/market/nenavizublyadcigan.jpg');
    scene.text('You meet a Gypsy woman who offers to tell you your fortune.');
    scene.actions([
      { label: 'Decline', goto: ['pav_train_market', 'start'] },
      { label: 'Accept', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/locations/pavlovsk/market/gadaet\'+rand(1, 2)+\'.jpg');
    scene.text('You agree and the woman takes your hand before she predicts you\'ll have great happiness and lots of money.');
    scene.text('Afterwards, she quickly hurries away.');
    scene.actions([
      { label: 'Something\'s wrong', handler: (st: GameState) => {
    qspCall(s, 'money', 'set', 0);
    qspCall(s, 'mood', 'lower', 'huge');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/market/pusto.jpg');
    scene.text('With a sneaking suspicion, you start looking through your stuff. Unfortunately, your wallet is nowhere to be found!');
    scene.actions([
      { label: 'Find the Gypsy', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/market/okliknut.jpg');
    scene.text('You search the area hoping to find the thief, but she has already disappeared into the crowd.');
    scene.actions([
      { label: 'Back', goto: ['pav_train_market', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 7) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/market/kosmetic.jpg');
    // TODO-QSP: dynamic text: You see some cosmetics on sale for '+ $func('money', 'string_price', 800) +'.
    scene.text('You see some cosmetics on sale for \'+ $func(\'money\', \'string_price\', 800) +\'.');
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 18) {
      scene.actions([
        { label: 'Wander around the market', goto: ['pav_train_market', 'events'] },
      ]);
    }
    scene.actions([
      { label: 'Stop wandering', goto: ['pav_train_market', 'start'] },
      { label: 'Buy the cosmetics [+$func(\'money\', \'get_cost_string\', 800, \'...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 800, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 15;
      qspCall(s, 'money', 'pay', 800, 'cash');
      ((s as any).mc_inventory ?? {})['cosmetics'] = (((s as any).mc_inventory ?? {})['cosmetics'] ?? 0) + (50);
      scene.actions([{ label: 'Continue', goto: ['pav_train_market', 'start'] }]);
    }
  } },
    ]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 8) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/market/vitaminki.jpg');
    // TODO-QSP: dynamic text: You see some vitamins on sale for '+ $func('money', 'string_price', 100) +'.
    scene.text('You see some vitamins on sale for \'+ $func(\'money\', \'string_price\', 100) +\'.');
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 18) {
      scene.actions([
        { label: 'Wander around the market', goto: ['pav_train_market', 'events'] },
      ]);
    }
    scene.actions([
      { label: 'Stop wandering', goto: ['pav_train_market', 'start'] },
      { label: 'Buy vitamins [+$func(\'money\', \'get_cost_string\', 100, \'...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 100, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 15;
      ((s as any).mc_inventory ?? {})['vitamins'] = (((s as any).mc_inventory ?? {})['vitamins'] ?? 0) + (20);
      qspCall(s, 'money', 'pay', 100, 'cash');
      scene.actions([{ label: 'Continue', goto: ['pav_train_market', 'start'] }]);
    }
  } },
    ]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 9) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/pc/items/accessories/birthcontrol/condoms.jpg');
    // TODO-QSP: dynamic text: You see a booth selling condoms for '+ $func('money', 'string_price', 80) +'.
    scene.text('You see a booth selling condoms for \'+ $func(\'money\', \'string_price\', 80) +\'.');
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 18) {
      scene.actions([
        { label: 'Wander around the market', goto: ['pav_train_market', 'events'] },
      ]);
    }
    scene.actions([
      { label: 'Stop wandering', goto: ['pav_train_market', 'start'] },
      { label: 'Buy condoms [+$func(\'money\', \'get_cost_string\', 80, \'c...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 80, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 15;
      ((s as any).mc_inventory ?? {})['equipped_condoms'] = (((s as any).mc_inventory ?? {})['equipped_condoms'] ?? 0) + (5);
      (s as any).i = 5;
      // TODO-QSP: :cndmlp
      if ((!(Math.floor(Math.random() * 26) + 0))) {
        ((s as any).mc_inventory ?? {})['bad_condoms'] = (((s as any).mc_inventory ?? {})['bad_condoms'] ?? 0) + (1);
      }
      if (((s as any).i ?? 0) > 0) {
        (s as any).i = ((s as any).i ?? 0) - (1);
        // TODO-QSP: jump 'cndmlp'
      }
      qspCall(s, 'money', 'pay', 80, 'cash');
      scene.actions([{ label: 'Continue', goto: ['pav_train_market', 'start'] }]);
    }
  } },
    ]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 10) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/market/balzam.jpg');
    // TODO-QSP: dynamic text: There is lip balm on sale for '+ $func('money', 'string_price', 100) +'.
    scene.text('There is lip balm on sale for \'+ $func(\'money\', \'string_price\', 100) +\'.');
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 18) {
      scene.actions([
        { label: 'Wander around the market', goto: ['pav_train_market', 'events'] },
      ]);
    }
    scene.actions([
      { label: 'Stop wandering', goto: ['pav_train_market', 'start'] },
      { label: 'Buy lip balm [+$func(\'money\', \'get_cost_string\', 100, \'...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 100, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 15;
      ((s as any).mc_inventory ?? {})['lipbalm'] = (((s as any).mc_inventory ?? {})['lipbalm'] ?? 0) + (30);
      qspCall(s, 'money', 'pay', 100, 'cash');
      scene.actions([{ label: 'Continue', goto: ['pav_train_market', 'start'] }]);
    }
  } },
    ]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 11) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/arthur/artur.jpg');
    if ((!((s as any).arturKnow ?? 0))) {
      scene.text('Someone suddenly calls out to you.');
      scene.text('"Hey, pretty girl! Do you want a fresh, juicy tangerine?"');
      scene.actions([
        { label: 'Look', goto: ['arturRinok', 'start'] },
      ]);
    } else {
      scene.text('Someone suddenly calls out to you.');
      // TODO-QSP: dynamic text: "Hey, <<$pcs_nickname>>! Do you want a fresh, juicy tangerine?"
      scene.text(`"Hey, ${((s as any).pcs_nickname ?? 0)}! Do you want a fresh, juicy tangerine?"`);
      scene.actions([
        { label: 'Go and see Arthur', goto: ['arturRinok', 'start'] },
      ]);
    }
  }
  if (((s as any).locArgs?.[0] ?? 0) === 12) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/market/cheburek.jpg');
    scene.text('Walking through the market, you came across an old woman selling pies.');
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 18) {
      scene.actions([
        { label: 'Wander around the market', goto: ['pav_train_market', 'events'] },
      ]);
    }
    if (((s as any).pcs_energy ?? 0) <= 80) {
      scene.actions([
        { label: 'Buy a pie [+$func(\'money\', \'get_cost_string\', 20, \'c...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 20, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).fat = ((s as any).fat ?? 0) + (3);
      (s as any).frost = 0;
      (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (5);
      qspCall(s, 'mood', 'raise', 'tiny');
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (5);
      (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (5);
      qspCall(s, 'money', 'pay', 20, 'cash');
      (s as any).minut = ((s as any).minut ?? 0) + 10;
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/market/eat.jpg');
      scene.text('The pie is still warm as the woman hands it over to you. Then, barely able to keep yourself away from it, you find a place to sit and enjoy the pie.');
      scene.actions([
        { label: 'Continue walking through the market', goto: ['pav_train_market', 'events'] },
      ]);
    }
  } },
      ]);
    } else {
      // TODO-QSP: *p ', However, you''re not hungry right now.'
    }
    scene.actions([
      { label: 'Stop wandering', goto: ['pav_train_market', 'start'] },
    ]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 13) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/market/dropwallet.jpg');
    scene.text('You see a wallet fall out of a woman\'s purse.');
    scene.actions([
      { label: 'Tell her', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/market/vernutwallet.jpg');
    scene.text('You call the woman and hold out her wallet. She looks at you and, upon realizing, gratefully takes her wallet back and walks away.');
    scene.actions([
      { label: 'Continue walking through the market', goto: ['pav_train_market', 'events'] },
    ]);
  } },
      { label: 'Look through the purse', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    (s as any).i = Math.floor(Math.random() * 161) + 40;
    scene.img('images/locations/pavlovsk/market/zaglanut.jpg');
    // TODO-QSP: dynamic text: You open the wallet and see '+$func('money', 'string_earn', i)+' inside.
    scene.text('You open the wallet and see \'+$func(\'money\', \'string_earn\', i)+\' inside.');
    qspCall(s, 'willpower', 'misc', 'self', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Take the money and throw the wallet away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Take the money and throw the wallet away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'money', 'earn', ((s as any).i ?? 0));
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('You snatch the money from the wallet before tossing it aside.');
    scene.actions([
      { label: 'Continue', goto: ['pav_train_market', 'start'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Catch up with the woman and return her purse', handler: (st: GameState) => {
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/market/proverka.jpg');
    scene.text('You catch up with the woman, and telling her she dropped something, you hand her the purse. The woman checks that her money is still there, and seeing everything in place, she thanks you and walks away.');
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 18) {
      scene.actions([
        { label: 'Wander around the market', goto: ['pav_train_market', 'events'] },
      ]);
    }
    scene.actions([
      { label: 'Stop wandering', goto: ['pav_train_market', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 14) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/market/rebenok.jpg');
    scene.text('You see a young mother and her crying baby.');
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 18) {
      scene.actions([
        { label: 'Wander around the market', goto: ['pav_train_market', 'events'] },
      ]);
    }
    scene.actions([
      { label: 'Stop wandering', goto: ['pav_train_market', 'start'] },
    ]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 15) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/market/rezba.jpg');
    scene.text('You find a stall selling beautiful trinkets carved out of wood and metal.');
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 18) {
      scene.actions([
        { label: 'Wander around the market', goto: ['pav_train_market', 'events'] },
      ]);
    }
    scene.actions([
      { label: 'Stop wandering', goto: ['pav_train_market', 'start'] },
    ]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 16) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/market/gruzchik.jpg');
    scene.text('Looking around, you almost collide with a man pulling a small cart.');
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 18) {
      scene.actions([
        { label: 'Wander around the market', goto: ['pav_train_market', 'events'] },
      ]);
    }
    scene.actions([
      { label: 'Stop wandering', goto: ['pav_train_market', 'start'] },
    ]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 17) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/market/meatlavka.jpg');
    scene.text('You wander past a stall selling meat and see a butcher working with an axe.');
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 18) {
      scene.actions([
        { label: 'Wander around the market', goto: ['pav_train_market', 'events'] },
      ]);
    }
    scene.actions([
      { label: 'Stop wandering', goto: ['pav_train_market', 'start'] },
    ]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 18) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/market/dirka.jpg');
    scene.text('As you walk past a stall, you notice a small hole torn in the canvas.');
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 18) {
      scene.actions([
        { label: 'Wander around the market', goto: ['pav_train_market', 'events'] },
      ]);
    }
    qspCall(s, 'willpower', 'voyeur', 'self', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Look through the hole [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Look through the hole [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur', 2);
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/market/pereodev\'+rand(1, 15)+\'.jpg');
    // TODO-QSP: 'You look inside the tent and see ' + $pavtrain_marketrandtext[rand(3, 7)]
    scene.actions([
      { label: 'Leave', goto: ['pav_train_market', 'start'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Stop wandering', goto: ['pav_train_market', 'start'] },
    ]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 19) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/market/birthcontrolpills.jpg');
    // TODO-QSP: dynamic text: You see a booth selling birth control pills for '+ $func('money', 'string_price'...
    scene.text('You see a booth selling birth control pills for \'+ $func(\'money\', \'string_price\', 1500) +\'.');
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 18) {
      scene.actions([
        { label: 'Wander around the market', goto: ['pav_train_market', 'events'] },
      ]);
    }
    if (((s as any).therapistFuckedPussyStage ?? 0) < 2) {
      scene.actions([
        { label: 'Buy the birth control pills [+$func(\'money\', \'get_cost_string\', 1500, ...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 1500, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 15;
      ((s as any).mc_inventory ?? {})['contraceptive_pill'] = (((s as any).mc_inventory ?? {})['contraceptive_pill'] ?? 0) + (1);
      (s as any).temp = Math.floor(Math.random() * 4) + 0;
      if ((!((s as any).temp ?? 0))) {
        (s as any).tabletkiold = ((s as any).tabletkiold ?? 0) + (1);
      } else {
        if (((s as any).temp ?? 0) === 1) {
          (s as any).tabletkifert = ((s as any).tabletkifert ?? 0) + (1);
        } else {
          if (((s as any).temp ?? 0) === 2) {
            (s as any).tabletkirej = ((s as any).tabletkirej ?? 0) + (1);
          } else {
            if ((Math.floor(Math.random() * 2) + 0) === 1) {
              (s as any).tabletkifake = ((s as any).tabletkifake ?? 0) + (1);
            } else {
              (s as any).tabletkisug = ((s as any).tabletkisug ?? 0) + (1);
            }
          }
        }
      }
      qspCall(s, 'money', 'pay', 1500, 'cash');
      scene.actions([{ label: 'Continue', goto: ['pav_train_market', 'start'] }]);
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Stop wandering', goto: ['pav_train_market', 'start'] },
    ]);
  }
  scene.actions([
    { label: 'Stop wandering', goto: ['pav_train_market', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'clo':
      enterClo(s, scene);
      break;
    case 'events':
      enterEvents(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pav_train_market: LocationDef = {
  name: 'pav_train_market',
  title: 'Clothes',
  region: 'pavlovsk',
  locationType: 'public_outdoors',
  enter: enter,
};
