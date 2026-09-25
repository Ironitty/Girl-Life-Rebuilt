import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterExit(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  if (((s as any).date_ev ?? 0)?.['unique_npc'] === 1) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEnding(s, scene); (s as any).locArgs = __savedLocArgs; }
    dynamicGoto(s, (((s as any).date_ev_exit ?? {}))['exit_file'], (((s as any).date_ev_exit ?? {}))['exit_arg']);
  } else {
    if (((s as any).date_ev ?? 0)?.['loc'] === 'npc_home') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEnding(s, scene); (s as any).locArgs = __savedLocArgs; }
      if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 'pav_residential') {
        qspGoto(s, 'pav_residential', '');
      } else {
        if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 'uni_grounds') {
          qspGoto(s, 'uni_grounds', '');
        } else {
          if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 'city_residential') {
            qspGoto(s, 'city_residential', '');
          } else {
            if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 'city_center') {
              qspGoto(s, 'city_center', '');
            } else {
              if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === '') {
                if (((s as any).region ?? 0) === 'pav') {
                  qspGoto(s, 'pav_residential', '');
                } else {
                  if (((s as any).region ?? 0) === 'city') {
                    qspGoto(s, 'city_residential', '');
                  } else {
                    alert('Report failsafe exit!');
                    qspGoto(s, 'pav_residential', '');
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
            (s as any).hotel = 'pav_hotel';
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEnding(s, scene); (s as any).locArgs = __savedLocArgs; }
            qspGoto(s, 'HotelRoom', 'better');
          } else {
            if (((s as any).region ?? 0) === 'city') {
              (s as any).hotel = 'city_hotel';
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEnding(s, scene); (s as any).locArgs = __savedLocArgs; }
              qspGoto(s, 'HotelRoom', 'best');
            }
          }
        } else {
          if (((s as any).region ?? 0) === 'pav') {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEnding(s, scene); (s as any).locArgs = __savedLocArgs; }
            qspGoto(s, 'pav_hotel', '');
          } else {
            if (((s as any).region ?? 0) === 'city') {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEnding(s, scene); (s as any).locArgs = __savedLocArgs; }
              qspGoto(s, 'city_hotel', '');
            }
          }
        }
      } else {
        if (((s as any).date_ev ?? 0)?.['loc'] === 'pc_home') {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEnding(s, scene); (s as any).locArgs = __savedLocArgs; }
          if (((s as any).home ?? 0)?.['current'] === 'parents_home') {
            if (((s as any).date_ev_exit ?? 0)?.['loc'] === 'bedroom') {
              qspGoto(s, 'bedrPar', '');
            } else {
              if (((s as any).date_ev_exit ?? 0)?.['loc'] === 'hallway') {
                qspGoto(s, 'korrPar', '');
              }
            }
          } else {
            if (((s as any).date_ev_exit ?? 0)?.['loc'] === 'bedroom') {
              qspGoto(s, 'bedr', '');
            } else {
              if (((s as any).date_ev_exit ?? 0)?.['loc'] === 'hallway') {
                qspGoto(s, 'korr', '');
              }
            }
          }
        } else {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEnding(s, scene); (s as any).locArgs = __savedLocArgs; }
          if (((s as any).region ?? 0) === 'pav') {
            qspGoto(s, 'pav_residential', '');
          } else {
            if (((s as any).region ?? 0) === 'city') {
              qspGoto(s, 'city_residential', '');
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
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEnding(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspCall(s, 'lover_home', 'bedroom');
  } else {
    if (((s as any).date_ev ?? 0)?.['loc'] === 'pc_home') {
      if (((s as any).date_ev_exit ?? 0)?.['loc'] === 'bedroom') {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEnding(s, scene); (s as any).locArgs = __savedLocArgs; }
        ((s as any).pcs_romance = (s as any).pcs_romance ?? {})['lover_here'] = 1;
        qspGoto(s, 'bedr', '');
      } else {
        if (((s as any).date_ev_exit ?? 0)?.['loc'] === 'hallway') {
          ((s as any).pcs_romance = (s as any).pcs_romance ?? {})['lover_here'] = 1;
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEnding(s, scene); (s as any).locArgs = __savedLocArgs; }
          qspGoto(s, 'korr', '');
        }
      }
    }
  }
  scene.build();
}

function enterEnding(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEndCode(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (Object.keys((s as any).sex_ev ?? {}).length > 0) {
    qspCall(s, 'sex_ev_leave', 'end_code');
  }
  scene.build();
}

function enterEndCode(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === ''  ||  ((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'hookup') {
    ((s as any).npc_rel_type = (s as any).npc_rel_type ?? {})[String((s as any).npcID ?? 0)] = 'casual';
  }
  qspCall(s, 'arousal', 'end');
  if (((s as any).date_ev ?? 0)?.['prostitution_flag'] === 'prostitution'  ||  ((s as any).date_ev ?? 0)?.['prostitution'] === 1) {
    ((s as any).npc_prostitution_count = (s as any).npc_prostitution_count ?? {})[String((s as any).npcID ?? 0)] = ((s as any).npc_prostitution_count[String((s as any).npcID ?? 0)] ?? 0) + (1);
  }
  if (((s as any).date_ev ?? 0)?.['hotel_days'] > 0) {
    if (((s as any).region ?? 0) === 'pav') {
      ((s as any).HotelRoom = (s as any).HotelRoom ?? {})['pav_hotel'] = 2;
    } else {
      if (((s as any).region ?? 0) === 'city') {
        ((s as any).HotelRoom = (s as any).HotelRoom ?? {})['city_hotel'] = 3;
      }
    }
    ((s as any).hotelRoomDays = (s as any).hotelRoomDays ?? {})[String(((s as any).region ?? 0)) + '_hotel'] = ((s as any).daystart ?? 0) + (((s as any).date_ev ?? {})?.['hotel_days'] ?? 0);
    ((s as any).HotelRoom = (s as any).HotelRoom ?? {})[String(((s as any).region ?? 0)) + '_room_service_free'] = 1;
  }
  if (((s as any).date_ev ?? 0)?.['loc'] === 'pc_home'  &&  ((s as any).home ?? 0)?.['current'] === 'parents_home') {
    ((s as any).sisterQW = (s as any).sisterQW ?? {})['sex_room'] = 1;
    ((s as any).stat = (s as any).stat ?? {})['parents_home_sex'] = ((s as any).stat['parents_home_sex'] ?? 0) + (1);
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
    ((s as any).npc_last_date = (s as any).npc_last_date ?? {})[String((s as any).npcID ?? 0)] = ((s as any).daystart ?? 0);
    ((s as any).npc_date_count = (s as any).npc_date_count ?? {})[String((s as any).npcID ?? 0)] = ((s as any).npc_date_count[String((s as any).npcID ?? 0)] ?? 0) + (1);
  }
  (s as any).date_ev = undefined;
  (s as any).npc_pref_traits = undefined;
  (s as any).npc_pref_values = undefined;
  scene.build();
}

function enterAfterDate(s: GameState, scene: SceneBuilder): void {
  if (((s as any).date_ev ?? 0)?.['at_home'] === 1) {
    qspCall(s, 'date_ev', 'living_room_img');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStayAsk(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Say goodbye', goto: ['date_after', 'goodbye_route'] },
    ]);
  } else {
    if (((s as any).hour ?? 0) >= 19  ||  ((s as any).daystage ?? 0) >= 4) {
      qspGoto(s, 'date_after', 'evening_after_menu');
    } else {
      qspGoto(s, 'date_after', 'daytime_after_menu');
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
          scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/pavresn_` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
        }
      }
    }
  }
  scene.build();
}

function enterEveningAfterMenu(s: GameState, scene: SceneBuilder): void {
  if (((s as any).date_ev ?? 0)?.['first_ask'] === 0) {
    ((s as any).date_ev = (s as any).date_ev ?? {})['first_ask'] = 1;
    if (((s as any).date_ev ?? 0)?.['at_home'] === 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAfterOutsideImage(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    scene.text('"So, what do you want to do now?"');
  }
  if (((s as any).date_ev ?? 0)?.['at_home'] === 0) {
    if (((s as any).hour ?? 0) < 21) {
      if ((Array.isArray((s as any).date_ev) ? ((s as any).date_ev as any[]).indexOf('dinner_date') : -1) < 0) {
        scene.actions([
          { label: 'Get dinner', goto: ['date_ev', 'dinner_after_ask'] },
        ]);
      }
    }
    if ((Array.isArray((s as any).date_ev) ? ((s as any).date_ev as any[]).indexOf('park_date') : -1) < 0) {
      scene.actions([
        { label: 'Go for a walk', goto: ['date_ev', 'dinner_after_ask'] },
      ]);
    }
    if ((Array.isArray((s as any).date_ev) ? ((s as any).date_ev as any[]).indexOf('cinema_date') : -1) < 0) {
      scene.actions([
        { label: 'Go see a movie', goto: ['date_ev', 'cinema_after_ask'] },
      ]);
    }
    scene.actions([
      { label: 'Say goodbye', goto: ['date_after', 'goodbye_route'] },
      { label: 'Come over for coffee', goto: ['date_after', 'coffee_after_ask'] },
    ]);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDateSexAsk(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterDaytimeAfterMenu(s: GameState, scene: SceneBuilder): void {
  if (((s as any).date_ev ?? 0)?.['at_home'] === 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAfterOutsideImage(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  scene.text('"So, what do you want to do now?"');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDateSexAsk(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.actions([
    { label: 'Say goodbye', goto: ['date_after', 'goodbye_route'] },
    { label: 'Come over for coffee', goto: ['date_after', 'coffee_after_ask'] },
    { label: 'Hangout at his place', goto: ['date_after', 'hangout_ask'] },
  ]);
  scene.build();
}

function enterDateSexAsk(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Suggest sex (subtle)', handler: (st: GameState) => {
    scene.text('"I could think of a few things we could do..." you say slyly, tracing your finger in circles on his chest. "Something involving a bed and not a lot of clothes and..."');
    if (((st as any).date_ev ?? 0)?.['at_home'] === 0) {
      if (((st as any).home ?? 0)?.['region'] !== ((st as any).region ?? 0)  &&  ((st as any).npc_residence ?? 0)?.[String((st as any).npcID ?? 0)] !== 'region') {
        ((st as any).date_ev = (st as any).date_ev ?? {})['hotel_sex'] = 1;
        scene.text('"I don\'t think I can make it home," he grins back. "We better get a hotel room."');
        scene.actions([
          { label: 'Go to the nearest hotel', goto: ['sex_ev_start', 'initiate_pre', 'npcID', 'hotel'] },
        ]);
      } else {
        if (((st as any).npc_wife ?? 0)?.[String((st as any).npcID ?? 0)] > 0  &&  ((st as any).npc_finance ?? 0) >= 1) {
          ((st as any).date_ev = (st as any).date_ev ?? {})['hotel_sex'] = 1;
          scene.text('"My wife is home," he grins back. "Better get a hotel room."');
          scene.actions([
            { label: 'Go to the nearest hotel', goto: ['sex_ev_start', 'initiate_pre', 'npcID', 'hotel'] },
          ]);
        } else {
          if (((st as any).npc_girlfriend ?? 0)?.[String((st as any).npcID ?? 0)] > 0  &&  ((st as any).npc_finance ?? 0) >= 1) {
            ((st as any).date_ev = (st as any).date_ev ?? {})['hotel_sex'] = 1;
            scene.text('"My girlfriend is home," he grins back. "Better get a hotel room."');
            scene.actions([
              { label: 'Go to the nearest hotel', goto: ['sex_ev_start', 'initiate_pre', 'npcID', 'hotel'] },
            ]);
          } else {
            if (((st as any).sex_ev ?? 0)?.['loc'] === 'hotel_room') {
              ((st as any).date_ev = (st as any).date_ev ?? {})['hotel_sex'] = 1;
              scene.text('"Back to the hotel room?" he grins.');
              scene.text('"Yeah."');
              scene.actions([
                { label: 'Rush back', goto: ['sex_ev_start', 'initiate_pre', 'npcID', 'hotel'] },
              ]);
            } else {
              scene.text('"Your place or mine?" he grins back.');
              if (((st as any).home ?? 0)?.['current'] !== 'parents_home') {
                scene.actions([
                  { label: 'Your place', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['pc_home_sex'] = 1;
    scene.text('"Let\'s go back to mine."');
    scene.text('The two of you hurry back to your place.');
    scene.actions([
      { label: 'Rush home', goto: ['sex_ev_start', 'initiate_pre', 'npcID', 'pc_home'] },
    ]);
  } },
                ]);
              }
              scene.actions([
                { label: 'His place', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['npc_home_sex'] = 1;
    scene.text('"Yours."');
    scene.text('The two of you hurry back to his apartment.');
    scene.actions([
      { label: 'Rush home', goto: ['sex_ev_start', 'initiate_pre', 'npcID', 'npc_home'] },
    ]);
  } },
              ]);
            }
          }
        }
      }
    } else {
      scene.text('Taking his hand in yours, you lead him to the bed.');
      if (((st as any).date_ev ?? 0)?.['loc'] === 'npc_home') {
        ((st as any).date_ev = (st as any).date_ev ?? {})['npc_home_sex'] = 1;
        scene.actions([
          { label: 'Continue', goto: ['sex_ev_start', 'initiate_pre', 'npcID', 'npc_home'] },
        ]);
      } else {
        if (((st as any).date_ev ?? 0)?.['loc'] === 'pc_home') {
          ((st as any).date_ev = (st as any).date_ev ?? {})['pc_home_sex'] = 1;
          scene.actions([
            { label: 'Continue', goto: ['sex_ev_start', 'initiate_pre', 'npcID', 'pc_home'] },
          ]);
        }
      }
    }
  } },
    { label: '"Let\'s fuck"', handler: (st: GameState) => {
    if (((st as any).date_ev ?? 0)?.['at_home'] === 0) {
      scene.text('"Why don\'t we find a bed and fuck?" you grin.');
      if (((st as any).home ?? 0)?.['region'] !== ((st as any).region ?? 0)  &&  ((st as any).npc_residence ?? 0)?.[String((st as any).npcID ?? 0)] !== 'region') {
        ((st as any).date_ev = (st as any).date_ev ?? {})['hotel_sex'] = 1;
        scene.text('"I don\'t think I can make it home," he grins back. "We better get a hotel room."');
        scene.actions([
          { label: 'Go to the nearest hotel', goto: ['sex_ev_start', 'initiate_pre', 'npcID', 'hotel'] },
        ]);
      } else {
        if (((st as any).npc_wife ?? 0)?.[String((st as any).npcID ?? 0)] > 0  &&  ((st as any).npc_finance ?? 0) >= 1) {
          ((st as any).date_ev = (st as any).date_ev ?? {})['hotel_sex'] = 1;
          scene.text('"My wife is home," he grins back. "Better get a hotel room."');
          scene.actions([
            { label: 'Go to the nearest hotel', goto: ['sex_ev_start', 'initiate_pre', 'npcID', 'hotel'] },
          ]);
        } else {
          if (((st as any).npc_girlfriend ?? 0)?.[String((st as any).npcID ?? 0)] > 0  &&  ((st as any).npc_finance ?? 0) >= 1) {
            ((st as any).date_ev = (st as any).date_ev ?? {})['hotel_sex'] = 1;
            scene.text('"My girlfriend is home," he grins back. "Better get a hotel room."');
            scene.actions([
              { label: 'Go to the nearest hotel', goto: ['sex_ev_start', 'initiate_pre', 'npcID', 'hotel'] },
            ]);
          } else {
            if (((st as any).sex_ev ?? 0)?.['loc'] === 'hotel_room') {
              ((st as any).date_ev = (st as any).date_ev ?? {})['hotel_sex'] = 1;
              scene.text('"Back to the hotel room?" he grins.');
              scene.text('"Yeah."');
              scene.actions([
                { label: 'Rush back', goto: ['sex_ev_start', 'initiate_pre', 'npcID', 'hotel'] },
              ]);
            } else {
              scene.text('"Your place or mine?" he grins back.');
              if (((st as any).home ?? 0)?.['current'] !== 'parents_home') {
                scene.actions([
                  { label: 'Your place', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['pc_home_sex'] = 1;
    scene.text('"Let\'s go back to mine."');
    scene.text('The two of you hurry back to your place.');
    scene.actions([
      { label: 'Rush home', goto: ['sex_ev_start', 'initiate_pre', 'npcID', 'pc_home'] },
    ]);
  } },
                ]);
              }
              scene.actions([
                { label: 'His place', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['npc_home_sex'] = 1;
    scene.text('"Yours."');
    scene.text('The two of you hurry back to his apartment.');
    scene.actions([
      { label: 'Rush home', goto: ['sex_ev_start', 'initiate_pre', 'npcID', 'npc_home'] },
    ]);
  } },
              ]);
            }
          }
        }
      }
    } else {
      scene.text('"Let\'s fuck," you grin at him and in moments, you are headed toward the bed together.');
      if (((st as any).date_ev ?? 0)?.['loc'] === 'npc_home') {
        ((st as any).date_ev = (st as any).date_ev ?? {})['npc_home_sex'] = 1;
        scene.actions([
          { label: 'Bedroom', goto: ['sex_ev_start', 'initiate_pre', 'npcID', 'npc_home'] },
        ]);
      } else {
        if (((st as any).date_ev ?? 0)?.['loc'] === 'pc_home') {
          ((st as any).date_ev = (st as any).date_ev ?? {})['pc_home_sex'] = 1;
          scene.actions([
            { label: 'Bedroom', goto: ['sex_ev_start', 'initiate_pre', 'npcID', 'pc_home'] },
          ]);
        }
      }
    }
  } },
    { label: '"Let\'s make love"', handler: (st: GameState) => {
    if (((st as any).date_ev ?? 0)?.['at_home'] === 0) {
      scene.text('"I don\'t want the ' + ((((st as any).hour ?? 0) >= 19  ||  ((st as any).daystage ?? 0) >= 4) ? ('night') : ('day')) + ' to end," you whisper in his ear, voice rough and breathy. "<i>Let\'s make love</i>."');
      if (((st as any).home ?? 0)?.['region'] !== ((st as any).region ?? 0)  &&  ((st as any).npc_residence ?? 0)?.[String((st as any).npcID ?? 0)] !== 'region') {
        ((st as any).date_ev = (st as any).date_ev ?? {})['hotel_sex'] = 1;
        scene.text('"I don\'t think we can make it home," he murmurs back. "We better get a hotel room."');
        scene.actions([
          { label: 'Go to the nearest hotel', goto: ['sex_ev_start', 'initiate_pre', 'npcID', 'hotel'] },
        ]);
      } else {
        if (((st as any).npc_wife ?? 0)?.[String((st as any).npcID ?? 0)] > 0  &&  ((st as any).npc_finance ?? 0) >= 1) {
          ((st as any).date_ev = (st as any).date_ev ?? {})['hotel_sex'] = 1;
          scene.text('"My wife is home," he murmurs back. "Better get a hotel room."');
          scene.actions([
            { label: 'Go to the nearest hotel', goto: ['sex_ev_start', 'initiate_pre', 'npcID', 'hotel'] },
          ]);
        } else {
          if (((st as any).npc_girlfriend ?? 0)?.[String((st as any).npcID ?? 0)] > 0  &&  ((st as any).npc_finance ?? 0) >= 1) {
            ((st as any).date_ev = (st as any).date_ev ?? {})['hotel_sex'] = 1;
            scene.text('"My girlfriend is home," he murmurs back. "Better get a hotel room."');
            scene.actions([
              { label: 'Go to the nearest hotel', goto: ['sex_ev_start', 'initiate_pre', 'npcID', 'hotel'] },
            ]);
          } else {
            scene.text('"Your place or mine?" he murmurs back.');
            if (((st as any).home ?? 0)?.['current'] !== 'parents_home') {
              scene.actions([
                { label: 'Your place', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['pc_home_sex'] = 1;
    scene.text('"Let\'s go back to mine."');
    scene.text('The two of you hurry back to your place.');
    scene.actions([
      { label: 'Rush home', goto: ['sex_ev_start', 'initiate_pre', 'npcID', 'pc_home'] },
    ]);
  } },
              ]);
            }
            scene.actions([
              { label: 'His place', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['npc_home_sex'] = 1;
    scene.text('"Yours."');
    scene.text('The two of you hurry back to his apartment.');
    scene.actions([
      { label: 'Rush home', goto: ['sex_ev_start', 'initiate_pre', 'npcID', 'npc_home'] },
    ]);
  } },
            ]);
          }
        }
      }
    } else {
      scene.text('"Let\'s fuck," you grin at him and in moments, you are headed toward the bed together.');
      if (((st as any).date_ev ?? 0)?.['loc'] === 'npc_home') {
        ((st as any).date_ev = (st as any).date_ev ?? {})['npc_home_sex'] = 1;
        scene.actions([
          { label: 'Bedroom', goto: ['sex_ev_start', 'initiate_pre', 'npcID', 'npc_home'] },
        ]);
      } else {
        if (((st as any).date_ev ?? 0)?.['loc'] === 'pc_home') {
          ((st as any).date_ev = (st as any).date_ev ?? {})['pc_home_sex'] = 1;
          scene.actions([
            { label: 'Bedroom', goto: ['sex_ev_start', 'initiate_pre', 'npcID', 'pc_home'] },
          ]);
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterStayAsk(s: GameState, scene: SceneBuilder): void {
  if (((s as any).date_ev ?? 0)?.['cant_stay'] === 0) {
    if ((((s as any).hour ?? 0) >= 21  ||  ((s as any).hour ?? 0) < 5)  &&  ((s as any).date_ev ?? 0)?.['loc'] !== 'pc_home') {
      scene.actions([
        { label: 'Ask to spend the night', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['spend_night'] = 1;
    qspCall(st, 'date_ev', 'bed_room_img');
    if (((st as any).date_ev ?? 0)?.['loc'] === 'npc_home') {
      ((st as any).date_ev = (st as any).date_ev ?? {})['spend_night_question'] = '"Mind if I spend the night?" you ask';
    } else {
      if (((st as any).date_ev ?? 0)?.['loc'] === 'hotel_room') {
        ((st as any).date_ev = (st as any).date_ev ?? {})['spend_night_question'] = '"I can sleep here, right?" you ask';
      }
    }
    scene.text(`${(((st as any).date_ev ?? 0)?.['spend_night_question'] ?? '')}`);
    if (((st as any).start_type ?? 0)?.['loc'] === 'sg') {
      scene.actions([
        { label: 'I\'m sick of my mom', handler: (st: GameState) => {
    qspCall(st, 'date_ev', 'bed_room_img');
    scene.text(`${(((st as any).date_ev ?? 0)?.['spend_night_question'] ?? '')}. "My mom has been such a bitch lately and I don't want to see her."`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSpendNight(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    if (((st as any).hour ?? 0) < 5) {
      if (((st as any).start_type ?? 0)?.['loc'] === 'sg') {
        scene.actions([
          { label: 'Avoid my mom', handler: (st: GameState) => {
    qspCall(st, 'date_ev', 'bed_room_img');
    scene.text(`${(((st as any).date_ev ?? 0)?.['spend_night_question'] ?? '')}. "If I go home now, my mom will chew me out for coming back too late. She'll still chew me out later, but I don't want to deal with it right now."`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSpendNight(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      }
    }
    if (((st as any).hour ?? 0) >= 22  ||  ((st as any).hour ?? 0) < 5) {
      scene.actions([
        { label: 'It\'s late', handler: (st: GameState) => {
    qspCall(st, 'date_ev', 'bed_room_img');
    scene.text(`${(((st as any).date_ev ?? 0)?.['spend_night_question'] ?? '')}. "It's late and I don't want to go."`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSpendNight(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    if (((st as any).pcs_lover ?? 0) - ((st as any).pcs_girlfriends ?? 0) > 0  &&  ((st as any).living_with_npc ?? 0) > 0) {
      scene.actions([
        { label: 'I don\'t want to see my boyfriend(annoyed)', handler: (st: GameState) => {
    qspCall(st, 'date_ev', 'bed_room_img');
    scene.text(`${(((st as any).date_ev ?? 0)?.['spend_night_question'] ?? '')}. "My boyfriend's been pissing me off lately and I don't want to go home to that."`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSpendNight(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        { label: 'I don\'t want to see my boyfriend(guilt)' }, // TODO-QSP: empty action body
      ]);
    }
    scene.actions([
      { label: 'I don\'t feel like going home', handler: (st: GameState) => {
    qspCall(st, 'date_ev', 'bed_room_img');
    scene.text(`${(((st as any).date_ev ?? 0)?.['spend_night_question'] ?? '')}. "I don't feel like going home tonight."`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSpendNight(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Ask to hang out', handler: (st: GameState) => {
    qspCall(st, 'date_ev', 'living_room_img');
    scene.text('"Do you mind if I hang out with you here for a while?" you ask.');
    if (((st as any).npc_cheating_know ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      if ((Math.floor(Math.random() * 10) + 1) > 7  &&  ((st as any).hour ?? 0) < 20  &&  ((st as any).hour ?? 0) > 16) {
        ((st as any).date_ev = (st as any).date_ev ?? {})['cant_stay'] = 1;
        if (((st as any).date_ev ?? 0)?.['loc'] === 'npc_home') {
          scene.text('"Sorry, can\'t. My girlfriend is coming over soon. In fact, you should leave soon before she catches you."');
        } else {
          if (((st as any).date_ev ?? 0)?.['loc'] === 'hotel_room') {
            scene.text('"Sorry, can\'t. Booked the room for a date with my girlfriend. In fact, you should leave now before before she arrives."');
          }
        }
        scene.text('"Ugh. <i>Bitch!</i>"');
        scene.text('"Yeah, I know. Sucks."');
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterDate(st, scene); (st as any).locArgs = __savedLocArgs; }
      } else {
        if (((st as any).date_ev ?? 0)?.['loc'] === 'npc_home') {
          scene.text('"Sure, my girlfriend isn\'t gonna be around. You can hang for a while."');
        } else {
          if (((st as any).date_ev ?? 0)?.['loc'] === 'hotel_room') {
            scene.text('"Sure. The room is booked until tomorrow anyways."');
          } else {
            scene.text('"Of course," he smiles.');
          }
        }
        scene.actions([
          { label: 'Continue', goto: ['date_after', 'exit_into_loc'] },
        ]);
      }
    } else {
      if ((Math.floor(Math.random() * 10) + 1) > 7  &&  ((st as any).hour ?? 0) < 22) {
        ((st as any).date_ev = (st as any).date_ev ?? {})['cant_stay'] = 1;
        scene.text('"Sorry, can\'t. I have something to do and I can\'t leave you here alone."');
        scene.text('"Ugh, really?"');
        scene.text('"Yeah, I know. Sucks."');
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterDate(st, scene); (st as any).locArgs = __savedLocArgs; }
      } else {
        if (((st as any).npc_girlfriend ?? 0)?.[String((st as any).npcID ?? 0)] === 1  &&  ((st as any).hour ?? 0) < 20  &&  ((st as any).hour ?? 0) > 16) {
          ((st as any).date_ev = (st as any).date_ev ?? {})['cant_stay'] = 1;
          ((st as any).npc_cheating_know = (st as any).npc_cheating_know ?? {})[String((st as any).npcID ?? 0)] = 1;
          scene.text('"Sorry, my girlfriend is coming over soon. Can\'t let her catch you here."');
          scene.text('"Ugh, really?"');
          scene.text('"Yeah, I know. Sucks."');
          { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterDate(st, scene); (st as any).locArgs = __savedLocArgs; }
        } else {
          scene.text('"Sure, I\'m not doing anything so you can hang out for a while."');
          scene.actions([
            { label: 'Continue', goto: ['date_after', 'exit_into_loc'] },
          ]);
        }
      }
    }
  } },
    ]);
  }
  scene.build();
}

function enterSpendNight(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_cheating_know ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    if ((Math.floor(Math.random() * 10) + 1) > 7  &&  ((s as any).hour ?? 0) < 20  &&  ((s as any).hour ?? 0) > 16) {
      ((s as any).date_ev = (s as any).date_ev ?? {})['cant_stay'] = 1;
      if (((s as any).date_ev ?? 0)?.['loc'] === 'npc_home') {
        scene.text('"Sorry, can\'t. My girlfriend wanted to come over tonight. In fact, you should leave soon before she catches you."');
      } else {
        if (((s as any).date_ev ?? 0)?.['loc'] === 'hotel_room') {
          scene.text('"Sorry, can\'t. Booked the room for a date with my girlfriend. In fact, you should leave now before before she arrives."');
        }
      }
      scene.text('"Ugh. <i>Bitch!</i>"');
      scene.text('"Yeah, I know. Sucks."');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAfterDate(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).date_ev ?? 0)?.['loc'] === 'npc_home') {
        scene.text('"Sure, my girlfriend isn\'t gonna be around for a while. You can crash here."');
      } else {
        if (((s as any).date_ev ?? 0)?.['loc'] === 'hotel_room') {
          scene.text('"Sure. The room is booked until tomorrow anyways."');
        } else {
          scene.text('"Of course," he smiles.');
        }
      }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSleepOver(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  } else {
    if ((Math.floor(Math.random() * 10) + 1) > 7  &&  ((s as any).hour ?? 0) < 22) {
      ((s as any).date_ev = (s as any).date_ev ?? {})['cant_stay'] = 1;
      scene.text('"Sorry, can\'t. I have something to do in the morning."');
      scene.text('"Ugh, really?"');
      scene.text('"Yeah, I know. Sucks."');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAfterDate(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).npc_girlfriend ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).hour ?? 0) < 20  &&  ((s as any).hour ?? 0) > 16) {
        ((s as any).date_ev = (s as any).date_ev ?? {})['cant_stay'] = 1;
        ((s as any).npc_cheating_know = (s as any).npc_cheating_know ?? {})[String((s as any).npcID ?? 0)] = 1;
        scene.text('"Sorry, my girlfriend is coming over soon. Can\'t let her catch you here."');
        scene.text('"Ugh, really?"');
        scene.text('"Yeah, I know. Sucks."');
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAfterDate(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        scene.text('"Sure, I\'m not doing anything tomorrow. You can crash here."');
        scene.text(`"Thanks," you yawn, snuggling into ${((s as any).npcdesc ?? '')}. "Appreciate it."`);
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSleepOver(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    }
  }
  scene.build();
}

function enterCoffeeAfterAsk(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAfterOutsideImage(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('"Could I come over for some coffee?" you ask.');
  scene.text('"Sure."');
  scene.text('The two of you head to his place for coffee.');
  scene.actions([
    { label: 'Continue', goto: ['date_after', 'coffee_after_start'] },
  ]);
  scene.build();
}

function enterHangoutAsk(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'You\'re tired', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterOutsideImage(st, scene); (st as any).locArgs = __savedLocArgs; }
    if ((Math.floor(Math.random() * 3) + 1) === 1  &&  ((st as any).npc_humor ?? 0)?.[String((st as any).npcID ?? 0)] === 'perverted') {
      scene.text('"Maybe we could just spend some time at your place? I\'m bushed."');
      if (((st as any).npc_know_pubes ?? 0)?.[String((st as any).npcID ?? 0)] !== '') {
        if (((st as any).pube_style ?? 0)?.['word'] === 'untrimmed') {
          scene.text(`"Bushed? More like forested, eh?" ${((st as any).npcdesc ?? '')} smirks, glancing ` + (((!((st as any).PCloDress ?? 0))) ? ('down at the crotch of your pants ') : ('down at the skirt flowing between your legs ')) + 'to make his meaning clear.');
        } else {
          if (((st as any).pube_style ?? 0)?.['word'] === 'bush') {
            scene.text(`"Yeah you are," ${((st as any).npcdesc ?? '')} smirks, glancing ` + (((!((st as any).PCloDress ?? 0))) ? ('down at the crotch of your pants ') : ('down at the skirt flowing between your legs ')) + 'to make his meaning clear.');
          } else {
            if (((st as any).pube_style ?? 0)?.['word'] === 'trimmed') {
              scene.text(`"More like a lawn than a bush, isn't it?" ${((st as any).npcdesc ?? '')} says with a smirk and a raised eyebrow, looking ` + (((!((st as any).PCloDress ?? 0))) ? ('down at the crotch of your pants ') : ('down at the skirt flowing between your legs ')) + 'to make his meaning clear.');
            } else {
              if (((st as any).pube_style ?? 0)?.['word'] === 'shaved') {
                scene.text(`"Bushed? Isn't that the opposite of what you are?" ${((st as any).npcdesc ?? '')} smirks, glancing ` + (((!((st as any).PCloDress ?? 0))) ? ('down at the crotch of your pants ') : ('down at the skirt flowing between your legs ')) + 'to make his meaning clear.');
              } else {
                scene.text('Error. $pube_style[\'word\'] is not set.');
              }
            }
          }
        }
        scene.actions([
          { label: 'Blush', handler: (st: GameState) => {
    scene.text('His crude joke has heat rushing to your face in an instant and you can\'t even look him in the eye as his smirk turns to a full laugh.');
    scene.text('"Yeah, sure. We can go back to my place and hang out for a little bit."');
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Go to ' + String(((st as any).npcdesc ?? '') ?? '') + '\'s', goto: ['date_hangout', 'start', 'together'] },
    ]);
  } },
          { label: 'Laugh', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'like');
    scene.text('His joke, crude as it may be, has you sputtering out laughter while he grins back at you proudly.');
    scene.text('"Yeah, sure. We can go back to my place and hang out for a little bit."');
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Go to ' + String(((st as any).npcdesc ?? '') ?? '') + '\'s', goto: ['date_hangout', 'start', 'together'] },
    ]);
  } },
          { label: '"Idiot"', handler: (st: GameState) => {
    scene.text(`While ${((st as any).npcdesc ?? '')} chuckles proudly at his own joke, you are rolling your eyes so hard it hurts.`);
    scene.text('"You\'re such an idiot."');
    scene.text('"An idiot with a sense of humor," he grins. "But anyways, we can go back to my place and hang out for a little bit."');
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Go to ' + String(((st as any).npcdesc ?? '') ?? '') + '\'s', goto: ['date_hangout', 'start', 'together'] },
    ]);
  } },
        ]);
      } else {
        scene.text(`"Bushed huh? Didn't know that's what you're rocking down there," ${((st as any).npcdesc ?? '')} says with a smirk and a raised eyebrow, looking ` + (((!((st as any).PCloDress ?? 0))) ? ('down at the crotch of your pants ') : ('down at the skirt flowing between your legs ')) + 'to make his meaning clear.');
        scene.text('"Yeah, sure. We can go back to my place and hang out for a little bit."');
        scene.actions([
          { label: 'Smirk', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'like');
    scene.text('"Maybe," you smirk. "Maybe not. You\'ll have to find out for yourself."');
    scene.text('"Well in that case, we can <i>definitely</i> go back to my place," he grins.');
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Go to ' + String(((st as any).npcdesc ?? '') ?? '') + '\'s', goto: ['date_hangout', 'start', 'together'] },
    ]);
  } },
          { label: '"Idiot"', handler: (st: GameState) => {
    scene.text(`While ${((st as any).npcdesc ?? '')} chuckles proudly at his own joke, you are rolling your eyes so hard it hurts.`);
    scene.text('"You\'re such an idiot."');
    scene.text('"An idiot with a sense of humor," he grins. "But anyways, we can go back to my place and hang out for a little bit."');
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Go to ' + String(((st as any).npcdesc ?? '') ?? '') + '\'s', goto: ['date_hangout', 'start', 'together'] },
    ]);
  } },
          { label: '', labelFn: (s: GameState) => 'Go to ' + String(((st as any).npcdesc ?? '') ?? '') + '\'s', goto: ['date_hangout', 'start', 'together'] },
        ]);
      }
    } else {
      scene.text('"Yeah, sure. We can go back to my place and hang out for a little bit."');
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Go to ' + String(((st as any).npcdesc ?? '') ?? '') + '\'s', goto: ['date_hangout', 'start', 'together'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterCoffeeInit(s: GameState, scene: SceneBuilder): void {
  ((s as any).date_ev = (s as any).date_ev ?? {})['loc'] = 'date_after';
  ((s as any).date_ev = (s as any).date_ev ?? {})['talk_img'] = 'coffee_talk_img';
  ((s as any).date_ev = (s as any).date_ev ?? {})['loc_img'] = 'kitchen_img';
  scene.build();
}

function enterCoffeeTalkImg(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/shared/romance/activities/apartment/coffee${(Math.floor(Math.random() * 2) + 1)}.jpg`);
  scene.build();
}

function enterKitchenImg(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'date_ev', 'kitchen_img');
  scene.build();
}

function enterCoffeeAfterStart(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCoffeeInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).date_ev = (s as any).date_ev ?? {})['locat'] = 'npc_home';
  ((s as any).date_ev = (s as any).date_ev ?? {})['at_home'] = 1;
  if ((Math.floor(Math.random() * 11) + 0) < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]) {
    qspCall(s, 'date_ev', 'hall_img');
    scene.text(`${((s as any).npcdesc ?? '')} lets you into his apartment but instead of moving into the kitchen, you quickly find his hands plucking at your clothing.`);
    scene.actions([
      { label: 'So much for coffee', handler: (st: GameState) => {
    scene.text(`<i>Well so much for coffee,</i> you think to yourself as ${((st as any).npcdesc ?? '')} pushes you towards the bedroom.`);
    qspGoto(st, 'sex_ev_start', 'date_npc_home_start');
  } },
      { label: 'Coffee was just an excuse', handler: (st: GameState) => {
    scene.text(`<i>Good,</i>you think, grinning as ${((st as any).npcdesc ?? '')} pushes you towards the bedroom. <i>I didn't really want coffee anyways...</i>`);
    qspGoto(st, 'sex_ev_start', 'date_npc_home_start');
  } },
    ]);
  } else {
    qspCall(s, 'date_ev', 'kitchen_img');
    scene.text(`${((s as any).npcdesc ?? '')} lets you into his apartment and you make yourself comfortable while he prepares some coffee.`);
    scene.actions([
      { label: 'Continue', goto: ['date_after', 'coffee_after1'] },
    ]);
  }
  scene.build();
}

function enterCoffeeAfter1(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/shared/romance/activities/apartment/coffee${(Math.floor(Math.random() * 2) + 1)}.jpg`);
  scene.text('You chat about things, drinking coffee together.');
  if (((s as any).npc_sexdrive ?? 0) >= (Math.floor(Math.random() * 10) + 1)  ||  (((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'sex'  &&  ((s as any).npc_pushy ?? 0)?.[String((s as any).npcID ?? 0)] > 0)) {
    qspGoto(s, 'date_after', 'boy_pushing_sex');
  }
  if (((s as any).npc_living_together ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    scene.actions([
      { label: 'End the date', handler: (st: GameState) => {
    qspCall(st, 'date_ev', '');
  }, goto: ['lover_home', 'kitchen'] },
    ]);
  } else {
    if (((s as any).hour ?? 0) >= 20  ||  ((s as any).hour ?? 0) <= 3) {
      scene.actions([
        { label: 'Say goodnight', goto: ['date_after', 'apartment_date_end'] },
      ]);
    } else {
      scene.actions([
        { label: 'Say goodbye', goto: ['date_after', 'apartment_date_end'] },
      ]);
    }
  }
  scene.actions([
    { label: 'Start dropping hints (sex)', goto: ['date_after', 'dropping_hints'] },
    { label: 'Break up', handler: (st: GameState) => {
    alert('WORK IN PROGRESS');
  } },
  ]);
  scene.build();
}

function enterDroppingHints(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/romance/activities/apartment/coffee2.jpg');
  scene.text('"I had a really good time with you," you say practically mewling.');
  scene.text('"Yeah, I did too."');
  scene.text('You start giving him smoldering looks and moving your legs sensually under the table.');
  scene.text('"It\'s been so good... I just don\'t know if I want to go home right now..."');
  if (((s as any).npc_prcptn ?? 0)?.[String((s as any).npcID ?? 0)] >= (Math.floor(Math.random() * 50) + 1)) {
    scene.text('"Then why don\'t we make this last a little longer," he smiles at you, letting you know he\'s clearly got the hint.');
    scene.actions([
      { label: 'Move to the bedroom', goto: ['sex_ev_start', 'date_npc_home_start'] },
    ]);
  } else {
    scene.text('"I know, me too," he replies sympathetically. "But all good things must come to an end."');
    scene.text('<i>Does he not want to have sex or is he just thick??</i>');
    if (((s as any).hour ?? 0) >= 20  ||  ((s as any).hour ?? 0) <= 3) {
      scene.actions([
        { label: 'Say goodnight', goto: ['date_after', 'apartment_date_end'] },
      ]);
    } else {
      scene.actions([
        { label: 'Say goodbye', goto: ['date_after', 'apartment_date_end'] },
      ]);
    }
    scene.actions([
      { label: 'Get straightforward', handler: (st: GameState) => {
    qspCall(st, 'date_ev', 'kitchen_img');
    scene.text(`"Hey, ${((st as any).npcdesc ?? '')}. Do you want to have sex?"`);
    scene.text('"Huh?" He seems bewildered that you\'d ask.');
    scene.text('"Sex. Do you want to have sex with me right now?"');
    scene.text('"Oh! Uhm, yeah!"');
    scene.text('At least that got through to him.');
    scene.actions([
      { label: 'Move to the bedroom', goto: ['sex_ev_start', 'date_npc_home_start'] },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterBoyPushingSex(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'foreplay', 5);
  qspCall(s, 'stat', '');
  if (((s as any).npc_sensual_lover ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    scene.text(`It starts slow, with ${((s as any).npcdesc ?? '')}'s hand on yours. Then he's next to you. And then he's necking you. He's plucking at your clothing.`);
  } else {
    scene.text(`You're not sure what happens and when, but soon you find ${((s as any).npcdesc ?? '')}'s seat right next to yours. And then he's pressing up against you. And he's pawing at your breasts.`);
  }
  scene.actions([
    { label: 'Wait wait wait!', handler: (st: GameState) => {
    scene.img('images/shared/sex/grab/kotovpr.mp4');
    scene.text('"Wait, wait!" you stammer, feeling a rising sense of panic.');
    scene.text('"Come on, babe," he murmurs dismissively. "This\'ll feel really good..."');
    qspCall(st, 'willpower', 'resist', 'sex');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Disentangle yourself', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Disentangle yourself', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    scene.text('His hands are all over you but you just manage to extricate yourself while repeating refusals.');
    scene.text('"I really have to go!" you squeak.');
    if (((st as any).npc_rel_goal ?? 0)?.[String((st as any).npcID ?? 0)] === 'sex'  &&  ((st as any).npc_arrogant ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      scene.text(`${((st as any).npcdesc ?? '')} can't suppress a scowl as you move towards the door.`);
    } else {
      scene.text(`${((st as any).npcdesc ?? '')} twists his lips wistfully` + (((Math.floor(Math.random() * 10) + 1) < ((st as any).npc_sexdrive ?? 0)?.[String((st as any).npcID ?? 0)]  ||  ((st as any).npc_womanizer ?? 0)?.[String((st as any).npcID ?? 0)] > 0) ? (' giving your body a glance up and down your body that never goes above your neckline.') : ('in a way that seems to say, <i>can\'t blame a guy for trying</i>.')));
    }
    qspGoto(st, 'date_after', 'leaving_dialogue_choices');
  } },
      ]);
    }
    scene.actions([
      { label: 'Weakly protest', handler: (st: GameState) => {
    scene.text('"Wait-! Hang on, I-" You try to make excuses but your voice is weak, as weak as your motions as you find yourself pushed towards the ' + ((((st as any).npc_apt_type ?? 0)?.[String((st as any).npcID ?? 0)] < 3) ? ('bed.') : ('bedroom.')));
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_stats', 'starting_mood', 'reluctant');
    if (((st as any).npcRelat ?? 0) !== '') {
      qspGoto(st, 'sex_ev_start', 'npc_home_start');
    } else {
      qspGoto(st, 'sex_ev_start', 'npc_home_start', 'hookup');
    }
  } },
    ]);
  } },
      { label: 'Oh well', handler: (st: GameState) => {
    scene.text('"Wait-! Hang on, I-! ... Oh well," You erupt into giggles as your protests die out and let yourself get pushed towards the ' + ((((st as any).npc_apt_type ?? 0)?.[String((st as any).npcID ?? 0)] < 3) ? ('bed.') : ('bedroom.')));
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((st as any).npcRelat ?? 0) !== '') {
      qspGoto(st, 'sex_ev_start', 'npc_home_start');
    } else {
      qspGoto(st, 'sex_ev_start', 'npc_home_start', 'hookup');
    }
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Let yourself be seduced', handler: (st: GameState) => {
    scene.img('images/shared/sex/grab/kotovpr.mp4');
    scene.text(`"<i>Mmmm</i>," you moan softly under his touch. "${((st as any).npcdesc ?? '')}... Oh-!"`);
    scene.text(`You erupt into giggles as ${((st as any).npcdesc ?? '')} squeezes your ass and starts pushing you towards the ` + ((((st as any).npc_apt_type ?? 0)?.[String((st as any).npcID ?? 0)] < 3) ? ('bed.') : ('bedroom.')));
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((st as any).npcRelat ?? 0) !== '') {
      qspGoto(st, 'sex_ev_start', 'npc_home_start');
    } else {
      qspGoto(st, 'sex_ev_start', 'npc_home_start', 'hookup');
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterApartmentDateEnd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'date_ev', 'kitchen_img');
  if (((s as any).hour ?? 0) >= 20  ||  ((s as any).hour ?? 0) <= 3) {
    scene.text('"Well, it\'s late..." you say, looking at the clock ruefully. "I should probably get going..."');
  } else {
    scene.text('"Well, I should probably get going..." you say, looking at the clock ruefully.');
  }
  if ((Math.floor(Math.random() * 11) + 0) < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]) {
    if (((s as any).npc_dirty_lover ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.text(`"Do you have to? Maybe you could stay a while and..." ${((s as any).npcdesc ?? '')} trails off as he runs his hand down your flank. If there was any doubt as to what he wants, it becomes crystal clear when he firmly grabs your ass.`);
    } else {
      if (((s as any).npc_sensual_lover ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        scene.text(`"Do you have to? Maybe you could stay a while and..." ${((s as any).npcdesc ?? '')} trails off as he rests his hand atop yours, gently tracing his fingers across your skin.`);
      } else {
        scene.text(`"Do you have to? Maybe you could stay a while and..." ${((s as any).npcdesc ?? '')} trails off as he runs his hand down your flank.`);
      }
    }
    qspGoto(s, 'date_after', 'sex_inv_offer');
  } else {
    if ((Math.floor(Math.random() * 100) + 0) < ((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)]  &&  ((s as any).hour ?? 0) >= 20  ||  ((s as any).hour ?? 0) <= 3) {
      scene.text(`"You don't have to go," ${((s as any).npcdesc ?? '')} says, standing with you. "Why don't you... spend the night?"`);
      qspGoto(s, 'date_after', 'spend_night_offer');
    } else {
      scene.text('"Yeah," he replies.');
      scene.actions([
        { label: 'Say goodbye', goto: ['date_after', 'goodbye_route'] },
      ]);
    }
  }
  scene.build();
}

function enterSpendNightOffer(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'No thanks', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['cant_stay'] = 1;
    qspCall(st, 'date_ev', 'hall_img');
    scene.text('"Thanks but no thanks," you say, wistfully heading towards the door. "I really need to get home tonight."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcHomeLeave(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Well...', handler: (st: GameState) => {
    scene.text('"Well..." you pause for a moment, considering. You <i>could</i> stay over tonight. Maybe you don\'t <i>have</i> to go...');
    scene.actions([
      { label: 'No, I shouldn\'t', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['cant_stay'] = 1;
    qspCall(st, 'date_ev', 'hall_img');
    scene.text('"... no," you sigh. "I really shouldn\'t. I want to, but I can\'t."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcHomeLeave(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'I guess I could...', handler: (st: GameState) => {
    qspCall(st, 'date_ev', 'kitchen_img');
    scene.text('"... I guess I could..." you relent.');
    scene.actions([
      { label: 'Undress and get into bed with him', handler: (st: GameState) => {
    if (((st as any).clothingworntype ?? 0) !== 'nude') {
      qspCall(st, 'clothing', 'strip');
    }
    if (((st as any).braworntype ?? 0) !== 'none') {
      qspCall(st, 'bras', 'remove');
    }
    if (((st as any).pantyworntype ?? 0) !== 'none') {
      qspCall(st, 'panties', 'remove');
    }
    scene.img('images/shared/sex/after/cuddle1.jpg');
    scene.text(`You slip back into bed and cuddle up with ${((st as any).npcdesc ?? '')}, resting your naked body on top of his. He wraps his arms around you in return and the two of your relax, listening to the sound of each other's breathing.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSleepOver(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    ]);
  } },
    { label: 'I really need to go', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['cant_stay'] = 1;
    qspCall(st, 'date_ev', 'dress_loop');
    scene.text(`"I wish I could but I really have to go," you say, ${(((st as any).date_ev ?? 0)?.['dress_describe'] ?? '')}. "Just not an option for me tonight."`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcHomeLeave(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterSexInvOffer(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Refuse firmly', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'dislike');
    qspCall(st, 'date_ev', 'kitchen_img');
    if (((st as any).npc_sensual_lover ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      scene.text('"No," you say, a hard edge in your voice as you yank your hand back from his with forceful intent.');
    } else {
      scene.text('"No," you say, a hard edge in your voice as you grab his wrists and wrench them away from your hips, firmly pushing them back into his own personal space.');
    }
    if (((st as any).npc_rel_goal ?? 0)?.[String((st as any).npcID ?? 0)] === 'sex'  &&  ((st as any).npc_arrogant ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      scene.text(`${((st as any).npcdesc ?? '')} can't suppress a scowl as you move towards the door.`);
    } else {
      scene.text(`${((st as any).npcdesc ?? '')} twists his lips wistfully` + (((Math.floor(Math.random() * 10) + 1) < ((st as any).npc_sexdrive ?? 0)?.[String((st as any).npcID ?? 0)]  ||  ((st as any).npc_womanizer ?? 0)?.[String((st as any).npcID ?? 0)] > 0) ? (' giving your body a glance up and down your body that never goes above your neckline.') : ('in a way that seems to say, <i>can\'t blame a guy for trying</i>.')));
    }
    qspGoto(st, 'date_after', 'leaving_dialogue_choices');
  } },
    { label: 'Refuse reluctantly', handler: (st: GameState) => {
    qspCall(st, 'date_ev', 'kitchen_img');
    if (((st as any).npc_sensual_lover ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      scene.text('"No," you say softly, gently pulling him away from your hips, lingering a moment with his hands in yours. "I can\'t."');
    } else {
      scene.text('"No," you say softly, twisting your fingers to interlace with his and hold on to his precious warmth for a few moments. "I can\'t."');
    }
    if (((st as any).npc_rel_goal ?? 0)?.[String((st as any).npcID ?? 0)] === 'sex'  &&  (((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  ((st as any).npc_assertive ?? 0) > 0  ||  ((st as any).npc_misogynist ?? 0) > 0)) {
      scene.text('"Come on," he says insistently, pulling you back towards him. "I just want to have a good time with you."');
      qspCall(st, 'willpower', 'resist', 'sex');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    scene.text('His hands are all over you but you just manage to extricate yourself while repeating refusals.');
    if (((st as any).npc_rel_goal ?? 0)?.[String((st as any).npcID ?? 0)] === 'sex'  &&  ((st as any).npc_arrogant ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      scene.text(`${((st as any).npcdesc ?? '')} can't suppress a scowl as you move towards the door.`);
    } else {
      scene.text(`${((st as any).npcdesc ?? '')} twists his lips wistfully` + (((Math.floor(Math.random() * 10) + 1) < ((st as any).npc_sexdrive ?? 0)?.[String((st as any).npcID ?? 0)]  ||  ((st as any).npc_womanizer ?? 0)?.[String((st as any).npcID ?? 0)] > 0) ? (' giving your body a glance up and down your body that never goes above your neckline.') : ('in a way that seems to say, <i>can\'t blame a guy for trying</i>.')));
    }
    qspGoto(st, 'date_after', 'leaving_dialogue_choices');
  } },
        ]);
      }
      scene.actions([
        { label: 'Change your mind (have sex)', handler: (st: GameState) => {
    scene.text('His insistence wins you over and you can\'t help it as a smile steals across your face.');
    scene.text('"Okay," you murmur and let him lead you away towards the bed.');
    qspGoto(st, 'sex_ev_start', 'date_npc_home_start');
  } },
        { label: 'Give in (reluctantly)', handler: (st: GameState) => {
    scene.text('You aren\'t sure what to do. You don\'t really want to do what he wants but you don\'t see a way out of this situation without making things worse. You keep trying to deny him, but every denial seems to make no progress and before you know it, you\'re at his bed.');
    qspGoto(st, 'sex_ev_start', 'date_npc_home_start');
  } },
      ]);
    } else {
      if (((st as any).npc_rel_goal ?? 0)?.[String((st as any).npcID ?? 0)] === 'sex'  &&  ((st as any).npc_arrogant ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
        scene.text(`${((st as any).npcdesc ?? '')} can't suppress a scowl as you move towards the door.`);
      } else {
        scene.text(`${((st as any).npcdesc ?? '')} twists his lips wistfully` + (((Math.floor(Math.random() * 10) + 1) < ((st as any).npc_sexdrive ?? 0)?.[String((st as any).npcID ?? 0)]  ||  ((st as any).npc_womanizer ?? 0)?.[String((st as any).npcID ?? 0)] > 0) ? (' giving your body a glance up and down your body that never goes above your neckline.') : ('in a way that seems to say, <i>can\'t blame a guy for trying</i>.')));
      }
      qspGoto(st, 'date_after', 'leaving_dialogue_choices');
    }
  } },
    { label: 'Accept happily', handler: (st: GameState) => {
    if (((st as any).npc_dirty_lover ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      scene.text('Your eyes meet his as your lips curl into a smirk and you step closer. His hands squeeze your ass cheeks, momentarily spreading them through your ' + ((((st as any).PCloSkirtShortness ?? 0) > 0) ? ('skirt. ') : ('pants. ')) + 'Both of you stumble towards the bedroom.');
    } else {
      if (((st as any).npc_sensual_lover ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
        scene.text(`Your eyes meet his as your fingers twist together, intertwining with one another, lingering at the door like that for moments. Minutes? Impossible to say. Your bag drops to the floor. Neither of you say a word as ${((st as any).npcdesc ?? '')} leads you toward the bedroom.`);
      } else {
        scene.text('Your eyes meet his as your lips curl into a smile and you step closer. His hands tighten on your hips and you wrap your arms around his back. Nothing needs to be spoken as you go towards the bedroom together.');
      }
    }
    qspGoto(st, 'sex_ev_start', 'date_npc_home_start');
  } },
    { label: 'Accept reluctantly', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['reluctant_sex'] = ((st as any).date_ev['reluctant_sex'] ?? 0) + (1);
    qspCall(st, 'date_ev', 'kitchen_img');
    if (((st as any).npc_dirty_lover ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      scene.text('"Erm... Uhm..." you glance towards the door just before he gropes your ass with full force, sending a spike of shock through your entire body. You want to say no but you can\'t. He\'s already pulling you towards the bedroom, grinning at you. The best you can do is return a flimsy smile of dubious consent...');
    } else {
      if (((st as any).npc_sensual_lover ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
        scene.text(`"Erm... Uhm..." you glance towards the door as ${((st as any).npcdesc ?? '')} threads his fingers into yours. You really want to leave but he's already pulling you close. It's too much pressure. You can't say no. He grins at you and you return a flimsy smile of dubious consent as he pulls you towards the bedroom...`);
      } else {
        scene.text('"Erm... Uhm..." you glance towards the door just before he pulls you closer. Your gaze moves back to meet his. His hardon is pressing against your pelvis. There\'s a lump in your throat. It\'s too much pressure. You can\'t say no. He grins at you and you return a flimsy smile of dubious consent as he pulls you towards the bedroom...');
      }
    }
    qspGoto(st, 'sex_ev_start', 'date_npc_home_start');
  } },
  ]);
  scene.build();
}

function enterGoodbyeRoute(s: GameState, scene: SceneBuilder): void {
  if (((s as any).date_ev ?? 0)?.['loc'] === 'npc_home'  ||  ((s as any).date_ev ?? 0)?.['loc'] === 'hotel') {
    qspGoto(s, 'date_after', 'npc_home_leave');
  } else {
    if (((s as any).date_ev ?? 0)?.['loc'] === 'pc_home') {
      qspGoto(s, 'date_after', 'pc_home_leave');
    } else {
      qspGoto(s, 'date_after', 'street_goodbye');
    }
  }
  scene.build();
}

function enterStreetGoodbye(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAfterOutsideImage(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('It\'s probably best to end the date here."');
  qspGoto(s, 'date_after', 'leaving_dialogue_choices', 'outside');
  scene.build();
}

function enterSleepOver(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: '', labelFn: (s: GameState) => 'Get into bed with ' + String(((s as any).npcdesc ?? '') ?? ''), handler: (st: GameState) => {
    qspCall(st, 'date_ev', 'bed_room_img');
    scene.text(`You give ${((st as any).npcdesc ?? '')} a grateful smile and undress, climbing into bed with him.`);
    scene.text('It isn\'t long until you both fall asleep, listening to each other\'s breathing.');
    scene.actions([
      { label: '. . .', goto: ['date_after', 'sleep_function'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSleepFunction(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'end');
  if ((Math.floor(Math.random() * 11) + 0) < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)] + ((s as any).npc_sleep_sex_okay ?? 0)?.[String((s as any).npcID ?? 0)] + ((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)]  &&  (((s as any).stat ?? 0)?.['think_virgin'] !== 1  ||  ((s as any).sex_ev ?? 0)?.['fuck_count'] > 0)  &&  ((s as any).sex_ev ?? 0)?.['sleep_fuck'] === 0  &&  ((s as any).sex_ev ?? 0)?.['lover_left'] !== 1) {
    ((s as any).date_ev = (s as any).date_ev ?? {})['sleepover'] = 1;
    if ((Math.floor(Math.random() * 2) + 0) === 1) {
      (s as any).minut = ((s as any).minut ?? 0) + (60 * (((s as any).date_ev ?? {})?.['sleep_time'] ?? 0));
      if (((s as any).trait_vars ?? 0)?.['sleep_duration'] === 1) {
        (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) + (17 * (((s as any).date_ev ?? {})?.['sleep_time'] ?? 0));
      } else {
        if (((s as any).trait_vars ?? 0)?.['sleep_duration'] === -1) {
          (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) + ((944 * (((s as any).date_ev ?? {})?.['sleep_time'] ?? 0)) / 100);
        } else {
          (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) + (12 * (((s as any).date_ev ?? {})?.['sleep_time'] ?? 0));
        }
      }
      (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (5 * (((s as any).date_ev ?? {})?.['sleep_time'] ?? 0));
      qspCall(s, 'stat', '');
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['sleep_fuck'] = 1;
    } else {
      if (((s as any).alko ?? 0) > 6) {
        qspCall(s, 'sleep_simple', 'simple');
        qspCall(s, 'pain', '3', 'head', 'ache');
      } else {
        qspCall(s, 'sleep_simple', 'simple');
      }
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['wake_fuck'] = 1;
    }
  } else {
    ((s as any).date_ev = (s as any).date_ev ?? {})['sleepover'] = 1;
    if (((s as any).alko ?? 0) > 6) {
      ((s as any).date_ev = (s as any).date_ev ?? {})['hangover'] = 1;
      qspCall(s, 'sleep_simple', 'simple');
      qspCall(s, 'pain', '3', 'head', 'ache');
    } else {
      qspCall(s, 'sleep_simple', 'simple');
    }
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  qspFunc(s, 'homes_properties', 'has_access', 'parents_home')) {
      ((s as any).sveta_punishment = (s as any).sveta_punishment ?? {})['no_come_home'] = 1;
    }
    qspGoto(s, 'sex_ev_wakeup', 'start');
  }
  if (((s as any).npc_latesleeper ?? 0)?.[String((s as any).npcID ?? 0)] === 0  &&  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  (Math.floor(Math.random() * 4) + 1) < 4  &&  ((s as any).date_ev ?? 0)?.['loc'] !== 'hotel_room') {
    ((s as any).date_ev = (s as any).date_ev ?? {})['boy_make_breakfast'] = 1;
    if (((s as any).date_ev ?? 0)?.['boy_shower'] === 1) {
      ((s as any).date_ev = (s as any).date_ev ?? {})['boy_shower'] = 0;
    }
  } else {
    if (((s as any).npc_earlyriser ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).sex_ev ?? 0)?.['wake_fuck'] !== 1) {
      if ((Math.floor(Math.random() * 2) + 1) === 1) {
        ((s as any).date_ev = (s as any).date_ev ?? {})['boy_in_shower'] = 1;
      } else {
        ((s as any).date_ev = (s as any).date_ev ?? {})['boy_shower'] = 1;
        ((s as any).date_ev = (s as any).date_ev ?? {})['npc_morning_shower'] = 1;
      }
    }
  }
  if (((s as any).sex_ev ?? 0)?.['wake_fuck'] + ((s as any).sex_ev ?? 0)?.['sleep_fuck'] > 0) {
    qspCall(s, 'sex_ev_start', 'begin');
    qspCall(s, 'sex_ev_start', 'lover_home_img_init');
  }
  if (((s as any).sex_ev ?? 0)?.['wake_fuck'] === 1) {
    qspGoto(s, 'sex_ev_sex', 'wakeup_sex');
  } else {
    if (((s as any).sex_ev ?? 0)?.['sleep_fuck'] === 1) {
      qspGoto(s, 'sex_ev_sex', 'sleep_sex');
    } else {
      if (((s as any).sex_ev ?? 0)?.['sleep_fuck'] === 0) {
        qspGoto(s, 'date_ev', 'wakeup');
      } else {
        qspGoto(s, 'date_ev', 'wakeup');
      }
    }
  }
  scene.build();
}

function enterNpcHomeLeave(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'date_ev', 'hall_img');
  scene.text(`You're standing at the door with ${((s as any).npcdesc ?? '')}.`);
  qspGoto(s, 'date_after', 'leaving_dialogue_choices', 'inside');
  scene.build();
}

function enterLeavingDialogueChoices(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).date_ev ?? 0)?.['mad'] === 1  ||  ((s as any).date_ev ?? 0)?.['angry_after'])  &&  String((s as any).locArgs?.[1] ?? '') === 'inside') {
    scene.actions([
      { label: 'Leave angrily', handler: (st: GameState) => {
    scene.img('images/shared/romance/misc/depart1.mp4');
    scene.text('You don\'t reply, just grab your things in irritation and stalk out the door.');
    scene.actions([
      { label: 'Leave', goto: ['date_after', 'exit'] },
    ]);
  } },
      { label: 'Hide your annoyance', handler: (st: GameState) => {
    scene.text('"Later," you say flatly and grab your things to stalk out the door.');
    scene.actions([
      { label: 'Leave', goto: ['date_after', 'exit'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== '') {
      if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'sugar_daddy') {
        scene.actions([
          { label: 'Text me any time', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['leave_dialogue'] = 'Text me any time you want some company';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLeavingAction(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      } else {
        scene.actions([
          { label: '"Text me"', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['leave_dialogue'] = 'Text me';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLeavingAction(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      }
      if (((s as any).npc_booty_call_date ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).daystart ?? 0)  &&  ((s as any).date_ev ?? 0)?.['sleepover'] === 1) {
        scene.actions([
          { label: '"See you soon"', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['leave_dialogue'] = 'See you soon';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLeavingAction(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      } else {
        if (((s as any).npc_booty_call_date ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).daystart ?? 0) + 1) {
          scene.actions([
            { label: '"See you tomorrow"', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['leave_dialogue'] = 'See you tomorrow';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLeavingAction(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
          ]);
        } else {
          scene.actions([
            { label: '"Till next time"', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['leave_dialogue'] = 'Till next time';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLeavingAction(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
          ]);
        }
      }
      scene.actions([
        { label: '"Let\'s do this again"', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['leave_dialogue'] = 'Let\'s do this again sometime';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLeavingAction(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'sugar_daddy') {
      scene.actions([
        { label: 'Don\'t forget the money', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['leave_dialogue'] = 'Just make sure you have the money ready for next time';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLeavingAction(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    scene.actions([
      { label: '"Bye"', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['leave_dialogue'] = 'Bye';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLeavingAction(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: '"See ya"', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['leave_dialogue'] = 'See ya';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLeavingAction(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: '"I had a really good time"', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['leave_dialogue'] = 'I had a really good time';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLeavingAction(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  scene.build();
}

function enterLeavingAction(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Smile', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['leave_action'] = ', flashing him a quick smile';
    qspGoto(st, 'date_after', 'leaving_end');
  } },
    { label: 'Wave goodbye', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['leave_action'] = ', waggling your fingers at him';
    qspGoto(st, 'date_after', 'leaving_end');
  } },
    { label: 'Wink', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['leave_action'] = ' with a wink';
    qspGoto(st, 'date_after', 'leaving_end');
  } },
    { label: 'Blow him a kiss', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['leave_action'] = ', blowing him a kiss';
    qspGoto(st, 'date_after', 'leaving_end');
  } },
    { label: 'Kiss his cheek', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['leave_action'] = ', stopping to give him a quick peck on the cheek';
    qspGoto(st, 'date_after', 'leaving_end');
  } },
    { label: 'Kiss him', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['leave_action'] = ', stopping to give him a quick peck on the lips';
    qspGoto(st, 'date_after', 'leaving_end');
  } },
    { label: 'Kiss him deeply', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['leave_action'] = ', stopping to give him a long drawn out kiss. It\'s several seconds before you pull away, a string of saliva following your tongue as it exits his mouth.';
    qspGoto(st, 'date_after', 'leaving_end');
  } },
    { label: 'Nonchalant', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['leave_action'] = ' nonchalantly and head out the door without a second glance';
    qspGoto(st, 'date_after', 'leaving_end');
  } },
  ]);
  scene.build();
}

function enterLeavingEnd(s: GameState, scene: SceneBuilder): void {
  scene.text(`"${(((s as any).date_ev ?? 0)?.['leave_dialogue'] ?? '')}," you say${(((s as any).date_ev ?? 0)?.['leave_action'] ?? '')}.`);
  if (((s as any).date_ev ?? 0)?.['leave_dialogue'] === 'Bye') {
    scene.text('"Bye," he smiles back as you head off.');
  } else {
    if (((s as any).date_ev ?? 0)?.['leave_dialogue'] === 'See ya') {
      scene.text('"Yeah," he smiles back as you head off.');
    } else {
      if (((s as any).date_ev ?? 0)?.['leave_dialogue'] === 'I had a really good time') {
        scene.text('"Me too," he smiles back as you head off.');
      } else {
        if (((s as any).date_ev ?? 0)?.['leave_dialogue'] === 'Let\'s do this again sometime') {
          scene.text('"Yeah," he smiles back as you head off.');
        } else {
          if (((s as any).date_ev ?? 0)?.['leave_dialogue'] === 'Text me any time you want some company') {
            scene.text('"Sure," he smiles back as you head off.');
          } else {
            if (((s as any).date_ev ?? 0)?.['leave_dialogue'] === 'Text me') {
              scene.text('"Will do," he smiles back as you head off.');
            } else {
              if (((s as any).date_ev ?? 0)?.['leave_dialogue'] === 'Till next time') {
                scene.text('"Yeah," he smiles back as you head off.');
              } else {
                if (((s as any).date_ev ?? 0)?.['leave_dialogue'] === 'Just make sure you have the money ready for next time') {
                  scene.text('"I will," he smiles back as you head off.');
                } else {
                  scene.text('"See you," he smiles back as you head off.');
                }
              }
            }
          }
        }
      }
    }
  }
  scene.actions([
    { label: 'Leave', goto: ['date_after', 'exit'] },
  ]);
  scene.build();
}

function enterPcHomeLeave(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npcID ?? 0) === 'A34') {
    qspCall(s, 'date_ev_A34', 'kolka_leave');
  } else {
    if (((s as any).npc_latesleeper ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).date_ev ?? 0)?.['boy_wakeup'] === 0  &&  ((s as any).date_ev ?? 0)?.['boy_asleep'] === 1  &&  ((s as any).home ?? 0)?.['current'] !== 'parents_home') {
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Get up and leave ' + String(((s as any).npcdesc ?? '') ?? '') + ' in bed', handler: (st: GameState) => {
    qspCall(st, 'date_ev', 'bed_room_img');
    scene.text(`Not wanting to wake ${((st as any).npcdesc ?? '')}, you sneak over to the door and let yourself out, closing it as gently as you can behind you.`);
    scene.actions([
      { label: 'Leave', goto: ['date_after', 'exit'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Tell ' + String(((s as any).npcdesc ?? '') ?? '') + ' to leave', handler: (st: GameState) => {
    qspCall(st, 'date_ev', 'bed_room_img');
    if (((st as any).date_ev ?? 0)?.['angry_after'] === 1  ||  ((st as any).date_ev ?? 0)?.['annoyed'] > 0) {
      scene.text('"You should go," you say flatly.');
      scene.text(`${((st as any).npcdesc ?? '')} stiffly gets out of bed and gets dressed, neither of you really looking the other in the eye as he does. After a minute or two, he's finished and leaves without another word.`);
      scene.actions([
        { label: 'Finish', goto: ['date_after', 'exit'] },
      ]);
    } else {
      if (((st as any).home ?? 0)?.['current'] === 'parents_home'  &&  ((st as any).locat ?? 0)?.['Fam_inGad'] === 1  &&  ((st as any).week ?? 0) === 7  &&  ((st as any).hour ?? 0) > 16) {
        scene.text(`"This was fun, but you should probably go." You smile ruefully. "My parents are coming home soon." ${((st as any).npcdesc ?? '')} nods and moves to start picking up his clothes and get dressed.`);
      } else {
        scene.text(`"This was fun, but you should probably go," you say to ${((st as any).npcdesc ?? '')}, who nods and moves to start picking up his clothes and get dressed.`);
      }
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcHomeLeavingAction(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
      ]);
    }
  }
  scene.build();
}

function enterPcHomeLeavingAction(s: GameState, scene: SceneBuilder): void {
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    scene.actions([
      { label: 'Stay in bed (covers on)', handler: (st: GameState) => {
    ((st as any).date_ev_exit = (st as any).date_ev_exit ?? {})['loc'] = 'bedroom';
    ((st as any).date_ev = (st as any).date_ev ?? {})['leave_action1'] = 'You stay sat on the bed, demurely pulling the sheets up around you to preserve some modesty as you watch ' + ((st as any).npcdesc ?? 0) + ' get dressed. As he finishes, you say,';
    ((st as any).date_ev = (st as any).date_ev ?? {})['leave_action2'] = 'He flashes you a quick smile and then gathers the rest of his stuff to leave, closing the door behind him.';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcHomeLeavingDialogue(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Stay in bed (covers off)', handler: (st: GameState) => {
    ((st as any).date_ev_exit = (st as any).date_ev_exit ?? {})['loc'] = 'bedroom';
    ((st as any).date_ev = (st as any).date_ev ?? {})['leave_action'] = 'You stay sat on the bed, casually laying nude atop the sheets as you watch ' + ((st as any).npcdesc ?? 0) + ' get dressed. He throws more than a few admiring glances your way as he does and when he finishes you say,';
    ((st as any).date_ev = (st as any).date_ev ?? {})['leave_action2'] = 'He flashes you a quick smile and then gathers the rest of his stuff to leave, closing the door behind him.';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcHomeLeavingDialogue(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  scene.actions([
    { label: 'Kiss goodbye', handler: (st: GameState) => {
    ((st as any).date_ev_exit = (st as any).date_ev_exit ?? {})['loc'] = 'bedroom';
    ((st as any).date_ev = (st as any).date_ev ?? {})['leave_action'] = 'You sit on the bed, waiting patiently for ' + ((st as any).npcdesc ?? 0) + ' to get dressed. Once he\'s finished you move over to him and give him a gentle kiss on the lips, saying,';
    ((st as any).date_ev = (st as any).date_ev ?? {})['leave_action2'] = 'He flashes you a quick smile and then gathers the rest of his stuff to leave, closing the door behind him.';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcHomeLeavingDialogue(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: '', labelFn: (s: GameState) => 'See ' + String(((s as any).npcdesc ?? '') ?? '') + ' to the door', handler: (st: GameState) => {
    if (((st as any).clothingworntype ?? 0) === 'nude') {
      ((st as any).date_ev_exit = (st as any).date_ev_exit ?? {})['loc'] = 'hallway';
      ((st as any).date_ev = (st as any).date_ev ?? {})['leave_action'] = 'You sit on the bed, waiting patiently for ' + ((st as any).npcdesc ?? 0) + ' to get dressed. Once he\'s finished you move to take him to the door, making no move to get dressed yourself. Opening it for him, he steps out and you stand completely nude in the frame and say,';
      ((st as any).date_ev = (st as any).date_ev ?? {})['leave_action2'] = 'He flashes you a quick smile in return before stepping off. You watch him go for a few moments before heading back inside and closing the door behind you.';
    } else {
      ((st as any).date_ev = (st as any).date_ev ?? {})['leave_action'] = 'You sit on the bed, waiting patiently for ' + ((st as any).npcdesc ?? 0) + ' to get dressed. Once he\'s finished you move to take him to the door. As he steps out, you say,';
      ((st as any).date_ev = (st as any).date_ev ?? {})['leave_action2'] = 'He flashes you a quick smile in return before stepping off. You watch him go for a few moments before heading back inside and closing the door behind you.';
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcHomeLeavingDialogue(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: '', labelFn: (s: GameState) => 'Kiss ' + String(((s as any).npcdesc ?? '') ?? '') + ' at the door', handler: (st: GameState) => {
    ((st as any).date_ev_exit = (st as any).date_ev_exit ?? {})['loc'] = 'hallway';
    if (((st as any).clothingworntype ?? 0) === 'nude') {
      ((st as any).date_ev = (st as any).date_ev ?? {})['leave_action'] = 'You sit on the bed, waiting patiently for ' + ((st as any).npcdesc ?? 0) + ' to get dressed. Once he\'s finished you move to take him to the door, making no move to get dressed yourself. Just as ' + ((st as any).npcdesc ?? 0) + ' steps out, you grab hold of his shirt to drag him back into a passionate kiss, pulling him tight against your naked body, a sight to be seen by anyone who has a view of your front door. After several long seconds, you break the kiss, saying,';
      if ((Math.floor(Math.random() * 1) + 1) === 5) {
        ((st as any).date_ev = (st as any).date_ev ?? {})['leave_action2'] = 'You pull ' + ((st as any).npcdesc ?? 0) + ' back in for another kiss, but softer and quicker. As you pull back somebody walks past behind him, staring wide eyed at your chest. ';
      } else {
        ((st as any).date_ev = (st as any).date_ev ?? {})['leave_action2'] = 'You pull ' + ((st as any).npcdesc ?? 0) + ' back in for another kiss, but softer and quicker. He flashes you a quick smile in return before stepping off. You watch him go for a few moments before closing the door behind you.';
      }
    } else {
      ((st as any).date_ev = (st as any).date_ev ?? {})['leave_action'] = 'You sit on the bed, waiting patiently for ' + ((st as any).npcdesc ?? 0) + ' to get dressed. Once he\'s finished you move to take him to the door, making no move to get dressed yourself. Just as ' + ((st as any).npcdesc ?? 0) + ' steps out, you grab hold of his shirt to pull him into a passionate kiss. After several long seconds, you break the kiss, saying,';
      ((st as any).date_ev = (st as any).date_ev ?? {})['leave_action2'] = 'You pull ' + ((st as any).npcdesc ?? 0) + ' back in for another kiss, but softer and quicker. He flashes you a quick smile in return before stepping off. You watch him go for a few moments before heading back inside and closing the door behind you.';
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcHomeLeavingDialogue(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterPcHomeLeavingDialogue(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === '') {
    if (((s as any).date_ev ?? 0)?.['sleepover'] === 1  ||  ((s as any).hour ?? 0) < 5) {
      scene.actions([
        { label: '"Wanna do this again?"', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['invite_today'] = 1;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcHomeLeavingEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    } else {
      scene.actions([
        { label: '"Wanna do this again? tomorrow?"', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['invite_tomorrow'] = 1;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcHomeLeavingEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
  } else {
    if (((s as any).npc_booty_call_date ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).daystart ?? 0)  &&  ((s as any).date_ev ?? 0)?.['sleepover'] === 1) {
      scene.actions([
        { label: '"See you soon"', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['leave_dialogue'] = '"See you soon."';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcHomeLeavingEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    } else {
      if (((s as any).npc_booty_call_date ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).daystart ?? 0) + 1) {
        scene.actions([
          { label: '"See you tomorrow"', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['leave_dialogue'] = '"See you tomorrow."';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcHomeLeavingEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      } else {
        scene.actions([
          { label: '"Till next time"', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['leave_dialogue'] = '"Till next time."';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcHomeLeavingEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
          { label: '"Wanna do this again?"', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['invite_today'] = 1;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcHomeLeavingEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      }
    }
    scene.actions([
      { label: '"Text me"', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['leave_dialogue'] = '"Text me."';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcHomeLeavingEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: '"Wanna do this again? tomorrow?"', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['invite_tomorrow'] = 1;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcHomeLeavingEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  scene.actions([
    { label: '"Thanks for coming over."', handler: (st: GameState) => {
    if (((st as any).date_ev ?? 0)?.['sleepover'] === 1) {
      ((st as any).date_ev = (st as any).date_ev ?? {})['leave_dialogue'] = '"Thanks for coming over last night. It was fun."';
    } else {
      ((st as any).date_ev = (st as any).date_ev ?? {})['leave_dialogue'] = '"Thanks for coming over. It was fun."';
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcHomeLeavingEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: '"See ya"', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['leave_dialogue'] = '"See ya."';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcHomeLeavingEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterPcHomeLeavingEnd(s: GameState, scene: SceneBuilder): void {
  if (((s as any).date_ev ?? 0)?.['invite_today'] === 0  &&  ((s as any).date_ev ?? 0)?.['invite_tomorrow'] === 0) {
    scene.text(`${(((s as any).date_ev ?? 0)?.['leave_action1'] ?? '')} ${(((s as any).date_ev ?? 0)?.['leave_dialogue'] ?? '')} ${(((s as any).date_ev ?? 0)?.['leave_action2'] ?? '')}`);
  } else {
    if (((s as any).date_ev ?? 0)?.['invite_today'] === 1) {
      scene.text(`${(((s as any).date_ev ?? 0)?.['leave_action1'] ?? '')}`);
      scene.text('"Want to do this again later?" you ask.');
      scene.text(`${(((s as any).date_ev ?? 0)?.['leave_action2'] ?? '')}`);
    } else {
      if (((s as any).date_ev ?? 0)?.['invite_tomorrow'] === 1) {
        scene.text(`${(((s as any).date_ev ?? 0)?.['leave_action1'] ?? '')}`);
        scene.text('"Want to do this again tomorrow?" you ask.');
        scene.text(`${(((s as any).date_ev ?? 0)?.['leave_action2'] ?? '')}`);
      }
    }
  }
  scene.actions([
    { label: 'Leave', goto: ['date_after', 'exit'] },
  ]);
  scene.build();
}

function enterHurryLeave(s: GameState, scene: SceneBuilder): void {
  if (((s as any).date_ev ?? 0)?.['type'] === 'hookup') {
    scene.actions([
      { label: 'Leave your number (fuckbuddy)', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['fuckbuddy_invite'] = 1;
    if (((st as any).date_ev ?? 0)?.['fuck_count'] > 0) {
      ((st as any).date_ev = (st as any).date_ev ?? {})['leave_dialogue'] = ', stopping to scribble your number on a random piece of paper. "Text me if you want to fuck again!" you call over your shoulder as you dash out the door, slamming it behind you.';
    } else {
      ((st as any).date_ev = (st as any).date_ev ?? {})['leave_dialogue'] = ', stopping to scribble your number on a random piece of paper. "Text me if you want to fool around again!" you call over your shoulder as you dash out the door, slamming it behind you.';
    }
    qspCall(st, 'date_after', 'hurry_leave2');
  } },
      { label: 'Leave your number (date)', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['date_invite'] = 1;
    ((st as any).date_ev = (st as any).date_ev ?? {})['leave_dialogue'] = ', stopping to scribble your number on a random piece of paper. "Text me if you want to go out on a date some time!" you call over your shoulder as you dash out the door, slamming it behind you.';
    qspCall(st, 'date_after', 'hurry_leave2');
  } },
    ]);
  }
  if (((s as any).npc_booty_call_date ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).daystart ?? 0)  &&  ((s as any).date_ev ?? 0)?.['sleepover'] === 1  &&  ((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== 'husband') {
    scene.actions([
      { label: '"See you soon"', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['leave_dialogue'] = ', shouting, "See you soon!" just before it slams behind you.';
    qspCall(st, 'date_after', 'hurry_leave2');
  } },
    ]);
  } else {
    if (((s as any).npc_booty_call_date ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).daystart ?? 0) + 1) {
      scene.actions([
        { label: '"See you tomorrow"', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['leave_dialogue'] = ', shouting, "See you tomorrow!" just before it slams behind you.';
    qspCall(st, 'date_after', 'hurry_leave2');
  } },
      ]);
    }
  }
  // TODO-QSP: --- date_after ---------------------------------
  scene.actions([
    { label: 'No time for goodbyes', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'dislike');
    ((st as any).date_ev = (st as any).date_ev ?? {})['leave_dialogue'] = ' without even saying goodbye';
    qspCall(st, 'date_after', 'hurry_leave2');
  } },
    { label: '"See you later!"', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['leave_dialogue'] = ', calling, "See you later!" just before it slams behind you.';
    qspCall(st, 'date_after', 'hurry_leave2');
  } },
    { label: '"Text me!"', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['leave_dialogue'] = ', calling, "Text me!" just before it slams behind you.';
    qspCall(st, 'date_after', 'hurry_leave2');
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
    case 'date_sex_ask':
      enterDateSexAsk(s, scene);
      break;
    case 'stay_ask':
      enterStayAsk(s, scene);
      break;
    case 'spend_night':
      enterSpendNight(s, scene);
      break;
    case 'coffee_after_ask':
      enterCoffeeAfterAsk(s, scene);
      break;
    case 'hangout_ask':
      enterHangoutAsk(s, scene);
      break;
    case 'coffee_init':
      enterCoffeeInit(s, scene);
      break;
    case 'coffee_talk_img':
      enterCoffeeTalkImg(s, scene);
      break;
    case 'kitchen_img':
      enterKitchenImg(s, scene);
      break;
    case 'coffee_after_start':
      enterCoffeeAfterStart(s, scene);
      break;
    case 'coffee_after1':
      enterCoffeeAfter1(s, scene);
      break;
    case 'dropping_hints':
      enterDroppingHints(s, scene);
      break;
    case 'boy_pushing_sex':
      enterBoyPushingSex(s, scene);
      break;
    case 'apartment_date_end':
      enterApartmentDateEnd(s, scene);
      break;
    case 'spend_night_offer':
      enterSpendNightOffer(s, scene);
      break;
    case 'sex_inv_offer':
      enterSexInvOffer(s, scene);
      break;
    case 'goodbye_route':
      enterGoodbyeRoute(s, scene);
      break;
    case 'street_goodbye':
      enterStreetGoodbye(s, scene);
      break;
    case 'sleep_over':
      enterSleepOver(s, scene);
      break;
    case 'sleep_function':
      enterSleepFunction(s, scene);
      break;
    case 'npc_home_leave':
      enterNpcHomeLeave(s, scene);
      break;
    case 'leaving_dialogue_choices':
      enterLeavingDialogueChoices(s, scene);
      break;
    case 'leaving_action':
      enterLeavingAction(s, scene);
      break;
    case 'leaving_end':
      enterLeavingEnd(s, scene);
      break;
    case 'pc_home_leave':
      enterPcHomeLeave(s, scene);
      break;
    case 'pc_home_leaving_action':
      enterPcHomeLeavingAction(s, scene);
      break;
    case 'pc_home_leaving_dialogue':
      enterPcHomeLeavingDialogue(s, scene);
      break;
    case 'pc_home_leaving_end':
      enterPcHomeLeavingEnd(s, scene);
      break;
    case 'hurry_leave':
      enterHurryLeave(s, scene);
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
