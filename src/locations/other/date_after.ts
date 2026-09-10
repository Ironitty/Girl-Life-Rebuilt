import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  if (((s as any).date_ev ?? 0)?.['unique_npc'] === 1) {
    qspCall(s, 'date_after', 'ending');
    // TODO-QSP: gt $date_ev_exit['exit_file'], $date_ev_exit['exit_arg']
  } else {
    if (((s as any).date_ev ?? 0)?.['loc'] === 'npc_home') {
      qspCall(s, 'date_after', 'ending');
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
              scene.actions([{ label: 'Continue', goto: ['city_residential', ''] }]);
              scene.actions([{ label: 'Continue', goto: ['pav_residential', ''] }]);
            }
          }
          if (((s as any).date_ev ?? 0)?.['loc'] === 'hotel_room') {
            if (((s as any).date_ev ?? 0)?.['hotel_days'] > 0) {
              if (((s as any).region ?? 0) === 'pav') {
                qspCall(s, 'date_after', 'ending');
                scene.actions([{ label: 'Continue', goto: ['HotelRoom', 'better'] }]);
              } else {
                qspCall(s, 'date_after', 'ending');
                scene.actions([{ label: 'Continue', goto: ['HotelRoom', 'best'] }]);
              }
            } else {
              if (((s as any).region ?? 0) === 'pav') {
                qspCall(s, 'date_after', 'ending');
                scene.actions([{ label: 'Continue', goto: ['pav_hotel', ''] }]);
              } else {
                qspCall(s, 'date_after', 'ending');
                scene.actions([{ label: 'Continue', goto: ['city_hotel', ''] }]);
              }
            }
          } else {
            qspCall(s, 'date_after', 'ending');
            if (((s as any).home ?? 0)?.['current'] === 'parents_home') {
              if (((s as any).date_ev_exit ?? 0)?.['loc'] === 'bedroom') {
                scene.actions([{ label: 'Continue', goto: ['bedrPar', ''] }]);
              } else {
                scene.actions([{ label: 'Continue', goto: ['korrPar', ''] }]);
              }
            } else {
              if (((s as any).date_ev_exit ?? 0)?.['loc'] === 'bedroom') {
                scene.actions([{ label: 'Continue', goto: ['bedr', ''] }]);
              } else {
                scene.actions([{ label: 'Continue', goto: ['korr', ''] }]);
              }
            }
            qspCall(s, 'date_after', 'ending');
            if (((s as any).region ?? 0) === 'pav') {
              scene.actions([{ label: 'Continue', goto: ['pav_residential', ''] }]);
            } else {
              scene.actions([{ label: 'Continue', goto: ['city_residential', ''] }]);
            }
          }
        }
      }
    }
  }
  scene.build();
}

export const date_after: LocationDef = {
  name: 'date_after',
  region: 'other',
  enter: enter,
};
