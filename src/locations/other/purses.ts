import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGetTotal(s: GameState, scene: SceneBuilder): void {
  if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(2))) === 'gm') {
    (s as any).result = 20;
  } else {
    if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'coco') {
      (s as any).result = 60;
    } else {
      if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'dolls') {
        (s as any).result = 40;
      } else {
        if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(11))) === 'fashionista') {
          (s as any).result = 40;
        } else {
          if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(9))) === 'flamingos') {
            (s as any).result = 20;
          } else {
            if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(8))) === 'nerdvana') {
              (s as any).result = 60;
            } else {
              if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'cats') {
                (s as any).result = 20;
              } else {
                if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'bomba') {
                  (s as any).result = 20;
                } else {
                  if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(10))) === 'danilovich') {
                    (s as any).result = 60;
                  } else {
                    if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(8))) === 'moncheri') {
                      (s as any).result = 40;
                    }
                  }
                }
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
  (s as any).total = qspFunc(s, 'purses', 'get_total', ((s as any).locArgs?.[1] ?? 0));
  return;
  scene.build();
}

function enterNotWearReason(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).currentpursetype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).currentpursenumber ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 3) {
    qspCall(s, 'purse_attributes', '', ((s as any).locArgs?.[1] ?? 0) + '_purses', ((s as any).locArgs?.[2] ?? 0));
  }
  (s as any).result = '';
  if (qspFunc(s, 'purses', 'is_immutable', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
    return;
  }
  if (qspFunc(s, 'purses', 'is_owned', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0)) === 0) {
    (s as any).result = 'not_owned';
    return;
  }
  if (qspFunc(s, 'purses', 'in_wardrobe', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0)) === 0) {
    (s as any).result = 'not_in_wardrobe';
    return;
  }
  return;
  scene.build();
}

function enterCanWear(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).currentpursetype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).currentpursenumber ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 3) {
    qspCall(s, 'purse_attributes', '', ((s as any).locArgs?.[1] ?? 0) + '_purses', ((s as any).locArgs?.[2] ?? 0));
  }
  (s as any).result = (qspFunc(s, 'purses', 'not_wear_reason', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), 'attributes_set') === '');
  return;
  scene.build();
}

function enterIsOwned(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).currentpursetype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).currentpursenumber ?? 0);
  }
  (s as any).result = 0;
  return;
  scene.build();
}

function enterInWardrobe(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).currentpursetype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).currentpursenumber ?? 0);
  }
  (s as any).result = 0;
  if (qspFunc(s, 'purses', 'is_owned', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
    (s as any).result = 0;
  }
  return;
  scene.build();
}

function enterInStorage(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).currentpursetype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).currentpursenumber ?? 0);
  }
  (s as any).result = 0;
  if (qspFunc(s, 'purses', 'is_owned', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
    (s as any).result = 0;
  }
  return;
  scene.build();
}

function enterInUnwanted(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).currentpursetype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).currentpursenumber ?? 0);
  }
  (s as any).result = 0;
  if (qspFunc(s, 'purses', 'is_owned', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
    (s as any).result = 0;
  }
  return;
  scene.build();
}

function enterIsWearingAny(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).currentpursetype ?? 0) !== ''  &&  ((s as any).currentpursetype ?? 0) !== 'none');
  return;
  scene.build();
}

function enterIsWearing(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).currentpursetype ?? 0) === String((s as any).locArgs?.[1] ?? '')  &&  ((s as any).currentpursenumber ?? 0) === String((s as any).locArgs?.[2] ?? ''));
  return;
  scene.build();
}

function enterIsImmutable(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  return;
  scene.build();
}

function enterAddItem(s: GameState, scene: SceneBuilder): void {
  const type = String((s as any).locArgs?.[1] ?? '');
  const num = (s as any).locArgs?.[2] ?? 0;
  if (type === '') return;
  if (num === 0) return;
  qspCall(s, 'purse_attributes', '', type, num);
  if (!((s as any).PursePrice ?? 0)) return;
  const purseVar = `${type}_purses`;
  ((s as any)[purseVar] = (s as any)[purseVar] ?? {})[num] = 1;
  return;
  scene.build();
}

function enterRemoveItem(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).currentpursetype ?? 0);
  }
  if (String((s as any).locArgs?.[0] ?? '') === '0') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).currentpursenumber ?? 0);
  }
  if (String((s as any).locArgs?.[1] ?? '') === ''  ||  String((s as any).locArgs?.[1] ?? '') === 'none') {
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === ((s as any).currentpursetype ?? 0)  &&  String((s as any).locArgs?.[2] ?? '') === ((s as any).currentpursenumber ?? 0)) {
    qspCall(s, 'purses', 'strip');
    qspCall(s, 'outfit', 'set_derived_vars');
    (s as any).lastwornpursetype = 'none';
    (s as any).lastwornpursenumber = 0;
  }
  return;
  scene.build();
}

function enterResetImmutables(s: GameState, scene: SceneBuilder): void {
  return;
  scene.build();
}

function enterDispose(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).currentpursetype ?? 0), ((s as any).currentpursenumber ?? 0)]; enterRemoveItem(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterMoveToWardrobe(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).currentpursetype ?? 0);
  }
  if (String((s as any).locArgs?.[0] ?? '') === '0') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).currentpursenumber ?? 0);
  }
  if (qspFunc(s, 'purses', 'is_owned', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
  }
  scene.build();
}

function enterWear(s: GameState, scene: SceneBuilder): void {
  let arg1 = String((s as any).locArgs?.[1] ?? '');
  let arg2 = (s as any).locArgs?.[2] ?? 0;
  if (arg1 === 'last_worn') {
    if ((s as any).purselastworntype === '') {
      (s as any).purselastworntype = 'none';
      (s as any).purselastwornnumber = 0;
    }
    arg1 = String((s as any).purselastworntype ?? '');
    arg2 = (s as any).purselastwornnumber ?? 0;
  }
  if (arg1 === '' || arg1 === 'none') return;
  qspCall(s, 'purses', 'strip');
  qspCall(s, 'purse_attributes', '', arg1, arg2);
  if (!((s as any).PursePrice ?? 0)) return;
  if ((s as any).locArgs?.includes('check')) {
    const tempNotWearReason = qspFunc(s, 'purses', 'not_wear_reason', arg1, arg2, 'attributes_set');
    if (tempNotWearReason !== '') {
      return;
    }
  }
  (s as any).currentpursetype = arg1;
  (s as any).currentpursenumber = arg2;
  (s as any).bag = 1;
  (s as any).PPurseQuality = (s as any).PurseQuality;
  (s as any).PPursePrice = (s as any).PursePrice;
  qspCall(s, 'outfit', 'set_derived_vars');
  return;
  scene.build();
}

function enterStrip(s: GameState, scene: SceneBuilder): void {
  if ((s as any).currentpursetype === '') {
    (s as any).currentpursetype = 'none';
    (s as any).currentpursenumber = 0;
  }
  (s as any).purselastworntype = (s as any).currentpursetype;
  (s as any).purselastwornnumber = (s as any).currentpursenumber;
  qspCall(s, 'purses', 'strip_code');
}

function enterStripCode(s: GameState, scene: SceneBuilder): void {
  (s as any).currentpursetype = 'none';
  (s as any).currentpursenumber = 0;
  qspCall(s, 'purses', 'reset_PurseVars');
  qspCall(s, 'purses', 'reset_PPurseVars');
  qspCall(s, 'outfit', 'set_derived_vars');
}

function enterResetPurseVars(s: GameState, scene: SceneBuilder): void {
  (s as any).PurseQuality = 0;
  (s as any).PursePrice = 0;
  (s as any).PurseStrength = 0;
}

function enterResetPPurseVars(s: GameState, scene: SceneBuilder): void {
  (s as any).bag = 0;
  (s as any).PPurseQuality = 0;
  (s as any).PPursePrice = 0;
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
    case 'wear':
      enterWear(s, scene);
      break;
    case 'strip':
      enterStrip(s, scene);
      break;
    case 'strip_code':
      enterStripCode(s, scene);
      break;
    case 'reset_PurseVars':
      enterResetPurseVars(s, scene);
      break;
    case 'reset_PPurseVars':
      enterResetPPurseVars(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const purses: LocationDef = {
  name: 'purses',
  title: 'Let your freak flag fly with this perfect purse for the hot,',
  region: 'other',
  enter: enter,
};
