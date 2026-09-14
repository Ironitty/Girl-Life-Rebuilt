import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterSetWasherActs(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetWashAllAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterSetWashOtherAct(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Wash your other clothes',  },
  ]);
  scene.build();
}

function enterSetWashAllAct(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCheckTotalCost(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).washer_total_wash_cost ?? 0) <= 100) {
    scene.text('You do not have any clothes that need washing currently,');
  } else {
    if (qspFunc(s, 'money', 'can_afford', ((s as any).washer_total_wash_cost ?? 0)) === 0) {
      // TODO-QSP: dynamic text: You do not have enough money to wash all of your clothing. The total cost would ...
      scene.text(`You do not have enough money to wash all of your clothing. The total cost would be ${qspFunc(s, 'money', 'string_price', ((s as any).washer_total_wash_cost || ''))}.`);
    } else {
      (s as any).temp_washer_cost = qspFunc(s, 'money', 'price', ((s as any).washer_total_wash_cost ?? 0));
      // TODO-QSP: dynamic "
      // TODO-QSP: "
      scene.actions([
        { label: 'Wash all your clothes (0:10, <<temp_washer_cost>> <b>₽</b>)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    // TODO-QSP: gs 'money', 'pay', <<washer_total_wash_cost>>
    // TODO-QSP: dynamic text: You wash all clothing for <<temp_washer_cost>> <b>₽</b>.
    scene.text(`You wash all clothing for ${((s as any).temp_washer_cost || '')} <b>₽</b>.`);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWashAll(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  if (!(s as any).washer_funcs) (s as any).washer_funcs = {}; (s as any).washer_funcs['washing_count'] = qspUntranslated(s, "{", { location: "washer" });
  // TODO-QSP: dynamic "
  if (((s as any).locArgs?.[0] ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 1  &&  (((s as any).locArgs?.[0] ?? 0)((s as any)._dirt ?? 0)[((s as any).locArgs?.[1] ?? 0)] >= 480)) {
    (s as any).washer_total_wash_count = ((s as any).washer_total_wash_count ?? 0) + (1);
  }
  // TODO-QSP: "
  if (!(s as any).washer_funcs) (s as any).washer_funcs = {}; (s as any).washer_funcs['washing_cost'] = qspUntranslated(s, "{", { location: "washer" });
  // TODO-QSP: dynamic "
  if (((s as any).locArgs?.[0] ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 1  &&  (((s as any).locArgs?.[0] ?? 0)((s as any)._dirt ?? 0)[((s as any).locArgs?.[1] ?? 0)] >= 480)) {
    (s as any).washer_total_wash_cost = ((s as any).washer_total_wash_cost ?? 0) + (10);
  }
  // TODO-QSP: "
  if (!(s as any).washer_funcs) (s as any).washer_funcs = {}; (s as any).washer_funcs['wash'] = qspUntranslated(s, "{", { location: "washer" });
  // TODO-QSP: dynamic "
  if (((s as any).locArgs?.[0] ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 1) {
    // TODO-QSP: <<$ARGS[0]>>_dirt[<<ARGS[1]>>] = 0
  }
  // TODO-QSP: "
  scene.build();
}

function enterSetResizeCost(s: GameState, scene: SceneBuilder): void {
  (s as any).tailor_total_resize_cost = 0;
  qspCall(s, 'tailor', 'clothing_loop');
  // TODO-QSP: end
  scene.build();
}

function enterResizeAll(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'tailor', 'clothing_loop');
  // TODO-QSP: end
  scene.build();
}

function enterCheckTotalItems(s: GameState, scene: SceneBuilder): void {
  (s as any).washer_total_wash_count = 0;
  if (!(s as any).temp_washerVars) (s as any).temp_washerVars = {}; (s as any).temp_washerVars['array_postfix'] = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterClothingLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (!(s as any).temp_washerVars) (s as any).temp_washerVars = {}; (s as any).temp_washerVars['array_postfix'] = '_bras';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBrasLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (!(s as any).temp_washerVars) (s as any).temp_washerVars = {}; (s as any).temp_washerVars['array_postfix'] = '_panties';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPantiesLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (!(s as any).temp_washerVars) (s as any).temp_washerVars = {}; (s as any).temp_washerVars['array_postfix'] = '_bodysuits';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBodysuitsLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterCheckTotalCost(s: GameState, scene: SceneBuilder): void {
  (s as any).washer_total_wash_cost = 100;
  if (!(s as any).temp_washerVars) (s as any).temp_washerVars = {}; (s as any).temp_washerVars['array_postfix'] = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterClothingLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (!(s as any).temp_washerVars) (s as any).temp_washerVars = {}; (s as any).temp_washerVars['array_postfix'] = '_bras';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBrasLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (!(s as any).temp_washerVars) (s as any).temp_washerVars = {}; (s as any).temp_washerVars['array_postfix'] = '_panties';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPantiesLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (!(s as any).temp_washerVars) (s as any).temp_washerVars = {}; (s as any).temp_washerVars['array_postfix'] = '_bodysuits';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBodysuitsLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterWashAll(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).temp_washerVars) (s as any).temp_washerVars = {}; (s as any).temp_washerVars['array_postfix'] = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterClothingLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (!(s as any).temp_washerVars) (s as any).temp_washerVars = {}; (s as any).temp_washerVars['array_postfix'] = '_bras';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBrasLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (!(s as any).temp_washerVars) (s as any).temp_washerVars = {}; (s as any).temp_washerVars['array_postfix'] = '_panties';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPantiesLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (!(s as any).temp_washerVars) (s as any).temp_washerVars = {}; (s as any).temp_washerVars['array_postfix'] = '_bodysuits';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBodysuitsLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterCoreLoop(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).temp_washerVars) (s as any).temp_washerVars = {}; (s as any).temp_washerVars['j_max'] = 0;
  if (((s as any).temp_washerVars ?? 0)?.['j_max'] === 0) {
    return;
  }
  if (!(s as any).temp_washerVars) (s as any).temp_washerVars = {}; (s as any).temp_washerVars['j'] = 0;
  // TODO-QSP: :core_loop_outer
  if (!(s as any).temp_washerVars) (s as any).temp_washerVars = {}; (s as any).temp_washerVars['type'] = ((s as any).shop_display_types ?? 0)[(((s as any).temp_washerVars ?? {})?.['j'] ?? 0)] + (((s as any).temp_washerVars ?? {})?.['array_postfix'] ?? 0);
  if (((s as any).temp_washerVars ?? 0)?.['type'] !== ((s as any).temp_washerVars ?? 0)?.['array_postfix']) {
    if (!(s as any).temp_washerVars) (s as any).temp_washerVars = {}; (s as any).temp_washerVars['total'] = 0;
    if (!(s as any).temp_washerVars) (s as any).temp_washerVars = {}; (s as any).temp_washerVars['number'] = 1;
    // TODO-QSP: :core_loop_inner
    if (!(s as any).temp_washerVars) (s as any).temp_washerVars = {}; (s as any).temp_washerVars['number'] = ((s as any).temp_washerVars['number'] ?? 0) + (1);
    if (((s as any).temp_washerVars ?? 0)?.['number'] < ((s as any).temp_washerVars ?? 0)?.['total']) {
      // TODO-QSP: jump 'core_loop_inner'
    }
  }
  if (!(s as any).temp_washerVars) (s as any).temp_washerVars = {}; (s as any).temp_washerVars['j'] = ((s as any).temp_washerVars['j'] ?? 0) + (1);
  if (((s as any).temp_washerVars ?? 0)?.['j'] < ((s as any).temp_washerVars ?? 0)?.['j_max']) {
    // TODO-QSP: jump 'core_loop_outer'
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterClothingLoop(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'clothing_view', 'init', 'add_types', 'all');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCoreLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBrasLoop(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'bra_view', 'init', 'add_types', 'all');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCoreLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterPantiesLoop(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'panty_view', 'init', 'add_types', 'all');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCoreLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBodysuitsLoop(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'underwear_bodysuit_view', 'init', 'add_types', 'all');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCoreLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'set_washer_acts':
      enterSetWasherActs(s, scene);
      break;
    case 'set_wash_other_act':
      enterSetWashOtherAct(s, scene);
      break;
    case 'set_wash_all_act':
      enterSetWashAllAct(s, scene);
      break;
    case 'set_resize_cost':
      enterSetResizeCost(s, scene);
      break;
    case 'resize_all':
      enterResizeAll(s, scene);
      break;
    case 'check_total_items':
      enterCheckTotalItems(s, scene);
      break;
    case 'check_total_cost':
      enterCheckTotalCost(s, scene);
      break;
    case 'wash_all':
      enterWashAll(s, scene);
      break;
    case 'core_loop':
      enterCoreLoop(s, scene);
      break;
    case 'clothing_loop':
      enterClothingLoop(s, scene);
      break;
    case 'bras_loop':
      enterBrasLoop(s, scene);
      break;
    case 'panties_loop':
      enterPantiesLoop(s, scene);
      break;
    case 'bodysuits_loop':
      enterBodysuitsLoop(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const washer: LocationDef = {
  name: 'washer',
  title: 'You do not have any clothes that need washing currently,',
  region: 'other',
  enter: enter,
};
