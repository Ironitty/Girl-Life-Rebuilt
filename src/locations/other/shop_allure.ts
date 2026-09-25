import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_allure', 'start');
  (s as any).location_type = 'public_indoors';
  (s as any).locclass = undefined;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>shop_allure</b></center>');
  if (((s as any).region ?? 0) === 'pav') {
    scene.img('images/locations/city/residential/lake/allure/shop.jpg');
  } else {
    scene.img('images/locations/city/residential/lake/allure/shop.jpg');
  }
  scene.text('This shop has the feel of a summer at the beach, which you\'d expect seeing as it sells swimwear.');
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    if (((st as any).region ?? 0) === 'pav') {
      (st as any).minut = ((st as any).minut ?? 0) + 6;
      qspGoto(st, 'pav_commercial', '');
    } else {
      (st as any).minut = ((st as any).minut ?? 0) + 3;
      qspGoto(st, 'city_lake', 'start');
    }
  } },
    { label: 'View swimsuits', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_allure', 'swim'] },
    { label: 'View bikinis', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_allure', 'bikinis'] },
  ]);
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_allure', 'start');
  (s as any).location_type = 'public_indoors';
  (s as any).locclass = undefined;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>shop_allure</b></center>');
  if (((s as any).region ?? 0) === 'pav') {
    scene.img('images/locations/city/residential/lake/allure/shop.jpg');
  } else {
    scene.img('images/locations/city/residential/lake/allure/shop.jpg');
  }
  scene.text('This shop has the feel of a summer at the beach, which you\'d expect seeing as it sells swimwear.');
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    if (((st as any).region ?? 0) === 'pav') {
      (st as any).minut = ((st as any).minut ?? 0) + 6;
      qspGoto(st, 'pav_commercial', '');
    } else {
      (st as any).minut = ((st as any).minut ?? 0) + 3;
      qspGoto(st, 'city_lake', 'start');
    }
  } },
    { label: 'View swimsuits', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_allure', 'swim'] },
    { label: 'View bikinis', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_allure', 'bikinis'] },
  ]);
  scene.build();
}

function enterSwim(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_allure', 'swim');
  (s as any).locclass = 'changingroom';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Swimsuits - one size fits all</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'clothing', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'allure_swimsuit');
    qspCall(s, 'shop_utils', 'init', 'set_steps', 3, ((s as any).Clothingstock ?? 0) % 3);
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'shop_utils', 'cleanup');
    qspGoto(st, 'shop_allure', 'start');
  } },
  ]);
  scene.build();
}

function enterBikinis(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_allure', 'bikinis');
  (s as any).locclass = 'changingroom';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Bikinis - one size fits all</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'clothing', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'allure_bikinis');
    qspCall(s, 'shop_utils', 'init', 'set_steps', 4, (((s as any).Clothingstock ?? 0) / 3) % 4);
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'shop_utils', 'cleanup');
    qspGoto(st, 'shop_allure', 'start');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'swim':
      enterSwim(s, scene);
      break;
    case 'bikinis':
      enterBikinis(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const shop_allure: LocationDef = {
  name: 'shop_allure',
  title: 'shop_allure',
  region: 'other',
  locationType: 'public_indoors',
  locclass: 'changingroom',
  description: ['This shop has the feel of a summer at the beach, which you\'d expect seeing as it sells swimwear.'],
  enter: enter,
};
