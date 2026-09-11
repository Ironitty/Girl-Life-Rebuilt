// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterPush(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $main_stack[]       = $maintxt
  // TODO-QSP: $stat_stack[]       = $stattxt
  // TODO-QSP: $action_stack[]     = $curacts
  // TODO-QSP: $object_stack[]     = $curobjs
  // TODO-QSP: $background_stack[] = $backimage
  // TODO-QSP: $loc_stack[]        = $loc
  // TODO-QSP: $loc_arg_stack[]    = $loc_arg
  // TODO-QSP: end
  scene.build();
}

function enterPop(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: killobj
  // TODO-QSP: p $stat_stack[arrsize('$stat_stack')-1]
  // TODO-QSP: dynamic text: $main_stack[arrsize('$main_stack')-1]
  scene.text('$main_stack[arrsize(\'$main_stack\')-1]');
  // TODO-QSP: end
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
