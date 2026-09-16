import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterForestOutskirts(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gad_forest_lost', 'forest_outskirts');
  (s as any).location_type = 'secluded';
  (s as any).forest_args1 = 'forest_outskirts';
  qspCall(s, 'gadukino_event', 'sound');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGadForestLostPicture(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).foresteventrand = Math.floor(Math.random() * 40) + 1;
  if (((s as any).foresteventrand ?? 0) <= (2+(((s as any).bonfire ?? 0)*5))  &&  ((s as any).daystart ?? 0) >= ((s as any).forest_lostday ?? 0)  &&  ((s as any).month ?? 0) >= 6  &&  ((s as any).month ?? 0) <= 9  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 16  &&  ((s as any).mushroom_pickersday ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).mushroom_pickers = 2;
    // TODO-QSP: gt 'gad_forest_lost', 'rescue', 'pickers', 'forest_outskirts'
  }
  if (((s as any).foresteventrand ?? 0) <= (4+(((s as any).bonfire ?? 0)*5))  &&  ((s as any).daystart ?? 0) > ((s as any).forest_lostday ?? 0)  &&  ((s as any).month ?? 0) >= 4  &&  ((s as any).month ?? 0) <= 10  &&  ((((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 12)  ||  (((s as any).hour ?? 0) >= 14  &&  ((s as any).hour ?? 0) < 18))  &&  ((s as any).daystart ?? 0) > ((s as any).forest_lostday ?? 0) + 1) {
    // TODO-QSP: gt 'gad_forest_lost', 'rescue', 'hunters', 'forest_outskirts'
  }
  if (((s as any).foresteventrand ?? 0) <= (6+(((s as any).bonfire ?? 0)*5))  &&  ((s as any).daystart ?? 0) > ((s as any).forest_lostday ?? 0)) {
    // TODO-QSP: gt 'gad_forest_lost', 'rescue', 'ranger', 'forest_outskirts'
  }
  if (((s as any).foresteventrand ?? 0) <= (8-(((s as any).bonfire ?? 0)*5))  &&  (((s as any).hour ?? 0) < 6  ||  ((s as any).hour ?? 0) > 22)) {
    qspGoto(s, 'gad_forest_lost', 'wolves', 'forest_outskirts');
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWander(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPicking(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Relax here for a bit', goto: ['gad_forest_lost', 'relax'] },
  ]);
  scene.build();
}

function enterForestCenter(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'gad_forest_lost';
  (s as any).loc_arg = 'forest_center';
  (s as any).location_type = 'secluded';
  (s as any).menu_loc = 'gad_forest_lost';
  (s as any).menu_arg = 'forest_center';
  (s as any).forest_args1 = 'forest_center';
  qspCall(s, 'gadukino_event', 'sound');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGadForestLostPicture(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).foresteventrand = Math.floor(Math.random() * 40) + 1;
  if (((s as any).foresteventrand ?? 0) <= (1+(((s as any).bonfire ?? 0)*2))  &&  ((s as any).daystart ?? 0) > ((s as any).forest_lostday ?? 0)  &&  ((s as any).month ?? 0) >= 4  &&  ((s as any).month ?? 0) <= 10  &&  ((((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 12)  ||  (((s as any).hour ?? 0) >= 14  &&  ((s as any).hour ?? 0) < 18))  &&  ((s as any).daystart ?? 0) > ((s as any).forest_lostday ?? 0)) {
    // TODO-QSP: gt 'gad_forest_lost', 'rescue', 'hunters', 'forest_center'
  }
  if (((s as any).foresteventrand ?? 0) <= (3+(((s as any).bonfire ?? 0)*2))  &&  ((s as any).daystart ?? 0) > ((s as any).forest_lostday ?? 0) + 1) {
    // TODO-QSP: gt 'gad_forest_lost', 'rescue', 'ranger', 'forest_center'
  }
  if (((s as any).foresteventrand ?? 0) <= (8-(((s as any).bonfire ?? 0)*2))  &&  (((s as any).hour ?? 0) < 6  ||  ((s as any).hour ?? 0) > 22)) {
    qspGoto(s, 'gad_forest_lost', 'wolves', 'forest_center');
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWander(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPicking(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Relax here for a bit', goto: ['gad_forest_lost', 'relax'] },
  ]);
  scene.build();
}

function enterBushcraft(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'forest_outskirts') {
    (s as any).bushcraft_rand = 2;
    (s as any).bushcraft_lost = 20;
    (s as any).torncloth_high_bushcraft = 9;
    (s as any).torncloth_low_bushcraft = 7;
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'forest_center') {
      (s as any).bushcraft_rand = 3;
      (s as any).bushcraft_lost = 30;
      (s as any).torncloth_high_bushcraft = 8;
      (s as any).torncloth_low_bushcraft = 5;
    }
  }
  qspCall(s, 'exp_gain', 'bushcraft', 0);
  (s as any).ripclothesrand = Math.floor(Math.random() * 10) + 1;
  if (((s as any).pcs_bushcraft ?? 0) < ((s as any).bushcraft_limit ?? 0)) {
    if (((s as any).ripclothesrand ?? 0) >= ((s as any).torncloth_low_bushcraft ?? 0)) {
      qspCall(s, 'gad_forest', 'torncloth');
    }
  } else {
    if (((s as any).ripclothesrand ?? 0) >= ((s as any).torncloth_high_bushcraft ?? 0)) {
      qspCall(s, 'gad_forest', 'torncloth');
    }
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterWander(s: GameState, scene: SceneBuilder): void {
  if (((s as any).DayStage ?? 0) < 4) {
    scene.actions([
      { label: 'Wander trying to get your bearings (1:30)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 90;
    qspCall(s, 'stat', '');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).forest_args1 ?? 0)]; enterBushcraft(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.text('<center><h4>Somewhere in the forest</h4></center>');
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/gadforestsearch...
      scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/gadukino/forest/gadforestsearch_nude0.'+rand(1, 4)+'.jpg"></center>`);
    }
    if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  (!((s as any).PCloSkirt ?? 0))) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/gadforestsearch...
      scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/gadukino/forest/gadforestsearch0.'+rand(1, 4)+'.jpg"></center>`);
    }
    if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).PCloSkirt ?? 0) > 0) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/gadforestsearch...
      scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/gadukino/forest/gadforestsearch_ski0.'+rand(1, 4)+'.jpg"></center>`);
    }
    if (((s as any).pcs_bushcraft ?? 0) < ((s as any).bushcraft_lost ?? 0)) {
      (s as any).lostrand = 0;
      if (((s as any).pcs_bushcraft ?? 0) > ((s as any).lostrand ?? 0)) {
        // TODO-QSP: gt 'gad_forest_lost', 'finish', $forest_args1
      } else {
        scene.text('After half an hour wandering around, you feel like all you\'ve accomplished is walking in circles.');
        scene.actions([
          { label: 'Continue', goto: ['gad_forest_lost', 'forest_args1'] },
        ]);
      }
    } else {
      // TODO-QSP: gt 'gad_forest_lost', 'finish', $forest_args1
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterRelax(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gad_forest_lost', 'relax');
  (s as any).location_type = 'secluded';
  qspCall(s, 'gadukino_event', 'sound');
  qspCall(s, 'stat', '');
  if (((s as any).forest_args1 ?? 0) === 'forest_outskirts') {
    (s as any).foresteventrand = Math.floor(Math.random() * 30) + 1;
    if (((s as any).foresteventrand ?? 0) <= (2+(((s as any).bonfire ?? 0)*5))  &&  ((s as any).daystart ?? 0) >= ((s as any).forest_lostday ?? 0)  &&  ((s as any).month ?? 0) >= 6  &&  ((s as any).month ?? 0) <= 9  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 16  &&  ((s as any).mushroom_pickersday ?? 0) !== ((s as any).daystart ?? 0)) {
      (s as any).mushroom_pickers = 2;
      // TODO-QSP: gt 'gad_forest_lost', 'rescue', 'pickers', $forest_args1
    }
    if (((s as any).foresteventrand ?? 0) <= (4+(((s as any).bonfire ?? 0)*5))  &&  ((s as any).daystart ?? 0) > ((s as any).forest_lostday ?? 0)  &&  ((s as any).month ?? 0) >= 4  &&  ((s as any).month ?? 0) <= 10  &&  ((((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 12)  ||  (((s as any).hour ?? 0) >= 14  &&  ((s as any).hour ?? 0) < 18))) {
      // TODO-QSP: gt 'gad_forest_lost', 'rescue', 'hunters', $forest_args1
    }
    if (((s as any).foresteventrand ?? 0) <= (6+(((s as any).bonfire ?? 0)*5))  &&  ((s as any).daystart ?? 0) > ((s as any).forest_lostday ?? 0)+1) {
      // TODO-QSP: gt 'gad_forest_lost', 'rescue', 'ranger', $forest_args1
    }
  } else {
    if (((s as any).forest_args1 ?? 0) === 'forest_center') {
      (s as any).foresteventrand = Math.floor(Math.random() * 40) + 1;
      if (((s as any).foresteventrand ?? 0) <= (1+(((s as any).bonfire ?? 0)*5))  &&  ((s as any).daystart ?? 0) > ((s as any).forest_lostday ?? 0)  &&  ((s as any).month ?? 0) >= 4  &&  ((s as any).month ?? 0) <= 10  &&  ((((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 12)  ||  (((s as any).hour ?? 0) >= 14  &&  ((s as any).hour ?? 0) < 18))) {
        // TODO-QSP: gt 'gad_forest_lost', 'rescue', 'hunters', $forest_args1
      }
      if (((s as any).foresteventrand ?? 0) <= (3+(((s as any).bonfire ?? 0)*5))  &&  ((s as any).daystart ?? 0) > ((s as any).forest_lostday ?? 0) + 1) {
        // TODO-QSP: gt 'gad_forest_lost', 'rescue', 'ranger', $forest_args1
      }
    }
  }
  scene.text('<center><h4>Somewhere in the forest</h4></center>');
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/gadforestrelax_...
    scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/gadukino/forest/gadforestrelax_nude'+ rand(1, 3) +'.jpg"></center>`);
  }
  if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).PCloSkirt ?? 0) === 0  &&  (!((s as any).bonfire ?? 0))) {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/gadforestrelax1...
    scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/gadukino/forest/gadforestrelax1.jpg"></center>`);
  }
  if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).PCloSkirt ?? 0) === 0  &&  ((s as any).bonfire ?? 0) === 1) {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/gadforestrelax2...
    scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/gadukino/forest/gadforestrelax2.jpg"></center>`);
  }
  if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).PCloSkirt ?? 0) > 0  &&  (!((s as any).bonfire ?? 0))) {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/gadforestrelax_...
    scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/gadukino/forest/gadforestrelax_ski1.jpg"></center>`);
  }
  if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).PCloSkirt ?? 0) > 0  &&  ((s as any).pantyworntype ?? 0) !== 'none'  &&  ((s as any).bonfire ?? 0) === 1) {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/gadforestrelax_...
    scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/gadukino/forest/gadforestrelax_ski2.jpg"></center>`);
  }
  if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).PCloSkirt ?? 0) > 0  &&  ((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).bonfire ?? 0) === 1) {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/gadforestrelax_...
    scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/gadukino/forest/gadforestrelax_ski3.jpg"></center>`);
  }
  scene.text('You decide this is as good of place as any to stop and take a break.');
  if ((!((s as any).bonfire ?? 0))) {
    scene.text('You should build a bonfire to increase the chance of being rescued and decrease the chance of being attacked by wolves.');
  } else {
    scene.text('Your bonfire burns bright, increasing the chance of being rescued and decreasing the chance of being attacked by wolves.');
  }
  if ((!((s as any).bonfire ?? 0))) {
    if (((s as any).pcs_sleep ?? 0) < 40) {
      scene.actions([
        { label: 'Nap on the ground (2:00)', handler: (st: GameState) => {
    qspCall(s, 'mood', 'raise', 'tiny');
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) - (5);
    qspCall(s, 'sleep_simple', 'nap_base', 120);
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/gadforestrelax_...
      scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/gadukino/forest/gadforestrelax_sleepnude1.' + rand(1, 2) + '.jpg"></center>`);
    }
    if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  (!((s as any).PCloSkirt ?? 0))) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/gadforestrelax_...
      scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/gadukino/forest/gadforestrelax_sleep.jpg"></center>`);
    }
    if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).pantyworntype ?? 0) !== 'none'  &&  ((s as any).PCloSkirt ?? 0) > 0) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/gadforestrelax_...
      scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/gadukino/forest/gadforestrelax_sleepski.jpg"></center>`);
    }
    if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).PCloSkirt ?? 0) > 0) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/gadforestrelax_...
      scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/gadukino/forest/gadforestrelax_sleepski1.jpg"></center>`);
    }
    scene.text('You are able to make yourself fall asleep for about 2 hours, but that is it. If you want to get a full night\'s sleep you will have to find a way out of the forest.');
    scene.text('Even though you had to sleep on the ground, you do wake up feeling a bit more hopeful and rested.');
    scene.actions([
      { label: 'Continue', goto: ['gad_forest_lost', 'relax'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Build a fire (0:30)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).bonfire = 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/forest/gadforestrelax_bonfire1.jpg');
    scene.text('After a few minutes, you are able to get a nice sized fire started.');
    scene.actions([
      { label: 'Continue', goto: ['gad_forest_lost', 'relax'] },
    ]);
  } },
      { label: 'Sit and relax (1:00)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'stat', '');
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/gadforestrelax_...
      scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/gadukino/forest/gadforestrelax_nude' + rand(1, 2) + '.jpg"></center>`);
    }
    if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  (!((s as any).PCloSkirt ?? 0))) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/gadforestrelax3...
      scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/gadukino/forest/gadforestrelax3.jpg"></center>`);
    }
    if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).pantyworntype ?? 0) !== 'none'  &&  ((s as any).PCloSkirt ?? 0) > 0) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/gadforestrelax_...
      scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/gadukino/forest/gadforestrelax_ski4.jpg"></center>`);
    }
    if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).PCloSkirt ?? 0) > 0) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/gadforestrelax_...
      scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/gadukino/forest/gadforestrelax_ski5.jpg"></center>`);
    }
    scene.text('You spend half an hour relaxing, trying to pretend this is just like any other walk in the woods you\'ve done.');
    scene.actions([
      { label: 'Continue', goto: ['gad_forest_lost', 'relax'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).bonfire ?? 0) === 1) {
      if (((s as any).pcs_sleep ?? 0) < 40) {
        scene.actions([
          { label: 'Nap by the fire (2:00)', handler: (st: GameState) => {
    qspCall(s, 'mood', 'raise', 'small');
    (s as any).frost = 0;
    qspCall(s, 'sleep_simple', 'nap_base', 120);
    scene.img('images/locations/gadukino/forest/gadforestrelax_bonfiresleep.jpg');
    scene.text('You are able to make yourself fall asleep for about 2 hours, but that is it. If you want to get a full night\'s sleep you will have to find a way out of the forest.');
    scene.text('Even though you had to sleep on the ground, you do wake up feeling a bit more hopeful and rested.');
    scene.actions([
      { label: 'Continue', goto: ['gad_forest_lost', 'relax'] },
    ]);
  } },
        ]);
      }
      if (((s as any).boletus ?? 0) > 0) {
        scene.actions([
          { label: 'Cook some mushrooms in the fire (0:15)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).boletus_cooked = ((s as any).boletus_cooked ?? 0) + (1);
    (s as any).boletus = ((s as any).boletus ?? 0) - (1);
    (s as any).frost = 0;
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/forest/boletushot.jpg');
    scene.text('You spend 15 minutes grilling some mushrooms in the fire.');
    scene.actions([
      { label: 'Continue', goto: ['gad_forest_lost', 'relax'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Warm up by the fire (1:00)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    if (((s as any).frost ?? 0) > 0) {
      (s as any).frost = ((s as any).frost ?? 0) - (1);
    }
    qspCall(s, 'stat', '');
    if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 21) {
      scene.img('images/locations/gadukino/forest/gadforestrelax_bonfire2.jpg');
    } else {
      scene.img('images/locations/gadukino/forest/gadforestrelax_bonfire3.jpg');
    }
    scene.text('You spend half an hour huddled by the flames');
    scene.actions([
      { label: 'Continue', goto: ['gad_forest_lost', 'relax'] },
    ]);
  } },
      ]);
    }
  }
  if (((s as any).boletus_cooked ?? 0) > 0) {
    scene.actions([
      { label: 'Eat cooked mushrooms (0:15)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).boletus_cooked = ((s as any).boletus_cooked ?? 0) - (1);
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
    qspCall(s, 'mood', 'raise', 'tiny');
    (s as any).fat = ((s as any).fat ?? 0) + (1);
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (20);
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/forest/boletuscook.jpg');
    scene.text('You eat some cooked mushrooms. They are pretty tasty considering your circumstances.');
    scene.actions([
      { label: 'Continue', goto: ['gad_forest_lost', 'relax'] },
    ]);
  } },
    ]);
  }
  if (((s as any).bilberry ?? 0) > 0) {
    scene.actions([
      { label: 'Eat berries (0:15)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).bilberry = ((s as any).bilberry ?? 0) - (1);
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
    qspCall(s, 'mood', 'raise', 'tiny');
    (s as any).fat = ((s as any).fat ?? 0) + (1);
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (10);
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (10);
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/forest/bilberry.jpg');
    scene.text('You eat some berries. These would be great to eat even if you weren\'t lost.');
    scene.actions([
      { label: 'Continue', goto: ['gad_forest_lost', 'relax'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Explore the forest', goto: ['gad_forest_lost', 'forest_args1'] },
  ]);
  scene.build();
}

function enterPicking(s: GameState, scene: SceneBuilder): void {
  if (((s as any).DayStage ?? 0) < 4  &&  ((s as any).month ?? 0) >= 6  &&  ((s as any).month ?? 0) <= 9  &&  ((s as any).boletus ?? 0) + ((s as any).boletus_cooked ?? 0) + ((s as any).bilberry ?? 0) < 5) {
    scene.actions([
      { label: 'Look for mushrooms and berries (0:30)', handler: (st: GameState) => {
    if (((s as any).forest_args1 ?? 0) === 'forest_outskirts') {
      (s as any).outskirts_pickingday = ((s as any).daystart ?? 0);
      (s as any).mushroom_pickers_check = 2;
      (s as any).max_boletus = 2;
      (s as any).max_bilberry = 2;
    } else {
      if (((s as any).forest_args1 ?? 0) === 'forest_center') {
        (s as any).center_pickingday = ((s as any).daystart ?? 0);
        (s as any).mushroom_pickers_check = 3;
        (s as any).max_boletus = 3;
        (s as any).max_bilberry = 3;
      }
    }
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).new_boletus = 0;
    (s as any).new_bilberry = 0;
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).forest_args1 ?? 0)]; enterBushcraft(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).pcs_inhib ?? 0) < 50) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 5) + 1);
    }
    qspCall(s, 'stat', '');
    if (((s as any).mushroom_pickers ?? 0) !== ((s as any).mushroom_pickers_check ?? 0)) {
      (s as any).new_boletus = ((s as any).new_boletus ?? 0) + (((s as any).max_boletus ?? 0));
      (s as any).new_bilberry = ((s as any).new_bilberry ?? 0) + (((s as any).max_bilberry ?? 0));
      (s as any).boletus = ((s as any).boletus ?? 0) + (((s as any).new_boletus ?? 0));
      (s as any).bilberry = ((s as any).bilberry ?? 0) + (((s as any).new_bilberry ?? 0));
      qspCall(s, 'mood', 'raise', 'tiny');
      qspCall(s, 'stat', '');
      qspCall(s, 'gad_forest', 'picking_clothes', ((s as any).forest_args1 ?? 0), 'berry');
      // TODO-QSP: dynamic text: After searching for mushrooms and berries for half an hour you found <<new_bolet...
      scene.text(`After searching for mushrooms and berries for half an hour you found ${((s as any).new_boletus || '')} kg of mushrooms and ${((s as any).new_bilberry || '')} kg of berries.`);
    } else {
      if (((s as any).mushroom_pickers ?? 0) === ((s as any).mushroom_pickers_check ?? 0)) {
        (s as any).new_boletus = ((s as any).new_boletus ?? 0) + (0);
        (s as any).new_bilberry = ((s as any).new_bilberry ?? 0) + (0);
        (s as any).boletus = ((s as any).boletus ?? 0) + (((s as any).new_boletus ?? 0));
        (s as any).bilberry = ((s as any).bilberry ?? 0) + (((s as any).new_bilberry ?? 0));
        qspCall(s, 'stat', '');
        if (((s as any).new_boletus ?? 0) > 0  &&  ((s as any).new_bilberry ?? 0) > 0) {
          qspCall(s, 'mood', 'raise', 'tiny');
          qspCall(s, 'stat', '');
          qspCall(s, 'gad_forest', 'picking_clothes', ((s as any).forest_args1 ?? 0), 'berry');
          // TODO-QSP: dynamic text: After searching for mushrooms and berries for half an hour you found <<new_bolet...
          scene.text(`After searching for mushrooms and berries for half an hour you found ${((s as any).new_boletus || '')} kg of mushrooms and ${((s as any).new_bilberry || '')} kg of berries.`);
        } else {
          if (((s as any).new_boletus ?? 0) === 0  &&  ((s as any).new_bilberry ?? 0) > 0) {
            qspCall(s, 'mood', 'raise', 'tiny');
            qspCall(s, 'stat', '');
            qspCall(s, 'gad_forest', 'picking_clothes', ((s as any).forest_args1 ?? 0), 'berry');
            // TODO-QSP: dynamic text: After searching for mushrooms and berries for half an hour you found <<new_bilbe...
            scene.text(`After searching for mushrooms and berries for half an hour you found ${((s as any).new_bilberry || '')} kg of berries.`);
          } else {
            if (((s as any).new_boletus ?? 0) > 0  &&  (!((s as any).new_bilberry ?? 0))) {
              qspCall(s, 'mood', 'raise', 'tiny');
              qspCall(s, 'stat', '');
              qspCall(s, 'gad_forest', 'picking_clothes', ((s as any).forest_args1 ?? 0), 'mushroom');
              // TODO-QSP: dynamic text: After searching for mushrooms and berries for half an hour you found <<new_bolet...
              scene.text(`After searching for mushrooms and berries for half an hour you found ${((s as any).new_boletus || '')} kg of mushrooms`);
            } else {
              if (((s as any).new_boletus ?? 0) === 0  &&  (!((s as any).new_bilberry ?? 0))) {
                qspCall(s, 'mood', 'lower', 'small');
                qspCall(s, 'stat', '');
                qspCall(s, 'gad_forest', 'picking_clothes_empty', ((s as any).forest_args1 ?? 0));
                scene.text('After searching for mushrooms and berries for half an hour you found nothing.');
              }
            }
          }
        }
      }
    }
    scene.actions([
      { label: 'Continue', goto: ['gad_forest_lost', 'forest_args1'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterFinish(s: GameState, scene: SceneBuilder): void {
  (s as any).bonfire = 0;
  qspCall(s, 'mood', 'raise', 'small');
  qspCall(s, 'exp_gain', 'bushcraft', Math.floor(Math.random() * 5) + 1);
  qspCall(s, 'clothing', 'gad_swamp_clothes', 0);
  qspCall(s, 'stat', '');
  scene.text('<center><h4>Somewhere in the forest</h4></center>');
  scene.img('images/locations/gadukino/forest/gadjoy.jpg');
  scene.text('After half an hour wandering around, you finally see some familiar sights.');
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    if (((s as any).locArgs?.[1] ?? 0) === 'forest_outskirts') {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).gad_meadow_found ?? 0) === 1) {
      (s as any).foresteventrand = Math.floor(Math.random() * 3) + 1;
    } else {
      (s as any).foresteventrand = Math.floor(Math.random() * 2) + 1;
    }
    if (((s as any).foresteventrand ?? 0) === 1) {
      (s as any).minut = ((s as any).minut ?? 0) + (15);
      qspGoto(s, 'gad_forest', 'forest_edge');
    }
    if (((s as any).foresteventrand ?? 0) === 2) {
      qspGoto(s, 'gad_forest', 'forest_outskirts');
    }
    if (((s as any).foresteventrand ?? 0) === 3) {
      (s as any).minut = ((s as any).minut ?? 0) + (35);
      qspGoto(s, 'gad_meadow', 'start');
    }
  } },
      ]);
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'forest_center') {
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).hunterVars ?? 0)?.['cabin'] === 1  &&  ((s as any).gad_meadow_found ?? 0) === 1) {
      (s as any).foresteventrand = Math.floor(Math.random() * 5) + 1;
    } else {
      if (((s as any).gad_meadow_found ?? 0) === 1) {
        (s as any).foresteventrand = Math.floor(Math.random() * 4) + 1;
      } else {
        (s as any).foresteventrand = Math.floor(Math.random() * 3) + 1;
      }
    }
    if (((s as any).foresteventrand ?? 0) === 1) {
      (s as any).minut = ((s as any).minut ?? 0) + (30);
      qspGoto(s, 'gad_forest', 'forest_edge');
    }
    if (((s as any).foresteventrand ?? 0) === 2) {
      (s as any).minut = ((s as any).minut ?? 0) + (15);
      qspGoto(s, 'gad_forest', 'forest_outskirts');
    }
    if (((s as any).foresteventrand ?? 0) === 3) {
      qspGoto(s, 'gad_forest', 'forest_center');
    }
    if (((s as any).foresteventrand ?? 0) === 4) {
      (s as any).minut = ((s as any).minut ?? 0) + (50);
      qspGoto(s, 'gad_meadow', 'start');
    }
    if (((s as any).foresteventrand ?? 0) === 5) {
      (s as any).minut = ((s as any).minut ?? 0) + (30);
      qspGoto(s, 'gad_swamp_yard', 'start');
    }
  } },
        ]);
      }
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'forest_outskirts') {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).gad_meadow_found ?? 0) === 1) {
      (s as any).foresteventrand = Math.floor(Math.random() * 6) + 1;
    } else {
      (s as any).foresteventrand = Math.floor(Math.random() * 5) + 1;
    }
    if (((s as any).foresteventrand ?? 0) === 1) {
      (s as any).minut = ((s as any).minut ?? 0) + (15);
      qspGoto(s, 'gad_forest', 'forest_edge');
    }
    if (((s as any).foresteventrand ?? 0) === 2) {
      qspGoto(s, 'gad_forest', 'forest_outskirts');
    }
    if (((s as any).foresteventrand ?? 0) === 3) {
      (s as any).minut = ((s as any).minut ?? 0) + (40);
      qspGoto(s, 'gad_field', 'field');
    }
    if (((s as any).foresteventrand ?? 0) === 4) {
      (s as any).minut = ((s as any).minut ?? 0) + (30);
      qspGoto(s, 'gad_road', 'start');
    }
    if (((s as any).foresteventrand ?? 0) === 5) {
      (s as any).minut = ((s as any).minut ?? 0) + (40);
      qspGoto(s, 'gad_river', 'start');
    }
    if (((s as any).foresteventrand ?? 0) === 6) {
      (s as any).minut = ((s as any).minut ?? 0) + (35);
      qspGoto(s, 'gad_meadow', 'start');
    }
  } },
      ]);
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'forest_center') {
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).hunterVars ?? 0)?.['cabin'] === 1  &&  ((s as any).gad_meadow_found ?? 0) === 1) {
      (s as any).foresteventrand = Math.floor(Math.random() * 8) + 1;
    } else {
      if (((s as any).gad_meadow_found ?? 0) === 1) {
        (s as any).foresteventrand = Math.floor(Math.random() * 7) + 1;
      } else {
        (s as any).foresteventrand = Math.floor(Math.random() * 6) + 1;
      }
    }
    if (((s as any).foresteventrand ?? 0) === 1) {
      (s as any).minut = ((s as any).minut ?? 0) + (30);
      qspGoto(s, 'gad_forest', 'forest_edge');
    }
    if (((s as any).foresteventrand ?? 0) === 2) {
      (s as any).minut = ((s as any).minut ?? 0) + (15);
      qspGoto(s, 'gad_forest', 'forest_outskirts');
    }
    if (((s as any).foresteventrand ?? 0) === 3) {
      qspGoto(s, 'gad_forest', 'forest_center');
    }
    if (((s as any).foresteventrand ?? 0) === 4) {
      (s as any).minut = ((s as any).minut ?? 0) + (55);
      qspGoto(s, 'gad_field', 'field');
    }
    if (((s as any).foresteventrand ?? 0) === 5) {
      (s as any).minut = ((s as any).minut ?? 0) + (45);
      qspGoto(s, 'gad_road', 'start');
    }
    if (((s as any).foresteventrand ?? 0) === 6) {
      (s as any).minut = ((s as any).minut ?? 0) + (55);
      qspGoto(s, 'gad_river', 'start');
    }
    if (((s as any).foresteventrand ?? 0) === 7) {
      (s as any).minut = ((s as any).minut ?? 0) + (50);
      qspGoto(s, 'gad_meadow', 'start');
    }
    if (((s as any).foresteventrand ?? 0) === 8) {
      (s as any).minut = ((s as any).minut ?? 0) + (30);
      qspGoto(s, 'gad_swamp_yard', 'start');
    }
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterRescue(s: GameState, scene: SceneBuilder): void {
  (s as any).bonfire = 0;
  qspCall(s, 'mood', 'raise', 'small');
  qspCall(s, 'exp_gain', 'bushcraft', Math.floor(Math.random() * 5) + 1);
  (s as any).lost_girl = 0;
  if (((s as any).swamp_clothes ?? 0) === 1) {
    scene.text('You remove the terrible excuse for clothing the hunters gave you. You\'re sure you can find something better to wear at your grandparents house.');
    qspCall(s, 'clothing', 'strip', 'gad_forest');
    qspCall(s, 'clothing', 'gad_swamp_clothes', 0);
  }
  qspCall(s, 'stat', '');
  if (((s as any).locArgs?.[1] ?? 0) === 'pickers') {
    scene.img('images/locations/gadukino/forest/mushroom_pickers2.jpg');
    scene.text('Suddenly you hear the sounds of people approaching. A group of pickers from the village appear out of the bushes.');
    if (((s as any).bonfire ?? 0) === 1) {
      scene.text('They notice your fire and praise you, "When lost, it\'s very smart if you stay in one place and make a fire. It will keep you warm, and make you visible to others."');
    }
    if (((s as any).grandmaQW ?? 0)?.['block'] === 0) {
      // TODO-QSP: 'They walk up to you and say, "Your grandparents are very worried about you. They asked us to keep a...
      if (((s as any).clothingworntype ?? 0) !== 'nude') {
        if (((s as any).locArgs?.[2] ?? 0) === 'forest_outskirts') {
          scene.actions([
            { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 45;
  }, goto: ['gad_gphouse', 'start'] },
          ]);
        } else {
          if (((s as any).locArgs?.[2] ?? 0) === 'forest_center') {
            scene.actions([
              { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
  }, goto: ['gad_gphouse', 'start'] },
            ]);
          }
        }
      } else {
        if (((s as any).locArgs?.[2] ?? 0) === 'forest_outskirts') {
          scene.actions([
            { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['gad_forest', 'forest_edge'] },
          ]);
        } else {
          if (((s as any).locArgs?.[2] ?? 0) === 'forest_center') {
            scene.actions([
              { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
  }, goto: ['gad_forest', 'forest_edge'] },
            ]);
          }
        }
      }
    } else {
      // TODO-QSP: 'They walk up to you and say, "We heard there may have been a missing girl in the forest. Follow us,...
      if (((s as any).clothingworntype ?? 0) !== 'nude') {
        if (((s as any).locArgs?.[2] ?? 0) === 'forest_outskirts') {
          scene.actions([
            { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
  }, goto: ['gad_road', 'start'] },
          ]);
        } else {
          if (((s as any).locArgs?.[2] ?? 0) === 'forest_center') {
            scene.actions([
              { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 45;
  }, goto: ['gad_road', 'start'] },
            ]);
          }
        }
      } else {
        if (((s as any).locArgs?.[2] ?? 0) === 'forest_outskirts') {
          scene.actions([
            { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['gad_forest', 'forest_edge'] },
          ]);
        } else {
          if (((s as any).locArgs?.[2] ?? 0) === 'forest_center') {
            scene.actions([
              { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
  }, goto: ['gad_forest', 'forest_edge'] },
            ]);
          }
        }
      }
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'hunters') {
      scene.img('images/locations/gadukino/hunters/hanters.jpg');
      // TODO-QSP: dynamic text: Suddenly you hear the sounds of people approaching. '+iif(hunterVars['were_met']...
      scene.text('Suddenly you hear the sounds of people approaching. \'+iif(hunterVars[\'were_met\']=1, \'The hunters from the swamp \', \'A group of hunters \')+\'appear out of the bushes.');
      if (((s as any).bonfire ?? 0) === 1) {
        scene.text('They notice your fire and praise you, "When lost, it\'s very smart if you stay in one place and make a fire. It will keep you warm, and make you visible to others."');
      }
      if (((s as any).grandmaQW ?? 0)?.['block'] === 0) {
        scene.text('They walk up to you and say, "Your grandparents are very worried about you. They asked us to keep an eye out for you. Follow us, you can stay at our camp for the time being until someone can take you back."');
        if (((s as any).locArgs?.[2] ?? 0) === 'forest_outskirts') {
          scene.actions([
            { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 45;
  }, goto: ['hunter_interactions', 'meet_hunters_after_rescue'] },
          ]);
        } else {
          scene.actions([
            { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
  }, goto: ['hunter_interactions', 'meet_hunters_after_rescue'] },
          ]);
        }
      } else {
        scene.text('They walk up to you and say, "We heard there may have been a missing girl in the forest. Follow us, you can stay at our camp for the time being until someone can take you back."');
        if (((s as any).locArgs?.[2] ?? 0) === 'forest_outskirts') {
          scene.actions([
            { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 45;
  }, goto: ['hunter_interactions', 'meet_hunters_after_rescue'] },
          ]);
        } else {
          scene.actions([
            { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
  }, goto: ['hunter_interactions', 'meet_hunters_after_rescue'] },
          ]);
        }
      }
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'ranger') {
        scene.img('images/locations/gadukino/hunters/forester.jpg');
        scene.text('Suddenly you hear the sound of a person approaching. A man you vaguely recognize from the village appears out of the bushes.');
        if (((s as any).bonfire ?? 0) === 1) {
          scene.text('They notice your fire and praise you, "When lost, it\'s very smart if you stay in one place and make a fire. It will keep you warm, and make you visible to others."');
        }
        if (((s as any).grandmaQW ?? 0)?.['block'] === 0) {
          // TODO-QSP: 'He walks up to you and says, "Your grandparents are very worried about you. They asked me to keep a...
          if (((s as any).clothingworntype ?? 0) !== 'nude') {
            if (((s as any).locArgs?.[2] ?? 0) === 'forest_outskirts') {
              scene.actions([
                { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 45;
  }, goto: ['gad_gphouse', 'start'] },
              ]);
            } else {
              if (((s as any).locArgs?.[2] ?? 0) === 'forest_center') {
                scene.actions([
                  { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
  }, goto: ['gad_gphouse', 'start'] },
                ]);
              } else {
                if (((s as any).locArgs?.[2] ?? 0) === 'gad_swamp_yard') {
                  scene.actions([
                    { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 90;
  }, goto: ['gad_gphouse', 'start'] },
                  ]);
                }
              }
            }
          } else {
            if (((s as any).locArgs?.[2] ?? 0) === 'forest_outskirts') {
              scene.actions([
                { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['gad_forest', 'forest_edge'] },
              ]);
            } else {
              if (((s as any).locArgs?.[2] ?? 0) === 'forest_center') {
                scene.actions([
                  { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
  }, goto: ['gad_forest', 'forest_edge'] },
                ]);
              } else {
                if (((s as any).locArgs?.[2] ?? 0) === 'gad_swamp_yard') {
                  scene.actions([
                    { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
  }, goto: ['gad_forest', 'forest_edge'] },
                  ]);
                }
              }
            }
          }
        } else {
          // TODO-QSP: 'He walks up to you and says, "I heard there may have been a missing girl in the forest. Follow me, ...
          if (((s as any).clothingworntype ?? 0) !== 'nude') {
            if (((s as any).locArgs?.[2] ?? 0) === 'forest_outskirts') {
              scene.actions([
                { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
  }, goto: ['gad_road', 'start'] },
              ]);
            } else {
              if (((s as any).locArgs?.[2] ?? 0) === 'forest_center') {
                scene.actions([
                  { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 45;
  }, goto: ['gad_road', 'start'] },
                ]);
              } else {
                if (((s as any).locArgs?.[2] ?? 0) === 'gad_swamp_yard') {
                  scene.actions([
                    { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 75;
  }, goto: ['gad_road', 'start'] },
                  ]);
                }
              }
            }
          } else {
            if (((s as any).locArgs?.[2] ?? 0) === 'forest_outskirts') {
              scene.actions([
                { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['gad_forest', 'forest_edge'] },
              ]);
            } else {
              if (((s as any).locArgs?.[2] ?? 0) === 'forest_center') {
                scene.actions([
                  { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
  }, goto: ['gad_forest', 'forest_edge'] },
                ]);
              } else {
                if (((s as any).locArgs?.[2] ?? 0) === 'gad_swamp_yard') {
                  scene.actions([
                    { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
  }, goto: ['gad_forest', 'forest_edge'] },
                  ]);
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterWolves(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/forest/howl.jpg');
  scene.text('Suddenly your hear a terrifying howl nearby.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Run away', handler: (st: GameState) => {
    qspCall(s, 'exercise', 'tier4', 5, 'run');
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/forest/run.jpg');
    scene.text('Instincts take over and you begin running without a second thought.');
    if (((s as any).locArgs?.[1] ?? 0) === 'forest_edge') {
      if (((s as any).pcs_bushcraft ?? 0) < 80  &&  ((s as any).pcs_agil ?? 0) < 70  &&  ((s as any).pcs_stren ?? 0) < 70) {
        (s as any).foresteventrand = Math.floor(Math.random() * 20) + 0;
      } else {
        (s as any).foresteventrand = Math.floor(Math.random() * 19) + 1;
      }
      if ((!((s as any).foresteventrand ?? 0))) {
        qspCall(s, 'exp_gain', 'bushcraft', Math.floor(Math.random() * 2) + 1);
        qspCall(s, 'stat', '');
        scene.img('images/locations/gadukino/forest/horror.jpg');
        scene.text('The wolves are simply too fast and you cannot lose them. Suddenly you feel a sharp pain as a wolf bites your leg.');
      } else {
        if (((s as any).foresteventrand ?? 0) <= 10) {
          qspCall(s, 'exp_gain', 'bushcraft', Math.floor(Math.random() * 3) + 1);
          qspCall(s, 'stat', '');
          scene.img('images/locations/gadukino/forest/run_end2.jpg');
          scene.text('You are successful in escaping the wolves, but unfortunately are still in the forest.');
        } else {
          qspCall(s, 'exp_gain', 'bushcraft', Math.floor(Math.random() * 5) + 1);
          qspCall(s, 'stat', '');
          scene.img('images/locations/gadukino/forest/run_end1.jpg');
          scene.text('You are successful in escaping the wolves, and also are no longer in the forest.');
        }
      }
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    if ((!((s as any).foresteventrand ?? 0))) {
      qspCall(s, 'gameover', 'check', 11);
      qspGoto(s, 'gad_forest_lost', 'forest_edge');
    } else {
      if (((s as any).foresteventrand ?? 0) <= 10) {
        qspGoto(s, 'gad_forest_lost', 'forest_edge');
      } else {
        if (((s as any).foresteventrand ?? 0) <= 13) {
          qspGoto(s, 'gad_forest_lost', 'forest_edge');
        } else {
          if (((s as any).foresteventrand ?? 0) <= 15) {
            qspGoto(s, 'gad_field', 'field');
          } else {
            if (((s as any).foresteventrand ?? 0) <= 17) {
              qspGoto(s, 'gad_road', 'start');
            } else {
              qspGoto(s, 'gad_river', 'start');
            }
          }
        }
      }
    }
  } },
      ]);
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'forest_outskirts') {
        if (((s as any).pcs_bushcraft ?? 0) < 80  &&  ((s as any).pcs_agil ?? 0) < 70  &&  ((s as any).pcs_stren ?? 0) < 70) {
          (s as any).foresteventrand = Math.floor(Math.random() * 20) + 0;
        } else {
          (s as any).foresteventrand = Math.floor(Math.random() * 19) + 1;
        }
        if ((!((s as any).foresteventrand ?? 0))) {
          qspCall(s, 'exp_gain', 'bushcraft', Math.floor(Math.random() * 2) + 1);
          qspCall(s, 'stat', '');
          scene.img('images/locations/gadukino/forest/horror.jpg');
          scene.text('The wolves are simply too fast and you cannot lose them. Suddenly you feel a sharp pain as a wolf bites your leg.');
        } else {
          if (((s as any).foresteventrand ?? 0) <= 14) {
            qspCall(s, 'exp_gain', 'bushcraft', Math.floor(Math.random() * 3) + 1);
            qspCall(s, 'stat', '');
            scene.img('images/locations/gadukino/forest/run_end2.jpg');
            scene.text('You are successful in escaping the wolves, but unfortunately are still lost in the forest.');
          } else {
            qspCall(s, 'exp_gain', 'bushcraft', Math.floor(Math.random() * 5) + 1);
            qspCall(s, 'stat', '');
            scene.img('images/locations/gadukino/forest/run_end1.jpg');
            scene.text('You are successful in escaping the wolves, and also are no longer lost as you recognize your surroundings.');
          }
        }
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    if ((!((s as any).foresteventrand ?? 0))) {
      qspCall(s, 'gameover', 'check', 11);
      qspGoto(s, 'gad_forest_lost', 'forest_outskirts');
    } else {
      if (((s as any).foresteventrand ?? 0) <= 9) {
        qspGoto(s, 'gad_forest_lost', 'forest_outskirts');
      } else {
        if (((s as any).foresteventrand ?? 0) <= 14) {
          qspGoto(s, 'gad_forest_lost', 'forest_edge');
        } else {
          if (((s as any).foresteventrand ?? 0) === 15) {
            qspGoto(s, 'gad_forest', 'forest_outskirts');
          } else {
            if (((s as any).foresteventrand ?? 0) === 16) {
              qspGoto(s, 'gad_forest', 'forest_edge');
            } else {
              if (((s as any).foresteventrand ?? 0) === 17) {
                qspGoto(s, 'gad_field', 'field');
              } else {
                if (((s as any).foresteventrand ?? 0) === 18) {
                  qspGoto(s, 'gad_road', 'start');
                } else {
                  qspGoto(s, 'gad_river', 'start');
                }
              }
            }
          }
        }
      }
    }
  } },
        ]);
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'forest_center') {
          if (((s as any).pcs_bushcraft ?? 0) < 80  &&  ((s as any).pcs_agil ?? 0) < 70  &&  ((s as any).pcs_stren ?? 0) < 70) {
            (s as any).foresteventrand = Math.floor(Math.random() * 20) + 0;
          } else {
            (s as any).foresteventrand = Math.floor(Math.random() * 19) + 1;
          }
          if ((!((s as any).foresteventrand ?? 0))) {
            qspCall(s, 'exp_gain', 'bushcraft', Math.floor(Math.random() * 2) + 1);
            qspCall(s, 'stat', '');
            scene.img('images/locations/gadukino/forest/horror.jpg');
            scene.text('The wolves are simply too fast and you cannot lose them. Suddenly you feel a sharp pain as a wolf bites your leg.');
          } else {
            if (((s as any).foresteventrand ?? 0) <= 13) {
              qspCall(s, 'exp_gain', 'bushcraft', Math.floor(Math.random() * 3) + 1);
              qspCall(s, 'stat', '');
              scene.img('images/locations/gadukino/forest/run_end2.jpg');
              scene.text('You are successful in escaping the wolves, but unfortunately are still lost in the forest.');
            } else {
              qspCall(s, 'exp_gain', 'bushcraft', Math.floor(Math.random() * 5) + 1);
              qspCall(s, 'stat', '');
              scene.img('images/locations/gadukino/forest/run_end1.jpg');
              scene.text('You are successful in escaping the wolves, and also are no longer lost as you recognize your surroundings.');
            }
          }
          scene.actions([
            { label: 'Continue', handler: (st: GameState) => {
    if ((!((s as any).foresteventrand ?? 0))) {
      qspCall(s, 'gameover', 'check', 11);
      qspGoto(s, 'gad_forest_lost', 'forest_center');
    } else {
      if (((s as any).foresteventrand ?? 0) <= 8) {
        qspGoto(s, 'gad_forest_lost', 'forest_center');
      } else {
        if (((s as any).foresteventrand ?? 0) <= 11) {
          qspGoto(s, 'gad_forest_lost', 'forest_outskirts');
        } else {
          if (((s as any).foresteventrand ?? 0) <= 13) {
            qspGoto(s, 'gad_forest_lost', 'forest_edge');
          } else {
            if (((s as any).foresteventrand ?? 0) === 14) {
              qspGoto(s, 'gad_forest', 'forest_center');
            } else {
              if (((s as any).foresteventrand ?? 0) === 15) {
                qspGoto(s, 'gad_forest', 'forest_outskirts');
              } else {
                if (((s as any).foresteventrand ?? 0) === 16) {
                  qspGoto(s, 'gad_forest', 'forest_edge');
                } else {
                  if (((s as any).foresteventrand ?? 0) === 17) {
                    qspGoto(s, 'gad_field', 'field');
                  } else {
                    if (((s as any).foresteventrand ?? 0) === 18) {
                      qspGoto(s, 'gad_road', 'start');
                    } else {
                      qspGoto(s, 'gad_river', 'start');
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  } },
          ]);
        } else {
          if (((s as any).locArgs?.[1] ?? 0) === 'swamp') {
            if (((s as any).pcs_bushcraft ?? 0) < 80  &&  ((s as any).pcs_agil ?? 0) < 70  &&  ((s as any).pcs_stren ?? 0) < 70) {
              (s as any).foresteventrand = Math.floor(Math.random() * 20) + 0;
            } else {
              (s as any).foresteventrand = Math.floor(Math.random() * 19) + 1;
            }
            if ((!((s as any).foresteventrand ?? 0))) {
              qspCall(s, 'exp_gain', 'bushcraft', Math.floor(Math.random() * 2) + 1);
              qspCall(s, 'stat', '');
              scene.img('images/locations/gadukino/forest/horror.jpg');
              scene.text('The wolves are simply too fast and you cannot lose them. Suddenly you feel a sharp pain as a wolf bites your leg.');
            } else {
              if (((s as any).foresteventrand ?? 0) <= 8) {
                qspCall(s, 'exp_gain', 'bushcraft', Math.floor(Math.random() * 3) + 1);
                qspCall(s, 'stat', '');
                scene.img('images/locations/gadukino/forest/run_end2.jpg');
                scene.text('You are successful in escaping the wolves, but unfortunately are still lost in the forest.');
              } else {
                qspCall(s, 'exp_gain', 'bushcraft', Math.floor(Math.random() * 5) + 1);
                qspCall(s, 'stat', '');
                scene.img('images/locations/gadukino/forest/run_end1.jpg');
                scene.text('You are successful in escaping the wolves, and also are no longer in the forest.');
              }
            }
            scene.actions([
              { label: 'Continue', handler: (st: GameState) => {
    if ((!((s as any).foresteventrand ?? 0))) {
      qspCall(s, 'gameover', 'check', 11);
      qspGoto(s, 'gad_forest_lost', 'swamp');
    } else {
      if (((s as any).foresteventrand ?? 0) <= 4) {
        qspGoto(s, 'gad_forest_lost', 'swamp');
      } else {
        if (((s as any).foresteventrand ?? 0) <= 6) {
          qspGoto(s, 'gad_forest_lost', 'forest_center');
        } else {
          if (((s as any).foresteventrand ?? 0) <= 8) {
            qspGoto(s, 'gad_forest_lost', 'forest_outskirts');
          } else {
            if (((s as any).foresteventrand ?? 0) <= 10) {
              qspGoto(s, 'gad_forest_lost', 'forest_edge');
            } else {
              if (((s as any).foresteventrand ?? 0) === 11) {
                qspGoto(s, 'gad_forest', 'swamp');
              } else {
                if (((s as any).foresteventrand ?? 0) === 12) {
                  qspGoto(s, 'gad_forest', 'forest_center');
                } else {
                  if (((s as any).foresteventrand ?? 0) === 13) {
                    qspGoto(s, 'gad_forest', 'forest_outskirts');
                  } else {
                    if (((s as any).foresteventrand ?? 0) === 14) {
                      qspGoto(s, 'gad_forest', 'forest_edge');
                    } else {
                      if (((s as any).foresteventrand ?? 0) === 15) {
                        qspGoto(s, 'gad_field', 'field');
                      } else {
                        if (((s as any).foresteventrand ?? 0) === 16) {
                          qspGoto(s, 'gad_road', 'start');
                        } else {
                          if (((s as any).foresteventrand ?? 0) === 17) {
                            qspGoto(s, 'gad_river', 'start');
                          } else {
                            if (((s as any).foresteventrand ?? 0) === 18) {
                              qspGoto(s, 'gad_swamp_yard', 'start');
                            } else {
                              qspGoto(s, 'gad_swamp_woods', 'start');
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  } },
            ]);
          }
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterGadForestLostPicture(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h4>Somewhere in the forest</h4></center>');
  if (((s as any).month ?? 0) >= 4  &&  ((s as any).month ?? 0) <= 10) {
    if (((s as any).DayStage ?? 0) < 4) {
      scene.img('images/locations/gadukino/forest/gadforestlost0.\'+rand(1, 6)+\'.jpg');
      scene.text('You are lost in the woods. You don\'t recognize any of your surroundings and there aren\'t any good landmarks to help pinpoint where you are.');
      scene.text('You would normally consider the woods a relaxing and scenic place, but are too stressed to appreciate the beauty of nature right now.');
    } else {
      scene.img('images/locations/gadukino/forest/gadforestlost_night0.\'+rand(1, 4)+\'.jpg');
      scene.text('You are lost in the woods. You don\'t recognize any of your surroundings and there aren\'t any good landmarks to help pinpoint where you are.');
      scene.text('With nightfall, your chances of finding your way are practically nothing. You should stop and rest until daylight.');
    }
  } else {
    if (((s as any).DayStage ?? 0) < 4) {
      scene.img('images/locations/gadukino/forest/gadforestlost_winter0.\'+rand(1, 5)+\'.jpg');
      scene.text('You are lost in the woods. You don\'t recognize any of your surroundings and there aren\'t any good landmarks to help pinpoint where you are.');
      scene.text('You would normally consider the woods a relaxing and scenic place, but are too stressed to appreciate the beauty of nature right now.');
    } else {
      scene.img('images/locations/gadukino/forest/gadforestlost_winter_night0.\'+rand(1, 4)+\'.jpg');
      scene.text('You are lost in the woods. You don\'t recognize any of your surroundings and there aren\'t any good landmarks to help pinpoint where you are.');
      scene.text('With nightfall, your chances of finding your way are practically nothing. You should stop and rest until daylight.');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'forest_outskirts':
      enterForestOutskirts(s, scene);
      break;
    case 'forest_center':
      enterForestCenter(s, scene);
      break;
    case 'bushcraft':
      enterBushcraft(s, scene);
      break;
    case 'wander':
      enterWander(s, scene);
      break;
    case 'relax':
      enterRelax(s, scene);
      break;
    case 'picking':
      enterPicking(s, scene);
      break;
    case 'finish':
      enterFinish(s, scene);
      break;
    case 'rescue':
      enterRescue(s, scene);
      break;
    case 'wolves':
      enterWolves(s, scene);
      break;
    case 'gad_forest_lost_picture':
      enterGadForestLostPicture(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gad_forest_lost: LocationDef = {
  name: 'gad_forest_lost',
  title: 'You should build a bonfire to increase the chance of being r',
  region: 'gadukino',
  locationType: 'secluded',
  enter: enter,
};
