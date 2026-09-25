import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

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

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_center', '');
  (s as any).region = 'city';
  (s as any).location_type = 'public_outdoors';
  (s as any).locclass = undefined;
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
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterImage(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('Day or night, the city center is alive and bustling, so whether you\'re looking to shop, hit the gym or get some cheap food, you\'ll find it hard not to have your needs satisfied.');
  if (((s as any).mother ?? 0)?.['kickedout_timer'] !== 0  &&  ((s as any).mother ?? 0)?.['kickedout_timer'] + 3 <= ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) > 6  &&  ((s as any).hour ?? 0) <= 15  &&  String((s as any).locArgs?.[1] ?? '') !== 'mom_check'  &&  ((s as any).cumloc ?? 0)[11] === 0) {
    qspCall(s, 'mother_chats', 'reconciliation_talk');
    return;
  }
  if (((s as any).nichWork ?? 0) === 2) {
    scene.actions([
      { label: '<b>GO HOME</b> (Nicholas\' apartment)', goto: ['nichApartment', ''] },
    ]);
  }
  qspCall(s, 'music_actions', 'start');
  if (qspFunc(s, 'car_funcs', 'is_here')) {
    scene.text(`Your <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027carF/u0027, /u0027start/u0027); return false;">${(((s as any).car ?? 0)?.['name'] ?? '')}</a> sits in the parking lot.`);
  }
  qspCall(s, 'taxi', '');
  scene.text('You have easy access to the <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.5; return s; }); window.__gameStore.getState().doGoto(\u0027train\u0027, \u0027center\u0027); return false;">train station</a> and <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.5; return s; }); window.__gameStore.getState().doGoto(\u0027metro\u0027, \u0027center\u0027); return false;">the metro</a> is only a short walk from there. Both connect you quickly to other parts of St. Petersburg and the subway is great if you\'re tight on cash. If you can\'t afford either, the <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.35; return s; }); window.__gameStore.getState().doGoto(\u0027city_park\u0027, \u0027start\u0027); return false;">central park</a> is a 35 minute walk from here and provides a more scenic route to the other city districts.');
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 22) {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).desc_txt1 = '<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(\u0027kiosk\u0027, \u0027start\u0027); return false;">kiosk</a>';
  } else {
    (s as any).desc_txt1 = '<a href="#" onclick="window.__gameStore.setState((s) => { alert(\u0027The Ruch kiosk is closed and will reopen at \u0027+qspFunc(s, \u0027time\u0027, \u0027get_time_string\u0027, 8, 0)+\u0027\u0027); return s; }); return false;">kiosk</a>';
  }
  scene.text(`'The neon green sign of a ${((s as any).desc_txt1 ?? '')} catches your eye. It's open between 8:00 and 22:00 and sells cheap magazines and cigarettes.'`);
  if (((s as any).hour ?? 0) === 8  &&  ((s as any).minut ?? 0) >= 30) {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).desc_txt1 = '<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(\u0027city_mall\u0027, \u0027\u0027); return false;">The Galeria mall</a>';
    (s as any).desc_txt2 = '<a href="#" onclick="window.__gameStore.setState((s) => { alert(\u0027The Havana Fitness Center is closed and will reopen at \u0027+qspFunc(s, \u0027time\u0027, \u0027get_time_string\u0027, 9, 0)+\u0027\u0027); return s; }); return false;">Havana Fitness Center</a>';
  } else {
    if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 20) {
      (s as any).minut = ((s as any).minut ?? 0) + 1;
      (s as any).desc_txt1 = '<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(\u0027city_mall\u0027, \u0027\u0027); return false;">The Galeria mall</a>';
      (s as any).desc_txt2 = '<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027havana\u0027, \u0027start\u0027); return false;">Havana Fitness Center</a>';
    } else {
      (s as any).desc_txt1 = '<a href="#" onclick="window.__gameStore.setState((s) => { alert(\u0027The Galeria mall is closed and will reopen at \u0027+qspFunc(s, \u0027time\u0027, \u0027get_time_string\u0027, 8, 30)+\u0027\u0027); return s; }); return false;">The Galeria mall</a>';
      (s as any).desc_txt2 = '<a href="#" onclick="window.__gameStore.setState((s) => { alert(\u0027The Havana Fitness Center is closed and will reopen at \u0027+qspFunc(s, \u0027time\u0027, \u0027get_time_string\u0027, 9, 0)+\u0027\u0027); return s; }); return false;">Havana Fitness Center</a>';
    }
  }
  scene.text(`${((s as any).desc_txt1 ?? '')} is front and center in the commercial area. Nearby is a ${((s as any).desc_txt2 ?? '')} which has a swimming pool that can be used for a small fee.`);
  if (((s as any).hour ?? 0) >= 6) {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).desc_txt1 = '<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(\u0027foto\u0027, \u0027start\u0027); return false;">Aphrodite Photography</a>';
  } else {
    (s as any).desc_txt1 = '<a href="#" onclick="window.__gameStore.setState((s) => { alert(\u0027Aphrodite Photography is closed and will reopen at \u0027+qspFunc(s, \u0027time\u0027, \u0027get_time_string\u0027, 6, 0)+\u0027\u0027); return s; }); return false;">Aphrodite Photography</a>';
  }
  if (((s as any).hour ?? 0) >= 6) {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).desc_txt2 = '<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(\u0027burger\u0027, \u0027start\u0027); return false;">Diner Bystroeshka</a>';
  } else {
    (s as any).desc_txt2 = '<a href="#" onclick="window.__gameStore.setState((s) => { alert(\u0027Diner Bystroeshka is closed and will reopen at \u0027+qspFunc(s, \u0027time\u0027, \u0027get_time_string\u0027, 6, 0)+\u0027\u0027); return s; }); return false;">Diner Bystroeshka</a>';
  }
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 23) {
    (s as any).desc_txt3 = '<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027restoran\u0027, \u0027start\u0027); return false;">Babel</a>';
  } else {
    (s as any).desc_txt3 = '<a href="#" onclick="window.__gameStore.setState((s) => { alert(\u0027Babel is closed and will reopen at \u0027+qspFunc(s, \u0027time\u0027, \u0027get_time_string\u0027, 8, 0)+\u0027\u0027); return s; }); return false;">Babel</a>';
  }
  scene.text(`A few buildings away is ${((s as any).desc_txt1 ?? '')} and ${((s as any).desc_txt2 ?? '')}, a place that sells cheap fast food. For a more lavish dining experience, ${((s as any).desc_txt3 ?? '')} is available.`);
  if (((s as any).week ?? 0) >= 4  &&  ((s as any).hour ?? 0) >= 18  ||  (((s as any).week ?? 0) >= 5  ||  ((s as any).week ?? 0) === 1)  &&  ((s as any).hour ?? 0) < 4) {
    (s as any).desc_txt3 = '<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027city_nightclub\u0027, \u0027start\u0027); return false;">the nightclub</a>';
  } else {
    (s as any).desc_txt3 = '<a href="#" onclick="window.__gameStore.setState((s) => { alert(\u0027The nightclub is closed and will open from Thursday to Sunday at \u0027+qspFunc(s, \u0027time\u0027, \u0027get_time_string\u0027, 18, 0)+\u0027\u0027); return s; }); return false;">The nightclub</a>';
  }
  scene.text(`The only place open here at night is ${((s as any).desc_txt3 ?? '')}.`);
  if ((((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 17)  ||  (((s as any).week ?? 0) === 6  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 14)) {
    (s as any).desc_txt1 = '<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027office\u0027, \u0027start\u0027); return false;">Titran-Express</a>';
  } else {
    if ((((s as any).week ?? 0) === 5  ||  ((s as any).week ?? 0) === 6)  &&  ((s as any).hour ?? 0) >= 17) {
      (s as any).desc_txt1 = '<a href="#" onclick="window.__gameStore.setState((s) => { alert(\u0027Titran-Express is closed and will reopen at \u0027+qspFunc(s, \u0027time\u0027, \u0027get_time_string\u0027, 8, 0)+\u0027 on Monday\u0027); return s; }); return false;">Titran-Express</a>';
    } else {
      (s as any).desc_txt1 = '<a href="#" onclick="window.__gameStore.setState((s) => { alert(\u0027Titran-Express is closed and will reopen at \u0027+qspFunc(s, \u0027time\u0027, \u0027get_time_string\u0027, 8, 0)+\u0027\u0027); return s; }); return false;">Titran-Express</a>';
    }
  }
  scene.text(`Across the street is considered the business area. The large skyscraper there serves as the base of operations for ${((s as any).desc_txt1 ?? '')}, an engineering company.`);
  if ((!((s as any).casting ?? 0))) {
    (s as any).desc_txt1 = 'Aurora talent agency';
  } else {
    if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) < 21) {
      (s as any).desc_txt1 = '<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027talent_agency\u0027, \u0027\u0027); return false;">Aurora talent agency</a>';
    } else {
      (s as any).desc_txt1 = '<a href="#" onclick="window.__gameStore.setState((s) => { alert(\u0027Aurora talent agency is closed and will reopen at \u0027+qspFunc(s, \u0027time\u0027, \u0027get_time_string\u0027, 7, 0)+\u0027\u0027); return s; }); return false;">Aurora talent agency</a>';
    }
  }
  if (((s as any).week ?? 0) < 6) {
    if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 19) {
      (s as any).desc_txt2 = '<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027bank\u0027, \u0027start\u0027); return false;">VTB bank</a>';
    } else {
      (s as any).desc_txt2 = '<a href="#" onclick="window.__gameStore.setState((s) => { alert(\u0027VTB bank is closed and will reopen at \u0027+qspFunc(s, \u0027time\u0027, \u0027get_time_string\u0027, 9, 0)+\u0027\u0027); return s; }); return false;">VTB bank</a>';
    }
  } else {
    (s as any).desc_txt2 = '<a href="#" onclick="window.__gameStore.setState((s) => { alert(\u0027VTB bank is closed and will reopen on monday at \u0027+qspFunc(s, \u0027time\u0027, \u0027get_time_string\u0027, 9, 0)+\u0027\u0027); return s; }); return false;">VTB bank</a>';
  }
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 23) {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).desc_txt3 = '<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(\u0027agentned\u0027, \u0027start\u0027); return false;">Kirsanova Realty</a>';
  } else {
    (s as any).desc_txt3 = '<a href="#" onclick="window.__gameStore.setState((s) => { alert(\u0027Kirsanova Realty is closed and will reopen at \u0027+qspFunc(s, \u0027time\u0027, \u0027get_time_string\u0027, 8, 0)+\u0027\u0027); return s; }); return false;">Kirsanova Realty</a>';
  }
  if ((((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 17)  ||  (((s as any).week ?? 0) === 6  &&  ((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 14)) {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    (s as any).desc_txt4 = '<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.3; return s; }); window.__gameStore.getState().doGoto(\u0027post_office\u0027, \u0027start\u0027); return false;">post office</a>';
  } else {
    if (((s as any).week ?? 0) === 6  &&  ((s as any).hour ?? 0) > 16  ||  ((s as any).week ?? 0) === 7  &&  ((s as any).hour ?? 0) < 12) {
      (s as any).desc_txt4 = '<a href="#" onclick="window.__gameStore.setState((s) => { alert(\u0027The post office is closed and will reopen at \u0027+qspFunc(s, \u0027time\u0027, \u0027get_time_string\u0027, 9, 0)+\u0027 on Monday\u0027); return s; }); return false;">post office</a>';
    } else {
      (s as any).desc_txt4 = '<a href="#" onclick="window.__gameStore.setState((s) => { alert(\u0027The post office is closed and will reopen at \u0027+qspFunc(s, \u0027time\u0027, \u0027get_time_string\u0027, 9, 0)+\u0027\u0027); return s; }); return false;">post office</a>';
    }
  }
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 19) {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).desc_txt5 = '<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(\u0027city_library\u0027, \u0027\u0027); return false;">National Library of Russia</a> and <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(\u0027city_hermitage\u0027, \u0027start\u0027); return false;">Hermitage Museum</a>';
  } else {
    (s as any).desc_txt5 = '<a href="#" onclick="window.__gameStore.setState((s) => { alert(\u0027The National Library of Russia is closed and will reopen at \u0027+qspFunc(s, \u0027time\u0027, \u0027get_time_string\u0027, 8, 0)+\u0027\u0027); return s; }); return false;">National Library of Russia</a> and <a href="#" onclick="window.__gameStore.setState((s) => { alert(\u0027The Hermitage Museum is closed and will reopen at \u0027+qspFunc(s, \u0027time\u0027, \u0027get_time_string\u0027, 8, 0)+\u0027\u0027); return s; }); return false;">Hermitage Museum</a>';
  }
  scene.text(`Next door is the ${((s as any).desc_txt1 ?? '')} followed by a ${((s as any).desc_txt2 ?? '')}, ${((s as any).desc_txt3 ?? '')} and the 5-star <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027city_hotel/u0027, /u0027/u0027); return false;">Hotel Indigo</a> for your housing needs. Lastly, the local ${((s as any).desc_txt4 ?? '')}, ${((s as any).desc_txt5 ?? '')} can be found at the end of the road.`);
  if (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) < 18) {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).desc_txt6 = '<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(\u0027sentence\u0027, \u0027start\u0027); return false;">The City Courthouse</a>';
  } else {
    if (((s as any).week ?? 0) < 5  &&  ((s as any).hour ?? 0) >= 18) {
      (s as any).desc_txt6 = '<a href="#" onclick="window.__gameStore.setState((s) => { alert(\u0027The City Courthouse is closed and will reopen tomorrow at \u0027+qspFunc(s, \u0027time\u0027, \u0027get_time_string\u0027, 7, 0)+\u0027\u0027); return s; }); return false;">City Courthouse</a>';
    } else {
      (s as any).desc_txt6 = '<a href="#" onclick="window.__gameStore.setState((s) => { alert(\u0027The City Courthouse is closed and will reopen on Monday at \u0027+qspFunc(s, \u0027time\u0027, \u0027get_time_string\u0027, 7, 0)+\u0027\u0027); return s; }); return false;">City Courthouse</a>';
    }
  }
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  (s as any).desc_txt7 = '<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(\u0027police_station\u0027, \u0027start\u0027); return false;">Main city police station</a>';
  scene.text(`Away from the shops is both ${((s as any).desc_txt6 ?? '')} and the ${((s as any).desc_txt7 ?? '')}.`);
  scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(\u0027city_church\u0027, \u0027start\u0027); return false;">Kazan Cathedral</a>, also known as the Cathedral of Our Lady of Kazan, sits at the very center of the city.');
  if (((s as any).nichHotelReferral ?? 0) === 2  &&  ((s as any).nichWork ?? 0) !== 2  &&  ((s as any).nichWork ?? 0) !== 4) {
    if (((s as any).hour ?? 0) >= 4  &&  ((s as any).hour ?? 0) < 16) {
      scene.text('\'You could go to the apartment of a man named Nicholas to apply for a job as a live-in maid, but it\'s too early for that. You should come back between 16:00 and 21:00.\'');
    } else {
      if (((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) < 22) {
        scene.text('You could go to the <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027nichApartment\u0027, \u0027jobInterview\u0027); return false;">apartment of a man named Nicholas</a> to apply for a job as a live-in maid.');
      } else {
        scene.text('\'You could go to the apartment of a man named Nicholas to apply for a job as a live-in maid, but it\'s too late for that. You should come back between 16:00 and 21:00.\'');
      }
    }
  }
  if (((s as any).cfg_vars ?? 0)?.['tablemap'] === 0) {
    if (((s as any).nichTanya ?? 0)?.['Relationship'] > 0  &&  ((s as any).nichTanya ?? 0)?.['Relationship'] < 4  &&  ((s as any).nichWork ?? 0) !== 2  &&  ((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) < 22  &&  ((s as any).nichTanya ?? 0)?.['FuckLast'] !== ((s as any).daystart ?? 0)) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027nichApartment\u0027, \u0027visitTanya\u0027); return false;">Apartment where Tanya lives</a>.');
    }
    if (((s as any).nichWork ?? 0) === 2) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027nichApartment\u0027, \u0027\u0027); return false;">Nicholas\'s</a> apartment where you work as a live in maid.');
    }
    if (((s as any).izoldaQW ?? 0) >= 1) {
      scene.text('Your friend <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027qwIzoldaApp\u0027, \u0027\u0027); return false;">Isolde\'s</a> apartment.');
    }
    if (((s as any).mainQW ?? 0) >= 1) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027tatiana_lab\u0027, \u0027start\u0027); return false;">You can visit Tatiana</a> at the Myrkov Investigative Agency.');
    }
    if (((s as any).yaq ?? 0) === 1) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027yarik\u0027, \u0027start\u0027); return false;">Yaroslav</a> from the office\'s apartment.');
    }
    if (((s as any).peter ?? 0) > 0) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027peterroom\u0027, \u0027start_door\u0027); return false;">Peter</a> the sex shop owner\'s apartment.');
    }
  } else {
    (s as any).st_count = 0;
    (s as any).show_table = '';
    if (((s as any).nichTanya ?? 0)?.['Relationship'] > 0  &&  ((s as any).nichTanya ?? 0)?.['Relationship'] < 4  &&  ((s as any).nichWork ?? 0) !== 2  &&  ((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) < 22  &&  ((s as any).nichTanya ?? 0)?.['FuckLast'] !== ((s as any).daystart ?? 0)) {
      qspCall(s, 'show_table', '<a href="exec:gt \'nichApartment\', \'visitTanya\'">Apartment</a> where Tanya lives', '3');
    }
    if (((s as any).nichWork ?? 0) === 2) {
      qspCall(s, 'show_table', '<a href="exec:gt \'nichApartment\'">Nicholas\'s</a> apartment', '3');
    }
    if (((s as any).izoldaQW ?? 0) >= 1) {
      qspCall(s, 'show_table', '<a href="exec:gt \'qwIzoldaApp\'">Isolde\'s</a> apartment', '3');
    }
    if (((s as any).mainQW ?? 0) >= 1) {
      qspCall(s, 'show_table', '<a href="exec:gt \'tatiana_lab\', \'start\'">You can visit Tatiana</a> at the Myrkov Investigative Agency.', '3');
    }
    if (((s as any).yaq ?? 0) === 1) {
      qspCall(s, 'show_table', '<a href="exec:gt \'yarik\', \'start\'">Yaroslav\'s</a> apartment', '3');
    }
    if (((s as any).peter ?? 0) > 0) {
      qspCall(s, 'show_table', '<a href="exec:gt \'peterroom\', \'start_door\'">Peter\'s</a> apartment', '3');
    }
    if (((s as any).st_count ?? 0) > 0) {
      scene.text(`<table border=1>${((s as any).show_table ?? '')}</tr></table>`);
    }
  }
  if (((s as any).PSport ?? 0) === 1  &&  ((s as any).week ?? 0) >= 6  &&  ((s as any).AlexandriaQW ?? 0) === 15) {
    scene.actions([
      { label: 'Meet Ana by the courthouse', goto: ['alexandriaEv', 'anachase1'] },
    ]);
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

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_center', '');
  (s as any).region = 'city';
  (s as any).location_type = 'public_outdoors';
  (s as any).locclass = undefined;
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
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterImage(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('Day or night, the city center is alive and bustling, so whether you\'re looking to shop, hit the gym or get some cheap food, you\'ll find it hard not to have your needs satisfied.');
  if (((s as any).mother ?? 0)?.['kickedout_timer'] !== 0  &&  ((s as any).mother ?? 0)?.['kickedout_timer'] + 3 <= ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) > 6  &&  ((s as any).hour ?? 0) <= 15  &&  String((s as any).locArgs?.[1] ?? '') !== 'mom_check'  &&  ((s as any).cumloc ?? 0)[11] === 0) {
    qspCall(s, 'mother_chats', 'reconciliation_talk');
    return;
  }
  if (((s as any).nichWork ?? 0) === 2) {
    scene.actions([
      { label: '<b>GO HOME</b> (Nicholas\' apartment)', goto: ['nichApartment', ''] },
    ]);
  }
  qspCall(s, 'music_actions', 'start');
  if (qspFunc(s, 'car_funcs', 'is_here')) {
    scene.text(`Your <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027carF/u0027, /u0027start/u0027); return false;">${(((s as any).car ?? 0)?.['name'] ?? '')}</a> sits in the parking lot.`);
  }
  qspCall(s, 'taxi', '');
  scene.text('You have easy access to the <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.5; return s; }); window.__gameStore.getState().doGoto(\u0027train\u0027, \u0027center\u0027); return false;">train station</a> and <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.5; return s; }); window.__gameStore.getState().doGoto(\u0027metro\u0027, \u0027center\u0027); return false;">the metro</a> is only a short walk from there. Both connect you quickly to other parts of St. Petersburg and the subway is great if you\'re tight on cash. If you can\'t afford either, the <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.35; return s; }); window.__gameStore.getState().doGoto(\u0027city_park\u0027, \u0027start\u0027); return false;">central park</a> is a 35 minute walk from here and provides a more scenic route to the other city districts.');
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 22) {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).desc_txt1 = '<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(\u0027kiosk\u0027, \u0027start\u0027); return false;">kiosk</a>';
  } else {
    (s as any).desc_txt1 = '<a href="#" onclick="window.__gameStore.setState((s) => { alert(\u0027The Ruch kiosk is closed and will reopen at \u0027+qspFunc(s, \u0027time\u0027, \u0027get_time_string\u0027, 8, 0)+\u0027\u0027); return s; }); return false;">kiosk</a>';
  }
  scene.text(`'The neon green sign of a ${((s as any).desc_txt1 ?? '')} catches your eye. It's open between 8:00 and 22:00 and sells cheap magazines and cigarettes.'`);
  if (((s as any).hour ?? 0) === 8  &&  ((s as any).minut ?? 0) >= 30) {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).desc_txt1 = '<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(\u0027city_mall\u0027, \u0027\u0027); return false;">The Galeria mall</a>';
    (s as any).desc_txt2 = '<a href="#" onclick="window.__gameStore.setState((s) => { alert(\u0027The Havana Fitness Center is closed and will reopen at \u0027+qspFunc(s, \u0027time\u0027, \u0027get_time_string\u0027, 9, 0)+\u0027\u0027); return s; }); return false;">Havana Fitness Center</a>';
  } else {
    if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 20) {
      (s as any).minut = ((s as any).minut ?? 0) + 1;
      (s as any).desc_txt1 = '<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(\u0027city_mall\u0027, \u0027\u0027); return false;">The Galeria mall</a>';
      (s as any).desc_txt2 = '<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027havana\u0027, \u0027start\u0027); return false;">Havana Fitness Center</a>';
    } else {
      (s as any).desc_txt1 = '<a href="#" onclick="window.__gameStore.setState((s) => { alert(\u0027The Galeria mall is closed and will reopen at \u0027+qspFunc(s, \u0027time\u0027, \u0027get_time_string\u0027, 8, 30)+\u0027\u0027); return s; }); return false;">The Galeria mall</a>';
      (s as any).desc_txt2 = '<a href="#" onclick="window.__gameStore.setState((s) => { alert(\u0027The Havana Fitness Center is closed and will reopen at \u0027+qspFunc(s, \u0027time\u0027, \u0027get_time_string\u0027, 9, 0)+\u0027\u0027); return s; }); return false;">Havana Fitness Center</a>';
    }
  }
  scene.text(`${((s as any).desc_txt1 ?? '')} is front and center in the commercial area. Nearby is a ${((s as any).desc_txt2 ?? '')} which has a swimming pool that can be used for a small fee.`);
  if (((s as any).hour ?? 0) >= 6) {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).desc_txt1 = '<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(\u0027foto\u0027, \u0027start\u0027); return false;">Aphrodite Photography</a>';
  } else {
    (s as any).desc_txt1 = '<a href="#" onclick="window.__gameStore.setState((s) => { alert(\u0027Aphrodite Photography is closed and will reopen at \u0027+qspFunc(s, \u0027time\u0027, \u0027get_time_string\u0027, 6, 0)+\u0027\u0027); return s; }); return false;">Aphrodite Photography</a>';
  }
  if (((s as any).hour ?? 0) >= 6) {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).desc_txt2 = '<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(\u0027burger\u0027, \u0027start\u0027); return false;">Diner Bystroeshka</a>';
  } else {
    (s as any).desc_txt2 = '<a href="#" onclick="window.__gameStore.setState((s) => { alert(\u0027Diner Bystroeshka is closed and will reopen at \u0027+qspFunc(s, \u0027time\u0027, \u0027get_time_string\u0027, 6, 0)+\u0027\u0027); return s; }); return false;">Diner Bystroeshka</a>';
  }
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 23) {
    (s as any).desc_txt3 = '<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027restoran\u0027, \u0027start\u0027); return false;">Babel</a>';
  } else {
    (s as any).desc_txt3 = '<a href="#" onclick="window.__gameStore.setState((s) => { alert(\u0027Babel is closed and will reopen at \u0027+qspFunc(s, \u0027time\u0027, \u0027get_time_string\u0027, 8, 0)+\u0027\u0027); return s; }); return false;">Babel</a>';
  }
  scene.text(`A few buildings away is ${((s as any).desc_txt1 ?? '')} and ${((s as any).desc_txt2 ?? '')}, a place that sells cheap fast food. For a more lavish dining experience, ${((s as any).desc_txt3 ?? '')} is available.`);
  if (((s as any).week ?? 0) >= 4  &&  ((s as any).hour ?? 0) >= 18  ||  (((s as any).week ?? 0) >= 5  ||  ((s as any).week ?? 0) === 1)  &&  ((s as any).hour ?? 0) < 4) {
    (s as any).desc_txt3 = '<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027city_nightclub\u0027, \u0027start\u0027); return false;">the nightclub</a>';
  } else {
    (s as any).desc_txt3 = '<a href="#" onclick="window.__gameStore.setState((s) => { alert(\u0027The nightclub is closed and will open from Thursday to Sunday at \u0027+qspFunc(s, \u0027time\u0027, \u0027get_time_string\u0027, 18, 0)+\u0027\u0027); return s; }); return false;">The nightclub</a>';
  }
  scene.text(`The only place open here at night is ${((s as any).desc_txt3 ?? '')}.`);
  if ((((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 17)  ||  (((s as any).week ?? 0) === 6  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 14)) {
    (s as any).desc_txt1 = '<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027office\u0027, \u0027start\u0027); return false;">Titran-Express</a>';
  } else {
    if ((((s as any).week ?? 0) === 5  ||  ((s as any).week ?? 0) === 6)  &&  ((s as any).hour ?? 0) >= 17) {
      (s as any).desc_txt1 = '<a href="#" onclick="window.__gameStore.setState((s) => { alert(\u0027Titran-Express is closed and will reopen at \u0027+qspFunc(s, \u0027time\u0027, \u0027get_time_string\u0027, 8, 0)+\u0027 on Monday\u0027); return s; }); return false;">Titran-Express</a>';
    } else {
      (s as any).desc_txt1 = '<a href="#" onclick="window.__gameStore.setState((s) => { alert(\u0027Titran-Express is closed and will reopen at \u0027+qspFunc(s, \u0027time\u0027, \u0027get_time_string\u0027, 8, 0)+\u0027\u0027); return s; }); return false;">Titran-Express</a>';
    }
  }
  scene.text(`Across the street is considered the business area. The large skyscraper there serves as the base of operations for ${((s as any).desc_txt1 ?? '')}, an engineering company.`);
  if ((!((s as any).casting ?? 0))) {
    (s as any).desc_txt1 = 'Aurora talent agency';
  } else {
    if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) < 21) {
      (s as any).desc_txt1 = '<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027talent_agency\u0027, \u0027\u0027); return false;">Aurora talent agency</a>';
    } else {
      (s as any).desc_txt1 = '<a href="#" onclick="window.__gameStore.setState((s) => { alert(\u0027Aurora talent agency is closed and will reopen at \u0027+qspFunc(s, \u0027time\u0027, \u0027get_time_string\u0027, 7, 0)+\u0027\u0027); return s; }); return false;">Aurora talent agency</a>';
    }
  }
  if (((s as any).week ?? 0) < 6) {
    if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 19) {
      (s as any).desc_txt2 = '<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027bank\u0027, \u0027start\u0027); return false;">VTB bank</a>';
    } else {
      (s as any).desc_txt2 = '<a href="#" onclick="window.__gameStore.setState((s) => { alert(\u0027VTB bank is closed and will reopen at \u0027+qspFunc(s, \u0027time\u0027, \u0027get_time_string\u0027, 9, 0)+\u0027\u0027); return s; }); return false;">VTB bank</a>';
    }
  } else {
    (s as any).desc_txt2 = '<a href="#" onclick="window.__gameStore.setState((s) => { alert(\u0027VTB bank is closed and will reopen on monday at \u0027+qspFunc(s, \u0027time\u0027, \u0027get_time_string\u0027, 9, 0)+\u0027\u0027); return s; }); return false;">VTB bank</a>';
  }
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 23) {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).desc_txt3 = '<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(\u0027agentned\u0027, \u0027start\u0027); return false;">Kirsanova Realty</a>';
  } else {
    (s as any).desc_txt3 = '<a href="#" onclick="window.__gameStore.setState((s) => { alert(\u0027Kirsanova Realty is closed and will reopen at \u0027+qspFunc(s, \u0027time\u0027, \u0027get_time_string\u0027, 8, 0)+\u0027\u0027); return s; }); return false;">Kirsanova Realty</a>';
  }
  if ((((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 17)  ||  (((s as any).week ?? 0) === 6  &&  ((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 14)) {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    (s as any).desc_txt4 = '<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.3; return s; }); window.__gameStore.getState().doGoto(\u0027post_office\u0027, \u0027start\u0027); return false;">post office</a>';
  } else {
    if (((s as any).week ?? 0) === 6  &&  ((s as any).hour ?? 0) > 16  ||  ((s as any).week ?? 0) === 7  &&  ((s as any).hour ?? 0) < 12) {
      (s as any).desc_txt4 = '<a href="#" onclick="window.__gameStore.setState((s) => { alert(\u0027The post office is closed and will reopen at \u0027+qspFunc(s, \u0027time\u0027, \u0027get_time_string\u0027, 9, 0)+\u0027 on Monday\u0027); return s; }); return false;">post office</a>';
    } else {
      (s as any).desc_txt4 = '<a href="#" onclick="window.__gameStore.setState((s) => { alert(\u0027The post office is closed and will reopen at \u0027+qspFunc(s, \u0027time\u0027, \u0027get_time_string\u0027, 9, 0)+\u0027\u0027); return s; }); return false;">post office</a>';
    }
  }
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 19) {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).desc_txt5 = '<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(\u0027city_library\u0027, \u0027\u0027); return false;">National Library of Russia</a> and <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(\u0027city_hermitage\u0027, \u0027start\u0027); return false;">Hermitage Museum</a>';
  } else {
    (s as any).desc_txt5 = '<a href="#" onclick="window.__gameStore.setState((s) => { alert(\u0027The National Library of Russia is closed and will reopen at \u0027+qspFunc(s, \u0027time\u0027, \u0027get_time_string\u0027, 8, 0)+\u0027\u0027); return s; }); return false;">National Library of Russia</a> and <a href="#" onclick="window.__gameStore.setState((s) => { alert(\u0027The Hermitage Museum is closed and will reopen at \u0027+qspFunc(s, \u0027time\u0027, \u0027get_time_string\u0027, 8, 0)+\u0027\u0027); return s; }); return false;">Hermitage Museum</a>';
  }
  scene.text(`Next door is the ${((s as any).desc_txt1 ?? '')} followed by a ${((s as any).desc_txt2 ?? '')}, ${((s as any).desc_txt3 ?? '')} and the 5-star <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027city_hotel/u0027, /u0027/u0027); return false;">Hotel Indigo</a> for your housing needs. Lastly, the local ${((s as any).desc_txt4 ?? '')}, ${((s as any).desc_txt5 ?? '')} can be found at the end of the road.`);
  if (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) < 18) {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).desc_txt6 = '<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(\u0027sentence\u0027, \u0027start\u0027); return false;">The City Courthouse</a>';
  } else {
    if (((s as any).week ?? 0) < 5  &&  ((s as any).hour ?? 0) >= 18) {
      (s as any).desc_txt6 = '<a href="#" onclick="window.__gameStore.setState((s) => { alert(\u0027The City Courthouse is closed and will reopen tomorrow at \u0027+qspFunc(s, \u0027time\u0027, \u0027get_time_string\u0027, 7, 0)+\u0027\u0027); return s; }); return false;">City Courthouse</a>';
    } else {
      (s as any).desc_txt6 = '<a href="#" onclick="window.__gameStore.setState((s) => { alert(\u0027The City Courthouse is closed and will reopen on Monday at \u0027+qspFunc(s, \u0027time\u0027, \u0027get_time_string\u0027, 7, 0)+\u0027\u0027); return s; }); return false;">City Courthouse</a>';
    }
  }
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  (s as any).desc_txt7 = '<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(\u0027police_station\u0027, \u0027start\u0027); return false;">Main city police station</a>';
  scene.text(`Away from the shops is both ${((s as any).desc_txt6 ?? '')} and the ${((s as any).desc_txt7 ?? '')}.`);
  scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(\u0027city_church\u0027, \u0027start\u0027); return false;">Kazan Cathedral</a>, also known as the Cathedral of Our Lady of Kazan, sits at the very center of the city.');
  if (((s as any).nichHotelReferral ?? 0) === 2  &&  ((s as any).nichWork ?? 0) !== 2  &&  ((s as any).nichWork ?? 0) !== 4) {
    if (((s as any).hour ?? 0) >= 4  &&  ((s as any).hour ?? 0) < 16) {
      scene.text('\'You could go to the apartment of a man named Nicholas to apply for a job as a live-in maid, but it\'s too early for that. You should come back between 16:00 and 21:00.\'');
    } else {
      if (((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) < 22) {
        scene.text('You could go to the <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027nichApartment\u0027, \u0027jobInterview\u0027); return false;">apartment of a man named Nicholas</a> to apply for a job as a live-in maid.');
      } else {
        scene.text('\'You could go to the apartment of a man named Nicholas to apply for a job as a live-in maid, but it\'s too late for that. You should come back between 16:00 and 21:00.\'');
      }
    }
  }
  if (((s as any).cfg_vars ?? 0)?.['tablemap'] === 0) {
    if (((s as any).nichTanya ?? 0)?.['Relationship'] > 0  &&  ((s as any).nichTanya ?? 0)?.['Relationship'] < 4  &&  ((s as any).nichWork ?? 0) !== 2  &&  ((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) < 22  &&  ((s as any).nichTanya ?? 0)?.['FuckLast'] !== ((s as any).daystart ?? 0)) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027nichApartment\u0027, \u0027visitTanya\u0027); return false;">Apartment where Tanya lives</a>.');
    }
    if (((s as any).nichWork ?? 0) === 2) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027nichApartment\u0027, \u0027\u0027); return false;">Nicholas\'s</a> apartment where you work as a live in maid.');
    }
    if (((s as any).izoldaQW ?? 0) >= 1) {
      scene.text('Your friend <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027qwIzoldaApp\u0027, \u0027\u0027); return false;">Isolde\'s</a> apartment.');
    }
    if (((s as any).mainQW ?? 0) >= 1) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027tatiana_lab\u0027, \u0027start\u0027); return false;">You can visit Tatiana</a> at the Myrkov Investigative Agency.');
    }
    if (((s as any).yaq ?? 0) === 1) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027yarik\u0027, \u0027start\u0027); return false;">Yaroslav</a> from the office\'s apartment.');
    }
    if (((s as any).peter ?? 0) > 0) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027peterroom\u0027, \u0027start_door\u0027); return false;">Peter</a> the sex shop owner\'s apartment.');
    }
  } else {
    (s as any).st_count = 0;
    (s as any).show_table = '';
    if (((s as any).nichTanya ?? 0)?.['Relationship'] > 0  &&  ((s as any).nichTanya ?? 0)?.['Relationship'] < 4  &&  ((s as any).nichWork ?? 0) !== 2  &&  ((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) < 22  &&  ((s as any).nichTanya ?? 0)?.['FuckLast'] !== ((s as any).daystart ?? 0)) {
      qspCall(s, 'show_table', '<a href="exec:gt \'nichApartment\', \'visitTanya\'">Apartment</a> where Tanya lives', '3');
    }
    if (((s as any).nichWork ?? 0) === 2) {
      qspCall(s, 'show_table', '<a href="exec:gt \'nichApartment\'">Nicholas\'s</a> apartment', '3');
    }
    if (((s as any).izoldaQW ?? 0) >= 1) {
      qspCall(s, 'show_table', '<a href="exec:gt \'qwIzoldaApp\'">Isolde\'s</a> apartment', '3');
    }
    if (((s as any).mainQW ?? 0) >= 1) {
      qspCall(s, 'show_table', '<a href="exec:gt \'tatiana_lab\', \'start\'">You can visit Tatiana</a> at the Myrkov Investigative Agency.', '3');
    }
    if (((s as any).yaq ?? 0) === 1) {
      qspCall(s, 'show_table', '<a href="exec:gt \'yarik\', \'start\'">Yaroslav\'s</a> apartment', '3');
    }
    if (((s as any).peter ?? 0) > 0) {
      qspCall(s, 'show_table', '<a href="exec:gt \'peterroom\', \'start_door\'">Peter\'s</a> apartment', '3');
    }
    if (((s as any).st_count ?? 0) > 0) {
      scene.text(`<table border=1>${((s as any).show_table ?? '')}</tr></table>`);
    }
  }
  if (((s as any).PSport ?? 0) === 1  &&  ((s as any).week ?? 0) >= 6  &&  ((s as any).AlexandriaQW ?? 0) === 15) {
    scene.actions([
      { label: 'Meet Ana by the courthouse', goto: ['alexandriaEv', 'anachase1'] },
    ]);
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
    case 'start':
      enterStart(s, scene);
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
