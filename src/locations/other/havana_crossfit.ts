import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterBox(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'havana_crossfit', 'box');
  (s as any).sexloc = 'havana_crossfit';
  (s as any).location_type = 'public_indoors';
  if (((s as any).crossfit_random_choice ?? 0) < ((s as any).daystart ?? 0)  ||  ((s as any).todays_crossfit_wod ?? 0) === '') {
    qspCall(s, 'havana_crossfit_funcs', 'setup_wod');
    (s as any).todays_crossfit_wod = (((s as any).crossfit_wods ?? 0)?.[(Math.floor(Math.random() * (0 - 0 + 1)) + (0))] ?? 0);
    (s as any).crossfit_random_choice = ((s as any).daystart ?? 0);
  }
  if (((s as any).previous_record_holder ?? 0) !== ''  &&  ((s as any).last_crossfit_workout ?? 0) < ((s as any).daystart ?? 0)) {
    qspGoto(s, 'havana_crossfit', 'girlmeet');
  }
  scene.text('<center><b>Crossfit North St. Petersburg</b></center>');
  scene.img('images/locations/city/citycenter/gym/crossfit/start.jpg');
  scene.text('This crossfit box might not look like it, but it\'s said to be one of the best in the region.');
  scene.text(`Today's exercise is ${((s as any).todays_crossfit_wod ?? '')}.`);
  scene.text('It consists of:');
  qspCall(s, 'havana_crossfit_funcs', '$todays_crossfit_wod');
  if (((s as any).crossfit_first ?? 0) === 1) {
    scene.actions([
      { label: 'Check personal records', handler: (st: GameState) => {
    qspGoto(st, 'havana_crossfit', 'view_records');
  } },
    ]);
  }
  if (((s as any).pcs_stam ?? 0) < ((s as any).stammax ?? 0) / 5) {
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Start the exercise  [+$func(\'wrap\', \'v_neg\', \'(' + String(((s as any).pcs_stam ?? '') ?? '') + '/<<...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String(qspFunc(st, 'wrap', 'neg', '<br>You\'re too exhausted to do this. Recover your stamina before trying to do this exercise.') || ''), curActs: [] };
  } },
    ]);
  } else {
    if (((s as any).pcs_energy ?? 0) < 20) {
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Start the exercise  [+$func(\'wrap\', \'v_neg\', \'(' + String(((s as any).pcs_energy ?? '') ?? '') + '/...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String(qspFunc(st, 'wrap', 'neg', '<br>You feel too hungry to do this exercise now.') || ''), curActs: [] };
  } },
      ]);
    } else {
      if (((s as any).pcs_hydra ?? 0) < 20) {
        scene.actions([
          { label: '', labelFn: (s: GameState) => 'Start the exercise  [+$func(\'wrap\', \'v_neg\', \'(' + String(((s as any).pcs_hydra ?? '') ?? '') + '/2...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String(qspFunc(st, 'wrap', 'neg', '<br>You feel too thirsty to do this exercise now.') || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Start the exercise', handler: (st: GameState) => {
    if (((st as any).last_crossfit_workout ?? 0) === ((st as any).daystart ?? 0)) {
      alert('<b><font color = red>You already did this workout today. That\'s enough for one day.</font></b>');
    } else {
      (st as any).last_crossfit_workout = ((st as any).daystart ?? 0);
      (st as any).crossfit_first = 1;
      (st as any).abonement = ((st as any).abonement ?? 0) - (1);
      scene.text('You start with the workout.');
      qspCall(st, 'havana_crossfit_funcs', '$todays_crossfit_wod');
      qspCall(st, 'exercise', 'tier4', 20, 'stren', 'vital', 'agil');
      scene.img(`images/locations/city/citycenter/gym/crossfit/${(((st as any).wod_video ?? 0)?.[String((st as any).todays_crossfit_wod ?? 0)] ?? '')}.mp4`);
      (st as any).current_wod_score = Math.max(1, (100 - ((100 * ((st as any).pcs_health ?? 0) * ((Math.floor(Math.random() * 61) + 40) + ((st as any).pcs_sleep ?? 0) + ((st as any).pcs_vital ?? 0) + ((st as any).pcs_agil ?? 0) + ((st as any).pcs_stren ?? 0)))/ (((st as any).healthmax ?? 0) * 500))));
      scene.actions([
        { label: 'Check your score', handler: (st: GameState) => {
    (st as any).resultstring = qspFunc(s, 'havana_crossfit_funcs', 'recordstring', ((st as any).todays_crossfit_wod ?? 0), ((st as any).current_wod_score ?? 0));
    scene.text(`You successfully finish the workout ${((st as any).pcs_nickname ?? '')} in ${((st as any).resultstring ?? '')}`);
    if (((st as any).personal_wod_record ?? 0)?.[String((st as any).todays_crossfit_wod ?? 0)] === 0) {
      ((st as any).personal_wod_record = (st as any).personal_wod_record ?? {})[String((st as any).todays_crossfit_wod ?? 0)] = ((st as any).current_wod_score ?? 0);
    } else {
      if (((st as any).current_wod_score ?? 0) < ((st as any).personal_wod_record ?? 0)?.[String((st as any).todays_crossfit_wod ?? 0)]) {
        scene.text('This is a new personal record!');
        ((st as any).personal_wod_record = (st as any).personal_wod_record ?? {})[String((st as any).todays_crossfit_wod ?? 0)] = ((st as any).current_wod_score ?? 0);
      }
    }
    if (((st as any).box_wod_record ?? 0)?.[String((st as any).todays_crossfit_wod ?? 0)] === 0) {
      ((st as any).box_wod_record = (st as any).box_wod_record ?? {})[String((st as any).todays_crossfit_wod ?? 0)] = ((st as any).current_wod_score ?? 0);
      ((st as any).box_wod_record_holder = (st as any).box_wod_record_holder ?? {})[String((st as any).todays_crossfit_wod ?? 0)] = ((st as any).pcs_nickname ?? 0);
    } else {
      if (((st as any).current_wod_score ?? 0) < ((st as any).box_wod_record ?? 0)?.[String((st as any).todays_crossfit_wod ?? 0)]) {
        scene.text('Not only that, it\'s also a new best record for the whole box!');
        (st as any).prevrecordstring = qspFunc(s, 'havana_crossfit_funcs', 'recordstring', ((st as any).todays_crossfit_wod ?? 0), (((st as any).box_wod_record ?? 0)?.[String((st as any).todays_crossfit_wod ?? 0)] ?? 0));
        if (((st as any).box_wod_record_holder ?? 0)?.[String((st as any).todays_crossfit_wod ?? 0)] !== ((st as any).pcs_nickname ?? 0)) {
          (st as any).previous_record_holder = (((st as any).box_wod_record_holder ?? 0)?.[String((st as any).todays_crossfit_wod ?? 0)] ?? 0);
          scene.text(`You beat ${((st as any).previous_record_holder ?? '')}'s record of ${((st as any).prevrecordstring ?? '')}`);
        } else {
          scene.text(`You beat your own record of ${((st as any).prevrecordstring ?? '')}`);
        }
        (st as any).prevrecordstring = undefined;
        ((st as any).box_wod_record = (st as any).box_wod_record ?? {})[String((st as any).todays_crossfit_wod ?? 0)] = ((st as any).current_wod_score ?? 0);
        ((st as any).box_wod_record_holder = (st as any).box_wod_record_holder ?? {})[String((st as any).todays_crossfit_wod ?? 0)] = ((st as any).pcs_nickname ?? 0);
      }
    }
    (st as any).current_wod_score = undefined;
    scene.actions([
      { label: 'Finish and go to the changing room', goto: ['havana', 'dressing_room'] },
    ]);
  } },
      ]);
    }
  } },
        ]);
      }
    }
  }
  scene.actions([
    { label: 'Leave', goto: ['havana', 'dressing_room'] },
  ]);
  scene.build();
}

function enterViewRecords(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'havana_crossfit_funcs', 'update_box_records');
  scene.img('images/locations/city/citycenter/gym/crossfit/records.jpg');
  scene.text('You look at the board outlining the personal records.');
  scene.text('<center><table border=1><tr><th>Workout</th><th>Personal Best</th><th>Box Record (Women)</th><th>Box Record Holder</th></tr>');
  (s as any).record_table_counter = 0;
  do {
    (s as any).crossfit_wod = (((s as any).crossfit_wods ?? 0)?.[String((s as any).record_table_counter ?? 0)] ?? 0);
    scene.text(`<tr><td>${((s as any).crossfit_wod ?? '')}</td>`);
    scene.text('<td>' + qspFunc(s, 'havana_crossfit_funcs', 'recordstring', ((s as any).crossfit_wod ?? ''), (((s as any).personal_wod_record ?? 0)?.[String((s as any).crossfit_wod ?? 0)] ?? '')) + '</td>');
    scene.text('<td>' + qspFunc(s, 'havana_crossfit_funcs', 'recordstring', ((s as any).crossfit_wod ?? ''), (((s as any).box_wod_record ?? 0)?.[String((s as any).crossfit_wod ?? 0)] ?? '')) + '</td>');
    scene.text(`<td>${(((s as any).box_wod_record_holder ?? 0)?.[String((s as any).crossfit_wod ?? 0)] ?? '')}</td></tr>`);
    (s as any).record_table_counter = ((s as any).record_table_counter ?? 0) + (1);
    scene.text('</table></center>');
    (s as any).record_table_counter = undefined;
    (s as any).crossfit_wod = undefined;
    scene.actions([
      { label: 'Go back', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } while (((s as any).record_table_counter ?? 0) < Object.keys((s as any).crossfit_wods ?? {}).length);
  scene.build();
}

function enterGirlmeet(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcgeneratec', '1');
  qspCall(s, 'npcStat', '$npclastgenerated');
  (s as any).boydesc = ((s as any).previous_record_holder ?? 0);
  (s as any).npcClo = 'workout clothes';
  (s as any).previous_record_holder = undefined;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text(`As you enter the crossfit box, you notice ${((s as any).npcheight_pref ?? '')} girl with ${((s as any).npcbuild_pref ?? '')} body and ${((s as any).npchair ?? '')} hair. She is wearing ${((s as any).npcClo ?? '')}.`);
  scene.text(`She greets you with a smile. "Hey, I'm ${((s as any).boydesc ?? '')}. I heard you beat my old record. Very impressive!"`);
  scene.actions([
    { label: 'Thank her', handler: (st: GameState) => {
    scene.text('"Oh. Thank you," you reply. "Your score wasn\'t easy to beat!"');
    scene.actions([
      { label: 'Ask her if she comes around often', handler: (st: GameState) => {
    scene.text('"Do you visit this box often?" you ask.');
    scene.text('"Yeah," she replies. "I\'m here two or three times a week. I actually just finished my workout for today. Would you like to hang out?"');
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    scene.text('"Sure, sounds like fun," you reply.');
    scene.text('"Great!" she answers. "What do you want to do?"');
    qspCall(st, 'dateF', 'date_choice');
  } },
      { label: 'Decline', handler: (st: GameState) => {
    scene.img(`${(((st as any).npc_pic ?? 0)?.[String((st as any).boy ?? 0)] ?? '')}`);
    scene.text('"Sorry, but I feel like I\'m leading you on when I didn\'t mean to…"');
    scene.text(`${((st as any).boydesc ?? '')} looks at you, a little disappointed. "Oh. Well, you can't blame me for trying."`);
    scene.text('The two of you say goodbye to each other.');
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Say goodbye', handler: (st: GameState) => {
    scene.text('You check the time. "Sorry, but I\'ve got to run! See you around!"');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Pretend you\'re busy', handler: (st: GameState) => {
    scene.text('You check the time and pack up your things, ignoring the girl.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'box':
      enterBox(s, scene);
      break;
    case 'view_records':
      enterViewRecords(s, scene);
      break;
    case 'girlmeet':
      enterGirlmeet(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const havana_crossfit: LocationDef = {
  name: 'havana_crossfit',
  title: 'Crossfit North St. Petersburg',
  region: 'other',
  locationType: 'public_indoors',
  enter: enter,
};
