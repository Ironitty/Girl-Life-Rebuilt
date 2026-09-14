import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

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
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetLeaveAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterSetResizeOtherAct(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Resize your other clothes', handler: (st: GameState) => {
    scene.actions([{ label: 'Continue', goto: ['clothing_view', 'view_lists_list', '\'resize\''] }]);
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
      scene.text(`You do not have enough money to resize all of your clothing. The total cost would be ${qspFunc(s, 'money', 'string_price', ((s as any).tailor_total_resize_cost || ''))}.`);
    } else {
      scene.actions([
        { label: 'Resize all your clothes (0:10, <<$func(\'money\', \'string_price\', tailor_total_resize_cost)>>)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'money', 'pay', ((s as any).tailor_total_resize_cost ?? 0));
    // TODO-QSP: dynamic text: You resize all clothing for <<$func('money', 'string_price', tailor_total_resize...
    scene.text(`You resize all clothing for ${qspFunc(s, 'money', 'string_price', ((s as any).tailor_total_resize_cost || ''))}.`);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterResizeAll(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetLeaveAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSetLeaveAct(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  if (!(s as any).tailor_funcs) (s as any).tailor_funcs = {}; (s as any).tailor_funcs['clothing_resize_cost'] = qspUntranslated(s, "{", { location: "tailor" });
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
  if (!(s as any).tailor_funcs) (s as any).tailor_funcs = {}; (s as any).tailor_funcs['clothing_resize'] = qspUntranslated(s, "{", { location: "tailor" });
  // TODO-QSP: dynamic "
  if (((s as any).locArgs?.[0] ?? 0)[((s as any).locArgs?.[1] ?? 0)]) {
    if (((((s as any).locArgs?.[0] ?? 0)((s as any)._b ?? 0)[((s as any).locArgs?.[1] ?? 0)] > ((s as any).pcs_hips ?? 0) + 8)  ||  (((s as any).locArgs?.[0] ?? 0)((s as any)._b ?? 0)[((s as any).locArgs?.[1] ?? 0)] < ((s as any).pcs_hips ?? 0) - 8))) {
      // TODO-QSP: <<$ARGS[0]>>_b[<<ARGS[1]>>] = pcs_hips
    }
  }
  // TODO-QSP: "
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterSetResizeCost(s: GameState, scene: SceneBuilder): void {
  (s as any).tailor_total_resize_cost = 0;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterClothingLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterResizeAll(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterClothingLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  if (!(s as any).tailor_funcs) (s as any).tailor_funcs = {}; (s as any).tailor_funcs['clothing_repair_cost'] = qspUntranslated(s, "{", { location: "tailor" });
  // TODO-QSP: dynamic "
  if (((s as any).locArgs?.[0] ?? 0)[((s as any).locArgs?.[1] ?? 0)]) {
    if (((s as any).locArgs?.[0] ?? 0)((s as any)._h ?? 0)[((s as any).locArgs?.[1] ?? 0)] <= 1000) {
      (s as any).tailor_total_repair_cost = ((s as any).tailor_total_repair_cost ?? 0) + (500);
    }
  }
  // TODO-QSP: "
  if (!(s as any).tailor_funcs) (s as any).tailor_funcs = {}; (s as any).tailor_funcs['clothing_repair'] = qspUntranslated(s, "{", { location: "tailor" });
  // TODO-QSP: dynamic "
  if (((s as any).locArgs?.[0] ?? 0)[((s as any).locArgs?.[1] ?? 0)]) {
    // TODO-QSP: if <<$ARGS[0]>>_h[<<ARGS[1]>>] <= 1000
    // TODO-QSP: gs 'clothing_attributes', '<<$ARGS[0]>>', <<ARGS[1]>>
    // TODO-QSP: <<$ARGS[0]>>_h[<<ARGS[1]>>] = CloMaxStrength / 4
  }
  // TODO-QSP: end
  // TODO-QSP: "
  if (!(s as any).tailor_funcs) (s as any).tailor_funcs = {}; (s as any).tailor_funcs['clothing_cheat_repair'] = qspUntranslated(s, "{", { location: "tailor" });
  // TODO-QSP: dynamic "
  if (((s as any).locArgs?.[0] ?? 0)[((s as any).locArgs?.[1] ?? 0)]) {
    // TODO-QSP: gs 'clothing_attributes', '<<$ARGS[0]>>', <<ARGS[1]>>
    // TODO-QSP: <<$ARGS[0]>>_h[<<ARGS[1]>>] = CloMaxStrength
  }
  // TODO-QSP: "
  if (!(s as any).tailor_funcs) (s as any).tailor_funcs = {}; (s as any).tailor_funcs['bra_repair_cost'] = qspUntranslated(s, "{", { location: "tailor" });
  // TODO-QSP: dynamic "
  if (((s as any).locArgs?.[0] ?? 0)((s as any)._bras ?? 0)[((s as any).locArgs?.[1] ?? 0)]) {
    if (((s as any).locArgs?.[0] ?? 0)((s as any)._bras_h ?? 0)[((s as any).locArgs?.[1] ?? 0)] <= 1000) {
      (s as any).tailor_total_repair_cost = ((s as any).tailor_total_repair_cost ?? 0) + (250);
    }
  }
  // TODO-QSP: "
  if (!(s as any).tailor_funcs) (s as any).tailor_funcs = {}; (s as any).tailor_funcs['bra_repair'] = qspUntranslated(s, "{", { location: "tailor" });
  // TODO-QSP: dynamic "
  if (((s as any).locArgs?.[0] ?? 0)((s as any)._bras ?? 0)[((s as any).locArgs?.[1] ?? 0)]) {
    // TODO-QSP: if <<$ARGS[0]>>_bras_h[<<ARGS[1]>>] <= 1000
    // TODO-QSP: gs 'underwear_attributes', '<<$ARGS[0]>>_bras', <<ARGS[1]>>
    // TODO-QSP: <<$ARGS[0]>>_bras_h[<<ARGS[1]>>] = BraMaxStrength / 4
  }
  // TODO-QSP: end
  // TODO-QSP: "
  if (!(s as any).tailor_funcs) (s as any).tailor_funcs = {}; (s as any).tailor_funcs['bra_cheat_repair'] = qspUntranslated(s, "{", { location: "tailor" });
  // TODO-QSP: dynamic "
  if (((s as any).locArgs?.[0] ?? 0)((s as any)._bras ?? 0)[((s as any).locArgs?.[1] ?? 0)]) {
    // TODO-QSP: gs 'underwear_attributes', '<<$ARGS[0]>>_bras', <<ARGS[1]>>
    // TODO-QSP: <<$ARGS[0]>>_bras_h[<<ARGS[1]>>] = BraMaxStrength
  }
  // TODO-QSP: "
  if (!(s as any).tailor_funcs) (s as any).tailor_funcs = {}; (s as any).tailor_funcs['panty_repair_cost'] = qspUntranslated(s, "{", { location: "tailor" });
  // TODO-QSP: dynamic "
  if (((s as any).locArgs?.[0] ?? 0)((s as any)._panties ?? 0)[((s as any).locArgs?.[1] ?? 0)]) {
    if (((s as any).locArgs?.[0] ?? 0)((s as any)._panties_h ?? 0)[((s as any).locArgs?.[1] ?? 0)] <= 1000) {
      (s as any).tailor_total_repair_cost = ((s as any).tailor_total_repair_cost ?? 0) + (250);
    }
  }
  // TODO-QSP: "
  if (!(s as any).tailor_funcs) (s as any).tailor_funcs = {}; (s as any).tailor_funcs['panty_repair'] = qspUntranslated(s, "{", { location: "tailor" });
  // TODO-QSP: dynamic "
  if (((s as any).locArgs?.[0] ?? 0)((s as any)._panties ?? 0)[((s as any).locArgs?.[1] ?? 0)]) {
    if (((s as any).locArgs?.[0] ?? 0)((s as any)._panties_h ?? 0)[((s as any).locArgs?.[1] ?? 0)] <= 1000) {
      // TODO-QSP: gs 'underwear_attributes', '<<$ARGS[0]>>_panties', <<ARGS[1]>>
      // TODO-QSP: <<$ARGS[0]>>_panties_h[<<ARGS[1]>>] = PanMaxStrength / 4
    }
  }
  // TODO-QSP: "
  if (!(s as any).tailor_funcs) (s as any).tailor_funcs = {}; (s as any).tailor_funcs['panty_cheat_repair'] = qspUntranslated(s, "{", { location: "tailor" });
  // TODO-QSP: dynamic "
  if (((s as any).locArgs?.[0] ?? 0)((s as any)._panties ?? 0)[((s as any).locArgs?.[1] ?? 0)]) {
    // TODO-QSP: gs 'underwear_attributes', '<<$ARGS[0]>>_panties', <<ARGS[1]>>
    // TODO-QSP: <<$ARGS[0]>>_panties_h[<<ARGS[1]>>] = PanMaxStrength
  }
  // TODO-QSP: "
  if (!(s as any).tailor_funcs) (s as any).tailor_funcs = {}; (s as any).tailor_funcs['bodysuit_repair_cost'] = qspUntranslated(s, "{", { location: "tailor" });
  // TODO-QSP: dynamic "
  if (((s as any).locArgs?.[0] ?? 0)((s as any)._bodysuits ?? 0)[((s as any).locArgs?.[1] ?? 0)]) {
    if (((s as any).locArgs?.[0] ?? 0)((s as any)._bodysuits_h ?? 0)[((s as any).locArgs?.[1] ?? 0)] <= 1000) {
      (s as any).tailor_total_repair_cost = ((s as any).tailor_total_repair_cost ?? 0) + (350);
    }
  }
  // TODO-QSP: "
  if (!(s as any).tailor_funcs) (s as any).tailor_funcs = {}; (s as any).tailor_funcs['bodysuit_repair'] = qspUntranslated(s, "{", { location: "tailor" });
  // TODO-QSP: dynamic "
  if (((s as any).locArgs?.[0] ?? 0)((s as any)._bodysuits ?? 0)[((s as any).locArgs?.[1] ?? 0)]) {
    if (((s as any).locArgs?.[0] ?? 0)((s as any)._bodysuits_h ?? 0)[((s as any).locArgs?.[1] ?? 0)] <= 1000) {
      // TODO-QSP: gs 'underwear_attributes', '<<$ARGS[0]>>_bodysuits', <<ARGS[1]>>
      // TODO-QSP: <<$ARGS[0]>>_bodysuits_h[<<ARGS[1]>>] = BraMaxStrength / 4
    }
  }
  // TODO-QSP: "
  if (!(s as any).tailor_funcs) (s as any).tailor_funcs = {}; (s as any).tailor_funcs['bodysuit_cheat_repair'] = qspUntranslated(s, "{", { location: "tailor" });
  // TODO-QSP: dynamic "
  if (((s as any).locArgs?.[0] ?? 0)((s as any)._bodysuits ?? 0)[((s as any).locArgs?.[1] ?? 0)]) {
    // TODO-QSP: gs 'underwear_attributes', '<<$ARGS[0]>>_bodysuits', <<ARGS[1]>>
    // TODO-QSP: <<$ARGS[0]>>_bodysuits_h[<<ARGS[1]>>] = BraMaxStrength
  }
  // TODO-QSP: "
  if (!(s as any).tailor_funcs) (s as any).tailor_funcs = {}; (s as any).tailor_funcs['coat_repair_cost'] = qspUntranslated(s, "{", { location: "tailor" });
  // TODO-QSP: dynamic "
  if (((s as any).locArgs?.[0] ?? 0)((s as any)._coats ?? 0)[((s as any).locArgs?.[1] ?? 0)]) {
    if (((s as any).locArgs?.[0] ?? 0)((s as any)._coats_h ?? 0)[((s as any).locArgs?.[1] ?? 0)] <= 1000) {
      (s as any).tailor_total_repair_cost = ((s as any).tailor_total_repair_cost ?? 0) + (500);
    }
  }
  // TODO-QSP: "
  if (!(s as any).tailor_funcs) (s as any).tailor_funcs = {}; (s as any).tailor_funcs['coat_repair'] = qspUntranslated(s, "{", { location: "tailor" });
  // TODO-QSP: dynamic "
  if (((s as any).locArgs?.[0] ?? 0)((s as any)._coats ?? 0)[((s as any).locArgs?.[1] ?? 0)]) {
    if (((s as any).locArgs?.[0] ?? 0)((s as any)._coats_h ?? 0)[((s as any).locArgs?.[1] ?? 0)] <= 1000) {
      // TODO-QSP: gs 'coat_attributes', '<<$ARGS[0]>>', <<ARGS[1]>>
      // TODO-QSP: <<$ARGS[0]>>_coats_h[<<ARGS[1]>>] = CoatMaxStrength / 4
    }
  }
  // TODO-QSP: "
  if (!(s as any).tailor_funcs) (s as any).tailor_funcs = {}; (s as any).tailor_funcs['coat_cheat_repair'] = qspUntranslated(s, "{", { location: "tailor" });
  // TODO-QSP: dynamic "
  if (((s as any).locArgs?.[0] ?? 0)((s as any)._coats ?? 0)[((s as any).locArgs?.[1] ?? 0)]) {
    // TODO-QSP: gs 'coat_attributes', '<<$ARGS[0]>>', <<ARGS[1]>>
    // TODO-QSP: <<$ARGS[0]>>_coats_h[<<ARGS[1]>>] = CoatMaxStrength
  }
  // TODO-QSP: "
  if (!(s as any).tailor_funcs) (s as any).tailor_funcs = {}; (s as any).tailor_funcs['shoe_repair_cost'] = qspUntranslated(s, "{", { location: "tailor" });
  // TODO-QSP: dynamic "
  if (((s as any).locArgs?.[0] ?? 0)((s as any)._shoe ?? 0)[((s as any).locArgs?.[1] ?? 0)]) {
    if (((s as any).locArgs?.[0] ?? 0)((s as any)._shoe_h ?? 0)[((s as any).locArgs?.[1] ?? 0)] <= 1000) {
      (s as any).tailor_total_repair_cost = ((s as any).tailor_total_repair_cost ?? 0) + (500);
    }
  }
  // TODO-QSP: "
  if (!(s as any).tailor_funcs) (s as any).tailor_funcs = {}; (s as any).tailor_funcs['shoe_repair'] = qspUntranslated(s, "{", { location: "tailor" });
  // TODO-QSP: dynamic "
  if (((s as any).locArgs?.[0] ?? 0)((s as any)._shoe ?? 0)[((s as any).locArgs?.[1] ?? 0)]) {
    if (((s as any).locArgs?.[0] ?? 0)((s as any)._shoe_h ?? 0)[((s as any).locArgs?.[1] ?? 0)] <= 1000) {
      // TODO-QSP: gs 'shoe_attributes', '<<$ARGS[0]>>', <<ARGS[1]>>
      // TODO-QSP: <<$ARGS[0]>>_shoe_h[<<ARGS[1]>>] = ShoMaxStrength / 4
    }
  }
  // TODO-QSP: "
  if (!(s as any).tailor_funcs) (s as any).tailor_funcs = {}; (s as any).tailor_funcs['shoe_cheat_repair'] = qspUntranslated(s, "{", { location: "tailor" });
  // TODO-QSP: dynamic "
  if (((s as any).locArgs?.[0] ?? 0)((s as any)._shoe ?? 0)[((s as any).locArgs?.[1] ?? 0)]) {
    // TODO-QSP: gs 'shoe_attributes', '<<$ARGS[0]>>', <<ARGS[1]>>
    // TODO-QSP: <<$ARGS[0]>>_shoe_h[<<ARGS[1]>>] = ShoMaxStrength
  }
  // TODO-QSP: "
  scene.build();
}

function enterSetRepairCost(s: GameState, scene: SceneBuilder): void {
  (s as any).tailor_total_repair_cost = 0;
  if (!(s as any).temp_tailorVars) (s as any).temp_tailorVars = {}; (s as any).temp_tailorVars['array_postfix'] = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterClothingLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (!(s as any).temp_tailorVars) (s as any).temp_tailorVars = {}; (s as any).temp_tailorVars['array_postfix'] = '_bras';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBrasLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (!(s as any).temp_tailorVars) (s as any).temp_tailorVars = {}; (s as any).temp_tailorVars['array_postfix'] = '_panties';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPantiesLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (!(s as any).temp_tailorVars) (s as any).temp_tailorVars = {}; (s as any).temp_tailorVars['array_postfix'] = '_bodysuits';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBodysuitsLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (!(s as any).temp_tailorVars) (s as any).temp_tailorVars = {}; (s as any).temp_tailorVars['array_postfix'] = '_coats';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCoatsLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (!(s as any).temp_tailorVars) (s as any).temp_tailorVars = {}; (s as any).temp_tailorVars['array_postfix'] = '_shoe';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShoesLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterRepairAll(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).temp_tailorVars) (s as any).temp_tailorVars = {}; (s as any).temp_tailorVars['array_postfix'] = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterClothingLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (!(s as any).temp_tailorVars) (s as any).temp_tailorVars = {}; (s as any).temp_tailorVars['array_postfix'] = '_bras';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBrasLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (!(s as any).temp_tailorVars) (s as any).temp_tailorVars = {}; (s as any).temp_tailorVars['array_postfix'] = '_panties';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPantiesLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (!(s as any).temp_tailorVars) (s as any).temp_tailorVars = {}; (s as any).temp_tailorVars['array_postfix'] = '_bodysuits';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBodysuitsLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (!(s as any).temp_tailorVars) (s as any).temp_tailorVars = {}; (s as any).temp_tailorVars['array_postfix'] = '_coats';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCoatsLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (!(s as any).temp_tailorVars) (s as any).temp_tailorVars = {}; (s as any).temp_tailorVars['array_postfix'] = '_shoe';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShoesLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterRepairAllCheat(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).temp_tailorVars) (s as any).temp_tailorVars = {}; (s as any).temp_tailorVars['array_postfix'] = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterClothingLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (!(s as any).temp_tailorVars) (s as any).temp_tailorVars = {}; (s as any).temp_tailorVars['array_postfix'] = '_bras';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBrasLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (!(s as any).temp_tailorVars) (s as any).temp_tailorVars = {}; (s as any).temp_tailorVars['array_postfix'] = '_panties';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPantiesLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (!(s as any).temp_tailorVars) (s as any).temp_tailorVars = {}; (s as any).temp_tailorVars['array_postfix'] = '_bodysuits';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBodysuitsLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (!(s as any).temp_tailorVars) (s as any).temp_tailorVars = {}; (s as any).temp_tailorVars['array_postfix'] = '_coats';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCoatsLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (!(s as any).temp_tailorVars) (s as any).temp_tailorVars = {}; (s as any).temp_tailorVars['array_postfix'] = '_shoe';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShoesLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterCoreLoop(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).temp_tailorVars) (s as any).temp_tailorVars = {}; (s as any).temp_tailorVars['j_max'] = 0;
  if (((s as any).temp_tailorVars ?? 0)?.['j_max'] === 0) {
    return;
  }
  if (!(s as any).temp_tailorVars) (s as any).temp_tailorVars = {}; (s as any).temp_tailorVars['j'] = 0;
  // TODO-QSP: :core_loop_outer
  if (!(s as any).temp_tailorVars) (s as any).temp_tailorVars = {}; (s as any).temp_tailorVars['type'] = qspUntranslated(s, "shop_display_types[temp_tailorVars['j']]", { location: "tailor" });
  if (((s as any).temp_tailorVars ?? 0)?.['type'] !== '') {
    if (!(s as any).temp_tailorVars) (s as any).temp_tailorVars = {}; (s as any).temp_tailorVars['total'] = 0;
    if (!(s as any).temp_tailorVars) (s as any).temp_tailorVars = {}; (s as any).temp_tailorVars['number'] = 1;
    // TODO-QSP: :core_loop_inner
    if (!(s as any).temp_tailorVars) (s as any).temp_tailorVars = {}; (s as any).temp_tailorVars['number'] = ((s as any).temp_tailorVars['number'] ?? 0) + (1);
    if (((s as any).temp_tailorVars ?? 0)?.['number'] < ((s as any).temp_tailorVars ?? 0)?.['total']) {
      // TODO-QSP: jump 'core_loop_inner'
    }
  }
  if (!(s as any).temp_tailorVars) (s as any).temp_tailorVars = {}; (s as any).temp_tailorVars['j'] = ((s as any).temp_tailorVars['j'] ?? 0) + (1);
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
