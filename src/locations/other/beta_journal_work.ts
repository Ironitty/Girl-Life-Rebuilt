import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterInit(s: GameState, scene: SceneBuilder): void {
  (s as any).loc_id = 'beta_journal_work';
  (s as any).hot_link = ((s as any).loc_id ?? 0);
  qspCall(s, 'beta_journal', 'nav_construct');
  if (Object.keys((s as any).evt_event ?? {}).length !== 0) {
    qspCall(s, 'jobs_gigs', 'disp_evt', 2);
  }
  qspCall(s, 'jobs', 'show_all');
  if (((s as any).teacher ?? 0)?.['job'] > 2) {
    // TODO-QSP: dynamic text: You work as a teacher at the Lycée and your schedule is Monday to Saturday, teac...
    scene.text(`You work as a teacher at the Lycée and your schedule is Monday to Saturday, teaching between 14:00 and 16:00. Your salary is ${qspFunc(s, 'money', 'string_profit', 300)} per day.`);
  }
  if (((s as any).bumtolik ?? 0) === 4) {
    scene.text('You have been asked to help the homeless at the Mercy Clinic in the city industrial region.');
  }
  if (((s as any).bumtolik ?? 0) >= 5) {
    // TODO-QSP: dynamic text: You volunteer at the Mercy Clinic in the city industrial region and work with th...
    scene.text('You volunteer at the Mercy Clinic in the city industrial region and work with the homeless. Working hours are from 9:00 to 17:00 on Saturday and Sunday.');
  }
  if (((s as any).audition ?? 0)?.['day'] === ((s as any).daystart ?? 0)) {
    // TODO-QSP: dynamic text: Your audition for the role of <<$role>> is today!
    scene.text(`Your audition for the role of ${((s as any).role || '')} is today!`);
  } else {
    if (((s as any).audition ?? 0)?.['day'] - ((s as any).daystart ?? 0) === 1) {
      // TODO-QSP: dynamic text: You are auditioning for the role of <<$role>> tomorrow.
      scene.text(`You are auditioning for the role of ${((s as any).role || '')} tomorrow.`);
    } else {
      if (((s as any).audition ?? 0)?.['day'] - ((s as any).daystart ?? 0) > 1) {
        // TODO-QSP: dynamic text: You are auditioning for the role of <<$role>> in <<audition[''day''] - daystart>...
        scene.text(`You are auditioning for the role of ${((s as any).role || '')} in ${(((s as any).audition ?? {})?.['day'] ?? 0) - ((s as any).daystart ?? '')} days.`);
      }
    }
  }
  if (((s as any).actress_cast ?? 0) === 1) {
    if (((s as any).acting ?? 0)?.['shoot_day'] === ((s as any).daystart ?? 0)) {
      scene.text('You are ');
    } else {
      if (((s as any).acting ?? 0)?.['shoot_day'] - ((s as any).daystart ?? 0) === 1) {
        // TODO-QSP: dynamic text: You are scheduled to play the part of <<$role>> <<acting[''shoot_day''] - daysta...
        scene.text(`You are scheduled to play the part of ${((s as any).role || '')} ${(((s as any).acting ?? {})?.['shoot_day'] ?? 0) - ((s as any).daystart ?? '')} days from now.`);
      } else {
        if (((s as any).acting ?? 0)?.['shoot_day'] - ((s as any).daystart ?? 0) > 1) {
          // TODO-QSP: dynamic text: You are scheduled to play the part of <<$role>> <<acting[''shoot_day''] - daysta...
          scene.text(`You are scheduled to play the part of ${((s as any).role || '')} ${(((s as any).acting ?? {})?.['shoot_day'] ?? 0) - ((s as any).daystart ?? '')} days from now.`);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'init':
      enterInit(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const beta_journal_work: LocationDef = {
  name: 'beta_journal_work',
  title: 'You have been asked to help the homeless at the Mercy Clinic',
  region: 'other',
  enter: enter,
};
