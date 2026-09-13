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
  if ((String(((s as any).temp_wmods ?? 0)).indexOf(String(' b '))) + 1 > 0) {
  }
  if ((String(((s as any).temp_wmods ?? 0)).indexOf(String(' i '))) + 1 > 0) {
  }
  if ((String(((s as any).temp_wmods ?? 0)).indexOf(String(' u '))) + 1 > 0) {
  }
  if ((String(((s as any).temp_wmods ?? 0)).indexOf(String(' s '))) + 1 > 0) {
  }
  if ((String(((s as any).temp_wmods ?? 0)).indexOf(String(' center '))) + 1 > 0) {
  }
  if ((String(((s as any).temp_wmods ?? 0)).indexOf(String(' h1 '))) + 1 > 0) {
  }
  if ((String(((s as any).temp_wmods ?? 0)).indexOf(String(' h2 '))) + 1 > 0) {
  }
  if ((String(((s as any).temp_wmods ?? 0)).indexOf(String(' h3 '))) + 1 > 0) {
  }
  if ((String(((s as any).temp_wmods ?? 0)).indexOf(String(' h4 '))) + 1 > 0) {
  }
  if ((String(((s as any).temp_wmods ?? 0)).indexOf(String(' h5 '))) + 1 > 0) {
  }
  if ((String(((s as any).temp_wmods ?? 0)).indexOf(String(' h6 '))) + 1 > 0) {
  }
  scene.build();
}

export const wrap: LocationDef = {
  name: 'wrap',
  region: 'other',
  enter: enter,
};
