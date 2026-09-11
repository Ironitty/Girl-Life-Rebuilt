import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hotelRoomDays ?? 0)?.['pav'] === 0  &&  ((s as any).hour ?? 0) > 11) {
    ((s as any).HotelRoom ?? {})['pav'] = 0;
  }
  if (((s as any).hotelRoomDays ?? 0)?.['pav'] < 0) {
    ((s as any).HotelRoom ?? {})['pav'] = 0;
  }
  qspCall(s, 'stat', '');
  scene.text('<center><h4>Hotel reception</h4></center>');
  scene.img('images/locations/pavlovsk/hotel/resep.girl0,\'+rand(0, 10)+\'.jpg');
  if ((!((s as any).pavHotelMaid ?? 0))) {
    scene.text('The same cute brunette as always is manning the reception desk. You wonder if she ever takes a break.');
  } else {
    // TODO-QSP: dynamic text: <<$receptionName>> is manning the reception desk yet again. You wonder if she ev...
    scene.text(`${((s as any).receptionName ?? 0)} is manning the reception desk yet again. You wonder if she ever takes a break.`);
  }
  if (((s as any).job_hiring_step ?? 0)?.['pav_hotel_maid'] === 1) {
    scene.actions([
      { label: 'Ask about the maid job', handler: (st: GameState) => {
    ((s as any).job_hiring_step ?? {})['pav_hotel_maid'] = 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/hotel/resep.girl0,\'+rand(0, 10)+\'.jpg');
    scene.text('You approach the reception desk. "Excuse me… I hear you\'re often looking for maids? I would like to come work as a maid here."');
    // TODO-QSP: dynamic text: She nods understandingly and takes a quick look at your figure. "We do often nee...
    scene.text('She nods understandingly and takes a quick look at your figure. "We do often need maids, that\'s true. I\'d hire you in an instant, but unfortunately it\'s not up to me. You should go see Herman Leonidovich, the hotel manager. He\'s usually in his office between \'+func(\'time\', \'get_time_string\', 12, 0)+\' and \'+func(\'time\', \'get_time_string\', 14, 0)+\'. I bet he\'ll hire you! Good luck when you go see him!"');
    scene.actions([
      { label: 'Step away from the reception desk', goto: ['pav_hotel', 'skip_resepevent'] },
    ]);
  } },
    ]);
  }
  if (((s as any).job_worked_count ?? 0)?.['pav_hotel_maid'] > 0) {
    scene.actions([
      { label: 'Collect your money', handler: (st: GameState) => {
    (s as any).hotel_wage = qspFunc(s, 'jobs', 'paycheck', 'pav_hotel_maid');
    // TODO-QSP: dynamic text: She quickly checks the computer and gives you <<$func('money', 'string_profit', ...
    scene.text(`She quickly checks the computer and gives you ${qspFunc(s, 'money', 'string_profit', ((s as any).hotel_wage ?? 0))} for all the shifts you've worked in the hotel, plus whatever tips you may have gotten.`);
    scene.text('You thank her and put the money in your purse before leaving the office.');
    if (((s as any).nichHotelReferral ?? 0) === 0  &&  ((s as any).pcs_cleaning ?? 0) >= 40  &&  (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 1  ||  ((s as any).gschoolVars ?? 0)?.['block'] === 1)) {
      scene.text('"You\'re doing a good job. Did you ever think about working as a maid full-time? I know of a person who\'s living in the city and is looking for a live-in maid. The job also pays well."');
      // TODO-QSP: dynamic text: She hesitates for a second. "I could write you a referral. He wouldn't invite yo...
      scene.text('She hesitates for a second. "I could write you a referral. He wouldn\'t invite you for a job interview without one, but the boss wouldn\'t like me referring his maids to another employer. That\'s why I require you to pay me \' + $func(\'money\', \'string_price\', 5000) + \' for my troubles. Just look at it as a small fee. Just tell me if you want the job and have the money."');
      (s as any).nichHotelReferral = 1;
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
    if (((s as any).pavhotprosQW ?? 0) === 6) {
      (s as any).pavhotprosQW = 7;
      (s as any).PavlinQW = 1;
      ((s as any).prostitute ?? {})['active'] = 1;
    }
    qspCall(s, 'stat', '');
    if (((s as any).pavlevent ?? 0) === 1) {
      // TODO-QSP: dynamic text: You're too scared of <<$npc_nickname['A217']>> at the moment to meet him in a pr...
      scene.text(`You're too scared of ${((s as any).npc_nickname ?? 0)?.['A217']} at the moment to meet him in a private place.`);
      return;
      scene.actions([
        { label: 'Step away', goto: ['pav_hotel', 'skip_resepevent'] },
      ]);
    } else {
      if (((s as any).pcs_makeup ?? 0) <= 1  ||  ((s as any).pcs_hairbsh ?? 0) < 1  ||  ((s as any).pcs_sweat ?? 0) > 26) {
        scene.img('images/locations/pavlovsk/hotel/resep.girl0,\'+rand(0, 10)+\'.jpg');
        // TODO-QSP: dynamic text: "<<$npc_nickname['A217']>> expects you to be clean and made-up with your hair lo...
        scene.text(`"${((s as any).npc_nickname ?? 0)?.['A217']} expects you to be clean and made-up with your hair looking nice. I can't let you go up looking like this," she says.`);
        return;
        scene.actions([
          { label: 'Step away', goto: ['pav_hotel', 'skip_resepevent'] },
        ]);
      } else {
        // TODO-QSP: dynamic text: You approach <<$receptionName>> and ask for 'The Peacock'.
        scene.text(`You approach ${((s as any).receptionName ?? 0)} and ask for 'The Peacock'.`);
        scene.actions([{ label: 'Continue', goto: ['pavlin', 'pavgenpros'] }]);
      }
    }
  } },
    ]);
  }
  if (((s as any).nichHotelReferral ?? 0) === 1) {
    scene.actions([
      { label: 'Ask about the live-in maid job', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/hotel/resep.girl0,\'+rand(0, 10)+\'.jpg');
    scene.text('You approach the reception desk and smile. "About that job you told me about… I\'d like to get your referral."');
    scene.text('"Great!" she replies. "Do you have my fee?"');
    scene.actions([
      { label: 'Yes [+$func(\'money\', \'get_cost_string\', 5000, ...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 5000, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 5000, 'cash');
      (s as any).nichHotelReferral = 2;
      qspCall(s, 'stat', '');
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
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/hotel/resep.girl0,\'+rand(0, 10)+\'.jpg');
    if ((!((s as any).pavHotelMaid ?? 0))) {
      scene.text('The girl behind the desk smiles at you. "Hello miss! Would you like to rent a room?"');
    } else {
      // TODO-QSP: dynamic text: <<$receptionName>> smiles at you. "Hello <<$pcs_nickname>>! Would you like to re...
      scene.text(`${((s as any).receptionName ?? 0)} smiles at you. "Hello ${((s as any).pcs_nickname ?? 0)}! Would you like to rent a room?"`);
    }
    if (((s as any).HotelRoom ?? 0)?.['pav'] > 0  &&  ((s as any).therapistQW ?? 0)?.['hotel_key'] !== 3) {
      scene.img('images/locations/pavlovsk/hotel/resep.girl0,\'+rand(0, 10)+\'.jpg');
      scene.text('She looks at the computer. "I see you already have a room here. As it is already booked and paid for, the only way to change it to a different room would be to cancel your existing booking. To do so without notice would forfeit your payment. I would advise against this, but you may do so if you wish."');
      scene.actions([
        { label: 'Cancel your booking', handler: (st: GameState) => {
    // TODO-QSP: HotelRoom['pav'] = 0
  }, goto: ['pav_hotel', ''] },
        { label: 'No', goto: ['pav_hotel', ''] },
      ]);
    } else {
      if (((s as any).HotelRoom ?? 0)?.['pav'] === 0  &&  ((s as any).therapistQW ?? 0)?.['hotel_key'] !== 3) {
        scene.actions([
          { label: 'Yes', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/hotel/resep.girl0,\'+rand(0, 10)+\'.jpg');
    scene.text('She smiles at you happily. "Excellent! We have the following rooms available right now:"');
    // TODO-QSP: dynamic text: Standard room - <<$func('money', 'string_price', 500)>> a night
    scene.text(`Standard room - ${qspFunc(s, 'money', 'string_price', 500)} a night`);
    // TODO-QSP: dynamic text: Luxury room - <<$func('money', 'string_price', 1500)>> a night
    scene.text(`Luxury room - ${qspFunc(s, 'money', 'string_price', 1500)} a night`);
    scene.actions([
      { label: 'Normal room', handler: (st: GameState) => {
    ((s as any).hotelRoomDays ?? {})['pav'] = 0;
    if (((s as any).hotelRoomDays ?? 0)?.['pav'] > 0) {
      (s as any).totalCost = ((s as any).hotelRoomDays ?? {})?.['pav'] * 500;
      // TODO-QSP: dynamic text: "A normal room for <<hotelRoomDays['pav']>> days would be <<$func('money', 'stri...
      scene.text(`"A normal room for ${((s as any).hotelRoomDays ?? 0)?.['pav']} days would be ${qspFunc(s, 'money', 'string_price', ((s as any).totalCost ?? 0))} in total," she says.`);
      qspCall(s, 'pav_hotelReception', 'pay_the_room', 1);
    } else {
      scene.actions([{ label: 'Continue', goto: ['pav_hotel', ''] }]);
    }
  } },
      { label: 'Luxury room', handler: (st: GameState) => {
    ((s as any).hotelRoomDays ?? {})['pav'] = 0;
    if (((s as any).hotelRoomDays ?? 0)?.['pav'] > 0) {
      (s as any).totalCost = ((s as any).hotelRoomDays ?? {})?.['pav'] * 1500;
      // TODO-QSP: dynamic text: "A luxury room for <<hotelRoomDays['pav']>> days will be <<$func('money', 'strin...
      scene.text(`"A luxury room for ${((s as any).hotelRoomDays ?? 0)?.['pav']} days will be ${qspFunc(s, 'money', 'string_price', ((s as any).totalCost ?? 0))}," she says.`);
      qspCall(s, 'pav_hotelReception', 'pay_the_room', 2);
    } else {
      scene.actions([{ label: 'Continue', goto: ['pav_hotel', ''] }]);
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
  (s as any).hotel_room_id = qspUntranslated(s, "ARGS[1]", { location: "pav_hotelReception" });
  if (qspFunc(s, 'money', 'can_afford', ((s as any).totalCost ?? 0)) === 0) {
    scene.actions([
      { label: 'You can\'t afford to stay in the hotel for that long.', goto: ['pav_hotel', ''] },
    ]);
  } else {
    scene.actions([
      { label: 'Pay (<<$func(\'money\', \'string_price\', totalCost)>>)', handler: (st: GameState) => {
    qspCall(s, 'money', 'pay', ((s as any).totalCost ?? 0));
    ((s as any).HotelRoom ?? {})['pav'] = ((s as any).hotel_room_id ?? 0);
    ((s as any).hotelRoomDays ?? {})['pav'] = ((s as any).daystart ?? 0) + ((s as any).hotelRoomDays ?? {})?.['pav'];
    // TODO-QSP: dynamic text: You pay <<$func('money', 'string_price', totalCost)>> for the room.
    scene.text(`You pay ${qspFunc(s, 'money', 'string_price', ((s as any).totalCost ?? 0))} for the room.`);
    // TODO-QSP: dynamic text: She gives you the key to your room in return. "Thank you ' + iif(pavHotelMaid = ...
    scene.text('She gives you the key to your room in return. "Thank you \' + iif(pavHotelMaid = 0, \'miss\', $pcs_nickname) +\', I hope you enjoy your stay!"');
    scene.actions([
      { label: 'Step away', goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Change your mind', goto: ['pav_hotel', ''] },
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
