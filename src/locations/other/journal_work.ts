import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'journal', 'journalmenu');
  scene.text('<center><h2>Work</h2></center>');
  if (Object.keys((s as any).evt_event ?? {}).length !== 0) {
    qspCall(s, 'jobs_gigs', 'disp_evt', 2);
  }
  qspCall(s, 'jobs', 'show_all');
  if (((s as any).bumtolik ?? 0) === 4) {
    scene.text('You have been asked to help the homeless at the Mercy Clinic in the city industrial region.');
  }
  if (((s as any).bumtolik ?? 0) >= 5) {
    // TODO-QSP: dynamic text: You volunteer at the Mercy Clinic in the city industrial region and work with th...
    scene.text('You volunteer at the Mercy Clinic in the city industrial region and work with the homeless. Working hours are from \'+func(\'time\', \'get_time_string\', 9, 0)+\' to \'+func(\'time\', \'get_time_string\', 17, 0)+\' on Saturday and Sunday.');
  }
  if (((s as any).audition_ev ?? 0)?.['day'] === ((s as any).daystart ?? 0)) {
    // TODO-QSP: dynamic text: Your audition for the role of <<$role>> is today!
    scene.text(`Your audition for the role of ${((s as any).role ?? 0)} is today!`);
  } else {
    if (((s as any).audition_ev ?? 0)?.['day'] - ((s as any).daystart ?? 0) === 1) {
      // TODO-QSP: dynamic text: You are auditioning for the role of <<$role>> tomorrow.
      scene.text(`You are auditioning for the role of ${((s as any).role ?? 0)} tomorrow.`);
    } else {
      if (((s as any).audition_ev ?? 0)?.['day'] - ((s as any).daystart ?? 0) > 1) {
        // TODO-QSP: dynamic text: You are auditioning for the role of <<$role>> in <<audition_ev['day'] - daystart...
        scene.text(`You are auditioning for the role of ${((s as any).role ?? 0)} in ${((s as any).audition_ev ?? {})?.['day'] - ((s as any).daystart ?? 0)} days.`);
      }
    }
  }
  if (((s as any).actress_cast ?? 0) === 1) {
    if (((s as any).acting_ev ?? 0)?.['shoot_day'] === ((s as any).daystart ?? 0)) {
      scene.text('You are ');
    } else {
      if (((s as any).acting_ev ?? 0)?.['shoot_day'] - ((s as any).daystart ?? 0) === 1) {
        // TODO-QSP: dynamic text: You are scheduled to play the part of <<$role>> <<acting_ev['shoot_day'] - dayst...
        scene.text(`You are scheduled to play the part of ${((s as any).role ?? 0)} ${((s as any).acting_ev ?? {})?.['shoot_day'] - ((s as any).daystart ?? 0)} days from now.`);
      } else {
        if (((s as any).acting_ev ?? 0)?.['shoot_day'] - ((s as any).daystart ?? 0) > 1) {
          // TODO-QSP: dynamic text: You are scheduled to play the part of <<$role>> <<acting_ev['shoot_day'] - dayst...
          scene.text(`You are scheduled to play the part of ${((s as any).role ?? 0)} ${((s as any).acting_ev ?? {})?.['shoot_day'] - ((s as any).daystart ?? 0)} days from now.`);
        }
      }
    }
  }
  scene.actions([
    { label: 'Put your journal down', handler: (st: GameState) => {
    dynamicGoto(st, 'menu_loc', 'menu_arg');
  } },
    { label: 'Return to top journal page', goto: ['journal', 'records'] },
  ]);
  scene.build();
}

export const journal_work: LocationDef = {
  name: 'journal_work',
  title: '<center><h2>Work</h2></center>',
  region: 'other',
  description: ['You have been asked to help the homeless at the Mercy Clinic in the city industrial region.'],
  enter: enter,
};
