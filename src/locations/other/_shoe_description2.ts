// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (((s as any).ShoQuality ?? 0) <= 1) {
  } else {
    if (((s as any).ShoQuality ?? 0) === 2) {
    } else {
      if (((s as any).ShoQuality ?? 0) === 3) {
      } else {
        if (((s as any).ShoQuality ?? 0) === 4) {
        } else {
          if (((s as any).ShoQuality ?? 0) === 5) {
          } else {
            if (((s as any).ShoQuality ?? 0) === 6) {
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterDanilovich(s: GameState, scene: SceneBuilder): void {
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
  // TODO-QSP: end
  if (((s as any).ShoStyle ?? 0) === 1) {
    // TODO-QSP: $result += ' These shoes are considered alternative shoes.'
  }
  if (((s as any).ShoStyle2 ?? 0) === 1  ||  ((s as any).ShoStrip ?? 0) === 1) {
    // TODO-QSP: $result += ' These shoes are considered stripper shoes.'
  } else {
    if (((s as any).ShoStyle2 ?? 0) === 2  ||  ((s as any).ShoSport ?? 0) === 1) {
      // TODO-QSP: $result += ' These shoes are considered exercise shoes.'
    }
  }
  if (((s as any).ShoBimbo ?? 0) === 1) {
    // TODO-QSP: $temp_shoe_desc[] = 'bimbo'
  }
  if (((s as any).ShoGoth ?? 0) === 1) {
    // TODO-QSP: $temp_shoe_desc[] = 'goth'
  }
  if (((s as any).ShoPunk ?? 0) === 1) {
    // TODO-QSP: $temp_shoe_desc[] = 'punk'
  }
  if (Object.keys((s as any).temp_shoe_desc ?? {}).length > 0) {
    // TODO-QSP: $result += ' These shoes are considered '
    // TODO-QSP: $result += func('string', 'enumerate_list', '$temp_shoe_desc')
    // TODO-QSP: $result += ' shoes.'
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'danilovich':
      enterDanilovich(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const _shoe_description2: LocationDef = {
  name: '_shoe_description2',
  region: 'other',
  enter: enter,
};
