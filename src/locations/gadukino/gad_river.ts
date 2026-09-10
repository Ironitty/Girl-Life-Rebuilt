import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gad_river', 'start');
  qspCall(s, 'schedule', 'A60');
  qspCall(s, 'stat', '');
  scene.text('<center><h2>Slavka River</h2></center>');
  if (((s as any).month ?? 0) >= 5  &&  ((s as any).month ?? 0) <= 9) {
    if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 22) {
      scene.img('images/locations/gadukino/river/gadriver.jpg');
    } else {
      scene.img('images/locations/gadukino/river/gadriver_night.jpg');
    }
  } else {
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 18) {
      scene.img('images/locations/gadukino/river/gadriver_winter.jpg');
    } else {
      scene.img('images/locations/gadukino/river/gadriver_winter_night.jpg');
    }
  }
  scene.text('A large river flows lazily for a few hundred meters on the northern outskirts of Gadukino.');
  if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 21  &&  ((s as any).sunWeather ?? 0) === 1) {
    scene.text('You see the local <a href="exec:gt \'gad_river\', \'fishers\'">fishermen</a> fishing with their rods on the riverbank.');
  }
  (s as any).temp_rand = Math.floor(Math.random() * 21) + 0;
  if (((s as any).temp_rand ?? 0) === 1  &&  ((s as any).hour ?? 0) < 5  &&  ((s as any).month ?? 0) >= 5  &&  ((s as any).month ?? 0) <= 9  &&  ((s as any).MiraVars ?? 0)?.['QW'] >= 20) {
    scene.text('Right next to the path leading to the river, you see <a href="exec: gt \'gad_river\', \'mirapunish\' ">Mira</a> naked, bound with ropes between two trees…');
  } else {
    (s as any).GadBoy['river_day'] = ((s as any).daystart ?? 0);
    scene.text('While going to the river, you meet Kolyamba and Vasyan. They first invite you to join them, then insist you go with them.');
    if (((s as any).temp_rand ?? 0) === 5  &&  ((s as any).GadBoy ?? 0)?.['river_day'] !== ((s as any).daystart ?? 0)  &&  (! qspFunc(s, 'miroslava_schedule', 'is_here', 'river'))  &&  ((s as any).npc_QW ?? 0)?.['A63'] >= 13  &&  ((s as any).hour ?? 0) >= 5) {
      (s as any).GadBoy['river_day'] = ((s as any).daystart ?? 0);
      scene.text('While walking towards the river, you meet the village boys you\'ve been drinking with recently. They ask you to go with them.');
      scene.actions([
        { label: 'Go with them', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/sex/mitka/mitkaguysriversex18.jpg');
    scene.text('The boys lead you to Vasyan\'s house and start undressing; following their lead, you strip off, too, "We\'re going to fuck your ass. I hope you can enjoy it, but I\'m not going to be upset if you don\'t."');
    qspCall(s, 'arousal', 'auto_lube', 'anal');
    scene.text('They don\'t say anything more before they spend the next hour fucking you in the ass…');
    qspCall(s, 'arousal', 'anal', 20, 'gangbang', 'sub');
    qspCall(s, 'arousal', 'anal', 20, 'gangbang', 'sub');
    qspCall(s, 'arousal', 'anal', 20, 'gangbang', 'sub');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'boyStat', 'A63');
    (s as any).npc_had_sex[$boy] = 1;
    qspCall(s, 'cum_call', 'butt', ((s as any).boy ?? 0), 1);
    qspCall(s, 'boyStat', 'A61');
    (s as any).npc_had_sex[$boy] = 1;
    qspCall(s, 'cum_call', 'butt', ((s as any).boy ?? 0), 1);
    qspCall(s, 'boyStat', 'A62');
    (s as any).npc_had_sex[$boy] = 1;
    qspCall(s, 'cum_call', 'butt', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal_funcs', 'stretch', 'anal', 3);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['gadukino', ''] },
    ]);
  } },
      ]);
    } else {
      (s as any).GadBoy['river_day'] = ((s as any).daystart ?? 0);
      scene.text('On your way to the river, you meet Vasyan. But, unfortunately, he insists you follow him home…');
      scene.actions([
        { label: 'Go with him', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A62');
    (s as any).npc_had_sex[$boy] = 1;
    (s as any).pose = 1;
    if (((s as any).mesec ?? 0) === 0) {
      scene.img('images/locations/gadukino/sex/mitka/mitkaguysriversex20.jpg');
      scene.text('As soon as you open the door, Vasyan pushes you inside and pulls your clothes off crudely. Once you are naked, he moves you towards the sofa and forces you to your knees…');
      qspCall(s, 'arousal', 'vaginal', 20, 'sub');
      qspCall(s, 'cum_call', 'butt', ((s as any).boy ?? 0), 1);
    } else {
      scene.img('images/locations/gadukino/sex/mitka/mitkaguysriversex21.jpg');
      scene.text('As soon as you open the door, Vasyan pushes you inside and pulls your clothes off crudely. He then throws you onto his bed. Noticing that you are slightly bleeding, he asks if it is that time of the month. You whimper, "Yes." He curses angrily, turns you over and begins roughly fucking your ass…');
      qspCall(s, 'arousal', 'anal', 20, 'sub');
      qspCall(s, 'cum_call', 'butt', ((s as any).boy ?? 0), 1);
    }
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['gadukino', ''] },
    ]);
  } },
        { label: 'Walk to the beach (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['gad_beach', 'start'] },
        { label: 'Walk to the road (0:10)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['gad_road', 'start'] },
        { label: 'Walk to Gadukino (0:20)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
  }, goto: ['gadukino', ''] },
      ]);
    }
    scene.actions([
      { label: 'Go with them', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/sex/mitka/mitkaguysriversex17.jpg');
    scene.text('The boys take you to Vasyan\'s house, where they rudely keep pushing you until you are bent over the kitchen table. They then take turns fucking you…');
    qspCall(s, 'boyStat', 'A61');
    (s as any).npc_had_sex[$boy] = 1;
    (s as any).pose = 1;
    if (((s as any).mesec ?? 0) === 0) {
      qspCall(s, 'dinsex', 'boy_puts_condom');
      qspCall(s, 'dinsex', 'vaginal_sex', 20, 'sub', 'gangbang');
      qspCall(s, 'dinsex', 'sexcum');
    } else {
      qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri');
      qspCall(s, 'dinsex', 'analsex', 20, 'sub', 'gangbang');
    }
    qspCall(s, 'boyStat', 'A62');
    (s as any).npc_had_sex[$boy] = 1;
    if (((s as any).mesec ?? 0) === 0) {
      qspCall(s, 'dinsex', 'boy_puts_condom');
      qspCall(s, 'dinsex', 'vaginal_sex', 20, 'sub', 'gangbang');
      qspCall(s, 'dinsex', 'sexcum');
    } else {
      qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri');
      qspCall(s, 'dinsex', 'analsex', 20, 'sub', 'gangbang');
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['gadukino', ''] },
    ]);
  } },
    ]);
  }
  scene.build();
}

export const gad_river: LocationDef = {
  name: 'gad_river',
  title: '<center><h2>Slavka River</h2></center>',
  region: 'gadukino',
  locationType: 'public_outdoors',
  description: ['A large river flows lazily for a few hundred meters on the northern outskirts of Gadukino.'],
  enter: enter,
};
