// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).strand = (Math.floor(Math.random() * 11) + 0);
  if ((!((s as any).strand ?? 0))) {
    // TODO-QSP: And hell - this is where you do not have with me.'
  } else {
    if (((s as any).strand ?? 0) === 1) {
      // TODO-QSP: And the beauty queen enjoy.'
    } else {
      if (((s as any).strand ?? 0) === 2) {
        // TODO-QSP: I do not need any other happiness.'
      } else {
        if (((s as any).strand ?? 0) === 3) {
          // TODO-QSP: And never fly.'
        } else {
          if (((s as any).strand ?? 0) === 4) {
            // TODO-QSP: as the sea without water…'
          } else {
            if (((s as any).strand ?? 0) === 5) {
              // TODO-QSP: Help me understand the feelings.'
            } else {
              if (((s as any).strand ?? 0) === 6) {
                // TODO-QSP: In his heart remained ardent feelings of courage.'
              } else {
                if (((s as any).strand ?? 0) === 7) {
                  // TODO-QSP: Light of your love.'
                } else {
                  if (((s as any).strand ?? 0) === 8) {
                    // TODO-QSP: Just have to wait and wait.'
                  } else {
                    if (((s as any).strand ?? 0) === 9) {
                      // TODO-QSP: After all, these are not empty words!'
                    } else {
                      if (((s as any).strand ?? 0) === 10) {
                        // TODO-QSP: Will live a hundred years before…'
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

export const stihi: LocationDef = {
  name: 'stihi',
  region: 'other',
  enter: enter,
};
