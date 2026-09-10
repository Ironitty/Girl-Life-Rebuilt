import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).sex_ev['locat'] = ((s as any).locArgs?.[2] ?? 0);
  qspCall(s, 'sex_ev_start', 'npcstat_init', ((s as any).locArgs?.[1] ?? 0));
  (s as any).sex_ev['npc_stam'] = (30 * (2 * ((s as any).npc_vital ?? 0) + ((s as any).npc_agil ?? 0) + ((s as any).npc_stren ?? 0)) + 1000) / 13;
  qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'hair_color');
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== ''  &&  ((s as any).ngpPrefResult ?? 0)?.['NotPos'] !== ''  &&  ((s as any).pcs_haircol ?? 0) <= 3) {
    (s as any).sex_ev['boy_likes_hair'] = 1;
  }
  if (((s as any).sex_ev ?? 0)?.['locat'] === 'npc_home') {
    qspCall(s, 'sex_ev_start', 'lover_home_img_init');
  } else {
    qspCall(s, 'sex_ev_start', '<<$region>>_hotel_img_init');
    if (((s as any).sex_ev ?? 0)?.['locat'] === 'pc_home') {
      qspCall(s, 'sex_ev_start', 'pc_home_img_init');
    } else {
      (s as any).sex_ev['loc'] = ((s as any).sex_ev ?? 0)?.['locat'];
    }
    if (Object.keys((s as any).date_ev ?? {}).length <= 0  &&  (!(((s as any).sex_ev ?? 0)?.['date_before_sex'] + ((s as any).sex_ev ?? 0)?.['sex_before_date']))) {
      (s as any).sex_ev['sex_before_date'] = 1;
    } else {
      (s as any).sex_ev['date_before_sex'] = 1;
    }
    if (Object.keys((s as any).date_ev ?? {}).length > 0) {
      if (((s as any).date_ev ?? 0)?.['npc_home_sex'] === 1) {
        // TODO-QSP: xgt 'sex_ev_start', 'date_npc_home_start'
      } else {
        // TODO-QSP: xgt 'sex_ev_start', 'date_pc_home_start'
        if (((s as any).date_ev ?? 0)?.['hotel_sex'] === 1) {
          // TODO-QSP: xgt 'sex_ev_start', 'date_hotel_start'
        } else {
          // TODO-QSP: xgt 'sex_ev_start', 'date_npc_home_start'
        }
        if (((';dating;fuckbuddy;sugar_daddy;daddy;boyfriend;husband;').indexOf((';\'0\';'))) + 1 > 0) {
          // TODO-QSP: xgt 'sex_ev_start', 'lover_initiate', $sex_ev['loc']
        } else {
          // TODO-QSP: xgt 'sex_ev_start', 'lover_initiate', $sex_ev['loc']
          qspCall(s, 'sex_ev_start', 'hookup_initiate');
          qspCall(s, 'sex_ev_start', 'begin');
          // TODO-QSP: xgt 'sex_ev_start', 'undress_menu'
        }
      }
    }
  }
  scene.build();
}

export const sex_ev_start: LocationDef = {
  name: 'sex_ev_start',
  region: 'other',
  locationType: 'event',
  enter: enter,
};
