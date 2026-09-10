import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).gschoolVars ?? 0)?.['last_attendance'] !== ((s as any).daystart ?? 0)) {
    (s as any).gschoolVars['last_attendance'] = ((s as any).daystart ?? 0);
    (s as any).gschoolVars['absence_count'] = ((s as any).gschoolVars['absence_count'] ?? 0) - (1);
    (s as any).school_lunch = 0;
    if (((s as any).missing_class ?? 0) > 9) {
      (s as any).missing_class = ((s as any).missing_class ?? 0) - (9);
    } else {
      (s as any).missing_class = ((s as any).missing_class ?? 0) - (6);
    }
    (s as any).lernSkill = ((s as any).lernSkill ?? 0) + (1);
    (s as any).lernHome = ((s as any).lernHome ?? 0) + (1);
    if (((s as any).runnerQW ?? 0)?.['pav_racetype'] === 1) {
      (s as any).runnerQW['pav_racetype'] = 0;
    }
    if (((s as any).hour ?? 0) < 8) {
      qspCall(s, 'gschool_socialchg', 'test');
    }
  }
  if (((s as any).breaktype ?? 0) !== 'first') {
    if (((s as any).detention_set ?? 0) === 1  &&  ((s as any).week ?? 0) === 1) {
      (s as any).detention_set = 2;
      scene.img('images/characters/shared/headshots_main/big134.jpg');
      scene.text('The principal is waiting for you in the hall, and with a simple curl of a finger, she summons you to follow her to her office.');
      qspCall(s, 'gschool_lessons', 'uniform_check');
      scene.actions([
        { label: 'Follow', goto: ['gschool_office', 'principal'] },
      ]);
    } else {
      qspCall(s, 'gschool_cheerleading', 'skipped_ev');
      if (((s as any).week ?? 0) < 4  &&  ((s as any).class ?? 0)?.['first_grade_check'] === 0) {
        scene.actions([{ label: 'Continue', goto: ['gschool_lessons', 'grade_check'] }]);
      } else {
        // TODO-QSP: gt 'nerd_game_night', 'invite', 'morning'
        qspCall(s, 'gschool_gossip', 'morning');
        qspCall(s, 'gschool_lessons', 'uniform_check');
        qspCall(s, 'gschool', 'schedule');
        if (((s as any).week ?? 0) === 1  &&  ((s as any).class ?? 0)?.['grade_check_day'] !== ((s as any).daystart ?? 0)) {
          scene.actions([
            { label: 'Check your grades', goto: ['gschool_lessons', 'grade_check'] },
          ]);
        }
        scene.actions([
          { label: 'Go to first period', handler: (st: GameState) => {
    (st as any).school_period = 0;
  }, goto: ['gschool_lessons', 'schedule'] },
          { label: 'Skip first period', handler: (st: GameState) => {
    (st as any).school_period = 1;
  }, goto: ['gschool_lessons', 'skip'] },
          { label: 'Use water cooler', handler: (st: GameState) => {
    // TODO-QSP: $breaktype = 'first'
  }, goto: ['gschool_break', 'watercooler'] },
          { label: 'Go to the girls restroom', handler: (st: GameState) => {
    // TODO-QSP: $breaktype = 'first'
  }, goto: ['gschool_break', 'girls_restroom'] },
          { label: 'Go to the boys restroom', handler: (st: GameState) => {
    // TODO-QSP: $breaktype = 'first'
  }, goto: ['gschool_break', 'boys_restroom'] },
        ]);
      }
      scene.text('<center><b>School Hallway</b></center>');
      scene.img(`images/locations/pavlovsk/school/building/gschool_hall0${Math.floor(Math.random() * 3) + 0}.jpg`);
      scene.text('Walking down the halls, you barely notice the poor state of the school anymore, having grown used to it. Approaching your locker, you see several of your classmates and wave at them.');
      scene.actions([
        { label: 'Continue down the hall', goto: ['gschool_lessons', 'morning'] },
        { label: 'Go to first period', handler: (st: GameState) => {
    (st as any).school_period = 0;
  }, goto: ['gschool_lessons', 'schedule'] },
        { label: 'Skip first period', handler: (st: GameState) => {
    (st as any).school_period = 1;
  }, goto: ['gschool_lessons', 'skip'] },
      ]);
    }
  }
  scene.build();
}

export const gschool_lessons: LocationDef = {
  name: 'gschool_lessons',
  title: 'School Hallway',
  region: 'other',
  locationType: 'public_indoors',
  description: ['The principal is waiting for you in the hall, and with a simple curl of a finger, she summons you to follow her to her office.'],
  enter: enter,
};
