import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterImage(s: GameState, scene: SceneBuilder): void {
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) < 4) {
    if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
      scene.img('images/locations/city/residential/streetw.jpg');
    } else {
      scene.img('images/locations/city/residential/streetwn.jpg');
    }
  } else {
    if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
      scene.img('images/locations/city/residential/street.jpg');
    } else {
      scene.img('images/locations/city/residential/street_night.jpg');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).music_loop = 0;
  (s as any).phone_off = 0;
  qspCall(s, 'core_library', 'setloc', 'city_residential', '');
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) < 4) {
      if (((s as any).hour ?? 0) >= 8) {
      }
    } else {
      if (((s as any).hour ?? 0) >= 8) {
      }
    }
  }
  qspCall(s, 'random_events', '');
  scene.text('<center><h2>St. Petersburg</h2></center>');
  scene.text('<center><b>Residential Area</b></center>');
  qspCall(s, 'city_residential', 'image');
  if (((s as any).opusk ?? 0) > 0  ||  ((s as any).gnewQW ?? 0) === 5) {
    if ((!(Math.floor(Math.random() * 10) + 0))) {
      scene.actions([{ label: 'Continue', goto: ['gopnew', 'start5'] }]);
    }
    if (qspFunc(s, 'homes_properties', 'has_access', 'city_apartment')) {
      // TODO-QSP: dynamic text: Something is written on the wall near the entrance to your building. It reads:<b...
      scene.text(`Something is written on the wall near the entrance to your building. It reads:<b>"${((s as any).pcs_firstname ?? 0)} ${((s as any).pcs_lastname ?? 0)} from apartment 42 is a cheap slut!"</b>`);
    }
  }
  qspCall(s, 'stat', '');
  if (((s as any).gopdeath ?? 0) === 1  &&  ((s as any).vsehsdaladay ?? 0) !== ((s as any).daystart ?? 0)) {
    // TODO-QSP: gt 'gameover', 'force', 6
  }
  if (((s as any).mother ?? 0)?.['kickedout_timer'] !== 0  &&  ((s as any).mother ?? 0)?.['kickedout_timer'] + 3 <= ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) < 16  &&  ((s as any).cumloc ?? 0)[11] === 0) {
    qspCall(s, 'mother_chats', 'reconciliation_talk');
    return;
  }
  if (qspFunc(s, 'car_funcs', 'is_here')) {
    // TODO-QSP: dynamic text: <a href="exec:gs 'carF', 'start'">Your <<$car['name']>></a> is in the parking lo...
    scene.text(`<a href="exec:gs 'carF', 'start'">Your ${((s as any).car ?? 0)?.['name']}</a> is in the parking lot.`);
  } else {
    if (qspFunc(s, 'car_funcs', 'is_here', 'city_house_res_misc', 'fronty')) {
      // TODO-QSP: dynamic text: <a href="exec: minut += 10 & gs 'carF', 'start'">Your <<$car['name']>></a> is in...
      scene.text(`<a href="exec: minut += 10 & gs 'carF', 'start'">Your ${((s as any).car ?? 0)?.['name']}</a> is in your driveway.`);
    }
  }
  if (qspFunc(s, 'homes_properties', 'is_property_of_status', 'owned', 'city_house')) {
    // TODO-QSP: dynamic text: Your <a href="exec: minut += 10 & gs 'city_house_res_misc', 'fronty'">house</a> ...
    scene.text('Your <a href="exec: minut += 10 & gs \'city_house_res_misc\', \'fronty\'">house</a> is within walking distance.');
    scene.actions([
      { label: '<b>Go to your house</b>', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
  }, goto: ['city_house_res_misc', 'fronty'] },
    ]);
  }
  if (qspFunc(s, 'homes_properties', 'has_access', 'city_apartment')) {
    scene.actions([
      { label: '<b>Go to your apartment</b>', handler: (st: GameState) => {
    (s as any).gorand = Math.floor(Math.random() * 101) + 0;
    if ((((s as any).loh ?? 0) > 0  ||  ((s as any).gnewQW ?? 0) === 7)  &&  ((s as any).gopdolg ?? 0) > 0  &&  ((s as any).hour ?? 0) >= 20  &&  ((s as any).gorand ?? 0) >= 80) {
      scene.actions([{ label: 'Continue', goto: ['gopnew', 'start'] }]);
    }
    if ((((s as any).opusk ?? 0) > 0  ||  ((s as any).gnewQW ?? 0) === 5)  &&  ((s as any).hour ?? 0) >= 20  &&  ((s as any).gorand ?? 0) >= 80  &&  ((s as any).gopopusday ?? 0) !== ((s as any).daystart ?? 0)) {
      scene.actions([{ label: 'Continue', goto: ['gopnew', 'start'] }]);
    }
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['korr', ''] },
    ]);
  }
  qspCall(s, 'jobs_gigs', 'disp_evt', 3);
  qspCall(s, 'taxi', '');
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 23) {
    // TODO-QSP: dynamic text: You can see the <a href="exec:$loc = 'city_residential' & minut += 1 & gt 'kiosk...
    scene.text('You can see the <a href="exec:$loc = \'city_residential\' & minut += 1 & gt \'kiosk\', \'start\'">kiosk</a> selling cigarettes and magazines.');
  }
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 22) {
    // TODO-QSP: dynamic text: <br>The local <a href="exec:minut += 3 & gt 'city_laundromat'">laundromat</a> is...
    scene.text('<br>The local <a href="exec:minut += 3 & gt \'city_laundromat\'">laundromat</a> is open. The advertisement says: "You can wash your clothes here."');
  } else {
    // TODO-QSP: dynamic text: <br>The local laundromat is closed, it'll open again at <<func('time', 'get_time...
    scene.text(`<br>The local laundromat is closed, it'll open again at ${qspFunc(s, 'time', 'get_time_string', 8, 0)}. The advertisement says: "You can wash your clothes here."`);
  }
  if (((s as any).cfg_vars ?? 0)?.['tablemap'] === 0) {
    if (((s as any).katkey ?? 0) === 1) {
      scene.text('<a href="exec:gt \'katspalnya\', \'start\'">Kat\'s</a> apartment');
    }
    if (((s as any).IrinaQW ?? 0) >= 1) {
      scene.text('<a href="exec:gt \'city_irinaroom\', \'start\'">Irene\'s</a> apartment is not far from yours.');
    }
    if (((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) < 22  &&  ((s as any).dimaQW ?? 0) > 0) {
      scene.text('<a href="exec:gt \'city_dima\', \'start\'">Dima\'s</a> apartment');
    }
    if (((s as any).klofQW ?? 0) >= 2) {
      scene.text('<a href="exec:gt \'city_jorahouse\', \'start\'">Jora\'s</a> apartment');
    }
  } else {
    (s as any).st_count = 0;
    if (((s as any).katkey ?? 0) === 1) {
      qspCall(s, 'show_table', '', '<a href="exec:gt \'katspalnya\', \'start\'">Kat\'s</a> apartment', '3');
    }
    if (((s as any).IrinaQW ?? 0) >= 1) {
      qspCall(s, 'show_table', '', '<a href="exec:gt \'city_irinaroom\', \'start\'">Irene\'s</a> apartment is not far from yours.', '3');
    }
    if (((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) < 22  &&  ((s as any).dimaQW ?? 0) > 0) {
      qspCall(s, 'show_table', '', '<a href="exec:gt \'city_dima\', \'start\'">Dima\'s</a> apartment', '3');
    }
    if (((s as any).klofQW ?? 0) >= 2) {
      qspCall(s, 'show_table', '', '<a href="exec:gt \'city_jorahouse\', \'start\'">Jora\'s</a> apartment', '3');
    }
    if (((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) < 22  &&  ((s as any).lesbiQW ?? 0) === 1) {
      qspCall(s, 'show_table', '', '<a href="exec:gt \'lesbidomhouse\', \'start\'">Natalya Petrovna\'s</a> apartment.', '3');
    } else {
      if (((s as any).lesbiday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).subdom ?? 0) === 2) {
        qspCall(s, 'show_table', '', '<a href="exec:gt \'lesbisubhouse\', \'start\'">Your slave\'s</a> apartment.', '3');
      } else {
        if (((s as any).lesbiday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 22  &&  ((s as any).lesbiQW ?? 0) >= 2  &&  ((s as any).lesbiQW ?? 0) < 13) {
          qspCall(s, 'show_table', '', '<a href="exec:gt \'lesbidomhouse\', \'start\'">Mistress\'s</a> apartment.', '3');
        } else {
          if (((s as any).lesbiday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 22  &&  ((s as any).lesbiQW ?? 0) >= 13) {
            qspCall(s, 'show_table', '', '<a href="exec:gt \'lesbimistress\', \'start\'">Mistress\'s</a> apartment.', '3');
          }
        }
      }
    }
    if (((s as any).st_count ?? 0) > 0) {
      // TODO-QSP: dynamic text: <table BORDER=1><<$show_table>></tr></table>
      scene.text(`<table BORDER=1>${((s as any).show_table ?? 0)}</tr></table>`);
    }
  }
  // TODO-QSP: dynamic text: The <a href="exec: minut += 5 & gt 'metro', 'residential'">Metro</a> station is ...
  scene.text('The <a href="exec: minut += 5 & gt \'metro\', \'residential\'">Metro</a> station is a 5 minute walk away.');
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 20) {
    // TODO-QSP: dynamic text: The <a href="exec: minut += 3 & gt 'shop', 'start'">supermarket</a> is not far f...
    scene.text('The <a href="exec: minut += 3 & gt \'shop\', \'start\'">supermarket</a> is not far from here.');
  }
  if ((((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 20)  ||  ((s as any).preg ?? 0) === 2) {
    scene.text('The <a href="exec:gt \'city_clinic\', \'start\'">clinic</a> is also nearby.');
  } else {
    // TODO-QSP: dynamic text: The clinic is closed. It will open at '+func('time', 'get_time_string', 8, 0)+'.
    scene.text('The clinic is closed. It will open at \'+func(\'time\', \'get_time_string\', 8, 0)+\'.');
  }
  if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 9  &&  ((s as any).military ?? 0) === 1  &&  ((s as any).week ?? 0) === 6) {
    // TODO-QSP: dynamic text: There is a <a href="exec:minut += 60 & gt 'Military', 'start'">military bus</a> ...
    scene.text('There is a <a href="exec:minut += 60 & gt \'Military\', \'start\'">military bus</a> waiting on the other side of the street.');
  } else {
    if (((s as any).military ?? 0) === 1) {
      // TODO-QSP: dynamic text: The military bus will wait between '+func('time', 'get_time_string', 6, 0)+' and...
      scene.text('The military bus will wait between \'+func(\'time\', \'get_time_string\', 6, 0)+\' and \'+func(\'time\', \'get_time_string\', 9, 0)+\' on Saturdays.');
    }
  }
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 14  &&  ((s as any).week ?? 0) !== 1) {
    // TODO-QSP: dynamic text: You could go shopping at the local <a href="exec: minut += 10 & gt 'city_market'...
    scene.text('You could go shopping at the local <a href="exec: minut += 10 & gt \'city_market\', \'start\'">marketplace</a>.');
  } else {
    // TODO-QSP: 'You could go shopping at the local marketplace, but it''s '+iif(week = 1, 'closed on Mondays.', 'on...
  }
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 15  &&  ((s as any).week ?? 0) < 6) {
    // TODO-QSP: dynamic text: Near the market is a <a href="exec: minut += 10 & gt 'city_market', 'tailor'">ta...
    scene.text('Near the market is a <a href="exec: minut += 10 & gt \'city_market\', \'tailor\'">tailor shop</a> where you can get your clothes resized if needed.');
  } else {
    // TODO-QSP: 'Near the market is a tailor shop where you can get your clothes resized if needed. '+iif(week < 6, ...
  }
  if (((s as any).job_status ?? 0)?.['city_cafe_waitress'] === 'employed'  &&  qspFunc(s, 'jobs', 'is_arrival_time', 'city_cafe_waitress') === 1) {
    // TODO-QSP: dynamic text: The side door of <a href="exec: minut += 1 & gt 'city_kafe', 'work'">the Roadhou...
    scene.text('The side door of <a href="exec: minut += 1 & gt \'city_kafe\', \'work\'">the Roadhouse</a> diner is open, allowing you to enter and start your shift.');
  } else {
    if (((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) <= 20  &&  ((s as any).week ?? 0) !== 1) {
      // TODO-QSP: dynamic text: You can hear some <a href="exec: minut += 1 & gt 'gopnew', 'start'">gopniks</a> ...
      scene.text('You can hear some <a href="exec: minut += 1 & gt \'gopnew\', \'start\'">gopniks</a> laughing and swearing in a side alley next to <a href="exec: minut += 1 & gt \'city_kafe\', \'start\'">the Roadhouse</a> diner.');
    } else {
      if (((s as any).hour ?? 0) >= 21  ||  ((s as any).hour ?? 0) < 4) {
        scene.text('You can hear some <a href="exec:gt \'gopnew\', \'start\'">gopniks</a> laughing and swearing in the parking lot of the Roadhouse diner. The diner itself is currently closed.');
      } else {
        // TODO-QSP: dynamic text: The Roadhouse diner is currently closed. It's open between '+func('time', 'get_t...
        scene.text('The Roadhouse diner is currently closed. It\'s open between \'+func(\'time\', \'get_time_string\', 12, 0)+\' and \'+func(\'time\', \'get_time_string\', 20, 0)+\' every day except Monday.');
      }
    }
  }
  if ((((s as any).job_hiring_step ?? 0)?.['city_office_cleaner'] >= 1  ||  ((s as any).job_status ?? 0)?.['city_office_cleaner'] === 'employed')  &&  qspFunc(s, 'jobs', 'is_arrival_time', 'city_office_cleaner')) {
    // TODO-QSP: dynamic text: There's a small office building where a <a href="exec: minut += 1 & gt 'city_sma...
    scene.text('There\'s a small office building where a <a href="exec: minut += 1 & gt \'city_smalloffice\', \'start\'">cleaning lady</a> is needed.');
  }
  // TODO-QSP: dynamic text: The city's large <a href="exec:minut += 20 & gt 'city_park', 'start'">central pa...
  scene.text('The city\'s large <a href="exec:minut += 20 & gt \'city_park\', \'start\'">central park</a> is a 20 minute walk away.');
  // TODO-QSP: dynamic text: The city's only <a href="exec:minut += 40 & gt 'city_lake', 'start'">lake</a> is...
  scene.text('The city\'s only <a href="exec:minut += 40 & gt \'city_lake\', \'start\'">lake</a> is a 40 minute walk away.');
  scene.text('A 24 hour <a href="exec:$loc = \'city_residential\' & gt \'city_pharmacy\', \'start\'">pharmacy</a> is located nearby.');
  if (((s as any).cfg_vars ?? 0)?.['tablemap'] === 0) {
    if (((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) < 22  &&  ((s as any).lesbiQW ?? 0) === 1) {
      scene.text('<a href="exec:gt \'lesbidomhouse\', \'start\'">Natalya Petrovna\'s</a> apartment.');
    } else {
      if (((s as any).lesbiday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).subdom ?? 0) === 2) {
        scene.text('<a href="exec:gt \'lesbisubhouse\', \'start\'">Your slave\'s</a> apartment.');
      } else {
        if (((s as any).lesbiday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 22  &&  ((s as any).lesbiQW ?? 0) >= 2  &&  ((s as any).lesbiQW ?? 0) < 13) {
          scene.text('<a href="exec:gt \'lesbidomhouse\', \'start\'">Mistress\'s</a> apartment.');
        } else {
          if (((s as any).lesbiday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 22  &&  ((s as any).lesbiQW ?? 0) >= 13) {
            scene.text('<a href="exec:gt \'lesbimistress\', \'start\'">Mistress\'s</a> apartment.');
          }
        }
      }
    }
  }
  if (qspFunc(s, 'homes_properties', 'has_access', 'city_apartment') === 0) {
    // TODO-QSP: dynamic text: You see several <a href="exec: minut += 1 & gt 'city_trashplace'">trash bins</a>...
    scene.text('You see several <a href="exec: minut += 1 & gt \'city_trashplace\'">trash bins</a> in the courtyard of one of the apartment buildings.');
  } else {
    // TODO-QSP: dynamic text: You see several <a href="exec: minut += 1 & gt 'city_trashplace'">trash bins</a>...
    scene.text('You see several <a href="exec: minut += 1 & gt \'city_trashplace\'">trash bins</a> in the courtyard of your <a href="exec: gt \'city_apt_building\',\'floor_1\'">apartment building</a>.');
  }
  if (((s as any).drugVars ?? 0)?.['city_drugden'] > 0) {
    // TODO-QSP: dynamic text: The <a href="exec:minut += 1 & gt 'city_drugden'">drug house</a> is clearly reco...
    scene.text('The <a href="exec:minut += 1 & gt \'city_drugden\'">drug house</a> is clearly recognizable by the syringes and trash that lies in front of it.');
  }
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 23  ||  ((s as any).saunaWorkWhore ?? 0) > 0  ||  ((s as any).workDisk ?? 0) === 2) {
    // TODO-QSP: dynamic text: <a href="exec:minut += 10 & gt 'city_sauna'">The sauna</a> is a 10 minute walk a...
    scene.text('<a href="exec:minut += 10 & gt \'city_sauna\'">The sauna</a> is a 10 minute walk away. Rumors say that it\'s just a front for a brothel.');
  }
  if (((s as any).hour ?? 0) >= 20  ||  ((s as any).hour ?? 0) <= 4) {
    scene.text('There are prostitutes working near here.');
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
  qspCall(s, 'lover', 'lover_events');
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk to the Metro (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['metro', 'residential'] },
    { label: 'Walk to the central park (0:20)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
  }, goto: ['city_park', 'start'] },
    { label: 'Walk to the lake (0:40)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 40;
  }, goto: ['city_lake', 'start'] },
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

export const city_residential: LocationDef = {
  name: 'city_residential',
  title: '<center><h2>St. Petersburg</h2></center>',
  region: 'city',
  locationType: 'public_outdoors',
  enter: enter,
};
