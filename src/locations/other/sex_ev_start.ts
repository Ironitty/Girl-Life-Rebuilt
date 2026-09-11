import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterInitiatePre(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['locat'] = ((s as any).locArgs?.[2] ?? 0);
  qspCall(s, 'sex_ev_start', 'npcstat_init', ((s as any).locArgs?.[1] ?? 0));
  ((s as any).sex_ev ?? {})['npc_stam'] = (30 * (2 * ((s as any).npc_vital ?? 0) + ((s as any).npc_agil ?? 0) + ((s as any).npc_stren ?? 0)) + 1000) / 13;
  qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'hair_color');
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== ''  &&  ((s as any).ngpPrefResult ?? 0)?.['NotPos'] !== ''  &&  ((s as any).pcs_haircol ?? 0) <= 3) {
    ((s as any).sex_ev ?? {})['boy_likes_hair'] = 1;
  }
  if (((s as any).sex_ev ?? 0)?.['locat'] === 'npc_home') {
    qspCall(s, 'sex_ev_start', 'lover_home_img_init');
  } else {
    if (((s as any).sex_ev ?? 0)?.['locat'] === 'hotel') {
      qspCall(s, 'sex_ev_start', '<<$region>>_hotel_img_init');
    } else {
      if (((s as any).sex_ev ?? 0)?.['locat'] === 'pc_home') {
        qspCall(s, 'sex_ev_start', 'pc_home_img_init');
      } else {
        ((s as any).sex_ev ?? {})['loc'] = ((s as any).sex_ev ?? 0)?.['locat'];
      }
    }
  }
  if (Object.keys((s as any).date_ev ?? {}).length <= 0  &&  (!(((s as any).sex_ev ?? 0)?.['date_before_sex'] + ((s as any).sex_ev ?? 0)?.['sex_before_date']))) {
    ((s as any).sex_ev ?? {})['sex_before_date'] = 1;
  } else {
    ((s as any).sex_ev ?? {})['date_before_sex'] = 1;
  }
  if (Object.keys((s as any).date_ev ?? {}).length > 0) {
    if (((s as any).date_ev ?? 0)?.['npc_home_sex'] === 1) {
      // TODO-QSP: xgt 'sex_ev_start', 'date_npc_home_start'
    } else {
      if (((s as any).date_ev ?? 0)?.['pc_home_sex'] === 1) {
        // TODO-QSP: xgt 'sex_ev_start', 'date_pc_home_start'
      } else {
        if (((s as any).date_ev ?? 0)?.['hotel_sex'] === 1) {
          // TODO-QSP: xgt 'sex_ev_start', 'date_hotel_start'
        } else {
          // TODO-QSP: xgt 'sex_ev_start', 'date_npc_home_start'
        }
      }
    }
  } else {
    if (((';dating;fuckbuddy;sugar_daddy;daddy;boyfriend;husband;').indexOf((';' + ((s as any).npcRelat ?? 0) + ';'))) + 1 > 0) {
      // TODO-QSP: xgt 'sex_ev_start', 'lover_initiate', $sex_ev['loc']
    } else {
      if (((((s as any).npcRelat ?? 0)).slice((1)-1, ((1)-1)+(3))) === 'ex-') {
        // TODO-QSP: xgt 'sex_ev_start', 'lover_initiate', $sex_ev['loc']
      } else {
        qspCall(s, 'sex_ev_start', 'hookup_initiate');
        qspCall(s, 'sex_ev_start', 'begin');
        // TODO-QSP: xgt 'sex_ev_start', 'undress_menu'
      }
    }
  }
  scene.build();
}

function enterNpcstatInit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) !== '') {
    qspCall(s, 'npcStat', '', ((s as any).locArgs?.[1] ?? 0));
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

function enterExitSet(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['loc'] === 'pc_home') {
    // TODO-QSP: gt $home['bedroom'], $home['bedroom_arg']
  } else {
    if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.actions([{ label: 'Continue', goto: ['pav_residential', ''] }]);
    } else {
      if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
        scene.actions([{ label: 'Continue', goto: ['city_island', ''] }]);
      } else {
        if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 3) {
          scene.actions([{ label: 'Continue', goto: ['city_residential', ''] }]);
        } else {
          if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 4) {
            scene.actions([{ label: 'Continue', goto: ['city_center', ''] }]);
          } else {
            if (((s as any).region ?? 0) === 'pav') {
              scene.actions([{ label: 'Continue', goto: ['pav_residential', ''] }]);
            } else {
              if (((s as any).region ?? 0) === 'gad') {
                scene.actions([{ label: 'Continue', goto: ['gadukino', ''] }]);
              } else {
                if (((s as any).region ?? 0) === 'city') {
                  scene.actions([{ label: 'Continue', goto: ['city_residential', ''] }]);
                } else {
                  if (((s as any).region ?? 0) === 'pushkin') {
                    scene.actions([{ label: 'Continue', goto: ['pushkin', ''] }]);
                  } else {
                    scene.actions([{ label: 'Continue', goto: ['city_residential', ''] }]);
                  }
                }
              }
            }
            if (((s as any).region ?? 0) === 'pav') {
              scene.actions([{ label: 'Continue', goto: ['pav_residential', ''] }]);
            } else {
              if (((s as any).region ?? 0) === 'pav') {
                scene.actions([{ label: 'Continue', goto: ['pav_commercial', ''] }]);
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
                          // TODO-QSP: end}
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

function enterPreReaction(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
    // TODO-QSP: dynamic text: <<$npcdesc>>'s pants drop, revealing... what the fuck? Is that a micropenis?
    scene.text(`${((s as any).npcdesc ?? 0)}'s pants drop, revealing... what the fuck? Is that a micropenis?`);
    scene.text('It\'s basically the same size as your little finger.');
  } else {
    if (((s as any).dick_desc ?? 0) === 'chode') {
      // TODO-QSP: dynamic text: <<$npcdesc>> pumps his short cock in and out of you slowly, focusing more on tec...
      scene.text(`${((s as any).npcdesc ?? 0)} pumps his short cock in and out of you slowly, focusing more on technique than speed. Soft squelching comes from between your legs, a little wetter sounding than usual, probably on account of your period. But the added lubrication is welcome and his chode slips in and out of you with ease.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'skinny') {
        // TODO-QSP: dynamic text: <<$npcdesc>> pumps his skinny dick in and out of you slowly, focusing more on te...
        scene.text(`${((s as any).npcdesc ?? 0)} pumps his skinny dick in and out of you slowly, focusing more on technique than speed. Soft squelching comes from between your legs, a little wetter sounding than usual, probably on account of your period. But the added lubrication is welcome and his slim cock slips in and out of you with ease.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'normal') {
          // TODO-QSP: dynamic text: <<$npcdesc>> pumps his dick in and out of you slowly, focusing more on technique...
          scene.text(`${((s as any).npcdesc ?? 0)} pumps his dick in and out of you slowly, focusing more on technique than speed. Soft squelching comes from between your legs, a little wetter sounding than usual, probably on account of your period. But the added lubrication is welcome and his cock slips in and out of you with ease.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'thick') {
            // TODO-QSP: dynamic text: <<$npcdesc>> pumps his dick in and out of you slowly, focusing more on technique...
            scene.text(`${((s as any).npcdesc ?? 0)} pumps his dick in and out of you slowly, focusing more on technique than speed. Soft squelching comes from between your legs, a little wetter sounding than usual, probably on account of your period. But the added lubrication is welcome and his thick cock slips in and out of you with ease.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'long') {
              // TODO-QSP: dynamic text: <<$npcdesc>> pumps his dick in and out of you slowly, focusing more on technique...
              scene.text(`${((s as any).npcdesc ?? 0)} pumps his dick in and out of you slowly, focusing more on technique than speed. Soft squelching comes from between your legs, a little wetter sounding than usual, probably on account of your period. But his dick is so long that it barely fits inside you, so the added lubrication is more than welcome.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'huge') {
                // TODO-QSP: dynamic text: <<$npcdesc>> pumps his dick in and out of you slowly, focusing more on technique...
                scene.text(`${((s as any).npcdesc ?? 0)} pumps his dick in and out of you slowly, focusing more on technique than speed. Soft squelching comes from between your legs, a little wetter sounding than usual, probably on account of your period. But you still gasp with every thrust, his huge cock filling you up with every thrust, so the added lubrication is more than welcome.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'enormous') {
                  // TODO-QSP: dynamic text: <<$npcdesc>> pumps his dick in and out of you slowly, focusing more on technique...
                  scene.text(`${((s as any).npcdesc ?? 0)} pumps his dick in and out of you slowly, focusing more on technique than speed. Soft squelching comes from between your legs, a little wetter sounding than usual, probably on account of your period. But you still gasp with every thrust, his huge cock filling you up with every thrust, so the added lubrication is more than welcome.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'lengthy') {
                    // TODO-QSP: dynamic text: <<$npcdesc>> pumps his dick in and out of you slowly, focusing more on technique...
                    scene.text(`${((s as any).npcdesc ?? 0)} pumps his dick in and out of you slowly, focusing more on technique than speed. Soft squelching comes from between your legs, a little wetter sounding than usual, probably on account of your period. But his cock is so long that he bumps against your cervix with every thrust, so the added lubrication is more than welcome.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'gigantic') {
                      // TODO-QSP: dynamic text: <<$npcdesc>> pumps his dick in and out of you slowly, focusing more on technique...
                      scene.text(`${((s as any).npcdesc ?? 0)} pumps his dick in and out of you slowly, focusing more on technique than speed. Loud squelching comes from between your legs, a little wetter sounding than usual, probably on account of your period. But his gigantic cock is so big that he fills you to the brim with every thrust, so the added lubrication is more than welcome.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'monstrous') {
                        // TODO-QSP: dynamic text: <<$npcdesc>> pumps his dick in and out of you slowly, focusing more on technique...
                        scene.text(`${((s as any).npcdesc ?? 0)} pumps his dick in and out of you slowly, focusing more on technique than speed. Loud squelching comes from between your legs, a little wetter sounding than usual, probably on account of your period. But his monstrous cock is so big that he nearly splits you in half with every thrust, so the added lubrication is more than welcome.`);
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
  scene.build();
}

function enterMeyHomeStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npcRelat ?? 0) !== 'stranger') {
    qspCall(s, 'sex_ev_start', 'hookup_initiate');
  }
  ((s as any).sex_ev ?? {})['bed_room'] = '<center><img ' + qspUntranslated(s, "set_imgh>", { location: "sex_ev_start" }) + ' src="images/locations/pavlovsk/resident/meynolds/guestroom.jpg"></center>';
  ((s as any).sex_ev ?? {})['bath_room'] = '<center><img ' + qspUntranslated(s, "set_imgh>", { location: "sex_ev_start" }) + ' src="images/locations/pavlovsk/hotel/hotel.room.best1.jpg"></center>';
  ((s as any).sex_ev ?? {})['kitchen_room'] = '<center><img ' + qspUntranslated(s, "set_imgh>", { location: "sex_ev_start" }) + ' src="images/locations/pavlovsk/resident/meynolds/kitchen.jpg"></center>';
  ((s as any).sex_ev ?? {})['living_room'] = '<center><img ' + qspUntranslated(s, "set_imgh>", { location: "sex_ev_start" }) + ' src="images/locations/pavlovsk/resident/meynolds/hall.jpg"></center>';
  ((s as any).sex_ev ?? {})['hall_way'] = '<center><img ' + qspUntranslated(s, "set_imgh>", { location: "sex_ev_start" }) + ' src="images/locations/pavlovsk/resident/meynolds/corridor.jpg"></center>';
  qspCall(s, 'vicky_meynold_schedule', '');
  qspCall(s, 'katja_meynold_schedule', '');
  qspCall(s, 'sex_ev_start', 'begin');
  if ((((s as any).locat ?? 0)?.['Vicky'] === 9  ||  ((s as any).locat ?? 0)?.['Vicky'] === 12  ||  ((s as any).locat ?? 0)?.['Vicky'] === 13  ||  ((s as any).locat ?? 0)?.['Vicky'] === 15)  &&  (((s as any).locat ?? 0)?.['katja'] === 7  ||  ((s as any).locat ?? 0)?.['katja'] === 9)) {
  } else {
    if (((s as any).locat ?? 0)?.['Vicky'] === 9  ||  ((s as any).locat ?? 0)?.['Vicky'] === 12  ||  ((s as any).locat ?? 0)?.['Vicky'] === 13  ||  ((s as any).locat ?? 0)?.['Vicky'] === 15) {
      qspCall(s, 'sex_ev_start', 'mey_vicky_spot');
    } else {
      if (((s as any).locat ?? 0)?.['katja'] === 7  ||  ((s as any).locat ?? 0)?.['katja'] === 9) {
      }
    }
  }
  // TODO-QSP: xgt 'sex_ev_clothing', 'undress_menu'
  scene.build();
}

function enterMeyVickySpot(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $sex_ev['hall_way']
  // TODO-QSP: dynamic text: You lead <<$npcdesc>> into the Meynold's home.
  scene.text(`You lead ${((s as any).npcdesc ?? 0)} into the Meynold's home.`);
  if (((s as any).locat ?? 0)?.['Vicky'] === 15) {
    if ((Math.floor(Math.random() * 2) + 1) === 1) {
      scene.text('At that moment, Vicky comes tearing around the corner, her face pressed up against Vanya\'s and arms wrapped around his neck as he slams her into the wall with a thud.');
      scene.text('"Oh! Oh <i>-fuck~!</i>" she moans as he thrusts his hand under her skirt. "Baby, I need you inside me now!"');
      scene.text('The two of them stagger off down the hall towards Vicky\'s room, apparently too caught up in each other to even notice you brought a guy home.');
    } else {
      scene.text('At that moment, Vicky comes strolling around the corner, her arm in Vanya\'s, giggling at something he said. She spots you out of the corner of her eye and pulls up short in surprise.');
      // TODO-QSP: dynamic text: "Oh! <<$pcs_nickname>>! Is this a boytoy of yours?"
      scene.text(`"Oh! ${((s as any).pcs_nickname ?? 0)}! Is this a boytoy of yours?"`);
      scene.text('"Yeah," you admit, somewhat embarrassed. She just smirks back in turn.');
      // TODO-QSP: dynamic text: "Well I don't want to get in your way. Make sure you pork her good!" Vicky says,...
      scene.text(`"Well I don't want to get in your way. Make sure you pork her good!" Vicky says, winking at ${((s as any).npcdesc ?? 0)}. "She deserves it. If you don't I'm gonna make sure I hear all about it later!"`);
      scene.text('And with that, she and Vayna continue on to some other part of the house.');
    }
  } else {
    scene.text('At that moment Vicky just happens to come strolling around the corner giggling at something she sees on her phone when she spots you.');
    scene.text('"Oh!" she squeaks as a hand comes up to her mouth, covering an obvious smile. "');
    // TODO-QSP: dynamic text: "Oh! <<$pcs_nickname>>! Is this a boytoy of yours?"
    scene.text(`"Oh! ${((s as any).pcs_nickname ?? 0)}! Is this a boytoy of yours?"`);
    scene.text('"Yeah," you admit, somewhat embarrassed. She just smirks back in turn.');
    if (((s as any).vicky_know_bc ?? 0) === 'shot') {
      qspCall(s, 'sex_ev_stats', 'birth_control');
      scene.text('"Well I don\'t want to get in your way. Make sure you pork her good!" Vicky smiles cheerfully. She leans in for a stage whisper. "She\'s on the shot, so feel free to cum inside her as much as you like."');
      scene.actions([
        { label: 'Embarrassed!', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['hall_way']
    scene.text('"Vicky!" you hiss, a hot flush running up your neck.');
    // TODO-QSP: dynamic text: She doesn't have the slightest appearance of shame as she winks at <<$npcdesc>> ...
    scene.text(`She doesn't have the slightest appearance of shame as she winks at ${((s as any).npcdesc ?? 0)} instead and walks away while blowing a kiss.`);
    // TODO-QSP: dynamic text: Not wanting any more run-ins with the Meynolds, you hustle <<$npcdesc>> into you...
    scene.text(`Not wanting any more run-ins with the Meynolds, you hustle ${((s as any).npcdesc ?? 0)} into your bedroom.`);
    // TODO-QSP: xgt 'sex_ev_clothing', 'undress_menu'
  } },
        { label: 'Just smile', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['hall_way']
    // TODO-QSP: dynamic text: You don't have anything to add to that and just smile at Vicky as she winks at <...
    scene.text(`You don't have anything to add to that and just smile at Vicky as she winks at ${((s as any).npcdesc ?? 0)} and walks away, blowing a kiss at you just before turning the corner. After that, you pull ${((s as any).npcdesc ?? 0)} into your room.`);
    // TODO-QSP: xgt 'sex_ev_clothing', 'undress_menu'
  } },
        { label: 'That is <i>not</i> permission', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['hall_way']
    // TODO-QSP: dynamic text: "Wait, hold-" You turn quickly, wagging a stern finger in front of <<$npcdesc>>....
    scene.text(`"Wait, hold-" You turn quickly, wagging a stern finger in front of ${((s as any).npcdesc ?? 0)}. "That is <i>not</i> permission to cum inside me!"`);
    // TODO-QSP: dynamic text: As you turn back towards Vicky, she winks at <<$npcdesc>> and walks away, blowin...
    scene.text(`As you turn back towards Vicky, she winks at ${((s as any).npcdesc ?? 0)} and walks away, blowing a kiss at you just before turning the corner and you pull ${((s as any).npcdesc ?? 0)} into your room.`);
    // TODO-QSP: xgt 'sex_ev_clothing', 'undress_menu'
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
    // TODO-QSP: dynamic text: She doesn't have the slightest appearance of shame as she winks at <<$npcdesc>> ...
    scene.text(`She doesn't have the slightest appearance of shame as she winks at ${((s as any).npcdesc ?? 0)} instead and walks away while blowing a kiss.`);
    // TODO-QSP: dynamic text: Not wanting any more run-ins with the Meynolds, you hustle <<$npcdesc>> into you...
    scene.text(`Not wanting any more run-ins with the Meynolds, you hustle ${((s as any).npcdesc ?? 0)} into your bedroom.`);
    // TODO-QSP: xgt 'sex_ev_clothing', 'undress_menu'
  } },
          { label: 'Just smile', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['hall_way']
    // TODO-QSP: dynamic text: You don't have anything to add to that and just smile at Vicky as she winks at <...
    scene.text(`You don't have anything to add to that and just smile at Vicky as she winks at ${((s as any).npcdesc ?? 0)} and walks away, blowing a kiss at you just before turning the corner. After that, you pull ${((s as any).npcdesc ?? 0)} into your room.`);
    // TODO-QSP: xgt 'sex_ev_clothing', 'undress_menu'
  } },
          { label: 'That is <i>not</i> permission', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['hall_way']
    // TODO-QSP: dynamic text: "Wait, hold-" You turn quickly, wagging a stern finger in front of <<$npcdesc>>....
    scene.text(`"Wait, hold-" You turn quickly, wagging a stern finger in front of ${((s as any).npcdesc ?? 0)}. "That is <i>not</i> permission to cum inside me!"`);
    // TODO-QSP: dynamic text: As you turn back towards Vicky, she winks at <<$npcdesc>> and walks away, blowin...
    scene.text(`As you turn back towards Vicky, she winks at ${((s as any).npcdesc ?? 0)} and walks away, blowing a kiss at you just before turning the corner and you pull ${((s as any).npcdesc ?? 0)} into your room.`);
    // TODO-QSP: xgt 'sex_ev_clothing', 'undress_menu'
  } },
        ]);
      } else {
        // TODO-QSP: dynamic text: "Well I don't want to get in your way. Make sure you pork her good!" Vicky says,...
        scene.text(`"Well I don't want to get in your way. Make sure you pork her good!" Vicky says, winking at ${((s as any).npcdesc ?? 0)}. "She deserves it. If you don't I'm gonna make sure I hear all about it later!"`);
        // TODO-QSP: dynamic text: And with that, she walks off to some other part of the house and you drag <<$npc...
        scene.text(`And with that, she walks off to some other part of the house and you drag ${((s as any).npcdesc ?? 0)} into your bedroom before she can come back.`);
        // TODO-QSP: xgt 'sex_ev_clothing', 'undress_menu'
      }
    }
  }
  scene.build();
}

function enterMeyKatjaSpot(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $sex_ev['hall_way']
  // TODO-QSP: dynamic text: You lead <<$npcdesc>> into the Meynold's home.
  scene.text(`You lead ${((s as any).npcdesc ?? 0)} into the Meynold's home.`);
  if (((s as any).locat ?? 0)?.['Vicky'] === 15) {
    if ((Math.floor(Math.random() * 2) + 1) === 1) {
      scene.text('At that moment, Vicky comes tearing around the corner, her face pressed up against Vanya\'s and arms wrapped around his neck as he slams her into the wall with a thud.');
      scene.text('"Oh! Oh <i>-fuck~!</i>" she moans as he thrusts his hand under her skirt. "Baby, I need you inside me now!"');
      scene.text('The two of them stagger off down the hall towards Vicky\'s room, apparently too caught up in each other to even notice you brought a guy home.');
    } else {
      scene.text('At that moment, Katja comes strolling around the corner, her arm in Vanya\'s, giggling at something he said. She spots you out of the corner of her eye and pulls up short in surprise.');
      // TODO-QSP: dynamic text: "Oh! <<$pcs_nickname>>! Is this a boytoy of yours?"
      scene.text(`"Oh! ${((s as any).pcs_nickname ?? 0)}! Is this a boytoy of yours?"`);
      scene.text('"Yeah," you admit, somewhat embarrassed. She just smirks back in turn.');
      // TODO-QSP: dynamic text: "Well I don't want to get in your way. Make sure you pork her good!" Vicky says,...
      scene.text(`"Well I don't want to get in your way. Make sure you pork her good!" Vicky says, winking at ${((s as any).npcdesc ?? 0)}. "She deserves it. If you don't I'm gonna make sure I hear all about it later!"`);
      scene.text('And with that, she and Vayna continue on to some other part of the house.');
    }
  } else {
    scene.text('At that moment Katja just happens to come strolling around the corner .');
    scene.text('"Oh!" she squeaks as a hand comes up to her mouth, covering an obvious smile. "');
    // TODO-QSP: dynamic text: "Oh! <<$pcs_nickname>>! Is this a boytoy of yours?"
    scene.text(`"Oh! ${((s as any).pcs_nickname ?? 0)}! Is this a boytoy of yours?"`);
    scene.text('"Yeah," you admit, somewhat embarrassed. She just smirks back in turn.');
    // TODO-QSP: dynamic text: "Well I don't want to get in your way. Make sure you pork her good!" Vicky says,...
    scene.text(`"Well I don't want to get in your way. Make sure you pork her good!" Vicky says, winking at ${((s as any).npcdesc ?? 0)}. "She deserves it. If you don't I'm gonna make sure I hear all about it later!"`);
    scene.text('And with that, she and Vayna continue on to some other part of the house.');
  }
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
      enterInitiatePre(s, scene);
      break;
  }
}

export const sex_ev_start: LocationDef = {
  name: 'sex_ev_start',
  title: '"I was playing football when I saw your message," you shrug.',
  region: 'other',
  locationType: 'event',
  enter: enter,
};
