import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterWorkofdebt(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/Strela/vadimbely.jpg');
  scene.text('The tinted window slides down and you find yourself staring directly into Vadim\'s face. "Slut, get in. It\'s time for you to work off your debts."');
  // TODO-QSP: 'You owe him: ' + $func('money', 'string_debt', belgangPay)
  if (((s as any).belgangPayWeek ?? 0) >= 0) {
    // TODO-QSP: 'This week you need to pay him: ' + $func('money', 'string_debt', belgangPayWeek)
  } else {
    // TODO-QSP: dynamic text: This week you need to pay him: <<$func('money', 'format', 0)>>
    scene.text(`This week you need to pay him: ${qspFunc(s, 'money', 'format', 0)}`);
    // TODO-QSP: 'You have reduced your next weeks payment by: ' + $func('money', 'string_debt_reduction', -1*belgang...
  }
  if (qspFunc(s, 'money', 'can_afford_debt', ((s as any).belgangPay ?? 0), 'cash')) {
    scene.actions([
      { label: 'Pay the remaining debt ( [+$func(\'money\', \'string_debt\', belgangPay...]', goto: ['belgang', 'payremaining'] },
    ]);
  } else {
    if (qspFunc(s, 'money', 'can_afford_debt', ((s as any).belgangPayWeek ?? 0), 'cash')) {
      scene.actions([
        { label: 'Pay for this week ( [+$func(\'money\', \'string_debt\', belgangPay...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'money', 'debt_pay', 'belgangPay', ((s as any).belgangPayWeek ?? 0), 'cash');
    qspCall(s, 'money', 'debt_pay', 'belgangPayWeek', 0, 'none');
    qspCall(s, 'belgang', 'update_debt_calendar');
    scene.img('images/characters/pavlovsk/vadim/belymoney.jpg');
    scene.text('You don\'t get in, instead you hand him the payment for this week. "That\'s it, everything for this week."');
    // TODO-QSP: dynamic text: He takes a moment to count the money and nods approvingly. "Very good, it's the ...
    scene.text(`He takes a moment to count the money and nods approvingly. "Very good, it's the full amount. See you next week, ${((s as any).pcs_nickname ?? 0)}."`);
    // TODO-QSP: 'You owe him: ' + $func('money', 'string_debt', belgangPay)
    // TODO-QSP: 'This week you need to pay him: ' + $func('money', 'string_debt', belgangPayWeek)
    scene.actions([
      { label: 'Move on', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    ]);
  } },
      ]);
    }
  }
  scene.actions([
    { label: 'Get into the jeep', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/vadim/belyjeep.jpg');
    scene.text('You open the door and take a seat in the back as Vadim drives through the city.');
    if (((s as any).temper ?? 0) >= 18  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).hour ?? 0) <= 19  &&  (!(Math.floor(Math.random() * 3) + 0))) {
      (s as any).minut = ((s as any).minut ?? 0) + 30;
      scene.img('images/characters/pavlovsk/vadim/belyjeep.jpg');
      scene.text('As the car leaves the city and goes off-road at some point, one of the more silent criminals feels the need to explain: "We have a little picnic planned for today. We know just the place… nice and quiet. You\'ll be able to entertain us there without interruptions."');
      scene.text('The way he says it sends a shiver down your spine.');
      scene.text('Finally, a few minutes after the car has left the main roads, you stop somewhere. You have absolutely no idea where you are. The criminals get out of the car and Vadim does the same, telling you to get out and follow them.');
      scene.actions([
        { label: 'Get out of the car', goto: ['belpicknick', ''] },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/Strela/vadimbely.jpg');
      scene.text('A few minutes later you arrive at an apartment block, it isn\'t is great shape but Vadim leads you inside and up to a second floor apartment.');
      scene.text('The apartment is actually in decent shape. The minimal amount of furniture and decorations don\'t make it look very hospitable though, and you assume this might just be one of the places Vadim rented for business or pleasure, not for living in.');
      scene.text('Noticing you\'re spending too much time looking around and aren\'t following him swiftly enough, he grabs you by your hair and pulls your face to his, roughly shoving his tongue in your mouth. You can smell the tobacco on his breath, and do your best to ignore the taste as he kisses you.');
      ((s as any).stat ?? {})['rape_count'] = (((s as any).stat ?? {})['rape_count'] ?? 0) + (1);
      scene.actions([
        { label: 'Kiss him', goto: ['BelSex', 'sex'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterPayday(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/Strela/vadimbely.jpg');
  // TODO-QSP: dynamic text: Vadim Bely steps out, along with several of his henchmen. He gives you a smile t...
  scene.text(`Vadim Bely steps out, along with several of his henchmen. He gives you a smile that you know is 100% fake and behaves amicably while he says: "Long time no see, ${((s as any).pcs_nickname ?? 0)}! How are you? I hope you bear good news?"`);
  // TODO-QSP: 'You owe him: ' + $func('money', 'string_debt', belgangPay)
  if (((s as any).belgangPayWeek ?? 0) >= 0) {
    // TODO-QSP: 'This week you need to pay him: ' + $func('money', 'string_debt', belgangPayWeek)
  } else {
    // TODO-QSP: dynamic text: This week you need to pay him: <<$func('money', 'format', 0)>>
    scene.text(`This week you need to pay him: ${qspFunc(s, 'money', 'format', 0)}`);
    // TODO-QSP: 'You have reduced your next weeks payment by: ' + $func('money', 'string_debt_reduction', -1*belgang...
  }
  if (qspFunc(s, 'money', 'can_afford_debt', ((s as any).belgangPay ?? 0), 'cash')) {
    scene.actions([
      { label: 'Pay the remaining debt ( [+$func(\'money\', \'string_debt\', belgangPay...]', goto: ['belgang', 'payremaining'] },
    ]);
  } else {
    if (((s as any).belgangPayWeek ?? 0) <= 0) {
      scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/Strela/vadimbely.jpg');
      if (((s as any).belfirstweek ?? 0) === 1) {
        (s as any).belfirstweek = 0;
        // TODO-QSP: dynamic text: Vadim Bely steps out, along with several of his henchmen. He gives you a smile t...
        scene.text(`Vadim Bely steps out, along with several of his henchmen. He gives you a smile that you know is 100% fake and behaves amicably while he says: "Long time no see, ${((s as any).pcs_nickname ?? 0)}! Remember next Sunday you need to start paying us," he says.`);
      } else {
        // TODO-QSP: dynamic text: Vadim Bely steps out, along with several of his henchmen. He gives you a smile t...
        scene.text(`Vadim Bely steps out, along with several of his henchmen. He gives you a smile that you know is 100% fake and behaves amicably while he says: "Long time no see, ${((s as any).pcs_nickname ?? 0)}! You are doing good. If you keep paying early, this will work out for the both of us," he says.`);
      }
      qspCall(s, 'belgang', 'saunamention');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'money', 'debt_add', 'belgangPayWeek', ((s as any).belgangPayWeekAmount ?? 0));
    if (((s as any).belgangPayWeek ?? 0) > ((s as any).belgangPay ?? 0)) {
      (s as any).belgangPayWeek = ((s as any).belgangPay ?? 0);
    }
    qspCall(s, 'belgang', 'update_debt_calendar');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/Strela/vadimbely.jpg');
    scene.text('He gives you a fake smile, gets back in his jeep and drives away.');
    // TODO-QSP: 'You owe him: ' + $func('money', 'string_debt', belgangPay)
    // TODO-QSP: 'Next week you need to pay him: ' + $func('money', 'string_debt', belgangPayWeek)
    scene.actions([
      { label: 'Move on', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    ]);
  } },
      ]);
    } else {
      if (qspFunc(s, 'money', 'can_afford_debt', ((s as any).belgangPayWeek ?? 0), 'cash')) {
        scene.actions([
          { label: 'Pay for this week ( [+$func(\'money\', \'string_debt\', belgangPay...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'money', 'debt_pay', 'belgangPay', ((s as any).belgangPayWeek ?? 0), 'cash');
    qspCall(s, 'money', 'debt_pay', 'belgangPayWeek', 0, 'none');
    scene.img('images/characters/pavlovsk/vadim/belymoney.jpg');
    scene.text('You hand over the payment for this week. "That\'s it, everything for this week."');
    scene.text('He takes a moment to count the money and nods approvingly. "Very good, it\'s the full amount."');
    qspCall(s, 'belgang', 'saunamention');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'money', 'debt_add', 'belgangPayWeek', ((s as any).belgangPayWeekAmount ?? 0));
    if (((s as any).belgangPayWeek ?? 0) > ((s as any).belgangPay ?? 0)) {
      (s as any).belgangPayWeek = ((s as any).belgangPay ?? 0);
    }
    qspCall(s, 'belgang', 'update_debt_calendar');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/Strela/vadimbely.jpg');
    // TODO-QSP: dynamic text: He gives you a fake smile. "See you next week, <<$pcs_nickname>>."
    scene.text(`He gives you a fake smile. "See you next week, ${((s as any).pcs_nickname ?? 0)}."`);
    // TODO-QSP: 'You owe him: ' + $func('money', 'string_debt', belgangPay)
    // TODO-QSP: 'Next week you need to pay him: ' + $func('money', 'string_debt', belgangPayWeek)
    scene.actions([
      { label: 'Move on', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        scene.actions([
          { label: 'You don\'t have the money', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/Strela/vadimbely.jpg');
    scene.text('You\'re tearing up as you look down at your shoes, not daring to look him in the eye. "I\'m… I\'m sorry, mister Bely. I simply don\'t have the of money. If you give me some more time, I wi-"');
    if ((!((s as any).belgangPayextension ?? 0))) {
      (s as any).belgangPayextension = ((s as any).belgangPayextension ?? 0) + (1);
      qspCall(s, 'money', 'debt_add', 'belgangPay', 2000);
      qspCall(s, 'money', 'debt_add', 'belgangPayWeek', 2000);
      if (((s as any).belgangPayWeek ?? 0) > ((s as any).belgangPay ?? 0)) {
        (s as any).belgangPayWeek = ((s as any).belgangPay ?? 0);
      }
      qspCall(s, 'belgang', 'update_debt_calendar');
      // TODO-QSP: dynamic text: He frowns, abruptly cutting you off. You can see the disapproval in his eyes whe...
      scene.text(`He frowns, abruptly cutting you off. You can see the disapproval in his eyes when you glance up. "That is very unfortunate, ${((s as any).pcs_nickname ?? 0)}," he says. "You can pay me next week, but I expect ' + $func('money', 'string_debt_addition', 2000) + ' extra."`);
      if ((!((s as any).belgangProstitute ?? 0))) {
        (s as any).belgangProstitute = 1;
        // TODO-QSP: dynamic text: "And don't worry, <<$pcs_nickname>>. I'll give you some opportunities to help yo...
        scene.text(`"And don't worry, ${((s as any).pcs_nickname ?? 0)}. I'll give you some opportunities to help you pay your debts," he says with a dangerous smile.`);
      }
      qspCall(s, 'belgang', 'saunamention');
      // TODO-QSP: 'You owe him: ' + $func('money', 'string_debt', belgangPay)
      // TODO-QSP: 'Next week you need to pay him: ' + $func('money', 'string_debt', belgangPayWeek)
      scene.actions([
        { label: 'Move on', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
      ]);
    } else {
      if (((s as any).belgangPayextension ?? 0) === 1) {
        (s as any).belgangPayextension = ((s as any).belgangPayextension ?? 0) + (1);
        qspCall(s, 'money', 'debt_add', 'belgangPay', 5000);
        qspCall(s, 'money', 'debt_add', 'belgangPayWeek', 5000);
        if (((s as any).belgangPayWeek ?? 0) > ((s as any).belgangPay ?? 0)) {
          (s as any).belgangPayWeek = ((s as any).belgangPay ?? 0);
        }
        qspCall(s, 'belgang', 'update_debt_calendar');
        // TODO-QSP: dynamic text: He frowns, abruptly cutting you off. You can see the disapproval in his eyes whe...
        scene.text(`He frowns, abruptly cutting you off. You can see the disapproval in his eyes when you glance up. "That is the last time, ${((s as any).pcs_nickname ?? 0)}," he says. "You can pay me next week, but I expect ' + $func('money', 'string_debt_addition', 5000) + ' extra.`);
        qspCall(s, 'belgang', 'saunamention');
        // TODO-QSP: 'You owe him: ' + $func('money', 'string_debt', belgangPay)
        // TODO-QSP: 'Next week you need to pay him: ' + $func('money', 'string_debt', belgangPayWeek)
        scene.actions([
          { label: 'Move on', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
        ]);
      } else {
        // TODO-QSP: dynamic text: He frowns, abruptly cutting you off. You can see the disapproval in his eyes whe...
        scene.text(`He frowns, abruptly cutting you off. You can see the disapproval in his eyes when you glance up. "That is very unfortunate ${((s as any).pcs_nickname ?? 0)}. I had such high hopes for you," he says. "I guess we will have to find an alternative way for you to pay off your debts."`);
        scene.text('He then directs his attention to two of his henchmen: "She\'s coming with us."');
        scene.text('Too scared to resist, you simply let the two men grab you by your arms and pull you into the Mitsubishi. Vadim gets back behind the wheel and within minutes you\'ve left Pavlovsk. You notice you\'re being taken to the city, and you wonder what they\'re planning for you there.');
        scene.actions([
          { label: 'In the city…', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    (s as any).workDolg = ((s as any).workDolg ?? 0) + (((s as any).belgangPay ?? 0));
    qspCall(s, 'money', 'debt_pay', 'workDolg', ((s as any).money ?? 0));
    qspCall(s, 'calendar', 'remove', 'belgang_payment_deadline');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/Strela/vadimbely.jpg');
    scene.text('The car pulls over in front of the sauna. After one of the criminals makes sure the coast is clear, two of the men pull you out of the car and escort you to a room inside the building. Vadim follows them and asks to be left alone with you for a minute. After the other guys leave the room, he explains: "Until you pay off your debts, we own you. You will live here and work here. Any expenses you incur while you are here will be added to your debt. Understood?"');
    scene.text('Silence fills the room as he waits for you to acknowledge what he just said. Mortified about what might happen if you don\'t, you nod. He decides to paint the picture anyway: "If you try to escape or refuse to work, we\'ll put a bullet in your head, chop you up and bury you in the woods in pieces. And that would be a waste, with such a pretty face as yours." He pinches your cheeks and then slaps your face; not hard enough to be painful, but it certainly drives the message home. You can tell he\'s dead serious.');
    scene.text('After looking you in the eyes for a few more seconds to make sure you get the message, he turns around and leaves. You are all alone now.');
    scene.actions([
      { label: 'Look around', goto: ['city_sauna', 'saunaroom'] },
    ]);
  } },
        ]);
      }
    }
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPayremaining(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'money', 'debt_pay', 'belgangPay', 0, 'cash');
  qspCall(s, 'calendar', 'remove', 'belgang_payment_deadline');
  ((s as any).npc_QW ?? {})['A113'] = 2;
  scene.img('images/characters/pavlovsk/vadim/belymoney.jpg');
  scene.text('No, today you won\'t work for him, you will never work for him again, today you will finally be free. "Here is everything. My debts are paid." You hand it over to Vadim while his henchmen keep a lookout. Once again, he gives you an awkward smile, very pleased how things have turned out. "It\'s all there, right? I would hate to have to come back for the rest."');
  scene.text('You nod at him, reassuring him. "It\'s all there, mister Bely. Count it if you don\'t believe me."');
  // TODO-QSP: dynamic text: He takes a moment to count the money and nods approvingly. "Very good, it's the ...
  scene.text(`He takes a moment to count the money and nods approvingly. "Very good, it's the full amount. Pleasure doing business with you, ${((s as any).pcs_nickname ?? 0)}. Take care of yourself."`);
  qspCall(s, 'belgang', 'saunamention');
  scene.text('He signals his crew to get back in the jeep. You barely manage to dodge the spray of pebbles and dirt the spinning tires spew your way, as they drive off as fast as they can, probably on their way to another \'business appointment\'.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Move on', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
  ]);
  scene.build();
}

function enterSaunamention(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['prostitution_count'] >= 20  &&  (!((s as any).saunaWhore ?? 0))) {
    (s as any).saunaWhore = 1;
    // TODO-QSP: dynamic text: "Since you were such an obedient whore, <<$pcs_nickname>>, I'll give you a small...
    scene.text(`"Since you were such an obedient whore, ${((s as any).pcs_nickname ?? 0)}, I'll give you a small parting gift. If you ever need money, go to the sauna in the city and tell them Mr. Bely sent you. You will have plenty of opportunities to use your 'talents' there."`);
  } else {
    if (((s as any).stat ?? 0)?.['prostitution_count'] >= 10  &&  (!((s as any).saunaWhore ?? 0))) {
      (s as any).saunaWhore = 1;
      scene.text('"If you ever need money, go to the sauna in the city and tell them Mr. Bely sends you. There you will have plenty of opportunities to use your \'talents\'."');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterUpdateDebtCalendar(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'calendar', 'remove', 'belgang_payment_deadline');
  if (((s as any).belgangPay ?? 0) > 0) {
    qspCall(s, 'calendar', 'add', 'belgang_payment_deadline');
  }
  // TODO-QSP: end
  scene.build();
}

function enterCheatmenu(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_QW ?? 0)?.['A113'] === 0  &&  (!((s as any).workDolg ?? 0))) {
    scene.text('<a href="exec:gs \'belgang\', \'cheatmenu_start\'">Vadim Bely debt: Start storyline (50,000 debt at 5,000/week)</a>');
  } else {
    if (((s as any).npc_QW ?? 0)?.['A113'] === 1) {
      scene.text('<a href="exec:gs \'belgang\', \'cheatmenu_clear\'">Vadim Bely debt: Clear debt and end storyline</a>');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCheatmenuStart(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_QW ?? {})['A113'] = 1;
  (s as any).daybelisex = ((s as any).daystart ?? 0);
  qspCall(s, 'money', 'debt_add', 'belgangPay', 50000);
  (s as any).belgangday = ((s as any).daystart ?? 0);
  (s as any).belgangPayWeekAmount = 5000;
  (s as any).belgangPayWeek = 0;
  (s as any).belgangPayextension = 0;
  (s as any).belgangProstitute = 0;
  if (((s as any).week ?? 0) === 7  ||  ((s as any).week ?? 0) <= 2) {
    (s as any).belfirstweek = 0;
  } else {
    (s as any).belfirstweek = 1;
  }
  if ((!((s as any).belfirstweek ?? 0))) {
    qspCall(s, 'money', 'debt_add', 'belgangPayWeek', ((s as any).belgangPayWeekAmount ?? 0));
  }
  qspCall(s, 'belgang', 'update_debt_calendar');
  scene.actions([{ label: 'Continue', goto: ['cheatmenu_din', 'story'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterCheatmenuClear(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'money', 'debt_pay', 'belgangPay', 0, 'none');
  qspCall(s, 'calendar', 'remove', 'belgang_payment_deadline');
  ((s as any).npc_QW ?? {})['A113'] = 2;
  scene.actions([{ label: 'Continue', goto: ['cheatmenu_din', 'story'] }]);
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'workofdebt':
      enterWorkofdebt(s, scene);
      break;
    case 'payday':
      enterPayday(s, scene);
      break;
    case 'payremaining':
      enterPayremaining(s, scene);
      break;
    case 'saunamention':
      enterSaunamention(s, scene);
      break;
    case 'update_debt_calendar':
      enterUpdateDebtCalendar(s, scene);
      break;
    case 'cheatmenu':
      enterCheatmenu(s, scene);
      break;
    case 'cheatmenu_start':
      enterCheatmenuStart(s, scene);
      break;
    case 'cheatmenu_clear':
      enterCheatmenuClear(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const belgang: LocationDef = {
  name: 'belgang',
  title: 'The tinted window slides down and you find yourself staring ',
  region: 'other',
  enter: enter,
};
