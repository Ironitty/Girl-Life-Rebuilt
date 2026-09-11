import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Pool</b></center>');
  scene.img('images/locations/city/citycenter/mall/pool/bil.jpg');
  scene.text('Quite a large billiard room, there are plenty of tables in the main hall, but there are some tables in individual cubicles.');
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 20) {
    scene.actions([
      { label: 'Play (1:00) [+$func(\'money\', \'get_cost_string\', 125)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 125) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 125);
      (s as any).minut = ((s as any).minut ?? 0) + 60;
      (s as any).billvar = 0;
      qspCall(s, 'exp_gain', 'pool', Math.floor(Math.random() * 4) + 0);
      (s as any).billrand = Math.floor(Math.random() * 6) + 0;
      qspCall(s, 'stat', '');
      if ((!((s as any).billrand ?? 0))) {
        scene.text('You play one of the guys here and he asks if you want to make it more interesting.');
        if (((s as any).mc_inventory ?? 0)?.['strapon'] === 1) {
          // TODO-QSP: act 'Play for his ass, sex if you lose': billvar = 1
          scene.actions([{ label: 'Continue', goto: ['billiard', 'randwin'] }]);
        }
        qspCall(s, 'willpower', 'anal', 'resist');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Stick to practice games [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Stick to practice games [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'anal', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['billiard', ''] },
          ]);
        }
        scene.actions([
          { label: 'Bet on the game [+$func(\'money\', \'get_cost_string\', 1000, ...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 1000, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).billvar = 0;
      scene.actions([{ label: 'Continue', goto: ['billiard', 'randwin'] }]);
    }
  } },
          { label: 'Let him have the table instead', handler: (st: GameState) => {
    qspCall(s, 'money', 'earn', 125);
    qspCall(s, 'exp_gain', 'pool', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'stat', '');
  }, goto: ['billiard', ''] },
        ]);
      } else {
        if (((s as any).billrand ?? 0) === 1) {
          scene.text('You play a couple of the guys here and they ask if you want to make it more interesting.');
          if (((s as any).mc_inventory ?? 0)?.['strapon'] === 1) {
            // TODO-QSP: act 'Play for their asses, sex if you lose': billvar = 2
            scene.actions([{ label: 'Continue', goto: ['billiard', 'randwin'] }]);
          }
          qspCall(s, 'willpower', 'anal', 'resist', 'hard');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Stick to practice games [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Stick to practice games [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'anal', 'resist', 'hard');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['billiard', ''] },
            ]);
          }
          scene.actions([
            { label: 'Bet on the game [+$func(\'money\', \'get_cost_string\', 1000, ...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 1000, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).billvar = 0;
      scene.actions([{ label: 'Continue', goto: ['billiard', 'randwin'] }]);
    }
  } },
            { label: 'Let him have the table instead', handler: (st: GameState) => {
    qspCall(s, 'money', 'earn', 125);
    qspCall(s, 'exp_gain', 'pool', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'stat', '');
  }, goto: ['billiard', ''] },
          ]);
        } else {
          if (((s as any).billrand ?? 0) >= 2) {
            scene.text('You played billiards by yourself.');
            scene.actions([
              { label: 'Leave', goto: ['billiard', ''] },
            ]);
          }
        }
      }
    }
  } },
      { label: 'Play for money [+$func(\'money\', \'get_cost_string\', 250)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 250) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 60;
      qspCall(s, 'exp_gain', 'pool', Math.floor(Math.random() * 2) + 0);
      (s as any).billvar = 3;
      scene.actions([{ label: 'Continue', goto: ['billiard', 'randwin'] }]);
    }
  } },
    ]);
  }
  scene.actions([
    { label: 'Leave', goto: ['city_mall', ''] },
  ]);
  scene.build();
}

function enterRandwin(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_pool ?? 0) < 10) {
    (s as any).billwin = Math.floor(Math.random() * 11) + 0;
  }
  if (((s as any).pcs_pool ?? 0) >= 10  &&  ((s as any).pcs_pool ?? 0) < 20) {
    (s as any).billwin = Math.floor(Math.random() * 13) + 0;
  }
  if (((s as any).pcs_pool ?? 0) >= 20  &&  ((s as any).pcs_pool ?? 0) < 30) {
    (s as any).billwin = Math.floor(Math.random() * 15) + 0;
  }
  if (((s as any).pcs_pool ?? 0) >= 30  &&  ((s as any).pcs_pool ?? 0) < 40) {
    (s as any).billwin = Math.floor(Math.random() * 17) + 0;
  }
  if (((s as any).pcs_pool ?? 0) >= 40  &&  ((s as any).pcs_pool ?? 0) < 50) {
    (s as any).billwin = Math.floor(Math.random() * 19) + 0;
  }
  if (((s as any).pcs_pool ?? 0) >= 50  &&  ((s as any).pcs_pool ?? 0) < 60) {
    (s as any).billwin = Math.floor(Math.random() * 21) + 0;
  }
  if (((s as any).pcs_pool ?? 0) >= 60  &&  ((s as any).pcs_pool ?? 0) < 70) {
    (s as any).billwin = Math.floor(Math.random() * 23) + 0;
  }
  if (((s as any).pcs_pool ?? 0) >= 70  &&  ((s as any).pcs_pool ?? 0) < 80) {
    (s as any).billwin = Math.floor(Math.random() * 25) + 0;
  }
  if (((s as any).pcs_pool ?? 0) >= 80  &&  ((s as any).pcs_pool ?? 0) < 90) {
    (s as any).billwin = Math.floor(Math.random() * 27) + 0;
  }
  if (((s as any).pcs_pool ?? 0) >= 90) {
    (s as any).billwin = Math.floor(Math.random() * 29) + 0;
  }
  if (((s as any).billwin ?? 0) > 10  &&  (!((s as any).billvar ?? 0))) {
    qspCall(s, 'money', 'earn', 1000, 'cash');
    // TODO-QSP: dynamic text: You won and received ' + $func('money', 'string_profit', 1000) + '.
    scene.text('You won and received \' + $func(\'money\', \'string_profit\', 1000) + \'.');
    scene.actions([
      { label: 'Leave', goto: ['billiard', ''] },
    ]);
  } else {
    if (((s as any).billwin ?? 0) > 10  &&  ((s as any).billvar ?? 0) === 1) {
      scene.img('images/locations/city/citycenter/mall/pool/sex/strapon.jpg');
      scene.text('You win, put your strapon, and look at the guy, "Well bend over, today you\'re my bitch."');
      scene.text('The guy drops his pants and bends over, you peg that butt.');
      qspCall(s, 'arousal', 'anal_strap_give', 10, 'dom');
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Leave', goto: ['billiard', ''] },
      ]);
    } else {
      if (((s as any).billwin ?? 0) > 10  &&  ((s as any).billvar ?? 0) === 2) {
        scene.img('images/locations/city/citycenter/mall/pool/sex/strapon.jpg');
        scene.text('You win, put on your strapon, and look at the guys, "Come on girls panties down and asses up, now I\'m going to fuck this whole harem."');
        scene.text('You fuck them all in turn.');
        qspCall(s, 'arousal', 'anal_strap_give', 10, 'dom');
        qspCall(s, 'arousal', 'end');
        scene.actions([
          { label: 'Leave', goto: ['billiard', ''] },
        ]);
      } else {
        if (((s as any).billwin ?? 0) > 10  &&  ((s as any).billvar ?? 0) === 3) {
          qspCall(s, 'money', 'earn', 250, 'cash');
          // TODO-QSP: dynamic text: You won and received ' + $func('money', 'string_profit', 250) + '.
          scene.text('You won and received \' + $func(\'money\', \'string_profit\', 250) + \'.');
          scene.actions([
            { label: 'Get_Away', goto: ['billiard', ''] },
          ]);
        } else {
          if (((s as any).billwin ?? 0) <= 10  &&  (!((s as any).billvar ?? 0))) {
            qspCall(s, 'money', 'pay', 1000, 'cash');
            // TODO-QSP: dynamic text: You lost and paid ' + $func('money', 'string_price', 1000) + '.
            scene.text('You lost and paid \' + $func(\'money\', \'string_price\', 1000) + \'.');
            scene.actions([
              { label: 'Leave', goto: ['billiard', ''] },
            ]);
          } else {
            if (((s as any).billwin ?? 0) <= 10  &&  ((s as any).billvar ?? 0) === 1) {
              scene.text('You lose, open those legs.');
              (s as any).picrand = 16;
              scene.actions([
                { label: 'Pay', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex', 'var'
  } },
              ]);
            } else {
              if (((s as any).billwin ?? 0) <= 10  &&  ((s as any).billvar ?? 0) === 2) {
                scene.text('You lose, open those legs.');
                qspCall(s, 'npcgeneratec', '', 0, 'Billiard Player', Math.floor(Math.random() * 23) + 18);
                qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
                qspCall(s, 'npcgeneratec', '', 0, 'Billiard Player', Math.floor(Math.random() * 23) + 18);
                qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0), '1');
                qspCall(s, 'npcgeneratec', '', 0, 'Billiard Player', Math.floor(Math.random() * 23) + 18);
                qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0), '2');
                (s as any).picrand = 12;
                scene.actions([
                  { label: 'Pay', goto: ['paysex', 'var'] },
                ]);
              } else {
                if (((s as any).billwin ?? 0) <= 10  &&  ((s as any).billvar ?? 0) === 3) {
                  qspCall(s, 'money', 'pay', 300, 'cash');
                  // TODO-QSP: dynamic text: You lost and paid ' + $func('money', 'string_price', 300) + '.
                  scene.text('You lost and paid \' + $func(\'money\', \'string_price\', 300) + \'.');
                  scene.actions([
                    { label: 'Leave', goto: ['billiard', ''] },
                  ]);
                } else {
                  qspCall(s, 'money', 'pay', 300, 'cash');
                  // TODO-QSP: dynamic text: You lost and paid ' + $func('money', 'string_price', 300) + '.
                  scene.text('You lost and paid \' + $func(\'money\', \'string_price\', 300) + \'.');
                  scene.actions([
                    { label: 'Leave', goto: ['billiard', ''] },
                  ]);
                }
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Pool</b></center>');
  scene.img('images/locations/city/citycenter/mall/pool/bil.jpg');
  scene.actions([
    { label: 'Leave', goto: ['billiard', ''] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'randwin':
      enterRandwin(s, scene);
      break;
    case 'start':
      enterStart(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const billiard: LocationDef = {
  name: 'billiard',
  title: '<center><b>Pool</b></center>',
  region: 'other',
  locationType: 'public_indoors',
  description: ['Quite a large billiard room, there are plenty of tables in the main hall, but there are some tables in individual cubicles.'],
  enter: enter,
};
