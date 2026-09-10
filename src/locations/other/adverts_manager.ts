import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'saveposition', '');
  scene.actions([{ label: 'Continue', goto: ['adverts_manager', 'show'] }]);
  scene.build();
}

function enterCikl(s: GameState, scene: SceneBuilder): void {
  if (((s as any).month ?? 0) > 8) {
    (s as any).adv_chance['guitar'] = 50;
  }
  scene.build();
}

function enterCheckLocation(s: GameState, scene: SceneBuilder): void {
  if (((s as any).loc ?? 0) === 'pav_commercial') {
    if (((s as any).adv_pav_commercial ?? 0)?.[String(((s as any).adv_list ?? 0)?.[String((s as any).i ?? 0)])] === 1) {
      (s as any).adv_location_result = 1;
    } else {
      (s as any).adv_location_result = 0;
    }
  } else {
    if (((s as any).adv_pav_commcenter ?? 0)?.[String(((s as any).adv_list ?? 0)?.[String((s as any).i ?? 0)])] === 1) {
      (s as any).adv_location_result = 1;
    } else {
      (s as any).adv_location_result = 0;
    }
    if (((s as any).loc ?? 0) === 'city_industrial') {
      if (((s as any).adv_city_industrial ?? 0)?.[String(((s as any).adv_list ?? 0)?.[String((s as any).i ?? 0)])] === 1) {
        (s as any).adv_location_result = 1;
      } else {
        (s as any).adv_location_result = 0;
      }
    } else {
      if (((s as any).adv_city_residential ?? 0)?.[String(((s as any).adv_list ?? 0)?.[String((s as any).i ?? 0)])] === 1) {
        (s as any).adv_location_result = 1;
      } else {
        (s as any).adv_location_result = 0;
      }
      if (((s as any).loc ?? 0) === 'city_center') {
        if (((s as any).adv_city_center ?? 0)?.[String(((s as any).adv_list ?? 0)?.[String((s as any).i ?? 0)])] === 1) {
          (s as any).adv_location_result = 1;
        } else {
          (s as any).adv_location_result = 0;
        }
      } else {
        (s as any).adv_location_result = 2;
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'cikl':
      enterCikl(s, scene);
      break;
    case 'check_location':
      enterCheckLocation(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const adverts_manager: LocationDef = {
  name: 'adverts_manager',
  title: 'Noticeboard',
  region: 'other',
  locationType: 'public_indoors',
  enter: enter,
};
