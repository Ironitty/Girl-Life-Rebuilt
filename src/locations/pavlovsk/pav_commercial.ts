import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'public_outdoors';
  qspCall(s, 'core_library', 'setloc', 'pav_commercial', '');
  (s as any).region = 'pav';
  (s as any).alkoblock = 0;
  (s as any).boynumBlock = 0;
  qspCall(s, 'stat', '');
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
      if (((s as any).hour ?? 0) >= 8) {
      }
    } else {
      if (((s as any).hour ?? 0) >= 8) {
      }
    }
  }
  qspCall(s, 'music_actions', 'clear_restrictions');
  qspCall(s, 'random_events', '');
  scene.text('<center><h2>Pavlovsk</h2></center>');
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
    if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
      scene.img('images/locations/pavlovsk/gorodokw.jpg');
    } else {
      scene.img('images/locations/pavlovsk/pavbuswn.jpg');
    }
  } else {
    if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
      scene.img('images/locations/pavlovsk/gorodok.jpg');
    } else {
      scene.img('images/locations/pavlovsk/pavbusn.jpg');
    }
  }
  scene.text('Pavlovsk can be split into four regions; the commercial hub here, the residential suburbs, the industrial region and the Five Eight estate of Soviet era apartment blocks.');
  scene.text('While the commercial hub of Pavlovsk is better maintained and a bit cleaner looking than other areas, it is still very much rural like the rest of the town. Even from here, you can easily access the old <a href="#" onclick="window.__gameStore.setState((s) => { s.viewImage = \u0027images/locations/pavlovsk/palace/pav_palace.jpg\u0027; return s; }); return false;">Imperial Palace</a> built by Catherine the Great, and the remodeled <a href="#" onclick="window.__gameStore.setState((s) => { s.viewImage = \u0027images/locations/pavlovsk/fortress/bip_hotel.jpg\u0027; return s; }); return false;">Bip fortress</a>, which now operates as a luxury hotel and restaurant.');
  scene.text('A short distance away are the golden domes of the <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.10; return s; }); window.__gameStore.getState().doGoto(\u0027pav_church\u0027, \u0027start\u0027); return false;">Church of St. Nikolas</a>. It\'s only a 10 minute walk to get there from here.');
  scene.text('The nearby residential area is next to the lake, while the old palace grounds are now a large <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.5; return s; }); window.__gameStore.getState().doGoto(\u0027pav_park\u0027, \u0027start\u0027); return false;">public park</a>.');
  if (((((s as any).month ?? 0) === 9  &&  ((s as any).day ?? 0) > 16)  ||  ((s as any).month ?? 0) >= 10)  &&  (((s as any).AlbinaQW ?? 0)?.['StarletsShutDown'] === 0  ||  ((s as any).AlbinaQW ?? 0)?.['Chernov'] === 0)) {
    scene.text('You can see election posters on the walls all over town. They say: "Vote for Boris Barlovsky!" Wait a minute… Isn\'t that Albina\'s father?');
  }
  if (((s as any).AlbinaQW ?? 0)?.['StarletsJoined'] > 0  &&  ((s as any).AlbinaQW ?? 0)?.['StarletsShutDown'] === 0  &&  ((s as any).npc_pregtalk ?? 0)?.['A23'] === 0  &&  ((s as any).AlbinaQW ?? 0)?.['Chernov'] === 0  &&  ((((s as any).month ?? 0) === 11  &&  ((s as any).day ?? 0) > 18)  ||  ((s as any).month ?? 0) === 12)  &&  ((s as any).hour ?? 0) >= 14) {
    qspGoto(s, 'albina_election_events', 'start');
  }
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).hour ?? 0) < 4  &&  ((s as any).motherWorry ?? 0) === 0  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).age ?? 0) < 18  &&  qspFunc(s, 'homes_properties', 'has_access', 'parents_home')) {
    (s as any).motherWorry = 1;
  }
  if ((Math.floor(Math.random() * 5) + 1) >= 4  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 100) {
    if (((s as any).fame ?? 0)?.['pav_slut'] < 150) {
      scene.text('<br>You catch people staring at you intently, as if they\'re supposed to know who you are but can\'t quite remember why. You sincerely hope they don\'t realize your promiscuous adventures are the reason why. The occasional person chuckling and pointing at you crushes those hopes, and you quickly keep walking before they get a chance to say anything.');
    } else {
      if (((s as any).fame ?? 0)?.['pav_slut'] < 200) {
        scene.text('<br>People look at you with lewd grins on their faces, some of them even making vulgar gestures. Looks like they know what you\'ve been up to.');
      } else {
        scene.text('<br>Everywhere you go, people recognize you as a whore. Some even come over and slap you on the ass, claiming they know you like it when they do, or claiming they want to sample your goods. An elderly woman sitting on a bench calls out to you, loudly calling you a slut and a whore. You hide your face and run away as fast as you can before she can draw too much attention to you.');
      }
    }
  }
  if (qspFunc(s, 'car_funcs', 'is_here')) {
    scene.text(`Your <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027carF/u0027, /u0027start/u0027); return false;">${(((s as any).car ?? 0)?.['name'] ?? '')}</a> is parked in the street.`);
  }
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 20) {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).Pharmname = 'For easy access, there\'s even a <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(\u0027pav_pharmacy\u0027, \u0027start\u0027); return false;">pharmacy</a> attached to it.';
  } else {
    (s as any).Pharmname = 'For easy access, there\'s even a pharmacy attached to it, but it\'s currently closed for the day.';
  }
  scene.text('<br>Centered along the main street is the <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.10; return s; }); window.__gameStore.getState().doGoto(\u0027pav_market\u0027, \u0027\u0027); return false;">Market square</a> with the <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.10; return s; }); window.__gameStore.getState().doGoto(\u0027pav_train_hall\u0027, \u0027\u0027); return false;">Train station</a> that is always open and running. For those with a car, the end of the street leads to a <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.5; return s; }); window.__gameStore.getState().doGoto(\u0027fuelstation\u0027, \u0027start\u0027); return false;">gas station</a>, which is usually the last stop people make before heading out onto the nearby highway.');
  if (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 18) {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    (s as any).desc_txt4 = '<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.3; return s; }); window.__gameStore.getState().doGoto(\u0027post_office\u0027, \u0027start\u0027); return false;">post office</a>';
  } else {
    if (((s as any).week ?? 0) === 6  &&  ((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) <= 18) {
      (s as any).minut = ((s as any).minut ?? 0) + 3;
      (s as any).desc_txt4 = '<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.3; return s; }); window.__gameStore.getState().doGoto(\u0027post_office\u0027, \u0027start\u0027); return false;">post office</a>';
    } else {
      (s as any).desc_txt4 = '<a href="#" onclick="window.__gameStore.setState((s) => { alert(\u0027The post office, which is closed right now, will reopen at \u0027+qspFunc(s, \u0027time\u0027, \u0027get_time_string\u0027, 9, 0)+\u0027 and at \u0027+qspFunc(s, \u0027time\u0027, \u0027get_time_string\u0027, 10, 0)+\u0027 on Saturdays.\u0027); return s; }); return false;">post office</a>';
    }
  }
  if ((((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 16)  ||  (((s as any).week ?? 0) === 6  &&  ((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 13)) {
    (s as any).desc_txt5 = '<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027bank\u0027, \u0027start\u0027); return false;">VTB Bank</a>';
  } else {
    (s as any).desc_txt5 = '<a href="#" onclick="window.__gameStore.setState((s) => { alert(\u0027VTB Bank is closed right now. It opens Monday to Saturday at \u0027+qspFunc(s, \u0027time\u0027, \u0027get_time_string\u0027, 9, 0)+\u0027\u0027); return s; }); return false;">VTB Bank</a>';
  }
  scene.text(`<br>Across from the station is a small <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027pav_clinic/u0027, /u0027/u0027); return false;">Avicenna clinic</a>. ${((s as any).Pharmname ?? '')} The building next door is shared by the local ${((s as any).desc_txt4 ?? '')} and a ${((s as any).desc_txt5 ?? '')}.`);
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 20) {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    (s as any).desc_txt3 = '<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.2; return s; }); window.__gameStore.getState().doGoto(\u0027shop\u0027, \u0027start\u0027); return false;">Pyaterochka</a>, a popular discount supermarket chain';
  } else {
    (s as any).desc_txt3 = '<a href="#" onclick="window.__gameStore.setState((s) => { alert(\u0027Pyaterochka, which is closed right now. It will reopen at \u0027+qspFunc(s, \u0027time\u0027, \u0027get_time_string\u0027, 8, 0)+\u0027\u0027); return s; }); return false;">Pyaterochka</a>, a popular discount supermarket chain';
  }
  scene.text(`<br>Of course, right after you visit the bank, you can spend your money at ${((s as any).desc_txt3 ?? '')}.`);
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 17) {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    (s as any).desc_txt1 = '<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.3; return s; }); window.__gameStore.getState().doGoto(\u0027barbershop\u0027, \u0027start\u0027); return false;">A Cut Above</a>, the only barber shop in the area, <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.3; return s; }); window.__gameStore.getState().doGoto(\u0027shop_coco_carmen\u0027, \u0027start\u0027); return false;">Coco Carmen</a> the trendy clothes shop and <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.3; return s; }); window.__gameStore.getState().doGoto(\u0027shop_allure\u0027, \u0027start\u0027); return false;">Allure</a>, the swimwear chain';
  } else {
    (s as any).desc_txt1 = '<a href="#" onclick="window.__gameStore.setState((s) => { alert(\u0027A Cut Above, which is closed right now. It will reopen at \u0027+qspFunc(s, \u0027time\u0027, \u0027get_time_string\u0027, 8, 0)+\u0027\u0027); return s; }); return false;">A Cut Above</a>, the only barber shop in the area, <a href="#" onclick="window.__gameStore.setState((s) => { alert(\u0027Coco Carmen, which is closed right now. It will reopen at \u0027+qspFunc(s, \u0027time\u0027, \u0027get_time_string\u0027, 8, 0)+\u0027\u0027); return s; }); return false;">Coco Carmen</a> the trendy clothes shop and <a href="#" onclick="window.__gameStore.setState((s) => { alert(\u0027Allure, which is closed right now. It will reopen at \u0027+qspFunc(s, \u0027time\u0027, \u0027get_time_string\u0027, 8, 0)+\u0027\u0027); return s; }); return false;">Allure</a>, the swimwear chain';
  }
  scene.text(`<br>The rest of the street is filled with smaller locally owned businesses, most notable being ${((s as any).desc_txt1 ?? '')}.`);
  if ((((s as any).week ?? 0) === 7  &&  ((s as any).hour ?? 0) >= 14  &&  ((s as any).hour ?? 0) <= 17)  ||  (((s as any).week ?? 0) === 6  &&  ((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) <= 17)  &&  ((s as any).lari_gm ?? 0) !== ((s as any).daystart ?? 0)) {
    if ((!(Math.floor(Math.random() * 5) + 0))) {
      scene.text('You see <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027gschool_socialchg1\u0027, \u0027lariska_gm_1\u0027); return false;">Lariska</a> going inside Coco Carmen.');
    }
  }
  if (((s as any).leonidSlave ?? 0) === 1) {
    scene.text('<br>Near the town hall is an old <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.15; return s; }); window.__gameStore.getState().doGoto(\u0027pav_commercial_offices\u0027, \u0027\u0027); return false;">office building</a>.');
  }
  if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) <= 18) {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).desc_txt2 = '<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.15; return s; }); window.__gameStore.getState().doGoto(\u0027pav_voc_school\u0027, \u0027outside\u0027); return false;">vocational school</a>, where young adults can learn a trade.';
  } else {
    (s as any).desc_txt2 = '<a href="#" onclick="window.__gameStore.setState((s) => { alert(\u0027vocational school, which is closed right now. It will reopen again at \u0027+qspFunc(s, \u0027time\u0027, \u0027get_time_string\u0027, 7, 0)+\u0027\u0027); return s; }); return false;">vocational school</a>.';
  }
  scene.text(`<br>If you continue past the shops, you'll eventually find a ${((s as any).desc_txt2 ?? '')}`);
  if (((s as any).job_status ?? 0)?.['pav_voc_school_teacher'] === 'employed') {
    scene.actions([
      { label: '<b>Go to the hostel</b>', goto: ['ETO_hostel', 'town_hostel'] },
    ]);
  }
  if (((s as any).hypnoSchedule ?? 0) === 1) {
    if (((s as any).therapistday ?? 0) !== ((s as any).daystart ?? 0)) {
      if (qspFunc(s, 'appointments', 'get_state', 'Pavlov', 'therapist_appointment') === 'current'  ||  ((s as any).cheatVars ?? 0)?.['therapist_schedule']) {
        scene.actions([
          { label: '<b>Go see your therapist (1:00)</b>', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['therapist', 'start'] },
        ]);
      }
    }
  }
  qspCall(s, 'music_actions', 'start');
  if (((s as any).npc_QW ?? 0)?.['A113'] === 1  &&  ((s as any).daybelisex ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 23  &&  ((s as any).week ?? 0) === 7) {
    (s as any).daybelisex = ((s as any).daystart ?? 0);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/vadim/belyjeep.jpg');
    scene.text('As you walk through Pavlovsk, Vadim Bely\'s Mitsubishi Pajero stops near you.');
    scene.actions([
      { label: 'Go to the jeep', goto: ['belgang', 'payday'] },
    ]);
  } else {
    if (((s as any).npc_QW ?? 0)?.['A113'] === 1  &&  ((s as any).daybelisex ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 23  &&  ((s as any).week ?? 0) !== 7  &&  ((s as any).belgangPayWeek ?? 0) >= 300  &&  ((s as any).belgangProstitute ?? 0) === 1  &&  (!(Math.floor(Math.random() * 3) + 0))) {
      (s as any).daybelisex = ((s as any).daystart ?? 0);
      (s as any).minut = ((s as any).minut ?? 0) + 1;
      qspCall(s, 'stat', '');
      scene.img('images/characters/pavlovsk/vadim/belyjeep.jpg');
      scene.text('You see Vadim Bely\'s Mitsubishi Pajero driving through the streets. Your heart skips a beat when they notice you and pull over.');
      scene.actions([
        { label: 'Go to the jeep', goto: ['belgang', 'workofdebt'] },
      ]);
    }
  }
  qspCall(s, 'lover', 'lover_events');
  qspCall(s, 'prostitution_functions', 'check_solicitation_event');
  scene.actions([
    { label: 'Walk to the Residential area (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
    { label: 'Walk to the Industrial region (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_industrial', ''] },
    { label: 'Walk to the Five Eight estate (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_complex', 'start'] },
    { label: 'Walk to the Market (0:10)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['pav_market', ''] },
    { label: 'Walk to the park (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_park', 'start'] },
    { label: 'Walk to the train station (0:10)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['pav_train_hall', ''] },
    { label: 'Walk to the highway (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['road', '20'] },
    { label: 'Walk to Pushkin (0:25)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 25;
  }, goto: ['pushkin', ''] },
  ]);
  scene.build();
}

export const pav_commercial: LocationDef = {
  name: 'pav_commercial',
  title: '<center><h2>Pavlovsk</h2></center>',
  region: 'pavlovsk',
  locationType: 'public_outdoors',
  description: ['Pavlovsk can be split into four regions; the commercial hub here, the residential suburbs, the industrial region and the Five Eight estate of Soviet era apartment blocks.'],
  enter: enter,
};
