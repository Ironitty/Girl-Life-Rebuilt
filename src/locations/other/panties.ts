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
  // TODO-QSP: end
  scene.build();
}

function enterTotals(s: GameState, scene: SceneBuilder): void {
  (s as any).total = qspFunc(s, 'panties', 'get_total', ((s as any).locArgs?.[1] ?? 0));
  return;
  // TODO-QSP: end
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
  // TODO-QSP: end
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
  // TODO-QSP: end
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
    // TODO-QSP: exit
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
  // TODO-QSP: end
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
  // TODO-QSP: end
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
  // TODO-QSP: end
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
  // TODO-QSP: end
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
  // TODO-QSP: end
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
  // TODO-QSP: end
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
  // TODO-QSP: end
  scene.build();
}

function enterIsHypnoApproved(s: GameState, scene: SceneBuilder): void {
  (s as any).result = ((!((s as any).hypnoPanty ?? 0)));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsWearingAny(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).pantyworntype ?? 0) !== ''  &&  ((s as any).pantyworntype ?? 0) !== 'none');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsWearing(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).pantyworntype ?? 0) === String((s as any).locArgs?.[1] ?? '')  &&  ((s as any).pantywornnumber ?? 0) === String((s as any).locArgs?.[2] ?? ''));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsImmutable(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).pantyworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).pantywornnumber ?? 0);
  }
  (s as any).result = (String((s as any).locArgs?.[1] ?? '') === 'gm'  &&  String((s as any).locArgs?.[2] ?? '') === 1);
  return;
  // TODO-QSP: end
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
  // TODO-QSP: end
  scene.build();
}

function enterAddItem(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    // TODO-QSP: exit
  }
  if (String((s as any).locArgs?.[2] ?? '') === 0) {
    // TODO-QSP: exit
  }
  qspCall(s, 'underwear_attributes', '', ((s as any).locArgs?.[1] ?? 0) + '_panties', ((s as any).locArgs?.[2] ?? 0));
  if ((!((s as any).PanQuality ?? 0))) {
    // TODO-QSP: exit
  }
  // TODO-QSP: dynamic "
  // TODO-QSP: <<$ARGS[1]>>_panties[<<ARGS[2]>>] = 1
  // TODO-QSP: <<$ARGS[1]>>_pantiesS[<<ARGS[2]>>] = 0
  // TODO-QSP: <<$ARGS[1]>>_panties_dirt[<<ARGS[2]>>] = 0
  // TODO-QSP: <<$ARGS[1]>>_panties_h[<<ARGS[2]>>] = PanStrength
  // TODO-QSP: "
  // TODO-QSP: end
  scene.build();
}

function enterRemoveItem(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).pantyworntype ?? 0);
  }
  if (String((s as any).locArgs?.[2] ?? '') === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).pantywornnumber ?? 0);
  }
  if (String((s as any).locArgs?.[1] ?? '') === ''  ||  String((s as any).locArgs?.[1] ?? '') === 'none') {
    // TODO-QSP: exit
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'gm'  &&  String((s as any).locArgs?.[2] ?? '') === 1) {
    if (String((s as any).locArgs?.[1] ?? '') === ((s as any).pantyworntype ?? 0)  &&  String((s as any).locArgs?.[2] ?? '') === ((s as any).pantywornnumber ?? 0)) {
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
  if (String((s as any).locArgs?.[1] ?? '') === ((s as any).pantyworntype ?? 0)  &&  String((s as any).locArgs?.[2] ?? '') === ((s as any).pantywornnumber ?? 0)) {
    qspCall(s, 'panties', 'strip_code');
    qspCall(s, 'outfit', 'set_derived_vars');
    (s as any).lastwornpantytype = 'none';
    (s as any).lastwornpantynumber = 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterResetImmutables(s: GameState, scene: SceneBuilder): void {
  ((s as any).gm_panties = (s as any).gm_panties ?? {})[1] = 1;
  ((s as any).gm_pantiesS = (s as any).gm_pantiesS ?? {})[1] = 0;
  ((s as any).gm_panties_dirt = (s as any).gm_panties_dirt ?? {})[1] = 1440;
  ((s as any).gm_panties_h = (s as any).gm_panties_h ?? {})[1] = 10;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDispose(s: GameState, scene: SceneBuilder): void {
  if (((s as any).underwear ?? 0)?.['type'] === 2) {
    qspCall(s, 'underwear_bodysuits', 'dispose');
    return;
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).pantyworntype ?? 0), ((s as any).pantywornnumber ?? 0)]; enterRemoveItem(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterMoveToWardrobe(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).pantyworntype ?? 0);
  }
  if (String((s as any).locArgs?.[2] ?? '') === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).pantywornnumber ?? 0);
  }
  if (qspFunc(s, 'panties', 'is_owned', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
  }
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
