import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'pav_hotelReception';
  (s as any).menu_arg = '';
  if (((s as any).hotelRoomDays ?? 0)?.['pav'] === 0  &&  ((s as any).hour ?? 0) > 11) {
    ((s as any).HotelRoom = (s as any).HotelRoom ?? {})['pav'] = 0;
  }
  if (((s as any).hotelRoomDays ?? 0)?.['pav'] < 0) {
    ((s as any).HotelRoom = (s as any).HotelRoom ?? {})['pav'] = 0;
  }
  qspCall(s, 'stat', '');
  scene.text('<center><h4>Hotel reception</h4></center>');
  scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/hotel/resep.girl0,` + (Math.floor(Math.random() * 11) + 0) + '.jpg"></center>');
  if ((!((s as any).pavHotelMaid ?? 0))) {
    scene.text('The same cute brunette as always is manning the reception desk. You wonder if she ever takes a break.');
  } else {
    scene.text(`${((s as any).receptionName ?? '')} is manning the reception desk yet again. You wonder if she ever takes a break.`);
  }
  if (((s as any).job_hiring_step ?? 0)?.['pav_hotel_maid'] === 1) {
    scene.actions([
      { label: 'Ask about the maid job', handler: (st: GameState) => {
    ((st as any).job_hiring_step = (st as any).job_hiring_step ?? {})['pav_hotel_maid'] = 2;
    qspCall(st, 'stat', '');
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/hotel/resep.girl0,` + (Math.floor(Math.random() * 11) + 0) + '.jpg"></center>');
    scene.text('You approach the reception desk. "Excuse me… I hear you\'re often looking for maids? I would like to come work as a maid here."');
    scene.text('\'She nods understandingly and takes a quick look at your figure. "We do often need maids, that\'s true. I\'d hire you in an instant, but unfortunately it\'s not up to me. You should go see Herman Leonidovich, the hotel manager. He\'s usually in his office between 12:00 and 14:00. I bet he\'ll hire you! Good luck when you go see him!"\'');
    scene.actions([
      { label: 'Step away from the reception desk', goto: ['pav_hotel', 'skip_resepevent'] },
    ]);
  } },
    ]);
  }
  if (((s as any).job_worked_count ?? 0)?.['pav_hotel_maid'] > 0) {
    scene.actions([
      { label: 'Collect your money', handler: (st: GameState) => {
    (st as any).hotel_wage = qspFunc(s, 'jobs', 'paycheck', 'pav_hotel_maid');
    scene.text(`She quickly checks the computer and gives you ${qspFunc(s, 'money', 'string_profit', ((st as any).hotel_wage ?? ''))} for all the shifts you've worked in the hotel, plus whatever tips you may have gotten.`);
    scene.text('You thank her and put the money in your purse before leaving the office.');
    (st as any).hotel_wage = undefined;
    if (((st as any).nichHotelReferral ?? 0) === 0  &&  ((st as any).pcs_cleaning ?? 0) >= 40  &&  (((st as any).gschoolVars ?? 0)?.['school_diploma'] === 1  ||  ((st as any).gschoolVars ?? 0)?.['block'] === 1)) {
      scene.text('"You\'re doing a good job. Did you ever think about working as a maid full-time? I know of a person who\'s living in the city and is looking for a live-in maid. The job also pays well."');
      scene.text('\'She hesitates for a second. "I could write you a referral. He wouldn\'t invite you for a job interview without one, but the boss wouldn\'t like me referring his maids to another employer. That\'s why I require you to pay me 5000₽ for my troubles. Just look at it as a small fee. Just tell me if you want the job and have the money."\'');
      (st as any).nichHotelReferral = 1;
      scene.actions([
        { label: 'Thank her for the offer', goto: ['pav_hotel', 'skip_resepevent'] },
      ]);
    } else {
      scene.actions([
        { label: 'Step away from the reception desk', goto: ['pav_hotel', 'skip_resepevent'] },
      ]);
    }
  } },
    ]);
  }
  if (((s as any).proshotelopen ?? 0) === 1  &&  ((s as any).proshotelday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) > 6  &&  (((s as any).hour ?? 0) < 12  ||  ((s as any).hour ?? 0) >= 20)) {
    scene.actions([
      { label: 'Ask for "The Peacock"', handler: (st: GameState) => {
    if (((st as any).pavhotprosQW ?? 0) === 6) {
      (st as any).pavhotprosQW = 7;
      (st as any).PavlinQW = 1;
      ((st as any).prostitute = (st as any).prostitute ?? {})['active'] = 1;
    }
    qspCall(st, 'stat', '');
    if (((st as any).pavlevent ?? 0) === 1) {
      scene.text(`You're too scared of ${(((st as any).npc_nickname ?? 0)?.['A217'] ?? '')} at the moment to meet him in a private place.`);
      scene.actions([
{ label: 'Step away', goto: ['pav_hotel', 'skip_resepevent'] },
]);
      return;
    } else {
      if (((st as any).pcs_makeup ?? 0) <= 1  ||  ((st as any).pcs_hairbsh ?? 0) < 1  ||  ((st as any).pcs_sweat ?? 0) > 26) {
        scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/hotel/resep.girl0,` + (Math.floor(Math.random() * 11) + 0) + '.jpg"></center>');
        scene.text(`"${(((st as any).npc_nickname ?? 0)?.['A217'] ?? '')} expects you to be clean and made-up with your hair looking nice. I can't let you go up looking like this," she says.`);
        scene.actions([
{ label: 'Step away', goto: ['pav_hotel', 'skip_resepevent'] },
]);
        return;
      } else {
        scene.text(`You approach ${((st as any).receptionName ?? '')} and ask for 'The Peacock'.`);
        qspGoto(st, 'pavlin', 'pavgenpros');
      }
    }
  } },
    ]);
  }
  if (((s as any).nichHotelReferral ?? 0) === 1) {
    scene.actions([
      { label: 'Ask about the live-in maid job', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/hotel/resep.girl0,` + (Math.floor(Math.random() * 11) + 0) + '.jpg"></center>');
    scene.text('You approach the reception desk and smile. "About that job you told me about… I\'d like to get your referral."');
    scene.text('"Great!" she replies. "Do you have my fee?"');
    scene.actions([
      { label: 'Yes', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 5000, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 5000, 'cash');
      (st as any).nichHotelReferral = 2;
      qspCall(st, 'stat', '');
      scene.text('You give her the money and she swiftly puts it into her purse before she hands you the referral, written on the official paper of the hotel complete with the hotel manager\'s signature. It says that you\'re an experienced, wellbehaved and diligent maid.');
      scene.text('"Don\'t worry, the signature is legit. The boss signs everything I hand him."');
      scene.text('She also hands you a small card with an address in the city center on it. "Just go there in the late afternoon and present this referral. You also have to wear a maid uniform. If you don\'t own one, then you can buy one at the G&M store. I also heard this man is a perfectionist, so make sure you look presentable in every way. Good luck!"');
      scene.actions([
        { label: 'Thank her and step away', goto: ['pav_hotel', 'skip_resepevent'] },
      ]);
    }
  } },
      { label: 'No', handler: (st: GameState) => {
    scene.text('"I don\'t," you reply.');
    scene.text('"Too bad," she shrugs. "I\'m afraid I can\'t help you unless you pay me. Just come back as soon as you have the money."');
    scene.actions([
      { label: 'Step away from the reception desk', goto: ['pav_hotel', 'skip_resepevent'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Step away from the reception desk', goto: ['pav_hotel', 'skip_resepevent'] },
    { label: 'Rent a room', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/hotel/resep.girl0,` + (Math.floor(Math.random() * 11) + 0) + '.jpg"></center>');
    if ((!((st as any).pavHotelMaid ?? 0))) {
      scene.text('The girl behind the desk smiles at you. "Hello miss! Would you like to rent a room?"');
    } else {
      scene.text(`${((st as any).receptionName ?? '')} smiles at you. "Hello ${((st as any).pcs_nickname ?? '')}! Would you like to rent a room?"`);
    }
    if (((st as any).HotelRoom ?? 0)?.['pav'] > 0  &&  ((st as any).therapistQW ?? 0)?.['hotel_key'] !== 3) {
      scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/hotel/resep.girl0,` + (Math.floor(Math.random() * 11) + 0) + '.jpg"></center>');
      scene.text('She looks at the computer. "I see you already have a room here. As it is already booked and paid for, the only way to change it to a different room would be to cancel your existing booking. To do so without notice would forfeit your payment. I would advise against this, but you may do so if you wish."');
      scene.actions([
        { label: 'Cancel your booking', handler: (st: GameState) => {
    ((st as any).HotelRoom = (st as any).HotelRoom ?? {})['pav'] = 0;
  }, goto: ['pav_hotel', ''] },
        { label: 'No', goto: ['pav_hotel', ''] },
      ]);
    } else {
      if (((st as any).HotelRoom ?? 0)?.['pav'] === 0  &&  ((st as any).therapistQW ?? 0)?.['hotel_key'] !== 3) {
        scene.actions([
          { label: 'Yes', handler: (st: GameState) => {
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/hotel/resep.girl0,` + (Math.floor(Math.random() * 11) + 0) + '.jpg"></center>');
    scene.text('She smiles at you happily. "Excellent! We have the following rooms available right now:"');
    scene.text(`Standard room - ${qspFunc(s, 'money', 'string_price', 500)} a night`);
    scene.text(`Luxury room - ${qspFunc(s, 'money', 'string_price', 1500)} a night`);
    scene.actions([
      { label: 'Normal room', handler: (st: GameState) => {
    ((st as any).hotelRoomDays = (st as any).hotelRoomDays ?? {})['pav'] = window.prompt("For how long would you like to stay?") ?? '';
    if (((st as any).hotelRoomDays ?? 0)?.['pav'] > 0) {
      (st as any).totalCost = (((st as any).hotelRoomDays ?? {})?.['pav'] ?? 0) * 500;
      scene.text(`"A normal room for ${(((st as any).hotelRoomDays ?? 0)?.['pav'] ?? '')} days would be ${qspFunc(s, 'money', 'string_price', ((st as any).totalCost ?? ''))} in total," she says.`);
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 1]; enterPayTheRoom(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      qspGoto(st, 'pav_hotel', '');
    }
  } },
      { label: 'Luxury room', handler: (st: GameState) => {
    ((st as any).hotelRoomDays = (st as any).hotelRoomDays ?? {})['pav'] = window.prompt("For how long would you like to stay?") ?? '';
    if (((st as any).hotelRoomDays ?? 0)?.['pav'] > 0) {
      (st as any).totalCost = (((st as any).hotelRoomDays ?? {})?.['pav'] ?? 0) * 1500;
      scene.text(`"A luxury room for ${(((st as any).hotelRoomDays ?? 0)?.['pav'] ?? '')} days will be ${qspFunc(s, 'money', 'string_price', ((st as any).totalCost ?? ''))}," she says.`);
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 2]; enterPayTheRoom(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      qspGoto(st, 'pav_hotel', '');
    }
  } },
      { label: 'Step away', goto: ['pav_hotel', ''] },
    ]);
  } },
          { label: 'No, thank you', goto: ['pav_hotel', ''] },
        ]);
      }
    }
  } },
  ]);
  scene.build();
}

function enterPayTheRoom(s: GameState, scene: SceneBuilder): void {
  (s as any).hotel_room_id = ((s as any).locArgs?.[1] ?? 0);
  if (qspFunc(s, 'money', 'can_afford', ((s as any).totalCost ?? 0)) === 0) {
    scene.actions([
      { label: 'You can\'t afford to stay in the hotel for that long.', handler: (st: GameState) => {
    (st as any).totalCost = undefined;
    (st as any).hotel_room_id = undefined;
    qspGoto(st, 'pav_hotel', '');
  } },
    ]);
  } else {
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Pay (' + String(qspFunc(s, 'money', 'string_price', ((s as any).totalCost ?? '')) ?? '') + ')', handler: (st: GameState) => {
    qspCall(st, 'money', 'pay', ((st as any).totalCost ?? 0));
    ((st as any).HotelRoom = (st as any).HotelRoom ?? {})['pav'] = ((st as any).hotel_room_id ?? 0);
    ((st as any).hotelRoomDays = (st as any).hotelRoomDays ?? {})['pav'] = ((st as any).daystart ?? 0) + (((st as any).hotelRoomDays ?? {})?.['pav'] ?? 0);
    scene.text(`You pay ${qspFunc(s, 'money', 'string_price', ((st as any).totalCost ?? ''))} for the room.`);
    scene.text('She gives you the key to your room in return. "Thank you ' + (((!((st as any).pavHotelMaid ?? 0))) ? ('miss') : (((st as any).pcs_nickname ?? ''))) + ', I hope you enjoy your stay!"');
    (st as any).totalCost = undefined;
    (st as any).hotel_room_id = undefined;
    scene.actions([
      { label: 'Step away', goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Change your mind', handler: (st: GameState) => {
    (st as any).totalCost = undefined;
    (st as any).hotel_room_id = undefined;
    qspGoto(st, 'pav_hotel', '');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'pay_the_room':
      enterPayTheRoom(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pav_hotelReception: LocationDef = {
  name: 'pav_hotelReception',
  title: '<center><h4>Hotel reception</h4></center>',
  region: 'pavlovsk',
  description: ['The same cute brunette as always is manning the reception desk. You wonder if she ever takes a break.'],
  enter: enter,
};
