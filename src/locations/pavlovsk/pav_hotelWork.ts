import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterSetHotelActs(s: GameState, scene: SceneBuilder): void {
  if (((s as any).job_status ?? 0)?.['pav_hotel_maid'] === 'employed') {
    if (qspFunc(s, 'jobs', 'is_arrival_time', 'pav_hotel_maid')  &&  ((s as any).job_last_work_day ?? 0)?.['pav_hotel_maid'] !== ((s as any).daystart ?? 0)) {
      scene.actions([
        { label: 'Work as a maid', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/hotel/resep.girl0,3.jpg');
    qspCall(s, 'stat', '');
    if ((!((s as any).pavHotelMaid ?? 0))) {
      (s as any).pavHotelMaid = 1;
      scene.text('You report in for work at the front desk and the brunette manning the desk quickly makes sure no customers will need her before motioning for you to follow.');
      scene.text('"Come with me. I\'ll show you to the locker room," she says as she stands up and walks into a room behind the desk. "I didn\'t catch your name last time. I\'m Elisabet."');
      // TODO-QSP: dynamic text: "I'm <<$pcs_nickname>>," you reply as she opens a wardrobe and pulls out a maid ...
      scene.text(`"I'm ${((s as any).pcs_nickname ?? 0)}," you reply as she opens a wardrobe and pulls out a maid uniform.`);
      scene.text('"This should be about your size. If it doesn\'t fit, then just grab another from here. We have a few different sizes." She gives you a friendly smile. "It\'s company policy that you need to wear it while you work, but you can put your own clothes in a locker for safekeeping. I have to get back to the desk now before I\'m missed. Good luck!"');
    } else {
      scene.text('You report in for work at the front desk.');
      // TODO-QSP: dynamic text: "Go and get changed, <<$pcs_nickname>>," Elisabet smiles. "I'll put your name on...
      scene.text(`"Go and get changed, ${((s as any).pcs_nickname ?? 0)}," Elisabet smiles. "I'll put your name on the worksheet for today."`);
    }
    scene.actions([
      { label: 'Change into the maid outfit', handler: (st: GameState) => {
    (s as any).lastwornclothingtype['maid'] = ((s as any).clothingworntype ?? 0);
    (s as any).lastwornclothingnumber['maid'] = ((s as any).clothingwornnumber ?? 0);
    qspCall(s, 'clothing', 'wear', 'gm_maid', 21, 'borrowed');
    (s as any).gm_maid_dirt[21] = 0;
    if (((s as any).pcs_inhib ?? 0) < 30) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (1);
    }
    scene.img('images/locations/pavlovsk/hotel/maid.cloth\' + rand(0, 5) + \'.jpg');
    scene.text('You sit in the locker room and look at the maid uniform, running your hands over the delicate fabric.');
    scene.text('You quickly take off your own clothes and put the maid uniform on as instructed. After a few quick poses in the mirror, you\'re convinced that the manager is a pervert!');
    scene.text('You imagine that the guests would enjoy seeing you wearing this, though.');
    scene.actions([
      { label: 'Get to work', handler: (st: GameState) => {
    qspCall(st, 'jobs', 'clock', 'pav_hotel_maid');
  }, goto: ['pav_hotelWork', 'maid'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).hour ?? 0) === 15) {
        scene.actions([
          { label: 'Wait in the lobby until you can start your maid job', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (60 - ((s as any).minut ?? 0));
    qspCall(s, 'stat', '');
  }, goto: ['pav_hotel', ''] },
        ]);
      }
    }
  }
  if (((s as any).job_worked_count ?? 0)?.['pav_hotel_maid'] > 0) {
    scene.actions([
      { label: 'Collect your salary', goto: ['pav_hotelReception', ''] },
    ]);
  }
  scene.build();
}

function enterMaid(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) >= 19) {
    // TODO-QSP: gs 'exp_gain', 'cleaning', rand (5, 15)
    if (((s as any).lastwornclothingtype ?? 0)?.['maid'] !== '') {
      // TODO-QSP: gs 'clothing', 'wear', $lastwornclothingtype['maid'], lastwornclothingnumber['maid']
      (s as any).lastwornclothingnumber = ((s as any).lastwornclothingnumber ?? 0)?.['maid'];
    }
    scene.actions([{ label: 'Continue', goto: ['pav_hotelWork', 'ending'] }]);
  }
  qspCall(s, 'core_library', 'setloc', 'pav_hotelWork', 'maid');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/hotel/hotel.corr.jpg');
  scene.text('You check your planning and go to the next room on your list.');
  scene.actions([
    { label: 'Enter the room', goto: ['pav_hotelWork', 'work'] },
  ]);
  scene.build();
}

function enterWork(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'lower', 'tiny');
  qspCall(s, 'sweat', 'add', 5);
  qspCall(s, 'stat', '');
  // TODO-QSP: :new_maid_event
  if (((s as any).soniaQW ?? 0)?.['slut'] === 5  &&  ((s as any).maidcheck_sonia ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).maidrand = Math.floor(Math.random() * 161) + 0;
  } else {
    (s as any).maidrand = Math.floor(Math.random() * 121) + 0;
  }
  if (((s as any).job_rank ?? 0)?.['pav_hotel_maid'] < 100) {
    (s as any).job_rank['pav_hotel_maid'] = ((s as any).job_rank['pav_hotel_maid'] ?? 0) + (Math.floor(Math.random() * 2) + 0);
  }
  (s as any).chai1 = ((s as any).rand ?? 0)(0, 100 - (((s as any).job_rank ?? 0)?.['pav_hotel_maid'] / 2));
  if (((s as any).chai1 ?? 0) < 25) {
    (s as any).chai = 20 + ((s as any).rand ?? 0)(0, 40) + ((s as any).rand ?? 0)(0, ((s as any).job_rank ?? 0)?.['pav_hotel_maid']);
  }
  if (((s as any).maidrand ?? 0) <= 10) {
    scene.actions([{ label: 'Continue', goto: ['pav_hotelWork', 'work0'] }]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['pav_hotelWork', 'work1'] }]);
    if (((s as any).maidrand ?? 0) <= 20) {
      if (((s as any).maidcheck ?? 0)[1] === ((s as any).daystart ?? 0)) {
        // TODO-QSP: jump 'new_maid_event'
      }
      (s as any).maidcheck[1] = ((s as any).daystart ?? 0);
      scene.actions([{ label: 'Continue', goto: ['pav_hotelWork', 'work2'] }]);
    } else {
      if (((s as any).maidcheck ?? 0)[2] === ((s as any).daystart ?? 0)) {
        // TODO-QSP: jump 'new_maid_event'
      }
      (s as any).maidcheck[2] = ((s as any).daystart ?? 0);
      scene.actions([{ label: 'Continue', goto: ['pav_hotelWork', 'work3'] }]);
      if (((s as any).maidrand ?? 0) <= 35) {
        if (((s as any).maidcheck ?? 0)[3] === ((s as any).daystart ?? 0)) {
          // TODO-QSP: jump 'new_maid_event'
        }
        (s as any).maidcheck[3] = ((s as any).daystart ?? 0);
        scene.actions([{ label: 'Continue', goto: ['pav_hotelWork', 'work4'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['pav_hotelWork', 'work5'] }]);
        if (((s as any).maidrand ?? 0) <= 65) {
          scene.actions([{ label: 'Continue', goto: ['pav_hotelWork', 'work6'] }]);
        } else {
          scene.actions([{ label: 'Continue', goto: ['pav_hotelWork', 'work7'] }]);
          if (((s as any).maidrand ?? 0) <= 80) {
            scene.actions([{ label: 'Continue', goto: ['pav_hotelWork', 'work8'] }]);
          } else {
            scene.actions([{ label: 'Continue', goto: ['pav_hotelWork', 'work9'] }]);
            if (((s as any).maidrand ?? 0) <= 95) {
              scene.actions([{ label: 'Continue', goto: ['pav_hotelWork', 'work10'] }]);
            } else {
              scene.actions([{ label: 'Continue', goto: ['pav_hotelWork', 'work11'] }]);
              if (((s as any).maidrand ?? 0) <= 120) {
                if (((s as any).maidcheck ?? 0)[4] === ((s as any).daystart ?? 0)) {
                  // TODO-QSP: jump 'new_maid_event'
                }
                (s as any).maidcheck[4] = ((s as any).daystart ?? 0);
                scene.actions([{ label: 'Continue', goto: ['pav_hotelWork', 'work12'] }]);
              } else {
                (s as any).maidcheck_sonia = ((s as any).daystart ?? 0);
                scene.actions([{ label: 'Continue', goto: ['pav_hotelWork', 'work13'] }]);
                if (((s as any).maidrand ?? 0) <= 150) {
                  (s as any).maidcheck_sonia = ((s as any).daystart ?? 0);
                  scene.actions([{ label: 'Continue', goto: ['pav_hotelWork', 'work14'] }]);
                } else {
                  (s as any).maidcheck_sonia = ((s as any).daystart ?? 0);
                  scene.actions([{ label: 'Continue', goto: ['pav_hotelWork', 'work15'] }]);
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

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'set_hotel_acts':
      enterSetHotelActs(s, scene);
      break;
    case 'maid':
      enterMaid(s, scene);
      break;
    case 'work':
      enterWork(s, scene);
      break;
    default:
      enterSetHotelActs(s, scene);
      break;
  }
}

export const pav_hotelWork: LocationDef = {
  name: 'pav_hotelWork',
  title: 'You check your planning and go to the next room on your list',
  region: 'pavlovsk',
  locationType: 'event',
  enter: enter,
};
