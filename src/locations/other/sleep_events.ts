import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[0] ?? 0) === 'start'  ||  ((s as any).locArgs?.[0] ?? 0) === '') {
    (s as any).sleepVars['stat_display'] = 1;
    if (((s as any).sleepVars ?? 0)?.['events_active'] === 1) {
      (s as any).sleepVars['events_done'] = 0;
      if (((s as any).vibratorIN ?? 0) === 1) {
        if (((s as any).pcs_horny ?? 0) >= 100) {
          // TODO-QSP: $sleep_events[] = 'gs ''sleep_events'', ''vibr_orgasm'' '
        }
      } else {
        // TODO-QSP: $sleep_events[] = 'gs ''sleep_events'', ''wake_horny'' '
      }
      if (((s as any).strip_club ?? 0)?.['ivanna_dream'] === 1  &&  Math.floor(Math.random() * 60) + 0 === 0) {
        // TODO-QSP: $sleep_events_priority[] = 'gs ''sleep_events'', ''ivanna_dream'' '
      }
      if ((((s as any).start_type ?? 0) === 'sg_tg'  &&  (((s as any).year ?? 0) === 2016  &&  (((s as any).month ?? 0) > 8  &&  ((s as any).month ?? 0) < 11))  ||  (((s as any).start_type ?? 0) === 'city_tg'  ||  ((s as any).start_type ?? 0) === 'uni_tg')  &&  (((s as any).year ?? 0) === 2017  &&  ((s as any).month ?? 0) < 11))  &&  Math.floor(Math.random() * 9) + 0 === 0) {
        if (((s as any).tgQW ?? 0)?.['dream_sex_anya'] === 0  &&  ((s as any).start_type ?? 0) === 'sg_tg') {
          // TODO-QSP: $tgQWtemp[] = 'dream_sex_anya'
        } else {
          // TODO-QSP: $tgQWtemp[] = 'dream_sex_vika'
          if (((s as any).tgQW ?? 0)?.['dream_sex_albina'] === 0  &&  (((s as any).start_type ?? 0) === 'sg_tg'  ||  ((s as any).AlbinaQW ?? 0)?.['know_albina_uni'] === 1)) {
            // TODO-QSP: $tgQWtemp[] = 'dream_sex_albina'
          } else {
            // TODO-QSP: $tgQWtemp[] = 'dream_sex_bella'
            if (((s as any).tgQW ?? 0)?.['dream_sex_nush'] === 0  &&  (((s as any).start_type ?? 0) === 'sg_tg'  ||  ((s as any).anushkaQW ?? 0)?.['coffee_hole'] === 1)) {
              // TODO-QSP: $tgQWtemp[] = 'dream_sex_nush'
            } else {
              // TODO-QSP: $tgQWtemp[] = 'dream_sex_julia'
              if (((s as any).tgQW ?? 0)?.['dream_sex_katja_vicky'] === 0  &&  (((s as any).start_type ?? 0) === 'sg_tg'  ||  ((s as any).katjaQW ?? 0)?.['QWstage'] >= 1)) {
                // TODO-QSP: $tgQWtemp[] = 'dream_sex_katja_vicky'
              }
              if (((s as any).arrsize ?? 0)('tgQWtemp') > 0) {
                // TODO-QSP: $sleep_events_priority[] = 'gs ''sleep_events'', ''male_dream'' '
              }
            }
            qspCall(s, 'blackmailer', 'blackmail_sleep_events');
            qspCall(s, 'sleep_events', 'mod_sleepevents');
          }
        }
      }
    }
  }
  scene.build();
}

export const sleep_events: LocationDef = {
  name: 'sleep_events',
  title: 'You suddenly jolt awake and find yourself rubbing your soaki',
  region: 'other',
  enter: enter,
};
