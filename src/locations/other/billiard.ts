import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Pool</b></center>');
  scene.img('images/locations/city/citycenter/mall/pool/bil.jpg');
  scene.text('Quite a large billiard room, there are plenty of tables in the main hall, but there are some tables in individual cubicles.');
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 20) {
    if (qspFunc(s, 'money', 'can_afford', 125) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney ?? ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 125);
      (s as any).minut = ((s as any).minut ?? 0) + 60;
      (s as any).billvar = 0;
      qspCall(s, 'exp_gain', 'pool', Math.floor(Math.random() * 4) + 0);
      (s as any).billrand = Math.floor(Math.random() * 6) + 0;
      qspCall(s, 'stat', '');
      if (((s as any).billrand ?? 0) === 0) {
        scene.text('You play one of the guys here and he asks if you want to make it more interesting.');
        if (qspFunc(s, 'money', 'can_afford', 1000, 'cash') === 0) {
          s.scene = { ...s.scene, mainText: String((s as any).noMoney ?? ''), curActs: [] };
        } else {
          (s as any).billvar = 0;
        }
        scene.actions([
          { label: 'Bet on the game [+$func(\'money\', \'get_cost_string\', 1000, ...]' }, // TODO-QSP: empty action body
        ]);
      }
      if (((s as any).mc_inventory ?? 0)?.['strapon'] === 1) {
        // TODO-QSP: act 'Play for his ass, sex if you lose': billvar = 1
        scene.actions([{ label: 'Continue', goto: ['billiard', 'randwin'] }]);
      }
      qspCall(s, 'willpower', 'anal', 'resist');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Stick to practice games [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Stick to practice games', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'anal', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['billiard', ''] },
        ]);
      }
      if (((s as any).billrand ?? 0) === 1) {
        scene.text('You play a couple of the guys here and they ask if you want to make it more interesting.');
        if (qspFunc(s, 'money', 'can_afford', 1000, 'cash') === 0) {
          s.scene = { ...s.scene, mainText: String((s as any).noMoney ?? ''), curActs: [] };
        } else {
          (s as any).billvar = 0;
        }
        scene.actions([
          { label: 'Bet on the game [+$func(\'money\', \'get_cost_string\', 1000, ...]' }, // TODO-QSP: empty action body
        ]);
      }
      if (((s as any).mc_inventory ?? 0)?.['strapon'] === 1) {
        // TODO-QSP: act 'Play for their asses, sex if you lose': billvar = 2
        scene.actions([{ label: 'Continue', goto: ['billiard', 'randwin'] }]);
      }
      qspCall(s, 'willpower', 'anal', 'resist', 'hard');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Stick to practice games [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Stick to practice games', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'anal', 'resist', 'hard');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['billiard', ''] },
        ]);
      }
      if (((s as any).billrand ?? 0) >= 2) {
        scene.text('You played billiards by yourself.');
        scene.actions([
          { label: 'Leave', goto: ['billiard', ''] },
        ]);
      }
      scene.actions([
        { label: 'Let him have the table instead', handler: (st: GameState) => {
    qspCall(s, 'money', 'earn', 125);
    qspCall(s, 'exp_gain', 'pool', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'stat', '');
  }, goto: ['billiard', ''] },
        { label: 'Let him have the table instead', handler: (st: GameState) => {
    qspCall(s, 'money', 'earn', 125);
    qspCall(s, 'exp_gain', 'pool', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'stat', '');
  }, goto: ['billiard', ''] },
      ]);
    }
    scene.actions([
      { label: 'Play (1:00) [+$func(\'money\', \'get_cost_string\', 125)]' }, // TODO-QSP: empty action body
    ]);
  }
  scene.actions([
    { label: 'Leave', goto: ['city_mall', ''] },
    { label: 'Play for money [+$func(\'money\', \'get_cost_string\', 250)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 250) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney ?? ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 60;
      qspCall(s, 'exp_gain', 'pool', Math.floor(Math.random() * 2) + 0);
      (s as any).billvar = 3;
      scene.actions([{ label: 'Continue', goto: ['billiard', 'randwin'] }]);
    }
  } },
  ]);
  scene.build();
}

export const billiard: LocationDef = {
  name: 'billiard',
  title: '<center><b>Pool</b></center>',
  region: 'other',
  locationType: 'public_indoors',
  description: ['Quite a large billiard room, there are plenty of tables in the main hall, but there are some tables in individual cubicles.'],
  enter: enter,
};
