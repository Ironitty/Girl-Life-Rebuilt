// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_rel ?? 0)?.['A28'] < 20) {
    scene.text('You and your stepfather can\'t stand each other, and spend as little time in the same room as possible.');
  } else {
    if (((s as any).npc_rel ?? 0)?.['A28'] < 40) {
      scene.text('You and your stepfather don\'t get along very well.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A28'] < 60) {
        scene.text('You have a normal relationship with your stepfather.');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A28'] < 80) {
          scene.text('You have a good relationship with your stepfather.');
        } else {
          scene.text('You have a great relationship with your stepfather.');
        }
      }
    }
  }
  return;
  scene.build();
}

export const father: LocationDef = {
  name: 'father',
  title: 'Your stepfather, Vladimir Mikhailovich Scriabin',
  region: 'other',
  locationType: 'event',
  description: ['You and your stepfather can\'t stand each other, and spend as little time in the same room as possible.'],
  enter: enter,
};
