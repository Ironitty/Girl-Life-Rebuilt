import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGetTotal(s: GameState, scene: SceneBuilder): void {
  if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'bomba') {
    (s as any).result = 40;
  } else {
    if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'cats') {
      (s as any).result = 40;
    } else {
      if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(10))) === 'danilovich') {
        (s as any).result = 40;
      } else {
        if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'dolls') {
          (s as any).result = 120;
        } else {
          if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'eroto') {
            (s as any).result = 40;
          } else {
            if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(2))) === 'gm') {
              (s as any).result = 30;
            } else {
              if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(8))) === 'moncheri') {
                (s as any).result = 140;
              } else {
                if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(13))) === 'scandalicious') {
                  (s as any).result = 80;
                }
              }
            }
          }
        }
      }
    }
  }
  return;
  scene.build();
}

function enterTotals(s: GameState, scene: SceneBuilder): void {
  (s as any).total = qspFunc(s, 'shoes', 'get_total', ((s as any).locArgs?.[1] ?? 0));
  return;
  scene.build();
}

function enterMoncheri(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'shoe_attributes', $ARGS[0], ARGS[1]
  return;
  if (((s as any).locArgs?.[0] ?? 0) === 'cats') {
    // TODO-QSP: gs 'shoe_attributes', $ARGS[0], ARGS[1]
    return;
  } else {
    if (((s as any).locArgs?.[0] ?? 0) === 'bomba') {
      // TODO-QSP: gs 'shoe_attributes', $ARGS[0], ARGS[1]
      return;
    } else {
      if (((s as any).locArgs?.[0] ?? 0) === 'dolls') {
        // TODO-QSP: gs 'shoe_attributes', $ARGS[0], ARGS[1]
        return;
      } else {
        if (((s as any).locArgs?.[0] ?? 0) === 'gm') {
          // TODO-QSP: gs 'shoe_attributes', $ARGS[0], ARGS[1]
          return;
        } else {
          if (((s as any).locArgs?.[0] ?? 0) === 'eroto') {
            // TODO-QSP: gs 'shoe_attributes', $ARGS[0], ARGS[1]
            return;
          } else {
            if (((s as any).locArgs?.[0] ?? 0) === 'scandalicious') {
              // TODO-QSP: gs 'shoe_attributes', $ARGS[0], ARGS[1]
              return;
            } else {
              if (((s as any).locArgs?.[0] ?? 0) === 'danilovich') {
                // TODO-QSP: gs 'shoe_attributes', $ARGS[0], ARGS[1]
                return;
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'get_total':
      enterGetTotal(s, scene);
      break;
    case 'totals':
      enterTotals(s, scene);
      break;
    case 'moncheri':
      enterMoncheri(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const shoes: LocationDef = {
  name: 'shoes',
  region: 'other',
  enter: enter,
};
