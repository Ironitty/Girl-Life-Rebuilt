import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_park', 'start');
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
  qspCall(s, 'music_actions', 'clear_restrictions');
  if ((!((s as any).WalkInsidePark ?? 0))) {
    (s as any).WalkInsidePark = 1;
  }
  qspCall(s, 'stat', '');
  scene.text('<center><b>Park</b></center>');
  scene.img('images/locations/city/centralpark/park.jpg');
  scene.text('The central park is huge. Sandy paths spread out in every direction, and every so often you\'ll find a bench to take a seat. In the summer, you\'ll see a lot people playing ball, relaxing, or have a picnic in the more open areas, while in the winter you\'ll meet families with their children sledding down the grass banks.');
  scene.text('Despite its almost paradise-like appearance, the park can be very dangerous once the sun goes down.');
  scene.text('There is a sign that points in the general direction of the city center. You estimate the walk to the city center would take 35 minutes.');
  scene.text('The second sign points in the direction of the residential area. If you had to guess, the walk to the residential would take 20 minutes.');
  scene.text('The third sign says city industrial district on it. You estimate that the walk would take at least an hour.');
  if (((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) <= 22) {
    scene.text('The small café in the park is open. You could sit there and have some food.');
  }
  if (((s as any).drugVars ?? 0)?.['city_drugden'] === 0) {
    scene.text('The <a href="exec: gt \'city_park\', \'junkies\'">junkies</a> hang out near the cafe.');
  }
  if (((s as any).hour ?? 0) >= 9  ||  ((s as any).hour ?? 0) <= 20) {
    scene.text('There is an all year <a href="exec:gt \'city_park\', \'luna\'">fair</a> at the park which you can visit.');
  } else {
    // TODO-QSP: dynamic text: There is an all year fair at the park, but it's currently closed. Opening hours ...
    scene.text('There is an all year fair at the park, but it\'s currently closed. Opening hours are from \'+func(\'time\', \'get_time_string\', 9, 0)+\' to \'+func(\'time\', \'get_time_string\', 21, 0)+\'.');
  }
  if (qspFunc(s, 'car_funcs', 'is_here')) {
    // TODO-QSP: dynamic text: <a href="exec:gs 'carF', 'start'">Your <<$car['name']>></a> is parked nearby.
    scene.text(`<a href="exec:gs 'carF', 'start'">Your ${((s as any).car ?? 0)?.['name']}</a> is parked nearby.`);
  }
  if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).PCloSkirt ?? 0) > 2  &&  ((s as any).hour ?? 0) > 6  &&  ((s as any).hour ?? 0) <= 20  &&  (Math.floor(Math.random() * 101) + 0) >= 80) {
    qspCall(s, 'arousal', 'flash', (-5));
    scene.text('A man walks past you and notices that you didn\'t put on any panties.');
    scene.text('He whistles at you. "Did you forget to put on your underwear today, honey?"');
    if (((s as any).pcs_inhib ?? 0) >= 35) {
      qspCall(s, 'flash', 'butt', 'outdoors', 2, 2);
      qspCall(s, 'mood', 'raise', 'tiny');
      scene.text('"Nope!" you call back. "Just remembered not to!"');
      scene.text('You flip up the back of your skirt, flashing your ass at him before you keep walking with a bit of a spring in your step.');
    } else {
      if (((s as any).pcs_inhib ?? 0) > 30) {
        (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (1);
        scene.text('"Nah, just didn\'t feel like it," you shrug and continue on your way.');
      } else {
        qspCall(s, 'mood', 'lower', 'tiny');
        scene.text('You blush with shame and try to walk out of his sight as fast as possible.');
      }
    }
  }
  qspCall(s, 'treeCircEntry', 'CentralPark');
  if (((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) <= 22) {
    scene.actions([
      { label: 'Have some food in the café', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['ParkKafe', 'start'] },
    ]);
  }
  if (((s as any).hour ?? 0) >= 20  ||  ((s as any).hour ?? 0) < 6) {
    if (((s as any).home ?? 0)?.['current'] === ''  &&  ((s as any).tanwork ?? 0) === 0  &&  qspFunc(s, 'uniutil', 'student', 'not_enrolled')) {
      scene.text('It\'s quite dark now, and you have nowhere to stay nearby. Maybe you should try to sleep on a bench?');
    } else {
      scene.text('It\'s quite dark now, and you don\'t feel like walking. Maybe you should try to sleep on a bench?');
    }
    scene.actions([
      { label: 'Sleep on a bench', goto: ['placer_sex', 'sleeping_park_bench'] },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['joints'] > 0  &&  ((s as any).drugVars ?? 0)?.['weed_high'] === 0) {
    scene.actions([
      { label: 'Smoke a joint', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'drugs', 'joint');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  if (((s as any).pusher ?? 0) === 1  &&  ((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 21) {
    scene.text('There\'s a drug dealer casually sitting on one of the benches. He\'s trying not to be too suspicious.');
    scene.actions([
      { label: 'Buy "Pale Lady" aka cocaine [+$func(\'money\', \'get_cost_string\', 360)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 360) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 10;
      (s as any).temp_doses = 0;
      if (qspFunc(s, 'money', 'can_afford', ((s as any).temp_doses ?? 0) * 360) !== 1  ||  ((s as any).temp_doses ?? 0) <= 0) {
        scene.text('"Either tell me how many you want to buy or get lost!"');
      } else {
        // TODO-QSP: gs 'money', 'pay', temp_doses * 360
        (s as any).mc_inventory['cocaine'] = ((s as any).mc_inventory['cocaine'] ?? 0) + (((s as any).temp_doses ?? 0));
        scene.text('You quickly pull your purse out and pay him, hoping nobody saw you giving him money, and he passes you the doses you\'ve paid for. You can safely sniff the stuff at home.');
      }
      scene.actions([
        { label: 'Casually walk away', goto: ['city_park', 'start'] },
      ]);
    }
  } },
    ]);
  }
  if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 22  &&  ((s as any).parkrunday ?? 0) !== ((s as any).daystart ?? 0)) {
    if ((!((s as any).PSport ?? 0))) {
      scene.text('You could go for a run in the park if you were wearing sports clothes and shoes.');
    } else {
      if (((s as any).pcs_stam ?? 0) < ((s as any).stammax ?? 0) / 5) {
        scene.actions([
          { label: 'Go for a run in the park (1:00)', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You''re too exhausted to do this. ...
  } },
        ]);
      } else {
        if (((s as any).pcs_energy ?? 0) < 10) {
          scene.actions([
            { label: 'Go for a run in the park (1:00)', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You''re so hungry you can''t face ...
  } },
          ]);
        } else {
          if (((s as any).pcs_hydra ?? 0) < 10) {
            scene.actions([
              { label: 'Go for a run in the park (1:00)', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You''re so thirsty you can''t face...
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Go for a run in the park (1:00)', goto: ['city_park', 'run'] },
            ]);
          }
        }
      }
    }
  }
  qspCall(s, 'music_actions', 'start');
  if (((s as any).hour ?? 0) >= 21  ||  ((s as any).hour ?? 0) < 8) {
    // TODO-QSP: If succubusQW = 14 and suchuntday ! daystart:
    scene.actions([
      { label: 'Go hunting (this can take a lot of time)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (40 + ((s as any).rand ?? 0)(0, 20) - 5 * ((s as any).succublvl ?? 0));
    qspCall(s, 'stat', '');
    if ((Math.floor(Math.random() * 8) + 0) - ((s as any).succublvl ?? 0) < 2) {
      (s as any).suchunt = 1;
      scene.actions([{ label: 'Continue', goto: ['park_walkevents', '1'] }]);
    } else {
      qspCall(s, 'mood', 'lower', 'tiny');
      scene.text('No luck! After searching for half an hour, you find no one. For such a large city, you would have thought there would be more suitable prey around. Your needs remain, so maybe another search will be required?');
      scene.actions([
        { label: 'Continue', goto: ['city_park', 'start'] },
      ]);
    }
  } },
    ]);
  }
  if (((s as any).knowsfairy ?? 0) >= 1  &&  ((s as any).pcs_magik ?? 0) > 4) {
    scene.actions([
      { label: 'Find a place the Fairy may be', handler: (st: GameState) => {
    (st as any).fairylooking = 1;
  }, goto: ['park_walkeventsrnd', ''] },
    ]);
  }
  scene.actions([
    { label: 'Walk to the Residential Area (0:20)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
  }, goto: ['city_residential', ''] },
    { label: 'Walk to the City Center (0:35)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 35;
  }, goto: ['city_center', ''] },
    { label: 'Walk to the City Industrial Region (1:00)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
  }, goto: ['city_industrial', ''] },
    { label: 'Walk around the park (1:00)', goto: ['park_walkeventsrnd', ''] },
    { label: 'Sit on a bench', goto: ['placer_sex', 'sitting_park_bench'] },
  ]);
  scene.build();
}

export const city_park: LocationDef = {
  name: 'city_park',
  title: 'Park',
  region: 'city',
  locationType: 'event_outdoors',
  locclass: 'city_park',
  description: ['The central park is huge. Sandy paths spread out in every direction, and every so often you\'ll find a bench to take a seat. In the summer, you\'ll see a lot people playing ball, relaxing, or have a picnic in the more open areas, while in the winter you\'ll meet families with their children sledding down the grass banks.'],
  enter: enter,
};
