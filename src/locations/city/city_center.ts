import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterImage(s: GameState, scene: SceneBuilder): void {
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) < 4) {
    if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
      scene.img('images/locations/city/citycenter/downw.jpg');
    } else {
      scene.img('images/locations/city/citycenter/downwn.jpg');
    }
  } else {
    if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
      scene.img('images/locations/city/citycenter/down.jpg');
    } else {
      scene.img('images/locations/city/citycenter/down_night.jpg');
    }
  }
  scene.build();
}

function enterDefault2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_center', '');
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    if (((s as any).month ?? 0) >= 11  &&  ((s as any).month ?? 0) <= 12  ||  ((s as any).month ?? 0) >=1  &&  ((s as any).month ?? 0) <= 3) {
      if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 23) {
      }
      if (((s as any).hour ?? 0) >= 0  &&  ((s as any).hour ?? 0) <= 7) {
      }
    } else {
      if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 23) {
      }
      if (((s as any).hour ?? 0) >= 0  &&  ((s as any).hour ?? 0) <= 7) {
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'music_actions', 'clear_restrictions');
  qspCall(s, 'random_events', '');
  scene.text('<center><h2>St. Petersburg</h2></center>');
  scene.text('<center><b>City Center</b></center>');
  qspCall(s, 'city_center', 'image');
  scene.text('Day or night, the city center is alive and bustling, so whether you\'re looking to shop, hit the gym or get some cheap food, you\'ll find it hard not to have your needs satisfied.');
  if (((s as any).mother ?? 0)?.['kickedout_timer'] !== 0  &&  ((s as any).mother ?? 0)?.['kickedout_timer'] + 3 <= ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) > 6  &&  ((s as any).hour ?? 0) <= 15  &&  ((s as any).locArgs?.[1] ?? 0) !== 'mom_check'  &&  ((s as any).cumloc ?? 0)[11] === 0) {
    qspCall(s, 'mother_chats', 'reconciliation_talk');
    return;
  }
  if (((s as any).nichWork ?? 0) === 2) {
    // TODO-QSP: act '<b>GO HOME</b> (Nicholas'' apartment)': gt 'nichApartment'
  }
  qspCall(s, 'music_actions', 'start');
  if (qspFunc(s, 'car_funcs', 'is_here')) {
    // TODO-QSP: dynamic text: Your <a href="exec:gs 'carF', 'start'"><<$car['name']>></a> sits in the parking ...
    scene.text(`Your <a href="exec:gs 'carF', 'start'">${((s as any).car ?? 0)?.['name']}</a> sits in the parking lot.`);
  }
  qspCall(s, 'taxi', '');
  // TODO-QSP: dynamic text: You have easy access to the <a href="exec: minut += 5 & gt 'train', 'center'">tr...
  scene.text('You have easy access to the <a href="exec: minut += 5 & gt \'train\', \'center\'">train station</a> and <a href="exec: minut += 5 & gt \'metro\', \'center\'">the metro</a> is only a short walk from there. Both connect you quickly to other parts of St. Petersburg and the subway is great if you\'re tight on cash. If you can\'t afford either, the <a href="exec:minut += 35 & gt \'city_park\', \'start\'">central park</a> is a 35 minute walk from here and provides a more scenic route to the other city districts.');
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 22) {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }
  // TODO-QSP: dynamic text: The neon green sign of a <<$desc_txt1>> catches your eye. It's open between '+fu...
  scene.text(`The neon green sign of a ${((s as any).desc_txt1 ?? 0)} catches your eye. It's open between '+func('time', 'get_time_string', 8, 0)+' and '+func('time', 'get_time_string', 22, 0)+' and sells cheap magazines and cigarettes.`);
  if (((s as any).hour ?? 0) === 8  &&  ((s as any).minut ?? 0) >= 30) {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  } else {
    if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 20) {
      (s as any).minut = ((s as any).minut ?? 0) + 1;
    }
  }
  // TODO-QSP: dynamic text: <<$desc_txt1>> is front and center in the commercial area. Nearby is a <<$desc_t...
  scene.text(`${((s as any).desc_txt1 ?? 0)} is front and center in the commercial area. Nearby is a ${((s as any).desc_txt2 ?? 0)} which has a swimming pool that can be used for a small fee.`);
  if (((s as any).hour ?? 0) >= 6) {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }
  if (((s as any).hour ?? 0) >= 6) {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 23) {
  }
  // TODO-QSP: dynamic text: A few buildings away is <<$desc_txt1>> and <<$desc_txt2>>, a place that sells ch...
  scene.text(`A few buildings away is ${((s as any).desc_txt1 ?? 0)} and ${((s as any).desc_txt2 ?? 0)}, a place that sells cheap fast food. For a more lavish dining experience, ${((s as any).desc_txt3 ?? 0)} is available.`);
  if (((s as any).week ?? 0) >= 4  &&  ((s as any).hour ?? 0) >= 18  ||  (((s as any).week ?? 0) >= 5  ||  ((s as any).week ?? 0) === 1)  &&  ((s as any).hour ?? 0) < 4) {
  }
  // TODO-QSP: dynamic text: The only place open here at night is <<$desc_txt3>>.
  scene.text(`The only place open here at night is ${((s as any).desc_txt3 ?? 0)}.`);
  if ((((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 17)  ||  (((s as any).week ?? 0) === 6  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 14)) {
  } else {
    if ((((s as any).week ?? 0) === 5  ||  ((s as any).week ?? 0) === 6)  &&  ((s as any).hour ?? 0) >= 17) {
    }
  }
  // TODO-QSP: dynamic text: Across the street is considered the business area. The large skyscraper there se...
  scene.text(`Across the street is considered the business area. The large skyscraper there serves as the base of operations for ${((s as any).desc_txt1 ?? 0)}, an engineering company.`);
  if ((!((s as any).casting ?? 0))) {
  } else {
    if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) < 21) {
    }
  }
  if (((s as any).week ?? 0) < 6) {
    if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 19) {
    }
  }
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 23) {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }
  if ((((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 17)  ||  (((s as any).week ?? 0) === 6  &&  ((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 14)) {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
  } else {
    if (((s as any).week ?? 0) === 6  &&  ((s as any).hour ?? 0) > 16  ||  ((s as any).week ?? 0) === 7  &&  ((s as any).hour ?? 0) < 12) {
    }
  }
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 19) {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }
  // TODO-QSP: dynamic text: Next door is the <<$desc_txt1>> followed by a <<$desc_txt2>>, <<$desc_txt3>> and...
  scene.text(`Next door is the ${((s as any).desc_txt1 ?? 0)} followed by a ${((s as any).desc_txt2 ?? 0)}, ${((s as any).desc_txt3 ?? 0)} and the 5-star <a href="exec: minut += 1 & gt 'city_hotel'">Hotel Indigo</a> for your housing needs. Lastly, the local ${((s as any).desc_txt4 ?? 0)}, ${((s as any).desc_txt5 ?? 0)} can be found at the end of the road.`);
  if (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) < 18) {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  } else {
    if (((s as any).week ?? 0) < 5  &&  ((s as any).hour ?? 0) >= 18) {
    }
  }
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  // TODO-QSP: dynamic text: Away from the shops is both <<$desc_txt6>> and the <<$desc_txt7>>.
  scene.text(`Away from the shops is both ${((s as any).desc_txt6 ?? 0)} and the ${((s as any).desc_txt7 ?? 0)}.`);
  // TODO-QSP: dynamic text: <a href="exec: minut += 1 & gt 'city_church', 'start'">Kazan Cathedral</a>, also...
  scene.text('<a href="exec: minut += 1 & gt \'city_church\', \'start\'">Kazan Cathedral</a>, also known as the Cathedral of Our Lady of Kazan, sits at the very center of the city.');
  if (((s as any).nichHotelReferral ?? 0) === 2  &&  ((s as any).nichWork ?? 0) !== 2  &&  ((s as any).nichWork ?? 0) !== 4) {
    if (((s as any).hour ?? 0) >= 4  &&  ((s as any).hour ?? 0) < 16) {
      // TODO-QSP: dynamic text: You could go to the apartment of a man named Nicholas to apply for a job as a li...
      scene.text('You could go to the apartment of a man named Nicholas to apply for a job as a live-in maid, but it\'s too early for that. You should come back between \'+func(\'time\', \'get_time_string\', 16, 0)+\' and \'+func(\'time\', \'get_time_string\', 21, 0)+\'.');
    } else {
      if (((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) < 22) {
        scene.text('You could go to the <a href="exec:gt \'nichApartment\', \'jobInterview\'">apartment of a man named Nicholas</a> to apply for a job as a live-in maid.');
      } else {
        // TODO-QSP: dynamic text: You could go to the apartment of a man named Nicholas to apply for a job as a li...
        scene.text('You could go to the apartment of a man named Nicholas to apply for a job as a live-in maid, but it\'s too late for that. You should come back between \'+func(\'time\', \'get_time_string\', 16, 0)+\' and \'+func(\'time\', \'get_time_string\', 21, 0)+\'.');
      }
    }
  }
  if (((s as any).cfg_vars ?? 0)?.['tablemap'] === 0) {
    if (((s as any).nichTanya ?? 0)?.['Relationship'] > 0  &&  ((s as any).nichTanya ?? 0)?.['Relationship'] < 4  &&  ((s as any).nichWork ?? 0) !== 2  &&  ((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) < 22  &&  ((s as any).nichTanya ?? 0)?.['FuckLast'] !== ((s as any).daystart ?? 0)) {
      scene.text('<a href="exec:gt \'nichApartment\', \'visitTanya\'">Apartment where Tanya lives</a>.');
    }
    if (((s as any).nichWork ?? 0) === 2) {
      scene.text('<a href="exec:gt \'nichApartment\'">Nicholas\'s</a> apartment where you work as a live in maid.');
    }
    if (((s as any).izoldaQW ?? 0) >= 1) {
      scene.text('Your friend <a href="exec:gt \'qwIzoldaApp\'">Isolde\'s</a> apartment.');
    }
    if (((s as any).mainQW ?? 0) >= 1) {
      scene.text('<a href="exec:gt \'tatiana_lab\', \'start\'">You can visit Tatiana</a> at the Myrkov Investigative Agency.');
    }
    if (((s as any).yaq ?? 0) === 1) {
      scene.text('<a href="exec:gt \'yarik\', \'start\'">Yaroslav</a> from the office\'s apartment.');
    }
    if (((s as any).peter ?? 0) > 0) {
      scene.text('<a href="exec:gt \'peterroom\', \'start_door\'">Peter</a> the sex shop owner\'s apartment.');
    }
  } else {
    (s as any).st_count = 0;
    if (((s as any).nichTanya ?? 0)?.['Relationship'] > 0  &&  ((s as any).nichTanya ?? 0)?.['Relationship'] < 4  &&  ((s as any).nichWork ?? 0) !== 2  &&  ((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) < 22  &&  ((s as any).nichTanya ?? 0)?.['FuckLast'] !== ((s as any).daystart ?? 0)) {
      qspCall(s, 'show_table', '', '<a href="exec:gt \'nichApartment\', \'visitTanya\'">Apartment</a> where Tanya lives', '3');
    }
    if (((s as any).nichWork ?? 0) === 2) {
      qspCall(s, 'show_table', '', '<a href="exec:gt \'nichApartment\'">Nicholas\'s</a> apartment', '3');
    }
    if (((s as any).izoldaQW ?? 0) >= 1) {
      qspCall(s, 'show_table', '', '<a href="exec:gt \'qwIzoldaApp\'">Isolde\'s</a> apartment', '3');
    }
    if (((s as any).mainQW ?? 0) >= 1) {
      qspCall(s, 'show_table', '', '<a href="exec:gt \'tatiana_lab\', \'start\'">You can visit Tatiana</a> at the Myrkov Investigative Agency.', '3');
    }
    if (((s as any).yaq ?? 0) === 1) {
      qspCall(s, 'show_table', '', '<a href="exec:gt \'yarik\', \'start\'">Yaroslav\'s</a> apartment', '3');
    }
    if (((s as any).peter ?? 0) > 0) {
      qspCall(s, 'show_table', '', '<a href="exec:gt \'peterroom\', \'start_door\'">Peter\'s</a> apartment', '3');
    }
    if (((s as any).st_count ?? 0) > 0) {
      // TODO-QSP: dynamic text: <table border=1><<$show_table>></tr></table>
      scene.text(`<table border=1>${((s as any).show_table ?? 0)}</tr></table>`);
    }
  }
  if (((s as any).PSport ?? 0) === 1  &&  ((s as any).week ?? 0) >= 6  &&  ((s as any).AlexandriaQW ?? 0) === 15) {
    // TODO-QSP: act 'Meet Ana by the courthouse': gt 'alexandriaEv', 'anachase1'
  }
  if (((s as any).AlexandriaQW ?? 0) === 3  &&  ((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 23) {
    scene.actions([
      { label: 'Call Tatiana to infiltrate the modeling agency', goto: ['tatiana_missions', 'mission2B'] },
    ]);
  }
  if (((s as any).hour ?? 0) >= 20  ||  ((s as any).hour ?? 0) < 5) {
    scene.text('There are prostitutes working in places near here.');
    if (((s as any).pcs_makeup ?? 0) > 2  &&  (((s as any).PCloStyle ?? 0) === 4  ||  ((s as any).PCloProstitute ?? 0) === 1)  &&  ((s as any).pcs_inhib ?? 0) >= 40  &&  (((s as any).stat ?? 0)?.['vaginal'] > 0  ||  ((s as any).fame ?? 0)?.['pav_slut'] >= 100)) {
      scene.actions([
        { label: 'Prostitute yourself', goto: ['street_walker', 'work'] },
      ]);
    } else {
      if (((s as any).pcs_inhib ?? 0) >= 40  &&  (((s as any).stat ?? 0)?.['vaginal'] > 0  ||  ((s as any).fame ?? 0)?.['pav_slut'] >= 100)) {
        scene.text('You could work as a prostitute, but you need to wear appropriate clothes and more than a little bit of makeup.');
      } else {
        scene.text('You could work as a prostitute, but you aren\'t comfortable with the idea.');
      }
    }
  }
  qspCall(s, 'camera', 'check_location');
  qspCall(s, 'lover', 'lover_events');
  scene.actions([
    { label: 'Walk to the central park (0:35)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 35;
  }, goto: ['city_park', 'start'] },
    { label: 'Walk to the train station (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['train', 'center'] },
    { label: 'Walk to the Metro (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['metro', 'center'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'image':
      enterImage(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const city_center: LocationDef = {
  name: 'city_center',
  title: '<center><h2>St. Petersburg</h2></center>',
  region: 'city',
  locationType: 'public_outdoors',
  enter: enter,
};
