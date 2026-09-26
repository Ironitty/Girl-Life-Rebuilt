// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterPush(s: GameState, scene: SceneBuilder): void {
  (s as any).main_stack = [...((s as any).main_stack ?? []), ((s as any).maintxt ?? 0)];
  (s as any).stat_stack = [...((s as any).stat_stack ?? []), ((s as any).stattxt ?? 0)];
  (s as any).action_stack = [...((s as any).action_stack ?? []), ((s as any).curacts ?? 0)];
  (s as any).object_stack = [...((s as any).object_stack ?? []), ((s as any).curobjs ?? 0)];
  (s as any).background_stack = [...((s as any).background_stack ?? []), ((s as any).backimage ?? 0)];
  (s as any).loc_stack = [...((s as any).loc_stack ?? []), ((s as any).loc ?? 0)];
  (s as any).loc_arg_stack = [...((s as any).loc_arg_stack ?? []), ((s as any).loc_arg ?? 0)];
  scene.build();
}

function enterPop(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = (((s as any).loc_stack ?? 0)?.[0] ?? 0);
  (s as any).loc_arg = (((s as any).loc_arg_stack ?? 0)?.[0] ?? 0);
  (s as any).loc_stack = undefined;
  (s as any).loc_arg_stack = undefined;
  (s as any).BACKIMAGE = (((s as any).background_stack ?? 0)?.[0] ?? 0);
  (s as any).background_stack = undefined;
  (s as any).object_stack = undefined;
  (s as any).action_stack = undefined;
  scene.text('$stat_stack[arrsize(\'$stat_stack\')-1]');
  (s as any).stat_stack = undefined;
  scene.text('$main_stack[arrsize(\'$main_stack\')-1]');
  (s as any).main_stack = undefined;
  (s as any).menu_off_stack = undefined;
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'push':
      enterPush(s, scene);
      break;
    case 'pop':
      enterPop(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const state: LocationDef = {
  name: 'state',
  region: 'other',
  enter: enter,
};
