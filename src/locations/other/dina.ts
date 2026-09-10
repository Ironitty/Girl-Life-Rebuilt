// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterBrodila(s: GameState, scene: SceneBuilder): void {
  (s as any).sexpartkno = 0;
  if (((s as any).accessible_property ?? 0)?.['city_apartment'] > 0) {
    scene.actions([{ label: 'Continue', goto: ['korr', ''] }]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['korr2x', ''] }]);
    scene.actions([{ label: 'Continue', goto: ['city_residential', ''] }]);
  }
  scene.build();
}

function enterBrodilr(s: GameState, scene: SceneBuilder): void {
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).accessible_property ?? 0)?.['parents_home'] === 4) {
    scene.actions([{ label: 'Continue', goto: ['pav_residential', ''] }]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['pushkin_sq', ''] }]);
    scene.actions([{ label: 'Continue', goto: ['city_residential', ''] }]);
  }
  scene.build();
}

function enterBrodilk(s: GameState, scene: SceneBuilder): void {
  if (((s as any).accessible_property ?? 0)?.['city_apartment'] > 0) {
    scene.actions([{ label: 'Continue', goto: ['kuhr', ''] }]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['kuhr2x', ''] }]);
    scene.actions([{ label: 'Continue', goto: ['city_residential', ''] }]);
  }
  scene.build();
}

function enterBrodils(s: GameState, scene: SceneBuilder): void {
  if (((s as any).accessible_property ?? 0)?.['city_apartment'] > 0) {
    scene.actions([{ label: 'Continue', goto: ['sitr', ''] }]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['sitr2x', ''] }]);
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).accessible_property ?? 0)?.['parents_home'] === 4) {
      scene.actions([{ label: 'Continue', goto: ['sitrPar', ''] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['city_residential', ''] }]);
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'brodila':
      enterBrodila(s, scene);
      break;
    case 'brodilr':
      enterBrodilr(s, scene);
      break;
    case 'brodilk':
      enterBrodilk(s, scene);
      break;
    case 'brodils':
      enterBrodils(s, scene);
      break;
    default:
      enterBrodila(s, scene);
      break;
  }
}

export const dina: LocationDef = {
  name: 'dina',
  region: 'other',
  enter: enter,
};
