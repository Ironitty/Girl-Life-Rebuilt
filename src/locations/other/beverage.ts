import { dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterSetExit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).food_loc ?? 0) === 1  &&  ((s as any).loc ?? 0) !== 'brothel') {
    scene.actions([
      { label: 'Finish', goto: ['food_menu', ''] },
    ]);
  } else {
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  scene.build();
}

function enterAfteralcohol(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_hydra ?? 0) < 20) {
  } else {
    if (((s as any).pcs_hydra ?? 0) <= 60) {
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'set_exit':
      enterSetExit(s, scene);
      break;
    case 'afteralcohol':
      enterAfteralcohol(s, scene);
      break;
    default:
      enterSetExit(s, scene);
      break;
  }
}

export const beverage: LocationDef = {
  name: 'beverage',
  title: 'Added to your order',
  region: 'other',
  enter: enter,
};
