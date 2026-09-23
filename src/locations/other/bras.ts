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
  if (String((s as any).locArgs?.[1] ?? '') === 'dresser') {
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
  (s as any).result = (((s as any).braworntype ?? 0) === String((s as any).locArgs?.[1] ?? '')  &&  ((s as any).brawornnumber ?? 0) === String((s as any).locArgs?.[2] ?? ''));
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
  (s as any).result = (String((s as any).locArgs?.[1] ?? '') === 'gm'  &&  String((s as any).locArgs?.[2] ?? '') === 1);
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
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    // TODO-QSP: exit
  }
  if (String((s as any).locArgs?.[2] ?? '') === 0) {
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
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).braworntype ?? 0);
  }
  if (String((s as any).locArgs?.[2] ?? '') === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).brawornnumber ?? 0);
  }
  if (String((s as any).locArgs?.[1] ?? '') === ''  ||  String((s as any).locArgs?.[1] ?? '') === 'none') {
    // TODO-QSP: exit
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'gm'  &&  String((s as any).locArgs?.[2] ?? '') === 1) {
    if (String((s as any).locArgs?.[1] ?? '') === ((s as any).braworntype ?? 0)  &&  String((s as any).locArgs?.[2] ?? '') === ((s as any).brawornnumber ?? 0)) {
      qspCall(s, 'bras', 'strip');
    }
    return;
  }
  // TODO-QSP: dynamic "
  // TODO-QSP: <<$ARGS[1]>>_bras[<<ARGS[2]>>] = 0
  // TODO-QSP: <<$ARGS[1]>>_brasS[<<ARGS[2]>>] = 0
  // TODO-QSP: <<$ARGS[1]>>_bras_dirt[<<ARGS[2]>>] = 0
  // TODO-QSP: <<$ARGS[1]>>_bras_h[<<ARGS[2]>>] = 0
  // TODO-QSP: "
  if (String((s as any).locArgs?.[1] ?? '') === ((s as any).braworntype ?? 0)  &&  String((s as any).locArgs?.[2] ?? '') === ((s as any).brawornnumber ?? 0)) {
    qspCall(s, 'bras', 'strip_code');
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
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).braworntype ?? 0);
  }
  if (String((s as any).locArgs?.[2] ?? '') === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).brawornnumber ?? 0);
  }
  if (qspFunc(s, 'bras', 'is_owned', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
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
