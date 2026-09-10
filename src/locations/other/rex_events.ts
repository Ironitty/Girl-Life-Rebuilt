// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_rel ?? 0)?.['A57'] < 20) {
    scene.text('You and Rex get along terribly.');
  } else {
    scene.text('You and Rex have some tension.');
    if (((s as any).npc_rel ?? 0)?.['A57'] >= 40  &&  ((s as any).npc_rel ?? 0)?.['A57'] < 60) {
      scene.text('You and Rex have a normal relationship.');
    } else {
      scene.text('You and Rex have a good relationship.');
      if (((s as any).npc_rel ?? 0)?.['A57'] >= 80) {
        scene.text('You and Rex have a great relationship.');
      }
      scene.text('');
    }
  }
  scene.build();
}

export const rex_events: LocationDef = {
  name: 'rex_events',
  title: 'You and Rex get along terribly.',
  region: 'other',
  description: ['You and Rex get along terribly.'],
  enter: enter,
};
