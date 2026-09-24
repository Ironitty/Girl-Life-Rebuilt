import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterSetTailorActs(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetResizeCurrentAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetResizeOtherAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetResizeAllAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterSetResizeCurrentAct(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Resize the clothes you\'re wearing (0:10)', handler: (st: GameState) => {
    if (((st as any).PCloStyle ?? 0) === 5  ||  ((st as any).PCloStyle2 ?? 0) === 6  ||  ((st as any).PCloSport ?? 0) === 1) {
      scene.text('The tailor is looking irritatingly at you, "Why are you wasting my time with exercise clothing? That type of clothing does not need to be resized…"');
    } else {
      if ((0 as any)) {
        scene.text('The tailor is looking irritatingly at you, "Is this a joke? Your clothes could not fit you better if they were made for you. I have no time for such foolishness."');
      } else {
        if ((0 as any)) {
          scene.text('The tailor looks irritatingly at you, "Why are you wasting my time? Your clothing does not need to be resized. It might not be perfect, but it is still fine."');
        } else {
          if (qspFunc(s, 'money', 'can_afford', 500) === 0) {
            s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
          } else {
            (st as any).minut = ((st as any).minut ?? 0) + 10;
            qspCall(st, 'money', 'pay', 500);
            qspCall(st, 'stat', '');
            // TODO-QSP: dynamic '<<$clothingworntype>>_b[<<clothingwornnumber>>] = pcs_hips'
            scene.text('You are handed a t-shirt and shorts as you undress and give the clothes to the tailor for adjustment.');
            scene.text('He quickly measures your waist and hips, then only takes a few minutes to adjust your outfit.');
            scene.text('You are handed your clothes back and quickly get dressed. You\'re pleased with the job that the tailor has done.');
          }
        }
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetLeaveAct(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterSetResizeOtherAct(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Resize your other clothes', handler: (st: GameState) => {
    qspGoto(st, 'clothing_view', 'view_lists_list', 'resize');
  } },
  ]);
  scene.build();
}

function enterSetResizeAllAct(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetResizeCost(s, scene); (s as any).locArgs = __savedLocArgs; }
  if ((!((s as any).tailor_total_resize_cost ?? 0))) {
    scene.text('You do not have any clothes that need tailoring currently,');
  } else {
    if (qspFunc(s, 'money', 'can_afford', ((s as any).tailor_total_resize_cost ?? 0)) === 0) {
      // TODO-QSP: dynamic text: You do not have enough money to resize all of your clothing. The total cost woul...
      scene.text(`You do not have enough money to resize all of your clothing. The total cost would be ${qspFunc(s, 'money', 'string_price', ((s as any).tailor_total_resize_cost ?? ''))}.`);
    } else {
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Resize all your clothes (0:10, ' + String(qspFunc(s, 'money', 'string_price', ((s as any).tailor_total_resize_cost ?? '')) ?? '') + ')', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'money', 'pay', ((st as any).tailor_total_resize_cost ?? 0));
    // TODO-QSP: dynamic text: You resize all clothing for <<$func(''money'', ''string_price'', tailor_total_re...
    scene.text(`You resize all clothing for ${qspFunc(s, 'money', 'string_price', ((st as any).tailor_total_resize_cost ?? ''))}.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterResizeAll(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetLeaveAct(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSetLeaveAct(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  ((s as any).tailor_funcs = (s as any).tailor_funcs ?? {})['clothing_resize_cost'] = qspUntranslated(s, "{", { location: "tailor" });
  // TODO-QSP: dynamic "
  if (String((s as any).locArgs?.[0] ?? '')?.[String((s as any).locArgs?.[1] ?? '')]) {
    if (((String((s as any).locArgs?.[0] ?? '')((s as any)._b ?? 0)[String((s as any).locArgs?.[1] ?? '')] > ((s as any).pcs_hips ?? 0) + 8)  ||  (String((s as any).locArgs?.[0] ?? '')((s as any)._b ?? 0)[String((s as any).locArgs?.[1] ?? '')] < ((s as any).pcs_hips ?? 0) - 8))) {
      qspCall(s, 'clothing_attributes', '' + ((s as any).locArgs?.[0] ?? 0) + '', ((s as any).locArgs?.[1] ?? 0));
      if (((s as any).CloSport ?? 0) === 0  &&  ((s as any).CloStyle ?? 0) !== 5) {
        (s as any).tailor_total_resize_cost = ((s as any).tailor_total_resize_cost ?? 0) + (500);
      }
    }
  }
  // TODO-QSP: "
  ((s as any).tailor_funcs = (s as any).tailor_funcs ?? {})['clothing_resize'] = qspUntranslated(s, "{", { location: "tailor" });
  // TODO-QSP: dynamic "
  if (String((s as any).locArgs?.[0] ?? '')?.[String((s as any).locArgs?.[1] ?? '')]) {
    if (((String((s as any).locArgs?.[0] ?? '')((s as any)._b ?? 0)[String((s as any).locArgs?.[1] ?? '')] > ((s as any).pcs_hips ?? 0) + 8)  ||  (String((s as any).locArgs?.[0] ?? '')((s as any)._b ?? 0)[String((s as any).locArgs?.[1] ?? '')] < ((s as any).pcs_hips ?? 0) - 8))) {
      // TODO-QSP: <<$ARGS[0]>>_b[<<ARGS[1]>>] = pcs_hips
    }
  }
  // TODO-QSP: "
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterSetResizeCost(s: GameState, scene: SceneBuilder): void {
  (s as any).tailor_total_resize_cost = 0;
  (s as any).loop_func = (((s as any).tailor_funcs ?? 0)?.['clothing_resize_cost']);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterClothingLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterResizeAll(s: GameState, scene: SceneBuilder): void {
  (s as any).loop_func = (((s as any).tailor_funcs ?? 0)?.['clothing_resize']);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterClothingLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  ((s as any).tailor_funcs = (s as any).tailor_funcs ?? {})['clothing_repair_cost'] = qspUntranslated(s, "{", { location: "tailor" });
  // TODO-QSP: dynamic "
  if (String((s as any).locArgs?.[0] ?? '')?.[String((s as any).locArgs?.[1] ?? '')]) {
    if (String((s as any).locArgs?.[0] ?? '')((s as any)._h ?? 0)[String((s as any).locArgs?.[1] ?? '')] <= 1000) {
      (s as any).tailor_total_repair_cost = ((s as any).tailor_total_repair_cost ?? 0) + (500);
    }
  }
  // TODO-QSP: "
  ((s as any).tailor_funcs = (s as any).tailor_funcs ?? {})['clothing_repair'] = qspUntranslated(s, "{", { location: "tailor" });
  // TODO-QSP: dynamic "
  if (String((s as any).locArgs?.[0] ?? '')?.[String((s as any).locArgs?.[1] ?? '')]) {
    // TODO-QSP: if <<$ARGS[0]>>_h[<<ARGS[1]>>] <= 1000
    qspCall(s, 'clothing_attributes', '' + ((s as any).locArgs?.[0] ?? 0) + '', ((s as any).locArgs?.[1] ?? 0));
    // TODO-QSP: <<$ARGS[0]>>_h[<<ARGS[1]>>] = CloMaxStrength / 4
  }
  // TODO-QSP: end
  // TODO-QSP: "
  ((s as any).tailor_funcs = (s as any).tailor_funcs ?? {})['clothing_cheat_repair'] = qspUntranslated(s, "{", { location: "tailor" });
  // TODO-QSP: dynamic "
  if (String((s as any).locArgs?.[0] ?? '')?.[String((s as any).locArgs?.[1] ?? '')]) {
    qspCall(s, 'clothing_attributes', '' + ((s as any).locArgs?.[0] ?? 0) + '', ((s as any).locArgs?.[1] ?? 0));
    // TODO-QSP: <<$ARGS[0]>>_h[<<ARGS[1]>>] = CloMaxStrength
  }
  // TODO-QSP: "
  ((s as any).tailor_funcs = (s as any).tailor_funcs ?? {})['bra_repair_cost'] = qspUntranslated(s, "{", { location: "tailor" });
  // TODO-QSP: dynamic "
  if (String((s as any).locArgs?.[0] ?? '')((s as any)._bras ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
    if (String((s as any).locArgs?.[0] ?? '')((s as any)._bras_h ?? 0)[String((s as any).locArgs?.[1] ?? '')] <= 1000) {
      (s as any).tailor_total_repair_cost = ((s as any).tailor_total_repair_cost ?? 0) + (250);
    }
  }
  // TODO-QSP: "
  ((s as any).tailor_funcs = (s as any).tailor_funcs ?? {})['bra_repair'] = qspUntranslated(s, "{", { location: "tailor" });
  // TODO-QSP: dynamic "
  if (String((s as any).locArgs?.[0] ?? '')((s as any)._bras ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
    // TODO-QSP: if <<$ARGS[0]>>_bras_h[<<ARGS[1]>>] <= 1000
    qspCall(s, 'underwear_attributes', '' + ((s as any).locArgs?.[0] ?? 0) + '_bras', ((s as any).locArgs?.[1] ?? 0));
    // TODO-QSP: <<$ARGS[0]>>_bras_h[<<ARGS[1]>>] = BraMaxStrength / 4
  }
  // TODO-QSP: end
  // TODO-QSP: "
  ((s as any).tailor_funcs = (s as any).tailor_funcs ?? {})['bra_cheat_repair'] = qspUntranslated(s, "{", { location: "tailor" });
  // TODO-QSP: dynamic "
  if (String((s as any).locArgs?.[0] ?? '')((s as any)._bras ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
    qspCall(s, 'underwear_attributes', '' + ((s as any).locArgs?.[0] ?? 0) + '_bras', ((s as any).locArgs?.[1] ?? 0));
    // TODO-QSP: <<$ARGS[0]>>_bras_h[<<ARGS[1]>>] = BraMaxStrength
  }
  // TODO-QSP: "
  ((s as any).tailor_funcs = (s as any).tailor_funcs ?? {})['panty_repair_cost'] = qspUntranslated(s, "{", { location: "tailor" });
  // TODO-QSP: dynamic "
  if (String((s as any).locArgs?.[0] ?? '')((s as any)._panties ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
    if (String((s as any).locArgs?.[0] ?? '')((s as any)._panties_h ?? 0)[String((s as any).locArgs?.[1] ?? '')] <= 1000) {
      (s as any).tailor_total_repair_cost = ((s as any).tailor_total_repair_cost ?? 0) + (250);
    }
  }
  // TODO-QSP: "
  ((s as any).tailor_funcs = (s as any).tailor_funcs ?? {})['panty_repair'] = qspUntranslated(s, "{", { location: "tailor" });
  // TODO-QSP: dynamic "
  if (String((s as any).locArgs?.[0] ?? '')((s as any)._panties ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
    if (String((s as any).locArgs?.[0] ?? '')((s as any)._panties_h ?? 0)[String((s as any).locArgs?.[1] ?? '')] <= 1000) {
      qspCall(s, 'underwear_attributes', '' + ((s as any).locArgs?.[0] ?? 0) + '_panties', ((s as any).locArgs?.[1] ?? 0));
      // TODO-QSP: <<$ARGS[0]>>_panties_h[<<ARGS[1]>>] = PanMaxStrength / 4
    }
  }
  // TODO-QSP: "
  ((s as any).tailor_funcs = (s as any).tailor_funcs ?? {})['panty_cheat_repair'] = qspUntranslated(s, "{", { location: "tailor" });
  // TODO-QSP: dynamic "
  if (String((s as any).locArgs?.[0] ?? '')((s as any)._panties ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
    qspCall(s, 'underwear_attributes', '' + ((s as any).locArgs?.[0] ?? 0) + '_panties', ((s as any).locArgs?.[1] ?? 0));
    // TODO-QSP: <<$ARGS[0]>>_panties_h[<<ARGS[1]>>] = PanMaxStrength
  }
  // TODO-QSP: "
  ((s as any).tailor_funcs = (s as any).tailor_funcs ?? {})['bodysuit_repair_cost'] = qspUntranslated(s, "{", { location: "tailor" });
  // TODO-QSP: dynamic "
  if (String((s as any).locArgs?.[0] ?? '')((s as any)._bodysuits ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
    if (String((s as any).locArgs?.[0] ?? '')((s as any)._bodysuits_h ?? 0)[String((s as any).locArgs?.[1] ?? '')] <= 1000) {
      (s as any).tailor_total_repair_cost = ((s as any).tailor_total_repair_cost ?? 0) + (350);
    }
  }
  // TODO-QSP: "
  ((s as any).tailor_funcs = (s as any).tailor_funcs ?? {})['bodysuit_repair'] = qspUntranslated(s, "{", { location: "tailor" });
  // TODO-QSP: dynamic "
  if (String((s as any).locArgs?.[0] ?? '')((s as any)._bodysuits ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
    if (String((s as any).locArgs?.[0] ?? '')((s as any)._bodysuits_h ?? 0)[String((s as any).locArgs?.[1] ?? '')] <= 1000) {
      qspCall(s, 'underwear_attributes', '' + ((s as any).locArgs?.[0] ?? 0) + '_bodysuits', ((s as any).locArgs?.[1] ?? 0));
      // TODO-QSP: <<$ARGS[0]>>_bodysuits_h[<<ARGS[1]>>] = BraMaxStrength / 4
    }
  }
  // TODO-QSP: "
  ((s as any).tailor_funcs = (s as any).tailor_funcs ?? {})['bodysuit_cheat_repair'] = qspUntranslated(s, "{", { location: "tailor" });
  // TODO-QSP: dynamic "
  if (String((s as any).locArgs?.[0] ?? '')((s as any)._bodysuits ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
    qspCall(s, 'underwear_attributes', '' + ((s as any).locArgs?.[0] ?? 0) + '_bodysuits', ((s as any).locArgs?.[1] ?? 0));
    // TODO-QSP: <<$ARGS[0]>>_bodysuits_h[<<ARGS[1]>>] = BraMaxStrength
  }
  // TODO-QSP: "
  ((s as any).tailor_funcs = (s as any).tailor_funcs ?? {})['coat_repair_cost'] = qspUntranslated(s, "{", { location: "tailor" });
  // TODO-QSP: dynamic "
  if (String((s as any).locArgs?.[0] ?? '')((s as any)._coats ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
    if (String((s as any).locArgs?.[0] ?? '')((s as any)._coats_h ?? 0)[String((s as any).locArgs?.[1] ?? '')] <= 1000) {
      (s as any).tailor_total_repair_cost = ((s as any).tailor_total_repair_cost ?? 0) + (500);
    }
  }
  // TODO-QSP: "
  ((s as any).tailor_funcs = (s as any).tailor_funcs ?? {})['coat_repair'] = qspUntranslated(s, "{", { location: "tailor" });
  // TODO-QSP: dynamic "
  if (String((s as any).locArgs?.[0] ?? '')((s as any)._coats ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
    if (String((s as any).locArgs?.[0] ?? '')((s as any)._coats_h ?? 0)[String((s as any).locArgs?.[1] ?? '')] <= 1000) {
      qspCall(s, 'coat_attributes', '' + ((s as any).locArgs?.[0] ?? 0) + '', ((s as any).locArgs?.[1] ?? 0));
      // TODO-QSP: <<$ARGS[0]>>_coats_h[<<ARGS[1]>>] = CoatMaxStrength / 4
    }
  }
  // TODO-QSP: "
  ((s as any).tailor_funcs = (s as any).tailor_funcs ?? {})['coat_cheat_repair'] = qspUntranslated(s, "{", { location: "tailor" });
  // TODO-QSP: dynamic "
  if (String((s as any).locArgs?.[0] ?? '')((s as any)._coats ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
    qspCall(s, 'coat_attributes', '' + ((s as any).locArgs?.[0] ?? 0) + '', ((s as any).locArgs?.[1] ?? 0));
    // TODO-QSP: <<$ARGS[0]>>_coats_h[<<ARGS[1]>>] = CoatMaxStrength
  }
  // TODO-QSP: "
  ((s as any).tailor_funcs = (s as any).tailor_funcs ?? {})['shoe_repair_cost'] = qspUntranslated(s, "{", { location: "tailor" });
  // TODO-QSP: dynamic "
  if (String((s as any).locArgs?.[0] ?? '')((s as any)._shoe ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
    if (String((s as any).locArgs?.[0] ?? '')((s as any)._shoe_h ?? 0)[String((s as any).locArgs?.[1] ?? '')] <= 1000) {
      (s as any).tailor_total_repair_cost = ((s as any).tailor_total_repair_cost ?? 0) + (500);
    }
  }
  // TODO-QSP: "
  ((s as any).tailor_funcs = (s as any).tailor_funcs ?? {})['shoe_repair'] = qspUntranslated(s, "{", { location: "tailor" });
  // TODO-QSP: dynamic "
  if (String((s as any).locArgs?.[0] ?? '')((s as any)._shoe ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
    if (String((s as any).locArgs?.[0] ?? '')((s as any)._shoe_h ?? 0)[String((s as any).locArgs?.[1] ?? '')] <= 1000) {
      qspCall(s, 'shoe_attributes', '' + ((s as any).locArgs?.[0] ?? 0) + '', ((s as any).locArgs?.[1] ?? 0));
      // TODO-QSP: <<$ARGS[0]>>_shoe_h[<<ARGS[1]>>] = ShoMaxStrength / 4
    }
  }
  // TODO-QSP: "
  ((s as any).tailor_funcs = (s as any).tailor_funcs ?? {})['shoe_cheat_repair'] = qspUntranslated(s, "{", { location: "tailor" });
  // TODO-QSP: dynamic "
  if (String((s as any).locArgs?.[0] ?? '')((s as any)._shoe ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
    qspCall(s, 'shoe_attributes', '' + ((s as any).locArgs?.[0] ?? 0) + '', ((s as any).locArgs?.[1] ?? 0));
    // TODO-QSP: <<$ARGS[0]>>_shoe_h[<<ARGS[1]>>] = ShoMaxStrength
  }
  // TODO-QSP: "
  scene.build();
}

function enterSetRepairCost(s: GameState, scene: SceneBuilder): void {
  (s as any).tailor_total_repair_cost = 0;
  (s as any).loop_func = (((s as any).tailor_funcs ?? 0)?.['clothing_repair_cost']);
  ((s as any).temp_tailorVars = (s as any).temp_tailorVars ?? {})['array_postfix'] = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterClothingLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).loop_func = (((s as any).tailor_funcs ?? 0)?.['bra_repair_cost']);
  ((s as any).temp_tailorVars = (s as any).temp_tailorVars ?? {})['array_postfix'] = '_bras';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBrasLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).loop_func = (((s as any).tailor_funcs ?? 0)?.['panty_repair_cost']);
  ((s as any).temp_tailorVars = (s as any).temp_tailorVars ?? {})['array_postfix'] = '_panties';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPantiesLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).loop_func = (((s as any).tailor_funcs ?? 0)?.['bodysuit_repair_cost']);
  ((s as any).temp_tailorVars = (s as any).temp_tailorVars ?? {})['array_postfix'] = '_bodysuits';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBodysuitsLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).loop_func = (((s as any).tailor_funcs ?? 0)?.['coat_repair_cost']);
  ((s as any).temp_tailorVars = (s as any).temp_tailorVars ?? {})['array_postfix'] = '_coats';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCoatsLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).loop_func = (((s as any).tailor_funcs ?? 0)?.['shoe_repair_cost']);
  ((s as any).temp_tailorVars = (s as any).temp_tailorVars ?? {})['array_postfix'] = '_shoe';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShoesLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterRepairAll(s: GameState, scene: SceneBuilder): void {
  (s as any).loop_func = (((s as any).tailor_funcs ?? 0)?.['clothing_repair']);
  ((s as any).temp_tailorVars = (s as any).temp_tailorVars ?? {})['array_postfix'] = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterClothingLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).loop_func = (((s as any).tailor_funcs ?? 0)?.['bra_repair']);
  ((s as any).temp_tailorVars = (s as any).temp_tailorVars ?? {})['array_postfix'] = '_bras';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBrasLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).loop_func = (((s as any).tailor_funcs ?? 0)?.['panty_repair']);
  ((s as any).temp_tailorVars = (s as any).temp_tailorVars ?? {})['array_postfix'] = '_panties';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPantiesLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).loop_func = (((s as any).tailor_funcs ?? 0)?.['bodysuit_repair']);
  ((s as any).temp_tailorVars = (s as any).temp_tailorVars ?? {})['array_postfix'] = '_bodysuits';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBodysuitsLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).loop_func = (((s as any).tailor_funcs ?? 0)?.['coat_repair']);
  ((s as any).temp_tailorVars = (s as any).temp_tailorVars ?? {})['array_postfix'] = '_coats';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCoatsLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).loop_func = (((s as any).tailor_funcs ?? 0)?.['shoe_repair']);
  ((s as any).temp_tailorVars = (s as any).temp_tailorVars ?? {})['array_postfix'] = '_shoe';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShoesLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterRepairAllCheat(s: GameState, scene: SceneBuilder): void {
  (s as any).loop_func = (((s as any).tailor_funcs ?? 0)?.['clothing_cheat_repair']);
  ((s as any).temp_tailorVars = (s as any).temp_tailorVars ?? {})['array_postfix'] = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterClothingLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).loop_func = (((s as any).tailor_funcs ?? 0)?.['bra_cheat_repair']);
  ((s as any).temp_tailorVars = (s as any).temp_tailorVars ?? {})['array_postfix'] = '_bras';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBrasLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).loop_func = (((s as any).tailor_funcs ?? 0)?.['panty_cheat_repair']);
  ((s as any).temp_tailorVars = (s as any).temp_tailorVars ?? {})['array_postfix'] = '_panties';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPantiesLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).loop_func = (((s as any).tailor_funcs ?? 0)?.['bodysuit_cheat_repair']);
  ((s as any).temp_tailorVars = (s as any).temp_tailorVars ?? {})['array_postfix'] = '_bodysuits';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBodysuitsLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).loop_func = (((s as any).tailor_funcs ?? 0)?.['coat_cheat_repair']);
  ((s as any).temp_tailorVars = (s as any).temp_tailorVars ?? {})['array_postfix'] = '_coats';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCoatsLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).loop_func = (((s as any).tailor_funcs ?? 0)?.['shoe_cheat_repair']);
  ((s as any).temp_tailorVars = (s as any).temp_tailorVars ?? {})['array_postfix'] = '_shoe';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShoesLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterCoreLoop(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_tailorVars = (s as any).temp_tailorVars ?? {})['j_max'] = 0;
  if (((s as any).temp_tailorVars ?? 0)?.['j_max'] === 0) {
    return;
  }
  ((s as any).temp_tailorVars = (s as any).temp_tailorVars ?? {})['j'] = 0;
  // TODO-QSP: :core_loop_outer
  ((s as any).temp_tailorVars = (s as any).temp_tailorVars ?? {})['type'] = qspUntranslated(s, "shop_display_types[temp_tailorVars['j']]", { location: "tailor" });
  if (((s as any).temp_tailorVars ?? 0)?.['type'] !== '') {
    ((s as any).temp_tailorVars = (s as any).temp_tailorVars ?? {})['total'] = 0;
    ((s as any).temp_tailorVars = (s as any).temp_tailorVars ?? {})['number'] = 1;
    // TODO-QSP: :core_loop_inner
    ((s as any).temp_tailorVars = (s as any).temp_tailorVars ?? {})['number'] = ((s as any).temp_tailorVars['number'] ?? 0) + (1);
    if (((s as any).temp_tailorVars ?? 0)?.['number'] < ((s as any).temp_tailorVars ?? 0)?.['total']) {
      // TODO-QSP: jump 'core_loop_inner'
    }
  }
  ((s as any).temp_tailorVars = (s as any).temp_tailorVars ?? {})['j'] = ((s as any).temp_tailorVars['j'] ?? 0) + (1);
  if (((s as any).temp_tailorVars ?? 0)?.['j'] < ((s as any).temp_tailorVars ?? 0)?.['j_max']) {
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

function enterShoesLoop(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'shoe_view', 'init', 'add_types', 'all');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCoreLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCoatsLoop(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'coat_view', 'init', 'add_types', 'all');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCoreLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
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
    case 'set_repair_cost':
      enterSetRepairCost(s, scene);
      break;
    case 'repair_all':
      enterRepairAll(s, scene);
      break;
    case 'repair_all_cheat':
      enterRepairAllCheat(s, scene);
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
    case 'shoes_loop':
      enterShoesLoop(s, scene);
      break;
    case 'coats_loop':
      enterCoatsLoop(s, scene);
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
