import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterForestOutskirts(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gad_forest_lost', 'forest_outskirts');
  qspCall(s, 'gadukino_event', 'sound');
  qspCall(s, 'stat', '');
  qspCall(s, 'gad_forest_lost', 'gad_forest_lost_picture');
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
    // TODO-QSP: gt 'gad_forest_lost', 'wolves', 'forest_outskirts'
  }
  qspCall(s, 'gad_forest_lost', 'wander');
  qspCall(s, 'gad_forest_lost', 'picking');
  scene.actions([
    { label: 'Relax here for a bit', goto: ['gad_forest_lost', 'relax'] },
  ]);
  scene.build();
}

function enterForestCenter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'gadukino_event', 'sound');
  qspCall(s, 'stat', '');
  qspCall(s, 'gad_forest_lost', 'gad_forest_lost_picture');
  (s as any).foresteventrand = Math.floor(Math.random() * 40) + 1;
  if (((s as any).foresteventrand ?? 0) <= (1+(((s as any).bonfire ?? 0)*2))  &&  ((s as any).daystart ?? 0) > ((s as any).forest_lostday ?? 0)  &&  ((s as any).month ?? 0) >= 4  &&  ((s as any).month ?? 0) <= 10  &&  ((((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 12)  ||  (((s as any).hour ?? 0) >= 14  &&  ((s as any).hour ?? 0) < 18))  &&  ((s as any).daystart ?? 0) > ((s as any).forest_lostday ?? 0)) {
    // TODO-QSP: gt 'gad_forest_lost', 'rescue', 'hunters', 'forest_center'
  }
  if (((s as any).foresteventrand ?? 0) <= (3+(((s as any).bonfire ?? 0)*2))  &&  ((s as any).daystart ?? 0) > ((s as any).forest_lostday ?? 0) + 1) {
    // TODO-QSP: gt 'gad_forest_lost', 'rescue', 'ranger', 'forest_center'
  }
  if (((s as any).foresteventrand ?? 0) <= (8-(((s as any).bonfire ?? 0)*2))  &&  (((s as any).hour ?? 0) < 6  ||  ((s as any).hour ?? 0) > 22)) {
    // TODO-QSP: gt 'gad_forest_lost', 'wolves', 'forest_center'
  }
  qspCall(s, 'gad_forest_lost', 'wander');
  qspCall(s, 'gad_forest_lost', 'picking');
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
    (s as any).bushcraft_rand = 3;
    (s as any).bushcraft_lost = 30;
    (s as any).torncloth_high_bushcraft = 8;
    (s as any).torncloth_low_bushcraft = 5;
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
  scene.build();
}

function enterWander(s: GameState, scene: SceneBuilder): void {
  if (((s as any).DayStage ?? 0) < 4) {
    scene.actions([
      { label: 'Wander trying to get your bearings (1:30)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 90;
    qspCall(s, 'stat', '');
    qspCall(s, 'gad_forest_lost', 'bushcraft', ((s as any).forest_args1 ?? 0));
    scene.text('<center><h4>Somewhere in the forest</h4></center>');
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/gadforestsearch...
      scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/gadukino/forest/gadforestsearch_nude0.'+rand(1, 4)+'.jpg"></center>`);
    }
    if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  (!((s as any).PCloSkirt ?? 0))) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/gadforestsearch...
      scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/gadukino/forest/gadforestsearch0.'+rand(1, 4)+'.jpg"></center>`);
    }
    if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).PCloSkirt ?? 0) > 0) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/gadforestsearch...
      scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/gadukino/forest/gadforestsearch_ski0.'+rand(1, 4)+'.jpg"></center>`);
    }
    if (((s as any).pcs_bushcraft ?? 0) < ((s as any).bushcraft_lost ?? 0)) {
      (s as any).lostrand = 0;
      if (((s as any).pcs_bushcraft ?? 0) > ((s as any).lostrand ?? 0)) {
        // TODO-QSP: gt 'gad_forest_lost', 'finish', $forest_args1
      } else {
        scene.text('After half an hour wandering around, you feel like all you\'ve accomplished is walking in circles.');
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'gad_forest_lost', $forest_args1
  } },
        ]);
      }
    } else {
      // TODO-QSP: gt 'gad_forest_lost', 'finish', $forest_args1
    }
  } },
    ]);
  }
  scene.build();
}

function enterRelax(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gad_forest_lost', 'relax');
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
    (s as any).foresteventrand = Math.floor(Math.random() * 40) + 1;
    if (((s as any).foresteventrand ?? 0) <= (1+(((s as any).bonfire ?? 0)*5))  &&  ((s as any).daystart ?? 0) > ((s as any).forest_lostday ?? 0)  &&  ((s as any).month ?? 0) >= 4  &&  ((s as any).month ?? 0) <= 10  &&  ((((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 12)  ||  (((s as any).hour ?? 0) >= 14  &&  ((s as any).hour ?? 0) < 18))) {
      // TODO-QSP: gt 'gad_forest_lost', 'rescue', 'hunters', $forest_args1
    }
    if (((s as any).foresteventrand ?? 0) <= (3+(((s as any).bonfire ?? 0)*5))  &&  ((s as any).daystart ?? 0) > ((s as any).forest_lostday ?? 0) + 1) {
      // TODO-QSP: gt 'gad_forest_lost', 'rescue', 'ranger', $forest_args1
    }
  }
  scene.text('<center><h4>Somewhere in the forest</h4></center>');
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/gadforestrelax_...
    scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/gadukino/forest/gadforestrelax_nude'+ rand(1, 3) +'.jpg"></center>`);
  }
  if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).PCloSkirt ?? 0) === 0  &&  (!((s as any).bonfire ?? 0))) {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/gadforestrelax1...
    scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/gadukino/forest/gadforestrelax1.jpg"></center>`);
  }
  if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).PCloSkirt ?? 0) === 0  &&  ((s as any).bonfire ?? 0) === 1) {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/gadforestrelax2...
    scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/gadukino/forest/gadforestrelax2.jpg"></center>`);
  }
  if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).PCloSkirt ?? 0) > 0  &&  (!((s as any).bonfire ?? 0))) {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/gadforestrelax_...
    scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/gadukino/forest/gadforestrelax_ski1.jpg"></center>`);
  }
  if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).PCloSkirt ?? 0) > 0  &&  ((s as any).pantyworntype ?? 0) !== 'none'  &&  ((s as any).bonfire ?? 0) === 1) {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/gadforestrelax_...
    scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/gadukino/forest/gadforestrelax_ski2.jpg"></center>`);
  }
  if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).PCloSkirt ?? 0) > 0  &&  ((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).bonfire ?? 0) === 1) {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/gadforestrelax_...
    scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/gadukino/forest/gadforestrelax_ski3.jpg"></center>`);
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
      scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/gadukino/forest/gadforestrelax_sleepnude1.' + rand(1, 2) + '.jpg"></center>`);
    }
    if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  (!((s as any).PCloSkirt ?? 0))) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/gadforestrelax_...
      scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/gadukino/forest/gadforestrelax_sleep.jpg"></center>`);
    }
    if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).pantyworntype ?? 0) !== 'none'  &&  ((s as any).PCloSkirt ?? 0) > 0) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/gadforestrelax_...
      scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/gadukino/forest/gadforestrelax_sleepski.jpg"></center>`);
    }
    if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).PCloSkirt ?? 0) > 0) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/gadforestrelax_...
      scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/gadukino/forest/gadforestrelax_sleepski1.jpg"></center>`);
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
      scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/gadukino/forest/gadforestrelax_nude' + rand(1, 2) + '.jpg"></center>`);
    }
    if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  (!((s as any).PCloSkirt ?? 0))) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/gadforestrelax3...
      scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/gadukino/forest/gadforestrelax3.jpg"></center>`);
    }
    if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).pantyworntype ?? 0) !== 'none'  &&  ((s as any).PCloSkirt ?? 0) > 0) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/gadforestrelax_...
      scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/gadukino/forest/gadforestrelax_ski4.jpg"></center>`);
    }
    if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).PCloSkirt ?? 0) > 0) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/forest/gadforestrelax_...
      scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/gadukino/forest/gadforestrelax_ski5.jpg"></center>`);
    }
    scene.text('You spend half an hour relaxing, trying to pretend this is just like any other walk in the woods you\'ve done.');
    scene.actions([
      { label: 'Continue', goto: ['gad_forest_lost', 'relax'] },
    ]);
  } },
    ]);
  } else {
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
  scene.actions([
    { label: 'Explore the forest', handler: (st: GameState) => {
    // TODO-QSP: gt 'gad_forest_lost', $forest_args1
  } },
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
      (s as any).center_pickingday = ((s as any).daystart ?? 0);
      (s as any).mushroom_pickers_check = 3;
      (s as any).max_boletus = 3;
      (s as any).max_bilberry = 3;
    }
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).new_boletus = 0;
    (s as any).new_bilberry = 0;
    qspCall(s, 'gad_forest_lost', 'bushcraft', ((s as any).forest_args1 ?? 0));
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
      scene.text(`After searching for mushrooms and berries for half an hour you found ${((s as any).new_boletus ?? 0)} kg of mushrooms and ${((s as any).new_bilberry ?? 0)} kg of berries.`);
    } else {
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
        scene.text(`After searching for mushrooms and berries for half an hour you found ${((s as any).new_boletus ?? 0)} kg of mushrooms and ${((s as any).new_bilberry ?? 0)} kg of berries.`);
      } else {
        qspCall(s, 'mood', 'raise', 'tiny');
        qspCall(s, 'stat', '');
        qspCall(s, 'gad_forest', 'picking_clothes', ((s as any).forest_args1 ?? 0), 'berry');
        // TODO-QSP: dynamic text: After searching for mushrooms and berries for half an hour you found <<new_bilbe...
        scene.text(`After searching for mushrooms and berries for half an hour you found ${((s as any).new_bilberry ?? 0)} kg of berries.`);
        if (((s as any).new_boletus ?? 0) > 0  &&  (!((s as any).new_bilberry ?? 0))) {
          qspCall(s, 'mood', 'raise', 'tiny');
          qspCall(s, 'stat', '');
          qspCall(s, 'gad_forest', 'picking_clothes', ((s as any).forest_args1 ?? 0), 'mushroom');
          // TODO-QSP: dynamic text: After searching for mushrooms and berries for half an hour you found <<new_bolet...
          scene.text(`After searching for mushrooms and berries for half an hour you found ${((s as any).new_boletus ?? 0)} kg of mushrooms`);
        } else {
          qspCall(s, 'mood', 'lower', 'small');
          qspCall(s, 'stat', '');
          qspCall(s, 'gad_forest', 'picking_clothes_empty', ((s as any).forest_args1 ?? 0));
          scene.text('After searching for mushrooms and berries for half an hour you found nothing.');
        }
      }
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'gad_forest_lost', $forest_args1
  } },
      ]);
    }
  } },
    ]);
  }
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
    default:
      enterForestOutskirts(s, scene);
      break;
  }
}

export const gad_forest_lost: LocationDef = {
  name: 'gad_forest_lost',
  title: 'You should build a bonfire to increase the chance of being rescued and decrease the chance of being attacked by wolves.',
  region: 'gadukino',
  locationType: 'secluded',
  enter: enter,
};
