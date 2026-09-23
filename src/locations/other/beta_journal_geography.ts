// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterInit(s: GameState, scene: SceneBuilder): void {
  (s as any).loc_id = 'beta_journal_geography';
  (s as any).hot_link = ((s as any).loc_id ?? 0);
  // TODO-QSP: end
  scene.build();
}

function enterGeoPavlovsk(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === '58_estate') {
  } else {
    if (String((s as any).locArgs?.[1] ?? '')=== 'commercial') {
    } else {
      if (String((s as any).locArgs?.[1] ?? '')=== 'industrial') {
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 'market') {
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 'park') {
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 'train_station') {
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterGeoCity(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterGeoPushkin(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterGeoGad(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterGeoVillage(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'init':
      enterInit(s, scene);
      break;
    case 'geo_pavlovsk':
      enterGeoPavlovsk(s, scene);
      break;
    case 'geo_city':
      enterGeoCity(s, scene);
      break;
    case 'geo_pushkin':
      enterGeoPushkin(s, scene);
      break;
    case 'geo_gad':
      enterGeoGad(s, scene);
      break;
    case 'geo_village':
      enterGeoVillage(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const beta_journal_geography: LocationDef = {
  name: 'beta_journal_geography',
  region: 'other',
  enter: enter,
};
