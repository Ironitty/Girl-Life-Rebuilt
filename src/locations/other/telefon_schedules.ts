import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterCikl(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCiklCalls(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCiklSms(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCiklCalls(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'lover_call', 'scheduler');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCiklSms(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'booty_call', 'scheduler');
  if (!(s as any).booty_call_time) (s as any).booty_call_time = {}; (s as any).booty_call_time['daystart'] = ((s as any).daystart ?? 0);
  if (((s as any).nerd_game ?? 0)?.['invite_day'] < ((s as any).daystart ?? 0)  &&  ((s as any).week ?? 0) === 1) {
    if (((s as any).nerd_game ?? 0)?.['first_SMS_received'] === 0) {
      // TODO-QSP: if arrpos('$contact', 'A152') = -1: gs 'telefon', 'AddContact', 'A152', 'icon_na', 1
    }
    // TODO-QSP: gs 'telefon', 'SetInSMSSchedule', 'A152', "gs 'nerd_game_night', 'game_invite_sms_switch'", "totminu...
  }
  if (((s as any).year ?? 0) === 2017  &&  ((s as any).month ?? 0) === 6  &&  ((s as any).gopnikbandQW ?? 0)?.['on_tour'] === 0) {
    if (!(s as any).gopnikbandQW) (s as any).gopnikbandQW = {}; (s as any).gopnikbandQW['on_tour'] = 1;
    if (((s as any).npc_rel ?? 0)?.['A144'] >= 50  &&  (Array.isArray((s as any).contact) ? ((s as any).contact as any[]).indexOf('A144') : -1) < 0) {
      qspCall(s, 'telefon', 'AddContact', 'A144', 'icon_na', 1);
    }
  } else {
    if (((s as any).gopnikbandQW ?? 0)?.['on_tour'] === 1  &&  ((s as any).year ?? 0) === 2017  &&  ((s as any).month ?? 0) === 8  &&  ((s as any).day ?? 0) >= 19) {
      if (!(s as any).gopnikbandQW) (s as any).gopnikbandQW = {}; (s as any).gopnikbandQW['on_tour'] = 0;
    }
  }
  if (((s as any).gopnikbandQW ?? 0)?.['on_tour'] === 1  &&  ((s as any).npc_rel ?? 0)?.['A144'] >= 50  &&  ((s as any).anushkaQW ?? 0)?.['tour_SMS_send'] < ((s as any).daystart ?? 0)  &&  ((s as any).anushkaQW ?? 0)?.['num_tour_SMS_send'] < 11) {
    if (((s as any).anushkaQW ?? 0)?.['num_tour_SMS_send'] <= 9  &&  ((s as any).week ?? 0) === 6) {
      // TODO-QSP: gs 'telefon', 'SetInSMSSchedule', 'A144', "gs 'band_tour_anushka_SMS', 'start'", "totminut > <<totmi...
    } else {
      if (((s as any).anushkaQW ?? 0)?.['num_tour_SMS_send'] === 10  &&  ((s as any).week ?? 0) === 2) {
        // TODO-QSP: gs 'telefon', 'SetInSMSSchedule', 'A144', "gs 'band_tour_anushka_SMS', 'start'", "totminut > <<totmi...
      }
    }
  }
  if (((s as any).mainQW ?? 0) >= 1) {
    qspCall(s, 'tatiana_lab', 'stage_SMS');
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'cikl':
      enterCikl(s, scene);
      break;
    case 'cikl_calls':
      enterCiklCalls(s, scene);
      break;
    case 'cikl_sms':
      enterCiklSms(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const telefon_schedules: LocationDef = {
  name: 'telefon_schedules',
  region: 'other',
  enter: enter,
};
