import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_experimental_trials_list', 'see_trials');
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images\\locations\\city\\residential\\clinic\\experiments\\experiment_form.jpg');
  scene.text('You look through the long list of various available clinical trials and the following stick out:');
  // TODO-QSP: *p '<center><table align="center" width=80%>'
  (s as any).cetl_i = 0;
  // TODO-QSP: :loop_start
  if (((s as any).trial_maxs ?? 0)?.[String((s as any).cetl_i ?? 0)] === -1  ||  ((s as any).experimentQW ?? 0)?.['times_participated_' + String(((s as any).cetl_i ?? 0))] < ((s as any).trial_maxs ?? 0)?.[String((s as any).cetl_i ?? 0)]) {
    // TODO-QSP: $temp_text += '<tr><td bgcolor="<<$temp_bgcolor>>" align="center"><a href="exec: gt ''city_experimen...
  } else {
    // TODO-QSP: $temp_text += '<tr><td bgcolor="<<$temp_bgcolor>>" align="center"><font color="<<$func("shortgs", "r...
  }
  // TODO-QSP: $temp_text += '</td> <td bgcolor="<<$temp_bgcolor>>" align="right"><font color="<<$func("shortgs", "...
  // TODO-QSP: *p '<<$temp_text>>'
  (s as any).cetl_i = ((s as any).cetl_i ?? 0) + (1);
  if (((s as any).cetl_i ?? 0) < Object.keys((s as any).trial_names ?? {}).length) {
    // TODO-QSP: jump 'loop_start'
  }
  // TODO-QSP: *p '</table></center>'
  scene.actions([
    { label: 'Go back', handler: (st: GameState) => {
    qspCall(st, 'city_experimental_trials_list', 'killvars');
  }, goto: ['city_experimental_trials', 'front_desk'] },
  ]);
  scene.build();
}

export const city_experimental_trials_list: LocationDef = {
  name: 'city_experimental_trials_list',
  title: 'You look through the long list of various available clinical',
  region: 'city',
  description: ['You look through the long list of various available clinical trials and the following stick out:'],
  enter: enter,
};
