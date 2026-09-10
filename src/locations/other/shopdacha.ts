import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Ilyich and Biryukov construction</b></center>');
  scene.img('images/locations/shared/store/shopdacha.jpg');
  scene.text('In this storefront office, you can upgrade your existing properties or start a new construction project upon any land you may own.');
  // TODO-QSP: dynamic text: All payments must be made from you bank account. Current balance - <<karta>> <b>...
  scene.text(`All payments must be made from you bank account. Current balance - ${((s as any).karta ?? 0)} <b>₽</b>.`);
  if (((s as any).hour ?? 0) < 8  ||  ((s as any).hour ?? 0) > 20) {
    scene.text('Shop closed.');
  } else {
    if (qspFunc(s, 'homes_properties', 'is_property_of_status', 'purchased', 'city_apartment')) {
      if ((!((s as any).rembedr ?? 0))) {
        if (qspFunc(s, 'money', 'can_afford', 50000, 'card') === 1) {
          (s as any).rembedr = 1;
          qspCall(s, 'money', 'pay', 50000, 'card');
          qspCall(s, 'homes_properties', 'renovate_property', 'city_apartment', qspFunc(s, 'money', 'price', 50000), 'bedroom');
          scene.text('You upgrade your apartment bedroom.');
        } else {
          scene.text('Unfortunately, you do not have enough money in your bank account.');
        }
        scene.actions([
          { label: 'Renovate city apartment bedroom ( [+$func(\'money\', \'string_price\', 50000) + ...]' }, // TODO-QSP: empty action body
          { label: 'Return', goto: ['shopdacha', ''] },
        ]);
      }
    }
    if ((!((s as any).remsitr ?? 0))) {
      if (qspFunc(s, 'money', 'can_afford', 50000, 'card') === 1) {
        (s as any).remsitr = 1;
        qspCall(s, 'money', 'pay', 50000, 'card');
        qspCall(s, 'homes_properties', 'renovate_property', 'city_apartment', qspFunc(s, 'money', 'price', 50000), 'living room');
        scene.text('You upgrade your apartment living room.');
      } else {
        scene.text('Unfortunately, you do not have enough money in your bank account.');
      }
      scene.actions([
        { label: 'Renovate city apartment living room ( [+$func(\'money\', \'string_price\', 50000) + ...]' }, // TODO-QSP: empty action body
        { label: 'Return', goto: ['shopdacha', ''] },
      ]);
    }
  }
  if ((!((s as any).remkorr ?? 0))) {
    if (qspFunc(s, 'money', 'can_afford', 50000, 'card') === 1) {
      (s as any).remkorr = 1;
      qspCall(s, 'money', 'pay', 50000, 'card');
      qspCall(s, 'homes_properties', 'renovate_property', 'city_apartment', qspFunc(s, 'money', 'price', 50000), 'hallway');
      scene.text('You upgrade your apartment hallway.');
    } else {
      scene.text('Unfortunately, you do not have enough money in your bank account.');
    }
    scene.actions([
      { label: 'Renovate city apartment hallway ( [+$func(\'money\', \'string_price\', 50000) + ...]' }, // TODO-QSP: empty action body
      { label: 'Return', goto: ['shopdacha', ''] },
    ]);
  }
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['city_mall', ''] },
  ]);
  scene.build();
}

export const shopdacha: LocationDef = {
  name: 'shopdacha',
  title: 'Ilyich and Biryukov construction',
  region: 'other',
  description: ['In this storefront office, you can upgrade your existing properties or start a new construction project upon any land you may own.'],
  enter: enter,
};
