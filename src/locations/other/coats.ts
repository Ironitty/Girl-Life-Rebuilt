import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGetTotal(s: GameState, scene: SceneBuilder): void {
  if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'bomba') {
    (s as any).result = 20;
  } else {
    if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'cats') {
      (s as any).result = 20;
    } else {
      if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(10))) === 'danilovich') {
        (s as any).result = 20;
      } else {
        if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'dolls') {
          (s as any).result = 20;
        } else {
          if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(2))) === 'gm') {
            (s as any).result = 20;
          } else {
            if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(8))) === 'moncheri') {
              (s as any).result = 20;
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
  (s as any).total = qspFunc(s, 'coats', 'get_total', ((s as any).locArgs?.[1] ?? 0));
  return;
  scene.build();
}

function enterNotWearReason(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS ?? {})[1] = ((s as any).coatworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS ?? {})[2] = ((s as any).coatwornnumber ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 3) {
    // TODO-QSP: gs 'coat_attributes', $ARGS[1], ARGS[2]
  }
  if (qspFunc(s, 'coats', 'is_immutable', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "coats" }))) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'coats', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "coats" })) === 0) {
    return;
  }
  if (qspFunc(s, 'coats', 'in_wardrobe', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "coats" })) === 0) {
    return;
  }
  if (qspFunc(s, 'coats', 'is_strength_low', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "coats" }))) {
    return;
  }
  return;
  scene.build();
}

function enterCanWear(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS ?? {})[1] = ((s as any).coatworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS ?? {})[2] = ((s as any).coatwornnumber ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 3) {
    // TODO-QSP: gs 'coat_attributes', $ARGS[1], ARGS[2]
  }
  (s as any).result = (qspFunc(s, 'coats', 'not_wear_reason', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "coats" }), 'attributes_set') === '');
  return;
  scene.build();
}

function enterIsOwned(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS ?? {})[1] = ((s as any).coatworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS ?? {})[2] = ((s as any).coatwornnumber ?? 0);
  }
  (s as any).result = 0;
  return;
  scene.build();
}

function enterInWardrobe(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS ?? {})[1] = ((s as any).coatworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS ?? {})[2] = ((s as any).coatwornnumber ?? 0);
  }
  (s as any).result = 0;
  if (qspFunc(s, 'coats', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "coats" }))) {
    (s as any).result = 0;
  }
  return;
  scene.build();
}

function enterInStorage(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS ?? {})[1] = ((s as any).coatworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS ?? {})[2] = ((s as any).coatwornnumber ?? 0);
  }
  (s as any).result = 0;
  if (qspFunc(s, 'coats', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "coats" }))) {
    (s as any).result = 0;
  }
  return;
  scene.build();
}

function enterInUnwanted(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS ?? {})[1] = ((s as any).coatworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS ?? {})[2] = ((s as any).coatwornnumber ?? 0);
  }
  (s as any).result = 0;
  if (qspFunc(s, 'coats', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "coats" }))) {
    (s as any).result = 0;
  }
  return;
  scene.build();
}

function enterIsStrengthLow(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS ?? {})[1] = ((s as any).coatworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS ?? {})[2] = ((s as any).coatwornnumber ?? 0);
  }
  (s as any).result = 0;
  return;
  scene.build();
}

function enterIsWearingAny(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).coatworntype ?? 0) !== ''  &&  ((s as any).coatworntype ?? 0) !== 'none');
  return;
  scene.build();
}

function enterIsWearing(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).coatworntype ?? 0) === ((s as any).locArgs?.[1] ?? 0)  &&  ((s as any).coatwornnumber ?? 0) === ((s as any).locArgs?.[2] ?? 0));
  return;
  scene.build();
}

function enterIsImmutable(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
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
  // TODO-QSP: gs 'coat_attributes', $ARGS[1], ARGS[2]
  if ((!((s as any).CoatQuality ?? 0))) {
    // TODO-QSP: exit
  }
  // TODO-QSP: dynamic "
  // TODO-QSP: <<$ARGS[1]>>_coats[<<ARGS[2]>>] = 1
  // TODO-QSP: <<$ARGS[1]>>_coats_s[<<ARGS[2]>>] = 0
  // TODO-QSP: <<$ARGS[1]>>_coats_w[<<ARGS[2]>>] = 0
  // TODO-QSP: <<$ARGS[1]>>_coats_h[<<ARGS[2]>>] = CoatStrength
  // TODO-QSP: "
  return;
  scene.build();
}

function enterRemoveItem(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).ARGS ?? {})[1] = ((s as any).coatworntype ?? 0);
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    ((s as any).ARGS ?? {})[2] = ((s as any).coatwornnumber ?? 0);
  }
  if (((s as any).locArgs?.[1] ?? 0) === ''  ||  ((s as any).locArgs?.[1] ?? 0) === 'none') {
    // TODO-QSP: exit
  }
  // TODO-QSP: dynamic "
  // TODO-QSP: <<$ARGS[1]>>_coats[<<ARGS[2]>>] = 0
  // TODO-QSP: <<$ARGS[1]>>_coats_s[<<ARGS[2]>>] = 0
  // TODO-QSP: <<$ARGS[1]>>_coats_w[<<ARGS[2]>>] = 0
  // TODO-QSP: <<$ARGS[1]>>_coats_h[<<ARGS[2]>>] = 0
  // TODO-QSP: "
  if (((s as any).locArgs?.[1] ?? 0) === ((s as any).coatworntype ?? 0)  &&  ((s as any).locArgs?.[2] ?? 0) === ((s as any).coatwornnumber ?? 0)) {
    qspCall(s, 'coats', 'strip_code');
    (s as any).lastworncoatnumber = 0;
  }
  return;
  scene.build();
}

function enterResetImmutables(s: GameState, scene: SceneBuilder): void {
  return;
  scene.build();
}

function enterDispose(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'coats', 'remove_item', ((s as any).coatworntype ?? 0), ((s as any).coatwornnumber ?? 0));
  return;
  scene.build();
}

function enterMoveToWardrobe(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).ARGS ?? {})[1] = ((s as any).coatworntype ?? 0);
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    ((s as any).ARGS ?? {})[2] = ((s as any).coatwornnumber ?? 0);
  }
  if (qspFunc(s, 'coats', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "coats" }))) {
    // TODO-QSP: dynamic "<<$ARGS[1]>>_coats_s[<<ARGS[2]>>] = 0"
  }
  return;
  scene.build();
}

function enterMoveToStorage(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).ARGS ?? {})[1] = ((s as any).coatworntype ?? 0);
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    ((s as any).ARGS ?? {})[2] = ((s as any).coatwornnumber ?? 0);
  }
  if (qspFunc(s, 'coats', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "coats" }))) {
    // TODO-QSP: dynamic "<<$ARGS[1]>>_coats_s[<<ARGS[2]>>] = 1"
  }
  return;
  scene.build();
}

function enterMoveToUnwanted(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).ARGS ?? {})[1] = ((s as any).coatworntype ?? 0);
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    ((s as any).ARGS ?? {})[2] = ((s as any).coatwornnumber ?? 0);
  }
  if (qspFunc(s, 'coats', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "coats" }))) {
    // TODO-QSP: dynamic "<<$ARGS[1]>>_coats_s[<<ARGS[2]>>] = 2"
  }
  return;
  scene.build();
}

function enterRemove(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'coats', 'strip');
  return;
  scene.build();
}

function enterStrip(s: GameState, scene: SceneBuilder): void {
  if (((s as any).coatworntype ?? 0) === '') {
    (s as any).coatwornnumber = 0;
  }
  (s as any).lastworncoatnumber = ((s as any).coatwornnumber ?? 0);
  qspCall(s, 'coats', 'strip_code');
  return;
  scene.build();
}

function enterStripCode(s: GameState, scene: SceneBuilder): void {
  (s as any).coatwornnumber = 0;
  qspCall(s, 'coats', 'reset_CoatVars');
  qspCall(s, 'coats', 'reset_PCoatVars');
  qspCall(s, 'outfit', 'set_derived_vars');
  return;
  scene.build();
}

function enterReset_CoatVars(s: GameState, scene: SceneBuilder): void {
  (s as any).CoatWarm = 0;
  (s as any).CoatQuality = 0;
  (s as any).CoatPrice = 0;
  (s as any).CoatStrength = 0;
  (s as any).CoatMaxStrength = 0;
  return;
  scene.build();
}

function enterReset_PCoatVars(s: GameState, scene: SceneBuilder): void {
  (s as any).PCoatWarm = 0;
  (s as any).PCoatQuality = 0;
  (s as any).PCoatPrice = 0;
  (s as any).PCoatStrength = 0;
  (s as any).PCoatMaxStrength = 0;
  (s as any).PCoatBorrowed = 0;
  return;
  scene.build();
}

function enterWear(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'last_worn') {
    // TODO-QSP: $ARGS[1] = $lastworncoattype
    ((s as any).ARGS ?? {})[2] = ((s as any).lastworncoatnumber ?? 0);
  }
  if (((s as any).locArgs?.[1] ?? 0) === ''  ||  ((s as any).locArgs?.[1] ?? 0) === 'none') {
    // TODO-QSP: exit
  }
  qspCall(s, 'coats', 'strip');
  // TODO-QSP: gs 'coat_attributes', $ARGS[1], ARGS[2]
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('check') : -1) > 0) {
    if (((s as any).temp_not_wear_reason ?? 0) !== '') {
      if (((s as any).temp_not_wear_reason ?? 0) === 'not_owned') {
      }
      return;
    }
  }
  (s as any).coatwornnumber = qspUntranslated(s, "ARGS[2]", { location: "coats" });
  // TODO-QSP: dynamic "
  // TODO-QSP: <<$ARGS[1]>>_coats_w[<<ARGS[2]>>] = 1
  // TODO-QSP: "
  (s as any).PCoatWarm = ((s as any).CoatWarm ?? 0);
  (s as any).PCoatQuality = ((s as any).CoatQuality ?? 0);
  (s as any).PCoatPrice = ((s as any).CoatPrice ?? 0);
  (s as any).PCoatStrength = ((s as any).CoatStrength ?? 0);
  (s as any).PCoatMaxStrength = ((s as any).CoatMaxStrength ?? 0);
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('borrowed') : -1) >= 0) {
    (s as any).PCoatBorrowed = 1;
    (s as any).PCoatStrength = ((s as any).PCoatMaxStrength ?? 0);
  }
  qspCall(s, 'outfit', 'set_derived_vars');
  return;
  scene.build();
}

function enterIncreaseCurStrength(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) <= 0) {
    ((s as any).ARGS ?? {})[1] = 1;
  }
  // TODO-QSP: gs 'coats', 'increase_strength', $coatworntype, coatwornnumber, ARGS[1]
  return;
  scene.build();
}

function enterDecreaseCurStrength(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) <= 0) {
    ((s as any).ARGS ?? {})[1] = 1;
  }
  // TODO-QSP: gs 'coats', 'decrease_strength', $coatworntype, coatwornnumber, ARGS[1]
  return;
  scene.build();
}

function enterIncreaseStrength(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).ARGS ?? {})[1] = ((s as any).coatworntype ?? 0);
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    ((s as any).ARGS ?? {})[2] = ((s as any).coatwornnumber ?? 0);
  }
  if (((s as any).locArgs?.[3] ?? 0) <= 0) {
    ((s as any).ARGS ?? {})[3] = 1;
  }
  if (qspFunc(s, 'coats', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "coats" }))) {
    // TODO-QSP: gs 'coat_attributes', $ARGS[1], ARGS[2]
    // TODO-QSP: dynamic "
    // TODO-QSP: <<$ARGS[1]>>_coats_h[<<ARGS[2]>>] = min(<<$ARGS[1]>>_coats_h[<<ARGS[2]>>] + <<ARGS[3]>>, <<CoatMaxSt...
    if (((s as any).locArgs?.[1] ?? 0) === ((s as any).coatworntype ?? 0)  &&  ((s as any).locArgs?.[2] ?? 0) === ((s as any).coatwornnumber ?? 0)) {
      (s as any).PCoatStrength = qspUntranslated(s, "((s as any).locArgs?.[1] ?? 0)_coats_h[qspUntranslated(s, \"ARGS[2]\", { location: \"coats\" })]", { location: "coats" });
    }
    // TODO-QSP: "
  }
  return;
  scene.build();
}

function enterDecreaseStrength(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).ARGS ?? {})[1] = ((s as any).coatworntype ?? 0);
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    ((s as any).ARGS ?? {})[2] = ((s as any).coatwornnumber ?? 0);
  }
  if (((s as any).locArgs?.[3] ?? 0) <= 0) {
    ((s as any).ARGS ?? {})[3] = 1;
  }
  if (qspFunc(s, 'coats', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "coats" }))) {
    // TODO-QSP: dynamic "
    // TODO-QSP: <<$ARGS[1]>>_coats_h[<<ARGS[2]>>] -= <<ARGS[3]>>
    if (((s as any).locArgs?.[1] ?? 0)((s as any)._coats_h ?? 0)[((s as any).locArgs?.[2] ?? 0)] < 0) {
      // TODO-QSP: <<$ARGS[1]>>_coats_h[<<ARGS[2]>>] = 0
    }
    if (((s as any).locArgs?.[1] ?? 0) === ((s as any).coatworntype ?? 0)  &&  ((s as any).locArgs?.[2] ?? 0) === ((s as any).coatwornnumber ?? 0)) {
      (s as any).PCoatStrength = qspUntranslated(s, "((s as any).locArgs?.[1] ?? 0)_coats_h[qspUntranslated(s, \"ARGS[2]\", { location: \"coats\" })]", { location: "coats" });
    }
    // TODO-QSP: "
  }
  return;
  scene.build();
}

function enterSetShopDisplayExceptions(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'coat_view', 'init', 'set_exceptions');
  return;
  scene.build();
}

function enterViewCoatList(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'coat_view', 'view_grid', $ARGS[1]
  scene.build();
}

function enterViewCoatItem(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'coat_view', 'view_item', $ARGS[1], $ARGS[2], ARGS[3], ARGS[4]
  scene.build();
}

function enterDest0(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'coats', 'move_to_wardrobe', $ARGS[2], ARGS[3]
  // TODO-QSP: gt 'coat_view', 'view_item', $ARGS[1], $ARGS[2], ARGS[3], ARGS[4]
  scene.build();
}

function enterDest1(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'coats', 'move_to_storage', $ARGS[2], ARGS[3]
  // TODO-QSP: gt 'coat_view', 'view_item', $ARGS[1], $ARGS[2], ARGS[3], ARGS[4]
  scene.build();
}

function enterDest2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'coats', 'move_to_unwanted', $ARGS[2], ARGS[3]
  // TODO-QSP: gt 'coat_view', 'view_item', $ARGS[1], $ARGS[2], ARGS[3], ARGS[4]
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
    case 'is_wearing_any':
      enterIsWearingAny(s, scene);
      break;
    case 'is_wearing':
      enterIsWearing(s, scene);
      break;
    case 'is_immutable':
      enterIsImmutable(s, scene);
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
    case 'reset_CoatVars':
      enterReset_CoatVars(s, scene);
      break;
    case 'reset_PCoatVars':
      enterReset_PCoatVars(s, scene);
      break;
    case 'wear':
      enterWear(s, scene);
      break;
    case 'increase_cur_strength':
      enterIncreaseCurStrength(s, scene);
      break;
    case 'decrease_cur_strength':
      enterDecreaseCurStrength(s, scene);
      break;
    case 'increase_strength':
      enterIncreaseStrength(s, scene);
      break;
    case 'decrease_strength':
      enterDecreaseStrength(s, scene);
      break;
    case 'set_shop_display_exceptions':
      enterSetShopDisplayExceptions(s, scene);
      break;
    case 'view_coat_list':
      enterViewCoatList(s, scene);
      break;
    case 'view_coat_item':
      enterViewCoatItem(s, scene);
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
    default:
      enterDefault(s, scene);
      break;
  }
}

export const coats: LocationDef = {
  name: 'coats',
  region: 'other',
  enter: enter,
};
