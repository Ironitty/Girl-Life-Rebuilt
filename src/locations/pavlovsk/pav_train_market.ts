import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
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
  if (((s as any).pavtrain_book ?? 0) === 0) {
    scene.text('Perhaps you will find some books when you stroll through the market.');
  }
  if (((s as any).pavmarket_porn ?? 0) === 0) {
    scene.text('Rumor has it that you can find some spicy toys around here somewhere.');
  }
  if (((s as any).arturQW ?? 0) === 1  &&  (((s as any).week ?? 0) === 6  ||  ((s as any).week ?? 0) === 7)  &&  ((s as any).hour ?? 0) < 12) {
    // TODO-QSP: act 'Wait for Arthur to arrive': hour = 12
    scene.actions([{ label: 'Continue', goto: ['pav_train_market', 'start'] }]);
  }
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 18) {
    scene.text('The market stalls are buzzing with shoppers. Everyone seems to be in a good mood, and you can hear back-and-forth bargaining as you pass by.');
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 100  &&  Math.floor(Math.random() * 10) + 0 === 0) {
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
    if (((s as any).arturKnow ?? 0) === 1  &&  ((s as any).arturQW ?? 0) === 0) {
      scene.actions([
        { label: 'Look for Arthur', goto: ['arturRinok', 'start'] },
      ]);
    } else {
      if (((s as any).hour ?? 0) === 12  ||  ((s as any).hour ?? 0) === 13) {
        scene.actions([
          { label: 'Look for Arthur', goto: ['arturRinok', 'work_1'] },
        ]);
      }
      if (((s as any).arturQW ?? 0) === 2) {
        if (((s as any).hour ?? 0) === 16  &&  ((s as any).minut ?? 0) <= 30) {
          scene.actions([
            { label: 'Look for Arthur', goto: ['arturRinok', 'work_2'] },
          ]);
        } else {
          scene.actions([
            { label: 'Wait for Arthur to arrive', handler: (st: GameState) => {
    (st as any).hour = 16;
    (st as any).minut = 0;
  }, goto: ['pav_train_market', 'start'] },
          ]);
        }
      }
      if (((s as any).mc_inventory ?? 0)?.['tapestry'] > 0  &&  ((s as any).gobQW ?? 0) === 0) {
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
        scene.actions([
          { label: 'Sell tapestry', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.text('You go to the man who offered to buy your tapestries. You find him by his stall, smiling.');
    if (((s as any).gobQW ?? 0) === 2) {
      scene.text('Roman welcomes you. He is interested and businesslike as he asks what you have for sale.');
    } else {
      (s as any).gobQW = 2;
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      // TODO-QSP: dynamic text: The man greets you and introduces himself as Roman. You tell him that your name ...
      scene.text(`The man greets you and introduces himself as Roman. You tell him that your name is ${((s as any).pcs_nickname ?? 0)} and after a brief chat, he says he wants to see what you have for sale.`);
    }
    if (((s as any).mc_inventory ?? 0)?.['tapestry'] > 1) {
      scene.actions([
        { label: 'Sell all of your tapestries', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You show Roman your tapestries, and he gives you '+$func('money', 'string_profit...
    scene.text('You show Roman your tapestries, and he gives you \'+$func(\'money\', \'string_profit\', mc_inventory[\'tapestry\'] * 1000)+\'. You take the money and give him the tapestries.');
    // TODO-QSP: gs 'money', 'earn', mc_inventory['tapestry'] * 1000
    (s as any).mc_inventory['tapestry'] = 0;
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
    (s as any).mc_inventory['tapestry'] = ((s as any).mc_inventory['tapestry'] ?? 0) - (1);
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
      if (((s as any).ShowerIvan ?? 0) === 5  &&  ((s as any).porndeal ?? 0) === 0  &&  Math.floor(Math.random() * 10) + 1 <= 4  &&  ((s as any).ricewine ?? 0) !== 1  &&  ((s as any).lookwine ?? 0) !== ((s as any).daystart ?? 0)) {
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
    if (((s as any).pornmarkonce ?? 0) === 0) {
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
        qspCall(s, 'stat', '');
        (s as any).lookboy = 1;
        scene.img('images/locations/pavlovsk/market/chinese_stall01.jpg');
        scene.text('You look around the market for the boy from the Chinese stall, but you can\'t find him, so you decide to look for him another day.');
        scene.actions([
          { label: 'Leave', goto: ['pav_train_market', 'start'] },
        ]);
      }
      // TODO-QSP: dynamic text: The market stalls are empty. The market is only open between '+func('time', 'get...
      scene.text('The market stalls are empty. The market is only open between \'+func(\'time\', \'get_time_string\', 8, 0)+\' and \'+func(\'time\', \'get_time_string\', 19, 0)+\'.');
      scene.actions([
        { label: 'View clothing', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_train_market', 'clo'] },
        { label: 'Leave the market', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['pav_market', ''] },
      ]);
    }
    scene.actions([
      { label: 'Go back to the market entrance', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['pav_market', ''] },
      { label: 'Wander through the market', goto: ['pav_train_market', 'events'] },
    ]);
  }
  if (((s as any).ARGS ?? 0)[0] === 1) {
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
  if (((s as any).ARGS ?? 0)[0] === 2) {
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
  if (((s as any).ARGS ?? 0)[0] === 3) {
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
  if (((s as any).ARGS ?? 0)[0] === 4) {
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
      if (qspFunc(s, 'money', 'can_afford', 700, 'cash') === 0) {
        s.scene = { ...s.scene, mainText: String((s as any).noMoney ?? ''), curActs: [] };
      } else {
        (s as any).minut = ((s as any).minut ?? 0) + 5;
        qspCall(s, 'money', 'pay', 700, 'cash');
        (s as any).mc_inventory['card'] = 2;
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
      scene.actions([
        { label: 'Buy the playing cards [+$func(\'money\', \'get_cost_string\', 700, \'...]' }, // TODO-QSP: empty action body
      ]);
    }
    scene.actions([
      { label: 'Stop wandering', goto: ['pav_train_market', 'start'] },
    ]);
  }
  if (((s as any).porndeal ?? 0) === 1) {
    if (qspFunc(s, 'money', 'can_afford', 400, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney ?? ''), curActs: [] };
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
    scene.actions([
      { label: 'Buy a porn magazine for the Chinese boy [+$func(\'money\', \'get_cost_string\', 400, \'...]' }, // TODO-QSP: empty action body
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['dildo_suction'] === 0) {
    if (qspFunc(s, 'money', 'can_afford', 1000, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney ?? ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      (s as any).mc_inventory['dildo_suction'] = ((s as any).mc_inventory['dildo_suction'] ?? 0) + (1);
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
    scene.actions([
      { label: 'Buy a 15cm suction dildo [+$func(\'money\', \'get_cost_string\', 1000, ...]' }, // TODO-QSP: empty action body
    ]);
  }
  scene.actions([
    { label: 'Browse the porn magazines', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic', 5);
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/pavlovsk/market/pornmag.jpg');
    if (((s as any).TimesBuyPorno ?? 0) === 0) {
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
      s.scene = { ...s.scene, mainText: String((s as any).noMoney ?? ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'money', 'pay', 400, 'cash');
      (s as any).mc_inventory['mag_porn'] = 40;
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
      // TODO-QSP: dynamic text: The salesman notices you approaching. "Looking to buy a magazine? They're only '...
      scene.text('The salesman notices you approaching. "Looking to buy a magazine? They\'re only \' + $func(\'money\', \'string_price\', 400) + \' each."');
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
      s.scene = { ...s.scene, mainText: String((s as any).noMoney ?? ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'money', 'pay', 400, 'cash');
      (s as any).mc_inventory['mag_porn'] = 40;
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
      s.scene = { ...s.scene, mainText: String((s as any).noMoney ?? ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'money', 'pay', 400, 'cash');
      (s as any).mc_inventory['mag_porn'] = 40;
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
    scene.actions([
      { label: 'Leave', goto: ['pav_train_market', 'start'] },
      { label: 'Look for something else', handler: (st: GameState) => {
    // TODO-QSP: gt 'pav_train_market', 4
  } },
    ]);
  } },
    { label: 'Ask to see the sex toys', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/market/sextoys.jpg');
    scene.text('He lets you step behind the counter to get a better look. "Take a look and let me know what you would like.');
    // TODO-QSP: dynamic text: You see several 15cm dildos, a small selection of vibrators in various colours a...
    scene.text('You see several 15cm dildos, a small selection of vibrators in various colours and many butt plugs, all of which are tagged as costing \' + $func(\'money\', \'string_price\', 700) + \' each. Near the bottom are several strap-on harnesses priced at \' + $func(\'money\', \'string_price\', 500) + \' each.');
    scene.text('The salesman only deals in cash.');
    if (((s as any).mc_inventory ?? 0)?.['dildo_normal'] === 0) {
      if (qspFunc(s, 'money', 'can_afford', 700, 'cash') === 0) {
        s.scene = { ...s.scene, mainText: String((s as any).noMoney ?? ''), curActs: [] };
      } else {
        (s as any).minut = ((s as any).minut ?? 0) + 5;
        (s as any).mc_inventory['dildo_normal'] = 1;
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
      scene.actions([
        { label: 'Buy a 15cm dildo [+$func(\'money\', \'get_cost_string\', 700, \'...]' }, // TODO-QSP: empty action body
      ]);
    }
    scene.actions([
      { label: 'Leave', goto: ['pav_train_market', 'start'] },
      { label: 'Look for something else', handler: (st: GameState) => {
    // TODO-QSP: gt 'pav_train_market', 4
  } },
    ]);
  } },
    { label: 'Buy another 15cm suction dildo [+$func(\'money\', \'get_cost_string\', 1000, ...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 1000, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney ?? ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      (s as any).mc_inventory['dildo_suction'] = ((s as any).mc_inventory['dildo_suction'] ?? 0) + (1);
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
  scene.build();
}

export const pav_train_market: LocationDef = {
  name: 'pav_train_market',
  title: 'Clothes',
  region: 'pavlovsk',
  locationType: 'public_outdoors',
  description: ['This small open-air market is located near the train station. None of the stall owners accept card payments, so you\'ll need cash on hand to buy anything here.'],
  enter: enter,
};
