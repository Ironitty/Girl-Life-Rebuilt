// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $result += 'training shoe.'
  if (((s as any).ShoHeels ?? 0) <= 1) {
    // TODO-QSP: $result += 'flat '
  } else {
    if (((s as any).ShoHeels ?? 0) === 2) {
      // TODO-QSP: $result += 'low heel '
    } else {
      if (((s as any).ShoHeels ?? 0) === 3) {
        // TODO-QSP: $result += 'mid heel '
      } else {
        if (((s as any).ShoHeels ?? 0) === 4) {
          // TODO-QSP: $result += 'high heel '
        } else {
          if (((s as any).ShoHeels ?? 0) === 5) {
            // TODO-QSP: $result += 'ultra high heel '
          } else {
            // TODO-QSP: $result += 'fetish heel '
          }
        }
      }
    }
  }
  if (((s as any).ShoCut ?? 0) <= 1) {
    // TODO-QSP: $result += 'shoe.'
  } else {
    if (((s as any).ShoCut ?? 0) === 2) {
      // TODO-QSP: $result += 'ankle boot.'
    } else {
      if (((s as any).ShoCut ?? 0) === 3) {
        // TODO-QSP: $result += 'calf high boot.'
      } else {
        if (((s as any).ShoCut ?? 0) === 4) {
          // TODO-QSP: $result += 'knee high boot.'
        } else {
          if (((s as any).ShoCut ?? 0) === 5) {
            // TODO-QSP: $result += 'thigh high boot.'
          } else {
            // TODO-QSP: $result += 'groin high boot.'
          }
        }
      }
    }
  }
  scene.build();
}

export const _shoe_description2: LocationDef = {
  name: '_shoe_description2',
  region: 'other',
  enter: enter,
};
