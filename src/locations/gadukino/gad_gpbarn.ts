import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gad_gpbarn', '');
  (s as any).location_type = 'secluded';
  qspCall(s, 'miroslava_schedule', '');
  qspCall(s, 'stat', '');
  scene.text('<center><h4>Grandparents\' Barn</h4></center>');
  if (((s as any).month ?? 0) >= 4  &&  ((s as any).month ?? 0) <= 10) {
    if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 22) {
      scene.img('images/locations/gadukino/gp_dacha/sarai.jpg');
    } else {
      scene.img('images/locations/gadukino/gp_dacha/sarai_night.jpg');
    }
  } else {
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 18) {
      scene.img('images/locations/gadukino/gp_dacha/sarai_winter.jpg');
    } else {
      scene.img('images/locations/gadukino/gp_dacha/sarai_winter_night.jpg');
    }
  }
  scene.text('Your grandparents\' old barn could hold some valuable items if you spend time searching.');
  scene.text('To the left is the new staircase built to convert some of the loft space into a bedroom to afford guests privacy.');
  scene.text('The right side of the barn is piled high with various boxes, barrels, and chests of items.');
  scene.text('You can store some extra mushrooms and berries here if you don\'t want to carry them around all the time.');
  scene.text('The left side of the barn has stalls for your grandparents\' horse, cow, and boar.');
  qspCall(s, 'gp_zlatek', 'check_for_chores', 'barn');
  qspCall(s, 'bicycle', 'gad_gpbarn');
  if (((s as any).mc_inventory ?? 0)?.['vintage_card'] > 0) {
    scene.actions([
      { label: 'View your vintage porn cards', handler: (st: GameState) => {
    (st as any).card_loc = 'gad_gpbarn';
    (st as any).card_deck = 0;
    qspGoto(st, 'card', '');
  } },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['card'] > 0) {
    scene.actions([
      { label: 'View your new porn cards', handler: (st: GameState) => {
    (st as any).card_loc = 'gad_gpbarn';
    (st as any).card_deck = 1;
    qspGoto(st, 'card', '');
  } },
    ]);
  }
  if (((s as any).pcs_horny ?? 0) >= 50) {
    scene.actions([
      { label: 'Masturbate', goto: ['selfplay', 'start'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back to the yard', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gad_gpyard', 'start'] },
    { label: 'Go to your room', goto: ['gad_gpbarn', 'barn_room'] },
    { label: 'Enter the horses stall', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gad_gpbarn', 'horse'] },
    { label: 'Enter the cows stall', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gad_gpbarn', 'cow'] },
    { label: 'Enter the boars stall', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gad_gpbarn', 'boar'] },
    { label: 'Search around in the barn (0:15)', goto: ['gad_gpbarn', 'search'] },
  ]);
  scene.build();
}

function enterSearch(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_qw ?? 0)?.['A221'] > 0  &&  ((s as any).grigory_barn ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) > 8  &&  ((s as any).hour ?? 0) < 12) {
    qspGoto(s, 'grigory', 'barn');
  }
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  if (((s as any).BikeLoc ?? 0) === 0  &&  (Math.floor(Math.random() * 11) + 0) >= 6) {
    (s as any).BikeLoc = 1;
    qspCall(s, 'exp_gain', 'observ', 3);
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/village/findbike.jpg');
    scene.text('You find an old bicycle in the far corner of the barn. It\'s in surprisingly good condition. You pull it out of the barn and clean it up.');
  } else {
    if (((s as any).findbag ?? 0) === 0  &&  qspFunc(s, 'purses', 'is_owned', 'gm', 5) === 0  &&  (Math.floor(Math.random() * 11) + 0) >= 7) {
      (s as any).findbag = 1;
      qspCall(s, 'exp_gain', 'observ', 3);
      qspCall(s, 'stat', '');
      scene.img('images/pc/items/gm/purses/5.jpg');
      scene.text('In a far corner of the barn, you find a hessian sack filled with mostly junk, but at the bottom, you find a good-quality messenger bag.');
      scene.text('You can use this cool-looking bag as a handbag.');
      qspCall(s, 'purses', 'add_item', 'gm', 5);
      if ((!((s as any).bag ?? 0))) {
        qspCall(s, 'purses', 'wear', 'gm', 5);
      }
    } else {
      if (((s as any).mc_inventory ?? 0)?.['vintage_card'] === 0  &&  ((s as any).vcard_trash ?? 0) === 0  &&  (Math.floor(Math.random() * 11) + 0) >= 8) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['vintage_card'] = 1;
        qspCall(s, 'exp_gain', 'observ', 3);
        qspCall(s, 'stat', '');
        scene.img('images/locations/gadukino/village/vcards.jpg');
        scene.text('"Hmm, what\'s this?" You\'ve found an unopened deck of vintage adult playing cards still in its original cellophane wrapper.');
      } else {
        if (((s as any).findbraclet ?? 0) === 0  &&  (Math.floor(Math.random() * 11) + 0) >= 9) {
          (s as any).findbraclet = 1;
          qspCall(s, 'exp_gain', 'observ', 3);
          qspCall(s, 'stat', '');
          scene.img('images/locations/gadukino/village/bracelet.jpg');
          scene.text('While looking through the barn, you spot a metal glint under a wood pile. Upon closer inspection, you see a silver bracelet crafted into a snake\'s likeness. Strange, but fantastic that you would find something this valuable in the barn.');
        } else {
          if (((s as any).findbraclet ?? 0) > 0  &&  ((s as any).findneck ?? 0) === 0  &&  (Math.floor(Math.random() * 11) + 0) >= 10) {
            (s as any).findneck = 1;
            qspCall(s, 'exp_gain', 'observ', 3);
            qspCall(s, 'stat', '');
            scene.img('images/locations/gadukino/village/necklace.jpg');
            if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic') {
              scene.text('While looking through the barn, your foot goes through a rotten floorboard. You suddenly feel the presence of something magical under the floor. You get on your belly and look through the hole in the floor. You find a small box made of black wood. You pick up the box and see it\'s covered in strange writing and glyphs that look like serpents. A feeling of power is coming from within the box. You lift the box\'s lid and see a black metal necklace that looks like a coiled snake with ruby eyes. You feel the power coming from the necklace, but it doesn\'t feel like any power you have ever felt.');
            } else {
              scene.text('While looking through the barn, your foot goes through a rotten floorboard and gets stuck. As you work your foot free, you glimpse something underneath the floor - a box or something. You get on your belly and look through the hole in the floor. You find a small box made of black wood. You pick up the box and see it\'s covered in strange writing and glyphs that look like serpents. The exotic look of the box gives you gooseflesh, and you find yourself holding your breath as you prepare to open the box. You lift the box\'s lid and see a black metal necklace that looks like a coiled snake with ruby eyes. You inspect the necklace, watching the light sparkle as it is reflected by the facets on the deep red rubies. You cannot begin to guess what this necklace must be worth.');
            }
          } else {
            qspCall(s, 'exp_gain', 'observ', (Math.floor(Math.random() * 2) + 0));
            qspCall(s, 'stat', '');
            scene.img('images/locations/gadukino/gp_dacha/junk_barn.jpg');
            scene.text('In the barn, you find many mouldy magazines, rusty tools and equipment, toys, and dusty, yellowed books. The entire barn reeks of mould and decay.');
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', goto: ['gad_gpbarn', ''] },
  ]);
  scene.build();
}

function enterHorse(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gad_gpbarn', 'horse');
  qspCall(s, 'stat', '');
  scene.text('<center><h4>Grandparents\' Barn</h4></center>');
  scene.img('images/locations/gadukino/village/horse.jpg');
  scene.text('Grandfather\'s trusted workhorse, Desperado.');
  qspCall(s, 'gp_zlatek', 'check_for_chores', 'barn_horse');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gad_gpbarn', ''] },
  ]);
  scene.build();
}

function enterCow(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gad_gpbarn', 'cow');
  qspCall(s, 'stat', '');
  scene.text('<center><h4>Grandparents\' Barn</h4></center>');
  scene.img('images/locations/gadukino/village/cow.jpg');
  scene.text('Grandma\'s favorite animal, the cow, Dawn.');
  qspCall(s, 'gp_elene', 'check_for_chores', 'cow');
  qspCall(s, 'gp_zlatek', 'check_for_chores', 'barn_cow');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gad_gpbarn', ''] },
  ]);
  scene.build();
}

function enterBoar(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gad_gpbarn', 'boar');
  qspCall(s, 'stat', '');
  scene.text('<center><h4>Grandparents\' Barn</h4></center>');
  scene.img('images/locations/gadukino/village/boar.jpg');
  scene.text('One of your grandparents\' dearest possessions, the boar, Nickle.');
  qspCall(s, 'gp_zlatek', 'check_for_chores', 'boar');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gad_gpbarn', ''] },
  ]);
  scene.build();
}

function enterBarnRoom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gad_gpbarn', 'barn_room');
  (s as any).location_type = 'private';
  qspCall(s, 'stat', '');
  if (((s as any).pcs_magik ?? 0) >= 6  &&  ((s as any).spellbefshild ?? 0) === 1  &&  (!((s as any).tobiQW ?? 0))) {
    qspGoto(s, 'tobiQW', 'start');
  }
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'miroslava_schedule', '');
  qspCall(s, 'music_actions', 'clear_restrictions');
  ((s as any).setloc = (s as any).setloc ?? {})['StageTitle'] = 'Guest Room';
  scene.img('images/' + '' + (((s as any).setloc ?? 0)?.['imagepath']) + '/gp_dacha/gad_room.jpg');
  qspCall(s, 'core_library', 'stage_title');
  scene.text('A small rustic loft space converted from your grandparents barn. A pair of sleeping pallets of dubious comfort is laid out for guests. The room walls are whitewashed with some clothes lines to dry your clothes with some farming tools. It\'s not much to look at but it\'s somewhere you can call home and have some privacy.');
  qspCall(s, 'library_functions', 'set_home_read_acts');
  qspCall(s, 'daily_routine', 'offer_here');
  if (((s as any).pcs_horny ?? 0) >= 50) {
    scene.actions([
      { label: 'Masturbate', goto: ['selfplay', 'start'] },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['vintage_card'] > 0) {
    qspGoto(s, 'card', '');
    scene.actions([
      { label: 'View your vintage porn cards', handler: (st: GameState) => {
    (st as any).card_deck = 0;
  } },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['card'] > 0) {
    qspGoto(s, 'card', '');
    scene.actions([
      { label: 'View your new porn cards', handler: (st: GameState) => {
    (st as any).card_deck = 1;
  } },
    ]);
  }
  qspCall(s, 'music_actions', 'start');
  scene.text('At the foot of your bed is a small <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027wardrobe/u0027, /u0027start/u0027); return false;">chest</a> containing some of your clothes.');
  scene.text('<table><tr><td valign="top">');
  // TODO-QSP: func('alarmclock', 'base_alarmclock_text')
  if (((s as any).mc_inventory ?? 0)?.['contraceptive_pill'] > 0  &&  ((s as any).mc_inventory ?? 0)?.['equipped_condoms'] + ((s as any).mc_inventory ?? 0)?.['normal_condoms'] + ((s as any).mc_inventory ?? 0)?.['sabotaged_condoms'] > 0) {
    scene.text('Your <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027stol/u0027, /u0027bc/u0027); return false;">birth control</a> are hidden a small nook, as are your <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027stol/u0027, /u0027bc/u0027); return false;">condoms</a>.');
  } else {
    if (((s as any).mc_inventory ?? 0)?.['contraceptive_pill'] > 0) {
      scene.text('Your <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027stol/u0027, /u0027bc/u0027); return false;">birth control</a> are hidden in a small box under your pallet.');
    } else {
      if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] + ((s as any).mc_inventory ?? 0)?.['normal_condoms'] + ((s as any).mc_inventory ?? 0)?.['sabotaged_condoms'] > 0) {
        scene.text('Your <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027stol/u0027, /u0027bc/u0027); return false;">condoms</a> are hidden behind a loose brick.');
      }
    }
  }
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).week ?? 0) === 6  &&  ((s as any).hour ?? 0) > 4  &&  ((s as any).hour ?? 0) < 9  &&  ((s as any).detention_set ?? 0) === 1  &&  ((s as any).detention_warning ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).detention_warning = ((s as any).daystart ?? 0);
  }
  if (((s as any).mc_inventory ?? 0)?.['tech_computer'] === 1) {
    scene.text('Your <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027komp/u0027, /u0027start/u0027); return false;">computer</a> is on your desk.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: '<b>Leave and go to the yard</b>', handler: (st: GameState) => {
    if (((st as any).clothingworntype ?? 0) !== 'nude') {
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspGoto(st, 'gad_gpyard', 'start');
    } else {
      qspGoto(st, 'gad_gpbarn', 'barn_room');
    }
  } },
    { label: '<b>Leave and enter the dacha</b>', handler: (st: GameState) => {
    if (((st as any).clothingworntype ?? 0) !== 'nude') {
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspGoto(st, 'gad_gphouse', 'main');
    } else {
      qspGoto(st, 'gad_gpbarn', 'barn_room');
    }
  } },
    { label: 'Relax on your bed', goto: ['bed', 'start'] },
  ]);
  scene.build();
}

function enterLogStove(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  ((s as any).setloc = (s as any).setloc ?? {})['imagepath'] = 'images/' + 'locations/gadukino';
  const arg = s.locArg;
  switch (arg) {
    case 'search':
      enterSearch(s, scene);
      break;
    case 'horse':
      enterHorse(s, scene);
      break;
    case 'cow':
      enterCow(s, scene);
      break;
    case 'boar':
      enterBoar(s, scene);
      break;
    case 'barn_room':
      enterBarnRoom(s, scene);
      break;
    case 'log_stove':
      enterLogStove(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gad_gpbarn: LocationDef = {
  name: 'gad_gpbarn',
  title: '<center><h4>Grandparents\' Barn</h4></center>',
  region: 'gadukino',
  locationType: 'private',
  description: ['Your grandparents\' old barn could hold some valuable items if you spend time searching.'],
  enter: enter,
};
