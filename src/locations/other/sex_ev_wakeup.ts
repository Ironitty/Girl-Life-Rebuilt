import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['morning_after'] = 1;
  if (((s as any).sex_ev ?? 0)?.['lover_left'] === 1) {
    scene.actions([{ label: 'Continue', goto: ['sex_ev_wakeup', 'wake_alone'] }]);
  }
  if (((s as any).sex_ev ?? 0)?.['sleep_fuck'] === 1) {
    scene.actions([{ label: 'Continue', goto: ['sex_ev_wakeup', 'sleep_fuck_wake'] }]);
  }
  if (((s as any).vomit ?? 0)?.['hangover'] + ((s as any).vomit ?? 0)?.['morning_sick'] + ((s as any).vomit ?? 0)?.['unlucky'] > 0) {
    scene.actions([{ label: 'Continue', goto: ['sex_ev_wakeup', 'throw_up'] }]);
  } else {
    if ((((s as any).npc_earlyriser ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).hour ?? 0) >= 7)  &&  ((Math.floor(Math.random() * 10) + 1) < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)])) {
      if ((((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'facial'  ||  ((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'perverted')  &&  (Math.floor(Math.random() * 2) + 1) === 2) {
        scene.actions([{ label: 'Continue', goto: ['sex_ev_wakeup', 'cumshot_wakeup1'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['sex_ev_wakeup', 'wakeup_fondling'] }]);
      }
    } else {
      scene.actions([{ label: 'Continue', goto: ['sex_ev_wakeup', 'wake_events'] }]);
    }
  }
  scene.build();
}

function enterWakeEvents(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/romance/misc/wakeup1.mp4');
  if (((s as any).alarmVars ?? 0)?.['alarmOn'] === 0) {
    scene.text('A loud sound pierces your consciousness like a spear through the brain, bringing you out of sleep. You wake up blearily, head <i>pounding</i> with an awful hangover, as you look around in bewilderment at what is making that awful sound, only to find it is your phone alarm going off.');
    // TODO-QSP: else}
    scene.text('A loud sound disrupts your sleep. As you slowly crack open your eyes, you see the illuminated screen of your phone, displaying your morning alarm and asking if you want to snooze it.');
    qspCall(s, 'sex_ev_wakeup', 'kiss_wake');
    scene.actions([
      { label: '<i>Ugh, my head</i>', goto: ['sex_ev_morning', 'hangover'] },
      { label: '<i>Yawn</i>', goto: ['sex_ev_wakeup', 'yawn_wake'] },
    ]);
  } else {
    scene.text('A sharp lance of pain pierces your consciousness, bringing you out of sleep. You wake up blearily, head <i>pounding</i> with an awful hangover.');
    // TODO-QSP: else}
    if (((s as any).npc_earlyriser ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      if (((s as any).sex_ev ?? 0)?.['loc'] === 'pc_home') {
        // TODO-QSP: dynamic text: Your mind stirs and you slowly come to consciousness, snuggled under your covers...
        scene.text(`Your mind stirs and you slowly come to consciousness, snuggled under your covers with ${((s as any).npcdesc ?? 0)}'s arms wrapped around you.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['loc'] === 'npc_home') {
          // TODO-QSP: dynamic text: Your mind stirs and you slowly come to consciousness, tucked under the covers of...
          scene.text(`Your mind stirs and you slowly come to consciousness, tucked under the covers of ${((s as any).npcdesc ?? 0)}'s bed.`);
        } else {
          // TODO-QSP: dynamic text: Your mind stirs and you slowly come to consciousness, snuggled under the covers ...
          scene.text(`Your mind stirs and you slowly come to consciousness, snuggled under the covers with ${((s as any).npcdesc ?? 0)}'s arms wrapped around you.`);
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['loc'] === 'pc_home') {
        scene.text('Your mind stirs and you slowly come to consciousness, snuggled under your covers.');
      } else {
        if (((s as any).sex_ev ?? 0)?.['loc'] === 'npc_home') {
          scene.text('Your mind stirs and you slowly come to consciousness, tucked under the covers.');
        } else {
          scene.text('Your mind stirs and you slowly come to consciousness, snuggled under the covers.');
        }
      }
    }
    qspCall(s, 'sex_ev_wakeup', 'kiss_wake');
    scene.actions([
      { label: '<i>Ugh, my head</i>', goto: ['sex_ev_morning', 'hangover'] },
      { label: '<i>Yawn</i>', goto: ['sex_ev_wakeup', 'yawn_wake'] },
    ]);
  }
  qspCall(s, 'sex_ev_wakeup', 'late_for_school');
  qspCall(s, 'sex_ev_wakeup', 'after_sleepfuck_wake');
  qspCall(s, 'sex_ev_wakeup', 'guilt_start');
  qspCall(s, 'sex_ev_wakeup', 'forgot_bc_pill');
  scene.build();
}

function enterWakeAlone(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/romance/misc/wakeup1.mp4');
  if (((s as any).alarmVars ?? 0)?.['alarmOn'] === 0) {
    scene.text('A loud sound pierces your consciousness like a spear through the brain, bringing you out of sleep. You wake up blearily, head <i>pounding</i> with an awful hangover, as you look around in bewilderment at what is making that awful sound, only to find it is your phone alarm going off.');
    // TODO-QSP: else}
    scene.text('A loud sound disrupts your sleep. As you slowly crack open your eyes, you see the illuminated screen of your phone, displaying your morning alarm and asking if you want to snooze it.');
    scene.text('You groggily tap it a few times before finally getting it to turn off.');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_wakeup', 'wake_alone2'] },
    ]);
  } else {
    scene.text('A sharp lance of pain pierces your consciousness, bringing you out of sleep. You wake up blearily, head <i>pounding</i> with an awful hangover.');
    // TODO-QSP: else}
    scene.text('Your mind stirs and you slowly come to awareness that it\'s morning and you\'re snuggled under the covers.');
    scene.actions([
      { label: '<i>Ugh, my head</i>', goto: ['sex_ev_morning', 'hangover'] },
      { label: 'Continue', goto: ['sex_ev_wakeup', 'wake_alone2'] },
    ]);
  }
  scene.build();
}

function enterWakeAlone2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/romance/misc/wake_alone1.mp4');
  // TODO-QSP: dynamic text: It's only then that you sit up in bed and realize that <<$npcdesc>> is gone.
  scene.text(`It's only then that you sit up in bed and realize that ${((s as any).npcdesc ?? 0)} is gone.`);
  scene.text('You vaguely remember passing out last night. He must have left after you fell asleep. Or early this morning.');
  scene.text('Either way, now it\'s just... you.');
  scene.actions([
    { label: 'Continue', goto: ['sex_ev_leave', 'exit'] },
  ]);
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
    case 'wake_alone':
      enterWakeAlone(s, scene);
      break;
    case 'wake_alone2':
      enterWakeAlone2(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sex_ev_wakeup: LocationDef = {
  name: 'sex_ev_wakeup',
  title: 'A loud sound pierces your consciousness like a spear through',
  region: 'other',
  enter: enter,
};
