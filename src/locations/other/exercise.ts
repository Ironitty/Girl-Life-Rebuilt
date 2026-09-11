import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).pcs_stam ?? 0) >=15  ||  ((s as any).pcs_stam ?? 0) >= 10  &&  ((s as any).mc_inventory ?? 0)?.['book_yoga'] + ((s as any).mc_inventory ?? 0)?.['hula_hoop'] > 0)) {
    scene.text('There is enough space in the room to <a href="exec: gt \'exercise\', \'workout\'">exercise</a>.');
  } else {
    scene.text('There is enough space in the room for a variety of exercises, but you don\'t have the energy to work out now.');
  }
  // TODO-QSP: end
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
    if (((s as any).pcs_energy ?? 0) < 5) {
      scene.text('You are too hungry to exercise currently');
    } else {
      if (((s as any).pcs_hydra ?? 0) < 5) {
        scene.text('You are too thirsty to exercise currently');
      } else {
        if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).PCloStyle2 ?? 0) !== 6) {
          scene.text('<b>You need to equip the proper attire before you can exercise</b>');
        } else {
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
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAuto(s: GameState, scene: SceneBuilder): void {
  (s as any).exer_auto = 1;
  if (((s as any).exer_rout0 ?? 0)?.[String((s as any).exercisex ?? 0)] > 0) {
    (s as any).timemult = ((s as any).exer_rout0 ?? 0)?.[String((s as any).exercisex ?? 0)];
    qspCall(s, 'exercise', 'timestring');
    scene.actions([{ label: 'Continue', goto: ['exercise', 'push'] }]);
  } else {
    if (((s as any).exer_rout1 ?? 0)?.[String((s as any).exercisex ?? 0)] > 0) {
      (s as any).timemult = ((s as any).exer_rout1 ?? 0)?.[String((s as any).exercisex ?? 0)];
      qspCall(s, 'exercise', 'timestring');
      scene.actions([{ label: 'Continue', goto: ['exercise', 'press'] }]);
    } else {
      if (((s as any).exer_rout2 ?? 0)?.[String((s as any).exercisex ?? 0)] > 0) {
        (s as any).timemult = ((s as any).exer_rout2 ?? 0)?.[String((s as any).exercisex ?? 0)];
        qspCall(s, 'exercise', 'timestring');
        scene.actions([{ label: 'Continue', goto: ['exercise', 'rope'] }]);
      } else {
        if (((s as any).exer_rout3 ?? 0)?.[String((s as any).exercisex ?? 0)] > 0) {
          (s as any).timemult = ((s as any).exer_rout3 ?? 0)?.[String((s as any).exercisex ?? 0)];
          qspCall(s, 'exercise', 'timestring');
          scene.actions([{ label: 'Continue', goto: ['exercise', 'yoga'] }]);
        } else {
          if (((s as any).exer_rout4 ?? 0)?.[String((s as any).exercisex ?? 0)] > 0) {
            (s as any).timemult = ((s as any).exer_rout4 ?? 0)?.[String((s as any).exercisex ?? 0)];
            qspCall(s, 'exercise', 'timestring');
            scene.actions([{ label: 'Continue', goto: ['exercise', 'hula'] }]);
          } else {
            if (((s as any).exer_rout5 ?? 0)?.[String((s as any).exercisex ?? 0)] > 0) {
              (s as any).timemult = ((s as any).exer_rout5 ?? 0)?.[String((s as any).exercisex ?? 0)];
              qspCall(s, 'exercise', 'timestring');
              scene.actions([{ label: 'Continue', goto: ['exercise', 'butt'] }]);
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAuto1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).exer_rout1 ?? 0)?.[String((s as any).exercisex ?? 0)] > 0) {
    (s as any).timemult = ((s as any).exer_rout1 ?? 0)?.[String((s as any).exercisex ?? 0)];
    qspCall(s, 'exercise', 'timestring');
    scene.actions([{ label: 'Continue', goto: ['exercise', 'press'] }]);
  } else {
    if (((s as any).exer_rout2 ?? 0)?.[String((s as any).exercisex ?? 0)] > 0) {
      (s as any).timemult = ((s as any).exer_rout2 ?? 0)?.[String((s as any).exercisex ?? 0)];
      qspCall(s, 'exercise', 'timestring');
      scene.actions([{ label: 'Continue', goto: ['exercise', 'rope'] }]);
    } else {
      if (((s as any).exer_rout3 ?? 0)?.[String((s as any).exercisex ?? 0)] > 0) {
        (s as any).timemult = ((s as any).exer_rout3 ?? 0)?.[String((s as any).exercisex ?? 0)];
        qspCall(s, 'exercise', 'timestring');
        scene.actions([{ label: 'Continue', goto: ['exercise', 'yoga'] }]);
      } else {
        if (((s as any).exer_rout4 ?? 0)?.[String((s as any).exercisex ?? 0)] > 0) {
          (s as any).timemult = ((s as any).exer_rout4 ?? 0)?.[String((s as any).exercisex ?? 0)];
          qspCall(s, 'exercise', 'timestring');
          scene.actions([{ label: 'Continue', goto: ['exercise', 'hula'] }]);
        } else {
          if (((s as any).exer_rout5 ?? 0)?.[String((s as any).exercisex ?? 0)] > 0) {
            (s as any).timemult = ((s as any).exer_rout5 ?? 0)?.[String((s as any).exercisex ?? 0)];
            qspCall(s, 'exercise', 'timestring');
            scene.actions([{ label: 'Continue', goto: ['exercise', 'butt'] }]);
          } else {
            scene.actions([{ label: 'Continue', goto: ['exercise', 'auto_end'] }]);
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAuto2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).exer_rout2 ?? 0)?.[String((s as any).exercisex ?? 0)] > 0) {
    (s as any).timemult = ((s as any).exer_rout2 ?? 0)?.[String((s as any).exercisex ?? 0)];
    qspCall(s, 'exercise', 'timestring');
    scene.actions([{ label: 'Continue', goto: ['exercise', 'rope'] }]);
  } else {
    if (((s as any).exer_rout3 ?? 0)?.[String((s as any).exercisex ?? 0)] > 0) {
      (s as any).timemult = ((s as any).exer_rout3 ?? 0)?.[String((s as any).exercisex ?? 0)];
      qspCall(s, 'exercise', 'timestring');
      scene.actions([{ label: 'Continue', goto: ['exercise', 'yoga'] }]);
    } else {
      if (((s as any).exer_rout4 ?? 0)?.[String((s as any).exercisex ?? 0)] > 0) {
        (s as any).timemult = ((s as any).exer_rout4 ?? 0)?.[String((s as any).exercisex ?? 0)];
        qspCall(s, 'exercise', 'timestring');
        scene.actions([{ label: 'Continue', goto: ['exercise', 'hula'] }]);
      } else {
        if (((s as any).exer_rout5 ?? 0)?.[String((s as any).exercisex ?? 0)] > 0) {
          (s as any).timemult = ((s as any).exer_rout5 ?? 0)?.[String((s as any).exercisex ?? 0)];
          qspCall(s, 'exercise', 'timestring');
          scene.actions([{ label: 'Continue', goto: ['exercise', 'butt'] }]);
        } else {
          scene.actions([{ label: 'Continue', goto: ['exercise', 'auto_end'] }]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAuto3(s: GameState, scene: SceneBuilder): void {
  if (((s as any).exer_rout3 ?? 0)?.[String((s as any).exercisex ?? 0)] > 0) {
    (s as any).timemult = ((s as any).exer_rout3 ?? 0)?.[String((s as any).exercisex ?? 0)];
    qspCall(s, 'exercise', 'timestring');
    scene.actions([{ label: 'Continue', goto: ['exercise', 'yoga'] }]);
  } else {
    if (((s as any).exer_rout4 ?? 0)?.[String((s as any).exercisex ?? 0)] > 0) {
      (s as any).timemult = ((s as any).exer_rout4 ?? 0)?.[String((s as any).exercisex ?? 0)];
      qspCall(s, 'exercise', 'timestring');
      scene.actions([{ label: 'Continue', goto: ['exercise', 'hula'] }]);
    } else {
      if (((s as any).exer_rout5 ?? 0)?.[String((s as any).exercisex ?? 0)] > 0) {
        (s as any).timemult = ((s as any).exer_rout5 ?? 0)?.[String((s as any).exercisex ?? 0)];
        qspCall(s, 'exercise', 'timestring');
        scene.actions([{ label: 'Continue', goto: ['exercise', 'butt'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['exercise', 'auto_end'] }]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAuto4(s: GameState, scene: SceneBuilder): void {
  if (((s as any).exer_rout4 ?? 0)?.[String((s as any).exercisex ?? 0)] > 0) {
    (s as any).timemult = ((s as any).exer_rout4 ?? 0)?.[String((s as any).exercisex ?? 0)];
    qspCall(s, 'exercise', 'timestring');
    scene.actions([{ label: 'Continue', goto: ['exercise', 'hula'] }]);
  } else {
    if (((s as any).exer_rout5 ?? 0)?.[String((s as any).exercisex ?? 0)] > 0) {
      (s as any).timemult = ((s as any).exer_rout5 ?? 0)?.[String((s as any).exercisex ?? 0)];
      qspCall(s, 'exercise', 'timestring');
      scene.actions([{ label: 'Continue', goto: ['exercise', 'butt'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['exercise', 'auto_end'] }]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAuto5(s: GameState, scene: SceneBuilder): void {
  if (((s as any).exer_rout5 ?? 0)?.[String((s as any).exercisex ?? 0)] > 0) {
    (s as any).timemult = ((s as any).exer_rout5 ?? 0)?.[String((s as any).exercisex ?? 0)];
    qspCall(s, 'exercise', 'timestring');
    scene.actions([{ label: 'Continue', goto: ['exercise', 'butt'] }]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['exercise', 'auto_end'] }]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterAutoEnd(s: GameState, scene: SceneBuilder): void {
  (s as any).exer_auto = 0;
  scene.actions([{ label: 'Continue', goto: ['exercise', 'workout'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterManual(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exercise', 'get_sport_clothes_exercise_bonus');
  if (((s as any).pcs_stam ?? 0) < (5 * (10 - ((s as any).sport_clothes_exercise_bonus ?? 0)) + 2) / 3) {
    scene.text('You don\'t have the energy/stamina to work out anymore now.');
  } else {
    if (((s as any).mc_inventory ?? 0)?.['skipping_rope'] > 0  &&  ((s as any).loc ?? 0) !== 'gad_meadow') {
      scene.actions([
        { label: 'Jump rope', handler: (st: GameState) => {
    if (((s as any).pcs_stam ?? 0) >= ((5 * (10 - ((s as any).sport_clothes_exercise_bonus ?? 0)) + 2) / 2)) {
      scene.actions([
        { label: '5 minutes', handler: (st: GameState) => {
    (s as any).timemult = 1;
    qspCall(s, 'exercise', 'timestring');
  }, goto: ['exercise', 'rope'] },
      ]);
    }
    if (((s as any).pcs_stam ?? 0) >= 2 * ((5 * (10 - ((s as any).sport_clothes_exercise_bonus ?? 0)) + 2) / 2)) {
      scene.actions([
        { label: '10 minutes', handler: (st: GameState) => {
    (s as any).timemult = 2;
    qspCall(s, 'exercise', 'timestring');
  }, goto: ['exercise', 'rope'] },
      ]);
    }
    if (((s as any).pcs_stam ?? 0) >= 3 * ((5 * (10 - ((s as any).sport_clothes_exercise_bonus ?? 0)) + 2) / 2)) {
      scene.actions([
        { label: '15 minutes', handler: (st: GameState) => {
    (s as any).timemult = 3;
    qspCall(s, 'exercise', 'timestring');
  }, goto: ['exercise', 'rope'] },
      ]);
    }
    if (((s as any).pcs_stam ?? 0) >= 4 * ((5 * (10 - ((s as any).sport_clothes_exercise_bonus ?? 0)) + 2) / 2)) {
      scene.actions([
        { label: '20 minutes', handler: (st: GameState) => {
    (s as any).timemult = 4;
    qspCall(s, 'exercise', 'timestring');
  }, goto: ['exercise', 'rope'] },
      ]);
    }
    scene.actions([
      { label: 'Return', goto: ['exercise', 'manual'] },
    ]);
  } },
      ]);
    }
    if (((s as any).mc_inventory ?? 0)?.['book_yoga'] > 0) {
      scene.actions([
        { label: 'Do yoga', handler: (st: GameState) => {
    if (((s as any).pcs_stam ?? 0) >= ((5 * (10 - ((s as any).sport_clothes_exercise_bonus ?? 0)) + 2) / 3)) {
      scene.actions([
        { label: '5 minutes', handler: (st: GameState) => {
    (s as any).timemult = 1;
    qspCall(s, 'exercise', 'timestring');
  }, goto: ['exercise', 'yoga'] },
      ]);
    }
    if (((s as any).pcs_stam ?? 0) >= 2 * ((5 * (10 - ((s as any).sport_clothes_exercise_bonus ?? 0)) + 2) / 3)) {
      scene.actions([
        { label: '10 minutes', handler: (st: GameState) => {
    (s as any).timemult = 2;
    qspCall(s, 'exercise', 'timestring');
  }, goto: ['exercise', 'yoga'] },
      ]);
    }
    if (((s as any).pcs_stam ?? 0) >= 3 * ((5 * (10 - ((s as any).sport_clothes_exercise_bonus ?? 0)) + 2) / 3)) {
      scene.actions([
        { label: '15 minutes', handler: (st: GameState) => {
    (s as any).timemult = 3;
    qspCall(s, 'exercise', 'timestring');
  }, goto: ['exercise', 'yoga'] },
      ]);
    }
    if (((s as any).pcs_stam ?? 0) >= 4 * ((5 * (10 - ((s as any).sport_clothes_exercise_bonus ?? 0)) + 2) / 3)) {
      scene.actions([
        { label: '20 minutes', handler: (st: GameState) => {
    (s as any).timemult = 4;
    qspCall(s, 'exercise', 'timestring');
  }, goto: ['exercise', 'yoga'] },
      ]);
    }
    scene.actions([
      { label: 'Return', goto: ['exercise', 'manual'] },
    ]);
  } },
      ]);
    }
    if (((s as any).mc_inventory ?? 0)?.['hula_hoop'] > 0  &&  ((s as any).loc ?? 0) !== 'gad_meadow') {
      scene.actions([
        { label: 'Use your hula hoop', handler: (st: GameState) => {
    if (((s as any).pcs_stam ?? 0) >= ((5 * (10 - ((s as any).sport_clothes_exercise_bonus ?? 0)) + 2) / 3)) {
      scene.actions([
        { label: '5 minutes', handler: (st: GameState) => {
    (s as any).timemult = 1;
    qspCall(s, 'exercise', 'timestring');
  }, goto: ['exercise', 'hula'] },
      ]);
    }
    if (((s as any).pcs_stam ?? 0) >= 2 * ((5 * (10 - ((s as any).sport_clothes_exercise_bonus ?? 0)) + 2) / 3)) {
      scene.actions([
        { label: '10 minutes', handler: (st: GameState) => {
    (s as any).timemult = 2;
    qspCall(s, 'exercise', 'timestring');
  }, goto: ['exercise', 'hula'] },
      ]);
    }
    if (((s as any).pcs_stam ?? 0) >= 3 * ((5 * (10 - ((s as any).sport_clothes_exercise_bonus ?? 0)) + 2) / 3)) {
      scene.actions([
        { label: '15 minutes', handler: (st: GameState) => {
    (s as any).timemult = 3;
    qspCall(s, 'exercise', 'timestring');
  }, goto: ['exercise', 'hula'] },
      ]);
    }
    if (((s as any).pcs_stam ?? 0) >= 4 * ((5 * (10 - ((s as any).sport_clothes_exercise_bonus ?? 0)) + 2) / 3)) {
      scene.actions([
        { label: '20 minutes', handler: (st: GameState) => {
    (s as any).timemult = 4;
    qspCall(s, 'exercise', 'timestring');
  }, goto: ['exercise', 'hula'] },
      ]);
    }
    scene.actions([
      { label: 'Return', goto: ['exercise', 'manual'] },
    ]);
  } },
      ]);
    }
    if (((s as any).pcs_stam ?? 0) < (5*(10 - ((s as any).sport_clothes_exercise_bonus ?? 0)) + 2) / 2) {
      // TODO-QSP: delact 'Jump rope'
      // TODO-QSP: delact 'Do crunches'
      // TODO-QSP: delact 'Do pushups'
    }
    scene.actions([
      { label: 'Do pushups', handler: (st: GameState) => {
    if (((s as any).pcs_stam ?? 0) >= ((5 * (10 - ((s as any).sport_clothes_exercise_bonus ?? 0)) + 2) / 2)) {
      scene.actions([
        { label: '5 minutes', handler: (st: GameState) => {
    (s as any).timemult = 1;
    qspCall(s, 'exercise', 'timestring');
  }, goto: ['exercise', 'push'] },
      ]);
    }
    if (((s as any).pcs_stam ?? 0) >= 2 * ((5 * (10 - ((s as any).sport_clothes_exercise_bonus ?? 0)) + 2) / 2)) {
      scene.actions([
        { label: '10 minutes', handler: (st: GameState) => {
    (s as any).timemult = 2;
    qspCall(s, 'exercise', 'timestring');
  }, goto: ['exercise', 'push'] },
      ]);
    }
    if (((s as any).pcs_stam ?? 0) >= 3 * ((5 * (10 - ((s as any).sport_clothes_exercise_bonus ?? 0)) + 2) / 2)) {
      scene.actions([
        { label: '15 minutes', handler: (st: GameState) => {
    (s as any).timemult = 3;
    qspCall(s, 'exercise', 'timestring');
  }, goto: ['exercise', 'push'] },
      ]);
    }
    if (((s as any).pcs_stam ?? 0) >= 4 * ((5 * (10 - ((s as any).sport_clothes_exercise_bonus ?? 0)) + 2) / 2)) {
      scene.actions([
        { label: '20 minutes', handler: (st: GameState) => {
    (s as any).timemult = 4;
    qspCall(s, 'exercise', 'timestring');
  }, goto: ['exercise', 'push'] },
      ]);
    }
    scene.actions([
      { label: 'Return', goto: ['exercise', 'manual'] },
    ]);
  } },
      { label: 'Do crunches', handler: (st: GameState) => {
    if (((s as any).pcs_stam ?? 0) >= ((5 * (10 - ((s as any).sport_clothes_exercise_bonus ?? 0)) + 2) / 2)) {
      scene.actions([
        { label: '5 minutes', handler: (st: GameState) => {
    (s as any).timemult = 1;
    qspCall(s, 'exercise', 'timestring');
  }, goto: ['exercise', 'press'] },
      ]);
    }
    if (((s as any).pcs_stam ?? 0) >= 2 * ((5 * (10 - ((s as any).sport_clothes_exercise_bonus ?? 0)) + 2) / 2)) {
      scene.actions([
        { label: '10 minutes', handler: (st: GameState) => {
    (s as any).timemult = 2;
    qspCall(s, 'exercise', 'timestring');
  }, goto: ['exercise', 'press'] },
      ]);
    }
    if (((s as any).pcs_stam ?? 0) >= 3 * ((5 * (10 - ((s as any).sport_clothes_exercise_bonus ?? 0)) + 2) / 2)) {
      scene.actions([
        { label: '15 minutes', handler: (st: GameState) => {
    (s as any).timemult = 3;
    qspCall(s, 'exercise', 'timestring');
  }, goto: ['exercise', 'press'] },
      ]);
    }
    if (((s as any).pcs_stam ?? 0) >= 4 * ((5 * (10 - ((s as any).sport_clothes_exercise_bonus ?? 0)) + 2) / 2)) {
      scene.actions([
        { label: '20 minutes', handler: (st: GameState) => {
    (s as any).timemult = 4;
    qspCall(s, 'exercise', 'timestring');
  }, goto: ['exercise', 'press'] },
      ]);
    }
    scene.actions([
      { label: 'Return', goto: ['exercise', 'manual'] },
    ]);
  } },
      { label: 'Do squats', handler: (st: GameState) => {
    if (((s as any).pcs_stam ?? 0) >= ((5 * (10 - ((s as any).sport_clothes_exercise_bonus ?? 0)) + 2) / 3)) {
      scene.actions([
        { label: '5 minutes', handler: (st: GameState) => {
    (s as any).timemult = 1;
    qspCall(s, 'exercise', 'timestring');
  }, goto: ['exercise', 'butt'] },
      ]);
    }
    if (((s as any).pcs_stam ?? 0) >= 2 * ((5 * (10 - ((s as any).sport_clothes_exercise_bonus ?? 0)) + 2) / 3)) {
      scene.actions([
        { label: '10 minutes', handler: (st: GameState) => {
    (s as any).timemult = 2;
    qspCall(s, 'exercise', 'timestring');
  }, goto: ['exercise', 'butt'] },
      ]);
    }
    if (((s as any).pcs_stam ?? 0) >= 3 * ((5 * (10 - ((s as any).sport_clothes_exercise_bonus ?? 0)) + 2) / 3)) {
      scene.actions([
        { label: '15 minutes', handler: (st: GameState) => {
    (s as any).timemult = 3;
    qspCall(s, 'exercise', 'timestring');
  }, goto: ['exercise', 'butt'] },
      ]);
    }
    if (((s as any).pcs_stam ?? 0) >= 4 * ((5 * (10 - ((s as any).sport_clothes_exercise_bonus ?? 0)) + 2) / 3)) {
      scene.actions([
        { label: '20 minutes', handler: (st: GameState) => {
    (s as any).timemult = 4;
    qspCall(s, 'exercise', 'timestring');
  }, goto: ['exercise', 'butt'] },
      ]);
    }
    scene.actions([
      { label: 'Return', goto: ['exercise', 'manual'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['exercise', 'workout'] },
  ]);
  scene.build();
}

function enterRoutines(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exercise', 'update_matrix');
  scene.text('<center><h2>Exercise Routines</h2></center>');
  scene.text('<center><table>');
  scene.text('<td><b>Routine</b></td><td><b>Push ups</b></td><td><b>Crunches</b></td><td><b>Jump rope</b></td><td><b>Yoga</td><td><b>Hula hoop</b></td><td><b>Squats</b></td>');
  // TODO-QSP: dynamic text: <tr><td width="100" cellspacing="2" align="left">'+iif(exer_menu = 1, '<a href="...
  scene.text(`<tr><td width="100" cellspacing="2" align="left">'+iif(exer_menu = 1, '<a href="exec:$excer_name[1] = input ('<center>Enter name for exercise routine 1<br>Leave blank to restore default name.</center>') & gs 'exercise', 'rename' & gt 'exercise', 'setup'">${qspUntranslated(s, "excer_name[1]", { location: "exercise" })}:</a> ', '${qspUntranslated(s, "excer_name[1]", { location: "exercise" })}:</a> ')+'</td><td width="100" cellspacing="2" align="left"><b>${((s as any).exer_rout0 ?? 0)[1]*5}</b> minutes</td><td width="100" cellspacing="2" align="left"><b>${((s as any).exer_rout1 ?? 0)[1]*5}</b> minutes</td><td width="100" cellspacing="2" align="left"><b>${((s as any).exer_rout2 ?? 0)[1]*5}</b> minutes</td><td width="100" cellspacing="2" align="left"><b>${((s as any).exer_rout3 ?? 0)[1]*5}</b> minutes</td><td width="100" cellspacing="2" align="left"><b>${((s as any).exer_rout4 ?? 0)[1]*5}</b> minutes</td><td width="100" cellspacing="2" align="left"><b>${((s as any).exer_rout5 ?? 0)[1]*5}</b> minutes</td>`);
  // TODO-QSP: dynamic text: <tr><td width="100" cellspacing="2" align="left">'+iif(exer_menu = 1, '<a href="...
  scene.text(`<tr><td width="100" cellspacing="2" align="left">'+iif(exer_menu = 1, '<a href="exec:$excer_name[2] = input ('<center>Enter name for exercise routine 2<br>Leave blank to restore default name.</center>') & gs 'exercise', 'rename' & gt 'exercise', 'setup'">${qspUntranslated(s, "excer_name[2]", { location: "exercise" })}:</a> ', '${qspUntranslated(s, "excer_name[2]", { location: "exercise" })}:</a> ')+'</td><td width="100" cellspacing="2" align="left"><b>${((s as any).exer_rout0 ?? 0)[2]*5}</b> minutes</td><td width="100" cellspacing="2" align="left"><b>${((s as any).exer_rout1 ?? 0)[2]*5}</b> minutes</td><td width="100" cellspacing="2" align="left"><b>${((s as any).exer_rout2 ?? 0)[2]*5}</b> minutes</td><td width="100" cellspacing="2" align="left"><b>${((s as any).exer_rout3 ?? 0)[2]*5}</b> minutes</td><td width="100" cellspacing="2" align="left"><b>${((s as any).exer_rout4 ?? 0)[2]*5}</b> minutes</td><td width="100" cellspacing="2" align="left"><b>${((s as any).exer_rout5 ?? 0)[2]*5}</b> minutes</td>`);
  // TODO-QSP: dynamic text: <tr><td width="100" cellspacing="2" align="left">'+iif(exer_menu = 1, '<a href="...
  scene.text(`<tr><td width="100" cellspacing="2" align="left">'+iif(exer_menu = 1, '<a href="exec:$excer_name[3] = input ('<center>Enter name for exercise routine 3<br>Leave blank to restore default name.</center>') & gs 'exercise', 'rename' & gt 'exercise', 'setup'">${qspUntranslated(s, "excer_name[3]", { location: "exercise" })}:</a> ', '${qspUntranslated(s, "excer_name[3]", { location: "exercise" })}:</a> ')+'</td><td width="100" cellspacing="2" align="left"><b>${((s as any).exer_rout0 ?? 0)[3]*5}</b> minutes</td><td width="100" cellspacing="2" align="left"><b>${((s as any).exer_rout1 ?? 0)[3]*5}</b> minutes</td><td width="100" cellspacing="2" align="left"><b>${((s as any).exer_rout2 ?? 0)[3]*5}</b> minutes</td><td width="100" cellspacing="2" align="left"><b>${((s as any).exer_rout3 ?? 0)[3]*5}</b> minutes</td><td width="100" cellspacing="2" align="left"><b>${((s as any).exer_rout4 ?? 0)[3]*5}</b> minutes</td><td width="100" cellspacing="2" align="left"><b>${((s as any).exer_rout5 ?? 0)[3]*5}</b> minutes</td>`);
  // TODO-QSP: dynamic text: <tr><td width="100" cellspacing="2" align="left">'+iif(exer_menu = 1, '<a href="...
  scene.text(`<tr><td width="100" cellspacing="2" align="left">'+iif(exer_menu = 1, '<a href="exec:$excer_name[4] = input ('<center>Enter name for exercise routine 4<br>Leave blank to restore default name.</center>') & gs 'exercise', 'rename' & gt 'exercise', 'setup'">${qspUntranslated(s, "excer_name[4]", { location: "exercise" })}:</a> ', '${qspUntranslated(s, "excer_name[4]", { location: "exercise" })}:</a> ')+'</td><td width="100" cellspacing="2" align="left"><b>${((s as any).exer_rout0 ?? 0)[4]*5}</b> minutes</td><td width="100" cellspacing="2" align="left"><b>${((s as any).exer_rout1 ?? 0)[4]*5}</b> minutes</td><td width="100" cellspacing="2" align="left"><b>${((s as any).exer_rout2 ?? 0)[4]*5}</b> minutes</td><td width="100" cellspacing="2" align="left"><b>${((s as any).exer_rout3 ?? 0)[4]*5}</b> minutes</td><td width="100" cellspacing="2" align="left"><b>${((s as any).exer_rout4 ?? 0)[4]*5}</b> minutes</td><td width="100" cellspacing="2" align="left"><b>${((s as any).exer_rout5 ?? 0)[4]*5}</b> minutes</td>`);
  // TODO-QSP: dynamic text: <tr><td width="100" cellspacing="2" align="left">'+iif(exer_menu = 1, '<a href="...
  scene.text(`<tr><td width="100" cellspacing="2" align="left">'+iif(exer_menu = 1, '<a href="exec:$excer_name[5] = input ('<center>Enter name for exercise routine 5<br>Leave blank to restore default name.</center>') & gs 'exercise', 'rename' & gt 'exercise', 'setup'">${qspUntranslated(s, "excer_name[5]", { location: "exercise" })}:</a> ', '${qspUntranslated(s, "excer_name[5]", { location: "exercise" })}:</a> ')+'</td><td width="100" cellspacing="2" align="left"><b>${((s as any).exer_rout0 ?? 0)[5]*5}</b> minutes</td><td width="100" cellspacing="2" align="left"><b>${((s as any).exer_rout1 ?? 0)[5]*5}</b> minutes</td><td width="100" cellspacing="2" align="left"><b>${((s as any).exer_rout2 ?? 0)[5]*5}</b> minutes</td><td width="100" cellspacing="2" align="left"><b>${((s as any).exer_rout3 ?? 0)[5]*5}</b> minutes</td><td width="100" cellspacing="2" align="left"><b>${((s as any).exer_rout4 ?? 0)[5]*5}</b> minutes</td><td width="100" cellspacing="2" align="left"><b>${((s as any).exer_rout5 ?? 0)[5]*5}</b> minutes</td>`);
  scene.text('<tr><td colspan="7"><br><br><center><a href="exec:gt \'exercise\', \'setup\'">Define up to 5 automated exercise routines.</a></center></td></tr>');
  scene.text('</table></center>');
  // TODO-QSP: end
  scene.build();
}

function enterSetup(s: GameState, scene: SceneBuilder): void {
  (s as any).exer_menu = 1;
  qspCall(s, 'exercise', 'routines');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['exercise', 'workout'] },
    { label: '1. Define "<<$excer_name[1]>>"', handler: (st: GameState) => {
    (st as any).stamindx = 1;
  }, goto: ['exercise', 'matrix'] },
    { label: '1. Rename "<<$excer_name[1]>>"', handler: (st: GameState) => {
    // TODO-QSP: $excer_name[1] = input ('<center>Enter name for exercise routine 1<br>Leave blank to restore default...
    qspCall(s, 'exercise', 'rename');
  }, goto: ['exercise', 'setup'] },
    { label: '2. Define "<<$excer_name[2]>>"', handler: (st: GameState) => {
    (st as any).stamindx = 2;
  }, goto: ['exercise', 'matrix'] },
    { label: '2. Rename "<<$excer_name[2]>>"', handler: (st: GameState) => {
    // TODO-QSP: $excer_name[2] = input ('<center>Enter name for exercise routine 2<br>Leave blank to restore default...
    qspCall(s, 'exercise', 'rename');
  }, goto: ['exercise', 'setup'] },
    { label: '3. Define "<<$excer_name[3]>>"', handler: (st: GameState) => {
    (st as any).stamindx = 3;
  }, goto: ['exercise', 'matrix'] },
    { label: '3. Rename "<<$excer_name[3]>>"', handler: (st: GameState) => {
    // TODO-QSP: $excer_name[3] = input ('<center>Enter name for exercise routine 3<br>Leave blank to restore default...
    qspCall(s, 'exercise', 'rename');
  }, goto: ['exercise', 'setup'] },
    { label: '4. Define "<<$excer_name[4]>>"', handler: (st: GameState) => {
    (st as any).stamindx = 4;
  }, goto: ['exercise', 'matrix'] },
    { label: '4. Rename "<<$excer_name[4]>>"', handler: (st: GameState) => {
    // TODO-QSP: $excer_name[4] = input ('<center>Enter name for exercise routine 4<br>Leave blank to restore default...
    qspCall(s, 'exercise', 'rename');
  }, goto: ['exercise', 'setup'] },
    { label: '5. Define "<<$excer_name[5]>>"', handler: (st: GameState) => {
    (st as any).stamindx = 5;
  }, goto: ['exercise', 'matrix'] },
    { label: '5. Rename "<<$excer_name[5]>>"', handler: (st: GameState) => {
    // TODO-QSP: $excer_name[5] = input ('<center>Enter name for exercise routine 5<br>Leave blank to restore default...
    qspCall(s, 'exercise', 'rename');
  }, goto: ['exercise', 'setup'] },
  ]);
  scene.build();
}

function enterRename(s: GameState, scene: SceneBuilder): void {
  if (((s as any).excer_name ?? 0)[1] === '') {
    ((s as any).excer_name ?? {})[1] = 'Default 1';
  }
  if (((s as any).excer_name ?? 0)[2] === '') {
    ((s as any).excer_name ?? {})[2] = 'Default 2';
  }
  if (((s as any).excer_name ?? 0)[3] === '') {
    ((s as any).excer_name ?? {})[3] = 'Default 3';
  }
  if (((s as any).excer_name ?? 0)[4] === '') {
    ((s as any).excer_name ?? {})[4] = 'Default 4';
  }
  if (((s as any).excer_name ?? 0)[5] === '') {
    ((s as any).excer_name ?? {})[5] = 'Default 5';
  }
  // TODO-QSP: end
  scene.build();
}

function enterUpdateMatrix(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_tiers ?? {})[0] = 3;
  ((s as any).temp_tiers ?? {})[1] = 3;
  ((s as any).temp_tiers ?? {})[2] = 3;
  ((s as any).temp_tiers ?? {})[3] = 2;
  ((s as any).temp_tiers ?? {})[4] = 2;
  ((s as any).temp_tiers ?? {})[5] = 2;
  qspCall(s, 'exercise', 'get_sport_clothes_exercise_bonus');
  (s as any).temp_i = 1;
  // TODO-QSP: :matrix_update_loop
  ((s as any).exer_stam ?? {})[String((s as any).temp_i ?? 0)] = 0;
  (s as any).temp_j = 0;
  // TODO-QSP: :matrix_update_inner_loop
  if (((s as any).temp_tiers ?? 0)?.[String((s as any).temp_j ?? 0)] === 2) {
    // TODO-QSP: dynamic 'exer_stam<<temp_j>>[<<temp_i>>] = exer_rout<<temp_j>>[<<temp_i>>] * ((5 * (10 - sport_cloth...
  } else {
    if (((s as any).temp_tiers ?? 0)?.[String((s as any).temp_j ?? 0)] === 3) {
      // TODO-QSP: dynamic 'exer_stam<<temp_j>>[<<temp_i>>] = exer_rout<<temp_j>>[<<temp_i>>] * ((5 * (10 - sport_cloth...
    }
  }
  // TODO-QSP: dynamic 'exer_stam[<<temp_i>>] += exer_stam<<temp_j>>[<<temp_i>>]'
  (s as any).temp_j = ((s as any).temp_j ?? 0) + (1);
  if (((s as any).temp_j ?? 0) < 6) {
    // TODO-QSP: jump 'matrix_update_inner_loop'
  }
  (s as any).temp_i = ((s as any).temp_i ?? 0) + (1);
  if (((s as any).temp_i ?? 0) < 7) {
    // TODO-QSP: jump 'matrix_update_loop'
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterMatrix(s: GameState, scene: SceneBuilder): void {
  ((s as any).exer_stam ?? {})[String((s as any).stamindx ?? 0)] = ((s as any).exer_stam0 ?? 0)?.[String((s as any).stamindx ?? 0)] + ((s as any).exer_stam1 ?? 0)?.[String((s as any).stamindx ?? 0)] + ((s as any).exer_stam2 ?? 0)?.[String((s as any).stamindx ?? 0)] + ((s as any).exer_stam3 ?? 0)?.[String((s as any).stamindx ?? 0)] + ((s as any).exer_stam4 ?? 0)?.[String((s as any).stamindx ?? 0)] + ((s as any).exer_stam5 ?? 0)?.[String((s as any).stamindx ?? 0)];
  qspCall(s, 'exercise', 'get_sport_clothes_exercise_bonus');
  scene.text('Choose your exercise options from the following table:');
  scene.text('<center><table border=0 cellspacing=0 cellpadding=10 width=1000><th>Exercise</th><th>None</th><th>5 mins</th><th>10 mins</th><th>15 mins</th><th>20 mins</th>');
  qspCall(s, 'exercise', 'matrixdata', 0, 'Push ups', 3);
  qspCall(s, 'exercise', 'matrixdata', 1, 'Crunches', 3);
  if (((s as any).mc_inventory ?? 0)?.['skipping_rope'] > 0  &&  ((s as any).loc ?? 0) !== 'gad_meadow') {
    qspCall(s, 'exercise', 'matrixdata', 2, 'Jump rope', 3);
  }
  if (((s as any).mc_inventory ?? 0)?.['book_yoga'] > 0) {
    qspCall(s, 'exercise', 'matrixdata', 3, 'Yoga', 2);
  }
  if (((s as any).mc_inventory ?? 0)?.['hula_hoop'] > 0  &&  ((s as any).loc ?? 0) !== 'gad_meadow') {
    qspCall(s, 'exercise', 'matrixdata', 4, 'Hula hoop', 2);
  }
  qspCall(s, 'exercise', 'matrixdata', 5, 'Squats', 2);
  scene.text('</center></table>');
  // TODO-QSP: dynamic text: Total stamina required - <<exer_stam[stamindx]>>
  scene.text(`Total stamina required - ${((s as any).exer_stam ?? 0)?.[String((s as any).stamindx ?? 0)]}`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Confirm', goto: ['exercise', 'setup'] },
  ]);
  scene.build();
}

function enterMatrixdata(s: GameState, scene: SceneBuilder): void {
  scene.text('<tr>');
  // TODO-QSP: dynamic text: <td><<$ARGS[2]>></td>
  scene.text(`<td>${((s as any).locArgs?.[2] ?? 0)}</td>`);
  if ((!(0 as any))) {
    // TODO-QSP: dynamic 'exer_stam<<ARGS[1]>>[<<stamindx>>] = 0'
    scene.text('<td>Selected</td>');
  } else {
    // TODO-QSP: dynamic text: <td><a href="exec:dynamic 'exer_rout<<ARGS[1]>>[stamindx] = 0' & gt 'exercise', ...
    scene.text(`<td><a href="exec:dynamic 'exer_rout${qspUntranslated(s, "ARGS[1]", { location: "exercise" })}[stamindx] = 0' & gt 'exercise', 'matrix'">Select</a></td>`);
  }
  if ((0 as any) === 1) {
    if (((s as any).locArgs?.[3] ?? 0) === 1) {
      // TODO-QSP: dynamic 'exer_stam<<ARGS[1]>>[<<stamindx>>] = ((5 * (10 - sport_clothes_exercise_bonus) + 5) / 6)'
    } else {
      if (((s as any).locArgs?.[3] ?? 0) === 2) {
        // TODO-QSP: dynamic 'exer_stam<<ARGS[1]>>[<<stamindx>>] = ((5 * (10 - sport_clothes_exercise_bonus) + 2) / 3)'
      } else {
        if (((s as any).locArgs?.[3] ?? 0) === 3) {
          // TODO-QSP: dynamic 'exer_stam<<ARGS[1]>>[<<stamindx>>] = ((5 * (10 - sport_clothes_exercise_bonus) + 2) / 2)'
        } else {
          if (((s as any).locArgs?.[3] ?? 0) === 4) {
            // TODO-QSP: dynamic 'exer_stam<<ARGS[1]>>[<<stamindx>>] = ((25 * (10 - sport_clothes_exercise_bonus) + 6) / 6)'
          }
        }
      }
    }
    scene.text('<td>Selected</td>');
  } else {
    // TODO-QSP: dynamic text: <td><a href="exec:dynamic 'exer_rout<<ARGS[1]>>[stamindx] = 1' & gt 'exercise', ...
    scene.text(`<td><a href="exec:dynamic 'exer_rout${qspUntranslated(s, "ARGS[1]", { location: "exercise" })}[stamindx] = 1' & gt 'exercise', 'matrix'">Select</a></td>`);
  }
  if ((0 as any) === 2) {
    if (((s as any).locArgs?.[3] ?? 0) === 1) {
      // TODO-QSP: dynamic 'exer_stam<<ARGS[1]>>[<<stamindx>>] = (2*((5 * (10 - sport_clothes_exercise_bonus) + 5) / 6)...
    } else {
      if (((s as any).locArgs?.[3] ?? 0) === 2) {
        // TODO-QSP: dynamic 'exer_stam<<ARGS[1]>>[<<stamindx>>] = (2*((5 * (10 - sport_clothes_exercise_bonus) + 2) / 3)...
      } else {
        if (((s as any).locArgs?.[3] ?? 0) === 3) {
          // TODO-QSP: dynamic 'exer_stam<<ARGS[1]>>[<<stamindx>>] = (2*((5 * (10 - sport_clothes_exercise_bonus) + 2) / 2)...
        } else {
          if (((s as any).locArgs?.[3] ?? 0) === 4) {
            // TODO-QSP: dynamic 'exer_stam<<ARGS[1]>>[<<stamindx>>] = (2*((25 * (10 - sport_clothes_exercise_bonus) + 6) / 6...
          }
        }
      }
    }
    scene.text('<td>Selected</td>');
  } else {
    // TODO-QSP: dynamic text: <td><a href="exec:dynamic 'exer_rout<<ARGS[1]>>[stamindx] = 2' & gt 'exercise', ...
    scene.text(`<td><a href="exec:dynamic 'exer_rout${qspUntranslated(s, "ARGS[1]", { location: "exercise" })}[stamindx] = 2' & gt 'exercise', 'matrix'">Select</a></td>`);
  }
  if ((0 as any) === 3) {
    if (((s as any).locArgs?.[3] ?? 0) === 1) {
      // TODO-QSP: dynamic 'exer_stam<<ARGS[1]>>[<<stamindx>>] = (3*((5 * (10 - sport_clothes_exercise_bonus) + 5) / 6)...
    } else {
      if (((s as any).locArgs?.[3] ?? 0) === 2) {
        // TODO-QSP: dynamic 'exer_stam<<ARGS[1]>>[<<stamindx>>] = (3*((5 * (10 - sport_clothes_exercise_bonus) + 2) / 3)...
      } else {
        if (((s as any).locArgs?.[3] ?? 0) === 3) {
          // TODO-QSP: dynamic 'exer_stam<<ARGS[1]>>[<<stamindx>>] = (3*((5 * (10 - sport_clothes_exercise_bonus) + 2) / 2)...
        } else {
          if (((s as any).locArgs?.[3] ?? 0) === 4) {
            // TODO-QSP: dynamic 'exer_stam<<ARGS[1]>>[<<stamindx>>] = (3*((25 * (10 - sport_clothes_exercise_bonus) + 6) / 6...
          }
        }
      }
    }
    scene.text('<td>Selected</td>');
  } else {
    // TODO-QSP: dynamic text: <td><a href="exec:dynamic 'exer_rout<<ARGS[1]>>[stamindx] = 3' & gt 'exercise', ...
    scene.text(`<td><a href="exec:dynamic 'exer_rout${qspUntranslated(s, "ARGS[1]", { location: "exercise" })}[stamindx] = 3' & gt 'exercise', 'matrix'">Select</a></td>`);
  }
  if ((0 as any) === 4) {
    if (((s as any).locArgs?.[3] ?? 0) === 1) {
      // TODO-QSP: dynamic 'exer_stam<<ARGS[1]>>[<<stamindx>>] = (4*((5 * (10 - sport_clothes_exercise_bonus) + 5) / 6)...
    } else {
      if (((s as any).locArgs?.[3] ?? 0) === 2) {
        // TODO-QSP: dynamic 'exer_stam<<ARGS[1]>>[<<stamindx>>] = (4*((5 * (10 - sport_clothes_exercise_bonus) + 2) / 3)...
      } else {
        if (((s as any).locArgs?.[3] ?? 0) === 3) {
          // TODO-QSP: dynamic 'exer_stam<<ARGS[1]>>[<<stamindx>>] = (4*((5 * (10 - sport_clothes_exercise_bonus) + 2) / 2)...
        } else {
          if (((s as any).locArgs?.[3] ?? 0) === 4) {
            // TODO-QSP: dynamic 'exer_stam<<ARGS[1]>>[<<stamindx>>] = (4*((25 * (10 - sport_clothes_exercise_bonus) + 6) / 6...
          }
        }
      }
    }
    scene.text('<td>Selected</td>');
  } else {
    // TODO-QSP: dynamic text: <td><a href="exec:dynamic 'exer_rout<<ARGS[1]>>[stamindx] = 4' & gt 'exercise', ...
    scene.text(`<td><a href="exec:dynamic 'exer_rout${qspUntranslated(s, "ARGS[1]", { location: "exercise" })}[stamindx] = 4' & gt 'exercise', 'matrix'">Select</a></td>`);
  }
  ((s as any).exer_stam ?? {})[String((s as any).stamindx ?? 0)] = ((s as any).exer_stam0 ?? 0)?.[String((s as any).stamindx ?? 0)] + ((s as any).exer_stam1 ?? 0)?.[String((s as any).stamindx ?? 0)] + ((s as any).exer_stam2 ?? 0)?.[String((s as any).stamindx ?? 0)] + ((s as any).exer_stam3 ?? 0)?.[String((s as any).stamindx ?? 0)] + ((s as any).exer_stam4 ?? 0)?.[String((s as any).stamindx ?? 0)] + ((s as any).exer_stam5 ?? 0)?.[String((s as any).stamindx ?? 0)];
  // TODO-QSP: end
  scene.build();
}

function enterButt(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'exercise', 'tier2', (5*timemult), 'stren', 'butt_tr'
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    qspCall(s, 'exp_gain', 'inhib', ((s as any).timemult ?? 0));
  }
  (s as any).timemult = 0;
  if (((s as any).clothingworntype ?? 0) !== 'nude') {
    scene.img('images/pc/activities/exercises/butt_home_dressed.jpg');
  } else {
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.img('images/pc/activities/exercises/butt_home_underwear.jpg');
    } else {
      scene.img('images/pc/activities/exercises/butt_home_nude.jpg');
    }
  }
  // TODO-QSP: dynamic text: You do squats for <<$timestring>> minutes, strengthening your thighs and sculpti...
  scene.text(`You do squats for ${((s as any).timestring ?? 0)} minutes, strengthening your thighs and sculpting your butt.`);
  qspCall(s, 'stat', '');
  if (((s as any).exer_auto ?? 0) === 1) {
    scene.actions([
      { label: 'Continue', goto: ['exercise', 'auto_end'] },
    ]);
  } else {
    scene.actions([
      { label: 'Continue', goto: ['exercise', 'manual'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterHula(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'exercise', 'tier2', (timemult*5), 'agil', 'react'
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    qspCall(s, 'exp_gain', 'inhib', ((s as any).timemult ?? 0));
  }
  (s as any).timemult = 0;
  if (((s as any).clothingworntype ?? 0) !== 'nude') {
    if (((s as any).location_type ?? 0) === 'secluded') {
      if (((s as any).month ?? 0) >=5  &&  ((s as any).month ?? 0) <= 9) {
        scene.img('images/pc/activities/exercises/hula_outdoor.jpg');
      } else {
        scene.img('images/pc/activities/exercises/hula_winter.mp4');
      }
    } else {
      scene.img('images/pc/activities/exercises/hula_dressed.mp4');
    }
  } else {
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.img('images/pc/activities/exercises/hula_underwear.mp4');
    } else {
      scene.img('images/pc/activities/exercises/hula_nude.mp4');
    }
  }
  // TODO-QSP: dynamic text: You improve your dexterity by using your hula hoop for <<$timestring>> minutes.
  scene.text(`You improve your dexterity by using your hula hoop for ${((s as any).timestring ?? 0)} minutes.`);
  qspCall(s, 'stat', '');
  if (((s as any).exer_auto ?? 0) === 1) {
    scene.actions([
      { label: 'Continue', goto: ['exercise', 'auto5'] },
    ]);
  } else {
    scene.actions([
      { label: 'Continue', goto: ['exercise', 'manual'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterYoga(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'exercise', 'tier2', (timemult*5), 'sprt', 'agil'
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    qspCall(s, 'exp_gain', 'inhib', ((s as any).timemult ?? 0));
  }
  if (((s as any).willday_yoga ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).willday_yoga = ((s as any).daystart ?? 0);
    (s as any).yoga_counter = 4;
  }
  // TODO-QSP: :timeloopyoga
  if (((s as any).yoga_counter ?? 0) > 0  &&  ((s as any).timemult ?? 0) > 0) {
    (s as any).pcs_willpwr = ((s as any).pcs_willpwr ?? 0) + (Math.floor(Math.random() * 2) + 1);
    (s as any).yoga_counter = ((s as any).yoga_counter ?? 0) - (1);
    (s as any).timemult = ((s as any).timemult ?? 0) - (1);
    if ((!((s as any).yoga_counter ?? 0))) {
      (s as any).will_counter = ((s as any).will_counter ?? 0) + (1);
    }
    // TODO-QSP: jump 'timeloopyoga'
  }
  (s as any).timemult = 0;
  if (((s as any).clothingworntype ?? 0) !== 'nude') {
    if (((s as any).location_type ?? 0) === 'secluded') {
      scene.img('images/pc/activities/exercises/yoga_dressed_outdoor.jpg');
    } else {
      scene.img('images/pc/activities/exercises/yoga_dressed.mp4');
    }
  } else {
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.img('images/pc/activities/exercises/yoga_underwear.mp4');
    } else {
      scene.img('images/pc/activities/exercises/yoga_nude.jpg');
    }
  }
  // TODO-QSP: dynamic text: You spend <<$timestring>> minutes stretching and straining your muscles in vario...
  scene.text(`You spend ${((s as any).timestring ?? 0)} minutes stretching and straining your muscles in various poses, improving your will and flexibility.`);
  qspCall(s, 'stat', '');
  if (((s as any).exer_auto ?? 0) === 1) {
    scene.actions([
      { label: 'Continue', goto: ['exercise', 'auto4'] },
    ]);
  } else {
    scene.actions([
      { label: 'Continue', goto: ['exercise', 'manual'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterRope(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'exercise', 'tier3', (5*timemult), 'agil', 'react'
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    qspCall(s, 'exp_gain', 'inhib', ((s as any).timemult ?? 0));
  }
  (s as any).timemult = 0;
  if (((s as any).clothingworntype ?? 0) !== 'nude') {
    scene.img('images/pc/activities/exercises/rope_dressed.mp4');
  } else {
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.img('images/pc/activities/exercises/rope_underwear.jpg');
    } else {
      scene.img('images/pc/activities/exercises/rope_nude.mp4');
    }
  }
  // TODO-QSP: dynamic text: You jump rope for <<$timestring>> minutes, improving your speed.
  scene.text(`You jump rope for ${((s as any).timestring ?? 0)} minutes, improving your speed.`);
  qspCall(s, 'stat', '');
  if (((s as any).exer_auto ?? 0) === 1) {
    scene.actions([
      { label: 'Continue', goto: ['exercise', 'auto3'] },
    ]);
  } else {
    scene.actions([
      { label: 'Continue', goto: ['exercise', 'manual'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPress(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'exercise', 'tier3', (5*timemult), 'vital'
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    qspCall(s, 'exp_gain', 'inhib', ((s as any).timemult ?? 0));
  }
  (s as any).timemult = 0;
  if (((s as any).clothingworntype ?? 0) !== 'nude') {
    scene.img('images/pc/activities/exercises/abdominal_dressed.mp4');
  } else {
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.img('images/pc/activities/exercises/abdominal_underwear.mp4');
    } else {
      scene.img('images/pc/activities/exercises/abdominal_nude.mp4');
    }
  }
  // TODO-QSP: dynamic text: You do a series of abdominal exercises for <<$timestring>> minutes, improving yo...
  scene.text(`You do a series of abdominal exercises for ${((s as any).timestring ?? 0)} minutes, improving your endurance.`);
  qspCall(s, 'stat', '');
  if (((s as any).exer_auto ?? 0) === 1) {
    scene.actions([
      { label: 'Continue', goto: ['exercise', 'auto2'] },
    ]);
  } else {
    scene.actions([
      { label: 'Continue', goto: ['exercise', 'manual'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPush(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'exercise', 'tier3', (5*timemult), 'stren'
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    qspCall(s, 'exp_gain', 'inhib', ((s as any).timemult ?? 0));
  }
  (s as any).timemult = 0;
  if (((s as any).clothingworntype ?? 0) !== 'nude') {
    scene.img('images/pc/activities/exercises/push_dressed.mp4');
  } else {
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.img('images/pc/activities/exercises/push_underwear.mp4');
    } else {
      scene.img('images/pc/activities/exercises/push_nude.mp4');
    }
  }
  // TODO-QSP: dynamic text: You do push-ups for <<$timestring>> minutes, improving your strength.
  scene.text(`You do push-ups for ${((s as any).timestring ?? 0)} minutes, improving your strength.`);
  qspCall(s, 'exercise', 'pushups_inner');
  qspCall(s, 'stat', '');
  if (((s as any).exer_auto ?? 0) === 1) {
    scene.actions([
      { label: 'Continue', goto: ['exercise', 'auto1'] },
    ]);
  } else {
    scene.actions([
      { label: 'Continue', goto: ['exercise', 'manual'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPushupsInner(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_energy ?? 0) <= 100) {
    (s as any).temp_energy_bonus = ((s as any).pcs_energy ?? 0);
  } else {
    (s as any).temp_energy_bonus = 200 - ((s as any).pcs_energy ?? 0);
  }
  (s as any).pushnum = 10 * (((s as any).pcs_stren ?? 0) + ((s as any).pcs_vital ?? 0) + ((s as any).pcs_sleep ?? 0) + ((s as any).temp_energy_bonus ?? 0)) / 33 + (Math.floor(Math.random() * (10 - -10 + 1)) + (-10));
  (s as any).pushnum = 0;
  // TODO-QSP: dynamic text: <br>You managed to do <<pushnum>> push-ups. Your previous record is <<pushrecord...
  scene.text(`<br>You managed to do ${((s as any).pushnum ?? 0)} push-ups. Your previous record is ${((s as any).pushrecord ?? 0)}.`);
  if (((s as any).pushrecord ?? 0) < ((s as any).pushnum ?? 0)) {
    (s as any).pushrecord = ((s as any).pushnum ?? 0);
    scene.text('This is a new record!');
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterTier1(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).locArgs?.[1] ?? 0))) {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    ((s as any).temp_exVars ?? {})['mult'] = 3;
  } else {
    if (((s as any).locArgs?.[1] ?? 0) > 0) {
      (s as any).minut = ((s as any).minut ?? 0) + (qspUntranslated(s, "ARGS[1]", { location: "exercise" }));
      ((s as any).temp_exVars ?? {})['mult'] = (3 + ((s as any).ARGS ?? 0)[1]) / 5;
    } else {
      ((s as any).temp_exVars ?? {})['mult'] = (3 - ((s as any).ARGS ?? 0)[1]) / 5;
    }
  }
  qspCall(s, 'exercise', 'get_sport_clothes_exercise_bonus');
  qspCall(s, 'mood', 'raise', 'tiny');
  (s as any).fat = ((s as any).fat ?? 0) - (4);
  (s as any).lastexerciseexp = 0;
  ((s as any).temp_exVars ?? {})['m'] = 0;
  // TODO-QSP: :multloop1
  (s as any).lastexerciseexp = ((s as any).lastexerciseexp ?? 0) + ((Math.floor(Math.random() * 6) + 1) / 6);
  if (((s as any).locArgs?.[3] ?? 0) === '') {
    qspCall(s, 'exp_gain', '', ((s as any).locArgs?.[2] ?? 0), Math.floor(Math.random() * 2) + 0);
  } else {
    ((s as any).temp_exVars ?? {})['i'] = 2;
    // TODO-QSP: :exploop1
    // TODO-QSP: gs 'exp_gain', $ARGS[temp_exVars['i']], rand(1, 6) / 6
    ((s as any).temp_exVars ?? {})['i'] = (((s as any).temp_exVars ?? {})['i'] ?? 0) + (1);
    if (((s as any).ARGS ?? 0)[((s as any).temp_exVars ?? 0)?.['i']] !== '') {
      // TODO-QSP: jump 'exploop1'
    }
  }
  (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - ((5 * (10 - ((s as any).sport_clothes_exercise_bonus ?? 0)) + (Math.floor(Math.random() * 6) + 0)) / 6);
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) - ((Math.floor(Math.random() * 3) + 1) / 3);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - ((Math.floor(Math.random() * 3) + 2) / 3);
  // TODO-QSP: gs 'mood', 'raise', rand(1, 3) / 3
  (s as any).fat = ((s as any).fat ?? 0) - ((Math.floor(Math.random() * 6) + 1) / 6);
  qspCall(s, 'sweat', 'add', 1);
  if (((s as any).trait_vars ?? 0)?.['fitness_freak'] === 1) {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (2 + (Math.floor(Math.random() * 2) + 1) / 2);
  }
  ((s as any).temp_exVars ?? {})['m'] = (((s as any).temp_exVars ?? {})['m'] ?? 0) + (1);
  if (((s as any).temp_exVars ?? 0)?.['m'] < ((s as any).temp_exVars ?? 0)?.['mult']) {
    // TODO-QSP: jump 'multloop1'
  }
  ((s as any).stat ?? {})['last_workout_trig'] = 1;
  // TODO-QSP: gs 'traits', 'fitness_freak', 'workout', temp_exVars['mult']
  // TODO-QSP: end
  scene.build();
}

function enterTier2(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).locArgs?.[1] ?? 0))) {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    ((s as any).temp_exVars ?? {})['mult'] = 3;
  } else {
    if (((s as any).locArgs?.[1] ?? 0) > 0) {
      (s as any).minut = ((s as any).minut ?? 0) + (qspUntranslated(s, "ARGS[1]", { location: "exercise" }));
      ((s as any).temp_exVars ?? {})['mult'] = (3 + ((s as any).ARGS ?? 0)[1]) / 5;
    } else {
      ((s as any).temp_exVars ?? {})['mult'] = (3 - ((s as any).ARGS ?? 0)[1]) / 5;
    }
  }
  qspCall(s, 'exercise', 'get_sport_clothes_exercise_bonus');
  qspCall(s, 'mood', 'raise', 'tiny');
  (s as any).fat = ((s as any).fat ?? 0) - (3);
  (s as any).lastexerciseexp = 0;
  ((s as any).temp_exVars ?? {})['m'] = 0;
  // TODO-QSP: :multloop2
  (s as any).lastexerciseexp = ((s as any).lastexerciseexp ?? 0) + (Math.floor(Math.random() * 2) + 0);
  if (((s as any).locArgs?.[3] ?? 0) === '') {
    // TODO-QSP: gs 'exp_gain', $ARGS[2], rand(5, 10) / 6
  } else {
    ((s as any).temp_exVars ?? {})['i'] = 2;
    // TODO-QSP: :exploop2
    // TODO-QSP: gs 'exp_gain', $ARGS[temp_exVars['i']], rand(1, 3) / 3
    ((s as any).temp_exVars ?? {})['i'] = (((s as any).temp_exVars ?? {})['i'] ?? 0) + (1);
    if (((s as any).ARGS ?? 0)[((s as any).temp_exVars ?? 0)?.['i']] !== '') {
      // TODO-QSP: jump 'exploop2'
    }
  }
  (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - ((5 * (10 - ((s as any).sport_clothes_exercise_bonus ?? 0)) + (Math.floor(Math.random() * 3) + 0)) / 3);
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) - ((Math.floor(Math.random() * 3) + 2) / 3);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (1 + (Math.floor(Math.random() * 3) + 1) / 3);
  // TODO-QSP: gs 'mood', 'raise', rand(1, 3) / 3
  (s as any).fat = ((s as any).fat ?? 0) - ((Math.floor(Math.random() * 6) + 1) / 6);
  // TODO-QSP: gs 'sweat', 'add', 3 + rand(1, 3) / 3
  if (((s as any).trait_vars ?? 0)?.['fitness_freak'] === 1) {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5 + (Math.floor(Math.random() * 2) + 1) / 2);
  }
  ((s as any).temp_exVars ?? {})['m'] = (((s as any).temp_exVars ?? {})['m'] ?? 0) + (1);
  if (((s as any).temp_exVars ?? 0)?.['m'] < ((s as any).temp_exVars ?? 0)?.['mult']) {
    // TODO-QSP: jump 'multloop2'
  }
  ((s as any).stat ?? {})['last_workout_trig'] = 1;
  // TODO-QSP: gs 'traits', 'fitness_freak', 'workout', temp_exVars['mult']
  // TODO-QSP: end
  scene.build();
}

function enterTier3(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).locArgs?.[1] ?? 0))) {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    ((s as any).temp_exVars ?? {})['mult'] = 3;
  } else {
    if (((s as any).locArgs?.[1] ?? 0) > 0) {
      (s as any).minut = ((s as any).minut ?? 0) + (qspUntranslated(s, "ARGS[1]", { location: "exercise" }));
      ((s as any).temp_exVars ?? {})['mult'] = (3 + ((s as any).ARGS ?? 0)[1]) / 5;
    } else {
      ((s as any).temp_exVars ?? {})['mult'] = (3 - ((s as any).ARGS ?? 0)[1]) / 5;
    }
  }
  qspCall(s, 'exercise', 'get_sport_clothes_exercise_bonus');
  qspCall(s, 'mood', 'raise', 'tiny');
  (s as any).fat = ((s as any).fat ?? 0) - (2);
  (s as any).lastexerciseexp = 0;
  ((s as any).temp_exVars ?? {})['m'] = 0;
  // TODO-QSP: :multloop3
  (s as any).lastexerciseexp = ((s as any).lastexerciseexp ?? 0) + (Math.floor(Math.random() * 2) + 0);
  if (((s as any).locArgs?.[3] ?? 0) === '') {
    qspCall(s, 'exp_gain', '', ((s as any).locArgs?.[2] ?? 0), Math.floor(Math.random() * 2) + 1);
  } else {
    ((s as any).temp_exVars ?? {})['i'] = 2;
    // TODO-QSP: :exploop3
    // TODO-QSP: gs 'exp_gain', $ARGS[temp_exVars['i']], rand(0, 1)
    ((s as any).temp_exVars ?? {})['i'] = (((s as any).temp_exVars ?? {})['i'] ?? 0) + (1);
    if (((s as any).ARGS ?? 0)[((s as any).temp_exVars ?? 0)?.['i']] !== '') {
      // TODO-QSP: jump 'exploop3'
    }
  }
  (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - ((5 * (10 - ((s as any).sport_clothes_exercise_bonus ?? 0)) + (Math.floor(Math.random() * 2) + 1)) / 2);
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) - (1);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (2);
  // TODO-QSP: gs 'mood', 'raise', rand(1, 3) / 3
  (s as any).fat = ((s as any).fat ?? 0) - ((Math.floor(Math.random() * 6) + 1) / 6);
  qspCall(s, 'sweat', 'add', 5);
  if (((s as any).trait_vars ?? 0)?.['fitness_freak'] === 1) {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
  }
  ((s as any).temp_exVars ?? {})['m'] = (((s as any).temp_exVars ?? {})['m'] ?? 0) + (1);
  if (((s as any).temp_exVars ?? 0)?.['m'] < ((s as any).temp_exVars ?? 0)?.['mult']) {
    // TODO-QSP: jump 'multloop3'
  }
  ((s as any).stat ?? {})['last_workout_trig'] = 1;
  // TODO-QSP: gs 'traits', 'fitness_freak', 'workout', temp_exVars['mult']
  // TODO-QSP: end
  scene.build();
}

function enterTier4(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).locArgs?.[1] ?? 0))) {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    ((s as any).temp_exVars ?? {})['mult'] = 3;
  } else {
    if (((s as any).locArgs?.[1] ?? 0) > 0) {
      (s as any).minut = ((s as any).minut ?? 0) + (qspUntranslated(s, "ARGS[1]", { location: "exercise" }));
      ((s as any).temp_exVars ?? {})['mult'] = (3 + ((s as any).ARGS ?? 0)[1]) / 5;
    } else {
      ((s as any).temp_exVars ?? {})['mult'] = (3 - ((s as any).ARGS ?? 0)[1]) / 5;
    }
  }
  qspCall(s, 'exercise', 'get_sport_clothes_exercise_bonus');
  qspCall(s, 'mood', 'raise', 'tiny');
  (s as any).fat = ((s as any).fat ?? 0) - (1);
  (s as any).lastexerciseexp = 0;
  ((s as any).temp_exVars ?? {})['m'] = 0;
  // TODO-QSP: :timeexploop4
  (s as any).lastexerciseexp = ((s as any).lastexerciseexp ?? 0) + (Math.floor(Math.random() * 2) + 1);
  if (((s as any).locArgs?.[3] ?? 0) === '') {
    qspCall(s, 'exp_gain', '', ((s as any).locArgs?.[2] ?? 0), Math.floor(Math.random() * 2) + 2);
  } else {
    ((s as any).temp_exVars ?? {})['i'] = 2;
    // TODO-QSP: :exploop4
    // TODO-QSP: gs 'exp_gain', $ARGS[temp_exVars['i']], rand(1, 2)
    ((s as any).temp_exVars ?? {})['i'] = (((s as any).temp_exVars ?? {})['i'] ?? 0) + (1);
    if (((s as any).ARGS ?? 0)[((s as any).temp_exVars ?? 0)?.['i']] !== '') {
      // TODO-QSP: jump 'exploop4'
    }
  }
  (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - ((25 * (10 - ((s as any).sport_clothes_exercise_bonus ?? 0)) + (Math.floor(Math.random() * 6) + 1))/ 6);
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) - (1 + (Math.floor(Math.random() * 3) + 1) / 3);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (4);
  // TODO-QSP: gs 'mood', 'raise', rand(1, 3) / 3
  (s as any).fat = ((s as any).fat ?? 0) - ((Math.floor(Math.random() * 6) + 1) / 6);
  // TODO-QSP: gs 'sweat', 'add', 8 + rand(2, 4) / 3
  if (((s as any).trait_vars ?? 0)?.['fitness_freak'] === 1) {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
  }
  ((s as any).temp_exVars ?? {})['m'] = (((s as any).temp_exVars ?? {})['m'] ?? 0) + (1);
  if (((s as any).temp_exVars ?? 0)?.['m'] < ((s as any).temp_exVars ?? 0)?.['mult']) {
    // TODO-QSP: jump 'timeexploop4'
  }
  ((s as any).stat ?? {})['last_workout_trig'] = 1;
  // TODO-QSP: gs 'traits', 'fitness_freak', 'workout', temp_exVars['mult']
  // TODO-QSP: end
  scene.build();
}

function enterTimestring(s: GameState, scene: SceneBuilder): void {
  if (((s as any).timemult ?? 0) === 1) {
  }
  if (((s as any).timemult ?? 0) === 2) {
  }
  if (((s as any).timemult ?? 0) === 3) {
  }
  if (((s as any).timemult ?? 0) === 4) {
  }
  // TODO-QSP: end
  scene.build();
}

function enterGetSportClothesExerciseBonus(s: GameState, scene: SceneBuilder): void {
  (s as any).sport_clothes_exercise_bonus = 0;
  if (((s as any).PBraSport ?? 0)) {
    (s as any).sport_clothes_exercise_bonus = ((s as any).sport_clothes_exercise_bonus ?? 0) + (1);
  } else {
    if (((s as any).PCloBra ?? 0)  &&  ((s as any).PCloSport ?? 0)) {
      (s as any).sport_clothes_exercise_bonus = ((s as any).sport_clothes_exercise_bonus ?? 0) + (1);
    }
  }
  if (((s as any).PPanSport ?? 0)) {
    (s as any).sport_clothes_exercise_bonus = ((s as any).sport_clothes_exercise_bonus ?? 0) + (1);
  } else {
    if (((s as any).PCloPanties ?? 0)  &&  ((s as any).PCloSport ?? 0)) {
      (s as any).sport_clothes_exercise_bonus = ((s as any).sport_clothes_exercise_bonus ?? 0) + (1);
    }
  }
  if (((s as any).PCloSport ?? 0)) {
    (s as any).sport_clothes_exercise_bonus = ((s as any).sport_clothes_exercise_bonus ?? 0) + (1);
  }
  if (((s as any).PShoSport ?? 0)) {
    (s as any).sport_clothes_exercise_bonus = ((s as any).sport_clothes_exercise_bonus ?? 0) + (1);
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
    case 'workout':
      enterWorkout(s, scene);
      break;
    case 'auto':
      enterAuto(s, scene);
      break;
    case 'auto1':
      enterAuto1(s, scene);
      break;
    case 'auto2':
      enterAuto2(s, scene);
      break;
    case 'auto3':
      enterAuto3(s, scene);
      break;
    case 'auto4':
      enterAuto4(s, scene);
      break;
    case 'auto5':
      enterAuto5(s, scene);
      break;
    case 'auto_end':
      enterAutoEnd(s, scene);
      break;
    case 'manual':
      enterManual(s, scene);
      break;
    case 'routines':
      enterRoutines(s, scene);
      break;
    case 'setup':
      enterSetup(s, scene);
      break;
    case 'rename':
      enterRename(s, scene);
      break;
    case 'update_matrix':
      enterUpdateMatrix(s, scene);
      break;
    case 'matrix':
      enterMatrix(s, scene);
      break;
    case 'matrixdata':
      enterMatrixdata(s, scene);
      break;
    case 'butt':
      enterButt(s, scene);
      break;
    case 'hula':
      enterHula(s, scene);
      break;
    case 'yoga':
      enterYoga(s, scene);
      break;
    case 'rope':
      enterRope(s, scene);
      break;
    case 'press':
      enterPress(s, scene);
      break;
    case 'push':
      enterPush(s, scene);
      break;
    case 'pushups_inner':
      enterPushupsInner(s, scene);
      break;
    case 'tier1':
      enterTier1(s, scene);
      break;
    case 'tier2':
      enterTier2(s, scene);
      break;
    case 'tier3':
      enterTier3(s, scene);
      break;
    case 'tier4':
      enterTier4(s, scene);
      break;
    case 'timestring':
      enterTimestring(s, scene);
      break;
    case 'get_sport_clothes_exercise_bonus':
      enterGetSportClothesExerciseBonus(s, scene);
      break;
    default:
      enterDefault(s, scene);
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
