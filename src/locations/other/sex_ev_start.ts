import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterInitiatePre(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['locat'] = ((s as any).locArgs?.[2] ?? 0);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterNpcstatInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['npc_stam'] = (30 * (2 * ((s as any).npc_vital ?? 0) + ((s as any).npc_agil ?? 0) + ((s as any).npc_stren ?? 0)) + 1000) / 13;
  qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'hair_color');
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== ''  &&  ((s as any).ngpPrefResult ?? 0)?.['NotPos'] !== ''  &&  ((s as any).pcs_haircol ?? 0) <= 3) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['boy_likes_hair'] = 1;
  }
  if (((s as any).sex_ev ?? 0)?.['locat'] === 'npc_home') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLoverHomeImgInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).sex_ev ?? 0)?.['locat'] === 'hotel') {
      qspCall(s, 'sex_ev_start', '' + ((s as any).region ?? 0) + '_hotel_img_init');
    } else {
      if (((s as any).sex_ev ?? 0)?.['locat'] === 'pc_home') {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcHomeImgInit(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['loc'] = ((s as any).sex_ev ?? 0)?.['locat'];
      }
    }
  }
  if (Object.keys((s as any).date_ev ?? {}).length <= 0  &&  (!(((s as any).sex_ev ?? 0)?.['date_before_sex'] + ((s as any).sex_ev ?? 0)?.['sex_before_date']))) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['sex_before_date'] = 1;
  } else {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['date_before_sex'] = 1;
  }
  if (Object.keys((s as any).date_ev ?? {}).length > 0) {
    if (((s as any).date_ev ?? 0)?.['npc_home_sex'] === 1) {
      qspGoto(s, 'sex_ev_start', 'date_npc_home_start');
    } else {
      if (((s as any).date_ev ?? 0)?.['pc_home_sex'] === 1) {
        qspGoto(s, 'sex_ev_start', 'date_pc_home_start');
      } else {
        if (((s as any).date_ev ?? 0)?.['hotel_sex'] === 1) {
          qspGoto(s, 'sex_ev_start', 'date_hotel_start');
        } else {
          qspGoto(s, 'sex_ev_start', 'date_npc_home_start');
        }
      }
    }
  } else {
    if (((String(';dating;fuckbuddy;sugar_daddy;daddy;boyfriend;husband;').indexOf(String(';' + (((s as any).npcRelat ?? 0)) + ';'))) + 1) > 0) {
      // TODO-QSP: xgt 'sex_ev_start', 'lover_initiate', $sex_ev['loc']
    } else {
      if ((String(((s as any).npcRelat ?? 0)).slice((1)-1, ((1)-1)+(3))) === 'ex-') {
        // TODO-QSP: xgt 'sex_ev_start', 'lover_initiate', $sex_ev['loc']
      } else {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHookupInitiate(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBegin(s, scene); (s as any).locArgs = __savedLocArgs; }
        qspGoto(s, 'sex_ev_start', 'undress_menu');
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterNpcstatInit(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') !== '') {
    qspCall(s, 'npcStat', '', ((s as any).locArgs?.[1] ?? 0));
  }
  // TODO-QSP: end
  scene.build();
}

function enterNeighborhoodImage(s: GameState, scene: SceneBuilder): void {
  if (((s as any).loc ?? 0) === 'pav_residential') {
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
        // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/pavresn_'+ rand(1, 2)...
        scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/pavresn_` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
      }
    }
  } else {
    if (((s as any).loc ?? 0) === 'city_residential') {
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
      if (((s as any).loc ?? 0) === 'city_center') {
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
  }
  // TODO-QSP: end
  scene.build();
}

function enterExitSet(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['loc'] === 'pc_home') {
    dynamicGoto(s, (((s as any).home ?? {}))['bedroom'], (((s as any).home ?? {}))['bedroom_arg']);
  } else {
    if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspGoto(s, 'pav_residential', '');
    } else {
      if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
        qspGoto(s, 'city_island', '');
      } else {
        if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 3) {
          qspGoto(s, 'city_residential', '');
        } else {
          if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 4) {
            qspGoto(s, 'city_center', '');
          } else {
            if (((s as any).region ?? 0) === 'pav') {
              qspGoto(s, 'pav_residential', '');
            } else {
              if (((s as any).region ?? 0) === 'gad') {
                qspGoto(s, 'gadukino', '');
              } else {
                if (((s as any).region ?? 0) === 'city') {
                  qspGoto(s, 'city_residential', '');
                } else {
                  if (((s as any).region ?? 0) === 'pushkin') {
                    qspGoto(s, 'pushkin', '');
                  } else {
                    qspGoto(s, 'city_residential', '');
                  }
                }
              }
            }
            if (((s as any).region ?? 0) === 'pav') {
              qspGoto(s, 'pav_residential', '');
            } else {
              if (((s as any).region ?? 0) === 'pav') {
                qspGoto(s, 'pav_commercial', '');
              } else {
                if (((s as any).region ?? 0) === 'pav_park') {
                  qspGoto(s, 'pav_park', 'start');
                } else {
                  if (((s as any).region ?? 0) === 'city') {
                    qspGoto(s, 'city_residential', '');
                  } else {
                    if (((s as any).region ?? 0) === 'city_center') {
                      qspGoto(s, 'city_center', '');
                    } else {
                      if (((s as any).region ?? 0) === 'city_park') {
                        qspGoto(s, 'city_park', 'start');
                      } else {
                        if (((s as any).region ?? 0) === 'city_island') {
                          qspGoto(s, 'city_island', '');
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
  }
  scene.build();
}

function enterLoverInitiate(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npcRelat ?? 0) === 'husband') {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['type'] = 'married_sex';
  } else {
    if (((s as any).npcRelat ?? 0) === 'boyfriend') {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['type'] = 'dating_sex';
    } else {
      if (((s as any).npcRelat ?? 0) === 'fuckbuddy') {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['type'] = 'booty_call';
      } else {
        if (((s as any).npcRelat ?? 0) === 'daddy') {
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['type'] = 'booty_call';
        } else {
          if ((String(((s as any).npcRelat ?? 0)).slice((1)-1, ((1)-1)+(3))) === 'ex-') {
            ((s as any).sex_ev = (s as any).sex_ev ?? {})['type'] = 'booty_call';
          }
        }
      }
    }
  }
  if (Object.keys((s as any).date_ev ?? {}).length > 0) {
    if (((s as any).date_ev ?? 0)?.['npc_home_sex'] === 1) {
      qspGoto(s, 'sex_ev_start', 'date_npc_home_start');
    } else {
      if (((s as any).date_ev ?? 0)?.['pc_home_sex'] === 1) {
        qspGoto(s, 'sex_ev_start', 'date_pc_home_start');
      } else {
        if (((s as any).date_ev ?? 0)?.['hotel_sex'] === 1) {
          qspGoto(s, 'sex_ev_start', 'date_hotel_start');
        } else {
          qspGoto(s, 'sex_ev_start', 'date_npc_home_start');
        }
      }
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['type'] === 'booty_call') {
      if (((s as any).npcRelat ?? 0) === 'daddy') {
        ((s as any).sugar_daddy_call = (s as any).sugar_daddy_call ?? {})[String((s as any).npcID ?? 0)] = 1;
      }
      if (String((s as any).locArgs?.[1] ?? '') === 'npc_home') {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLoverHomeImgInit(s, scene); (s as any).locArgs = __savedLocArgs; }
        if ((((s as any).booty_call_invite ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).daystart ?? 0)  ||  ((s as any).npc_booty_call_date ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).daystart ?? 0)  ||  ((s as any).npc_booty_call_date ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).daystart ?? 0))  &&  ((s as any).npc_last_booty_call ?? 0)?.[String((s as any).npcID ?? 0)] !== ((s as any).daystart ?? 0)) {
          if (((s as any).booty_call_hotel ?? 0)?.[String((s as any).npcID ?? 0)] === '') {
            qspGoto(s, 'sex_ev_start', 'fb_invited_start');
          } else {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNeighborhoodImage(s, scene); (s as any).locArgs = __savedLocArgs; }
            // TODO-QSP: dynamic text: You knock on <<$npcdesc>>''s door but there is no answer.
            scene.text(`You knock on ${((s as any).npcdesc ?? '')}'s door but there is no answer.`);
            // TODO-QSP: dynamic text: <<$Xec>> is probably waiting for you at the hotel.
            scene.text(`${((s as any).Xec ?? '')} is probably waiting for you at the hotel.`);
            scene.actions([
              { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
            ]);
          }
        } else {
          if (((s as any).npcRelat ?? 0) === 'fuckbuddy'  &&  qspFunc(s, 'lover_schedule', 'is_free', ((s as any).npcID ?? 0))  &&  ((s as any).npc_last_booty_call ?? 0)?.[String((s as any).npcID ?? 0)] !== ((s as any).daystart ?? 0)  &&  ((s as any).npc_no_booty_call ?? 0)?.[String((s as any).npcID ?? 0)] !== ((s as any).daystart ?? 0)) {
            qspGoto(s, 'sex_ev_start', 'fb_uninvited_start');
          } else {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNeighborhoodImage(s, scene); (s as any).locArgs = __savedLocArgs; }
            // TODO-QSP: dynamic text: You knock on <<$npcdesc>>''s door but there is no answer.
            scene.text(`You knock on ${((s as any).npcdesc ?? '')}'s door but there is no answer.`);
            scene.actions([
              { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
            ]);
          }
        }
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 'hotel_room') {
          qspCall(s, 'sex_ev_start', '' + ((s as any).region ?? 0) + '_hotel_img_init');
          qspGoto(s, 'sex_ev_start', 'fb_invited_start');
        } else {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNeighborhoodImage(s, scene); (s as any).locArgs = __savedLocArgs; }
          // TODO-QSP: dynamic text: You knock on <<$npcdesc>>''s door but there is no answer.
          scene.text(`You knock on ${((s as any).npcdesc ?? '')}'s door but there is no answer.`);
          scene.actions([
            { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
          ]);
        }
      }
    } else {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNeighborhoodImage(s, scene); (s as any).locArgs = __savedLocArgs; }
      // TODO-QSP: dynamic text: You knock on <<$npcdesc>>''s door but there is no answer.
      scene.text(`You knock on ${((s as any).npcdesc ?? '')}'s door but there is no answer.`);
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterHookupInitiate(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npcID ?? 0) !== ((s as any).npclastgenerated ?? 0)  &&  ((s as any).npcID ?? 0) !== ((s as any).npclastsaved ?? 0)) {
    if (((s as any).npcgen_lastrun ?? 0) >= 1  &&  ((s as any).npcgen_lastrun ?? 0) <= 2) {
      qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
    }
  } else {
    if ((String(((s as any).npcID ?? 0)).slice((1)-1, ((1)-1)+(1))) === 'C') {
      qspCall(s, 'npcpreservec', '', ((s as any).npclastgenerated ?? 0));
      qspCall(s, 'npcStat', '', ((s as any).npclastsaved ?? 0));
    }
  }
  // TODO-QSP: $npc_rel_type[$npcID] = 'hookup'
  (s as any).npcRelat = 'hookup';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['type'] = 'hookup';
  ((s as any).stat = (s as any).stat ?? {})['hookup_count'] = ((s as any).stat['hookup_count'] ?? 0) + (1);
  if ((Array.isArray((s as any).hookup_partners) ? ((s as any).hookup_partners as any[]).indexOf(((s as any).npcID ?? 0)) : -1) < 0) {
    // TODO-QSP: $hookup_partners[] = $npcID
  }
  ((s as any).stat = (s as any).stat ?? {})['last_hookup'] = ((s as any).daystart ?? 0);
  // TODO-QSP: end
  scene.build();
}

function enterPcHomeImgInit(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['loc'] = 'pc_home';
  if (((s as any).loc ?? 0) === 'korrPar'  ||  ((s as any).home ?? 0)?.['current'] === 'parents_home') {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['bed_room'] = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/resident/apartment/home/bedrpar.jpg"><img ' + ((s as any).set_imgh ?? 0) + ' src="' + ((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)] + '"></center>';
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['bath_room'] = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/resident/apartment/home/vanrpar.jpg"><img ' + ((s as any).set_imgh ?? 0) + ' src="' + ((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)] + '"></center>';
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['kitchen_room'] = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/resident/apartment/home/kuhrpar.jpg"><img ' + ((s as any).set_imgh ?? 0) + ' src="' + ((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)] + '"></center>';
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['living_room'] = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/resident/apartment/home/sitrpar.jpg"><img ' + ((s as any).set_imgh ?? 0) + ' src="' + ((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)] + '"></center>';
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['hall_way'] = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/resident/apartment/home/korrpar.jpg"><img ' + ((s as any).set_imgh ?? 0) + ' src="' + ((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)] + '"></center>';
  }
  // TODO-QSP: end
  scene.build();
}

function enterLoverHomeImgInit(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['loc'] = 'npc_home';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['bed_room'] = '<center>' + ((s as any).npc_apt_bedroom ?? 0)?.[String((s as any).npcID ?? 0)] + '<img ' + ((s as any).set_imgh ?? 0) + ' src="' + ((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)] + '"></center>';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['bath_room'] = '<center>' + ((s as any).npc_apt_bathroom ?? 0)?.[String((s as any).npcID ?? 0)] + '<img ' + ((s as any).set_imgh ?? 0) + ' src="' + ((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)] + '"></center>';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['kitchen_room'] = '<center>' + ((s as any).npc_apt_kitchen ?? 0)?.[String((s as any).npcID ?? 0)] + '<img ' + ((s as any).set_imgh ?? 0) + ' src="' + ((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)] + '"></center>';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['living_room'] = '<center>' + ((s as any).npc_apt_livingroom ?? 0)?.[String((s as any).npcID ?? 0)] + '<img ' + ((s as any).set_imgh ?? 0) + ' src="' + ((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)] + '"></center>';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['hall_way'] = '<center>' + ((s as any).npc_apt_hall ?? 0)?.[String((s as any).npcID ?? 0)] + '<img ' + ((s as any).set_imgh ?? 0) + ' src="' + ((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)] + '"></center>';
  // TODO-QSP: end
  scene.build();
}

function enterPavHotelImgInit(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['loc'] = 'hotel_room';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['bed_room'] = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/hotel/hotel.room.normal.jpg"><img ' + ((s as any).set_imgh ?? 0) + ' src="' + ((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)] + '"></center>';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['bath_room'] = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/hotel/hotel.room.normal1.jpg"><img ' + ((s as any).set_imgh ?? 0) + ' src="' + ((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)] + '"></center>';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['kitchen_room'] = 'none';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['living_room'] = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/hotel/hotel.room.normal.jpg"><img ' + ((s as any).set_imgh ?? 0) + ' src="' + ((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)] + '"></center>';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['hall_way'] = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/hotel/hotel.room.normal.jpg"><img ' + ((s as any).set_imgh ?? 0) + ' src="' + ((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)] + '"></center>';
  // TODO-QSP: end
  scene.build();
}

function enterCityHotelImgInit(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['loc'] = 'hotel_room';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['bed_room'] = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/hotel/hotel.room.best.jpg"><img ' + ((s as any).set_imgh ?? 0) + ' src="' + ((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)] + '"></center>';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['bath_room'] = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/hotel/hotel.room.best1.jpg"><img ' + ((s as any).set_imgh ?? 0) + ' src="' + ((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)] + '"></center>';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['kitchen_room'] = 'none';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['living_room'] = 'none';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['hall_way'] = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/hotel/hotel.room.best.jpg"><img ' + ((s as any).set_imgh ?? 0) + ' src="' + ((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)] + '"></center>';
  // TODO-QSP: end
  scene.build();
}

function enterFbNpcHomeStart(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['type'] = 'booty_call';
  if ((((s as any).booty_call_invite ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).daystart ?? 0)  ||  ((s as any).npc_booty_call_date ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).daystart ?? 0)  ||  ((s as any).npc_booty_call_date ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).daystart ?? 0))  &&  ((s as any).npc_last_booty_call ?? 0)?.[String((s as any).npcID ?? 0)] !== ((s as any).daystart ?? 0)) {
    qspGoto(s, 'sex_ev_start', 'fb_invited_start');
  } else {
    if (qspFunc(s, 'lover_schedule', 'is_free', ((s as any).npcID ?? 0))  &&  ((s as any).npc_last_booty_call ?? 0)?.[String((s as any).npcID ?? 0)] !== ((s as any).daystart ?? 0)  &&  ((s as any).npc_no_booty_call ?? 0)?.[String((s as any).npcID ?? 0)] !== ((s as any).daystart ?? 0)) {
      qspGoto(s, 'sex_ev_start', 'fb_uninvited_start');
    } else {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNeighborhoodImage(s, scene); (s as any).locArgs = __savedLocArgs; }
      // TODO-QSP: dynamic text: You knock on <<$npcdesc>>''s door but there is no answer.
      scene.text(`You knock on ${((s as any).npcdesc ?? '')}'s door but there is no answer.`);
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterFbNpcHomeFastStart(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBegin(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLoverHomeImgInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspGoto(s, 'sex_ev_clothing', 'undress_menu');
  // TODO-QSP: end
  scene.build();
}

function enterDateNpcHomeStart(s: GameState, scene: SceneBuilder): void {
  if ((Array.isArray((s as any).lover) ? ((s as any).lover as any[]).indexOf(((s as any).npcID ?? 0)) : -1) < 0) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['type'] = 'hookup';
  } else {
    if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'fuckbuddy') {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['type'] = 'booty_call';
    } else {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['type'] = 'lover_sex';
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBegin(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLoverHomeImgInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspGoto(s, 'sex_ev_clothing', 'undress_menu');
  // TODO-QSP: end
  scene.build();
}

function enterDatePcHomeStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['type'] === '') {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['type'] = 'lover_sex';
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBegin(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcHomeImgInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspGoto(s, 'sex_ev_clothing', 'undress_menu');
  // TODO-QSP: end
  scene.build();
}

function enterDateHotelStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['type'] === '') {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['type'] = 'lover_sex';
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBegin(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).region ?? 0) === 'pav') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPavHotelImgInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCityHotelImgInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  qspGoto(s, 'sex_ev_clothing', 'undress_menu');
  // TODO-QSP: end
  scene.build();
}

function enterUniquePcHomeStart(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['unique_npc'] = 1;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcHomeImgInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBegin(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspGoto(s, 'sex_ev_clothing', 'undress_menu');
  // TODO-QSP: end
  scene.build();
}

function enterHookupPcHomeStart(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[2] ?? '') === 'prostitute') {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['prostitution_price'] = ((s as any).locArgs?.[3] ?? 0);
    qspCall(s, 'sex_ev_stats', 'prostitution_init');
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHookupInitiate(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcHomeImgInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBegin(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspGoto(s, 'sex_ev_clothing', 'undress_menu');
  // TODO-QSP: end
  scene.build();
}

function enterHookupNpcHomeStart(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[2] ?? '') === 'prostitute') {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['prostitution_price'] = ((s as any).locArgs?.[3] ?? 0);
    qspCall(s, 'sex_ev_stats', 'prostitution_init');
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHookupInitiate(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLoverHomeImgInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBegin(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspGoto(s, 'sex_ev_clothing', 'undress_menu');
  // TODO-QSP: end
  scene.build();
}

function enterPcHomeStart(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[2] ?? '') === 'prostitute') {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['prostitution_price'] = ((s as any).locArgs?.[3] ?? 0);
    qspCall(s, 'sex_ev_stats', 'prostitution_init');
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'hookup') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHookupInitiate(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcHomeImgInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBegin(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspGoto(s, 'sex_ev_clothing', 'undress_menu');
  // TODO-QSP: end
  scene.build();
}

function enterNpcHomeStart(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[2] ?? '') === 'prostitute') {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['prostitution_price'] = ((s as any).locArgs?.[3] ?? 0);
    qspCall(s, 'sex_ev_stats', 'prostitution_init');
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'hookup') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHookupInitiate(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLoverHomeImgInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBegin(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspGoto(s, 'sex_ev_clothing', 'undress_menu');
  // TODO-QSP: end
  scene.build();
}

function enterHookupHotelStart(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[2] ?? '') === 'prostitute') {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['prostitution_price'] = ((s as any).locArgs?.[3] ?? 0);
    qspCall(s, 'sex_ev_stats', 'prostitution_init');
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHookupInitiate(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).region ?? 0) === 'pav') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPavHotelImgInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCityHotelImgInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBegin(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspGoto(s, 'sex_ev_clothing', 'undress_menu');
  // TODO-QSP: end
  scene.build();
}

function enterHotelStart(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[2] ?? '') === 'prostitute') {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['prostitution_price'] = ((s as any).locArgs?.[3] ?? 0);
    qspCall(s, 'sex_ev_stats', 'prostitution_init');
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'hookup') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHookupInitiate(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).region ?? 0) === 'pav') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPavHotelImgInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCityHotelImgInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBegin(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspGoto(s, 'sex_ev_clothing', 'undress_menu');
  // TODO-QSP: end
  scene.build();
}

function enterHookupPartyStart(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHookupInitiate(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['loc'] = 'house_party';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['bed_room'] = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/shared/romance/lovers/homes/multibedroom/' + (Math.floor(Math.random() * 2) + 1) + '/bedroom.jpg"></center>';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['action_restricted'] = 1;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBegin(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspGoto(s, 'sex_ev_clothing', 'undress_menu');
  // TODO-QSP: end
  scene.build();
}

function enterUniqueNpcStart(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['unique_npc'] = 1;
  qspCall(s, 'boy_updater', 'unique_NPC_stat_seed');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLoverHomeImgInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBegin(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspGoto(s, 'sex_ev_clothing', 'undress_menu');
  // TODO-QSP: end
  scene.build();
}

function enterUniqueNpcBedStart(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['unique_npc'] = 1;
  qspCall(s, 'boy_updater', 'unique_NPC_stat_seed');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLoverHomeImgInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBegin(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'sex_ev_clothing', 'undress_function');
  qspCall(s, 'sex_ev_foreplay', 'bed_start');
  // TODO-QSP: end
  scene.build();
}

function enterBegin(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'event';
  qspCall(s, 'themes', 'indoors');
  if (((s as any).minut ?? 0) > 45) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['start_hour'] = ((s as any).hour ?? 0) + 1;
  } else {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['start_hour'] = ((s as any).hour ?? 0);
  }
  qspCall(s, 'sex_ev_stats', 'starting_stats');
  qspCall(s, 'sex_ev_stats', 'npc_update');
  if (((s as any).sugar_daddy_call ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).sex_ev ?? 0)?.['prostitution'] === 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['prostitution_flag'] = 'prostitution';
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['prostitution'] = 1;
    ((s as any).npc_sugar_daddy_timer = (s as any).npc_sugar_daddy_timer ?? {})[String((s as any).npcID ?? 0)] = ((s as any).daystart ?? 0) + 10;
  }
  if (((s as any).sex_ev ?? 0)?.['prostitution'] === 1) {
    qspCall(s, 'sex_ev_stats', 'prostitution_pay_calc');
  }
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'fuckbuddy') {
    ((s as any).npc_last_booty_call = (s as any).npc_last_booty_call ?? {})[String((s as any).npcID ?? 0)] = ((s as any).daystart ?? 0);
  }
  // TODO-QSP: end
  scene.build();
}

function enterFbHotelStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).region ?? 0) === 'pav') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPavHotelImgInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCityHotelImgInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBegin(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspGoto(s, 'sex_ev_clothing', 'undress_menu');
  // TODO-QSP: end
  scene.build();
}

function enterFbInvitedStart(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBegin(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: $sex_ev['hall_way']
  // TODO-QSP: dynamic text: You knock on the door and <<$npcdesc>> opens up.
  scene.text(`You knock on the door and ${((s as any).npcdesc ?? '')} opens up.`);
  if (((s as any).pcs_sweat ?? 0) > 29) {
    if (((s as any).stat ?? 0)?.['last_workout'] > ((s as any).totminut ?? 0) - 120) {
      scene.actions([
        { label: 'Working out', handler: (st: GameState) => {
    if (((st as any).npc_gymrat ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      scene.text('"Yeah," you smile back.');
    } else {
      scene.text('"I was working out when you messaged," you shrug.');
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFbSweaty(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    if (((s as any).stat ?? 0)?.['dance_day'] === ((s as any).daystart ?? 0)  ||  ((s as any).AlbinaQW ?? 0)?.['startletsday'] === ((s as any).daystart ?? 0)) {
      scene.actions([
        { label: 'Came from dance', handler: (st: GameState) => {
    scene.text('"I came straight from dance practice," you shrug.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFbSweaty(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    scene.text('"I was playing football when I saw your message," you shrug.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFbSweaty(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).stat ?? 0)?.['volleyball_day'] === ((s as any).daystart ?? 0)) {
      scene.actions([
        { label: 'Came from volleyball', handler: (st: GameState) => {
    scene.text('"I came straight from volleyball practice," you shrug.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFbSweaty(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    if (((s as any).stat ?? 0)?.['run_day'] === ((s as any).daystart ?? 0)) {
      scene.actions([
        { label: 'I was running', handler: (st: GameState) => {
    scene.text('"I was on a run when I saw your message," you shrug.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFbSweaty(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCouldntWait(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).pcs_sweat ?? 0) > 39  &&  ((s as any).npc_gymrat ?? 0)?.[String((s as any).npcID ?? 0)] < 1) {
      if (((s as any).npc_argumentative ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.text('"What the fuck?" he says, wrinkling his nose. "You stink."');
      } else {
        scene.text('"A little fresh today, huh?" he says, as the scent of your sweaty body makes him wince; though the smiles wryly.');
      }
    } else {
      if (((s as any).pcs_sweat ?? 0) > 29) {
        if ((Math.floor(Math.random() * 2) + 1) === 1) {
          scene.text('"Did I interrupt a workout?" he smirks, looking your sweaty body up and down.');
        } else {
          scene.text('"Hey," he says, looking up and down your sweaty body in amusement. "You\'re soaking wet."');
          if (((s as any).pcs_horny ?? 0) >= 70) {
            scene.actions([
              { label: 'Yeah', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Yeah," you say huskily, letting your arousal seep into your voice. <<$npcdesc>>...
    scene.text(`"Yeah," you say huskily, letting your arousal seep into your voice. ${((st as any).npcdesc ?? '')} locks eyes with you for a split second.`);
    scene.text('"Bed?"');
    scene.text('"Now," you pant and rush inside.');
    scene.actions([
      { label: 'Clothes. Off. Now.', goto: ['sex_ev_clothing', 'frantic_undress'] },
    ]);
  } },
            ]);
          }
        }
      }
    }
    scene.actions([
      { label: 'Didn\'t have time', handler: (st: GameState) => {
    scene.text('"I didn\'t have time," you smile. "I came as soon as I saw your message."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFuckOrWhat(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'sex_ev_shower', 'before_borrow_shower');
  } },
      { label: 'Came from work', handler: (st: GameState) => {
    scene.text('"I came straight from work," you shrug. "Didn\'t want to go home and clean up first."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFuckOrWhat(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'sex_ev_shower', 'before_borrow_shower');
  } },
    ]);
  } else {
    if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  (Math.floor(Math.random() * 2) + 0) === 1) {
      scene.text('"About fucking time," he says.');
    } else {
      scene.text('"Hey," he grins at you.');
    }
    if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
      scene.actions([
        { label: 'Don\'t mess up my makeup', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['dont_ruin_makeup'] = 1;
    // TODO-QSP: $sex_ev['hall_way']
    if (((st as any).npc_apt_type ?? 0)?.[String((st as any).npcID ?? 0)] < 3) {
      scene.text('"Don\'t mess up my makeup," you say, walking past him towards the bed.');
    } else {
      scene.text('"Don\'t mess up my makeup," you say, walking past him towards the bedroom.');
    }
    qspCall(st, 'sex_ev_clothing', 'undress_menu');
    if (((st as any).date ?? 0) === ((st as any).daystart ?? 0)  &&  ((st as any).date_hour_meet ?? 0) <= ((st as any).hour ?? 0) + 1) {
      scene.actions([
        { label: 'I have a date soon', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['hall_way']
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['date_soon'] = 1;
    if (((st as any).npc_apt_type ?? 0)?.[String((st as any).npcID ?? 0)] < 3) {
      scene.text('"Don\'t mess up my makeup," you say, walking past him towards the bed. "I have a date right after this."');
    } else {
      scene.text('"Don\'t mess up my makeup," you say, walking past him towards the bedroom. "I have a date right after this."');
    }
    qspGoto(st, 'sex_ev_clothing', 'undress_menu');
  } },
      ]);
    } else {
      if (((st as any).date ?? 0) === ((st as any).daystart ?? 0)) {
        scene.actions([
          { label: 'I have a date later', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['hall_way']
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['date_soon'] = 1;
    if (((st as any).npc_apt_type ?? 0)?.[String((st as any).npcID ?? 0)] < 3) {
      scene.text('"Don\'t mess up my makeup," you say, walking past him towards the bed. "I have a date later. I don\'t want to do it again."');
    } else {
      scene.text('"Don\'t mess up my makeup," you say, walking past him towards the bed. "I have a date later. I don\'t want to do it again."');
    }
    qspGoto(st, 'sex_ev_clothing', 'undress_menu');
  } },
        ]);
      }
    }
    if (((st as any).hour ?? 0) >= 18  &&  ((st as any).region ?? 0) === 'pav'  &&  (((st as any).week ?? 0) === 5  ||  ((st as any).week ?? 0) === 6)) {
      scene.actions([
        { label: 'I\'m going to the disco', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['hall_way']
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['disco_after'] = 1;
    scene.text('"Don\'t mess up my makeup," you say as you let him pull you inside. "I\'m going to the disco after this."');
    qspGoto(st, 'sex_ev_clothing', 'undress_menu');
  } },
      ]);
    }
  } },
      ]);
    }
    if (((s as any).kanikuli ?? 0) === 0  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0  &&  ((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) < 9  &&  ((s as any).hour ?? 0) >= 6) {
      scene.actions([
        { label: 'Make it fast (school)', handler: (st: GameState) => {
    scene.text('"Let\'s make this fast," you say. "I have to get to class."');
    qspGoto(st, 'sex_ev_clothing', 'undress_menu');
  } },
      ]);
    }
    if (((s as any).mc_inventory ?? 0)?.['normal_condoms'] > 0  &&  ((s as any).npc_bareback ?? 0)?.[String((s as any).npcID ?? 0)] === '') {
      scene.actions([
        { label: 'I brought condoms', handler: (st: GameState) => {
    ((st as any).pc_buy_condoms = (st as any).pc_buy_condoms ?? {})[String((st as any).npcID ?? 0)] = 2;
    scene.text('"I brought condoms," you grin, holding up the rubbers for him to see.');
    if (((st as any).know_virgin ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: <<$npcdesc>> stares in awe.
      scene.text(`${((st as any).npcdesc ?? '')} stares in awe.`);
      scene.text('"Does that mean...?"');
      scene.text('"Come and find out," you say, moving inside.');
    } else {
      scene.text('"Fuck yeah," he says as he drags you inside.');
    }
    qspGoto(st, 'sex_ev_clothing', 'undress_menu');
  } },
      ]);
    }
    if (((s as any).mc_inventory ?? 0)?.['morning_after_pill'] > 0  &&  ((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      scene.actions([
        { label: 'Brought a morning after pill', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['skip_condom'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['ma_pill'] = 1;
    scene.actions([
      { label: 'No condoms', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['hall_way']
    scene.text('"I brought a morning after pill," you whisper in his ear. "<i>We can skip the condoms today.</i>"');
    qspGoto(st, 'sex_ev_clothing', 'undress_menu');
  } },
      { label: 'Come inside me', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_allowance'] = 1;
    // TODO-QSP: $sex_ev['hall_way']
    scene.text('"I brought a morning after pill," you whisper in his ear. "<i>Fill me with your cum.</i>"');
    qspGoto(st, 'sex_ev_clothing', 'undress_menu');
  } },
    ]);
  } },
      ]);
    }
    if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).braworntype ?? 0) === 'none') {
      scene.actions([
        { label: 'Tell him you\'re not wearing underwear', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['commando'] = 1;
    // TODO-QSP: $sex_ev['hall_way']
    // TODO-QSP: dynamic text: You step inside and draw close to <<$npcdesc>>. You lean in and whisper in his e...
    scene.text(`You step inside and draw close to ${((st as any).npcdesc ?? '')}. You lean in and whisper in his ear...`);
    scene.text('<i>"I\'m not wearing any underwear."</i>');
    qspGoto(st, 'sex_ev_clothing', 'undress_menu');
  } },
      ]);
    }
    if (((s as any).birth_control ?? 0)?.['think_safe'] === 1  &&  ((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      scene.actions([
        { label: 'Tell him you\'re on birth control', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_stats', 'birth_control_know');
    // TODO-QSP: $sex_ev['hall_way']
    // TODO-QSP: dynamic text: You step inside and draw close to <<$npcdesc>>. You lean in and whisper in his e...
    scene.text(`You step inside and draw close to ${((st as any).npcdesc ?? '')}. You lean in and whisper in his ear...`);
    scene.actions([
      { label: 'No condoms', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['hall_way']
    if (((st as any).npc_know_bc_not_effective ?? 0)?.[String((st as any).npcID ?? 0)] === 1  ||  ((st as any).npc_bc_promise ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      scene.text('"<i>My birth control is ready. Let\'s go bareback today.</i>"');
    } else {
      scene.text('"<i>I\'m on birth control now. Let\'s go bareback today.</i>"');
    }
    qspGoto(st, 'sex_ev_clothing', 'undress_menu');
  } },
      { label: 'Creampies are okay today', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_allowance'] = 1;
    // TODO-QSP: $sex_ev['hall_way']
    if (((st as any).npc_know_bc_not_effective ?? 0)?.[String((st as any).npcID ?? 0)] === 1  ||  ((st as any).npc_bc_promise ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      scene.text('"<i>My birth control is ready. You can come inside me.</i>"');
    } else {
      scene.text('"<i>I\'m on birth control now. You can come inside me.</i>"');
    }
    qspGoto(st, 'sex_ev_clothing', 'undress_menu');
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).mesec ?? 0) > 0) {
        scene.actions([
          { label: '"I\'m on my period"', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['hall_way']
    // TODO-QSP: dynamic text: You step inside and draw close to <<$npcdesc>>. You lean in and whisper in his e...
    scene.text(`You step inside and draw close to ${((st as any).npcdesc ?? '')}. You lean in and whisper in his ear...`);
    scene.actions([
      { label: 'No condoms', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['hall_way']
    scene.text('"<i>I\'m on my period right now. Let\'s go bareback today.</i>"');
    qspGoto(st, 'sex_ev_clothing', 'undress_menu');
  } },
      { label: 'Come inside me', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_allowance'] = 1;
    // TODO-QSP: $sex_ev['hall_way']
    scene.text('"<i>I\'m on my period right now. You can come inside me.</i>"');
    qspGoto(st, 'sex_ev_clothing', 'undress_menu');
  } },
    ]);
  } },
        ]);
      }
    }
    if (((s as any).npc_shave_promise ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).npc_shave_promise_style ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).pube_style ?? 0)?.['word']) {
      ((s as any).npc_shave_promise = (s as any).npc_shave_promise ?? {})[String((s as any).npcID ?? 0)] = 0;
      if (((s as any).npc_shave_promise_style ?? 0)?.[String((s as any).npcID ?? 0)] === 'shaved') {
        scene.actions([
          { label: 'Tell him you shaved', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['hall_way']
    // TODO-QSP: dynamic text: "I have a special surprise too," you say, stepping inside and drawing close to <...
    scene.text(`"I have a special surprise too," you say, stepping inside and drawing close to ${((st as any).npcdesc ?? '')}. You lean in and whisper in his ear, "<i>I shaved my pussy for you.</i>"`);
    qspGoto(st, 'sex_ev_clothing', 'undress_menu');
  } },
        ]);
      } else {
        if (((s as any).npc_shave_promise_style ?? 0)?.[String((s as any).npcID ?? 0)] === 'trimmed') {
          scene.actions([
            { label: 'Tell him you shaved', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['hall_way']
    // TODO-QSP: dynamic text: "I have a special surprise too," you say, stepping inside and drawing close to <...
    scene.text(`"I have a special surprise too," you say, stepping inside and drawing close to ${((st as any).npcdesc ?? '')}. You lean in and whisper in his ear, "<i>I trimmed my pussy for you.</i>"`);
    qspGoto(st, 'sex_ev_clothing', 'undress_menu');
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Tell him you\'ve got bush', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['hall_way']
    // TODO-QSP: dynamic text: "I have a special surprise too," you say, stepping inside and drawing close to <...
    scene.text(`"I have a special surprise too," you say, stepping inside and drawing close to ${((st as any).npcdesc ?? '')}. You lean in and whisper in his ear, "<i>My bush has grown in.</i>"`);
    qspGoto(st, 'sex_ev_clothing', 'undress_menu');
  } },
          ]);
        }
      }
    }
    scene.actions([
      { label: 'Hey', handler: (st: GameState) => {
    scene.text('"Hey," you smile back. "So..."');
    if (((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] > 0  &&  (Math.floor(Math.random() * 2) + 0) === 1) {
      // TODO-QSP: dynamic text: "Let''s get you naked," <<$npcdesc>> says, pulling you inside and immediately tu...
      scene.text(`"Let's get you naked," ${((st as any).npcdesc ?? '')} says, pulling you inside and immediately tugging at your clothes.`);
    } else {
      scene.text('"Come on in," he says, and leads you inside.');
    }
    qspGoto(st, 'sex_ev_clothing', 'undress_menu');
  } },
      { label: 'Shut up and let\'s fuck', handler: (st: GameState) => {
    if (((st as any).npc_apt_type ?? 0)?.[String((st as any).npcID ?? 0)] < 3) {
      scene.text('"Shut up and fuck me already," you say, putting your hands on his chest and pushing him inside towards the bed. "I\'m here to fuck. So let\'s fuck."');
    } else {
      scene.text('"Shut up and fuck me already," you say, putting your hands on his chest and pushing him inside towards the bedroom. "I\'m here to fuck. So let\'s fuck."');
    }
    qspGoto(st, 'sex_ev_clothing', 'undress_menu');
  } },
    ]);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterImmediateBreakup(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterCouldntWait(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Couldn\'t wait', handler: (st: GameState) => {
    scene.text('"I couldn\'t wait," you grin. "<i>Can\'t</i> wait. Bedroom?"');
    scene.text('"Bedroom," he nods and drags you inside.');
    scene.actions([
      { label: 'Clothes. Off. Now.', goto: ['sex_ev_clothing', 'frantic_undress'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterFuckOrWhat(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Are we going to fuck or what?', handler: (st: GameState) => {
    scene.text('"So are are we going to fuck or are you going just to keep standing there?" you grin.');
    // TODO-QSP: dynamic text: <<$npcdesc>> doesn''t say anything, instead grabbing you by the arms and draggin...
    scene.text(`${((st as any).npcdesc ?? '')} doesn't say anything, instead grabbing you by the arms and dragging you inside.`);
    scene.actions([
      { label: 'Clothes. Off. Now.', goto: ['sex_ev_clothing', 'frantic_undress'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterFbSweaty(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_gymrat ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_apt_spare ?? 0)?.[String((s as any).npcID ?? 0)] === 'gym') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFuckOrWhat(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspCall(s, 'sex_ev_shower', 'before_borrow_shower');
  } else {
    scene.text('"And you couldn\'t take a shower first?"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCouldntWait(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspCall(s, 'sex_ev_shower', 'before_borrow_shower');
  }
  // TODO-QSP: end
  scene.build();
}

function enterFbUninvitedStart(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBegin(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLoverHomeImgInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: $sex_ev['hall_way']
  scene.text('You knock on the door and you hear the latch unlock and the door swings open.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterImmediateBreakup(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'I was in the neighborhood', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Hey," you smile at <<$npcdesc>> who blinks in surprise. "I was in the neighborh...
    scene.text(`"Hey," you smile at ${((st as any).npcdesc ?? '')} who blinks in surprise. "I was in the neighborhood and I started thinking about you, wondering if you wanted to fool around some...?"`);
    if (((st as any).npc_booty_call_date ?? 0)?.[String((st as any).npcID ?? 0)] === ((st as any).daystart ?? 0)) {
      scene.text('"I was just about to text you," he grins.');
      scene.text('So am I coming in or what?" you grin back.');
    } else {
      scene.text('"You couldn\'t have called first?"');
      scene.text('You shrug.');
      scene.text('"Wanted to surprise you. So am I coming in or what?"');
    }
    if ((Math.floor(Math.random() * 10) + 1) < ((st as any).npc_sexdrive ?? 0)?.[String((st as any).npcID ?? 0)]) {
      if (((st as any).npc_humor ?? 0)?.[String((st as any).npcID ?? 0)] === 'perverted'  &&  ((st as any).npc_cum_pref ?? 0)?.[String((st as any).npcID ?? 0)] === 'creampie') {
        scene.text('"I\'m the only one who\'s gonna be coming inside," he says, leering at your ass as he steps aside to let you in.');
      } else {
        if (((st as any).npc_humor ?? 0)?.[String((st as any).npcID ?? 0)] === 'perverted'  &&  ((st as any).npc_cum_pref ?? 0)?.[String((st as any).npcID ?? 0)] === 'mouth') {
          scene.text('"I\'m the only one who\'s gonna be coming inside," he says, leering at your ass as he steps aside to let you in. "In your mouth that is."');
        } else {
          if (((st as any).npc_booty_call_date ?? 0)?.[String((st as any).npcID ?? 0)] === ((st as any).daystart ?? 0)) {
            scene.text('"As long as those clothes are coming off in the next 10 seconds," he says, leering at your ass as he steps aside to let you in.');
          } else {
            scene.text('"Well I won\'t say no to a free fuck," he smirks, stepping aside to let you in and leering at your ass as you walk past.');
          }
        }
      }
      qspGoto(st, 'sex_ev_clothing', 'undress_menu');
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterUninvitedDeny(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
    { label: 'Surprise!', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 10) + 1) < ((st as any).npc_sexdrive ?? 0)?.[String((st as any).npcID ?? 0)]) {
      // TODO-QSP: dynamic text: "Surprise!" you shout gleefully at a startled <<$npcdesc>>. "Just happened to be...
      scene.text(`"Surprise!" you shout gleefully at a startled ${((st as any).npcdesc ?? '')}. "Just happened to be walking by and I thought I might drop in, see if you wanted to fool around?" You grin at him, bouncing your eyebrows suggestively.`);
      scene.text('"Well I won\'t say no if that\'s what you want," he smirks, stepping aside to let you in and leering at your ass as you walk past.');
      qspGoto(st, 'sex_ev_clothing', 'undress_menu');
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterUninvitedDeny(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
    { label: 'I need a good fuck', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 10) + 1) < ((st as any).npc_sexdrive ?? 0)?.[String((st as any).npcID ?? 0)]) {
      // TODO-QSP: dynamic text: <<$npcdesc>> stands there startled as you step forward, putting your hand on his...
      scene.text(`${((st as any).npcdesc ?? '')} stands there startled as you step forward, putting your hand on his chest.`);
      scene.text('"I need a good fuck and I need it right now," you say.');
      scene.text('A moment passes with you staring into his eyes with a smouldering gaze before he drags you inside, slamming the door behind you.');
      qspGoto(st, 'sex_ev_clothing', 'undress_menu');
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterUninvitedDeny(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
  ]);
  scene.build();
}

function enterUninvitedDeny(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_no_booty_call = (s as any).npc_no_booty_call ?? {})[String((s as any).npcID ?? 0)] = ((s as any).daystart ?? 0);
  // TODO-QSP: dynamic text: "You should''ve texted," <<$npcdesc>> says shaking his head. "I''m not in the mo...
  scene.text(`"You should've texted," ${((s as any).npcdesc ?? '')} says shaking his head. "I'm not in the mood, maybe some other time."`);
  scene.text('He closes the door on you abruptly and you\'re left standing outside horny and alone.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc');
  } },
  ]);
  scene.build();
}

function enterGirlfriendSurprise1(s: GameState, scene: SceneBuilder): void {
  scene.text('You knock on the door and you hear the latch unlock and the door swings open.');
  if (((s as any).drunk ?? 0) === 1) {
    scene.actions([
      { label: 'Guess who\'s drunk!' }, // TODO-QSP: empty action body
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'I was in the neighborhood', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Hey, I was in the neighborhood-" you start to smile and freeze when you realize...
    scene.text(`"Hey, I was in the neighborhood-" you start to smile and freeze when you realize it's not ${((st as any).npcdesc ?? '')}, but another woman standing in front of you.`);
  } },
    { label: 'Surprise!', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Surprise!" you shout gleefully at a startled <<$npcdesc>>. "Just happened to be...
    scene.text(`"Surprise!" you shout gleefully at a startled ${((st as any).npcdesc ?? '')}. "Just happened to be walking by and I thought I might drop in, see if you wanted to fool around?" You grin at him, bouncing your eyebrows suggestively.`);
    scene.text('"Well I won\'t say no if that\'s what you want," he smirks, stepping aside to let you in and leering at your ass as you walk past.');
    qspGoto(st, 'sex_ev_clothing', 'undress_menu');
  } },
    { label: 'I need a good fuck', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: <<$npcdesc>> stands there startled as you step forward, putting your hand on his...
    scene.text(`${((st as any).npcdesc ?? '')} stands there startled as you step forward, putting your hand on his chest.`);
    scene.text('"I need a good fuck and I need it right now," you say.');
    scene.text('A moment passes with you staring into his eyes with a smouldering gaze before he drags you inside, slamming the door behind you.');
    qspGoto(st, 'sex_ev_clothing', 'undress_menu');
  } },
  ]);
  scene.build();
}

function enterGirlfriendSurprise2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterGirlfriendCheater1(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: You walk into <<$npcdesc>>''s apartment, you freeze as you enter seeing a woman ...
  scene.text(`You walk into ${((s as any).npcdesc ?? '')}'s apartment, you freeze as you enter seeing a woman standing there, clearly not expecting someone else to arrive here today.`);
  scene.text('woman: "who are you?"');
  // TODO-QSP: dynamic text: <<$pcs_nickname>>: "Uhm, I''m <<$pcs_nickname>>, I''m here to see <<$npcdesc>>.
  scene.text(`${((s as any).pcs_nickname ?? '')}: "Uhm, I'm ${((s as any).pcs_nickname ?? '')}, I'm here to see ${((s as any).npcdesc ?? '')}.`);
  scene.text('The woman looks at you questiongly, wondering why you\'re here and how you got a key to the apartment. looking at her face you see she it\'s dawning on here why you\'re here.');
  // TODO-QSP: dynamic text: "oh fuck" you think inwardly realizing this is either another one of <<$npcdesc>...
  scene.text(`"oh fuck" you think inwardly realizing this is either another one of ${((s as any).npcdesc ?? '')} fuckbuddies who didn't know he was fucking other girls or this is a girlfriend.`);
  scene.text('"why?" she says with a hint of poison to her words');
  // TODO-QSP: dynamic text: <<$pcs_nickname>>: "ehhh, I''m just here to..."
  scene.text(`${((s as any).pcs_nickname ?? '')}: "ehhh, I'm just here to..."`);
  // TODO-QSP: end
  scene.build();
}

function enterStartingRoute(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_alko ?? 0)?.[String((s as any).npcID ?? 0)] >= ((s as any).npc_alko_limit ?? 0)?.[String((s as any).npcID ?? 0)]  &&  ((s as any).npc_alko_limit ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    qspGoto(s, 'sex_ev_start', 'whiskey_dick');
  } else {
    if (((s as any).sex_ev ?? 0)?.['loc'] !== 'pc_home'  ||  ((s as any).home ?? 0)?.['current'] !== 'parents_home') {
      scene.actions([
        { label: 'Go to the bed', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_foreplay', 'bed_start'
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Go to your bed', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_foreplay', 'bed_start'
  } },
        { label: 'Go to Anya\'s bed', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_choice'] = 'anya_bed'
    // TODO-QSP: sisterQW['sex_bed_count'] += 1
    // TODO-QSP: sisterQW['sex_bed'] = daystart
    // TODO-QSP: xgt 'sex_ev_foreplay', 'bed_start'
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterImmediateBreakup(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: act'Break up with <<$npc_usedname[$npcID]>>':
  if (((s as any).npcRelat ?? 0) === 'boyfriend') {
    scene.text('"I just came over to tell you I\'m breaking up with you."');
    scene.text('"What?!');
  } else {
    scene.text('"I just came over to tell you we\'re through."');
    scene.text('"What are you talking about?"');
  }
  qspCall(s, 'sex_ev_leave', 'breakup_mid');
  // TODO-QSP: end
  // TODO-QSP: end
  scene.build();
}

function enterPreReaction(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
    // TODO-QSP: dynamic text: <<$npcdesc>>''s pants drop, revealing... what the fuck? Is that a micropenis?
    scene.text(`${((s as any).npcdesc ?? '')}'s pants drop, revealing... what the fuck? Is that a micropenis?`);
    scene.text('It\'s basically the same size as your little finger.');
  } else {
    if (((s as any).dick_desc ?? 0) === 'chode') {
      // TODO-QSP: dynamic text: <<$npcdesc>> pumps his short cock in and out of you slowly, focusing more on tec...
      scene.text(`${((s as any).npcdesc ?? '')} pumps his short cock in and out of you slowly, focusing more on technique than speed. Soft squelching comes from between your legs, a little wetter sounding than usual, probably on account of your period. But the added lubrication is welcome and his chode slips in and out of you with ease.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'skinny') {
        // TODO-QSP: dynamic text: <<$npcdesc>> pumps his skinny dick in and out of you slowly, focusing more on te...
        scene.text(`${((s as any).npcdesc ?? '')} pumps his skinny dick in and out of you slowly, focusing more on technique than speed. Soft squelching comes from between your legs, a little wetter sounding than usual, probably on account of your period. But the added lubrication is welcome and his slim cock slips in and out of you with ease.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'normal') {
          // TODO-QSP: dynamic text: <<$npcdesc>> pumps his dick in and out of you slowly, focusing more on technique...
          scene.text(`${((s as any).npcdesc ?? '')} pumps his dick in and out of you slowly, focusing more on technique than speed. Soft squelching comes from between your legs, a little wetter sounding than usual, probably on account of your period. But the added lubrication is welcome and his cock slips in and out of you with ease.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'thick') {
            // TODO-QSP: dynamic text: <<$npcdesc>> pumps his dick in and out of you slowly, focusing more on technique...
            scene.text(`${((s as any).npcdesc ?? '')} pumps his dick in and out of you slowly, focusing more on technique than speed. Soft squelching comes from between your legs, a little wetter sounding than usual, probably on account of your period. But the added lubrication is welcome and his thick cock slips in and out of you with ease.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'long') {
              // TODO-QSP: dynamic text: <<$npcdesc>> pumps his dick in and out of you slowly, focusing more on technique...
              scene.text(`${((s as any).npcdesc ?? '')} pumps his dick in and out of you slowly, focusing more on technique than speed. Soft squelching comes from between your legs, a little wetter sounding than usual, probably on account of your period. But his dick is so long that it barely fits inside you, so the added lubrication is more than welcome.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'huge') {
                // TODO-QSP: dynamic text: <<$npcdesc>> pumps his dick in and out of you slowly, focusing more on technique...
                scene.text(`${((s as any).npcdesc ?? '')} pumps his dick in and out of you slowly, focusing more on technique than speed. Soft squelching comes from between your legs, a little wetter sounding than usual, probably on account of your period. But you still gasp with every thrust, his huge cock filling you up with every thrust, so the added lubrication is more than welcome.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'enormous') {
                  // TODO-QSP: dynamic text: <<$npcdesc>> pumps his dick in and out of you slowly, focusing more on technique...
                  scene.text(`${((s as any).npcdesc ?? '')} pumps his dick in and out of you slowly, focusing more on technique than speed. Soft squelching comes from between your legs, a little wetter sounding than usual, probably on account of your period. But you still gasp with every thrust, his huge cock filling you up with every thrust, so the added lubrication is more than welcome.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'lengthy') {
                    // TODO-QSP: dynamic text: <<$npcdesc>> pumps his dick in and out of you slowly, focusing more on technique...
                    scene.text(`${((s as any).npcdesc ?? '')} pumps his dick in and out of you slowly, focusing more on technique than speed. Soft squelching comes from between your legs, a little wetter sounding than usual, probably on account of your period. But his cock is so long that he bumps against your cervix with every thrust, so the added lubrication is more than welcome.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'gigantic') {
                      // TODO-QSP: dynamic text: <<$npcdesc>> pumps his dick in and out of you slowly, focusing more on technique...
                      scene.text(`${((s as any).npcdesc ?? '')} pumps his dick in and out of you slowly, focusing more on technique than speed. Loud squelching comes from between your legs, a little wetter sounding than usual, probably on account of your period. But his gigantic cock is so big that he fills you to the brim with every thrust, so the added lubrication is more than welcome.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'monstrous') {
                        // TODO-QSP: dynamic text: <<$npcdesc>> pumps his dick in and out of you slowly, focusing more on technique...
                        scene.text(`${((s as any).npcdesc ?? '')} pumps his dick in and out of you slowly, focusing more on technique than speed. Loud squelching comes from between your legs, a little wetter sounding than usual, probably on account of your period. But his monstrous cock is so big that he nearly splits you in half with every thrust, so the added lubrication is more than welcome.`);
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
  // TODO-QSP: end
  scene.build();
}

function enterBedStart(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 2) + 0) === 1) {
    if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_pussyeater ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'sex_ev_foreplay', 'generous_initiative');
    } else {
      if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        qspCall(s, 'sex_ev_foreplay', 'selfish_initiative');
      } else {
        if ((Math.floor(Math.random() * 2) + 0) === 1) {
          qspCall(s, 'sex_ev_foreplay', 'generous_initiative');
        } else {
          qspCall(s, 'sex_ev_foreplay', 'selfish_initiative');
        }
      }
    }
  } else {
    qspCall(s, 'sex_ev_foreplay', 'foreplay_choose');
  }
  // TODO-QSP: end
  scene.build();
}

function enterMeyHomeStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npcRelat ?? 0) !== 'stranger') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHookupInitiate(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['bed_room'] = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/resident/meynolds/guestroom.jpg"></center>';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['bath_room'] = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/hotel/hotel.room.best1.jpg"></center>';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['kitchen_room'] = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/resident/meynolds/kitchen.jpg"></center>';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['living_room'] = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/resident/meynolds/hall.jpg"></center>';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['hall_way'] = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/resident/meynolds/corridor.jpg"></center>';
  qspCall(s, 'vicky_meynold_schedule', '');
  qspCall(s, 'katja_meynold_schedule', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBegin(s, scene); (s as any).locArgs = __savedLocArgs; }
  if ((((s as any).locat ?? 0)?.['Vicky'] === 9  ||  ((s as any).locat ?? 0)?.['Vicky'] === 12  ||  ((s as any).locat ?? 0)?.['Vicky'] === 13  ||  ((s as any).locat ?? 0)?.['Vicky'] === 15)  &&  (((s as any).locat ?? 0)?.['katja'] === 7  ||  ((s as any).locat ?? 0)?.['katja'] === 9)) {
  } else {
    if (((s as any).locat ?? 0)?.['Vicky'] === 9  ||  ((s as any).locat ?? 0)?.['Vicky'] === 12  ||  ((s as any).locat ?? 0)?.['Vicky'] === 13  ||  ((s as any).locat ?? 0)?.['Vicky'] === 15) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMeyVickySpot(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).locat ?? 0)?.['katja'] === 7  ||  ((s as any).locat ?? 0)?.['katja'] === 9) {
      }
    }
  }
  qspGoto(s, 'sex_ev_clothing', 'undress_menu');
  // TODO-QSP: end
  scene.build();
}

function enterMeyVickySpot(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $sex_ev['hall_way']
  // TODO-QSP: dynamic text: You lead <<$npcdesc>> into the Meynold''s home.
  scene.text(`You lead ${((s as any).npcdesc ?? '')} into the Meynold's home.`);
  if (((s as any).locat ?? 0)?.['Vicky'] === 15) {
    if ((Math.floor(Math.random() * 2) + 1) === 1) {
      scene.text('At that moment, Vicky comes tearing around the corner, her face pressed up against Vanya\'s and arms wrapped around his neck as he slams her into the wall with a thud.');
      scene.text('"Oh! Oh <i>-fuck~!</i>" she moans as he thrusts his hand under her skirt. "Baby, I need you inside me now!"');
      scene.text('The two of them stagger off down the hall towards Vicky\'s room, apparently too caught up in each other to even notice you brought a guy home.');
    } else {
      scene.text('At that moment, Vicky comes strolling around the corner, her arm in Vanya\'s, giggling at something he said. She spots you out of the corner of her eye and pulls up short in surprise.');
      // TODO-QSP: dynamic text: "Oh! <<$pcs_nickname>>! Is this a boytoy of yours?"
      scene.text(`"Oh! ${((s as any).pcs_nickname ?? '')}! Is this a boytoy of yours?"`);
      scene.text('"Yeah," you admit, somewhat embarrassed. She just smirks back in turn.');
      // TODO-QSP: dynamic text: "Well I don''t want to get in your way. Make sure you pork her good!" Vicky says...
      scene.text(`"Well I don't want to get in your way. Make sure you pork her good!" Vicky says, winking at ${((s as any).npcdesc ?? '')}. "She deserves it. If you don't I'm gonna make sure I hear all about it later!"`);
      scene.text('And with that, she and Vayna continue on to some other part of the house.');
    }
  } else {
    scene.text('At that moment Vicky just happens to come strolling around the corner giggling at something she sees on her phone when she spots you.');
    scene.text('"Oh!" she squeaks as a hand comes up to her mouth, covering an obvious smile. "');
    // TODO-QSP: dynamic text: "Oh! <<$pcs_nickname>>! Is this a boytoy of yours?"
    scene.text(`"Oh! ${((s as any).pcs_nickname ?? '')}! Is this a boytoy of yours?"`);
    scene.text('"Yeah," you admit, somewhat embarrassed. She just smirks back in turn.');
    if (((s as any).vicky_know_bc ?? 0) === 'shot') {
      qspCall(s, 'sex_ev_stats', 'birth_control');
      scene.text('"Well I don\'t want to get in your way. Make sure you pork her good!" Vicky smiles cheerfully. She leans in for a stage whisper. "She\'s on the shot, so feel free to cum inside her as much as you like."');
      scene.actions([
        { label: 'Embarrassed!', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['hall_way']
    scene.text('"Vicky!" you hiss, a hot flush running up your neck.');
    // TODO-QSP: dynamic text: She doesn''t have the slightest appearance of shame as she winks at <<$npcdesc>>...
    scene.text(`She doesn't have the slightest appearance of shame as she winks at ${((st as any).npcdesc ?? '')} instead and walks away while blowing a kiss.`);
    // TODO-QSP: dynamic text: Not wanting any more run-ins with the Meynolds, you hustle <<$npcdesc>> into you...
    scene.text(`Not wanting any more run-ins with the Meynolds, you hustle ${((st as any).npcdesc ?? '')} into your bedroom.`);
    qspGoto(st, 'sex_ev_clothing', 'undress_menu');
  } },
        { label: 'Just smile', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['hall_way']
    // TODO-QSP: dynamic text: You don''t have anything to add to that and just smile at Vicky as she winks at ...
    scene.text(`You don't have anything to add to that and just smile at Vicky as she winks at ${((st as any).npcdesc ?? '')} and walks away, blowing a kiss at you just before turning the corner. After that, you pull ${((st as any).npcdesc ?? '')} into your room.`);
    qspGoto(st, 'sex_ev_clothing', 'undress_menu');
  } },
        { label: 'That is <i>not</i> permission', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['hall_way']
    // TODO-QSP: dynamic text: "Wait, hold-" You turn quickly, wagging a stern finger in front of <<$npcdesc>>....
    scene.text(`"Wait, hold-" You turn quickly, wagging a stern finger in front of ${((st as any).npcdesc ?? '')}. "That is <i>not</i> permission to cum inside me!"`);
    // TODO-QSP: dynamic text: As you turn back towards Vicky, she winks at <<$npcdesc>> and walks away, blowin...
    scene.text(`As you turn back towards Vicky, she winks at ${((st as any).npcdesc ?? '')} and walks away, blowing a kiss at you just before turning the corner and you pull ${((st as any).npcdesc ?? '')} into your room.`);
    qspGoto(st, 'sex_ev_clothing', 'undress_menu');
  } },
      ]);
    } else {
      if (((s as any).vicky_know_bc ?? 0) === 'pill') {
        qspCall(s, 'sex_ev_stats', 'birth_control');
        scene.text('"Well I don\'t want to get in your way. Make sure you pork her good!" Vicky smiles cheerfully. She leans in for a stage whisper. "She\'s on the pill, so feel free to cum inside her as much as you like."');
        scene.actions([
          { label: 'Embarrassed!', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['hall_way']
    scene.text('"Vicky!" you hiss, a hot flush running up your neck.');
    // TODO-QSP: dynamic text: She doesn''t have the slightest appearance of shame as she winks at <<$npcdesc>>...
    scene.text(`She doesn't have the slightest appearance of shame as she winks at ${((st as any).npcdesc ?? '')} instead and walks away while blowing a kiss.`);
    // TODO-QSP: dynamic text: Not wanting any more run-ins with the Meynolds, you hustle <<$npcdesc>> into you...
    scene.text(`Not wanting any more run-ins with the Meynolds, you hustle ${((st as any).npcdesc ?? '')} into your bedroom.`);
    qspGoto(st, 'sex_ev_clothing', 'undress_menu');
  } },
          { label: 'Just smile', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['hall_way']
    // TODO-QSP: dynamic text: You don''t have anything to add to that and just smile at Vicky as she winks at ...
    scene.text(`You don't have anything to add to that and just smile at Vicky as she winks at ${((st as any).npcdesc ?? '')} and walks away, blowing a kiss at you just before turning the corner. After that, you pull ${((st as any).npcdesc ?? '')} into your room.`);
    qspGoto(st, 'sex_ev_clothing', 'undress_menu');
  } },
          { label: 'That is <i>not</i> permission', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['hall_way']
    // TODO-QSP: dynamic text: "Wait, hold-" You turn quickly, wagging a stern finger in front of <<$npcdesc>>....
    scene.text(`"Wait, hold-" You turn quickly, wagging a stern finger in front of ${((st as any).npcdesc ?? '')}. "That is <i>not</i> permission to cum inside me!"`);
    // TODO-QSP: dynamic text: As you turn back towards Vicky, she winks at <<$npcdesc>> and walks away, blowin...
    scene.text(`As you turn back towards Vicky, she winks at ${((st as any).npcdesc ?? '')} and walks away, blowing a kiss at you just before turning the corner and you pull ${((st as any).npcdesc ?? '')} into your room.`);
    qspGoto(st, 'sex_ev_clothing', 'undress_menu');
  } },
        ]);
      } else {
        // TODO-QSP: dynamic text: "Well I don''t want to get in your way. Make sure you pork her good!" Vicky says...
        scene.text(`"Well I don't want to get in your way. Make sure you pork her good!" Vicky says, winking at ${((s as any).npcdesc ?? '')}. "She deserves it. If you don't I'm gonna make sure I hear all about it later!"`);
        // TODO-QSP: dynamic text: And with that, she walks off to some other part of the house and you drag <<$npc...
        scene.text(`And with that, she walks off to some other part of the house and you drag ${((s as any).npcdesc ?? '')} into your bedroom before she can come back.`);
        qspGoto(s, 'sex_ev_clothing', 'undress_menu');
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMeyKatjaSpot(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $sex_ev['hall_way']
  // TODO-QSP: dynamic text: You lead <<$npcdesc>> into the Meynold''s home.
  scene.text(`You lead ${((s as any).npcdesc ?? '')} into the Meynold's home.`);
  if (((s as any).locat ?? 0)?.['Vicky'] === 15) {
    if ((Math.floor(Math.random() * 2) + 1) === 1) {
      scene.text('At that moment, Vicky comes tearing around the corner, her face pressed up against Vanya\'s and arms wrapped around his neck as he slams her into the wall with a thud.');
      scene.text('"Oh! Oh <i>-fuck~!</i>" she moans as he thrusts his hand under her skirt. "Baby, I need you inside me now!"');
      scene.text('The two of them stagger off down the hall towards Vicky\'s room, apparently too caught up in each other to even notice you brought a guy home.');
    } else {
      scene.text('At that moment, Katja comes strolling around the corner, her arm in Vanya\'s, giggling at something he said. She spots you out of the corner of her eye and pulls up short in surprise.');
      // TODO-QSP: dynamic text: "Oh! <<$pcs_nickname>>! Is this a boytoy of yours?"
      scene.text(`"Oh! ${((s as any).pcs_nickname ?? '')}! Is this a boytoy of yours?"`);
      scene.text('"Yeah," you admit, somewhat embarrassed. She just smirks back in turn.');
      // TODO-QSP: dynamic text: "Well I don''t want to get in your way. Make sure you pork her good!" Vicky says...
      scene.text(`"Well I don't want to get in your way. Make sure you pork her good!" Vicky says, winking at ${((s as any).npcdesc ?? '')}. "She deserves it. If you don't I'm gonna make sure I hear all about it later!"`);
      scene.text('And with that, she and Vayna continue on to some other part of the house.');
    }
  } else {
    scene.text('At that moment Katja just happens to come strolling around the corner .');
    scene.text('"Oh!" she squeaks as a hand comes up to her mouth, covering an obvious smile. "');
    // TODO-QSP: dynamic text: "Oh! <<$pcs_nickname>>! Is this a boytoy of yours?"
    scene.text(`"Oh! ${((s as any).pcs_nickname ?? '')}! Is this a boytoy of yours?"`);
    scene.text('"Yeah," you admit, somewhat embarrassed. She just smirks back in turn.');
    // TODO-QSP: dynamic text: "Well I don''t want to get in your way. Make sure you pork her good!" Vicky says...
    scene.text(`"Well I don't want to get in your way. Make sure you pork her good!" Vicky says, winking at ${((s as any).npcdesc ?? '')}. "She deserves it. If you don't I'm gonna make sure I hear all about it later!"`);
    scene.text('And with that, she and Vayna continue on to some other part of the house.');
  }
  // TODO-QSP: end
  // TODO-QSP: --- sex_ev_start ---------------------------------
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'initiate_pre':
      enterInitiatePre(s, scene);
      break;
    case 'npcstat_init':
      enterNpcstatInit(s, scene);
      break;
    case 'neighborhood_image':
      enterNeighborhoodImage(s, scene);
      break;
    case 'exit_set':
      enterExitSet(s, scene);
      break;
    case 'lover_initiate':
      enterLoverInitiate(s, scene);
      break;
    case 'hookup_initiate':
      enterHookupInitiate(s, scene);
      break;
    case 'pc_home_img_init':
      enterPcHomeImgInit(s, scene);
      break;
    case 'lover_home_img_init':
      enterLoverHomeImgInit(s, scene);
      break;
    case 'pav_hotel_img_init':
      enterPavHotelImgInit(s, scene);
      break;
    case 'city_hotel_img_init':
      enterCityHotelImgInit(s, scene);
      break;
    case 'fb_npc_home_start':
      enterFbNpcHomeStart(s, scene);
      break;
    case 'fb_npc_home_fast_start':
      enterFbNpcHomeFastStart(s, scene);
      break;
    case 'date_npc_home_start':
      enterDateNpcHomeStart(s, scene);
      break;
    case 'date_pc_home_start':
      enterDatePcHomeStart(s, scene);
      break;
    case 'date_hotel_start':
      enterDateHotelStart(s, scene);
      break;
    case 'unique_pc_home_start':
      enterUniquePcHomeStart(s, scene);
      break;
    case 'hookup_pc_home_start':
      enterHookupPcHomeStart(s, scene);
      break;
    case 'hookup_npc_home_start':
      enterHookupNpcHomeStart(s, scene);
      break;
    case 'pc_home_start':
      enterPcHomeStart(s, scene);
      break;
    case 'npc_home_start':
      enterNpcHomeStart(s, scene);
      break;
    case 'hookup_hotel_start':
      enterHookupHotelStart(s, scene);
      break;
    case 'hotel_start':
      enterHotelStart(s, scene);
      break;
    case 'hookup_party_start':
      enterHookupPartyStart(s, scene);
      break;
    case 'unique_npc_start':
      enterUniqueNpcStart(s, scene);
      break;
    case 'unique_npc_bed_start':
      enterUniqueNpcBedStart(s, scene);
      break;
    case 'begin':
      enterBegin(s, scene);
      break;
    case 'fb_hotel_start':
      enterFbHotelStart(s, scene);
      break;
    case 'fb_invited_start':
      enterFbInvitedStart(s, scene);
      break;
    case 'couldnt_wait':
      enterCouldntWait(s, scene);
      break;
    case 'fuck_or_what':
      enterFuckOrWhat(s, scene);
      break;
    case 'fb_sweaty':
      enterFbSweaty(s, scene);
      break;
    case 'fb_uninvited_start':
      enterFbUninvitedStart(s, scene);
      break;
    case 'uninvited_deny':
      enterUninvitedDeny(s, scene);
      break;
    case 'girlfriend_surprise1':
      enterGirlfriendSurprise1(s, scene);
      break;
    case 'girlfriend_surprise2':
      enterGirlfriendSurprise2(s, scene);
      break;
    case 'girlfriend_cheater1':
      enterGirlfriendCheater1(s, scene);
      break;
    case 'starting_route':
      enterStartingRoute(s, scene);
      break;
    case 'immediate_breakup':
      enterImmediateBreakup(s, scene);
      break;
    case 'pre_reaction':
      enterPreReaction(s, scene);
      break;
    case 'bed_start':
      enterBedStart(s, scene);
      break;
    case 'mey_home_start':
      enterMeyHomeStart(s, scene);
      break;
    case 'mey_vicky_spot':
      enterMeyVickySpot(s, scene);
      break;
    case 'mey_katja_spot':
      enterMeyKatjaSpot(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sex_ev_start: LocationDef = {
  name: 'sex_ev_start',
  title: '"I was playing football when I saw your message," you shrug.',
  region: 'other',
  enter: enter,
};
