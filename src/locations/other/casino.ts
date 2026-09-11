import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterOutside(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/industrial/casino/zdcasino.jpg');
  scene.text('You stand in front of the door to the casino.');
  // TODO-QSP: end
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
  // TODO-QSP: end
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
    (s as any).temp_chips = 0;
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
    (s as any).temp_chips = 0;
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
  // TODO-QSP: end
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
  // TODO-QSP: end
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Move away from the table', goto: ['casino', 'roulette'] },
    { label: 'Make a bet', handler: (st: GameState) => {
    (s as any).st_1 = 0;
    if (((s as any).casino_chips ?? 0) < ((s as any).st_1 ?? 0)) {
      scene.actions([{ label: 'Continue', goto: ['casino', 'roulette_bet1'] }]);
    } else {
      if (((s as any).st_1 ?? 0) <= 0) {
        scene.actions([{ label: 'Continue', goto: ['casino', 'roulette_bet1'] }]);
      } else {
        (s as any).casino_chips = ((s as any).casino_chips ?? 0) - (((s as any).st_1 ?? 0));
        scene.actions([{ label: 'Continue', goto: ['casino', 'roulette_bet2'] }]);
      }
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
  // TODO-QSP: end
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
      if (((s as any).kh ?? 0) === 2) {
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
    }
  } else {
    if (((s as any).chnch ?? 0) !== 0) {
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
        if (((s as any).chnch ?? 0) === 2) {
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
      }
    } else {
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
          if (((s as any).mb ?? 0) === 2) {
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
        }
      } else {
        if (((s as any).du ?? 0) !== 0) {
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
            if (((s as any).du ?? 0) === 2) {
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
            } else {
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
            }
          }
        } else {
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
              if (((s as any).series ?? 0) === 2) {
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
              } else {
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
              }
            }
          } else {
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
  // TODO-QSP: end
  scene.build();
}

function enterSlots(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/industrial/casino/zaligravt.jpg');
  scene.text('You enter the hall and are momentarily dazzled by the multitude of ringing sounds and blinking lights coming from the endless rows of slot machines. In front of them are people of various ages, sexes and backgrounds, trying their luck or perhaps just killing time.');
  scene.text('Every once in a while, you hear the satisfying sound of coins streaming into the tray of the next lucky winner.');
  scene.text('According to the huge animated digital display on the back wall, there is a hefty jackpot up for grabs.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the foyer', goto: ['casino', 'foyer'] },
    { label: 'Use one of the slot machines', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    (s as any).betAmount = 10;
    (s as any).slotsJackpot = ((s as any).betAmount ?? 0) * 20000;
    scene.img('images/locations/city/industrial/casino/avt.jpg');
    // TODO-QSP: dynamic text: Rules of the game are very simple: Feed a <<$func('money', 'string_price', betAm...
    scene.text(`Rules of the game are very simple: Feed a ${qspFunc(s, 'money', 'string_price', ((s as any).betAmount ?? 0))} coin into the machine and pull the lever. There are multiple winning combinations, but everyone here has their eyes on the ${qspFunc(s, 'money', 'string_profit', ((s as any).slotsJackpot ?? 0))} jackpot.`);
    scene.actions([
      { label: 'Go back to the foyer', goto: ['casino', 'foyer'] },
      { label: 'Pull the lever', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((s as any).betAmount ?? 0))) {
      qspCall(s, 'money', 'pay', ((s as any).betAmount ?? 0));
      (s as any).temp_slots_rand = Math.floor(Math.random() * 100000) + 1;
      if (((s as any).temp_slots_rand ?? 0) > 99990) {
        (s as any).temp_winnings = ((s as any).slotsJackpot ?? 0);
      } else {
        if (((s as any).temp_slots_rand ?? 0) >= 99900) {
          (s as any).temp_winnings = ((s as any).betAmount ?? 0) * 1500;
        } else {
          if (((s as any).temp_slots_rand ?? 0) >= 99000) {
            (s as any).temp_winnings = ((s as any).betAmount ?? 0) * 100;
          } else {
            if (((s as any).temp_slots_rand ?? 0) >= 90000) {
              (s as any).temp_winnings = ((s as any).betAmount ?? 0) * 5;
            } else {
              if (((s as any).temp_slots_rand ?? 0) >= 66667) {
                (s as any).temp_winnings = ((s as any).betAmount ?? 0) * 2;
              } else {
                (s as any).temp_winnings = 0;
              }
            }
          }
        }
      }
      if (((s as any).temp_winnings ?? 0) > 0) {
        qspCall(s, 'money', 'earn', ((s as any).temp_winnings ?? 0));
      }
      (s as any).minut = ((s as any).minut ?? 0) + 1;
      qspCall(s, 'stat', '');
      scene.actions([{ label: 'Continue', goto: ['casino', 'slots'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['casino', 'slots'] }]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterCards(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/industrial/casino/zalcart.jpg');
  scene.text(`<center><b>You currently have ${((s as any).casino_chips ?? 0)} chips.<br></b></center>`);
  scene.text('Littered around the hall are various Blackjack and Casino War tables.');
  // TODO-QSP: $suit[1] = 'Spades'
  // TODO-QSP: $symbol[1] = '♠'
  // TODO-QSP: $suit[2] = 'Clubs'
  // TODO-QSP: $symbol[2] = '♣'
  // TODO-QSP: $suit[3] = 'Hearts'
  // TODO-QSP: $symbol[3] = '♥'
  // TODO-QSP: $suit[4] = 'Diamonds'
  // TODO-QSP: $symbol[4] = '♦'
  // TODO-QSP: $number[1] = 'Ace '
  ((s as any).points ?? {})[1] = 11;
  // TODO-QSP: $number[2] = 'Deuce '
  ((s as any).points ?? {})[2] = 2;
  // TODO-QSP: $number[3] = 'Three '
  ((s as any).points ?? {})[3] = 3;
  // TODO-QSP: $number[4] = 'Four '
  ((s as any).points ?? {})[4] = 4;
  // TODO-QSP: $number[5] = 'Five '
  ((s as any).points ?? {})[5] = 5;
  // TODO-QSP: $number[6] = 'Six '
  ((s as any).points ?? {})[6] = 6;
  // TODO-QSP: $number[7] = 'Seven '
  ((s as any).points ?? {})[7] = 7;
  // TODO-QSP: $number[8] = 'Eight '
  ((s as any).points ?? {})[8] = 8;
  // TODO-QSP: $number[9] = 'Nine '
  ((s as any).points ?? {})[9] = 9;
  // TODO-QSP: $number[10] = 'Ten '
  ((s as any).points ?? {})[10] = 10;
  // TODO-QSP: $number[11] = 'Jack '
  ((s as any).points ?? {})[11] = 10;
  // TODO-QSP: $number[12] = 'Queen '
  ((s as any).points ?? {})[12] = 10;
  // TODO-QSP: $number[13] = 'King '
  ((s as any).points ?? {})[13] = 10;
  // TODO-QSP: $number[14] = 'Ace '
  ((s as any).points ?? {})[14] = 11;
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back to the foyer', goto: ['casino', 'foyer'] },
    { label: 'Play Blackjack', goto: ['casino', 'blackjack_play'] },
    { label: 'Play Casino War', goto: ['casino', 'cards_cw'] },
  ]);
  scene.build();
}

function enterCardsCw(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/industrial/casino/stolcw.jpg');
  scene.text(`<center><b>You currently have ${((s as any).casino_chips ?? 0)} chips.<br></b></center>`);
  scene.text('You approach the gambling table at the casino.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Move away from the table', goto: ['casino', 'cards'] },
    { label: 'Sit down at the table', goto: ['casino', 'cards_cwplay'] },
    { label: 'Approach the croupier', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/industrial/casino/crupcw.jpg');
    scene.text('"How can I help you?"');
    scene.actions([
      { label: 'Move away from the dealer', goto: ['casino', 'cards_cw'] },
      { label: 'Ask for the rules', handler: (st: GameState) => {
    // TODO-QSP: First you choose how much you want to wager.
    // TODO-QSP: After that, you can either continue with your bet, or bet on a draw (which costs your bet a second t...
    // TODO-QSP: Regular:
    // TODO-QSP: Everyone is dealt a card. Face cards have different values.
    // TODO-QSP: Highest card wins. Payout is 1 to 1.
    // TODO-QSP: If both have the same card, choose between continuing (doubles bet), or end the round and return you...
    // TODO-QSP: If you win the second round you get a payout of 2 to 1. If it is another draw you get a payout of 1....
    // TODO-QSP: Bet on draw:
    // TODO-QSP: When betting on a draw and winning, you get your bet back.
    // TODO-QSP: However, if it is a draw, the payout will be 10 to 1.
    // TODO-QSP: That''s it. Enjoy the game.'
  }, goto: ['casino', 'cards_cw'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterCardsCwplay(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  if ((!((s as any).turn1 ?? 0))) {
    scene.img('images/locations/city/industrial/casino/stavkacw.jpg');
    scene.text(`<center><b>You currently have ${((s as any).casino_chips ?? 0)} chips.<br></b></center>`);
    scene.text('Place your bets, ladies and gentlemen.');
    scene.actions([
      { label: 'Leave the table', goto: ['casino', 'cards_cw'] },
      { label: 'Place your bet', handler: (st: GameState) => {
    if (((s as any).casino_chips ?? 0) < 1) {
      scene.text('You don\'t have any chips!');
      scene.actions([
        { label: 'Leave the table', goto: ['casino', 'cards_cw'] },
      ]);
    }
    (s as any).bet_amount = 0;
    if (((s as any).casino_chips ?? 0) < ((s as any).bet_amount ?? 0)) {
    } else {
      if (((s as any).bet_amount ?? 0) < 1) {
      } else {
        (s as any).casino_chips = ((s as any).casino_chips ?? 0) - (((s as any).bet_amount ?? 0));
        (s as any).turn1 = 1;
      }
    }
  }, goto: ['casino', 'cards_cwplay'] },
    ]);
  }
  if (((s as any).turn1 ?? 0) === 1) {
    (s as any).bet_draw = 0;
    scene.img('images/locations/city/industrial/casino/stavkacw.jpg');
    scene.text('Continue with regular bet (payout 2 to 1), or bet on a draw (payout 11 to 1)?');
    if (((s as any).casino_chips ?? 0) < ((s as any).bet_amount ?? 0)) {
      (s as any).turn1 = 2;
      scene.actions([{ label: 'Continue', goto: ['casino', 'cards_cwplay'] }]);
    } else {
      scene.actions([
        { label: 'Continue with regular bet', handler: (st: GameState) => {
    (s as any).turn1 = 2;
  }, goto: ['casino', 'cards_cwplay'] },
        { label: 'Bet on draw (doubles bet)', handler: (st: GameState) => {
    (s as any).turn1 = 2;
    (s as any).bet_draw = 1;
    (s as any).casino_chips = ((s as any).casino_chips ?? 0) - (((s as any).bet_amount ?? 0));
  }, goto: ['casino', 'cards_cwplay'] },
      ]);
    }
  }
  if (((s as any).turn1 ?? 0) === 2) {
    scene.img('images/locations/city/industrial/casino/cartcw.jpg');
    scene.text(' The dealer deals the cards:');
    scene.text('…');
    (s as any).suit = Math.floor(Math.random() * 4) + 1;
    (s as any).number = Math.floor(Math.random() * 13) + 1;
    // TODO-QSP: $d_card[1] = $number[number] + 'of ' + $suit[suit]
    (s as any).d_points = number;
    (s as any).suit = Math.floor(Math.random() * 4) + 1;
    (s as any).number = Math.floor(Math.random() * 13) + 2;
    // TODO-QSP: $p_card[1] = $number[number] + 'of ' + $suit[suit]
    (s as any).p_points = number;
    scene.text('Dealer\'s Card:');
    // TODO-QSP: dynamic text:   <<$d_card[1]>>
    scene.text(`  ${qspUntranslated(s, "d_card[1]", { location: "casino" })}`);
    scene.text('__________________________');
    scene.text('Your Card:');
    // TODO-QSP: dynamic text:   <<$p_card[1]>>
    scene.text(`  ${qspUntranslated(s, "p_card[1]", { location: "casino" })}`);
    if (((s as any).d_points ?? 0) > ((s as any).p_points ?? 0)) {
      scene.text(' ');
      scene.text('Casino won');
      scene.actions([
        { label: 'You lost', handler: (st: GameState) => {
    (s as any).turn1 = 0;
  }, goto: ['casino', 'cards_cwplay'] },
      ]);
    } else {
      if (((s as any).d_points ?? 0) < ((s as any).p_points ?? 0)) {
        scene.text(' ');
        scene.text('You won');
        scene.actions([
          { label: 'Take chips (<<2 * bet_amount>> chips)', handler: (st: GameState) => {
    (s as any).casino_chips = ((s as any).casino_chips ?? 0) + (2 * ((s as any).bet_amount ?? 0));
    (s as any).turn1 = 0;
  }, goto: ['casino', 'cards_cwplay'] },
        ]);
      } else {
        if (((s as any).bet_draw ?? 0) === 1) {
          scene.text(' ');
          scene.text('You won');
          scene.actions([
            { label: 'Take chips (<<11 * bet_amount>> chips)', handler: (st: GameState) => {
    (s as any).casino_chips = ((s as any).casino_chips ?? 0) + (11 * ((s as any).bet_amount ?? 0));
    (s as any).turn1 = 0;
  }, goto: ['casino', 'cards_cwplay'] },
          ]);
        } else {
          (s as any).turn1 = 3;
          scene.actions([{ label: 'Continue', goto: ['casino', 'cards_cwplay'] }]);
        }
      }
    }
  }
  if (((s as any).turn1 ?? 0) === 3) {
    scene.img('images/locations/city/industrial/casino/cartcw.jpg');
    scene.text(' ');
    scene.text('Draw');
    if (((s as any).casino_chips ?? 0) >= ((s as any).bet_amount ?? 0)) {
      scene.actions([
        { label: 'Continue (bet another <<bet_amount>> chips)', handler: (st: GameState) => {
    (s as any).casino_chips = ((s as any).casino_chips ?? 0) - (((s as any).bet_amount ?? 0));
    scene.text(' The dealer deals the cards:');
    scene.text('…');
    (s as any).suit = Math.floor(Math.random() * 4) + 1;
    (s as any).number = Math.floor(Math.random() * 13) + 1;
    // TODO-QSP: $d_card[2] = $number[number] + 'of ' + $suit[suit]
    (s as any).d_points = number;
    (s as any).suit = Math.floor(Math.random() * 4) + 1;
    (s as any).number = Math.floor(Math.random() * 13) + 2;
    // TODO-QSP: $p_card[2] = $number[number] + 'of ' + $suit[suit]
    (s as any).p_points = number;
    scene.text('Dealer\'s Cards:');
    // TODO-QSP: dynamic text:   <<$d_card[1]>>
    scene.text(`  ${qspUntranslated(s, "d_card[1]", { location: "casino" })}`);
    // TODO-QSP: dynamic text:   <<$d_card[2]>>
    scene.text(`  ${qspUntranslated(s, "d_card[2]", { location: "casino" })}`);
    scene.text('__________________________');
    scene.text('Your Cards:');
    // TODO-QSP: dynamic text:   <<$p_card[1]>>
    scene.text(`  ${qspUntranslated(s, "p_card[1]", { location: "casino" })}`);
    // TODO-QSP: dynamic text:   <<$p_card[2]>>
    scene.text(`  ${qspUntranslated(s, "p_card[2]", { location: "casino" })}`);
    if (((s as any).d_points ?? 0) > ((s as any).p_points ?? 0)) {
      scene.text(' ');
      scene.text('Casino won');
      scene.actions([
        { label: 'You lost', handler: (st: GameState) => {
    (s as any).turn1 = 0;
  }, goto: ['casino', 'cards_cwplay'] },
      ]);
    } else {
      if (((s as any).d_points ?? 0) < ((s as any).p_points ?? 0)) {
        scene.text(' ');
        scene.text('You won');
        scene.actions([
          { label: 'Take chips (<<4 * bet_amount>> chips)', handler: (st: GameState) => {
    (s as any).casino_chips = ((s as any).casino_chips ?? 0) + (4 * ((s as any).bet_amount ?? 0));
    (s as any).turn1 = 0;
  }, goto: ['casino', 'cards_cwplay'] },
        ]);
      } else {
        if (((s as any).d_points ?? 0) === ((s as any).p_points ?? 0)) {
          scene.text(' ');
          scene.text('Draw');
          scene.actions([
            { label: 'Take chips (<<3 * bet_amount>> chips)', handler: (st: GameState) => {
    (s as any).casino_chips = ((s as any).casino_chips ?? 0) + (3 * ((s as any).bet_amount ?? 0));
    (s as any).turn1 = 0;
  }, goto: ['casino', 'cards_cwplay'] },
          ]);
        }
      }
    }
  } },
      ]);
    } else {
      scene.text(' ');
      scene.text('You don\'t have enough chips to continue');
    }
    scene.actions([
      { label: 'Take original bet (<<bet_amount>> chips)', handler: (st: GameState) => {
    (s as any).casino_chips = ((s as any).casino_chips ?? 0) + (((s as any).bet_amount ?? 0));
    (s as any).turn1 = 0;
  }, goto: ['casino', 'cards_cwplay'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBlackjackPlay(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  // TODO-QSP: temp_dealer_hand[] = 0
  // TODO-QSP: temp_dealer_hand[] = 1
  // TODO-QSP: temp_player_hand[] = 2
  // TODO-QSP: temp_player_hand[] = 3
  (s as any).cardsDealt = 4;
  (s as any).numHands = 1;
  (s as any).currentHand = 0;
  (s as any).handLosses = 0;
  (s as any).numAces = 0;
  (s as any).dealerPoints = 0;
  (s as any).insurance = 0;
  (s as any).betTotal = 0;
  (s as any).doubleBet = 0;
  (s as any).minBet = 10;
  (s as any).maxBet = 500;
  qspCall(s, 'deckShuffle', 'sort');
  scene.img('images/locations/city/industrial/casino/stolbd.jpg');
  scene.text(`<center><b>You currently have ${((s as any).casino_chips ?? 0)} chips.<br></b></center>`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Move away from the table', goto: ['casino', 'cards'] },
    { label: 'Play blackjack', goto: ['casino', 'bet1'] },
    { label: 'Ask for the rules', goto: ['casino', 'rules'] },
  ]);
  scene.build();
}

function enterRules(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/industrial/casino/crupbd.jpg');
  // TODO-QSP: *p '<ol><li>The player and dealer are each dealt 2 cards after initial bets (<<minBet>> - <<maxBet>>...
  // TODO-QSP: *p '<li>Face cards are worth 10 points, aces can double as either 11 or 1, and all other cards are w...
  // TODO-QSP: *p '<li>After the player finishes drawing, the dealer must continue to draw until they have 17 point...
  // TODO-QSP: *p '<li>To win, the player must score more points than the dealer, have the dealer bust, or get a bl...
  // TODO-QSP: *p '<li>Getting over 21 points is known as a bust, and an automatic loss.</li>'
  // TODO-QSP: *p '<li>Getting an ace and a 10 point card in the first 2 cards is known as a blackjack, and is an a...
  // TODO-QSP: *p '<li>If the dealer''s face-up card is an ace, the player can make a side-bet called "insurance" t...
  // TODO-QSP: *p '<li>At any time, the player can choose to double their bet, which gives the player 1 more card b...
  // TODO-QSP: *p '<li>If the player''s hand only consists of two cards of equal value, they can split them into 2 ...
  // TODO-QSP: *p '<li>The player cannot score a blackjack using a split hand.</li>'
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['casino', 'blackjack_play'] },
  ]);
  scene.build();
}

function enterBet1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/industrial/casino/stavkabd.jpg');
  scene.text(`<center><b>You currently have ${((s as any).casino_chips ?? 0)} chips.<br></b></center>`);
  ((s as any).temp_player_bets ?? {})[0] = 0;
  if (((s as any).casino_chips ?? 0) < ((s as any).temp_player_bets ?? 0)[0]) {
    scene.actions([{ label: 'Continue', goto: ['casino', 'blackjack_play'] }]);
  } else {
    if (((s as any).temp_player_bets ?? 0)[0] < ((s as any).minBet ?? 0)) {
      scene.actions([{ label: 'Continue', goto: ['casino', 'blackjack_play'] }]);
    } else {
      if (((s as any).temp_player_bets ?? 0)[0] > ((s as any).maxBet ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['casino', 'blackjack_play'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['casino', 'bet2'] }]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBet2(s: GameState, scene: SceneBuilder): void {
  (s as any).betTotal = qspUntranslated(s, "temp_player_bets[0]", { location: "casino" });
  qspCall(s, 'deckShuffle', 'shuffle');
  if ((((s as any).deckFace ?? 0)[((s as any).temp_player_hand ?? 0)[0]] === 1  &&  ((s as any).deckFace ?? 0)[((s as any).temp_player_hand ?? 0)[1]] > 9)  ||  (((s as any).deckFace ?? 0)[((s as any).temp_player_hand ?? 0)[0]] > 9  &&  ((s as any).deckFace ?? 0)[((s as any).temp_player_hand ?? 0)[1]] === 1)) {
    scene.actions([{ label: 'Continue', goto: ['casino', 'blackjack'] }]);
  } else {
    if (((s as any).deckFace ?? 0)[((s as any).temp_dealer_hand ?? 0)[0]] > 9  &&  ((s as any).deckFace ?? 0)[((s as any).temp_dealer_hand ?? 0)[1]] === 1) {
      scene.actions([{ label: 'Continue', goto: ['casino', 'blackjack'] }]);
    } else {
      if (((s as any).deckFace ?? 0)[((s as any).dealerCards ?? 0)[0]] === 1) {
        scene.actions([{ label: 'Continue', goto: ['casino', 'insurance1'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['casino', 'player'] }]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBlackjack(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'casino', 'blackjack_view', 1);
  if (((s as any).temp_player_points ?? 0)[0] === 21  &&  ((s as any).dealerPoints ?? 0) === 21) {
  } else {
    if (((s as any).temp_player_points ?? 0)[0] === 21) {
      (s as any).casino_chips = ((s as any).casino_chips ?? 0) + (((s as any).temp_player_bets ?? 0)[0] * 3 / 2);
    } else {
      (s as any).casino_chips = ((s as any).casino_chips ?? 0) - (qspUntranslated(s, "temp_player_bets[0]", { location: "casino" }));
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['casino', 'blackjack_play'] },
  ]);
  scene.build();
}

function enterInsurance1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'casino', 'blackjack_view');
  (s as any).insurance = 0;
  // TODO-QSP: end
  scene.actions([
    { label: 'Bet insurance', handler: (st: GameState) => {
    (s as any).insurance = 0;
    if (((s as any).casino_chips ?? 0) < ((s as any).insurance ?? 0)) {
      scene.actions([{ label: 'Continue', goto: ['casino', 'insurance1'] }]);
    } else {
      if (((s as any).insurance ?? 0) < 0) {
        scene.actions([{ label: 'Continue', goto: ['casino', 'insurance1'] }]);
      } else {
        if (((s as any).insurance ?? 0) > ((s as any).temp_player_bets ?? 0)[0] / 2) {
          scene.actions([{ label: 'Continue', goto: ['casino', 'insurance1'] }]);
        } else {
          scene.actions([{ label: 'Continue', goto: ['casino', 'insurance2'] }]);
        }
      }
    }
  } },
    { label: 'No insurance', goto: ['casino', 'insurance2'] },
  ]);
  scene.build();
}

function enterInsurance2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dealerPoints ?? 0) === 21  ||  ((s as any).deckFace ?? 0)[((s as any).temp_dealer_hand ?? 0)[1]] > 9) {
    qspCall(s, 'casino', 'blackjack_view', 1);
    // TODO-QSP: *p 'The dealer takes your <<temp_player_bets[0]>> chips bet'
    if (((s as any).insurance ?? 0) > 0) {
      // TODO-QSP: *p ' but also gives you <<insurance>> chips for your side bet'
    }
    // TODO-QSP: *p '.'
    (s as any).casino_chips = ((s as any).casino_chips ?? 0) - (qspUntranslated(s, "temp_player_bets[0]", { location: "casino" }));
    (s as any).casino_chips = ((s as any).casino_chips ?? 0) + (((s as any).insurance ?? 0));
    scene.actions([
      { label: 'Continue', goto: ['casino', 'blackjack_play'] },
    ]);
  } else {
    qspCall(s, 'casino', 'blackjack_view');
    if (((s as any).insurance ?? 0) > 0) {
      // TODO-QSP: *p 'He relieves you of <<insurance>> chips for your side bet.'
    }
    (s as any).casino_chips = ((s as any).casino_chips ?? 0) - (((s as any).insurance ?? 0));
    scene.actions([
      { label: 'Continue', goto: ['casino', 'player'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPlayer(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'casino', 'blackjack_view');
  if (((s as any).temp_player_points ?? 0)?.[String((s as any).currentHand ?? 0)] > 21) {
    (s as any).currentHand = ((s as any).currentHand ?? 0) + (1);
    (s as any).handLosses = ((s as any).handLosses ?? 0) + (1);
    (s as any).doubleBet = 0;
  }
  if (((s as any).temp_player_points ?? 0)?.[String((s as any).currentHand ?? 0)] === 21  ||  ((s as any).doubleBet ?? 0) === 1) {
    (s as any).currentHand = ((s as any).currentHand ?? 0) + (1);
    (s as any).doubleBet = 0;
  }
  if (((s as any).handLosses ?? 0) === ((s as any).numHands ?? 0)) {
    // TODO-QSP: *p 'The dealer relieves you of <<betTotal>> chips.'
    (s as any).casino_chips = ((s as any).casino_chips ?? 0) - (((s as any).betTotal ?? 0));
    scene.actions([
      { label: 'Continue', goto: ['casino', 'blackjack_play'] },
    ]);
  } else {
    if (((s as any).currentHand ?? 0) >= ((s as any).numHands ?? 0)) {
      scene.actions([
        { label: 'Continue', goto: ['casino', 'dealer'] },
      ]);
    } else {
      if (((s as any).numHands ?? 0) === 1) {
      }
      if (((s as any).casino_chips ?? 0) >= ((s as any).betTotal ?? 0) + ((s as any).temp_player_bets ?? 0)?.[String((s as any).currentHand ?? 0)]) {
        if (((s as any).temp_player_hand ?? 0)[((s as any).currentHand ?? 0) * 16 + 2] === 0  &&  ((((s as any).deckFace ?? 0)[((s as any).temp_player_hand ?? 0)[((s as any).currentHand ?? 0) * 16]] > 9  &&  ((s as any).deckFace ?? 0)[((s as any).temp_player_hand ?? 0)[((s as any).currentHand ?? 0) * 16 + 1]] > 9)  ||  ((s as any).deckFace ?? 0)[((s as any).temp_player_hand ?? 0)[((s as any).currentHand ?? 0) * 16]] === ((s as any).deckFace ?? 0)[((s as any).temp_player_hand ?? 0)[((s as any).currentHand ?? 0) * 16 + 1]])) {
          scene.actions([
            { label: '<<$text>>Split', handler: (st: GameState) => {
    (s as any).betTotal = ((s as any).betTotal ?? 0) + (((s as any).temp_player_bets ?? 0)?.[String((s as any).currentHand ?? 0)]);
    ((s as any).temp_player_bets ?? {})[String((s as any).numHands ?? 0)] = ((s as any).temp_player_bets ?? 0)?.[String((s as any).currentHand ?? 0)];
    (s as any).numHands = ((s as any).numHands ?? 0) + (1);
    (s as any).i = (((s as any).currentHand ?? 0) + 1) * 16;
    // TODO-QSP: :loop3
    if (((s as any).temp_player_hand ?? 0)?.[String((s as any).i ?? 0)] !== 0) {
      (s as any).i = ((s as any).i ?? 0) + (16);
      // TODO-QSP: jump 'loop3'
    }
    ((s as any).temp_player_hand ?? {})[String((s as any).i ?? 0)] = ((s as any).temp_player_hand ?? 0)?.[((s as any).currentHand ?? 0) * 16 + 1];
    // TODO-QSP: temp_player_hand[currentHand * 16 + 1] = cardsDealt
    (s as any).cardsDealt = ((s as any).cardsDealt ?? 0) + (1);
    // TODO-QSP: temp_player_hand[i + 1] = cardsDealt
    (s as any).cardsDealt = ((s as any).cardsDealt ?? 0) + (1);
    scene.img('images/locations/city/industrial/casino/cartbde.jpg');
  }, goto: ['casino', 'player'] },
          ]);
        }
        scene.actions([
          { label: '<<$text>>Double', handler: (st: GameState) => {
    (s as any).doubleBet = 1;
    (s as any).betTotal = ((s as any).betTotal ?? 0) + (((s as any).temp_player_bets ?? 0)?.[String((s as any).currentHand ?? 0)]);
    ((s as any).temp_player_bets ?? {})[String((s as any).currentHand ?? 0)] = (((s as any).temp_player_bets ?? {})[String((s as any).currentHand ?? 0)] ?? 0) + (((s as any).temp_player_bets ?? 0)?.[String((s as any).currentHand ?? 0)]);
    (s as any).i = ((s as any).currentHand ?? 0) * 16 + 2;
    // TODO-QSP: :loop2
    if (((s as any).temp_player_hand ?? 0)?.[String((s as any).i ?? 0)] !== 0) {
      (s as any).i = ((s as any).i ?? 0) + (1);
      // TODO-QSP: jump 'loop2'
    }
    ((s as any).temp_player_hand ?? {})[String((s as any).i ?? 0)] = ((s as any).cardsDealt ?? 0);
    (s as any).cardsDealt = ((s as any).cardsDealt ?? 0) + (1);
    scene.img('images/locations/city/industrial/casino/cartbde.jpg');
  }, goto: ['casino', 'player'] },
        ]);
      }
      scene.actions([
        { label: '<<$text>>Hit', handler: (st: GameState) => {
    (s as any).i = ((s as any).currentHand ?? 0) * 16 + 2;
    // TODO-QSP: :loop1
    if (((s as any).temp_player_hand ?? 0)?.[String((s as any).i ?? 0)] !== 0) {
      (s as any).i = ((s as any).i ?? 0) + (1);
      // TODO-QSP: jump 'loop1'
    }
    ((s as any).temp_player_hand ?? {})[String((s as any).i ?? 0)] = ((s as any).cardsDealt ?? 0);
    (s as any).cardsDealt = ((s as any).cardsDealt ?? 0) + (1);
    scene.img('images/locations/city/industrial/casino/cartbde.jpg');
  }, goto: ['casino', 'player'] },
        { label: '<<$text>>Stay', handler: (st: GameState) => {
    (s as any).currentHand = ((s as any).currentHand ?? 0) + (1);
    if (((s as any).currentHand ?? 0) < ((s as any).numHands ?? 0)) {
      scene.actions([{ label: 'Continue', goto: ['casino', 'player'] }]);
    }
    if (((s as any).currentHand ?? 0) >= ((s as any).numHands ?? 0)) {
      scene.actions([{ label: 'Continue', goto: ['casino', 'dealer'] }]);
    }
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDealer(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'casino', 'blackjack_view', 1);
  if (((s as any).dealerPoints ?? 0) < 17) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).i = 2;
    // TODO-QSP: :loop4
    if (((s as any).temp_dealer_hand ?? 0)?.[String((s as any).i ?? 0)] !== 0) {
      (s as any).i = ((s as any).i ?? 0) + (1);
      // TODO-QSP: jump 'loop4'
    }
    ((s as any).temp_dealer_hand ?? {})[String((s as any).i ?? 0)] = ((s as any).cardsDealt ?? 0);
    (s as any).cardsDealt = ((s as any).cardsDealt ?? 0) + (1);
    scene.img('images/locations/city/industrial/casino/cartbde.jpg');
  }, goto: ['casino', 'dealer'] },
    ]);
  } else {
    if (((s as any).dealerPoints ?? 0) > 21) {
      (s as any).betTotal = 0;
      (s as any).i = 0;
      // TODO-QSP: :loop5
      if (((s as any).temp_player_points ?? 0)?.[String((s as any).i ?? 0)] <= 21) {
        (s as any).betTotal = ((s as any).betTotal ?? 0) + (((s as any).temp_player_bets ?? 0)?.[String((s as any).i ?? 0)]);
      }
      (s as any).i = ((s as any).i ?? 0) + (1);
      if (((s as any).i ?? 0) < ((s as any).numHands ?? 0)) {
        // TODO-QSP: jump 'loop5'
      }
      // TODO-QSP: *p 'You receive <<betTotal>> chips in winnings.'
      (s as any).casino_chips = ((s as any).casino_chips ?? 0) + (((s as any).betTotal ?? 0));
      scene.actions([
        { label: 'Continue', goto: ['casino', 'blackjack_play'] },
      ]);
    } else {
      (s as any).betTotal = 0;
      (s as any).i = 0;
      // TODO-QSP: :loop6
      if (((s as any).temp_player_points ?? 0)?.[String((s as any).i ?? 0)] > 21) {
        (s as any).betTotal = ((s as any).betTotal ?? 0) - (((s as any).temp_player_bets ?? 0)?.[String((s as any).i ?? 0)]);
      } else {
        if (((s as any).temp_player_points ?? 0)?.[String((s as any).i ?? 0)] < ((s as any).dealerPoints ?? 0)) {
          (s as any).betTotal = ((s as any).betTotal ?? 0) - (((s as any).temp_player_bets ?? 0)?.[String((s as any).i ?? 0)]);
        } else {
          if (((s as any).temp_player_points ?? 0)?.[String((s as any).i ?? 0)] > ((s as any).dealerPoints ?? 0)) {
            (s as any).betTotal = ((s as any).betTotal ?? 0) + (((s as any).temp_player_bets ?? 0)?.[String((s as any).i ?? 0)]);
          }
        }
      }
      (s as any).i = ((s as any).i ?? 0) + (1);
      if (((s as any).i ?? 0) < ((s as any).numHands ?? 0)) {
        // TODO-QSP: jump 'loop6'
      }
      if ((!((s as any).betTotal ?? 0))) {
        if (((s as any).numHands ?? 0) === 1) {
          // TODO-QSP: *p 'You retrieve your bet.'
        }
        if (((s as any).numHands ?? 0) > 1) {
          // TODO-QSP: *p 'You retrieve your bets.'
        }
      } else {
        if (((s as any).betTotal ?? 0) < 0) {
          if (((s as any).numHands ?? 0) > 1) {
            // TODO-QSP: *p 'After taking into account all the hands, you have lost. '
          }
          // TODO-QSP: *p 'The dealer relieves you of <<0 - betTotal>> chips.'
        } else {
          if (((s as any).numHands ?? 0) > 1) {
            // TODO-QSP: *p 'After taking into account all the hands, you have won. '
          }
          // TODO-QSP: *p 'You receive <<betTotal>> chips in winnings.'
        }
      }
      (s as any).casino_chips = ((s as any).casino_chips ?? 0) + (((s as any).betTotal ?? 0));
      scene.actions([
        { label: 'Continue', goto: ['casino', 'blackjack_play'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBlackjackView(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).locArgs?.[1] ?? 0))) {
    // TODO-QSP: *p '<img <<$set_imgh>> src="<<$deckImg[temp_dealer_hand[0]]>>">'
  } else {
    (s as any).numAces = 0;
    (s as any).dealerPoints = 0;
    (s as any).i = 0;
    // TODO-QSP: :loop7
    // TODO-QSP: *p '<img <<$set_imgh>> src="<<$deckImg[temp_dealer_hand[i]]>>">'
    if (((s as any).deckFace ?? 0)[((s as any).temp_dealer_hand ?? 0)?.[String((s as any).i ?? 0)]] === 1) {
      (s as any).dealerPoints = ((s as any).dealerPoints ?? 0) + (11);
      (s as any).numAces = ((s as any).numAces ?? 0) + (1);
    } else {
      if (((s as any).deckFace ?? 0)[((s as any).temp_dealer_hand ?? 0)?.[String((s as any).i ?? 0)]] > 9) {
        (s as any).dealerPoints = ((s as any).dealerPoints ?? 0) + (10);
      } else {
        (s as any).dealerPoints = ((s as any).dealerPoints ?? 0) + (qspUntranslated(s, "deckFace[temp_dealer_hand[i]]", { location: "casino" }));
      }
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).temp_dealer_hand ?? 0)?.[String((s as any).i ?? 0)] !== 0) {
      // TODO-QSP: jump 'loop7'
    }
    // TODO-QSP: :loop8
    if (((s as any).dealerPoints ?? 0) > 21  &&  ((s as any).numAces ?? 0) > 0) {
      (s as any).dealerPoints = ((s as any).dealerPoints ?? 0) - (10);
      (s as any).numAces = ((s as any).numAces ?? 0) - (1);
      // TODO-QSP: jump 'loop8'
    }
    if (((s as any).dealerPoints ?? 0) > 21) {
      // TODO-QSP: *p '<br>BUST!'
    } else {
      if (((s as any).dealerPoints ?? 0) === 21  &&  ((s as any).temp_dealer_hand ?? 0)[2] === 0) {
        // TODO-QSP: *p '<br>BLACKJACK!'
      } else {
        // TODO-QSP: *p '<br><<dealerPoints>> points'
      }
    }
  }
  (s as any).i = 0;
  // TODO-QSP: :loop9
  (s as any).numAces = 0;
  ((s as any).temp_player_points ?? {})[String((s as any).i ?? 0)] = 0;
  if (((s as any).numHands ?? 0) > 1) {
    // TODO-QSP: *pl 'Hand #<<i + 1>>:'
  }
  (s as any).j = 0;
  // TODO-QSP: :loop10
  if (((s as any).temp_player_hand ?? 0)[((s as any).i ?? 0) * 16 + ((s as any).j ?? 0)] !== 0) {
    // TODO-QSP: *p '<img <<$set_imgh>> src="<<$deckImg[temp_player_hand[i * 16 + j]]>>">'
    if (((s as any).deckFace ?? 0)[((s as any).temp_player_hand ?? 0)[((s as any).i ?? 0) * 16 + ((s as any).j ?? 0)]] === 1) {
      ((s as any).temp_player_points ?? {})[String((s as any).i ?? 0)] = (((s as any).temp_player_points ?? {})[String((s as any).i ?? 0)] ?? 0) + (11);
      (s as any).numAces = ((s as any).numAces ?? 0) + (1);
    } else {
      if (((s as any).deckFace ?? 0)[((s as any).temp_player_hand ?? 0)[((s as any).i ?? 0) * 16 + ((s as any).j ?? 0)]] > 9) {
        ((s as any).temp_player_points ?? {})[String((s as any).i ?? 0)] = (((s as any).temp_player_points ?? {})[String((s as any).i ?? 0)] ?? 0) + (10);
      } else {
        ((s as any).temp_player_points ?? {})[String((s as any).i ?? 0)] = (((s as any).temp_player_points ?? {})[String((s as any).i ?? 0)] ?? 0) + (((s as any).deckFace ?? 0)?.[((s as any).temp_player_hand ?? 0)?.[((s as any).i ?? 0) * 16 + ((s as any).j ?? 0)]]);
      }
    }
    (s as any).j = ((s as any).j ?? 0) + (1);
    // TODO-QSP: jump 'loop10'
  }
  // TODO-QSP: :loop11
  if (((s as any).temp_player_points ?? 0)?.[String((s as any).i ?? 0)] > 21  &&  ((s as any).numAces ?? 0) > 0) {
    ((s as any).temp_player_points ?? {})[String((s as any).i ?? 0)] = (((s as any).temp_player_points ?? {})[String((s as any).i ?? 0)] ?? 0) - (10);
    (s as any).numAces = ((s as any).numAces ?? 0) - (1);
    // TODO-QSP: jump 'loop11'
  }
  if (((s as any).temp_player_points ?? 0)?.[String((s as any).i ?? 0)] > 21) {
    // TODO-QSP: *p '<br>BUST!'
  } else {
    if (((s as any).temp_player_points ?? 0)?.[String((s as any).i ?? 0)] === 21  &&  ((s as any).temp_player_hand ?? 0)[2] === 0  &&  ((s as any).numHands ?? 0) === 1) {
      // TODO-QSP: *p '<br>BLACKJACK!'
    } else {
      // TODO-QSP: *p '<br><<temp_player_points[i]>> points |'
    }
  }
  // TODO-QSP: *p ' Bet = <<temp_player_bets[i]>> chips<br><br>'
  (s as any).i = ((s as any).i ?? 0) + (1);
  if (((s as any).i ?? 0) < ((s as any).numHands ?? 0)) {
    // TODO-QSP: jump 'loop9'
  }
  // TODO-QSP: end
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
    case 'slots':
      enterSlots(s, scene);
      break;
    case 'cards':
      enterCards(s, scene);
      break;
    case 'cards_cw':
      enterCardsCw(s, scene);
      break;
    case 'cards_cwplay':
      enterCardsCwplay(s, scene);
      break;
    case 'blackjack_play':
      enterBlackjackPlay(s, scene);
      break;
    case 'rules':
      enterRules(s, scene);
      break;
    case 'bet1':
      enterBet1(s, scene);
      break;
    case 'bet2':
      enterBet2(s, scene);
      break;
    case 'blackjack':
      enterBlackjack(s, scene);
      break;
    case 'insurance1':
      enterInsurance1(s, scene);
      break;
    case 'insurance2':
      enterInsurance2(s, scene);
      break;
    case 'player':
      enterPlayer(s, scene);
      break;
    case 'dealer':
      enterDealer(s, scene);
      break;
    case 'blackjack_view':
      enterBlackjackView(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const casino: LocationDef = {
  name: 'casino',
  title: 'You currently have <<casino_chips>> chips.<br>',
  region: 'other',
  locationType: 'public_indoors',
  enter: enter,
};
