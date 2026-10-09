import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(_s: GameState, scene: SceneBuilder): void {
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
  scene.build();
}

function enterTotals(s: GameState, scene: SceneBuilder): void {
  (s as any).total = qspFunc(s, 'shoes', 'get_total', ((s as any).locArgs?.[1] ?? 0));
  return;
  scene.build();
}

function enterMoncheri(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'shoe_attributes', '', (s as any).locArgs?.[0] ?? '', ((s as any).locArgs?.[1] ?? 0));
  return;
  scene.build();
}

function enterCats(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'shoe_attributes', '', (s as any).locArgs?.[0] ?? '', ((s as any).locArgs?.[1] ?? 0));
  return;
  scene.build();
}

function enterBomba(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'shoe_attributes', '', (s as any).locArgs?.[0] ?? '', ((s as any).locArgs?.[1] ?? 0));
  return;
  scene.build();
}

function enterDolls(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'shoe_attributes', '', (s as any).locArgs?.[0] ?? '', ((s as any).locArgs?.[1] ?? 0));
  return;
  scene.build();
}

function enterGm(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'shoe_attributes', '', (s as any).locArgs?.[0] ?? '', ((s as any).locArgs?.[1] ?? 0));
  return;
  scene.build();
}

function enterEroto(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'shoe_attributes', '', (s as any).locArgs?.[0] ?? '', ((s as any).locArgs?.[1] ?? 0));
  return;
  scene.build();
}

function enterScandalicious(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'shoe_attributes', '', (s as any).locArgs?.[0] ?? '', ((s as any).locArgs?.[1] ?? 0));
  return;
  scene.build();
}

function enterDanilovich(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'shoe_attributes', '', (s as any).locArgs?.[0] ?? '', ((s as any).locArgs?.[1] ?? 0));
  return;
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
    qspCall(s, 'shoe_attributes', '', (s as any).locArgs?.[1] ?? '', ((s as any).locArgs?.[2] ?? 0));
  }
  (s as any).result = '';
  if (qspFunc(s, 'shoes', 'is_immutable', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
    return;
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
    qspCall(s, 'shoe_attributes', '', (s as any).locArgs?.[1] ?? '', ((s as any).locArgs?.[2] ?? 0));
  }
  (s as any).result = (qspFunc(s, 'shoes', 'not_wear_reason', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), 'attributes_set') === '');
  return;
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
  scene.build();
}

function enterIsWearingAny(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).shoeworntype ?? 0) !== ''  &&  ((s as any).shoeworntype ?? 0) !== 'none');
  return;
  scene.build();
}

function enterIsWearing(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).shoeworntype ?? 0) === String((s as any).locArgs?.[1] ?? '')  &&  ((s as any).shoewornnumber ?? 0) === String((s as any).locArgs?.[2] ?? ''));
  return;
  scene.build();
}

function enterIsImmutable(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).shoeworntype ?? 0);
  }
  if (String((s as any).locArgs?.[0] ?? '') === '0') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).shoewornnumber ?? 0);
  }
  (s as any).result = (String((s as any).locArgs?.[1] ?? '') === 'gm'  &&  String((s as any).locArgs?.[6] ?? '') === '6');
  return;
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
  scene.build();
}

function enterAddItem(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === '0') {
    return;
  }
  qspCall(s, 'shoe_attributes', '', (s as any).locArgs?.[1] ?? '', ((s as any).locArgs?.[2] ?? 0));
  if ((!((s as any).ShoQuality ?? 0))) {
    return;
  }
  return;
  scene.build();
}

function enterRemoveItem(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).shoeworntype ?? 0);
  }
  if (String((s as any).locArgs?.[0] ?? '') === '0') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).shoewornnumber ?? 0);
  }
  if (String((s as any).locArgs?.[1] ?? '') === ''  ||  String((s as any).locArgs?.[1] ?? '') === 'none') {
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === ((s as any).shoeworntype ?? 0)  &&  String((s as any).locArgs?.[2] ?? '') === ((s as any).shoewornnumber ?? 0)) {
    qspCall(s, 'shoes', 'strip_code');
    (s as any).lastwornshoetype = 'none';
    (s as any).lastwornshoenumber = 0;
  }
  return;
  scene.build();
}

function enterResetImmutables(s: GameState, scene: SceneBuilder): void {
  ((s as any).gm_shoe = (s as any).gm_shoe ?? {})[6] = 1;
  ((s as any).gm_shoe_s = (s as any).gm_shoe_s ?? {})[6] = 0;
  ((s as any).gm_shoe_h = (s as any).gm_shoe_h ?? {})[6] = 10000;
  return;
  scene.build();
}

function enterDispose(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).shoeworntype ?? 0), ((s as any).shoewornnumber ?? 0)]; enterRemoveItem(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterMoveToWardrobe(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).shoeworntype ?? 0);
  }
  if (String((s as any).locArgs?.[0] ?? '') === '0') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).shoewornnumber ?? 0);
  }
  if (qspFunc(s, 'shoes', 'is_owned', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
  }
  scene.build();
}

function enterStripCode(s: GameState, scene: SceneBuilder): void {
  (s as any).shoeworntype = 'none';
  (s as any).shoewornnumber = 0;
  qspCall(s, 'shoes', 'reset_ShoVars');
  qspCall(s, 'shoes', 'reset_PShoVars');
  qspCall(s, 'outfit', 'set_derived_vars');
  scene.build();
}

function enterStrip(s: GameState, scene: SceneBuilder): void {
  if ((s as any).shoeworntype === '') {
    (s as any).shoeworntype = 'none';
    (s as any).shoewornnumber = 0;
  }
  (s as any).lastwornshoetype = (s as any).shoeworntype;
  (s as any).lastwornshoenumber = (s as any).shoewornnumber;
  qspCall(s, 'shoes', 'strip_code');
  scene.build();
}

function enterWear(s: GameState, scene: SceneBuilder): void {
  let arg1 = String((s as any).locArgs?.[1] ?? '');
  let arg2 = (s as any).locArgs?.[2] ?? 0;
  if (arg1 === 'last_worn') {
    arg1 = String((s as any).lastwornshoetype ?? '');
    arg2 = (s as any).lastwornshoenumber ?? 0;
  }
  if (arg1 === '' || arg1 === 'none') {
    scene.build();
    return;
  }
  qspCall(s, 'shoes', 'strip');
  qspCall(s, 'shoe_attributes', '', arg1, arg2);
  if ((s as any).ShoQuality === 0) {
    scene.text(`ERROR: Shoe "${arg1}_shoe[${arg2}]" does not exist`);
    scene.build();
    return;
  }
  const argsArr = (s as any).locArgs ?? [];
  if (argsArr.includes('check')) {
    const reason = qspFunc(s, 'shoes', 'not_wear_reason', arg1, arg2, 'attributes_set');
    if (reason !== '') {
      scene.build();
      return;
    }
  }
  (s as any).shoeworntype = arg1;
  (s as any).shoewornnumber = arg2;
  ((s as any)[`${arg1}_shoe_s`] = (s as any)[`${arg1}_shoe_s`] ?? {})[arg2] = 0;
  (s as any).PShoQuality = (s as any).ShoQuality;
  (s as any).PShoHeels = (s as any).ShoHeels;
  (s as any).PShoCut = (s as any).ShoCut;
  (s as any).PShoStyle = (s as any).ShoStyle;
  (s as any).PShoStyle2 = (s as any).ShoStyle2;
  (s as any).PShoBimbo = (s as any).ShoBimbo;
  (s as any).PShoGoth = (s as any).ShoGoth;
  (s as any).PShoPunk = (s as any).ShoPunk;
  (s as any).PShoPrep = (s as any).ShoPrep;
  (s as any).PShoPrude = (s as any).ShoPrude;
  (s as any).PShoPrice = (s as any).ShoPrice;
  (s as any).PShoStrength = (s as any).ShoStrength;
  (s as any).PShoMaxStrength = (s as any).ShoMaxStrength;
  (s as any).PShoSkill = (s as any).ShoSkill;
  (s as any).PShoStrip = (s as any).ShoStrip;
  (s as any).PShoSport = (s as any).ShoSport;
  (s as any).PShoPain = { ...(s as any).ShoPain };
  const heels = (s as any).PShoHeels ?? 0;
  (s as any).PXShoHeels = heels === 0 ? 0 : heels === 1 ? 25 : heels === 2 ? 50 : heels === 3 ? 100 : heels === 4 ? 150 : heels === 5 ? 200 : heels === 6 ? 300 : 400;
  if (argsArr.includes('borrowed')) {
    (s as any).PShoBorrowed = 1;
    (s as any).PShoStrength = (s as any).PShoMaxStrength;
  }
  qspCall(s, 'outfit', 'set_derived_vars');
  scene.build();
}

function enterGym(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_off = 1;
  if (!(s as any).regularwornshoetype) {
    (s as any).regularwornshoetype = (s as any).shoeworntype;
    (s as any).regularwornshoenumber = (s as any).shoewornnumber;
  }
  scene.text('<center><img src="images/locations/city/citycenter/mall/sports.png"></center>');
  for (let i = 1; i <= 40; i++) {
    const canWear = qspFunc(s, 'shoes', 'can_wear', 'danilovich', i);
    if (canWear) {
      scene.text(`<a href="exec:gt 'shoe_view', 'view_item', 'wardrobe', 'danilovich', ${i}"><img height="250" src="images/pc/items/danilovich/shoes/${i}.jpg"/></a>`);
    }
  }
  scene.action({ label: 'Return', goto: [(s as any).loc ?? '', (s as any).locArg ?? ''] });
  if ((s as any).shoeworntype !== (s as any).regularwornshoetype) {
    qspCall(s, 'shoes', 'gym2');
  }
  scene.build();
}

function enterGym2(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_off = 1;
  scene.action({
    label: 'Put your regular shoes back on',
    handler: (st: GameState) => {
      (st as any).shoeworntype = (st as any).regularwornshoetype;
      (st as any).shoewornnumber = (st as any).regularwornshoenumber;
      (st as any).regularwornshoetype = undefined;
      (st as any).regularwornshoenumber = undefined;
      qspCall(st, 'shoes', 'gym');
    },
  });
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
    case 'gym':
      enterGym(s, scene);
      break;
    case 'gym2':
      enterGym2(s, scene);
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
