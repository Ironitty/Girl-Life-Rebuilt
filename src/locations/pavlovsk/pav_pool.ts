import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[0] ?? 0) === 'building'  ||  ((s as any).locArgs?.[0] ?? 0) === '') {
    qspCall(s, 'core_library', 'setloc', 'pav_pool', 'building');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/swim/entrance.jpg');
    if (((s as any).hour ?? 0) >= 21  ||  ((s as any).hour ?? 0) < 8) {
      // TODO-QSP: dynamic text: The swimming pool is currently closed. Opening hours are from '+func('time', 'ge...
      scene.text('The swimming pool is currently closed. Opening hours are from \'+func(\'time\', \'get_time_string\', 8, 0)+\' to \'+func(\'time\', \'get_time_string\', 21, 0)+\'.');
      return;
    }
    scene.text('Pavlovsk\'s public swimming pool is rather dated, but still serves it\'s purpose quite well.');
    // TODO-QSP: dynamic text: The entrance fee is <<$func('money', 'string_price', 100)>> for the full day, bu...
    scene.text(`The entrance fee is ${qspFunc(s, 'money', 'string_price', 100)} for the full day, but students get a discount and it only costs them ${qspFunc(s, 'money', 'string_price', 60)}.`);
    if (((s as any).job_status ?? 0)?.['pav_pool_lifeguard'] !== 'employed') {
      (s as any).pav_swimpool['entrancefee'] = (((s as any).gschoolVars ?? 0)?.['school_diploma'] <= 0) ? (60) : (100);
    }
    if (((s as any).job_status ?? 0)?.['pav_pool_lifeguard'] !== 'employed'  &&  (((s as any).job_hiring_step ?? 0)?.['pav_pool_lifeguard'] === 1  &&  ((s as any).week ?? 0) === 6  ||  ((s as any).job_hiring_step ?? 0)?.['pav_pool_lifeguard'] === 2  &&  ((s as any).week ?? 0) === 7)) {
      if (((s as any).hour ?? 0) === 8) {
        scene.text('You enter the building and are greeted by the chief lifeguard, who immediately shows you to the staff locker room.');
        return;
        scene.actions([
          { label: 'Continue', goto: ['pav_pool_lifeguard', 'training'] },
        ]);
      } else {
        // TODO-QSP: dynamic text: You were supposed to show up for lifeguard training today at ' + $func('time', '...
        scene.text('You were supposed to show up for lifeguard training today at \' + $func(\'time\', \'get_time_string\', 8, 0) + \'!');
      }
    } else {
      if (((s as any).hour ?? 0) === 11) {
        scene.text('The crowds are starting to queue up to enter as you head inside and make your way to the staff locker room to get ready for your shift.');
        return;
        scene.actions([
          { label: 'Wait for your shift to start (<<iif(minut=0, \'1:00\', \'0:<<60-minut>>\')>>)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + ((60 - ((s as any).minut ?? 0)));
  }, goto: ['pav_pool_lifeguard', 'start_shift'] },
        ]);
      } else {
        scene.text('The crowds have already arrived as you hurry inside and head to the staff locker room to get ready for your shift. You hope nobody will mind that you\'re late.');
        return;
        if (((s as any).hour ?? 0) > 12) {
          // TODO-QSP: dynamic text: You missed your lifeguard shift! You should have been here by ' + $func('time', ...
          scene.text('You missed your lifeguard shift! You should have been here by \' + $func(\'time\', \'get_time_string\', 12, 0) + \'!');
        }
        scene.actions([
          { label: 'Go to work', goto: ['pav_pool_lifeguard', 'start_shift'] },
        ]);
      }
      if (((s as any).job_status ?? 0)?.['pav_pool_lifeguard'] === 'employed') {
        scene.text('Since you work here, you\'ve been granted free entry on your days off.');
        scene.actions([
          { label: 'Enter', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['pav_pool', 'entrance'] },
        ]);
      } else {
        scene.text('<b>You\'ve already paid the fee, so you can enter.</b>');
        scene.actions([
          { label: 'Enter', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['pav_pool', 'entrance'] },
          { label: 'Pay and enter [+$func(\'money\', \'get_cost_string\', pav_sw...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', qspUntranslated(s, "\u00000\u0000", { location: "pav_pool" })) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney ?? ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 2;
      // TODO-QSP: gs 'money', 'pay', pav_swimpool['entrancefee']
      (s as any).pav_swimpool['entrancepaid'] = ((s as any).daystart ?? 0);
      qspCall(s, 'stat', '');
      scene.actions([{ label: 'Continue', goto: ['pav_pool', 'entrance'] }]);
    }
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  }
  scene.build();
}

export const pav_pool: LocationDef = {
  name: 'pav_pool',
  title: '<br>You need to change out of your swimwear if you want to leave!',
  region: 'pavlovsk',
  locationType: 'public_indoors',
  description: ['Pavlovsk\'s public swimming pool is rather dated, but still serves it\'s purpose quite well.'],
  enter: enter,
};
