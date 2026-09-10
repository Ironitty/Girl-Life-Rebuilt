import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterSetSchedule(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'this_week') {
    qspCall(s, 'masseuse_schedule', 'set_schedule');
  } else {
    qspCall(s, 'masseuse_schedule', 'next_week_set_schedule');
  }
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterChangeForWork(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'outfit', 'undress', 'masseuseQW');
  (s as any).masseuse['uniform'] = 1;
  (s as any).robe = 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/mall/salon/work/lockers.jpg');
  scene.text('You strip down out of your clothes and stuff them into your locker, pulling out your robe as you do so. After slipping it on and tying the belt, you check yourself in the mirror.');
  scene.text('Nipples are clearly outlined. Thighs are fully on display. Hemline likely to flash your pussy if you bend the wrong way. Ass definitely going to get flashed if you bend over.');
  if (((s as any).job_rank ?? 0)?.['city_salon_masseuse'] === 2  &&  ((s as any).pcs_inhib ?? 0) < 35  &&  (((s as any).salon ?? 0)?.['nude_mass_count'] > 40  ||  ((s as any).salon ?? 0)?.['hj_count'] > 0  ||  ((s as any).salon ?? 0)?.['bj_count'] > 0  ||  ((s as any).salon ?? 0)?.['fuck_count'] > 0)) {
    scene.text('You\'re not comfortable with what you have to do next, but you\'ve also done it so many times now that you\'re too desensitized to it to be hesitant anymore.');
    scene.text('A nude masseuse. You shake your head and leave the room, heading out to start your shift.');
  } else {
    scene.text('A happy end masseuse. Giving handjobs to strangers still isn\'t something you\'re comfortable with, but you\'ve been doing this here long enough that you just can\'t bring yourself to be hesitant about it anymore.');
    scene.text('You shake your head and leave the room, heading out to start your shift.');
    if (((s as any).job_rank ?? 0)?.['city_salon_masseuse'] === 4  &&  (((s as any).salon ?? 0)?.['bj_count'] > 30  ||  ((s as any).salon ?? 0)?.['fuck_count'] > 0)) {
      scene.text('Giving blowjobs to strangers still isn\'t something you\'re comfortable with, but you\'ve been doing this here long enough that you just can\'t bring yourself to be hesitant about it anymore.');
      scene.text('You shake your head and leave the room, heading out to start your shift.');
    } else {
      scene.text('The uniform of a whore.');
      scene.text('You sigh internally at what you\'ve become, but even you have to admit to yourself that letting strangers fuck you doesn\'t bother you like it used to. You\'ve let yourself fall into a routine here.');
      scene.text('You shake your head and leave the room, heading out to start your shift.');
      if (((s as any).job_rank ?? 0)?.['city_salon_masseuse'] === 6) {
        scene.text('The uniform of a whore.');
        scene.text('You sigh internally and leave the room, heading out to start your shift.');
      } else {
        scene.text('Yup. That\'s your uniform.');
      }
      scene.actions([
        { label: 'Go to your massage room', goto: ['masseuse_work', 'massage_room'] },
      ]);
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'set_schedule':
      enterSetSchedule(s, scene);
      break;
    case 'change_for_work':
      enterChangeForWork(s, scene);
      break;
    default:
      enterSetSchedule(s, scene);
      break;
  }
}

export const masseuse_work: LocationDef = {
  name: 'masseuse_work',
  title: 'You strip down out of your clothes and stuff them into your ',
  region: 'other',
  enter: enter,
};
