import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[0] ?? 0) === ''  ||  ((s as any).locArgs?.[0] ?? 0) === 'skip_resepevent') {
    qspCall(s, 'core_library', 'setloc', 'pav_hotel', 'skip_resepevent');
    if (((s as any).temp ?? 0) !== 0) {
      // TODO-QSP: killvar 'temp'
    }
    if (((s as any).daystart ?? 0) === ((s as any).hotelRoomDays ?? 0)?.['pav']  &&  ((s as any).hour ?? 0) > 11) {
      (s as any).HotelRoom['pav'] = 0;
    }
    if (((s as any).daystart ?? 0) > ((s as any).hotelRoomDays ?? 0)?.['pav']) {
      (s as any).HotelRoom['pav'] = 0;
    }
    qspCall(s, 'stat', '');
    if (((s as any).locArgs?.[0] ?? 0) !== 'skip_resepevent') {
      if (((s as any).hour ?? 0) === 0  &&  ((s as any).hotresepQW_day ?? 0) !== ((s as any).daystart ?? 0)  &&  (((s as any).hotresepQW ?? 0) < 3  ||  (((s as any).hotresepQW ?? 0) === 3  &&  Math.floor(Math.random() * 10) + 1 === 10))) {
        if (((s as any).HotelRoom ?? 0)?.['pav'] === 0  &&  ((s as any).therapistQW ?? 0)?.['hotel_key'] !== 3) {
          scene.actions([{ label: 'Continue', goto: ['pav_hotel', 'resep_event1'] }]);
        } else {
          qspCall(s, 'pav_hotel', 'resep_event2');
          scene.actions([{ label: 'Continue', goto: ['pav_hotel', 'resep_event3'] }]);
        }
      }
    }
    if (((s as any).temp ?? 0) === 1) {
    } else {
      scene.text('<center><h4>Pavlovsk Hotel</h4></center>');
      scene.img('images/locations/pavlovsk/hotel/hotel.hole.jpg');
      if (((s as any).pavHotelMaid ?? 0) === 0) {
        // TODO-QSP: dynamic text: You're always surprised by how fancy the hotel looks on the inside given the sha...
        scene.text('You\'re always surprised by how fancy the hotel looks on the inside given the shabby exterior. A cute brunette is manning the <a href="exec:minut += 1 & gt \'pav_hotelReception\'">reception desk</a>.');
        scene.text('She gives you a friendly nod when you get into her sight range.');
      } else {
        // TODO-QSP: dynamic text: You're always surprised by how fancy the hotel looks on the inside given the sha...
        scene.text('You\'re always surprised by how fancy the hotel looks on the inside given the shabby exterior. Elisabet is manning the <a href="exec:minut += 1 & gt \'pav_hotelReception\'">reception desk</a>.');
        scene.text('She gives you a friendly nod when you get into her sight range.');
      }
    }
    qspCall(s, 'schedule', 'A186');
    if (((s as any).therapistQW ?? 0)?.['hotel_key'] === 2  &&  ((s as any).locat ?? 0)?.['A186'] === 2  &&  ((s as any).week ?? 0) === 6  &&  ((s as any).hour ?? 0) >= 20  &&  ((s as any).therapistQW ?? 0)?.['hotel_day'] !== ((s as any).daystart ?? 0)  &&  ((s as any).therapistQW ?? 0)?.['escaped'] === 0) {
      (s as any).therapistQW['hotel_day'] = ((s as any).daystart ?? 0);
      qspCall(s, 'willpower', 'misc', 'resist', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Don\'t visit the therapist [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Don\'t visit the therapist', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'medium');
  }, goto: ['pav_hotel', ''] },
        ]);
      }
      return;
      scene.actions([
        { label: 'Visit the therapist', goto: ['therapist_hotel', 'start'] },
      ]);
    }
    if (((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) < 20  &&  ((s as any).proshotelopen ?? 0) === 1) {
      scene.text('<a href="exec:gt \'pav_hotel\',\'Pavlin\'">Pavlin</a> is sitting in the lobby, looking for fresh prey.');
    }
    if (((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) <= 13  &&  ((s as any).job_hiring_step ?? 0)?.['pav_hotel_maid'] >= 2) {
      // TODO-QSP: 'Next to the reception desk is a door labeled <a href="exec:minut += 1
      // TODO-QSP: gt ''pav_hotelAdmin''">"Administration"</a>. That must be where the hotel manager works. The door is...
    }
    if (((s as any).hotwait ?? 0) === 1) {
      scene.text('You sit in one of the comfortable chairs in the lobby and watch the guests checking in and out.');
      (s as any).hotwait = 0;
    }
    if (((s as any).job_hiring_step ?? 0)?.['pav_hotel_maid'] <= 1) {
      // TODO-QSP: dynamic text: You see a <a href="exec:minut += 1 & gt 'pav_hotel', 'poster'">"recruitment post...
      scene.text('You see a <a href="exec:minut += 1 & gt \'pav_hotel\', \'poster\'">"recruitment poster"</a> in a corner of the room.');
    }
    qspCall(s, 'pav_hotelWork', 'set_hotel_acts');
    if (((s as any).hotelcouple ?? 0) === 2  &&  ((s as any).week ?? 0) === 4  &&  ((s as any).hour ?? 0) >= 20  &&  ((s as any).hour ?? 0) < 23  &&  ((s as any).hcday ?? 0) !== ((s as any).daystart ?? 0)) {
      // TODO-QSP: act 'Visit the couple in room 207': gt 'pav_hotelWork', 'hotcouple'
    }
    if (((s as any).hour ?? 0) === 20  &&  ((s as any).IgorevnaBDSM ?? 0) >= 5  &&  ((s as any).IgorevnaBDSM ?? 0) < 14  &&  ((s as any).week ?? 0) < 3  &&  ((s as any).AnnaQW ?? 0)?.['daystart'] !== ((s as any).daystart ?? 0)) {
      scene.actions([
        { label: 'Look for Anna', handler: (st: GameState) => {
    // TODO-QSP: AnnaQW['daystart'] = daystart
  }, goto: ['hotel_anna', 'meeting'] },
      ]);
    }
    if (((s as any).HotelRoom ?? 0)?.['pav'] > 0  ||  ((s as any).therapistQW ?? 0)?.['hotel_key'] === 3) {
      qspCall(s, 'lover', 'lover_events');
      scene.actions([
        { label: 'Go to your room', handler: (st: GameState) => {
    if (((s as any).therapistQW ?? 0)?.['hotel_key'] === 3) {
      scene.actions([{ label: 'Continue', goto: ['HotelRoom', 'therapist'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['HotelRoom', 'normal'] }]);
      if (((s as any).HotelRoom ?? 0)?.['pav'] === 2) {
        scene.actions([{ label: 'Continue', goto: ['HotelRoom', 'better'] }]);
      }
    }
  } },
        { label: 'Kill some time in the hotel lobby', handler: (st: GameState) => {
    qspCall(s, 'obj_din', 'wait');
    (s as any).hotwait = 1;
  }, goto: ['pav_hotel', ''] },
      ]);
    }
    scene.actions([
      { label: 'Leave the hotel', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['pav_market', ''] },
    ]);
  }
  scene.build();
}

export const pav_hotel: LocationDef = {
  name: 'pav_hotel',
  title: '<a href="exec:gt \'pav_hotel\',\'Pavlin\'">Pavlin</a> is sitting',
  region: 'pavlovsk',
  locationType: 'public_indoors',
  description: ['You sit in one of the comfortable chairs in the lobby and watch the guests checking in and out.'],
  enter: enter,
};
