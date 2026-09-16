import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterCikl(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'miroslava_schedule', 'cikl');
  qspCall(s, 'gp_elene_schedule', 'cikl');
  qspCall(s, 'gp_zlatek_schedule', 'cikl');
  return;
  // TODO-QSP: end
  if (((s as any).locArgs?.[0] ?? 0) === ''  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('A2') : -1) >= 0) {
    qspCall(s, 'artem_chebotarev_schedule', '');
  }
  if (((s as any).locArgs?.[0] ?? 0) === ''  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('A4') : -1) >= 0) {
    qspCall(s, 'igor_schedule', '');
  }
  if (((s as any).locArgs?.[0] ?? 0) === ''  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('A13') : -1) >= 0) {
    qspCall(s, 'lariska_schedule', '');
  }
  if (((s as any).locArgs?.[0] ?? 0) === ''  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('A14') : -1) >= 0  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('katja') : -1) >= 0) {
    qspCall(s, 'katja_meynold_schedule', '');
  }
  if (((s as any).locArgs?.[0] ?? 0) === ''  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('A15') : -1) >= 0) {
    qspCall(s, 'vicky_meynold_schedule', '');
  }
  if (((s as any).locArgs?.[0] ?? 0) === ''  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('A16') : -1) >= 0) {
    qspCall(s, 'natbelEv', 'nat_schedule');
  }
  if (((s as any).locArgs?.[0] ?? 0) === ''  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('Zvereva') : -1) >= 0  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('A18') : -1) >= 0  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('Silvestr') : -1) >= 0  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('A248') : -1) >= 0) {
    qspCall(s, 'Zvereva_schedule', '');
  }
  if (((s as any).locArgs?.[0] ?? 0) === ''  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('A23') : -1) >= 0) {
    qspCall(s, 'albina_schedule', '');
  }
  if (((s as any).locArgs?.[0] ?? 0) === ''  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('A31') : -1) >= 0  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('Elene') : -1) >= 0  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('grandparents') : -1) >= 0) {
    qspCall(s, 'gp_elene_schedule', '');
  }
  if (((s as any).locArgs?.[0] ?? 0) === ''  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('A32') : -1) >= 0  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('Zlatek') : -1) >= 0  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('grandparents') : -1) >= 0) {
    qspCall(s, 'gp_zlatek_schedule', '');
  }
  if (((s as any).locArgs?.[0] ?? 0) === ''  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('Family') : -1) >= 0  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('Anya') : -1) >= 0  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('A33') : -1) >= 0  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('Kolka') : -1) >= 0  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('A34') : -1) >= 0  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('Mother') : -1) >= 0  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('A29') : -1) >= 0  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('Stepdad') : -1) >= 0  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('A28') : -1) >= 0) {
    qspCall(s, 'family_schedule', '');
  }
  if (((s as any).locArgs?.[0] ?? 0) === ''  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('A60') : -1) >= 0  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('Mira') : -1) >= 0) {
    qspCall(s, 'miroslava_schedule', '');
  }
  if (((s as any).locArgs?.[0] ?? 0) === ''  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('A84') : -1) >= 0) {
    qspCall(s, 'kendra_schedule', '');
  }
  if (((s as any).locArgs?.[0] ?? 0) === ''  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('A144') : -1) >= 0) {
    qspCall(s, 'anushka_konstantinov_schedule', '');
  }
  if (((s as any).locArgs?.[0] ?? 0) === ''  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('A154') : -1) >= 0) {
    qspCall(s, 'radomir_popov_schedule', '');
  }
  if (((s as any).locArgs?.[0] ?? 0) === ''  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('A156') : -1) >= 0) {
    qspCall(s, 'arkadi_fyodorov_schedule', '');
  }
  if (((s as any).locArgs?.[0] ?? 0) === ''  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('A158') : -1) >= 0) {
    qspCall(s, 'valentin_bogdanov_schedule', '');
  }
  if (((s as any).locArgs?.[0] ?? 0) === ''  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('Hunters') : -1) >= 0  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('A172') : -1) >= 0  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('A173') : -1) >= 0  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('A174') : -1) >= 0) {
    qspCall(s, 'hunter_ambient', 'schedule');
  }
  if (((s as any).locArgs?.[0] ?? 0) === ''  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('A186') : -1) >= 0) {
    if (((s as any).hour ?? 0) >= 6  &&  (((s as any).hour ?? 0) < 18  ||  ((s as any).week ?? 0) === 4  &&  ((s as any).hour ?? 0) < 19)) {
      ((s as any).locat = (s as any).locat ?? {})['A186'] = 1;
    } else {
      ((s as any).locat = (s as any).locat ?? {})['A186'] = 2;
    }
  }
  ((s as any).scheduleVars = (s as any).scheduleVars ?? {})['maxi'] = 0;
  if (((s as any).scheduleVars ?? 0)?.['maxi'] > 0) {
    ((s as any).scheduleVars = (s as any).scheduleVars ?? {})['i'] = 0;
    ((s as any).scheduleVars = (s as any).scheduleVars ?? {})['all'] = (((s as any).locArgs?.[0] ?? 0) === ''  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('lover') : -1) >= 0  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('lovers') : -1) >= 0);
    if (((s as any).scheduleVars ?? 0)?.['all']  ||  ((s as any).scheduleVars ?? 0)?.['maxi'] < Object.keys((s as any).ARGS ?? {}).length) {
      // TODO-QSP: :lover_schedules1
      ((s as any).scheduleVars = (s as any).scheduleVars ?? {})['ID'] = qspUntranslated(s, "lover[scheduleVars['i']]", { location: "schedule" });
      if (((s as any).scheduleVars ?? 0)?.['all']  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf(((s as any).scheduleVars ?? 0)?.['ID']) : -1) >= 0) {
        // TODO-QSP: gs 'lover_schedule', $scheduleVars['ID']
      }
      ((s as any).scheduleVars = (s as any).scheduleVars ?? {})['i'] = ((s as any).scheduleVars['i'] ?? 0) + (1);
      if (((s as any).scheduleVars ?? 0)?.['i'] < ((s as any).scheduleVars ?? 0)?.['maxi']) {
        // TODO-QSP: jump 'lover_schedules1'
      }
    } else {
      ((s as any).scheduleVars = (s as any).scheduleVars ?? {})['maxi'] = 0;
      // TODO-QSP: :lover_schedules2
      ((s as any).scheduleVars = (s as any).scheduleVars ?? {})['index'] = qspUntranslated(s, "arrpos('lover', ARGS[scheduleVars['i']])", { location: "schedule" });
      if (((s as any).scheduleVars ?? 0)?.['index'] >= 0) {
        // TODO-QSP: gs 'lover_schedule', $lover[scheduleVars['index']]
      }
      ((s as any).scheduleVars = (s as any).scheduleVars ?? {})['i'] = ((s as any).scheduleVars['i'] ?? 0) + (1);
      if (((s as any).scheduleVars ?? 0)?.['i'] < ((s as any).scheduleVars ?? 0)?.['maxi']) {
        // TODO-QSP: jump 'lover_schedules2'
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'cikl':
      enterCikl(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const schedule: LocationDef = {
  name: 'schedule',
  region: 'other',
  enter: enter,
};
