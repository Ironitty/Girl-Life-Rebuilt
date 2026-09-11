import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_lake', 'start');
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) < 4) {
      if (((s as any).hour ?? 0) < 8) {
      }
    } else {
      if (((s as any).hour ?? 0) < 8) {
      }
    }
  }
  qspCall(s, 'stat', '');
  scene.text('<center><h2>Lake</h2></center>');
  scene.img('images/locations/city/residential/lake/lake2.jpg');
  scene.text('A large lake close to the city, it is a favorite destination of residents in the summer.');
  if (((s as any).PSwim ?? 0) === 1  ||  ((s as any).clothingworntype ?? 0) === 'nude') {
    scene.text('You can see the winding path leading to the railway station in the industrial region. You should get dressed into your clothes if you want to go there.');
  } else {
    // TODO-QSP: dynamic text: There is a winding path leading to the <a href="exec:minut += 60 & gt 'city_indu...
    scene.text('There is a winding path leading to the <a href="exec:minut += 60 & gt \'city_industrial_train\',\'outside\'">railway station</a> in the city industrial region.');
  }
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 18) {
    // TODO-QSP: dynamic text: There is a branch of the swimwear chain <a href="exec: minut += 3 & gt 'shop_all...
    scene.text('There is a branch of the swimwear chain <a href="exec: minut += 3 & gt \'shop_allure\', \'start\'">Allure</a> here');
  } else {
    // TODO-QSP: dynamic text: There is a branch of the swimwear chain Allure here, but it is currently closed....
    scene.text('There is a branch of the swimwear chain Allure here, but it is currently closed. It will reopen at \'+func(\'time\', \'get_time_string\', 8, 0)+\'.');
  }
  if (qspFunc(s, 'car_funcs', 'is_here')) {
    if ((!((s as any).PSwim ?? 0))) {
      // TODO-QSP: dynamic text: <a href="exec:gs 'carF', 'start'">Your <<$car['name']>></a> is parked near the l...
      scene.text(`<a href="exec:gs 'carF', 'start'">Your ${((s as any).car ?? 0)?.['name']}</a> is parked near the lake.`);
    } else {
      // TODO-QSP: dynamic text: Your <<$car['name']>> is parked nearby. You should get dressed into your clothes...
      scene.text(`Your ${((s as any).car ?? 0)?.['name']} is parked nearby. You should get dressed into your clothes if you want to drive away.`);
    }
  }
  if (qspFunc(s, 'changingroom', 'count_swim_item') > 0  ||  ((s as any).clothingworntype ?? 0) === 'nude'  ||  ((s as any).PSwim ?? 0) === 1) {
    scene.actions([
      { label: 'Use changing room', goto: ['changingroom', ''] },
    ]);
  } else {
    scene.text('You should buy some swimwear if you intend on spending time at the beach.');
  }
  if (((s as any).npc_QW ?? 0)?.['A192'] === 3  &&  ((s as any).temper ?? 0) >= 15  &&  (((s as any).PSwim ?? 0) === 1)  &&  ((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 20) {
    scene.text('<a href="exec:gt \'nastja\', \'pos14\'">Anastasia</a> is waving her hand at you.');
  }
  if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 20) {
    // TODO-QSP: dynamic text: There are various '+iif(PSwim = 1, '<a href="exec:minut += 5 & gt 'city_lake', '...
    scene.text('There are various \'+iif(PSwim = 1, \'<a href="exec:minut += 5 & gt \'city_lake\', \'aquapark\'">water attractions</a>.\', \'water attractions, but you need to put on some swimwear before you go there.\')+\'');
    // TODO-QSP: dynamic text: You can go for a ride on a <a href="exec:minut += 1 & gt 'city_lake', 'horse'">h...
    scene.text('You can go for a ride on a <a href="exec:minut += 1 & gt \'city_lake\', \'horse\'">horse</a> along the beach.');
    // TODO-QSP: dynamic text: There is also a '+iif(pcs_inhib >= 30 or (trait_vars['exhibitionist'] > 1 and pc...
    scene.text('There is also a \'+iif(pcs_inhib >= 30 or (trait_vars[\'exhibitionist\'] > 1 and pcs_horny > 60), \'<a href="exec:gt \'Nudelake\'">nudist beach</a>\', \'nudist beach a short walk away, but you are\'t confident enough to go in that direction.\')+\'');
    if (((s as any).temper ?? 0) >= 15  &&  ((s as any).PSwim ?? 0) === 1) {
      scene.text('You can sunbathe or go for a swim.');
      if (((s as any).pcs_stam ?? 0) >= (20 * (10 - ((s as any).sport_clothes_exercise_bonus ?? 0))) / 2) {
        scene.actions([
          { label: 'Go for a swim', handler: (st: GameState) => {
    (s as any).pcs_makeup = 1;
    (s as any).cumspclnt = 4;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'exercise', 'tier1', 60, 'stren', 'vital');
    (s as any).pcs_sweat = 10 + ((s as any).rand ?? 0)(0, 4);
    if (((s as any).pcs_inhib ?? 0) < 40) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
    }
    scene.img(`images/pc/activities/swim/lake/swim_bikini_${Math.floor(Math.random() * 9) + 0}.jpg`);
    scene.text('You swim in the lake for an hour. The water refreshes and invigorates you.');
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the water.');
    }
    scene.actions([
      { label: 'Get out of the water', goto: ['city_lake', 'start'] },
    ]);
  } },
        ]);
      }
      if (((s as any).sunWeather ?? 0) === 1) {
        scene.actions([
          { label: 'Sunbathe', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    if (((s as any).pcs_inhib ?? 0) < 50) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
    }
    if (((s as any).pcs_sweat ?? 0) < 35) {
      qspCall(s, 'sweat', 'add', 5);
    }
    if (((s as any).pcs_hydra ?? 0) >= 100) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (10);
    } else {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (20);
    }
    qspCall(s, 'mood', 'raise', 'tiny');
    scene.img('images/locations/shared/lake/tanning_swimsuit.jpg');
    if (((s as any).mc_inventory ?? 0)?.['suncream'] === 0) {
      (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) + (1);
      scene.text('You lie on the beach and sunbathe for an hour.');
    } else {
      (s as any).mc_inventory['suncream'] = ((s as any).mc_inventory['suncream'] ?? 0) - (1);
      (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) + (3);
      scene.text('You apply sunblock to your body before sunbathing for an hour.');
    }
    (s as any).evrand = Math.floor(Math.random() * 101) + 0;
    if (((s as any).evrand ?? 0) <= 90  &&  ((s as any).evrand ?? 0) > 80  &&  ((s as any).temp ?? 0) >=20  &&  ((s as any).daystage ?? 0) === 3  &&  ((s as any).hour ?? 0) >= 19  &&  ((s as any).hour ?? 0) <= 21  &&  ((s as any).pcs_hotcat ?? 0) >= 7) {
      scene.actions([
        { label: 'Continue', goto: ['city_lake', 'volleyball_intro_nite'] },
      ]);
    } else {
      if (((s as any).evrand ?? 0) <= 80  &&  ((s as any).evrand ?? 0) > 60  &&  ((s as any).temp ?? 0) >= 8  &&  ((s as any).daystage ?? 0) === 3  &&  ((s as any).hour ?? 0) >= 19  &&  ((s as any).hour ?? 0) <= 3  &&  ((s as any).pcs_hotcat ?? 0) >= 7) {
        scene.actions([
          { label: 'Continue', goto: ['city_lake', 'bonfire'] },
        ]);
      } else {
        if (((s as any).evrand ?? 0) <= 60  &&  ((s as any).evrand ?? 0) > 40  &&  ((s as any).temp ?? 0) >= 20  &&  ((s as any).daystage ?? 0) === 2  &&  ((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) <= 19  &&  ((s as any).pcs_hotcat ?? 0) >= 7) {
          scene.actions([
            { label: 'Continue', goto: ['city_lake', 'volleyball_intro_day'] },
          ]);
        } else {
          if (((s as any).evrand ?? 0) <= 40  &&  ((s as any).andrei ?? 0) > 30) {
            scene.actions([
              { label: 'Continue', goto: ['city_lake', 'Andrei_intro'] },
            ]);
          } else {
            if (((s as any).evrand ?? 0) <= 30  &&  ((s as any).evrand ?? 0) > 20) {
              scene.actions([
                { label: 'Continue', goto: ['city_lake', 'vlake1'] },
              ]);
            } else {
              if (((s as any).evrand ?? 0) <= 20  &&  ((s as any).evrand ?? 0) > 10) {
                scene.actions([
                  { label: 'Continue', goto: ['city_lake', 'vlake2'] },
                ]);
              } else {
                scene.actions([
                  { label: 'Get up', goto: ['city_lake', 'start'] },
                ]);
              }
            }
          }
        }
      }
    }
  } },
        ]);
      }
      scene.actions([
        { label: 'Walk on the beach', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/lake/lake.jpg');
    scene.text('You go for a walk along the shore.');
    (s as any).walkrand = Math.floor(Math.random() * 101) + 0;
    if (((s as any).walkrand ?? 0) >= 60  &&  ((s as any).walkrand ?? 0) < 70  &&  ((s as any).temp ?? 0) >= 8  &&  ((s as any).daystage ?? 0) === 3  &&  ((s as any).hour ?? 0) >= 19  &&  ((s as any).hour ?? 0) <= 3  &&  ((s as any).pcs_hotcat ?? 0) >= 7) {
      scene.actions([
        { label: 'Continue', goto: ['city_lake', 'bonfire'] },
      ]);
    } else {
      if (((s as any).walkrand ?? 0) >= 70  &&  ((s as any).walkrand ?? 0) < 80  &&  ((s as any).temp ?? 0) >= 20  &&  ((s as any).daystage ?? 0) === 3  &&  ((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) <= 19  &&  ((s as any).pcs_hotcat ?? 0) >= 7) {
        scene.actions([
          { label: 'Continue', goto: ['city_lake', 'volleyball_day'] },
        ]);
      } else {
        if (((s as any).walkrand ?? 0) >= 80  &&  ((s as any).walkrand ?? 0) < 90) {
          scene.actions([
            { label: 'Continue', goto: ['city_lake', 'walklake1'] },
          ]);
        } else {
          if (((s as any).walkrand ?? 0) >= 90  &&  ((s as any).walkrand ?? 0) < 100) {
            scene.actions([
              { label: 'Continue', goto: ['city_lake', 'walklake2'] },
            ]);
          } else {
            scene.actions([
              { label: 'Finish', goto: ['city_lake', 'start'] },
            ]);
          }
        }
      }
    }
  } },
      ]);
    }
    if (((s as any).anreiday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).andrei ?? 0) === 2) {
      scene.text('You see Andrew on the beach.');
      scene.actions([
        { label: 'Approach Andrew', goto: ['city_lake', 'andrey1'] },
      ]);
    }
  }
  scene.actions([
    { label: 'Walk to the Residential Area (0:40)', handler: (st: GameState) => {
    if (((s as any).PSwim ?? 0) === 1  ||  ((s as any).clothingworntype ?? 0) === 'nude') {
      scene.text('You need to get dressed into your regular clothing first.');
      scene.actions([
        { label: 'Return', goto: ['city_lake', 'start'] },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 40;
      scene.actions([{ label: 'Continue', goto: ['city_residential', ''] }]);
    }
  } },
    { label: 'Walk to the industrial train station (1:00)', handler: (st: GameState) => {
    if (((s as any).PSwim ?? 0) === 1  ||  ((s as any).clothingworntype ?? 0) === 'nude') {
      scene.text('You need to get dressed into your regular clothing first.');
      scene.actions([
        { label: 'Return', goto: ['city_lake', 'start'] },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 60;
      scene.actions([{ label: 'Continue', goto: ['city_industrial_train', 'outside'] }]);
    }
  } },
  ]);
  scene.build();
}

function enterAquapark(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_lake', 'aquapark');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/lake/aquapark.jpg');
  // TODO-QSP: dynamic text: You go to the attractions. There is <a href="exec:minut += 1 & gt 'city_lake', '...
  scene.text('You go to the attractions. There is <a href="exec:minut += 1 & gt \'city_lake\', \'gidro\'">jet skiing</a>, a <a href="exec:minut += 1 & gt \'city_lake\', \'banan\'">banana ride</a>, the <a href="exec:minut += 1 & gt \'city_lake\', \'gorka\'">water slide</a>, and a <a href="exec:minut += 1 & gt \'city_lake\', \'tour_boat\'">tour boat</a>.');
  // TODO-QSP: dynamic text: There is also a small <a href="exec:minut += 1 & gt 'city_lake', 'hut'">hut</a> ...
  scene.text('There is also a small <a href="exec:minut += 1 & gt \'city_lake\', \'hut\'">hut</a> that rents out surf boards.');
  scene.actions([
    { label: 'Leave', goto: ['city_lake', 'start'] },
  ]);
  scene.build();
}

function enterGidro(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_lake', 'gidro');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/lake/aquapark.jpg');
  // TODO-QSP: dynamic text: You go to the jet ski kiosk. It costs ' + $func('money', 'string_price', 100) + ...
  scene.text('You go to the jet ski kiosk. It costs \' + $func(\'money\', \'string_price\', 100) + \' for 30 minutes.');
  scene.actions([
    { label: 'Go for a ride [+$func(\'money\', \'get_cost_string\', 100)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 100) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'mood', 'raise', 'tiny');
      qspCall(s, 'money', 'pay', 100);
      (s as any).minut = ((s as any).minut ?? 0) + 30;
      qspCall(s, 'stat', '');
      scene.img('images/locations/city/residential/lake/gidro.jpg');
      scene.text('You hire a jet ski and have fun out on the water.');
      if ((!(Math.floor(Math.random() * 11) + 0))) {
        scene.actions([{ label: 'Continue', goto: ['city_lake', 'kater1'] }]);
      }
      scene.actions([
        { label: 'Finish', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_lake', 'aquapark'] },
      ]);
    }
  } },
    { label: 'Move away', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_lake', 'aquapark'] },
  ]);
  scene.build();
}

function enterBanan(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_lake', 'banan');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/lake/aquapark.jpg');
  // TODO-QSP: dynamic text: You go to the banana ride. It costs ' + $func('money', 'string_price', 100) + '.
  scene.text('You go to the banana ride. It costs \' + $func(\'money\', \'string_price\', 100) + \'.');
  scene.actions([
    { label: 'Go for a ride [+$func(\'money\', \'get_cost_string\', 100)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 100) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'mood', 'raise', 'tiny');
      (s as any).minut = ((s as any).minut ?? 0) + 30;
      qspCall(s, 'money', 'pay', 100);
      qspCall(s, 'stat', '');
      scene.img('images/locations/city/residential/lake/banan.jpg');
      scene.text('You get on the banana and the boat drags it around for half an hour, stopping every so often to let you and the others get back on. You have a great time.');
      (s as any).banrand = Math.floor(Math.random() * 101) + 0;
      if (((s as any).banrand ?? 0) >= 80  &&  ((s as any).banrand ?? 0) < 90) {
        scene.actions([{ label: 'Continue', goto: ['city_lake', 'kater2'] }]);
      } else {
        if (((s as any).banrand ?? 0) >= 90) {
          scene.actions([{ label: 'Continue', goto: ['city_lake', 'kater3'] }]);
        }
      }
      scene.actions([
        { label: 'Finish', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_lake', 'aquapark'] },
      ]);
    }
  } },
    { label: 'Move away', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_lake', 'aquapark'] },
  ]);
  scene.build();
}

function enterGorka(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_lake', 'gorka');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/lake/aquapark.jpg');
  // TODO-QSP: dynamic text: You go to the water slide. It costs ' + $func('money', 'string_price', 50) + ' p...
  scene.text('You go to the water slide. It costs \' + $func(\'money\', \'string_price\', 50) + \' per go.');
  scene.actions([
    { label: 'Use the slide [+$func(\'money\', \'get_cost_string\', 50)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 50) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'mood', 'raise', 'tiny');
      (s as any).minut = ((s as any).minut ?? 0) + 15;
      qspCall(s, 'money', 'pay', 50);
      qspCall(s, 'stat', '');
      scene.img('images/locations/city/residential/lake/gorka.jpg');
      scene.text('You climb to the top of the slide and lie back as you whiz down before splashing into the pool at the bottom.');
      if (((s as any).deodorant_on ?? 0) === 1) {
        qspCall(s, 'sweat', 'remove_deo');
        scene.text('<br>Your deodorant gets washed away in the water.');
      }
      scene.actions([
        { label: 'Finish', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_lake', 'aquapark'] },
      ]);
    }
  } },
    { label: 'Move away', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_lake', 'aquapark'] },
  ]);
  scene.build();
}

function enterHorse(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_lake', 'horse');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/lake/horse0.jpg');
  // TODO-QSP: dynamic text: You walk over to where the horses are gathered. It costs ' + $func('money', 'str...
  scene.text('You walk over to where the horses are gathered. It costs \' + $func(\'money\', \'string_price\', 100) + \' to ride one.');
  scene.actions([
    { label: 'Go for a ride [+$func(\'money\', \'get_cost_string\', 100)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 100) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'mood', 'raise', 'tiny');
      (s as any).minut = ((s as any).minut ?? 0) + 30;
      qspCall(s, 'money', 'pay', 100);
      qspCall(s, 'stat', '');
      scene.img('images/locations/city/residential/lake/horse.jpg');
      scene.text('You are helped into the saddle and have a pleasant ride along the lake shore.');
      (s as any).horserand = Math.floor(Math.random() * 101) + 0;
      if (((s as any).horserand ?? 0) >= 80  &&  ((s as any).horserand ?? 0) < 90) {
        scene.actions([{ label: 'Continue', goto: ['city_lake', 'horse1'] }]);
      } else {
        if (((s as any).horserand ?? 0) >= 90) {
          scene.actions([{ label: 'Continue', goto: ['city_lake', 'horse2'] }]);
        }
      }
      scene.actions([
        { label: 'Finish', goto: ['city_lake', 'start'] },
      ]);
    }
  } },
    { label: 'Move away', goto: ['city_lake', 'start'] },
  ]);
  scene.build();
}

function enterTourBoat(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_lake', 'tour_boat');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/lake/aquapark.jpg');
  // TODO-QSP: dynamic text: You step up to the tour boat que and wait your turn the cost of a 2 hour tour is...
  scene.text('You step up to the tour boat que and wait your turn the cost of a 2 hour tour is \' + $func(\'money\', \'string_price\', 100) + \'.');
  scene.actions([
    { label: 'Go for a ride [+$func(\'money\', \'get_cost_string\', 100)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 100) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'mood', 'raise', 'tiny');
      qspCall(s, 'money', 'pay', 100);
      (s as any).minut = ((s as any).minut ?? 0) + 120;
      qspCall(s, 'stat', '');
      scene.img('images/locations/city/residential/lake/tourboat.jpg');
      scene.text('You pay for your ticket and board the boat spending tour hours enjoying the bay.');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'mood', 'raise', 'tiny');
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    qspCall(s, 'stat', '');
    if (((s as any).daystage ?? 0) === 3) {
      scene.img('images/locations/city/residential/lake/sunset.jpg');
    } else {
      if (((s as any).temper ?? 0) >= 10) {
        scene.img('images/locations/city/residential/lake/Seal.jpg');
      } else {
        scene.img('images/locations/city/residential/lake/Sealwinter.jpg');
      }
    }
    scene.text('By luck you spy a couple chances to take photographs for your portfolio.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_lake', 'aquapark'] },
    ]);
  } },
      ]);
    }
  } },
    { label: 'Move away', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_lake', 'aquapark'] },
  ]);
  scene.build();
}

function enterHut(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_lake', 'hut');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/lake/hut.jpg');
  // TODO-QSP: dynamic text: There is a young man here renting surf bourds and wind surfing boards. He smiles...
  scene.text(`There is a young man here renting surf bourds and wind surfing boards. He smiles and talks you through using each and tells you it would cost ${qspFunc(s, 'money', 'string_profit', 100)} to rent either for 2 hours.`);
  scene.actions([
    { label: 'Surf', goto: ['city_lake', 'surf'] },
    { label: 'WindSurf', goto: ['city_lake', 'windsurf'] },
    { label: 'Move away', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_lake', 'aquapark'] },
  ]);
  scene.build();
}

function enterSurf(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 120;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/lake/surf.jpg');
  scene.text('You spend 2 hours surfing and riding the smalls waves from the near by sea, several guys whistle and cheer as you ride the waves. At the end of the 2 hours you return the surfboard to the hut.');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_lake', 'hut'] },
  ]);
  scene.build();
}

function enterWindsurf(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 120;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/lake/windsurf.jpg');
  scene.text('You spend 2 hours enjoying being on the water and windsurfing you are not confident enough to try any tricks and simply ride the small sea side waves to and fro. At the end of the 2 hours you return the windboard to the hut');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_lake', 'hut'] },
  ]);
  scene.build();
}

function enterWalklake1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A177');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/lake/sex/walk1/walk1.jpg');
  scene.text('You hear someone calling you out as you walk along the beach. "Hey beautiful, come over here." You turn around and see a man sitting next to a hut nestled in the trees next to the beach.');
  if ((!((s as any).ribakSex ?? 0))) {
    scene.actions([
      { label: 'Leave', goto: ['city_lake', 'start'] },
      { label: 'Approach', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/lake/sex/walk1/walk1.jpg');
    scene.text('You approach the man and he looks you over from head to toe, lustfully and imposingly.');
    if (((s as any).pcs_hotcat ?? 0) <= 4) {
      scene.text('The man frowns. "You look terrible. You really should look after yourself better." he says with a hint of disappointment.');
    } else {
      if (((s as any).pcs_hotcat ?? 0) <= 8) {
        scene.text('The man grins. "Looking good…"');
      } else {
        scene.text('The man nods. "I don\'t often see women as beautiful as you around here."');
      }
    }
    if (((s as any).pcs_hotcat ?? 0) > 4) {
      scene.actions([
        { label: 'What do you want?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/lake/sex/walk1/walk1.jpg');
    scene.text('You ask what he wants and he looks at you with a smirk. "It\'s written all over your face that you\'re a whore. Here to earn your money?"');
    scene.actions([
      { label: 'How dare you!?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/lake/sex/walk1/walk1.jpg');
    scene.text('You\'re taken aback by his comment, but he just grins widely. "Come on, don\'t worry. I love whores." He unbuttons his pants and pulls out his sizeable cock. "Come on baby, look what papa has for your goddamned mouth." The man beckons you with a finger.');
    qspCall(s, 'city_lake', 'dinribak');
  } },
      { label: 'What?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/lake/sex/walk1/walk1.jpg');
    scene.text('You\'re surprised by such impudence, but he just grins widely. "You\'ll be even hungrier after seeing this!" He unbuttons his pants and pulls out his sizeable cock. "Come on baby, look what papa has for your goddamned mouth." The man beckons you with a finger.');
    qspCall(s, 'city_lake', 'dinribak');
  } },
      { label: 'Don\'t say anything', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/lake/sex/walk1/walk1.jpg');
    scene.text('You stand there, stunned in silence and grins widely. "Damn, I knew it just by looking at you! I have a nose for whores missing out on dick." He then unbuttons his pants and pulls out his sizeable cock. "Come on baby, look what papa has for your goddamned mouth." The man beckons you with a finger.');
    qspCall(s, 'city_lake', 'dinribak');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Leave', goto: ['city_lake', 'start'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).ribakSex ?? 0) > 0) {
      // TODO-QSP: dynamic text: You walk over to the man, who happily greets you. "Hey <<$ribakName>>, want more...
      scene.text(`You walk over to the man, who happily greets you. "Hey ${((s as any).ribakName ?? 0)}, want more of my cock?"`);
      if (((s as any).ribakName ?? 0) === 'whore') {
        scene.actions([
          { label: 'Money first', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/lake/sex/walk1/walk1.jpg');
    scene.text('"Money first!" you tell him and he grins. "If you\'re going to make money whoring, then you better be prepared to be humiliated!" He takes the money out and hands it to you imposingly.');
    qspCall(s, 'willpower', 'misc', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['city_lake', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Take the money', handler: (st: GameState) => {
    qspCall(s, 'money', 'earn', 2000);
    (s as any).ribakSex = ((s as any).ribakSex ?? 0) + (1);
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/lake/sex/whore/facefuck.jpg');
    scene.text('You take the money and quickly hide it as the man grins wickedly. "On your knees scum! Now I\'m going to fuck your face so hard that you\'ll never forget it!" You blush, but still kneel in front of him. He grabs your head in his hands and spits in your face before rubbing it in with his hand.');
    scene.text('You freeze in confusion, but he immediately shoves his dick down your throat. You choke and tears flow from your eyes as he growls. "So, do you like it slut? Scum like you should enjoy it, you dirty whore. Do you like money? Then you\'ll have to get used to such things."');
    scene.text('He starts roughly fucking your mouth, periodically wiping the snot from your nose and saliva from your mouth, as well as occasionally slapping you hard. Your throat is on fire and incessant cramps twist and nauseate your body.');
    scene.text('Time slows to a halt and you start to think that this torment will never end when he suddenly pulls his cock out of your mouth.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', 'A177', 1);
    qspCall(s, 'cum_call', 'mouth', 'A177', 1);
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/lake/sex/whore/facefuck1.jpg');
    scene.text('He starts to cum on your face. A spurt of his cum flies into your mouth and you choke at the taste.');
    scene.actions([
      { label: 'Wait', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/city/residential/lake/sex/whore/facefuck1.jpg');
    scene.text('You\'re tired and haven\'t got the energy to leave. The man takes your hair in his hand and wipes his cock on your hair. After that, he rudely tells you. "Whore to the core! Now get out of here."');
    scene.actions([
      { label: 'Leave', goto: ['city_lake', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        if (((s as any).ribakName ?? 0) !== 'whore') {
          scene.actions([
            { label: 'Kneel in front of him', handler: (st: GameState) => {
    (s as any).ribakSex = ((s as any).ribakSex ?? 0) + (1);
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/lake/sex/whore/big.jpg');
    scene.text('You kneel in front of him and he impatiently slaps you with his dick. "What me to slap your tits too? Start sucking!" He then grabs you by the hair and buries your face into his dick.');
    scene.text('He takes your head in his hands and begins to fuck your face with his dick. He often pushes it down your throat, causing you to gag and saliva to dribble from your mouth.');
    scene.text('He suddenly and sharply drives his cock deep into your throat and your eyes widen in panic. You put your hands on his hips as you struggle to breathe.');
    scene.text('After what feels like an eternity, he finally lets go of your head and allows you to remove his dick from your mouth. You cough and splutter as you gasp for air, but he doesn\'t wait long and again grabs your hair and shoves his dick back into your mouth. This carries on for sometime before he pulls out and starts jerking his cock in front of your face as you\'re trying to catch your breath.');
    scene.text('"Open your dirty fucking mouth and stick out your tongue!" he growls.');
    scene.actions([
      { label: 'Comply', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', 'A177', 1);
    qspCall(s, 'cum_call', 'mouth_swallow', 'A177', 1);
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/city/residential/lake/sex/whore/cum.jpg');
    scene.text('You obediently open your mouth and stick out your tongue. His cum starts splattering across your face and onto your tongue almost instantly.');
    scene.actions([
      { label: 'Look up at him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/lake/sex/whore/cumeat.jpg');
    scene.text('Your face is dripping with cum as you look up at the man. He smiles and collects some cum from your face with his finger before shoving it in your mouth. You obediently lick his finger and when it\'s clean, he gathers the rest of the cum from your face and makes you lick it up and swallow it.');
    scene.actions([
      { label: 'Wait', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/lake/sex/whore/spit.jpg');
    scene.text('He suddenly thrusts the fingers of both his hands into your mouth, holding your lips apart as he spits in your mouth. You flinch and feel like your cheeks blush with a flood of shame as he looks down at you angrily. "You are a lewd, vile creature that got what she deserved. Now get out!"');
    scene.actions([
      { label: 'Leave', goto: ['city_lake', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Try to move out of the way', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'cum_call', 'face', 'A177', 1);
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/city/residential/lake/sex/whore/cum1.jpg');
    scene.text('You try to dodge it, but he grabs you by the hair and pulls you back. You whimper as his cum splatters across your face. When he\'s finished, he pushes you away. "Get out of here, you dirty bitch!"');
    scene.actions([
      { label: 'Leave', goto: ['city_lake', 'start'] },
    ]);
  } },
    ]);
  } },
          ]);
        }
      }
      scene.actions([
        { label: 'Leave', goto: ['city_lake', 'start'] },
      ]);
    }
  }
  scene.build();
}

function enterDinribak(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A177');
  scene.actions([
    { label: 'Leave the idiot alone', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/lake/sex/walk1/walk1.jpg');
    scene.text('You call him an idiot and get ready to leave. The man just smiles. "Well, maybe I was wrong, and you\'re not a slutty whore. Or maybe I\'m right and you are a slut, and you will stay and earn two thousand."');
    qspCall(s, 'willpower', 'misc', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['city_lake', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Money first', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/lake/sex/walk1/walk1.jpg');
    scene.text('"Money up front!" you hesitantly blurt out.');
    scene.text('The man laughs. "Well, that solves that one then! Take your money whore, and then you won\'t need to play games pretending to be a schoolgirl virgin." The guy takes the money and hands it to you imposingly.');
    qspCall(s, 'willpower', 'misc', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Change your mind and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Change your mind and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['city_lake', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Take the money', handler: (st: GameState) => {
    qspCall(s, 'money', 'earn', 2000);
    if ((!((s as any).ribakSex ?? 0))) {
      (s as any).ribakSex = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/lake/sex/whore/facefuck.jpg');
    scene.text('You take the money and quickly hide it as the man grins wickedly. "On your knees scum! Now I\'m going to fuck your face so hard that you\'ll never forget it!" You blush, but still kneel in front of him. He grabs your head in his hands and spits in your face before rubbing it in with his hand.');
    scene.text('You freeze in confusion, but he immediately shoves his dick down your throat. You choke and tears flow from your eyes as he growls. "So, do you like it slut? Scum like you should enjoy it, you dirty whore. Do you like money? Then you\'ll have to get used to such things."');
    scene.text('He starts roughly fucking your mouth, periodically wiping the snot from your nose and saliva from your mouth, as well as occasionally slapping you hard. Your throat is on fire and incessant cramps twist and nauseate your body.');
    scene.text('Time slows to a halt and you start to think that this torment will never end when he suddenly pulls his cock out of your mouth.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', 'A177', 1);
    qspCall(s, 'cum_call', 'mouth', 'A177', 1);
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/lake/sex/whore/facefuck1.jpg');
    scene.text('He starts to cum on your face. A spurt of his cum flies into your mouth and you choke at the taste.');
    scene.actions([
      { label: 'Wait', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/city/residential/lake/sex/whore/facefuck1.jpg');
    scene.text('You\'re tired and haven\'t got the energy to leave. The man takes your hair in his hand and wipes his cock on your hair. After that, he rudely tells you. "Whore to the core! Now get out of here."');
    scene.actions([
      { label: 'Leave', goto: ['city_lake', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Move closer', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/lake/sex/walk1/walk1.jpg');
    scene.text('You hesitantly move closer to the man and he quickly grabs you by the wrist, literally restraining you. "Come on baby, no need to think about it. We both know you want to taste my dick, so don\'t be shy."');
    qspCall(s, 'willpower', 'misc', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Feign compliance then run [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Feign compliance then run [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['city_lake', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Kneel in front of him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    if ((!((s as any).ribakSex ?? 0))) {
      (s as any).ribakSex = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/lake/sex/whore/big.jpg');
    scene.text('You kneel in front of him and he impatiently slaps you with his dick. "What me to slap your tits too? Start sucking!" He then grabs you by the hair and buries your face into his dick.');
    scene.text('He takes your head in his hands and begins to fuck your face with his dick. He often pushes it down your throat, causing you to gag and saliva to dribble from your mouth.');
    scene.text('He suddenly and sharply drives his cock deep into your throat and your eyes widen in panic. You put your hands on his hips as you struggle to breathe.');
    scene.text('After what feels like an eternity, he finally lets go of your head and allows you to remove his dick from your mouth. You cough and splutter as you gasp for air, but he doesn\'t wait long and again grabs your hair and shoves his dick back into your mouth. This carries on for sometime before he pulls out and starts jerking his cock in front of your face as you\'re trying to catch your breath.');
    scene.text('"Open your dirty fucking mouth and stick out your tongue!" he growls.');
    scene.actions([
      { label: 'Comply', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', 'A177', 1);
    qspCall(s, 'cum_call', 'mouth_swallow', 'A177', 1);
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/city/residential/lake/sex/whore/cum.jpg');
    scene.text('You obediently open your mouth and stick out your tongue. His cum starts splattering across your face and onto your tongue almost instantly.');
    scene.actions([
      { label: 'Look up at him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/lake/sex/whore/cumeat.jpg');
    scene.text('Your face is dripping with cum as you look up at the man. He smiles and collects some cum from your face with his finger before shoving it in your mouth. You obediently lick his finger and when it\'s clean, he gathers the rest of the cum from your face and makes you lick it up and swallow it.');
    scene.actions([
      { label: 'Wait', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/lake/sex/whore/spit.jpg');
    scene.text('He suddenly thrusts the fingers of both his hands into your mouth, holding your lips apart as he spits in your mouth. You flinch and feel like your cheeks blush with a flood of shame as he looks down at you angrily. "You are a lewd, vile creature that got what she deserved. Now get out!"');
    scene.actions([
      { label: 'Leave', goto: ['city_lake', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Try to move out of the way', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'cum_call', 'face', 'A177', 1);
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/city/residential/lake/sex/whore/cum1.jpg');
    scene.text('You try to dodge it, but he grabs you by the hair and pulls you back. You whimper as his cum splatters across your face. When he\'s finished, he pushes you away. "Get out of here, you dirty bitch!"');
    scene.actions([
      { label: 'Leave', goto: ['city_lake', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterWalklake2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/lake/sex/walk2/walk1.jpg');
  if ((!((s as any).StasikValera ?? 0))) {
    scene.text('You start feeling a little warm and decide to go for a swim to cool off. Once you\'re in the water, you turn back and notice two men looking at you.');
  } else {
    scene.text('You start feeling a little warm and decide to go for a swim to cool off. Once you\'re in the water, you turn and see Stasik and Valera looking at you.');
  }
  if ((!((s as any).StasikValera ?? 0))) {
    scene.actions([
      { label: 'Look at them', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).StasikValera = 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/lake/sex/stas/stasValera.jpg');
    scene.text('You watch the two men whispering to each other before one of them walks up to you. "Hey beautiful, I\'m Stasik, and this is my friend Valera. What\'s your name?" he asks with a smile.');
    scene.actions([
      { label: '<<$pcs_nickname>>', goto: ['city_lake', 'stasValera'] },
      { label: 'I have to go', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.text('You don\'t want to talk with them and start walking out of the water as Stasik tries to persuade you. "Come on, babe. Do we look like savages? We just wanted to talk, but I understand if you\'re frightened. I just wanted to ask you your name."');
    scene.actions([
      { label: '<<$pcs_nickname>>', goto: ['city_lake', 'stasValera'] },
      { label: 'Leave', goto: ['city_lake', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).npc_had_sex ?? 0)?.['A47']) {
    scene.actions([
      { label: 'Wave to them', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A47');
    qspCall(s, 'npcStat', 'A48', 'a');
    scene.img('images/locations/city/residential/lake/sex/walk2/walk2.jpg');
    scene.text('Looking directly at them, you pull off your panties and wave to them. Stasik and Valera almost run towards you as you pull off the rest of your clothes and kneel.');
    (s as any).npc_had_sex['A48'] = 1;
    scene.actions([
      { label: 'Wait', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 2, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'arousal', 'bj', 3, ((s as any).npcID1 ?? 0), 'group');
    scene.img('images/locations/city/residential/lake/sex/walk2/walk3.jpg');
    scene.text('The men unbutton their pants as they run to you. When they reach you, you grab their cocks and alternate between sucking them before Stasik roughly grabs your ass and tries to push you on all fours.');
    scene.actions([
      { label: 'Doggystyle', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 5, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'arousal', 'bj', (-5), ((s as any).npcID1 ?? 0), 'group');
    scene.img('images/locations/city/residential/lake/sex/walk2/walk4.jpg');
    scene.text('You comply and bend over. Stasik forcefully enters your pussy as you continue to suck Valera\'s dick, but he too can\'t resist and tries to pull his dick out of your mouth.');
    scene.actions([
      { label: 'Let him go', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'anal', 5, ((s as any).npcID1 ?? 0));
    scene.img('images/locations/city/residential/lake/sex/walk2/walk5.jpg');
    scene.text('As soon as you let go of his cock, Valera literally pulls you off Stasik\'s dick, pulls you on top of him and lowers you down onto his dick, slowly penetrating your asshole.');
    scene.actions([
      { label: 'Beckon Stasik', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'anal', 10, ((s as any).npcID1 ?? 0), 'group');
    qspCall(s, 'arousal', 'vaginal', (-10), ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/lake/sex/walk2/walk6.jpg');
    scene.text('With a simple glance, you beckon Stasik back to your pussy. He quickly moves in and pushes his dick back into you, filling both your holes.');
    scene.text('They start fucking your holes in tandem, causing you to moan loudly in pleasure.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'cum_call', 'mouth', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'cum_call', 'face', ((s as any).npcID1 ?? 0), 1);
    qspCall(s, 'cum_call', 'mouth', ((s as any).npcID1 ?? 0), 1);
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/city/residential/lake/sex/walk2/walk7.jpg');
    scene.text('After a few minutes, Stasik and Valera pull out of you and you get on your knees in front of them as they jerk their dicks. You open your mouth and cum soon starts splattering across your face and tongue as the two men groan loudly.');
    scene.actions([
      { label: 'Leave', goto: ['city_lake', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Leave', goto: ['city_lake', 'start'] },
  ]);
  scene.build();
}

function enterStasValera(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/lake/sex/stas/talk1.jpg');
  // TODO-QSP: dynamic text: "My name is <<$pcs_nickname>>." you reply and Stasik smiles. "Nice to meet you, ...
  scene.text(`"My name is ${((s as any).pcs_nickname ?? 0)}." you reply and Stasik smiles. "Nice to meet you, ${((s as any).pcs_nickname ?? 0)}." Valera also comes over and greets you.`);
  scene.actions([
    { label: 'Chat with them', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/lake/sex/stas/talk6.jpg');
    scene.text('You chat with the two men. Stasik tells you that he and Valera work as sales representatives at a major company, and boasts about their seniority and importance. Both men make lewd gestures throughout the conversation before Stasik moves his hand towards your breasts.');
    scene.actions([
      { label: 'Remove Stasik\'s hand', goto: ['city_lake', 'stasValera2a'] },
      { label: 'Smile and pretend nothing is happening', goto: ['city_lake', 'stasValera2b'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterStasValera2a(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/lake/sex/stas/refuse1.jpg');
  scene.text('You angrily slap Stasik\'s hand away and he grins. "Come on babe, relax."');
  qspCall(s, 'willpower', 'misc', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/lake/sex/stas/refuse3.jpg');
    scene.text('You angrily stand up and prepare to leave. Stasik gets to his feet and tries to persuade you to go with them to the cafe.');
    scene.actions([
      { label: 'Refuse and leave', goto: ['city_lake', 'start'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Remain silent', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/lake/sex/stas/tits1.jpg');
    scene.text('You say nothing and Stasik immediately takes advantage of your confusion. His hand gently squeezes your breast and you feel a pleasant warmth and tenderness.');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'arousal', 'foreplay', (-5));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', goto: ['city_lake', 'stasValera3'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterStasValera2b(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/lake/sex/stas/tits1.jpg');
  scene.text('You smile and close your eyes as Stasik\'s touch excites you. When you open your eyes again, you see Stasik squeezing your breast with a dreamy smile on his face.');
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'arousal', 'foreplay', (-5));
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Further', goto: ['city_lake', 'stasValera3'] },
  ]);
  scene.build();
}

function enterStasValera3(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/lake/sex/stas/tits2.jpg');
  scene.text('You relax and begin to enjoy the sensation of Stasik touching you. With a well honed movement, he lowers your bra and exposes your breasts. You don\'t have time to blink as Stasik\'s lips cover your nipple.');
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'arousal', 'foreplay', (-5));
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'misc', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'What are you doing? [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'What are you doing? [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/lake/sex/stas/refuse4.jpg');
    scene.text('You jump to your feet and fix your bra as Stasik smiles. "Don\'t be afraid girl. I\'m sure you\'ll like it."');
    scene.actions([
      { label: 'Leave', goto: ['city_lake', 'start'] },
    ]);
  } },
    ]);
  }
  qspCall(s, 'willpower', 'misc', 'resist', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Feebly protest [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Feebly protest [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/lake/sex/stas/talk5.jpg');
    scene.text('You try to pull your bra back and shake your head as Stasik smiles. "Don\'t be shy girl. I\'m sure you\'ll like it."');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'arousal', 'foreplay', (-5));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Relax', goto: ['city_lake', 'stasValera4'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Be silent', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/lake/sex/stas/tits3.jpg');
    scene.text('You get comfortable and enjoy the skillful way Staik sucks your breast as his hands begin to passionately caress your body before his fingers penetrate your panties and begin to caress your pussy.');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'arousal', 'foreplay', (-5));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Relax', goto: ['city_lake', 'stasValera4'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterStasValera4(s: GameState, scene: SceneBuilder): void {
  (s as any).npc_had_sex['A47'] = 1;
  (s as any).npc_had_sex['A48'] = 1;
  qspCall(s, 'npcStat', 'A47');
  qspCall(s, 'npcStat', 'A48', 'a');
  qspCall(s, 'stat', '');
  scene.img(`images/locations/city/residential/lake/sex/stas/oral${Math.floor(Math.random() * 6) + 1}.jpg`);
  scene.text('The guys pull out their cocks and you kneel down to get them warmed up. It doesn\'t take long before you\'re in the mood for more and it\'s clear they are too.');
  qspCall(s, 'arousal', 'bj', 2, ((s as any).npcID ?? 0));
  qspCall(s, 'arousal', 'bj', 3, ((s as any).npcID1 ?? 0));
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Get fucked', handler: (st: GameState) => {
    scene.img(`images/locations/city/residential/lake/sex/stas/sex${Math.floor(Math.random() * 3) + 7}.jpg`);
    scene.text('Valera watches as Stasik spreads your legs and lines his dick up with your pussy. He slowly pushes into you, making you moan softly.');
    qspCall(s, 'dinsex', 'vaginal_sex', 10, ((s as any).npcID ?? 0));
    scene.actions([
      { label: 'Don\'t forget Valera', handler: (st: GameState) => {
    scene.img(`images/locations/city/residential/lake/sex/stas/sex${Math.floor(Math.random() * 6) + 1}.jpg`);
    scene.text('Stasik starts fucking you as Valera kneels in front of you and slides his dick into your mouth.');
    qspCall(s, 'dinSex', 'bj_random');
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID1 ?? 0));
    (s as any).pose = 1;
    qspCall(s, 'dinsex', 'sexcum', ((s as any).npcID1 ?? 0));
    scene.actions([
      { label: 'Finish Valera off', handler: (st: GameState) => {
    scene.img(`images/locations/city/residential/lake/sex/stas/sex${Math.floor(Math.random() * 4) + 1}.jpg`);
    scene.text('Valera groans and his cock twitches in your mouth as his cum spurts into your throat. You obediently swallow all of it.');
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID1 ?? 0), 1);
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID1 ?? 0));
    qspCall(s, 'dinsex', 'bj_swallow_random');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/city/residential/lake/sex/stas/undress.jpg');
    // TODO-QSP: dynamic text: Once the men recover, they start getting dressed before Stasik helps you to your...
    scene.text(`Once the men recover, they start getting dressed before Stasik helps you to your feet. "You're a cool girl ${((s as any).pcs_nickname ?? 0)}, let us walk you home."`);
    if (((s as any).home ?? 0)?.['current'] === 'city_apartment') {
      scene.actions([
        { label: 'Agree', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).cumface = 0;
    (s as any).StasValeraKnow = 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/lake/sex/stas/stasValera.jpg');
    if (((s as any).PSwim ?? 0) === 1) {
      // TODO-QSP: gs 'clothing', 'wear', $lastwornclothingtype['swim'], lastwornclothingnumber['swim']
      // TODO-QSP: gs 'panties', 'wear', $lastwornpantytype['swim'], lastwornpantynumber['swim']
      // TODO-QSP: gs 'bras', 'wear', $lastwornbratype['swim'], lastwornbranumber['swim']
      scene.text('You enter the changing booth and strip out of your swimwear before putting your regular clothes back on.');
    }
    scene.text('The three of you start to walk toward your home and you feel safe accompanied by them. They keep the conversation light and also enjoy plenty of flirtatious padding and groping. You reach the front entrance of your apartment eventually and bid them goodbye after some farewell kisses.');
    scene.actions([
      { label: 'Enter apartment', goto: ['korr', ''] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'You don\'t live nearby', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/lake/sex/stas/stasValera.jpg');
    scene.text('"I\'m flattered, but I don\'t live nearby." you reply and Stasik nods. "I see. Maybe we\'ll meet here again another time?"');
    scene.text('"Maybe." you reply with a smile as you start walking back to the beach.');
    scene.actions([
      { label: 'Leave', goto: ['city_lake', 'start'] },
    ]);
  } },
      ]);
    }
    if (qspFunc(s, 'car_funcs', 'is_here')) {
      scene.actions([
        { label: 'Tell them that your car parked close by', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/lake/sex/stas/stasValera.jpg');
    scene.text('"Thanks, but my car is nearby." you reply and Stasik nods. "I see. Maybe we\'ll meet here again another time?"');
    scene.text('"Maybe." you reply with a smile and start to walk toward your car.');
    scene.actions([
      { label: 'Leave', goto: ['city_lake', 'start'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'I\'ll manage', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/lake/sex/stas/refuse2.jpg');
    scene.text('You shake your head and Stasik simply shrugs. "As you wish then."');
    scene.actions([
      { label: 'Leave', goto: ['city_lake', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterVlake1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/lake/sex/vlake1/vlake1.jpg');
  scene.text('While sunbathing on the beach, you encounter a group of men who begin flirting with you.');
  qspCall(s, 'willpower', 'misc', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['city_lake', 'start'] },
    ]);
  }
  scene.actions([
    { label: 'Flirt with them', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/lake/sex/vlake1/vlake2.jpg');
    scene.text('The men sit next to you and start flirting with you while trying to sneak a touch of your body.');
    qspCall(s, 'willpower', 'misc', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['city_lake', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Relax and enjoy it', handler: (st: GameState) => {
    qspCall(s, 'npcgeneratec', '', 0, 'Stranger at the lake', Math.floor(Math.random() * 28) + 18, Math.floor(Math.random() * 2) + 3, 1);
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'npcgeneratec', '', 0, 'Stranger at the lake', Math.floor(Math.random() * 28) + 18, Math.floor(Math.random() * 2) + 3, 1);
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'a');
    qspCall(s, 'npcgeneratec', '', 0, 'Stranger at the lake', Math.floor(Math.random() * 28) + 18, Math.floor(Math.random() * 2) + 3, 1);
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'b');
    qspCall(s, 'npcgeneratec', '', 0, 'Stranger at the lake', Math.floor(Math.random() * 28) + 18, Math.floor(Math.random() * 2) + 3, 1);
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'c');
    (s as any).guy = ((s as any).guy ?? 0) + (4);
    scene.img('images/locations/city/residential/lake/sex/vlake1/vlake3.jpg');
    scene.text('You lie back and enjoy what\'s happening before one of the men suddenly pulls his dick out and holds it to your face. You grin and start licking it as the others get excited and pull their dicks out as well. You get up on your knees in the middle of the group, trying to please all of them at once.');
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'arousal', 'foreplay', (-5), ((s as any).npcID1 ?? 0), 'group');
    qspCall(s, 'arousal', 'foreplay', (-5), ((s as any).npcID2 ?? 0), 'group');
    qspCall(s, 'arousal', 'foreplay', (-5), ((s as any).npcID3 ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/lake/sex/vlake1/vlake4.jpg');
    scene.text('One of the men leans toward your pussy and begins to lick it before trying to shove his fingers inside.');
    qspCall(s, 'arousal', 'bj', 10, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'arousal', 'vaginal_finger', (-10), ((s as any).npcID1 ?? 0), 'group');
    qspCall(s, 'arousal', 'foreplay', (-10), ((s as any).npcID2 ?? 0), 'group');
    qspCall(s, 'arousal', 'foreplay', (-10), ((s as any).npcID3 ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Stop him', goto: ['city_lake', 'vlake1cum'] },
      { label: 'Enjoy it', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/lake/sex/vlake1/vlake7.jpg');
    scene.text('You relax and enjoy the sensation. Noticing your reaction, the man removes his fingers and pushes his dick inside you. You continue giving the others blowjobs and jerking them off.');
    qspCall(s, 'arousal', 'bj', 10, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'arousal', 'vaginal', (-10), ((s as any).npcID1 ?? 0), 'group');
    qspCall(s, 'arousal', 'hj', (-10), ((s as any).npcID2 ?? 0), 'group');
    qspCall(s, 'arousal', 'hj', (-10), ((s as any).npcID3 ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Double penetration', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/lake/sex/vlake1/vlake8.jpg');
    scene.text('"There\'s room for two…" you say teasingly and don\'t even have time to react before a dick is being pushed into your ass. The group pass you around and take turns fucking both your holes and letting you suck and jerk their dicks before it becomes apparent that they\'re all close to finishing.');
    qspCall(s, 'arousal', 'bj', 10, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'arousal', 'vaginal', (-10), ((s as any).npcID1 ?? 0), 'group');
    qspCall(s, 'arousal', 'anal', (-10), ((s as any).npcID2 ?? 0), 'group');
    qspCall(s, 'arousal', 'hj', (-10), ((s as any).npcID3 ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', goto: ['city_lake', 'vlake1cum'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterVlake1cum(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'cum_call', 'mouth', ((s as any).npcID ?? 0));
  qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0));
  qspCall(s, 'cum_call', 'mouth', ((s as any).npcID1 ?? 0));
  qspCall(s, 'cum_call', 'face', ((s as any).npcID1 ?? 0));
  qspCall(s, 'cum_call', 'mouth', ((s as any).npcID2 ?? 0));
  qspCall(s, 'cum_call', 'face', ((s as any).npcID2 ?? 0));
  qspCall(s, 'cum_call', 'mouth', ((s as any).npcID3 ?? 0));
  qspCall(s, 'cum_call', 'face', ((s as any).npcID3 ?? 0));
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/lake/sex/vlake1/vlake5.jpg');
  scene.text('The men begin jerking their dicks and their cum is soon splattering across your face and into your mouth. Once they\'re all finished, you lick the cum off their dicks and swallow it. Satisfied, they dress and walk away, leaving you sitting in the sand covered in cum.');
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['city_lake', 'start'] },
    { label: 'Masturbate', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'clit_finger', 5, 'masturbation');
    scene.img('images/locations/city/residential/lake/sex/vlake1/vlake6.jpg');
    scene.text('Left unsatisfied, you take matters into your own hands and vigorously caress your pussy until you scream out in orgasm.');
    qspCall(s, 'arousal', 'clit_finger', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['city_lake', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterVlake2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/lake/sex/vlake2/vlake1.jpg');
  scene.text('While sunbathing, you notice two naked men walking along the shore from the nudist beach.');
  qspCall(s, 'willpower', 'misc', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Ignore them [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Ignore them [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['city_lake', 'start'] },
    ]);
  }
  scene.actions([
    { label: 'Wave at them', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/lake/sex/vlake2/vlake2.jpg');
    scene.text('You smile and wave at them and they walk up to you. One of them kneels down next to you and kisses your lips as the second one kneels in front of you and strokes your panties.');
    qspCall(s, 'willpower', 'misc', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Push them away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['city_lake', 'start'] },
      ]);
    } else {
      scene.actions([
        { label: 'Push them away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    }
    scene.actions([
      { label: 'Kneel', handler: (st: GameState) => {
    qspCall(s, 'npcgeneratec', '', 0, 'Stranger at the lake', Math.floor(Math.random() * 28) + 18, Math.floor(Math.random() * 2) + 3, 1);
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'npcgeneratec', '', 0, 'Stranger at the lake', Math.floor(Math.random() * 28) + 18, Math.floor(Math.random() * 2) + 3, 1);
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'a');
    (s as any).guy = ((s as any).guy ?? 0) + (2);
    scene.img('images/locations/city/residential/lake/sex/vlake2/vlake3.jpg');
    scene.text('You get up on your knees and remove your bikini as they pull their cocks out. You take them in your hands and begin sucking both in turn.');
    qspCall(s, 'arousal', 'bj', 2, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'arousal', 'bj', 2, ((s as any).npcID1 ?? 0), 'group');
    qspCall(s, 'arousal', 'hj', (-2), ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'arousal', 'hj', (-2), ((s as any).npcID1 ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 5, ((s as any).npcID1 ?? 0), 'group');
    qspCall(s, 'arousal', 'bj', (-5), ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/lake/sex/vlake2/vlake4.jpg');
    scene.text('One of the men lies down and you continue to suck him while lifting your ass into the air. The second man enjoys the view before sliding his dick into your wet pussy.');
    scene.actions([
      { label: 'Double penetration', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'anal', 5, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'arousal', 'vaginal', (-5), ((s as any).npcID1 ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/lake/sex/vlake2/vlake5.jpg');
    scene.text('"I want you both!" you moan loudly as you straddle one of the men. The second moves in behind and pushes his cock into your ass.');
    scene.actions([
      { label: 'Change position', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'anus', ((s as any).npcID ?? 0));
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/lake/sex/vlake2/vlake6.jpg');
    scene.text('Changing position, you straddle the man lying down and slide down onto his dick, moaning as it penetrates your ass while the second man holds your head in his hand and starts fucking your mouth, pushing his cock deeper down your throat with every thrust. After a while, you feel hot cum fill your ass as the second man gets ready to cum in your mouth.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth', ((s as any).npcID1 ?? 0));
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/city/residential/lake/sex/vlake2/vlake8.jpg');
    scene.text('You continue to suck and soon your mouth is filled with their cum. You swallow it and carefully lick his cock, leaving not even a drop of cum behind.');
    scene.actions([
      { label: 'Leave', goto: ['city_lake', 'start'] },
    ]);
  } },
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', ((s as any).npcID1 ?? 0));
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/city/residential/lake/sex/vlake2/vlake7.jpg');
    scene.text('You remove the cock from your mouth and the man groans as he cums over your face.');
    scene.actions([
      { label: 'Leave', goto: ['city_lake', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterAndrey1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('You walk up to Andrew and he grins. "Let\'s go for a swim!"');
  qspCall(s, 'willpower', 'misc', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['city_lake', 'start'] },
    ]);
  }
  scene.actions([
    { label: 'Go with him', handler: (st: GameState) => {
    (s as any).anreiday = ((s as any).daystart ?? 0);
    (s as any).anreirape = 0;
    (s as any).pcs_makeup = 1;
    (s as any).cumspclnt = 4;
    qspCall(s, 'cum_cleanup', '');
    (s as any).minut = ((s as any).minut ?? 0) + 25;
    qspCall(s, 'exercise', 'tier1', 5, 'stren', 'vital');
    (s as any).pcs_sweat = 10 + ((s as any).rand ?? 0)(0, 4);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/lake/sex/andrey1/andrey1.jpg');
    scene.text('"I see the lady agrees…" Andrew says with a wide grin. "Then let\'s go for a swim!" He takes you in his arms, laughing at your ineffective attempts to stop him uncovering your chest. Moving your hand aside, his lips gently pinch your right nipple. You sigh and a warm wave of excitement rushes through you.');
    scene.text('You then both go swimming before returning to the beach and lying down in the sand, catching your breath as your body relaxes. "First, you should excite a man… Wrap your lips around my cock."');
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the water.');
    }
    scene.actions([
      { label: 'Open your mouth', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A46');
    scene.img('images/locations/city/residential/lake/sex/andrey1/andrey2.jpg');
    scene.text('You run your tongue along his shaft before taking him into your mouth as deep as you can. Andrew starts fucking your mouth when you suddenly hear a noise coming from some nearby bushes. You look up and see a young man spying on you, his hand buried in his pants.');
    scene.text('Andrew also notices the Peeping Tom and turns your head so that the voyeur can watch him fuck your mouth. You defiantly continue to suck Andrew\'s cock, periodically holding his full length in your mouth and gagging as you lick his testicles.');
    scene.text('Andrew then pulls out of your mouth and pushes you onto your back. In one swift motion, he plunges his dick deep into your puusy. You cringe in pain, but Andrew ignores you and begins roughly thrusting in and out of you.');
    scene.text('After a few minutes of monotonous movements, you are enveloped in sweet bliss when Andrew\'s fingers stimulate your anus. You ride the waves of incredible pleasure and through narrowed eyelids, you see the young Peeping Tom, speechless as he watches in fascinated wonder.');
    qspCall(s, 'arousal', 'bj', 4, ((s as any).npcID ?? 0));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Call him over', handler: (st: GameState) => {
    (s as any).guy = ((s as any).guy ?? 0) + (1);
    scene.img('images/locations/city/residential/lake/sex/andrey1/andrey3.jpg');
    scene.text('You beckon him over and the shy young man slowly walks up to you. "Well, what are you waiting for? Undress and get inside her already!" Andrew shouts as he turns you over and spreads your buttocks with his hands. The young man moves in behind and pushes his dick into your ass. You moan loudly as the two cocks thrust in and out of you until the young man pulls out and finishes on your ass. Andrew then gets up and cums in your mouth.');
    qspCall(s, 'cum_call', 'mouth', 'A46', 1);
    qspCall(s, 'npcgeneratec', '', 0, 'a voyeur at the beach', Math.floor(Math.random() * 28) + 18, Math.floor(Math.random() * 2) + 3, 1);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0), 'a');
    qspCall(s, 'arousal', 'bj', (-5), ((s as any).npcID ?? 0));
    qspCall(s, 'arousal', 'anal', 5, ((s as any).npcID1 ?? 0));
    qspCall(s, 'cum_call', 'butt', ((s as any).npcID1 ?? 0));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get up', goto: ['city_lake', 'start'] },
    ]);
  } },
      { label: 'Faster', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/lake/sex/andrey1/andrey4.jpg');
    scene.text('"Faster! Deeper! Stronger!" you enthusiastically scream. He answers with an inarticulate growl through his ragged breathing. You look back and notice that the peeping man has run away. Andrew then pulls out and cums in your mouth.');
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID ?? 0));
    qspCall(s, 'cum_call', 'mouth', 'A46', 1);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get up', goto: ['city_lake', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKater1(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (20);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/lake/sex/kater1/kater1.jpg');
  scene.text('While riding on the jet ski, you make a turn that\'s too steep and are thrown into the water. You swallow a lot of water and begin to sink, but are suddenly pulled out of the water by a man in a boat. Once you\'re aboard, he ties the jet ski to the boat and sets off. After coughing up water, you catch your breath and start to feel better. The guy stops the boat and walks up to you.');
  scene.text('"How are you beautiful? I just saved your life, so how about you show me some gratitude?" he asks while slowly fondling your pussy.');
  qspCall(s, 'willpower', 'misc', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Take the jet ski and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Take the jet ski and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['city_lake', 'start'] },
    ]);
  }
  scene.actions([
    { label: 'Spread your legs', handler: (st: GameState) => {
    qspCall(s, 'npcgeneratec', '', 0, 'a rescuer at the lake', Math.floor(Math.random() * 28) + 18, Math.floor(Math.random() * 2) + 3, 1);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'arousal', 'vaginal_finger', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/lake/sex/kater1/kater2.jpg');
    scene.text('You open your legs, making it clear that you are ready to thank your savior. He smiles and slides his fingers into your pussy as his tongue begins to tease your clitoris.');
    scene.actions([
      { label: 'Give him a blowjob', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/lake/sex/kater1/kater3.jpg');
    scene.text('You sit the guy down and start licking his cock before opening your lips and taking it into your mouth. You start passionately sucking and in only a few minutes, you sense that he\'s about to cum.');
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['city_lake', 'kater1cum'] },
      { label: 'Get fucked', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/lake/sex/kater1/kater4.jpg');
    scene.text('The guy bends you over and slides his dick into your pussy before he starts roughly fucking you.');
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Change position', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/lake/sex/kater1/kater5.jpg');
    scene.text('When he gets tired, you push him onto his back and jump on top of him, riding him cowgirl.');
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Change position', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/lake/sex/kater1/kater6.jpg');
    scene.text('His dick still deep inside you, you spin around and keep riding him. After a few minutes, you grow weak with pleasure and fall off of him.');
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/lake/sex/kater1/kater7.jpg');
    scene.text('The guy turns you onto your side and re-enters your pussy, continuing the rhythm from before.');
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Change position', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/lake/sex/kater1/kater8.jpg');
    scene.text('He stands up and pulls you up before lifting one of your legs and forcefully penetrating you. Tired but feeling very satisfied, you hang onto him as he fucks you, waiting for him to finish. After a few more thrusts, he pulls out and lets you fall to your knees before sliding his dick into your mouth, giving you a good taste of your juices.');
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck his dick', goto: ['city_lake', 'kater1cum'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKater1cum(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0));
  qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0));
  qspCall(s, 'cum_call', 'breasts', ((s as any).npcID ?? 0));
  qspCall(s, 'arousal', 'end');
  scene.img('images/locations/city/residential/lake/sex/kater1/kater9.jpg');
  scene.text('You suck his dick for a few seconds before a stream of warm cum starts pouring into your mouth. You begin swallowing, but there\'s so much that it spills out your mouth and drips down your chest and stomach.');
  scene.actions([
    { label: 'Lick him clean', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/lake/sex/kater1/kater10.jpg');
    scene.text('Once he\'s finished, you lick and suck his cock clean, savoring every drop of sperm.');
    scene.actions([
      { label: 'Leave', goto: ['city_lake', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterKater2(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (20);
  qspCall(s, 'npcgeneratec', '', 0, 'a rescuer at the lake', Math.floor(Math.random() * 28) + 18, Math.floor(Math.random() * 2) + 3, 1);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
  qspCall(s, 'npcgeneratec', '', 0, 'a rescuer at the lake', Math.floor(Math.random() * 28) + 18, Math.floor(Math.random() * 2) + 3, 1);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'a');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/lake/sex/kater2/kater1.jpg');
  scene.text('While riding on the banana, you lose your grip and fall into the water. You swallow a lot of water and begin to sink, but you thankfully notice two guys in a boat heading towards you. They pull you out of the lake and you catch your breath, relax and start to look around. You notice that both your saviors are naked…');
  if (((s as any).deodorant_on ?? 0) === 1) {
    qspCall(s, 'sweat', 'remove_deo');
    scene.text('<br>Your deodorant gets washed away in the water.');
  }
  qspCall(s, 'willpower', 'misc', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Pretend to be asleep until docked [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Pretend to be asleep until docked [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['city_lake', 'start'] },
    ]);
  }
  scene.actions([
    { label: 'Approach them', handler: (st: GameState) => {
    (s as any).guy = ((s as any).guy ?? 0) + (2);
    scene.img('images/locations/city/residential/lake/sex/kater2/kater2.jpg');
    scene.text('You grin as you strip out of your swimsuit, walk over to the guys and, without saying a word, jump on one of them and start kissing him passionately as you feel his cock grow hard and press against your ass. You take it in your hand and guide it into your pussy, moaning as it slides into you.');
    qspCall(s, 'arousal', 'vaginal', 5, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Change position', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/lake/sex/kater2/kater3.jpg');
    scene.text('The guy pulls out of you and turns you around before lifting you up and spreading your legs. He pushes his dick against your anus and you moan when it pops into your ass. He then starts fucking you, making you moan even more.');
    scene.text('"Want it deeper?" he asks with a laugh.');
    qspCall(s, 'arousal', 'anal', 5, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Yes', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/lake/sex/kater2/kater4.jpg');
    scene.text('"Yes! Fuck me harder and deeper!" you shout.');
    scene.text('"Well then, hold on!" he replies as he places you down on all fours before he moves in behind you and shoves his cock so deep into your ass that his balls slap against your pussy. The second guy, who up until this point has just been watching, slaps you in the face with his cock. You take it in your hand and start sucking it.');
    qspCall(s, 'arousal', 'bj', (-5), ((s as any).npcID1 ?? 0), 'group');
    qspCall(s, 'arousal', 'anal', 5, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Take both of them', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/lake/sex/kater2/kater5.jpg');
    scene.text('"Fuck me in both holes!" you shout and the two men laugh in marvel at your lust. Feeling very encouraged, they quickly penetrate both your ass and your pussy and satrt vigorously pounding your holes. The pleasure quickly overwhelms you and you scream out in orgasm.');
    qspCall(s, 'arousal', 'vaginal', (-5), ((s as any).npcID1 ?? 0), 'group');
    qspCall(s, 'arousal', 'anal', 5, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/lake/sex/kater2/kater6.jpg');
    scene.text('Once your orgasm passes, the guys sit you on the deck and stand on either side of you, jerking their dicks.');
    scene.actions([
      { label: 'Turn to one', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0));
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/lake/sex/kater2/kater7.jpg');
    scene.text('One of the guys groans and you turn to him with your mouth open. His cum shoots into your mouth and you enthusiastically swallow it.');
    scene.actions([
      { label: 'Turn to the other', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth', 'a rescuer at the lake', ((s as any).npcID1 ?? 0));
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/lake/sex/kater2/kater8.jpg');
    scene.text('The second guy then grabs your head and turns you to face him. He completely covers your face with his load.');
    scene.actions([
      { label: 'Leave', goto: ['city_lake', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKater3(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (20);
  qspCall(s, 'npcgeneratec', '', 0, 'a rescuer at the lake', Math.floor(Math.random() * 28) + 18, Math.floor(Math.random() * 2) + 3, 1);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/lake/sex/kater3/1.jpg');
  scene.text('While riding on the jet ski, you make a turn that\'s too steep and are thrown into the water. You swallow a lot of water and begin to sink, but are suddenly pulled out of the water by a man in a boat. Once you\'re aboard, he ties the jet ski to the boat and sets off. After coughing up water, you catch your breath and start to feel better. The guy stops the boat and walks up to you.');
  scene.text('"How are you beautiful? I just saved your life, so how about you show me some gratitude?" he asks while slowly fondling your pussy.');
  if (((s as any).deodorant_on ?? 0) === 1) {
    qspCall(s, 'sweat', 'remove_deo');
    scene.text('<br>Your deodorant gets washed away in the water.');
  }
  qspCall(s, 'willpower', 'misc', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Take the jet ski and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Take the jet ski and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['city_lake', 'start'] },
    ]);
  }
  scene.actions([
    { label: 'Spread your legs', handler: (st: GameState) => {
    (s as any).guy = ((s as any).guy ?? 0) + (2);
    scene.img('images/locations/city/residential/lake/sex/kater3/2.jpg');
    scene.text('You open your legs, making it clear that you are ready to thank your savior. He smiles and slides his fingers into your pussy as his tongue begins to tease your clitoris.');
    qspCall(s, 'arousal', 'vaginal_finger', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Give blowjob', handler: (st: GameState) => {
    qspCall(s, 'npcgeneratec', '', 0, 'a rescuer at the lake', Math.floor(Math.random() * 28) + 18, Math.floor(Math.random() * 2) + 3, 1);
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'a');
    scene.img('images/locations/city/residential/lake/sex/kater3/4.jpg');
    scene.text('You sit the guy down and start licking his cock before opening your lips and taking it into your mouth. You start passionately sucking until you see a second boat approaching. Your saviour obviously knows him and waves him aboard. He quickly jumps over into the boat and walks up to you. After checking you out, he pulls his cock out and slides it into your pussy.');
    qspCall(s, 'arousal', 'vaginal', 5, ((s as any).npcID1 ?? 0), 'group');
    qspCall(s, 'arousal', 'bj', (-5), ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/lake/sex/kater3/6.jpg');
    scene.text('You climb on top of one of them, taking his cock into your pussy as the other penetrates your ass.');
    qspCall(s, 'arousal', 'vaginal', (-5), ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'arousal', 'anal', 5, ((s as any).npcID1 ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Change position', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/lake/sex/kater3/8.jpg');
    scene.text('The two guys move around in various positions as they take turns fucking both your holes.');
    qspCall(s, 'arousal', 'vaginal', 5, ((s as any).npcID1 ?? 0), 'group');
    qspCall(s, 'arousal', 'anal', (-5), ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/lake/sex/kater3/11.jpg');
    scene.text('They both pull out and you kneel down to let them both cum in your mouth.');
    qspCall(s, 'cum_call', 'mouth', ((s as any).npcID ?? 0));
    qspCall(s, 'cum_call', 'mouth', ((s as any).npcID1 ?? 0));
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['city_lake', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterHorse1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcgeneratec', '', 0, 'Quad rider', Math.floor(Math.random() * 28) + 18, Math.floor(Math.random() * 2) + 3, 1);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
  qspCall(s, 'npcgeneratec', '', 0, 'Quad rider', Math.floor(Math.random() * 28) + 18, Math.floor(Math.random() * 2) + 3, 1);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'a');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/lake/sex/horse1/horse1.jpg');
  scene.text('While riding along the beach, you notice the two men on quad bikes approaching. They wave at you and offer to keep you company.');
  qspCall(s, 'willpower', 'misc', 'resist', 'easy');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
  }, goto: ['city_lake', 'start'] },
    ]);
  }
  scene.actions([
    { label: 'Go with them', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/lake/sex/horse1/horse2.jpg');
    scene.text('You dismount from your horse and go with the men, talking with them about pretty much anything.');
    scene.actions([
      { label: 'Move on', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/lake/sex/horse1/horse3.jpg');
    scene.text('One of the men then suddenly grabs you and begins to paw at you as the other hugs you from behind and reaches into your panties.');
    qspCall(s, 'arousal', 'foreplay', 5);
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'group', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Push them away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Push them away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
  }, goto: ['city_lake', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Go with it', handler: (st: GameState) => {
    (s as any).guy = ((s as any).guy ?? 0) + (2);
    scene.img('images/locations/city/residential/lake/sex/horse1/horse4.jpg');
    scene.text('You pull their cocks out of their pants, squat down and begin to suck them in turn.');
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Fuck them', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/lake/sex/horse1/horse5.jpg');
    scene.text('One of the men lies down and you continue to suck him as the other moves in behind and slides his cock into your pussy.');
    qspCall(s, 'arousal', 'vaginal', 5, ((s as any).npcID1 ?? 0), 'group');
    qspCall(s, 'arousal', 'bj', (-5), ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Change position', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/lake/sex/horse1/horse6.jpg');
    scene.text('You straddle one of the men and the other moves up and starts teasing you with his cock, letting you suck it before pulling away from you.');
    qspCall(s, 'arousal', 'vaginal', 5, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'arousal', 'bj', (-5), ((s as any).npcID1 ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Change position', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/lake/sex/horse1/horse7.jpg');
    scene.text('You climb off the guy you were riding and get on all fours. The two of them then spitroast you as one fucks your pussy and the other pushes his dick into your mouth. You suck the dick in your mouth as you buck your hips, taking the cock as deep into your pussy as you can. A few minutes of this go by before you have a small but satisfying orgasm. You sense that the guys are close as well.');
    qspCall(s, 'arousal', 'vaginal', 5, ((s as any).npcID1 ?? 0), 'group');
    qspCall(s, 'arousal', 'bj', (-5), ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Pull out', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/lake/sex/horse1/horse8.jpg');
    scene.text('You remove the dick from your mouth and begin stroking it. A few seconds, a stream of cum splashes onto your tongue.');
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck the other guy', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/lake/sex/horse1/horse9.jpg');
    scene.text('You kneel before the second man and lick the full length of his shaft before taking him into your mouth, passionately sucking it before he starts groaning.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/lake/sex/horse1/horse11.jpg');
    scene.text('Cum pours into your mouth and you swallow it all before licking and sucking his cock clean.');
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID1 ?? 0));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['city_lake', 'start'] },
    ]);
  } },
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/lake/sex/horse1/horse10.jpg');
    scene.text('You remove the dick from your mouth and begin stroking it. A few seconds, a stream of cum splatters across your face.');
    qspCall(s, 'cum_call', 'face', ((s as any).npcID1 ?? 0));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['city_lake', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterHorse2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcgeneratec', '', 0, 'Horse rider', Math.floor(Math.random() * 28) + 18, Math.floor(Math.random() * 2) + 3, 1);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
  qspCall(s, 'npcgeneratec', '', 0, 'Horse rider', Math.floor(Math.random() * 28) + 18, Math.floor(Math.random() * 2) + 3, 1);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'a');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/lake/sex/horse2/horse1.jpg');
  scene.text('As you\'re riding along the beach, you encounter two men who are also on horseback. They stop and ask if you want join them for a walk.');
  qspCall(s, 'willpower', 'misc', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['city_lake', 'start'] },
    ]);
  }
  scene.actions([
    { label: 'Go with them', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/lake/sex/horse2/horse2.jpg');
    scene.text('You agree and climb down from your horse. You and the men start walking along the beach, talking about pretty much anything.');
    scene.actions([
      { label: 'Return to your horse', goto: ['city_lake', 'start'] },
      { label: 'Tease them', handler: (st: GameState) => {
    (s as any).guy = ((s as any).guy ?? 0) + (2);
    scene.img('images/locations/city/residential/lake/sex/horse2/horse3.jpg');
    scene.text('You slowly rub their groins through their pants. The men look at each other and freeze as you kneel down, pull out their cocks and start stroking and sucking them.');
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Lie back', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/lake/sex/horse2/horse4.jpg');
    scene.text('You lie on your back and one of the men grabs your ankles and spreads your legs wide enough to slide his dick into your ass. You squeal softly and the second kneels next to your head and tries to shove his dick into your mouth.');
    qspCall(s, 'arousal', 'anal', 5, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'arousal', 'bj', (-5), ((s as any).npcID1 ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck him', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/lake/sex/horse2/horse5.jpg');
    scene.text('You take his dick into your mouth and suck it as the other man fucks your ass.');
    qspCall(s, 'arousal', 'anal', 5, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'arousal', 'bj', (-5), ((s as any).npcID1 ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Change position', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/lake/sex/horse2/horse6.jpg');
    scene.text('The man you\'re sucking pulls out and lies down. You straddle him as the other man moves in behind to penetrate your ass. The two men fuck you strongly and your whole body trembles as you orgasm. The two men sound like they\'re close as well.');
    qspCall(s, 'arousal', 'bj', (-5), ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'arousal', 'anal', 5, ((s as any).npcID1 ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Change position', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', ((s as any).npcID1 ?? 0));
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/lake/sex/horse2/horse7.jpg');
    scene.text('You climb off them and kneel down in front of them. They stand on either side of you as they jerk their cocks. One immediately groans as his cum splashes over your face.');
    scene.actions([
      { label: 'Suck the other one', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/lake/sex/horse2/horse8.jpg');
    scene.text('You turn to the other man and wrap your lips around his cock. He pushes deep into your mouth and groans.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0));
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/lake/sex/horse2/horse9.jpg');
    scene.text('He pulls out ands you stick your tongue out. Cum soon splatters into your mouth and down your throat.');
    scene.actions([
      { label: 'Leave', goto: ['city_lake', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterVolleyballIntroDay(s: GameState, scene: SceneBuilder): void {
  scene.text('You are peacefully enjoying your time in the sun when you hear a commotion nearby, raising up on your elbows and lowering your sunglasses you look to where you hear the noise just in time to dodge an errant volleyball.');
  scene.text('You eye the ball with contempt then hear someone call out.');
  scene.text('"Hey can we get our ball?"');
  scene.text('You look up to see a rather fit young man wearing loose swim trunks. Behind him are several of his friend, it looks like they are having a party.');
  scene.text('You see coolers, a grill, and a volleyball net.');
  scene.text('You reach over, grab the ball, and heave it back with a sigh. "Be more careful please. I don\'t want a face full of volleyball, thanks." you say with some rancour as you pass him the ball awkwardly from your towel.');
  scene.text('He lunges forward and catches it then tosses back into the game.');
  scene.text('Turning back to you he offers a smile. "Kinda noticed you were all alone here. Wanna join us? We got plenty of food and could use one more for the game."');
  scene.actions([
    { label: 'Agree to join', goto: ['city_lake', 'volleyball_day'] },
    { label: 'Decline (polite)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) + (1);
    scene.text('"No, Thanks, I am not feeling it today, I am just wanting to take in some sun," you say with a smile.');
    scene.text('He smiles back and says "If you change your mind you know where we are."');
    scene.text('With a laugh he rejoins his friends.');
    scene.text('You spend time enjoying relaxing in the sun, then decide it it time to get up.');
    scene.actions([
      { label: 'Get up', goto: ['city_lake', 'start'] },
      { label: 'Decided to join', goto: ['city_lake', 'volleyball_day'] },
    ]);
  } },
    { label: 'Decline (rude)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) + (1);
    scene.text('You give the guy a cold sneer and say "Go eat a bag of dicks."');
    scene.text('You put you sunglasses back on and begin to lay down.');
    scene.text('Then you hear him say "Damn, bitch. No wonder you are here alone".');
    scene.text('He turns to go back to his party being sure to kick sand in your face as he leaves.');
    scene.text('Grumbling you remove the sand while glowering at him, then go back to tanning.');
    scene.actions([
      { label: 'Get up', goto: ['city_lake', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterVolleyballDay(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 120;
  (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) + (2);
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'drugs', 'alcohol', 'beer');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/lake/volleyballday.jpg');
  scene.text('You walk over to the beach party several people greet you, and you are handed a beer.');
  scene.text('You hangout and dance to the songs coming from the speaker nearby and join in the volleyball game.');
  scene.text('You are not great but have fun and everyone is laughing and having a good time.');
  scene.text('As the party winds down you say goodbye to the group and gather your things to begin making your way home.');
  scene.actions([
    { label: 'Leave', goto: ['city_lake', 'start'] },
  ]);
  scene.build();
}

function enterVolleyballNite(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 120;
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'drugs', 'alcohol', 'beer');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/lake/volleyballnite1.jpg');
  scene.text('You walk over to the beach party several people greet you and you are handed a beer.');
  scene.text('You hangout and dance to the songs coming from the speaker nearby and join in the volleyball game.');
  scene.text('You are not great but have fun and everyone is laughing and having a good time.');
  scene.text('As the party winds down, and the sun finishes setting, you say goodbye to the group, gather your things and begin making your way home.');
  scene.actions([
    { label: 'Leave', goto: ['city_lake', 'start'] },
  ]);
  scene.build();
}

function enterBonfire(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/lake/bonfire.jpg');
  scene.text('As you are gathering your things to leave young guy in trunks runs up to you.');
  scene.text('"Hey, wanna join us?" He says waving to his friends around a bonfire, "we have plenty of food and drinks."');
  scene.text('You consider a moment then decide…"');
  scene.actions([
    { label: 'Join in', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 120;
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'drugs', 'alcohol', 'beer');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/lake/bonfire.jpg');
    scene.text('As you follow your new friend over to the fire pit, he asks, "Hey what\'s your name? Mine is Gregor"');
    // TODO-QSP: dynamic text: "<<$pcs_firstname>>." you responded, as the two of you reach the party.
    scene.text(`"${((s as any).pcs_firstname ?? 0)}." you responded, as the two of you reach the party.`);
    scene.text('You set down your things, and are handed a beer and a stick with a marshmallow on it.');
    scene.text('You enjoy the next couple of hours with Gregor and his friends, laughing, flirting and dancing.');
    scene.text('You finally succeed in roasting a marshmallow and enjoy a tasty smore as the party winds down.');
    scene.text('"We need to do this again sometime," Gregor says as he hands you your towel and beach bag.');
    scene.text('You smile and say "Definitely, I am looking forward to it."');
    scene.text('You wave goodbye and head off the beach."');
    scene.actions([
      { label: 'Leave', goto: ['city_lake', 'start'] },
    ]);
  } },
    { label: 'Decline', handler: (st: GameState) => {
    scene.text('"No Thanks, I need to get home. I have an early day tomorrow, Raincheck?" You say with a smile.');
    scene.text('"Sure, we are here pretty often see ya round," He waves and heads back to his group.');
    scene.actions([
      { label: 'Continue', goto: ['city_lake', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAndreiIntro(s: GameState, scene: SceneBuilder): void {
  (s as any).anreirape = 1;
  scene.text('You fall asleep while sunbathing and dream that someone is caressing your chest. Your nipples harden and you moan softly when something wet glides across your breast.');
  scene.text('Strong hands caress your body and you feel yourself get covered in goosebumps before a finger slides under your swimwear and starts to rub your pussy. You gasp when it finds your clit.');
  scene.text('Your body is thrown into a fever, sweat runs down your back, and you\'re growing wet. You grow aware that the pleasure comes from reality and not a dream, but are still unable to overcome the sleepy bliss and open your eyes.');
  scene.text('The pleasure you\'re feeling leads you into a trance and you moan loudly, wriggling under the hot sun. Just when you think something is about to happen, you\'re startled awake.');
  scene.actions([
    { label: 'Open your eyes', handler: (st: GameState) => {
    scene.text('Opening your eyes, you see the shadowy figure of an unshaven man lustfully staring at you. You become uncomfortable - you\'re lying in front of a stranger, moaning in sexual bliss like a slut. There\'s no one else on the beach and you fear what he might do with you.');
    scene.text('Thoughts flash through your head as the man pulls off his shorts. You can\'t help but stare at his dick - it\'s huge.');
    scene.text('"Like what you see, girl?" he asks with a smile.');
    qspCall(s, 'willpower', 'misc', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Run away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Run away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('You try to get up, but he pulls you in close to his chest.');
    qspCall(s, 'willpower', 'misc', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Knee him in the balls [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Knee him in the balls [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).andrei = 1;
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('You very accurately knee him in the balls and he screams and lets you go. You quickly dash away while he\'s down.');
    scene.actions([
      { label: 'Escape', goto: ['city_lake', 'start'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Keep trying to escape', goto: ['city_lake', 'andrei_rape'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Escape from his clutches', goto: ['city_lake', 'andrei_rape'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAndreiRape(s: GameState, scene: SceneBuilder): void {
  (s as any).andrei = 2;
  (s as any).anreiday = ((s as any).daystart ?? 0);
  (s as any).guy = ((s as any).guy ?? 0) + (1);
  qspCall(s, 'npcStat', 'A46');
  scene.img('images/characters/city/andrew/sex/andreia.jpg');
  scene.text('You try to break out of his grasp, but your feeble struggling makes him even more excited and you feel his now rock-hard cock firmly press into your tender thigh.');
  scene.text('The stranger flips you onto your stomach and begins to lube your anus with his saliva.');
  scene.text('He forcefully spreads your ass and a wheeze escapes from your throat as his giant cock painfully enters your backdoor.');
  scene.text('You grit your teeth in pain as he starts fucking your ass. However, his fingers start rubbing your clit and you start moaning softly.');
  qspCall(s, 'arousal', 'anal', 10);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'More', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'anus', ((s as any).npcID ?? 0));
    scene.img('images/characters/city/andrew/sex/andrei.jpg');
    scene.text('The pleasure overtakes the pain as he keeps rubbing your clit, and a few seconds later you explode in orgasm. He then changes positions and pulls you into an upright position, continues to stimulate your clit as you ride his dick.');
    scene.text('A few minutes later, he lets out a dull growl and warm cum starts spurting into your ass. When he finishes, he lifts you off of his dick and his cum starts trickling out of your ravaged asshole.');
    scene.text('"Did you like that?" the man asks with a touch of irony.');
    qspCall(s, 'arousal', 'vaginal_finger', (-10), 'no_orgasm_msg');
    qspCall(s, 'arousal', 'anal', 10, 'no_orgasm_msg');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Chat', handler: (st: GameState) => {
    scene.text('"Who… who are you?" you ask feebly as you sit in the sand next to him.');
    scene.text('"My name is Andrew." he grins. "And yours?"');
    // TODO-QSP: dynamic text: "<<$pcs_firstname>>." you answer and he smiles.
    scene.text(`"${((s as any).pcs_firstname ?? 0)}." you answer and he smiles.`);
    // TODO-QSP: dynamic text: "So did you like our little game, <<$pcs_firstname>>? Want to catch an even bigg...
    scene.text(`"So did you like our little game, ${((s as any).pcs_firstname ?? 0)}? Want to catch an even bigger thrill? Then come back tomorrow." he says suavely while pulling his shorts back on.`);
    scene.actions([
      { label: 'Leave the beach', goto: ['city_lake', 'start'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'aquapark':
      enterAquapark(s, scene);
      break;
    case 'gidro':
      enterGidro(s, scene);
      break;
    case 'banan':
      enterBanan(s, scene);
      break;
    case 'gorka':
      enterGorka(s, scene);
      break;
    case 'horse':
      enterHorse(s, scene);
      break;
    case 'tour_boat':
      enterTourBoat(s, scene);
      break;
    case 'hut':
      enterHut(s, scene);
      break;
    case 'surf':
      enterSurf(s, scene);
      break;
    case 'windsurf':
      enterWindsurf(s, scene);
      break;
    case 'walklake1':
      enterWalklake1(s, scene);
      break;
    case 'dinribak':
      enterDinribak(s, scene);
      break;
    case 'walklake2':
      enterWalklake2(s, scene);
      break;
    case 'stasValera':
      enterStasValera(s, scene);
      break;
    case 'stasValera2a':
      enterStasValera2a(s, scene);
      break;
    case 'stasValera2b':
      enterStasValera2b(s, scene);
      break;
    case 'stasValera3':
      enterStasValera3(s, scene);
      break;
    case 'stasValera4':
      enterStasValera4(s, scene);
      break;
    case 'vlake1':
      enterVlake1(s, scene);
      break;
    case 'vlake1cum':
      enterVlake1cum(s, scene);
      break;
    case 'vlake2':
      enterVlake2(s, scene);
      break;
    case 'andrey1':
      enterAndrey1(s, scene);
      break;
    case 'kater1':
      enterKater1(s, scene);
      break;
    case 'kater1cum':
      enterKater1cum(s, scene);
      break;
    case 'kater2':
      enterKater2(s, scene);
      break;
    case 'kater3':
      enterKater3(s, scene);
      break;
    case 'horse1':
      enterHorse1(s, scene);
      break;
    case 'horse2':
      enterHorse2(s, scene);
      break;
    case 'volleyball_intro_day':
      enterVolleyballIntroDay(s, scene);
      break;
    case 'volleyball_day':
      enterVolleyballDay(s, scene);
      break;
    case 'volleyball_nite':
      enterVolleyballNite(s, scene);
      break;
    case 'bonfire':
      enterBonfire(s, scene);
      break;
    case 'Andrei_intro':
      enterAndreiIntro(s, scene);
      break;
    case 'andrei_rape':
      enterAndreiRape(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const city_lake: LocationDef = {
  name: 'city_lake',
  title: '<center><h2>Lake</h2></center>',
  region: 'city',
  locationType: 'event_outdoors',
  locclass: 'beach',
  description: ['A large lake close to the city, it is a favorite destination of residents in the summer.'],
  enter: enter,
};
