import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterDefault2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_lusso', 'start');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Lusso Intimo</b></center>');
  scene.img('images/locations/city/citycenter/mall/lusso/lusso.jpg');
  scene.text('The décor is bright and modern, the flowers are real and the dressers are made with expensive woods.');
  scene.text('This is clearly a high end underwear shop. Just knowing you\'re wearing these will boost your confidence to the point that you\'ll never want to go back to wearing cheap, ill fitting underwear again. That is of course assuming you can afford the prices here.');
  scene.actions([
    { label: 'Leave', goto: ['city_mall', ''] },
    { label: 'View panties', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_lusso', 'panties'] },
    { label: 'View bras', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_lusso', 'bras'] },
    { label: 'View bodysuits', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_lusso', 'bodysuit'] },
  ]);
  scene.build();
}

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
      enterDefault(s, scene);
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
