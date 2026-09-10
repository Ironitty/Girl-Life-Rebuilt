import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).ParrotQW ?? 0)?.['Level'] === 1  &&  ((s as any).ParrotQW ?? 0)?.['Failed'] === 0) {
    scene.actions([{ label: 'Continue', goto: ['zoomagazine', 'event_1'] }]);
  }
  qspCall(s, 'core_library', 'setloc', 'zoomagazine', 'start');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Pet Emporium</b></center>');
  scene.img('images/locations/city/citycenter/mall/pet shop/shop.jpg');
  if (((s as any).krolik ?? 0) === 0) {
    // TODO-QSP: 'Rabbit - ' + $func('money', 'string_price', 2000)
    if (qspFunc(s, 'money', 'can_afford', 2000) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney ?? ''), curActs: [] };
    } else {
      if (((s as any).home ?? 0)?.['current'] === 'city_apartment'  ||  ((s as any).home ?? 0)?.['current'] === 'old_town_apartment') {
        (s as any).minut = ((s as any).minut ?? 0) + 10;
        (s as any).krolik = ((s as any).krolik ?? 0) + (1);
        qspCall(s, 'money', 'pay', 2000);
        scene.img('images/locations/city/citycenter/mall/pet shop/pets/rabbit.jpg');
        scene.text('<center><b>You bought a rabbit.</b></center>');
        if (((s as any).namekrol ?? 0) === '') {
        }
      } else {
        scene.text('You need to have your own place before you can buy a rabbit.');
      }
      scene.actions([
        { label: 'Move away from the counter', goto: ['zoomagazine', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Buy a rabbit [+$func(\'money\', \'get_cost_string\', 2000)]' }, // TODO-QSP: empty action body
    ]);
  }
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['city_mall', ''] },
  ]);
  scene.build();
}

export const zoomagazine: LocationDef = {
  name: 'zoomagazine',
  title: 'Pet Emporium',
  region: 'other',
  enter: enter,
};
