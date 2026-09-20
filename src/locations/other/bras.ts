import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGetTotal(s: GameState, scene: SceneBuilder): void {
  if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'cats') {
    (s as any).result = 41;
  } else {
    if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(10))) === 'danilovich') {
      (s as any).result = 8;
    } else {
      if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'eroto') {
        (s as any).result = 27;
      } else {
        if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(11))) === 'fashionista') {
          (s as any).result = 42;
        } else {
          if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(2))) === 'gm') {
            (s as any).result = 19;
          } else {
            if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'lusso') {
              (s as any).result = 33;
            } else {
              if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(9))) === 'salacious') {
                (s as any).result = 37;
              }
            }
          }
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterTotals(s: GameState, scene: SceneBuilder): void {
  (s as any).total = qspFunc(s, 'bras', 'get_total', ((s as any).locArgs?.[1] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSum(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'bras', 'sum_inner', 'lusso'));
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'bras', 'sum_inner', 'cats'));
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'bras', 'sum_inner', 'salacious'));
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'bras', 'sum_inner', 'fashionista'));
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'bras', 'sum_inner', 'gm'));
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'bras', 'sum_inner', 'eroto'));
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'bras', 'sum_inner', 'danilovich'));
  if (Number((s as any).locArgs?.[1] ?? 0) === 'dresser') {
    if (((s as any).braworntype ?? 0) !== 'none'  &&  ((s as any).result ?? 0) > 0) {
      (s as any).result = ((s as any).result ?? 0) - (1);
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSumInner(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  (s as any).bras_i = 1;
  (s as any).bras_max_i = 0;
  // TODO-QSP: :loopsumbras
  if (qspFunc(s, 'bras', 'in_wardrobe', ((s as any).locArgs?.[1] ?? 0), ((s as any).bras_i ?? 0))) {
    (s as any).result = ((s as any).result ?? 0) + (1);
  }
  (s as any).bras_i = ((s as any).bras_i ?? 0) + (1);
  if (((s as any).bras_i ?? 0) < ((s as any).bras_max_i ?? 0)) {
    // TODO-QSP: jump 'loopsumbras'
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterNotWearReason(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).braworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).brawornnumber ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 3) {
    // TODO-QSP: gs 'underwear_attributes', $ARGS[1] + '_bras', ARGS[2]
  }
  (s as any).result = '';
  if (qspFunc(s, 'bras', 'is_immutable', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'bras', 'is_owned', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0)) === 0) {
    (s as any).result = 'not_owned';
    return;
  }
  if (qspFunc(s, 'bras', 'in_wardrobe', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0)) === 0) {
    (s as any).result = 'not_in_wardrobe';
    return;
  }
  if (qspFunc(s, 'bras', 'is_strength_low', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
    (s as any).result = 'low_strength';
    return;
  }
  if (qspFunc(s, 'bras', 'is_hypno_approved', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0)) === 0) {
    (s as any).result = 'hypno';
    return;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCanWear(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).braworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).brawornnumber ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 3) {
    // TODO-QSP: gs 'underwear_attributes', $ARGS[1] + '_bras', ARGS[2]
  }
  (s as any).result = (qspFunc(s, 'bras', 'not_wear_reason', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), 'attributes_set') === '');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsOwned(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).braworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).brawornnumber ?? 0);
  }
  (s as any).result = 0;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterInWardrobe(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).braworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).brawornnumber ?? 0);
  }
  (s as any).result = 0;
  if (qspFunc(s, 'bras', 'is_owned', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
    (s as any).result = 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterInStorage(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).braworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).brawornnumber ?? 0);
  }
  (s as any).result = 0;
  if (qspFunc(s, 'bras', 'is_owned', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
    (s as any).result = 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterInUnwanted(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).braworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).brawornnumber ?? 0);
  }
  (s as any).result = 0;
  if (qspFunc(s, 'bras', 'is_owned', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
    (s as any).result = 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsStrengthLow(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).braworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).brawornnumber ?? 0);
  }
  (s as any).result = 0;
  if (qspFunc(s, 'bras', 'is_owned', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
    (s as any).result = 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsHypnoApproved(s: GameState, scene: SceneBuilder): void {
  (s as any).result = ((!((s as any).hypnoBra ?? 0)));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsWearingAny(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).braworntype ?? 0) !== ''  &&  ((s as any).braworntype ?? 0) !== 'none');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsWearing(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).braworntype ?? 0) === Number((s as any).locArgs?.[1] ?? 0)  &&  ((s as any).brawornnumber ?? 0) === Number((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsImmutable(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).braworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).brawornnumber ?? 0);
  }
  (s as any).result = (Number((s as any).locArgs?.[1] ?? 0) === 'gm'  &&  Number((s as any).locArgs?.[2] ?? 0) === 1);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBraOwned(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).braworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).brawornnumber ?? 0);
  }
  (s as any).result = qspFunc(s, 'bras', 'is_owned', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIcons(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, '$shop_icon_image', '', ((s as any).locArgs?.[1] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterAddItem(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === '') {
    // TODO-QSP: exit
  }
  if (Number((s as any).locArgs?.[2] ?? 0) === 0) {
    // TODO-QSP: exit
  }
  // TODO-QSP: gs 'underwear_attributes', $ARGS[1] + '_bras', ARGS[2]
  if ((!((s as any).BraQuality ?? 0))) {
    // TODO-QSP: exit
  }
  // TODO-QSP: dynamic "
  // TODO-QSP: <<$ARGS[1]>>_bras[<<ARGS[2]>>] = 1
  // TODO-QSP: <<$ARGS[1]>>_brasS[<<ARGS[2]>>] = 0
  // TODO-QSP: <<$ARGS[1]>>_bras_dirt[<<ARGS[2]>>] = 0
  // TODO-QSP: <<$ARGS[1]>>_bras_h[<<ARGS[2]>>] = BraStrength
  // TODO-QSP: "
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRemoveItem(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).braworntype ?? 0);
  }
  if (Number((s as any).locArgs?.[2] ?? 0) === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).brawornnumber ?? 0);
  }
  if (Number((s as any).locArgs?.[1] ?? 0) === ''  ||  Number((s as any).locArgs?.[1] ?? 0) === 'none') {
    // TODO-QSP: exit
  }
  if (Number((s as any).locArgs?.[1] ?? 0) === 'gm'  &&  Number((s as any).locArgs?.[2] ?? 0) === 1) {
    if (Number((s as any).locArgs?.[1] ?? 0) === ((s as any).braworntype ?? 0)  &&  Number((s as any).locArgs?.[2] ?? 0) === ((s as any).brawornnumber ?? 0)) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStrip(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    return;
  }
  // TODO-QSP: dynamic "
  // TODO-QSP: <<$ARGS[1]>>_bras[<<ARGS[2]>>] = 0
  // TODO-QSP: <<$ARGS[1]>>_brasS[<<ARGS[2]>>] = 0
  // TODO-QSP: <<$ARGS[1]>>_bras_dirt[<<ARGS[2]>>] = 0
  // TODO-QSP: <<$ARGS[1]>>_bras_h[<<ARGS[2]>>] = 0
  // TODO-QSP: "
  if (Number((s as any).locArgs?.[1] ?? 0) === ((s as any).braworntype ?? 0)  &&  Number((s as any).locArgs?.[2] ?? 0) === ((s as any).brawornnumber ?? 0)) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStripCode(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspCall(s, 'outfit', 'set_derived_vars');
    (s as any).lastwornbratype = 'none';
    (s as any).lastwornbranumber = 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterResetImmutables(s: GameState, scene: SceneBuilder): void {
  ((s as any).gm_bras = (s as any).gm_bras ?? {})[1] = 1;
  ((s as any).gm_brasS = (s as any).gm_brasS ?? {})[1] = 0;
  ((s as any).gm_bras_dirt = (s as any).gm_bras_dirt ?? {})[1] = 1440;
  ((s as any).gm_bras_h = (s as any).gm_bras_h ?? {})[1] = 10;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDispose(s: GameState, scene: SceneBuilder): void {
  if (((s as any).underwear ?? 0)?.['type'] === 2) {
    qspCall(s, 'underwear_bodysuits', 'dispose');
    return;
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).braworntype ?? 0), ((s as any).brawornnumber ?? 0)]; enterRemoveItem(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterMoveToWardrobe(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).braworntype ?? 0);
  }
  if (Number((s as any).locArgs?.[2] ?? 0) === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).brawornnumber ?? 0);
  }
  if (qspFunc(s, 'bras', 'is_owned', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
    // TODO-QSP: dynamic "<<$ARGS[1]>>_brasS[<<ARGS[2]>>] = 0"
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterMoveToStorage(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).braworntype ?? 0);
  }
  if (Number((s as any).locArgs?.[2] ?? 0) === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).brawornnumber ?? 0);
  }
  if (qspFunc(s, 'bras', 'is_owned', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
    // TODO-QSP: dynamic "<<$ARGS[1]>>_brasS[<<ARGS[2]>>] = 1"
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterMoveToUnwanted(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).braworntype ?? 0);
  }
  if (Number((s as any).locArgs?.[2] ?? 0) === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).brawornnumber ?? 0);
  }
  if (qspFunc(s, 'bras', 'is_owned', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
    // TODO-QSP: dynamic "<<$ARGS[1]>>_brasS[<<ARGS[2]>>] = 2"
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRemove(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStrip(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterStrip(s: GameState, scene: SceneBuilder): void {
  if (((s as any).underwear ?? 0)?.['type'] === 2) {
    qspCall(s, 'underwear_bodysuits', 'strip');
    return;
  }
  if (((s as any).braworntype ?? 0) === '') {
    (s as any).braworntype = 'none';
    (s as any).brawornnumber = 0;
  }
  (s as any).lastwornbratype = ((s as any).braworntype ?? 0);
  (s as any).lastwornbranumber = ((s as any).brawornnumber ?? 0);
  (s as any).lastwornunderwear = 0;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStripCode(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterStripCode(s: GameState, scene: SceneBuilder): void {
  (s as any).braworntype = 'none';
  (s as any).bodysuitworntype = 'none';
  (s as any).brawornnumber = 0;
  (s as any).bodysuitwornnumber = 0;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterReset_BraVars(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterReset_PBraVars(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'outfit', 'set_derived_vars');
  // TODO-QSP: end
  scene.build();
}

function enterReset_BraVars(s: GameState, scene: SceneBuilder): void {
  (s as any).BraMaterial = 0;
  (s as any).BraType = 0;
  (s as any).BraFun = 0;
  (s as any).BraQuality = 0;
  (s as any).BraThinness = 0;
  (s as any).BraCover = 4;
  (s as any).BraSport = 0;
  (s as any).BraPrice = 0;
  (s as any).BraDirt = 0;
  (s as any).BraStrength = 0;
  (s as any).BraMaxStrength = 0;
  ((s as any).underwear = (s as any).underwear ?? {})['pair'] = 0;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterReset_PBraVars(s: GameState, scene: SceneBuilder): void {
  (s as any).PBraMaterial = 0;
  (s as any).PBraType = 0;
  (s as any).PBraFun = 0;
  (s as any).PBraQuality = 0;
  (s as any).PBraThinness = 0;
  (s as any).PBraCover = 4;
  (s as any).PBraSport = 0;
  (s as any).PBraPrice = 0;
  (s as any).PBraDirt = 0;
  (s as any).PBraStrength = 0;
  (s as any).PBraMaxStrength = 0;
  (s as any).PBraBorrowed = 0;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterWear(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === ''  ||  Number((s as any).locArgs?.[1] ?? 0) === 'last_worn') {
    if (((s as any).lastwornunderwear ?? 0) === 2) {
      qspCall(s, 'underwear_bodysuits', 'wear', 'last_worn');
      return;
    }
    // TODO-QSP: $ARGS[1] = $lastwornbratype
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).lastwornbranumber ?? 0);
  }
  if (Number((s as any).locArgs?.[1] ?? 0) === ''  ||  Number((s as any).locArgs?.[1] ?? 0) === 'none') {
    // TODO-QSP: exit
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStrip(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: gs 'underwear_attributes', $ARGS[1] + '_bras', ARGS[2]
  if ((!((s as any).BraQuality ?? 0))) {
    return;
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('check') : -1) > 0) {
    (s as any).temp_not_wear_reason = qspFunc(s, 'bras', 'not_wear_reason', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), 'no_init');
    if (((s as any).temp_not_wear_reason ?? 0) !== ''  &&  ((s as any).temp_not_wear_reason ?? 0) !== 'hypno') {
      if (((s as any).temp_not_wear_reason ?? 0) === 'not_owned') {
      } else {
        if (((s as any).temp_not_wear_reason ?? 0) === 'not_in_wardrobe') {
        } else {
          if (((s as any).temp_not_wear_reason ?? 0) === 'low_strength') {
          } else {
            if (((s as any).temp_not_wear_reason ?? 0) === 'hypno') {
            }
          }
        }
      }
      return;
    }
  }
  (s as any).braworntype = ((s as any).locArgs?.[1] ?? 0);
  (s as any).brawornnumber = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).underwear = (s as any).underwear ?? {})['type'] = 0;
  // TODO-QSP: dynamic "
  // TODO-QSP: <<$braworntype>>_brasS[<<brawornnumber>>] = 0
  // TODO-QSP: "
  (s as any).PBraMaterial = ((s as any).BraMaterial ?? 0);
  (s as any).PBraType = ((s as any).BraType ?? 0);
  (s as any).PBraFun = ((s as any).BraFun ?? 0);
  (s as any).PBraQuality = ((s as any).BraQuality ?? 0);
  (s as any).PBraThinness = ((s as any).BraThinness ?? 0);
  (s as any).PBraCover = ((s as any).BraCover ?? 0);
  (s as any).PBraSport = ((s as any).BraSport ?? 0);
  (s as any).PBraPrice = ((s as any).BraPrice ?? 0);
  (s as any).PBraDirt = ((s as any).BraDirt ?? 0);
  (s as any).PBraStrength = ((s as any).BraStrength ?? 0);
  (s as any).PBraMaxStrength = ((s as any).BraMaxStrength ?? 0);
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('borrowed') : -1) >= 0) {
    (s as any).PBraBorrowed = 1;
    (s as any).PBraDirt = 0;
    (s as any).PBraStrength = ((s as any).PBraMaxStrength ?? 0);
  }
  qspCall(s, 'outfit', 'set_derived_vars');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterWearLastWorn(s: GameState, scene: SceneBuilder): void {
  if (((s as any).lastwornbratype ?? 0) === '') {
    (s as any).lastwornbratype = 'none';
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).lastwornbratype ?? 0), ((s as any).lastwornbranumber ?? 0)]; enterWear(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterIncreaseCurDirt(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'bras', 'increase_dirt', $braworntype, brawornnumber, ARGS[1]
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDecreaseCurDirt(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'bras', 'decrease_dirt', $braworntype, brawornnumber, ARGS[1]
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIncreaseDirt(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).braworntype ?? 0);
  }
  if (Number((s as any).locArgs?.[2] ?? 0) === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).brawornnumber ?? 0);
  }
  if (Number((s as any).locArgs?.[3] ?? 0) <= 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[3] = 1;
  }
  if (qspFunc(s, 'bras', 'is_owned', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
    // TODO-QSP: dynamic "
    // TODO-QSP: <<$ARGS[1]>>_bras_dirt[<<ARGS[2]>>] += <<ARGS[3]>>
    if (Number((s as any).locArgs?.[1] ?? 0) === ((s as any).braworntype ?? 0)  &&  Number((s as any).locArgs?.[2] ?? 0) === ((s as any).brawornnumber ?? 0)) {
      (s as any).PBraDirt = qspUntranslated(s, "((s as any).locArgs?.[1] ?? 0)_bras_dirt[((s as any).locArgs?.[2] ?? 0)]", { location: "bras" });
    }
    // TODO-QSP: "
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDecreaseDirt(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).braworntype ?? 0);
  }
  if (Number((s as any).locArgs?.[2] ?? 0) === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).brawornnumber ?? 0);
  }
  if (Number((s as any).locArgs?.[3] ?? 0) <= 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[3] = 1;
  }
  if (qspFunc(s, 'bras', 'is_owned', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
    // TODO-QSP: dynamic "
    // TODO-QSP: <<$ARGS[1]>>_bras_dirt[<<ARGS[2]>>] -= <<ARGS[3]>>
    if (Number((s as any).locArgs?.[1] ?? 0)((s as any)._bras_dirt ?? 0)[Number((s as any).locArgs?.[2] ?? 0)] < 0) {
      // TODO-QSP: <<$ARGS[1]>>_bras_dirt[<<ARGS[2]>>] = 0
    }
    if (Number((s as any).locArgs?.[1] ?? 0) === ((s as any).braworntype ?? 0)  &&  Number((s as any).locArgs?.[2] ?? 0) === ((s as any).brawornnumber ?? 0)) {
      (s as any).PBraDirt = qspUntranslated(s, "((s as any).locArgs?.[1] ?? 0)_bras_dirt[((s as any).locArgs?.[2] ?? 0)]", { location: "bras" });
    }
    // TODO-QSP: "
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDecreaseCurStrength(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'bras', 'decrease_strength', $braworntype, brawornnumber, ARGS[1]
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIncreaseCurStrength(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'bras', 'increase_strength', $braworntype, brawornnumber, ARGS[1]
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDecreaseStrength(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).braworntype ?? 0);
  }
  if (Number((s as any).locArgs?.[2] ?? 0) === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).brawornnumber ?? 0);
  }
  if (Number((s as any).locArgs?.[3] ?? 0) <= 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[3] = 1;
  }
  if (qspFunc(s, 'bras', 'is_owned', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
    // TODO-QSP: dynamic "
    // TODO-QSP: <<$ARGS[1]>>_bras_h[<<ARGS[2]>>] -= <<ARGS[3]>>
    if (Number((s as any).locArgs?.[1] ?? 0)((s as any)._bras_h ?? 0)[Number((s as any).locArgs?.[2] ?? 0)] < 0) {
      // TODO-QSP: <<$ARGS[1]>>_bras_h[<<ARGS[2]>>] = 0
    }
    if (Number((s as any).locArgs?.[1] ?? 0) === ((s as any).braworntype ?? 0)  &&  Number((s as any).locArgs?.[2] ?? 0) === ((s as any).brawornnumber ?? 0)) {
      (s as any).PBraStrength = qspUntranslated(s, "((s as any).locArgs?.[1] ?? 0)_bras_h[((s as any).locArgs?.[2] ?? 0)]", { location: "bras" });
    }
    // TODO-QSP: "
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIncreaseStrength(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).braworntype ?? 0);
  }
  if (Number((s as any).locArgs?.[2] ?? 0) === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).brawornnumber ?? 0);
  }
  if (Number((s as any).locArgs?.[3] ?? 0) <= 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[3] = 1;
  }
  if (qspFunc(s, 'bras', 'is_owned', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
    // TODO-QSP: gs 'underwear_attributes', $ARGS[1] + '_bras', ARGS[2]
    // TODO-QSP: dynamic "
    // TODO-QSP: <<$ARGS[1]>>_bras_h[<<ARGS[2]>>] = min(<<$ARGS[1]>>_bras_h[<<ARGS[2]>>] + <<ARGS[3]>>, <<BraMaxStren...
    if (Number((s as any).locArgs?.[1] ?? 0) === ((s as any).braworntype ?? 0)  &&  Number((s as any).locArgs?.[2] ?? 0) === ((s as any).brawornnumber ?? 0)) {
      (s as any).PBraStrength = qspUntranslated(s, "((s as any).locArgs?.[1] ?? 0)_bras_h[((s as any).locArgs?.[2] ?? 0)]", { location: "bras" });
    }
    // TODO-QSP: "
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSetShopDisplayExceptions(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'bra_view', 'init', 'set_exceptions');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterViewBraList(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'bra_view', 'view_grid', $ARGS[1]
  // TODO-QSP: end
  scene.build();
}

function enterViewBraItem(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'bra_view', 'view_item', $ARGS[1], $ARGS[2], ARGS[3], ARGS[4]
  // TODO-QSP: end
  scene.build();
}

function enterStorageOptions(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'bra_view', 'storage_options');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDest0(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'bras', 'move_to_wardrobe', $ARGS[2], ARGS[3]
  // TODO-QSP: gt 'bra_view', 'view_item', $ARGS[1], $ARGS[2], ARGS[3], ARGS[4]
  // TODO-QSP: end
  scene.build();
}

function enterDest1(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'bras', 'move_to_storage', $ARGS[2], ARGS[3]
  // TODO-QSP: gt 'bra_view', 'view_item', $ARGS[1], $ARGS[2], ARGS[3], ARGS[4]
  // TODO-QSP: end
  scene.build();
}

function enterDest2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'bras', 'move_to_unwanted', $ARGS[2], ARGS[3]
  // TODO-QSP: gt 'bra_view', 'view_item', $ARGS[1], $ARGS[2], ARGS[3], ARGS[4]
  // TODO-QSP: end
  scene.build();
}

function enterGetFilterHeader(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'bra_view', 'filter_builder', 'setup_home_filters');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBraFilter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'bra_view', 'home_filter');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetShopFilterHeader(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'bra_view', 'filter_builder', 'setup_shop_filters');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetBrasgridHeader(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'bra_view', 'get_wardrobe_grid_header');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterShopFilter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'bra_view', 'shop_filter');
  return;
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'get_total':
      enterGetTotal(s, scene);
      break;
    case 'totals':
      enterTotals(s, scene);
      break;
    case 'sum':
      enterSum(s, scene);
      break;
    case 'sum_inner':
      enterSumInner(s, scene);
      break;
    case 'not_wear_reason':
      enterNotWearReason(s, scene);
      break;
    case 'can_wear':
      enterCanWear(s, scene);
      break;
    case 'is_owned':
      enterIsOwned(s, scene);
      break;
    case 'in_wardrobe':
      enterInWardrobe(s, scene);
      break;
    case 'in_storage':
      enterInStorage(s, scene);
      break;
    case 'in_unwanted':
      enterInUnwanted(s, scene);
      break;
    case 'is_strength_low':
      enterIsStrengthLow(s, scene);
      break;
    case 'is_hypno_approved':
      enterIsHypnoApproved(s, scene);
      break;
    case 'is_wearing_any':
      enterIsWearingAny(s, scene);
      break;
    case 'is_wearing':
      enterIsWearing(s, scene);
      break;
    case 'is_immutable':
      enterIsImmutable(s, scene);
      break;
    case 'bra_owned':
      enterBraOwned(s, scene);
      break;
    case 'icons':
      enterIcons(s, scene);
      break;
    case 'add_item':
      enterAddItem(s, scene);
      break;
    case 'remove_item':
      enterRemoveItem(s, scene);
      break;
    case 'reset_immutables':
      enterResetImmutables(s, scene);
      break;
    case 'dispose':
      enterDispose(s, scene);
      break;
    case 'move_to_wardrobe':
      enterMoveToWardrobe(s, scene);
      break;
    case 'move_to_storage':
      enterMoveToStorage(s, scene);
      break;
    case 'move_to_unwanted':
      enterMoveToUnwanted(s, scene);
      break;
    case 'remove':
      enterRemove(s, scene);
      break;
    case 'strip':
      enterStrip(s, scene);
      break;
    case 'strip_code':
      enterStripCode(s, scene);
      break;
    case 'reset_BraVars':
      enterReset_BraVars(s, scene);
      break;
    case 'reset_PBraVars':
      enterReset_PBraVars(s, scene);
      break;
    case 'wear':
      enterWear(s, scene);
      break;
    case 'wear_last_worn':
      enterWearLastWorn(s, scene);
      break;
    case 'increase_cur_dirt':
      enterIncreaseCurDirt(s, scene);
      break;
    case 'decrease_cur_dirt':
      enterDecreaseCurDirt(s, scene);
      break;
    case 'increase_dirt':
      enterIncreaseDirt(s, scene);
      break;
    case 'decrease_dirt':
      enterDecreaseDirt(s, scene);
      break;
    case 'decrease_cur_strength':
      enterDecreaseCurStrength(s, scene);
      break;
    case 'increase_cur_strength':
      enterIncreaseCurStrength(s, scene);
      break;
    case 'decrease_strength':
      enterDecreaseStrength(s, scene);
      break;
    case 'increase_strength':
      enterIncreaseStrength(s, scene);
      break;
    case 'set_shop_display_exceptions':
      enterSetShopDisplayExceptions(s, scene);
      break;
    case 'view_bra_list':
      enterViewBraList(s, scene);
      break;
    case 'view_bra_item':
      enterViewBraItem(s, scene);
      break;
    case 'storage_options':
      enterStorageOptions(s, scene);
      break;
    case 'dest0':
      enterDest0(s, scene);
      break;
    case 'dest1':
      enterDest1(s, scene);
      break;
    case 'dest2':
      enterDest2(s, scene);
      break;
    case 'get_filter_header':
      enterGetFilterHeader(s, scene);
      break;
    case 'bra_filter':
      enterBraFilter(s, scene);
      break;
    case 'get_shop_filter_header':
      enterGetShopFilterHeader(s, scene);
      break;
    case 'get_brasgrid_header':
      enterGetBrasgridHeader(s, scene);
      break;
    case 'shop_filter':
      enterShopFilter(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const bras: LocationDef = {
  name: 'bras',
  region: 'other',
  enter: enter,
};
