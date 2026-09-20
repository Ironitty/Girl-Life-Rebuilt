import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterNormal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'HotelRoom', 'normal');
  (s as any).location_type = 'private';
  (s as any).hotelWiFi = 1;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'internet_mobile', 'get_access', 'free');
  qspCall(s, 'music_actions', 'clear_restrictions');
  scene.text('<center><b>Your normal hotel room</b></center>');
  // TODO-QSP: dynamic text: <center>You have paid to stay for <<hotelRoomDays[$region] - daystart>> more nig...
  scene.text(`<center>You have paid to stay for ${((s as any).hotelRoomDays ?? 0)?.[String((s as any).region ?? 0)] - ((s as any).daystart ?? '')} more nights.</center>`);
  scene.img('images/locations/pavlovsk/hotel/hotel.room.normal.jpg');
  scene.text('Your hotel room is not very large, but it has everything you need and is quite stylish. The large <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027bed/u0027, /u0027/u0027); return false;">double bed</a> takes up most of the room. A modern <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027wardrobe/u0027, /u0027start/u0027); return false;">wardrobe</a> stands near the entrance of the room. Next to the door, you can find a <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">mirror</a>. The door to the <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027HotelRoom/u0027, /u0027shower1/u0027); return false;">bathroom</a> is to the right.');
  // TODO-QSP: 'Your hotel room also has a <a href="exec:gt ''HotelRoom'',''tv''">TV</a>' + iif(mc_inventory['tech_...
  if (((s as any).ml_guitar ?? 0)?.['location'] === ((s as any).loc ?? 0)) {
    scene.text('Your guitar rests on its stand next to your bed.');
  }
  qspCall(s, 'music_actions', 'start');
  if (((s as any).HotelRoom ?? 0)?.[String((s as any).region ?? 0)] !== 0) {
    if (((s as any).HotelRoom ?? 0)[((s as any).region ?? 0) + '_room_service_free'] === 1) {
      scene.actions([
        { label: 'Order room service (0:30)', handler: (st: GameState) => {
    qspCall(st, 'food', 'hotel_food');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Order room service (0:30)', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 100) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'food', 'hotel_food');
    }
  } },
      ]);
    }
    qspCall(s, 'core_library', 'kitchen', 'hotel');
    if (((s as any).region ?? 0) === 'pav') {
      qspCall(s, 'prostitution_functions', 'prostitute_outfit_at_home');
    }
    qspCall(s, 'wardrobe', 'default_clothing_options');
    qspCall(s, 'blackmailer', 'open_package_act');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the hotel lobby', handler: (st: GameState) => {
    if (((st as any).clothingworntype ?? 0) !== 'nude') {
      (st as any).hotelWiFi = 0;
      if (((st as any).region ?? 0) === 'pav') {
        qspGoto(st, 'pav_hotel', '');
      } else {
        qspGoto(st, 'city_hotel', '');
      }
    } else {
      qspGoto(st, 'HotelRoom', 'normal');
    }
  } },
  ]);
  scene.build();
}

function enterBetter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'HotelRoom', 'better');
  (s as any).location_type = 'private';
  (s as any).hotelWiFi = 1;
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'stat', '');
  qspCall(s, 'internet_mobile', 'get_access', 'free');
  qspCall(s, 'music_actions', 'clear_restrictions');
  scene.text('<center><b>Your luxury room</b></center>');
  // TODO-QSP: dynamic text: <center>You have paid to stay for <<hotelRoomDays[$region] - daystart>> more nig...
  scene.text(`<center>You have paid to stay for ${((s as any).hotelRoomDays ?? 0)?.[String((s as any).region ?? 0)] - ((s as any).daystart ?? '')} more nights.</center>`);
  scene.img('images/locations/pavlovsk/hotel/hotel.room.better.jpg');
  scene.text('Your hotel room is not very large, but it has everything you need and is quite stylish. The large <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027bed/u0027, /u0027/u0027); return false;">double bed</a> takes up most of the room. A modern <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027wardrobe/u0027, /u0027start/u0027); return false;">wardrobe</a> stands near the entrance of the room. Next to the door, you can find a <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">mirror</a>. The door to the <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027HotelRoom/u0027, /u0027shower1/u0027); return false;">bathroom</a> is to the right.');
  // TODO-QSP: 'Your hotel room also has a small flat-screen <a href="exec:gt ''HotelRoom'',''tv''">TV</a>'+iif(mc_...
  if (((s as any).ml_guitar ?? 0)?.['location'] === ((s as any).loc ?? 0)) {
    scene.text('Your guitar rests on its stand next to your bed.');
  }
  qspCall(s, 'music_actions', 'start');
  if (((s as any).HotelRoom ?? 0)?.[String((s as any).region ?? 0)] !== 0) {
    if (((s as any).HotelRoom ?? 0)[((s as any).region ?? 0) + '_room_service_free'] === 1) {
      scene.actions([
        { label: 'Order room service (0:30)', handler: (st: GameState) => {
    qspCall(st, 'food', 'hotel_food');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Order room service (0:30)', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 100) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'food', 'hotel_food');
    }
  } },
      ]);
    }
    qspCall(s, 'core_library', 'kitchen', 'hotel');
    if (((s as any).region ?? 0) === 'pav') {
      qspCall(s, 'prostitution_functions', 'prostitute_outfit_at_home');
    }
    qspCall(s, 'blackmailer', 'open_package_act');
    scene.actions([
      { label: 'Have a coffee (0:05)', handler: (st: GameState) => {
    qspCall(st, 'beverage', 'coffee');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the hotel lobby', handler: (st: GameState) => {
    if (((st as any).clothingworntype ?? 0) !== 'nude') {
      (st as any).hotelWiFi = 0;
      if (((st as any).region ?? 0) === 'pav') {
        qspGoto(st, 'pav_hotel', '');
      } else {
        qspGoto(st, 'city_hotel', '');
      }
    } else {
      qspGoto(st, 'HotelRoom', 'better');
    }
  } },
  ]);
  scene.build();
}

function enterBest(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'HotelRoom', 'best');
  (s as any).location_type = 'private';
  (s as any).hotelWiFi = 1;
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'stat', '');
  qspCall(s, 'internet_mobile', 'get_access', 'free');
  qspCall(s, 'music_actions', 'clear_restrictions');
  scene.text('<center><b>Your Royal Suite</b></center>');
  // TODO-QSP: dynamic text: <center>You have paid to stay for <<hotelRoomDays[$region] - daystart>> more nig...
  scene.text(`<center>You have paid to stay for ${((s as any).hotelRoomDays ?? 0)?.[String((s as any).region ?? 0)] - ((s as any).daystart ?? '')} more nights.</center>`);
  scene.img('images/locations/pavlovsk/hotel/hotel.room.best.jpg');
  scene.text('Your hotel room is quite spacious, and is beautifully furnished; you wonder why a hotel in a town like Pavlovsk even has such a luxurious suite. The gorgeous <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027bed/u0027, /u0027/u0027); return false;">double bed</a> takes up most of the room. A modern <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027wardrobe/u0027, /u0027start/u0027); return false;">wardrobe</a> stands near the entrance of the room. Next to the door, you can find a <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">mirror</a>. The door to the <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027HotelRoom/u0027, /u0027shower1/u0027); return false;">bathroom</a> is to the right.');
  // TODO-QSP: 'Your hotel room also has a huge flat-screen <a href="exec:gt ''HotelRoom'',''tv''">TV</a>'+iif(mc_i...
  if (((s as any).ml_guitar ?? 0)?.['location'] === ((s as any).loc ?? 0)) {
    scene.text('Your guitar rests on its stand next to your bed.');
  }
  qspCall(s, 'music_actions', 'start');
  if (((s as any).HotelRoom ?? 0)?.[String((s as any).region ?? 0)] !== 0) {
    if (((s as any).HotelRoom ?? 0)[((s as any).region ?? 0) + '_room_service_free'] === 1) {
      scene.actions([
        { label: 'Order room service (0:30)', handler: (st: GameState) => {
    qspCall(st, 'food', 'hotel_food');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Order room service (0:30)', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 100) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'food', 'hotel_food');
    }
  } },
      ]);
    }
    qspCall(s, 'core_library', 'kitchen', 'hotel');
    if (((s as any).region ?? 0) === 'pav') {
      qspCall(s, 'prostitution_functions', 'prostitute_outfit_at_home');
    }
    qspCall(s, 'blackmailer', 'open_package_act');
    scene.actions([
      { label: 'Have a coffee (0:05)', handler: (st: GameState) => {
    qspCall(st, 'beverage', 'coffee');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the hotel lobby', handler: (st: GameState) => {
    if (((st as any).clothingworntype ?? 0) !== 'nude') {
      (st as any).hotelWiFi = 0;
      if (((st as any).region ?? 0) === 'pav') {
        qspGoto(st, 'pav_hotel', '');
      } else {
        qspGoto(st, 'city_hotel', '');
      }
    } else {
      qspGoto(st, 'HotelRoom', 'best');
    }
  } },
  ]);
  scene.build();
}

function enterTherapist(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'schedule', 'A186');
  qspCall(s, 'core_library', 'setloc', 'HotelRoom', 'therapist');
  if (((s as any).prevloc ?? 0) !== ((s as any).loc ?? 0)) {
    qspGoto(s, 'therapist_home', 'hotel_enter');
  }
  (s as any).location_type = 'private';
  (s as any).hotelWiFi = 1;
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'stat', '');
  qspCall(s, 'internet_mobile', 'get_access', 'free');
  qspCall(s, 'music_actions', 'clear_restrictions');
  scene.text('<center><b>Your husband\'s hotel room</b></center>');
  scene.img('images/characters/pavlovsk/resident/therapist/room.jpg');
  scene.text('Your hotel room is not very large, but it has everything you need and is quite stylish. The large <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027bed/u0027, /u0027/u0027); return false;">double bed</a> takes up most of the room. A modern <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027therapist_home/u0027, /u0027wardrobe/u0027, /u0027start/u0027); return false;">wardrobe</a> stands near the entrance of the room. Next to the door, you can find a <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">mirror</a>. The door to the <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027HotelRoom/u0027, /u0027shower1/u0027); return false;">bathroom</a> is to the right.');
  // TODO-QSP: 'Your hotel room also has a small flat-screen <a href="exec:gt ''HotelRoom'',''tv''">TV</a>'+iif(mc_...
  if (((s as any).ml_guitar ?? 0)?.['location'] === ((s as any).loc ?? 0)) {
    scene.text('Your guitar rests on its stand next to your bed.');
  }
  qspCall(s, 'music_actions', 'start');
  if (((s as any).hour ?? 0) === 17  &&  ((s as any).minut ?? 0) >= 45  ||  ((s as any).hour ?? 0) === 18) {
    scene.actions([
      { label: 'Cook dinner (0:30)', goto: ['therapist_home', 'cook'] },
    ]);
  } else {
    scene.actions([
      { label: 'Order room service (0:30)', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 100) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'food', 'hotel_food');
    }
  } },
    ]);
  }
  qspCall(s, 'core_library', 'kitchen', 'hotel');
  qspCall(s, 'therapist_home', 'set_Hotelacts');
  qspCall(s, 'blackmailer', 'open_package_act');
  if (((s as any).pcs_sweat ?? 0) >= 20  &&  ((s as any).locat ?? 0)?.['A186'] === 2) {
    scene.text('"Hun, you need a shower. Go clean up," he says and you go to the bathroom and clean up.');
    scene.actions([
      { label: 'Take a shower (0:10)', goto: ['therapist_home', 'shower'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Put on your clothes and go to the hotel lobby', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'wear_last_worn');
    if (((st as any).clothingworntype ?? 0) !== 'nude') {
      (st as any).hotelWiFi = 0;
      qspGoto(st, 'pav_hotel', '');
    } else {
      qspGoto(st, 'HotelRoom', 'therapist');
    }
  } },
    { label: 'Have a coffee (0:05)', handler: (st: GameState) => {
    qspCall(st, 'beverage', 'coffee');
  } },
  ]);
  scene.build();
}

function enterShower1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  ((s as any).hotelmc_inventory = (s as any).hotelmc_inventory ?? {})['shampoo'] = 1;
  qspCall(s, 'core_library', 'setloc', 'HotelRoom', 'shower1');
  (s as any).location_type = 'bathroom';
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'stat', '');
  scene.text('<center><b>The bathroom of your hotel room</b></center>');
  if (((s as any).HotelRoom ?? 0)?.[String((s as any).region ?? 0)] === 1) {
    scene.img('images/locations/pavlovsk/hotel/hotel.room.normal1.jpg');
    scene.text('A small and unpretentious bathroom, that is nevertheless quite stylish and has everything you need.');
  } else {
    if (((s as any).HotelRoom ?? 0)?.[String((s as any).region ?? 0)] === 2  ||  ((s as any).therapistQW ?? 0)?.['hotel_key'] === 3) {
      scene.img('images/locations/pavlovsk/hotel/hotel.room.better1.jpg');
      scene.text('A nice looking and spacious bathroom, with separate bathtub.');
    } else {
      if (((s as any).HotelRoom ?? 0)?.[String((s as any).region ?? 0)] === 3) {
        scene.img('images/locations/pavlovsk/hotel/hotel.room.best1.jpg');
        scene.text('A very luxurious and spacious bathroom, fit for a king.');
      }
    }
  }
  if (((s as any).HotelRoom ?? 0)?.[String((s as any).region ?? 0)] === 0  &&  ((s as any).therapistQW ?? 0)?.['hotel_key'] !== 3) {
    scene.actions([
      { label: 'Return to lobby (It is past check out time)', handler: (st: GameState) => {
    (st as any).hotelWiFi = 0;
    if (((st as any).region ?? 0) === 'pav') {
      qspGoto(st, 'pav_hotel', '');
    } else {
      qspGoto(st, 'city_hotel', '');
    }
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Return to your room', handler: (st: GameState) => {
    ((st as any).hotelmc_inventory = (st as any).hotelmc_inventory ?? {})['shampoo'] = 0;
    if (((st as any).therapistQW ?? 0)?.['hotel_key'] === 3) {
      qspGoto(st, 'HotelRoom', 'therapist');
    } else {
      if (((st as any).HotelRoom ?? 0)?.[String((st as any).region ?? 0)] === 1) {
        qspGoto(st, 'HotelRoom', 'normal');
      } else {
        if (((st as any).HotelRoom ?? 0)?.[String((st as any).region ?? 0)] === 2) {
          qspGoto(st, 'HotelRoom', 'better');
        } else {
          if (((st as any).HotelRoom ?? 0)?.[String((st as any).region ?? 0)] === 3) {
            qspGoto(st, 'HotelRoom', 'best');
          }
        }
      }
    }
  } },
    ]);
  }
  qspCall(s, 'din_van', 'private', 'HotelRoom', ((((s as any).HotelRoom ?? 0)?.[String((s as any).region ?? 0)] === 1) ? ('') : ('bath')));
  qspCall(s, 'home_events', 'bathroom');
  // TODO-QSP: end
  scene.build();
}

function enterTv(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'HotelRoom';
  (s as any).menu_arg = 'tv';
  qspCall(s, 'stat', '');
  if (((s as any).therapistQW ?? 0)?.['hotel_key'] === 3) {
    scene.img('images/locations/pavlovsk/hotel/tv2.jpg');
  } else {
    scene.img(`images/locations/pavlovsk/hotel/tv${((s as any).HotelRoom ?? '')}.jpg`);
  }
  scene.text('You turn on the TV and make yourself comfortable on the bed.');
  if (((s as any).HotelRoom ?? 0)?.[String((s as any).region ?? 0)] === 0  &&  ((s as any).therapistQW ?? 0)?.['hotel_key'] !== 3) {
    scene.actions([
      { label: 'Return to lobby (It is past checkout time)', handler: (st: GameState) => {
    (st as any).hotelWiFi = 0;
    if (((st as any).region ?? 0) === 'pav') {
      qspGoto(st, 'pav_hotel', '');
    } else {
      qspGoto(st, 'city_hotel', '');
    }
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Get up from the bed', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
      { label: 'Watch TV (1:00)', goto: ['HotelRoom', 'watch_tv'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterWatchTv(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'mood', 'raise', (Math.floor(Math.random() * 11) + 10));
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/hotel/tv0,' + (Math.floor(Math.random() * 5) + 0) + '.jpg');
  scene.text('You are watching the country\'s main television channel. None of their programs are really worth watching, but the distraction is welcome anyway.');
  if (((s as any).HotelRoom ?? 0)?.[String((s as any).region ?? 0)] === 0  &&  ((s as any).therapistQW ?? 0)?.['hotel_key'] !== 3) {
    scene.actions([
      { label: 'Return to lobby (It is past check out time)', handler: (st: GameState) => {
    (st as any).hotelWiFi = 0;
    if (((st as any).region ?? 0) === 'pav') {
      qspGoto(st, 'pav_hotel', '');
    } else {
      qspGoto(st, 'city_hotel', '');
    }
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Get up from the bed', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
      { label: 'Watch TV (1:00)', goto: ['HotelRoom', 'watch_tv'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hotelRoomDays ?? 0)?.[String((s as any).region ?? 0)] - ((s as any).daystart ?? 0) <= 0  &&  ((s as any).hour ?? 0) > 11) {
    ((s as any).HotelRoom = (s as any).HotelRoom ?? {})[String((s as any).region ?? 0)] = 0;
  }
  if (((s as any).hotelRoomDays ?? 0)?.[String((s as any).region ?? 0)] - ((s as any).daystart ?? 0) < 0) {
    ((s as any).HotelRoom = (s as any).HotelRoom ?? {})[String((s as any).region ?? 0)] = 0;
  }
  const arg = s.locArg;
  switch (arg) {
    case 'normal':
      enterNormal(s, scene);
      break;
    case 'better':
      enterBetter(s, scene);
      break;
    case 'best':
      enterBest(s, scene);
      break;
    case 'therapist':
      enterTherapist(s, scene);
      break;
    case 'shower1':
      enterShower1(s, scene);
      break;
    case 'tv':
      enterTv(s, scene);
      break;
    case 'watch_tv':
      enterWatchTv(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const HotelRoom: LocationDef = {
  name: 'HotelRoom',
  title: 'Your normal hotel room',
  region: 'other',
  locationType: 'bathroom',
  enter: enter,
};
