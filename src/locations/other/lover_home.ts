import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterExit(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).sex_ev ?? {}).length > 0) {
    qspCall(s, 'sex_ev_leave', 'exit');
  }
  (s as any).minut = ((s as any).minut ?? 0) + 2;
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
          if (((s as any).region ?? 0) === 'pav') {
            scene.actions([{ label: 'Continue', goto: ['pav_residential', ''] }]);
          } else {
            if (((s as any).region ?? 0) === 'pav_park') {
              scene.actions([{ label: 'Continue', goto: ['pav_park', 'start'] }]);
            } else {
              if (((s as any).region ?? 0) === 'city') {
                scene.actions([{ label: 'Continue', goto: ['city_residential', ''] }]);
              } else {
                if (((s as any).region ?? 0) === 'city_park') {
                  scene.actions([{ label: 'Continue', goto: ['city_park', 'start'] }]);
                } else {
                  if (((s as any).region ?? 0) === 'city_island') {
                    scene.actions([{ label: 'Continue', goto: ['uni_grounds', ''] }]);
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
        scene.img('images/locations/pavlovsk/pavresn_\'+ rand(1, 2) +\'.jpg');
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
  scene.build();
}

function enterDailyInit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).lover_home_init ?? 0)?.[String((s as any).npcID ?? 0)] < ((s as any).daystart ?? 0)) {
    ((s as any).lover_home_init ?? {})[String((s as any).npcID ?? 0)] = ((s as any).daystart ?? 0);
    ((s as any).lover_home_trash ?? {})[String((s as any).npcID ?? 0)] = (Math.floor(Math.random() * 2) + 0) - (((s as any).npc_diligent ?? 0)?.[String((s as any).npcID ?? 0)] + ((s as any).npc_neat ?? 0)?.[String((s as any).npcID ?? 0)]);
    ((s as any).lover_home_dirty_dishes ?? {})[String((s as any).npcID ?? 0)] = (Math.floor(Math.random() * 2) + 0) - (((s as any).npc_diligent ?? 0)?.[String((s as any).npcID ?? 0)] + ((s as any).npc_neat ?? 0)?.[String((s as any).npcID ?? 0)]);
    ((s as any).lover_home_trash ?? {})[String((s as any).npcID ?? 0)] = (Math.floor(Math.random() * 2) + 0) - (((s as any).npc_diligent ?? 0)?.[String((s as any).npcID ?? 0)] + ((s as any).npc_neat ?? 0)?.[String((s as any).npcID ?? 0)]);
    ((s as any).lover_home_trash ?? {})[String((s as any).npcID ?? 0)] = (Math.floor(Math.random() * 2) + 0) - (((s as any).npc_diligent ?? 0)?.[String((s as any).npcID ?? 0)] + ((s as any).npc_neat ?? 0)?.[String((s as any).npcID ?? 0)]);
  }
  scene.build();
}

function enterLocInit(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'lover_home', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'lover_home', 'daily_init');
  scene.build();
}

function enterDressCloth(s: GameState, scene: SceneBuilder): void {
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    if (((s as any).lastwornclothingtype ?? 0)?.['lover_ev'] !== ''  &&  ((s as any).lastwornclothingtype ?? 0)?.['lover_ev'] !== 'nude') {
      // TODO-QSP: gs 'clothing', 'wear', $lastwornclothingtype['lover_ev'], lastwornclothingnumber['lover_ev']
    }
  }
  if (((s as any).pantyworntype ?? 0) === 'none') {
    if (((s as any).lastwornpantytype ?? 0)?.['lover_ev'] !== ''  &&  ((s as any).lastwornpantytype ?? 0)?.['lover_ev'] !== 'none') {
      // TODO-QSP: gs 'panties', 'wear', $lastwornpantytype['lover_ev'], lastwornpantynumber['lover_ev']
    }
  }
  if (((s as any).braworntype ?? 0) === 'none') {
    if (((s as any).lastwornbratype ?? 0)?.['lover_ev'] !== ''  &&  ((s as any).lastwornbratype ?? 0)?.['lover_ev'] !== 'none') {
      // TODO-QSP: gs 'bras', 'wear', $lastwornbratype['lover_ev'], lastwornbranumber['lover_ev']
    }
  }
  qspCall(s, 'outfit', 'remove_backup', 'lover_ev');
  scene.actions([{ label: 'Continue', goto: ['lover_home', 'bedroom'] }]);
  scene.build();
}

function enterLocMenu(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] > 2) {
    if (((s as any).npc_apt_spare ?? 0)?.[String((s as any).npcID ?? 0)] === 'gaming') {
      scene.actions([
        { label: '<<$npcdesc>>\'s gaming room', goto: ['lover_home', 'gaming_room'] },
      ]);
    } else {
      if (((s as any).npc_apt_spare ?? 0)?.[String((s as any).npcID ?? 0)] === 'gym') {
        scene.actions([
          { label: '<<$npcdesc>>\'s home gym', goto: ['lover_home', 'home_gym'] },
        ]);
      }
    }
    scene.actions([
      { label: 'Go to the bedroom', goto: ['lover_home', 'bedroom'] },
      { label: 'Go to the bathroom', goto: ['lover_home', 'bathroom'] },
      { label: 'Go to the kitchen', goto: ['lover_home', 'kitchen'] },
      { label: 'Go to the living room', goto: ['lover_home', 'livingroom'] },
    ]);
  } else {
    if (((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
      scene.actions([
        { label: 'Move to the bed', goto: ['lover_home', 'bedroom'] },
        { label: 'Go to the bathroom', goto: ['lover_home', 'bathroom'] },
        { label: 'Use the kitchenette', goto: ['lover_home', 'kitchen'] },
        { label: 'Move to the couch', goto: ['lover_home', 'livingroom'] },
      ]);
    }
  }
  scene.actions([
    { label: 'Go to the door', goto: ['lover_home', 'hallway'] },
  ]);
  scene.build();
}

function enterFrontDoor(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) !== '') {
    qspCall(s, 'npcStat', '', ((s as any).locArgs?.[1] ?? 0));
  }
  qspCall(s, 'stat', '');
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'fuckbuddy') {
    if (((s as any).npc_last_booty_call ?? 0)?.[String((s as any).npcID ?? 0)] !== ((s as any).daystart ?? 0)) {
      if (((s as any).booty_call_invite ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).daystart ?? 0)  ||  ((s as any).npc_booty_call_date ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).daystart ?? 0)  ||  ((s as any).npc_booty_call_date ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['sex_ev_start', 'fb_invited_start'] }]);
      } else {
        if (qspFunc(s, 'lover_schedule', 'is_free', ((s as any).npcID ?? 0))  &&  ((s as any).npc_no_booty_call ?? 0)?.[String((s as any).npcID ?? 0)] !== ((s as any).daystart ?? 0)) {
          scene.actions([{ label: 'Continue', goto: ['sex_ev_start', 'fb_uninvited_start'] }]);
        }
      }
    }
  } else {
    if (qspFunc(s, 'lover_schedule', 'is_free', ((s as any).npcID ?? 0))) {
      qspCall(s, 'lover_home', 'neighborhood_image');
      // TODO-QSP: dynamic text: You knock on <<$npcdesc>>'s door and he lets you in.
      scene.text(`You knock on ${((s as any).npcdesc ?? 0)}'s door and he lets you in.`);
      return;
      scene.actions([
        { label: 'Enter', goto: ['lover_home', 'hallway'] },
      ]);
    }
  }
  if (((s as any).npc_lover_keys ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    scene.actions([{ label: 'Continue', goto: ['lover_home', 'hallway'] }]);
  }
  qspCall(s, 'lover_home', 'neighborhood_image');
  // TODO-QSP: dynamic text: You knock on <<$npcdesc>>'s door but there is no answer.
  scene.text(`You knock on ${((s as any).npcdesc ?? 0)}'s door but there is no answer.`);
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterHallway(s: GameState, scene: SceneBuilder): void {
  if (((s as any).loverhome_enter ?? 0) === 1) {
    if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    }
    (s as any).loverhome_enter = 0;
  }
  qspCall(s, 'lover_home', 'loc_init', 'hallway');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Hall</b></center>');
  // TODO-QSP: $npc_apt_hall[$npcID]
  if (((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] > 2) {
    if (((s as any).npc_apt_spare ?? 0)?.[String((s as any).npcID ?? 0)] === 'gaming') {
      scene.actions([
        { label: '<<$npcdesc>>\'s gaming room', goto: ['lover_home', 'gaming_room'] },
      ]);
    } else {
      if (((s as any).npc_apt_spare ?? 0)?.[String((s as any).npcID ?? 0)] === 'gym') {
        scene.actions([
          { label: 'Home gym', goto: ['lover_home', 'home_gym'] },
        ]);
      }
    }
    scene.actions([
      { label: 'Go to the bedroom', goto: ['lover_home', 'bedroom'] },
      { label: 'Go to the bathroom', goto: ['lover_home', 'bathroom'] },
      { label: 'Go to the kitchen', goto: ['lover_home', 'kitchen'] },
      { label: 'Go to the living room', goto: ['lover_home', 'livingroom'] },
    ]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['lover_home', 'bedroom'] }]);
  }
  scene.actions([
    { label: '</b>Leave the apartment</b>', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      scene.text('<center><b>You need to get dressed before going out.</b></center>');
      scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'curloc'); } }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['lover_home', 'exit'] }]);
    }
  } },
  ]);
  scene.build();
}

function enterBedroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'lover_home', 'loc_init', 'bedroom');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  if (((s as any).pcs_magik ?? 0) >= 6  &&  ((s as any).spellbefshild ?? 0) === 1  &&  ((s as any).tobiQW ?? 0) === 0  &&  ((s as any).npc_living_together ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    scene.actions([{ label: 'Continue', goto: ['tobiQW', 'start'] }]);
  }
  scene.text(`<center><b>${((s as any).npcdesc ?? 0)}'s Bedroom</b></center>`);
  // TODO-QSP: $npc_apt_bedroom[$npcID]
  if (((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
    // TODO-QSP: dynamic text: <<$npcdesc>>'s bedroom is basically his entire apartment. The only other room is...
    scene.text(`${((s as any).npcdesc ?? 0)}'s bedroom is basically his entire apartment. The only other room is the bathroom. A typical studio apartment.`);
  } else {
    if (((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] === 3) {
      // TODO-QSP: dynamic text: <<$npcdesc>>'s bedroom is a small cozy little space with a twin bed and all of h...
      scene.text(`${((s as any).npcdesc ?? 0)}'s bedroom is a small cozy little space with a twin bed and all of his belongings tucked around it.`);
    } else {
      if (((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] === 4) {
      } else {
        if (((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] === 5) {
          // TODO-QSP: dynamic text: <<$npcdesc>>'s bedroom is fairly large and comfortably fits a queen sized bed.
          scene.text(`${((s as any).npcdesc ?? 0)}'s bedroom is fairly large and comfortably fits a queen sized bed.`);
        } else {
          if (((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] === 6) {
          }
        }
      }
    }
  }
  // TODO-QSP: 'The <a href="exec: gt ''wardrobe'', ''start''">change of clothes</a> you brought with you sits on t...
  if (((s as any).npc_living_together ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    scene.actions([
      { label: 'Relax in bed', goto: ['bed', 'start'] },
    ]);
  } else {
    scene.actions([
      { label: 'Relax in <<$npc_usedname[$npcID]>>\'s bed', goto: ['bed', 'start'] },
    ]);
  }
  scene.actions([
    { label: 'Change rooms', handler: (st: GameState) => {
    // TODO-QSP: xgt 'lover_home', 'loc_menu'
  } },
  ]);
  scene.build();
}

function enterBathroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'lover_home', 'loc_init', 'bathroom');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  if (((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] > 2) {
    scene.actions([
      { label: 'Leave the bathroom', goto: ['lover_home', 'hallway'] },
    ]);
  } else {
    scene.actions([
      { label: 'Leave the bathroom', goto: ['lover_home', 'bedroom'] },
    ]);
  }
  scene.text(`<center><b>${((s as any).npcdesc ?? 0)}'s Bathroom</b></center>`);
  // TODO-QSP: $npc_apt_bathroom[$npcID]
  if (((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] >= 2  &&  ((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] <= 5  &&  ((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] !== 4) {
    if (((s as any).npc_neat ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      // TODO-QSP: dynamic text: <<$npcdesc>>'s bathroom is small but nice. It is noticeably clean and neat.
      scene.text(`${((s as any).npcdesc ?? 0)}'s bathroom is small but nice. It is noticeably clean and neat.`);
      scene.text('The <a href="exec: gt \'mirror\',\'start\'">mirror</a> is there for you to use if you want to <a href="exec: gt \'mirror\',\'brush\'">brush</a> your hair or put on your makeup.');
    } else {
      if (((s as any).npc_messy ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        // TODO-QSP: dynamic text: <<$npcdesc>>'s bathroom is small and noticeably messy, with various stains cover...
        scene.text(`${((s as any).npcdesc ?? 0)}'s bathroom is small and noticeably messy, with various stains covering the porcelain and toiletries scattered haphazardly across the sink.`);
        scene.text('A dirty <a href="exec: gt \'mirror\',\'start\'">mirror</a> is there for you to use if you want to <a href="exec: gt \'mirror\',\'brush\'">brush</a> your hair or put on your makeup.');
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>>'s bathroom is what you'd expect from him. Not super clean, but not ...
        scene.text(`${((s as any).npcdesc ?? 0)}'s bathroom is what you'd expect from him. Not super clean, but not super messy either. A boy's bathroom.`);
        scene.text('The <a href="exec: gt \'mirror\',\'start\'">mirror</a> is there for you to use if you want to <a href="exec: gt \'mirror\',\'brush\'">brush</a> your hair or put on your makeup.');
      }
    }
  } else {
    if (((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] === 4) {
      // TODO-QSP: dynamic text: <<$npcdesc>>'s bathroom has the belongings of multiple people scattered around t...
      scene.text(`${((s as any).npcdesc ?? 0)}'s bathroom has the belongings of multiple people scattered around the room.`);
      scene.text('The <a href="exec: gt \'mirror\',\'start\'">mirror</a> is there for you to use if you want to <a href="exec: gt \'mirror\',\'brush\'">brush</a> your hair or put on your makeup.');
    } else {
      if (((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] === 6) {
        if (((s as any).npc_neat ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
          // TODO-QSP: dynamic text: <<$npcdesc>>'s bathroom is luxurious. It is noticeably clean and neat.
          scene.text(`${((s as any).npcdesc ?? 0)}'s bathroom is luxurious. It is noticeably clean and neat.`);
          scene.text('The <a href="exec: gt \'mirror\',\'start\'">mirror</a> is there for you to use if you want to <a href="exec: gt \'mirror\',\'brush\'">brush</a> your hair or put on your makeup.');
        } else {
          if (((s as any).npc_messy ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
            // TODO-QSP: dynamic text: <<$npcdesc>>'s bathroom is luxurious and noticeably messy, with various stains c...
            scene.text(`${((s as any).npcdesc ?? 0)}'s bathroom is luxurious and noticeably messy, with various stains covering the porcelain and toiletries scattered haphazardly across the sink.`);
            scene.text('A dirty <a href="exec: gt \'mirror\',\'start\'">mirror</a> is there for you to use if you want to <a href="exec: gt \'mirror\',\'brush\'">brush</a> your hair or put on your makeup.');
          } else {
            // TODO-QSP: dynamic text: <<$npcdesc>>'s bathroom luxurious.
            scene.text(`${((s as any).npcdesc ?? 0)}'s bathroom luxurious.`);
            scene.text('The <a href="exec: gt \'mirror\',\'start\'">mirror</a> is there for you to use if you want to <a href="exec: gt \'mirror\',\'brush\'">brush</a> your hair or put on your makeup.');
          }
        }
      }
    }
  }
  qspCall(s, 'din_van', 'private');
  scene.build();
}

function enterKitchen(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'lover_home', 'loc_init', 'kitchen');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  (s as any).elektro = ((s as any).elektro ?? 0) + (1);
  qspCall(s, 'kit_din', '');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text(`<center><b>${((s as any).npcdesc ?? 0)}'s Kitchen</b></center>`);
  // TODO-QSP: $npc_apt_kitchen[$npcID]
  if (((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
    if (((s as any).npc_neat ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      // TODO-QSP: dynamic text: <<$npcdesc>>'s kitchen a neatly kept corner of his room with all of the applianc...
      scene.text(`${((s as any).npcdesc ?? 0)}'s kitchen a neatly kept corner of his room with all of the appliances and dishes well organized in an efficient manner.`);
    } else {
      if (((s as any).npc_messy ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        // TODO-QSP: dynamic text: <<$npcdesc>>'s kitchen is a disorganized mess in the corner of his room with app...
        scene.text(`${((s as any).npcdesc ?? 0)}'s kitchen is a disorganized mess in the corner of his room with appliances and dishes seemingly thrown at random all over the place.`);
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>>'s kitchen is little more than a corner of his room.
        scene.text(`${((s as any).npcdesc ?? 0)}'s kitchen is little more than a corner of his room.`);
      }
    }
    scene.text('It has a kettle, burners, pots and pans, an oven, and everything you\'d need to make a simple meal.');
  } else {
    if (((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] === 3) {
      if (((s as any).npc_neat ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        // TODO-QSP: dynamic text: <<$npcdesc>>'s kitchen is a cramped room with little counter space and a table t...
        scene.text(`${((s as any).npcdesc ?? 0)}'s kitchen is a cramped room with little counter space and a table that barely fits, but he seems to make it work. All of the appliances and dishes well organized in an efficient manner which probably helps a lot when you need to cook something.`);
      } else {
        if (((s as any).npc_messy ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          // TODO-QSP: dynamic text: <<$npcdesc>>'s kitchen is a cramped room with little counter space and a table t...
          scene.text(`${((s as any).npcdesc ?? 0)}'s kitchen is a cramped room with little counter space and a table that barely fits, but he seems to make it work. Though the way all of the appliances and dishes are seemingly thrown at random around the room probably doesn't help.`);
        } else {
          // TODO-QSP: dynamic text: <<$npcdesc>>'s kitchen is a cramped room with little counter space and a table t...
          scene.text(`${((s as any).npcdesc ?? 0)}'s kitchen is a cramped room with little counter space and a table that barely fits, but he seems to make it work.`);
        }
      }
    } else {
      if (((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] === 4) {
      } else {
        if (((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] === 5) {
          // TODO-QSP: dynamic text: <<$npcdesc>>'s kitchen is nice with quality appliances and plenty of counter spa...
          scene.text(`${((s as any).npcdesc ?? 0)}'s kitchen is nice with quality appliances and plenty of counter space to work with.`);
        } else {
          if (((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] === 6) {
          }
        }
      }
    }
  }
  if (((s as any).lover_home_dirty_dishes ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    scene.text('A bunch of dirty dishes are stacked haphazardly in the sink.');
  } else {
    scene.text('The counter is clean with dishes neatly stacked in the cupboards.');
  }
  if (((s as any).lover_home_trash ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    scene.actions([
      { label: 'Take out <<$npcdesc>>\'s trash',  },
    ]);
  }
  scene.actions([
    { label: 'Change rooms', handler: (st: GameState) => {
    // TODO-QSP: xgt 'lover_home', 'loc_menu'
  } },
  ]);
  scene.build();
}

function enterLivingroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'lover_home', 'loc_init', 'livingroom');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text(`<center><b>${((s as any).npcdesc ?? 0)}'s Living Room</b></center>`);
  // TODO-QSP: $npc_apt_livingroom[$npcID]
  if (((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
    // TODO-QSP: dynamic text: <<$npcdesc>> has a tiny TV and a couch in the corner of his bedroom.
    scene.text(`${((s as any).npcdesc ?? 0)} has a tiny TV and a couch in the corner of his bedroom.`);
  } else {
    if (((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] === 3) {
      // TODO-QSP: dynamic text: <<$npcdesc>> doesn't have much in his living room, but at least he's got a couch...
      scene.text(`${((s as any).npcdesc ?? 0)} doesn't have much in his living room, but at least he's got a couch and a TV.`);
    } else {
      if (((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] === 4) {
      } else {
        if (((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] === 5) {
          // TODO-QSP: dynamic text: <<$npcdesc>> has a comfy couch and a nice big TV.
          scene.text(`${((s as any).npcdesc ?? 0)} has a comfy couch and a nice big TV.`);
        } else {
          if (((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] === 6) {
          }
        }
      }
    }
  }
  scene.actions([
    { label: 'Change rooms', handler: (st: GameState) => {
    // TODO-QSP: xgt 'lover_home', 'loc_menu'
  } },
    { label: 'Watch TV',  },
  ]);
  scene.build();
}

function enterGamingRoom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'lover_home', 'loc_init', 'gaming_room');
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${((s as any).npcdesc ?? 0)}'s Gaming Room</b></center>`);
  // TODO-QSP: $npc_apt_spare[$npcID]
  // TODO-QSP: dynamic text: <<$npcdesc>> has a nice desk, chair, and computer.
  scene.text(`${((s as any).npcdesc ?? 0)} has a nice desk, chair, and computer.`);
  scene.actions([
    { label: 'Change rooms', handler: (st: GameState) => {
    // TODO-QSP: xgt 'lover_home', 'loc_menu'
  } },
  ]);
  scene.build();
}

function enterHomeGym(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'lover_home', 'loc_init', 'home_gym');
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${((s as any).npcdesc ?? 0)}'s Home Gym</b></center>`);
  // TODO-QSP: $npc_apt_spare[$npcID]
  // TODO-QSP: dynamic text: <<$npcdesc>> has a home gym.
  scene.text(`${((s as any).npcdesc ?? 0)} has a home gym.`);
  scene.actions([
    { label: 'Change rooms', handler: (st: GameState) => {
    // TODO-QSP: xgt 'lover_home', 'loc_menu'
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
    case 'neighborhood_image':
      enterNeighborhoodImage(s, scene);
      break;
    case 'daily_init':
      enterDailyInit(s, scene);
      break;
    case 'loc_init':
      enterLocInit(s, scene);
      break;
    case 'dress_cloth':
      enterDressCloth(s, scene);
      break;
    case 'loc_menu':
      enterLocMenu(s, scene);
      break;
    case 'front_door':
      enterFrontDoor(s, scene);
      break;
    case 'hallway':
      enterHallway(s, scene);
      break;
    case 'bedroom':
      enterBedroom(s, scene);
      break;
    case 'bathroom':
      enterBathroom(s, scene);
      break;
    case 'kitchen':
      enterKitchen(s, scene);
      break;
    case 'livingroom':
      enterLivingroom(s, scene);
      break;
    case 'gaming_room':
      enterGamingRoom(s, scene);
      break;
    case 'home_gym':
      enterHomeGym(s, scene);
      break;
    default:
      enterExit(s, scene);
      break;
  }
}

export const lover_home: LocationDef = {
  name: 'lover_home',
  title: 'Hall',
  region: 'other',
  locationType: 'kitchen',
  locclass: 'livingr',
  enter: enter,
};
