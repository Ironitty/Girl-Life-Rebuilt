import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterPanties(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_lusso', 'panties');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Lusso panties</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'panties', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'lusso');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['shop_lusso', 'start'] },
  ]);
  scene.build();
}

function enterBras(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_lusso', 'bras');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Lusso bras</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'bras', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'lusso');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['shop_lusso', 'start'] },
  ]);
  scene.build();
}

function enterBodysuit(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_lusso', 'bodysuit');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Lusso bodysuits</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'bodysuits', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'lusso');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['shop_lusso', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'panties':
      enterPanties(s, scene);
      break;
    case 'bras':
      enterBras(s, scene);
      break;
    case 'bodysuit':
      enterBodysuit(s, scene);
      break;
    default:
      enterPanties(s, scene);
      break;
  }
}

export const shop_lusso: LocationDef = {
  name: 'shop_lusso',
  title: 'Lusso Intimo',
  region: 'other',
  locationType: 'public_indoors',
  locclass: 'changingroom',
  enter: enter,
};
