import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
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
  qspCall(s, 'core_library', 'setloc', 'city_redlight', 'start');
  qspCall(s, 'stat', '');
  scene.text('<center><h2>St. Petersburg</h2></center>');
  scene.text('<center><b>Red Light District</b></center>');
  scene.img('images/locations/city/redlight/redlight.jpg');
  scene.text('This small area inside the Industrial District is home to strip clubs, adult stores and other seedy businesses.');
  if (((s as any).hour ?? 0) >= 18  ||  ((s as any).hour ?? 0) < 3) {
    scene.text('The bright lights and booming music of the <a href="exec:gt \'stripclub\', \'start\'">Golden Girls</a> strip club attract men from all over the city.');
  } else {
    if ((((s as any).job_status ?? 0)?.['city_strip_stripper'] === 'employed'  &&  qspFunc(s, 'jobs', 'is_arrival_time', 'city_strip_stripper') === 1)  ||  (((s as any).job_status ?? 0)?.['city_strip_bargirl'] === 'employed'  &&  qspFunc(s, 'jobs', 'is_arrival_time', 'city_strip_bargirl') === 1)) {
      scene.text('The <a href="exec:gt \'stripclub\', \'start\'">Golden Girls</a> strip club is still closed, but you can get in through the staff entrance.');
    } else {
      // TODO-QSP: dynamic text: The strip club is closed for the day and will reopen at ' + func('time', 'get_ti...
      scene.text('The strip club is closed for the day and will reopen at \' + func(\'time\', \'get_time_string\', 18, 0) + \'.');
    }
  }
  if (((s as any).pornstudio ?? 0) > 0) {
    if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 22) {
      scene.text('The <a href="exec:gt \'pornstudio\'">porn studio</a> is housed within one of the few warehouses that hasn\'t been abandoned.');
    } else {
      // TODO-QSP: dynamic text: The porn studio is closed and will reopen at ' + func('time', 'get_time_string',...
      scene.text('The porn studio is closed and will reopen at \' + func(\'time\', \'get_time_string\', 9, 0) + \'.');
    }
  }
  if (((s as any).hour ?? 0) < 3  ||  ((s as any).hour ?? 0) >= 11) {
    // TODO-QSP: dynamic text: A <a href="exec:minut += 1 & gt 'shop_erotomaniac', 'start'">seedy looking shop<...
    scene.text('A <a href="exec:minut += 1 & gt \'shop_erotomaniac\', \'start\'">seedy looking shop</a> that sells sex toys and other erotic merchandise is open for perverts from all around the city to browse its stock.');
  } else {
    // TODO-QSP: dynamic text: A seedy looking shop that sells sex toys and other erotic merchandise. It is cur...
    scene.text('A seedy looking shop that sells sex toys and other erotic merchandise. It is currently closed and will reopen at \' + func(\'time\', \'get_time_string\', 11, 0) + \'.');
  }
  if (((s as any).bordel ?? 0) > 0  &&  qspFunc(s, 'bordel', 'is_open')) {
    scene.text('Hidden inside a courtyard is the entrance to the <a href="exec:gt \'bordel\'">brothel</a>.');
  }
  if (((s as any).hour ?? 0) >= 10) {
    scene.text('A small <a href="exec:gt \'city_redlight\',\'city_copy_shop\'">printing shop</a> is tucked away between two larger buildings.');
  } else {
    // TODO-QSP: dynamic text: A small printing shop is tucked away between two larger buildings. It is current...
    scene.text('A small printing shop is tucked away between two larger buildings. It is currently closed and will reopen at \'+func(\'time\', \'get_time_string\', 10, 0)+\'.');
  }
  if (((s as any).hour ?? 0) >= 19  ||  ((s as any).hour ?? 0) < 2) {
    scene.text('A <a href="exec:gt \'hookahlounge\', \'start\'">Hookah Lounge</a> sits on a corner, with Indian music and the scent of exotic spices streaming from an open door.');
  } else {
    // TODO-QSP: dynamic text: The Hookah Lounge is currently closed and will reopen at ' + func('time', 'get_t...
    scene.text('The Hookah Lounge is currently closed and will reopen at \' + func(\'time\', \'get_time_string\', 19, 0) + \'.');
  }
  qspCall(s, 'taxi', '');
  if (qspFunc(s, 'car_funcs', 'is_here', 'fuelstation', 'start')) {
    // TODO-QSP: dynamic text: Your <a href="exec:minut += 5 & gs 'carF', 'start'"><<$car['name']>></a> is park...
    scene.text(`Your <a href="exec:minut += 5 & gs 'carF', 'start'">${((s as any).car ?? 0)?.['name']}</a> is parked near the gas station.`);
  } else {
    if (qspFunc(s, 'car_funcs', 'is_here', 'city_redlight', 'start')) {
      // TODO-QSP: dynamic text: Your <a href="exec:gs 'carF', 'start'"><<$car['name']>></a> sits in the parking ...
      scene.text(`Your <a href="exec:gs 'carF', 'start'">${((s as any).car ?? 0)?.['name']}</a> sits in the parking lot.`);
    } else {
      if (qspFunc(s, 'car_funcs', 'is_here', 'autoservisF', 'start')) {
        if (qspFunc(s, 'autoservisF', 'is_open')) {
          // TODO-QSP: dynamic text: Your <a href="exec:minut += 5 & gs 'carF', 'start'"><<$car['name']>></a> is park...
          scene.text(`Your <a href="exec:minut += 5 & gs 'carF', 'start'">${((s as any).car ?? 0)?.['name']}</a> is parked at the car service center.`);
        } else {
          scene.text('It looks like the repair shop moved your car outside before they closed.');
          (s as any).car['loc'] = 'city_industrial';
          (s as any).car['loc_arg'] = '';
        }
      } else {
        if (qspFunc(s, 'car_funcs', 'is_here', 'autotraidF', 'start')) {
          if (qspFunc(s, 'autotraidF', 'is_open')) {
            // TODO-QSP: dynamic text: Your <a href="exec:minut += 5 & gs 'carF', 'start'"><<$car['name']>></a> is park...
            scene.text(`Your <a href="exec:minut += 5 & gs 'carF', 'start'">${((s as any).car ?? 0)?.['name']}</a> is parked at the car dealership.`);
          } else {
            scene.text('It looks like the car dealership moved your car outside before they closed.');
            (s as any).car['loc'] = 'city_industrial';
            (s as any).car['loc_arg'] = '';
          }
        }
      }
    }
  }
  if (qspFunc(s, 'car_funcs', 'is_here', 'city_industrial', '')) {
    // TODO-QSP: dynamic text: Your <a href="exec:minut += 5 & gs 'carF', 'start'"><<$car['name']>></a> stands ...
    scene.text(`Your <a href="exec:minut += 5 & gs 'carF', 'start'">${((s as any).car ?? 0)?.['name']}</a> stands nearby in a parking lot at the redlight district.`);
  }
  if (((s as any).hour ?? 0) >= 20  ||  ((s as any).hour ?? 0) <= 4) {
    scene.text('Prostitutes are working near here.');
    if (((s as any).pcs_makeup ?? 0) > 2  &&  (((s as any).PCloStyle ?? 0) === 4  ||  ((s as any).PCloProstitute ?? 0) === 1)  &&  ((s as any).pcs_inhib ?? 0) >= 40) {
      scene.actions([
        { label: 'Prostitute yourself', handler: (st: GameState) => {
    (st as any).prst_loc = 1;
  }, goto: ['street_walker', 'work'] },
      ]);
    } else {
      if (((s as any).pcs_inhib ?? 0) >= 40) {
        scene.text('You could work as a prostitute, but you need to wear appropriate clothes and more than a little bit of makeup.');
      } else {
        scene.text('You could work as a prostitute, but you aren\'t comfortable with the idea.');
      }
    }
  }
  scene.actions([
    { label: 'Walk to the Industrial Region (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_industrial', ''] },
  ]);
  scene.build();
}

function enterCityCopyShop(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/redlight/bm_seller.jpg');
  scene.text('You enter the run-down looking copy shop and look around. Scattered across the room are small tables with various dusty looking copy machines that don\'t strike you as being very reliable. Watching you from behind a counter is a bored looking man with greasy hair and a sleazy look.');
  if (((s as any).fakepassport ?? 0) === 2) {
    (s as any).fakepassport = 0;
    // TODO-QSP: dynamic text: He gives you a hard stare. "A fake passport will cost you ' + $func('money', 'st...
    scene.text('He gives you a hard stare. "A fake passport will cost you \' + $func(\'money\', \'string_price\', 30000) + \'," he says quietly.');
  }
  if (((s as any).university ?? 0)?.['fakediplom'] === 2) {
    (s as any).university['fakediplom'] = 0;
    // TODO-QSP: dynamic text: "A diploma for a bachelor's degree will cost you ' + $func('money', 'string_pric...
    scene.text('"A diploma for a bachelor\'s degree will cost you \' + $func(\'money\', \'string_price\', 100000) + \'," he says quietly.');
  }
  if (((s as any).age ?? 0) < 18  &&  ((s as any).fakepassport ?? 0) !== 1) {
    scene.actions([
      { label: 'Buy fake passport [+$func(\'money\', \'get_cost_string\', 30000,...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 30000, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 60;
      qspCall(s, 'money', 'pay', 30000, 'cash');
      (s as any).fakepassport = 1;
      scene.img('images/locations/city/redlight/bm_seller.jpg');
      scene.text('He tells you to come in the back and takes a quick photo of your face, then tells you to wait out front until he\'s done. About an hour goes by before he steps back out and hands you the passport, which shows your face but has an older age printed on it.');
      scene.actions([
        { label: 'Leave', goto: ['city_redlight', 'start'] },
      ]);
    }
  } },
    ]);
  }
  if (((s as any).university ?? 0)?.['diploma'] === 0  &&  ((s as any).university ?? 0)?.['fakediplom'] === 0) {
    scene.actions([
      { label: 'Buy fake diploma [+$func(\'money\', \'get_cost_string\', 100000...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 100000, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 60;
      qspCall(s, 'money', 'pay', 100000, 'cash');
      (s as any).university['fakediplom'] = 1;
      scene.img('images/locations/city/redlight/bm_seller.jpg');
      scene.text('You buy a fake diploma.');
      scene.actions([
        { label: 'Leave', goto: ['city_redlight', 'start'] },
      ]);
    }
  } },
    ]);
  }
  scene.actions([
    { label: 'Leave', goto: ['city_redlight', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'city_copy_shop':
      enterCityCopyShop(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const city_redlight: LocationDef = {
  name: 'city_redlight',
  title: '<center><h2>St. Petersburg</h2></center>',
  region: 'city',
  locationType: 'public_outdoors',
  description: ['This small area inside the Industrial District is home to strip clubs, adult stores and other seedy businesses.'],
  enter: enter,
};
