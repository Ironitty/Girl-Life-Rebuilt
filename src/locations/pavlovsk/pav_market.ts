import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_market', '');
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) < 4) {
      if (((s as any).hour ?? 0) >= 8) {
      }
    } else {
      if (((s as any).hour ?? 0) >= 8) {
      }
    }
  }
  qspCall(s, 'stat', '');
  scene.text('<center><h2>Pavlovsk\'s Market Square</h2></center>');
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) < 4) {
    if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 17) {
      scene.img('images/locations/pavlovsk/pav_market_winter_day.jpg');
    } else {
      scene.img('images/locations/pavlovsk/pav_market_winter_night.jpg');
    }
  } else {
    if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) < 19) {
      scene.img('images/locations/pavlovsk/pav_market_day.jpg');
    } else {
      scene.img('images/locations/pavlovsk/pav_market_night.jpg');
    }
  }
  // TODO-QSP: dynamic text: Pavlovsk's modest train station is situated near the Pavlovsk Market Square. You...
  scene.text('Pavlovsk\'s modest train station is situated near the Pavlovsk Market Square. You can enter the central hall of the <a href="exec:minut += 3 & gt \'pav_train_hall\'">train station</a> from here. Down the street from the train station is the <a href="exec:minut += 5 & gt \'gkafe\'">Borislav\'s cafe</a>\' + iif($start_type[\'loc\'] = \'sg\', \' where your mother works\', \') + \'. Next to the train station is the <a href="exec:minut += 5 & gt \'pav_station\', \'station_outside\'">Pavlovsk police station</a>, where you can find Pavlovsk\'s finest.');
  // TODO-QSP: dynamic text: On the other side of the train station is a large square where you can find a <a...
  scene.text('On the other side of the train station is a large square where you can find a <a href="exec:minut += 1 & gt \'pav_train_market\', \'start\'">market</a> on most days.');
  // TODO-QSP: dynamic text: A rather run-down <a href="exec: minut += 1 & gt 'pav_hotel'">hotel</a> is just ...
  scene.text(`A rather run-down <a href="exec: minut += 1 & gt 'pav_hotel'">hotel</a> is just across the square${((((s as any).job_hiring_step ?? 0)?.['pav_hotel_maid'] > 0) ? ('; the manager is always looking for maids among the local young girls') : (''))}. Due to its frequent use by local prostitutes, most people prefer to stay at the middle-class hotel by the main road.`);
  if (qspFunc(s, 'car_funcs', 'is_here')) {
    // TODO-QSP: dynamic text: Your <a href="exec:gs 'carF', 'start'"><<$car['name']>></a> is parked in the par...
    scene.text(`Your <a href="exec:gs 'carF', 'start'">${((s as any).car ?? 0)?.['name']}</a> is parked in the parking lot in front of the train station.`);
  }
  if (((s as any).mother ?? 0)?.['kickedout_timer'] !== 0  &&  ((s as any).mother ?? 0)?.['kickedout_timer'] + 3 <= ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) > 6  &&  ((s as any).hour ?? 0) <= 15  &&  ((s as any).cumloc ?? 0)[11] === 0) {
    qspCall(s, 'mother_chats', 'reconciliation_talk');
    return;
  }
  if (((s as any).prostitute ?? 0)?.['wl_block'] === 0  &&  ((s as any).prostitute ?? 0)?.['full_block'] === 0  &&  ((s as any).prostitute ?? 0)?.['gas_station'] === 1) {
    if (qspFunc(s, 'money', 'can_afford', 75) === 1) {
      // TODO-QSP: dynamic text: A bus terminal is situated next to the train station. Here you can catch the bus...
      scene.text('A bus terminal is situated next to the train station. Here you can catch the bus that will take you to <a href="exec:minut += 87 & gs \'money\', \'pay\', 75 & gt \'gas_station_gp_117\', \'outside\'">the gas station on the M11</a>.');
    } else {
      scene.text('A bus terminal is situated next to the train station. Here you can catch the bus that would take you to the gas station on the M11. Unfortunately, you don\'t have enough money for the ticket.');
    }
  }
  qspCall(s, 'lover', 'lover_events');
  if (((s as any).dimaRevChoice ?? 0) === 5  &&  ((s as any).dimaRevenge ?? 0) === 4  &&  (!((s as any).dimaTrain ?? 0))) {
    scene.actions([{ label: 'Continue', goto: ['dimaRevenge', '', 'dimaRevenge'] }]);
  }
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 21  &&  ((s as any).monthKidalo ?? 0) !== ((s as any).month ?? 0)) {
    if ((!((s as any).kidaloa ?? 0))) {
      if ((Math.floor(Math.random() * 6) + 0) === 0  &&  qspFunc(s, 'money', 'can_afford', 5000) === 1) {
        scene.actions([{ label: 'Continue', goto: ['pav_market', 'kidaloa'] }]);
      }
    }
    if ((!((s as any).kidalob ?? 0))) {
      if ((Math.floor(Math.random() * 6) + 0) === 0  &&  qspFunc(s, 'money', 'can_afford', 1000, 'cash') === 1  &&  (((s as any).clothingworntype ?? 0) === 'moncheri_dress'  ||  ((s as any).clothingworntype ?? 0) === 'moncheri_gown'  ||  ((s as any).clothingworntype ?? 0) === 'fashionista_dress')) {
        scene.actions([{ label: 'Continue', goto: ['pav_market', 'kidalob'] }]);
      }
    }
  }
  if (((s as any).job_status ?? 0)?.['pav_hotel_maid'] === 'employed'  &&  qspFunc(s, 'jobs', 'is_arrival_time', 'pav_hotel_maid')) {
    scene.actions([
      { label: '<b>Start your maid job</b>', goto: ['pav_hotel', ''] },
    ]);
  } else {
    scene.actions([
      { label: 'Enter the hotel', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_hotel', ''] },
    ]);
  }
  if (((s as any).transportVars ?? 0)?.['trainpass_day'] > ((s as any).daystart ?? 0)) {
    // TODO-QSP: func('transport_functions', 'display_trainpass_time')
    scene.actions([
      { label: 'Go directly to the train station platforms', goto: ['pav_train_hall', 'platform'] },
    ]);
  }
  qspCall(s, 'camera', 'check_location');
  qspCall(s, 'prostitution_functions', 'check_solicitation_event');
  // TODO-QSP: end
  scene.actions([
    { label: 'Enter the train station (0:03)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['pav_train_hall', ''] },
    { label: 'Walk to the bus station (0:04)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 4;
  }, goto: ['bus', 'pavstation'] },
    { label: 'Walk to the Commercial area (0:10)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['pav_commercial', ''] },
    { label: 'Walk to the Residential area (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['pav_residential', ''] },
    { label: 'Walk to the Industrial region (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['pav_industrial', ''] },
    { label: 'Walk to the Five Eight estate (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['pav_complex', 'start'] },
    { label: 'Walk to the highway (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['road', '20'] },
    { label: 'Walk to Pushkin (0:20)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
  }, goto: ['pushkin', ''] },
  ]);
  scene.build();
}

function enterKidaloa(s: GameState, scene: SceneBuilder): void {
  (s as any).monthKidalo = ((s as any).month ?? 0);
  qspCall(s, 'stat', '');
  scene.text('<center><h4>Pavlovsk\'s Market Square</h4></center>');
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
    if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 16) {
      scene.img('images/locations/pavlovsk/pav_market_winter_day.jpg');
    } else {
      scene.img('images/locations/pavlovsk/pav_market_winter_night.jpg');
    }
  } else {
    if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) <= 18) {
      scene.img('images/locations/pavlovsk/pav_market_day.jpg');
    } else {
      scene.img('images/locations/pavlovsk/pav_market_night.jpg');
    }
  }
  scene.text('When you arrive at the Market Square, it\'s impossible not to notice a girl holding a microphone as a man follows her with a large camera. They\'re coming straight towards you. The girl beckons you to come closer and glances over at the man holding the camera, who gives her a subtle nod.');
  scene.text('"Hello!" she happily exclaims. "We\'re shooting a pilot for a new TV show in which we hand out gifts to random strangers and film their response. It\'s called "Happiness in Russia", and we\'re hoping it will catch on all over the world. We have chosen you to be part of our pilot. Congratulations!"');
  scene.text('She grabs a large box the camera man hands to her. It\'s beautifully wrapped, with a nice bow to boot.');
  scene.text('"This box contains a brand new laptop!" she whispers. "Just act surprised when you open it!"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Say you have no time', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).kidaloa = 1;
    scene.text('<center><h4>Pavlovsk\'s Market Square</h4></center>');
    if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
      if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 16) {
        scene.img('images/locations/pavlovsk/pav_market_winter_day.jpg');
      } else {
        scene.img('images/locations/pavlovsk/pav_market_winter_night.jpg');
      }
    } else {
      if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) <= 18) {
        scene.img('images/locations/pavlovsk/pav_market_day.jpg');
      } else {
        scene.img('images/locations/pavlovsk/pav_market_night.jpg');
      }
    }
    scene.text('Even though you definitely wouldn\'t mind a new laptop, you simply don\'t have time to talk to them right now. You politely decline and walk away before they can protest.');
    scene.text('A few minutes later, you see the two of them hastily running across the square as a man opens the box, only to find a brick inside. By the time he realizes he\'s been scammed, they\'re long gone.');
    scene.text('Looks like you dodged a bullet there!');
    scene.actions([
      { label: 'Return to the station', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_market', ''] },
    ]);
  } },
    { label: 'Wow, this must be your lucky day!', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Pavlovsk\'s Market Square</h4></center>');
    if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
      if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 16) {
        scene.img('images/locations/pavlovsk/pav_market_winter_day.jpg');
      } else {
        scene.img('images/locations/pavlovsk/pav_market_winter_night.jpg');
      }
    } else {
      if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) <= 18) {
        scene.img('images/locations/pavlovsk/pav_market_day.jpg');
      } else {
        scene.img('images/locations/pavlovsk/pav_market_night.jpg');
      }
    }
    scene.text('You happily take the box from the girl as the man starts filming. The girl holds the microphone up and invites you to give some shout-outs to relatives and friends while you\'re on TV before she points the microphone at you.');
    scene.text('You gladly accept the invitation and enthusiastically address your friends and family while looking at the camera, sincerely hoping you didn\'t leave anyone out. The man then turns the camera away for a second.');
    // TODO-QSP: dynamic text: "Unfortunately, the government doesn't just let us give away items for nothing,"...
    scene.text('"Unfortunately, the government doesn\'t just let us give away items for nothing," the girls says. "We\'re legally obligated to have our winners pay VAT over the amount of money their gift is worth. In your case, this comes down to \' + $func(\'money\', \'string_price\', 5000) + \'."');
    scene.actions([
      { label: 'Pay the VAT and check out your new laptop', handler: (st: GameState) => {
    qspCall(s, 'money', 'pay', 5000);
    (s as any).kidaloa = 1;
    if (((s as any).pcs_mood ?? 0) > 5) {
      (s as any).pcs_mood = 5;
    }
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Pavlovsk\'s Market Square</h4></center>');
    if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
      if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 16) {
        scene.img('images/locations/pavlovsk/pav_market_winter_day.jpg');
      } else {
        scene.img('images/locations/pavlovsk/pav_market_winter_night.jpg');
      }
    } else {
      if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) <= 18) {
        scene.img('images/locations/pavlovsk/pav_market_day.jpg');
      } else {
        scene.img('images/locations/pavlovsk/pav_market_night.jpg');
      }
    }
    scene.text('You quickly give them the money and enthusiastically pull at the bow. When you finally manage to tear the wrapping paper off and open the box, you find… a brick wrapped in old newspaper.');
    scene.text('You look up, but the man and girl are nowhere to be seen. You angrily stuff the box in a garbage can before you move on.');
    scene.actions([
      { label: 'Return to the train station', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['pav_market', ''] },
    ]);
  } },
      { label: 'Say you can\'t afford it right now', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Pavlovsk\'s Market Square</h4></center>');
    if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
      if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 16) {
        scene.img('images/locations/pavlovsk/pav_market_winter_day.jpg');
      } else {
        scene.img('images/locations/pavlovsk/pav_market_winter_night.jpg');
      }
    } else {
      if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) <= 18) {
        scene.img('images/locations/pavlovsk/pav_market_day.jpg');
      } else {
        scene.img('images/locations/pavlovsk/pav_market_night.jpg');
      }
    }
    scene.text('With some regret in your voice, you apologize to the man and girl and explain that you can\'t afford to pay the VAT.');
    scene.text('They try to explain that this could very well be a one-time opportunity and that you\'re missing out on a free laptop, but you have to decline. You simply cannot afford to spend the money you have on a frivolous purchase like a laptop, even if it comes really cheap.');
    scene.text('Sympathizing with you, they promise to look for you if they ever come back to Pavlovsk for another episode of the show.');
    scene.actions([
      { label: 'Thank them and leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['pav_market', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKidalob(s: GameState, scene: SceneBuilder): void {
  (s as any).monthKidalo = ((s as any).month ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><h4>Pavlovsk\'s Market Square</h4></center>');
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
    if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 16) {
      scene.img('images/locations/pavlovsk/pav_market_winter_day.jpg');
    } else {
      scene.img('images/locations/pavlovsk/pav_market_winter_night.jpg');
    }
  } else {
    if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) <= 18) {
      scene.img('images/locations/pavlovsk/pav_market_day.jpg');
    } else {
      scene.img('images/locations/pavlovsk/pav_market_night.jpg');
    }
  }
  scene.text('As you walk across the square towards the station, you notice two well dressed men staring at you. After some brief consideration they start approaching, and you can just about hear what they\'re saying: "Wow, she\'s just the model we need! She has this… Claudia Schiffer feel to her, don\'t you agree?"');
  scene.text('You can see the other man nod just as they get close to you, and one of the men stops you. "Excuse me, miss. We\'re opening a new fashion store in the city and are looking for a model to feature in our advertisements. We\'ve been looking for just the right girl all day and… I think we just found her!"');
  // TODO-QSP: dynamic text: The second man nods enthusiastically as the first man continues. "We would be ab...
  scene.text('The second man nods enthusiastically as the first man continues. "We would be able to offer you \' + $func(\'money\', \'string_price\', 10000) + \' for an extensive photoshoot featuring our clothing line."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Not interested', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('"Sorry, not interested," you reply and start walking away before they can protest.');
    scene.actions([
      { label: 'Leave', goto: ['pav_market', ''] },
    ]);
  } },
    { label: 'Agree', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.text('The guys take you to the back of the railway station, and the guy who hasn\'t said anything to you pulls out an expensive looking camera before mounting it on a tripod near some trees.');
    scene.text('The first guy approaches you. "The shoot will be against a natural background. We\'ve done market research, and have determined that the picturesque background of the outdoors is by far the most desirable option for our campaign. There is only one problem… Your dress is not what we\'re looking for at all. You\'ll have to change."');
    scene.text('The guy opens the trunk of his car and gives you a rather cheap looking sundress. "You can change inside the car."');
    qspCall(s, 'willpower', 'exhib', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['pav_market', ''] },
      ]);
    }
    scene.actions([
      { label: 'Change into the sundress', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'clothing', 'dispose');
    qspCall(s, 'clothing', 'add_item', 'gm_dress', 52);
    qspCall(s, 'clothing', 'wear', 'gm_dress', 52);
    (s as any).lastwornclothingnumber = 0;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You quickly get into the car and put on the dress the man gave you. You give you...
    scene.text(`You quickly get into the car and put on the dress the man gave you. You give your ${((s as any).titsize ?? 0)} breasts a squeeze through the fabric, adjusting the dress a bit so it fits well around them for the photo shoot.`);
    scene.actions([
      { label: 'Pose for the camera', handler: (st: GameState) => {
    (s as any).kidalob = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('You get out of the car, leaving your possessions in there, figuring it\'s easier to just collect them when you change back into your regular clothes.');
    scene.text('You walk over to the tree the camera is aimed at and the guy who hasn\'t said a word mans the camera, while the first guy instructs you how to stand in several poses.');
    scene.text('"Very nice, very nice… Now turn your back to the camera!" You do as you\'re told and the camera clicks several times. "Excellent. Now tilt your head backwards and close your eyes."');
    scene.text('You do as instructed, waiting for the now familiar click of the camera, but it never comes.');
    scene.actions([
      { label: 'Ask what\'s taking so long', handler: (st: GameState) => {
    qspCall(s, 'money', 'set', 0, 'cash');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (((s as any).pcs_mood ?? 0) > 50) {
      (s as any).pcs_mood = 50;
    }
    qspCall(s, 'stat', '');
    scene.text('You turn around to see what\'s taking so long, only to see their car speed off and zip around a corner. Then you realize: all your stuff is still on the back seat of the car!');
    scene.text('Realizing you\'ve just been scammed out of your good dress and all of your money, you sit on a tree stump and hold your head in your hands for a minute or two, pondering how you could\'ve been so stupid.');
    scene.actions([
      { label: 'Return to the train station', goto: ['pav_market', ''] },
    ]);
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

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'kidaloa':
      enterKidaloa(s, scene);
      break;
    case 'kidalob':
      enterKidalob(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pav_market: LocationDef = {
  name: 'pav_market',
  title: '<center><h2>Pavlovsk\'s Market Square</h2></center>',
  region: 'pavlovsk',
  locationType: 'public_outdoors',
  enter: enter,
};
