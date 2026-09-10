// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).i = 0;
  // TODO-QSP: :loop1
  if (((s as any).i ?? 0) < 4) {
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) === 1) {
    } else {
      if (((s as any).i ?? 0) === 3) {
      }
      (s as any).j = 0;
      // TODO-QSP: :loop2
      if (((s as any).j ?? 0) < 13) {
        (s as any).j = ((s as any).j ?? 0) + (1);
        // TODO-QSP: deckFace[] = j
        // TODO-QSP: $deckImg[] = 'images/locations/city/industrial/casino/cards/<<$text>>/<<j>>.jpg'
        // TODO-QSP: jump 'loop2'
      }
      // TODO-QSP: jump 'loop1'
    }
  }
  scene.build();
}

export const deckShuffle: LocationDef = {
  name: 'deckShuffle',
  region: 'other',
  enter: enter,
};
