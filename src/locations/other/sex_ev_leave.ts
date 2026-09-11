import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterExit(s: GameState, scene: SceneBuilder): void {
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
        if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 'uni_grounds') {
          scene.actions([{ label: 'Continue', goto: ['uni_grounds', ''] }]);
        } else {
          if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 'city_residential') {
            scene.actions([{ label: 'Continue', goto: ['city_residential', ''] }]);
          } else {
            if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 'city_center') {
              scene.actions([{ label: 'Continue', goto: ['city_center', ''] }]);
            } else {
              if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === '') {
                if (((s as any).region ?? 0) === 'pav') {
                  scene.actions([{ label: 'Continue', goto: ['pav_residential', ''] }]);
                } else {
                  if (((s as any).region ?? 0) === 'pav_park') {
                    scene.actions([{ label: 'Continue', goto: ['pav_park', 'start'] }]);
                  } else {
                    if (((s as any).region ?? 0) === 'city') {
                      scene.actions([{ label: 'Continue', goto: ['city_residential', ''] }]);
                    } else {
                      if (((s as any).region ?? 0) === 'city_center') {
                        scene.actions([{ label: 'Continue', goto: ['city_center', ''] }]);
                      } else {
                        if (((s as any).region ?? 0) === 'city_park') {
                          scene.actions([{ label: 'Continue', goto: ['city_park', 'start'] }]);
                        } else {
                          if (((s as any).region ?? 0) === 'city_island') {
                            scene.actions([{ label: 'Continue', goto: ['city_island', ''] }]);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['loc'] === 'hotel_room') {
        if (((s as any).sex_ev ?? 0)?.['hotel_days'] > 0) {
          if (((s as any).region ?? 0) === 'pav') {
            qspCall(s, 'sex_ev_leave', 'ending');
            scene.actions([{ label: 'Continue', goto: ['HotelRoom', 'better'] }]);
          } else {
            if (((s as any).region ?? 0) === 'city') {
              qspCall(s, 'sex_ev_leave', 'ending');
              scene.actions([{ label: 'Continue', goto: ['HotelRoom', 'best'] }]);
            }
          }
        } else {
          if (((s as any).region ?? 0) === 'pav') {
            qspCall(s, 'sex_ev_leave', 'ending');
            scene.actions([{ label: 'Continue', goto: ['pav_hotel', ''] }]);
          } else {
            if (((s as any).region ?? 0) === 'city') {
              qspCall(s, 'sex_ev_leave', 'ending');
              scene.actions([{ label: 'Continue', goto: ['city_hotel', ''] }]);
            }
          }
        }
      } else {
        if (((s as any).sex_ev ?? 0)?.['loc'] === 'pc_home') {
          qspCall(s, 'sex_ev_leave', 'ending');
          if (((s as any).sex_ev_exit ?? 0)?.['loc'] === 'bedroom') {
            // TODO-QSP: gt $home['bedroom'], $home['bedroom_arg']
          } else {
            if (((s as any).sex_ev_exit ?? 0)?.['loc'] === 'hallway') {
              // TODO-QSP: gt $home['entrance'], $home['entrance_arg']
            }
          }
        } else {
          if (((s as any).sex_ev ?? 0)?.['loc'] === 'house_party') {
            qspCall(s, 'sex_ev_leave', 'ending');
          }
        }
      }
    }
  }
  scene.build();
}

function enterExitIntoLoc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['loc'] === 'npc_home') {
    qspCall(s, 'sex_ev_leave', 'ending');
    qspCall(s, 'lover_home', 'loc_init');
    scene.actions([{ label: 'Continue', goto: ['lover_home', 'bedroom'] }]);
  } else {
    if (((s as any).sex_ev ?? 0)?.['loc'] === 'pc_home') {
      if (((s as any).sex_ev_exit ?? 0)?.['loc'] === 'bedroom') {
        qspCall(s, 'sex_ev_leave', 'ending');
        ((s as any).pcs_romance ?? {})['lover_here'] = 1;
        scene.actions([{ label: 'Continue', goto: ['bedr', ''] }]);
      } else {
        if (((s as any).sex_ev_exit ?? 0)?.['loc'] === 'hallway') {
          ((s as any).pcs_romance ?? {})['lover_here'] = 1;
          qspCall(s, 'sex_ev_leave', 'ending');
          scene.actions([{ label: 'Continue', goto: ['korr', ''] }]);
        }
      }
    }
  }
  scene.build();
}

function enterExitIntoDate(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_sex', 'session_reset');
  qspCall(s, 'sex_ev_clothing', 'dress_loop_end');
  ((s as any).sex_ev ?? {})['dress_end'] = 0;
  ((s as any).sex_ev ?? {})['extra_cum'] = (((s as any).sex_ev ?? {})['extra_cum'] ?? 0) + (5);
  scene.build();
}

function enterBreakUp(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'fuckbuddy') {
    qspCall(s, 'lover', 'remove_fuckbuddy', ((s as any).npcID ?? 0));
  } else {
    if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'sugar_daddy') {
      qspCall(s, 'lover', 'remove_sugar_daddy', ((s as any).npcID ?? 0));
    } else {
      qspCall(s, 'lover', 'remove', ((s as any).npcID ?? 0));
    }
  }
  scene.actions([{ label: 'Continue', goto: ['sex_ev_leave', 'exit'] }]);
  scene.build();
}

function enterEnding(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_leave', 'end_code');
  if (Object.keys((s as any).date_ev ?? {}).length > 0) {
    qspCall(s, 'date_ev', 'end_code');
  }
  scene.build();
}

function enterEndCode(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_stats', 'save_stats');
  if (((s as any).sugar_daddy_call ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    ((s as any).sugar_daddy_call ?? {})[String((s as any).npcID ?? 0)] = 0;
    ((s as any).sugar_gift_day ?? {})[String((s as any).npcID ?? 0)] = 0;
  }
  // TODO-QSP: $booty_call_hotel[$npcID] = ''
  qspCall(s, 'arousal', 'end');
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    qspCall(s, 'sex_ev_leave', 'dress');
  }
  if (((s as any).sex_ev ?? 0)?.['fuck'] > 0) {
    ((s as any).know_virgin ?? {})[String((s as any).npcID ?? 0)] = 0;
  }
  if (((s as any).sex_ev ?? 0)?.['creampie_orgasm_count'] > 0) {
    ((s as any).stat_memory ?? {})['creampie_orgasm'] = ((s as any).daystart ?? 0);
  }
  ((s as any).npc_last_sex ?? {})[String((s as any).npcID ?? 0)] = ((s as any).daystart ?? 0);
  if (((s as any).sex_ev ?? 0)?.['prostitution_flag'] === 'prostitution'  ||  ((s as any).sex_ev ?? 0)?.['prostitution'] === 1) {
    ((s as any).npc_prostitution_count ?? {})[String((s as any).npcID ?? 0)] = (((s as any).npc_prostitution_count ?? {})[String((s as any).npcID ?? 0)] ?? 0) + (1);
  }
  if (((s as any).sex_ev ?? 0)?.['set_date'] !== 1) {
    ((s as any).npc_booty_call_date ?? {})[String((s as any).npcID ?? 0)] = 0;
  }
  if (((s as any).sex_ev ?? 0)?.['hotel_days'] > 0) {
    if (((s as any).region ?? 0) === 'pav') {
      ((s as any).hotelRoom ?? {})['pav_hotel'] = 2;
    } else {
      if (((s as any).region ?? 0) === 'city') {
        ((s as any).hotelRoom ?? {})['city_hotel'] = 3;
      }
    }
    ((s as any).hotelRoomDays ?? {})['' + String((s as any).$region || '') + '_hotel'] = ((s as any).daystart ?? 0) + ((s as any).sex_ev ?? {})?.['hotel_days'];
    ((s as any).hotelRoom ?? {})['' + String((s as any).$region || '') + '_room_service_free'] = 1;
  }
  if (((s as any).sex_ev ?? 0)?.['loc'] === 'pc_home'  &&  ((s as any).home ?? 0)?.['current'] === 'parents_home') {
    ((s as any).sisterQW ?? {})['sex_room'] = 1;
    ((s as any).stat ?? {})['parents_home_sex'] = (((s as any).stat ?? {})['parents_home_sex'] ?? 0) + (1);
  }
  if (((s as any).sex_ev ?? 0)?.['break_up'] > 0) {
    if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'fuckbuddy') {
      qspCall(s, 'lover', 'remove_fuckbuddy', ((s as any).npcID ?? 0));
    } else {
      if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'sugar_daddy') {
        qspCall(s, 'lover', 'remove_sugar_daddy', ((s as any).npcID ?? 0));
      } else {
        qspCall(s, 'lover', 'remove_boyfriend', ((s as any).npcID ?? 0));
      }
    }
  }
  scene.build();
}

function enterLeaveOptions(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'exit':
      enterExit(s, scene);
      break;
    case 'exit_into_loc':
      enterExitIntoLoc(s, scene);
      break;
    case 'exit_into_date':
      enterExitIntoDate(s, scene);
      break;
    case 'break_up':
      enterBreakUp(s, scene);
      break;
    case 'ending':
      enterEnding(s, scene);
      break;
    case 'end_code':
      enterEndCode(s, scene);
      break;
    case 'leave_options':
      enterLeaveOptions(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sex_ev_leave: LocationDef = {
  name: 'sex_ev_leave',
  region: 'other',
  enter: enter,
};
