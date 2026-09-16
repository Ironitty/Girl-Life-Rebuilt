import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).initext = String(((s as any).usrtxt ?? 0));
  // TODO-QSP: cmdclear
  // TODO-QSP: showinput 0
  // TODO-QSP: :initg_loop
  (s as any).t = (String(((s as any).initext ?? 0)).slice((1)-1, ((1)-1)+(((String(((s as any).initext ?? 0)).indexOf(String('\\n'))) + 1) - 1)));
  // TODO-QSP: $inittext[] = $t
  // TODO-QSP: $t
  (s as any).initext = (String(((s as any).initext ?? 0)).slice((((String(((s as any).initext ?? 0)).indexOf(String('\\n'))) + 1) + 1)-1));
  if (((String(((s as any).initext ?? 0)).indexOf(String('\\n'))) + 1) < 4) {
    (s as any).initext = (String(((s as any).initext ?? 0)).slice((((String(((s as any).initext ?? 0)).indexOf(String('\\n'))) + 1) + 1)-1));
  }
  if (((String(((s as any).initext ?? 0)).indexOf(String('\\r'))) + 1) < 4) {
    (s as any).initext = (String(((s as any).initext ?? 0)).slice((((String(((s as any).initext ?? 0)).indexOf(String('\\r'))) + 1) + 1)-1));
  }
  if (((String(((s as any).initext ?? 0)).indexOf(String('\\n'))) + 1) > 0) {
    // TODO-QSP: jump 'initg_loop'
  }
  (s as any).t = ((s as any).initext ?? 0);
  // TODO-QSP: $inittext[] = $t
  // TODO-QSP: $t
  qspCall(s, 'stat', '');
  dynamicGoto(s, 'menu_settings');
  // TODO-QSP: end
  scene.build();
}

function enterGetGameSet(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'import_export', 'export');
  // TODO-QSP: end
  scene.build();
}

function enterSetGameSet(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'import_export', 'import');
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'get_game_set':
      enterGetGameSet(s, scene);
      break;
    case 'set_game_set':
      enterSetGameSet(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const initg: LocationDef = {
  name: 'initg',
  region: 'other',
  enter: enter,
};
