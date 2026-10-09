import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGetTotal(s: GameState, scene: SceneBuilder): void {
  if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'bomba') {
    (s as any).result = 20;
  } else {
    if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'cats') {
      (s as any).result = 20;
    } else {
      if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(10))) === 'danilovich') {
        (s as any).result = 20;
      } else {
        if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'dolls') {
          (s as any).result = 20;
        } else {
          if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(2))) === 'gm') {
            (s as any).result = 20;
          } else {
            if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(8))) === 'moncheri') {
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
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).coatworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).coatwornnumber ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 3) {
    qspCall(s, 'coat_attributes', '', (s as any).locArgs?.[1] ?? '', ((s as any).locArgs?.[2] ?? 0));
  }
  (s as any).result = '';
  if (qspFunc(s, 'coats', 'is_immutable', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
    return;
  }
  if (qspFunc(s, 'coats', 'is_owned', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0)) === 0) {
    (s as any).result = 'not_owned';
    return;
  }
  if (qspFunc(s, 'coats', 'in_wardrobe', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0)) === 0) {
    (s as any).result = 'not_in_wardrobe';
    return;
  }
  if (qspFunc(s, 'coats', 'is_strength_low', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
    (s as any).result = 'low_strength';
    return;
  }
  return;
  scene.build();
}

function enterCanWear(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).coatworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).coatwornnumber ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 3) {
    qspCall(s, 'coat_attributes', '', (s as any).locArgs?.[1] ?? '', ((s as any).locArgs?.[2] ?? 0));
  }
  (s as any).result = (qspFunc(s, 'coats', 'not_wear_reason', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), 'attributes_set') === '');
  return;
  scene.build();
}

function enterIsOwned(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).coatworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).coatwornnumber ?? 0);
  }
  (s as any).result = 0;
  return;
  scene.build();
}

function enterInWardrobe(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).coatworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).coatwornnumber ?? 0);
  }
  (s as any).result = 0;
  if (qspFunc(s, 'coats', 'is_owned', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
    (s as any).result = 0;
  }
  return;
  scene.build();
}

function enterInStorage(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).coatworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).coatwornnumber ?? 0);
  }
  (s as any).result = 0;
  if (qspFunc(s, 'coats', 'is_owned', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
    (s as any).result = 0;
  }
  return;
  scene.build();
}

function enterInUnwanted(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).coatworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).coatwornnumber ?? 0);
  }
  (s as any).result = 0;
  if (qspFunc(s, 'coats', 'is_owned', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
    (s as any).result = 0;
  }
  return;
  scene.build();
}

function enterIsStrengthLow(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).coatworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).coatwornnumber ?? 0);
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
  (s as any).result = (((s as any).coatworntype ?? 0) === String((s as any).locArgs?.[1] ?? '')  &&  ((s as any).coatwornnumber ?? 0) === String((s as any).locArgs?.[2] ?? ''));
  return;
  scene.build();
}

function enterIsImmutable(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  return;
  scene.build();
}

function enterAddItem(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === '0') {
    return;
  }
  qspCall(s, 'coat_attributes', '', (s as any).locArgs?.[1] ?? '', ((s as any).locArgs?.[2] ?? 0));
  if ((!((s as any).CoatQuality ?? 0))) {
    return;
  }
  return;
  scene.build();
}

function enterRemoveItem(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).coatworntype ?? 0);
  }
  if (String((s as any).locArgs?.[0] ?? '') === '0') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).coatwornnumber ?? 0);
  }
  if (String((s as any).locArgs?.[1] ?? '') === ''  ||  String((s as any).locArgs?.[1] ?? '') === 'none') {
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === ((s as any).coatworntype ?? 0)  &&  String((s as any).locArgs?.[2] ?? '') === ((s as any).coatwornnumber ?? 0)) {
    qspCall(s, 'coats', 'strip_code');
    (s as any).lastworncoattype = 'none';
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
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).coatworntype ?? 0), ((s as any).coatwornnumber ?? 0)]; enterRemoveItem(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterMoveToWardrobe(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).coatworntype ?? 0);
  }
  if (String((s as any).locArgs?.[0] ?? '') === '0') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).coatwornnumber ?? 0);
  }
  if (qspFunc(s, 'coats', 'is_owned', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
  }
  scene.build();
}

function enterStripCode(s: GameState, scene: SceneBuilder): void {
  (s as any).coatworntype = 'none';
  (s as any).coatwornnumber = 0;
  qspCall(s, 'coats', 'reset_CoatVars');
  qspCall(s, 'coats', 'reset_PCoatVars');
  qspCall(s, 'outfit', 'set_derived_vars');
  scene.build();
}

function enterStrip(s: GameState, scene: SceneBuilder): void {
  if ((s as any).coatworntype === '') {
    (s as any).coatworntype = 'none';
    (s as any).coatwornnumber = 0;
  }
  (s as any).lastworncoattype = (s as any).coatworntype;
  (s as any).lastworncoatnumber = (s as any).coatwornnumber;
  qspCall(s, 'coats', 'strip_code');
  scene.build();
}

function enterWear(s: GameState, scene: SceneBuilder): void {
  let arg1 = String((s as any).locArgs?.[1] ?? '');
  let arg2 = (s as any).locArgs?.[2] ?? 0;
  if (arg1 === 'last_worn') {
    arg1 = String((s as any).lastworncoattype ?? '');
    arg2 = (s as any).lastworncoatnumber ?? 0;
  }
  if (arg1 === '' || arg1 === 'none') {
    scene.build();
    return;
  }
  qspCall(s, 'coats', 'strip');
  qspCall(s, 'coat_attributes', '', arg1, arg2);
  const argsArr = (s as any).locArgs ?? [];
  if (argsArr.includes('check')) {
    const reason = qspFunc(s, 'coats', 'not_wear_reason', arg1, arg2, 'attributes_set');
    if (reason !== '') {
      scene.build();
      return;
    }
  }
  (s as any).coatworntype = arg1;
  (s as any).coatwornnumber = arg2;
  ((s as any)[`${arg1}_coats_w`] = (s as any)[`${arg1}_coats_w`] ?? {})[arg2] = 1;
  (s as any).PCoatWarm = (s as any).CoatWarm;
  (s as any).PCoatQuality = (s as any).CoatQuality;
  (s as any).PCoatPrice = (s as any).CoatPrice;
  (s as any).PCoatStrength = (s as any).CoatStrength;
  (s as any).PCoatMaxStrength = (s as any).CoatMaxStrength;
  if (argsArr.includes('borrowed')) {
    (s as any).PCoatBorrowed = 1;
    (s as any).PCoatStrength = (s as any).PCoatMaxStrength;
  }
  qspCall(s, 'outfit', 'set_derived_vars');
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
    case 'wear':
      enterWear(s, scene);
      break;
    case 'strip':
      enterStrip(s, scene);
      break;
    case 'strip_code':
      enterStripCode(s, scene);
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
