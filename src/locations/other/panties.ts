import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGetTotal(s: GameState, scene: SceneBuilder): void {
  if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'cats') {
    (s as any).result = 72;
  } else {
    if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(10))) === 'danilovich') {
      (s as any).result = 8;
    } else {
      if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'eroto') {
        (s as any).result = 43;
      } else {
        if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(11))) === 'fashionista') {
          (s as any).result = 79;
        } else {
          if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(2))) === 'gm') {
            (s as any).result = 37;
          } else {
            if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'lusso') {
              (s as any).result = 82;
            } else {
              if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(9))) === 'salacious') {
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
  if (String((s as any).locArgs?.[1] ?? '') === 'dresser') {
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
  do {
    if (qspFunc(s, 'panties', 'in_wardrobe', ((s as any).locArgs?.[1] ?? 0), ((s as any).panties_i ?? 0))) {
      (s as any).result = ((s as any).result ?? 0) + (1);
    }
    (s as any).panties_i = ((s as any).panties_i ?? 0) + (1);
    (s as any).panties_i = undefined;
    (s as any).panties_max_i = undefined;
    return;
  } while (((s as any).panties_i ?? 0) < ((s as any).panties_max_i ?? 0));
  scene.build();
}

function enterNotWearReason(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).pantyworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).pantywornnumber ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 3) {
    qspCall(s, 'underwear_attributes', '', ((s as any).locArgs?.[1] ?? 0) + '_panties', ((s as any).locArgs?.[2] ?? 0));
  }
  (s as any).result = '';
  if (qspFunc(s, 'panties', 'is_immutable', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
    return;
  }
  if (qspFunc(s, 'panties', 'is_owned', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0)) === 0) {
    (s as any).result = 'not_owned';
    return;
  }
  if (qspFunc(s, 'panties', 'in_wardrobe', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0)) === 0) {
    (s as any).result = 'not_in_wardrobe';
    return;
  }
  if (qspFunc(s, 'panties', 'is_strength_low', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
    (s as any).result = 'low_strength';
    return;
  }
  if (qspFunc(s, 'panties', 'is_hypno_approved', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0)) === 0) {
    (s as any).result = 'hypno';
    return;
  }
  return;
  scene.build();
}

function enterCanWear(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).pantyworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).pantywornnumber ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 3) {
    qspCall(s, 'underwear_attributes', '', ((s as any).locArgs?.[1] ?? 0) + '_panties', ((s as any).locArgs?.[2] ?? 0));
  }
  (s as any).result = (qspFunc(s, 'panties', 'not_wear_reason', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), 'attributes_set') === '');
  return;
  scene.build();
}

function enterIsOwned(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).pantyworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).pantywornnumber ?? 0);
  }
  (s as any).result = 0;
  return;
  scene.build();
}

function enterInWardrobe(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).pantyworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).pantywornnumber ?? 0);
  }
  (s as any).result = 0;
  if (qspFunc(s, 'panties', 'is_owned', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
    (s as any).result = 0;
  }
  return;
  scene.build();
}

function enterInStorage(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).pantyworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).pantywornnumber ?? 0);
  }
  (s as any).result = 0;
  if (qspFunc(s, 'panties', 'is_owned', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
    (s as any).result = 0;
  }
  return;
  scene.build();
}

function enterInUnwanted(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).pantyworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).pantywornnumber ?? 0);
  }
  (s as any).result = 0;
  if (qspFunc(s, 'panties', 'is_owned', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
    (s as any).result = 0;
  }
  return;
  scene.build();
}

function enterIsStrengthLow(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).pantyworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).pantywornnumber ?? 0);
  }
  (s as any).result = 0;
  if (qspFunc(s, 'panties', 'is_owned', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
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
  (s as any).result = (((s as any).pantyworntype ?? 0) === String((s as any).locArgs?.[1] ?? '')  &&  ((s as any).pantywornnumber ?? 0) === String((s as any).locArgs?.[2] ?? ''));
  return;
  scene.build();
}

function enterIsImmutable(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).pantyworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).pantywornnumber ?? 0);
  }
  (s as any).result = (String((s as any).locArgs?.[1] ?? '') === 'gm'  &&  String((s as any).locArgs?.[1] ?? '') === '1');
  return;
  scene.build();
}

function enterPantiesOwned(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).pantyworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).pantywornnumber ?? 0);
  }
  (s as any).result = qspFunc(s, 'panties', 'is_owned', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
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
  qspCall(s, 'underwear_attributes', '', ((s as any).locArgs?.[1] ?? 0) + '_panties', ((s as any).locArgs?.[2] ?? 0));
  if ((!((s as any).PanQuality ?? 0))) {
    return;
  }
  scene.build();
}

function enterRemoveItem(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).pantyworntype ?? 0);
  }
  if (String((s as any).locArgs?.[0] ?? '') === '0') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).pantywornnumber ?? 0);
  }
  if (String((s as any).locArgs?.[1] ?? '') === ''  ||  String((s as any).locArgs?.[1] ?? '') === 'none') {
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'gm'  &&  String((s as any).locArgs?.[1] ?? '') === '1') {
    if (String((s as any).locArgs?.[1] ?? '') === ((s as any).pantyworntype ?? 0)  &&  String((s as any).locArgs?.[2] ?? '') === ((s as any).pantywornnumber ?? 0)) {
      qspCall(s, 'panties', 'strip');
    }
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === ((s as any).pantyworntype ?? 0)  &&  String((s as any).locArgs?.[2] ?? '') === ((s as any).pantywornnumber ?? 0)) {
    qspCall(s, 'panties', 'strip_code');
    qspCall(s, 'outfit', 'set_derived_vars');
    (s as any).lastwornpantytype = 'none';
    (s as any).lastwornpantynumber = 0;
  }
  return;
  scene.build();
}

function enterResetImmutables(s: GameState, scene: SceneBuilder): void {
  ((s as any).gm_panties = (s as any).gm_panties ?? {})[1] = 1;
  ((s as any).gm_pantiesS = (s as any).gm_pantiesS ?? {})[1] = 0;
  ((s as any).gm_panties_dirt = (s as any).gm_panties_dirt ?? {})[1] = 1440;
  ((s as any).gm_panties_h = (s as any).gm_panties_h ?? {})[1] = 10;
  return;
  scene.build();
}

function enterDispose(s: GameState, scene: SceneBuilder): void {
  if (((s as any).underwear ?? 0)?.['type'] === 2) {
    qspCall(s, 'underwear_bodysuits', 'dispose');
    return;
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).pantyworntype ?? 0), ((s as any).pantywornnumber ?? 0)]; enterRemoveItem(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterMoveToWardrobe(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).pantyworntype ?? 0);
  }
  if (String((s as any).locArgs?.[0] ?? '') === '0') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).pantywornnumber ?? 0);
  }
  if (qspFunc(s, 'panties', 'is_owned', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
  }
  scene.build();
}

function enterStripCode(s: GameState, scene: SceneBuilder): void {
  (s as any).pantyworntype = 'none';
  (s as any).bodysuitworntype = 'none';
  (s as any).pantywornnumber = 0;
  (s as any).bodysuitwornnumber = 0;
  (s as any).isprokp = 0;
  qspCall(s, 'panties', 'reset_PanVars');
  qspCall(s, 'panties', 'reset_PPanVars');
  qspCall(s, 'outfit', 'set_derived_vars');
  scene.build();
}

function enterStrip(s: GameState, scene: SceneBuilder): void {
  if (((s as any).underwear ?? {})['type'] === 2) {
    qspCall(s, 'underwear_bodysuits', 'strip');
    scene.build();
    return;
  }
  if ((s as any).pantyworntype === '') {
    (s as any).pantyworntype = 'none';
    (s as any).pantywornnumber = 0;
  }
  (s as any).lastwornunderwear = 0;
  (s as any).lastwornpantytype = (s as any).pantyworntype;
  (s as any).lastwornpantynumber = (s as any).pantywornnumber;
  qspCall(s, 'panties', 'strip_code');
  scene.build();
}

function enterWear(s: GameState, scene: SceneBuilder): void {
  let arg1 = String((s as any).locArgs?.[1] ?? '');
  let arg2 = (s as any).locArgs?.[2] ?? 0;
  if (arg1 === '' || arg1 === 'last_worn') {
    if (((s as any).lastwornunderwear ?? 0) === 2) {
      qspCall(s, 'underwear_bodysuits', 'wear', 'last_worn');
      scene.build();
      return;
    }
    arg1 = String((s as any).lastwornpantytype ?? '');
    arg2 = (s as any).lastwornpantynumber ?? 0;
  }
  if (arg1 === '' || arg1 === 'none') {
    scene.build();
    return;
  }
  qspCall(s, 'panties', 'strip');
  qspCall(s, 'underwear_attributes', '', `${arg1}_panties`, arg2);
  if ((s as any).PanQuality === 0) {
    scene.text(`ERROR: Panties "${arg1}_panties[${arg2}]" do not exist`);
    scene.build();
    return;
  }
  const argsArr = (s as any).locArgs ?? [];
  if (argsArr.includes('check')) {
    const reason = qspFunc(s, 'panties', 'not_wear_reason', arg1, arg2, 'no_init');
    if (reason !== '' && reason !== 'hypno') {
      scene.build();
      return;
    }
  }
  (s as any).pantyworntype = arg1;
  (s as any).pantywornnumber = arg2;
  (s as any).underwear = { ...(s as any).underwear, type: 0 };
  ((s as any)[`${arg1}_pantiesS`] = (s as any)[`${arg1}_pantiesS`] ?? {})[arg2] = 0;
  (s as any).PPanMaterial = (s as any).PanMaterial;
  (s as any).PPanFun = (s as any).PanFun;
  (s as any).PPanQuality = (s as any).PanQuality;
  (s as any).PPanThinness = (s as any).PanThinness;
  (s as any).PPanCoverFront = (s as any).PanCoverFront;
  (s as any).PPanCoverBack = (s as any).PanCoverBack;
  (s as any).PPanSport = (s as any).PanSport;
  (s as any).PPanPrice = (s as any).PanPrice;
  (s as any).PPanDirt = (s as any).PanDirt;
  (s as any).PPanStrength = (s as any).PanStrength;
  (s as any).PPanMaxStrength = (s as any).PanMaxStrength;
  if (argsArr.includes('borrowed')) {
    (s as any).PPanBorrowed = 1;
    (s as any).PPanDirt = 0;
    (s as any).PPanStrength = (s as any).PPanMaxStrength;
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

export const panties: LocationDef = {
  name: 'panties',
  region: 'other',
  enter: enter,
};
