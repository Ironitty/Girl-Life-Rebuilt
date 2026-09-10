import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterNormal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'HotelRoom', 'normal');
  (s as any).hotelWiFi = 1;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'internet_mobile', 'get_access', 'free');
  qspCall(s, 'music_actions', 'clear_restrictions');
  scene.text('<center><b>Your normal hotel room</b></center>');
  // TODO-QSP: dynamic text: <center>You have paid to stay for <<hotelRoomDays[$region] - daystart>> more nig...
  scene.text(`<center>You have paid to stay for ${((s as any).hotelRoomDays ?? 0)?.[String((s as any).region ?? 0)] - ((s as any).daystart ?? 0)} more nights.</center>`);
  scene.img('images/locations/pavlovsk/hotel/hotel.room.normal.jpg');
  scene.text('Your hotel room is not very large, but it has everything you need and is quite stylish. The large <a href="exec:gt \'bed\'">double bed</a> takes up most of the room. A modern <a href="exec:gt \'wardrobe\', \'start\'">wardrobe</a> stands near the entrance of the room. Next to the door, you can find a <a href="exec:gt \'mirror\',\'start\'">mirror</a>. The door to the <a href="exec:gt \'HotelRoom\',\'shower1\'">bathroom</a> is to the right.');
  // TODO-QSP: 'Your hotel room also has a <a href="exec:gt ''HotelRoom'',''tv''">TV</a>' + iif(mc_inventory['tech_...
  if (((s as any).ml_guitar ?? 0)?.['location'] === ((s as any).loc ?? 0)) {
    scene.text('Your guitar rests on its stand next to your bed.');
  }
  qspCall(s, 'music_actions', 'start');
  if (((s as any).HotelRoom ?? 0)?.[String((s as any).region ?? 0)] !== 0) {
    if (((s as any).HotelRoom ?? 0)?.[String(((s as any).region ?? 0)) + '_room_service_free'] === 1) {
      scene.actions([
        { label: 'Order room service (0:30)', handler: (st: GameState) => {
    qspCall(st, 'food', 'hotel_food');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Order room service (0:30) [+$func(\'money\', \'get_cost_string\', 100)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 100) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'food', 'hotel_food');
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
  scene.actions([
    { label: 'Go to the hotel lobby', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) !== 'nude') {
      (s as any).hotelWiFi = 0;
      if (((s as any).region ?? 0) === 'pav') {
        scene.actions([{ label: 'Continue', goto: ['pav_hotel', ''] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['city_hotel', ''] }]);
      }
    } else {
      scene.actions([{ label: 'Continue', goto: ['HotelRoom', 'normal'] }]);
    }
  } },
  ]);
  scene.build();
}

function enterBetter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'HotelRoom', 'better');
  (s as any).hotelWiFi = 1;
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'stat', '');
  qspCall(s, 'internet_mobile', 'get_access', 'free');
  qspCall(s, 'music_actions', 'clear_restrictions');
  scene.text('<center><b>Your luxury room</b></center>');
  // TODO-QSP: dynamic text: <center>You have paid to stay for <<hotelRoomDays[$region] - daystart>> more nig...
  scene.text(`<center>You have paid to stay for ${((s as any).hotelRoomDays ?? 0)?.[String((s as any).region ?? 0)] - ((s as any).daystart ?? 0)} more nights.</center>`);
  scene.img('images/locations/pavlovsk/hotel/hotel.room.better.jpg');
  scene.text('Your hotel room is not very large, but it has everything you need and is quite stylish. The large <a href="exec:gt \'bed\'">double bed</a> takes up most of the room. A modern <a href="exec:gt \'wardrobe\', \'start\'">wardrobe</a> stands near the entrance of the room. Next to the door, you can find a <a href="exec:gt \'mirror\',\'start\'">mirror</a>. The door to the <a href="exec:gt \'HotelRoom\',\'shower1\'">bathroom</a> is to the right.');
  // TODO-QSP: 'Your hotel room also has a small flat-screen <a href="exec:gt ''HotelRoom'',''tv''">TV</a>'+iif(mc_...
  if (((s as any).ml_guitar ?? 0)?.['location'] === ((s as any).loc ?? 0)) {
    scene.text('Your guitar rests on its stand next to your bed.');
  }
  qspCall(s, 'music_actions', 'start');
  if (((s as any).HotelRoom ?? 0)?.[String((s as any).region ?? 0)] !== 0) {
    if (((s as any).HotelRoom ?? 0)?.[String(((s as any).region ?? 0)) + '_room_service_free'] === 1) {
      scene.actions([
        { label: 'Order room service (0:30)', handler: (st: GameState) => {
    qspCall(st, 'food', 'hotel_food');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Order room service (0:30) [+$func(\'money\', \'get_cost_string\', 100)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 100) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'food', 'hotel_food');
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
  scene.actions([
    { label: 'Go to the hotel lobby', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) !== 'nude') {
      (s as any).hotelWiFi = 0;
      if (((s as any).region ?? 0) === 'pav') {
        scene.actions([{ label: 'Continue', goto: ['pav_hotel', ''] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['city_hotel', ''] }]);
      }
    } else {
      scene.actions([{ label: 'Continue', goto: ['HotelRoom', 'better'] }]);
    }
  } },
  ]);
  scene.build();
}

function enterBest(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'HotelRoom', 'best');
  (s as any).hotelWiFi = 1;
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'stat', '');
  qspCall(s, 'internet_mobile', 'get_access', 'free');
  qspCall(s, 'music_actions', 'clear_restrictions');
  scene.text('<center><b>Your Royal Suite</b></center>');
  // TODO-QSP: dynamic text: <center>You have paid to stay for <<hotelRoomDays[$region] - daystart>> more nig...
  scene.text(`<center>You have paid to stay for ${((s as any).hotelRoomDays ?? 0)?.[String((s as any).region ?? 0)] - ((s as any).daystart ?? 0)} more nights.</center>`);
  scene.img('images/locations/pavlovsk/hotel/hotel.room.best.jpg');
  scene.text('Your hotel room is quite spacious, and is beautifully furnished; you wonder why a hotel in a town like Pavlovsk even has such a luxurious suite. The gorgeous <a href="exec:gt \'bed\'">double bed</a> takes up most of the room. A modern <a href="exec:gt \'wardrobe\', \'start\'">wardrobe</a> stands near the entrance of the room. Next to the door, you can find a <a href="exec:gt \'mirror\',\'start\'">mirror</a>. The door to the <a href="exec:gt \'HotelRoom\',\'shower1\'">bathroom</a> is to the right.');
  // TODO-QSP: 'Your hotel room also has a huge flat-screen <a href="exec:gt ''HotelRoom'',''tv''">TV</a>'+iif(mc_i...
  if (((s as any).ml_guitar ?? 0)?.['location'] === ((s as any).loc ?? 0)) {
    scene.text('Your guitar rests on its stand next to your bed.');
  }
  qspCall(s, 'music_actions', 'start');
  if (((s as any).HotelRoom ?? 0)?.[String((s as any).region ?? 0)] !== 0) {
    if (((s as any).HotelRoom ?? 0)?.[String(((s as any).region ?? 0)) + '_room_service_free'] === 1) {
      scene.actions([
        { label: 'Order room service (0:30)', handler: (st: GameState) => {
    qspCall(st, 'food', 'hotel_food');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Order room service (0:30) [+$func(\'money\', \'get_cost_string\', 100)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 100) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'food', 'hotel_food');
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
  scene.actions([
    { label: 'Go to the hotel lobby', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) !== 'nude') {
      (s as any).hotelWiFi = 0;
      if (((s as any).region ?? 0) === 'pav') {
        scene.actions([{ label: 'Continue', goto: ['pav_hotel', ''] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['city_hotel', ''] }]);
      }
    } else {
      scene.actions([{ label: 'Continue', goto: ['HotelRoom', 'best'] }]);
    }
  } },
  ]);
  scene.build();
}

function enterTherapist(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'schedule', 'A186');
  qspCall(s, 'core_library', 'setloc', 'HotelRoom', 'therapist');
  if (((s as any).prevloc ?? 0) !== ((s as any).loc ?? 0)) {
    scene.actions([{ label: 'Continue', goto: ['therapist_home', 'hotel_enter'] }]);
  }
  (s as any).hotelWiFi = 1;
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'stat', '');
  qspCall(s, 'internet_mobile', 'get_access', 'free');
  qspCall(s, 'music_actions', 'clear_restrictions');
  scene.text('<center><b>Your husband\'s hotel room</b></center>');
  scene.img('images/characters/pavlovsk/resident/therapist/room.jpg');
  scene.text('Your hotel room is not very large, but it has everything you need and is quite stylish. The large <a href="exec:gt \'bed\'">double bed</a> takes up most of the room. A modern <a href="exec:gt \'therapist_home\', \'wardrobe\', \'start\'">wardrobe</a> stands near the entrance of the room. Next to the door, you can find a <a href="exec:gt \'mirror\',\'start\'">mirror</a>. The door to the <a href="exec:gt \'HotelRoom\',\'shower1\'">bathroom</a> is to the right.');
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
      { label: 'Order room service (0:30) [+$func(\'money\', \'get_cost_string\', 100)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 100) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'food', 'hotel_food');
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
  scene.actions([
    { label: 'Put on your clothes and go to the hotel lobby', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'wear_last_worn');
    if (((s as any).clothingworntype ?? 0) !== 'nude') {
      (s as any).hotelWiFi = 0;
      scene.actions([{ label: 'Continue', goto: ['pav_hotel', ''] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['HotelRoom', 'therapist'] }]);
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
  (s as any).hotelmc_inventory['shampoo'] = 1;
  qspCall(s, 'core_library', 'setloc', 'HotelRoom', 'shower1');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'stat', '');
  scene.text('<center><b>The bathroom of your hotel room</b></center>');
  if (((s as any).HotelRoom ?? 0)?.[String((s as any).region ?? 0)] === 1) {
    scene.img('images/locations/pavlovsk/hotel/hotel.room.normal1.jpg');
    scene.text('A small and unpretentious bathroom, that is nevertheless quite stylish and has everything you need.');
  } else {
    scene.img('images/locations/pavlovsk/hotel/hotel.room.better1.jpg');
    scene.text('A nice looking and spacious bathroom, with separate bathtub.');
    if (((s as any).HotelRoom ?? 0)?.[String((s as any).region ?? 0)] === 3) {
      scene.img('images/locations/pavlovsk/hotel/hotel.room.best1.jpg');
      scene.text('A very luxurious and spacious bathroom, fit for a king.');
    }
    if (((s as any).HotelRoom ?? 0)?.[String((s as any).region ?? 0)] === 0  &&  ((s as any).therapistQW ?? 0)?.['hotel_key'] !== 3) {
      scene.actions([
        { label: 'Return to lobby (It is past check out time)', handler: (st: GameState) => {
    (s as any).hotelWiFi = 0;
    if (((s as any).region ?? 0) === 'pav') {
      scene.actions([{ label: 'Continue', goto: ['pav_hotel', ''] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['city_hotel', ''] }]);
    }
  } },
      ]);
    } else {
      qspCall(s, 'din_van', 'private', 'HotelRoom', ((((s as any).HotelRoom ?? 0)?.[String((s as any).region ?? 0)] === 1) ? ('') : ('bath')));
      qspCall(s, 'home_events', 'bathroom');
      scene.actions([
        { label: 'Return to your room', handler: (st: GameState) => {
    (s as any).hotelmc_inventory['shampoo'] = 0;
    if (((s as any).therapistQW ?? 0)?.['hotel_key'] === 3) {
      scene.actions([{ label: 'Continue', goto: ['HotelRoom', 'therapist'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['HotelRoom', 'normal'] }]);
      if (((s as any).HotelRoom ?? 0)?.[String((s as any).region ?? 0)] === 2) {
        scene.actions([{ label: 'Continue', goto: ['HotelRoom', 'better'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['HotelRoom', 'best'] }]);
      }
    }
  } },
      ]);
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
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
    default:
      enterNormal(s, scene);
      break;
  }
}

export const HotelRoom: LocationDef = {
  name: 'HotelRoom',
  title: 'Your normal hotel room',
  region: 'other',
  locationType: 'bathroom',
  description: ['Your guitar rests on its stand next to your bed.'],
  enter: enter,
};
