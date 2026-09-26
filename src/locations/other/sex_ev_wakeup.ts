import { qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['morning_after'] = 1;
  if (((s as any).sex_ev ?? 0)?.['lover_left'] === 1) {
    qspGoto(s, 'sex_ev_wakeup', 'wake_alone');
  }
  if (((s as any).sex_ev ?? 0)?.['sleep_fuck'] === 1) {
    qspGoto(s, 'sex_ev_wakeup', 'sleep_fuck_wake');
  }
  if (((s as any).vomit ?? 0)?.['hangover'] + ((s as any).vomit ?? 0)?.['morning_sick'] + ((s as any).vomit ?? 0)?.['unlucky'] > 0) {
    qspGoto(s, 'sex_ev_wakeup', 'throw_up');
  } else {
    if ((((s as any).npc_earlyriser ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).hour ?? 0) >= 7)  &&  ((Math.floor(Math.random() * 10) + 1) < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)])) {
      if ((((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'facial'  ||  ((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'perverted')  &&  (Math.floor(Math.random() * 2) + 1) === 2) {
        qspGoto(s, 'sex_ev_wakeup', 'cumshot_wakeup1');
      } else {
        qspGoto(s, 'sex_ev_wakeup', 'wakeup_fondling');
      }
    } else {
      qspGoto(s, 'sex_ev_wakeup', 'wake_events');
    }
  }
  scene.build();
}

function enterWakeEvents(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/romance/misc/wakeup1.mp4');
  if (((s as any).alarmVars ?? 0)?.['alarmOn'] === 0) {
    // TODO-QSP: --- sex_ev_wakeup ---------------------------------
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'wake_events':
      enterWakeEvents(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sex_ev_wakeup: LocationDef = {
  name: 'sex_ev_wakeup',
  title: 'Your mind stirs and you slowly come to consciousness. The fi',
  region: 'other',
  enter: enter,
};
