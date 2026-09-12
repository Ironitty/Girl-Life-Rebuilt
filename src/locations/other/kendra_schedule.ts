// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).totminut ?? 0) - ((s as any).locat ?? 0)?.['A84_rand_time'] > 60) {
    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A84_rand_time'] = ((s as any).totminut ?? 0);
    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A84_rand'] = Math.floor(Math.random() * 10) + 0;
  }
  if (((s as any).hour ?? 0) < 9) {
    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A84_loc'] = 'uni_dorm';
    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A84_arg'] = 'asleep';
  } else {
    if (((s as any).week ?? 0) < 4  &&  ((s as any).hour ?? 0) < 16) {
      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A84_loc'] = 'uni_lessons';
    } else {
      if (((s as any).week ?? 0) < 5  &&  ((s as any).hour ?? 0) >= 17  &&  ((s as any).hour ?? 0) < 23  &&  ((s as any).locat ?? 0)?.['A84_rand'] < 5) {
        if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A84_loc'] = 'uni_dorm';
        if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A84_arg'] = 'eighth_floor';
      } else {
        if (((s as any).week ?? 0) >= 5  &&  ((s as any).week ?? 0) < 7  &&  ((s as any).hour ?? 0) < 20  &&  ((s as any).locat ?? 0)?.['A84_rand'] < 5) {
          if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A84_loc'] = 'uni_dorm';
          if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A84_arg'] = 'eighth_floor';
        } else {
          if (((s as any).week ?? 0) === 7  &&  ((s as any).hour ?? 0) < 23  &&  ((s as any).locat ?? 0)?.['A84_rand'] < 8) {
            if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A84_loc'] = 'uni_dorm';
            if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A84_arg'] = 'eighth_floor';
          } else {
            if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A84_loc'] = 'unknown';
            if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A84_arg'] = 'unknown';
          }
        }
      }
    }
  }
  scene.build();
}

export const kendra_schedule: LocationDef = {
  name: 'kendra_schedule',
  region: 'other',
  enter: enter,
};
