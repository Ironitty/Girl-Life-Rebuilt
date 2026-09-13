import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGetTotal(s: GameState, scene: SceneBuilder): void {
  if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'bomba') {
    (s as any).result = 40;
  } else {
    if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'cats') {
      (s as any).result = 40;
    } else {
      if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(10))) === 'danilovich') {
        (s as any).result = 40;
      } else {
        if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'dolls') {
          (s as any).result = 120;
        } else {
          if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'eroto') {
            (s as any).result = 40;
          } else {
            if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(2))) === 'gm') {
              (s as any).result = 30;
            } else {
              if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(8))) === 'moncheri') {
                (s as any).result = 140;
              } else {
                if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(13))) === 'scandalicious') {
                  (s as any).result = 80;
                }
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
  (s as any).total = qspFunc(s, 'shoes', 'get_total', ((s as any).locArgs?.[1] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterMoncheri(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'shoe_attributes', $ARGS[0], ARGS[1]
  return;
  scene.build();
}

function enterCats(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'shoe_attributes', $ARGS[0], ARGS[1]
  return;
  scene.build();
}

function enterBomba(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'shoe_attributes', $ARGS[0], ARGS[1]
  return;
  scene.build();
}

function enterDolls(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'shoe_attributes', $ARGS[0], ARGS[1]
  return;
  scene.build();
}

function enterGm(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'shoe_attributes', $ARGS[0], ARGS[1]
  return;
  scene.build();
}

function enterEroto(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'shoe_attributes', $ARGS[0], ARGS[1]
  return;
  scene.build();
}

function enterScandalicious(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'shoe_attributes', $ARGS[0], ARGS[1]
  return;
  scene.build();
}

function enterDanilovich(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'shoe_attributes', $ARGS[0], ARGS[1]
  return;
  // TODO-QSP: end
  scene.build();
}

function enterNotWearReason(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[1] = ((s as any).shoeworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = ((s as any).shoewornnumber ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 3) {
    // TODO-QSP: gs 'shoe_attributes', $ARGS[1], ARGS[2]
  }
  if (qspFunc(s, 'shoes', 'is_immutable', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "shoes" }))) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'shoes', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "shoes" })) === 0) {
    return;
  }
  if (qspFunc(s, 'shoes', 'in_wardrobe', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "shoes" })) === 0) {
    return;
  }
  if (qspFunc(s, 'shoes', 'is_strength_low', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "shoes" }))) {
    return;
  }
  if (((s as any).pcs_heels ?? 0) < ((s as any).ShoSkill ?? 0)) {
    return;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCanWear(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[1] = ((s as any).shoeworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = ((s as any).shoewornnumber ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 3) {
    // TODO-QSP: gs 'shoe_attributes', $ARGS[1], ARGS[2]
  }
  (s as any).result = (qspFunc(s, 'shoes', 'not_wear_reason', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "shoes" }), 'attributes_set') === '');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsOwned(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[1] = ((s as any).shoeworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = ((s as any).shoewornnumber ?? 0);
  }
  (s as any).result = 0;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterInWardrobe(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[1] = ((s as any).shoeworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = ((s as any).shoewornnumber ?? 0);
  }
  (s as any).result = 0;
  if (qspFunc(s, 'shoes', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "shoes" }))) {
    (s as any).result = 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterInStorage(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[1] = ((s as any).shoeworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = ((s as any).shoewornnumber ?? 0);
  }
  (s as any).result = 0;
  if (qspFunc(s, 'shoes', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "shoes" }))) {
    (s as any).result = 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterInUnwanted(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[1] = ((s as any).shoeworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = ((s as any).shoewornnumber ?? 0);
  }
  (s as any).result = 0;
  if (qspFunc(s, 'shoes', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "shoes" }))) {
    (s as any).result = 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsStrengthLow(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[1] = ((s as any).shoeworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = ((s as any).shoewornnumber ?? 0);
  }
  (s as any).result = 0;
  if (qspFunc(s, 'shoes', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "shoes" }))) {
    (s as any).result = 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsWearingAny(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).shoeworntype ?? 0) !== ''  &&  ((s as any).shoeworntype ?? 0) !== 'none');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsWearing(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).shoeworntype ?? 0) === ((s as any).locArgs?.[1] ?? 0)  &&  ((s as any).shoewornnumber ?? 0) === ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsImmutable(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[1] = ((s as any).shoeworntype ?? 0);
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = ((s as any).shoewornnumber ?? 0);
  }
  (s as any).result = (((s as any).locArgs?.[1] ?? 0) === 'gm'  &&  ((s as any).locArgs?.[2] ?? 0) === 6);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterShoesOwned(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[1] = ((s as any).shoeworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = ((s as any).shoewornnumber ?? 0);
  }
  (s as any).result = qspFunc(s, 'shoes', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "shoes" }));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterAddItem(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    // TODO-QSP: exit
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    // TODO-QSP: exit
  }
  // TODO-QSP: gs 'shoe_attributes', $ARGS[1], ARGS[2]
  if ((!((s as any).ShoQuality ?? 0))) {
    // TODO-QSP: exit
  }
  // TODO-QSP: dynamic "
  // TODO-QSP: <<$ARGS[1]>>_shoe[<<ARGS[2]>>] = 1
  // TODO-QSP: <<$ARGS[1]>>_shoe_s[<<ARGS[2]>>] = 0
  // TODO-QSP: <<$ARGS[1]>>_shoe_h[<<ARGS[2]>>] = ShoStrength
  // TODO-QSP: "
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRemoveItem(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[1] = ((s as any).shoeworntype ?? 0);
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = ((s as any).shoewornnumber ?? 0);
  }
  if (((s as any).locArgs?.[1] ?? 0) === ''  ||  ((s as any).locArgs?.[1] ?? 0) === 'none') {
    // TODO-QSP: exit
  }
  // TODO-QSP: dynamic "
  // TODO-QSP: <<$ARGS[1]>>_shoe[<<ARGS[2]>>] = 0
  // TODO-QSP: <<$ARGS[1]>>_shoe_s[<<ARGS[2]>>] = 0
  // TODO-QSP: <<$ARGS[1]>>_shoe_h[<<ARGS[2]>>] = 0
  // TODO-QSP: "
  if (((s as any).locArgs?.[1] ?? 0) === ((s as any).shoeworntype ?? 0)  &&  ((s as any).locArgs?.[2] ?? 0) === ((s as any).shoewornnumber ?? 0)) {
    qspCall(s, 'shoes', 'strip_code');
    (s as any).lastwornshoenumber = 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterResetImmutables(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).gm_shoe) (s as any).gm_shoe = {}; (s as any).gm_shoe[6] = 1;
  if (!(s as any).gm_shoe_s) (s as any).gm_shoe_s = {}; (s as any).gm_shoe_s[6] = 0;
  if (!(s as any).gm_shoe_h) (s as any).gm_shoe_h = {}; (s as any).gm_shoe_h[6] = 10000;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDispose(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'shoes', 'remove_item', ((s as any).shoeworntype ?? 0), ((s as any).shoewornnumber ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterMoveToWardrobe(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[1] = ((s as any).shoeworntype ?? 0);
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = ((s as any).shoewornnumber ?? 0);
  }
  if (qspFunc(s, 'shoes', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "shoes" }))) {
    // TODO-QSP: dynamic "<<$ARGS[1]>>_shoe_s[<<ARGS[2]>>] = 0"
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterMoveToStorage(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[1] = ((s as any).shoeworntype ?? 0);
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = ((s as any).shoewornnumber ?? 0);
  }
  if (qspFunc(s, 'shoes', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "shoes" }))) {
    // TODO-QSP: dynamic "<<$ARGS[1]>>_shoe_s[<<ARGS[2]>>] = 1"
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterMoveToUnwanted(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[1] = ((s as any).shoeworntype ?? 0);
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = ((s as any).shoewornnumber ?? 0);
  }
  if (qspFunc(s, 'shoes', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "shoes" }))) {
    // TODO-QSP: dynamic "<<$ARGS[1]>>_shoe_s[<<ARGS[2]>>] = 2"
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterStrip(s: GameState, scene: SceneBuilder): void {
  if (((s as any).shoeworntype ?? 0) === '') {
    (s as any).shoewornnumber = 0;
  }
  (s as any).lastwornshoenumber = ((s as any).shoewornnumber ?? 0);
  qspCall(s, 'shoes', 'strip_code');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterStripCode(s: GameState, scene: SceneBuilder): void {
  (s as any).shoewornnumber = 0;
  qspCall(s, 'shoes', 'reset_ShoVars');
  qspCall(s, 'shoes', 'reset_PShoVars');
  qspCall(s, 'outfit', 'set_derived_vars');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterReset_ShoVars(s: GameState, scene: SceneBuilder): void {
  (s as any).ShoQuality = 0;
  (s as any).ShoHeels = 0;
  (s as any).ShoCut = 0;
  (s as any).ShoStyle = 0;
  (s as any).ShoStyle2 = 0;
  (s as any).ShoStrip = 0;
  (s as any).ShoSport = 0;
  (s as any).ShoBimbo = 0;
  (s as any).ShoGoth = 0;
  (s as any).ShoPunk = 0;
  (s as any).ShoPrice = 0;
  (s as any).ShoStrength = 0;
  (s as any).ShoMaxStrength = 0;
  (s as any).ShoSkill = 0;
  if (!(s as any).ShoPain) (s as any).ShoPain = {}; (s as any).ShoPain['severe'] = 0;
  if (!(s as any).ShoPain) (s as any).ShoPain = {}; (s as any).ShoPain['medium'] = 0;
  if (!(s as any).ShoPain) (s as any).ShoPain = {}; (s as any).ShoPain['mild'] = 0;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterReset_PShoVars(s: GameState, scene: SceneBuilder): void {
  (s as any).PShoQuality = 0;
  (s as any).PShoHeels = 0;
  (s as any).PShoCut = 0;
  (s as any).PShoStyle = 0;
  (s as any).PShoStyle2 = 0;
  (s as any).PShoStrip = 0;
  (s as any).PShoSport = 0;
  (s as any).PShoBimbo = 0;
  (s as any).PShoGoth = 0;
  (s as any).PShoPunk = 0;
  (s as any).PShoPrep = 0;
  (s as any).PShoPrude = 0;
  (s as any).PShoPrice = 0;
  (s as any).PShoStrength = 0;
  (s as any).PShoMaxStrength = 0;
  (s as any).PShoSkill = 0;
  if (!(s as any).PShoPain) (s as any).PShoPain = {}; (s as any).PShoPain['severe'] = 0;
  if (!(s as any).PShoPain) (s as any).PShoPain = {}; (s as any).PShoPain['medium'] = 0;
  if (!(s as any).PShoPain) (s as any).PShoPain = {}; (s as any).PShoPain['mild'] = 0;
  (s as any).PShoBorrowed = 0;
  (s as any).PXShoHeels = 0;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterWear(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'last_worn') {
    // TODO-QSP: $ARGS[1] = $lastwornshoetype
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = ((s as any).lastwornshoenumber ?? 0);
  }
  if (((s as any).locArgs?.[1] ?? 0) === ''  ||  ((s as any).locArgs?.[1] ?? 0) === 'none') {
    // TODO-QSP: exit
  }
  qspCall(s, 'shoes', 'strip');
  // TODO-QSP: gs 'shoe_attributes', $ARGS[1], ARGS[2]
  if ((!((s as any).ShoQuality ?? 0))) {
    return;
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('check') : -1) > 0) {
    if (((s as any).temp_not_wear_reason ?? 0) !== '') {
      if (((s as any).temp_not_wear_reason ?? 0) === 'not_owned') {
      } else {
        if (((s as any).temp_not_wear_reason ?? 0) === 'not_in_wardrobe') {
        } else {
          if (((s as any).temp_not_wear_reason ?? 0) === 'low_heels_skill') {
          }
        }
      }
      return;
    }
  }
  (s as any).shoewornnumber = qspUntranslated(s, "ARGS[2]", { location: "shoes" });
  // TODO-QSP: dynamic "
  // TODO-QSP: <<$shoeworntype>>_shoe_s[<<shoewornnumber>>] = 0
  // TODO-QSP: "
  (s as any).PShoQuality = ((s as any).ShoQuality ?? 0);
  (s as any).PShoHeels = ((s as any).ShoHeels ?? 0);
  (s as any).PShoCut = ((s as any).ShoCut ?? 0);
  (s as any).PShoStyle = ((s as any).ShoStyle ?? 0);
  (s as any).PShoStyle2 = ((s as any).ShoStyle2 ?? 0);
  (s as any).PShoBimbo = ((s as any).ShoBimbo ?? 0);
  (s as any).PShoGoth = ((s as any).ShoGoth ?? 0);
  (s as any).PShoPunk = ((s as any).ShoPunk ?? 0);
  (s as any).PShoPrep = ((s as any).ShoPrep ?? 0);
  (s as any).PShoPrude = ((s as any).ShoPrude ?? 0);
  (s as any).PShoPrice = ((s as any).ShoPrice ?? 0);
  (s as any).PShoStrength = ((s as any).ShoStrength ?? 0);
  (s as any).PShoMaxStrength = ((s as any).ShoMaxStrength ?? 0);
  (s as any).PShoSkill = ((s as any).ShoSkill ?? 0);
  (s as any).PShoStrip = ((s as any).ShoStrip ?? 0);
  (s as any).PShoSport = ((s as any).ShoSport ?? 0);
  if (!(s as any).PShoPain) (s as any).PShoPain = {}; (s as any).PShoPain['severe'] = ((s as any).ShoPain ?? 0)?.['severe'];
  if (!(s as any).PShoPain) (s as any).PShoPain = {}; (s as any).PShoPain['medium'] = ((s as any).ShoPain ?? 0)?.['medium'];
  if (!(s as any).PShoPain) (s as any).PShoPain = {}; (s as any).PShoPain['mild'] = ((s as any).ShoPain ?? 0)?.['mild'];
  if ((!((s as any).PShoHeels ?? 0))) {
    (s as any).PXShoHeels = 0;
  } else {
    if (((s as any).PShoHeels ?? 0) === 1) {
      (s as any).PXShoHeels = 25;
    } else {
      if (((s as any).PShoHeels ?? 0) === 2) {
        (s as any).PXShoHeels = 50;
      } else {
        if (((s as any).PShoHeels ?? 0) === 3) {
          (s as any).PXShoHeels = 100;
        } else {
          if (((s as any).PShoHeels ?? 0) === 4) {
            (s as any).PXShoHeels = 150;
          } else {
            if (((s as any).PShoHeels ?? 0) === 5) {
              (s as any).PXShoHeels = 200;
            } else {
              if (((s as any).PShoHeels ?? 0) === 6) {
                (s as any).PXShoHeels = 300;
              } else {
                (s as any).PXShoHeels = 400;
              }
            }
          }
        }
      }
    }
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('borrowed') : -1) >= 0) {
    (s as any).PShoBorrowed = 1;
    (s as any).PShoStrength = ((s as any).PShoMaxStrength ?? 0);
  }
  qspCall(s, 'outfit', 'set_derived_vars');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIncreaseCurStrength(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) <= 0) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[1] = 1;
  }
  // TODO-QSP: gs 'shoes', 'increase_strength', $shoeworntype, shoewornnumber, ARGS[1]
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDecreaseCurStrength(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) <= 0) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[1] = 1;
  }
  // TODO-QSP: gs 'shoes', 'decrease_strength', $shoeworntype, shoewornnumber, ARGS[1]
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIncreaseStrength(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[1] = ((s as any).shoeworntype ?? 0);
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = ((s as any).shoewornnumber ?? 0);
  }
  if (((s as any).locArgs?.[3] ?? 0) <= 0) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[3] = 1;
  }
  if (qspFunc(s, 'shoes', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "shoes" }))) {
    // TODO-QSP: gs 'shoe_attributes', $ARGS[1], ARGS[2]
    // TODO-QSP: dynamic "
    // TODO-QSP: <<$ARGS[1]>>_shoe_h[<<ARGS[2]>>] = min(<<$ARGS[1]>>_shoe_h[<<ARGS[2]>>] + <<ARGS[3]>>, <<ShoMaxStren...
    if (((s as any).locArgs?.[1] ?? 0) === ((s as any).shoeworntype ?? 0)  &&  ((s as any).locArgs?.[2] ?? 0) === ((s as any).shoewornnumber ?? 0)) {
      (s as any).PShoStrength = qspUntranslated(s, "((s as any).locArgs?.[1] ?? 0)_shoe_h[qspUntranslated(s, \"ARGS[2]\", { location: \"shoes\" })]", { location: "shoes" });
    }
    // TODO-QSP: "
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDecreaseStrength(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[1] = ((s as any).shoeworntype ?? 0);
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = ((s as any).shoewornnumber ?? 0);
  }
  if (((s as any).locArgs?.[3] ?? 0) <= 0) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[3] = 1;
  }
  if (qspFunc(s, 'shoes', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "shoes" }))) {
    // TODO-QSP: dynamic "
    // TODO-QSP: <<$ARGS[1]>>_shoe_h[<<ARGS[2]>>] -= <<ARGS[3]>>
    if (((s as any).locArgs?.[1] ?? 0)((s as any)._shoe_h ?? 0)[((s as any).locArgs?.[2] ?? 0)] < 0) {
      // TODO-QSP: <<$ARGS[1]>>_shoe_h[<<ARGS[2]>>] = 0
    }
    if (((s as any).locArgs?.[1] ?? 0) === ((s as any).shoeworntype ?? 0)  &&  ((s as any).locArgs?.[2] ?? 0) === ((s as any).shoewornnumber ?? 0)) {
      (s as any).PShoStrength = qspUntranslated(s, "((s as any).locArgs?.[1] ?? 0)_shoe_h[qspUntranslated(s, \"ARGS[2]\", { location: \"shoes\" })]", { location: "shoes" });
    }
    // TODO-QSP: "
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSetShopDisplayExceptions(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'shoe_view', 'init', 'set_exceptions');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterShoeListLine(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'shoe_view', 'list_line', $ARGS[1], $ARGS[2], ARGS[3], ARGS[4]
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDest0(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'shoes', 'move_to_wardrobe', $ARGS[2], ARGS[3]
  // TODO-QSP: gt 'shoe_view', 'view_list', $ARGS[1]
  // TODO-QSP: end
  scene.build();
}

function enterDest1(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'shoes', 'move_to_storage', $ARGS[2], ARGS[3]
  // TODO-QSP: gt 'shoe_view', 'view_list', $ARGS[1]
  // TODO-QSP: end
  scene.build();
}

function enterDest2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'shoes', 'move_to_unwanted', $ARGS[2], ARGS[3]
  // TODO-QSP: gt 'shoe_view', 'view_list', $ARGS[1]
  // TODO-QSP: end
  scene.build();
}

function enterViewShoeList(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'shoe_view', 'view_list', $ARGS[1], $ARGS[2]
  // TODO-QSP: end
  scene.build();
}

function enterViewShoeItem(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'shoe_view', 'view_item', $ARGS[1], $ARGS[2], ARGS[3], ARGS[4]
  // TODO-QSP: end
  scene.build();
}

function enterGym(s: GameState, scene: SceneBuilder): void {
  if (((s as any).regularwornshoetype ?? 0) === '') {
    (s as any).regularwornshoenumber = ((s as any).shoewornnumber ?? 0);
  }
  scene.img('images/locations/city/citycenter/mall/sports.png');
  (s as any).i = 1;
  // TODO-QSP: :loopdanilovich_shoe2
  if (qspFunc(s, 'shoes', 'can_wear', 'danilovich', ((s as any).i ?? 0))) {
    // TODO-QSP: dynamic text: <a href="exec:gt 'shoe_view', 'view_item', 'wardrobe', 'danilovich', <<i>>"><img...
    scene.text(`<a href="exec:gt 'shoe_view', 'view_item', 'wardrobe', 'danilovich', ${((s as any).i ?? 0)}"><img height="250" src="images/pc/items/danilovich/shoes/${((s as any).i ?? 0)}.jpg"/></a>`);
  }
  (s as any).i = ((s as any).i ?? 0) + (1);
  if (((s as any).i ?? 0) <= 40) {
    // TODO-QSP: jump 'loopdanilovich_shoe2'
  }
  if (((s as any).shoeworntype ?? 0) !== ((s as any).regularwornshoetype ?? 0)) {
    qspCall(s, 'shoes', 'gym2');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterGym2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Put your regular shoes back on', handler: (st: GameState) => {
    (s as any).shoewornnumber = ((s as any).regularwornshoenumber ?? 0);
  }, goto: ['shoes', 'gym'] },
  ]);
  scene.build();
}

function enterGetFilterHeader(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'shoe_view', 'filter_builder', 'setup_home_filters');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetShopFilterHeader(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'shoe_view', 'shop_filter_header');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetFilterHeaderBase(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[0] ?? 0) === 'shop') {
    qspCall(s, 'shoe_view', 'filter_builder', 'setup_shop_filters');
  } else {
    qspCall(s, 'shoe_view', 'filter_builder', 'setup_home_filterS');
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetShoelistHeader(s: GameState, scene: SceneBuilder): void {
  return;
  // TODO-QSP: end
  scene.build();
}

function enterShoeFilter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'shoe_view', 'home_filter');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterShopFilter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'shoe_view', 'shop_filter');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterFilterBase(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[0] ?? 0) === 'shop') {
    qspCall(s, 'shoe_view', 'shop_filter');
  } else {
    qspCall(s, 'shoe_view', 'home_base');
  }
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
    case 'moncheri':
      enterMoncheri(s, scene);
      break;
    case 'cats':
      enterCats(s, scene);
      break;
    case 'bomba':
      enterBomba(s, scene);
      break;
    case 'dolls':
      enterDolls(s, scene);
      break;
    case 'gm':
      enterGm(s, scene);
      break;
    case 'eroto':
      enterEroto(s, scene);
      break;
    case 'scandalicious':
      enterScandalicious(s, scene);
      break;
    case 'danilovich':
      enterDanilovich(s, scene);
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
    case 'shoes_owned':
      enterShoesOwned(s, scene);
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
    case 'strip':
      enterStrip(s, scene);
      break;
    case 'strip_code':
      enterStripCode(s, scene);
      break;
    case 'reset_ShoVars':
      enterReset_ShoVars(s, scene);
      break;
    case 'reset_PShoVars':
      enterReset_PShoVars(s, scene);
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
    case 'shoe_list_line':
      enterShoeListLine(s, scene);
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
    case 'view_shoe_list':
      enterViewShoeList(s, scene);
      break;
    case 'view_shoe_item':
      enterViewShoeItem(s, scene);
      break;
    case 'gym':
      enterGym(s, scene);
      break;
    case 'gym2':
      enterGym2(s, scene);
      break;
    case 'get_filter_header':
      enterGetFilterHeader(s, scene);
      break;
    case 'get_shop_filter_header':
      enterGetShopFilterHeader(s, scene);
      break;
    case 'get_filter_header_base':
      enterGetFilterHeaderBase(s, scene);
      break;
    case 'get_shoelist_header':
      enterGetShoelistHeader(s, scene);
      break;
    case 'shoe_filter':
      enterShoeFilter(s, scene);
      break;
    case 'shop_filter':
      enterShopFilter(s, scene);
      break;
    case 'filter_base':
      enterFilterBase(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const shoes: LocationDef = {
  name: 'shoes',
  region: 'other',
  enter: enter,
};
