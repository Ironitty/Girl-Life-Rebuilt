// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGetMeIndex(s: GameState, scene: SceneBuilder): void {
  (s as any).test = '' + ((s as any).locArgs?.[1] ?? 0) + '[\'' + ((s as any).locArgs?.[2] ?? 0) + '\']';
  (s as any).testas0 = 0;
  if ((String(((s as any).test ?? 0)).slice((1)-1, ((1)-1)+(1))) === '$') {
    ((s as any).temp_arrayVars = (s as any).temp_arrayVars ?? {})['backup'] = 0;
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'get_me_index':
      enterGetMeIndex(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const array: LocationDef = {
  name: 'array',
  region: 'other',
  enter: enter,
};
