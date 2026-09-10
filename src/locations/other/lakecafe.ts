import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).barrnd = Math.floor(Math.random() * 3) + 1;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>The Lake Cafe</b></center>');
  scene.img('images/locations/city/industrial/bbq/lakecafe.jpg');
  scene.text('An old-fashioned BBQ café/diner near the lake, known for offering relatively cheap but tasty meals.');
  // TODO-QSP: dynamic text: Opening hours are from '+func('time', 'get_time_string', 14, 0)+' until '+func('...
  scene.text('Opening hours are from \'+func(\'time\', \'get_time_string\', 14, 0)+\' until \'+func(\'time\', \'get_time_string\', 4, 0)+\'');
  if (((s as any).hour ?? 0) >= 14  ||  ((s as any).hour ?? 0) < 4) {
    if (((s as any).npc_QW ?? 0)?.['A89'] === 0) {
      if (((s as any).barrnd ?? 0) === 1) {
        scene.text('You see a smiling <a href="exec:gt \'lakecafe\', \'barmensha\'">barmaid</a> behind the bar polishing some glasses.');
      }
      if (((s as any).barrnd ?? 0) === 2) {
        scene.text('When you walk into the diner, you see a smiling <a href="exec:gt \'lakecafe\', \'barmensha\'">barmaid</a> picking up some dirty dishes and cleaning a table.');
      }
      if (((s as any).barrnd ?? 0) === 3) {
        scene.text('You see a smiling <a href="exec:gt \'lakecafe\', \'barmensha\'">barmaid</a> behind the bar skillfully making some drinks.');
      }
    } else {
      if (((s as any).barrnd ?? 0) === 1) {
        scene.text('You see <a href="exec:gt \'lakecafe\', \'barmensha\'">Eugene</a> behind the bar with that perpetual smile on her face. She\'s currently polishing some glasses.');
      }
      if (((s as any).barrnd ?? 0) === 2) {
        scene.text('You walk into the diner and see <a href="exec:gt \'lakecafe\', \'barmensha\'">Eugene</a> with that perpetual smile on her face collecting dirty dishes from tables.');
      }
      if (((s as any).barrnd ?? 0) === 3) {
        scene.text('You see <a href="exec:gt \'lakecafe\', \'barmensha\'">Eugene</a> behind the bar with that perpetual smile on her face. She\'s skillfully mixing some drinks.');
      }
    }
    if (((s as any).week ?? 0) === 1  &&  ((s as any).hour ?? 0) === 22) {
      (s as any).LCWorkRand = Math.floor(Math.random() * 6) + 1;
      if (((s as any).LCWorkRand ?? 0) === 1) {
        (s as any).randguycafe = Math.floor(Math.random() * 4) + 3;
        if ((!((s as any).LCwork ?? 0))) {
          scene.text('A group of men are seated at one of the tables. They\'re talking loudly and laughing while having drinks.');
        }
        if (((s as any).LCwork ?? 0) === 1) {
          // TODO-QSP: dynamic text: <a href="exec:gt 'LCwork', 'start1'"><<randguycafe>> men</a> are seated at one o...
          scene.text(`<a href="exec:gt 'LCwork', 'start1'">${((s as any).randguycafe ?? 0)} men</a> are seated at one of the tables. They're talking loudly and laughing while having drinks.`);
        }
      } else {
        if ((!((s as any).LCwork ?? 0))) {
          scene.text('An older man is sitting at one of the tables, enjoying his meal.');
        }
        if (((s as any).LCwork ?? 0) === 1) {
          scene.text('<a href="exec:gt \'LCwork\', \'start2\'">An older man</a> is sitting at one of the tables, enjoying his meal.');
        }
        if (((s as any).LCWorkRand ?? 0) === 3) {
          if ((!((s as any).LCwork ?? 0))) {
            scene.text('Two guys are sitting at one of the tables in a corner. They\'ve clearly had a few drinks already.');
          }
          if (((s as any).LCwork ?? 0) === 1) {
            scene.text('<a href="exec:gt \'LCwork\', \'start3\'">Two men</a> are sitting at one of the tables. They\'ve clearly had a few drinks already.');
          }
        } else {
          if ((!((s as any).LCwork ?? 0))) {
            scene.text('A fairly young couple are seated at one of the tables having a lively discussion. The girl seems a bit embarrassed about something, while the guy exudes confidence.');
          }
          if (((s as any).LCwork ?? 0) === 1) {
            scene.text('<a href="exec:gt \'LCwork\', \'start4\'">A fairly young couple</a> are seated at one of the tables having a lively discussion. The girl seems a bit embarrassed about something, while the guy exudes confidence.');
          }
          if (((s as any).LCWorkRand ?? 0) === 5) {
            if ((!((s as any).LCwork ?? 0))) {
              scene.text('A woman sits by herself at one of the tables, enjoying a nice meal.');
            }
            if (((s as any).LCwork ?? 0) === 1) {
              scene.text('<a href="exec:gt \'LCwork\', \'start5\'">A woman</a> sits by herself at one of the tables, enjoying a nice meal.');
            }
          } else {
            if ((!((s as any).LCwork ?? 0))) {
              scene.text('A fat man is sitting at one of the tables. He\'s loudly talking on his phone, receiving a few disgruntled looks from other diners.');
            }
            if (((s as any).LCwork ?? 0) === 1) {
              scene.text('<a href="exec:gt \'LCwork\', \'start6\'">A fat man</a> is sitting at one of the tables. He\'s loudly talking on his phone, receiving a few disgruntled looks from other diners.');
            }
          }
        }
        if (((s as any).hour ?? 0) >= 23) {
          scene.text('Several <a href="exec:gt \'lakecafe\',\'bandits\'">shady looking men</a> are sitting around a small table in a fairly secluded corner of the diner. They talk in hushed voices amongst each another, and look like they might very well be criminals.');
        }
        scene.text('The diner has a single <a href="exec:gt \'laketoilet\', \'main\'">toilet</a> available, for both males and females.');
        scene.actions([
          { label: 'Order from the menu (0:05)', handler: (st: GameState) => {
    // TODO-QSP: gs 'food_menu'
  } },
          { label: 'Order take-out (0:20) [+$func(\'money\', \'get_cost_string\', 350)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 350) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 350);
      scene.actions([{ label: 'Continue', goto: ['food', 'fast_food'] }]);
    }
  } },
        ]);
      }
      if (((s as any).LCwork2 ?? 0) >= 1  &&  ((s as any).LCwork2day ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) === 18) {
        scene.actions([
          { label: 'Help out in the kitchen', goto: ['lakecafe', 'Kitchen'] },
        ]);
      }
    }
  }
  scene.actions([
    { label: 'Leave the cafe', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['city_industrial', ''] },
  ]);
  scene.build();
}

export const lakecafe: LocationDef = {
  name: 'lakecafe',
  title: 'The Lake Cafe',
  region: 'other',
  locationType: 'event',
  description: ['An old-fashioned BBQ café/diner near the lake, known for offering relatively cheap but tasty meals.'],
  enter: enter,
};
