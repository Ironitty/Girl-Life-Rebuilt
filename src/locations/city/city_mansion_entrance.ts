import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).loc_arg = '';
  (s as any).loc = 'city_mansion_entrance';
  (s as any).menu_loc = 'city_mansion_entrance';
  (s as any).menu_arg = '';
  (s as any).region = 'city';
  qspCall(s, 'stat', '');
  (s as any).property_construction_status = qspFunc(s, 'homes_properties', 'get_property_construction_status');
  (s as any).property_owned = qspFunc(s, 'homes_properties', 'is_property_of_status', 'owned', 'matryona_mansion');
  if ((!((s as any).property_construction_status ?? 0))) {
    scene.text('<center><h4>Your Land</h4></center>');
    scene.img('images/locations/city/suburb/mansion/o_empty_field.jpg');
    scene.text('<center>An empty plot of land you own, suitable for building a large residence.</center>');
  } else {
    if (((s as any).property_construction_status ?? 0) === 1) {
      scene.text('<center><h4>Your Mansion</h4></center>');
      scene.img('images/locations/city/suburb/mansion/o_foundation.jpg');
      scene.text('<center>The framework for your mansion stands here. It still needs more work.</center>');
    } else {
      if (((s as any).property_construction_status ?? 0) === 2) {
        scene.text('<center><h4>Matryona Mansion</h4></center>');
        scene.img('images/locations/city/suburb/mansion/matryona_mansion.jpg');
        scene.text('<center>Your fully built mansion stands here. </center>');
      }
    }
  }
  if (qspFunc(s, 'car_funcs', 'is_here')) {
    // TODO-QSP: dynamic text: <a href="exec:gs ''carF'', ''start''">Your <<$car[''name'']>></a> is parked here...
    scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027carF/u0027, /u0027start/u0027); return false;">Your ${((s as any).car ?? 0)?.['name'] ?? ''}</a> is parked here.`);
  }
  if (qspFunc(s, 'homes_properties', 'is_current_home')) {
    if (((s as any).vladimirQW ?? 0)?.['day'] === ((s as any).daystart ?? 0)  &&  ((s as any).vladimirQW ?? 0)?.['stage'] === 30  &&  ((s as any).hour ?? 0) >= 16  &&  ((s as any).week ?? 0) === 6) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027vladimirQW_meet/u0027, /u00272/u0027); return false;">There\'s an Audi parked in front of your mansion, and standing beside it, you notice Vladimir</a>.');
    }
    if (((s as any).vladimirQW ?? 0)?.['day'] === ((s as any).daystart ?? 0)  &&  ((s as any).vladimirQW ?? 0)?.['stage'] === 40  &&  ((s as any).hour ?? 0) >= 16  &&  ((s as any).week ?? 0) === 6) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027vladimirQW_meet/u0027, /u00273/u0027); return false;">There\'s an Audi parked in front of your mansion, and standing beside it, you notice Vladimir</a>.');
    }
    if (Object.keys((s as any).lover ?? {}).length > 0) {
      (s as any).temp_i = 0;
      (s as any).temp_max_i = 0;
      // TODO-QSP: :lover_pickup_loop
      (s as any).temp_npcid = ((s as any).lover ?? 0)?.[String((s as any).temp_i ?? 0)];
      if (((s as any).npc_meetday ?? 0)?.[String((s as any).temp_npcid ?? 0)] === ((s as any).daystart ?? 0)  &&  ((s as any).npc_meethour ?? 0)?.[String((s as any).temp_npcid ?? 0)] === ((s as any).hour ?? 0)) {
        // TODO-QSP: dynamic text: <b><a href="exec: gt ''lover_meet'', ''start'', ''<<$temp_npcid>>''"><<$npc_used...
        scene.text(`<b><a href="#" onclick="window.__gameStore.getState().doGoto(/u0027lover_meet/u0027, /u0027start/u0027, /u0027${((s as any).temp_npcid || '')}/u0027); return false;">${((s as any).npc_usedname ?? 0)?.[String((s as any).temp_npcid ?? 0)] ?? ''}</a> is waiting at the entrance to your mansion.</b>`);
      }
      (s as any).temp_i = ((s as any).temp_i ?? 0) + (1);
      if (((s as any).temp_i ?? 0) < ((s as any).temp_max_i ?? 0)) {
        // TODO-QSP: jump 'lover_pickup_loop'
      }
    }
  }
  if (((s as any).property_owned ?? 0)) {
    if (((s as any).property_construction_status ?? 0) === 2) {
      qspGoto(s, 'city_mansion_residence_1', 'yfoyer');
      scene.actions([
        { label: 'Walk inside the mansion', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 4;
  } },
      ]);
    }
    if ((!((s as any).property_construction_status ?? 0))) {
      scene.actions([
        { label: 'Pay for running utilities and the building foundation', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 500000) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 500000);
      qspCall(st, 'homes_properties', 'progress_construction_status', 'matryona_mansion');
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('You\'ve paid for the utilities. You now have running water, sewage, electric power, and telephone lines. There\'s even a foundation built on the land lot.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
      ]);
    }
  } },
      ]);
    }
    if (((s as any).property_construction_status ?? 0) === 1) {
      scene.actions([
        { label: 'Pay for the finishing touches on the mansion', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 1500000) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 1500000);
      qspCall(st, 'homes_properties', 'progress_construction_status', 'matryona_mansion');
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('You\'ve paid for the construction of the mansion.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
      ]);
    }
  } },
      ]);
    }
    if (((s as any).property_construction_status ?? 0) === 2  &&  ((s as any).ymanrem ?? 0)[3] === 0) {
      scene.actions([
        { label: 'Pay for the construction of the rooms', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 500000) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 500000);
      ((st as any).ymanrem = (st as any).ymanrem ?? {})[3] = 1;
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('You paid for the construction of the rooms. You can finally begin designing the interior of the mansion.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
      ]);
    }
  } },
      ]);
    }
    if (((s as any).property_construction_status ?? 0) > 0) {
      if ((!((s as any).banaMansion ?? 0))) {
        scene.actions([
          { label: 'Pay for the construction of the sauna', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 800000) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 800000);
      (st as any).banaMansion = 1;
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('You paid for the construction of the sauna. You finally have a place where you can relax.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
      ]);
    }
  } },
        ]);
      }
      if ((!((s as any).bassMansion ?? 0))) {
        scene.actions([
          { label: 'Pay for the construction of the pool area', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 500000) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 500000);
      (st as any).bassMansion = 1;
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('You paid for the construction of the pool area. You can finally take relaxing swims in private.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
      ]);
    }
  } },
        ]);
      }
    }
    if (((s as any).property_construction_status ?? 0) === 2) {
      if (((s as any).ymanrem ?? 0)[3] === 1) {
        scene.actions([
          { label: 'Pay for the renovations of the main hall', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 250000) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 250000);
      ((st as any).ymanrem = (st as any).ymanrem ?? {})[3] = 2;
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('The work on the main hall is finished.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
      ]);
    }
  } },
        ]);
      } else {
        if (((s as any).ymanrem ?? 0)[3] === 2) {
          scene.actions([
            { label: 'Decorate the main hall', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 150000) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 150000);
      ((st as any).ymanrem = (st as any).ymanrem ?? {})[3] = 3;
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('The work on the main hall is finished.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
      ]);
    }
  } },
          ]);
        }
      }
      if (((s as any).ymanrem ?? 0)[4] === 0) {
        scene.actions([
          { label: 'Pay for the renovations of the bedroom', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 250000) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 250000);
      ((st as any).ymanrem = (st as any).ymanrem ?? {})[4] = 1;
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('The work on the bedroom is finished.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
      ]);
    }
  } },
        ]);
      } else {
        if (((s as any).ymanrem ?? 0)[4] === 1) {
          scene.actions([
            { label: 'Decorate the bedroom', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 300000) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 300000);
      ((st as any).ymanrem = (st as any).ymanrem ?? {})[4] = 2;
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('The work on the bedroom is finished.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
      ]);
    }
  } },
          ]);
        }
      }
      if (((s as any).ymanrem ?? 0)[5] === 0) {
        scene.actions([
          { label: 'Pay for the renovations of the bathroom', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 250000) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 250000);
      ((st as any).ymanrem = (st as any).ymanrem ?? {})[5] = 1;
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('The work on the bathroom is finished.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
      ]);
    }
  } },
        ]);
      } else {
        if (((s as any).ymanrem ?? 0)[5] === 1) {
          scene.actions([
            { label: 'Decorate the bathroom', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 250000) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 250000);
      ((st as any).ymanrem = (st as any).ymanrem ?? {})[5] = 2;
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('The work on the bathroom is finished.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
      ]);
    }
  } },
          ]);
        }
      }
      if (((s as any).ymanrem ?? 0)[6] === 0) {
        scene.actions([
          { label: 'Pay for the renovations of the kitchen', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 250000) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 250000);
      ((st as any).ymanrem = (st as any).ymanrem ?? {})[6] = 1;
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('The work on the kitchen is finished.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
      ]);
    }
  } },
        ]);
      } else {
        if (((s as any).ymanrem ?? 0)[6] === 1) {
          scene.actions([
            { label: 'Decorate the kitchen', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 250000) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 250000);
      ((st as any).ymanrem = (st as any).ymanrem ?? {})[6] = 2;
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('The work on the kitchen is finished.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
      ]);
    }
  } },
          ]);
        }
      }
      if (((s as any).ymanrem ?? 0)[7] === 0) {
        scene.actions([
          { label: 'Pay for the renovations of the living room', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 250000) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 250000);
      ((st as any).ymanrem = (st as any).ymanrem ?? {})[7] = 1;
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('The work on the living room is finished.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
      ]);
    }
  } },
        ]);
      } else {
        if (((s as any).ymanrem ?? 0)[7] === 1) {
          scene.actions([
            { label: 'Decorate the living room', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 250000) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 250000);
      ((st as any).ymanrem = (st as any).ymanrem ?? {})[7] = 2;
      if (((st as any).mc_inventory ?? 0)?.['plasma_tv'] < 1) {
        ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['plasma_tv'] = 1;
      }
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('The work on the living room is finished.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
      ]);
    }
  } },
          ]);
        }
      }
      if (((s as any).ymanrem ?? 0)[8] === 0) {
        scene.actions([
          { label: 'Pay for the renovations of the fireplace room', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 250000) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 250000);
      ((st as any).ymanrem = (st as any).ymanrem ?? {})[8] = 1;
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('The work on the fireplace room is finished.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
      ]);
    }
  } },
        ]);
      } else {
        if (((s as any).ymanrem ?? 0)[8] === 1) {
          scene.actions([
            { label: 'Decorate the fireplace room', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 250000) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 250000);
      ((st as any).ymanrem = (st as any).ymanrem ?? {})[8] = 2;
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('The work on the fireplace room is finished.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
      ]);
    }
  } },
          ]);
        }
      }
      if (((s as any).ymanrem ?? 0)[9] === 0) {
        scene.actions([
          { label: 'Pay for the renovations of the nursery room', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 250000) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 250000);
      ((st as any).ymanrem = (st as any).ymanrem ?? {})[9] = 1;
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('The work on the nursery is finished.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
      ]);
    }
  } },
        ]);
      } else {
        if (((s as any).ymanrem ?? 0)[9] === 1) {
          scene.actions([
            { label: 'Decorate the nursery', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 250000) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 250000);
      ((st as any).ymanrem = (st as any).ymanrem ?? {})[9] = 2;
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('The work on the nursery is finished.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
      ]);
    }
  } },
          ]);
        }
      }
      if (((s as any).ymanrem ?? 0)[10] === 0) {
        scene.actions([
          { label: 'Pay for the renovations of the library', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 250000) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 250000);
      ((st as any).ymanrem = (st as any).ymanrem ?? {})[10] = 1;
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('The work on the library is finished.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
      ]);
    }
  } },
        ]);
      } else {
        if (((s as any).ymanrem ?? 0)[10] === 1) {
          scene.actions([
            { label: 'Decorate the library', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 250000) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 250000);
      ((st as any).ymanrem = (st as any).ymanrem ?? {})[10] = 2;
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('The work on the library is finished.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
      ]);
    }
  } },
          ]);
        }
      }
      if (((s as any).ymanrem ?? 0)[11] === 0) {
        scene.actions([
          { label: 'Pay for the renovations of the gym', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 250000) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 250000);
      ((st as any).ymanrem = (st as any).ymanrem ?? {})[11] = 1;
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('The work on the gym is finished.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
      ]);
    }
  } },
        ]);
      } else {
        if (((s as any).ymanrem ?? 0)[11] === 1) {
          scene.actions([
            { label: 'Decorate the gym', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 250000) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 250000);
      ((st as any).ymanrem = (st as any).ymanrem ?? {})[11] = 2;
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('The work on the gym is finished.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
      ]);
    }
  } },
          ]);
        }
      }
      if (((s as any).ymanrem ?? 0)[12] === 0) {
        scene.actions([
          { label: 'Pay for the renovations of the office', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 250000) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 250000);
      ((st as any).ymanrem = (st as any).ymanrem ?? {})[12] = 1;
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('The work on the office is finished.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
      ]);
    }
  } },
        ]);
      } else {
        if (((s as any).ymanrem ?? 0)[12] === 1) {
          scene.actions([
            { label: 'Decorate the office', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 250000) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 250000);
      ((st as any).ymanrem = (st as any).ymanrem ?? {})[12] = 2;
      if (((st as any).mc_inventory ?? 0)?.['tech_computer'] < 1) {
        ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['tech_computer'] = 1;
      }
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('The work on the office is finished.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
      ]);
    }
  } },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the suburbs', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspGoto(st, 'city_suburbs', 'start');
  } },
  ]);
  scene.build();
}

export const city_mansion_entrance: LocationDef = {
  name: 'city_mansion_entrance',
  title: '<center><h4>Your Land</h4></center>',
  region: 'city',
  enter: enter,
};
