import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gad_swamp_woods', 'start');
  (s as any).location_type = 'secluded';
  (s as any).forest_args1 = 'gad_swamp_woods';
  scene.img('images/locations/gadukino/hunters/nearby_woods.jpg');
  scene.text('You are in the woods near the hut. You can see it not too far in the distance.');
  scene.text('You can also venture deeper into the woods to circle around the swamp, granted you do not get lost trying.');
  qspCall(s, 'gadukino_event', 'sound');
  qspCall(s, 'hunter_ambient', 'schedule');
  qspCall(s, 'stat', '');
  if (((s as any).firewood ?? 0) < 10) {
    scene.text('You can pick up some firewood around here to keep the fire going.');
    scene.actions([
      { label: 'Collect firewood (0:15)', handler: (st: GameState) => {
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/gadukino/hunters/` + ((((st as any).clothingworntype ?? 0) !== 'nude') ? ('firewood_normal.jpg') : ('firewood_nude.jpg')) + '"></center>');
    scene.text('You pick up some dry branches and twigs, putting them in a pile near the fire pit before returning.');
    (st as any).firewood = ((st as any).firewood ?? 0) + ((Math.floor(Math.random() * 5) + 2));
    if (((st as any).firewood ?? 0) < 15) {
      scene.text(`You have ${((st as any).firewood ?? '')} pieces of firewood and should probably grab some more to keep the fire going.`);
    } else {
      scene.text(`You have ${((st as any).firewood ?? '')} pieces of firewood and should have enough firewood to get a fire going.`);
    }
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Further', goto: ['gad_swamp_woods', 'start'] },
    ]);
  } },
    ]);
  } else {
    scene.text('You think about picking up firewood before remembering you have plenty back at the yard.');
  }
  scene.actions([
    { label: 'Go back to the hut', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['gad_swamp_yard', 'start'] },
    { label: 'Try to circle around the swamp', handler: (st: GameState) => {
    if (((st as any).pcs_bushcraft ?? 0) < 25) {
      scene.img('images/locations/gadukino/hunters/thinks1.jpg');
      scene.text('You consider trying to circle around the swamp but then think it is better if you do not get too far from the hut.');
      scene.text('If only you were a skilled pathfinder or knew nearby people that could help you get back…');
      scene.actions([
        { label: 'Further', goto: ['gad_swamp_woods', 'start'] },
      ]);
    } else {
      if (((st as any).pcs_bushcraft ?? 0) < 40) {
        scene.img('images/locations/gadukino/hunters/thinks2.jpg');
        scene.text('You consider trying to circle around the swamp. You have a vague idea of how to accomplish that, but there is a good chance you may get lost.');
        scene.actions([
          { label: 'Stay around for now', goto: ['gad_swamp_woods', 'start'] },
          { label: 'Try anyway', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    (st as any).nearby_woods_check = (Math.floor(Math.random() * 10) + 1);
    if (((st as any).nearby_woods_check ?? 0) === 1) {
      scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/gadukino/hunters/` + ((((st as any).clothingworntype ?? 0) !== 'nude') ? ('nearby_woods_success.jpg') : ('nearby_woods_success_nude.jpg')) + '"></center>');
      scene.text('You stick as close to the swamp as possible and follow the edge in one direction.');
      scene.text('Even though you occasionally step into the swamp, you manage to not get stuck.');
      scene.text('After some time walking and struggling not to get stuck, you can see the hut on the opposite side.');
      scene.actions([
        { label: 'Success!', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', '');
  }, goto: ['gad_forest', 'forest_center'] },
      ]);
    } else {
      if (((st as any).nearby_woods_check ?? 0) <= 3) {
        scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/gadukino/hunters/` + ((((st as any).clothingworntype ?? 0) !== 'nude') ? ('nearby_woods_stuck.jpg') : ('nearby_woods_stuck_nude.jpg')) + '"></center>');
        scene.text('You stick as close to the swamp as possible and follow the edge in one direction.');
        scene.text('Trusting the ground, you keep going, but you sink right into the swamp at some point without even realizing it.');
        scene.text('Seems like the forest can camouflage parts of the swamp, fooling careless hikers.');
        scene.actions([
          { label: 'If only you knew', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', '');
  }, goto: ['gad_swamp', 'stuck'] },
        ]);
      } else {
        scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/gadukino/hunters/` + ((((st as any).clothingworntype ?? 0) !== 'nude') ? ('nearby_woods_hike.jpg') : ('nearby_woods_hike_nude.jpg')) + '"></center>');
        scene.text('You start going into the woods in a direction you think will take you around the swamp.');
        scene.text('After a few hours of walking, you realize your surroundings are familiar.');
        scene.text('Then you look around you and can see the hut in the distance. Seems like you just walked around in circles and ended up where you started.');
        scene.text('You can see broken branches and prints ahead of you, marking the direction you initially started walking towards.');
        scene.actions([
          { label: 'That\'s interesting…', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', '');
  }, goto: ['gad_swamp_woods', 'start'] },
        ]);
      }
    }
  } },
        ]);
      } else {
        (st as any).minut = ((st as any).minut ?? 0) + 90;
        scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/gadukino/hunters/` + ((((st as any).clothingworntype ?? 0) !== 'nude') ? ('pathfinder.jpg') : ('pathfinder_nude.jpg')) + '"></center>');
        scene.text('You have a rough idea of how the forest curves around the swamp from seeing part of the swamp\'s edge from the hut yard.');
        scene.text('With that in mind, you go into the forest, aware of your surroundings, to ensure you are not stepping too far from the swamp\'s edge.');
        scene.text('After a couple hours, you are on the other edge of the forest.');
        scene.actions([
          { label: 'Further', goto: ['gad_swamp_woods', 'start'] },
        ]);
      }
    }
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gad_swamp_woods: LocationDef = {
  name: 'gad_swamp_woods',
  title: 'You are in the woods near the hut. You can see it not too fa',
  region: 'gadukino',
  locationType: 'secluded',
  enter: enter,
};
