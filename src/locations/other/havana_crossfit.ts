import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'havana_crossfit', 'box');
  if (((s as any).crossfit_random_choice ?? 0) < ((s as any).daystart ?? 0) ((s as any).OR ?? 0) ((s as any).todays_crossfit_wod ?? 0) === '') {
    qspCall(s, 'havana_crossfit_funcs', 'setup_wod');
    (s as any).crossfit_random_choice = ((s as any).daystart ?? 0);
  }
  if (((s as any).previous_record_holder ?? 0) !== ''  &&  ((s as any).last_crossfit_workout ?? 0) < ((s as any).daystart ?? 0)) {
    scene.actions([{ label: 'Continue', goto: ['havana_crossfit', 'girlmeet'] }]);
  }
  scene.text('<center><b>Crossfit North St. Petersburg</b></center>');
  scene.img('images/locations/city/citycenter/gym/crossfit/start.jpg');
  scene.text('This crossfit box might not look like it, but it\'s said to be one of the best in the region.');
  // TODO-QSP: dynamic text: Today's exercise is <<$todays_crossfit_wod>>.
  scene.text(`Today's exercise is ${((s as any).todays_crossfit_wod ?? 0)}.`);
  scene.text('It consists of:');
  qspCall(s, 'havana_crossfit_funcs', '', ((s as any).todays_crossfit_wod ?? 0));
  if (((s as any).crossfit_first ?? 0) === 1) {
    scene.actions([
      { label: 'Check personal records', goto: ['havana_crossfit', 'view_records'] },
    ]);
  }
  if (((s as any).pcs_stam ?? 0) < ((s as any).stammax ?? 0) / 5) {
    scene.actions([
      { label: 'Start the exercise  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_stam>>/<<...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You''re too exhausted to do this. ...
  } },
    ]);
  } else {
    if (((s as any).pcs_hydra ?? 0) < 20) {
      scene.actions([
        { label: 'Start the exercise  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_hydra>>/2...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too thirsty to do this ex...
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Start the exercise', handler: (st: GameState) => {
    if (((s as any).last_crossfit_workout ?? 0) === ((s as any).daystart ?? 0)) {
    } else {
      (s as any).last_crossfit_workout = ((s as any).daystart ?? 0);
      (s as any).crossfit_first = 1;
      (s as any).abonement = ((s as any).abonement ?? 0) - (1);
      scene.text('You start with the workout.');
      qspCall(s, 'havana_crossfit_funcs', '', ((s as any).todays_crossfit_wod ?? 0));
      qspCall(s, 'exercise', 'tier4', 20, 'stren', 'vital', 'agil');
      scene.img(`images/locations/city/citycenter/gym/crossfit/${((s as any).wod_video ?? 0)?.[String((s as any).todays_crossfit_wod ?? 0)]}.mp4`);
      (s as any).current_wod_score = ((s as any).max ?? 0)(1, (100 - ((100 * ((s as any).pcs_health ?? 0) * (((s as any).rand ?? 0)(40, 100) + ((s as any).pcs_sleep ?? 0) + ((s as any).pcs_vital ?? 0) + ((s as any).pcs_agil ?? 0) + ((s as any).pcs_stren ?? 0)))/ (((s as any).healthmax ?? 0) * 500))));
      scene.actions([
        { label: 'Check your score', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You successfully finish the workout <<$pcs_nickname>> in <<$resultstring>>
    scene.text(`You successfully finish the workout ${((s as any).pcs_nickname ?? 0)} in ${((s as any).resultstring ?? 0)}`);
    if (((s as any).personal_wod_record ?? 0)?.[String((s as any).todays_crossfit_wod ?? 0)] === 0) {
      (s as any).personal_wod_record[$todays_crossfit_wod] = ((s as any).current_wod_score ?? 0);
    } else {
      scene.text('This is a new personal record!');
      (s as any).personal_wod_record[$todays_crossfit_wod] = ((s as any).current_wod_score ?? 0);
    }
    if (((s as any).box_wod_record ?? 0)?.[String((s as any).todays_crossfit_wod ?? 0)] === 0) {
      (s as any).box_wod_record[$todays_crossfit_wod] = ((s as any).current_wod_score ?? 0);
      // TODO-QSP: $box_wod_record_holder[$todays_crossfit_wod] = $pcs_nickname
    } else {
      scene.text('Not only that, it\'s also a new best record for the whole box!');
      if (((s as any).box_wod_record_holder ?? 0)?.[String((s as any).todays_crossfit_wod ?? 0)] !== ((s as any).pcs_nickname ?? 0)) {
        // TODO-QSP: dynamic text: You beat <<$previous_record_holder>>'s record of <<$prevrecordstring>>
        scene.text(`You beat ${((s as any).previous_record_holder ?? 0)}'s record of ${((s as any).prevrecordstring ?? 0)}`);
      } else {
        // TODO-QSP: dynamic text: You beat your own record of <<$prevrecordstring>>
        scene.text(`You beat your own record of ${((s as any).prevrecordstring ?? 0)}`);
      }
      (s as any).box_wod_record[$todays_crossfit_wod] = ((s as any).current_wod_score ?? 0);
      // TODO-QSP: $box_wod_record_holder[$todays_crossfit_wod] = $pcs_nickname
    }
    scene.actions([
      { label: 'Finish and go to the changing room', goto: ['havana', 'dressing_room'] },
    ]);
  } },
      ]);
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Start the exercise  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_energy>>/...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too hungry to do this exe...
  } },
    ]);
  }
  scene.actions([
    { label: 'Leave', goto: ['havana', 'dressing_room'] },
  ]);
  scene.build();
}

export const havana_crossfit: LocationDef = {
  name: 'havana_crossfit',
  title: 'Crossfit North St. Petersburg',
  region: 'other',
  locationType: 'public_indoors',
  description: ['This crossfit box might not look like it, but it\'s said to be one of the best in the region.'],
  enter: enter,
};
