// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterSort(s: GameState, scene: SceneBuilder): void {
  (s as any).i = 0;
  // TODO-QSP: :loop1
  if (((s as any).i ?? 0) < 4) {
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) === 1) {
    } else {
      if (((s as any).i ?? 0) === 2) {
      } else {
        if (((s as any).i ?? 0) === 3) {
        } else {
          if (((s as any).i ?? 0) === 4) {
          }
        }
      }
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
  // TODO-QSP: end
  scene.build();
}

function enterShuffle(s: GameState, scene: SceneBuilder): void {
  (s as any).i = 0;
  // TODO-QSP: :loop3
  if (((s as any).i ?? 0) < 52) {
    (s as any).j = Math.floor(Math.random() * 52) + 0;
    (s as any).temp = ((s as any).deckFace ?? 0)?.[String((s as any).i ?? 0)];
    if (!(s as any).deckFace) (s as any).deckFace = {}; (s as any).deckFace[String((s as any).i ?? 0)] = ((s as any).deckFace ?? 0)?.[String((s as any).j ?? 0)];
    if (!(s as any).deckFace) (s as any).deckFace = {}; (s as any).deckFace[String((s as any).j ?? 0)] = ((s as any).temp ?? 0);
    // TODO-QSP: $deckImg[i] = $deckImg[j]
    // TODO-QSP: $deckImg[j] = $text
    (s as any).i = ((s as any).i ?? 0) + (1);
    // TODO-QSP: jump 'loop3'
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'sort':
      enterSort(s, scene);
      break;
    case 'shuffle':
      enterShuffle(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const deckShuffle: LocationDef = {
  name: 'deckShuffle',
  region: 'other',
  enter: enter,
};
