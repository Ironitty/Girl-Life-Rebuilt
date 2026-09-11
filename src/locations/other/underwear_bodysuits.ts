import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGetTotal(s: GameState, scene: SceneBuilder): void {
  if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'lusso') {
    (s as any).result = 90;
  } else {
    if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(8))) === 'moncheri') {
      (s as any).result = 50;
    } else {
      if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(9))) === 'salacious') {
        (s as any).result = 40;
      } else {
        if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(13))) === 'scandalicious') {
          (s as any).result = 100;
        }
      }
    }
  }
  return;
  scene.build();
}

function enterTotals(s: GameState, scene: SceneBuilder): void {
  (s as any).total = qspFunc(s, 'underwear_bodysuits', 'get_total', ((s as any).locArgs?.[1] ?? 0));
  return;
  scene.build();
}

function enterSum(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'underwear_bodysuits', 'sum_inner', 'lusso'));
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'underwear_bodysuits', 'sum_inner', 'salacious'));
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'underwear_bodysuits', 'sum_inner', 'scandalicious'));
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
  (s as any).bodysuits_i = 1;
  (s as any).bodysuits_max_i = 0;
  // TODO-QSP: :loopsumbodysuits
  if (qspFunc(s, 'underwear_bodysuits', 'in_wardrobe', ((s as any).locArgs?.[1] ?? 0), ((s as any).bodysuits_i ?? 0))) {
    (s as any).result = ((s as any).result ?? 0) + (1);
  }
  (s as any).bodysuits_i = ((s as any).bodysuits_i ?? 0) + (1);
  if (((s as any).bodysuits_i ?? 0) < ((s as any).bodysuits_max_i ?? 0)) {
    // TODO-QSP: jump 'loopsumbodysuits'
  }
  return;
  scene.build();
}

function enterNotWearReason(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS ?? {})[1] = ((s as any).bodysuitworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS ?? {})[2] = ((s as any).bodysuitwornnumber ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 3) {
    // TODO-QSP: gs 'underwear_attributes', $ARGS[1] + '_bodysuits', ARGS[2]
  }
  if (qspFunc(s, 'underwear_bodysuits', 'is_immutable', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "underwear_bodysuits" }))) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'underwear_bodysuits', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "underwear_bodysuits" })) === 0) {
    return;
  }
  if (qspFunc(s, 'underwear_bodysuits', 'in_wardrobe', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "underwear_bodysuits" })) === 0) {
    return;
  }
  if (qspFunc(s, 'underwear_bodysuits', 'is_strength_low', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "underwear_bodysuits" }))) {
    return;
  }
  if (qspFunc(s, 'underwear_bodysuits', 'is_hypno_approved', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "underwear_bodysuits" })) === 0) {
    return;
  }
  return;
  scene.build();
}

function enterCanWear(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS ?? {})[1] = ((s as any).bodysuitworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS ?? {})[2] = ((s as any).bodysuitwornnumber ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 3) {
    // TODO-QSP: gs 'underwear_attributes', $ARGS[1] + '_bodysuits', ARGS[2]
  }
  (s as any).result = (qspFunc(s, 'underwear_bodysuits', 'not_wear_reason', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "underwear_bodysuits" }), 'attributes_set') === '');
  return;
  scene.build();
}

function enterIsOwned(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS ?? {})[1] = ((s as any).bodysuitworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS ?? {})[2] = ((s as any).bodysuitwornnumber ?? 0);
  }
  (s as any).result = 0;
  return;
  scene.build();
}

function enterInWardrobe(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS ?? {})[1] = ((s as any).bodysuitworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS ?? {})[2] = ((s as any).bodysuitwornnumber ?? 0);
  }
  (s as any).result = 0;
  if (qspFunc(s, 'underwear_bodysuits', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "underwear_bodysuits" }))) {
    (s as any).result = 0;
  }
  return;
  scene.build();
}

function enterInStorage(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS ?? {})[1] = ((s as any).bodysuitworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS ?? {})[2] = ((s as any).bodysuitwornnumber ?? 0);
  }
  (s as any).result = 0;
  if (qspFunc(s, 'underwear_bodysuits', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "underwear_bodysuits" }))) {
    (s as any).result = 0;
  }
  return;
  scene.build();
}

function enterInUnwanted(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS ?? {})[1] = ((s as any).bodysuitworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS ?? {})[2] = ((s as any).bodysuitwornnumber ?? 0);
  }
  (s as any).result = 0;
  if (qspFunc(s, 'underwear_bodysuits', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "underwear_bodysuits" }))) {
    (s as any).result = 0;
  }
  return;
  scene.build();
}

function enterIsStrengthLow(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS ?? {})[1] = ((s as any).bodysuitworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS ?? {})[2] = ((s as any).bodysuitwornnumber ?? 0);
  }
  (s as any).result = 0;
  if (qspFunc(s, 'underwear_bodysuits', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "underwear_bodysuits" }))) {
    (s as any).result = 0;
  }
  return;
  scene.build();
}

function enterIsHypnoApproved(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).hypnoBra ?? 0) === 0  &&  (!((s as any).hypnoPanty ?? 0)));
  return;
  scene.build();
}

function enterIsWearingAny(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).bodysuitworntype ?? 0) !== ''  &&  ((s as any).bodysuitworntype ?? 0) !== 'none');
  return;
  scene.build();
}

function enterIsWearing(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).bodysuitworntype ?? 0) === ((s as any).locArgs?.[1] ?? 0)  &&  ((s as any).bodysuitwornnumber ?? 0) === ((s as any).locArgs?.[2] ?? 0));
  return;
  scene.build();
}

function enterIsImmutable(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  return;
  scene.build();
}

function enterBodysuitOwned(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS ?? {})[1] = ((s as any).bodysuitworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS ?? {})[2] = ((s as any).bodysuitwornnumber ?? 0);
  }
  (s as any).result = qspFunc(s, 'underwear_bodysuits', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "underwear_bodysuits" }));
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
  // TODO-QSP: gs 'underwear_attributes', $ARGS[1] + '_bodysuits', ARGS[2]
  if ((!((s as any).BraQuality ?? 0))) {
    // TODO-QSP: exit
  }
  // TODO-QSP: dynamic "
  // TODO-QSP: <<$ARGS[1]>>_bodysuits[<<ARGS[2]>>] = 1
  // TODO-QSP: <<$ARGS[1]>>_bodysuits_s[<<ARGS[2]>>] = 0
  // TODO-QSP: <<$ARGS[1]>>_bodysuits_dirt[<<ARGS[2]>>] = 0
  // TODO-QSP: <<$ARGS[1]>>_bodysuits_h[<<ARGS[2]>>] = BraStrength
  // TODO-QSP: "
  return;
  scene.build();
}

function enterRemoveItem(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).ARGS ?? {})[1] = ((s as any).bodysuitworntype ?? 0);
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    ((s as any).ARGS ?? {})[2] = ((s as any).bodysuitwornnumber ?? 0);
  }
  if (((s as any).locArgs?.[1] ?? 0) === ''  ||  ((s as any).locArgs?.[1] ?? 0) === 'none') {
    // TODO-QSP: exit
  }
  // TODO-QSP: dynamic "
  // TODO-QSP: <<$ARGS[1]>>_bodysuits[<<ARGS[2]>>] = 0
  // TODO-QSP: <<$ARGS[1]>>_bodysuits_s[<<ARGS[2]>>] = 0
  // TODO-QSP: <<$ARGS[1]>>_bodysuits_dirt[<<ARGS[2]>>] = 0
  // TODO-QSP: <<$ARGS[1]>>_bodysuits_h[<<ARGS[2]>>] = 0
  // TODO-QSP: "
  if (((s as any).locArgs?.[1] ?? 0) === ((s as any).bodysuitworntype ?? 0)  &&  ((s as any).locArgs?.[2] ?? 0) === ((s as any).bodysuitwornnumber ?? 0)) {
    qspCall(s, 'underwear_bodysuits', 'strip_code');
    qspCall(s, 'outfit', 'set_derived_vars');
    (s as any).lastwornbodysuitnumber = 0;
  }
  return;
  scene.build();
}

function enterResetImmutables(s: GameState, scene: SceneBuilder): void {
  return;
  scene.build();
}

function enterDispose(s: GameState, scene: SceneBuilder): void {
  if (((s as any).underwear ?? 0)?.['type'] === 0) {
    qspCall(s, 'bras', 'dispose');
    qspCall(s, 'panties', 'dispose');
    return;
  }
  qspCall(s, 'underwear_bodysuits', 'remove_item', ((s as any).bodysuitworntype ?? 0), ((s as any).bodysuitwornnumber ?? 0));
  return;
  scene.build();
}

function enterMoveToWardrobe(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).ARGS ?? {})[1] = ((s as any).bodysuitworntype ?? 0);
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    ((s as any).ARGS ?? {})[2] = ((s as any).bodysuitwornnumber ?? 0);
  }
  if (qspFunc(s, 'underwear_bodysuits', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "underwear_bodysuits" }))) {
    // TODO-QSP: dynamic "<<$ARGS[1]>>_bodysuits_s[<<ARGS[2]>>] = 0"
  }
  return;
  scene.build();
}

function enterMoveToStorage(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).ARGS ?? {})[1] = ((s as any).bodysuitworntype ?? 0);
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    ((s as any).ARGS ?? {})[2] = ((s as any).bodysuitwornnumber ?? 0);
  }
  if (qspFunc(s, 'underwear_bodysuits', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "underwear_bodysuits" }))) {
    // TODO-QSP: dynamic "<<$ARGS[1]>>_bodysuits_s[<<ARGS[2]>>] = 1"
  }
  return;
  scene.build();
}

function enterMoveToUnwanted(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).ARGS ?? {})[1] = ((s as any).bodysuitworntype ?? 0);
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    ((s as any).ARGS ?? {})[2] = ((s as any).bodysuitwornnumber ?? 0);
  }
  if (qspFunc(s, 'underwear_bodysuits', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "underwear_bodysuits" }))) {
    // TODO-QSP: dynamic "<<$ARGS[1]>>_bodysuits_s[<<ARGS[2]>>] = 2"
  }
  return;
  scene.build();
}

function enterRemove(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'underwear_bodysuits', 'strip');
  scene.build();
}

function enterStrip(s: GameState, scene: SceneBuilder): void {
  if (((s as any).underwear ?? 0)?.['type'] === 0) {
    qspCall(s, 'bras', 'strip');
    qspCall(s, 'panties', 'strip');
    return;
  }
  if (((s as any).bodysuitworntype ?? 0) === '') {
    (s as any).bodysuitwornnumber = 0;
  }
  (s as any).lastwornunderwear = 2;
  (s as any).lastwornbodysuitnumber = ((s as any).bodysuitwornnumber ?? 0);
  qspCall(s, 'underwear_bodysuits', 'strip_code');
  scene.build();
}

function enterStripCode(s: GameState, scene: SceneBuilder): void {
  (s as any).bodysuitwornnumber = 0;
  (s as any).pantywornnumber = 0;
  (s as any).brawornnumber = 0;
  ((s as any).underwear ?? {})['type'] = 0;
  (s as any).isprokp = 0;
  qspCall(s, 'underwear_bodysuits', 'reset_UndVars');
  qspCall(s, 'underwear_bodysuits', 'reset_PUndVars');
  qspCall(s, 'outfit', 'set_derived_vars');
  scene.build();
}

function enterReset_UndVars(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'bras', 'reset_BraVars');
  qspCall(s, 'panties', 'reset_PanVars');
  return;
  scene.build();
}

function enterReset_PUndVars(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'bras', 'reset_PBraVars');
  qspCall(s, 'panties', 'reset_PPanVars');
  return;
  scene.build();
}

function enterWear(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === ''  ||  ((s as any).locArgs?.[1] ?? 0) === 'last_worn') {
    if (((s as any).lastwornunderwear ?? 0) < 2) {
      qspCall(s, 'bras', 'wear', 'last_worn');
      qspCall(s, 'panties', 'wear', 'last_worn');
      return;
    }
    // TODO-QSP: $ARGS[1] = $lastwornbodysuittype
    ((s as any).ARGS ?? {})[2] = ((s as any).lastwornbodysuitnumber ?? 0);
  }
  if (((s as any).locArgs?.[1] ?? 0) === ''  ||  ((s as any).locArgs?.[1] ?? 0) === 'none') {
    // TODO-QSP: exit
  }
  qspCall(s, 'underwear_bodysuits', 'strip');
  // TODO-QSP: gs 'underwear_attributes', $ARGS[1] + '_bodysuits', ARGS[2]
  if ((!((s as any).BraQuality ?? 0))) {
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
  (s as any).bodysuitwornnumber = qspUntranslated(s, "ARGS[2]", { location: "underwear_bodysuits" });
  ((s as any).underwear ?? {})['type'] = 2;
  // TODO-QSP: dynamic "
  // TODO-QSP: <<$bodysuitworntype>>_bodysuits_w[<<bodysuitwornnumber>>] = 1
  // TODO-QSP: <<$bodysuitworntype>>_bodysuits_s[<<bodysuitwornnumber>>] = 0
  // TODO-QSP: "
  (s as any).PPanQuality = ((s as any).BraQuality ?? 0);
  (s as any).PBraQuality = ((s as any).BraQuality ?? 0);
  (s as any).PPanMaterial = ((s as any).BraMaterial ?? 0);
  (s as any).PBraMaterial = ((s as any).BraMaterial ?? 0);
  (s as any).PPanType = ((s as any).BraType ?? 0);
  (s as any).PBraType = ((s as any).BraType ?? 0);
  (s as any).PPanFun = ((s as any).BraFun ?? 0);
  (s as any).PBraFun = ((s as any).BraFun ?? 0);
  (s as any).PPanThinness = ((s as any).BraThinness ?? 0);
  (s as any).PBraThinness = ((s as any).BraThinness ?? 0);
  (s as any).PPanCoverFront = ((s as any).PanCoverFront ?? 0);
  (s as any).PPanCoverBack = ((s as any).PanCoverBack ?? 0);
  (s as any).PBraCover = ((s as any).BraCover ?? 0);
  (s as any).PPanSport = ((s as any).BraSport ?? 0);
  (s as any).PBraSport = ((s as any).BraSport ?? 0);
  (s as any).PPanPrice = ((s as any).BraPrice ?? 0);
  (s as any).PBraPrice = ((s as any).BraPrice ?? 0);
  (s as any).PPanDirt = ((s as any).PanDirt ?? 0);
  (s as any).PBraDirt = ((s as any).BraDirt ?? 0);
  (s as any).PPanStrength = ((s as any).PanStrength ?? 0);
  (s as any).PBraStrength = ((s as any).BraStrength ?? 0);
  (s as any).PPanMaxStrength = ((s as any).PanMaxStrength ?? 0);
  (s as any).PBraMaxStrength = ((s as any).BraMaxStrength ?? 0);
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('borrowed') : -1) >= 0) {
    (s as any).PBraBorrowed = 1;
    (s as any).PPanBorrowed = 1;
    (s as any).PBraDirt = 0;
    (s as any).PPanDirt = 0;
    (s as any).PPanStrength = 100;
    (s as any).PBraStrength = 100;
  }
  qspCall(s, 'outfit', 'set_derived_vars');
  return;
  scene.build();
}

function enterWearLastWorn(s: GameState, scene: SceneBuilder): void {
  if (((s as any).lastwornbodysuittype ?? 0) === '') {
  }
  qspCall(s, 'underwear_bodysuits', 'wear', ((s as any).lastwornbodysuittype ?? 0), ((s as any).lastwornbodysuitnumber ?? 0));
  scene.build();
}

function enterIncreaseCurDirt(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'underwear_bodysuits', 'increase_dirt', $bodysuitworntype, bodysuitwornnumber, ARGS[1]
  return;
  scene.build();
}

function enterDecreaseCurDirt(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'underwear_bodysuits', 'decrease_dirt', $bodysuitworntype, bodysuitwornnumber, ARGS[1]
  return;
  scene.build();
}

function enterIncreaseDirt(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).ARGS ?? {})[1] = ((s as any).bodysuitworntype ?? 0);
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    ((s as any).ARGS ?? {})[2] = ((s as any).bodysuitwornnumber ?? 0);
  }
  if (((s as any).locArgs?.[3] ?? 0) <= 0) {
    ((s as any).ARGS ?? {})[3] = 1;
  }
  if (qspFunc(s, 'underwear_bodysuits', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "underwear_bodysuits" }))) {
    // TODO-QSP: dynamic "
    // TODO-QSP: <<$ARGS[1]>>_bodysuits_dirt[<<ARGS[2]>>] += <<ARGS[3]>>
    if (((s as any).locArgs?.[1] ?? 0) === ((s as any).bodysuitworntype ?? 0)  &&  ((s as any).locArgs?.[2] ?? 0) === ((s as any).bodysuitwornnumber ?? 0)) {
      (s as any).PBraDirt = qspUntranslated(s, "((s as any).locArgs?.[1] ?? 0)_bodysuits_dirt[qspUntranslated(s, \"ARGS[2]\", { location: \"underwear_bodysuits\" })]", { location: "underwear_bodysuits" });
      (s as any).PPanDirt = ((s as any).PBraDirt ?? 0);
    }
    // TODO-QSP: "
  }
  return;
  scene.build();
}

function enterDecreaseDirt(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).ARGS ?? {})[1] = ((s as any).bodysuitworntype ?? 0);
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    ((s as any).ARGS ?? {})[2] = ((s as any).bodysuitwornnumber ?? 0);
  }
  if (((s as any).locArgs?.[3] ?? 0) <= 0) {
    ((s as any).ARGS ?? {})[3] = 1;
  }
  if (qspFunc(s, 'underwear_bodysuits', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "underwear_bodysuits" }))) {
    // TODO-QSP: dynamic "
    // TODO-QSP: <<$ARGS[1]>>_bodysuits_dirt[<<ARGS[2]>>] -= <<ARGS[3]>>
    if (((s as any).locArgs?.[1] ?? 0)((s as any)._bodysuits_dirt ?? 0)[((s as any).locArgs?.[2] ?? 0)] < 0) {
      // TODO-QSP: <<$ARGS[1]>>_bodysuits_dirt[<<ARGS[2]>>] = 0
    }
    if (((s as any).locArgs?.[1] ?? 0) === ((s as any).bodysuitworntype ?? 0)  &&  ((s as any).locArgs?.[2] ?? 0) === ((s as any).bodysuitwornnumber ?? 0)) {
      (s as any).PBraDirt = qspUntranslated(s, "((s as any).locArgs?.[1] ?? 0)_bodysuits_dirt[qspUntranslated(s, \"ARGS[2]\", { location: \"underwear_bodysuits\" })]", { location: "underwear_bodysuits" });
      (s as any).PPanDirt = ((s as any).PBraDirt ?? 0);
    }
    // TODO-QSP: "
  }
  return;
  scene.build();
}

function enterDecreaseCurStrength(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'underwear_bodysuits', 'decrease_strength', $bodysuitworntype, bodysuitwornnumber, ARGS[1]
  return;
  scene.build();
}

function enterIncreaseCurStrength(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'underwear_bodysuits', 'increase_strength', $bodysuitworntype, bodysuitwornnumber, ARGS[1]
  return;
  scene.build();
}

function enterDecreaseStrength(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).ARGS ?? {})[1] = ((s as any).bodysuitworntype ?? 0);
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    ((s as any).ARGS ?? {})[2] = ((s as any).bodysuitwornnumber ?? 0);
  }
  if (((s as any).locArgs?.[3] ?? 0) <= 0) {
    ((s as any).ARGS ?? {})[3] = 1;
  }
  if (qspFunc(s, 'underwear_bodysuits', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "underwear_bodysuits" }))) {
    // TODO-QSP: dynamic "
    // TODO-QSP: <<$ARGS[1]>>_bodysuits_h[<<ARGS[2]>>] -= <<ARGS[3]>>
    if (((s as any).locArgs?.[1] ?? 0)((s as any)._bodysuits_h ?? 0)[((s as any).locArgs?.[2] ?? 0)] < 0) {
      // TODO-QSP: <<$ARGS[1]>>_bodysuits_h[<<ARGS[2]>>] = 0
    }
    if (((s as any).locArgs?.[1] ?? 0) === ((s as any).bodysuitworntype ?? 0)  &&  ((s as any).locArgs?.[2] ?? 0) === ((s as any).bodysuitwornnumber ?? 0)) {
      (s as any).PBraStrength = qspUntranslated(s, "((s as any).locArgs?.[1] ?? 0)_bodysuits_h[qspUntranslated(s, \"ARGS[2]\", { location: \"underwear_bodysuits\" })]", { location: "underwear_bodysuits" });
      (s as any).PPanStrength = ((s as any).PBraStrength ?? 0);
    }
    // TODO-QSP: "
  }
  return;
  scene.build();
}

function enterIncreaseStrength(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).ARGS ?? {})[1] = ((s as any).bodysuitworntype ?? 0);
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    ((s as any).ARGS ?? {})[2] = ((s as any).bodysuitwornnumber ?? 0);
  }
  if (((s as any).locArgs?.[3] ?? 0) <= 0) {
    ((s as any).ARGS ?? {})[3] = 1;
  }
  if (qspFunc(s, 'underwear_bodysuits', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "underwear_bodysuits" }))) {
    // TODO-QSP: gs 'underwear_attributes', $ARGS[1] + '_bodysuits', ARGS[2]
    // TODO-QSP: dynamic "
    // TODO-QSP: <<$ARGS[1]>>_bodysuits_h[<<ARGS[2]>>] = min(<<$ARGS[1]>>_bodysuits_h[<<ARGS[2]>>] + <<ARGS[3]>>, <<B...
    if (((s as any).locArgs?.[1] ?? 0) === ((s as any).bodysuitworntype ?? 0)  &&  ((s as any).locArgs?.[2] ?? 0) === ((s as any).bodysuitwornnumber ?? 0)) {
      (s as any).PBraStrength = qspUntranslated(s, "((s as any).locArgs?.[1] ?? 0)_bodysuits_h[qspUntranslated(s, \"ARGS[2]\", { location: \"underwear_bodysuits\" })]", { location: "underwear_bodysuits" });
      (s as any).PPanStrength = ((s as any).PBraStrength ?? 0);
    }
    // TODO-QSP: "
  }
  return;
  scene.build();
}

function enterSetShopDisplayExceptions(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'underwear_bodysuit_view', 'set_exceptions');
  return;
  scene.build();
}

function enterViewBodysuitList(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'underwear_bodysuit_view', 'view_grid', $ARGS[1]
  scene.build();
}

function enterViewBodysuitItem(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'underwear_bodysuit_view', 'view_item', $ARGS[1], $ARGS[2], ARGS[3], ARGS[4]
  scene.build();
}

function enterDest0(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'underwear_bodysuits', 'move_to_wardrobe', $ARGS[2], ARGS[3]
  // TODO-QSP: gt 'underwear_bodysuit_view', 'view_item', $ARGS[1], $ARGS[2], ARGS[3], ARGS[4]
  scene.build();
}

function enterDest1(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'underwear_bodysuits', 'move_to_storage', $ARGS[2], ARGS[3]
  // TODO-QSP: gt 'underwear_bodysuit_view', 'view_item', $ARGS[1], $ARGS[2], ARGS[3], ARGS[4]
  scene.build();
}

function enterDest2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'underwear_bodysuits', 'move_to_unwanted', $ARGS[2], ARGS[3]
  // TODO-QSP: gt 'underwear_bodysuit_view', 'view_item', $ARGS[1], $ARGS[2], ARGS[3], ARGS[4]
  scene.build();
}

function enterGetFilterHeader(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'underwear_bodysuit_view', 'filter_builder', 'setup_home_filter');
  return;
  scene.build();
}

function enterBodysuitFilter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'underwear_bodysuit_view', 'home_filter');
  return;
  scene.build();
}

function enterGetShopFilterHeader(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'underwear_bodysuit_view', 'filter_builder', 'setup_shop_filter');
  return;
  scene.build();
}

function enterGetBodysuitsgridHeader(s: GameState, scene: SceneBuilder): void {
  return;
  scene.build();
}

function enterShopFilter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'underwear_bodysuit_view', 'shop_filter');
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
    case 'bodysuit_owned':
      enterBodysuitOwned(s, scene);
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
    case 'reset_UndVars':
      enterReset_UndVars(s, scene);
      break;
    case 'reset_PUndVars':
      enterReset_PUndVars(s, scene);
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
    case 'view_bodysuit_list':
      enterViewBodysuitList(s, scene);
      break;
    case 'view_bodysuit_item':
      enterViewBodysuitItem(s, scene);
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
    case 'bodysuit_filter':
      enterBodysuitFilter(s, scene);
      break;
    case 'get_shop_filter_header':
      enterGetShopFilterHeader(s, scene);
      break;
    case 'get_bodysuitsgrid_header':
      enterGetBodysuitsgridHeader(s, scene);
      break;
    case 'shop_filter':
      enterShopFilter(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const underwear_bodysuits: LocationDef = {
  name: 'underwear_bodysuits',
  region: 'other',
  enter: enter,
};
