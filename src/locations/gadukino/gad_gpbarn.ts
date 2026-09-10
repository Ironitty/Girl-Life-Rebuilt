import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gad_gpbarn', '');
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
    (s as any).card_deck = 0;
  }, goto: ['card', ''] },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['card'] > 0) {
    scene.actions([
      { label: 'View your new porn cards', handler: (st: GameState) => {
    (s as any).card_deck = 1;
  }, goto: ['card', ''] },
    ]);
  }
  if (((s as any).pcs_horny ?? 0) >= 50) {
    // TODO-QSP: act 'Masturbate': gt 'selfplay', 'start'
  }
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
    scene.actions([{ label: 'Continue', goto: ['grigory', 'barn'] }]);
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
    if (((s as any).mc_inventory ?? 0)?.['vintage_card'] === 0  &&  ((s as any).vcard_trash ?? 0) === 0  &&  (Math.floor(Math.random() * 11) + 0) >= 8) {
      (s as any).mc_inventory['vintage_card'] = 1;
      qspCall(s, 'exp_gain', 'observ', 3);
      qspCall(s, 'stat', '');
      scene.img('images/locations/gadukino/village/vcards.jpg');
      scene.text('"Hmm, what\'s this?" You\'ve found an unopened deck of vintage adult playing cards still in its original cellophane wrapper.');
    } else {
      (s as any).findbraclet = 1;
      qspCall(s, 'exp_gain', 'observ', 3);
      qspCall(s, 'stat', '');
      scene.img('images/locations/gadukino/village/bracelet.jpg');
      scene.text('While looking through the barn, you spot a metal glint under a wood pile. Upon closer inspection, you see a silver bracelet crafted into a snake\'s likeness. Strange, but fantastic that you would find something this valuable in the barn.');
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
        qspCall(s, 'exp_gain', 'observ', Math.floor(Math.random() * 2) + 0);
        qspCall(s, 'stat', '');
        scene.img('images/locations/gadukino/gp_dacha/junk_barn.jpg');
        scene.text('In the barn, you find many mouldy magazines, rusty tools and equipment, toys, and dusty, yellowed books. The entire barn reeks of mould and decay.');
      }
      scene.actions([
        { label: 'Finish', goto: ['gad_gpbarn', ''] },
      ]);
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'search':
      enterSearch(s, scene);
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
