import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterInit(s: GameState, scene: SceneBuilder): void {
  (s as any).region = 'city';
  ((s as any).setloc = (s as any).setloc ?? {})['imagepath'] = 'images/' + 'locations/city/industrial';
  // TODO-QSP: end
  scene.build();
}

function enterSetup(s: GameState, scene: SceneBuilder): void {
  if (((s as any).loc ?? 0) !== 'city_industrial'  ||  ((s as any).menu_loc ?? 0) !== 'city_industrial') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  qspCall(s, 'core_library', 'setloc', 'city_industrial', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'stat', '');
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) < 4) {
      if (((s as any).hour ?? 0) >= 8) {
      }
    } else {
      if (((s as any).hour ?? 0) >= 8) {
      }
    }
  }
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) < 4) {
    if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
      scene.img(((s as any).setloc ?? 0)?.['imagepath'] + '/industw.jpg');
    } else {
      scene.img(((s as any).setloc ?? 0)?.['imagepath'] + '/industwn.jpg');
    }
  } else {
    if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
      scene.img(((s as any).setloc ?? 0)?.['imagepath'] + '/nord.jpg');
    } else {
      scene.img(((s as any).setloc ?? 0)?.['imagepath'] + '/nord2.jpg');
    }
  }
  qspCall(s, 'core_library', 'stage_title');
  // TODO-QSP: end
  scene.build();
}

function enterExit(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === 'pavlovsk') {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspGoto(s, 'road', '0');
  } else {
    if (Number((s as any).locArgs?.[1] ?? 0) === 'redlight') {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspGoto(s, 'city_redlight', 'start');
    } else {
      if (Number((s as any).locArgs?.[1] ?? 0) === 'citypark') {
        (s as any).minut = ((s as any).minut ?? 0) + 60;
        qspGoto(s, 'city_park', 'start');
      } else {
        if (Number((s as any).locArgs?.[1] ?? 0) === 'train') {
          (s as any).minut = ((s as any).minut ?? 0) + 15;
          qspGoto(s, 'city_industrial_train', 'outside');
        } else {
          if (Number((s as any).locArgs?.[1] ?? 0) === 'metro') {
            (s as any).minut = ((s as any).minut ?? 0) + 5;
            qspGoto(s, 'metro', 'industrial');
          } else {
            if (Number((s as any).locArgs?.[1] ?? 0) === 'canals') {
              (s as any).minut = ((s as any).minut ?? 0) + 15;
              qspGoto(s, 'city_canals', 'start');
            } else {
              // TODO-QSP: gt $ARGS[1], $ARGS[2]
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDefault(s: GameState, scene: SceneBuilder): void {
  ((s as any).setloc = (s as any).setloc ?? {})['StageTitle'] = 'St Petersburg - Industrial Region';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', '']; enterSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).location_type = 'public_outdoors';
  qspCall(s, 'random_events', '');
  qspCall(s, 'jobs_gigs', 'disp_evt', 3);
  qspCall(s, 'taxi', '');
  if (qspFunc(s, 'car_funcs', 'is_here', 'fuelstation', 'start')) {
    // TODO-QSP: dynamic text: Your <a href="exec:minut += 5 & gs ''carF'', ''start''"><<$car[''name'']>></a> i...
    scene.text(`Your <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027carF/u0027, /u0027start/u0027); return false;">${((s as any).car ?? 0)?.['name'] ?? ''}</a> is parked near the gas station.`);
  } else {
    if (qspFunc(s, 'car_funcs', 'is_here', 'city_redlight', 'start')) {
      // TODO-QSP: dynamic text: Your <a href="exec:minut += 5 & gs ''carF'', ''start''"><<$car[''name'']>></a> s...
      scene.text(`Your <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027carF/u0027, /u0027start/u0027); return false;">${((s as any).car ?? 0)?.['name'] ?? ''}</a> stands nearby in a parking lot at the redlight district.`);
    } else {
      if (qspFunc(s, 'car_funcs', 'is_here', 'autoservisF', 'start')) {
        if (qspFunc(s, 'autoservisF', 'is_open')) {
          // TODO-QSP: dynamic text: Your <a href="exec:minut += 5 & gs ''carF'', ''start''"><<$car[''name'']>></a> i...
          scene.text(`Your <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027carF/u0027, /u0027start/u0027); return false;">${((s as any).car ?? 0)?.['name'] ?? ''}</a> is parked at the car service center.`);
        } else {
          scene.text('It looks like the repair shop moved your car outside before they closed.');
          ((s as any).car = (s as any).car ?? {})['loc'] = 'city_industrial';
          ((s as any).car = (s as any).car ?? {})['loc_arg'] = '';
        }
      } else {
        if (qspFunc(s, 'car_funcs', 'is_here', 'autotraidF', 'start')) {
          if (qspFunc(s, 'autotraidF', 'is_open')) {
            // TODO-QSP: dynamic text: Your <a href="exec:minut += 5 & gs ''carF'', ''start''"><<$car[''name'']>></a> i...
            scene.text(`Your <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027carF/u0027, /u0027start/u0027); return false;">${((s as any).car ?? 0)?.['name'] ?? ''}</a> is parked at the car dealership.`);
          } else {
            scene.text('It looks like the car dealership moved your car outside before they closed.');
            ((s as any).car = (s as any).car ?? {})['loc'] = 'city_industrial';
            ((s as any).car = (s as any).car ?? {})['loc_arg'] = '';
          }
        }
      }
    }
  }
  if (qspFunc(s, 'car_funcs', 'is_here', 'city_industrial', '')) {
    // TODO-QSP: dynamic text: Your <a href="exec:gs ''carF'', ''start''"><<$car[''name'']>></a> stands in the ...
    scene.text(`Your <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027carF/u0027, /u0027start/u0027); return false;">${((s as any).car ?? 0)?.['name'] ?? ''}</a> stands in the parking lot.`);
  }
  scene.text('The town\'s <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027city_industrial/u0027, /u0027exit/u0027, /u0027citypark/u0027); return false;">central park</a> is a one hour walk from here.');
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 23) {
    // TODO-QSP: dynamic text: You can see the <a href="exec: minut += 1 & gt ''kiosk'', ''start''">kiosk</a> s...
    scene.text('You can see the <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027kiosk/u0027, /u0027start/u0027); return false;">kiosk</a> selling cigarettes and magazines.');
  } else {
    // TODO-QSP: dynamic text: The kiosk is closed between '+func('time', 'get_time_string', 23, 0)+' and '+fun...
    scene.text('The kiosk is closed between 23:00 and 7:00.');
  }
  scene.text('At the center of the industrial region is a <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027city_industrial/u0027, /u0027exit/u0027, /u0027train/u0027); return false;">train station</a>.');
  if (((s as any).week ?? 0) === 3  ||  ((s as any).hour ?? 0) < 16) {
    // TODO-QSP: dynamic text: The "Rabotnik" bar is here, but it''s currently closed. A sign by the door tells...
    scene.text('The "Rabotnik" bar is here, but it\'s currently closed. A sign by the door tells you that it\'s open every day except Wednesday between 16:00 and midnight.');
  } else {
    // TODO-QSP: dynamic text: The <a href="exec: minut += 5 & gt ''qwBarPolet''">Bar "Rabotnik"</a> seems to b...
    scene.text('The <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027qwBarPolet/u0027, /u0027/u0027); return false;">Bar "Rabotnik"</a> seems to be open.');
  }
  // TODO-QSP: dynamic text: There is a <a href="exec: minut += 5 & gt ''fuelstation'', ''start''">gas statio...
  scene.text('There is a <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027fuelstation/u0027, /u0027start/u0027); return false;">gas station</a> near the street.');
  scene.text('The <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027city_industrial/u0027, /u0027exit/u0027, /u0027metro/u0027); return false;">metro station</a> is within a 5 minute walk from here.');
  if (qspFunc(s, 'autotraidF', 'is_open')) {
    // TODO-QSP: dynamic text: A <a href="exec: minut += 5 & gt ''autotraidF'', ''start''">car dealership</a> i...
    scene.text('A <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027autotraidF/u0027, /u0027start/u0027); return false;">car dealership</a> is nearby.');
  } else {
    // TODO-QSP: 'A car dealership is nearby' + iif(week = 1, ', but it''s closed on Mondays.', '. It is open between...
  }
  if (qspFunc(s, 'autoservisF', 'is_open')) {
    // TODO-QSP: dynamic text: Next to the car dealership is a <a href="exec: minut += 5 & gt ''autoservisF'', ...
    scene.text('Next to the car dealership is a <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027autoservisF/u0027, /u0027start/u0027); return false;">repair shop</a>.');
  } else {
    // TODO-QSP: 'Next to the car dealership is a repair shop.' + iif(week = 7, 'It''s closed on Sundays.', 'It is op...
  }
  if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 17  &&  ((s as any).week ?? 0) < 6) {
    // TODO-QSP: dynamic text: The <a href="exec: minut += 5 & gt ''city_commcenter'', ''start''">community cen...
    scene.text('The <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027city_commcenter/u0027, /u0027start/u0027); return false;">community center</a> is currently open.');
  } else {
    // TODO-QSP: dynamic text: The community center is currently closed. It''s only open during the week betwee...
    scene.text('The community center is currently closed. It\'s only open during the week between 9:00 and 17:00.');
  }
  if (((s as any).start_type ?? 0)?.['loc'] !== 'sg'  ||  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  ||  ((s as any).bumtolik ?? 0) > 3) {
    if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 18) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027buklinik/u0027, /u0027start/u0027); return false;">Mercy clinic</a> is open.');
    } else {
      scene.text('Mercy clinic is closed.');
    }
  }
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 21) {
    // TODO-QSP: dynamic text: The parking lot, which is engulfed in bright lights, belongs to a <a href="exec:...
    scene.text('The parking lot, which is engulfed in bright lights, belongs to a <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.2; return s; }); window.__gameStore.getState().doGoto(/u0027shop/u0027, /u0027start/u0027); return false;">supermarket</a>.');
  } else {
    // TODO-QSP: dynamic text: The empty parking lot, which is engulfed in bright lights, belongs to a supermar...
    scene.text('The empty parking lot, which is engulfed in bright lights, belongs to a supermarket that is open between 8:00 and 20:00.');
  }
  if (((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) < 18  &&  ((s as any).fightClubQW ?? 0)?.['story'] === 3) {
    scene.text('You look around and find the office of <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027fightClub_intro/u0027, /u0027office1/u0027); return false;">Sultan</a> open, the same address from his business card.');
  }
  if (((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) < 20) {
    // TODO-QSP: dynamic text: Above the door to a basement room is a bright neon sign for the <a href="exec: m...
    scene.text('Above the door to a basement room is a bright neon sign for the <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027pirsingsalon/u0027, /u0027start/u0027); return false;">Black Dragon Tattoo & Piercing Parlor</a>.');
  } else {
    // TODO-QSP: dynamic text: Above the door to a basement room is a bright neon sign for the Black Dragon Tat...
    scene.text('Above the door to a basement room is a bright neon sign for the Black Dragon Tattoo & Piercing Parlor. The opening hours are 12:00 to 20:00.');
  }
  if (((s as any).tobiQW ?? 0) >= 1) {
    scene.text('The old mansion, home to <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027kakuzu/u0027, /u0027start/u0027); return false;">Kakuzu</a>');
  }
  if (((s as any).age ?? 0) >= 18) {
    // TODO-QSP: dynamic text: A huge building covered in bright lights houses a <a href="exec: minut += 10 & g...
    scene.text('A huge building covered in bright lights houses a <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.10; return s; }); window.__gameStore.getState().doGoto(/u0027casino/u0027, /u0027outside/u0027); return false;">casino</a>.');
  } else {
    scene.text('A huge building covered in bright lights houses a casino. You need state ID, so cannot enter until you are 18.');
  }
  if (((s as any).hour ?? 0) >= 14  ||  ((s as any).hour ?? 0) < 4) {
    // TODO-QSP: dynamic text: Located far away from the buildings is a <a href="exec: minut += 2 & gt ''lakeca...
    scene.text('Located far away from the buildings is a <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.2; return s; }); window.__gameStore.getState().doGoto(/u0027lakecafe/u0027, /u0027main/u0027); return false;">barbecue</a>.');
  } else {
    // TODO-QSP: dynamic text: Located far away from the buildings is a barbecue. It is open between '+func('ti...
    scene.text('Located far away from the buildings is a barbecue. It is open between 14:00 and 4:00.');
  }
  if (((s as any).jouryResult ?? 0) === 10) {
    scene.text('You can go to one of the apartment blocks and visit <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027youry/u0027, /u0027start/u0027); return false;">Yuri</a>.');
  }
  if (((s as any).BurgerQW ?? 0)?.['IlyQWTatianaHelp'] > 0  &&  ((s as any).BurgerQW ?? 0)?.['IlyQWEvidence'] === 0  &&  (((s as any).softKAR ?? 0) === 1  ||  (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  (((s as any).poverKAR ?? 0) === 1  ||  ((s as any).softKAR ?? 0) === 1)))) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027ilyroom/u0027, /u0027/u0027); return false;">Ilyushkin\'s</a> apartment is in one of these buildings.');
  }
  scene.text('A long and high fence is built around the <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027Terminal/u0027, /u0027/u0027); return false;">storage terminal</a>.');
  qspCall(s, 'lover', 'lover_events');
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk to the main road to Pavlovsk (0:15)', goto: ['city_industrial', 'exit', 'pavlovsk'] },
    { label: 'Walk to the Red Light District (0:05)', goto: ['city_industrial', 'exit', 'redlight'] },
    { label: 'Walk to the central park (1:00)', goto: ['city_industrial', 'exit', 'citypark'] },
    { label: 'Walk to the industrial train station (0:15)', goto: ['city_industrial', 'exit', 'train'] },
    { label: 'Walk to the Metro (0:05)', goto: ['city_industrial', 'exit', 'metro'] },
    { label: 'Walk to the canals (0:15)', goto: ['city_industrial', 'exit', 'canals'] },
  ]);
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  ((s as any).setloc = (s as any).setloc ?? {})['StageTitle'] = 'St Petersburg - Industrial Region';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', '']; enterSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).location_type = 'public_outdoors';
  qspCall(s, 'random_events', '');
  qspCall(s, 'jobs_gigs', 'disp_evt', 3);
  qspCall(s, 'taxi', '');
  if (qspFunc(s, 'car_funcs', 'is_here', 'fuelstation', 'start')) {
    // TODO-QSP: dynamic text: Your <a href="exec:minut += 5 & gs ''carF'', ''start''"><<$car[''name'']>></a> i...
    scene.text(`Your <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027carF/u0027, /u0027start/u0027); return false;">${((s as any).car ?? 0)?.['name'] ?? ''}</a> is parked near the gas station.`);
  } else {
    if (qspFunc(s, 'car_funcs', 'is_here', 'city_redlight', 'start')) {
      // TODO-QSP: dynamic text: Your <a href="exec:minut += 5 & gs ''carF'', ''start''"><<$car[''name'']>></a> s...
      scene.text(`Your <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027carF/u0027, /u0027start/u0027); return false;">${((s as any).car ?? 0)?.['name'] ?? ''}</a> stands nearby in a parking lot at the redlight district.`);
    } else {
      if (qspFunc(s, 'car_funcs', 'is_here', 'autoservisF', 'start')) {
        if (qspFunc(s, 'autoservisF', 'is_open')) {
          // TODO-QSP: dynamic text: Your <a href="exec:minut += 5 & gs ''carF'', ''start''"><<$car[''name'']>></a> i...
          scene.text(`Your <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027carF/u0027, /u0027start/u0027); return false;">${((s as any).car ?? 0)?.['name'] ?? ''}</a> is parked at the car service center.`);
        } else {
          scene.text('It looks like the repair shop moved your car outside before they closed.');
          ((s as any).car = (s as any).car ?? {})['loc'] = 'city_industrial';
          ((s as any).car = (s as any).car ?? {})['loc_arg'] = '';
        }
      } else {
        if (qspFunc(s, 'car_funcs', 'is_here', 'autotraidF', 'start')) {
          if (qspFunc(s, 'autotraidF', 'is_open')) {
            // TODO-QSP: dynamic text: Your <a href="exec:minut += 5 & gs ''carF'', ''start''"><<$car[''name'']>></a> i...
            scene.text(`Your <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027carF/u0027, /u0027start/u0027); return false;">${((s as any).car ?? 0)?.['name'] ?? ''}</a> is parked at the car dealership.`);
          } else {
            scene.text('It looks like the car dealership moved your car outside before they closed.');
            ((s as any).car = (s as any).car ?? {})['loc'] = 'city_industrial';
            ((s as any).car = (s as any).car ?? {})['loc_arg'] = '';
          }
        }
      }
    }
  }
  if (qspFunc(s, 'car_funcs', 'is_here', 'city_industrial', '')) {
    // TODO-QSP: dynamic text: Your <a href="exec:gs ''carF'', ''start''"><<$car[''name'']>></a> stands in the ...
    scene.text(`Your <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027carF/u0027, /u0027start/u0027); return false;">${((s as any).car ?? 0)?.['name'] ?? ''}</a> stands in the parking lot.`);
  }
  scene.text('The town\'s <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027city_industrial/u0027, /u0027exit/u0027, /u0027citypark/u0027); return false;">central park</a> is a one hour walk from here.');
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 23) {
    // TODO-QSP: dynamic text: You can see the <a href="exec: minut += 1 & gt ''kiosk'', ''start''">kiosk</a> s...
    scene.text('You can see the <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027kiosk/u0027, /u0027start/u0027); return false;">kiosk</a> selling cigarettes and magazines.');
  } else {
    // TODO-QSP: dynamic text: The kiosk is closed between '+func('time', 'get_time_string', 23, 0)+' and '+fun...
    scene.text('The kiosk is closed between 23:00 and 7:00.');
  }
  scene.text('At the center of the industrial region is a <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027city_industrial/u0027, /u0027exit/u0027, /u0027train/u0027); return false;">train station</a>.');
  if (((s as any).week ?? 0) === 3  ||  ((s as any).hour ?? 0) < 16) {
    // TODO-QSP: dynamic text: The "Rabotnik" bar is here, but it''s currently closed. A sign by the door tells...
    scene.text('The "Rabotnik" bar is here, but it\'s currently closed. A sign by the door tells you that it\'s open every day except Wednesday between 16:00 and midnight.');
  } else {
    // TODO-QSP: dynamic text: The <a href="exec: minut += 5 & gt ''qwBarPolet''">Bar "Rabotnik"</a> seems to b...
    scene.text('The <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027qwBarPolet/u0027, /u0027/u0027); return false;">Bar "Rabotnik"</a> seems to be open.');
  }
  // TODO-QSP: dynamic text: There is a <a href="exec: minut += 5 & gt ''fuelstation'', ''start''">gas statio...
  scene.text('There is a <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027fuelstation/u0027, /u0027start/u0027); return false;">gas station</a> near the street.');
  scene.text('The <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027city_industrial/u0027, /u0027exit/u0027, /u0027metro/u0027); return false;">metro station</a> is within a 5 minute walk from here.');
  if (qspFunc(s, 'autotraidF', 'is_open')) {
    // TODO-QSP: dynamic text: A <a href="exec: minut += 5 & gt ''autotraidF'', ''start''">car dealership</a> i...
    scene.text('A <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027autotraidF/u0027, /u0027start/u0027); return false;">car dealership</a> is nearby.');
  } else {
    // TODO-QSP: 'A car dealership is nearby' + iif(week = 1, ', but it''s closed on Mondays.', '. It is open between...
  }
  if (qspFunc(s, 'autoservisF', 'is_open')) {
    // TODO-QSP: dynamic text: Next to the car dealership is a <a href="exec: minut += 5 & gt ''autoservisF'', ...
    scene.text('Next to the car dealership is a <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027autoservisF/u0027, /u0027start/u0027); return false;">repair shop</a>.');
  } else {
    // TODO-QSP: 'Next to the car dealership is a repair shop.' + iif(week = 7, 'It''s closed on Sundays.', 'It is op...
  }
  if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 17  &&  ((s as any).week ?? 0) < 6) {
    // TODO-QSP: dynamic text: The <a href="exec: minut += 5 & gt ''city_commcenter'', ''start''">community cen...
    scene.text('The <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027city_commcenter/u0027, /u0027start/u0027); return false;">community center</a> is currently open.');
  } else {
    // TODO-QSP: dynamic text: The community center is currently closed. It''s only open during the week betwee...
    scene.text('The community center is currently closed. It\'s only open during the week between 9:00 and 17:00.');
  }
  if (((s as any).start_type ?? 0)?.['loc'] !== 'sg'  ||  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  ||  ((s as any).bumtolik ?? 0) > 3) {
    if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 18) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027buklinik/u0027, /u0027start/u0027); return false;">Mercy clinic</a> is open.');
    } else {
      scene.text('Mercy clinic is closed.');
    }
  }
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 21) {
    // TODO-QSP: dynamic text: The parking lot, which is engulfed in bright lights, belongs to a <a href="exec:...
    scene.text('The parking lot, which is engulfed in bright lights, belongs to a <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.2; return s; }); window.__gameStore.getState().doGoto(/u0027shop/u0027, /u0027start/u0027); return false;">supermarket</a>.');
  } else {
    // TODO-QSP: dynamic text: The empty parking lot, which is engulfed in bright lights, belongs to a supermar...
    scene.text('The empty parking lot, which is engulfed in bright lights, belongs to a supermarket that is open between 8:00 and 20:00.');
  }
  if (((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) < 18  &&  ((s as any).fightClubQW ?? 0)?.['story'] === 3) {
    scene.text('You look around and find the office of <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027fightClub_intro/u0027, /u0027office1/u0027); return false;">Sultan</a> open, the same address from his business card.');
  }
  if (((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) < 20) {
    // TODO-QSP: dynamic text: Above the door to a basement room is a bright neon sign for the <a href="exec: m...
    scene.text('Above the door to a basement room is a bright neon sign for the <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027pirsingsalon/u0027, /u0027start/u0027); return false;">Black Dragon Tattoo & Piercing Parlor</a>.');
  } else {
    // TODO-QSP: dynamic text: Above the door to a basement room is a bright neon sign for the Black Dragon Tat...
    scene.text('Above the door to a basement room is a bright neon sign for the Black Dragon Tattoo & Piercing Parlor. The opening hours are 12:00 to 20:00.');
  }
  if (((s as any).tobiQW ?? 0) >= 1) {
    scene.text('The old mansion, home to <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027kakuzu/u0027, /u0027start/u0027); return false;">Kakuzu</a>');
  }
  if (((s as any).age ?? 0) >= 18) {
    // TODO-QSP: dynamic text: A huge building covered in bright lights houses a <a href="exec: minut += 10 & g...
    scene.text('A huge building covered in bright lights houses a <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.10; return s; }); window.__gameStore.getState().doGoto(/u0027casino/u0027, /u0027outside/u0027); return false;">casino</a>.');
  } else {
    scene.text('A huge building covered in bright lights houses a casino. You need state ID, so cannot enter until you are 18.');
  }
  if (((s as any).hour ?? 0) >= 14  ||  ((s as any).hour ?? 0) < 4) {
    // TODO-QSP: dynamic text: Located far away from the buildings is a <a href="exec: minut += 2 & gt ''lakeca...
    scene.text('Located far away from the buildings is a <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.2; return s; }); window.__gameStore.getState().doGoto(/u0027lakecafe/u0027, /u0027main/u0027); return false;">barbecue</a>.');
  } else {
    // TODO-QSP: dynamic text: Located far away from the buildings is a barbecue. It is open between '+func('ti...
    scene.text('Located far away from the buildings is a barbecue. It is open between 14:00 and 4:00.');
  }
  if (((s as any).jouryResult ?? 0) === 10) {
    scene.text('You can go to one of the apartment blocks and visit <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027youry/u0027, /u0027start/u0027); return false;">Yuri</a>.');
  }
  if (((s as any).BurgerQW ?? 0)?.['IlyQWTatianaHelp'] > 0  &&  ((s as any).BurgerQW ?? 0)?.['IlyQWEvidence'] === 0  &&  (((s as any).softKAR ?? 0) === 1  ||  (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  (((s as any).poverKAR ?? 0) === 1  ||  ((s as any).softKAR ?? 0) === 1)))) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027ilyroom/u0027, /u0027/u0027); return false;">Ilyushkin\'s</a> apartment is in one of these buildings.');
  }
  scene.text('A long and high fence is built around the <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027Terminal/u0027, /u0027/u0027); return false;">storage terminal</a>.');
  qspCall(s, 'lover', 'lover_events');
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk to the main road to Pavlovsk (0:15)', goto: ['city_industrial', 'exit', 'pavlovsk'] },
    { label: 'Walk to the Red Light District (0:05)', goto: ['city_industrial', 'exit', 'redlight'] },
    { label: 'Walk to the central park (1:00)', goto: ['city_industrial', 'exit', 'citypark'] },
    { label: 'Walk to the industrial train station (0:15)', goto: ['city_industrial', 'exit', 'train'] },
    { label: 'Walk to the Metro (0:05)', goto: ['city_industrial', 'exit', 'metro'] },
    { label: 'Walk to the canals (0:15)', goto: ['city_industrial', 'exit', 'canals'] },
  ]);
  scene.build();
}

function enterMain(s: GameState, scene: SceneBuilder): void {
  ((s as any).setloc = (s as any).setloc ?? {})['StageTitle'] = 'St Petersburg - Industrial Region';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', '']; enterSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).location_type = 'public_outdoors';
  qspCall(s, 'random_events', '');
  qspCall(s, 'jobs_gigs', 'disp_evt', 3);
  qspCall(s, 'taxi', '');
  if (qspFunc(s, 'car_funcs', 'is_here', 'fuelstation', 'start')) {
    // TODO-QSP: dynamic text: Your <a href="exec:minut += 5 & gs ''carF'', ''start''"><<$car[''name'']>></a> i...
    scene.text(`Your <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027carF/u0027, /u0027start/u0027); return false;">${((s as any).car ?? 0)?.['name'] ?? ''}</a> is parked near the gas station.`);
  } else {
    if (qspFunc(s, 'car_funcs', 'is_here', 'city_redlight', 'start')) {
      // TODO-QSP: dynamic text: Your <a href="exec:minut += 5 & gs ''carF'', ''start''"><<$car[''name'']>></a> s...
      scene.text(`Your <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027carF/u0027, /u0027start/u0027); return false;">${((s as any).car ?? 0)?.['name'] ?? ''}</a> stands nearby in a parking lot at the redlight district.`);
    } else {
      if (qspFunc(s, 'car_funcs', 'is_here', 'autoservisF', 'start')) {
        if (qspFunc(s, 'autoservisF', 'is_open')) {
          // TODO-QSP: dynamic text: Your <a href="exec:minut += 5 & gs ''carF'', ''start''"><<$car[''name'']>></a> i...
          scene.text(`Your <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027carF/u0027, /u0027start/u0027); return false;">${((s as any).car ?? 0)?.['name'] ?? ''}</a> is parked at the car service center.`);
        } else {
          scene.text('It looks like the repair shop moved your car outside before they closed.');
          ((s as any).car = (s as any).car ?? {})['loc'] = 'city_industrial';
          ((s as any).car = (s as any).car ?? {})['loc_arg'] = '';
        }
      } else {
        if (qspFunc(s, 'car_funcs', 'is_here', 'autotraidF', 'start')) {
          if (qspFunc(s, 'autotraidF', 'is_open')) {
            // TODO-QSP: dynamic text: Your <a href="exec:minut += 5 & gs ''carF'', ''start''"><<$car[''name'']>></a> i...
            scene.text(`Your <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027carF/u0027, /u0027start/u0027); return false;">${((s as any).car ?? 0)?.['name'] ?? ''}</a> is parked at the car dealership.`);
          } else {
            scene.text('It looks like the car dealership moved your car outside before they closed.');
            ((s as any).car = (s as any).car ?? {})['loc'] = 'city_industrial';
            ((s as any).car = (s as any).car ?? {})['loc_arg'] = '';
          }
        }
      }
    }
  }
  if (qspFunc(s, 'car_funcs', 'is_here', 'city_industrial', '')) {
    // TODO-QSP: dynamic text: Your <a href="exec:gs ''carF'', ''start''"><<$car[''name'']>></a> stands in the ...
    scene.text(`Your <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027carF/u0027, /u0027start/u0027); return false;">${((s as any).car ?? 0)?.['name'] ?? ''}</a> stands in the parking lot.`);
  }
  scene.text('The town\'s <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027city_industrial/u0027, /u0027exit/u0027, /u0027citypark/u0027); return false;">central park</a> is a one hour walk from here.');
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 23) {
    // TODO-QSP: dynamic text: You can see the <a href="exec: minut += 1 & gt ''kiosk'', ''start''">kiosk</a> s...
    scene.text('You can see the <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027kiosk/u0027, /u0027start/u0027); return false;">kiosk</a> selling cigarettes and magazines.');
  } else {
    // TODO-QSP: dynamic text: The kiosk is closed between '+func('time', 'get_time_string', 23, 0)+' and '+fun...
    scene.text('The kiosk is closed between 23:00 and 7:00.');
  }
  scene.text('At the center of the industrial region is a <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027city_industrial/u0027, /u0027exit/u0027, /u0027train/u0027); return false;">train station</a>.');
  if (((s as any).week ?? 0) === 3  ||  ((s as any).hour ?? 0) < 16) {
    // TODO-QSP: dynamic text: The "Rabotnik" bar is here, but it''s currently closed. A sign by the door tells...
    scene.text('The "Rabotnik" bar is here, but it\'s currently closed. A sign by the door tells you that it\'s open every day except Wednesday between 16:00 and midnight.');
  } else {
    // TODO-QSP: dynamic text: The <a href="exec: minut += 5 & gt ''qwBarPolet''">Bar "Rabotnik"</a> seems to b...
    scene.text('The <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027qwBarPolet/u0027, /u0027/u0027); return false;">Bar "Rabotnik"</a> seems to be open.');
  }
  // TODO-QSP: dynamic text: There is a <a href="exec: minut += 5 & gt ''fuelstation'', ''start''">gas statio...
  scene.text('There is a <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027fuelstation/u0027, /u0027start/u0027); return false;">gas station</a> near the street.');
  scene.text('The <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027city_industrial/u0027, /u0027exit/u0027, /u0027metro/u0027); return false;">metro station</a> is within a 5 minute walk from here.');
  if (qspFunc(s, 'autotraidF', 'is_open')) {
    // TODO-QSP: dynamic text: A <a href="exec: minut += 5 & gt ''autotraidF'', ''start''">car dealership</a> i...
    scene.text('A <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027autotraidF/u0027, /u0027start/u0027); return false;">car dealership</a> is nearby.');
  } else {
    // TODO-QSP: 'A car dealership is nearby' + iif(week = 1, ', but it''s closed on Mondays.', '. It is open between...
  }
  if (qspFunc(s, 'autoservisF', 'is_open')) {
    // TODO-QSP: dynamic text: Next to the car dealership is a <a href="exec: minut += 5 & gt ''autoservisF'', ...
    scene.text('Next to the car dealership is a <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027autoservisF/u0027, /u0027start/u0027); return false;">repair shop</a>.');
  } else {
    // TODO-QSP: 'Next to the car dealership is a repair shop.' + iif(week = 7, 'It''s closed on Sundays.', 'It is op...
  }
  if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 17  &&  ((s as any).week ?? 0) < 6) {
    // TODO-QSP: dynamic text: The <a href="exec: minut += 5 & gt ''city_commcenter'', ''start''">community cen...
    scene.text('The <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027city_commcenter/u0027, /u0027start/u0027); return false;">community center</a> is currently open.');
  } else {
    // TODO-QSP: dynamic text: The community center is currently closed. It''s only open during the week betwee...
    scene.text('The community center is currently closed. It\'s only open during the week between 9:00 and 17:00.');
  }
  if (((s as any).start_type ?? 0)?.['loc'] !== 'sg'  ||  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  ||  ((s as any).bumtolik ?? 0) > 3) {
    if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 18) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027buklinik/u0027, /u0027start/u0027); return false;">Mercy clinic</a> is open.');
    } else {
      scene.text('Mercy clinic is closed.');
    }
  }
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 21) {
    // TODO-QSP: dynamic text: The parking lot, which is engulfed in bright lights, belongs to a <a href="exec:...
    scene.text('The parking lot, which is engulfed in bright lights, belongs to a <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.2; return s; }); window.__gameStore.getState().doGoto(/u0027shop/u0027, /u0027start/u0027); return false;">supermarket</a>.');
  } else {
    // TODO-QSP: dynamic text: The empty parking lot, which is engulfed in bright lights, belongs to a supermar...
    scene.text('The empty parking lot, which is engulfed in bright lights, belongs to a supermarket that is open between 8:00 and 20:00.');
  }
  if (((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) < 18  &&  ((s as any).fightClubQW ?? 0)?.['story'] === 3) {
    scene.text('You look around and find the office of <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027fightClub_intro/u0027, /u0027office1/u0027); return false;">Sultan</a> open, the same address from his business card.');
  }
  if (((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) < 20) {
    // TODO-QSP: dynamic text: Above the door to a basement room is a bright neon sign for the <a href="exec: m...
    scene.text('Above the door to a basement room is a bright neon sign for the <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027pirsingsalon/u0027, /u0027start/u0027); return false;">Black Dragon Tattoo & Piercing Parlor</a>.');
  } else {
    // TODO-QSP: dynamic text: Above the door to a basement room is a bright neon sign for the Black Dragon Tat...
    scene.text('Above the door to a basement room is a bright neon sign for the Black Dragon Tattoo & Piercing Parlor. The opening hours are 12:00 to 20:00.');
  }
  if (((s as any).tobiQW ?? 0) >= 1) {
    scene.text('The old mansion, home to <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027kakuzu/u0027, /u0027start/u0027); return false;">Kakuzu</a>');
  }
  if (((s as any).age ?? 0) >= 18) {
    // TODO-QSP: dynamic text: A huge building covered in bright lights houses a <a href="exec: minut += 10 & g...
    scene.text('A huge building covered in bright lights houses a <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.10; return s; }); window.__gameStore.getState().doGoto(/u0027casino/u0027, /u0027outside/u0027); return false;">casino</a>.');
  } else {
    scene.text('A huge building covered in bright lights houses a casino. You need state ID, so cannot enter until you are 18.');
  }
  if (((s as any).hour ?? 0) >= 14  ||  ((s as any).hour ?? 0) < 4) {
    // TODO-QSP: dynamic text: Located far away from the buildings is a <a href="exec: minut += 2 & gt ''lakeca...
    scene.text('Located far away from the buildings is a <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.2; return s; }); window.__gameStore.getState().doGoto(/u0027lakecafe/u0027, /u0027main/u0027); return false;">barbecue</a>.');
  } else {
    // TODO-QSP: dynamic text: Located far away from the buildings is a barbecue. It is open between '+func('ti...
    scene.text('Located far away from the buildings is a barbecue. It is open between 14:00 and 4:00.');
  }
  if (((s as any).jouryResult ?? 0) === 10) {
    scene.text('You can go to one of the apartment blocks and visit <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027youry/u0027, /u0027start/u0027); return false;">Yuri</a>.');
  }
  if (((s as any).BurgerQW ?? 0)?.['IlyQWTatianaHelp'] > 0  &&  ((s as any).BurgerQW ?? 0)?.['IlyQWEvidence'] === 0  &&  (((s as any).softKAR ?? 0) === 1  ||  (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  (((s as any).poverKAR ?? 0) === 1  ||  ((s as any).softKAR ?? 0) === 1)))) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027ilyroom/u0027, /u0027/u0027); return false;">Ilyushkin\'s</a> apartment is in one of these buildings.');
  }
  scene.text('A long and high fence is built around the <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027Terminal/u0027, /u0027/u0027); return false;">storage terminal</a>.');
  qspCall(s, 'lover', 'lover_events');
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk to the main road to Pavlovsk (0:15)', goto: ['city_industrial', 'exit', 'pavlovsk'] },
    { label: 'Walk to the Red Light District (0:05)', goto: ['city_industrial', 'exit', 'redlight'] },
    { label: 'Walk to the central park (1:00)', goto: ['city_industrial', 'exit', 'citypark'] },
    { label: 'Walk to the industrial train station (0:15)', goto: ['city_industrial', 'exit', 'train'] },
    { label: 'Walk to the Metro (0:05)', goto: ['city_industrial', 'exit', 'metro'] },
    { label: 'Walk to the canals (0:15)', goto: ['city_industrial', 'exit', 'canals'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'init':
      enterInit(s, scene);
      break;
    case 'setup':
      enterSetup(s, scene);
      break;
    case 'exit':
      enterExit(s, scene);
      break;
    case 'start':
      enterStart(s, scene);
      break;
    case 'main':
      enterMain(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const city_industrial: LocationDef = {
  name: 'city_industrial',
  title: 'The town\'s <a href="#" onclick="window.__gameStore.getState(',
  region: 'city',
  locationType: 'public_outdoors',
  enter: enter,
};
