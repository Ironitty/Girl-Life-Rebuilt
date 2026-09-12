import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_island', '');
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    if (((s as any).month ?? 0) >= 11  &&  ((s as any).month ?? 0) <= 12  ||  ((s as any).month ?? 0) >= 1  &&  ((s as any).month ?? 0) <= 3) {
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
  scene.text('<center><h2>St. Petersburg</h2></center>');
  scene.text('<center><b>Vasilyevsky Island</b></center>');
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
    if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
      scene.img('images/locations/city/island/islandw.jpg');
    } else {
      scene.img('images/locations/city/island/islandwn.jpg');
    }
  } else {
    if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
      scene.img('images/locations/city/island/island.jpg');
    } else {
      scene.img('images/locations/city/island/islandn.jpg');
    }
  }
  scene.text('The university and shops and clubs that cater to the students dominate this area of the city.');
  qspCall(s, 'random_events', '');
  if (qspFunc(s, 'homes_properties', 'has_access', 'university_dorm')) {
    scene.actions([
      { label: 'Return to your dorm', goto: ['uni_dorm', ''] },
    ]);
  }
  if (qspFunc(s, 'car_funcs', 'is_here')) {
    // TODO-QSP: dynamic text: Your <a href="exec:gs 'carF', 'start'"><<$car['name']>></a> stands in the parkin...
    scene.text(`Your <a href="exec:gs 'carF', 'start'">${((s as any).car ?? 0)?.['name']}</a> stands in the parking lot.`);
  }
  qspCall(s, 'taxi', '');
  qspCall(s, 'camera', 'check_location');
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 22) {
    // TODO-QSP: dynamic text: The <a href="exec: minut += 3 & gt 'uni_shop', 'start'">supermarket</a> is not f...
    scene.text('The <a href="exec: minut += 3 & gt \'uni_shop\', \'start\'">supermarket</a> is not far from here.');
    // TODO-QSP: dynamic text: You can see a <a href="exec:$loc = 'city_island' & minut += 1 & gt 'kiosk', 'sta...
    scene.text('You can see a <a href="exec:$loc = \'city_island\' & minut += 1 & gt \'kiosk\', \'start\'">kiosk</a> selling cigarettes and magazines.');
  } else {
    // TODO-QSP: dynamic text: The local convenience store is closed. It will reopen at '+func('time', 'get_tim...
    scene.text('The local convenience store is closed. It will reopen at \'+func(\'time\', \'get_time_string\', 8, 0)+\'.');
    // TODO-QSP: dynamic text: You can see a closed kiosk. It's open between '+func('time', 'get_time_string', ...
    scene.text('You can see a closed kiosk. It\'s open between \'+func(\'time\', \'get_time_string\', 8, 0)+\' and \'+func(\'time\', \'get_time_string\', 23, 0)+\'.');
  }
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 22) {
    scene.text('You can see <a href="exec:gt \'shop_dolls\', \'start\'">Patch Work Dolls</a>, a clothing store that caters to Alternative styles, like gothic, punk and skater. Next door is <a href="exec:gt \'shop_nerdvana\', \'start\'">Nerdvana</a>, a clothing store that stock everything a nerd could desire.');
  } else {
    // TODO-QSP: dynamic text: You can see Patch Work Dolls, a clothing store that caters to Alternative styles...
    scene.text('You can see Patch Work Dolls, a clothing store that caters to Alternative styles, like gothic, punk and skater. Next door is Nerdvana, the nerd clothing store. They\'re both open every day between \'+func(\'time\', \'get_time_string\', 8, 0)+\' and \'+func(\'time\', \'get_time_string\', 22, 0)+\'');
  }
  if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) < 22) {
    // TODO-QSP: dynamic text: You can see a sign advertising a coffee shop called <a href="exec: minut += 3 & ...
    scene.text('You can see a sign advertising a coffee shop called <a href="exec: minut += 3 & gt \'city_coffee_hole\'">The Coffee Hole</a> just a few blocks away from the university.');
  } else {
    // TODO-QSP: dynamic text: The Coffee Hole is closed. They reopen at '+func('time', 'get_time_string', 7, 0...
    scene.text('The Coffee Hole is closed. They reopen at \'+func(\'time\', \'get_time_string\', 7, 0)+\'.');
  }
  // TODO-QSP: dynamic text: The <a href="exec:minut += 5 & gt 'metro', 'island'">Metro</a> Station is within...
  scene.text('The <a href="exec:minut += 5 & gt \'metro\', \'island\'">Metro</a> Station is within a 5 minute walk from here.');
  if (((s as any).anushkaCityQW ?? 0)?.['first_visit'] > 0) {
    // TODO-QSP: dynamic text: Anushka lives in <a href="exec:minut += 1 & gt 'anushapt_city', 'home'">a shared...
    scene.text('Anushka lives in <a href="exec:minut += 1 & gt \'anushapt_city\', \'home\'">a shared apartment</a> around the corner.');
  }
  if (qspFunc(s, 'homes_properties', 'has_access', 'university_dorm')  ||  ((s as any).university ?? 0)?.['student'] === 1  ||  ((s as any).hour ?? 0) >= 6) {
    scene.text('The <a href="exec:gt \'uni_dorm\'">University dorms</a> offers small, but cheap living space for university students.');
  }
  if (((s as any).pcs_magik ?? 0) >= 1  &&  ((s as any).mainQW ?? 0) === 0  &&  ((s as any).start_type ?? 0)?.['loc'] === 'uni') {
    (s as any).mainQW = 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/lab/event/main.jpg');
    scene.text('You see Tatiana and Gustav standing in front of your dorm. Tatiana adjusts her glasses and looks around, while Gustav seems to be distracted, glancing here and there with a strange look on his face. You notice his tattoos are not visible.');
    scene.text('Tatiana looks at you closely. "I felt a burst of energy. Were you attacked by a magician?"');
    return;
    scene.actions([
      { label: 'No', goto: ['mainQW', ''] },
    ]);
  }
  qspCall(s, 'lover', 'lover_events');
  scene.actions([
    { label: 'Walk to the Metro', goto: ['metro', 'island'] },
    { label: 'Walk to the canals (0:05)', handler: (st: GameState) => {
    // TODO-QSP: minut + 5
  }, goto: ['city_canals', 'start'] },
    { label: 'Go to the university campus', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['uni_grounds', ''] },
  ]);
  scene.build();
}

export const city_island: LocationDef = {
  name: 'city_island',
  title: '<center><h2>St. Petersburg</h2></center>',
  region: 'city',
  locationType: 'public_outdoors',
  description: ['The university and shops and clubs that cater to the students dominate this area of the city.'],
  enter: enter,
};
