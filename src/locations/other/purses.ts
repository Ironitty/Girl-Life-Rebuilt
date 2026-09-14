import { qspUntranslated } from '../_shared/qspUntranslated';

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
  // TODO-QSP: end
  scene.build();
}

function enterTotals(s: GameState, scene: SceneBuilder): void {
  (s as any).total = qspFunc(s, 'purses', 'get_total', ((s as any).locArgs?.[1] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterNotWearReason(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[1] = ((s as any).currentpursetype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = ((s as any).currentpursenumber ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 3) {
    // TODO-QSP: gs 'purse_attributes', $ARGS[1] + '_purses', ARGS[2]
  }
  if (qspFunc(s, 'purses', 'is_immutable', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "purses" }))) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'purses', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "purses" })) === 0) {
    return;
  }
  if (qspFunc(s, 'purses', 'in_wardrobe', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "purses" })) === 0) {
    return;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCanWear(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[1] = ((s as any).currentpursetype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = ((s as any).currentpursenumber ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 3) {
    // TODO-QSP: gs 'purse_attributes', $ARGS[1] + '_purses', ARGS[2]
  }
  (s as any).result = (qspFunc(s, 'purses', 'not_wear_reason', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "purses" }), 'attributes_set') === '');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsOwned(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[1] = ((s as any).currentpursetype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = ((s as any).currentpursenumber ?? 0);
  }
  (s as any).result = 0;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterInWardrobe(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[1] = ((s as any).currentpursetype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = ((s as any).currentpursenumber ?? 0);
  }
  (s as any).result = 0;
  if (qspFunc(s, 'purses', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "purses" }))) {
    (s as any).result = 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterInStorage(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[1] = ((s as any).currentpursetype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = ((s as any).currentpursenumber ?? 0);
  }
  (s as any).result = 0;
  if (qspFunc(s, 'purses', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "purses" }))) {
    (s as any).result = 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterInUnwanted(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[1] = ((s as any).currentpursetype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = ((s as any).currentpursenumber ?? 0);
  }
  (s as any).result = 0;
  if (qspFunc(s, 'purses', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "purses" }))) {
    (s as any).result = 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsWearingAny(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).currentpursetype ?? 0) !== ''  &&  ((s as any).currentpursetype ?? 0) !== 'none');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsWearing(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).currentpursetype ?? 0) === ((s as any).locArgs?.[1] ?? 0)  &&  ((s as any).currentpursenumber ?? 0) === ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsImmutable(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
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
  // TODO-QSP: gs 'purse_attributes', $ARGS[1], ARGS[2]
  if ((!((s as any).PursePrice ?? 0))) {
    // TODO-QSP: exit
  }
  // TODO-QSP: dynamic "
  // TODO-QSP: <<$ARGS[1]>>_purses[<<ARGS[2]>>] = 1
  // TODO-QSP: "
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRemoveItem(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[1] = ((s as any).currentpursetype ?? 0);
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = ((s as any).currentpursenumber ?? 0);
  }
  if (((s as any).locArgs?.[1] ?? 0) === ''  ||  ((s as any).locArgs?.[1] ?? 0) === 'none') {
    // TODO-QSP: exit
  }
  // TODO-QSP: dynamic "
  // TODO-QSP: <<$ARGS[1]>>_purses[<<ARGS[2]>>] = 0
  // TODO-QSP: "
  if (((s as any).locArgs?.[1] ?? 0) === ((s as any).currentpursetype ?? 0)  &&  ((s as any).locArgs?.[2] ?? 0) === ((s as any).currentpursenumber ?? 0)) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStrip(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspCall(s, 'outfit', 'set_derived_vars');
    (s as any).lastwornpursenumber = 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterResetImmutables(s: GameState, scene: SceneBuilder): void {
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDispose(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).currentpursetype ?? 0), ((s as any).currentpursenumber ?? 0)]; enterRemoveItem(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterMoveToWardrobe(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[1] = ((s as any).currentpursetype ?? 0);
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = ((s as any).currentpursenumber ?? 0);
  }
  if (qspFunc(s, 'purses', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "purses" }))) {
    // TODO-QSP: dynamic "<<$ARGS[1]>>_pursesS[<<ARGS[2]>>] = 0"
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterMoveToStorage(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[1] = ((s as any).currentpursetype ?? 0);
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = ((s as any).currentpursenumber ?? 0);
  }
  if (qspFunc(s, 'purses', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "purses" }))) {
    // TODO-QSP: dynamic "<<$ARGS[1]>>_pursesS[<<ARGS[2]>>] = 1"
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterMoveToUnwanted(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[1] = ((s as any).currentpursetype ?? 0);
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = ((s as any).currentpursenumber ?? 0);
  }
  if (qspFunc(s, 'purses', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "purses" }))) {
    // TODO-QSP: dynamic "<<$ARGS[1]>>_pursesS[<<ARGS[2]>>] = 2"
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRemove(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStrip(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterStrip(s: GameState, scene: SceneBuilder): void {
  if (((s as any).currentpursetype ?? 0) === '') {
    (s as any).currentpursenumber = 0;
  }
  (s as any).purselastwornnumber = ((s as any).currentpursenumber ?? 0);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStripCode(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterStripCode(s: GameState, scene: SceneBuilder): void {
  (s as any).currentpursenumber = 0;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterReset_PurseVars(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterReset_PPurseVars(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'outfit', 'set_derived_vars');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterReset_PurseVars(s: GameState, scene: SceneBuilder): void {
  (s as any).PurseQuality = 0;
  (s as any).PursePrice = 0;
  (s as any).PurseStrength = 0;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterReset_PPurseVars(s: GameState, scene: SceneBuilder): void {
  (s as any).bag = 0;
  (s as any).PPurseQuality = 0;
  (s as any).PPursePrice = 0;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterWear(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'last_worn') {
    if (((s as any).purselastworntype ?? 0) === '') {
      (s as any).purselastwornnumber = 0;
    }
    // TODO-QSP: $ARGS[1] = $purselastworntype
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = ((s as any).purselastwornnumber ?? 0);
  }
  if (((s as any).locArgs?.[1] ?? 0) === ''  ||  ((s as any).locArgs?.[1] ?? 0) === 'none') {
    // TODO-QSP: exit
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStrip(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: gs 'purse_attributes', $ARGS[1], ARGS[2]
  if ((!((s as any).PursePrice ?? 0))) {
    return;
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('check') : -1) > 0) {
    if (((s as any).temp_not_wear_reason ?? 0) !== '') {
      if (((s as any).temp_not_wear_reason ?? 0) === 'not_owned') {
      } else {
        if (((s as any).temp_not_wear_reason ?? 0) === 'not_in_wardrobe') {
        }
      }
      return;
    }
  }
  (s as any).currentpursenumber = qspUntranslated(s, "ARGS[2]", { location: "purses" });
  (s as any).bag = 1;
  (s as any).PPurseQuality = ((s as any).PurseQuality ?? 0);
  (s as any).PPursePrice = ((s as any).PursePrice ?? 0);
  qspCall(s, 'outfit', 'set_derived_vars');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDescriptions(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'dolls') {
    scene.text('Let your freak flag fly with this perfect purse for the hot, independent girl that lives the alt lifestyle.');
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'bomba') {
      scene.text('Yeah you have attitude and with this bag everyone knows it.');
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'coco') {
        scene.text('A trendy bag for a young adult.');
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'flamingos') {
          scene.text('You look like the girl about town with this bag.');
        } else {
          if (((s as any).locArgs?.[1] ?? 0) === 'danilovich') {
            scene.text('A sports bag for all your junk. Practical and durable but not fashionable');
          } else {
            if (((s as any).locArgs?.[1] ?? 0) === 'fashionista') {
              scene.text('A stylish handbag for any fashion-forward female!');
            } else {
              if (((s as any).locArgs?.[1] ?? 0) === 'nerdvana') {
                scene.text('For the geek inside you.');
              } else {
                if (((s as any).locArgs?.[1] ?? 0) === 'gm') {
                  scene.text('A functional, if not too fashionable, handbag for carrying all of the essentials.');
                } else {
                  if (((s as any).locArgs?.[1] ?? 0) === 'cats') {
                    scene.text('Is it a bag? Is it a pet? Is it a toy? Who cares you stand out and look cute.');
                  } else {
                    if (((s as any).locArgs?.[1] ?? 0) === 'moncheri') {
                      scene.text('A high-fashion handbag for ladies with discerning tastes. Show how classy you are with this expensive accessory.');
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
  // TODO-QSP: end
  scene.build();
}

function enterSetShopDisplayExceptions(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'purse_view', 'init', 'set_exceptions');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterViewPurseList(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'purse_view', 'view_grid', $ARGS[1]
  // TODO-QSP: end
  scene.build();
}

function enterViewPurseItem(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'purse_view', 'view_item', $ARGS[1], $ARGS[2], ARGS[3], ARGS[4]
  // TODO-QSP: end
  scene.build();
}

function enterDest0(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'purses', 'move_to_wardrobe', $ARGS[2], ARGS[3]
  // TODO-QSP: gt 'purse_view', 'view_grid', $ARGS[1], $ARGS[2], ARGS[3], ARGS[4]
  // TODO-QSP: end
  scene.build();
}

function enterDest1(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'purses', 'move_to_storage', $ARGS[2], ARGS[3]
  // TODO-QSP: gt 'purse_view', 'view_grid', $ARGS[1], $ARGS[2], ARGS[3], ARGS[4]
  // TODO-QSP: end
  scene.build();
}

function enterDest2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'purses', 'move_to_unwanted', $ARGS[2], ARGS[3]
  // TODO-QSP: gt 'purse_view', 'view_grid', $ARGS[1], $ARGS[2], ARGS[3], ARGS[4]
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
    case 'reset_PurseVars':
      enterReset_PurseVars(s, scene);
      break;
    case 'reset_PPurseVars':
      enterReset_PPurseVars(s, scene);
      break;
    case 'wear':
      enterWear(s, scene);
      break;
    case 'descriptions':
      enterDescriptions(s, scene);
      break;
    case 'set_shop_display_exceptions':
      enterSetShopDisplayExceptions(s, scene);
      break;
    case 'view_purse_list':
      enterViewPurseList(s, scene);
      break;
    case 'view_purse_item':
      enterViewPurseItem(s, scene);
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

export const purses: LocationDef = {
  name: 'purses',
  title: 'Let your freak flag fly with this perfect purse for the hot,',
  region: 'other',
  enter: enter,
};
