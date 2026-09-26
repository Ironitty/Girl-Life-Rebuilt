import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).initext = String(((s as any).usrtxt ?? 0));
  // TODO-QSP: cmdclear
  do {
    (s as any).t = (String(((s as any).initext ?? 0)).slice((1)-1, ((1)-1)+(((String(((s as any).initext ?? 0)).indexOf(String('/n'))) + 1) - 1)));
    (s as any).inittext = [...((s as any).inittext ?? []), ((s as any).t ?? 0)];
    s.scene = { ...s.scene, mainText: String((s as any).t || ''), curActs: [] };
    dynamicGoto(s, String((s as any).t || ''));
    (s as any).initext = (String(((s as any).initext ?? 0)).slice((((String(((s as any).initext ?? 0)).indexOf(String('/n'))) + 1) + 1)-1));
    if (((String(((s as any).initext ?? 0)).indexOf(String('/n'))) + 1) < 4) {
      (s as any).initext = (String(((s as any).initext ?? 0)).slice((((String(((s as any).initext ?? 0)).indexOf(String('/n'))) + 1) + 1)-1));
    }
    if (((String(((s as any).initext ?? 0)).indexOf(String('/r'))) + 1) < 4) {
      (s as any).initext = (String(((s as any).initext ?? 0)).slice((((String(((s as any).initext ?? 0)).indexOf(String('/r'))) + 1) + 1)-1));
    }
    (s as any).t = ((s as any).initext ?? 0);
    (s as any).inittext = [...((s as any).inittext ?? []), ((s as any).t ?? 0)];
    s.scene = { ...s.scene, mainText: String((s as any).t || ''), curActs: [] };
    dynamicGoto(s, String((s as any).t || ''));
    (s as any).t = undefined;
    qspCall(s, 'stat', '');
    dynamicGoto(s, 'menu_settings');
  } while (((String(((s as any).initext ?? 0)).indexOf(String('/n'))) + 1) > 0);
  scene.build();
}

function enterGetGameSet(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'import_export', 'export');
  scene.build();
}

function enterSetGameSet(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'import_export', 'import');
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
