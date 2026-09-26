import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

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
  scene.build();
}

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).music_loop = 0;
  (s as any).phone_off = 0;
  qspCall(s, 'core_library', 'setloc', 'city_residential', '');
  (s as any).location_type = 'public_outdoors';
  (s as any).region = 'city';
  (s as any).locclass = undefined;
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
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterImage(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).opusk ?? 0) > 0  ||  ((s as any).gnewQW ?? 0) === 5) {
    if ((!(Math.floor(Math.random() * 10) + 0))) {
      qspGoto(s, 'gopnew', 'start5');
    }
    if (qspFunc(s, 'homes_properties', 'has_access', 'city_apartment')) {
      scene.text(`Something is written on the wall near the entrance to your building. It reads:<b>"${((s as any).pcs_firstname ?? '')} ${((s as any).pcs_lastname ?? '')} from apartment 42 is a cheap slut!"</b>`);
    }
  }
  qspCall(s, 'stat', '');
  if (((s as any).gopdeath ?? 0) === 1  &&  ((s as any).vsehsdaladay ?? 0) !== ((s as any).daystart ?? 0)) {
    qspGoto(s, 'gameover', 'force', '6');
  }
  if (((s as any).mother ?? 0)?.['kickedout_timer'] !== 0  &&  ((s as any).mother ?? 0)?.['kickedout_timer'] + 3 <= ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) < 16  &&  ((s as any).cumloc ?? 0)[11] === 0) {
    qspCall(s, 'mother_chats', 'reconciliation_talk');
    return;
  }
  if (qspFunc(s, 'car_funcs', 'is_here')) {
    scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027carF/u0027, /u0027start/u0027); return false;">Your ${(((s as any).car ?? 0)?.['name'] ?? '')}</a> is in the parking lot.`);
  } else {
    if (qspFunc(s, 'car_funcs', 'is_here', 'city_house_res_misc', 'fronty')) {
      scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=10; return s; }); window.__gameStore.getState().doGoto(/u0027carF/u0027, /u0027start/u0027); return false;">Your ${(((s as any).car ?? 0)?.['name'] ?? '')}</a> is in your driveway.`);
    }
  }
  if (qspFunc(s, 'homes_properties', 'is_property_of_status', 'owned', 'city_house')) {
    scene.text('Your <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=10; return s; }); window.__gameStore.getState().doGoto(\u0027city_house_res_misc\u0027, \u0027fronty\u0027); return false;">house</a> is within walking distance.');
    scene.actions([
      { label: '<b>Go to your house</b>', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspGoto(st, 'city_house_res_misc', 'fronty');
  } },
    ]);
  }
  if (qspFunc(s, 'homes_properties', 'has_access', 'city_apartment')) {
    scene.actions([
      { label: '<b>Go to your apartment</b>', handler: (st: GameState) => {
    (st as any).gorand = (Math.floor(Math.random() * 101) + 0);
    if ((((st as any).loh ?? 0) > 0  ||  ((st as any).gnewQW ?? 0) === 7)  &&  ((st as any).gopdolg ?? 0) > 0  &&  ((st as any).hour ?? 0) >= 20  &&  ((st as any).gorand ?? 0) >= 80) {
      qspGoto(st, 'gopnew', 'start');
    }
    if ((((st as any).opusk ?? 0) > 0  ||  ((st as any).gnewQW ?? 0) === 5)  &&  ((st as any).hour ?? 0) >= 20  &&  ((st as any).gorand ?? 0) >= 80  &&  ((st as any).gopopusday ?? 0) !== ((st as any).daystart ?? 0)) {
      qspGoto(st, 'gopnew', 'start');
    }
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspGoto(st, 'korr', '');
  } },
    ]);
  }
  qspCall(s, 'jobs_gigs', 'disp_evt', 3);
  qspCall(s, 'taxi', '');
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 23) {
    scene.text('You can see the <a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: $loc = \u0027city_residential\u0027 */ s.minut +=1; return s; }); window.__gameStore.getState().doGoto(\u0027kiosk\u0027, \u0027start\u0027); return false;">kiosk</a> selling cigarettes and magazines.');
  }
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 22) {
    scene.text('<br>The local <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=3; return s; }); window.__gameStore.getState().doGoto(\u0027city_laundromat\u0027, \u0027\u0027); return false;">laundromat</a> is open. The advertisement says: "You can wash your clothes here."');
  } else {
    scene.text(`<br>The local laundromat is closed, it'll open again at ${qspFunc(s, 'time', 'get_time_string', 8, 0)}. The advertisement says: "You can wash your clothes here."`);
  }
  if (((s as any).cfg_vars ?? 0)?.['tablemap'] === 0) {
    if (((s as any).katkey ?? 0) === 1) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027katspalnya\u0027, \u0027start\u0027); return false;">Kat\'s</a> apartment');
    }
    if (((s as any).IrinaQW ?? 0) >= 1) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027city_irinaroom\u0027, \u0027start\u0027); return false;">Irene\'s</a> apartment is not far from yours.');
    }
    if (((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) < 22  &&  ((s as any).dimaQW ?? 0) > 0) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027city_dima\u0027, \u0027start\u0027); return false;">Dima\'s</a> apartment');
    }
    if (((s as any).klofQW ?? 0) >= 2) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027city_jorahouse\u0027, \u0027start\u0027); return false;">Jora\'s</a> apartment');
    }
  } else {
    (s as any).st_count = 0;
    (s as any).show_table = '';
    if (((s as any).katkey ?? 0) === 1) {
      qspCall(s, 'show_table', '<a href="exec:gt \'katspalnya\', \'start\'">Kat\'s</a> apartment', '3');
    }
    if (((s as any).IrinaQW ?? 0) >= 1) {
      qspCall(s, 'show_table', '<a href="exec:gt \'city_irinaroom\', \'start\'">Irene\'s</a> apartment is not far from yours.', '3');
    }
    if (((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) < 22  &&  ((s as any).dimaQW ?? 0) > 0) {
      qspCall(s, 'show_table', '<a href="exec:gt \'city_dima\', \'start\'">Dima\'s</a> apartment', '3');
    }
    if (((s as any).klofQW ?? 0) >= 2) {
      qspCall(s, 'show_table', '<a href="exec:gt \'city_jorahouse\', \'start\'">Jora\'s</a> apartment', '3');
    }
    if (((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) < 22  &&  ((s as any).lesbiQW ?? 0) === 1) {
      qspCall(s, 'show_table', '<a href="exec:gt \'lesbidomhouse\', \'start\'">Natalya Petrovna\'s</a> apartment.', '3');
    } else {
      if (((s as any).lesbiday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).subdom ?? 0) === 2) {
        qspCall(s, 'show_table', '<a href="exec:gt \'lesbisubhouse\', \'start\'">Your slave\'s</a> apartment.', '3');
      } else {
        if (((s as any).lesbiday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 22  &&  ((s as any).lesbiQW ?? 0) >= 2  &&  ((s as any).lesbiQW ?? 0) < 13) {
          qspCall(s, 'show_table', '<a href="exec:gt \'lesbidomhouse\', \'start\'">Mistress\'s</a> apartment.', '3');
        } else {
          if (((s as any).lesbiday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 22  &&  ((s as any).lesbiQW ?? 0) >= 13) {
            qspCall(s, 'show_table', '<a href="exec:gt \'lesbimistress\', \'start\'">Mistress\'s</a> apartment.', '3');
          }
        }
      }
    }
    if (((s as any).st_count ?? 0) > 0) {
      scene.text(`<table BORDER=1>${((s as any).show_table ?? '')}</tr></table>`);
    }
  }
  scene.text('The <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=5; return s; }); window.__gameStore.getState().doGoto(\u0027metro\u0027, \u0027residential\u0027); return false;">Metro</a> station is a 5 minute walk away.');
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 20) {
    scene.text('The <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=3; return s; }); window.__gameStore.getState().doGoto(\u0027shop\u0027, \u0027start\u0027); return false;">supermarket</a> is not far from here.');
  }
  if ((((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 20)  ||  ((s as any).preg ?? 0) === 2) {
    scene.text('The <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027city_clinic\u0027, \u0027start\u0027); return false;">clinic</a> is also nearby.');
  } else {
    scene.text('\'The clinic is closed. It will open at 8:00.\'');
  }
  if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 9  &&  ((s as any).military ?? 0) === 1  &&  ((s as any).week ?? 0) === 6) {
    scene.text('There is a <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=60; return s; }); window.__gameStore.getState().doGoto(\u0027Military\u0027, \u0027start\u0027); return false;">military bus</a> waiting on the other side of the street.');
  } else {
    if (((s as any).military ?? 0) === 1) {
      scene.text('\'The military bus will wait between 6:00 and 9:00 on Saturdays.\'');
    }
  }
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 14  &&  ((s as any).week ?? 0) !== 1) {
    scene.text('You could go shopping at the local <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=10; return s; }); window.__gameStore.getState().doGoto(\u0027city_market\u0027, \u0027start\u0027); return false;">marketplace</a>.');
  } else {
    scene.text('You could go shopping at the local marketplace, but it\'s ' + ((((s as any).week ?? 0) === 1) ? ('closed on Mondays.') : ('only open between 8:00 and 15:00.')));
  }
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 15  &&  ((s as any).week ?? 0) < 6) {
    scene.text('Near the market is a <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=10; return s; }); window.__gameStore.getState().doGoto(\u0027city_market\u0027, \u0027tailor\u0027); return false;">tailor shop</a> where you can get your clothes resized if needed.');
  } else {
    scene.text('Near the market is a tailor shop where you can get your clothes resized if needed. ' + ((((s as any).week ?? 0) < 6) ? ('It closes at 16:00.') : ('It\'s closed on weekends.')));
  }
  if (((s as any).job_status ?? 0)?.['city_cafe_waitress'] === 'employed'  &&  qspFunc(s, 'jobs', 'is_arrival_time', 'city_cafe_waitress') === 1) {
    scene.text('The side door of <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=1; return s; }); window.__gameStore.getState().doGoto(\u0027city_kafe\u0027, \u0027work\u0027); return false;">the Roadhouse</a> diner is open, allowing you to enter and start your shift.');
  } else {
    if (((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) <= 20  &&  ((s as any).week ?? 0) !== 1) {
      scene.text('You can hear some <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=1; return s; }); window.__gameStore.getState().doGoto(\u0027gopnew\u0027, \u0027start\u0027); return false;">gopniks</a> laughing and swearing in a side alley next to <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=1; return s; }); window.__gameStore.getState().doGoto(\u0027city_kafe\u0027, \u0027start\u0027); return false;">the Roadhouse</a> diner.');
    } else {
      if (((s as any).hour ?? 0) >= 21  ||  ((s as any).hour ?? 0) < 4) {
        scene.text('You can hear some <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027gopnew\u0027, \u0027start\u0027); return false;">gopniks</a> laughing and swearing in the parking lot of the Roadhouse diner. The diner itself is currently closed.');
      } else {
        scene.text('\'The Roadhouse diner is currently closed. It\'s open between 12:00 and 20:00 every day except Monday.\'');
      }
    }
  }
  if ((((s as any).job_hiring_step ?? 0)?.['city_office_cleaner'] >= 1  ||  ((s as any).job_status ?? 0)?.['city_office_cleaner'] === 'employed')  &&  qspFunc(s, 'jobs', 'is_arrival_time', 'city_office_cleaner')) {
    scene.text('There\'s a small office building where a <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=1; return s; }); window.__gameStore.getState().doGoto(\u0027city_smalloffice\u0027, \u0027start\u0027); return false;">cleaning lady</a> is needed.');
  }
  scene.text('The city\'s large <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=20; return s; }); window.__gameStore.getState().doGoto(\u0027city_park\u0027, \u0027start\u0027); return false;">central park</a> is a 20 minute walk away.');
  scene.text('The city\'s only <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=40; return s; }); window.__gameStore.getState().doGoto(\u0027city_lake\u0027, \u0027start\u0027); return false;">lake</a> is a 40 minute walk away.');
  scene.text('A 24 hour <a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: $loc = \u0027city_residential\u0027 */ return s; }); window.__gameStore.getState().doGoto(\u0027city_pharmacy\u0027, \u0027start\u0027); return false;">pharmacy</a> is located nearby.');
  if (((s as any).cfg_vars ?? 0)?.['tablemap'] === 0) {
    if (((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) < 22  &&  ((s as any).lesbiQW ?? 0) === 1) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027lesbidomhouse\u0027, \u0027start\u0027); return false;">Natalya Petrovna\'s</a> apartment.');
    } else {
      if (((s as any).lesbiday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).subdom ?? 0) === 2) {
        scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027lesbisubhouse\u0027, \u0027start\u0027); return false;">Your slave\'s</a> apartment.');
      } else {
        if (((s as any).lesbiday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 22  &&  ((s as any).lesbiQW ?? 0) >= 2  &&  ((s as any).lesbiQW ?? 0) < 13) {
          scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027lesbidomhouse\u0027, \u0027start\u0027); return false;">Mistress\'s</a> apartment.');
        } else {
          if (((s as any).lesbiday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 22  &&  ((s as any).lesbiQW ?? 0) >= 13) {
            scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027lesbimistress\u0027, \u0027start\u0027); return false;">Mistress\'s</a> apartment.');
          }
        }
      }
    }
  }
  if (qspFunc(s, 'homes_properties', 'has_access', 'city_apartment') === 0) {
    scene.text('You see several <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=1; return s; }); window.__gameStore.getState().doGoto(\u0027city_trashplace\u0027, \u0027\u0027); return false;">trash bins</a> in the courtyard of one of the apartment buildings.');
  } else {
    scene.text('You see several <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=1; return s; }); window.__gameStore.getState().doGoto(\u0027city_trashplace\u0027, \u0027\u0027); return false;">trash bins</a> in the courtyard of your <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027city_apt_building\u0027, \u0027floor_1\u0027); return false;">apartment building</a>.');
  }
  if (((s as any).drugVars ?? 0)?.['city_drugden'] > 0) {
    scene.text('The <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=1; return s; }); window.__gameStore.getState().doGoto(\u0027city_drugden\u0027, \u0027\u0027); return false;">drug house</a> is clearly recognizable by the syringes and trash that lies in front of it.');
  }
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 23  ||  ((s as any).saunaWorkWhore ?? 0) > 0  ||  ((s as any).workDisk ?? 0) === 2) {
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=10; return s; }); window.__gameStore.getState().doGoto(\u0027city_sauna\u0027, \u0027\u0027); return false;">The sauna</a> is a 10 minute walk away. Rumors say that it\'s just a front for a brothel.');
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

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).music_loop = 0;
  (s as any).phone_off = 0;
  qspCall(s, 'core_library', 'setloc', 'city_residential', '');
  (s as any).location_type = 'public_outdoors';
  (s as any).region = 'city';
  (s as any).locclass = undefined;
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
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterImage(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).opusk ?? 0) > 0  ||  ((s as any).gnewQW ?? 0) === 5) {
    if ((!(Math.floor(Math.random() * 10) + 0))) {
      qspGoto(s, 'gopnew', 'start5');
    }
    if (qspFunc(s, 'homes_properties', 'has_access', 'city_apartment')) {
      scene.text(`Something is written on the wall near the entrance to your building. It reads:<b>"${((s as any).pcs_firstname ?? '')} ${((s as any).pcs_lastname ?? '')} from apartment 42 is a cheap slut!"</b>`);
    }
  }
  qspCall(s, 'stat', '');
  if (((s as any).gopdeath ?? 0) === 1  &&  ((s as any).vsehsdaladay ?? 0) !== ((s as any).daystart ?? 0)) {
    qspGoto(s, 'gameover', 'force', '6');
  }
  if (((s as any).mother ?? 0)?.['kickedout_timer'] !== 0  &&  ((s as any).mother ?? 0)?.['kickedout_timer'] + 3 <= ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) < 16  &&  ((s as any).cumloc ?? 0)[11] === 0) {
    qspCall(s, 'mother_chats', 'reconciliation_talk');
    return;
  }
  if (qspFunc(s, 'car_funcs', 'is_here')) {
    scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027carF/u0027, /u0027start/u0027); return false;">Your ${(((s as any).car ?? 0)?.['name'] ?? '')}</a> is in the parking lot.`);
  } else {
    if (qspFunc(s, 'car_funcs', 'is_here', 'city_house_res_misc', 'fronty')) {
      scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=10; return s; }); window.__gameStore.getState().doGoto(/u0027carF/u0027, /u0027start/u0027); return false;">Your ${(((s as any).car ?? 0)?.['name'] ?? '')}</a> is in your driveway.`);
    }
  }
  if (qspFunc(s, 'homes_properties', 'is_property_of_status', 'owned', 'city_house')) {
    scene.text('Your <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=10; return s; }); window.__gameStore.getState().doGoto(\u0027city_house_res_misc\u0027, \u0027fronty\u0027); return false;">house</a> is within walking distance.');
    scene.actions([
      { label: '<b>Go to your house</b>', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspGoto(st, 'city_house_res_misc', 'fronty');
  } },
    ]);
  }
  if (qspFunc(s, 'homes_properties', 'has_access', 'city_apartment')) {
    scene.actions([
      { label: '<b>Go to your apartment</b>', handler: (st: GameState) => {
    (st as any).gorand = (Math.floor(Math.random() * 101) + 0);
    if ((((st as any).loh ?? 0) > 0  ||  ((st as any).gnewQW ?? 0) === 7)  &&  ((st as any).gopdolg ?? 0) > 0  &&  ((st as any).hour ?? 0) >= 20  &&  ((st as any).gorand ?? 0) >= 80) {
      qspGoto(st, 'gopnew', 'start');
    }
    if ((((st as any).opusk ?? 0) > 0  ||  ((st as any).gnewQW ?? 0) === 5)  &&  ((st as any).hour ?? 0) >= 20  &&  ((st as any).gorand ?? 0) >= 80  &&  ((st as any).gopopusday ?? 0) !== ((st as any).daystart ?? 0)) {
      qspGoto(st, 'gopnew', 'start');
    }
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspGoto(st, 'korr', '');
  } },
    ]);
  }
  qspCall(s, 'jobs_gigs', 'disp_evt', 3);
  qspCall(s, 'taxi', '');
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 23) {
    scene.text('You can see the <a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: $loc = \u0027city_residential\u0027 */ s.minut +=1; return s; }); window.__gameStore.getState().doGoto(\u0027kiosk\u0027, \u0027start\u0027); return false;">kiosk</a> selling cigarettes and magazines.');
  }
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 22) {
    scene.text('<br>The local <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=3; return s; }); window.__gameStore.getState().doGoto(\u0027city_laundromat\u0027, \u0027\u0027); return false;">laundromat</a> is open. The advertisement says: "You can wash your clothes here."');
  } else {
    scene.text(`<br>The local laundromat is closed, it'll open again at ${qspFunc(s, 'time', 'get_time_string', 8, 0)}. The advertisement says: "You can wash your clothes here."`);
  }
  if (((s as any).cfg_vars ?? 0)?.['tablemap'] === 0) {
    if (((s as any).katkey ?? 0) === 1) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027katspalnya\u0027, \u0027start\u0027); return false;">Kat\'s</a> apartment');
    }
    if (((s as any).IrinaQW ?? 0) >= 1) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027city_irinaroom\u0027, \u0027start\u0027); return false;">Irene\'s</a> apartment is not far from yours.');
    }
    if (((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) < 22  &&  ((s as any).dimaQW ?? 0) > 0) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027city_dima\u0027, \u0027start\u0027); return false;">Dima\'s</a> apartment');
    }
    if (((s as any).klofQW ?? 0) >= 2) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027city_jorahouse\u0027, \u0027start\u0027); return false;">Jora\'s</a> apartment');
    }
  } else {
    (s as any).st_count = 0;
    (s as any).show_table = '';
    if (((s as any).katkey ?? 0) === 1) {
      qspCall(s, 'show_table', '<a href="exec:gt \'katspalnya\', \'start\'">Kat\'s</a> apartment', '3');
    }
    if (((s as any).IrinaQW ?? 0) >= 1) {
      qspCall(s, 'show_table', '<a href="exec:gt \'city_irinaroom\', \'start\'">Irene\'s</a> apartment is not far from yours.', '3');
    }
    if (((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) < 22  &&  ((s as any).dimaQW ?? 0) > 0) {
      qspCall(s, 'show_table', '<a href="exec:gt \'city_dima\', \'start\'">Dima\'s</a> apartment', '3');
    }
    if (((s as any).klofQW ?? 0) >= 2) {
      qspCall(s, 'show_table', '<a href="exec:gt \'city_jorahouse\', \'start\'">Jora\'s</a> apartment', '3');
    }
    if (((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) < 22  &&  ((s as any).lesbiQW ?? 0) === 1) {
      qspCall(s, 'show_table', '<a href="exec:gt \'lesbidomhouse\', \'start\'">Natalya Petrovna\'s</a> apartment.', '3');
    } else {
      if (((s as any).lesbiday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).subdom ?? 0) === 2) {
        qspCall(s, 'show_table', '<a href="exec:gt \'lesbisubhouse\', \'start\'">Your slave\'s</a> apartment.', '3');
      } else {
        if (((s as any).lesbiday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 22  &&  ((s as any).lesbiQW ?? 0) >= 2  &&  ((s as any).lesbiQW ?? 0) < 13) {
          qspCall(s, 'show_table', '<a href="exec:gt \'lesbidomhouse\', \'start\'">Mistress\'s</a> apartment.', '3');
        } else {
          if (((s as any).lesbiday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 22  &&  ((s as any).lesbiQW ?? 0) >= 13) {
            qspCall(s, 'show_table', '<a href="exec:gt \'lesbimistress\', \'start\'">Mistress\'s</a> apartment.', '3');
          }
        }
      }
    }
    if (((s as any).st_count ?? 0) > 0) {
      scene.text(`<table BORDER=1>${((s as any).show_table ?? '')}</tr></table>`);
    }
  }
  scene.text('The <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=5; return s; }); window.__gameStore.getState().doGoto(\u0027metro\u0027, \u0027residential\u0027); return false;">Metro</a> station is a 5 minute walk away.');
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 20) {
    scene.text('The <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=3; return s; }); window.__gameStore.getState().doGoto(\u0027shop\u0027, \u0027start\u0027); return false;">supermarket</a> is not far from here.');
  }
  if ((((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 20)  ||  ((s as any).preg ?? 0) === 2) {
    scene.text('The <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027city_clinic\u0027, \u0027start\u0027); return false;">clinic</a> is also nearby.');
  } else {
    scene.text('\'The clinic is closed. It will open at 8:00.\'');
  }
  if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 9  &&  ((s as any).military ?? 0) === 1  &&  ((s as any).week ?? 0) === 6) {
    scene.text('There is a <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=60; return s; }); window.__gameStore.getState().doGoto(\u0027Military\u0027, \u0027start\u0027); return false;">military bus</a> waiting on the other side of the street.');
  } else {
    if (((s as any).military ?? 0) === 1) {
      scene.text('\'The military bus will wait between 6:00 and 9:00 on Saturdays.\'');
    }
  }
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 14  &&  ((s as any).week ?? 0) !== 1) {
    scene.text('You could go shopping at the local <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=10; return s; }); window.__gameStore.getState().doGoto(\u0027city_market\u0027, \u0027start\u0027); return false;">marketplace</a>.');
  } else {
    scene.text('You could go shopping at the local marketplace, but it\'s ' + ((((s as any).week ?? 0) === 1) ? ('closed on Mondays.') : ('only open between 8:00 and 15:00.')));
  }
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 15  &&  ((s as any).week ?? 0) < 6) {
    scene.text('Near the market is a <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=10; return s; }); window.__gameStore.getState().doGoto(\u0027city_market\u0027, \u0027tailor\u0027); return false;">tailor shop</a> where you can get your clothes resized if needed.');
  } else {
    scene.text('Near the market is a tailor shop where you can get your clothes resized if needed. ' + ((((s as any).week ?? 0) < 6) ? ('It closes at 16:00.') : ('It\'s closed on weekends.')));
  }
  if (((s as any).job_status ?? 0)?.['city_cafe_waitress'] === 'employed'  &&  qspFunc(s, 'jobs', 'is_arrival_time', 'city_cafe_waitress') === 1) {
    scene.text('The side door of <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=1; return s; }); window.__gameStore.getState().doGoto(\u0027city_kafe\u0027, \u0027work\u0027); return false;">the Roadhouse</a> diner is open, allowing you to enter and start your shift.');
  } else {
    if (((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) <= 20  &&  ((s as any).week ?? 0) !== 1) {
      scene.text('You can hear some <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=1; return s; }); window.__gameStore.getState().doGoto(\u0027gopnew\u0027, \u0027start\u0027); return false;">gopniks</a> laughing and swearing in a side alley next to <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=1; return s; }); window.__gameStore.getState().doGoto(\u0027city_kafe\u0027, \u0027start\u0027); return false;">the Roadhouse</a> diner.');
    } else {
      if (((s as any).hour ?? 0) >= 21  ||  ((s as any).hour ?? 0) < 4) {
        scene.text('You can hear some <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027gopnew\u0027, \u0027start\u0027); return false;">gopniks</a> laughing and swearing in the parking lot of the Roadhouse diner. The diner itself is currently closed.');
      } else {
        scene.text('\'The Roadhouse diner is currently closed. It\'s open between 12:00 and 20:00 every day except Monday.\'');
      }
    }
  }
  if ((((s as any).job_hiring_step ?? 0)?.['city_office_cleaner'] >= 1  ||  ((s as any).job_status ?? 0)?.['city_office_cleaner'] === 'employed')  &&  qspFunc(s, 'jobs', 'is_arrival_time', 'city_office_cleaner')) {
    scene.text('There\'s a small office building where a <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=1; return s; }); window.__gameStore.getState().doGoto(\u0027city_smalloffice\u0027, \u0027start\u0027); return false;">cleaning lady</a> is needed.');
  }
  scene.text('The city\'s large <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=20; return s; }); window.__gameStore.getState().doGoto(\u0027city_park\u0027, \u0027start\u0027); return false;">central park</a> is a 20 minute walk away.');
  scene.text('The city\'s only <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=40; return s; }); window.__gameStore.getState().doGoto(\u0027city_lake\u0027, \u0027start\u0027); return false;">lake</a> is a 40 minute walk away.');
  scene.text('A 24 hour <a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: $loc = \u0027city_residential\u0027 */ return s; }); window.__gameStore.getState().doGoto(\u0027city_pharmacy\u0027, \u0027start\u0027); return false;">pharmacy</a> is located nearby.');
  if (((s as any).cfg_vars ?? 0)?.['tablemap'] === 0) {
    if (((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) < 22  &&  ((s as any).lesbiQW ?? 0) === 1) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027lesbidomhouse\u0027, \u0027start\u0027); return false;">Natalya Petrovna\'s</a> apartment.');
    } else {
      if (((s as any).lesbiday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).subdom ?? 0) === 2) {
        scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027lesbisubhouse\u0027, \u0027start\u0027); return false;">Your slave\'s</a> apartment.');
      } else {
        if (((s as any).lesbiday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 22  &&  ((s as any).lesbiQW ?? 0) >= 2  &&  ((s as any).lesbiQW ?? 0) < 13) {
          scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027lesbidomhouse\u0027, \u0027start\u0027); return false;">Mistress\'s</a> apartment.');
        } else {
          if (((s as any).lesbiday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 22  &&  ((s as any).lesbiQW ?? 0) >= 13) {
            scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027lesbimistress\u0027, \u0027start\u0027); return false;">Mistress\'s</a> apartment.');
          }
        }
      }
    }
  }
  if (qspFunc(s, 'homes_properties', 'has_access', 'city_apartment') === 0) {
    scene.text('You see several <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=1; return s; }); window.__gameStore.getState().doGoto(\u0027city_trashplace\u0027, \u0027\u0027); return false;">trash bins</a> in the courtyard of one of the apartment buildings.');
  } else {
    scene.text('You see several <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=1; return s; }); window.__gameStore.getState().doGoto(\u0027city_trashplace\u0027, \u0027\u0027); return false;">trash bins</a> in the courtyard of your <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027city_apt_building\u0027, \u0027floor_1\u0027); return false;">apartment building</a>.');
  }
  if (((s as any).drugVars ?? 0)?.['city_drugden'] > 0) {
    scene.text('The <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=1; return s; }); window.__gameStore.getState().doGoto(\u0027city_drugden\u0027, \u0027\u0027); return false;">drug house</a> is clearly recognizable by the syringes and trash that lies in front of it.');
  }
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 23  ||  ((s as any).saunaWorkWhore ?? 0) > 0  ||  ((s as any).workDisk ?? 0) === 2) {
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=10; return s; }); window.__gameStore.getState().doGoto(\u0027city_sauna\u0027, \u0027\u0027); return false;">The sauna</a> is a 10 minute walk away. Rumors say that it\'s just a front for a brothel.');
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
    case 'start':
      enterStart(s, scene);
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
