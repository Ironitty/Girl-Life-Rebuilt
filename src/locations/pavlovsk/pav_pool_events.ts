// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 10) {
    scene.text('The pool is almost empty given how early in the morning it is.');
  } else {
    scene.text('The pool is mostly used by families with children and older people at this time.');
    if (((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) < 18) {
      scene.text('The pool is crowded with all kinds of people. It\'s difficult to move around.');
    } else {
      scene.text('Given how late it\'s getting, only a few adults are in the pool right now.');
      scene.text('It\'s rather late now and you\'re the only person in the pool, which means you can enjoy it all to yourself. The silence is very relaxing.');
    }
  }
  scene.build();
}

export const pav_pool_events: LocationDef = {
  name: 'pav_pool_events',
  title: 'The pool is almost empty given how early in the morning it i',
  region: 'pavlovsk',
  description: ['The pool is almost empty given how early in the morning it is.'],
  enter: enter,
};
