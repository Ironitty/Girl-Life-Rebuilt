import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).sexloc = 'bouling';
  (s as any).loc = 'bouling';
  (s as any).loc_arg = 'start';
  (s as any).menu_loc = 'bouling';
  (s as any).menu_arg = 'start';
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Bowling</b></center>');
  scene.img('images/locations/city/citycenter/mall/bowling/boul.jpg');
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 20) {
    scene.actions([
      { label: 'Play (1:00)', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 300) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      (st as any).minut = ((st as any).minut ?? 0) + 60;
      qspCall(st, 'money', 'pay', 300);
      (st as any).boulvar = 0;
      (st as any).boulingnav = ((st as any).boulingnav ?? 0) + ((Math.floor(Math.random() * 4) + 0));
      (st as any).boulrand = (Math.floor(Math.random() * 10) + 0);
      qspCall(st, 'npcgeneratec', '', 0, 'Bowling Player', (Math.floor(Math.random() * 23) + 18));
      // TODO-QSP: $boy[0] = $npclastgenerated
      // TODO-QSP: $boydesc[0] = $npc_usedname[$npclastgenerated]
      qspCall(st, 'npcgeneratec', '', 0, 'Bowling Player', (Math.floor(Math.random() * 23) + 18));
      // TODO-QSP: $boy[1] = $npclastgenerated
      // TODO-QSP: $boydesc[1] = $npc_usedname[$npclastgenerated]
      qspCall(st, 'stat', '');
      if ((!((st as any).boulrand ?? 0))) {
        scene.text('You see two guys and they challenge you to a game.');
        qspCall(st, 'willpower', 'sex', 'resist', 'hard');
        if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Refuse and play a normal game', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Refuse and play a normal game', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'sex', 'resist', 'hard');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspGoto(st, 'bouling', 'randwin');
  } },
          ]);
        }
        scene.actions([
          { label: 'Gamble ( [2000₽]...]', handler: (st: GameState) => {
    (st as any).boulvar = 1;
  }, goto: ['bouling', 'randwin'] },
        ]);
      } else {
        if (((st as any).boulrand ?? 0) === 1) {
          // TODO-QSP: dynamic text: 'You meet two girls, and they suggest challenging two guys to a game: Prize ' + ...
          scene.text('You meet two girls, and they suggest challenging two guys to a game: Prize 5000₽, lose and they have sex with you.');
          qspCall(st, 'willpower', 'sex', 'resist', 'hard');
          if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Refuse and play a normal game', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Refuse and play a normal game', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'sex', 'resist', 'hard');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspGoto(st, 'bouling', 'randwin');
  } },
            ]);
          }
          scene.actions([
            { label: 'Play', handler: (st: GameState) => {
    (st as any).boulvar = 2;
  }, goto: ['bouling', 'randwin'] },
          ]);
        } else {
          if (((st as any).boulrand ?? 0) > 1) {
            qspGoto(st, 'bouling', 'randwin');
          }
        }
      }
      scene.actions([
        { label: 'Leave', goto: ['bouling', ''] },
      ]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_mall', ''] },
  ]);
  scene.build();
}

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).sexloc = 'bouling';
  (s as any).loc = 'bouling';
  (s as any).loc_arg = 'start';
  (s as any).menu_loc = 'bouling';
  (s as any).menu_arg = 'start';
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Bowling</b></center>');
  scene.img('images/locations/city/citycenter/mall/bowling/boul.jpg');
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 20) {
    scene.actions([
      { label: 'Play (1:00)', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 300) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      (st as any).minut = ((st as any).minut ?? 0) + 60;
      qspCall(st, 'money', 'pay', 300);
      (st as any).boulvar = 0;
      (st as any).boulingnav = ((st as any).boulingnav ?? 0) + ((Math.floor(Math.random() * 4) + 0));
      (st as any).boulrand = (Math.floor(Math.random() * 10) + 0);
      qspCall(st, 'npcgeneratec', '', 0, 'Bowling Player', (Math.floor(Math.random() * 23) + 18));
      // TODO-QSP: $boy[0] = $npclastgenerated
      // TODO-QSP: $boydesc[0] = $npc_usedname[$npclastgenerated]
      qspCall(st, 'npcgeneratec', '', 0, 'Bowling Player', (Math.floor(Math.random() * 23) + 18));
      // TODO-QSP: $boy[1] = $npclastgenerated
      // TODO-QSP: $boydesc[1] = $npc_usedname[$npclastgenerated]
      qspCall(st, 'stat', '');
      if ((!((st as any).boulrand ?? 0))) {
        scene.text('You see two guys and they challenge you to a game.');
        qspCall(st, 'willpower', 'sex', 'resist', 'hard');
        if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Refuse and play a normal game', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Refuse and play a normal game', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'sex', 'resist', 'hard');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspGoto(st, 'bouling', 'randwin');
  } },
          ]);
        }
        scene.actions([
          { label: 'Gamble ( [2000₽]...]', handler: (st: GameState) => {
    (st as any).boulvar = 1;
  }, goto: ['bouling', 'randwin'] },
        ]);
      } else {
        if (((st as any).boulrand ?? 0) === 1) {
          // TODO-QSP: dynamic text: 'You meet two girls, and they suggest challenging two guys to a game: Prize ' + ...
          scene.text('You meet two girls, and they suggest challenging two guys to a game: Prize 5000₽, lose and they have sex with you.');
          qspCall(st, 'willpower', 'sex', 'resist', 'hard');
          if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Refuse and play a normal game', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Refuse and play a normal game', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'sex', 'resist', 'hard');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspGoto(st, 'bouling', 'randwin');
  } },
            ]);
          }
          scene.actions([
            { label: 'Play', handler: (st: GameState) => {
    (st as any).boulvar = 2;
  }, goto: ['bouling', 'randwin'] },
          ]);
        } else {
          if (((st as any).boulrand ?? 0) > 1) {
            qspGoto(st, 'bouling', 'randwin');
          }
        }
      }
      scene.actions([
        { label: 'Leave', goto: ['bouling', ''] },
      ]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_mall', ''] },
  ]);
  scene.build();
}

function enterRandwin(s: GameState, scene: SceneBuilder): void {
  if (((s as any).boulingnav ?? 0) < 10) {
    (s as any).boulwin = (Math.floor(Math.random() * 11) + 0);
  } else {
    if (((s as any).boulingnav ?? 0) < 20) {
      (s as any).boulwin = (Math.floor(Math.random() * 13) + 0);
    } else {
      if (((s as any).boulingnav ?? 0) < 30) {
        (s as any).boulwin = (Math.floor(Math.random() * 15) + 0);
      } else {
        if (((s as any).boulingnav ?? 0) < 40) {
          (s as any).boulwin = (Math.floor(Math.random() * 17) + 0);
        } else {
          if (((s as any).boulingnav ?? 0) < 50) {
            (s as any).boulwin = (Math.floor(Math.random() * 19) + 0);
          } else {
            if (((s as any).boulingnav ?? 0) < 60) {
              (s as any).boulwin = (Math.floor(Math.random() * 21) + 0);
            } else {
              if (((s as any).boulingnav ?? 0) < 70) {
                (s as any).boulwin = (Math.floor(Math.random() * 23) + 0);
              } else {
                if (((s as any).boulingnav ?? 0) < 80) {
                  (s as any).boulwin = (Math.floor(Math.random() * 25) + 0);
                } else {
                  if (((s as any).boulingnav ?? 0) < 90) {
                    (s as any).boulwin = (Math.floor(Math.random() * 27) + 0);
                  } else {
                    (s as any).boulwin = (Math.floor(Math.random() * 29) + 0);
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
      // TODO-QSP: dynamic text: 'You win and receive ' + $func('money', 'string_profit', 300) + '.'
      scene.text('You win and receive \' + $func(\'money\', \'string_profit\', 300) + \'.');
      scene.actions([
        { label: 'Leave', goto: ['bouling', ''] },
      ]);
    } else {
      if (((s as any).boulvar ?? 0) === 1) {
        qspCall(s, 'money', 'earn', 2000);
        // TODO-QSP: dynamic text: 'You win and receive ' + $func('money', 'string_profit', 2000) + '.'
        scene.text('You win and receive \' + $func(\'money\', \'string_profit\', 2000) + \'.');
        scene.actions([
          { label: 'Leave', goto: ['bouling', ''] },
        ]);
      } else {
        if (((s as any).boulvar ?? 0) === 2) {
          qspCall(s, 'money', 'earn', 5000);
          // TODO-QSP: dynamic text: 'You win and receive ' + $func('money', 'string_profit', 5000) + '.'
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
      // TODO-QSP: dynamic text: 'You lose and pay ' + $func('money', 'string_price', 300) + '.'
      scene.text('You lose and pay 300₽.');
      scene.actions([
        { label: 'Leave', goto: ['bouling', ''] },
      ]);
    } else {
      if (((s as any).boulvar ?? 0) === 1) {
        (s as any).picrand = 14;
        if (qspFunc(s, 'money', 'can_afford', 2000, 'cash') === 1) {
          // TODO-QSP: dynamic text: 'You lose and have to pay ' + $func('money', 'string_price', 2000) + '.'
          scene.text('You lose and have to pay 2000₽.');
          qspCall(s, 'willpower', 'sex', 'self', 'hard');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Offer sex instead', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Offer sex instead', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'sex', 'self', 'hard');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    qspGoto(st, 'sexdvoe', 'var');
  } },
            ]);
          }
          scene.actions([
            { label: 'Pay ( [2000₽]...]', handler: (st: GameState) => {
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
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'randwin':
      enterRandwin(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const bouling: LocationDef = {
  name: 'bouling',
  title: '<center><b>Bowling</b></center>',
  region: 'other',
  locationType: 'public_indoors',
  enter: enter,
};
