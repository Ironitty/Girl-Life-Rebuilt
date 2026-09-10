import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).property_construction_status = qspFunc(s, 'homes_properties', 'get_property_construction_status');
  (s as any).property_owned = qspFunc(s, 'homes_properties', 'is_property_of_status', 'owned', 'matryona_mansion');
  if (((s as any).property_construction_status ?? 0) === 0) {
    scene.text('<center><h4>Your Land</h4></center>');
    scene.img('images/locations/city/suburb/mansion/o_empty_field.jpg');
    scene.text('<center>An empty plot of land you own, suitable for building a large residence.</center>');
  } else {
    scene.text('<center><h4>Your Mansion</h4></center>');
    scene.img('images/locations/city/suburb/mansion/o_foundation.jpg');
    scene.text('<center>The framework for your mansion stands here. It still needs more work.</center>');
    if (((s as any).property_construction_status ?? 0) === 2) {
      scene.text('<center><h4>Matryona Mansion</h4></center>');
      scene.img('images/locations/city/suburb/mansion/matryona_mansion.jpg');
      scene.text('<center>Your fully built mansion stands here. </center>');
    }
    if (qspFunc(s, 'car_funcs', 'is_here')) {
      // TODO-QSP: dynamic text: <a href="exec:gs 'carF', 'start'">Your <<$car['name']>></a> is parked here.
      scene.text(`<a href="exec:gs 'carF', 'start'">Your ${((s as any).car ?? 0)?.['name']}</a> is parked here.`);
    }
    if (qspFunc(s, 'homes_properties', 'is_current_home')) {
      if (((s as any).vladimirQW ?? 0)?.['day'] === ((s as any).daystart ?? 0)  &&  ((s as any).vladimirQW ?? 0)?.['stage'] === 30  &&  ((s as any).hour ?? 0) >= 16  &&  ((s as any).week ?? 0) === 6) {
        scene.text('<a href="exec:gt \'vladimirQW_meet\',\'2\'">There\'s an Audi parked in front of your mansion, and standing beside it, you notice Vladimir</a>.');
      }
      if (((s as any).vladimirQW ?? 0)?.['day'] === ((s as any).daystart ?? 0)  &&  ((s as any).vladimirQW ?? 0)?.['stage'] === 40  &&  ((s as any).hour ?? 0) >= 16  &&  ((s as any).week ?? 0) === 6) {
        scene.text('<a href="exec:gt \'vladimirQW_meet\',\'3\'">There\'s an Audi parked in front of your mansion, and standing beside it, you notice Vladimir</a>.');
      }
      if (((s as any).arrsize ?? 0)('lover') > 0) {
        (s as any).temp_i = 0;
        (s as any).temp_max_i = 0;
        // TODO-QSP: :lover_pickup_loop
        if (((s as any).npc_meetday ?? 0)?.[String((s as any).temp_npcid ?? 0)] === ((s as any).daystart ?? 0)  &&  ((s as any).npc_meethour ?? 0)?.[String((s as any).temp_npcid ?? 0)] === ((s as any).hour ?? 0)) {
          // TODO-QSP: dynamic text: <b><a href="exec: gt 'lover_meet', 'start', '<<$temp_npcid>>'"><<$npc_usedname[$...
          scene.text(`<b><a href="exec: gt 'lover_meet', 'start', '${((s as any).temp_npcid ?? 0)}'">${((s as any).npc_usedname ?? 0)?.[String((s as any).temp_npcid ?? 0)]}</a> is waiting at the entrance to your mansion.</b>`);
        }
        (s as any).temp_i = ((s as any).temp_i ?? 0) + (1);
        if (((s as any).temp_i ?? 0) < ((s as any).temp_max_i ?? 0)) {
          // TODO-QSP: jump 'lover_pickup_loop'
        }
      }
    }
    if (((s as any).property_owned ?? 0)) {
      if (((s as any).property_construction_status ?? 0) === 2) {
        // TODO-QSP: act 'Walk inside the mansion': minut += 4
        scene.actions([{ label: 'Continue', goto: ['city_mansion_residence_1', 'yfoyer'] }]);
      }
      if (((s as any).property_construction_status ?? 0) === 0) {
        if (qspFunc(s, 'money', 'can_afford', 500000) === 0) {
          s.scene = { ...s.scene, mainText: String((s as any).noMoney ?? ''), curActs: [] };
        } else {
          qspCall(s, 'money', 'pay', 500000);
          qspCall(s, 'homes_properties', 'progress_construction_status', 'matryona_mansion');
          (s as any).minut = ((s as any).minut ?? 0) + 5;
          qspCall(s, 'stat', '');
          scene.text('You\'ve paid for the utilities. You now have running water, sewage, electric power, and telephone lines. There\'s even a foundation built on the land lot.');
          scene.actions([
            { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
          ]);
        }
        scene.actions([
          { label: 'Pay for running utilities and the building foundation [+$func(\'money\', \'get_cost_string\', 500000...]' }, // TODO-QSP: empty action body
        ]);
      }
    }
    if (((s as any).property_construction_status ?? 0) === 1) {
      if (qspFunc(s, 'money', 'can_afford', 1500000) === 0) {
        s.scene = { ...s.scene, mainText: String((s as any).noMoney ?? ''), curActs: [] };
      } else {
        qspCall(s, 'money', 'pay', 1500000);
        qspCall(s, 'homes_properties', 'progress_construction_status', 'matryona_mansion');
        (s as any).minut = ((s as any).minut ?? 0) + 5;
        qspCall(s, 'stat', '');
        scene.text('You\'ve paid for the construction of the mansion.');
        scene.actions([
          { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
        ]);
      }
      scene.actions([
        { label: 'Pay for the finishing touches on the mansion [+$func(\'money\', \'get_cost_string\', 150000...]' }, // TODO-QSP: empty action body
      ]);
    }
    scene.actions([
      { label: 'Go to the suburbs', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
  }, goto: ['city_suburbs', 'start'] },
    ]);
  }
  if (((s as any).property_construction_status ?? 0) === 2  &&  ((s as any).ymanrem ?? 0)[3] === 0) {
    if (qspFunc(s, 'money', 'can_afford', 500000) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney ?? ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 500000);
      (s as any).ymanrem[3] = 1;
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'stat', '');
      scene.text('You paid for the construction of the rooms. You can finally begin designing the interior of the mansion.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
      ]);
    }
    scene.actions([
      { label: 'Pay for the construction of the rooms [+$func(\'money\', \'get_cost_string\', 500000...]' }, // TODO-QSP: empty action body
    ]);
  }
  scene.build();
}

export const city_mansion_entrance: LocationDef = {
  name: 'city_mansion_entrance',
  title: '<center><h4>Your Land</h4></center>',
  region: 'city',
  enter: enter,
};
