import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).boulingnav ?? 0) < 10) {
    (s as any).boulwin = Math.floor(Math.random() * 11) + 0;
  } else {
    if (((s as any).boulingnav ?? 0) < 20) {
      (s as any).boulwin = Math.floor(Math.random() * 13) + 0;
    } else {
      if (((s as any).boulingnav ?? 0) < 30) {
        (s as any).boulwin = Math.floor(Math.random() * 15) + 0;
      } else {
        if (((s as any).boulingnav ?? 0) < 40) {
          (s as any).boulwin = Math.floor(Math.random() * 17) + 0;
        } else {
          if (((s as any).boulingnav ?? 0) < 50) {
            (s as any).boulwin = Math.floor(Math.random() * 19) + 0;
          } else {
            if (((s as any).boulingnav ?? 0) < 60) {
              (s as any).boulwin = Math.floor(Math.random() * 21) + 0;
            } else {
              if (((s as any).boulingnav ?? 0) < 70) {
                (s as any).boulwin = Math.floor(Math.random() * 23) + 0;
              } else {
                if (((s as any).boulingnav ?? 0) < 80) {
                  (s as any).boulwin = Math.floor(Math.random() * 25) + 0;
                } else {
                  if (((s as any).boulingnav ?? 0) < 90) {
                    (s as any).boulwin = Math.floor(Math.random() * 27) + 0;
                  } else {
                    (s as any).boulwin = Math.floor(Math.random() * 29) + 0;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).boulwin ?? 0) > 10) {
    if ((!((s as any).boulvar ?? 0))) {
      qspCall(s, 'money', 'earn', 300);
      // TODO-QSP: dynamic text: You win and receive ' + $func('money', 'string_profit', 300) + '.
      scene.text('You win and receive \' + $func(\'money\', \'string_profit\', 300) + \'.');
      scene.actions([
        { label: 'Leave', goto: ['bouling', ''] },
      ]);
    } else {
      if (((s as any).boulvar ?? 0) === 1) {
        qspCall(s, 'money', 'earn', 2000);
        // TODO-QSP: dynamic text: You win and receive ' + $func('money', 'string_profit', 2000) + '.
        scene.text('You win and receive \' + $func(\'money\', \'string_profit\', 2000) + \'.');
        scene.actions([
          { label: 'Leave', goto: ['bouling', ''] },
        ]);
      } else {
        if (((s as any).boulvar ?? 0) === 2) {
          qspCall(s, 'money', 'earn', 5000);
          // TODO-QSP: dynamic text: You win and receive ' + $func('money', 'string_profit', 5000) + '.
          scene.text('You win and receive \' + $func(\'money\', \'string_profit\', 5000) + \'.');
          scene.actions([
            { label: 'Leave', goto: ['bouling', ''] },
          ]);
        }
      }
    }
  } else {
    if ((!((s as any).boulvar ?? 0))) {
      qspCall(s, 'money', 'pay', 300);
      // TODO-QSP: dynamic text: You lose and pay ' + $func('money', 'string_price', 300) + '.
      scene.text('You lose and pay \' + $func(\'money\', \'string_price\', 300) + \'.');
      scene.actions([
        { label: 'Leave', goto: ['bouling', ''] },
      ]);
    } else {
      if (((s as any).boulvar ?? 0) === 1) {
        (s as any).picrand = 14;
        if (qspFunc(s, 'money', 'can_afford', 2000, 'cash') === 1) {
          // TODO-QSP: dynamic text: You lose and have to pay ' + $func('money', 'string_price', 2000) + '.
          scene.text('You lose and have to pay \' + $func(\'money\', \'string_price\', 2000) + \'.');
          qspCall(s, 'willpower', 'sex', 'self', 'hard');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Offer sex instead [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Offer sex instead [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'sex', 'self', 'hard');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    // TODO-QSP: xgt 'sexdvoe', 'var'
  } },
            ]);
          }
          scene.actions([
            { label: 'Pay ( [+$func(\'money\', \'string_price\', 2000) + \'...]', handler: (st: GameState) => {
    qspCall(st, 'money', 'pay', 2000, 'cash');
  }, goto: ['bouling', ''] },
          ]);
        } else {
          scene.text('You lose, but you do not have enough money to pay. Only one thing for it.');
          scene.actions([
            { label: 'Offer sex instead', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sexdvoe', 'var'
  } },
          ]);
        }
      } else {
        if (((s as any).boulvar ?? 0) === 2) {
          (s as any).picrand = 11;
          scene.text('You lose, open those legs.');
          scene.actions([
            { label: 'Pay', goto: ['sexorg', 'var'] },
          ]);
        }
      }
    }
  }
  scene.build();
}

export const bouling: LocationDef = {
  name: 'bouling',
  title: '<center><b>Bowling</b></center>',
  region: 'other',
  locationType: 'public_indoors',
  enter: enter,
};
