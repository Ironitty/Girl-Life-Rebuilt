// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).temp_wkey ?? 0) === 'none'  ||  ((s as any).temp_wkey ?? 0) === '') {
  } else {
    if (((s as any).temp_wkey ?? 0) === 'preppy') {
    } else {
      if (((s as any).temp_wkey ?? 0) === 'prude') {
      }
    }
  }
  if (((((s as any).temp_wmods ?? 0)).indexOf((' b '))) + 1 > 0) {
  }
  if (((((s as any).temp_wmods ?? 0)).indexOf((' i '))) + 1 > 0) {
  }
  if (((((s as any).temp_wmods ?? 0)).indexOf((' u '))) + 1 > 0) {
  }
  if (((((s as any).temp_wmods ?? 0)).indexOf((' s '))) + 1 > 0) {
  }
  if (((((s as any).temp_wmods ?? 0)).indexOf((' center '))) + 1 > 0) {
  }
  if (((((s as any).temp_wmods ?? 0)).indexOf((' h1 '))) + 1 > 0) {
  }
  if (((((s as any).temp_wmods ?? 0)).indexOf((' h2 '))) + 1 > 0) {
  }
  if (((((s as any).temp_wmods ?? 0)).indexOf((' h3 '))) + 1 > 0) {
  }
  if (((((s as any).temp_wmods ?? 0)).indexOf((' h4 '))) + 1 > 0) {
  }
  if (((((s as any).temp_wmods ?? 0)).indexOf((' h5 '))) + 1 > 0) {
  }
  if (((((s as any).temp_wmods ?? 0)).indexOf((' h6 '))) + 1 > 0) {
  }
  scene.build();
}

export const wrap: LocationDef = {
  name: 'wrap',
  region: 'other',
  enter: enter,
};
