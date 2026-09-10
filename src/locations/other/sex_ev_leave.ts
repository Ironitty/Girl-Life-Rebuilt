import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  if (((s as any).sex_ev ?? 0)?.['unique_npc'] === 1) {
    qspCall(s, 'sex_ev_leave', 'ending');
    // TODO-QSP: gt $sex_ev_exit['exit_file'], $sex_ev_exit['exit_arg']
  } else {
    if (((s as any).sex_ev ?? 0)?.['loc'] === 'npc_home') {
      qspCall(s, 'sex_ev_leave', 'ending');
      if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 'pav_residential') {
        scene.actions([{ label: 'Continue', goto: ['pav_residential', ''] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['uni_grounds', ''] }]);
        if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 'city_residential') {
          scene.actions([{ label: 'Continue', goto: ['city_residential', ''] }]);
        } else {
          scene.actions([{ label: 'Continue', goto: ['city_center', ''] }]);
          if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === '') {
            if (((s as any).region ?? 0) === 'pav') {
              scene.actions([{ label: 'Continue', goto: ['pav_residential', ''] }]);
            } else {
              scene.actions([{ label: 'Continue', goto: ['pav_park', 'start'] }]);
              if (((s as any).region ?? 0) === 'city') {
                scene.actions([{ label: 'Continue', goto: ['city_residential', ''] }]);
              } else {
                scene.actions([{ label: 'Continue', goto: ['city_center', ''] }]);
                if (((s as any).region ?? 0) === 'city_park') {
                  scene.actions([{ label: 'Continue', goto: ['city_park', 'start'] }]);
                } else {
                  scene.actions([{ label: 'Continue', goto: ['city_island', ''] }]);
                }
              }
              if (((s as any).sex_ev ?? 0)?.['loc'] === 'hotel_room') {
                if (((s as any).sex_ev ?? 0)?.['hotel_days'] > 0) {
                  if (((s as any).region ?? 0) === 'pav') {
                    qspCall(s, 'sex_ev_leave', 'ending');
                    scene.actions([{ label: 'Continue', goto: ['HotelRoom', 'better'] }]);
                  } else {
                    qspCall(s, 'sex_ev_leave', 'ending');
                    scene.actions([{ label: 'Continue', goto: ['HotelRoom', 'best'] }]);
                  }
                } else {
                  if (((s as any).region ?? 0) === 'pav') {
                    qspCall(s, 'sex_ev_leave', 'ending');
                    scene.actions([{ label: 'Continue', goto: ['pav_hotel', ''] }]);
                  } else {
                    qspCall(s, 'sex_ev_leave', 'ending');
                    scene.actions([{ label: 'Continue', goto: ['city_hotel', ''] }]);
                  }
                }
              } else {
                qspCall(s, 'sex_ev_leave', 'ending');
                if (((s as any).sex_ev_exit ?? 0)?.['loc'] === 'bedroom') {
                  // TODO-QSP: gt $home['bedroom'], $home['bedroom_arg']
                } else {
                  // TODO-QSP: gt $home['entrance'], $home['entrance_arg']
                }
                if (((s as any).sex_ev ?? 0)?.['loc'] === 'house_party') {
                  qspCall(s, 'sex_ev_leave', 'ending');
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

export const sex_ev_leave: LocationDef = {
  name: 'sex_ev_leave',
  region: 'other',
  enter: enter,
};
