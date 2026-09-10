// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  scene.text('"You\'re such a pervert!" you grin, watching Kat close her lips around the stone cock.');
  scene.text('Kat laughs with you, and says: "Hey! I know how to make a man want me, so I can then make him do whatever I want…"');
  scene.text('She tosses the rock to the side carelessly, and you continue on your walk.');
  scene.actions([
    { label: 'Continue', goto: ['Nudelake', ''] },
  ]);
  scene.build();
}

export const Kwlake1: LocationDef = {
  name: 'Kwlake1',
  title: 'While you and Kat walk along the beach, you notice a rock sh',
  region: 'other',
  description: ['"You\'re such a pervert!" you grin, watching Kat close her lips around the stone cock.'],
  enter: enter,
};
