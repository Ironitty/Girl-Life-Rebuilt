import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  scene.img('images/pc/activities/sewing/kit.jpg');
  scene.text('You pull your sewing kit out from under your bed.');
  if (((s as any).mc_inventory ?? 0)?.['sewing_fabric'] > 1) {
    // TODO-QSP: dynamic text: You have <<mc_inventory[''sewing_fabric'']>> pieces of sewing fabric left.
    scene.text(`You have ${(((s as any).mc_inventory ?? 0)?.['sewing_fabric'] ?? '')} pieces of sewing fabric left.`);
  } else {
    if (((s as any).mc_inventory ?? 0)?.['sewing_fabric'] === 1) {
      scene.text('You have 1 piece of sewing fabric left.');
    } else {
      scene.text('You have no fabric left to use as material.');
    }
  }
  if (((s as any).pcs_sewng ?? 0) > 50  &&  ((s as any).mc_inventory ?? 0)?.['sewing_fabric'] >= 1) {
    scene.text('You can resize your own clothing when viewing items in the wardrobe list <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027clothing_view/u0027, /u0027view_lists_list/u0027, /u0027wardrobe/u0027); return false;">here</a>.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    { label: 'Practice sewing (0:30)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'stat', '');
    scene.img('images/pc/activities/sewing/practice.jpg');
    if (((st as any).pcs_sewng ?? 0) < 40) {
      qspCall(st, 'exp_gain', 'sewng', 2);
      scene.text('You practice your sewing skills.');
    } else {
      scene.text('You spend some time practicing stitches and other sewing techniques, but you don\'t feel like you\'re getting any better.');
      scene.text('You think you need real projects to work on to increase your skill, either in a class or on your own.');
    }
    scene.actions([
      { label: 'Finish', goto: ['sewing', 'start'] },
    ]);
  } },
    { label: 'Sew trinkets (0:30)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'stat', '');
    if (((st as any).mc_inventory ?? 0)?.['sewing_fabric'] < 1) {
      scene.text('You do not have any material to sew anything. You should buy some from the supermarket.');
    } else {
      if (((st as any).mc_inventory ?? 0)?.['trinkets_home'] === 30  &&  (((st as any).YouCanGar ?? 0) === 0  ||  ((st as any).mc_inventory ?? 0)?.['trinkets_garage'] === 100)) {
        scene.text('You do not have any further storage space, you need to sell some trinkets to make room before sewing more of them.');
      } else {
        (st as any).sew_trinket_success = (Math.floor(Math.random() * 240) + 1);
        ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['sewing_fabric'] = ((st as any).mc_inventory['sewing_fabric'] ?? 0) - (1);
        if (((st as any).pcs_sewng ?? 0) >= 40) {
          qspCall(st, 'exp_gain', 'sewng', (Math.floor(Math.random() * (((st as any).pcs_intel ?? 0)/10 - ((st as any).pcs_intel ?? 0)/20 + 1)) + (((st as any).pcs_intel ?? 0)/20)));
        }
        if (((st as any).pcs_sewng ?? 0) < 40) {
          qspCall(st, 'exp_gain', 'sewng', (Math.floor(Math.random() * (((st as any).pcs_intel ?? 0)/15 - ((st as any).pcs_intel ?? 0)/25 + 1)) + (((st as any).pcs_intel ?? 0)/25)));
        }
        if (((st as any).sew_trinket_success ?? 0) > ((st as any).pcs_sewng ?? 0)*4) {
          scene.img('images/pc/activities/sewing/practice.jpg');
          scene.text('You do your best trying to sew together a trinket at a quality you can sell, but somewhere along the way, you mess it up. The material is ruined, and you\'re frustrated as hell, but at least you feel like you learned something.');
        } else {
          if (((st as any).mc_inventory ?? 0)?.['trinkets_home'] >= 30  &&  (((st as any).YouCanGar ?? 0) === 0  ||  ((st as any).mc_inventory ?? 0)?.['trinkets_garage'] >= 100)) {
            scene.img('images/pc/activities/sewing/kit.jpg');
            // TODO-QSP: dynamic text: 'You put together another trinket but then realize you have too many trinkets al...
            scene.text('You put together another trinket but then realize you have too many trinkets already. ' + ((((st as any).YouCanGar ?? 0) > 0) ? ('Even the space in your stepfather\'s garage is full. ') : ('')) + 'With a deep sense of regret, you throw it away, having no place to store it. At least you learned more about sewing…');
          } else {
            scene.img('images/pc/activities/sewing/trinket.jpg');
            scene.text('You spend some time trying to sew something together. After a half hour, you find yourself rewarded for your effort with a small trinket that\'s actually of decently high quality. ');
            if (((st as any).mc_inventory ?? 0)?.['trinkets_home'] < 30) {
              ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['trinkets_home'] = ((st as any).mc_inventory['trinkets_home'] ?? 0) + (1);
              // TODO-QSP: 'Storing it away, you figure you ' + iif(mc_inventory['trinkets_home'] < 30, 'still have space for a...
              scene.text('You wonder if you can sell them somewhere.');
            } else {
              ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['trinkets_garage'] = ((st as any).mc_inventory['trinkets_garage'] ?? 0) + (1);
              // TODO-QSP: 'The storage space in your room is full, but you can still store it in your stepfather''s garage, ' ...
              scene.text('You wonder how many you can sell at the train station.');
            }
          }
        }
      }
    }
    scene.actions([
      { label: 'Finish', goto: ['sewing', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterTapestry(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).newgobelen ?? 0))) {
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['sewing_fabric'] = ((s as any).mc_inventory['sewing_fabric'] ?? 0) - (1);
    (s as any).newgobelen = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.text('You spend 15 minutes at the embroidery frame, preparing the fabric and outlining the pattern for the tapestry.');
    scene.actions([
      { label: 'Set the tapestry aside', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    scene.img('images/pc/activities/sewing/practice.jpg');
    qspCall(s, 'exp_gain', 'sewng', (Math.floor(Math.random() * (((s as any).pcs_intel ?? 0)/5 - ((s as any).pcs_intel ?? 0)/10 + 1)) + (((s as any).pcs_intel ?? 0)/10)));
    (s as any).gobramax = (((s as any).pcs_sewng ?? 0) - 70) * 6;
    (s as any).gobramin = (((s as any).pcs_sewng ?? 0) - 70) * 2;
    (s as any).newgobelen = ((s as any).newgobelen ?? 0) + ((Math.floor(Math.random() * (((s as any).gobramax ?? 0) - ((s as any).gobramin ?? 0) + 1)) + (((s as any).gobramin ?? 0))));
    qspCall(s, 'stat', '');
    if (((s as any).newgobelen ?? 0) < 1000) {
      // TODO-QSP: dynamic text: You spend an hour working on your tapestry, which is now <<newgobelen/10>> perce...
      scene.text(`You spend an hour working on your tapestry, which is now ${((s as any).newgobelen ?? '')/10} percent finished.`);
    }
    if (((s as any).newgobelen ?? 0) >= 1000) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['tapestry'] = ((s as any).mc_inventory['tapestry'] ?? 0) + (1);
      scene.text('Your work on the tapestry is done.');
    }
    scene.actions([
      { label: 'Set the tapestry aside', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
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
    case 'tapestry':
      enterTapestry(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sewing: LocationDef = {
  name: 'sewing',
  title: 'You pull your sewing kit out from under your bed.',
  region: 'other',
  enter: enter,
};
