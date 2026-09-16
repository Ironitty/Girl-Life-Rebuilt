import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterPregnancyVisibility(s: GameState, scene: SceneBuilder): void {
  (s as any).RESULT = 0;
  (s as any).pregchemTemp = (((!((s as any).locArgs?.[1] ?? 0))) ? (((s as any).pregChem ?? 0)) : (((s as any).locArgs?.[1] ?? 0)));
  (s as any).clothingworntypeTemp = ((((s as any).locArgs?.[2] ?? 0) === '') ? (((s as any).clothingworntype ?? 0)) : (((s as any).locArgs?.[2] ?? 0)));
  (s as any).clothingwornnumberTemp = (((!((s as any).locArgs?.[3] ?? 0))) ? (((s as any).clothingwornnumber ?? 0)) : (((s as any).locArgs?.[3] ?? 0)));
  qspCall(s, 'clothing_attributes', '', ((s as any).clothingworntypeTemp ?? 0), ((s as any).clothingwornnumberTemp ?? 0));
  if ((((s as any).CloThinness ?? 0) >= 5  ||  ((s as any).clothingworntypeTemp ?? 0) === 'nude')  &&  ((s as any).pregchemTemp ?? 0) > 2688) {
    (s as any).RESULT = 1;
  } else {
    if (((s as any).CloThinness ?? 0) === 4  &&  ((s as any).pregchemTemp ?? 0) > 3460) {
      (s as any).RESULT = 1;
    } else {
      if (((s as any).CloThinness ?? 0) === 3  &&  ((s as any).pregchemTemp ?? 0) > 3990) {
        (s as any).RESULT = 1;
      } else {
        if (((s as any).CloThinness ?? 0) === 2  &&  ((s as any).pregchemTemp ?? 0) > 4200) {
          (s as any).RESULT = 1;
        } else {
          if (((s as any).pregchemTemp ?? 0) > 5200) {
            (s as any).RESULT = 1;
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'pregnancyVisibility':
      enterPregnancyVisibility(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const body_din: LocationDef = {
  name: 'body_din',
  region: 'other',
  enter: enter,
};
