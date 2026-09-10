import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gadukino', '');
  qspCall(s, 'miroslava_schedule', '');
  qspCall(s, 'gadukino_event', 'sound');
  (s as any).temp_rand = Math.floor(Math.random() * 10) + 1;
  if (((s as any).temp_rand ?? 0) === 1  &&  ((s as any).GadBoy ?? 0)?.['mitka_day'] !== ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) < 20  &&  (((s as any).npc_QW ?? 0)?.['A63'] < 11  ||  ((s as any).GadBoy ?? 0)?.['river_gang'] > 2)) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Mitka Shkvoryen</b></center>');
    scene.img('images/characters/shared/headshots_main/big63.jpg');
    scene.text('As you walk through the village, you are approached by Mitka, your childhood friend.');
    scene.actions([
      { label: 'Say hello', goto: ['mitka', ''] },
    ]);
  } else {
    if (((s as any).npc_QW ?? 0)?.['A63'] === 20  &&  ((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) < 20  &&  ((s as any).month ?? 0) >= 4  &&  ((s as any).month ?? 0) <= 10  &&  ((s as any).gadboyday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).week ?? 0) > 5  &&  ((s as any).GadBoy ?? 0)?.['river_gang'] < 1) {
      scene.actions([{ label: 'Continue', goto: ['gadukino_event', 'gadriver_gang'] }]);
    }
    if (((s as any).GadBoy ?? 0)?.['river_gang'] === 1  &&  ((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) < 20  &&  ((s as any).gadboyday ?? 0) !== ((s as any).daystart ?? 0)) {
      scene.actions([{ label: 'Continue', goto: ['gadukino_event', 'gang_apologise'] }]);
    }
    if (((s as any).GadBoy ?? 0)?.['river_gang'] === 3  &&  ((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) < 20  &&  ((s as any).gadboyday ?? 0) !== ((s as any).daystart ?? 0)) {
      scene.actions([{ label: 'Continue', goto: ['gadukino_event', 'mitka_apologise'] }]);
    }
    if (((s as any).GadBoy ?? 0)?.['river_gang'] === 4  &&  ((s as any).MiraVars ?? 0)?.['had_sex'] === 1  &&  ((s as any).MiraVars ?? 0)?.['cuni_given'] === 0  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 20  &&  ((s as any).gadboyday ?? 0) !== ((s as any).daystart ?? 0)) {
      scene.actions([{ label: 'Continue', goto: ['gadukino_event', 'mira_apologise'] }]);
    }
    if (((s as any).GadBoy ?? 0)?.['river_gang'] === 2  &&  ((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) < 20  &&  ((s as any).month ?? 0) >= 4  &&  ((s as any).month ?? 0) <= 10  &&  ((s as any).gadboyday ?? 0) !== ((s as any).daystart ?? 0)) {
      (s as any).temp_randB = Math.floor(Math.random() * 12) + 1;
      if (((s as any).temp_randB ?? 0) <= 4) {
        if (((s as any).temp_randB ?? 0) === 4) {
          if (((s as any).GadBoy ?? 0)?.['mitka_day'] !== ((s as any).daystart ?? 0)  &&  ((s as any).GadBoy ?? 0)?.['kolyamba_day'] !== ((s as any).daystart ?? 0)) {
            // TODO-QSP: gt 'gadukino_event', 'gadukino_2boys', '1'
          } else {
            // TODO-QSP: gt 'gadukino_event', 'gadukino_2boys', '2'
            if (((s as any).GadBoy ?? 0)?.['kolyamba_day'] !== ((s as any).daystart ?? 0)  &&  ((s as any).GadBoy ?? 0)?.['vasyan_day'] !== ((s as any).daystart ?? 0)) {
              // TODO-QSP: gt 'gadukino_event', 'gadukino_2boys', '3'
            } else {
              scene.actions([{ label: 'Continue', goto: ['gadukino_event', 'gadukino_mitka'] }]);
              if (((s as any).GadBoy ?? 0)?.['kolyamba_day'] !== ((s as any).daystart ?? 0)) {
                scene.actions([{ label: 'Continue', goto: ['gadukino_event', 'gadukino_kolyamba'] }]);
              } else {
                scene.actions([{ label: 'Continue', goto: ['gadukino_event', 'gadukino_vasyan'] }]);
              }
              if (((s as any).GadBoy ?? 0)?.['mitka_day'] !== ((s as any).daystart ?? 0)) {
                scene.actions([{ label: 'Continue', goto: ['gadukino_event', 'gadukino_mitka'] }]);
              } else {
                scene.actions([{ label: 'Continue', goto: ['gadukino_event', 'gadukino_kolyamba'] }]);
                if (((s as any).GadBoy ?? 0)?.['vasyan_day'] !== ((s as any).daystart ?? 0)) {
                  scene.actions([{ label: 'Continue', goto: ['gadukino_event', 'gadukino_vasyan'] }]);
                }
              }
              if (((s as any).temp_rand ?? 0) <= 6) {
                if (((s as any).npc_QW ?? 0)?.['A63'] >= 11  &&  ((s as any).MiraVars ?? 0)?.['had_sex'] === 1  &&  ((s as any).MiraVars ?? 0)?.['QW'] < 11  &&  ((s as any).MiraVars ?? 0)?.['event_day'] !== ((s as any).daystart ?? 0)) {
                  scene.actions([{ label: 'Continue', goto: ['gad_meadow', 'mira_lesb_talk4'] }]);
                }
              }
            }
            qspCall(s, 'stat', '');
            scene.text('<center><h2>Gadukino</h2></center>');
            if (((s as any).month ?? 0) >= 4  &&  ((s as any).month ?? 0) <= 10) {
              if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 22) {
                scene.img('images/locations/gadukino/village/street.jpg');
              } else {
                scene.img('images/locations/gadukino/village/street_night.jpg');
              }
            } else {
              if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 18) {
                scene.img('images/locations/gadukino/village/street_winter.jpg');
              } else {
                scene.img('images/locations/gadukino/village/street_winter_night.jpg');
              }
            }
            scene.text('A small village with many old wooden houses and even more in various states of disrepair. It has certainly seen better times.');
            if (qspFunc(s, 'car_funcs', 'is_here')) {
              // TODO-QSP: dynamic text: <a href="exec:gs 'carF', 'start'">Your <<$car['name']>></a> is close by.
              scene.text(`<a href="exec:gs 'carF', 'start'">Your ${((s as any).car ?? 0)?.['name']}</a> is close by.`);
            }
            // TODO-QSP: dynamic text: Several small farms are scattered around the outskirts of the village, one of wh...
            scene.text('Several small farms are scattered around the outskirts of the village, one of which belongs to <a href="exec:minut += 5 & gt \'gad_gpyard\', \'start\'">your grandparents</a>.');
            if (((s as any).home ?? 0)?.['current'] === 'hunters_lodge'  ||  ((s as any).home ?? 0)?.['current'] === 'grandparents_house') {
              if (((s as any).vladimirQW ?? 0)?.['day'] === ((s as any).daystart ?? 0)  &&  ((s as any).vladimirQW ?? 0)?.['stage'] === 30  &&  ((s as any).hour ?? 0) >= 16  &&  ((s as any).week ?? 0) === 6) {
                scene.text('<a href="exec:gt \'vladimirQW_meet\',\'2\'">There\'s an Audi parked in the street, and standing beside it, you notice Vladimir</a>.');
              }
              if (((s as any).vladimirQW ?? 0)?.['day'] === ((s as any).daystart ?? 0)  &&  ((s as any).vladimirQW ?? 0)?.['stage'] === 40  &&  ((s as any).hour ?? 0) >= 16  &&  ((s as any).week ?? 0) === 6) {
                scene.text('<a href="exec:gt \'vladimirQW_meet\',\'3\'">There\'s an Audi parked in the street, and standing beside it, you notice Vladimir</a>.');
              }
              if (((s as any).arrsize ?? 0)('lover') > 0) {
                (s as any).temp_i = 0;
                (s as any).temp_max_i = 0;
                // TODO-QSP: :lover_pickup_loop
                if (((s as any).npc_meetday ?? 0)?.[String((s as any).temp_npcid ?? 0)] === ((s as any).daystart ?? 0)  &&  ((s as any).npc_meethour ?? 0)?.[String((s as any).temp_npcid ?? 0)] === ((s as any).hour ?? 0)) {
                  // TODO-QSP: dynamic text: <b><a href="exec: gt 'lover_meet', 'start', '<<$temp_npcid>>'"><<$npc_usedname[$...
                  scene.text(`<b><a href="exec: gt 'lover_meet', 'start', '${((s as any).temp_npcid ?? 0)}'">${((s as any).npc_usedname ?? 0)?.[String((s as any).temp_npcid ?? 0)]}</a> is waiting in the street.</b>`);
                }
                (s as any).temp_i = ((s as any).temp_i ?? 0) + (1);
                if (((s as any).temp_i ?? 0) < ((s as any).temp_max_i ?? 0)) {
                  // TODO-QSP: jump 'lover_pickup_loop'
                }
              }
            }
            if (((s as any).npc_rel ?? 0)?.['A60'] > 0  &&  ((s as any).npc_known ?? 0)?.['A60'] === 1) {
              // TODO-QSP: dynamic text: Just down the road from your grandparents' house is <a href="exec:minut += 5 & g...
              scene.text('Just down the road from your grandparents\' house is <a href="exec:minut += 5 & gt \'gad_miroslava_home\', \'start\'">Mira\'s house</a>.');
              scene.actions([
                { label: 'Go to Mira\'s house', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['gad_miroslava_home', 'start'] },
              ]);
            }
            if (((s as any).month ?? 0) >= 6  &&  ((s as any).month ?? 0) <= 9) {
              if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 16) {
                scene.text('An old farm truck is parked halfway off one of the roads nearby. The farmer who owns it will buy <a href="exec: gt \'gadukino\',\'collection_point\'">mushrooms and berries</a> from the locals to sell back in the city. He makes multiple trips from Gadukino to the city daily to ensure the freshest produce so he can be found from 6 am to 4 pm.');
              } else {
                scene.text('This time of year, a truck usually comes by multiple times a day between 6 am and 4 pm to purchase mushrooms and berries from the locals.');
              }
            } else {
              scene.text('During the summer, a truck usually comes into town from the city to buy fresh mushrooms and berries from the locals. It\'s not the right season for it right now, though.');
            }
            scene.text('In the center of the village is a small grass-covered square where villagers gather to meet and discuss or argue about politics or village life.');
            // TODO-QSP: dynamic text: Near the square sits the old <a href="exec: minut += 3 & gt 'gad_church','start'...
            scene.text('Near the square sits the old <a href="exec: minut += 3 & gt \'gad_church\',\'start\'">chapel</a>, it is not in the best shape, but it appears well-loved.');
            if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 20) {
              // TODO-QSP: dynamic text: One of the buildings facing the square has a sign saying, <a href="exec: minut +...
              scene.text('One of the buildings facing the square has a sign saying, <a href="exec: minut += 5 & gt \'gad_store\'">General Store</a>. A sign on the door proclaims it "OPEN". It looks like the only place in the village to buy goods.');
              scene.actions([
                { label: 'Go to the general store', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['gad_store', ''] },
              ]);
            } else {
              scene.text('One of the buildings facing the square has a sign saying, General Store. A sign on the door proclaims it "CLOSED". It looks like the only place in the village to buy goods.');
            }
            if ((((s as any).week ?? 0) === 4  ||  ((s as any).week ?? 0) === 7)  &&  ((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 20) {
              // TODO-QSP: act 'Go to the nearby farmers market': gt 'gad_market', 'start'
            }
            if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 20) {
              scene.actions([
                { label: 'Walk around the village (0:15)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    if (Math.floor(Math.random() * 2) + 0 === 0  &&  qspFunc(s, 'miroslava_schedule', 'is_here')) {
      scene.actions([{ label: 'Continue', goto: ['gadukino', 'mira_events'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['gadukino', 'other_events'] }]);
    }
  } },
              ]);
            }
            if (((s as any).month ?? 0) >= 6  &&  ((s as any).month ?? 0) <= 9  &&  ((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 16) {
              // TODO-QSP: act 'Sell mushrooms and berries': gt 'gadukino', 'collection_point'
            }
            if ((((s as any).hour ?? 0) <= 5  ||  ((s as any).hour ?? 0) >= 21)  &&  ((s as any).succubusQW ?? 0) === 14  &&  ((s as any).suchuntday ?? 0) !== ((s as any).daystart ?? 0)) {
              scene.actions([
                { label: 'Go Hunting (this can take a lot of time)', handler: (st: GameState) => {
    (st as any).suchunt = 1;
  }, goto: ['gadukino', 'succubus_hunt'] },
              ]);
            }
            qspCall(s, 'camera', 'check_location');
            scene.actions([
              { label: 'Go to your grandparent\'s house', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['gad_gpyard', 'start'] },
              { label: 'Walk to the forest road (0:10)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['gad_road', 'start'] },
              { label: 'Walk to the highway (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['road', '10'] },
            ]);
          }
        }
      }
    }
  }
  scene.build();
}

export const gadukino: LocationDef = {
  name: 'gadukino',
  title: 'Mitka Shkvoryen',
  region: 'gadukino',
  locationType: 'public_outdoors',
  description: ['As you walk through the village, you are approached by Mitka, your childhood friend.'],
  enter: enter,
};
