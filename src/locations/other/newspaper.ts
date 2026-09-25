import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterCikl(s: GameState, scene: SceneBuilder): void {
  ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['newspaper'] = 0;
  qspCall(s, 'newspaper_pages', 'init');
  (s as any).i = 0;
  do {
    (s as any).idx = (Math.floor(Math.random() * (0 - 0 + 1)) + (0));
    ((s as any).newspaperVars = (s as any).newspaperVars ?? {})['page_' + String(((s as any).i ?? 0))] = (((s as any).np_front_pages ?? 0)?.[String((s as any).idx ?? 0)] ?? 0);
    (s as any).np_front_pages = undefined;
    (s as any).i = ((s as any).i ?? 0) + (1);
    (s as any).np_front_pages = undefined;
    do {
      (s as any).idx = (Math.floor(Math.random() * (0 - 0 + 1)) + (0));
      ((s as any).newspaperVars = (s as any).newspaperVars ?? {})['page_' + String(((s as any).i ?? 0))] = (((s as any).np_pages ?? 0)?.[String((s as any).idx ?? 0)] ?? 0);
      (s as any).np_pages = undefined;
      (s as any).i = ((s as any).i ?? 0) + (1);
      (s as any).np_pages = undefined;
      ((s as any).newspaperVars = (s as any).newspaperVars ?? {})['max_page_num'] = ((s as any).i ?? 0) - 1;
      (s as any).i = undefined;
    } while (Object.keys((s as any).np_pages ?? {}).length > 0);
  } while (Object.keys((s as any).np_front_pages ?? {}).length > 0);
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_np_page = 0;
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterView(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterView(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h2>Delovoy Petersburg</h2></center>');
  if (((s as any).temp_np_page ?? 0) < ((s as any).newspaperVars ?? 0)?.['max_page_num']) {
    scene.actions([
      { label: 'Flip to the next article', handler: (st: GameState) => {
    (st as any).temp_np_page = ((st as any).temp_np_page ?? 0) + (1);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterView(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  if (((s as any).temp_np_page ?? 0) > 0) {
    scene.actions([
      { label: 'Flip to the previous article', handler: (st: GameState) => {
    (st as any).temp_np_page = ((st as any).temp_np_page ?? 0) - (1);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterView(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  qspFunc(s, 'newspaperVars[\'page_' + ((s as any).temp_np_page ?? 0) + '\']');
  scene.actions([
    { label: 'Put the newspaper away', handler: (st: GameState) => {
    (st as any).temp_np_page = undefined;
    if (((st as any).newspaperVars ?? 0)?.['dbag'] === 0) {
      dynamicGoto(st, 'menu_loc', 'menu_arg');
    } else {
      ((st as any).newspaperVars = (st as any).newspaperVars ?? {})['dbag'] = 0;
      qspCall(st, 'din_bad', 'd_bag');
    }
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'cikl':
      enterCikl(s, scene);
      break;
    case 'start':
      enterStart(s, scene);
      break;
    case 'view':
      enterView(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const newspaper: LocationDef = {
  name: 'newspaper',
  title: '<center><h2>Delovoy Petersburg</h2></center>',
  region: 'other',
  enter: enter,
};
