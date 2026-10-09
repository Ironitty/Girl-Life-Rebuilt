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
  (s as any).droutine_done = undefined;
  qspGoto(s, 'daily_routine', 'hub');
  scene.build();
}

function enterFinishStep(s: GameState, scene: SceneBuilder): void {
  if (((s as any).droutine ?? 0)?.['active'] === 1) {
    if (((s as any).droutine ?? 0)?.['active_slot'] > 0) {
      ((s as any).droutine_done = (s as any).droutine_done ?? {})[(((s as any).droutine ?? 0)?.['active_slot'])] = 1;
    }
    ((s as any).droutine = (s as any).droutine ?? {})['active_slot'] = 0;
    qspGoto(s, 'daily_routine', 'hub');
  } else {
    { const __t = String((s as any).locArgs?.[1] ?? ''); if (__t) qspGoto(s, __t, String((s as any).locArgs?.[2] ?? '')); }
  }
  scene.build();
}

function enterHub(s: GameState, scene: SceneBuilder): void {
  ((s as any).droutine = (s as any).droutine ?? {})['active_slot'] = 0;
  if (((s as any).droutine ?? 0)?.['phase'] === 'evening') {
    scene.text('<center><b>Evening routine</b></center>');
  } else {
    scene.text('<center><b>Morning routine</b></center>');
  }
  (s as any).temp_drc = (((s as any).droutine ?? 0)?.['' + (((s as any).droutine ?? 0)?.['phase']) + '_count'] ?? 0);
  if (((s as any).temp_drc ?? 0) <= 0) {
    scene.text('This routine has no steps set up yet.');
    (s as any).temp_drc = undefined;
    scene.actions([
{ label: 'Done', goto: ['daily_routine', 'finish'] },
]);
    return;
  }
  (s as any).temp_dri = 0;
  (s as any).dr_any = 0;
  (s as any).dr_unavail = '';
  while (true) {
    (s as any).temp_dri = ((s as any).temp_dri ?? 0) + (1);
    if (((s as any).temp_dri ?? 0) <= ((s as any).temp_drc ?? 0)) {
      if (((s as any).droutine_done ?? 0)?.[String((s as any).temp_dri ?? 0)] === 0) {
        ((s as any).droutine = (s as any).droutine ?? {})['current_label'] = (((s as any).droutine ?? 0)?.['' + (((s as any).droutine ?? 0)?.['phase']) + '_step_' + ((s as any).temp_dri ?? 0) + ''] ?? 0);
        ((s as any).droutine = (s as any).droutine ?? {})['current_runner'] = '';
        ((s as any).droutine = (s as any).droutine ?? {})['skip_reason'] = '';
        ((s as any).droutine = (s as any).droutine ?? {})['can_run'] = 1;
        ((s as any).droutine = (s as any).droutine ?? {})['current_quick'] = 0;
        qspCall(s, 'daily_routine', 'resolve', (((s as any).droutine ?? 0)?.['' + (((s as any).droutine ?? 0)?.['phase']) + '_step_' + ((s as any).temp_dri ?? 0) + ''] ?? 0));
        if (((s as any).droutine ?? 0)?.['can_run'] !== 0  &&  ((s as any).droutine ?? 0)?.['current_runner'] !== '') {
          if (((s as any).dr_any ?? 0) === 0  &&  ((s as any).droutine_settings ?? 0)?.['quick_routine'] === 1  &&  ((s as any).droutine ?? 0)?.['current_quick'] === 1) {
            ((s as any).droutine = (s as any).droutine ?? {})['active_slot'] = ((s as any).temp_dri ?? 0);
            qspFunc(s, 'droutine[\'current_runner\']');
            return;
          }
          (s as any).dr_any = 1;
          scene.actions([
            { label: 'Finish routine', goto: ['daily_routine', 'finish'] },
          ]);
        }
      }
    }
  }
  scene.build();
}

function enterOfferHere(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'daily_routine', 'can_use_here') === 0) {
    scene.build();
    return;
  }
  qspCall(s, 'daily_routine', 'settings_defaults');
  if (((s as any).droutine_settings ?? 0)?.['disabled'] === 1) {
    scene.build();
    return;
  }
  const acts: ActionDef[] = [];
  if (((s as any).droutine ?? 0)?.['morning_count'] > 0 && qspFunc(s, 'daily_routine', 'phase_available', 'morning')) {
    acts.push({ label: 'Start your morning routine', goto: ['daily_routine', 'start', 'morning'] });
  }
  if (((s as any).droutine ?? 0)?.['evening_count'] > 0 && qspFunc(s, 'daily_routine', 'phase_available', 'evening')) {
    acts.push({ label: 'Start your evening routine', goto: ['daily_routine', 'start', 'evening'] });
  }
  if (acts.length > 0) {
    scene.actions(acts);
  }
  scene.build();
}

function enterCanUseHere(s: GameState, _scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'homes_properties', 'is_at_a_home', '');
}

function enterSettingsDefaults(s: GameState, _scene: SceneBuilder): void {
  if (((s as any).droutine_settings ?? 0)?.['init'] === 1) return;
  (s as any).droutine_settings = {
    ...(s as any).droutine_settings ?? {},
    init: 1,
    disabled: 1,
    morning_use_wake: 1,
    morning_wake_min: 120,
    morning_use_abs: 0,
    morning_abs_start: 5,
    morning_abs_end: 11,
    evening_use_abs: 1,
    evening_abs_start: 20,
    evening_abs_end: 1,
    makeup_level: 1,
  };
}

function enterInHourWindow(s: GameState, _scene: SceneBuilder): void {
  const start = Number((s as any).locArgs?.[1] ?? 0);
  const end = Number((s as any).locArgs?.[2] ?? 0);
  const hour = (s as any).hour ?? 0;
  (s as any).result = 0;
  if (start === end) {
    (s as any).result = 0;
  } else if (start < end) {
    if (hour >= start && hour < end) (s as any).result = 1;
  } else {
    if (hour >= start || hour < end) (s as any).result = 1;
  }
}

function enterLogicalDay(s: GameState, _scene: SceneBuilder): void {
  let phase = String((s as any).locArgs?.[1] ?? '');
  if (phase !== 'evening') phase = 'morning';
  (s as any).result = (s as any).daystart ?? 0;
  const settings = (s as any).droutine_settings ?? {};
  if (settings[`${phase}_use_abs`] === 1 && settings[`${phase}_abs_end`] < settings[`${phase}_abs_start`] && (s as any).hour < settings[`${phase}_abs_end`]) {
    (s as any).result = ((s as any).daystart ?? 0) - 1;
  }
}

function enterPhaseAvailable(s: GameState, _scene: SceneBuilder): void {
  qspCall(s, 'daily_routine', 'settings_defaults');
  (s as any).result = 0;
  let phase = String((s as any).locArgs?.[1] ?? '');
  if (phase !== 'evening') phase = 'morning';
  const settings = (s as any).droutine_settings ?? {};
  const logicalDay = qspFunc(s, 'daily_routine', 'logical_day', phase);
  if (settings[`${phase}_done_day`] === logicalDay) return;
  if (settings[`${phase}_use_wake`] === 1 && ((s as any).droutine ?? 0)?.['woke_at_min'] > 0) {
    const elapsed = ((s as any).totminut ?? 0) - ((s as any).droutine ?? 0)?.['woke_at_min'];
    if (elapsed >= 0 && elapsed <= settings[`${phase}_wake_min`]) (s as any).result = 1;
  }
  if (settings[`${phase}_use_abs`] === 1) {
    const inWindow = qspFunc(s, 'daily_routine', 'in_hour_window', settings[`${phase}_abs_start`], settings[`${phase}_abs_end`]);
    if (inWindow) (s as any).result = 1;
  }
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
    case 'offer_here':
      enterOfferHere(s, scene);
      break;
    case 'can_use_here':
      enterCanUseHere(s, scene);
      break;
    case 'settings_defaults':
      enterSettingsDefaults(s, scene);
      break;
    case 'in_hour_window':
      enterInHourWindow(s, scene);
      break;
    case 'logical_day':
      enterLogicalDay(s, scene);
      break;
    case 'phase_available':
      enterPhaseAvailable(s, scene);
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
