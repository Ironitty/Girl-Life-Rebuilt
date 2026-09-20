import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hotelRoomDays ?? 0)?.['city'] - ((s as any).daystart ?? 0) === 0  &&  ((s as any).hour ?? 0) > 11) {
    ((s as any).HotelRoom = (s as any).HotelRoom ?? {})['city'] = 0;
  }
  if (((s as any).hotelRoomDays ?? 0)?.['city'] - ((s as any).daystart ?? 0) < 0) {
    ((s as any).HotelRoom = (s as any).HotelRoom ?? {})['city'] = 0;
  }
  ((s as any).nom_o = (s as any).nom_o ?? {})[1] = 100;
  ((s as any).nom_o = (s as any).nom_o ?? {})[2] = 1000;
  ((s as any).nom_o = (s as any).nom_o ?? {})[3] = 10000;
  ((s as any).nom_o = (s as any).nom_o ?? {})[4] = 100000;
  qspCall(s, 'core_library', 'setloc', 'city_hotel', '');
  (s as any).region = 'city';
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/hotel/lobby.jpg');
  scene.text('You enter the hotel lobby, but all you can see is a bored looking girl standing at the reception desk.');
  if (((s as any).HotelRoom ?? 0)?.['city'] !== 0) {
    scene.actions([
      { label: 'Go to your room', handler: (st: GameState) => {
    if (((st as any).HotelRoom ?? 0)?.['city'] === 1) {
      qspGoto(st, 'HotelRoom', 'normal');
    }
    if (((st as any).HotelRoom ?? 0)?.['city'] === 2) {
      qspGoto(st, 'HotelRoom', 'better');
    }
    if (((st as any).HotelRoom ?? 0)?.['city'] === 3) {
      qspGoto(st, 'HotelRoom', 'best');
    }
  } },
    ]);
  }
  if (((s as any).week ?? 0) > 5  &&  ((s as any).hour ?? 0) === 14  &&  ((s as any).strip_club ?? 0)?.['porn_scout_pickup'] === 1) {
    scene.actions([
      { label: 'Go to the talent scout\'s room', goto: ['pickup_porn', 'talent_scout_meet'] },
    ]);
  }
  qspCall(s, 'lover', 'lover_events');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_center', ''] },
    { label: 'Go to the reception desk', goto: ['city_hotel', 'reception'] },
  ]);
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hotelRoomDays ?? 0)?.['city'] - ((s as any).daystart ?? 0) === 0  &&  ((s as any).hour ?? 0) > 11) {
    ((s as any).HotelRoom = (s as any).HotelRoom ?? {})['city'] = 0;
  }
  if (((s as any).hotelRoomDays ?? 0)?.['city'] - ((s as any).daystart ?? 0) < 0) {
    ((s as any).HotelRoom = (s as any).HotelRoom ?? {})['city'] = 0;
  }
  ((s as any).nom_o = (s as any).nom_o ?? {})[1] = 100;
  ((s as any).nom_o = (s as any).nom_o ?? {})[2] = 1000;
  ((s as any).nom_o = (s as any).nom_o ?? {})[3] = 10000;
  ((s as any).nom_o = (s as any).nom_o ?? {})[4] = 100000;
  qspCall(s, 'core_library', 'setloc', 'city_hotel', '');
  (s as any).region = 'city';
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/hotel/lobby.jpg');
  scene.text('You enter the hotel lobby, but all you can see is a bored looking girl standing at the reception desk.');
  if (((s as any).HotelRoom ?? 0)?.['city'] !== 0) {
    scene.actions([
      { label: 'Go to your room', handler: (st: GameState) => {
    if (((st as any).HotelRoom ?? 0)?.['city'] === 1) {
      qspGoto(st, 'HotelRoom', 'normal');
    }
    if (((st as any).HotelRoom ?? 0)?.['city'] === 2) {
      qspGoto(st, 'HotelRoom', 'better');
    }
    if (((st as any).HotelRoom ?? 0)?.['city'] === 3) {
      qspGoto(st, 'HotelRoom', 'best');
    }
  } },
    ]);
  }
  if (((s as any).week ?? 0) > 5  &&  ((s as any).hour ?? 0) === 14  &&  ((s as any).strip_club ?? 0)?.['porn_scout_pickup'] === 1) {
    scene.actions([
      { label: 'Go to the talent scout\'s room', goto: ['pickup_porn', 'talent_scout_meet'] },
    ]);
  }
  qspCall(s, 'lover', 'lover_events');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_center', ''] },
    { label: 'Go to the reception desk', goto: ['city_hotel', 'reception'] },
  ]);
  scene.build();
}

function enterReception(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/hotel/receptionist.jpg');
  scene.text('You walk up to the reception desk and are greeted by a smiling young woman behind the counter.');
  scene.text('"Hello. How can I help you?" she asks.');
  if (((s as any).tobiQW ?? 0) === 2000) {
    scene.actions([
      { label: 'Why is the hotel so crowded?', handler: (st: GameState) => {
    (st as any).tobiQW = 2001;
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    scene.text('"Why so the hotel so crowded today?" you ask.');
    scene.text('"There\'s a conference on indigenous languages. They meet every year and complain about their disappearing languages," she says with a laugh.');
    scene.actions([
      { label: 'Move away', goto: ['city_hotel', ''] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back to the foyer', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_hotel', ''] },
    { label: 'See the room descriptions', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'stat', '');
    scene.text('There are 4 types of rooms available:');
    scene.text('1. Budget: Our simple rooms, for the ones that just want a bed to sleep the night. There\'s a public bathroom shared with the rest of the floor.');
    scene.text('2. Standard: Our reasonably priced rooms. Every room features a private bathroom and TV.');
    scene.text('3. Suites: Our luxurious rooms. Alongside a private bathroom, there\'s also an extra living room.');
    scene.actions([
      { label: 'Continue', goto: ['city_hotel', 'reception'] },
    ]);
  } },
    { label: 'Rent a room', goto: ['city_hotel', 'rent_a_room'] },
  ]);
  scene.build();
}

function enterPayTheRoom(s: GameState, scene: SceneBuilder): void {
  (s as any).hotel_room_id = ((s as any).locArgs?.[1] ?? 0);
  if (qspFunc(s, 'money', 'can_afford', ((s as any).totalCost ?? 0)) === 0) {
    if (Number((s as any).locArgs?.[1] ?? 0) === 1) {
      scene.actions([
        { label: 'You can\'t afford to stay in the hotel for that long', goto: ['city_hotel', ''] },
      ]);
    }
    if (Number((s as any).locArgs?.[1] ?? 0) === 2) {
      scene.actions([
        { label: 'You can\'t afford to stay in a luxury room for that long', goto: ['city_hotel', ''] },
      ]);
    }
    if (Number((s as any).locArgs?.[1] ?? 0) === 3) {
      scene.actions([
        { label: 'You can\'t afford to stay in the Royal Suite for that long', goto: ['city_hotel', ''] },
      ]);
    }
  } else {
    scene.actions([
      { label: 'Pay ( [+$func(\'money\', \'string_price\', totalCost...]', handler: (st: GameState) => {
    qspCall(st, 'money', 'pay', ((st as any).totalCost ?? 0));
    ((st as any).HotelRoom = (st as any).HotelRoom ?? {})['city'] = ((st as any).hotel_room_id ?? 0);
    ((st as any).hotelRoomDays = (st as any).hotelRoomDays ?? {})['city'] = ((st as any).daystart ?? 0) + (((st as any).hotelRoomDays ?? {})?.['city'] ?? 0);
    scene.text('You pay for the room and she gives you the key in return.');
    // TODO-QSP: dynamic text: "Thank you ' + iif(pavHotelMaid = 0, 'miss', $pcs_nickname) +', I hope you enjoy...
    scene.text('"Thank you ' + (((!((st as any).pavHotelMaid ?? 0))) ? ('miss') : (((st as any).pcs_nickname ?? ''))) + ', I hope you enjoy your stay!"');
    scene.actions([
      { label: 'Step away from the reception desk', goto: ['city_hotel', ''] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Change your mind', handler: (st: GameState) => {
    qspGoto(st, 'city_hotel', '');
  } },
  ]);
  scene.build();
}

function enterRentARoom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/hotel/receptionist.jpg');
  scene.text('The girl behind the desk smiles at you. "Hello miss! Would you like to rent a room?"');
  if (((s as any).HotelRoom ?? 0)?.['city'] > 0) {
    scene.img('images/locations/city/citycenter/hotel/receptionist.jpg');
    scene.text('She looks at the computer. "I see you already have a room here. As it\'s already booked and paid for, the only way to change it to a different room would be to cancel your existing booking. To do so without notice would forfeit your payment. I would advise against this, but you may do so if you wish."');
    scene.actions([
      { label: 'Cancel your booking', handler: (st: GameState) => {
    // TODO-QSP: HotelRoom['city'] = 0
  }, goto: ['city_hotel', ''] },
      { label: 'No', goto: ['city_hotel', ''] },
    ]);
  } else {
    scene.actions([
      { label: 'Yes', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/hotel/receptionist.jpg');
    scene.text('She smiles at you happily. "Excellent! We have the following rooms available right now:"');
    // TODO-QSP: dynamic text: Standard room - ' + $func('money', 'string_price', 500) + ' a night;
    scene.text('Standard room - 500₽ a night;');
    // TODO-QSP: dynamic text: Luxury room - ' + $func('money', 'string_price', 1500) + ' a night;
    scene.text('Luxury room - 1500₽ a night;');
    // TODO-QSP: dynamic text: Royal Suite - ' + $func('money', 'string_price', 10000) + ' a night.
    scene.text('Royal Suite - 10000₽ a night.');
    scene.actions([
      { label: 'Standard room', handler: (st: GameState) => {
    ((st as any).hotelRoomDays = (st as any).hotelRoomDays ?? {})['city'] = 0;
    if (((st as any).hotelRoomDays ?? 0)?.['city'] > 0) {
      (st as any).totalCost = (((st as any).hotelRoomDays ?? {})?.['city'] ?? 0) * 500;
      // TODO-QSP: dynamic text: "A standard room for <<hotelRoomDays[''city'']>> days will be ' + $func('money',...
      scene.text(`"A standard room for ${((st as any).hotelRoomDays ?? 0)?.['city'] ?? ''} days will be ' + $func('money', 'string_price', totalCost) + '," the receptionist says.`);
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 1]; enterPayTheRoom(s, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      qspGoto(st, 'city_hotel', '');
    }
  } },
      { label: 'Luxury room', handler: (st: GameState) => {
    ((st as any).hotelRoomDays = (st as any).hotelRoomDays ?? {})['city'] = 0;
    if (((st as any).hotelRoomDays ?? 0)?.['city'] > 0) {
      (st as any).totalCost = (((st as any).hotelRoomDays ?? {})?.['city'] ?? 0) * 1500;
      // TODO-QSP: dynamic text: "A luxury room for <<hotelRoomDays[''city'']>> days will be ' + $func('money', '...
      scene.text(`"A luxury room for ${((st as any).hotelRoomDays ?? 0)?.['city'] ?? ''} days will be ' + $func('money', 'string_price', totalCost) + '," the receptionist says.`);
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 2]; enterPayTheRoom(s, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      qspGoto(st, 'city_hotel', '');
    }
  } },
      { label: 'Royal Suite', handler: (st: GameState) => {
    ((st as any).hotelRoomDays = (st as any).hotelRoomDays ?? {})['city'] = 0;
    if (((st as any).hotelRoomDays ?? 0)?.['city'] > 0) {
      (st as any).totalCost = (((st as any).hotelRoomDays ?? {})?.['city'] ?? 0) * 10000;
      // TODO-QSP: dynamic text: "The royal suite for <<hotelRoomDays[''city'']>> days would be ' + $func('money'...
      scene.text(`"The royal suite for ${((st as any).hotelRoomDays ?? 0)?.['city'] ?? ''} days would be ' + $func('money', 'string_price', totalCost) + '," the receptionist says.`);
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 3]; enterPayTheRoom(s, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      qspGoto(st, 'city_hotel', '');
    }
  } },
      { label: 'Step away from the reception desk', goto: ['city_hotel', ''] },
    ]);
  } },
      { label: 'No thank you', goto: ['city_hotel', ''] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'reception':
      enterReception(s, scene);
      break;
    case 'pay_the_room':
      enterPayTheRoom(s, scene);
      break;
    case 'rent_a_room':
      enterRentARoom(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const city_hotel: LocationDef = {
  name: 'city_hotel',
  title: 'You enter the hotel lobby, but all you can see is a bored lo',
  region: 'city',
  description: ['You enter the hotel lobby, but all you can see is a bored looking girl standing at the reception desk.'],
  enter: enter,
};
