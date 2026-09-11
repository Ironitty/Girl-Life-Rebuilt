import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGetTotal(s: GameState, scene: SceneBuilder): void {
  if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'cats') {
    (s as any).result = 72;
  } else {
    if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(10))) === 'danilovich') {
      (s as any).result = 8;
    } else {
      if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'eroto') {
        (s as any).result = 43;
      } else {
        if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(11))) === 'fashionista') {
          (s as any).result = 79;
        } else {
          if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(2))) === 'gm') {
            (s as any).result = 37;
          } else {
            if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'lusso') {
              (s as any).result = 82;
            } else {
              if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(9))) === 'salacious') {
                (s as any).result = 59;
              }
            }
          }
        }
      }
    }
  }
  return;
  scene.build();
}

function enterTotals(s: GameState, scene: SceneBuilder): void {
  (s as any).total = qspFunc(s, 'panties', 'get_total', ((s as any).locArgs?.[1] ?? 0));
  return;
  scene.build();
}

function enterSum(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'panties', 'sum_inner', 'lusso'));
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'panties', 'sum_inner', 'cats'));
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'panties', 'sum_inner', 'salacious'));
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'panties', 'sum_inner', 'fashionista'));
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'panties', 'sum_inner', 'gm'));
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'panties', 'sum_inner', 'eroto'));
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'panties', 'sum_inner', 'danilovich'));
  if (((s as any).locArgs?.[1] ?? 0) === 'dresser') {
    if (((s as any).pantyworntype ?? 0) !== 'none'  &&  ((s as any).result ?? 0) > 0) {
      (s as any).result = ((s as any).result ?? 0) - (1);
    }
  }
  return;
  scene.build();
}

function enterSumInner(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  (s as any).panties_i = 1;
  (s as any).panties_max_i = 0;
  // TODO-QSP: :loopsumpanties
  if (qspFunc(s, 'panties', 'in_wardrobe', ((s as any).locArgs?.[1] ?? 0), ((s as any).panties_i ?? 0))) {
    (s as any).result = ((s as any).result ?? 0) + (1);
  }
  (s as any).panties_i = ((s as any).panties_i ?? 0) + (1);
  if (((s as any).panties_i ?? 0) < ((s as any).panties_max_i ?? 0)) {
    // TODO-QSP: jump 'loopsumpanties'
  }
  return;
  scene.build();
}

function enterNotWearReason(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS ?? {})[1] = ((s as any).pantyworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS ?? {})[2] = ((s as any).pantywornnumber ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 3) {
    // TODO-QSP: gs 'underwear_attributes', $ARGS[1] + '_panties', ARGS[2]
  }
  if (qspFunc(s, 'panties', 'is_immutable', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "panties" }))) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'panties', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "panties" })) === 0) {
    return;
  }
  if (qspFunc(s, 'panties', 'in_wardrobe', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "panties" })) === 0) {
    return;
  }
  if (qspFunc(s, 'panties', 'is_strength_low', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "panties" }))) {
    return;
  }
  if (qspFunc(s, 'panties', 'is_hypno_approved', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "panties" })) === 0) {
    return;
  }
  return;
  scene.build();
}

function enterCanWear(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS ?? {})[1] = ((s as any).pantyworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS ?? {})[2] = ((s as any).pantywornnumber ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 3) {
    // TODO-QSP: gs 'underwear_attributes', $ARGS[1] + '_panties', ARGS[2]
  }
  (s as any).result = (qspFunc(s, 'panties', 'not_wear_reason', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "panties" }), 'attributes_set') === '');
  return;
  scene.build();
}

function enterIsOwned(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS ?? {})[1] = ((s as any).pantyworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS ?? {})[2] = ((s as any).pantywornnumber ?? 0);
  }
  (s as any).result = 0;
  return;
  scene.build();
}

function enterInWardrobe(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS ?? {})[1] = ((s as any).pantyworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS ?? {})[2] = ((s as any).pantywornnumber ?? 0);
  }
  (s as any).result = 0;
  if (qspFunc(s, 'panties', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "panties" }))) {
    (s as any).result = 0;
  }
  return;
  scene.build();
}

function enterInStorage(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS ?? {})[1] = ((s as any).pantyworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS ?? {})[2] = ((s as any).pantywornnumber ?? 0);
  }
  (s as any).result = 0;
  if (qspFunc(s, 'panties', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "panties" }))) {
    (s as any).result = 0;
  }
  return;
  scene.build();
}

function enterInUnwanted(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS ?? {})[1] = ((s as any).pantyworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS ?? {})[2] = ((s as any).pantywornnumber ?? 0);
  }
  (s as any).result = 0;
  if (qspFunc(s, 'panties', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "panties" }))) {
    (s as any).result = 0;
  }
  return;
  scene.build();
}

function enterIsStrengthLow(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS ?? {})[1] = ((s as any).pantyworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS ?? {})[2] = ((s as any).pantywornnumber ?? 0);
  }
  (s as any).result = 0;
  if (qspFunc(s, 'panties', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "panties" }))) {
    (s as any).result = 0;
  }
  return;
  scene.build();
}

function enterIsHypnoApproved(s: GameState, scene: SceneBuilder): void {
  (s as any).result = ((!((s as any).hypnoPanty ?? 0)));
  return;
  scene.build();
}

function enterIsWearingAny(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).pantyworntype ?? 0) !== ''  &&  ((s as any).pantyworntype ?? 0) !== 'none');
  return;
  scene.build();
}

function enterIsWearing(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).pantyworntype ?? 0) === ((s as any).locArgs?.[1] ?? 0)  &&  ((s as any).pantywornnumber ?? 0) === ((s as any).locArgs?.[2] ?? 0));
  return;
  scene.build();
}

function enterIsImmutable(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS ?? {})[1] = ((s as any).pantyworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS ?? {})[2] = ((s as any).pantywornnumber ?? 0);
  }
  (s as any).result = (((s as any).locArgs?.[1] ?? 0) === 'gm'  &&  ((s as any).locArgs?.[2] ?? 0) === 1);
  return;
  scene.build();
}

function enterPantiesOwned(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS ?? {})[1] = ((s as any).pantyworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS ?? {})[2] = ((s as any).pantywornnumber ?? 0);
  }
  (s as any).result = qspFunc(s, 'panties', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "panties" }));
  return;
  scene.build();
}

function enterAddItem(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    // TODO-QSP: exit
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    // TODO-QSP: exit
  }
  // TODO-QSP: gs 'underwear_attributes', $ARGS[1] + '_panties', ARGS[2]
  if ((!((s as any).PanQuality ?? 0))) {
    // TODO-QSP: exit
  }
  // TODO-QSP: dynamic "
  // TODO-QSP: <<$ARGS[1]>>_panties[<<ARGS[2]>>] = 1
  // TODO-QSP: <<$ARGS[1]>>_pantiesS[<<ARGS[2]>>] = 0
  // TODO-QSP: <<$ARGS[1]>>_panties_dirt[<<ARGS[2]>>] = 0
  // TODO-QSP: <<$ARGS[1]>>_panties_h[<<ARGS[2]>>] = PanStrength
  // TODO-QSP: "
  scene.build();
}

function enterRemoveItem(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).ARGS ?? {})[1] = ((s as any).pantyworntype ?? 0);
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    ((s as any).ARGS ?? {})[2] = ((s as any).pantywornnumber ?? 0);
  }
  if (((s as any).locArgs?.[1] ?? 0) === ''  ||  ((s as any).locArgs?.[1] ?? 0) === 'none') {
    // TODO-QSP: exit
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'gm'  &&  ((s as any).locArgs?.[2] ?? 0) === 1) {
    if (((s as any).locArgs?.[1] ?? 0) === ((s as any).pantyworntype ?? 0)  &&  ((s as any).locArgs?.[2] ?? 0) === ((s as any).pantywornnumber ?? 0)) {
      qspCall(s, 'panties', 'strip');
    }
    return;
  }
  // TODO-QSP: dynamic "
  // TODO-QSP: <<$ARGS[1]>>_panties[<<ARGS[2]>>] = 0
  // TODO-QSP: <<$ARGS[1]>>_pantiesS[<<ARGS[2]>>] = 0
  // TODO-QSP: <<$ARGS[1]>>_panties_dirt[<<ARGS[2]>>] = 0
  // TODO-QSP: <<$ARGS[1]>>_panties_h[<<ARGS[2]>>] = 0
  // TODO-QSP: "
  if (((s as any).locArgs?.[1] ?? 0) === ((s as any).pantyworntype ?? 0)  &&  ((s as any).locArgs?.[2] ?? 0) === ((s as any).pantywornnumber ?? 0)) {
    qspCall(s, 'panties', 'strip_code');
    qspCall(s, 'outfit', 'set_derived_vars');
    (s as any).lastwornpantynumber = 0;
  }
  return;
  scene.build();
}

function enterResetImmutables(s: GameState, scene: SceneBuilder): void {
  ((s as any).gm_panties ?? {})[1] = 1;
  ((s as any).gm_pantiesS ?? {})[1] = 0;
  ((s as any).gm_panties_dirt ?? {})[1] = 1440;
  ((s as any).gm_panties_h ?? {})[1] = 10;
  return;
  scene.build();
}

function enterDispose(s: GameState, scene: SceneBuilder): void {
  if (((s as any).underwear ?? 0)?.['type'] === 2) {
    qspCall(s, 'underwear_bodysuits', 'dispose');
    return;
  }
  qspCall(s, 'panties', 'remove_item', ((s as any).pantyworntype ?? 0), ((s as any).pantywornnumber ?? 0));
  return;
  scene.build();
}

function enterMoveToWardrobe(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).ARGS ?? {})[1] = ((s as any).pantyworntype ?? 0);
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    ((s as any).ARGS ?? {})[2] = ((s as any).pantywornnumber ?? 0);
  }
  if (qspFunc(s, 'panties', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "panties" }))) {
    // TODO-QSP: dynamic "<<$ARGS[1]>>_pantiesS[<<ARGS[2]>>] = 0"
  }
  return;
  scene.build();
}

function enterMoveToStorage(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).ARGS ?? {})[1] = ((s as any).pantyworntype ?? 0);
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    ((s as any).ARGS ?? {})[2] = ((s as any).pantywornnumber ?? 0);
  }
  if (qspFunc(s, 'panties', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "panties" }))) {
    // TODO-QSP: dynamic "<<$ARGS[1]>>_pantiesS[<<ARGS[2]>>] = 1"
  }
  return;
  scene.build();
}

function enterMoveToUnwanted(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).ARGS ?? {})[1] = ((s as any).pantyworntype ?? 0);
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    ((s as any).ARGS ?? {})[2] = ((s as any).pantywornnumber ?? 0);
  }
  if (qspFunc(s, 'panties', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "panties" }))) {
    // TODO-QSP: dynamic "<<$ARGS[1]>>_pantiesS[<<ARGS[2]>>] = 2"
  }
  return;
  scene.build();
}

function enterRemove(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'panties', 'strip');
  scene.build();
}

function enterStrip(s: GameState, scene: SceneBuilder): void {
  if (((s as any).underwear ?? 0)?.['type'] === 2) {
    qspCall(s, 'underwear_bodysuits', 'strip');
    return;
  }
  if (((s as any).pantyworntype ?? 0) === '') {
    (s as any).pantywornnumber = 0;
  }
  (s as any).lastwornunderwear = 0;
  (s as any).lastwornpantynumber = ((s as any).pantywornnumber ?? 0);
  qspCall(s, 'panties', 'strip_code');
  scene.build();
}

function enterStripCode(s: GameState, scene: SceneBuilder): void {
  (s as any).pantywornnumber = 0;
  (s as any).bodysuitwornnumber = 0;
  (s as any).isprokp = 0;
  qspCall(s, 'panties', 'reset_PanVars');
  qspCall(s, 'panties', 'reset_PPanVars');
  qspCall(s, 'outfit', 'set_derived_vars');
  scene.build();
}

function enterReset_PanVars(s: GameState, scene: SceneBuilder): void {
  (s as any).PanMaterial = 0;
  (s as any).PanType = 0;
  (s as any).PanFun = 0;
  (s as any).PanQuality = 0;
  (s as any).PanThinness = 0;
  (s as any).PanCoverFront = 4;
  (s as any).PanCoverBack = 4;
  (s as any).PanSport = 0;
  (s as any).PanPrice = 0;
  (s as any).PanDirt = 0;
  (s as any).PanStrength = 0;
  (s as any).PanMaxStrength = 0;
  ((s as any).underwear ?? {})['pair'] = 0;
  return;
  scene.build();
}

function enterReset_PPanVars(s: GameState, scene: SceneBuilder): void {
  (s as any).PPanMaterial = 0;
  (s as any).PPanFun = 0;
  (s as any).PPanQuality = 0;
  (s as any).PanStrength = 100000;
  (s as any).PPanThinness = 0;
  (s as any).PPanCoverFront = 4;
  (s as any).PPanCoverBack = 4;
  (s as any).PPanSport = 0;
  (s as any).PPanPrice = 0;
  (s as any).PPanDirt = 0;
  (s as any).PPanStrength = 0;
  (s as any).PPanBorrowed = 0;
  (s as any).PPanMaxStrength = 0;
  return;
  scene.build();
}

function enterWear(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === ''  ||  ((s as any).locArgs?.[1] ?? 0) === 'last_worn') {
    if (((s as any).lastwornunderwear ?? 0) === 2) {
      qspCall(s, 'underwear_bodysuits', 'wear', 'last_worn');
      return;
    }
    // TODO-QSP: $ARGS[1] = $lastwornpantytype
    ((s as any).ARGS ?? {})[2] = ((s as any).lastwornpantynumber ?? 0);
  }
  if (((s as any).locArgs?.[1] ?? 0) === ''  ||  ((s as any).locArgs?.[1] ?? 0) === 'none') {
    // TODO-QSP: exit
  }
  qspCall(s, 'panties', 'strip');
  // TODO-QSP: gs 'underwear_attributes', $ARGS[1] + '_panties', ARGS[2]
  if ((!((s as any).PanQuality ?? 0))) {
    return;
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('check') : -1) > 0) {
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
  (s as any).pantywornnumber = qspUntranslated(s, "ARGS[2]", { location: "panties" });
  ((s as any).underwear ?? {})['type'] = 0;
  // TODO-QSP: dynamic "<<$pantyworntype>>_pantiesS[<<pantywornnumber>>] = 0"
  (s as any).PPanMaterial = ((s as any).PanMaterial ?? 0);
  (s as any).PPanFun = ((s as any).PanFun ?? 0);
  (s as any).PPanQuality = ((s as any).PanQuality ?? 0);
  (s as any).PPanThinness = ((s as any).PanThinness ?? 0);
  (s as any).PPanCoverFront = ((s as any).PanCoverFront ?? 0);
  (s as any).PPanCoverBack = ((s as any).PanCoverBack ?? 0);
  (s as any).PPanSport = ((s as any).PanSport ?? 0);
  (s as any).PPanPrice = ((s as any).PanPrice ?? 0);
  (s as any).PPanDirt = ((s as any).PanDirt ?? 0);
  (s as any).PPanStrength = ((s as any).PanStrength ?? 0);
  (s as any).PPanMaxStrength = ((s as any).PanMaxStrength ?? 0);
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('borrowed') : -1) >= 0) {
    (s as any).PPanBorrowed = 1;
    (s as any).PPanDirt = 0;
    (s as any).PPanStrength = ((s as any).PPanMaxStrength ?? 0);
  }
  qspCall(s, 'outfit', 'set_derived_vars');
  return;
  scene.build();
}

function enterWearLastWorn(s: GameState, scene: SceneBuilder): void {
  if (((s as any).lastwornpantytype ?? 0) === '') {
  }
  qspCall(s, 'panties', 'wear', ((s as any).lastwornpantytype ?? 0), ((s as any).lastwornpantynumber ?? 0));
  scene.build();
}

function enterIncreaseCurDirt(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'panties', 'increase_dirt', $pantyworntype, pantywornnumber, ARGS[1]
  return;
  scene.build();
}

function enterDecreaseCurDirt(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'panties', 'decrease_dirt', $pantyworntype, pantywornnumber, ARGS[1]
  return;
  scene.build();
}

function enterIncreaseDirt(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).ARGS ?? {})[1] = ((s as any).pantyworntype ?? 0);
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    ((s as any).ARGS ?? {})[2] = ((s as any).pantywornnumber ?? 0);
  }
  if (((s as any).locArgs?.[3] ?? 0) <= 0) {
    ((s as any).ARGS ?? {})[3] = 1;
  }
  if (qspFunc(s, 'panties', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "panties" }))) {
    // TODO-QSP: dynamic "
    // TODO-QSP: <<$ARGS[1]>>_panties_dirt[<<ARGS[2]>>] += <<ARGS[3]>>
    if (((s as any).locArgs?.[1] ?? 0) === ((s as any).pantyworntype ?? 0)  &&  ((s as any).locArgs?.[2] ?? 0) === ((s as any).pantywornnumber ?? 0)) {
      (s as any).PPanDirt = qspUntranslated(s, "((s as any).locArgs?.[1] ?? 0)_panties_dirt[qspUntranslated(s, \"ARGS[2]\", { location: \"panties\" })]", { location: "panties" });
    }
    // TODO-QSP: "
  }
  return;
  scene.build();
}

function enterDecreaseDirt(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).ARGS ?? {})[1] = ((s as any).pantyworntype ?? 0);
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    ((s as any).ARGS ?? {})[2] = ((s as any).pantywornnumber ?? 0);
  }
  if (((s as any).locArgs?.[3] ?? 0) <= 0) {
    ((s as any).ARGS ?? {})[3] = 1;
  }
  if (qspFunc(s, 'panties', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "panties" }))) {
    // TODO-QSP: dynamic "
    // TODO-QSP: <<$ARGS[1]>>_panties_dirt[<<ARGS[2]>>] -= <<ARGS[3]>>
    if (((s as any).locArgs?.[1] ?? 0)((s as any)._panties_dirt ?? 0)[((s as any).locArgs?.[2] ?? 0)] < 0) {
      // TODO-QSP: <<$ARGS[1]>>_panties_dirt[<<ARGS[2]>>] = 0
    }
    if (((s as any).locArgs?.[1] ?? 0) === ((s as any).pantyworntype ?? 0)  &&  ((s as any).locArgs?.[2] ?? 0) === ((s as any).pantywornnumber ?? 0)) {
      (s as any).PPanDirt = qspUntranslated(s, "((s as any).locArgs?.[1] ?? 0)_panties_dirt[qspUntranslated(s, \"ARGS[2]\", { location: \"panties\" })]", { location: "panties" });
    }
    // TODO-QSP: "
  }
  return;
  scene.build();
}

function enterDecreaseCurStrength(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'panties', 'decrease_strength', $pantyworntype, pantywornnumber, ARGS[1]
  return;
  scene.build();
}

function enterIncreaseCurStrength(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'panties', 'increase_strength', $pantyworntype, pantywornnumber, ARGS[1]
  return;
  scene.build();
}

function enterDecreaseStrength(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).ARGS ?? {})[1] = ((s as any).pantyworntype ?? 0);
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    ((s as any).ARGS ?? {})[2] = ((s as any).pantywornnumber ?? 0);
  }
  if (((s as any).locArgs?.[3] ?? 0) <= 0) {
    ((s as any).ARGS ?? {})[3] = 1;
  }
  if (qspFunc(s, 'panties', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "panties" }))) {
    // TODO-QSP: dynamic "
    // TODO-QSP: <<$ARGS[1]>>_panties_h[<<ARGS[2]>>] -= <<ARGS[3]>>
    if (((s as any).locArgs?.[1] ?? 0)((s as any)._panties_h ?? 0)[((s as any).locArgs?.[2] ?? 0)] < 0) {
      // TODO-QSP: <<$ARGS[1]>>_panties_h[<<ARGS[2]>>] = 0
    }
    if (((s as any).locArgs?.[1] ?? 0) === ((s as any).pantyworntype ?? 0)  &&  ((s as any).locArgs?.[2] ?? 0) === ((s as any).pantywornnumber ?? 0)) {
      (s as any).PPanStrength = qspUntranslated(s, "((s as any).locArgs?.[1] ?? 0)_panties_h[qspUntranslated(s, \"ARGS[2]\", { location: \"panties\" })]", { location: "panties" });
    }
    // TODO-QSP: "
  }
  return;
  scene.build();
}

function enterIncreaseStrength(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).ARGS ?? {})[1] = ((s as any).pantyworntype ?? 0);
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    ((s as any).ARGS ?? {})[2] = ((s as any).pantywornnumber ?? 0);
  }
  if (((s as any).locArgs?.[3] ?? 0) <= 0) {
    ((s as any).ARGS ?? {})[3] = 1;
  }
  if (qspFunc(s, 'panties', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "panties" }))) {
    // TODO-QSP: gs 'underwear_attributes', $ARGS[1] + '_panties', ARGS[2]
    // TODO-QSP: dynamic "
    // TODO-QSP: <<$ARGS[1]>>_panties_h[<<ARGS[2]>>] = min(<<$ARGS[1]>>_panties_h[<<ARGS[2]>>] + <<ARGS[3]>>, <<PanMa...
    if (((s as any).locArgs?.[1] ?? 0) === ((s as any).pantyworntype ?? 0)  &&  ((s as any).locArgs?.[2] ?? 0) === ((s as any).pantywornnumber ?? 0)) {
      (s as any).PPanStrength = qspUntranslated(s, "((s as any).locArgs?.[1] ?? 0)_panties_h[qspUntranslated(s, \"ARGS[2]\", { location: \"panties\" })]", { location: "panties" });
    }
    // TODO-QSP: "
  }
  return;
  scene.build();
}

function enterSetShopDisplayExceptions(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'panty_view', 'init', 'set_exceptions');
  return;
  scene.build();
}

function enterViewPantyList(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'panty_view', 'view_grid', $ARGS[1]
  scene.build();
}

function enterViewPantyItem(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'panty_view', 'view_item', $ARGS[1], $ARGS[2], ARGS[3], ARGS[4]
  scene.build();
}

function enterStorageOptions(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'panty_view', 'storage_options');
  return;
  scene.build();
}

function enterDest0(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'panties', 'move_to_wardrobe', $ARGS[2], ARGS[3]
  // TODO-QSP: gt 'panty_view', 'view_item', $ARGS[1], $ARGS[2], ARGS[3], ARGS[4]
  scene.build();
}

function enterDest1(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'panties', 'move_to_wardrobe', $ARGS[2], ARGS[3]
  // TODO-QSP: gt 'panty_view', 'view_item', $ARGS[1], $ARGS[2], ARGS[3], ARGS[4]
  scene.build();
}

function enterDest2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'panties', 'move_to_wardrobe', $ARGS[2], ARGS[3]
  // TODO-QSP: gt 'panty_view', 'view_item', $ARGS[1], $ARGS[2], ARGS[3], ARGS[4]
  scene.build();
}

function enterGetFilterHeader(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'panty_view', 'filter_builder', 'setup_home_filters');
  return;
  scene.build();
}

function enterPantyFilter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'panty_view', 'home_filter');
  return;
  scene.build();
}

function enterGetShopFilterHeader(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'panty_view', 'filter_builder', 'setup_shop_filters');
  return;
  scene.build();
}

function enterGetPantiesgridHeader(s: GameState, scene: SceneBuilder): void {
  return;
  scene.build();
}

function enterShopFilter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'panty_view', 'shop_filter');
  return;
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
    case 'panties_owned':
      enterPantiesOwned(s, scene);
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
    case 'reset_PanVars':
      enterReset_PanVars(s, scene);
      break;
    case 'reset_PPanVars':
      enterReset_PPanVars(s, scene);
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
    case 'view_panty_list':
      enterViewPantyList(s, scene);
      break;
    case 'view_panty_item':
      enterViewPantyItem(s, scene);
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
    case 'panty_filter':
      enterPantyFilter(s, scene);
      break;
    case 'get_shop_filter_header':
      enterGetShopFilterHeader(s, scene);
      break;
    case 'get_pantiesgrid_header':
      enterGetPantiesgridHeader(s, scene);
      break;
    case 'shop_filter':
      enterShopFilter(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const panties: LocationDef = {
  name: 'panties',
  region: 'other',
  enter: enter,
};
