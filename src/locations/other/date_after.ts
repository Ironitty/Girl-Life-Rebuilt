import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterExit(s: GameState, scene: SceneBuilder): void {
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
                  if (((s as any).region ?? 0) === 'city') {
                    scene.actions([{ label: 'Continue', goto: ['city_residential', ''] }]);
                  } else {
                    scene.actions([{ label: 'Continue', goto: ['pav_residential', ''] }]);
                  }
                }
              }
            }
          }
        }
      }
    } else {
      if (((s as any).date_ev ?? 0)?.['loc'] === 'hotel_room') {
        if (((s as any).date_ev ?? 0)?.['hotel_days'] > 0) {
          if (((s as any).region ?? 0) === 'pav') {
            qspCall(s, 'date_after', 'ending');
            scene.actions([{ label: 'Continue', goto: ['HotelRoom', 'better'] }]);
          } else {
            if (((s as any).region ?? 0) === 'city') {
              qspCall(s, 'date_after', 'ending');
              scene.actions([{ label: 'Continue', goto: ['HotelRoom', 'best'] }]);
            }
          }
        } else {
          if (((s as any).region ?? 0) === 'pav') {
            qspCall(s, 'date_after', 'ending');
            scene.actions([{ label: 'Continue', goto: ['pav_hotel', ''] }]);
          } else {
            if (((s as any).region ?? 0) === 'city') {
              qspCall(s, 'date_after', 'ending');
              scene.actions([{ label: 'Continue', goto: ['city_hotel', ''] }]);
            }
          }
        }
      } else {
        if (((s as any).date_ev ?? 0)?.['loc'] === 'pc_home') {
          qspCall(s, 'date_after', 'ending');
          if (((s as any).home ?? 0)?.['current'] === 'parents_home') {
            if (((s as any).date_ev_exit ?? 0)?.['loc'] === 'bedroom') {
              scene.actions([{ label: 'Continue', goto: ['bedrPar', ''] }]);
            } else {
              if (((s as any).date_ev_exit ?? 0)?.['loc'] === 'hallway') {
                scene.actions([{ label: 'Continue', goto: ['korrPar', ''] }]);
              }
            }
          } else {
            if (((s as any).date_ev_exit ?? 0)?.['loc'] === 'bedroom') {
              scene.actions([{ label: 'Continue', goto: ['bedr', ''] }]);
            } else {
              if (((s as any).date_ev_exit ?? 0)?.['loc'] === 'hallway') {
                scene.actions([{ label: 'Continue', goto: ['korr', ''] }]);
              }
            }
          }
        } else {
          qspCall(s, 'date_after', 'ending');
          if (((s as any).region ?? 0) === 'pav') {
            scene.actions([{ label: 'Continue', goto: ['pav_residential', ''] }]);
          } else {
            if (((s as any).region ?? 0) === 'city') {
              scene.actions([{ label: 'Continue', goto: ['city_residential', ''] }]);
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterExitIntoLoc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).date_ev ?? 0)?.['loc'] === 'npc_home') {
    qspCall(s, 'date_after', 'ending');
    qspCall(s, 'lover_home', 'bedroom');
  } else {
    if (((s as any).date_ev ?? 0)?.['loc'] === 'pc_home') {
      if (((s as any).date_ev_exit ?? 0)?.['loc'] === 'bedroom') {
        qspCall(s, 'date_after', 'ending');
        ((s as any).pcs_romance ?? {})['lover_here'] = 1;
        scene.actions([{ label: 'Continue', goto: ['bedr', ''] }]);
      } else {
        if (((s as any).date_ev_exit ?? 0)?.['loc'] === 'hallway') {
          ((s as any).pcs_romance ?? {})['lover_here'] = 1;
          qspCall(s, 'date_after', 'ending');
          scene.actions([{ label: 'Continue', goto: ['korr', ''] }]);
        }
      }
    }
  }
  scene.build();
}

function enterEnding(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'date_after', 'end_code');
  if (Object.keys((s as any).sex_ev ?? {}).length > 0) {
    qspCall(s, 'sex_ev_leave', 'end_code');
  }
  scene.build();
}

function enterEndCode(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === ''  ||  ((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'hookup') {
    ((s as any).npc_rel_type ?? {})[String((s as any).npcID ?? 0)] = 'casual';
  }
  qspCall(s, 'arousal', 'end');
  if (((s as any).date_ev ?? 0)?.['prostitution_flag'] === 'prostitution'  ||  ((s as any).date_ev ?? 0)?.['prostitution'] === 1) {
    ((s as any).npc_prostitution_count ?? {})[String((s as any).npcID ?? 0)] = (((s as any).npc_prostitution_count ?? {})[String((s as any).npcID ?? 0)] ?? 0) + (1);
  }
  if (((s as any).date_ev ?? 0)?.['hotel_days'] > 0) {
    if (((s as any).region ?? 0) === 'pav') {
      ((s as any).HotelRoom ?? {})['pav_hotel'] = 2;
    } else {
      if (((s as any).region ?? 0) === 'city') {
        ((s as any).HotelRoom ?? {})['city_hotel'] = 3;
      }
    }
    ((s as any).hotelRoomDays ?? {})['' + String((s as any).$region || '') + '_hotel'] = ((s as any).daystart ?? 0) + ((s as any).date_ev ?? {})?.['hotel_days'];
    ((s as any).HotelRoom ?? {})['' + String((s as any).$region || '') + '_room_service_free'] = 1;
  }
  if (((s as any).date_ev ?? 0)?.['loc'] === 'pc_home'  &&  ((s as any).home ?? 0)?.['current'] === 'parents_home') {
    ((s as any).sisterQW ?? {})['sex_room'] = 1;
    ((s as any).stat ?? {})['parents_home_sex'] = (((s as any).stat ?? {})['parents_home_sex'] ?? 0) + (1);
  }
  if (((s as any).date_ev ?? 0)?.['break_up'] > 0) {
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
  if (((s as any).date_ev ?? 0)?.['not_a_date'] === 0) {
    ((s as any).npc_last_date ?? {})[String((s as any).npcID ?? 0)] = ((s as any).daystart ?? 0);
    ((s as any).npc_date_count ?? {})[String((s as any).npcID ?? 0)] = (((s as any).npc_date_count ?? {})[String((s as any).npcID ?? 0)] ?? 0) + (1);
  }
  scene.build();
}

function enterAfterDate(s: GameState, scene: SceneBuilder): void {
  if (((s as any).date_ev ?? 0)?.['at_home'] === 1) {
    qspCall(s, 'date_ev', 'living_room_img');
    qspCall(s, 'date_after', 'stay_ask');
    scene.actions([
      { label: 'Say goodbye', goto: ['date_after', 'goodbye_route'] },
    ]);
  } else {
    if (((s as any).hour ?? 0) >= 19  ||  ((s as any).daystage ?? 0) >= 4) {
      scene.actions([{ label: 'Continue', goto: ['date_after', 'evening_after_menu'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['date_after', 'daytime_after_menu'] }]);
    }
  }
  scene.build();
}

function enterAfterOutsideImage(s: GameState, scene: SceneBuilder): void {
  if (((s as any).region ?? 0) === 'city') {
    if (((s as any).date_ev ?? 0)?.['type'] === 'park_date') {
      qspCall(s, 'city_park', 'image');
    } else {
      if (((s as any).date_ev ?? 0)?.['type'] === 'casual_restaurant') {
        if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
          if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
            scene.img('images/locations/city/residential/streetw.jpg');
          } else {
            scene.img('images/locations/city/residential/streetwn.jpg');
          }
        } else {
          if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
            scene.img('images/locations/city/residential/street.jpg');
          } else {
            scene.img('images/locations/city/residential/street_night.jpg');
          }
        }
      } else {
        if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
          if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
            scene.img('images/locations/city/citycenter/downw.jpg');
          } else {
            scene.img('images/locations/city/citycenter/downwn.jpg');
          }
        } else {
          if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
            scene.img('images/locations/city/citycenter/down.jpg');
          } else {
            scene.img('images/locations/city/citycenter/down_night.jpg');
          }
        }
      }
    }
  } else {
    if (((s as any).date_ev ?? 0)?.['type'] === 'park_date'  ||  ((s as any).date_ev ?? 0)?.['type'] === 'cinema_date') {
      qspCall(s, 'pav_park', 'pav_park_image');
    } else {
      if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
        if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
          scene.img('images/locations/pavlovsk/pavreswinter.jpg');
        } else {
          scene.img('images/locations/pavlovsk/pavreswintern.jpg');
        }
      } else {
        if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
          scene.img('images/locations/pavlovsk/pavres.jpg');
        } else {
          scene.img('images/locations/pavlovsk/pavresn_\' + rand(1, 2) + \'.jpg');
        }
      }
    }
  }
  scene.build();
}

function enterEveningAfterMenu(s: GameState, scene: SceneBuilder): void {
  if (((s as any).date_ev ?? 0)?.['first_ask'] === 0) {
    ((s as any).date_ev ?? {})['first_ask'] = 1;
    if (((s as any).date_ev ?? 0)?.['at_home'] === 0) {
      qspCall(s, 'date_after', 'after_outside_image');
    }
    scene.text('"So, what do you want to do now?"');
  }
  if (((s as any).date_ev ?? 0)?.['at_home'] === 0) {
    if (((s as any).hour ?? 0) < 21) {
      if ((Array.isArray((s as any).date_ev) ? ((s as any).date_ev as any[]).indexOf('dinner_date') : -1) < 0) {
        // TODO-QSP: act 'Get dinner': gt 'date_ev', 'dinner_after_ask'
      }
    }
    if ((Array.isArray((s as any).date_ev) ? ((s as any).date_ev as any[]).indexOf('park_date') : -1) < 0) {
      // TODO-QSP: act 'Go for a walk': gt 'date_ev', 'dinner_after_ask'
    }
    if ((Array.isArray((s as any).date_ev) ? ((s as any).date_ev as any[]).indexOf('cinema_date') : -1) < 0) {
      // TODO-QSP: act 'Go see a movie': gt 'date_ev', 'cinema_after_ask'
    }
    scene.actions([
      { label: 'Say goodbye', goto: ['date_after', 'goodbye_route'] },
      { label: 'Come over for coffee', goto: ['date_after', 'coffee_after_ask'] },
    ]);
  }
  qspCall(s, 'date_after', 'date_sex_ask');
  scene.build();
}

function enterDaytimeAfterMenu(s: GameState, scene: SceneBuilder): void {
  if (((s as any).date_ev ?? 0)?.['at_home'] === 0) {
    qspCall(s, 'date_after', 'after_outside_image');
  }
  scene.text('"So, what do you want to do now?"');
  scene.actions([
    { label: 'Say goodbye', goto: ['date_after', 'goodbye_route'] },
    { label: 'Come over for coffee', goto: ['date_after', 'coffee_after_ask'] },
    { label: 'Hangout at his place', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_after', 'hangout_ask'
  } },
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
    case 'ending':
      enterEnding(s, scene);
      break;
    case 'end_code':
      enterEndCode(s, scene);
      break;
    case 'after_date':
      enterAfterDate(s, scene);
      break;
    case 'after_outside_image':
      enterAfterOutsideImage(s, scene);
      break;
    case 'evening_after_menu':
      enterEveningAfterMenu(s, scene);
      break;
    case 'daytime_after_menu':
      enterDaytimeAfterMenu(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const date_after: LocationDef = {
  name: 'date_after',
  title: '"So, what do you want to do now?"',
  region: 'other',
  enter: enter,
};
