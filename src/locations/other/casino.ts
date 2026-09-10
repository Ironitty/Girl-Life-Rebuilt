import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterOutside(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/industrial/casino/zdcasino.jpg');
  scene.text('You stand in front of the door to the casino.');
  scene.actions([
    { label: 'Return to the city industrial area', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['city_industrial', ''] },
    { label: 'Enter the casino', goto: ['casino', 'foyer'] },
  ]);
  scene.build();
}

function enterFoyer(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  (s as any).temp_pic_rand = Math.floor(Math.random() * 3) + 1;
  scene.img(`images/locations/city/industrial/casino/hcasino${((s as any).temp_pic_rand ?? 0)}.jpg`);
  scene.text('You enter the foyer of the casino. There are lots of games available to play.');
  scene.text('In the hall are various <a href="exec:gt \'casino\', \'slots\'">slot machines</a>.');
  scene.text('In the games room is <a href="exec:gt \'casino\', \'roulette\'">Roulette</a> and <a href="exec:gt \'casino\', \'cards\'">card games</a>.');
  scene.text('Before you can play most games, you must first exchange your money for chips at <a href="exec:gt \'casino\', \'cashier\'">the cashier.</a>');
  scene.actions([
    { label: 'Go outside', handler: (st: GameState) => {
    if (((s as any).casino_chips ?? 0) > 0) {
      // TODO-QSP: dynamic text: You have <<casino_chips>> chips with you. You should probably exchange them for ...
      scene.text(`You have ${((s as any).casino_chips ?? 0)} chips with you. You should probably exchange them for money at the cashier before leaving.`);
      scene.actions([
        { label: 'Leave anyway', goto: ['casino', 'outside'] },
        { label: 'Go outside', goto: ['casino', 'outside'] },
      ]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['casino', 'outside'] }]);
    }
  } },
    { label: 'Go to the cashier', goto: ['casino', 'cashier'] },
    { label: 'Go to the slot machines', goto: ['casino', 'slots'] },
    { label: 'Go to the roulette table', goto: ['casino', 'roulette'] },
    { label: 'Go to the card tables', goto: ['casino', 'cards'] },
  ]);
  scene.build();
}

function enterCashier(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  (s as any).temp_pic_rand = Math.floor(Math.random() * 3) + 1;
  scene.img(`images/locations/city/industrial/casino/hcasino${((s as any).temp_pic_rand ?? 0)}.jpg`);
  scene.text('You approach the cashier, who greets you with a smile. "Welcome! Here you may exchange your money for chips, or vice versa. Please be aware that I cannot hand you more than 1000 chips, or let you exchange more if you already have a thousand. How may I help you today?"');
  if (((s as any).casino_chips ?? 0) > 0) {
    scene.actions([
      { label: 'Exchange chips for money', handler: (st: GameState) => {
    (s as any).temp_chips = ((s as any).input ?? 0)('Enter the amount of chips you want to exchange for money, between 1  &&  \'0\'.');
    if (((s as any).temp_chips ?? 0) > 0  &&  ((s as any).temp_chips ?? 0) <= ((s as any).casino_chips ?? 0)) {
      qspCall(s, 'money', 'earn', ((s as any).temp_chips ?? 0));
      (s as any).casino_chips = ((s as any).casino_chips ?? 0) - (((s as any).temp_chips ?? 0));
    } else {
      scene.actions([{ label: 'Continue', goto: ['casino', 'cashier'] }]);
    }
    scene.actions([
      { label: 'Continue', goto: ['casino', 'cashier'] },
    ]);
  } },
    ]);
  }
  if (qspFunc(s, 'money', 'can_afford', 1) === 1  &&  ((s as any).casino_chips ?? 0) < 1000) {
    scene.actions([
      { label: 'Exchange money for chips', handler: (st: GameState) => {
    (s as any).temp_chips = ((s as any).input ?? 0)('Enter the amount of chips you want to buy, between 1  &&  \'0\'.');
    if (((s as any).temp_chips ?? 0) > 0  &&  ((s as any).temp_chips ?? 0) <= 1000 - ((s as any).casino_chips ?? 0)) {
      if (qspFunc(s, 'money', 'can_afford', ((s as any).temp_chips ?? 0))) {
        qspCall(s, 'money', 'pay', ((s as any).temp_chips ?? 0));
        (s as any).casino_chips = ((s as any).casino_chips ?? 0) + (((s as any).temp_chips ?? 0));
      } else {
        scene.actions([{ label: 'Continue', goto: ['casino', 'cashier'] }]);
      }
    } else {
      scene.actions([{ label: 'Continue', goto: ['casino', 'cashier'] }]);
    }
    scene.actions([
      { label: 'Continue', goto: ['casino', 'cashier'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Return to the foyer', goto: ['casino', 'foyer'] },
  ]);
  scene.build();
}

function enterRoulette(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/industrial/casino/ruletka.jpg');
  scene.text(`<center><b>You currently have ${((s as any).casino_chips ?? 0)} chips.<br></b></center>`);
  scene.text('You approach the table with American roulette.');
  scene.actions([
    { label: 'Go back to the foyer', goto: ['casino', 'foyer'] },
    { label: 'Play roulette', goto: ['casino', 'roulette_bet1'] },
    { label: 'Approach the croupier', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/industrial/casino/crup.jpg');
    scene.text('"Can I help you?" he asks.');
    scene.actions([
      { label: 'Shake your head and move away', goto: ['casino', 'roulette'] },
      { label: 'Ask rules', handler: (st: GameState) => {
    // TODO-QSP: First you choose the amount you want to bet.
    // TODO-QSP: Then you choose where to put your chips. There are six different types of bets:
    // TODO-QSP: 1. Red/Black (Payout: 1 to 1)
    // TODO-QSP: 2. Even/Odd (Payout: 1 to 1)
    // TODO-QSP: 3. Small/Large (Payout: 1 to 1)
    // TODO-QSP: 4. Dozen (Payout: 1 to 3)
    // TODO-QSP: 5. Series (Payout: 1 to 3)
    // TODO-QSP: 6. Number (Payout: 1 to 36)
    // TODO-QSP: And the rest depends on your luck.'
  }, goto: ['casino', 'roulette'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterRouletteBet1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  (s as any).kh = 0;
  (s as any).chnch = 0;
  (s as any).mb = 0;
  (s as any).du = 0;
  (s as any).series = 0;
  (s as any).chi = 100;
  (s as any).x_rul = 100;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/industrial/casino/amrul.jpg');
  scene.text(`<center><b>You currently have ${((s as any).casino_chips ?? 0)} chips.<br></b></center>`);
  scene.text('You lean over the table.');
  scene.actions([
    { label: 'Move away from the table', goto: ['casino', 'roulette'] },
    { label: 'Make a bet', handler: (st: GameState) => {
    (s as any).st_1 = 0;
    if (((s as any).casino_chips ?? 0) < ((s as any).st_1 ?? 0)) {
      scene.actions([{ label: 'Continue', goto: ['casino', 'roulette_bet1'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['casino', 'roulette_bet1'] }]);
      (s as any).casino_chips = ((s as any).casino_chips ?? 0) - (((s as any).st_1 ?? 0));
      scene.actions([{ label: 'Continue', goto: ['casino', 'roulette_bet2'] }]);
    }
  } },
  ]);
  scene.build();
}

function enterRouletteBet2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  (s as any).kh = 0;
  (s as any).chnch = 0;
  (s as any).mb = 0;
  (s as any).du = 0;
  (s as any).series = 0;
  (s as any).chi = 100;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/industrial/casino/stavkaru.jpg');
  scene.text(`<center><b>You currently have ${((s as any).casino_chips ?? 0)} chips.<br></b></center>`);
  scene.text('Where do you put your chips?');
  scene.actions([
    { label: 'Don\'t bet', handler: (st: GameState) => {
    (s as any).casino_chips = ((s as any).casino_chips ?? 0) + (((s as any).st_1 ?? 0));
  }, goto: ['casino', 'roulette_bet1'] },
    { label: 'Red / Black', handler: (st: GameState) => {
    scene.actions([
      { label: 'Reconsider', goto: ['casino', 'roulette_bet2'] },
      { label: 'Red', handler: (st: GameState) => {
    (st as any).kh = 1;
  }, goto: ['casino', 'roulette_result'] },
      { label: 'Black', handler: (st: GameState) => {
    (st as any).kh = 2;
  }, goto: ['casino', 'roulette_result'] },
    ]);
  } },
    { label: 'Even / Odd', handler: (st: GameState) => {
    scene.actions([
      { label: 'Reconsider', goto: ['casino', 'roulette_bet2'] },
      { label: 'Even', handler: (st: GameState) => {
    (st as any).chnch = 1;
  }, goto: ['casino', 'roulette_result'] },
      { label: 'Odd', handler: (st: GameState) => {
    (st as any).chnch = 2;
  }, goto: ['casino', 'roulette_result'] },
    ]);
  } },
    { label: 'Small / Large', handler: (st: GameState) => {
    scene.actions([
      { label: 'Reconsider', goto: ['casino', 'roulette_bet2'] },
      { label: 'Small: 1-18', handler: (st: GameState) => {
    (st as any).mb = 1;
  }, goto: ['casino', 'roulette_result'] },
      { label: 'Large: 19-36', handler: (st: GameState) => {
    (st as any).mb = 2;
  }, goto: ['casino', 'roulette_result'] },
    ]);
  } },
    { label: 'Dozen', handler: (st: GameState) => {
    scene.actions([
      { label: 'Reconsider', goto: ['casino', 'roulette_bet2'] },
      { label: 'First dozen: 1-12', handler: (st: GameState) => {
    (st as any).du = 1;
  }, goto: ['casino', 'roulette_result'] },
      { label: 'Second dozen: 13-24', handler: (st: GameState) => {
    (st as any).du = 2;
  }, goto: ['casino', 'roulette_result'] },
      { label: 'Third dozen:25-36', handler: (st: GameState) => {
    (st as any).du = 3;
  }, goto: ['casino', 'roulette_result'] },
    ]);
  } },
    { label: 'Series', handler: (st: GameState) => {
    scene.actions([
      { label: 'Reconsider', goto: ['casino', 'roulette_bet2'] },
      { label: 'First row: 1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34', handler: (st: GameState) => {
    (st as any).series = 1;
  }, goto: ['casino', 'roulette_result'] },
      { label: 'Second row: 2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35', handler: (st: GameState) => {
    (st as any).series = 2;
  }, goto: ['casino', 'roulette_result'] },
      { label: 'Third row: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36', handler: (st: GameState) => {
    (st as any).series = 3;
  }, goto: ['casino', 'roulette_result'] },
    ]);
  } },
    { label: 'Number', handler: (st: GameState) => {
    scene.actions([
      { label: 'Reconsider', goto: ['casino', 'roulette_bet2'] },
      { label: 'Choose a number', handler: (st: GameState) => {
    (s as any).chi = 0;
    if (((s as any).chi ?? 0) < 0  &&  ((s as any).chi ?? 0) > 36) {
      scene.actions([{ label: 'Continue', goto: ['casino', 'roulette_bet2'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['casino', 'roulette_result'] }]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterRouletteResult(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  (s as any).x_rul = 100;
  (s as any).x_rul = Math.floor(Math.random() * 37) + 0;
  if ((!((s as any).x_rul ?? 0))) {
  } else {
    if (((s as any).x_rul ?? 0) === 1  ||  ((s as any).x_rul ?? 0) === 3  ||  ((s as any).x_rul ?? 0) === 5  ||  ((s as any).x_rul ?? 0) === 7  ||  ((s as any).x_rul ?? 0) === 9  ||  ((s as any).x_rul ?? 0) === 12  ||  ((s as any).x_rul ?? 0) === 14  ||  ((s as any).x_rul ?? 0) === 16  ||  ((s as any).x_rul ?? 0) === 18  ||  ((s as any).x_rul ?? 0) === 19  ||  ((s as any).x_rul ?? 0) === 21  ||  ((s as any).x_rul ?? 0) === 23  ||  ((s as any).x_rul ?? 0) === 25  ||  ((s as any).x_rul ?? 0) === 27  ||  ((s as any).x_rul ?? 0) === 30  ||  ((s as any).x_rul ?? 0) === 32  ||  ((s as any).x_rul ?? 0) === 34  ||  ((s as any).x_rul ?? 0) === 36) {
    }
  }
  scene.img('images/locations/city/industrial/casino/resul.jpg');
  scene.text(`<center><b>You currently have ${((s as any).casino_chips ?? 0)} chips.<br></b></center>`);
  // TODO-QSP: dynamic text: The ball stops at <<x_rul>> <<$color>>
  scene.text(`The ball stops at ${((s as any).x_rul ?? 0)} ${((s as any).color ?? 0)}`);
  if (((s as any).kh ?? 0) !== 0) {
    if (((s as any).kh ?? 0) === 1) {
      if (((s as any).x_rul ?? 0) === 1  ||  ((s as any).x_rul ?? 0) === 3  ||  ((s as any).x_rul ?? 0) === 5  ||  ((s as any).x_rul ?? 0) === 7  ||  ((s as any).x_rul ?? 0) === 9  ||  ((s as any).x_rul ?? 0) === 12  ||  ((s as any).x_rul ?? 0) === 14  ||  ((s as any).x_rul ?? 0) === 16  ||  ((s as any).x_rul ?? 0) === 18  ||  ((s as any).x_rul ?? 0) === 19  ||  ((s as any).x_rul ?? 0) === 21  ||  ((s as any).x_rul ?? 0) === 23  ||  ((s as any).x_rul ?? 0) === 25  ||  ((s as any).x_rul ?? 0) === 27  ||  ((s as any).x_rul ?? 0) === 30  ||  ((s as any).x_rul ?? 0) === 32  ||  ((s as any).x_rul ?? 0) === 34  ||  ((s as any).x_rul ?? 0) === 36) {
        scene.actions([
          { label: 'You have won <<2 * st_1>>', handler: (st: GameState) => {
    (s as any).casino_chips = ((s as any).casino_chips ?? 0) + (2 * ((s as any).st_1 ?? 0));
  }, goto: ['casino', 'roulette_bet1'] },
        ]);
      } else {
        scene.actions([
          { label: 'You have lost', goto: ['casino', 'roulette_bet1'] },
        ]);
      }
    } else {
      if (((s as any).x_rul ?? 0) === 2  ||  ((s as any).x_rul ?? 0) === 4  ||  ((s as any).x_rul ?? 0) === 6  ||  ((s as any).x_rul ?? 0) === 8  ||  ((s as any).x_rul ?? 0) === 10  ||  ((s as any).x_rul ?? 0) === 11  ||  ((s as any).x_rul ?? 0) === 13  ||  ((s as any).x_rul ?? 0) === 15  ||  ((s as any).x_rul ?? 0) === 17  ||  ((s as any).x_rul ?? 0) === 20  ||  ((s as any).x_rul ?? 0) === 22  ||  ((s as any).x_rul ?? 0) === 24  ||  ((s as any).x_rul ?? 0) === 26  ||  ((s as any).x_rul ?? 0) === 28  ||  ((s as any).x_rul ?? 0) === 29  ||  ((s as any).x_rul ?? 0) === 31  ||  ((s as any).x_rul ?? 0) === 33  ||  ((s as any).x_rul ?? 0) === 35) {
        scene.actions([
          { label: 'You have won <<2 * st_1>>', handler: (st: GameState) => {
    (s as any).casino_chips = ((s as any).casino_chips ?? 0) + (2 * ((s as any).st_1 ?? 0));
  }, goto: ['casino', 'roulette_bet1'] },
        ]);
      } else {
        scene.actions([
          { label: 'You have lost', goto: ['casino', 'roulette_bet1'] },
        ]);
      }
    }
  } else {
    if (((s as any).chnch ?? 0) === 1) {
      (s as any).chnch = 0;
      if (((s as any).x_rul ?? 0) % 2 === 0) {
        scene.actions([
          { label: 'You have won <<2 * st_1>>', handler: (st: GameState) => {
    (s as any).casino_chips = ((s as any).casino_chips ?? 0) + (2 * ((s as any).st_1 ?? 0));
  }, goto: ['casino', 'roulette_bet1'] },
        ]);
      } else {
        scene.actions([
          { label: 'You have lost', goto: ['casino', 'roulette_bet1'] },
        ]);
      }
    } else {
      (s as any).chnch = 0;
      if (((s as any).x_rul ?? 0) % 2 === 1) {
        scene.actions([
          { label: 'You have won <<2 * st_1>>', handler: (st: GameState) => {
    (s as any).casino_chips = ((s as any).casino_chips ?? 0) + (2 * ((s as any).st_1 ?? 0));
  }, goto: ['casino', 'roulette_bet1'] },
        ]);
      } else {
        scene.actions([
          { label: 'You have lost', goto: ['casino', 'roulette_bet1'] },
        ]);
      }
    }
    if (((s as any).mb ?? 0) !== 0) {
      if (((s as any).mb ?? 0) === 1) {
        (s as any).mb = 0;
        if (((s as any).x_rul ?? 0) > 0  &&  ((s as any).x_rul ?? 0) < 19) {
          scene.actions([
            { label: 'You have won <<2 * st_1>>', handler: (st: GameState) => {
    (s as any).casino_chips = ((s as any).casino_chips ?? 0) + (2 * ((s as any).st_1 ?? 0));
  }, goto: ['casino', 'roulette_bet1'] },
          ]);
        } else {
          scene.actions([
            { label: 'You have lost', goto: ['casino', 'roulette_bet1'] },
          ]);
        }
      } else {
        (s as any).mb = 0;
        if (((s as any).x_rul ?? 0) > 18  &&  ((s as any).x_rul ?? 0) < 37) {
          scene.actions([
            { label: 'You have won <<2 * st_1>>', handler: (st: GameState) => {
    (s as any).casino_chips = ((s as any).casino_chips ?? 0) + (2 * ((s as any).st_1 ?? 0));
  }, goto: ['casino', 'roulette_bet1'] },
          ]);
        } else {
          scene.actions([
            { label: 'You have lost', goto: ['casino', 'roulette_bet1'] },
          ]);
        }
      }
    } else {
      if (((s as any).du ?? 0) === 1) {
        (s as any).du = 0;
        if (((s as any).x_rul ?? 0) > 0  &&  ((s as any).x_rul ?? 0) < 13) {
          scene.actions([
            { label: 'You have won <<3 * st_1>>', handler: (st: GameState) => {
    (s as any).casino_chips = ((s as any).casino_chips ?? 0) + (3 * ((s as any).st_1 ?? 0));
  }, goto: ['casino', 'roulette_bet1'] },
          ]);
        } else {
          scene.actions([
            { label: 'You have lost', goto: ['casino', 'roulette_bet1'] },
          ]);
        }
      } else {
        (s as any).du = 0;
        if (((s as any).x_rul ?? 0) > 12  &&  ((s as any).x_rul ?? 0) < 25) {
          scene.actions([
            { label: 'You have won <<3 * st_1>>', handler: (st: GameState) => {
    (s as any).casino_chips = ((s as any).casino_chips ?? 0) + (3 * ((s as any).st_1 ?? 0));
  }, goto: ['casino', 'roulette_bet1'] },
          ]);
        } else {
          scene.actions([
            { label: 'You have lost', goto: ['casino', 'roulette_bet1'] },
          ]);
        }
        if (((s as any).du ?? 0) === 3) {
          (s as any).du = 0;
          if (((s as any).x_rul ?? 0) > 24  &&  ((s as any).x_rul ?? 0) < 37) {
            scene.actions([
              { label: 'You have won <<3 * st_1>>', handler: (st: GameState) => {
    (s as any).casino_chips = ((s as any).casino_chips ?? 0) + (3 * ((s as any).st_1 ?? 0));
  }, goto: ['casino', 'roulette_bet1'] },
            ]);
          } else {
            scene.actions([
              { label: 'You have lost', goto: ['casino', 'roulette_bet1'] },
            ]);
          }
        }
        if (((s as any).series ?? 0) !== 0) {
          if (((s as any).series ?? 0) === 1) {
            (s as any).series = 0;
            if (((s as any).x_rul ?? 0) === 1  ||  ((s as any).x_rul ?? 0) === 4  ||  ((s as any).x_rul ?? 0) === 7  ||  ((s as any).x_rul ?? 0) === 10  ||  ((s as any).x_rul ?? 0) === 13  ||  ((s as any).x_rul ?? 0) === 16  ||  ((s as any).x_rul ?? 0) === 19  ||  ((s as any).x_rul ?? 0) === 22  ||  ((s as any).x_rul ?? 0) === 25  ||  ((s as any).x_rul ?? 0) === 28  ||  ((s as any).x_rul ?? 0) === 31  ||  ((s as any).x_rul ?? 0) === 34) {
              scene.actions([
                { label: 'You have won <<3*st_1>>', handler: (st: GameState) => {
    (s as any).casino_chips = ((s as any).casino_chips ?? 0) + (3 * ((s as any).st_1 ?? 0));
  }, goto: ['casino', 'roulette_bet1'] },
              ]);
            } else {
              scene.actions([
                { label: 'You have lost', goto: ['casino', 'roulette_bet1'] },
              ]);
            }
          } else {
            (s as any).series = 0;
            if (((s as any).x_rul ?? 0) === 2  ||  ((s as any).x_rul ?? 0) === 3  ||  ((s as any).x_rul ?? 0) === 8  ||  ((s as any).x_rul ?? 0) === 11  ||  ((s as any).x_rul ?? 0) === 14  ||  ((s as any).x_rul ?? 0) === 17  ||  ((s as any).x_rul ?? 0) === 20  ||  ((s as any).x_rul ?? 0) === 23  ||  ((s as any).x_rul ?? 0) === 26  ||  ((s as any).x_rul ?? 0) === 29  ||  ((s as any).x_rul ?? 0) === 32  ||  ((s as any).x_rul ?? 0) === 35) {
              scene.actions([
                { label: 'You have won <<3*st_1>>', handler: (st: GameState) => {
    (s as any).casino_chips = ((s as any).casino_chips ?? 0) + (3 * ((s as any).st_1 ?? 0));
  }, goto: ['casino', 'roulette_bet1'] },
              ]);
            } else {
              scene.actions([
                { label: 'You have lost', goto: ['casino', 'roulette_bet1'] },
              ]);
            }
            if (((s as any).series ?? 0) === 3) {
              (s as any).series = 0;
              if (((s as any).x_rul ?? 0) === 3  ||  ((s as any).x_rul ?? 0) === 4  ||  ((s as any).x_rul ?? 0) === 9  ||  ((s as any).x_rul ?? 0) === 12  ||  ((s as any).x_rul ?? 0) === 15  ||  ((s as any).x_rul ?? 0) === 18  ||  ((s as any).x_rul ?? 0) === 21  ||  ((s as any).x_rul ?? 0) === 24  ||  ((s as any).x_rul ?? 0) === 27  ||  ((s as any).x_rul ?? 0) === 30  ||  ((s as any).x_rul ?? 0) === 33  ||  ((s as any).x_rul ?? 0) === 36) {
                scene.actions([
                  { label: 'You have won <<3*st_1>>', handler: (st: GameState) => {
    (s as any).casino_chips = ((s as any).casino_chips ?? 0) + (3 * ((s as any).st_1 ?? 0));
  }, goto: ['casino', 'roulette_bet1'] },
                ]);
              } else {
                scene.actions([
                  { label: 'You have lost', goto: ['casino', 'roulette_bet1'] },
                ]);
              }
            }
            if (((s as any).chi ?? 0) !== 100) {
              if (((s as any).chi ?? 0) === ((s as any).x_rul ?? 0)) {
                scene.actions([
                  { label: 'You have won <<37 * st_1>>', handler: (st: GameState) => {
    (s as any).casino_chips = ((s as any).casino_chips ?? 0) + (37 * ((s as any).st_1 ?? 0));
  }, goto: ['casino', 'roulette_bet1'] },
                ]);
              } else {
                scene.actions([
                  { label: 'You have lost', goto: ['casino', 'roulette_bet1'] },
                ]);
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'outside':
      enterOutside(s, scene);
      break;
    case 'foyer':
      enterFoyer(s, scene);
      break;
    case 'cashier':
      enterCashier(s, scene);
      break;
    case 'roulette':
      enterRoulette(s, scene);
      break;
    case 'roulette_bet1':
      enterRouletteBet1(s, scene);
      break;
    case 'roulette_bet2':
      enterRouletteBet2(s, scene);
      break;
    case 'roulette_result':
      enterRouletteResult(s, scene);
      break;
    default:
      enterOutside(s, scene);
      break;
  }
}

export const casino: LocationDef = {
  name: 'casino',
  title: 'You currently have <<casino_chips>> chips.<br>',
  region: 'other',
  locationType: 'public_indoors',
  description: ['You stand in front of the door to the casino.'],
  enter: enter,
};
