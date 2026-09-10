import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).pcs_stam ?? 0) >=15  ||  ((s as any).pcs_stam ?? 0) >= 10  &&  ((s as any).mc_inventory ?? 0)?.['book_yoga'] + ((s as any).mc_inventory ?? 0)?.['hula_hoop'] > 0)) {
    scene.text('There is enough space in the room to <a href="exec: gt \'exercise\', \'workout\'">exercise</a>.');
  } else {
    scene.text('There is enough space in the room for a variety of exercises, but you don\'t have the energy to work out now.');
  }
  scene.build();
}

function enterWorkout(s: GameState, scene: SceneBuilder): void {
  (s as any).exer_menu = 0;
  qspCall(s, 'exercise', 'routines');
  (s as any).clothesAtLocation = qspFunc(s, 'clothing', 'lost_clothes_here', ((s as any).loc ?? 0));
  if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).clothesAtLocation ?? 0) === 1) {
    scene.actions([
      { label: 'End workout and get dressed', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'underwear', 'wear');
    qspCall(s, 'clothing', 'recover_lost_clothes', ((s as any).loc ?? 0), 1);
    qspCall(s, 'stat', '');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } else {
    scene.actions([
      { label: 'End workout', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  if (((s as any).pcs_stam ?? 0) < ((s as any).stammax ?? 0) / 5) {
    scene.text('You do not have the stamina to exercise currently');
  } else {
    scene.text('You are too hungry to exercise currently');
    if (((s as any).pcs_hydra ?? 0) < 5) {
      scene.text('You are too thirsty to exercise currently');
    } else {
      scene.text('<b>You need to equip the proper attire before you can exercise</b>');
      if (((s as any).exer_stam ?? 0)[1] !== 0  &&  ((s as any).pcs_stam ?? 0) > ((s as any).exer_stam ?? 0)[1]) {
        // TODO-QSP: act '<<$excer_name[1]>> - (<<exer_stam[1]>> stamina)': exercisex = 1
        scene.actions([{ label: 'Continue', goto: ['exercise', 'auto'] }]);
      }
      if (((s as any).exer_stam ?? 0)[2] !== 0  &&  ((s as any).pcs_stam ?? 0) > ((s as any).exer_stam ?? 0)[2]) {
        // TODO-QSP: act '<<$excer_name[2]>> - (<<exer_stam[2]>> stamina)': exercisex = 2
        scene.actions([{ label: 'Continue', goto: ['exercise', 'auto'] }]);
      }
      if (((s as any).exer_stam ?? 0)[3] !== 0  &&  ((s as any).pcs_stam ?? 0) > ((s as any).exer_stam ?? 0)[3]) {
        // TODO-QSP: act '<<$excer_name[3]>> - (<<exer_stam[3]>> stamina)': exercisex = 3
        scene.actions([{ label: 'Continue', goto: ['exercise', 'auto'] }]);
      }
      if (((s as any).exer_stam ?? 0)[4] !== 0  &&  ((s as any).pcs_stam ?? 0) > ((s as any).exer_stam ?? 0)[4]) {
        // TODO-QSP: act '<<$excer_name[4]>> - (<<exer_stam[4]>> stamina)': exercisex = 4
        scene.actions([{ label: 'Continue', goto: ['exercise', 'auto'] }]);
      }
      if (((s as any).exer_stam ?? 0)[5] !== 0  &&  ((s as any).pcs_stam ?? 0) > ((s as any).exer_stam ?? 0)[5]) {
        // TODO-QSP: act '<<$excer_name[5]>> - (<<exer_stam[5]>> stamina)': exercisex = 5
        scene.actions([{ label: 'Continue', goto: ['exercise', 'auto'] }]);
      }
      scene.actions([
        { label: 'Manual routines', goto: ['exercise', 'manual'] },
        { label: 'Define routines', goto: ['exercise', 'setup'] },
      ]);
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'workout':
      enterWorkout(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const exercise: LocationDef = {
  name: 'exercise',
  title: 'There is enough space in the room to <a href="exec: gt \'exer',
  region: 'other',
  locationType: 'secluded',
  enter: enter,
};
