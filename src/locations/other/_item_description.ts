// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterBra(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'gm') {
    (s as any).result = 'G&M bra number ' + ((s as any).locArgs?.[2] ?? 0) + '.';
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'fashionista') {
      (s as any).result = 'Fashionista bra number ' + ((s as any).locArgs?.[2] ?? 0) + '.';
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'cats') {
        (s as any).result = 'Pussy-Cats bra number ' + ((s as any).locArgs?.[2] ?? 0) + '.';
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 'danilovich') {
          (s as any).result = 'Danilovich bra number ' + ((s as any).locArgs?.[2] ?? 0) + '.';
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 'eroto') {
            (s as any).result = 'Erotomaniac bra number ' + ((s as any).locArgs?.[2] ?? 0) + '.';
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 'salacious') {
              (s as any).result = 'Salacious bra number ' + ((s as any).locArgs?.[2] ?? 0) + '.';
            } else {
              if (String((s as any).locArgs?.[1] ?? '') === 'lusso') {
                (s as any).result = 'Lusso bra number ' + ((s as any).locArgs?.[2] ?? 0) + '.';
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
  if (String((s as any).locArgs?.[1] ?? '') === 'gm_coats') {
    (s as any).result = 'G&M coat number ' + ((s as any).locArgs?.[2] ?? 0) + '.';
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'cats_coats') {
      (s as any).result = 'Pussy-Cats coat number ' + ((s as any).locArgs?.[2] ?? 0) + '.';
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'dolls_coats') {
        (s as any).result = 'Patchwork Dolls coat number ' + ((s as any).locArgs?.[2] ?? 0) + '.';
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 'bomba_coats') {
          (s as any).result = 'Tsar Bomba coat number ' + ((s as any).locArgs?.[2] ?? 0) + '.';
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 'danilovich_coats') {
            (s as any).result = 'Danilovich coat number ' + ((s as any).locArgs?.[2] ?? 0) + '.';
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 'moncheri_coats') {
              (s as any).result = 'Mon Chéri coat number ' + ((s as any).locArgs?.[2] ?? 0) + '.';
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
  if (String((s as any).locArgs?.[1] ?? '') === 'gm') {
    (s as any).result = 'G&M panties number ' + ((s as any).locArgs?.[2] ?? 0) + '.';
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'fashionista') {
      (s as any).result = 'Fashionista panties number ' + ((s as any).locArgs?.[2] ?? 0) + '.';
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'cats') {
        (s as any).result = 'Pussy-Cats panties number ' + ((s as any).locArgs?.[2] ?? 0) + '.';
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 'danilovich') {
          (s as any).result = 'Danilovich panties number ' + ((s as any).locArgs?.[2] ?? 0) + '.';
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 'eroto') {
            (s as any).result = 'Erotomaniac panties number ' + ((s as any).locArgs?.[2] ?? 0) + '.';
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 'salacious') {
              (s as any).result = 'Salacious panties number ' + ((s as any).locArgs?.[2] ?? 0) + '.';
            } else {
              if (String((s as any).locArgs?.[1] ?? '') === 'lusso') {
                (s as any).result = 'Lusso panties number ' + ((s as any).locArgs?.[2] ?? 0) + '.';
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
  if (String((s as any).locArgs?.[1] ?? '') === 'lusso') {
    (s as any).result = 'Lusso bodysuit number ' + ((s as any).locArgs?.[2] ?? 0) + '.';
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'salacious') {
      (s as any).result = 'Salacious bodysuit number ' + ((s as any).locArgs?.[2] ?? 0) + '.';
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'moncheri') {
        (s as any).result = 'Mon Chéri bodysuit number ' + ((s as any).locArgs?.[2] ?? 0) + '.';
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 'scandalicious') {
          (s as any).result = 'Scandalicious bodysuit number ' + ((s as any).locArgs?.[2] ?? 0) + '.';
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
