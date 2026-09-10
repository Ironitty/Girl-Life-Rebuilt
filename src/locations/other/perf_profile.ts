import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).prof_iterations = (((s as any).ARGS ?? 0)[0] > 0) ? (qspUntranslated(s, "ARGS[0]", { location: "perf_profile" })) : (500000);
  (s as any).prof_saved_gameover = ((s as any).cheatVars ?? 0)?.['gameover'];
  (s as any).prof_saved_hunger = ((s as any).cheatVars ?? 0)?.['hunger'];
  (s as any).prof_saved_thirst = ((s as any).cheatVars ?? 0)?.['thirst'];
  (s as any).prof_saved_inf_willpower = ((s as any).cheatVars ?? 0)?.['inf_willpower'];
  (s as any).cheatVars['gameover'] = 1;
  (s as any).cheatVars['hunger'] = 1;
  (s as any).cheatVars['thirst'] = 1;
  (s as any).cheatVars['inf_willpower'] = 1;
  (s as any).prof_start = ((s as any).msecscount ?? 0);
  (s as any).prof_i = 0;
  // TODO-QSP: :prof_loop
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  (s as any).prof_i = ((s as any).prof_i ?? 0) + (1);
  if (((s as any).prof_i ?? 0) < ((s as any).prof_iterations ?? 0)) {
    // TODO-QSP: jump 'prof_loop'
  }
  (s as any).prof_end = ((s as any).msecscount ?? 0);
  (s as any).cheatVars['gameover'] = ((s as any).prof_saved_gameover ?? 0);
  (s as any).cheatVars['hunger'] = ((s as any).prof_saved_hunger ?? 0);
  (s as any).cheatVars['thirst'] = ((s as any).prof_saved_thirst ?? 0);
  (s as any).cheatVars['inf_willpower'] = ((s as any).prof_saved_inf_willpower ?? 0);
  (s as any).prof_total_ms = ((s as any).prof_end ?? 0) - ((s as any).prof_start ?? 0);
  (s as any).prof_avg_ms = ((s as any).prof_total_ms ?? 0) / ((s as any).prof_iterations ?? 0);
  (s as any).prof_per_sec = (((s as any).prof_total_ms ?? 0) > 0) ? (((s as any).prof_iterations ?? 0) * 1000 / ((s as any).prof_total_ms ?? 0)) : (0);
  scene.actions([
    { label: 'Run again', goto: ['perf_profile', ''] },
  ]);
  scene.build();
}

export const perf_profile: LocationDef = {
  name: 'perf_profile',
  region: 'other',
  enter: enter,
};
