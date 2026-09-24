import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterSetHotelActs(s: GameState, scene: SceneBuilder): void {
  if (((s as any).job_status ?? 0)?.['pav_hotel_maid'] === 'employed') {
    if (qspFunc(s, 'jobs', 'is_arrival_time', 'pav_hotel_maid')  &&  ((s as any).job_last_work_day ?? 0)?.['pav_hotel_maid'] !== ((s as any).daystart ?? 0)) {
      scene.actions([
        { label: 'Work as a maid', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/hotel/resep.girl0,3.jpg');
    qspCall(st, 'stat', '');
    if ((!((st as any).pavHotelMaid ?? 0))) {
      (st as any).pavHotelMaid = 1;
      scene.text('You report in for work at the front desk and the brunette manning the desk quickly makes sure no customers will need her before motioning for you to follow.');
      scene.text('"Come with me. I\'ll show you to the locker room," she says as she stands up and walks into a room behind the desk. "I didn\'t catch your name last time. I\'m Elisabet."');
      // TODO-QSP: dynamic text: "I''m <<$pcs_nickname>>," you reply as she opens a wardrobe and pulls out a maid...
      scene.text(`"I'm ${((st as any).pcs_nickname ?? '')}," you reply as she opens a wardrobe and pulls out a maid uniform.`);
      scene.text('"This should be about your size. If it doesn\'t fit, then just grab another from here. We have a few different sizes." She gives you a friendly smile. "It\'s company policy that you need to wear it while you work, but you can put your own clothes in a locker for safekeeping. I have to get back to the desk now before I\'m missed. Good luck!"');
    } else {
      scene.text('You report in for work at the front desk.');
      // TODO-QSP: dynamic text: "Go and get changed, <<$pcs_nickname>>," Elisabet smiles. "I''ll put your name o...
      scene.text(`"Go and get changed, ${((st as any).pcs_nickname ?? '')}," Elisabet smiles. "I'll put your name on the worksheet for today."`);
    }
    scene.actions([
      { label: 'Change into the maid outfit', handler: (st: GameState) => {
    ((st as any).lastwornclothingtype = (st as any).lastwornclothingtype ?? {})['maid'] = ((st as any).clothingworntype ?? 0);
    ((st as any).lastwornclothingnumber = (st as any).lastwornclothingnumber ?? {})['maid'] = ((st as any).clothingwornnumber ?? 0);
    qspCall(st, 'clothing', 'wear', 'gm_maid', 21, 'borrowed');
    ((st as any).gm_maid_dirt = (st as any).gm_maid_dirt ?? {})[21] = 0;
    if (((st as any).pcs_inhib ?? 0) < 30) {
      (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + (1);
    }
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/hotel/maid.cloth' + r...
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/hotel/maid.cloth` + (Math.floor(Math.random() * 6) + 0) + '.jpg"></center>');
    scene.text('You sit in the locker room and look at the maid uniform, running your hands over the delicate fabric.');
    scene.text('You quickly take off your own clothes and put the maid uniform on as instructed. After a few quick poses in the mirror, you\'re convinced that the manager is a pervert!');
    scene.text('You imagine that the guests would enjoy seeing you wearing this, though.');
    scene.actions([
      { label: 'Get to work', handler: (st: GameState) => {
    qspCall(st, 'jobs', '');
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
    (st as any).minut = ((st as any).minut ?? 0) + (60 - ((st as any).minut ?? 0));
    qspCall(st, 'stat', '');
    qspGoto(st, 'pav_hotel', '');
  } },
        ]);
      }
    }
  }
  if (((s as any).job_worked_count ?? 0)?.['pav_hotel_maid'] > 0) {
    scene.actions([
      { label: 'Collect your salary', goto: ['pav_hotelReception', ''] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterMaid(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) >= 19) {
    qspCall(s, 'exp_gain', 'cleaning', 0);
    if (((s as any).lastwornclothingtype ?? 0)?.['maid'] !== '') {
      qspCall(s, 'clothing', 'wear', ((s as any).lastwornclothingtype ?? 0)?.['maid'], ((s as any).lastwornclothingnumber ?? 0)?.['maid']);
      (s as any).lastwornclothingtype = ((s as any).lastwornclothingtype ?? 0)?.['maid'];
      (s as any).lastwornclothingnumber = ((s as any).lastwornclothingnumber ?? 0)?.['maid'];
    }
    qspGoto(s, 'pav_hotelWork', 'ending');
  }
  qspCall(s, 'core_library', 'setloc', 'pav_hotelWork', 'maid');
  (s as any).location_type = 'event';
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/hotel/hotel.corr.jpg');
  scene.text('You check your planning and go to the next room on your list.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Enter the room', handler: (st: GameState) => {
    qspGoto(st, 'pav_hotelWork', 'work');
  } },
  ]);
  scene.build();
}

function enterWork(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'lower', 'tiny');
  qspCall(s, 'sweat', 'add', 5);
  qspCall(s, 'stat', '');
  // TODO-QSP: :new_maid_event
  if (((s as any).soniaQW ?? 0)?.['slut'] === 5  &&  ((s as any).maidcheck_sonia ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).maidrand = (Math.floor(Math.random() * 161) + 0);
  } else {
    (s as any).maidrand = (Math.floor(Math.random() * 121) + 0);
  }
  if (((s as any).job_rank ?? 0)?.['pav_hotel_maid'] < 100) {
    ((s as any).job_rank = (s as any).job_rank ?? {})['pav_hotel_maid'] = ((s as any).job_rank['pav_hotel_maid'] ?? 0) + ((Math.floor(Math.random() * 2) + 0));
  }
  (s as any).chai1 = (Math.floor(Math.random() * (100 - ((((s as any).job_rank ?? {})?.['pav_hotel_maid'] ?? 0) / 2) - 0 + 1)) + (0));
  if (((s as any).chai1 ?? 0) < 25) {
    (s as any).chai = 20 + (Math.floor(Math.random() * 41) + 0) + (Math.floor(Math.random() * ((((s as any).job_rank ?? {})?.['pav_hotel_maid'] ?? 0) - 0 + 1)) + (0));
  }
  if (((s as any).maidrand ?? 0) <= 10) {
    qspGoto(s, 'pav_hotelWork', 'work0');
  } else {
    if (((s as any).maidrand ?? 0) <= 15) {
      qspGoto(s, 'pav_hotelWork', 'work1');
    } else {
      if (((s as any).maidrand ?? 0) <= 20) {
        if (((s as any).maidcheck ?? 0)[1] === ((s as any).daystart ?? 0)) {
          // TODO-QSP: jump 'new_maid_event'
        }
        ((s as any).maidcheck = (s as any).maidcheck ?? {})[1] = ((s as any).daystart ?? 0);
        qspGoto(s, 'pav_hotelWork', 'work2');
      } else {
        if (((s as any).maidrand ?? 0) <= 25) {
          if (((s as any).maidcheck ?? 0)[2] === ((s as any).daystart ?? 0)) {
            // TODO-QSP: jump 'new_maid_event'
          }
          ((s as any).maidcheck = (s as any).maidcheck ?? {})[2] = ((s as any).daystart ?? 0);
          qspGoto(s, 'pav_hotelWork', 'work3');
        } else {
          if (((s as any).maidrand ?? 0) <= 35) {
            if (((s as any).maidcheck ?? 0)[3] === ((s as any).daystart ?? 0)) {
              // TODO-QSP: jump 'new_maid_event'
            }
            ((s as any).maidcheck = (s as any).maidcheck ?? {})[3] = ((s as any).daystart ?? 0);
            qspGoto(s, 'pav_hotelWork', 'work4');
          } else {
            if (((s as any).maidrand ?? 0) <= 55) {
              qspGoto(s, 'pav_hotelWork', 'work5');
            } else {
              if (((s as any).maidrand ?? 0) <= 65) {
                qspGoto(s, 'pav_hotelWork', 'work6');
              } else {
                if (((s as any).maidrand ?? 0) <= 70) {
                  qspGoto(s, 'pav_hotelWork', 'work7');
                } else {
                  if (((s as any).maidrand ?? 0) <= 80) {
                    qspGoto(s, 'pav_hotelWork', 'work8');
                  } else {
                    if (((s as any).maidrand ?? 0) <= 90) {
                      qspGoto(s, 'pav_hotelWork', 'work9');
                    } else {
                      if (((s as any).maidrand ?? 0) <= 95) {
                        qspGoto(s, 'pav_hotelWork', 'work10');
                      } else {
                        if (((s as any).maidrand ?? 0) <= 110) {
                          qspGoto(s, 'pav_hotelWork', 'work11');
                        } else {
                          if (((s as any).maidrand ?? 0) <= 120) {
                            if (((s as any).maidcheck ?? 0)[4] === ((s as any).daystart ?? 0)) {
                              // TODO-QSP: jump 'new_maid_event'
                            }
                            ((s as any).maidcheck = (s as any).maidcheck ?? {})[4] = ((s as any).daystart ?? 0);
                            qspGoto(s, 'pav_hotelWork', 'work12');
                          } else {
                            if (((s as any).maidrand ?? 0) <= 140) {
                              (s as any).maidcheck_sonia = ((s as any).daystart ?? 0);
                              qspGoto(s, 'pav_hotelWork', 'work13');
                            } else {
                              if (((s as any).maidrand ?? 0) <= 150) {
                                (s as any).maidcheck_sonia = ((s as any).daystart ?? 0);
                                qspGoto(s, 'pav_hotelWork', 'work14');
                              } else {
                                if (((s as any).maidrand ?? 0) <= 160) {
                                  (s as any).maidcheck_sonia = ((s as any).daystart ?? 0);
                                  qspGoto(s, 'pav_hotelWork', 'work15');
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
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterEnding(s: GameState, scene: SceneBuilder): void {
  if (((s as any).threesomewatched ?? 0) === 0  ||  ((s as any).threesometojoin ?? 0) === 2) {
    qspGoto(s, 'pav_hotelWork', 'ending0');
  } else {
    if (((s as any).threesomewatched ?? 0) > 0  &&  ((s as any).threesometojoin ?? 0) === 1) {
      qspGoto(s, 'pav_hotelWork', 'ending1');
    } else {
      (s as any).threesomewatched = 0;
      qspGoto(s, 'pav_hotelWork', 'ending2');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterWork0(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 35;
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/hotel/work/maid.work0...
  scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/hotel/work/maid.work0,` + (Math.floor(Math.random() * 4) + 0) + '.jpg"></center>');
  scene.text('You put some fresh sheets on the bed and clean the room for the next visitor to enjoy.');
  if (((s as any).job_rank ?? 0)?.['pav_hotel_maid'] < 20) {
    scene.text('You don\'t do a very good job. The sheets on the bed are all wrinkled and you\'re moving the dust around more than you\'re cleaning it up.');
  } else {
    if (((s as any).job_rank ?? 0)?.['pav_hotel_maid'] < 50) {
      scene.text('Your maid skills have improved a fair bit. You clean the room far more effectively now, but the bed sheets still give you trouble. Nevertheless, they look better than when you first started.');
    } else {
      if (((s as any).job_rank ?? 0)?.['pav_hotel_maid'] < 70) {
        scene.text('You\'re pretty good at cleaning rooms now, and the room looks quite clean when you\'re done with it. There are still some small wrinkles in the bed sheets, but it\'s nothing a guest would complain about.');
      } else {
        scene.text('You\'re a very experienced maid by now. You know how to clean up all sorts of spots and stains with ease, and the bed sheets look perfect.');
      }
    }
  }
  if (((s as any).chai ?? 0) > 0) {
    qspCall(s, 'money', 'earn', ((s as any).chai ?? 0), 'cash');
    // TODO-QSP: dynamic text: While you''re cleaning the room, you find some money underneath a pillow. Looks ...
    scene.text(`While you're cleaning the room, you find some money underneath a pillow. Looks like someone left you a ${qspFunc(s, 'money', 'string_profit', ((s as any).chai ?? ''))} tip!`);
    (s as any).earned_tips = ((s as any).earned_tips ?? 0) + (((s as any).chai ?? 0));
    (s as any).chai = 0;
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['pav_hotelWork', 'maid'] },
  ]);
  scene.build();
}

function enterWork1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/hotel/goteladmin.jpg');
  scene.text('While on your way to your next room, you encounter Mr. Leonidovich, the hotel manager. He tells you that he spilled a drink in his office and asks you to clean it up.');
  scene.img('images/characters/pavlovsk/resident/leonid/office.jpg');
  scene.text('You go to his office and clean up the spilled drink.');
  if (((s as any).job_rank ?? 0)?.['pav_hotel_maid'] < 20) {
    scene.text('You don\'t do a very good job. There are still stains of liquor everywhere.');
  } else {
    if (((s as any).job_rank ?? 0)?.['pav_hotel_maid'] < 50) {
      scene.text('Your maid skills have improved a fair bit and you\'re able to get most of the stains out of the desk.');
    } else {
      if (((s as any).job_rank ?? 0)?.['pav_hotel_maid'] < 70) {
        scene.text('You\'re pretty good at cleaning now and the room looks quite clean when you\'re done with it. There is almost no trace left of the spilled drink.');
      } else {
        scene.text('You\'re a very experienced maid by now. You know how to clean up all sorts of spots and stains with ease; you easily remove all traces of liquor from the desk.');
      }
    }
  }
  if ((!((s as any).resepseen ?? 0))) {
    scene.text('Just as you\'re about to leave the room, you notice a folder lying on the ground beneath the desk. ');
    scene.text('You pick it up, but when you place it back with the other folders on the desk you notice some pictures are sticking out.');
    scene.text('It looks like security footage from the lobby.');
    scene.actions([
      { label: 'This is none of your business', handler: (st: GameState) => {
    if (((st as any).job_rank ?? 0)?.['pav_hotel_maid'] < 100) {
      ((st as any).job_rank = (st as any).job_rank ?? {})['pav_hotel_maid'] = ((st as any).job_rank['pav_hotel_maid'] ?? 0) + (1);
    }
    scene.actions([
      { label: 'Continue', goto: ['pav_hotelWork', 'maid'] },
    ]);
  } },
      { label: 'Look at the pictures', handler: (st: GameState) => {
    (st as any).hotresepQW = 1;
    (st as any).resepseen = 1;
    qspCall(st, 'exp_gain', 'observ', (Math.floor(Math.random() * 4) + 0));
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/hotel/resep_flash1.jpg');
    scene.text('You can\'t believe it. It\'s the girl from the reception desk, exposing herself in the lobby!');
    scene.img('images/locations/pavlovsk/hotel/resep_flash2.jpg');
    scene.text('There are dozens of pictures here. From the time stamps, you can see that she always exposes herself around midnight.');
    scene.text('You wonder what would happen if you went to the lobby around midnight?');
    scene.actions([
      { label: 'Place the pictures back and continue your work ', goto: ['pav_hotelWork', 'maid'] },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Continue', goto: ['pav_hotelWork', 'maid'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterWork2(s: GameState, scene: SceneBuilder): void {
  (s as any).hotelcouple = Math.max(1, ((s as any).hotelcouple ?? 0));
  qspCall(s, 'money', 'earn', 100);
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'stat', '');
  scene.text('While you\'re cleaning the room, a man, a woman and two young children suddenly enter.');
  scene.text('"Oh, you\'ve sent by the heavens!" the man says when he sees you. "Can you please take my children for a walk so my wife and I can have some… \'alone\' time?"');
  // TODO-QSP: dynamic text: He places <<$func(''money'', ''string_profit'', 100)>> in your hand and pushes y...
  scene.text(`He places ${qspFunc(s, 'money', 'string_profit', 100)} in your hand and pushes you out the door with the children before you can even open your mouth to respond.`);
  if (((s as any).month ?? 0) > 5  &&  ((s as any).month ?? 0) < 10  &&  ((s as any).sunWeather ?? 0) === 1) {
    scene.actions([
      { label: 'Take the children to the playground next to the hotel', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 2) + 0) === 0  ||  qspFunc(s, 'money', 'can_afford', 50) === 0) {
      qspCall(st, 'mood', 'raise', 'tiny');
      scene.img('images/locations/pavlovsk/hotel/children.jpg');
      scene.text('You let the children play around for an hour while you relax on a bench.');
      scene.text('You then take them back to their parents\' room and continue your work.');
      scene.actions([
        { label: 'Continue', goto: ['pav_hotelWork', 'maid'] },
      ]);
    } else {
      qspCall(st, 'mood', 'raise', 'tiny');
      qspCall(st, 'money', 'pay', 50);
      qspCall(st, 'stat', '');
      scene.img('images/locations/pavlovsk/hotel/children3.jpg');
      scene.text('You let the children play around for an hour while you relax on a bench.');
      scene.text('When it\'s time to leave, you call out to the children, but they\'re nowhere to be found.');
      scene.text('After looking around for them, you find the two brats next to an ice cream truck happily eating some ice cream. You end up having to use half the money you received from their father to pay for it.');
      scene.text('After that, you take the children back to their parents\' room and continue your work.');
      scene.actions([
        { label: 'Continue', goto: ['pav_hotelWork', 'maid'] },
      ]);
    }
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Take the children to the hotel conference room', handler: (st: GameState) => {
    qspCall(st, 'pain', '2', 'head', 'ache');
    qspCall(st, 'mood', 'lower', 'small');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/hotel/children2.jpg');
    scene.text('There\'s not much to do here to entertain these two brats, so you have to listen to them screaming at each other for an hour, giving you a terrible headache.');
    scene.text('After that, you take them back to their parents\' room and continue your work.');
    scene.actions([
      { label: 'Continue', goto: ['pav_hotelWork', 'maid'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterWork3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/hotel/cuffed.jpg');
  scene.text('You enter the room and, to your surprise, find a naked man handcuffed to the bed.');
  scene.text('"Thank god, someone who can help me!" he says. "The key is on the table by the window!"');
  scene.text('After you release him, he tells you that he came to the room with a woman who promised to rock his world, but she handcuffed him to the bed and stole all of his stuff, including his clothes.');
  scene.text('While you feel sorry for him, there\'s not much more you can do for him. Just as you\'re about to leave the room, you notice him sitting on the edge of the bed on the verge of tears.');
  qspCall(s, 'willpower', 'hj', 'self');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Try to cheer him up with your hand', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Try to cheer him up with your hand', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'hj', 'self');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'arousal', 'hj', 10);
    qspCall(st, 'arousal', 'end');
    scene.img('images/locations/pavlovsk/hotel/sex/maidhj.jpg');
    scene.text('You get an idea on how to cheer him up.');
    if (((st as any).stat ?? 0)?.['hj'] < 5) {
      qspCall(st, 'mood', 'lower', 'small');
      qspCall(st, 'stat', '');
      scene.text('You move over to the bed and gently place your hand on his bare chest before you push him down on the bed and take his flaccid cock in your hand.');
      scene.text('You slowly start moving your hand up and down and the man groans a little. You look down and see that he\'s already semi-erect.');
      scene.text('You keep at it for a few minutes, but your technique is not sufficient enough to make him cum.');
      scene.text('"Thanks for trying," he says, "But I guess I\'m not really in the mood right now."');
      scene.text('He holds his head in his hands and shows a defeated look. Leaving the man like this does not make you feel very happy.');
    } else {
      qspCall(st, 'mood', 'raise', 'tiny');
      qspCall(st, 'cum_call', 'hands', ((st as any).npcID ?? 0), 1, 0, 0, 10);
      qspCall(st, 'cum_cleanup', '');
      qspCall(st, 'stat', '');
      scene.text('You move over to the bed and gently place your hand on his bare chest before you push him down on the bed and take his flaccid cock in your hand.');
      scene.text('You slowly start moving your hand up and down and it only takes a few seconds for him to become rock-hard. The man watches you, but doesn\'t say anything.');
      scene.text('After jerking him off for a few minutes, he starts moaning loudly before cum suddenly starts splattering over your hand.');
      scene.text('You give him a little smile and he smiles back at you. You\'re happy you were able to cheer him up as you wash your hands in the bathroom before leaving the room to continue your work.');
    }
    scene.actions([
      { label: 'Continue', goto: ['pav_hotelWork', 'maid'] },
    ]);
  } },
    ]);
  }
  qspCall(s, 'willpower', 'bj', 'self');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Try to cheer him up with your mouth', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Try to cheer him up with your mouth', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'bj', 'self');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'arousal', 'bj', 10);
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'npcgeneratec', '0', 'unlucky stranger', (Math.floor(Math.random() * 28) + 18));
    qspCall(st, 'npcStat', '$npclastgenerated');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/hotel/sex/maid_blow.jpg');
    scene.text('You get an idea on how to cheer him up.');
    if (((st as any).stat ?? 0)?.['bj'] < 5) {
      qspCall(st, 'mood', 'lower', 'small');
      qspCall(st, 'stat', '');
      scene.text('You crawl onto the bed before moving your head down to his crotch and taking his flaccid cock in your hand. You smile at him before taking it into your mouth slowly sucking on it. The man groans a little and you feel his dick becoming hard in your mouth.');
      scene.text('You kept blowing him for a few minutes, but your technique was not sufficient enough to make him cum.');
      scene.text('"Thanks for trying," he says, "But I guess I\'m not really in the mood right now."');
      scene.text('He holds his head in his hands and shows a defeated look. Leaving the man like this does not make you feel very happy.');
      scene.actions([
        { label: 'Continue', goto: ['pav_hotelWork', 'maid'] },
      ]);
    } else {
      scene.text('You crawl onto the bed before moving your head down to his crotch and taking his flaccid cock in your hand. You smile at him before taking it into your mouth slowly sucking on it. The man groans a little and you feel his dick becoming hard in your mouth as he watches you, but doesn\'t say anything.');
      scene.text('After blowing him for a few minutes, the man suddenly stands up, takes your head in his hands and starts moving your head up and down on his dick. After another minute, he moans loudly as he\'s about to cum.');
      qspCall(st, 'willpower', 'cum_outside', 'self');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Take his cock out of your mouth', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Take his cock out of your mouth', handler: (st: GameState) => {
    qspCall(st, 'mood', 'raise', 'tiny');
    qspCall(st, 'cum_call', 'face', ((st as any).npcID ?? 0), 1, 0, 0, 10);
    qspCall(st, 'willpower', 'cum_outside', 'self');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'cum_cleanup', '');
    qspCall(st, 'stat', '');
    scene.text('You quickly pull your head back before spurt after spurt of warm cum splatters onto your face.');
    scene.text('You give the man a little smile and he smiles back at you. You\'re happy you were able to cheer him up as you clean your face in the bathroom before leaving the room and continuing your work.');
    scene.actions([
      { label: 'Continue', goto: ['pav_hotelWork', 'maid'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Let him cum in your mouth', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/hotel/sex/maid_blow2.jpg');
    scene.text('Several spurts of cum land in your mouth, but you keep sucking until you\'re sure he\'s finished.');
    qspCall(st, 'willpower', 'swallow', 'self');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Swallow his load', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Swallow his load', handler: (st: GameState) => {
    qspCall(st, 'mood', 'raise', 'tiny');
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).npcID ?? 0), 1);
    qspCall(st, 'willpower', 'swallow', 'self');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    scene.text('You diligently swallow the man\'s sperm and give him a little smile.');
    scene.text('He smiles back at you. You\'re happy you were able to cheer him up as you stand up to leave the room and continue your work.');
    scene.actions([
      { label: 'Continue', goto: ['pav_hotelWork', 'maid'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Spit it out', handler: (st: GameState) => {
    qspCall(st, 'mood', 'raise', 'tiny');
    qspCall(st, 'cum_call', 'mouth', ((st as any).npcID ?? 0), 1, '', '', 10);
    qspCall(st, 'stat', '');
    scene.text('Once the man has finished, you stand up and go to the bathroom to spit his cum into the toilet. When you return to the room, you give him a little smile and he smiles back at you.');
    scene.text('You\'re happy you were able to cheer him up as you leave the room to continue your work.');
    scene.actions([
      { label: 'Continue', goto: ['pav_hotelWork', 'maid'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['pav_hotelWork', 'maid'] },
  ]);
  scene.build();
}

function enterWork4(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).IgorevnaBDSM ?? 0))) {
    (s as any).IgorevnaBDSM = ((s as any).IgorevnaBDSM ?? 0) + (1);
    scene.img('images/characters/pavlovsk/resident/Anna/peeping/1.jpg');
    scene.text('When you enter the next room, you realize there are still guests inside. They haven\'t noticed the door opening and it\'s soon clear why they\'re distracted.');
    if (((s as any).LariskaQW ?? 0)?.['metAnna'] === 1) {
      scene.text('To your surprise, you see Lariska\'s mother, Anna Igorevna, hitting a young blonde woman with a crop.');
    } else {
      scene.text('You see a middle aged brunette woman, about the same age as your mother, hitting a young blonde woman with a crop.');
    }
    scene.text('The blonde is bent over her lap and resting her hands on an old TV screen. Both are barely dressed in leather with everything exposed.');
    scene.text('The crop suddenly strikes loudly against the floor three times and the young blonde moves.');
    qspCall(s, 'arousal', 'voyeur', 10);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'You\'re too shocked to move', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/Anna/peeping/2.jpg');
    // TODO-QSP: dynamic text: 'The blonde girl lays on the floor, clearly exhausted as ' + iif(LariskaQW['metA...
    scene.text('The blonde girl lays on the floor, clearly exhausted as ' + ((((st as any).LariskaQW ?? 0)?.['metAnna'] === 1) ? ('Anna') : ('the brunette')) + ' hits and softly teases her pussy. She moans, clearly very excited as she tries to push herself back and get more from each strike of the crop.');
    scene.text('"Mmmmh… Mmmoooh… Mmmaah…"');
    // TODO-QSP: dynamic text: '"You''re enjoying this?" ' + iif(LariskaQW['metAnna'] = 1, 'Anna', 'the brunett...
    scene.text('"You\'re enjoying this?" ' + ((((st as any).LariskaQW ?? 0)?.['metAnna'] === 1) ? ('Anna') : ('the brunette')) + ' grins. "You want me to keep hitting your worthless pussy?"');
    scene.text('"Mmmm.. Fff… Lesssshh…"');
    scene.text('"Maybe I should just keep going until you\'re satisfied, but not today. You have to earn that. Now stand up."');
    qspCall(st, 'arousal', 'voyeur', 10);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Continue watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/Anna/peeping/3.jpg');
    // TODO-QSP: iif(LariskaQW['metAnna'] = 1, 'Anna', 'The brunette') + ' removes the gag from the girl once she has...
    scene.text('The blonde eagerly starts to clean her boot. She licks them sensuously like they are a lover, never hurrying and making sure not to miss a spot. She even cleans the sole and heel.');
    scene.text('"Good girl. Now you may have a reward."');
    qspCall(st, 'arousal', 'voyeur', 10);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Continue watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/Anna/peeping/4.jpg');
    // TODO-QSP: iif(LariskaQW['metAnna'] = 1, 'Anna', 'The brunette') + ' picks up a chain leash and the blonde move...
    scene.text('The blonde girl doesn\'t need any instruction and leans straight over the older women\'s leg, going down toward her "reward."');
    // TODO-QSP: dynamic text: 'You realize from this angle that ' + iif(LariskaQW['metAnna'] = 1, 'Anna Igorev...
    scene.text('You realize from this angle that ' + ((((st as any).LariskaQW ?? 0)?.['metAnna'] === 1) ? ('Anna Igorevna') : ('the brunette')) + ' could see you. Worried that she might have already, you ease the door shut.');
    qspCall(st, 'arousal', 'voyeur', 10);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Get back to work', goto: ['pav_hotelWork', 'maid'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).IgorevnaBDSM ?? 0) === 1) {
      (s as any).IgorevnaBDSM = ((s as any).IgorevnaBDSM ?? 0) + (1);
      scene.img('images/characters/pavlovsk/resident/Anna/peeping/5.jpg');
      scene.text('After your previous experience with this room, you carefully approach as you\'re expecting to see another act, but this blows your expectations away…');
      // TODO-QSP: iif(LariskaQW['metAnna'] = 1, 'Anna', 'The brunette') + ' is on her knees completely naked, collared...
      qspCall(s, 'arousal', 'voyeur', 3);
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Watch them', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/Anna/peeping/6.jpg');
    // TODO-QSP: dynamic text: 'Her nipples are pinched with nipple clamps and all of her limbs are cuffed as t...
    scene.text('Her nipples are pinched with nipple clamps and all of her limbs are cuffed as the other woman gently taps ' + ((((st as any).LariskaQW ?? 0)?.['metAnna'] === 1) ? ('Anna') : ('The brunette')) + ' between her legs with a whip.');
    scene.text('She seems to enjoy it. Last time, the woman being submissive this time was dominating a woman last time… It\'s making you quite confused… and aroused.');
    qspCall(st, 'arousal', 'voyeur', 3);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/Anna/peeping/7.jpg');
    scene.text('"Crawl to me and start licking my boots!" the woman commands.');
    // TODO-QSP: dynamic text: 'Without objecting, ' + iif(LariskaQW['metAnna'] = 1, 'Anna', 'the brunette') + ...
    scene.text('Without objecting, ' + ((((st as any).LariskaQW ?? 0)?.['metAnna'] === 1) ? ('Anna') : ('the brunette')) + ' crawls over to the woman and does as instructed.');
    scene.text('Is she willingly letting her have this control over her?');
    // TODO-QSP: dynamic text: '"Good girl. Now is the time for your reward. Here, put this on. You''ll need it...
    scene.text('"Good girl. Now is the time for your reward. Here, put this on. You\'ll need it," the other woman says as she hands a gag connected to some leather straps to ' + ((((st as any).LariskaQW ?? 0)?.['metAnna'] === 1) ? ('Anna') : ('the brunette')) + '.');
    qspCall(st, 'arousal', 'voyeur', 3);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/Anna/peeping/8.jpg');
    // TODO-QSP: iif(LariskaQW['metAnna'] = 1, 'Anna', 'The brunette') + ' quietly obeys, placing the gag in her mout...
    // TODO-QSP: dynamic text: 'The woman chains her arms and legs to the bench. "Take this, bitch! I''ll teach...
    scene.text('The woman chains her arms and legs to the bench. "Take this, bitch! I\'ll teach you your place!" she yells as she starts whipping ' + ((((st as any).LariskaQW ?? 0)?.['metAnna'] === 1) ? ('Anna') : ('the brunette')) + '.');
    scene.text('You watch them for some time, flabbergasted by what you\'re seeing. After a while, you feel you\'ve seen enough and decide to leave.');
    qspCall(st, 'arousal', 'voyeur', 3);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Get back to work', goto: ['pav_hotelWork', 'maid'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).IgorevnaBDSM ?? 0) === 2) {
        (s as any).IgorevnaBDSM = ((s as any).IgorevnaBDSM ?? 0) + (1);
        scene.img('images/characters/pavlovsk/resident/Anna/peeping/9.jpg');
        // TODO-QSP: dynamic text: 'While passing near the room where you have seen ' + iif(LariskaQW['metAnna'] = ...
        scene.text('While passing near the room where you have seen ' + ((((s as any).LariskaQW ?? 0)?.['metAnna'] === 1) ? ('Lariska\'s mother') : ('the brunette')) + ', you hear a male voice. Curious as to why, you decide to open the door a little using you passkey.');
        // TODO-QSP: dynamic text: 'When you open the door, you see ' + iif(LariskaQW['metAnna'] = 1, 'Anna', 'the ...
        scene.text('When you open the door, you see ' + ((((s as any).LariskaQW ?? 0)?.['metAnna'] === 1) ? ('Anna') : ('the brunette')) + ' completely naked except for a pair of gloves and some stockings and suspenders, along with some rope tied like very skimpy underwear. You can\'t hear them clearly as they talk quietly, but from what you\'re able to hear, she does not seem to be in any danger.');
        scene.text('"Only after I put your gag back can you can start to moan and <i>only</i> after I tell you. Am I clear?" the man says while pulling her hair and groping her breasts.');
        // TODO-QSP: dynamic text: '' + iif(LariskaQW['metAnna'] = 1, 'Anna', 'The brunette') + ', can''t move, her...
        scene.text('' + ((((s as any).LariskaQW ?? 0)?.['metAnna'] === 1) ? ('Anna') : ('The brunette')) + ', can\'t move, her hands tied to a rope hanging from the ceiling, so she just simply nods. You can see from her expression that she\'s affected by his groping.');
        scene.text('After a few seconds, the man finally moves his hand away and picks up the gag.');
        scene.text('"Thank you…" she mumbles.');
        scene.text('"Thank you for what?" he replies.');
        scene.text('"Thank you for groping my breast…"');
        qspCall(s, 'arousal', 'voyeur', 3);
        qspCall(s, 'stat', '');
        scene.actions([
          { label: 'Continue watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/Anna/peeping/10.jpg');
    scene.text('This woman clearly likes to be dominated. She\'s definitively not in danger, that\'s for sure.');
    scene.text('Once the man has put the gag on her, he turns her to face a different direction and starts to pinch her nipples.');
    scene.text('"It\'s simply impossible to be tired of your massive boobs!" he says as he continues to pinch her nipples, but no noise escapes from her gagged mouth.');
    scene.text('She clearly enjoyed his groping earlier, so is she holding back just to comply with the orders he gave her?');
    scene.text('The man gives her one last strong pinch. "I know you like when I pinch you. You have followed your orders remarkably well. Soon you\'ll moan as much you like. Consider it a reward."');
    qspCall(st, 'arousal', 'voyeur', 3);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Continue watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/Anna/peeping/11.jpg');
    // TODO-QSP: dynamic text: 'The man completely strips ' + iif(LariskaQW['metAnna'] = 1, 'Anna', 'the brunet...
    scene.text('The man completely strips ' + ((((st as any).LariskaQW ?? 0)?.['metAnna'] === 1) ? ('Anna') : ('the brunette')) + ', removing the ropes, stockings, suspender belt and the gloves, but not the gag.');
    scene.text('He buckles a blindfold over her eyes, then binds her arms and ankles to a wooden pillar in the middle of the room with a rope, while another rope links her big toes to the blindfold.');
    // TODO-QSP: dynamic text: 'It seems this man know what he''s doing as he places the vibrator between ' + i...
    scene.text('It seems this man know what he\'s doing as he places the vibrator between ' + ((((st as any).LariskaQW ?? 0)?.['metAnna'] === 1) ? ('Anna\'s') : ('the brunette\'s')) + ' legs, pushing it right up against her pussy.');
    scene.text('"Now your reward," he grins.');
    qspCall(st, 'arousal', 'voyeur', 3);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Continue watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/Anna/peeping/12.jpg');
    scene.text('The man sits on a chair, admiring his work before he adjusts the controller and turns on the vibrator. "You can start."');
    scene.text('You can hear the buzz and she immediately starts to moan. This must be a very powerful vibrator.');
    // TODO-QSP: dynamic text: 'You can''t move your eyes from ' + iif(LariskaQW['metAnna'] = 1, 'Anna', 'the b...
    scene.text('You can\'t move your eyes from ' + ((((st as any).LariskaQW ?? 0)?.['metAnna'] === 1) ? ('Anna') : ('the brunette')) + ' clearly enjoying this as she moves in search of the head of the vibrator, but is struggling to reach it. The man immediately reaches down and pushes it forward, clearly keen to see her climax.');
    scene.text('You really should get back to work and decide to leave them to finish in peace. You silently close the door and return to your duties.');
    qspCall(st, 'arousal', 'voyeur', 3);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Get back to work', goto: ['pav_hotelWork', 'maid'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        if (((s as any).IgorevnaBDSM ?? 0) === 3) {
          (s as any).IgorevnaBDSM = ((s as any).IgorevnaBDSM ?? 0) + (1);
          scene.img('images/characters/pavlovsk/resident/Anna/peeping/13.jpg');
          // TODO-QSP: dynamic text: 'You pass near the room that ' + iif(LariskaQW['metAnna'] = 1, 'Lariska''s mothe...
          scene.text('You pass near the room that ' + ((((s as any).LariskaQW ?? 0)?.['metAnna'] === 1) ? ('Lariska\'s mother') : ('the brunette')) + ' usually rents.');
          scene.text('You hear some voices coming from the room. Someone is definitely in there, so you decide open the door slightly…');
          // TODO-QSP: iif(LariskaQW['metAnna'] = 1, 'Anna', 'The brunette') + ' is standing next to a buff young man weari...
          scene.text('He\'s probably a male stripper she must have hired, but why? Your attention then focuses on something shiny. Are those… nipple clamps?');
          qspCall(s, 'arousal', 'voyeur', 3);
          qspCall(s, 'stat', '');
          scene.actions([
            { label: 'Continue watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/Anna/peeping/14.jpg');
    // TODO-QSP: dynamic text: 'You''re having a hard time processing what''s happening as ' + iif(LariskaQW['m...
    scene.text('You\'re having a hard time processing what\'s happening as ' + ((((st as any).LariskaQW ?? 0)?.['metAnna'] === 1) ? ('Anna') : ('the brunette')) + ' suddenly slaps his face a few times. "You have been behaving really bad, really, really bad."');
    scene.text('"I-I\'m sorry… I\'ll do better…" the man pleads.');
    scene.text('"All I hear are promises. Is that all I get to hear from you?"');
    // TODO-QSP: dynamic text: '"What the fuck?" you quietly mumble as ' + iif(LariskaQW['metAnna'] = 1, 'Anna'...
    scene.text('"What the fuck?" you quietly mumble as ' + ((((st as any).LariskaQW ?? 0)?.['metAnna'] === 1) ? ('Anna') : ('the brunette')) + ' continues by pulling the guy\'s necktie and beating his chest with a cane.');
    scene.text('"I-I\'m sorry Miss…" the man starts, but is interrupted by the slaps.');
    scene.text('"You didn\'t do your homework, again! How do you expect to improve your grades? Do you think your sweet smile is enough? Pull down your boxers and assume the position! Now!" she shouts.');
    qspCall(st, 'arousal', 'voyeur', 3);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/Anna/peeping/15.jpg');
    // TODO-QSP: dynamic text: 'The young man pulls down his boxers and steps into the middle of the room as ' ...
    scene.text('The young man pulls down his boxers and steps into the middle of the room as ' + ((((st as any).LariskaQW ?? 0)?.['metAnna'] === 1) ? ('Anna') : ('the brunette')) + ' strips down to her underwear. Once done, she starts spanking his ass with two paddles.');
    scene.text('Despite the beating, the guy stays in his place. His ass is turning bright red, but he isn\'t trying to escape the punishment. He\'s not even moving.');
    scene.text('"Say you like it… say you did it on purpose." Not waiting for an answer, she continues to beat him. Satisfied with her work, she commands him to lay on the table before she approaches and starts binding him.');
    qspCall(st, 'arousal', 'voyeur', 3);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/Anna/peeping/16.jpg');
    // TODO-QSP: iif(LariskaQW['metAnna'] = 1, 'Anna', 'The brunette') + ' takes a seat on a chair, pulls out a strap...
    scene.text('"We\'ll see if you didn\'t do it on purpose!" she sternly replies.');
    scene.text('"Y-yes Mistress…" he mumbles as he knows what\'s about to happen…');
    scene.text('"Yes what?" she yells back, clearly annoyed.');
    scene.text('The man struggles to find the correct words. "N-no Mistress… I\'m sorry, Mistress… I-I mean thank you, Mistress…"');
    // TODO-QSP: dynamic text: 'Hearing this, ' + iif(LariskaQW['metAnna'] = 1, 'Anna', 'the brunette') + ' spi...
    scene.text('Hearing this, ' + ((((st as any).LariskaQW ?? 0)?.['metAnna'] === 1) ? ('Anna') : ('the brunette')) + ' spits on the tip of the strap-on before she grins. "Bad news. No lube for bad behaving slaves."');
    scene.text('You can\'t believe what you\'re seeing and decide to leave, although something in you wants to stay to see what happens…');
    qspCall(st, 'arousal', 'voyeur', 3);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Get back to work', goto: ['pav_hotelWork', 'maid'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
          ]);
        } else {
          if (((s as any).IgorevnaBDSM ?? 0) === 4) {
            (s as any).IgorevnaBDSM = ((s as any).IgorevnaBDSM ?? 0) + (1);
            scene.img('images/characters/pavlovsk/resident/Anna/peeping/17.jpg');
            scene.text('You were not expecting to see what you did last time you passed this door, but you\'re hoping to see something new and find out more information about this confusing situation, so you decide to listen closely at the door.');
            scene.text('You hear a woman mumble, but that doesn\'t tell you much, so you put your ear right to the door.');
            scene.text('"Roll!" You clearly hear what seems to be an order, but it\'s not the woman you were expecting, so you decide to open the door very slightly.');
            scene.text('You can see two bounded women. One woman with some kind of mask and a collar, but dressed in regular clothes rolling on the floor as ordered and another in revealing underwear gagged and kneeling next to her.');
            qspCall(s, 'arousal', 'voyeur', 3);
            qspCall(s, 'stat', '');
            scene.actions([
              { label: 'Watch them', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/Anna/peeping/18.jpg');
    scene.text('"See? She obeys everything," the woman who gave the order say. You don\'t recognize the voice.');
    scene.text('"She obeys everything too?" says a now familiar voice. "Take care of our guest!"');
    // TODO-QSP: dynamic text: 'The girl with the red gag obeys the order and crawls toward the other girl and ...
    scene.text('The girl with the red gag obeys the order and crawls toward the other girl and starts caressing her. You can clearly see now that ' + ((((st as any).LariskaQW ?? 0)?.['metAnna'] === 1) ? ('Anna') : ('the brunette')) + ' is the one ordering the girl with the red gag.');
    scene.text('"I\'m not saying you aren\'t good at what you do, I\'m only saying that you cannot excel at both. Not to say that this is uncommon, but not everybody can change their ways. I just think that you can only truly be one or the other and shouldn\'t be able to change your mind as you wish."');
    scene.text('The unknown woman continues. "Don\'t take me the wrong way, I\'ve known you for what 20, 25 years? And you\'ve never disappointed me, but you\'re strange, and exceptional."');
    // TODO-QSP: iif(LariskaQW['metAnna'] = 1, 'Anna', 'The brunette') + ' looks a little disappointed. "I''ll take i...
    scene.text('The girls on the floor continue their duties, but you aren\'t able to see much more because you\'re following the conversation and now the unknown woman is preparing to leave…');
    if (((st as any).bdsmclub ?? 0)?.['intro'] === 1) {
      scene.text('Now that you can see the unknown woman clearly, you realize it\'s Mistress Elektra from the BDSM mansion!');
    }
    qspCall(st, 'arousal', 'voyeur', 3);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Keep quiet', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/Anna/peeping/19.jpg');
    scene.text('"Well it\'s time for me to leave. You know how I can\'t leave my place alone. If Uslada is left wandering around the mansion alone for more than two hours, I\'ll come back to a hot mess!"');
    // TODO-QSP: dynamic text: 'Both the women start laughing, then ' + iif(bdsmclub['intro'] = 1, 'Mistress El...
    scene.text('Both the women start laughing, then ' + ((((st as any).bdsmclub ?? 0)?.['intro'] === 1) ? ('Mistress Elektra') : ('the unknown woman')) + ' pulls on the leash of one of the girls. "See how easy it is to control?"');
    // TODO-QSP: dynamic text: 'The mood suddenly shifts and ' + iif(bdsmclub['intro'] = 1, 'Mistress Elektra',...
    scene.text('The mood suddenly shifts and ' + ((((st as any).bdsmclub ?? 0)?.['intro'] === 1) ? ('Mistress Elektra') : ('the unknown woman')) + ' becomes serious. "That\'s exactly what led me to our discussion. How are you able to not become influenced by switching back and forth? I can understand that some people want to switch it up every once in a while, but you? You switch as easily as day and night. It\'s not so simple, and you should know it better than anyone. Be upfront with me. Are you sick? Have you started abusing drugs?"');
    // TODO-QSP: iif(LariskaQW['metAnna'] = 1, 'Anna', 'The brunette') + ' laughs. "Don''t be silly! There''s nothing...
    // TODO-QSP: dynamic text: '' + iif(bdsmclub['intro'] = 1, 'Mistress Elektra', 'the unknown woman') + ' shr...
    scene.text('' + ((((st as any).bdsmclub ?? 0)?.['intro'] === 1) ? ('Mistress Elektra') : ('the unknown woman')) + ' shrugs her shoulders. "If you say so, but I really have to go now. Let me know when you\'re in that mood so we can spend some \'good\' time together."');
    // TODO-QSP: dynamic text: '"You should try it some time. Who knows, you might like it," ' + iif(LariskaQW[...
    scene.text('"You should try it some time. Who knows, you might like it," ' + ((((st as any).LariskaQW ?? 0)?.['metAnna'] === 1) ? ('Anna') : ('the brunette')) + ' cockily replies back.');
    // TODO-QSP: iif(bdsmclub['intro'] = 1, 'Mistress Elektra', 'the unknown woman') + ' approaches the door, so you ...
    qspCall(st, 'arousal', 'voyeur', 3);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Go back', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/Anna/peeping/20.jpg');
    // TODO-QSP: dynamic text: 'You turn around and go back. ' + iif(LariskaQW['metAnna'] = 1, 'Anna', 'the bru...
    scene.text('You turn around and go back. ' + ((((st as any).LariskaQW ?? 0)?.['metAnna'] === 1) ? ('Anna') : ('the brunette')) + ' is sitting in the chair, slapping the girl\'s ass. "You\'re a good girl, you know? I\'m in a good mood today, so I\'ll let you choose, pain or pleasure? But before that, I think we should say hello to our guest, don\'t you agree?"');
    // TODO-QSP: dynamic text: 'Caught, you start to panic as ' + iif(LariskaQW['metAnna'] = 1, 'Anna', 'the br...
    scene.text('Caught, you start to panic as ' + ((((st as any).LariskaQW ?? 0)?.['metAnna'] === 1) ? ('Anna') : ('the brunette')) + ' pushes the girl away and quickly walks toward the door…');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Run away', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/Anna/peeping/a.jpg');
    // TODO-QSP: dynamic text: 'You aren''t fast enough and the door swings wide open. "Got you! Did you like t...
    scene.text('You aren\'t fast enough and the door swings wide open. "Got you! Did you like the show?" ' + ((((st as any).LariskaQW ?? 0)?.['metAnna'] === 1) ? ('Anna') : ('the brunette')) + ' asks.');
    scene.text('You\'re feeling quite embarrassed and aren\'t able to say anything in your defense, afraid she might get you fired.');
    scene.text('"You know I should charge you for watching. I don\'t do many shows nowadays, but I know I\'m good," she says with a smile.');
    scene.text('"I-I…" you stammer, quickly trying to come up with an excuse.');
    // TODO-QSP: iif(LariskaQW['metAnna'] = 1, 'Anna', 'The brunette') + ' looks at you. "I understand. You''re worri...
    if (((st as any).LariskaQW ?? 0)?.['metAnna'] === 0) {
      ((st as any).LariskaQW = (st as any).LariskaQW ?? {})['metAnna'] = 1;
      scene.text('By the way, I\'m Lariska\'s mother. I\'ve seen you at the school."');
      scene.text('You blush deeply at this revelation.');
    }
    scene.text('You quickly nod, not wanting to push your luck.');
    scene.text('"As I\'m sure you\'ve noticed, I have some business still to tend to." She nods at the girl still kneeling by the chair. "If you\'ll excuse me."');
    scene.text('She closes the door and locks it, leaving you unsure of what to make of all this.');
    scene.text('You want to find out what this is all about, but worry she might have ulterior motives.');
    qspCall(st, 'calendar', 'add', 'anna_bdsm_session');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get back to work', goto: ['pav_hotelWork', 'maid'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
            ]);
          } else {
            if (((s as any).IgorevnaBDSM ?? 0) >= 5) {
              // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/characters/pavlovsk/resident/Anna/peepin...
              scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/characters/pavlovsk/resident/Anna/peeping/` + (Math.floor(Math.random() * 4) + 21) + '.jpg"></center>');
              scene.text('You peep through the keyhole to see what Anna is up to tonight, but the door is locked.');
              scene.text('You can\'t get a good look, but as always, it is both unusual and sexy.');
              qspCall(s, 'arousal', 'voyeur', 10);
              qspCall(s, 'arousal', 'end');
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Get back to work', goto: ['pav_hotelWork', 'maid'] },
  ]);
  scene.build();
}

function enterTip(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'money', 'earn', ((s as any).chai ?? 0), 'cash');
  // TODO-QSP: dynamic text: You find <<$func(''money'', ''string_profit'', chai)>> in a jar on the table. Lo...
  scene.text(`You find ${qspFunc(s, 'money', 'string_profit', ((s as any).chai ?? ''))} in a jar on the table. Looks like someone left you a tip!`);
  (s as any).earned_tips = ((s as any).earned_tips ?? 0) + (((s as any).chai ?? 0));
  (s as any).chai = 0;
  // TODO-QSP: end
  scene.build();
}

function enterWork5(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 35;
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/hotel/work/maid.work2...
  scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/hotel/work/maid.work2,` + (Math.floor(Math.random() * 5) + 0) + '.jpg"></center>');
  scene.text('You thoroughly clean the room, making sure you wipe all the dust off the furniture.');
  if (((s as any).chai ?? 0) > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTip(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['pav_hotelWork', 'maid'] },
  ]);
  scene.build();
}

function enterWork6(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 45;
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/hotel/work/maid.work3...
  scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/hotel/work/maid.work3,` + (Math.floor(Math.random() * 5) + 0) + '.jpg"></center>');
  scene.text('You clean the room faster than you were expecting and spend most of the next 45 minutes on your knees, thoroughly washing the floor.');
  if (((s as any).chai ?? 0) > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTip(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['pav_hotelWork', 'maid'] },
  ]);
  scene.build();
}

function enterWork7(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/hotel/work/maid.event0.jpg');
  scene.text('You knock on the door, but receive no reply. Just when you\'re about to open it yourself, a girl suddenly opens it. She\'s naked, except for a pair of stockings.');
  scene.text('You mumble some apologies while you try not to look at her. "Oops! I… Uhh… Sorry miss, I\'ll come back later!"');
  if ((!((s as any).chai ?? 0))) {
    scene.actions([
      { label: 'Keep walking', goto: ['pav_hotelWork', 'maid'] },
    ]);
  } else {
    scene.text('The girl chases after you into the hallway. "Excuse me? Come back here for a second!"');
    scene.actions([
      { label: 'See what she wants', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: She notices you staring at her jiggling breasts as she approaches you and grins ...
    scene.text(`She notices you staring at her jiggling breasts as she approaches you and grins when she sees your embarrassed look. She gives you ${qspFunc(s, 'money', 'string_profit', ((st as any).chai ?? ''))}.`);
    // TODO-QSP: dynamic text: She gives you a sexy smile as she hands over <<$func(''money'', ''string_profit'...
    scene.text(`She gives you a sexy smile as she hands over ${qspFunc(s, 'money', 'string_profit', ((st as any).chai ?? ''))}. "Here, sweetie… For your discretion. You have a nice day now!"`);
    scene.text('Still rendered speechless, you realize you really should say something now.');
    scene.text('"Tha-, erm… Thank you, miss!" you manage to mumble, trying to hide the deep red blush on your cheeks.');
    scene.text('She giggles as she turns around, giving you a lewd grin as she walks back to her room.');
    qspCall(st, 'money', 'earn', ((st as any).chai ?? 0), 'cash');
    (st as any).earned_tips = ((st as any).earned_tips ?? 0) + (((st as any).chai ?? 0));
    (st as any).chai = 0;
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['pav_hotelWork', 'maid'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterWork8(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/locations/pavlovsk/hotel...
  scene.text(`<center><video autoplay loop ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/hotel/sex/1,` + (Math.floor(Math.random() * 8) + 0) + '.mp4"></video></center>');
  scene.text('You open the door to the next room and immediately freeze in place when you hear a loud moaning coming from inside.');
  scene.text('Curious as you are, you decide to sneak a peek and see what\'s happening in the room. You see a couple fucking enthusiastically on the bed, completely oblivious to your presence.');
  qspCall(s, 'arousal', 'voyeur_sex', 10);
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'voyeur', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Get back to work', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Get back to work', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'voyeur', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspGoto(st, 'pav_hotelWork', 'maid');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Watch them for a while', handler: (st: GameState) => {
    scene.text('Making sure you don\'t make a sound, you put your things away and watch them for a while while softly fondling yourself through your clothes. It feels great, and the couple on the bed looks like they\'re having a great time as well.');
    scene.text('Even though you want to keep watching them, you realize you have to get back to work before you\'re missed.');
    qspCall(st, 'arousal', 'voyeur_sex', 10);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Get back to work', goto: ['pav_hotelWork', 'maid'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterWork9(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/hotel/sex/maid.event3...
  scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/hotel/sex/maid.event3,` + (Math.floor(Math.random() * 8) + 0) + '.jpg"></center>');
  scene.text('You open the door to the next room and immediately freeze in place when you hear a loud moaning coming from inside.');
  scene.text('Curious as you are, you decide to sneak a peek and see what\'s happening in the room. You carefully put your things away and look around the corner. You see a girl, but she\'s not with one man, but two! They\'re fucking her quite roughly.');
  qspCall(s, 'arousal', 'voyeur_sex', 10);
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'voyeur', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Get back to work', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Get back to work', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'voyeur', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspGoto(st, 'pav_hotelWork', 'maid');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Watch them for a while', handler: (st: GameState) => {
    (st as any).threesomewatched = ((st as any).threesomewatched ?? 0) + (1);
    scene.text('You decide to watch them for a while longer, and idly start fondling yourself through your clothes. The men are quite demanding, commanding the girl around like she\'s their plaything. They continuously talk her down using degrading language, but she obediently does everything they order her to do, only getting spanked once when she\'s not quick enough.');
    scene.text('In the corner of the room, you see some coils of rope and several cuffs sticking out of an opened bag. It looks like she\'s in for a long night…');
    scene.text('You\'d love to keep watching and see what else they have in store for her, but you realize you really have to get back to work before you\'re missed.');
    qspCall(st, 'arousal', 'voyeur_sex', 10);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Get back to work', goto: ['pav_hotelWork', 'maid'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterWork10(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/hotel/sex/maid.event4...
  scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/hotel/sex/maid.event4,` + (Math.floor(Math.random() * 7) + 0) + '.jpg"></center>');
  scene.text('You open the door to the next room and immediately freeze in place when you hear a somewhat desperate moan coming from inside. Curious as you are, you decide to sneak a peek to see what\'s happening in the room.');
  scene.text('You carefully put your things away and look around the corner. You see a girl, but she\'s not with one man, but a whole bunch of them! From what you can see, there are at least five of them taking turns fucking her however they like.');
  qspCall(s, 'arousal', 'voyeur_sex', 10);
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'voyeur', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Get back to work', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Get back to work', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'voyeur', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspGoto(st, 'pav_hotelWork', 'maid');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Watch them for a while', handler: (st: GameState) => {
    scene.text('You decide to watch them for a while longer, and idly start fondling yourself through your clothes. You notice they\'re quite rough with the girl and she sometimes struggles a little.');
    scene.text('Should you say something to the manager? Then again, how would you explain seeing them? You decide against it, figuring the girl will probably be okay.');
    qspCall(st, 'arousal', 'voyeur_sex', 10);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Get back to work', goto: ['pav_hotelWork', 'maid'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterWork11(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 35;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/hotel/work/maid.work1,0.jpg');
  scene.text('You work in the hotel restaurant, moving dirty dishes to the kitchen and preparing tables for the next guests.');
  if (((s as any).chai ?? 0) > 0) {
    qspCall(s, 'money', 'earn', ((s as any).chai ?? 0), 'cash');
    // TODO-QSP: dynamic text: While you move to pick up a tray, you find some money tucked under a plate. Look...
    scene.text(`While you move to pick up a tray, you find some money tucked under a plate. Looks like someone left you a ${qspFunc(s, 'money', 'string_profit', ((s as any).chai ?? ''))} tip!`);
    (s as any).earned_tips = ((s as any).earned_tips ?? 0) + (((s as any).chai ?? 0));
    (s as any).chai = 0;
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['pav_hotelWork', 'maid'] },
  ]);
  scene.build();
}

function enterWork12(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_rand = (Math.floor(Math.random() * 100) + 0);
  if (((s as any).temp_rand ?? 0) < 25) {
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/hotel/work/events/bed...
    scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/hotel/work/events/bed` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
    scene.text('You open the door to the next room to see a woman in a green dress on her bed smiling at you.');
    scene.text('"Hi. I work evenings and was just relaxing before my shift. Can you come back later?" she asks.');
    scene.text('You have more rooms to do, so it\'s easy enough to come back after cleaning them.');
    scene.text('You agree and close the door, leaving the woman in peace.');
    scene.actions([
      { label: 'Get back to work', goto: ['pav_hotelWork', 'maid'] },
    ]);
  } else {
    if (((s as any).temp_rand ?? 0) < 50) {
      scene.img('images/locations/pavlovsk/hotel/work/events/tipsy1.jpg');
      scene.text('As you\'re cleaning the room, the guest suddenly barges in. She looks like she\'s had a few drinks and just waves you out of her way.');
      scene.text('She\'s wearing just a bra, a mini skirt and heels, all in black. You would guess she\'d been clubbing, but at <i>this time</i>?');
      scene.text('It\'s either too early or far too late.');
      scene.actions([
        { label: 'Move aside and let her pass', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/hotel/work/events/tipsy2.jpg');
    scene.text('She crawls up onto the bed, exposing her lack of underwear.');
    scene.text('You can\'t help but stare at her pussy as she gives you such a show.');
    qspCall(st, 'arousal', 'voyeur', 5);
    qspCall(st, 'arousal', 'voyeur', (-15));
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Stare at her', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/hotel/work/events/tipsy3.jpg');
    scene.text('Your free show promptly ends as quickly as it started when she rolls over and passes out.');
    scene.text('You had mostly finished her room and this situation might look bad if your boss saw you, so you gather your things and leave feeling a little more aroused than when you started.');
    scene.actions([
      { label: 'Get back to work', goto: ['pav_hotelWork', 'maid'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).temp_rand ?? 0) < 75) {
        // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/hotel/work/events/nud...
        scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/hotel/work/events/nude` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
        scene.text('You walk into the room to find a regular guest standing there completely naked.');
        scene.text('She\'s clearly distracted and doesn\'t notice you, so you decide to go back out and close the door.');
        qspCall(s, 'arousal', 'voyeur', 5);
        qspCall(s, 'arousal', 'end');
        scene.actions([
          { label: 'Get back to work', goto: ['pav_hotelWork', 'maid'] },
        ]);
      } else {
        if (((s as any).temp_rand ?? 0) < 90) {
          scene.img('images/locations/pavlovsk/hotel/work/events/underwear.jpg');
          scene.text('You walk into the room to find a regular guest standing there in just her underwear.');
          scene.text('She\'s not looking in your direction, so you just back out and close the door.');
          scene.actions([
            { label: 'Get back to work', goto: ['pav_hotelWork', 'maid'] },
          ]);
        } else {
          scene.img('images/locations/pavlovsk/hotel/work/events/masturbate1.jpg');
          scene.text('You walk into the room and see a regular guest masturbating on her bed.');
          scene.text('She\'s looking to the side and has not realized you\'re in the room.');
          qspCall(s, 'arousal', 'voyeur', 5);
          qspCall(s, 'arousal', 'end');
          scene.actions([
            { label: 'Get back to work', goto: ['pav_hotelWork', 'maid'] },
            { label: 'Stay and watch for a bit', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/hotel/work/events/masturbate2.jpg');
    scene.text('You crouch down so that she won\'t see you and have a perfect close up view of her pussy.');
    scene.text('She\'s moaning quite loudly now and you watch her insert a finger inside herself.');
    qspCall(st, 'arousal', 'voyeur', 10);
    scene.actions([
      { label: 'Get back to work', handler: (st: GameState) => {
    qspCall(st, 'arousal', '');
  }, goto: ['pav_hotelWork', 'maid'] },
      { label: 'Stay and watch a little longer', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/hotel/work/events/masturbate3.jpg');
    scene.text('She\'s clearly more aroused as her pussy glistens and the sound of her fucking herself makes it harder to hear her moans even as they grow louder.');
    scene.text('She slides a second finger inside, desperate to sate her growing desire.');
    qspCall(st, 'arousal', 'voyeur', 10);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get back to work', handler: (st: GameState) => {
    qspCall(st, 'arousal', '');
  }, goto: ['pav_hotelWork', 'maid'] },
      { label: 'Stay to watch her finish', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/hotel/work/events/masturbate4.jpg');
    scene.text('Bucking her hips and crying out for an orgasm, the guest gives up on internal pleasures.');
    scene.text('She removes her fingers and focuses solely on her clit.');
    scene.text('"Oh God! Fuck! Yes!"');
    scene.text('Her body spasms as she finally achieves what must be a massive orgasm.');
    qspCall(st, 'arousal', 'voyeur', 10);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Time to leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    scene.img('images/locations/pavlovsk/hotel/work/events/masturbate5.jpg');
    scene.text('She\'s lying back recovering, the occasional twitch the only sign that she\'s still conscious.');
    scene.text('You go to pass her a towel so she can stop her juice dripping onto the sheets before you catch yourself and sneak out of the room.');
    scene.actions([
      { label: 'Get back to work', goto: ['pav_hotelWork', 'maid'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterWork13(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/characters/pavlovsk/school/girl/sonia/se...
  scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/characters/pavlovsk/school/girl/sonia/sex/hotel/sonia.hotel.boy0,` + (Math.floor(Math.random() * 5) + 0) + '.jpg"></center>');
  scene.text('You open the door to the next room and immediately freeze in place when you hear gagging sounds coming from inside. Curious as you are, you decide to sneak a peek and see what\'s happening in the room.');
  scene.text('When you look around the corner, you see a girl giving a guy an enthusiastic blowjob, happily gagging on his cock while she tries to take it down her throat over and over. Wait a minute… That\'s Sonia!');
  qspCall(s, 'arousal', 'voyeur_sex', 5);
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'voyeur', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Get back to work', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Get back to work', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'voyeur', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspGoto(st, 'pav_hotelWork', 'maid');
  } },
    ]);
  }
  if ((Math.floor(Math.random() * 10) + 0) < 60) {
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/characters/pavlovsk/school/girl/sonia/se...
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/characters/pavlovsk/school/girl/sonia/sex/hotel/sonia.hotel.boy.cum0,` + (Math.floor(Math.random() * 5) + 0) + '.jpg"></center>');
    scene.text('The man doesn\'t last very long. Within minutes, he shoots his load all over Sonia\'s face.');
    scene.text('She lets it sit for a minute so he can admire his handiwork before greedily wiping it towards her mouth and lapping it up.');
    scene.text('When you get up to leave, you see the man give Sonia some money.');
    qspCall(st, 'arousal', 'voyeur_sex', 3);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Get back to work', goto: ['pav_hotelWork', 'maid'] },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/characters/pavlovsk/school/girl/sonia/se...
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/characters/pavlovsk/school/girl/sonia/sex/hotel/sonia.hotel.boy1,` + (Math.floor(Math.random() * 4) + 0) + '.jpg"></center>');
    scene.text('After a few minutes of Sonia enthusiastically sucking his dick and licking his balls, the guy decides he wants to fuck her now.');
    scene.text('He spreads Sonia\'s legs and slides his cock into her in one fluent motion. Sonia moans eagerly and starts bucking her hips against him.');
    qspCall(st, 'arousal', 'voyeur_sex', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/characters/pavlovsk/school/girl/sonia/se...
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/characters/pavlovsk/school/girl/sonia/sex/hotel/sonia.hotel.boy.cum0,` + (Math.floor(Math.random() * 5) + 0) + '.jpg"></center>');
    scene.text('The man doesn\'t last very long. Within minutes, he tells Sonia to get on her knees before he shoots his load all over her face.');
    scene.text('She lets it sit for a minute so he can admire his handiwork before greedily wiping it towards her mouth and lapping it up.');
    scene.text('When you get up to leave, you see the man give Sonia some money.');
    qspCall(st, 'arousal', 'voyeur_sex', 3);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Get back to work', goto: ['pav_hotelWork', 'maid'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterWork14(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/characters/pavlovsk/school/girl/sonia/se...
  scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/characters/pavlovsk/school/girl/sonia/sex/hotel/sonia.hotel.boy.nigga0,` + (Math.floor(Math.random() * 3) + 0) + '.jpg"></center>');
  scene.text('You open the door to the next room and immediately freeze in place when you hear gagging sounds coming from inside. Curious as you are, you decide to sneak a peek and see what\'s happening in the room.');
  scene.text('When you look around the corner, you see Sonia giving a black guy an enthusiastic blowjob, happily gagging on his cock while she tries to take it down her throat over and over.');
  scene.text('It\'s not working; his cock is way too big for her, so she adjusts her strategy, diligently sucking the head of his cock and licking his balls instead.');
  qspCall(s, 'arousal', 'voyeur_sex', 10);
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'voyeur', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Get back to work', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Get back to work', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'voyeur', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspGoto(st, 'pav_hotelWork', 'maid');
  } },
    ]);
  }
  if ((Math.floor(Math.random() * 100) + 0) < 60) {
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/hotel/sonia.hotel.boy.nigga.cum0,0.jpg');
    scene.text('The black man doesn\'t last very long. Within minutes, he shoots his load all over Sonia\'s face.');
    scene.text('She lets it sit for a minute so he can admire his handiwork before greedily wiping it towards her mouth and lapping it up.');
    scene.text('When you get up to leave, you see the man give Sonia some money.');
    qspCall(st, 'arousal', 'voyeur_sex', 3);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Get back to work', goto: ['pav_hotelWork', 'maid'] },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/characters/pavlovsk/school/girl/sonia/se...
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/characters/pavlovsk/school/girl/sonia/sex/hotel/sonia.hotel.boy.nigga1,` + (Math.floor(Math.random() * 6) + 0) + '.jpg"></center>');
    scene.text('After a few minutes of Sonia enthusiastically sucking his dick and licking his balls, the black guy decides he wants to fuck her now.');
    scene.text('He spreads Sonia\'s legs and slides his cock into her in one fluent motion. You can see her pussy lips stretch around his huge cock as Sonia moans loudly, trying to hold him back for a second so she can get used to the size.');
    qspCall(st, 'arousal', 'voyeur_sex', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/hotel/sonia.hotel.boy.nigga.cum0,0.jpg');
    scene.text('The black man fucks her for a good while, but just as you think you should probably get back to work, he tells Sonia to get on her knees.');
    scene.text('Seconds later, he shoots his load all over her face. She lets it sit for a minute so he can admire his handiwork before greedily wiping it towards her mouth and lapping it up.');
    scene.text('When you get up to leave, you see the man give Sonia some money.');
    qspCall(st, 'arousal', 'voyeur_sex', 3);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Get back to work', goto: ['pav_hotelWork', 'maid'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterWork15(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/characters/pavlovsk/school/girl/sonia/se...
  scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/characters/pavlovsk/school/girl/sonia/sex/hotel/sonia.hotel.two.nigga0,` + (Math.floor(Math.random() * 2) + 0) + '.jpg"></center>');
  scene.text('You open the door to the next room and immediately freeze in place when you hear gagging sounds coming from inside. Curious as you are, you decide to sneak a peek and see what\'s happening in the room.');
  scene.text('When you look around the corner, you see Sonia with not one, but two huge black guys. She\'s happily sucking their enormous dicks in turn, massaging the one she doesn\'t currently have in her mouth with her delicate fingers.');
  qspCall(s, 'arousal', 'voyeur_sex', 10);
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'voyeur', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Get back to work', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Get back to work', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'voyeur', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspGoto(st, 'pav_hotelWork', 'maid');
  } },
    ]);
  }
  if ((Math.floor(Math.random() * 100) + 0) < 60) {
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/characters/pavlovsk/scho...
    scene.text(`<center><video autoplay loop ${((st as any).set_imgh ?? '')} src="images/characters/pavlovsk/school/girl/sonia/sex/sonia.cum0,` + (Math.floor(Math.random() * 2) + 0) + '.mp4"></video></center>');
    scene.text('Sonia must\'ve been doing a really good job. Within minutes, both of them moan and quickly jerk themselves off before shooting their loads all over her face.');
    scene.text('She lets it sit for a minute so they can admire their handiwork before greedily wiping it towards her mouth and lapping it up.');
    scene.text('When you get up to leave, you see one of the men give Sonia some money.');
    qspCall(st, 'arousal', 'voyeur_sex', 3);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Get back to work', goto: ['pav_hotelWork', 'maid'] },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/characters/pavlovsk/school/girl/sonia/se...
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/characters/pavlovsk/school/girl/sonia/sex/hotel/sonia.hotel.two.nigga1,` + (Math.floor(Math.random() * 4) + 0) + '.jpg"></center>');
    scene.text('After a few minutes, the black guys pull Sonia away from their dicks, ignoring her pleas to have them back.');
    scene.text('One of them starts fucking her pussy while the other stuffs his dick in her mouth again. You\'re somewhat amazed at how easily she takes their huge dicks in her pussy and think she must\'ve had a lot of practice with them already.');
    scene.text('After a few minutes of giving Sonia a thorough fucking, the black guys tell her to get on her knees.');
    qspCall(st, 'arousal', 'voyeur_sex', 3);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/characters/pavlovsk/scho...
    scene.text(`<center><video autoplay loop ${((st as any).set_imgh ?? '')} src="images/characters/pavlovsk/school/girl/sonia/sex/sonia.cum0,` + (Math.floor(Math.random() * 2) + 0) + '.mp4"></video></center>');
    scene.text('Sonia does as they say and seconds later, the first spurt of cum hits her face. She licks some of it up, but waits patiently for the other guy to also finish.');
    scene.text('You quickly pull away from the door when you see her looking in your general direction. You quickly gather your things and leave before she gets the idea to check if anyone was watching her.');
    qspCall(st, 'arousal', 'voyeur_sex', 3);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Get back to work', goto: ['pav_hotelWork', 'maid'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterHotcouple(s: GameState, scene: SceneBuilder): void {
  (s as any).hcday = ((s as any).daystart ?? 0);
  qspCall(s, 'npcgeneratec', '0', 'Motya', (Math.floor(Math.random() * 11) + 30), 0, 1);
  qspCall(s, 'npcStat', '$npclastgenerated');
  qspCall(s, 'npcgeneratec', '1', 'Uliana', (Math.floor(Math.random() * 11) + 30), 0, 1);
  qspCall(s, 'npcStat', '$npclastgenerated', 1);
  qspCall(s, 'arousal', 'foreplay', 10, (((s as any).npcID ?? 0)?.[1] ?? 0), 'lesbian');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/hotel/sex/hotcouple1.jpg');
  scene.text('You go up to the room and knock on the door. Uliana opens it and invites you into the room.');
  scene.text('She leads you to the bed and you sit on it and start making conversation. You\'re both talking about various things.');
  scene.text('During the conversation, Uliana starts slowly rubbing your thighs.');
  if (((s as any).pantyworntype ?? 0) !== 'none') {
    scene.text('She reaches under your skirt and starts removing your underwear.');
    scene.text('Once removed, she places your panties in your hand; you can feel how wet they are.');
  } else {
    scene.text('She reaches under your skirt, only to find that you\'re not wearing any underwear.');
    scene.text('"Hmm… Free access, How kinky!" she says before removing her own panties and placing them in your hand.');
    scene.text('You can feel how wet they already are.');
  }
  scene.text('Motya is sitting in a chair next to the bed, happily watching the scene unfold.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'massage', 10, (((st as any).npcID ?? 0)?.[0] ?? 0));
    qspCall(st, 'arousal', 'cuni', 10, (((st as any).npcID ?? 0)?.[1] ?? 0), 'lesbian');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/hotel/sex/hotcouple2.jpg');
    scene.text('You both start undressing while Motya joins you on the bed.');
    scene.text('He sits behind you and starts massaging your shoulders. He\'s quite adept at it and you soon feel the stress flowing right out of you.');
    scene.text('"Relax. We\'ll take good care of you," he says.');
    scene.text('He pushes you on the bed before Uliana places her head between your legs and starts licking your clit.');
    scene.text('This is clearly not her first time doing this, so you close your eyes and start enjoying the feeling.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'cuni', 10, (((st as any).npcID ?? 0)?.[0] ?? 0));
    qspCall(st, 'arousal', 'foreplay', (-10), (((st as any).npcID ?? 0)?.[1] ?? 0), 'lesbian');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/hotel/sex/hotcouple3.jpg');
    scene.text('The feeling suddenly stops, but not even three seconds later, it continues, but much more forceful this time.');
    scene.text('When you open your eyes, you see Motya eating you out while Uliana places herself next to you and starts rubbing her hands all over your body.');
    scene.img('images/locations/pavlovsk/hotel/sex/hotcouple4.jpg');
    scene.text('They were not kidding when they said they would take care of you.');
    scene.text('You suddenly feel the orgasm tearing through you, your eyes rolling back as you arch your back.');
    scene.text('Motya continues to enthusiastically lick your slit and your clit through your orgasm before he stops and moves his head back. You can feel your body convulsing a few more times while your orgasm slowly fades away.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'bj', 5, (((st as any).npcID ?? 0)?.[0] ?? 0));
    qspCall(st, 'arousal', 'vaginal_finger', 5, (((st as any).npcID ?? 0)?.[1] ?? 0), 'lesbian');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/hotel/sex/hotcouple5.jpg');
    scene.text('After catching your breath, you decide to give something back. ');
    scene.text('You grab Motya\'s dick in your hand and lead it to your mouth as Uliana joins you and starts sucking on his balls.');
    scene.text('As you vigorously suck Motya\'s cock, you feel Uliana\'s fingers touching and entering your pussy.');
    if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
      scene.text('"Oh my god, she\'s still a virgin!" she yells when she reaches your hymen.');
      scene.text('"How about it, honey?" she smiles. "Do you want my husband to be your first?"');
      qspCall(st, 'willpower', 'sex', 'resist');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'No, I want to save myself', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'No, I want to save myself', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'sex', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.text('"No problem, honey. This evening is all about what you want. Do you want him to cum all over your face?"');
    scene.text('"Yeah sure, that\'s fine," you reply before you lay down on your back.');
    scene.actions([
      { label: 'Finish', goto: ['pav_hotelWork', 'hotcoupfin'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Yes', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/hotel/sex/hotcouple6.jpg');
    scene.text('You lie down on the bed and spread your legs as Uliana takes Motya\'s cock in her hand and guides it towards your pussy.');
    scene.text('"Just relax, honey. He\'ll be <i>very</i> gentle," she says while giving you a little smile.');
    scene.text('Motya presses his dick into your pussy. He\'s slow and careful not to push too hard.');
    scene.text('You let out a little moan as he slowly but surely invades your pussy, his shaft sinking in deeper before you suddenly let out a little grunt. You look into Motya\'s eyes and you both know that your virginity is no more.');
    // TODO-QSP: dynamic text: You can feel every inch of his <<dick>> cm dick inside you now as he gives you a...
    scene.text(`You can feel every inch of his ${((st as any).dick ?? '')} cm dick inside you now as he gives you a little wink and starts moving.`);
    scene.text('As he\'s fucking you, Uliana gently rubs against your clit while kissing her husband.');
    scene.text('After a few minutes, you all change positions.');
    scene.actions([
      { label: 'Continue', goto: ['pav_hotelWork', 'hotcoupledoggy'] },
    ]);
  } },
      ]);
    } else {
      scene.text('"Well darling, I have bad news and good news. The bad news is that you won\'t be able to fuck a virgin this time. The good news is that she\'s definitely ready to accept your beautiful dick," Uliana says as she puts her fingers, soaked with your juices, in Motya\'s mouth.');
      scene.actions([
        { label: 'Continue', goto: ['pav_hotelWork', 'hotcoupledoggy'] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterHotcoupledoggy(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'vaginal', 10, (((s as any).npcID ?? 0)?.[0] ?? 0));
  qspCall(s, 'arousal', 'kiss', 5, (((s as any).npcID ?? 0)?.[1] ?? 0), 'lesbian');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/hotel/sex/hotcouple7.jpg');
  scene.text('Uliana lays on her back on the bed as you crawl on top of her and engage in a very passionate kiss.');
  scene.text('You then feel Motya\'s dick pushing against your pussy. He enters without much problem and starts rhythmically pumping, his hips slapping against your ass.');
  scene.text('"Mmm, Uliana… This girl is so tight, I don\'t think I can hold out much longer!" he groans.');
  scene.text('He pulls out of you and grabs you by the waist before he swiftly turns you around so you end up on your back on the bed.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['pav_hotelWork', 'hotcoupfin'] },
  ]);
  scene.build();
}

function enterHotcoupfin(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'cum_call', 'face', (((s as any).npcID ?? 0)?.[0] ?? 0), 1, '', '', 10);
  qspCall(s, 'arousal', 'end');
  scene.img('images/locations/pavlovsk/hotel/sex/hotcouple8.jpg');
  scene.text('Motya stands over you and starts jerking his cock as Uliana holds your hair back and tells you to open your mouth.');
  scene.text('You obey and Motya soon blows his load all over your face before Uliana licks most of it up.');
  scene.img('images/locations/pavlovsk/hotel/sex/hotcouple9.jpg');
  scene.text('You decide to end the evening with a three-way French kiss before Uliana and Motya both wave goodbye and tell you that you\'re always welcome to repeat this experience.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Back to the lobby', goto: ['pav_hotel', ''] },
  ]);
  scene.build();
}

function enterFirsthotelprosevent(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'event';
  (s as any).threesometojoin = 2;
  scene.text('"Okay girl, let me introduce myself first. I\'m Varsonofy Panteleimonovich Krestovozdvizhensky, but you can call me Pavlin. What may I call you?"');
  // TODO-QSP: dynamic text: "<<$pcs_firstname>>," you answer.
  scene.text(`"${((s as any).pcs_firstname ?? '')}," you answer.`);
  // TODO-QSP: dynamic text: "Welcome to my humble abode, Miss <<$pcs_firstname>>. Let me introduce you to my...
  scene.text(`"Welcome to my humble abode, Miss ${((s as any).pcs_firstname ?? '')}. Let me introduce you to my good friend, Mr. Black."`);
  scene.text('You look in the direction he gestures and see a big black dude sitting on a couch, already stroking his cock through his pants, his thick muscles evident through his fitted clothing.');
  scene.text('"Why hello there, honey. Are you here to entertain us tonight?" he asks in a deep, husky voice.');
  scene.text('"She sure is," Pavlin replies as he places both hands on your shoulders and forces you down onto your knees.');
  scene.img('images/locations/pavlovsk/hotel/sex/hotel_threesome.jpg');
  scene.text('He opens his pants and pulls out his long, semi-erect cock. He starts slapping it across your face, grinning at your humiliation.');
  scene.text('You dutifully start sucking his dick, primarily to take some amount of control for yourself. You soon notice that Mr. Black has moved up next to you, a monsterously huge shaft dangling between his powerful thighs.');
  scene.text('After sucking Pavlin to full erection, you focus on the next task at hand. You continue stroking the lengthy white dick with one hand as you reach for the big black cock with the other. You can\'t help but be amazed by the weight of it as you guide it into your awaiting mouth.');
  scene.text('You try to fit as much of it in as you can, only to realize it\'s a futile effort as your lips stretch around the thick member.');
  scene.text('You switch from one cock to the other for the next few minutes, occasionally trying to take both of them in your mouth at the same time.');
  qspCall(s, 'arousal', 'bj', 10, 'prostitution');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'On to the main event', handler: (st: GameState) => {
    qspCall(st, 'npcgeneratec', '0', 'Black guy', (Math.floor(Math.random() * 23) + 18), 0, 1);
    ((st as any).npc_dick = (st as any).npc_dick ?? {})[String((st as any).npclastgenerated ?? 0)] = (Math.floor(Math.random() * 7) + 20);
    // TODO-QSP: $npc_thdick[$npclastgenerated] = 'massive'
    qspCall(st, 'npcStat', '$npclastgenerated');
    qspCall(st, 'npcStat', 'A217', 1);
    scene.img('images/locations/pavlovsk/hotel/sex/hotel_threesome2.jpg');
    scene.text('As you continue servicing Pavlin, the black guy moves behind you and grabs you by the hips before yanking you up into a standing bent-over position.');
    if (((st as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.text('Your heart skips a beat as you feel the massive member rub against your virgin pussy.');
    } else {
      scene.text('Your heart skips a beat as you feel the massive member rub up against your pussy, arousal and excitement already coursing through you.');
    }
    // TODO-QSP: dynamic text: He places one calloused hand on your back and starts pushing his massive <<dick>...
    scene.text(`He places one calloused hand on your back and starts pushing his massive ${((st as any).dick ?? '')} cm cock inside your pussy.`);
    scene.text('"Oh fuck!" you groan as he buries himself as deep inside you as he can in one thrust.');
    if (((st as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.text('As the massive dick slams into you, you yelp in pain as each thrust slams into your cervix, causing tears to start rolling down your cheeks.');
      scene.text('It feels as if you\'re being split in half and you\'re sure there\'s some blood leaking from your conquered maidenhead.');
    } else {
      scene.text('As the massive dick splits your pussy open, you let out a guttural moan, your brain screaming at you through the mix of pleasure and pain you feel as he slides farther inside you.');
    }
    scene.text('Mr. Black gives you little time to even begin to adjust to his size before he\'s pounding away in force, each thrust seeming to drive deeper and deeper inside you.');
    scene.text('"Don\'t get distracted, skank. You\'ve got plenty of dick right here too!" Pavlin says as he forces his cock back into your mouth.');
    scene.text('You ignore the degrading comment and start sucking Pavlin as best you can. Almost involuntarily moans begin to escape your lips as the massive cock in your pussy pleasures every single inch of your insides.');
    scene.text('"Okay slut, that\'s enough warm up!" Mr. Black says almost the moment you feel his hips smack into your ass, signaling that his entire length is inside you "Now for the real action."');
    qspCall(st, 'arousal', 'bj', 5, (((st as any).npcID ?? 0)?.[1] ?? 0), 'prostitution');
    qspCall(st, 'arousal', 'vaginal', 5, (((st as any).npcID ?? 0)?.[0] ?? 0), 'prostitution');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Real action?', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/hotel/sex/hotel_threesome3.jpg');
    scene.text('You suddenly feel the huge black cock slide out of your pussy, leaving your hole gaping wide and drooling with your arousal as well as a sense of emptiness. A moment later, you squeal as you feel three of his thick fingers drive into your gaping hole and thrust a few times, each pulling another gasp from you before he rubs them on your asshole as lube.');
    if (qspFunc(s, 'pcs_has_attr', 'sex_virgin') === 0  &&  qspFunc(s, 'pcs_has_attr', 'sex_anal_virgin')) {
      // TODO-QSP: dynamic text: "<<$openinnerthought>>He''s going to take that virginity too?! It''s the only on...
      scene.text(`"${((st as any).openinnerthought ?? '')}He's going to take that virginity too?! It's the only one I have left!${((st as any).closeinnerthought ?? '')}"`);
    }
    scene.text('The fear wells up inside you once again, but you push it down and reason with yourself as you brace for what\'s to come.');
    // TODO-QSP: dynamic text: You feel the impossibly large head of his cock push up against your back door be...
    scene.text(`You feel the impossibly large head of his cock push up against your back door before he slowly he applies pressure, pushing his ${((st as any).dick ?? '')} cm dick into your ass.`);
    scene.text('Your anus resists, but you eventually feel the head break through, stretching your sphincter as you let out a pained yelp, wincing as your eyes start to water again.');
    scene.text('Showing a bit of chivalry this time, Mr. Black waits a moment so you can get used to the feeling, but all too soon the mercy disappears as he starts pumping his dick into your ass, driving deeper with each thrust.');
    scene.text('The intense feeling melds into a mix of extreme pleasure and pain, and you can\'t decide If it\'s enjoyable or not. Before your mind can decide, Pavlin once again forces his dick back into your throat and starts face-fucking you at full force.');
    scene.img('images/locations/pavlovsk/hotel/sex/hotel_threesome4.jpg');
    qspCall(st, 'arousal', 'anal', 5, (((st as any).npcID ?? 0)?.[0] ?? 0), 'prostitution');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/hotel/sex/hotel_threesome5.jpg');
    scene.text('"Time for the big finish, bitch!" Pavlin declares before he pulls his dick out of your mouth. He gives it a few hard strokes before he cums across your face.');
    scene.text('You gasp as the black man pulls his cock out of your ass, leaving it gaping as much as your still drooling pussy, and moves to your mouth. You obediently take it in your hand and stroke it until he cums over your face as well.');
    if (((st as any).trait_vars ?? 0)?.['cumeater'] === 1) {
      scene.text('You start to wipe up the cum splattered across your face, swallowing every drop you can gather while keeping eye contact with one of the men.');
      scene.text('Once you finish, you remember why you were there in the first place.');
    } else {
      scene.text('Thick strands of cum coat your face as you look up at the two domineering men.');
      scene.text('You listen to their heavy, masculine breathing for a few seconds before you suddenly remember the reason you\'re there.');
    }
    scene.actions([
      { label: 'About the money…', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth', (((st as any).npcID ?? 0)?.[0] ?? 0));
    qspCall(st, 'cum_call', 'face', (((st as any).npcID ?? 0)?.[1] ?? 0), 1);
    qspCall(st, 'arousal', 'end');
    (st as any).guy = ((st as any).guy ?? 0) + (2);
    qspCall(st, 'fame', 'pav', 'prostitute', 1);
    (st as any).proshotelopen = 1;
    (st as any).proshotelday = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    if ((!((st as any).prosmoneyhot ?? 0))) {
      scene.text('"This was fun, but I want my money," you say assertively, the smell of sticky jizz filling your nostrils.');
      scene.text('"Sure, no problem. You definitely earned it," Pavlin says before chuckling at your cum covered face.');
      // TODO-QSP: dynamic text: He takes a wad of cash out of his pocket and gives it to you. You start counting...
      scene.text(`He takes a wad of cash out of his pocket and gives it to you. You start counting it and notice it's only ${qspFunc(s, 'money', 'string_profit', 1500)}.`);
      scene.text('"This is not enough! Where is the rest?!" you yell at them, your face red with anger.');
      scene.text('"That\'s all that\'s left, bitch. I spent the rest on cheap whores like you. If you want to earn more money, you can come back anytime. Just go to the receptionist and ask for \'The Peacock\'. She\'ll understand."');
      scene.text('You angrily put the money away, quickly dress yourself and stomp out of the room in a rage.');
      qspCall(st, 'money', 'earn', 1500);
      (st as any).pavhotprosQW = 4;
      scene.actions([
        { label: 'Back to the lobby', goto: ['pav_hotel', ''] },
      ]);
    } else {
      if (((st as any).prosmoneyhot ?? 0) === 1) {
        scene.text('You shyly look at Pavlin. "So… Can I have my money back now?"');
        scene.text('"Sure, no problem. You definitely earned it," he replies before he takes a wad of cash out of his pocket and gives it to you.');
        // TODO-QSP: dynamic text: Cum drips down your face as you count it and notice it''s only <<$func(''money''...
        scene.text(`Cum drips down your face as you count it and notice it's only ${qspFunc(s, 'money', 'string_profit', 500)}. "Where's the rest?"`);
        scene.text('"That\'s all there is today. I spent the rest on cheap whores like you. If you want to earn back the rest, you can come by any time. Just go to the receptionist and ask for \'The Peacock\'. She\'ll understand."');
        scene.text('You reluctantly put the money away, defeated and depressed before dressing and leaving the room.');
        (st as any).pavhotprosQW = 5;
        qspCall(st, 'money', 'earn', 500);
        scene.actions([
          { label: 'Back to the lobby', goto: ['pav_hotel', ''] },
        ]);
      } else {
        if (((st as any).prosmoneyhot ?? 0) === 2) {
          scene.text('You look at Pavlin. "My money?"');
          // TODO-QSP: dynamic text: "Sure, no problem. You definitely earned it," he says before he takes two <<$fun...
          scene.text(`"Sure, no problem. You definitely earned it," he says before he takes two ${qspFunc(s, 'money', 'string_profit', 100)} bills out of his pocket and slaps them onto your forehead, the bills sticking to the cum still covering your face.`);
          scene.text('"If you want to earn back the rest of your money, you can come by any day. Just go to the receptionist and ask for \'The Peacock\'. She\'ll understand."');
          scene.text('You pull the sticky bills off of your head and reluctantly put the money away. Tears start streaming down your cheeks as you get dressed and leave the room, feeling cheap and used.');
          (st as any).pavhotprosQW = 6;
          qspCall(st, 'money', 'earn', 200);
          scene.actions([
            { label: 'Back to the lobby', goto: ['pav_hotel', ''] },
          ]);
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

function enterEnding0(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/hotel/maid.cloth6.jpg');
  scene.text('You finish your shift after several hours of hard work. You return to the locker room and take off the skimpy maid uniform before putting your own clothes back on.');
  scene.text('Leaving the uniform in a neat pile on the table, you grab your things and go to the hotel lobby.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['pav_hotel', ''] },
  ]);
  scene.build();
}

function enterEnding1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/hotel/maid.cloth6.jpg');
  scene.text('After several hours of hard work, you finish your shift. You walk past the room of the guys who took your money last time and wonder if you should take them up on their offer.');
  if (((s as any).stat ?? 0)?.['prostitution_count'] === 0  &&  qspFunc(s, 'money', 'can_afford', 3000)) {
    scene.text('You count the money you have on you right now and decide you\'ll get by for another day without having to sell your body.');
    scene.actions([
      { label: 'Continue', goto: ['pav_hotel', ''] },
    ]);
  } else {
    qspCall(s, 'willpower', 'prostitution', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Shake your head and go back to the lobby', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Shake your head and go back to the lobby', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'prostitution', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).threesomewatched = 0;
    qspGoto(st, 'pav_hotel', '');
  } },
      ]);
    }
    scene.actions([
      { label: 'Knock on the door', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('You feel very nervous as you knock on the door with a shaky hand.');
    scene.text('After a few seconds, your heart skips a beat when you hear the knob turning and someone opens the door; it\'s the man that took your money.');
    scene.text('A smile creeps across his thin lips as he recognizes you.');
    scene.text('"Well well well, if it isn\'t our favorite little voyeur. Come to earn your money back, I assume?" he says arrogantly as his eyes devour your body.');
    qspCall(st, 'willpower', 'prostitution', 'self', 'hard');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Yes, but I want double my money back', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Yes, but I want double my money back', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'prostitution', 'self', 'hard');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    scene.text('"Yes, I have," you reply, not letting the man\'s lecherous gaze intimidate you. "I\'ll play the little bitch for you, but on <i>my</i> terms."');
    scene.text('You let your assertive words sink in for a moment before continuing.');
    scene.text('"You will pay me DOUBLE what you took and after we\'re done, I don\'t have to deal with you anymore."');
    scene.img('images/characters/pavlovsk/school/boy/niko/yurikev/avatars/slap.jpg');
    scene.text('The man laughs. "Ha ha, take a look at this slut, thinking she can boss me around!"');
    scene.text('He suddenly slaps you across the face without warning, the loud smack echoing into the empty hallway.');
    scene.text('Your cheek stings hotly, but you don\'t flinch. You keep staring him in the eyes with a stern gaze, refusing to submit.');
    scene.text('The man looks shocked, realizing that you\'re not playing around.');
    scene.text('"Okay then, girl, have it your way. Come on in."');
    (st as any).prosmoneyhot = 0;
    scene.actions([
      { label: 'Enter the room', goto: ['pav_hotelWork', 'firsthotelprosevent'] },
    ]);
  } },
      ]);
    }
    qspCall(st, 'willpower', 'prostitution', 'self');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Yes, but I want all my money back', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Yes, but I want all my money back', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'prostitution', 'self');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    scene.text('"Yes, I have," you reply, looking meekly at his masculine form. "I really need that money back, so just tell me what to do."');
    scene.text('You hope that doing whatever he says will allow you to walk away with what he stole.');
    scene.text('"Just bring that tight ass in here and have some fun with us. I promise you\'ll get what you\'re after."');
    scene.text('The devious look on his face gives you second thoughts, but you enter the room anyway, feeling completely out of options.');
    (st as any).prosmoneyhot = 1;
    scene.actions([
      { label: 'Enter the room', goto: ['pav_hotelWork', 'firsthotelprosevent'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Yes, I need my money back', handler: (st: GameState) => {
    scene.text('"Y… Ye… Yes I have…" you reply with a quivering voice. "I need that money back, please! I\'ll do anything you ask!"');
    scene.text('You drop your eyes to the floor in submission.');
    scene.text('"Just bring that tight ass in here and have some fun with us. I promise you\'ll get what you\'re after."');
    scene.text('The devious look on his face gives you second thoughts, but you enter the room anyway, feeling completely out of options.');
    (st as any).prosmoneyhot = 2;
    scene.actions([
      { label: 'Enter the room', goto: ['pav_hotelWork', 'firsthotelprosevent'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterEnding2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/hotel/maid.cloth6.jpg');
  scene.text('After several hours of hard work, you finish your shift. You return to the locker room and take off the skimpy maid uniform before putting your own clothes back on.');
  scene.text('Leaving the uniform in a neat pile on the table, you grab your things and make your way to the hotel lobby. On your way to the lobby, you pass the room where the two men were enjoying themselves with a girl. You try to resist the urge to peep again.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk past the door and go to the lobby', goto: ['pav_hotel', ''] },
    { label: 'Peep through the keyhole', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/doggy/kotovsex12.mp4');
    scene.text('You squat in front of the keyhole. Peeking through, you can see one of the guys roughly fucking the girl.');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'stat', '');
    qspCall(st, 'willpower', 'voyeur', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Leave before someone notices you', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Leave before someone notices you', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'voyeur', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).pavhotprosQW = 1;
    qspGoto(st, 'pav_hotel', '');
  } },
      ]);
    }
    scene.actions([
      { label: 'Where is the other guy?', handler: (st: GameState) => {
    (st as any).threesometojoin = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_generic/24.jpg');
    scene.text('You suddenly feel a hand fall heavily on your shoulder. You gasp and spin around, coming face to face with the other guy holding a bucket of ice in his hand.');
    scene.text('"What the hell are you doing?" he asks.');
    scene.text('"N-Nothing! I was jus-"');
    scene.text('Before you have the chance to say something, he squeezes down on your shoulder and pushes you into the room before quickly shutting the door behind him.');
    scene.text('The other guy looks up while continuing to fuck the girl from behind. "Who\'s this?"');
    scene.img('images/shared/sex/sequence/kotovsexbonus21.mp4');
    scene.text('"This little slut was curious about what goes on in this room," the first man replies as he sets the ice bucket on a counter.');
    scene.text('His friend grins evilly, never slowing his pace as he continues driving his cock into the euphoric woman in bed with him. "Let\'s satisfy her curiosity and give this skank a show then."');
    scene.text('"Of course this is not a free show," the first man says as he takes your purse from you.');
    if (qspFunc(s, 'money', 'can_afford', 1000, 'cash') === 0  &&  qspFunc(s, 'money', 'can_afford', 1000 - ((st as any).montake ?? 0), 'cash') === 0) {
      (st as any).montake = ((st as any).montake ?? 0) + (((st as any).money ?? 0));
      qspCall(st, 'money', 'set', 0, 'cash');
      qspCall(st, 'pain', '5', 'asscheeks', 'hit');
      qspCall(st, 'stat', '');
      scene.text('"Hey!" you exclaim, instinctively reaching out to take it back, but the glare he shoots your way freezes you in your tracks.');
      scene.text('He rummages through your purse until he finds your wallet and takes all of your cash, giving it a disdainful glance before stuffing it into his pocket and roughly throwing your purse back at you.');
      // TODO-QSP: dynamic text: "What the hell? Only <<$func(''money'', ''format'', montake)>>? Our show is wort...
      scene.text(`"What the hell? Only ${qspFunc(s, 'money', 'format', ((st as any).montake ?? ''))}? Our show is worth much more than this! The only thing you get for this chump change is one slap on the ass."`);
      scene.text('He forcefully turns you around and gives you a hard smack on the ass before gripping your arm and pushing you out the door.');
      (st as any).threesometojoin = 0;
      (st as any).pavhotprosQW = 2;
      scene.actions([
        { label: 'Continue', goto: ['pav_hotel', ''] },
      ]);
    } else {
      qspCall(st, 'money', 'pay', 1000 - ((st as any).montake ?? 0));
      qspCall(st, 'stat', '');
      (st as any).pavhotprosQW = 3;
      scene.text('"Hey!" you exclaim, instinctively reaching out to take it back, but the glare he shoots your way freezes you in your tracks.');
      scene.text('He rummages through your purse until he finds your wallet and takes some of your cash. He stuffs it into his pocket before roughly throwing your purse back at you.');
      scene.text('"Now sit your pretty ass down and enjoy the show!" he says as he pushes you onto a chair in the corner of the room.');
      scene.actions([
        { label: 'Sit', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'voyeur_sex', 20);
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/mmf/fbdranal.jpg');
    scene.text('While the girl continues eagerly sucking the first man\'s dick, the other comes up behind her, grabs her by the waist and, without a second thought, thrusts his cock into her ass.');
    scene.text('The poor girl yelps in pain, the sound muffled by the huge cock in her mouth. She was clearly not ready for that.');
    scene.text('The man doesn\'t care one bit and sinks his fingers roughly into the flesh of her hips and starts pounding her as hard as he can, each thrust sending new jolts of pain through her body.');
    scene.text('After several minutes, you see the girl beginning to relax and get used to the dick in her ass. She even starts moaning in pleasure as he continues pumping away inside her.');
    scene.img('images/locations/city/redlight/studio_porn/sex/threea.mp4');
    scene.text('The man with his dick in the girl\'s mouth moves his hands to her breasts and starts roughly pinching her nipples.');
    scene.text('The girl obediently continues sucking, but looks at the man with pleading eyes, hoping this would convince him to stop. Unfortunately for her, the cruel bastard takes it as encouragement.');
    scene.text('Without warning, he grabs one of her nipples and gives it a firm twist. You\'re sure that if the girl didn\'t have a mouth full of dick, her scream would have been loud enough for the entire floor to hear.');
    scene.text('Finally, the man relents from his torture and starts focusing on her mouth again. He places both hands on her head and starts face-fucking her, pushing his cock into her mouth all the way to the base.');
    scene.text('You reckon that this girl is a deepthroat specialist as she seems unfazed by the rough throat-fucking.');
    scene.actions([
      { label: 'Continue to watch in silence', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'voyeur_sex', 20);
    qspCall(st, 'arousal', 'end');
    scene.img('images/shared/sex/mmf/fbdrdp.jpg');
    scene.text('"Let\'s give our audience a proper show," the man says as he slides his dick out of the girl\'s throat.');
    scene.text('The second guy happily agrees and shows his enthusiasm by roughly spanking the girl. "You heard him, bitch! Sit on my cock so I can pound that filthy cunt from below."');
    scene.text('The girl\'s cheeks blush bright red. You wonder why, and if you\'d be the same in this situation.');
    scene.text('Meanwhile, the guy who was fucking her ass lies down on the bed and she obediently climbs on top of him. The controlling man wastes no time and shoves his cock into her pussy with one powerful thrust before he starts jackhammering in and out of the girl.');
    scene.text('You can see her nails digging into the man\'s torso as she happily endures the rough fucking, a blissful smile stretching her lips.');
    scene.text('"I wish all our bitches would be so eager to please," the other man comments while casually moving behind the girl and his friend.');
    scene.text('He firmly plants one of his hands on her hip and guides his stiff cock to her vulnerable anus with the other. You can see a glimpse of fear on her face the second before the man leans forwards and buries his member balls-deep in her ass.');
    scene.text('You feel bad for her, but can\'t help but feel your own juices soaking your thighs as the show continues. Both of the men show no mercy as they pound away at her holes, randomly squeezing her breasts and spanking her ass between their thrusts.');
    scene.text('The men continue relentlessly pounding, their stamina seemingly endless. You notice the young woman\'s breath becoming more and more ragged until she suddenly throws her head back and screams in an earth-shattering orgasm. Taking their cue, the men both pick up their pace before groaning in unison as they flood the girl\'s holes with their cum.');
    scene.text('After finishing, they shove her out from between them. The satisfied slut immediately collapses on the bed, utterly spent as thick globs of cum slowly leak from her used holes.');
    scene.text('One of the men steps off the bed and walks over to you. "Okay whore, show\'s over." He grips your arm like a vice and pushes you out the door.');
    scene.text('"If you want your money back, maybe next time you\'ll think about joining the show instead of just watching," the man says before closing the door in your face.');
    scene.text('You think about pounding on the door and demanding your money back from the thief, but decide not to push your luck.');
    scene.actions([
      { label: 'Go to the lobby', goto: ['pav_hotel', ''] },
    ]);
  } },
      { label: 'Start touching yourself', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'vaginal_finger', 10, 'masturbate');
    qspCall(st, 'arousal', 'end');
    scene.img('images/shared/sex/mast/finger.jpg');
    scene.text('You can\'t take it any longer and move your hand towards your pussy, rubbing your swollen clit through your clothes.');
    scene.text('"It looks like our audience is really enjoying herself. Let\'s give her a proper show," the man says as he slides his dick out of the girl\'s throat.');
    scene.text('The second guy happily agrees and shows his enthusiasm by roughly spanking the girl. "You heard him, bitch, sit on my cock so I can pound that filthy cunt from below."');
    scene.text('The girl\'s cheeks blush bright red. You wonder why, and if you\'d be the same in this situation.');
    scene.text('Meanwhile, the guy who was fucking her ass lies down on the bed and she obediently climbs on top of him. The controlling man wastes no time and shoves his cock into her pussy with one powerful thrust before he starts jackhammering in and out of the girl.');
    scene.text('You can see her nails digging into the man\'s torso as she happily endures the rough fucking, a blissful smile stretching her lips.');
    scene.text('"I wish all our bitches would be so eager to please," the other man comments while casually moving behind the girl and his friend.');
    scene.text('He firmly plants one of his hands on her hip and guides his stiff cock to her vulnerable anus with the other. You can see a glimpse of fear on her face the second before the man leans forwards and buries his member balls-deep in her ass.');
    scene.text('You feel bad for her, but can\'t help but feel your own juices soaking your thighs as the show continues. Both of the men show no mercy as they pound away at her holes, randomly squeezing her breasts and spanking her ass between their thrusts.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/shared/sex/mmf/fbdrdp.jpg');
    scene.text('You see the girl turning her head and seductively looking in your direction while biting her lip, the desire burning in her eyes.');
    scene.text('Your heart flutters as you start rubbing your clit vigorously, maintaining eye contact with the other woman.');
    scene.text('You soon feel a hot wave of bliss spreading over your entire body. You shudder, but keep your eyes focused on the threesome in front of you as an orgasm soaks your fingers.');
    scene.text('The men continue relentlessly pounding, their stamina seemingly endless. You notice the young woman\'s breath becoming more and more ragged until she suddenly throws her head back and screams in an earth-shattering orgasm. Taking their cue, the men both pick up their pace before groaning in unison as they flood the girl\'s holes with their cum.');
    scene.text('After finishing, they shove her out from between them. The satisfied slut immediately collapses on the bed, utterly spent as thick globs of cum slowly leak from her used holes.');
    scene.text('One of the men steps off the bed and walks over to you. "Okay whore, show\'s over." He grips your arm like a vice and pushes you out the door.');
    scene.text('"If you want your money back, maybe next time you\'ll think about joining the show instead of just watching," the man says before closing the door in your face.');
    scene.text('You think about pounding on the door and demanding your money back from the thief, but decide not to push your luck.');
    scene.actions([
      { label: 'Go to the lobby', goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
  ]);
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
    case 'ending':
      enterEnding(s, scene);
      break;
    case 'work0':
      enterWork0(s, scene);
      break;
    case 'work1':
      enterWork1(s, scene);
      break;
    case 'work2':
      enterWork2(s, scene);
      break;
    case 'work3':
      enterWork3(s, scene);
      break;
    case 'work4':
      enterWork4(s, scene);
      break;
    case 'tip':
      enterTip(s, scene);
      break;
    case 'work5':
      enterWork5(s, scene);
      break;
    case 'work6':
      enterWork6(s, scene);
      break;
    case 'work7':
      enterWork7(s, scene);
      break;
    case 'work8':
      enterWork8(s, scene);
      break;
    case 'work9':
      enterWork9(s, scene);
      break;
    case 'work10':
      enterWork10(s, scene);
      break;
    case 'work11':
      enterWork11(s, scene);
      break;
    case 'work12':
      enterWork12(s, scene);
      break;
    case 'work13':
      enterWork13(s, scene);
      break;
    case 'work14':
      enterWork14(s, scene);
      break;
    case 'work15':
      enterWork15(s, scene);
      break;
    case 'hotcouple':
      enterHotcouple(s, scene);
      break;
    case 'hotcoupledoggy':
      enterHotcoupledoggy(s, scene);
      break;
    case 'hotcoupfin':
      enterHotcoupfin(s, scene);
      break;
    case 'firsthotelprosevent':
      enterFirsthotelprosevent(s, scene);
      break;
    case 'ending0':
      enterEnding0(s, scene);
      break;
    case 'ending1':
      enterEnding1(s, scene);
      break;
    case 'ending2':
      enterEnding2(s, scene);
      break;
    default:
      enterDefault(s, scene);
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
