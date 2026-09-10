import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
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
      if (((s as any).walkrand ?? 0) >= 80  &&  ((s as any).walkrand ?? 0) < 90) {
        scene.actions([
          { label: 'Continue', goto: ['city_lake', 'walklake1'] },
        ]);
      } else {
        scene.actions([
          { label: 'Continue', goto: ['city_lake', 'walklake2'] },
          { label: 'Finish', goto: ['city_lake', 'start'] },
        ]);
      }
      scene.actions([
        { label: 'Continue', goto: ['city_lake', 'volleyball_day'] },
      ]);
    }
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
      if (((s as any).anreiday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).andrei ?? 0) === 2) {
        scene.text('You see Andrew on the beach.');
        scene.actions([
          { label: 'Approach Andrew', goto: ['city_lake', 'andrey1'] },
        ]);
      }
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
      if (((s as any).evrand ?? 0) <= 60  &&  ((s as any).evrand ?? 0) > 40  &&  ((s as any).temp ?? 0) >= 20  &&  ((s as any).daystage ?? 0) === 2  &&  ((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) <= 19  &&  ((s as any).pcs_hotcat ?? 0) >= 7) {
        scene.actions([
          { label: 'Continue', goto: ['city_lake', 'volleyball_intro_day'] },
        ]);
      } else {
        if (((s as any).evrand ?? 0) <= 30  &&  ((s as any).evrand ?? 0) > 20) {
          scene.actions([
            { label: 'Continue', goto: ['city_lake', 'vlake1'] },
          ]);
        } else {
          scene.actions([
            { label: 'Continue', goto: ['city_lake', 'vlake2'] },
            { label: 'Get up', goto: ['city_lake', 'start'] },
          ]);
        }
        scene.actions([
          { label: 'Continue', goto: ['city_lake', 'Andrei_intro'] },
        ]);
      }
      scene.actions([
        { label: 'Continue', goto: ['city_lake', 'bonfire'] },
      ]);
    }
  } },
      ]);
    }
  } },
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

export const city_lake: LocationDef = {
  name: 'city_lake',
  title: '<center><h2>Lake</h2></center>',
  region: 'city',
  locationType: 'event_outdoors',
  locclass: 'beach',
  description: ['A large lake close to the city, it is a favorite destination of residents in the summer.'],
  enter: enter,
};
