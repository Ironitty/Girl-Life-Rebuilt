import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'daily_routine', 'settings_defaults');
  ((s as any).droutine = (s as any).droutine ?? {})['phase'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).droutine = (s as any).droutine ?? {})['return_loc'] = ((s as any).loc ?? 0);
  ((s as any).droutine = (s as any).droutine ?? {})['return_arg'] = ((s as any).loc_arg ?? 0);
  ((s as any).droutine = (s as any).droutine ?? {})['active'] = 1;
  ((s as any).droutine = (s as any).droutine ?? {})['active_slot'] = 0;
  ((s as any).droutine = (s as any).droutine ?? {})['day_anchor'] = qspFunc(s, 'daily_routine', 'logical_day', ((s as any).locArgs?.[1] ?? 0));
  qspGoto(s, 'daily_routine', 'hub');
  // TODO-QSP: end
  scene.build();
}

function enterFinishStep(s: GameState, scene: SceneBuilder): void {
  if (((s as any).droutine ?? 0)?.['active'] === 1) {
    if (((s as any).droutine ?? 0)?.['active_slot'] > 0) {
      // TODO-QSP: droutine_done[droutine['active_slot']] = 1
    }
    ((s as any).droutine = (s as any).droutine ?? {})['active_slot'] = 0;
    qspGoto(s, 'daily_routine', 'hub');
  } else {
    { const __t = String((s as any).locArgs?.[1] ?? ''); if (__t) qspGoto(s, __t, '$ARGS[2]'); }
  }
  // TODO-QSP: end
  scene.build();
}

function enterHub(s: GameState, scene: SceneBuilder): void {
  ((s as any).droutine = (s as any).droutine ?? {})['active_slot'] = 0;
  if (((s as any).droutine ?? 0)?.['phase'] === 'evening') {
    scene.text('<center><b>Evening routine</b></center>');
  } else {
    scene.text('<center><b>Morning routine</b></center>');
  }
  (s as any).temp_drc = (((s as any).droutine ?? 0)?.['' + ((s as any).droutine ?? 0)?.['phase'] + '_count'] ?? 0);
  if (((s as any).temp_drc ?? 0) <= 0) {
    scene.text('This routine has no steps set up yet.');
    scene.actions([
{ label: 'Done', goto: ['daily_routine', 'finish'] },
]);
    return;
  }
  (s as any).temp_dri = 0;
  (s as any).dr_any = 0;
  (s as any).dr_unavail = '';
  // TODO-QSP: :droutine_hub_loop
  (s as any).temp_dri = ((s as any).temp_dri ?? 0) + (1);
  if (((s as any).temp_dri ?? 0) <= ((s as any).temp_drc ?? 0)) {
    if (((s as any).droutine_done ?? 0)?.[String((s as any).temp_dri ?? 0)] === 0) {
      ((s as any).droutine = (s as any).droutine ?? {})['current_label'] = (((s as any).droutine ?? 0)?.['' + ((s as any).droutine ?? 0)?.['phase'] + '_step_' + ((s as any).temp_dri ?? 0) + ''] ?? 0);
      ((s as any).droutine = (s as any).droutine ?? {})['current_runner'] = '';
      ((s as any).droutine = (s as any).droutine ?? {})['skip_reason'] = '';
      ((s as any).droutine = (s as any).droutine ?? {})['can_run'] = 1;
      ((s as any).droutine = (s as any).droutine ?? {})['current_quick'] = 0;
      qspCall(s, 'daily_routine', 'resolve', (((s as any).droutine ?? 0)?.['' + ((s as any).droutine ?? 0)?.['phase'] + '_step_' + ((s as any).temp_dri ?? 0) + ''] ?? 0));
      if (((s as any).droutine ?? 0)?.['can_run'] !== 0  &&  ((s as any).droutine ?? 0)?.['current_runner'] !== '') {
        if (((s as any).dr_any ?? 0) === 0  &&  ((s as any).droutine_settings ?? 0)?.['quick_routine'] === 1  &&  ((s as any).droutine ?? 0)?.['current_quick'] === 1) {
          ((s as any).droutine = (s as any).droutine ?? {})['active_slot'] = ((s as any).temp_dri ?? 0);
          return;
        }
        (s as any).dr_any = 1;
        scene.actions([
          { label: 'Finish routine', goto: ['daily_routine', 'finish'] },
        ]);
      }
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
    case 'finish_step':
      enterFinishStep(s, scene);
      break;
    case 'hub':
      enterHub(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const daily_routine: LocationDef = {
  name: 'daily_routine',
  title: '<center><b>Evening routine</b></center>',
  region: 'other',
  enter: enter,
};
