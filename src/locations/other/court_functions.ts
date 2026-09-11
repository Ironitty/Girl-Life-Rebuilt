import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterGetTotalArrests(s: GameState, scene: SceneBuilder): void {
  (s as any).result = ((s as any).policeQW ?? {})?.['shoplift_booked'] + ((s as any).policeQW ?? {})?.['prostitution_booked'];
  scene.build();
}

function enterArrestFor(s: GameState, scene: SceneBuilder): void {
  (s as any).policeQW['' + String((s as any).$ARGS[1] || '') + '_booked'] = ((s as any).policeQW['' + String((s as any).$ARGS[1] || '') + '_booked'] ?? 0) + (1);
  (s as any).policeQW['crime_flag'] = ((s as any).locArgs?.[1] ?? 0);
  scene.build();
}

function enterAddFine(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'debt_add', 'policeQW[''legal_fine'']', ARGS[1]
  (s as any).temp_tot_missed = Math.max(0, ((s as any).policeQW ?? {})?.['tot_court_dates_missed'] + ((s as any).policeQW ?? {})?.['tot_fines_deadlines_missed']);
  (s as any).temp_current_missed = Math.max(0, ((s as any).policeQW ?? {})?.['missed_fine_deadlines'] + ((s as any).policeQW ?? {})?.['missed_court_dates'] - 1);
  if (((s as any).policeQW ?? 0)?.['fine_deadline'] === 0) {
    (s as any).policeQW['fine_deadline'] = ((s as any).daystart ?? 0) + 28 - Math.min(14, ((s as any).temp_tot_missed ?? 0) / 4);
  } else {
    (s as any).policeQW['fine_deadline'] = Math.max(((s as any).daystart ?? 0), ((s as any).policeQW ?? 0)?.['fine_deadline']) + 14 - Math.min(7, 2 * ((s as any).temp_current_missed ?? 0) + ((s as any).temp_tot_missed ?? 0) / 4);
  }
  qspCall(s, 'calendar', 'add', 'fine_deadline');
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'get_total_arrests':
      enterGetTotalArrests(s, scene);
      break;
    case 'arrest_for':
      enterArrestFor(s, scene);
      break;
    case 'add_fine':
      enterAddFine(s, scene);
      break;
    default:
      enterGetTotalArrests(s, scene);
      break;
  }
}

export const court_functions: LocationDef = {
  name: 'court_functions',
  region: 'other',
  enter: enter,
};
