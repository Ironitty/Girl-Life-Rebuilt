// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterBra(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'gm') {
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'fashionista') {
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'cats') {
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'danilovich') {
        } else {
          if (((s as any).locArgs?.[1] ?? 0) === 'eroto') {
          } else {
            if (((s as any).locArgs?.[1] ?? 0) === 'salacious') {
            } else {
              if (((s as any).locArgs?.[1] ?? 0) === 'lusso') {
              }
            }
          }
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCoat(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'gm_coats') {
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'cats_coats') {
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'dolls_coats') {
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'bomba_coats') {
        } else {
          if (((s as any).locArgs?.[1] ?? 0) === 'danilovich_coats') {
          } else {
            if (((s as any).locArgs?.[1] ?? 0) === 'moncheri_coats') {
            }
          }
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterPanty(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'gm') {
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'fashionista') {
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'cats') {
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'danilovich') {
        } else {
          if (((s as any).locArgs?.[1] ?? 0) === 'eroto') {
          } else {
            if (((s as any).locArgs?.[1] ?? 0) === 'salacious') {
            } else {
              if (((s as any).locArgs?.[1] ?? 0) === 'lusso') {
              }
            }
          }
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBodysuit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'lusso') {
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'salacious') {
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'moncheri') {
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'scandalicious') {
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'bra':
      enterBra(s, scene);
      break;
    case 'coat':
      enterCoat(s, scene);
      break;
    case 'panty':
      enterPanty(s, scene);
      break;
    case 'bodysuit':
      enterBodysuit(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const _item_description: LocationDef = {
  name: '_item_description',
  region: 'other',
  enter: enter,
};
