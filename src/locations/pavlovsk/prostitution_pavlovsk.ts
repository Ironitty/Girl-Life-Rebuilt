import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterChance(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'prostitution_pavlovsk', 'pav_rnd');
  if (((s as any).prostitute ?? 0)?.['pav_daily_count'] < ((s as any).prostitute ?? 0)?.['pav_daily_max']  &&  Math.floor(Math.random() * 1000) + 1 < ((s as any).min ?? 0)(((s as any).prostitute ?? 0)?.['pav_rnd'], 400)) {
    scene.actions([{ label: 'Continue', goto: ['prostitution_pavlovsk', 'rng'] }]);
  }
  scene.build();
}

function enterPavRnd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'prostitution_functions', 'work_clothes');
  if (((s as any).prostitute ?? 0)?.['pav_timer_day'] !== ((s as any).daystart ?? 0)) {
    (s as any).prostitute['pav_daily_count'] = 0;
    (s as any).prostitute['pav_timer_day'] = ((s as any).daystart ?? 0);
  }
  (s as any).prostitute['pav_timer_hour'] = ((s as any).hour ?? 0);
  (s as any).prostitute['pav_daily_max'] = (((s as any).fame ?? 0)?.['pav_prostitute'] / 100) + 2;
  (s as any).prostitute['pav_rnd'] = ((s as any).fame ?? 0)?.['pav_prostitute'] + 50 + ((s as any).prostitute ?? 0)?.['pav_rnd_pity'];
  if (((s as any).prostitute ?? 0)?.['work_clothes']) {
    (s as any).prostitute['pav_rnd'] = ((s as any).prostitute['pav_rnd'] ?? 0) + (100);
  }
  if (((s as any).pcs_makeup ?? 0) === 4) {
    (s as any).prostitute['pav_rnd'] = ((s as any).prostitute['pav_rnd'] ?? 0) + (50);
  }
  (s as any).prostitute['pav_rnd'] = ((s as any).prostitute['pav_rnd'] ?? 0) - ((((s as any).prostitute ?? 0)?.['pav_cooldown'] * 100));
  if (((s as any).prostitute ?? 0)?.['pav_cooldown'] > 0) {
    (s as any).prostitute['pav_cooldown'] = ((s as any).prostitute['pav_cooldown'] ?? 0) - (1);
  }
  (s as any).prostitute['pav_rnd_pity'] = ((s as any).prostitute['pav_rnd_pity'] ?? 0) + (20);
  scene.build();
}

function enterRng(s: GameState, scene: SceneBuilder): void {
  (s as any).pro_rand = Math.floor(Math.random() * 8) + 0;
  if (((s as any).pro_rand ?? 0) > 5) {
    (s as any).pro_rand = ((s as any).pro_rand ?? 0) + (2);
  }
  qspCall(s, 'prostitution_functions', 'pav_client');
  qspCall(s, 'prostitution_functions', 'payment', 'pav');
  if (((s as any).prostitute ?? 0)?.['cum_dressed'] === 1  ||  ((s as any).prostitute ?? 0)?.['std_mod'] === 1) {
    scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc', 'loc_arg'); } }]);
  } else {
    (s as any).prostitute['pav_search'] = 0;
    (s as any).prostitute['pav_rnd_pity'] = 0;
    scene.actions([{ label: 'Continue', goto: ['prostitution_pavlovsk', 'start'] }]);
  }
  scene.build();
}

function enterSearch(s: GameState, scene: SceneBuilder): void {
  (s as any).pro_rand = Math.floor(Math.random() * 8) + 0;
  if (((s as any).pro_rand ?? 0) > 5) {
    (s as any).pro_rand = ((s as any).pro_rand ?? 0) + (2);
  }
  qspCall(s, 'prostitution_functions', 'pav_client');
  qspCall(s, 'prostitution_functions', 'payment', 'pav');
  qspCall(s, 'stat', '');
  scene.img('images/shared/prostitution/pavlovsk/street/search.mp4');
  // TODO-QSP: 'You can walk around Pavlovsk to look for somebody that''s interested in buying your services. Since...
  if (((s as any).prostitute ?? 0)?.['cum_dressed'] === 1) {
    scene.text('People can see cum on you. You should clean it before searching for a client.');
  }
  if (((s as any).prostitute ?? 0)?.['std_mod'] === 1) {
    scene.text('Customers won\'t approach you as long as you show signs of an STD.');
  }
  if (((s as any).prostitute ?? 0)?.['cum_dressed'] === 0  &&  ((s as any).prostitute ?? 0)?.['std_mod'] === 0) {
    if (((s as any).hour ?? 0) === 23  ||  ((s as any).hour ?? 0) < 7) {
      scene.text('<br>Pavlovsk is a small town and its streets are empty at this hour.');
    } else {
      scene.text('<br>It\'s probably not worthwhile to keep looking for clients. You can try again tomorrow.');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Look for a customer [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Look for a customer', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'prostitution_pavlovsk', 'pav_rnd');
    (s as any).prostitute['pav_rnd'] = ((s as any).prostitute['pav_rnd'] ?? 0) + (100);
    if (Math.floor(Math.random() * 1000) + 1 < ((s as any).min ?? 0)(((s as any).prostitute ?? 0)?.['pav_rnd'], 600)) {
      (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 36) + 5);
      (s as any).prostitute['pav_search'] = 1;
      (s as any).prostitute['pav_rnd_pity'] = 0;
      scene.actions([{ label: 'Continue', goto: ['prostitution_pavlovsk', 'start'] }]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 40;
      qspCall(s, 'stat', '');
      scene.img('images/shared/prostitution/pavlovsk/street/search.mp4');
      scene.text('You walked around Pavlovsk for an hour, but nobody was interested in you.');
      scene.actions([
        { label: 'Continue', goto: ['prostitution_pavlovsk', 'search'] },
      ]);
    }
  } },
        ]);
      }
    }
    if (((s as any).mc_inventory ?? 0)?.['makeup_wipes'] === 0) {
      scene.text('<br>You don\'t have any tissues with you to remove cum from your body.');
    } else {
      scene.actions([
        { label: 'Remove the cum from your body (0:02)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    (s as any).mc_inventory['makeup_wipes'] = ((s as any).mc_inventory['makeup_wipes'] ?? 0) - (1);
    (s as any).cumspclnt = 20;
    qspCall(s, 'cum_cleanup', '');
  }, goto: ['prostitution_pavlovsk', 'search'] },
      ]);
    }
    if (((s as any).mc_inventory ?? 0)?.['joints'] > 0  &&  ((s as any).pro_drugs ?? 0)?.['status'] > 0  &&  ((s as any).pro_drugs ?? 0)?.['timer_pavlovsk'] !== ((s as any).daystart ?? 0)) {
      scene.actions([
        { label: 'Take a break and smoke a joint', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).pro_drugs['timer_pavlovsk'] = ((s as any).daystart ?? 0);
    qspCall(s, 'drugs', 'joint');
    scene.img('images/shared/drugs/joint_smoking.jpg');
    scene.text('You head into a nearby back alley and pull a joint out of your purse and light it up. Not before long you\'re starting to feel the relaxing effects as you\'re getting high.');
    scene.actions([
      { label: 'Go back', goto: ['prostitution_pavlovsk', 'search'] },
    ]);
  } },
      ]);
    }
  }
  scene.actions([
    { label: 'Stop working', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'chance':
      enterChance(s, scene);
      break;
    case 'pav_rnd':
      enterPavRnd(s, scene);
      break;
    case 'rng':
      enterRng(s, scene);
      break;
    case 'search':
      enterSearch(s, scene);
      break;
    default:
      enterChance(s, scene);
      break;
  }
}

export const prostitution_pavlovsk: LocationDef = {
  name: 'prostitution_pavlovsk',
  title: '<br>Content Warning: Ass-to-Mouth',
  region: 'pavlovsk',
  enter: enter,
};
