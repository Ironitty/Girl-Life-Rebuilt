import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_island', '');
  (s as any).location_type = 'public_outdoors';
  (s as any).region = 'city';
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
    scene.text(`Your <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027carF/u0027, /u0027start/u0027); return false;">${(((s as any).car ?? 0)?.['name'] ?? '')}</a> stands in the parking lot.`);
  }
  qspCall(s, 'taxi', '');
  qspCall(s, 'camera', 'check_location');
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 22) {
    scene.text('The <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=3; return s; }); window.__gameStore.getState().doGoto(\u0027uni_shop\u0027, \u0027start\u0027); return false;">supermarket</a> is not far from here.');
    scene.text('You can see a <a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: $loc = \u0027city_island\u0027 */ s.minut +=1; return s; }); window.__gameStore.getState().doGoto(\u0027kiosk\u0027, \u0027start\u0027); return false;">kiosk</a> selling cigarettes and magazines.');
  } else {
    scene.text('\'The local convenience store is closed. It will reopen at 8:00.\'');
    scene.text('\'You can see a closed kiosk. It\'s open between 8:00 and 23:00.\'');
  }
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 22) {
    scene.text('You can see <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027shop_dolls\u0027, \u0027start\u0027); return false;">Patch Work Dolls</a>, a clothing store that caters to Alternative styles, like gothic, punk and skater. Next door is <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027shop_nerdvana\u0027, \u0027start\u0027); return false;">Nerdvana</a>, a clothing store that stock everything a nerd could desire.');
  } else {
    scene.text('\'You can see Patch Work Dolls, a clothing store that caters to Alternative styles, like gothic, punk and skater. Next door is Nerdvana, the nerd clothing store. They\'re both open every day between 8:00 and 22:00\'');
  }
  if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) < 22) {
    scene.text('You can see a sign advertising a coffee shop called <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=3; return s; }); window.__gameStore.getState().doGoto(\u0027city_coffee_hole\u0027, \u0027\u0027); return false;">The Coffee Hole</a> just a few blocks away from the university.');
  } else {
    scene.text('\'The Coffee Hole is closed. They reopen at 7:00.\'');
  }
  scene.text('The <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=5; return s; }); window.__gameStore.getState().doGoto(\u0027metro\u0027, \u0027island\u0027); return false;">Metro</a> Station is within a 5 minute walk from here.');
  if (((s as any).anushkaCityQW ?? 0)?.['first_visit'] > 0) {
    scene.text('Anushka lives in <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=1; return s; }); window.__gameStore.getState().doGoto(\u0027anushapt_city\u0027, \u0027home\u0027); return false;">a shared apartment</a> around the corner.');
  }
  if (qspFunc(s, 'homes_properties', 'has_access', 'university_dorm')  ||  ((s as any).university ?? 0)?.['student'] === 1  ||  ((s as any).hour ?? 0) >= 6) {
    scene.text('The <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027uni_dorm\u0027, \u0027\u0027); return false;">University dorms</a> offers small, but cheap living space for university students.');
  }
  if (((s as any).pcs_magik ?? 0) >= 1  &&  ((s as any).mainQW ?? 0) === 0  &&  ((s as any).start_type ?? 0)?.['loc'] === 'uni') {
    (s as any).mainQW = 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/lab/event/main.jpg');
    scene.text('You see Tatiana and Gustav standing in front of your dorm. Tatiana adjusts her glasses and looks around, while Gustav seems to be distracted, glancing here and there with a strange look on his face. You notice his tattoos are not visible.');
    scene.text('Tatiana looks at you closely. "I felt a burst of energy. Were you attacked by a magician?"');
    scene.actions([
{ label: 'No', goto: ['mainQW', ''] },
]);
    return;
  }
  qspCall(s, 'lover', 'lover_events');
  scene.actions([
    { label: 'Walk to the Metro', goto: ['metro', 'island'] },
    { label: 'Walk to the canals (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_canals', 'start'] },
    { label: 'Go to the university campus', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspGoto(st, 'uni_grounds', '');
  } },
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
