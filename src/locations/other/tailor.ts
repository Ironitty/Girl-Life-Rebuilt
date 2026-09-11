import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  ((s as any).tailor_funcs ?? {})['clothing_resize_cost'] = qspUntranslated(s, "{", { location: "tailor" });
  // TODO-QSP: dynamic "
  if (((s as any).locArgs?.[0] ?? 0)[((s as any).locArgs?.[1] ?? 0)]) {
    if (((((s as any).locArgs?.[0] ?? 0)((s as any)._b ?? 0)[((s as any).locArgs?.[1] ?? 0)] > ((s as any).pcs_hips ?? 0) + 8)  ||  (((s as any).locArgs?.[0] ?? 0)((s as any)._b ?? 0)[((s as any).locArgs?.[1] ?? 0)] < ((s as any).pcs_hips ?? 0) - 8))) {
      // TODO-QSP: gs 'clothing_attributes', '<<$ARGS[0]>>', <<ARGS[1]>>
      if (((s as any).CloSport ?? 0) === 0  &&  ((s as any).CloStyle ?? 0) !== 5) {
        (s as any).tailor_total_resize_cost = ((s as any).tailor_total_resize_cost ?? 0) + (500);
      }
    }
  }
  // TODO-QSP: "
  ((s as any).tailor_funcs ?? {})['clothing_resize'] = qspUntranslated(s, "{", { location: "tailor" });
  // TODO-QSP: dynamic "
  if (((s as any).locArgs?.[0] ?? 0)[((s as any).locArgs?.[1] ?? 0)]) {
    if (((((s as any).locArgs?.[0] ?? 0)((s as any)._b ?? 0)[((s as any).locArgs?.[1] ?? 0)] > ((s as any).pcs_hips ?? 0) + 8)  ||  (((s as any).locArgs?.[0] ?? 0)((s as any)._b ?? 0)[((s as any).locArgs?.[1] ?? 0)] < ((s as any).pcs_hips ?? 0) - 8))) {
      // TODO-QSP: <<$ARGS[0]>>_b[<<ARGS[1]>>] = pcs_hips
    }
  }
  // TODO-QSP: "
  ((s as any).tailor_funcs ?? {})['clothing_repair_cost'] = qspUntranslated(s, "{", { location: "tailor" });
  // TODO-QSP: dynamic "
  if (((s as any).locArgs?.[0] ?? 0)[((s as any).locArgs?.[1] ?? 0)]) {
    if (((s as any).locArgs?.[0] ?? 0)((s as any)._h ?? 0)[((s as any).locArgs?.[1] ?? 0)] <= 1000) {
      (s as any).tailor_total_repair_cost = ((s as any).tailor_total_repair_cost ?? 0) + (500);
    }
  }
  // TODO-QSP: "
  ((s as any).tailor_funcs ?? {})['clothing_repair'] = qspUntranslated(s, "{", { location: "tailor" });
  // TODO-QSP: dynamic "
  if (((s as any).locArgs?.[0] ?? 0)[((s as any).locArgs?.[1] ?? 0)]) {
    // TODO-QSP: if <<$ARGS[0]>>_h[<<ARGS[1]>>] <= 1000
    // TODO-QSP: gs 'clothing_attributes', '<<$ARGS[0]>>', <<ARGS[1]>>
    // TODO-QSP: <<$ARGS[0]>>_h[<<ARGS[1]>>] = CloMaxStrength / 4
  }
  scene.build();
}

function enterSetTailorActs(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'tailor', 'set_resize_current_act');
  qspCall(s, 'tailor', 'set_resize_other_act');
  qspCall(s, 'tailor', 'set_resize_all_act');
  scene.build();
}

function enterSetResizeCurrentAct(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Resize the clothes you\'re wearing (0:10) [+$func(\'money\', \'get_cost_string\', 500)]', handler: (st: GameState) => {
    if (((s as any).PCloStyle ?? 0) === 5  ||  ((s as any).PCloStyle2 ?? 0) === 6  ||  ((s as any).PCloSport ?? 0) === 1) {
      scene.text('The tailor is looking irritatingly at you, "Why are you wasting my time with exercise clothing? That type of clothing does not need to be resized…"');
    } else {
      if ((0 as any)) {
        scene.text('The tailor is looking irritatingly at you, "Is this a joke? Your clothes could not fit you better if they were made for you. I have no time for such foolishness."');
      } else {
        if ((0 as any)) {
          scene.text('The tailor looks irritatingly at you, "Why are you wasting my time? Your clothing does not need to be resized. It might not be perfect, but it is still fine."');
        } else {
          if (qspFunc(s, 'money', 'can_afford', 500) === 0) {
            s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
          } else {
            (s as any).minut = ((s as any).minut ?? 0) + 10;
            qspCall(s, 'money', 'pay', 500);
            qspCall(s, 'stat', '');
            // TODO-QSP: dynamic '<<$clothingworntype>>_b[<<clothingwornnumber>>] = pcs_hips'
            scene.text('You are handed a t-shirt and shorts as you undress and give the clothes to the tailor for adjustment.');
            scene.text('He quickly measures your waist and hips, then only takes a few minutes to adjust your outfit.');
            scene.text('You are handed your clothes back and quickly get dressed. You\'re pleased with the job that the tailor has done.');
          }
        }
      }
    }
    qspCall(s, 'tailor', 'set_leave_act');
  } },
  ]);
  scene.build();
}

function enterSetResizeOtherAct(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Resize your other clothes', handler: (st: GameState) => {
    // TODO-QSP: gt 'clothing_view', 'view_lists_list', 'resize'
  } },
  ]);
  scene.build();
}

function enterSetResizeAllAct(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'tailor', 'set_resize_cost');
  if ((!((s as any).tailor_total_resize_cost ?? 0))) {
    scene.text('You do not have any clothes that need tailoring currently,');
  } else {
    if (qspFunc(s, 'money', 'can_afford', ((s as any).tailor_total_resize_cost ?? 0)) === 0) {
      // TODO-QSP: dynamic text: You do not have enough money to resize all of your clothing. The total cost woul...
      scene.text(`You do not have enough money to resize all of your clothing. The total cost would be ${qspFunc(s, 'money', 'string_price', ((s as any).tailor_total_resize_cost ?? 0))}.`);
    } else {
      scene.actions([
        { label: 'Resize all your clothes (0:10, <<$func(\'money\', \'string_price\', tailor_total_resize_cost)>>)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'money', 'pay', ((s as any).tailor_total_resize_cost ?? 0));
    // TODO-QSP: dynamic text: You resize all clothing for <<$func('money', 'string_price', tailor_total_resize...
    scene.text(`You resize all clothing for ${qspFunc(s, 'money', 'string_price', ((s as any).tailor_total_resize_cost ?? 0))}.`);
    qspCall(s, 'tailor', 'resize_all');
    qspCall(s, 'tailor', 'set_leave_act');
  } },
      ]);
    }
  }
  scene.build();
}

function enterSetLeaveAct(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterSetResizeCost(s: GameState, scene: SceneBuilder): void {
  (s as any).tailor_total_resize_cost = 0;
  qspCall(s, 'tailor', 'clothing_loop');
  scene.build();
}

function enterResizeAll(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'tailor', 'clothing_loop');
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'set_tailor_acts':
      enterSetTailorActs(s, scene);
      break;
    case 'set_resize_current_act':
      enterSetResizeCurrentAct(s, scene);
      break;
    case 'set_resize_other_act':
      enterSetResizeOtherAct(s, scene);
      break;
    case 'set_resize_all_act':
      enterSetResizeAllAct(s, scene);
      break;
    case 'set_leave_act':
      enterSetLeaveAct(s, scene);
      break;
    case 'set_resize_cost':
      enterSetResizeCost(s, scene);
      break;
    case 'resize_all':
      enterResizeAll(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const tailor: LocationDef = {
  name: 'tailor',
  title: 'You do not have any clothes that need tailoring currently,',
  region: 'other',
  enter: enter,
};
