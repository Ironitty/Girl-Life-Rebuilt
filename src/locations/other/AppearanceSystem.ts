import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).clothingBonus = qspFunc(s, 'AppearanceSystem', 'CalcClothingBonus');
  (s as any).accessoriesBonus = qspFunc(s, 'AppearanceSystem', 'CalcAccessoriesBonus');
  (s as any).groomingBonus = qspFunc(s, 'AppearanceSystem', 'CalcGroomingBonus');
  (s as any).groomingPenalty = qspFunc(s, 'AppearanceSystem', 'CalcGroomingPenalty');
  (s as any).pcs_apprnc = qspFunc(s, 'AppearanceSystem', 'CalcAppearance', ((s as any).arch_effects ?? 0)?.['appearance_effect'] + ((s as any).succappbonus ?? 0) + ((((s as any).glamouractive ?? 0) === 1) ? (150) : (0)));
  (s as any).pcs_hotcat = qspFunc(s, 'AppearanceSystem', 'ConvertToHotcat', ((s as any).pcs_apprnc ?? 0));
  scene.build();
}

function enterCalcFaceBonus(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_lashes ?? 0) <= 0) {
    (s as any).eyelashesBonus = 0;
  } else {
    (s as any).eyelashesBonus = 1;
    if (((s as any).pcs_lashes ?? 0) >= 2) {
      (s as any).eyelashesBonus = ((s as any).pcs_lashes ?? 0) + 1;
    }
    (s as any).eyelashesBonus = qspFunc(s, 'AppearanceSystem', 'AdjustFromBMI', ((s as any).eyelashesBonus ?? 0));
    if (((s as any).pcs_eyesize ?? 0) <= 1) {
      (s as any).eyeSizeBonus = ((s as any).pcs_eyesize ?? 0);
    } else {
      (s as any).eyeSizeBonus = 3;
      (s as any).eyeSizeBonus = 2;
    }
    (s as any).eyeSizeBonus = qspFunc(s, 'AppearanceSystem', 'AdjustFromBMI', ((s as any).eyeSizeBonus ?? 0));
    if (((s as any).pcs_lip ?? 0) <= 0) {
      (s as any).lipBonus = (-2);
    } else {
      (s as any).lipBonus = ((s as any).pcs_lip ?? 0) - 1;
      (s as any).lipBonus = 3;
    }
    (s as any).lipBonus = qspFunc(s, 'AppearanceSystem', 'AdjustFromBMI', ((s as any).lipBonus ?? 0));
    (s as any).result = ((s as any).eyelashesBonus ?? 0) + ((s as any).eyeSizeBonus ?? 0) + ((s as any).lipBonus ?? 0);
    return;
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'CalcFaceBonus':
      enterCalcFaceBonus(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const AppearanceSystem: LocationDef = {
  name: 'AppearanceSystem',
  region: 'other',
  enter: enter,
};
