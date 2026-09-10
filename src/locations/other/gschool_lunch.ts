import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterLunch(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).breakevent_lunch_day ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).breakevent_lunch_day = ((s as any).daystart ?? 0);
    scene.actions([{ label: 'Continue', goto: ['gschool_events', 'break_events'] }]);
  }
  qspCall(s, 'dimaRevenge', 'dimaRevenge_event_check');
  if (((s as any).marcus_event ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).Marcus_sextype ?? 0) > 0  &&  (!(Math.floor(Math.random() * 4) + 0))) {
    scene.actions([{ label: 'Continue', goto: ['gschool_lunch', 'marcus_event'] }]);
  }
  if (((s as any).cheerleadingQW ?? 0)?.['bella_stasya_gossip'] === 0  &&  ((s as any).cheerleadingQW ?? 0)?.['quest_stage'] === 0  &&  ((s as any).cheerleadingQW ?? 0)?.['gossip'] >= 3  &&  (((s as any).grupTipe ?? 0) === 1  ||  ((s as any).fame ?? 0)?.['pav_slut'] >= 200)) {
    scene.actions([{ label: 'Continue', goto: ['gschool_events1', 'cheerleading_notice'] }]);
  }
  qspCall(s, 'natbel_friend', 'slut_reconcile_school_check');
  scene.actions([{ label: 'Continue', goto: ['gschool_lunch', 'cafeteria'] }]);
  scene.build();
}

function enterCafeteria(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  if ((!((s as any).school_lunch ?? 0))) {
    if (((s as any).NikoVolkovQW ?? 0) === 5  &&  ((s as any).NikoEv ?? 0) === 5  &&  ((s as any).NikoDate ?? 0) === 0  &&  ((s as any).NikoDate_Day ?? 0) !== ((s as any).daystart ?? 0)) {
      (s as any).school_lunch = 1;
      scene.actions([{ label: 'Continue', goto: ['NikoDates', 'hallway_strip'] }]);
    } else {
      (s as any).school_lunch = 1;
      scene.actions([{ label: 'Continue', goto: ['NikoDreams', 'classroom_dream'] }]);
      if (((s as any).NikoVolkovQW ?? 0) === 10  &&  ((s as any).NikoEv ?? 0) === 13  &&  ((s as any).NikoDate_Day ?? 0) !== ((s as any).daystart ?? 0)) {
        (s as any).school_lunch = 1;
        scene.actions([{ label: 'Continue', goto: ['NikoEv2', 'Lunch Chat'] }]);
      } else {
        (s as any).school_lunch = 1;
        scene.actions([{ label: 'Continue', goto: ['NikoEv2', 'Lunch Chat 2'] }]);
        if (((s as any).NikoVolkovQW ?? 0) === 10  &&  ((s as any).NikoEv ?? 0) === 21  &&  ((s as any).NikoDate_Day ?? 0) !== ((s as any).daystart ?? 0)) {
          (s as any).school_lunch = 1;
          scene.actions([{ label: 'Continue', goto: ['NikoEv2', 'Natalia Talk 2'] }]);
        } else {
          (s as any).school_lunch = 1;
          scene.actions([{ label: 'Continue', goto: ['NikoBully', 'Lena Bully'] }]);
        }
      }
      if (((s as any).dimaRevenge ?? 0) === 5  &&  ((s as any).dimaRevChoice ?? 0) === 5) {
        scene.text('<center><b>Cafeteria</b></center>');
        scene.img('images/locations/pavlovsk/school/lunch/lunch.jpg');
        scene.text('As you wait in line for your meal, you hear the other students talking about a girl you don\'t know. None of them are talking about you anymore. Dimka works quick. You enjoy the rest of your lunch break.');
      } else {
        scene.img('images/locations/pavlovsk/school/lunch/lunch.jpg');
        scene.text('During the break, students and some of the teachers are standing in line near the kitchen, waiting for their food.');
        qspCall(s, 'gschool_groups', 'teachers');
      }
      if (qspFunc(s, 'homes_properties', 'has_access', 'parents_home')) {
        scene.actions([
          { label: 'Eat bagged lunch', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'food', 'bagged_lunch_stats');
    qspCall(s, 'food', 'bagged_lunch_text');
    qspCall(s, 'gschool_gossip', 'bagged');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lunch', 'break'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Skip lunch', handler: (st: GameState) => {
    qspCall(s, 'gschool_gossip', 'skipping');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lunch', 'break'] },
    ]);
  } },
        { label: 'Buy food [+$func(\'money\', \'get_cost_string\', 50)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 50) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 50);
      qspCall(s, 'food', 'medium_meal');
      qspCall(s, 'gschool_gossip', 'buying');
      scene.actions([
        { label: 'Continue', goto: ['gschool_lunch', 'break'] },
      ]);
    }
  } },
      ]);
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'lunch':
      enterLunch(s, scene);
      break;
    case 'cafeteria':
      enterCafeteria(s, scene);
      break;
    default:
      enterLunch(s, scene);
      break;
  }
}

export const gschool_lunch: LocationDef = {
  name: 'gschool_lunch',
  title: 'Cafeteria',
  region: 'other',
  locationType: 'public_indoors',
  enter: enter,
};
