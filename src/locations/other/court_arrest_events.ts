import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'shplft'  ||  ((s as any).locArgs?.[1] ?? 0) === 'shoplift') {
    qspCall(s, 'court_functions', 'arrest_for', 'shoplift');
    (s as any).temp_tot_arrests = qspFunc(s, 'court_functions', 'get_total_arrests');
    if (((s as any).temp_tot_arrests ?? 0) === 1) {
      qspCall(s, 'court_arrest_events', 'first_shoplift');
    } else {
      scene.actions([{ label: 'Continue', goto: ['court_arrest_events', 'repeat'] }]);
      if (((s as any).temp_tot_arrests ?? 0) < 11) {
        scene.actions([{ label: 'Continue', goto: ['court_arrest_events', 'multiple'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['court_arrest_events', 'regular'] }]);
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'prst'  ||  ((s as any).locArgs?.[1] ?? 0) === 'prostitution') {
        qspCall(s, 'court_functions', 'arrest_for', 'prostitution');
        (s as any).temp_tot_arrests = qspFunc(s, 'court_functions', 'get_total_arrests');
        if (((s as any).temp_tot_arrests ?? 0) === 1) {
          qspCall(s, 'court_arrest_events', 'first_prostitution');
        } else {
          scene.actions([{ label: 'Continue', goto: ['court_arrest_events', 'repeat'] }]);
          if (((s as any).temp_tot_arrests ?? 0) < 11) {
            scene.actions([{ label: 'Continue', goto: ['court_arrest_events', 'multiple'] }]);
          } else {
            scene.actions([{ label: 'Continue', goto: ['court_arrest_events', 'regular'] }]);
          }
          if (((s as any).locArgs?.[1] ?? 0) === 'pub_ind'  ||  ((s as any).locArgs?.[1] ?? 0) === 'public_indecency') {
            qspCall(s, 'court_functions', 'arrest_for', 'public_indecency');
            (s as any).temp_tot_arrests = qspFunc(s, 'court_functions', 'get_total_arrests');
            if (((s as any).temp_tot_arrests ?? 0) === 1) {
              qspCall(s, 'court_arrest_events', 'first_public_indecency');
            } else {
              scene.actions([{ label: 'Continue', goto: ['court_arrest_events', 'repeat'] }]);
              if (((s as any).temp_tot_arrests ?? 0) < 11) {
                scene.actions([{ label: 'Continue', goto: ['court_arrest_events', 'multiple'] }]);
              } else {
                scene.actions([{ label: 'Continue', goto: ['court_arrest_events', 'regular'] }]);
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

export const court_arrest_events: LocationDef = {
  name: 'court_arrest_events',
  region: 'other',
  enter: enter,
};
