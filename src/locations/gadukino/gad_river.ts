import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
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
    if (((s as any).temp_rand ?? 0) === 4  &&  ((s as any).GadBoy ?? 0)?.['river_day'] !== ((s as any).daystart ?? 0)  &&  (! qspFunc(s, 'miroslava_schedule', 'is_here', 'river'))  &&  ((s as any).npc_QW ?? 0)?.['A63'] >= 13  &&  ((s as any).hour ?? 0) >= 5) {
      ((s as any).GadBoy ?? {})['river_day'] = ((s as any).daystart ?? 0);
      scene.text('While going to the river, you meet Kolyamba and Vasyan. They first invite you to join them, then insist you go with them.');
      scene.actions([
        { label: 'Go with them', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/sex/mitka/mitkaguysriversex17.jpg');
    scene.text('The boys take you to Vasyan\'s house, where they rudely keep pushing you until you are bent over the kitchen table. They then take turns fucking you…');
    qspCall(s, 'boyStat', 'A61');
    ((s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
    (s as any).pose = 1;
    if ((!((s as any).mesec ?? 0))) {
      qspCall(s, 'dinsex', 'boy_puts_condom');
      qspCall(s, 'dinsex', 'vaginal_sex', 20, 'sub', 'gangbang');
      qspCall(s, 'dinsex', 'sexcum');
    } else {
      qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri');
      qspCall(s, 'dinsex', 'analsex', 20, 'sub', 'gangbang');
    }
    qspCall(s, 'boyStat', 'A62');
    ((s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
    if ((!((s as any).mesec ?? 0))) {
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
    } else {
      if (((s as any).temp_rand ?? 0) === 5  &&  ((s as any).GadBoy ?? 0)?.['river_day'] !== ((s as any).daystart ?? 0)  &&  (! qspFunc(s, 'miroslava_schedule', 'is_here', 'river'))  &&  ((s as any).npc_QW ?? 0)?.['A63'] >= 13  &&  ((s as any).hour ?? 0) >= 5) {
        ((s as any).GadBoy ?? {})['river_day'] = ((s as any).daystart ?? 0);
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
    ((s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
    qspCall(s, 'cum_call', 'butt', ((s as any).boy ?? 0), 1);
    qspCall(s, 'boyStat', 'A61');
    ((s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
    qspCall(s, 'cum_call', 'butt', ((s as any).boy ?? 0), 1);
    qspCall(s, 'boyStat', 'A62');
    ((s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
    qspCall(s, 'cum_call', 'butt', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal_funcs', 'stretch', 'anal', 3);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['gadukino', ''] },
    ]);
  } },
        ]);
      } else {
        if (((s as any).temp_rand ?? 0) === 6  &&  ((s as any).GadBoy ?? 0)?.['river_day'] !== ((s as any).daystart ?? 0)  &&  (! qspFunc(s, 'miroslava_schedule', 'is_here', 'river'))  &&  ((s as any).npc_QW ?? 0)?.['A63'] >= 13  &&  ((s as any).hour ?? 0) >= 5) {
          ((s as any).GadBoy ?? {})['river_day'] = ((s as any).daystart ?? 0);
          scene.text('On your way to the river, you meet Vasyan. But, unfortunately, he insists you follow him home…');
          scene.actions([
            { label: 'Go with him', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A62');
    ((s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
    (s as any).pose = 1;
    if ((!((s as any).mesec ?? 0))) {
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
          ]);
        } else {
          scene.actions([
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
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMirapunish(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 51) + 25);
  qspCall(s, 'stat', '');
  scene.img('images/characters/gadukino/mira/mirapunish.jpg');
  scene.text('You approach Mira. She looks distressed and embarrassingly smiles as you start asking what happened. She pleads with you to release her. As you untie her, she explains that Kolyamba punished her for barely biting his cock as she sucked it…');
  scene.text('"Thank God you showed up," she says with a sigh of relief as you untie her. "I\'m glad you found me and not one of those old hags from the village. They would call me a whore, and I would get scolded for being promiscuous. Those old hags hate us, you know. We\'re young and beautiful, and they are just mean old wretches." said the naked Mira, revealing her true feelings about the villagers. She continues quietly, "Or it could have been even worse. Someone could have abused me, raped me or even killed m…" Then, she suddenly stops and lunges in your arms, weeping. "Thank you," she tells you. "You saved my life!"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['gad_beach', 'start'] },
  ]);
  scene.build();
}

function enterFishers(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/river/gadriverfishers.jpg');
  if (((s as any).fishersday ?? 0) === ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Leave', goto: ['gad_river', 'start'] },
    ]);
  } else {
    scene.actions([
      { label: 'Greet', handler: (st: GameState) => {
    (s as any).fishersday = ((s as any).daystart ?? 0);
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    if (((s as any).fishersQW ?? 0) < 3) {
      (s as any).fishersQW = ((s as any).fishersQW ?? 0) + (1);
    }
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/river/hifishers.jpg');
    scene.text('You politely greet the fishermen, but they are too focused on fishing. One of them absently waves in your general direction in response.');
    if (((s as any).fishersQW ?? 0) >= 3) {
      scene.actions([
        { label: 'Chat', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    if (((s as any).fishersQW ?? 0) === 3) {
      (s as any).fishersQW = 4;
    }
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/river/talkfishers.jpg');
    scene.text('You keep watching as the fishermen throw out their lures. One catches a fish and shows off his trophy before putting it into the fish bail. The two of you chat about fishing.');
    scene.actions([
      { label: 'Leave', goto: ['gad_river', 'start'] },
    ]);
  } },
      ]);
    }
    if (((s as any).fishersQW ?? 0) === 4) {
      scene.actions([
        { label: 'Ask to borrow a fishing rod', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).fishersQW = 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/river/talkfishers.jpg');
    scene.text('You decide to try your luck at fishing and ask the fishermen if they could lend you a fishing rod. Uncle Stepan, a friend of the family, points to a pile of spare rods and tells you to pick one.');
    scene.actions([
      { label: 'Fishing', goto: ['gad_river', 'fishing'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).fishersQW ?? 0) === 5) {
        scene.actions([
          { label: 'Fishing with them', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/river/talkfishers.jpg');
    scene.text('You decide to join your new friends. Uncle Stepan tells you he has plenty of spare rods and hands you a rod while his eyes travel up and down your body.');
    scene.actions([
      { label: 'Fishing', goto: ['gad_river', 'fishing'] },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Leave', goto: ['gad_river', 'start'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterFishing(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/river/gadriver.jpg');
  scene.text('The stream quietly flows over the rocks, pleasantly tickling your ears. You gaze at the village that\'s entirely peaceful. There is a sense of serenity about it today.');
  // TODO-QSP: dynamic text: You caught <<fish>> fish.
  scene.text(`You caught ${((s as any).fish ?? 0)} fish.`);
  if (((s as any).hour ?? 0) < 22) {
    scene.actions([
      { label: 'Throw the bait', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 6) + 5);
    if (((s as any).hour ?? 0) < 12) {
      (s as any).temp_rand = Math.floor(Math.random() * 16) + 0;
    } else {
      if (((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) < 18) {
        (s as any).temp_rand = Math.floor(Math.random() * 21) + 0;
      } else {
        (s as any).temp_rand = Math.floor(Math.random() * 11) + 0;
      }
    }
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/river/fishingriver.jpg');
    scene.text('You throw out the lure and watch the bobber for signs of a nibble.');
    if (((s as any).temp_rand ?? 0) < (Math.floor(Math.random() * 5) + 1)) {
      (s as any).minut = ((s as any).minut ?? 0) + 1;
      qspCall(s, 'stat', '');
      scene.img('images/locations/gadukino/river/nofishingriver.jpg');
      scene.text('Suddenly the bobber dives under the water dramatically. You got one!');
      scene.actions([
        { label: 'Pull', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).temp_randB = Math.floor(Math.random() * 121) + 0;
    if (((s as any).temp_randB ?? 0) < 50) {
      qspCall(s, 'exp_gain', 'react', 1);
    }
    qspCall(s, 'stat', '');
    if (((s as any).pcs_react ?? 0) > ((s as any).temp_randB ?? 0)) {
      qspCall(s, 'mood', 'raise', 'tiny');
      (s as any).minut = ((s as any).minut ?? 0) + 1;
      qspCall(s, 'exp_gain', 'react', 1);
      (s as any).fish = ((s as any).fish ?? 0) + (1);
      qspCall(s, 'stat', '');
      scene.img('images/locations/gadukino/river/fishyes.jpg');
      scene.text('You skillfully strike, pulling the rod up sharply. You feel the rod straining slightly, and after a few moments, you excitedly pull a small fish out of the water.');
    } else {
      qspCall(s, 'mood', 'lower', 'tiny');
      (s as any).minut = ((s as any).minut ?? 0) + 1;
      qspCall(s, 'stat', '');
      scene.img('images/locations/gadukino/river/gadriver.jpg');
      scene.text('You strike, but the lack of tension makes the fish escape from the hook.');
    }
    scene.actions([
      { label: 'Throw another bait', goto: ['gad_river', 'fishing'] },
    ]);
  } },
      ]);
    } else {
      scene.text('The bobber remains perfectly still. Eventually, you decide to try a different lure.');
      scene.actions([
        { label: 'Retrieve bait', goto: ['gad_river', 'fishing'] },
      ]);
    }
  } },
      { label: 'Finish', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/river/talkfishers.jpg');
    scene.text('You\'re tired, so you return the fishing rod to uncle Stepan.');
    if ((!((s as any).fish ?? 0))) {
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Release your catch', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).fish = 0;
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/river/talkfishers.jpg');
    scene.text('You decide to release all the fish you caught today. The other fishermen shake their heads disapprovingly, throwing sidelong glances at your body as you dump the fish back into the river.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
        { label: 'Give the fish to Uncle Stepan', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).fish = 0;
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/river/talkfishers.jpg');
    scene.text('You give all the fish you caught to uncle Stepan, and he makes a show out of reluctantly accepting them. Still, you can see that he is pretty happy with this arrangement.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
        { label: 'Bring a fish to Boniface', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).fish = ((s as any).fish ?? 0) - (1);
    qspCall(s, 'mood', 'raise', 'medium');
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/village/villcat2.jpg');
    scene.text('As soon as you enter the house, Boniface immediately jumps to the floor and twines around your feet. Then, the furry beast starts loudly yowling and pawing at your legs. He has obviously detected the smell of fresh fish. You treat Boniface to a small fish, and within a few minutes, all that remains is a pile of fish bones.');
    if (((s as any).fish ?? 0) > 0) {
      scene.text('You try to give the rest of the fish to your grandmother, but she takes one look at the intact fish and points at your grandfather.');
      if (((s as any).fish_stored ?? 0) >= 10) {
        // TODO-QSP: dynamic text: He sighs heavily, then takes the fish outside to preserve them. Since you can't ...
        scene.text(`He sighs heavily, then takes the fish outside to preserve them. Since you can't store anymore fish in the root cellar, your grandfather decides to give the remaining ${((s as any).fish ?? 0)} away.`);
      } else {
        if (((s as any).fish_stored ?? 0) + ((s as any).fish ?? 0) > 10) {
          (s as any).fish = ((s as any).fish ?? 0) - ((10 - ((s as any).fish_stored ?? 0)));
          // TODO-QSP: dynamic text: He sighs heavily, then takes the fish outside to preserve and store them, fillin...
          scene.text(`He sighs heavily, then takes the fish outside to preserve and store them, filling up the remaining space. He decides to give the remaining ${((s as any).fish ?? 0)} fish away.`);
        } else {
          (s as any).fish_stored = ((s as any).fish_stored ?? 0) + (((s as any).fish ?? 0));
          scene.text('You try to give the rest of the fish to your grandmother, but she takes one look at the intact fish and points at your grandfather. He sighs heavily, then takes the fish outside to preserve and store them in the root cellar.');
          if (((s as any).fish_stored ?? 0) < 10) {
            // TODO-QSP: dynamic text: There's still space for <<10 - fish_stored>> kg of preserved fish.
            scene.text(`There's still space for ${10 - ((s as any).fish_stored ?? 0)} kg of preserved fish.`);
          } else {
            scene.text('There\'s no more space for preserved fish in the root cellar.');
          }
        }
      }
      (s as any).fish = 0;
    }
    scene.actions([
      { label: 'Finish', goto: ['gad_gphouse', 'start'] },
    ]);
  } },
        { label: 'Give the fish to your grandmother', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/grandparents/givefish.jpg');
    scene.text('You try to give the rest of the fish to your grandmother, but she takes one look at the intact fish and points at your grandfather.');
    if (((s as any).fish_stored ?? 0) >= 10) {
      // TODO-QSP: dynamic text: He sighs heavily, then takes the fish outside to preserve them. Since you can't ...
      scene.text(`He sighs heavily, then takes the fish outside to preserve them. Since you can't store anymore fish in the root cellar, your grandfather decides to give the remaining ${((s as any).fish ?? 0)} away.`);
    } else {
      if (((s as any).fish_stored ?? 0) + ((s as any).fish ?? 0) > 10) {
        (s as any).fish = ((s as any).fish ?? 0) - ((10 - ((s as any).fish_stored ?? 0)));
        // TODO-QSP: dynamic text: He sighs heavily, then takes the fish outside to preserve and store them, fillin...
        scene.text(`He sighs heavily, then takes the fish outside to preserve and store them, filling up the remaining space. He decides to give the remaining ${((s as any).fish ?? 0)} fish away.`);
      } else {
        (s as any).fish_stored = ((s as any).fish_stored ?? 0) + (((s as any).fish ?? 0));
        scene.text('You try to give the rest of the fish to your grandmother, but she takes one look at the intact fish and points at your grandfather. He sighs heavily, then takes the fish outside to preserve and store them in the root cellar.');
        if (((s as any).fish_stored ?? 0) < 10) {
          // TODO-QSP: dynamic text: There's still space for <<10 - fish_stored>> kg of preserved fish.
          scene.text(`There's still space for ${10 - ((s as any).fish_stored ?? 0)} kg of preserved fish.`);
        } else {
          scene.text('There\'s no more space for preserved fish in the root cellar.');
        }
      }
    }
    (s as any).fish = 0;
    scene.actions([
      { label: 'Finish', goto: ['gad_gphouse', 'start'] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'mood', 'lower', 'tiny');
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/river/talkfishers.jpg');
    scene.text('Uncle Stepan says, "It\'s time to head home, young lady." You reluctantly return his fishing rod, knowing that\'s it for today.');
    if ((!((s as any).fish ?? 0))) {
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    } else {
      if (((s as any).grandmaQW ?? 0)?.['block'] === 0) {
        scene.actions([
          { label: 'Bring a fish to Boniface', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).fish = ((s as any).fish ?? 0) - (1);
    qspCall(s, 'mood', 'raise', 'medium');
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/village/villcat2.jpg');
    scene.text('As soon as you enter the house, Boniface immediately jumps to the floor and twines around your feet. Then, the furry beast starts loudly yowling and pawing at your legs. He has obviously detected the smell of fresh fish. You treat Boniface to a small fish, and within a few minutes, all that remains is a pile of fish bones.');
    if (((s as any).fish ?? 0) > 0) {
      scene.text('You try to give the rest of the fish to your grandmother, but she takes one look at the intact fish and points at your grandfather.');
      if (((s as any).fish_stored ?? 0) >= 10) {
        // TODO-QSP: dynamic text: He sighs heavily, then takes the fish outside to preserve them. Since you can't ...
        scene.text(`He sighs heavily, then takes the fish outside to preserve them. Since you can't store anymore fish in the root cellar, your grandfather decides to give the remaining ${((s as any).fish ?? 0)} away.`);
      } else {
        if (((s as any).fish_stored ?? 0) + ((s as any).fish ?? 0) > 10) {
          (s as any).fish = ((s as any).fish ?? 0) - ((10 - ((s as any).fish_stored ?? 0)));
          // TODO-QSP: dynamic text: He sighs heavily, then takes the fish outside to preserve and store them, fillin...
          scene.text(`He sighs heavily, then takes the fish outside to preserve and store them, filling up the remaining space. He decides to give the remaining ${((s as any).fish ?? 0)} fish away.`);
        } else {
          (s as any).fish_stored = ((s as any).fish_stored ?? 0) + (((s as any).fish ?? 0));
          scene.text('You try to give the rest of the fish to your grandmother, but she takes one look at the intact fish and points at your grandfather. He sighs heavily, then takes the fish outside to preserve and store them in the root cellar.');
          if (((s as any).fish_stored ?? 0) < 10) {
            // TODO-QSP: dynamic text: There's still space for <<10 - fish_stored>> kg of preserved fish.
            scene.text(`There's still space for ${10 - ((s as any).fish_stored ?? 0)} kg of preserved fish.`);
          } else {
            scene.text('There\'s no more space for preserved fish in the root cellar.');
          }
        }
      }
      (s as any).fish = 0;
    }
    scene.actions([
      { label: 'Finish', goto: ['gad_gphouse', 'start'] },
    ]);
  } },
          { label: 'Give the fish to your grandmother', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/grandparents/givefish.jpg');
    scene.text('You try to give the rest of the fish to your grandmother, but she takes one look at the intact fish and points at your grandfather.');
    if (((s as any).fish_stored ?? 0) >= 10) {
      // TODO-QSP: dynamic text: He sighs heavily, then takes the fish outside to preserve them. Since you can't ...
      scene.text(`He sighs heavily, then takes the fish outside to preserve them. Since you can't store anymore fish in the root cellar, your grandfather decides to give the remaining ${((s as any).fish ?? 0)} away.`);
    } else {
      if (((s as any).fish_stored ?? 0) + ((s as any).fish ?? 0) > 10) {
        (s as any).fish = ((s as any).fish ?? 0) - ((10 - ((s as any).fish_stored ?? 0)));
        // TODO-QSP: dynamic text: He sighs heavily, then takes the fish outside to preserve and store them, fillin...
        scene.text(`He sighs heavily, then takes the fish outside to preserve and store them, filling up the remaining space. He decides to give the remaining ${((s as any).fish ?? 0)} fish away.`);
      } else {
        (s as any).fish_stored = ((s as any).fish_stored ?? 0) + (((s as any).fish ?? 0));
        scene.text('You try to give the rest of the fish to your grandmother, but she takes one look at the intact fish and points at your grandfather. He sighs heavily, then takes the fish outside to preserve and store them in the root cellar.');
        if (((s as any).fish_stored ?? 0) < 10) {
          // TODO-QSP: dynamic text: There's still space for <<10 - fish_stored>> kg of preserved fish.
          scene.text(`There's still space for ${10 - ((s as any).fish_stored ?? 0)} kg of preserved fish.`);
        } else {
          scene.text('There\'s no more space for preserved fish in the root cellar.');
        }
      }
    }
    (s as any).fish = 0;
    scene.actions([
      { label: 'Finish', goto: ['gad_gphouse', 'start'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Release your catch', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).fish = 0;
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/river/talkfishers.jpg');
    scene.text('You decide to release all the fish you caught today. The other fishermen shake their heads disapprovingly, throwing sidelong glances at your body as you dump the fish back into the river.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
        { label: 'Give to Uncle Stepan', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).fish = 0;
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/river/talkfishers.jpg');
    scene.text('You give all the fish caught to uncle Stepan, who reluctantly accepts them. You can see he is pretty happy with this arrangement.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'mirapunish':
      enterMirapunish(s, scene);
      break;
    case 'fishers':
      enterFishers(s, scene);
      break;
    case 'fishing':
      enterFishing(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gad_river: LocationDef = {
  name: 'gad_river',
  title: '<center><h2>Slavka River</h2></center>',
  region: 'gadukino',
  locationType: 'public_outdoors',
  enter: enter,
};
