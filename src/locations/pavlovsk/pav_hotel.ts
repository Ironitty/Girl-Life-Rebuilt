import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_hotel', 'skip_resepevent');
  (s as any).region = 'pav';
  (s as any).location_type = 'public_indoors';
  if (((s as any).temp ?? 0) !== 0) {
    (s as any).temp = undefined;
  }
  (s as any).receptionName = 'Elisabet';
  if (((s as any).daystart ?? 0) === ((s as any).hotelRoomDays ?? 0)?.['pav']  &&  ((s as any).hour ?? 0) > 11) {
    ((s as any).HotelRoom = (s as any).HotelRoom ?? {})['pav'] = 0;
  }
  if (((s as any).daystart ?? 0) > ((s as any).hotelRoomDays ?? 0)?.['pav']) {
    ((s as any).HotelRoom = (s as any).HotelRoom ?? {})['pav'] = 0;
  }
  qspCall(s, 'stat', '');
  if (String((s as any).locArgs?.[0] ?? '') !== 'skip_resepevent') {
    if (((s as any).hour ?? 0) === 0  &&  ((s as any).hotresepQW_day ?? 0) !== ((s as any).daystart ?? 0)  &&  (((s as any).hotresepQW ?? 0) < 3  ||  (((s as any).hotresepQW ?? 0) === 3  &&  (Math.floor(Math.random() * 10) + 1) === 10))) {
      if (((s as any).HotelRoom ?? 0)?.['pav'] === 0  &&  ((s as any).therapistQW ?? 0)?.['hotel_key'] !== 3) {
        qspGoto(s, 'pav_hotel', 'resep_event1');
      } else {
        if ((!((s as any).resepseen ?? 0))) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterResepEvent2(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          qspGoto(s, 'pav_hotel', 'resep_event3');
        }
      }
    }
  }
  if (((s as any).temp ?? 0) === 1) {
    (s as any).temp = undefined;
  } else {
    scene.text('<center><h4>Pavlovsk Hotel</h4></center>');
    scene.img('images/locations/pavlovsk/hotel/hotel.hole.jpg');
    if ((!((s as any).pavHotelMaid ?? 0))) {
      scene.text('You\'re always surprised by how fancy the hotel looks on the inside given the shabby exterior. A cute brunette is manning the <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=1; return s; }); window.__gameStore.getState().doGoto(\u0027pav_hotelReception\u0027, \u0027\u0027); return false;">reception desk</a>.');
      scene.text('She gives you a friendly nod when you get into her sight range.');
    } else {
      scene.text('You\'re always surprised by how fancy the hotel looks on the inside given the shabby exterior. Elisabet is manning the <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=1; return s; }); window.__gameStore.getState().doGoto(\u0027pav_hotelReception\u0027, \u0027\u0027); return false;">reception desk</a>.');
      scene.text('She gives you a friendly nod when you get into her sight range.');
    }
  }
  qspCall(s, 'schedule', 'A186');
  if (((s as any).therapistQW ?? 0)?.['hotel_key'] === 2  &&  ((s as any).locat ?? 0)?.['A186'] === 2  &&  ((s as any).week ?? 0) === 6  &&  ((s as any).hour ?? 0) >= 20  &&  ((s as any).therapistQW ?? 0)?.['hotel_day'] !== ((s as any).daystart ?? 0)  &&  ((s as any).therapistQW ?? 0)?.['escaped'] === 0) {
    ((s as any).therapistQW = (s as any).therapistQW ?? {})['hotel_day'] = ((s as any).daystart ?? 0);
    qspCall(s, 'willpower', 'misc', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Don\'t visit the therapist', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Don\'t visit the therapist', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'medium');
    qspGoto(st, 'pav_hotel', '');
  } },
      ]);
    }
    scene.actions([
{ label: 'Visit the therapist', goto: ['therapist_hotel', 'start'] },
]);
    return;
  }
  if (((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) < 20  &&  ((s as any).proshotelopen ?? 0) === 1) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027pav_hotel\u0027, \u0027Pavlin\u0027); return false;">Pavlin</a> is sitting in the lobby, looking for fresh prey.');
  }
  if (((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) <= 13  &&  ((s as any).job_hiring_step ?? 0)?.['pav_hotel_maid'] >= 2) {
    scene.text('Next to the reception desk is a door labeled <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=1; return s; }); window.__gameStore.getState().doGoto(\u0027pav_hotelAdmin\u0027, \u0027\u0027); return false;">"Administration"</a>. That must be where the hotel manager works. The door is currently open.');
  }
  if (((s as any).hotwait ?? 0) === 1) {
    scene.text('You sit in one of the comfortable chairs in the lobby and watch the guests checking in and out.');
    (s as any).hotwait = 0;
  }
  if (((s as any).job_hiring_step ?? 0)?.['pav_hotel_maid'] <= 1) {
    scene.text('You see a <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=1; return s; }); window.__gameStore.getState().doGoto(\u0027pav_hotel\u0027, \u0027poster\u0027); return false;">"recruitment poster"</a> in a corner of the room.');
  }
  qspCall(s, 'pav_hotelWork', 'set_hotel_acts');
  if (((s as any).hotelcouple ?? 0) === 2  &&  ((s as any).week ?? 0) === 4  &&  ((s as any).hour ?? 0) >= 20  &&  ((s as any).hour ?? 0) < 23  &&  ((s as any).hcday ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Visit the couple in room 207', goto: ['pav_hotelWork', 'hotcouple'] },
    ]);
  }
  if (((s as any).hour ?? 0) === 20  &&  ((s as any).IgorevnaBDSM ?? 0) >= 5  &&  ((s as any).IgorevnaBDSM ?? 0) < 14  &&  ((s as any).week ?? 0) < 3  &&  ((s as any).AnnaQW ?? 0)?.['daystart'] !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Look for Anna', handler: (st: GameState) => {
    ((st as any).AnnaQW = (st as any).AnnaQW ?? {})['daystart'] = ((st as any).daystart ?? 0);
  }, goto: ['hotel_anna', 'meeting'] },
    ]);
  }
  if (((s as any).HotelRoom ?? 0)?.['pav'] > 0  ||  ((s as any).therapistQW ?? 0)?.['hotel_key'] === 3) {
    scene.actions([
      { label: 'Go to your room', handler: (st: GameState) => {
    if (((st as any).therapistQW ?? 0)?.['hotel_key'] === 3) {
      qspGoto(st, 'HotelRoom', 'therapist');
    } else {
      if (((st as any).HotelRoom ?? 0)?.['pav'] === 1) {
        qspGoto(st, 'HotelRoom', 'normal');
      } else {
        if (((st as any).HotelRoom ?? 0)?.['pav'] === 2) {
          qspGoto(st, 'HotelRoom', 'better');
        }
      }
    }
  } },
    ]);
  }
  qspCall(s, 'lover', 'lover_events');
  scene.actions([
    { label: 'Leave the hotel', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['pav_market', ''] },
    { label: 'Kill some time in the hotel lobby', handler: (st: GameState) => {
    qspCall(st, 'obj_din', 'wait');
    (st as any).hotwait = 1;
    qspGoto(st, 'pav_hotel', '');
  } },
  ]);
  scene.build();
}

function enterSkipResepevent(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_hotel', 'skip_resepevent');
  (s as any).region = 'pav';
  (s as any).location_type = 'public_indoors';
  if (((s as any).temp ?? 0) !== 0) {
    (s as any).temp = undefined;
  }
  (s as any).receptionName = 'Elisabet';
  if (((s as any).daystart ?? 0) === ((s as any).hotelRoomDays ?? 0)?.['pav']  &&  ((s as any).hour ?? 0) > 11) {
    ((s as any).HotelRoom = (s as any).HotelRoom ?? {})['pav'] = 0;
  }
  if (((s as any).daystart ?? 0) > ((s as any).hotelRoomDays ?? 0)?.['pav']) {
    ((s as any).HotelRoom = (s as any).HotelRoom ?? {})['pav'] = 0;
  }
  qspCall(s, 'stat', '');
  if (String((s as any).locArgs?.[0] ?? '') !== 'skip_resepevent') {
    if (((s as any).hour ?? 0) === 0  &&  ((s as any).hotresepQW_day ?? 0) !== ((s as any).daystart ?? 0)  &&  (((s as any).hotresepQW ?? 0) < 3  ||  (((s as any).hotresepQW ?? 0) === 3  &&  (Math.floor(Math.random() * 10) + 1) === 10))) {
      if (((s as any).HotelRoom ?? 0)?.['pav'] === 0  &&  ((s as any).therapistQW ?? 0)?.['hotel_key'] !== 3) {
        qspGoto(s, 'pav_hotel', 'resep_event1');
      } else {
        if ((!((s as any).resepseen ?? 0))) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterResepEvent2(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          qspGoto(s, 'pav_hotel', 'resep_event3');
        }
      }
    }
  }
  if (((s as any).temp ?? 0) === 1) {
    (s as any).temp = undefined;
  } else {
    scene.text('<center><h4>Pavlovsk Hotel</h4></center>');
    scene.img('images/locations/pavlovsk/hotel/hotel.hole.jpg');
    if ((!((s as any).pavHotelMaid ?? 0))) {
      scene.text('You\'re always surprised by how fancy the hotel looks on the inside given the shabby exterior. A cute brunette is manning the <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=1; return s; }); window.__gameStore.getState().doGoto(\u0027pav_hotelReception\u0027, \u0027\u0027); return false;">reception desk</a>.');
      scene.text('She gives you a friendly nod when you get into her sight range.');
    } else {
      scene.text('You\'re always surprised by how fancy the hotel looks on the inside given the shabby exterior. Elisabet is manning the <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=1; return s; }); window.__gameStore.getState().doGoto(\u0027pav_hotelReception\u0027, \u0027\u0027); return false;">reception desk</a>.');
      scene.text('She gives you a friendly nod when you get into her sight range.');
    }
  }
  qspCall(s, 'schedule', 'A186');
  if (((s as any).therapistQW ?? 0)?.['hotel_key'] === 2  &&  ((s as any).locat ?? 0)?.['A186'] === 2  &&  ((s as any).week ?? 0) === 6  &&  ((s as any).hour ?? 0) >= 20  &&  ((s as any).therapistQW ?? 0)?.['hotel_day'] !== ((s as any).daystart ?? 0)  &&  ((s as any).therapistQW ?? 0)?.['escaped'] === 0) {
    ((s as any).therapistQW = (s as any).therapistQW ?? {})['hotel_day'] = ((s as any).daystart ?? 0);
    qspCall(s, 'willpower', 'misc', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Don\'t visit the therapist', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Don\'t visit the therapist', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'medium');
    qspGoto(st, 'pav_hotel', '');
  } },
      ]);
    }
    scene.actions([
{ label: 'Visit the therapist', goto: ['therapist_hotel', 'start'] },
]);
    return;
  }
  if (((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) < 20  &&  ((s as any).proshotelopen ?? 0) === 1) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027pav_hotel\u0027, \u0027Pavlin\u0027); return false;">Pavlin</a> is sitting in the lobby, looking for fresh prey.');
  }
  if (((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) <= 13  &&  ((s as any).job_hiring_step ?? 0)?.['pav_hotel_maid'] >= 2) {
    scene.text('Next to the reception desk is a door labeled <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=1; return s; }); window.__gameStore.getState().doGoto(\u0027pav_hotelAdmin\u0027, \u0027\u0027); return false;">"Administration"</a>. That must be where the hotel manager works. The door is currently open.');
  }
  if (((s as any).hotwait ?? 0) === 1) {
    scene.text('You sit in one of the comfortable chairs in the lobby and watch the guests checking in and out.');
    (s as any).hotwait = 0;
  }
  if (((s as any).job_hiring_step ?? 0)?.['pav_hotel_maid'] <= 1) {
    scene.text('You see a <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=1; return s; }); window.__gameStore.getState().doGoto(\u0027pav_hotel\u0027, \u0027poster\u0027); return false;">"recruitment poster"</a> in a corner of the room.');
  }
  qspCall(s, 'pav_hotelWork', 'set_hotel_acts');
  if (((s as any).hotelcouple ?? 0) === 2  &&  ((s as any).week ?? 0) === 4  &&  ((s as any).hour ?? 0) >= 20  &&  ((s as any).hour ?? 0) < 23  &&  ((s as any).hcday ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Visit the couple in room 207', goto: ['pav_hotelWork', 'hotcouple'] },
    ]);
  }
  if (((s as any).hour ?? 0) === 20  &&  ((s as any).IgorevnaBDSM ?? 0) >= 5  &&  ((s as any).IgorevnaBDSM ?? 0) < 14  &&  ((s as any).week ?? 0) < 3  &&  ((s as any).AnnaQW ?? 0)?.['daystart'] !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Look for Anna', handler: (st: GameState) => {
    ((st as any).AnnaQW = (st as any).AnnaQW ?? {})['daystart'] = ((st as any).daystart ?? 0);
  }, goto: ['hotel_anna', 'meeting'] },
    ]);
  }
  if (((s as any).HotelRoom ?? 0)?.['pav'] > 0  ||  ((s as any).therapistQW ?? 0)?.['hotel_key'] === 3) {
    scene.actions([
      { label: 'Go to your room', handler: (st: GameState) => {
    if (((st as any).therapistQW ?? 0)?.['hotel_key'] === 3) {
      qspGoto(st, 'HotelRoom', 'therapist');
    } else {
      if (((st as any).HotelRoom ?? 0)?.['pav'] === 1) {
        qspGoto(st, 'HotelRoom', 'normal');
      } else {
        if (((st as any).HotelRoom ?? 0)?.['pav'] === 2) {
          qspGoto(st, 'HotelRoom', 'better');
        }
      }
    }
  } },
    ]);
  }
  qspCall(s, 'lover', 'lover_events');
  scene.actions([
    { label: 'Leave the hotel', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['pav_market', ''] },
    { label: 'Kill some time in the hotel lobby', handler: (st: GameState) => {
    qspCall(st, 'obj_din', 'wait');
    (st as any).hotwait = 1;
    qspGoto(st, 'pav_hotel', '');
  } },
  ]);
  scene.build();
}

function enterPoster(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  scene.img('images/shared/newspaper/hotelmaidoffer.jpg');
  scene.text('Stepping closer to the poster, you see the hotel is looking to recruit cleaning staff.');
  scene.text('"<b>Maid Wanted!</b> The Pavlovsk Hotel is looking for a hardworking maid. No experience necessary. Flexible hours. Apply in person at the hotel reception."');
  scene.text('<i>It doesn\'t look like a glamorous job, but at least it\'s honest work.</i>');
  ((s as any).job_hiring_step = (s as any).job_hiring_step ?? {})['pav_hotel_maid'] = 1;
  scene.actions([
{ label: 'Go back', goto: ['pav_hotel', ''] },
{ label: 'Go to the reception', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_hotelReception', ''] },
]);
  return;
  scene.build();
}

function enterResepEvent1(s: GameState, scene: SceneBuilder): void {
  scene.text('As you approach the hotel, you notice the doors are closed.');
  scene.text('You try knocking, but nobody comes to open them.');
  if (((s as any).hotresepQW ?? 0) === 3) {
    scene.text('The receptionist and the manager are probably at it again.');
    scene.actions([
      { label: 'Wait until they\'re finished', handler: (st: GameState) => {
    (st as any).hotresepQW_day = ((st as any).daystart ?? 0);
    (st as any).minut = ((st as any).minut ?? 0) + ((Math.floor(Math.random() * (60 - ((st as any).minut ?? 0) - 1 + 1)) + (1)));
    qspGoto(st, 'pav_hotel', '');
  } },
    ]);
  } else {
    if ((!((s as any).resepseen ?? 0))) {
      scene.text('This is strange. The lobby is supposed to be open 24/7.');
    } else {
      scene.text('If you\'re going to catch Elisabet in the act, then you need to find another way to enter the lobby at midnight.');
      if (((s as any).hotresepQW ?? 0) < 2) {
        (s as any).hotresepQW = 2;
      }
      qspCall(s, 'exp_gain', 'observ', 3);
    }
  }
  scene.actions([
    { label: 'Go back to the market', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    (st as any).home_name = undefined;
    qspGoto(st, 'pav_market', '');
  } },
  ]);
  scene.build();
}

function enterResepEvent2(s: GameState, scene: SceneBuilder): void {
  (s as any).temp = 1;
  qspCall(s, 'exp_gain', 'observ', (Math.floor(Math.random() * 2) + 0));
  scene.text('<center><h4>Pavlovsk Hotel</h4></center>');
  scene.img('images/locations/pavlovsk/hotel/sex/resep_event2.jpg');
  scene.text('You enter the lobby and see the desk girl and the manager talking to each other. When they notice you, they both give you a very disappointed look.');
  scene.text('You get the feeling you interrupted something here.');
  scene.build();
}

function enterResepEvent3(s: GameState, scene: SceneBuilder): void {
  (s as any).hotresepQW = 3;
  qspCall(s, 'exp_gain', 'observ', 3);
  qspCall(s, 'stat', '');
  if (((s as any).prevloc ?? 0) === 'HotelRoom') {
    scene.text('You creep down to the lobby and around the corner to carefully sneak a glimpse.');
  } else {
    scene.text('You find the door closed and realize that the receptionist and the manager are probably fooling around again. You carefully open the door with your key and enter as quietly as you can.');
    scene.text('Carefully moving to the corner, you sneak a glimpse.');
  }
  scene.img('images/locations/pavlovsk/hotel/sex/resep_event1.jpg');
  scene.text('You spy Elisabet as she flashes her breasts and flips her skirt up and down with a devilish smile.');
  scene.text('You then see a man approaching her. It\'s Mr. Leonidovich, the hotel manager.');
  scene.img('images/locations/pavlovsk/hotel/sex/resep_event2.jpg');
  scene.text('"Miss Tanich, what are you doing?! What if our guests see you like this?!"');
  scene.text('You remember the pictures you found in his office and wonder why he\'s acting so surprised.');
  scene.text('"Oh! Mr. Leonidovich!" she says while pouting. "I\'ve been a bad little girl, haven\'t I, Daddy?"');
  scene.text('You figure they\'re just playing a game and being caught flashing was all part of their weird little role play.');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/hotel/sex/resep_event9.jpg');
    scene.text('She suddenly starts kissing him as he undresses her.');
    scene.img('images/locations/pavlovsk/hotel/sex/resep_event3.jpg');
    scene.text('Once she\'s naked, she drops to her knees and takes his stiff cock into her mouth.');
    scene.text('Her lips glide down the length of his shaft, leaving a trail of shiny saliva behind before she focuses on sucking on the head.');
    scene.img('images/locations/pavlovsk/hotel/sex/resep_event4.jpg');
    scene.text('She suddenly pops his dick out of her mouth before she wraps her breasts around it and starts titfucking him.');
    scene.text('"Miss Tanich, please slow down! I don\'t want to blow my load before I get to try that sweet little pussy of yours."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/hotel/sex/resep_event5.jpg');
    scene.text('She releases his cock and pushes him down on to the bench. She then turns around and slowly lowers her hips down, moaning as his cock slides into her pussy.');
    scene.text('She starts riding him as he reaches around and squeezes her breasts.');
    scene.text('He pinches her nipple, causing her to yelp. He just laughs and does it again.');
    scene.img('images/locations/pavlovsk/hotel/sex/resep_event6.jpg');
    scene.text('After a few minutes, she turns around and starts riding him as they face each other.');
    scene.text('You can see from the look on the manager\'s face that he\'s having trouble keeping up with her.');
    qspCall(st, 'arousal', 'voyeur_sex', 60);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/hotel/sex/resep_event7.jpg');
    scene.text('"Okay, my turn now," the manager suddenly yells.');
    scene.text('It seems like the desk girl knows exactly what he means by that since she immediately dismounts him and gets down on all fours.');
    scene.text('He moves in behind her and starts fucking her doggystyle, but does not last very long.');
    scene.text('After a few minutes, he yells out again and pulls out of her pussy just before blowing his load all over her ass.');
    scene.img('images/locations/pavlovsk/hotel/sex/resep_event8.jpg');
    scene.text('"Thank you, Miss Tanich. I believe your monthly bonus is again very much deserved."');
    scene.text('She just smiles at him while showing off her cum covered ass.');
    scene.text('You have seen enough and quietly go back to your room.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((st as any).therapistQW ?? 0)?.['hotel_key'] === 3) {
      qspGoto(st, 'HotelRoom', 'therapist');
    } else {
      if (((st as any).HotelRoom ?? 0)?.['pav'] === 1) {
        qspGoto(st, 'HotelRoom', 'normal');
      } else {
        if (((st as any).HotelRoom ?? 0)?.['pav'] === 2) {
          qspGoto(st, 'HotelRoom', 'better');
        } else {
          if (((st as any).HotelRoom ?? 0)?.['pav'] === 3) {
            qspGoto(st, 'HotelRoom', 'best');
          }
        }
      }
    }
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterPavlin(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/pavlin/pavlin.jpg');
  scene.text(`Varsonofy Krestovoz is a small time gangster who makes his money whoring out vulnerable women in Pavlovsk. Few people know his real name since he's usually called ${(((s as any).npc_nickname ?? 0)?.['A217'] ?? '')} (the Peacock).`);
  if (((s as any).npc_rel ?? 0)?.['A217'] === -1) {
    scene.text(`${(((s as any).npc_nickname ?? 0)?.['A217'] ?? '')} killed your unborn baby; you truly hate him. You should go find some help if you don't want these negative feelings to completely take over your personality.`);
  }
  if (((s as any).npc_rel ?? 0)?.['A217'] < 20  &&  ((s as any).npc_rel ?? 0)?.['A217'] >= 0) {
    scene.text(`You and ${(((s as any).npc_nickname ?? 0)?.['A217'] ?? '')} have a dysfunctional relationship. You work for him, but are just one of many girls.`);
  }
  if (((s as any).npc_rel ?? 0)?.['A217'] >= 20  &&  ((s as any).npc_rel ?? 0)?.['A217'] < 40) {
    scene.text(`You understand ${(((s as any).npc_nickname ?? 0)?.['A217'] ?? '')} a little better. You know he has an extremely violent side, but have figured out some strategies to avoid these outbursts.`);
  }
  if (((s as any).npc_rel ?? 0)['A217' ] >= 40  &&  ((s as any).npc_rel ?? 0)?.['A217'] < 60) {
    scene.text(`You and ${(((s as any).npc_nickname ?? 0)?.['A217'] ?? '')} have a normal relationship.`);
  }
  if (((s as any).npc_rel ?? 0)?.['A217'] >= 60  &&  ((s as any).npc_rel ?? 0)?.['A217'] < 80) {
    scene.text(`You and ${(((s as any).npc_nickname ?? 0)?.['A217'] ?? '')} have a good relationship.`);
  }
  if (((s as any).npc_rel ?? 0)?.['A217'] >= 80) {
    scene.text(`You and ${(((s as any).npc_nickname ?? 0)?.['A217'] ?? '')} have a great relationship.`);
  }
  if (((s as any).proshotelday ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Perform your duty', goto: ['pavlin', 'pavgenpros'] },
    ]);
  }
  if (((s as any).firstfemalecust ?? 0) === 1) {
    if (((s as any).pavprosnofemales ?? 0) === 1) {
      scene.actions([
        { label: 'Start taking female customers', handler: (st: GameState) => {
    (st as any).pavprosnofemales = 0;
    scene.text(`"${(((st as any).npc_nickname ?? 0)?.['A217'] ?? '')}, I wanted to talk to you about… I want to start taking on female customers."`);
    scene.text('"Sure, I can set those up. They usually pay better anyway."');
    scene.actions([
      { label: 'Finish', goto: ['pav_hotel', 'Pavlin'] },
    ]);
  } },
      ]);
    } else {
      qspCall(s, 'willpower', 'prostitution', 'self', 'hard');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Stop taking female customers', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Stop taking female customers', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'prostitution', 'self', 'hard');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    (st as any).pavprosnofemales = 0;
    scene.text(`"${(((st as any).npc_nickname ?? 0)?.['A217'] ?? '')}, I wanted to talk to you about… I want to stop taking on female customers."`);
    scene.text('"Fine. If you really don\'t want to do it, then I\'ll only get you male customers."');
    scene.actions([
      { label: 'Finish', goto: ['pav_hotel', 'Pavlin'] },
    ]);
  } },
        ]);
      }
    }
  }
  if (((s as any).npc_rel ?? 0)?.['A217'] >= 40) {
    scene.actions([
      { label: 'Have a chat', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/pavlin/pavlin.jpg');
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    if (((st as any).pavchat ?? 0) !== ((st as any).daystart ?? 0)) {
      qspCall(st, 'npc_relationship', 'modify', 'A217', 2);
    }
    (st as any).pavchat = ((st as any).daystart ?? 0);
    (st as any).talkrand = (Math.floor(Math.random() * 7) + 0);
    qspCall(st, 'stat', '');
    if ((!((st as any).talkrand ?? 0))) {
      scene.text(`${(((st as any).npc_nickname ?? 0)?.['A217'] ?? '')} complains about how hard it is to find decent girls in a hellhole like Pavlovsk.`);
      scene.text('…');
      scene.text('"You\'re the first decent girl to work for me since I set up shop here two years ago."');
      scene.text('You smile and thank him for the compliment.');
    } else {
      if (((st as any).talkrand ?? 0) === 1) {
        scene.text(`You tell ${(((st as any).npc_nickname ?? 0)?.['A217'] ?? '')} you love going to the city and spending your money at the shopping center. You ask him if he wants to join you the next time you go.`);
        scene.text(`"I'm sorry ${((st as any).pcs_firstname ?? '')}, but I can never go back to the city."`);
        scene.text('He takes a sip of his beer and suddenly looks very depressed.');
        scene.text('It looks like you really hit a nerve there. You wonder what that\'s about.');
      } else {
        if (((st as any).talkrand ?? 0) === 2) {
          scene.text(`${(((st as any).npc_nickname ?? 0)?.['A217'] ?? '')} tells you a story from his childhood.`);
          scene.text('"My father used to beat me every day. One day when I was 12, after another savage beating, I asked my mother to do something about it.');
          scene.text('He snorts. "The bitch started giving me another beating and locked me out on the balcony in my underpants for 2 hours. This was in the middle of January, so I got lucky I didn\'t freeze to death."');
          scene.text('It seems like he had a very rough childhood.');
        } else {
          if (((st as any).talkrand ?? 0) === 3) {
            scene.text(`${(((st as any).npc_nickname ?? 0)?.['A217'] ?? '')} tells you a story from his childhood.`);
            scene.text('"My father frequently brought working girls to the house for punishment. If they were lucky, he just beat them up. If their mistake was worse, then he would involve my mother and she…"');
            scene.text('"Let\'s just say that these girls would never go against my father\'s wishes again once my mother was done with them."');
            scene.text('"I always felt sorry for them and didn\'t want to watch, but they always forced me."');
            scene.text('It seems like he had a very rough childhood.');
          } else {
            if (((st as any).talkrand ?? 0) === 4) {
              scene.text(`${(((st as any).npc_nickname ?? 0)?.['A217'] ?? '')} tells you how he got in this business.`);
              scene.text('"I basically followed my father\'s footsteps. When I was 19, I ran my first girl on the streets of St. Petersburg. Too bad she had a nasty habit of always talking back to me."');
              scene.text('"Knocking her teeth out helped a lot with that. Too bad it made her too ugly to be profitable, ha ha ha!"');
              scene.text('He lets out an evil laugh and you don\'t think that was a joke.');
            } else {
              if (((st as any).talkrand ?? 0) === 5) {
                scene.text(`${(((st as any).npc_nickname ?? 0)?.['A217'] ?? '')} tells you a story from his childhood.`);
                scene.text('"One day, when I was 6 years old, I accidentally broke one of my mother\'s crystal figurines. She hit me over the head with her heels so hard you can still see the scar."');
                scene.text('He moves his head towards you and moves his hair away. You indeed see a big scar on his scalp.');
                scene.text('"After that, she refused to feed me for 2 weeks, so I had to get by with scraps I found in the garbage."');
                scene.text('It seems like he had a very rough childhood.');
              } else {
                if (((st as any).talkrand ?? 0) === 6) {
                  scene.text(`"You will never disobey me, right ${((st as any).pcs_firstname ?? '')}? Your face is so pretty… I really don't want to mess that up…"`);
                  scene.text(`"What are you saying, ${(((st as any).npc_nickname ?? 0)?.['A217'] ?? '')}? Stop that! You're scaring me…"`);
                  scene.text('"What? I give you a compliment and you get <i>scared</i>? You don\'t have to fear me, I wouldn\'t hurt a fly."');
                  scene.text('He\'s clearly had too much to drink and is talking nonsense.');
                }
              }
            }
          }
        }
      }
    }
    scene.actions([
      { label: 'Finish', goto: ['pav_hotel', 'Pavlin'] },
    ]);
  } },
    ]);
  }
  if (((s as any).pavlevent ?? 0) === 1  &&  ((s as any).pavldaystart2 ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Discuss the beating', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/pavlin/pavlin.jpg');
    if (((st as any).pavldaystart ?? 0) === ((st as any).daystart ?? 0)) {
      (st as any).PavlinQW = 5;
      scene.text(`Before you can even say one word, ${(((st as any).npc_nickname ?? 0)?.['A217'] ?? '')} is already yelling at you.`);
      if ((!((st as any).pavldom ?? 0))) {
        scene.text('"Didn\'t you have enough with one black eye? Do you really need another?"');
      } else {
        scene.text('"You\'re lucky we\'re in a public place right now or I would fucking murder you!"');
      }
      scene.text(`"Go away, ${((st as any).pcs_firstname ?? '')}! I'm too angry right now. We can discuss this later."`);
      (st as any).pavldaystart2 = ((st as any).daystart ?? 0);
    } else {
      if ((!((st as any).pavtalk ?? 0))) {
        (st as any).PavlinQW = 6;
        scene.text(`"${(((st as any).npc_nickname ?? 0)?.['A217'] ?? '')}, I…" you start, but he immediately interrupts you.`);
        scene.text(`"I hope you learned your lesson, ${((st as any).pcs_firstname ?? '')}. I'm sorry I had to do that, but you need to understand the situation here."`);
        scene.text('You were hoping you could have an honest conversation with him about the incident, but it\'s clear that that\'s not possible, at least not yet.');
        (st as any).pavtalk = 1;
        (st as any).pavldaystart2 = ((st as any).daystart ?? 0);
      } else {
        if (((st as any).pavtalk ?? 0) === 1) {
          scene.text(`"${(((st as any).npc_nickname ?? 0)?.['A217'] ?? '')}, I need…" you start, but he immediately interrupts you.`);
          scene.text('"What now?! Stop bothering me and get back to work!"');
          scene.text('You were hoping you could have an honest conversation with him about the incident, but it\'s clear that that\'s not possible, at least not yet.');
          (st as any).pavtalk = 2;
          (st as any).pavldaystart2 = ((st as any).daystart ?? 0);
        } else {
          if (((st as any).pavtalk ?? 0) === 2) {
            scene.text(`"${(((st as any).npc_nickname ?? 0)?.['A217'] ?? '')}, I need to talk…" you start, but he immediately interrupts you.`);
            scene.text(`"I think I made myself clear, ${((st as any).pcs_firstname ?? '')}. Get back to work."`);
            scene.text('For the first time since you met him, you can see a glimpse of insecurity in his eyes. You might be getting through to him.');
            (st as any).pavtalk = 3;
          } else {
            if (((st as any).pavtalk ?? 0) === 3) {
              scene.text(`"${(((st as any).npc_nickname ?? 0)?.['A217'] ?? '')}, I need to talk to you about our… little incident…"`);
              scene.text('"I\'m very sorry for my behaviour. I don\'t know what came over me. I had a very bad day and your request was just the final drop. I hope you can forgive me and we can still work together."');
              scene.text('"I was really shocked by the way you treated me and I need assurances it won\'t happen again," you reply.');
              scene.text(`"Of course, ${((st as any).pcs_firstname ?? '')}. From here on out, I will treat you with the respect you deserve. And I was not kidding about the money. I'll need a bigger share in the future."`);
              scene.text('"Okay. I will see what I can do about that."');
              (st as any).minut = ((st as any).minut ?? 0) + 4;
              qspCall(st, 'npc_relationship', 'set', 'A217', 7);
              (st as any).PavlinQW = 7;
              (st as any).pavlevent = 2;
              (st as any).pavldaystart2 = ((st as any).daystart ?? 0);
            }
          }
        }
      }
    }
    scene.actions([
      { label: 'Move away', goto: ['pav_hotel', 'skip_resepevent'] },
    ]);
  } },
    ]);
  }
  if (((s as any).npc_rel ?? 0)?.['A217'] > 19  &&  ((s as any).proshotelday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).TwinQW ?? 0) < 0) {
    if (((s as any).tmp_TwinQW_AskedToday ?? 0) < ((s as any).daystart ?? 0)) {
      scene.actions([
        { label: 'Fake Twins Request', handler: (st: GameState) => {
    (st as any).tmp_TwinQW_AskedToday = ((st as any).daystart ?? 0);
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/pavlin/pavlin.jpg');
    scene.text(`"${((st as any).pcs_firstname ?? '')}, I've got a guy who's willing to pay a LOT of money for a threesome with a set of twins. Do you happen to know a pair of twins who'd be down to make some quick cash?" ${(((st as any).npc_nickname ?? 0)?.['A217'] ?? '')} asks, looking hopeful.`);
    scene.text('You think for a moment before responding. "No, I don\'t. However, a lot of people say my sister and I look alike. If I wear my hair like hers and we put on enough make up, we could probably pass as twins."');
    scene.text('"That\'s a great idea! Do you think she would be willing to do this?" he asks, suddenly very excited at the prospect.');
    if (((st as any).sisterLesb ?? 0) < 5) {
      scene.text('"What? No, I was just saying we look alike. I wouldn\'t dare propose an idea like this to her."');
      scene.text('His excitement quickly dissolves into rage as he raises his hand up, ready to strike. "THEN WHY BRING HER UP, YOU STUPID CUNT?!"');
      scene.text(`You brace for the hit, closing your eyes tightly, but the slap never comes. You open your eyes to see ${(((st as any).npc_nickname ?? 0)?.['A217'] ?? '')} has backed off. You're confused at first, but notice that the people in the lobby are looking at the two of you after his little outburst.`);
      scene.text('You quickly stand up and leave him be. You probably shouldn\'t bring up this topic anymore unless you have a more positive response to this request.');
    } else {
      scene.text('You feel a tingling in your loins just thinking about your sister.');
      scene.text('"Of course she will!" you blurt out without thinking.');
      scene.text(`"That's fantastic, ${((st as any).pcs_firstname ?? '')}! Once you're ready, bring her over and I'll introduce you to the client."`);
      scene.text(`Realizing the commitment you just made, worry begins to seep into you. You hope your sister is really up for it, because you fear how ${(((st as any).npc_nickname ?? 0)?.['A217'] ?? '')} will react if you can't deliver.`);
      (st as any).TwinQW = 1;
      (st as any).tmp_TwinQW_AskedToday = undefined;
    }
    scene.actions([
      { label: 'Back to lobby', goto: ['pav_hotel', ''] },
    ]);
  } },
      ]);
    }
  }
  if (((s as any).npc_rel ?? 0)?.['A217'] > 29  &&  ((s as any).proshotelday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).ClownQW ?? 0) !== 1) {
    scene.actions([
      { label: 'Circus Request', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/pavlin/pavlin.jpg');
    scene.text(`"${((st as any).pcs_firstname ?? '')}, have you heard the circus is in town?"`);
    scene.text(`You look at ${(((st as any).npc_nickname ?? 0)?.['A217'] ?? '')} with a surprised stare. "I didn't know you were a fan of the circus. You want to go see a show or something?"`);
    scene.text('"What? No, don\'t be silly, girl! A circus here means at least 50 guys in town who are looking for a good time after the shows."');
    scene.text('"And sometimes even between the shows!" he laughs. "I actually have two performers waiting on a girl right now. I called a girl, but she\'s still 10 minutes out. They\'re getting restless because they need to start their next show soon. Do you think you can take them?"');
    scene.actions([
      { label: 'No thanks', handler: (st: GameState) => {
    scene.text('"No thanks. I\'ll just take a regular customer today."');
    scene.text('"No problem. One regular john coming right up. You can go ahead to the usual room."');
    scene.actions([
      { label: 'Perform your duty', goto: ['pavlin', 'pavgenpros'] },
    ]);
  } },
      { label: 'Sure', handler: (st: GameState) => {
    scene.text('"Okay, you can go ahead to room 312. They\'re expecting you."');
    scene.text(`${(((st as any).npc_nickname ?? 0)?.['A217'] ?? '')} gives you the key for the hotel room.`);
    scene.actions([
      { label: 'Go to room 312', goto: ['pavlin', 'clown'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).npc_rel ?? 0)?.['A217'] > 39  &&  ((s as any).proshotelday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).preghumdone ?? 0) !== 1) {
    scene.actions([
      { label: 'Pregnant Request', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/pavlin/pavlin.jpg');
    scene.text(`"${((st as any).pcs_firstname ?? '')}, I received a request for a pregnant girl today. A pregnant girl! How the hell am I going to find a girl that's pregnant and willing to do this shit?" he says while shaking his head.`);
    if (((st as any).knowpreg ?? 0) === 1  &&  ((st as any).pregChem ?? 0) >= 3600) {
      scene.text(`You feel anger towards ${(((st as any).npc_nickname ?? 0)?.['A217'] ?? '')} rising up inside you. "Do you ever pay attention to me? Can't you see I am pregnant?" you say while gesturing at your swollen belly.`);
      scene.text('"Of course I know that!" His brows furrow, letting you know he\'s getting mad. Butterflies flutter in your stomach, fear trying to match up with the anger.');
      scene.text('His expression softens a little before continuing. "This customer has some pretty weird requests. Are you up for it?"');
      scene.actions([
        { label: 'Not really', goto: ['pav_hotel', 'Pavlin'] },
        { label: 'What kind of weird requests?', handler: (st: GameState) => {
    scene.text('"He told me he\'s really in to pissing pregnant chicks," he says and you cringe at the idea.');
    scene.text('"Fucking degenerates, right? But he\'s offering a boatload of cash! Are you really up for it?"');
    scene.actions([
      { label: 'For the right price', goto: ['pavlin', 'PregBDSM'] },
      { label: 'Not really', goto: ['pav_hotel', 'Pavlin'] },
    ]);
  } },
        { label: 'For the right price', goto: ['pavlin', 'PregBDSM'] },
      ]);
    } else {
      if (((st as any).knowpreg ?? 0) === 1  &&  ((st as any).pregChem ?? 0) < 3600) {
        scene.text('"I\'m pregnant, but I\'m not really showing yet."');
        scene.text('"That\'s great. Once you\'re showing, come to me again and I\'ll introduce you."');
        scene.actions([
          { label: 'Okay', goto: ['pav_hotel', 'Pavlin'] },
        ]);
      } else {
        if ((!((st as any).knowpreg ?? 0))) {
          scene.text(`${(((st as any).npc_nickname ?? 0)?.['A217'] ?? '')} looks at your body and you know what he's thinking.`);
          scene.text('"Yeah, that\'s definitely tough. Good luck with that," you say before quickly leaving.');
          scene.actions([
            { label: 'Back to lobby', goto: ['pav_hotel', ''] },
          ]);
        }
      }
    }
  } },
    ]);
  }
  scene.actions([
    { label: 'Move away', goto: ['pav_hotel', 'skip_resepevent'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'skip_resepevent':
      enterSkipResepevent(s, scene);
      break;
    case 'poster':
      enterPoster(s, scene);
      break;
    case 'resep_event1':
      enterResepEvent1(s, scene);
      break;
    case 'resep_event2':
      enterResepEvent2(s, scene);
      break;
    case 'resep_event3':
      enterResepEvent3(s, scene);
      break;
    case 'Pavlin':
      enterPavlin(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pav_hotel: LocationDef = {
  name: 'pav_hotel',
  title: '<a href="#" onclick="window.__gameStore.getState().doGoto(/u',
  region: 'pavlovsk',
  locationType: 'public_indoors',
  description: ['You sit in one of the comfortable chairs in the lobby and watch the guests checking in and out.'],
  enter: enter,
};
