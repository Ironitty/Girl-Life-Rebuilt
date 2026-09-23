import { qspCall, qspFunc } from '../_shared/qspBridge';

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
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).shoeworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).shoewornnumber ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 3) {
    // TODO-QSP: gs 'shoe_attributes', $ARGS[1], ARGS[2]
  }
  (s as any).result = '';
  if (qspFunc(s, 'shoes', 'is_immutable', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'shoes', 'is_owned', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0)) === 0) {
    (s as any).result = 'not_owned';
    return;
  }
  if (qspFunc(s, 'shoes', 'in_wardrobe', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0)) === 0) {
    (s as any).result = 'not_in_wardrobe';
    return;
  }
  if (qspFunc(s, 'shoes', 'is_strength_low', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
    (s as any).result = 'low_strength';
    return;
  }
  if (((s as any).pcs_heels ?? 0) < ((s as any).ShoSkill ?? 0)) {
    (s as any).result = 'low_heels_skill';
    return;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCanWear(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).shoeworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).shoewornnumber ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 3) {
    // TODO-QSP: gs 'shoe_attributes', $ARGS[1], ARGS[2]
  }
  (s as any).result = (qspFunc(s, 'shoes', 'not_wear_reason', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), 'attributes_set') === '');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsOwned(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).shoeworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).shoewornnumber ?? 0);
  }
  (s as any).result = 0;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterInWardrobe(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).shoeworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).shoewornnumber ?? 0);
  }
  (s as any).result = 0;
  if (qspFunc(s, 'shoes', 'is_owned', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
    (s as any).result = 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterInStorage(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).shoeworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).shoewornnumber ?? 0);
  }
  (s as any).result = 0;
  if (qspFunc(s, 'shoes', 'is_owned', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
    (s as any).result = 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterInUnwanted(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).shoeworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).shoewornnumber ?? 0);
  }
  (s as any).result = 0;
  if (qspFunc(s, 'shoes', 'is_owned', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
    (s as any).result = 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsStrengthLow(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).shoeworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).shoewornnumber ?? 0);
  }
  (s as any).result = 0;
  if (qspFunc(s, 'shoes', 'is_owned', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
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
  (s as any).result = (((s as any).shoeworntype ?? 0) === String((s as any).locArgs?.[1] ?? '')  &&  ((s as any).shoewornnumber ?? 0) === String((s as any).locArgs?.[2] ?? ''));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsImmutable(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).shoeworntype ?? 0);
  }
  if (String((s as any).locArgs?.[2] ?? '') === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).shoewornnumber ?? 0);
  }
  (s as any).result = (String((s as any).locArgs?.[1] ?? '') === 'gm'  &&  String((s as any).locArgs?.[2] ?? '') === 6);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterShoesOwned(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).shoeworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).shoewornnumber ?? 0);
  }
  (s as any).result = qspFunc(s, 'shoes', 'is_owned', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
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
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).shoeworntype ?? 0);
  }
  if (String((s as any).locArgs?.[2] ?? '') === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).shoewornnumber ?? 0);
  }
  if (String((s as any).locArgs?.[1] ?? '') === ''  ||  String((s as any).locArgs?.[1] ?? '') === 'none') {
    // TODO-QSP: exit
  }
  // TODO-QSP: dynamic "
  // TODO-QSP: <<$ARGS[1]>>_shoe[<<ARGS[2]>>] = 0
  // TODO-QSP: <<$ARGS[1]>>_shoe_s[<<ARGS[2]>>] = 0
  // TODO-QSP: <<$ARGS[1]>>_shoe_h[<<ARGS[2]>>] = 0
  // TODO-QSP: "
  if (String((s as any).locArgs?.[1] ?? '') === ((s as any).shoeworntype ?? 0)  &&  String((s as any).locArgs?.[2] ?? '') === ((s as any).shoewornnumber ?? 0)) {
    qspCall(s, 'shoes', 'strip_code');
    (s as any).lastwornshoetype = 'none';
    (s as any).lastwornshoenumber = 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterResetImmutables(s: GameState, scene: SceneBuilder): void {
  ((s as any).gm_shoe = (s as any).gm_shoe ?? {})[6] = 1;
  ((s as any).gm_shoe_s = (s as any).gm_shoe_s ?? {})[6] = 0;
  ((s as any).gm_shoe_h = (s as any).gm_shoe_h ?? {})[6] = 10000;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDispose(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).shoeworntype ?? 0), ((s as any).shoewornnumber ?? 0)]; enterRemoveItem(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterMoveToWardrobe(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).shoeworntype ?? 0);
  }
  if (String((s as any).locArgs?.[2] ?? '') === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).shoewornnumber ?? 0);
  }
  if (qspFunc(s, 'shoes', 'is_owned', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
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
