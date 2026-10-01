
import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).pcs_stam ?? 0) >=15  ||  ((s as any).pcs_stam ?? 0) >= 10  &&  ((s as any).mc_inventory ?? 0)?.['book_yoga'] + ((s as any).mc_inventory ?? 0)?.['hula_hoop'] > 0)) {
    scene.text('There is enough space in the room to <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027exercise\u0027, \u0027workout\u0027); return false;">exercise</a>.');
  } else {
    scene.text('There is enough space in the room for a variety of exercises, but you don\'t have the energy to work out now.');
  }
  scene.build();
}

function enterWorkout(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'exercise';
  (s as any).menu_arg = 'workout';
  (s as any).exer_menu = 0;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRoutines(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).clothesAtLocation = qspFunc(s, 'clothing', 'lost_clothes_here', ((s as any).loc ?? 0));
  if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).clothesAtLocation ?? 0) === 1) {
    scene.actions([
      { label: 'End workout and get dressed', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'underwear', 'wear');
    qspCall(st, 'clothing', 'recover_lost_clothes', ((st as any).loc ?? 0), 1);
    qspCall(st, 'stat', '');
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } else {
    scene.actions([
      { label: 'End workout', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
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
          scene.actions([
            { label: 'Manual routines', goto: ['exercise', 'manual'] },
            { label: 'Define routines', goto: ['exercise', 'setup'] },
          ]);
          if (((s as any).exer_stam ?? 0)[1] !== 0  &&  ((s as any).pcs_stam ?? 0) > ((s as any).exer_stam ?? 0)[1]) {
            scene.actions([
              { label: '', labelFn: (st: GameState) => `${(st as any).excer_name?.[1] ?? ''} - (${(st as any).exer_stam?.[1] ?? ''} stamina)`, handler: (st: GameState) => {
                (st as any).exercisex = 1;
                qspGoto(st, 'exercise', 'auto');
              } },
            ]);
          }
          if (((s as any).exer_stam ?? 0)[2] !== 0  &&  ((s as any).pcs_stam ?? 0) > ((s as any).exer_stam ?? 0)[2]) {
            scene.actions([
              { label: '', labelFn: (st: GameState) => `${(st as any).excer_name?.[2] ?? ''} - (${(st as any).exer_stam?.[2] ?? ''} stamina)`, handler: (st: GameState) => {
                (st as any).exercisex = 2;
                qspGoto(st, 'exercise', 'auto');
              } },
            ]);
          }
          if (((s as any).exer_stam ?? 0)[3] !== 0  &&  ((s as any).pcs_stam ?? 0) > ((s as any).exer_stam ?? 0)[3]) {
            scene.actions([
              { label: '', labelFn: (st: GameState) => `${(st as any).excer_name?.[3] ?? ''} - (${(st as any).exer_stam?.[3] ?? ''} stamina)`, handler: (st: GameState) => {
                (st as any).exercisex = 3;
                qspGoto(st, 'exercise', 'auto');
              } },
            ]);
          }
          if (((s as any).exer_stam ?? 0)[4] !== 0  &&  ((s as any).pcs_stam ?? 0) > ((s as any).exer_stam ?? 0)[4]) {
            scene.actions([
              { label: '', labelFn: (st: GameState) => `${(st as any).excer_name?.[4] ?? ''} - (${(st as any).exer_stam?.[4] ?? ''} stamina)`, handler: (st: GameState) => {
                (st as any).exercisex = 4;
                qspGoto(st, 'exercise', 'auto');
              } },
            ]);
          }
          if (((s as any).exer_stam ?? 0)[5] !== 0  &&  ((s as any).pcs_stam ?? 0) > ((s as any).exer_stam ?? 0)[5]) {
            scene.actions([
              { label: '', labelFn: (st: GameState) => `${(st as any).excer_name?.[5] ?? ''} - (${(st as any).exer_stam?.[5] ?? ''} stamina)`, handler: (st: GameState) => {
                (st as any).exercisex = 5;
                qspGoto(st, 'exercise', 'auto');
              } },
            ]);
          }
        }
      }
    }
  }
  scene.build();
}

function enterAuto(s: GameState, scene: SceneBuilder): void {
  (s as any).exer_auto = 1;
  if (((s as any).exer_rout0 ?? 0)?.[String((s as any).exercisex ?? 0)] > 0) {
    (s as any).timemult = (((s as any).exer_rout0 ?? 0)?.[String((s as any).exercisex ?? 0)] ?? 0);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTimestring(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspGoto(s, 'exercise', 'push');
  } else {
    if (((s as any).exer_rout1 ?? 0)?.[String((s as any).exercisex ?? 0)] > 0) {
      (s as any).timemult = (((s as any).exer_rout1 ?? 0)?.[String((s as any).exercisex ?? 0)] ?? 0);
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTimestring(s, scene); (s as any).locArgs = __savedLocArgs; }
      qspGoto(s, 'exercise', 'press');
    } else {
      if (((s as any).exer_rout2 ?? 0)?.[String((s as any).exercisex ?? 0)] > 0) {
        (s as any).timemult = (((s as any).exer_rout2 ?? 0)?.[String((s as any).exercisex ?? 0)] ?? 0);
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTimestring(s, scene); (s as any).locArgs = __savedLocArgs; }
        qspGoto(s, 'exercise', 'rope');
      } else {
        if (((s as any).exer_rout3 ?? 0)?.[String((s as any).exercisex ?? 0)] > 0) {
          (s as any).timemult = (((s as any).exer_rout3 ?? 0)?.[String((s as any).exercisex ?? 0)] ?? 0);
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTimestring(s, scene); (s as any).locArgs = __savedLocArgs; }
          qspGoto(s, 'exercise', 'yoga');
        } else {
          if (((s as any).exer_rout4 ?? 0)?.[String((s as any).exercisex ?? 0)] > 0) {
            (s as any).timemult = (((s as any).exer_rout4 ?? 0)?.[String((s as any).exercisex ?? 0)] ?? 0);
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTimestring(s, scene); (s as any).locArgs = __savedLocArgs; }
            qspGoto(s, 'exercise', 'hula');
          } else {
            if (((s as any).exer_rout5 ?? 0)?.[String((s as any).exercisex ?? 0)] > 0) {
              (s as any).timemult = (((s as any).exer_rout5 ?? 0)?.[String((s as any).exercisex ?? 0)] ?? 0);
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTimestring(s, scene); (s as any).locArgs = __savedLocArgs; }
              qspGoto(s, 'exercise', 'butt');
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterAuto1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).exer_rout1 ?? 0)?.[String((s as any).exercisex ?? 0)] > 0) {
    (s as any).timemult = (((s as any).exer_rout1 ?? 0)?.[String((s as any).exercisex ?? 0)] ?? 0);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTimestring(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspGoto(s, 'exercise', 'press');
  } else {
    if (((s as any).exer_rout2 ?? 0)?.[String((s as any).exercisex ?? 0)] > 0) {
      (s as any).timemult = (((s as any).exer_rout2 ?? 0)?.[String((s as any).exercisex ?? 0)] ?? 0);
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTimestring(s, scene); (s as any).locArgs = __savedLocArgs; }
      qspGoto(s, 'exercise', 'rope');
    } else {
      if (((s as any).exer_rout3 ?? 0)?.[String((s as any).exercisex ?? 0)] > 0) {
        (s as any).timemult = (((s as any).exer_rout3 ?? 0)?.[String((s as any).exercisex ?? 0)] ?? 0);
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTimestring(s, scene); (s as any).locArgs = __savedLocArgs; }
        qspGoto(s, 'exercise', 'yoga');
      } else {
        if (((s as any).exer_rout4 ?? 0)?.[String((s as any).exercisex ?? 0)] > 0) {
          (s as any).timemult = (((s as any).exer_rout4 ?? 0)?.[String((s as any).exercisex ?? 0)] ?? 0);
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTimestring(s, scene); (s as any).locArgs = __savedLocArgs; }
          qspGoto(s, 'exercise', 'hula');
        } else {
          if (((s as any).exer_rout5 ?? 0)?.[String((s as any).exercisex ?? 0)] > 0) {
            (s as any).timemult = (((s as any).exer_rout5 ?? 0)?.[String((s as any).exercisex ?? 0)] ?? 0);
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTimestring(s, scene); (s as any).locArgs = __savedLocArgs; }
            qspGoto(s, 'exercise', 'butt');
          } else {
            qspGoto(s, 'exercise', 'auto_end');
          }
        }
      }
    }
  }
  scene.build();
}

function enterAuto2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).exer_rout2 ?? 0)?.[String((s as any).exercisex ?? 0)] > 0) {
    (s as any).timemult = (((s as any).exer_rout2 ?? 0)?.[String((s as any).exercisex ?? 0)] ?? 0);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTimestring(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspGoto(s, 'exercise', 'rope');
  } else {
    if (((s as any).exer_rout3 ?? 0)?.[String((s as any).exercisex ?? 0)] > 0) {
      (s as any).timemult = (((s as any).exer_rout3 ?? 0)?.[String((s as any).exercisex ?? 0)] ?? 0);
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTimestring(s, scene); (s as any).locArgs = __savedLocArgs; }
      qspGoto(s, 'exercise', 'yoga');
    } else {
      if (((s as any).exer_rout4 ?? 0)?.[String((s as any).exercisex ?? 0)] > 0) {
        (s as any).timemult = (((s as any).exer_rout4 ?? 0)?.[String((s as any).exercisex ?? 0)] ?? 0);
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTimestring(s, scene); (s as any).locArgs = __savedLocArgs; }
        qspGoto(s, 'exercise', 'hula');
      } else {
        if (((s as any).exer_rout5 ?? 0)?.[String((s as any).exercisex ?? 0)] > 0) {
          (s as any).timemult = (((s as any).exer_rout5 ?? 0)?.[String((s as any).exercisex ?? 0)] ?? 0);
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTimestring(s, scene); (s as any).locArgs = __savedLocArgs; }
          qspGoto(s, 'exercise', 'butt');
        } else {
          qspGoto(s, 'exercise', 'auto_end');
        }
      }
    }
  }
  scene.build();
}

function enterAuto3(s: GameState, scene: SceneBuilder): void {
  if (((s as any).exer_rout3 ?? 0)?.[String((s as any).exercisex ?? 0)] > 0) {
    (s as any).timemult = (((s as any).exer_rout3 ?? 0)?.[String((s as any).exercisex ?? 0)] ?? 0);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTimestring(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspGoto(s, 'exercise', 'yoga');
  } else {
    if (((s as any).exer_rout4 ?? 0)?.[String((s as any).exercisex ?? 0)] > 0) {
      (s as any).timemult = (((s as any).exer_rout4 ?? 0)?.[String((s as any).exercisex ?? 0)] ?? 0);
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTimestring(s, scene); (s as any).locArgs = __savedLocArgs; }
      qspGoto(s, 'exercise', 'hula');
    } else {
      if (((s as any).exer_rout5 ?? 0)?.[String((s as any).exercisex ?? 0)] > 0) {
        (s as any).timemult = (((s as any).exer_rout5 ?? 0)?.[String((s as any).exercisex ?? 0)] ?? 0);
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTimestring(s, scene); (s as any).locArgs = __savedLocArgs; }
        qspGoto(s, 'exercise', 'butt');
      } else {
        qspGoto(s, 'exercise', 'auto_end');
      }
    }
  }
  scene.build();
}

function enterAuto4(s: GameState, scene: SceneBuilder): void {
  if (((s as any).exer_rout4 ?? 0)?.[String((s as any).exercisex ?? 0)] > 0) {
    (s as any).timemult = (((s as any).exer_rout4 ?? 0)?.[String((s as any).exercisex ?? 0)] ?? 0);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTimestring(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspGoto(s, 'exercise', 'hula');
  } else {
    if (((s as any).exer_rout5 ?? 0)?.[String((s as any).exercisex ?? 0)] > 0) {
      (s as any).timemult = (((s as any).exer_rout5 ?? 0)?.[String((s as any).exercisex ?? 0)] ?? 0);
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTimestring(s, scene); (s as any).locArgs = __savedLocArgs; }
      qspGoto(s, 'exercise', 'butt');
    } else {
      qspGoto(s, 'exercise', 'auto_end');
    }
  }
  scene.build();
}

function enterAuto5(s: GameState, scene: SceneBuilder): void {
  if (((s as any).exer_rout5 ?? 0)?.[String((s as any).exercisex ?? 0)] > 0) {
    (s as any).timemult = (((s as any).exer_rout5 ?? 0)?.[String((s as any).exercisex ?? 0)] ?? 0);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTimestring(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspGoto(s, 'exercise', 'butt');
  } else {
    qspGoto(s, 'exercise', 'auto_end');
  }
  scene.build();
}

function enterAutoEnd(s: GameState, scene: SceneBuilder): void {
  (s as any).exer_auto = 0;
  qspGoto(s, 'exercise', 'workout');
  scene.build();
}

function enterManual(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'exercise';
  (s as any).menu_arg = 'manual';
  (s as any).menu_off = 0;
  const sub = (s as any).locArgs?.[0] ?? '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGetSportClothesExerciseBonus(s, scene); (s as any).locArgs = __savedLocArgs; }
  const bonus = Number((s as any).sport_clothes_exercise_bonus ?? 0);
  const base = 5 * (10 - bonus) + 2;
  const stam = Number((s as any).pcs_stam ?? 0);
  const addTimeActions = (target: string, divisor: number): void => {
    const acts: ActionDef[] = [];
    for (let m = 1; m <= 4; m++) {
      if (stam >= m * (base / divisor)) {
        acts.push({
          label: `${m * 5} minutes`,
          handler: (st: GameState) => {
            (st as any).timemult = m;
            { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTimestring(st, scene); (st as any).locArgs = __savedLocArgs; }
            qspGoto(st, 'exercise', target);
          },
        });
      }
    }
    scene.actions(acts);
  };
  if (sub) {
    scene.actions([{ label: 'Return', goto: ['exercise', 'manual'] }]);
    if (sub === 'push') addTimeActions('push', 2);
    if (sub === 'press') addTimeActions('press', 2);
    if (sub === 'butt') addTimeActions('butt', 3);
    if (sub === 'rope') addTimeActions('rope', 2);
    if (sub === 'yoga') addTimeActions('yoga', 3);
    if (sub === 'hula') addTimeActions('hula', 3);
    scene.build();
    return;
  }
  scene.actions([{ label: 'Return', goto: ['exercise', 'workout'] }]);
  if (stam < base / 3) {
    scene.text('You don\'t have the energy/stamina to work out anymore now.');
  } else {
    const topActions: ActionDef[] = [];
    if (stam >= base / 2) topActions.push({ label: 'Do pushups', goto: ['exercise', 'manual', 'push'] });
    if (stam >= base / 2) topActions.push({ label: 'Do crunches', goto: ['exercise', 'manual', 'press'] });
    topActions.push({ label: 'Do squats', goto: ['exercise', 'manual', 'butt'] });
    if (((s as any).mc_inventory ?? 0)?.['skipping_rope'] > 0 && ((s as any).loc ?? 0) !== 'gad_meadow' && stam >= base / 2) topActions.push({ label: 'Jump rope', goto: ['exercise', 'manual', 'rope'] });
    if (((s as any).mc_inventory ?? 0)?.['book_yoga'] > 0) topActions.push({ label: 'Do yoga', goto: ['exercise', 'manual', 'yoga'] });
    if (((s as any).mc_inventory ?? 0)?.['hula_hoop'] > 0 && ((s as any).loc ?? 0) !== 'gad_meadow') topActions.push({ label: 'Use your hula hoop', goto: ['exercise', 'manual', 'hula'] });
    scene.actions(topActions);
  }
  scene.build();
}

function enterRoutines(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterUpdateMatrix(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('<center><h2>Exercise Routines</h2></center>');
  scene.text('<center><table>');
  scene.text('<td><b>Routine</b></td><td><b>Push ups</b></td><td><b>Crunches</b></td><td><b>Jump rope</b></td><td><b>Yoga</td><td><b>Hula hoop</b></td><td><b>Squats</b></td>');
  const renameOnclick = (i: number) => `(function(){var n=window.prompt('<center>Enter name for exercise routine ${i}<br>Leave blank to restore default name.</center>')||'';window.__gameStore.setState(function(s){s.excer_name=s.excer_name||{};s.excer_name[${i}]=n;for(var k=1;k<=5;k++){if(!s.excer_name[k])s.excer_name[k]='Default '+k;}return s;});window.__gameStore.getState().doGoto('exercise','setup');return false;})()`;
  for (let i = 1; i <= 5; i++) {
    const name = (s as any).excer_name?.[i] ?? '';
    const nameCell = ((s as any).exer_menu ?? 0) === 1
      ? `<a href="#" onclick="${renameOnclick(i)}">${name}:</a> `
      : `${name}:</a> `;
    let row = `<tr><td width="100" cellspacing="2" align="left">${nameCell}</td>`;
    for (let r = 0; r <= 5; r++) {
      row += `<td width="100" cellspacing="2" align="left"><b>${Number((s as any)['exer_rout' + r]?.[i] ?? 0) * 5}</b> minutes</td>`;
    }
    row += '</tr>';
    scene.text(row);
  }
  scene.text('<tr><td colspan="7"><br><br><center><a href="#" onclick="window.__gameStore.getState().doGoto(\'exercise\', \'setup\'); return false;">Define up to 5 automated exercise routines.</a></center></td></tr>');
  scene.text('</table></center>');
  scene.build();
}

function enterSetup(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'exercise';
  (s as any).menu_arg = 'setup';
  (s as any).exer_menu = 1;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRoutines(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.actions([
    { label: 'Return', goto: ['exercise', 'workout'] },
    { label: '', labelFn: (s: GameState) => '1. Define "' + String((((s as any).excer_name ?? 0)?.[1] ?? '') ?? '') + '"', handler: (st: GameState) => {
    (st as any).stamindx = 1;
  }, goto: ['exercise', 'matrix'] },
    { label: '', labelFn: (s: GameState) => '1. Rename "' + String((((s as any).excer_name ?? 0)?.[1] ?? '') ?? '') + '"', handler: (st: GameState) => {
    ((st as any).excer_name = (st as any).excer_name ?? {})[1] = window.prompt("<center>Enter name for exercise routine 1<br>Leave blank to restore default name.</center>") ?? '';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterRename(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspGoto(st, 'exercise', 'setup');
  } },
    { label: '', labelFn: (s: GameState) => '2. Define "' + String((((s as any).excer_name ?? 0)?.[2] ?? '') ?? '') + '"', handler: (st: GameState) => {
    (st as any).stamindx = 2;
  }, goto: ['exercise', 'matrix'] },
    { label: '', labelFn: (s: GameState) => '2. Rename "' + String((((s as any).excer_name ?? 0)?.[2] ?? '') ?? '') + '"', handler: (st: GameState) => {
    ((st as any).excer_name = (st as any).excer_name ?? {})[2] = window.prompt("<center>Enter name for exercise routine 2<br>Leave blank to restore default name.</center>") ?? '';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterRename(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspGoto(st, 'exercise', 'setup');
  } },
    { label: '', labelFn: (s: GameState) => '3. Define "' + String((((s as any).excer_name ?? 0)?.[3] ?? '') ?? '') + '"', handler: (st: GameState) => {
    (st as any).stamindx = 3;
  }, goto: ['exercise', 'matrix'] },
    { label: '', labelFn: (s: GameState) => '3. Rename "' + String((((s as any).excer_name ?? 0)?.[3] ?? '') ?? '') + '"', handler: (st: GameState) => {
    ((st as any).excer_name = (st as any).excer_name ?? {})[3] = window.prompt("<center>Enter name for exercise routine 3<br>Leave blank to restore default name.</center>") ?? '';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterRename(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspGoto(st, 'exercise', 'setup');
  } },
    { label: '', labelFn: (s: GameState) => '4. Define "' + String((((s as any).excer_name ?? 0)?.[4] ?? '') ?? '') + '"', handler: (st: GameState) => {
    (st as any).stamindx = 4;
  }, goto: ['exercise', 'matrix'] },
    { label: '', labelFn: (s: GameState) => '4. Rename "' + String((((s as any).excer_name ?? 0)?.[4] ?? '') ?? '') + '"', handler: (st: GameState) => {
    ((st as any).excer_name = (st as any).excer_name ?? {})[4] = window.prompt("<center>Enter name for exercise routine 4<br>Leave blank to restore default name.</center>") ?? '';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterRename(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspGoto(st, 'exercise', 'setup');
  } },
    { label: '', labelFn: (s: GameState) => '5. Define "' + String((((s as any).excer_name ?? 0)?.[5] ?? '') ?? '') + '"', handler: (st: GameState) => {
    (st as any).stamindx = 5;
  }, goto: ['exercise', 'matrix'] },
    { label: '', labelFn: (s: GameState) => '5. Rename "' + String((((s as any).excer_name ?? 0)?.[5] ?? '') ?? '') + '"', handler: (st: GameState) => {
    ((st as any).excer_name = (st as any).excer_name ?? {})[5] = window.prompt("<center>Enter name for exercise routine 5<br>Leave blank to restore default name.</center>") ?? '';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterRename(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspGoto(st, 'exercise', 'setup');
  } },
  ]);
  scene.build();
}

function enterRename(s: GameState, scene: SceneBuilder): void {
  if (((s as any).excer_name ?? 0)[1] === '') {
    ((s as any).excer_name = (s as any).excer_name ?? {})[1] = 'Default 1';
  }
  if (((s as any).excer_name ?? 0)[2] === '') {
    ((s as any).excer_name = (s as any).excer_name ?? {})[2] = 'Default 2';
  }
  if (((s as any).excer_name ?? 0)[3] === '') {
    ((s as any).excer_name = (s as any).excer_name ?? {})[3] = 'Default 3';
  }
  if (((s as any).excer_name ?? 0)[4] === '') {
    ((s as any).excer_name = (s as any).excer_name ?? {})[4] = 'Default 4';
  }
  if (((s as any).excer_name ?? 0)[5] === '') {
    ((s as any).excer_name = (s as any).excer_name ?? {})[5] = 'Default 5';
  }
  scene.build();
}

function enterUpdateMatrix(s: GameState, scene: SceneBuilder): void {
  const temp_tiers = [3, 3, 3, 2, 2, 2];
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGetSportClothesExerciseBonus(s, scene); (s as any).locArgs = __savedLocArgs; }
  const bonus = Number((s as any).sport_clothes_exercise_bonus ?? 0);
  (s as any).exer_stam = (s as any).exer_stam ?? {};
  for (let temp_i = 1; temp_i <= 6; temp_i++) {
    (s as any).exer_stam[temp_i] = 0;
    for (let temp_j = 0; temp_j <= 5; temp_j++) {
      const rout = Number((s as any)['exer_rout' + temp_j]?.[temp_i] ?? 0);
      if (temp_tiers[temp_j] === 2) {
        (s as any)['exer_stam' + temp_j] = (s as any)['exer_stam' + temp_j] ?? {};
        (s as any)['exer_stam' + temp_j][temp_i] = rout * ((5 * (10 - bonus) + 2) / 3);
      } else if (temp_tiers[temp_j] === 3) {
        (s as any)['exer_stam' + temp_j] = (s as any)['exer_stam' + temp_j] ?? {};
        (s as any)['exer_stam' + temp_j][temp_i] = rout * ((5 * (10 - bonus) + 2) / 2);
      }
      (s as any).exer_stam[temp_i] = Number((s as any).exer_stam[temp_i] ?? 0) + Number((s as any)['exer_stam' + temp_j]?.[temp_i] ?? 0);
    }
  }
  scene.build();
}

function enterMatrix(s: GameState, scene: SceneBuilder): void {
  ((s as any).exer_stam = (s as any).exer_stam ?? {})[String((s as any).stamindx ?? 0)] = (((s as any).exer_stam0 ?? 0)?.[String((s as any).stamindx ?? 0)] ?? 0) + (((s as any).exer_stam1 ?? 0)?.[String((s as any).stamindx ?? 0)] ?? 0) + (((s as any).exer_stam2 ?? 0)?.[String((s as any).stamindx ?? 0)] ?? 0) + (((s as any).exer_stam3 ?? 0)?.[String((s as any).stamindx ?? 0)] ?? 0) + (((s as any).exer_stam4 ?? 0)?.[String((s as any).stamindx ?? 0)] ?? 0) + (((s as any).exer_stam5 ?? 0)?.[String((s as any).stamindx ?? 0)] ?? 0);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGetSportClothesExerciseBonus(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('Choose your exercise options from the following table:');
  scene.text('<center><table border=0 cellspacing=0 cellpadding=10 width=1000><th>Exercise</th><th>None</th><th>5 mins</th><th>10 mins</th><th>15 mins</th><th>20 mins</th>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 0, 'Push ups', 3]; enterMatrixdata(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 1, 'Crunches', 3]; enterMatrixdata(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).mc_inventory ?? 0)?.['skipping_rope'] > 0  &&  ((s as any).loc ?? 0) !== 'gad_meadow') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 2, 'Jump rope', 3]; enterMatrixdata(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).mc_inventory ?? 0)?.['book_yoga'] > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 3, 'Yoga', 2]; enterMatrixdata(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).mc_inventory ?? 0)?.['hula_hoop'] > 0  &&  ((s as any).loc ?? 0) !== 'gad_meadow') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 4, 'Hula hoop', 2]; enterMatrixdata(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 5, 'Squats', 2]; enterMatrixdata(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('</center></table>');
  scene.text(`Total stamina required - ${(((s as any).exer_stam ?? 0)?.[String((s as any).stamindx ?? 0)] ?? '')}`);
  scene.actions([
    { label: 'Confirm', goto: ['exercise', 'setup'] },
  ]);
  scene.build();
}

function enterMatrixdata(s: GameState, scene: SceneBuilder): void {
  const r = Number((s as any).locArgs?.[1] ?? 0);
  const tierArg = Number((s as any).locArgs?.[3] ?? 0);
  const stamindx = Number((s as any).stamindx ?? 0);
  const bonus = Number((s as any).sport_clothes_exercise_bonus ?? 0);
  scene.text('<tr>');
  scene.text(`<td>${(s as any).locArgs?.[2] ?? ''}</td>`);
  const base = (): number => {
    if (tierArg === 1) return (5 * (10 - bonus) + 5) / 6;
    if (tierArg === 2) return (5 * (10 - bonus) + 2) / 3;
    if (tierArg === 3) return (5 * (10 - bonus) + 2) / 2;
    if (tierArg === 4) return (25 * (10 - bonus) + 6) / 6;
    return 0;
  };
  for (let v = 0; v <= 4; v++) {
    const current = Number((s as any)['exer_rout' + r]?.[stamindx] ?? 0);
    if (current === v) {
      (s as any)['exer_stam' + r] = (s as any)['exer_stam' + r] ?? {};
      (s as any)['exer_stam' + r][stamindx] = v === 0 ? 0 : v * base();
      scene.text('<td>Selected</td>');
    } else {
      const onclick = `(function(){window.__gameStore.setState(function(s){s.exer_rout${r}=s.exer_rout${r}||{};s.exer_rout${r}[${stamindx}]=${v};return s;});window.__gameStore.getState().doGoto('exercise','matrix');return false;})()`;
      scene.text(`<td><a href="#" onclick="${onclick}">Select</a></td>`);
    }
  }
  (s as any).exer_stam = (s as any).exer_stam ?? {};
  (s as any).exer_stam[stamindx] = Number((s as any).exer_stam0?.[stamindx] ?? 0) + Number((s as any).exer_stam1?.[stamindx] ?? 0) + Number((s as any).exer_stam2?.[stamindx] ?? 0) + Number((s as any).exer_stam3?.[stamindx] ?? 0) + Number((s as any).exer_stam4?.[stamindx] ?? 0) + Number((s as any).exer_stam5?.[stamindx] ?? 0);
  scene.build();
}

function enterButt(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (5*((s as any).timemult ?? 0)), 'stren', 'butt_tr']; enterTier2(s, scene); (s as any).locArgs = __savedLocArgs; }
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
  scene.text(`You do squats for ${((s as any).timestring ?? '')} minutes, strengthening your thighs and sculpting your butt.`);
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
  scene.build();
}

function enterHula(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).timemult ?? 0)*5), 'agil', 'react']; enterTier2(s, scene); (s as any).locArgs = __savedLocArgs; }
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
  scene.text(`You improve your dexterity by using your hula hoop for ${((s as any).timestring ?? '')} minutes.`);
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
  scene.build();
}

function enterYoga(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).timemult ?? 0)*5), 'sprt', 'agil']; enterTier2(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    qspCall(s, 'exp_gain', 'inhib', ((s as any).timemult ?? 0));
  }
  if (((s as any).willday_yoga ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).willday_yoga = ((s as any).daystart ?? 0);
    (s as any).yoga_counter = 4;
  }
  while (((s as any).yoga_counter ?? 0) > 0 && ((s as any).timemult ?? 0) > 0) {
    (s as any).pcs_willpwr = ((s as any).pcs_willpwr ?? 0) + ((Math.floor(Math.random() * 2) + 1));
    (s as any).yoga_counter = ((s as any).yoga_counter ?? 0) - (1);
    (s as any).timemult = ((s as any).timemult ?? 0) - (1);
    if (!((s as any).yoga_counter ?? 0)) {
      (s as any).will_counter = ((s as any).will_counter ?? 0) + (1);
    }
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
  scene.text(`You spend ${((s as any).timestring ?? '')} minutes stretching and straining your muscles in various poses, improving your will and flexibility.`);
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
  scene.build();
}

function enterRope(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (5*((s as any).timemult ?? 0)), 'agil', 'react']; enterTier3(s, scene); (s as any).locArgs = __savedLocArgs; }
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
  scene.text(`You jump rope for ${((s as any).timestring ?? '')} minutes, improving your speed.`);
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
  scene.build();
}

function enterPress(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (5*((s as any).timemult ?? 0)), 'vital']; enterTier3(s, scene); (s as any).locArgs = __savedLocArgs; }
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
  scene.text(`You do a series of abdominal exercises for ${((s as any).timestring ?? '')} minutes, improving your endurance.`);
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
  scene.build();
}

function enterPush(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (5*((s as any).timemult ?? 0)), 'stren']; enterTier3(s, scene); (s as any).locArgs = __savedLocArgs; }
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
  scene.text(`You do push-ups for ${((s as any).timestring ?? '')} minutes, improving your strength.`);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPushupsInner(s, scene); (s as any).locArgs = __savedLocArgs; }
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
  scene.build();
}

function enterPushupsInner(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_energy ?? 0) <= 100) {
    (s as any).temp_energy_bonus = ((s as any).pcs_energy ?? 0);
  } else {
    (s as any).temp_energy_bonus = 200 - ((s as any).pcs_energy ?? 0);
  }
  (s as any).pushnum = 10 * (((s as any).pcs_stren ?? 0) + ((s as any).pcs_vital ?? 0) + ((s as any).pcs_sleep ?? 0) + ((s as any).temp_energy_bonus ?? 0)) / 33 + (Math.floor(Math.random() * (10 - (-10) + 1)) + ((-10)));
  (s as any).pushnum = Math.max(((s as any).pushnum ?? 0), (Math.floor(Math.random() * 5) + 1));
  scene.text(`<br>You managed to do ${((s as any).pushnum ?? '')} push-ups. Your previous record is ${((s as any).pushrecord ?? '')}.`);
  if (((s as any).pushrecord ?? 0) < ((s as any).pushnum ?? 0)) {
    (s as any).pushrecord = ((s as any).pushnum ?? 0);
    scene.text('This is a new record!');
  }
  (s as any).temp_energy_bonus = undefined;
  return;
  scene.build();
}

function enterTier1(s: GameState, scene: SceneBuilder): void {
  const __arg1 = Number((s as any).locArgs?.[1] ?? 0);
  if (__arg1 === 0) {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    ((s as any).temp_exVars = (s as any).temp_exVars ?? {})['mult'] = 3;
  } else if (__arg1 > 0) {
    (s as any).minut = ((s as any).minut ?? 0) + __arg1;
    ((s as any).temp_exVars = (s as any).temp_exVars ?? {})['mult'] = (3 + __arg1) / 5;
  } else {
    ((s as any).temp_exVars = (s as any).temp_exVars ?? {})['mult'] = (3 - __arg1) / 5;
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGetSportClothesExerciseBonus(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'mood', 'raise', 'tiny');
  (s as any).fat = ((s as any).fat ?? 0) - (4);
  (s as any).lastexerciseexp = 0;
  ((s as any).temp_exVars = (s as any).temp_exVars ?? {})['m'] = 0;
  do {
    (s as any).lastexerciseexp = ((s as any).lastexerciseexp ?? 0) + ((Math.floor(Math.random() * (6 - 1 + 1)) + (1)) / 6);
    if (String((s as any).locArgs?.[3] ?? '') === '') {
      qspCall(s, 'exp_gain', String((s as any).locArgs?.[2] ?? ''), (Math.floor(Math.random() * 2) + 0));
    } else {
      ((s as any).temp_exVars = (s as any).temp_exVars ?? {})['i'] = 2;
      while (String((s as any).locArgs?.[Number((s as any).temp_exVars['i'])] ?? '') !== '') {
        qspCall(s, 'exp_gain', String((s as any).locArgs?.[Number((s as any).temp_exVars['i'])] ?? ''), (Math.floor(Math.random() * (6 - 1 + 1)) + (1)) / 6);
        ((s as any).temp_exVars = (s as any).temp_exVars ?? {})['i'] = Number((s as any).temp_exVars['i']) + 1;
      }
    }
    (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - ((5 * (10 - ((s as any).sport_clothes_exercise_bonus ?? 0)) + (Math.floor(Math.random() * 6) + 0)) / 6);
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) - ((Math.floor(Math.random() * (3 - 1 + 1)) + (1)) / 3);
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - ((Math.floor(Math.random() * (4 - 2 + 1)) + (2)) / 3);
    qspCall(s, 'mood', 'raise', (Math.floor(Math.random() * (3 - 1 + 1)) + (1)) / 3);
    (s as any).fat = ((s as any).fat ?? 0) - ((Math.floor(Math.random() * (6 - 1 + 1)) + (1)) / 6);
    qspCall(s, 'sweat', 'add', 1);
    if (((s as any).trait_vars ?? 0)?.['fitness_freak'] === 1) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (2 + (Math.floor(Math.random() * 2) + 1) / 2);
    }
    ((s as any).temp_exVars = (s as any).temp_exVars ?? {})['m'] = ((s as any).temp_exVars['m'] ?? 0) + (1);
  } while (Number((s as any).temp_exVars?.['m']) < Number((s as any).temp_exVars?.['mult']));
  ((s as any).stat = (s as any).stat ?? {})['last_workout_trig'] = 1;
  qspCall(s, 'traits', 'fitness_freak', 'workout', Number((s as any).temp_exVars?.['mult']) || 0);
  (s as any).temp_exVars = undefined;
  scene.build();
}

function enterTier2(s: GameState, scene: SceneBuilder): void {
  const __arg1 = Number((s as any).locArgs?.[1] ?? 0);
  if (__arg1 === 0) {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    ((s as any).temp_exVars = (s as any).temp_exVars ?? {})['mult'] = 3;
  } else if (__arg1 > 0) {
    (s as any).minut = ((s as any).minut ?? 0) + __arg1;
    ((s as any).temp_exVars = (s as any).temp_exVars ?? {})['mult'] = (3 + __arg1) / 5;
  } else {
    ((s as any).temp_exVars = (s as any).temp_exVars ?? {})['mult'] = (3 - __arg1) / 5;
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGetSportClothesExerciseBonus(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'mood', 'raise', 'tiny');
  (s as any).fat = ((s as any).fat ?? 0) - (3);
  (s as any).lastexerciseexp = 0;
  ((s as any).temp_exVars = (s as any).temp_exVars ?? {})['m'] = 0;
  do {
    (s as any).lastexerciseexp = ((s as any).lastexerciseexp ?? 0) + ((Math.floor(Math.random() * 2) + 0));
    if (String((s as any).locArgs?.[3] ?? '') === '') {
      qspCall(s, 'exp_gain', String((s as any).locArgs?.[2] ?? ''), (Math.floor(Math.random() * (10 - 5 + 1)) + (5)) / 6);
    } else {
      ((s as any).temp_exVars = (s as any).temp_exVars ?? {})['i'] = 2;
      while (String((s as any).locArgs?.[Number((s as any).temp_exVars['i'])] ?? '') !== '') {
        qspCall(s, 'exp_gain', String((s as any).locArgs?.[Number((s as any).temp_exVars['i'])] ?? ''), (Math.floor(Math.random() * (3 - 1 + 1)) + (1)) / 3);
        ((s as any).temp_exVars = (s as any).temp_exVars ?? {})['i'] = Number((s as any).temp_exVars['i']) + 1;
      }
    }
    (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - ((5 * (10 - ((s as any).sport_clothes_exercise_bonus ?? 0)) + (Math.floor(Math.random() * 3) + 0)) / 3);
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) - ((Math.floor(Math.random() * (4 - 2 + 1)) + (2)) / 3);
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (1 + (Math.floor(Math.random() * (3 - 1 + 1)) + (1)) / 3);
    qspCall(s, 'mood', 'raise', (Math.floor(Math.random() * (3 - 1 + 1)) + (1)) / 3);
    (s as any).fat = ((s as any).fat ?? 0) - ((Math.floor(Math.random() * (6 - 1 + 1)) + (1)) / 6);
    qspCall(s, 'sweat', 'add', 3 + (Math.floor(Math.random() * (3 - 1 + 1)) + (1)) / 3);
    if (((s as any).trait_vars ?? 0)?.['fitness_freak'] === 1) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5 + (Math.floor(Math.random() * 2) + 1) / 2);
    }
    ((s as any).temp_exVars = (s as any).temp_exVars ?? {})['m'] = ((s as any).temp_exVars['m'] ?? 0) + (1);
  } while (Number((s as any).temp_exVars?.['m']) < Number((s as any).temp_exVars?.['mult']));
  ((s as any).stat = (s as any).stat ?? {})['last_workout_trig'] = 1;
  qspCall(s, 'traits', 'fitness_freak', 'workout', Number((s as any).temp_exVars?.['mult']) || 0);
  (s as any).temp_exVars = undefined;
  scene.build();
}

function enterTier3(s: GameState, scene: SceneBuilder): void {
  const __arg1 = Number((s as any).locArgs?.[1] ?? 0);
  if (__arg1 === 0) {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    ((s as any).temp_exVars = (s as any).temp_exVars ?? {})['mult'] = 3;
  } else if (__arg1 > 0) {
    (s as any).minut = ((s as any).minut ?? 0) + __arg1;
    ((s as any).temp_exVars = (s as any).temp_exVars ?? {})['mult'] = (3 + __arg1) / 5;
  } else {
    ((s as any).temp_exVars = (s as any).temp_exVars ?? {})['mult'] = (3 - __arg1) / 5;
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGetSportClothesExerciseBonus(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'mood', 'raise', 'tiny');
  (s as any).fat = ((s as any).fat ?? 0) - (2);
  (s as any).lastexerciseexp = 0;
  ((s as any).temp_exVars = (s as any).temp_exVars ?? {})['m'] = 0;
  do {
    (s as any).lastexerciseexp = ((s as any).lastexerciseexp ?? 0) + ((Math.floor(Math.random() * 2) + 0));
    if (String((s as any).locArgs?.[3] ?? '') === '') {
      qspCall(s, 'exp_gain', String((s as any).locArgs?.[2] ?? ''), (Math.floor(Math.random() * 2) + 1));
    } else {
      ((s as any).temp_exVars = (s as any).temp_exVars ?? {})['i'] = 2;
      while (String((s as any).locArgs?.[Number((s as any).temp_exVars['i'])] ?? '') !== '') {
        qspCall(s, 'exp_gain', String((s as any).locArgs?.[Number((s as any).temp_exVars['i'])] ?? ''), (Math.floor(Math.random() * 2) + 0));
        ((s as any).temp_exVars = (s as any).temp_exVars ?? {})['i'] = Number((s as any).temp_exVars['i']) + 1;
      }
    }
    (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - ((5 * (10 - ((s as any).sport_clothes_exercise_bonus ?? 0)) + (Math.floor(Math.random() * 2) + 1)) / 2);
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) - (1);
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (2);
    qspCall(s, 'mood', 'raise', (Math.floor(Math.random() * (3 - 1 + 1)) + (1)) / 3);
    (s as any).fat = ((s as any).fat ?? 0) - ((Math.floor(Math.random() * (6 - 1 + 1)) + (1)) / 6);
    qspCall(s, 'sweat', 'add', 5);
    if (((s as any).trait_vars ?? 0)?.['fitness_freak'] === 1) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    }
    ((s as any).temp_exVars = (s as any).temp_exVars ?? {})['m'] = ((s as any).temp_exVars['m'] ?? 0) + (1);
  } while (Number((s as any).temp_exVars?.['m']) < Number((s as any).temp_exVars?.['mult']));
  ((s as any).stat = (s as any).stat ?? {})['last_workout_trig'] = 1;
  qspCall(s, 'traits', 'fitness_freak', 'workout', Number((s as any).temp_exVars?.['mult']) || 0);
  (s as any).temp_exVars = undefined;
  scene.build();
}

function enterTier4(s: GameState, scene: SceneBuilder): void {
  const __arg1 = Number((s as any).locArgs?.[1] ?? 0);
  if (__arg1 === 0) {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    ((s as any).temp_exVars = (s as any).temp_exVars ?? {})['mult'] = 3;
  } else if (__arg1 > 0) {
    (s as any).minut = ((s as any).minut ?? 0) + __arg1;
    ((s as any).temp_exVars = (s as any).temp_exVars ?? {})['mult'] = (3 + __arg1) / 5;
  } else {
    ((s as any).temp_exVars = (s as any).temp_exVars ?? {})['mult'] = (3 - __arg1) / 5;
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGetSportClothesExerciseBonus(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'mood', 'raise', 'tiny');
  (s as any).fat = ((s as any).fat ?? 0) - (1);
  (s as any).lastexerciseexp = 0;
  ((s as any).temp_exVars = (s as any).temp_exVars ?? {})['m'] = 0;
  do {
    (s as any).lastexerciseexp = ((s as any).lastexerciseexp ?? 0) + ((Math.floor(Math.random() * 2) + 1));
    if (String((s as any).locArgs?.[3] ?? '') === '') {
      qspCall(s, 'exp_gain', String((s as any).locArgs?.[2] ?? ''), (Math.floor(Math.random() * 2) + 2));
    } else {
      ((s as any).temp_exVars = (s as any).temp_exVars ?? {})['i'] = 2;
      while (String((s as any).locArgs?.[Number((s as any).temp_exVars['i'])] ?? '') !== '') {
        qspCall(s, 'exp_gain', String((s as any).locArgs?.[Number((s as any).temp_exVars['i'])] ?? ''), (Math.floor(Math.random() * 2) + 1));
        ((s as any).temp_exVars = (s as any).temp_exVars ?? {})['i'] = Number((s as any).temp_exVars['i']) + 1;
      }
    }
    (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - ((25 * (10 - ((s as any).sport_clothes_exercise_bonus ?? 0)) + (Math.floor(Math.random() * 6) + 1)) / 6);
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) - (1 + (Math.floor(Math.random() * (3 - 1 + 1)) + (1)) / 3);
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (4);
    qspCall(s, 'mood', 'raise', (Math.floor(Math.random() * (3 - 1 + 1)) + (1)) / 3);
    (s as any).fat = ((s as any).fat ?? 0) - ((Math.floor(Math.random() * (6 - 1 + 1)) + (1)) / 6);
    qspCall(s, 'sweat', 'add', 8 + (Math.floor(Math.random() * (4 - 2 + 1)) + (2)) / 3);
    if (((s as any).trait_vars ?? 0)?.['fitness_freak'] === 1) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    }
    ((s as any).temp_exVars = (s as any).temp_exVars ?? {})['m'] = ((s as any).temp_exVars['m'] ?? 0) + (1);
  } while (Number((s as any).temp_exVars?.['m']) < Number((s as any).temp_exVars?.['mult']));
  ((s as any).stat = (s as any).stat ?? {})['last_workout_trig'] = 1;
  qspCall(s, 'traits', 'fitness_freak', 'workout', Number((s as any).temp_exVars?.['mult']) || 0);
  (s as any).temp_exVars = undefined;
  scene.build();
}

function enterTimestring(s: GameState, scene: SceneBuilder): void {
  if (((s as any).timemult ?? 0) === 1) {
    (s as any).timestring = 'five';
  }
  if (((s as any).timemult ?? 0) === 2) {
    (s as any).timestring = 'ten';
  }
  if (((s as any).timemult ?? 0) === 3) {
    (s as any).timestring = 'fifteen';
  }
  if (((s as any).timemult ?? 0) === 4) {
    (s as any).timestring = 'twenty';
  }
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
  title: 'There is enough space in the room to <a href="#" onclick="wi',
  region: 'other',
  locationType: 'secluded',
  enter: enter,
};
