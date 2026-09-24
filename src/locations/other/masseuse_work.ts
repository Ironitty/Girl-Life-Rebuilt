import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterSetSchedule(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'this_week') {
    qspCall(s, 'masseuse_schedule', 'set_schedule');
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'next_week') {
      qspCall(s, 'masseuse_schedule', 'next_week_set_schedule');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterChangeForWork(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'outfit', 'undress', 'masseuseQW');
  ((s as any).masseuse = (s as any).masseuse ?? {})['uniform'] = 1;
  (s as any).robe = 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/mall/salon/work/lockers.jpg');
  scene.text('You strip down out of your clothes and stuff them into your locker, pulling out your robe as you do so. After slipping it on and tying the belt, you check yourself in the mirror.');
  scene.text('Nipples are clearly outlined. Thighs are fully on display. Hemline likely to flash your pussy if you bend the wrong way. Ass definitely going to get flashed if you bend over.');
  if (((s as any).job_rank ?? 0)?.['city_salon_masseuse'] === 2  &&  ((s as any).pcs_inhib ?? 0) < 35  &&  (((s as any).salon ?? 0)?.['nude_mass_count'] > 40  ||  ((s as any).salon ?? 0)?.['hj_count'] > 0  ||  ((s as any).salon ?? 0)?.['bj_count'] > 0  ||  ((s as any).salon ?? 0)?.['fuck_count'] > 0)) {
    scene.text('You\'re not comfortable with what you have to do next, but you\'ve also done it so many times now that you\'re too desensitized to it to be hesitant anymore.');
    scene.text('A nude masseuse. You shake your head and leave the room, heading out to start your shift.');
  } else {
    if (((s as any).job_rank ?? 0)?.['city_salon_masseuse'] === 3  &&  ((s as any).pcs_inhib ?? 0) < 40  &&  (((s as any).salon ?? 0)?.['hj_count'] < 30  ||  ((s as any).salon ?? 0)?.['bj_count'] > 0  ||  ((s as any).salon ?? 0)?.['fuck_count'] > 0)) {
      scene.text('A happy end masseuse. Giving handjobs to strangers still isn\'t something you\'re comfortable with, but you\'ve been doing this here long enough that you just can\'t bring yourself to be hesitant about it anymore.');
      scene.text('You shake your head and leave the room, heading out to start your shift.');
    } else {
      if (((s as any).job_rank ?? 0)?.['city_salon_masseuse'] === 4  &&  (((s as any).salon ?? 0)?.['bj_count'] > 30  ||  ((s as any).salon ?? 0)?.['fuck_count'] > 0)) {
        scene.text('Giving blowjobs to strangers still isn\'t something you\'re comfortable with, but you\'ve been doing this here long enough that you just can\'t bring yourself to be hesitant about it anymore.');
        scene.text('You shake your head and leave the room, heading out to start your shift.');
      } else {
        if (((s as any).job_rank ?? 0)?.['city_salon_masseuse'] >= 5  &&  ((s as any).salon ?? 0)?.['fuck_count'] > 30) {
          scene.text('The uniform of a whore.');
          scene.text('You sigh internally at what you\'ve become, but even you have to admit to yourself that letting strangers fuck you doesn\'t bother you like it used to. You\'ve let yourself fall into a routine here.');
          scene.text('You shake your head and leave the room, heading out to start your shift.');
        } else {
          if (((s as any).job_rank ?? 0)?.['city_salon_masseuse'] === 6) {
            scene.text('The uniform of a whore.');
            scene.text('You sigh internally and leave the room, heading out to start your shift.');
          } else {
            scene.text('Yup. That\'s your uniform.');
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to your massage room', goto: ['masseuse_work', 'massage_room'] },
  ]);
  scene.build();
}

function enterChangeForWorkStress(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/salon/work/lockers.jpg');
  scene.text('You open your locker, revealing the thin white robe that you\'re supposed to put on before going into the room.');
  if (((s as any).job_rank ?? 0)?.['city_salon_masseuse'] === 2  &&  ((s as any).salon ?? 0)?.['nude_mass_count'] > 0) {
    qspCall(s, 'willpower', 'skill', 'inhib', 'self', 'medium');
    scene.text('<i>Can I really do this?</i> you think to yourself. <i>Spend another day massaging strangers here while they stare at my naked body?</i>');
  } else {
    if (((s as any).job_rank ?? 0)?.['city_salon_masseuse'] === 2) {
      qspCall(s, 'willpower', 'skill', 'inhib', 'self', 'medium');
      scene.text('<i>Can I really do this?</i> you think to yourself. <i>Start massaging strangers naked? Let them stare at me and get off on my body?</i>');
    } else {
      if (((s as any).job_rank ?? 0)?.['city_salon_masseuse'] >= 3) {
        qspCall(s, 'willpower', 'prostitution', 'self', 'medium');
        if (((s as any).job_rank ?? 0)?.['city_salon_masseuse'] === 3  &&  ((s as any).salon ?? 0)?.['hj_count'] > 0) {
          scene.text('<i>Can I really do this?</i> you think to yourself. <i>Can I really spend another day here giving handjobs to strangers for money?</i>');
        } else {
          if (((s as any).job_rank ?? 0)?.['city_salon_masseuse'] === 3) {
            scene.text('<i>Can I really do this?</i> you think to yourself. <i>Am I really willing to start giving strangers handjobs here for money?</i>');
          } else {
            if (((s as any).job_rank ?? 0)?.['city_salon_masseuse'] === 4  &&  ((s as any).salon ?? 0)?.['bj_count'] > 0) {
              scene.text('<i>Can I really do this?</i> you think to yourself. <i>Can I really spend another day here sucking off strangers for money?</i>');
            } else {
              if (((s as any).job_rank ?? 0)?.['city_salon_masseuse'] === 4) {
                scene.text('<i>Can I really do this?</i> you think to yourself. <i>Am I really willing to start sucking off strangers here for money?</i>');
              } else {
                if (((s as any).job_rank ?? 0)?.['city_salon_masseuse'] >= 5  &&  ((s as any).salon ?? 0)?.['fuck_count'] > 0) {
                  scene.text('<i>Can I really do this?</i> you think to yourself. <i>Can I really spend another day here fucking strangers for money?</i>');
                } else {
                  if (((s as any).job_rank ?? 0)?.['city_salon_masseuse'] >= 5) {
                    scene.text('<i>Can I really do this?</i> you think to yourself. <i>Am I really willing to start fucking strangers here for money?</i>');
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Get changed', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Get changed', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'outfit', 'undress', 'masseuseQW');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    (st as any).robe = 1;
    ((st as any).masseuse = (st as any).masseuse ?? {})['uniform'] = 1;
    scene.img('images/locations/city/citycenter/mall/salon/work/lockers.jpg');
    scene.text('You force down your hesitancy and strip out of your clothing, putting on the robe that barely hides anything and sometimes fails to altogether.');
    scene.text('The robe of a whore.');
    scene.text('You sigh and bang the locker shut, heading to the room ro begin your shift.');
    scene.actions([
      { label: 'Go to your massage room', goto: ['masseuse_work', 'massage_room'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Can\'t do it', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/lockers.jpg');
    scene.text('You stare at the robe for what seems like forever before you come to a realization.');
    scene.text('<i>I just... can\'t do this.</i>');
    scene.text('You shut the door and walk out of the salon in a daze, the calls of Xian asking where you\'re going barely audible.');
    scene.actions([
      { label: 'Leave', goto: ['city_mall', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterMassageRoom(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/salon/work/room.jpg');
  scene.text('One of the massage rooms in which you serve clientele.');
  if (qspFunc(s, 'jobs', 'is_work_time', 'city_salon_masseuse') === 1) {
    scene.actions([
      { label: 'Start your shift', handler: (st: GameState) => {
    if (((st as any).clothingworntype ?? 0) === 'nude'  &&  ((st as any).robe ?? 0) === 1) {
      scene.text('Reaching over to the intercom, you buzz Xian.');
      scene.text('"I\'m ready to receive customers."');
      scene.actions([
        { label: 'Wait for your first customer', goto: ['masseuse_work', 'shift_start'] },
      ]);
    }
  } },
    ]);
  } else {
    if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).robe ?? 0) === 1) {
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['salon', 'start'] },
  ]);
  scene.build();
}

function enterShiftStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  ((s as any).masseuse = (s as any).masseuse ?? {})['break'] = 0;
  if (((s as any).masseuse ?? 0)?.['multiple_shifts'] === 1) {
    ((s as any).masseuse = (s as any).masseuse ?? {})['multiple_shifts'] = 0;
  }
  if (((s as any).hour ?? 0) < 10) {
    if (((s as any).hour ?? 0) === 8) {
      (s as any).minut = ((s as any).minut ?? 0) + (60 - ((s as any).minut ?? 0));
    }
    (s as any).masseuse_shift = 1;
  } else {
    if (((s as any).hour ?? 0) < 14) {
      if (((s as any).hour ?? 0) === 12) {
        (s as any).minut = ((s as any).minut ?? 0) + (60 - ((s as any).minut ?? 0));
      }
      (s as any).masseuse_shift = 2;
    } else {
      if (((s as any).hour ?? 0) === 16) {
        (s as any).minut = ((s as any).minut ?? 0) + (60 - ((s as any).minut ?? 0));
      }
      (s as any).masseuse_shift = 3;
    }
  }
  qspCall(s, 'jobs', 'clock_in', 'city_salon_masseuse');
  if (((s as any).masseuse ?? 0)?.['late'] === 1) {
    ((s as any).masseuse = (s as any).masseuse ?? {})['late'] = 0;
    qspCall(s, 'jobs', 'bonus_pay', 'city_salon_masseuse', 3 * (((s as any).masseuse ?? {})?.['hourly'] ?? 0));
  } else {
    qspCall(s, 'jobs', 'bonus_pay', 'city_salon_masseuse', 4 * (((s as any).masseuse ?? {})?.['hourly'] ?? 0));
  }
  qspGoto(s, 'masseuse_work', 'begin');
  // TODO-QSP: end
  scene.build();
}

function enterShiftEnd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'end');
  if ((!((s as any).robe ?? 0))) {
    (s as any).robe = 1;
  }
  ((s as any).masseuse = (s as any).masseuse ?? {})['shift_finished'] = 0;
  ((s as any).salon = (s as any).salon ?? {})['work_minutes'] = 0;
  ((s as any).masseuse = (s as any).masseuse ?? {})['worked_' + String(((s as any).daystart ?? 0)) + '_' + String(((s as any).masseuse_shift ?? 0))] = 1;
  qspCall(s, 'jobs', 'clock_out', 'city_salon_masseuse');
  ((s as any).salon = (s as any).salon ?? {})['work_minutes'] = 0;
  qspCall(s, 'money', 'earn', ((s as any).massage ?? 0)?.['shift_tips']);
  ((s as any).masseuse = (s as any).masseuse ?? {})['money_earned'] = ((s as any).masseuse['money_earned'] ?? 0) + (((s as any).massage ?? 0)?.['shift_tips']);
  ((s as any).massage = (s as any).massage ?? {})['shift_tips_total'] = ((s as any).massage['shift_tips_total'] ?? 0) + (((s as any).massage ?? 0)?.['shift_tips']);
  ((s as any).massage = (s as any).massage ?? {})['shift_tips'] = 0;
  qspCall(s, 'money', 'earn', ((s as any).massage ?? 0)?.['sex_tips']);
  ((s as any).masseuse = (s as any).masseuse ?? {})['money_earned'] = ((s as any).masseuse['money_earned'] ?? 0) + (((s as any).massage ?? 0)?.['sex_tips']);
  ((s as any).massage = (s as any).massage ?? {})['sex_tips_total'] = ((s as any).massage['sex_tips_total'] ?? 0) + (((s as any).massage ?? 0)?.['sex_tips']);
  ((s as any).massage = (s as any).massage ?? {})['sex_tips'] = 0;
  if (((s as any).job_rank ?? 0)?.['city_salon_masseuse'] === 3) {
    qspCall(s, 'fame', 'city', 'prostitute', 'tiny');
  } else {
    if (((s as any).job_rank ?? 0)?.['city_salon_masseuse'] === 4) {
      qspCall(s, 'fame', 'city', 'prostitute', 'small');
    } else {
      if (((s as any).job_rank ?? 0)?.['city_salon_masseuse'] === 5) {
        qspCall(s, 'fame', 'city', 'prostitute', 'medium');
      } else {
        if (((s as any).job_rank ?? 0)?.['city_salon_masseuse'] === 6) {
          qspCall(s, 'fame', 'city', 'prostitute', 'large');
        }
      }
    }
  }
  qspGoto(s, 'salon', 'start');
  // TODO-QSP: end
  scene.build();
}

function enterLastClient(s: GameState, scene: SceneBuilder): void {
  ((s as any).salon = (s as any).salon ?? {})['work_minutes'] = 0;
  ((s as any).masseuse = (s as any).masseuse ?? {})['shift_finished'] = 1;
  (s as any).robe = 1;
  if ((((s as any).job_booking ?? 0)['city_salon_masseuse, ' + String(((s as any).daystart ?? 0)) + ', 1'] !== ''  &&  ((s as any).masseuse_shift ?? 0) === 1)  ||  (((s as any).job_booking ?? 0)['city_salon_masseuse, ' + String(((s as any).daystart ?? 0)) + ', 2'] !== ''  &&  ((s as any).masseuse_shift ?? 0) === 2)) {
    ((s as any).masseuse = (s as any).masseuse ?? {})['multiple_shifts'] = 1;
    // TODO-QSP: dynamic text: <b><<hour>>:0<<minut>>.</b> Looks like this shift is just about over, but you sc...
    scene.text(`<b>${((s as any).hour ?? '')}:0${((s as any).minut ?? '')}.</b> Looks like this shift is just about over, but you scheduled yourself for the next shift too. Better prepare for that then.`);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFinalCleanup(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).minut ?? 0) < 10) {
      // TODO-QSP: dynamic text: <b><<hour>>:0<<minut>>.</b> Looks like your shift is just about over. Time to wr...
      scene.text(`<b>${((s as any).hour ?? '')}:0${((s as any).minut ?? '')}.</b> Looks like your shift is just about over. Time to wrap up for the day.`);
    } else {
      // TODO-QSP: dynamic text: <b><<hour>>:<<minut>>.</b> Looks like your shift is just about over. Time to wra...
      scene.text(`<b>${((s as any).hour ?? '')}:${((s as any).minut ?? '')}.</b> Looks like your shift is just about over. Time to wrap up for the day.`);
    }
    if (((s as any).cum_loc ?? 0)?.['vagina'] > 0  ||  ((s as any).cum_loc ?? 0)?.['face'] > 0) {
      scene.text('The only question left is if you\'re going to clean yourself up first.');
      if (((s as any).cum_loc ?? 0)?.['vagina'] > 0  &&  ((s as any).cum_loc ?? 0)?.['face'] > 0) {
        scene.actions([
          { label: 'Clean everything', handler: (st: GameState) => {
    (st as any).cumspclnt = 10;
    qspCall(st, 'cum_cleanup', '');
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/cum/clean_mouth.mp4');
    scene.text('Well, no reason to walk around dripping cum. Grabbing a soft towel, you carefully wipe the cum from your face and pussy before tossing it into the cum laundry bin. Afterwards, you reset the room, slip on your robe, and leave the room, finishing your shift.');
    scene.actions([
      { label: 'Finish your shift', goto: ['masseuse_work', 'shift_end'] },
    ]);
  } },
        ]);
      }
      if (((s as any).cum_loc ?? 0)?.['face'] > 0) {
        scene.actions([
          { label: 'Wipe your face', handler: (st: GameState) => {
    (st as any).cumspclnt = 12;
    qspCall(st, 'cum_cleanup', '');
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/cum/clean_mouth.mp4');
    scene.text('Well, no reason to walk around with cum dripping from your face. Grabbing a soft towel, you wipe the cum from your face before tossing it into the cum laundry bin. Afterwards, you reset the room, slip on your robe, and leave the room, finishing your shift.');
    scene.actions([
      { label: 'Finish your shift', goto: ['masseuse_work', 'shift_end'] },
    ]);
  } },
        ]);
      }
      if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
        scene.actions([
          { label: 'Wipe your pussy', handler: (st: GameState) => {
    (st as any).cumspclnt = 15;
    qspCall(st, 'cum_cleanup', '');
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/cum/clean_pussy.mp4');
    scene.text('Well, no reason to walk around with cum leaking from your pussy. Grabbing a soft towel, you carefully wipe the cum from your pussy before tossing it into the cum laundry bin. Afterwards, you reset the room, slip on your robe, and leave the room, finishing your shift.');
    scene.actions([
      { label: 'Finish your shift', goto: ['masseuse_work', 'shift_end'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Don\'t bother', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/room.jpg');
    scene.text('Doesn\'t really matter to you that much, you\'ll just leave it where it is for now. You spend the next couple minutes resetting the room, slipping on your robe, and leaving the room, finishing your shift.');
    scene.actions([
      { label: 'Finish your shift', goto: ['masseuse_work', 'shift_end'] },
    ]);
  } },
      ]);
    } else {
      scene.text('You make sure all the dirty laundry is in the correct bins and then change the sheets on the table and put all the lube and oil back in their order on the table. With the room reset for the next girl, your shift is over.');
      scene.actions([
        { label: 'Finish your shift', goto: ['masseuse_work', 'shift_end'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterFinalCleanup(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cum_loc ?? 0)?.['face'] > 0) {
    scene.text('You probably ought to clean your face.');
    if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
      scene.text('And your pussy too.');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFinalCleanupMenu(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).cum_loc ?? 0)?.['vagina'] > 0  &&  ((s as any).cum_loc ?? 0)?.['face'] === 0) {
      scene.text('You probably ought wipe your pussy.');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFinalCleanupMenu(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).cum_loc ?? 0)?.['vagina'] === 0  &&  ((s as any).cum_loc ?? 0)?.['face'] === 0) {
        scene.actions([
          { label: 'Get ready for the next shift', goto: ['masseuse_work', 'shift_start'] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterStretchOut(s: GameState, scene: SceneBuilder): void {
  if (((s as any).masseuse ?? 0)?.['stretch'] === 0  &&  ((s as any).job_rank ?? 0)?.['city_salon_masseuse'] >= 2) {
    scene.actions([
      { label: 'Stretch out first', handler: (st: GameState) => {
    ((st as any).masseuse = (st as any).masseuse ?? {})['stretch'] = 1;
    scene.img('images/shared/sex/massage/stretch1.mp4');
    scene.text('You take a quick minute to stretch your arms behind your head as far as they can go, bending backwards to feel the pull in your thighs and the <i>pop</i> in your shoulders.');
    if (((st as any).job_rank ?? 0)?.['city_salon_masseuse'] === 2) {
      scene.text('Who knew that giving massages would make <i>you</i> need massages!');
    } else {
      if (((st as any).job_rank ?? 0)?.['city_salon_masseuse'] === 3) {
        scene.text('Who knew that giving happy ending massages would make your shoulders <i>so tight!</i>');
      } else {
        if (((st as any).job_rank ?? 0)?.['city_salon_masseuse'] === 4) {
          scene.text('Who knew that giving massages, handies, and blowjobs would make your shoulders <i>so tight!</i>');
        } else {
          if (((st as any).job_rank ?? 0)?.['city_salon_masseuse'] === 5) {
            scene.text('Who knew that giving massages and having sex could be <i>so much</i> work!');
          } else {
            if (((st as any).job_rank ?? 0)?.['city_salon_masseuse'] === 6) {
              scene.text('Who knew that fucking clients could be <i>so much</i> work!');
            }
          }
        }
      }
    }
    if (((st as any).masseuse ?? 0)?.['shift_finished'] === 1) {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFinalCleanup(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPrepareNextMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterFinalCleanupMenu(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cum_loc ?? 0)?.['face'] > 0) {
    if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
      scene.actions([
        { label: 'Just your face', handler: (st: GameState) => {
    (st as any).cumspclnt = 12;
    qspCall(st, 'cum_cleanup', '');
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/cum/clean_mouth.mp4');
    scene.text('Eh, who cares. The first guy of the next shift can get sloppy seconds. He\'ll probably just think it\'s lube. You wipe your face off with a towel and throw it into the cum laundry bin. Then you reset the room for your next client.');
    scene.actions([
      { label: 'Get ready for the next shift', goto: ['masseuse_work', 'shift_start'] },
    ]);
  } },
        { label: 'Wipe your face and pussy', handler: (st: GameState) => {
    (st as any).cumspclnt = 10;
    qspCall(st, 'cum_cleanup', '');
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/cum/clean_mouth.mp4');
    scene.text('You clean your face off with a towel before wiping your pussy with it as well before throwing it into the cum laundry bin. Then you reset the room for your next client.');
    scene.actions([
      { label: 'Get ready for the next shift', goto: ['masseuse_work', 'shift_start'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Wipe your face', handler: (st: GameState) => {
    (st as any).cumspclnt = 12;
    qspCall(st, 'cum_cleanup', '');
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/cum/clean_mouth.mp4');
    scene.text('You wipe your face off with a towel and throw it into the cum laundry bin.');
    scene.actions([
      { label: 'Get ready for the next shift', goto: ['masseuse_work', 'shift_start'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).cum_loc ?? 0)?.['vagina'] > 0  &&  ((s as any).cum_loc ?? 0)?.['face'] === 0) {
      scene.actions([
        { label: 'Don\'t bother', handler: (st: GameState) => {
    scene.text('Eh, who cares. The first guy of the next shift can get sloppy seconds. He\'ll probably just think it\'s lube. Your breather over, you slip on your robe and reset the room.');
    scene.actions([
      { label: 'Get ready for the next shift', goto: ['masseuse_work', 'shift_start'] },
    ]);
  } },
        { label: 'Wipe your pussy', handler: (st: GameState) => {
    (st as any).cumspclnt = 12;
    qspCall(st, 'cum_cleanup', '');
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/cum/clean_mouth.mp4');
    scene.text('You wipe your pussy with a towel until no more cum is apparent and toss it into the cum laundry bin. Then you reset the room for your next client.');
    scene.actions([
      { label: 'Get ready for the next shift', goto: ['masseuse_work', 'shift_start'] },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBreakQuestion(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'end');
  if (((s as any).minut ?? 0) < 10) {
    // TODO-QSP: dynamic text: <b><<hour>>:0<<minut>>.</b> Looks like you have about <<240 - salon[''work_minut...
    scene.text(`<b>${((s as any).hour ?? '')}:0${((s as any).minut ?? '')}.</b> Looks like you have about ${240 - (((s as any).salon ?? {})?.['work_minutes'] ?? 0)} minutes left in your shift. Should you take a break? Or just wait for the next client?`);
  } else {
    // TODO-QSP: dynamic text: <b><<hour>>:<<minut>>.</b> Looks like you have about <<240 - salon[''work_minute...
    scene.text(`<b>${((s as any).hour ?? '')}:${((s as any).minut ?? '')}.</b> Looks like you have about ${240 - (((s as any).salon ?? {})?.['work_minutes'] ?? 0)} minutes left in your shift. Should you take a break? Or just wait for the next client?`);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPrepareNext(s: GameState, scene: SceneBuilder): void {
  (s as any).cumspclnt = 4;
  qspCall(s, 'cum_cleanup', '');
  qspCall(s, 'arousal', 'end');
  if (((s as any).minut ?? 0) < 10) {
    // TODO-QSP: dynamic text: <b><<hour>>:0<<minut>>.</b> Looks like you have about <<240 - salon[''work_minut...
    scene.text(`<b>${((s as any).hour ?? '')}:0${((s as any).minut ?? '')}.</b> Looks like you have about ${240 - (((s as any).salon ?? {})?.['work_minutes'] ?? 0)} minutes left in your shift. You should prepare for another client.`);
  } else {
    // TODO-QSP: dynamic text: <b><<hour>>:<<minut>>.</b> Looks like you have about <<240 - salon[''work_minute...
    scene.text(`<b>${((s as any).hour ?? '')}:${((s as any).minut ?? '')}.</b> Looks like you have about ${240 - (((s as any).salon ?? {})?.['work_minutes'] ?? 0)} minutes left in your shift. You should prepare for another client.`);
  }
  scene.text('Well, that answers that. You grab a towel and wipe yourself off before tossing it into a laundry bin.');
  if (((s as any).masseuse ?? 0)?.['break'] === 0) {
    scene.text('Now the only question left is if you should you take a break or just wait for the next client?');
  } else {
    scene.text('Guess you should just wait for the next client now.');
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPrepareNextMenu(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterPrepareNextMenu(s: GameState, scene: SceneBuilder): void {
  if (((s as any).masseuse ?? 0)?.['break'] === 0) {
    scene.actions([
      { label: 'Take a break', goto: ['masseuse_break', 'start'] },
    ]);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStretchOut(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for your next client', goto: ['masseuse_work', 'begin'] },
  ]);
  scene.build();
}

function enterCustomerGenerate(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcgeneratec', '0', 'salon client', (Math.floor(Math.random() * 28) + 18), 3, 1);
  qspCall(s, 'npcStat', '$npclastgenerated');
  (s as any).masseuse_time_temp = (Math.floor(Math.random() * 11) + 5);
  ((s as any).masseuse = (s as any).masseuse ?? {})['client_type'] = (Math.floor(Math.random() * 3) + 0);
  ((s as any).masseuse = (s as any).masseuse ?? {})['client_request'] = (Math.floor(Math.random() * 13) + 0);
  // TODO-QSP: end
  scene.build();
}

function enterBegin(s: GameState, scene: SceneBuilder): void {
  ((s as any).masseuse = (s as any).masseuse ?? {})['stretch'] = 0;
  (s as any).robe = 1;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCustomerGenerate(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).masseuse ?? 0)?.['fast_foward'] === 1) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFastShift(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).job_rank ?? 0)?.['city_salon_masseuse'] === 1) {
      qspGoto(s, 'masseuse_work', '1_pre');
    } else {
      if (((s as any).job_rank ?? 0)?.['city_salon_masseuse'] === 2) {
        if (((s as any).masseuse ?? 0)?.['client_request'] >= 8) {
          qspGoto(s, 'masseuse_work', '1_pre');
        } else {
          qspGoto(s, 'masseuse_work', '2_pre');
        }
      } else {
        if (((s as any).job_rank ?? 0)?.['city_salon_masseuse'] === 3) {
          if (((s as any).masseuse ?? 0)?.['client_request'] >= 11) {
            qspGoto(s, 'masseuse_work', '1_pre');
          } else {
            if (((s as any).masseuse ?? 0)?.['client_request'] >= 7) {
              qspGoto(s, 'masseuse_work', '2_pre');
            } else {
              qspGoto(s, 'masseuse_work', '3_pre');
            }
          }
        } else {
          if (((s as any).job_rank ?? 0)?.['city_salon_masseuse'] === 4) {
            if (((s as any).masseuse ?? 0)?.['client_request'] >= 12) {
              qspGoto(s, 'masseuse_work', '1_pre');
            } else {
              if (((s as any).masseuse ?? 0)?.['client_request'] >= 10) {
                qspGoto(s, 'masseuse_work', '2_pre');
              } else {
                if (((s as any).masseuse ?? 0)?.['client_request'] >= 8) {
                  qspGoto(s, 'masseuse_work', '3_pre');
                } else {
                  qspGoto(s, 'masseuse_work', '4_pre');
                }
              }
            }
          } else {
            if (((s as any).job_rank ?? 0)?.['city_salon_masseuse'] === 5) {
              if (((s as any).masseuse ?? 0)?.['client_request'] === 12) {
                qspGoto(s, 'masseuse_work', '2_pre');
              } else {
                if (((s as any).masseuse ?? 0)?.['client_request'] === 11) {
                  qspGoto(s, 'masseuse_work', '3_pre');
                } else {
                  if (((s as any).masseuse ?? 0)?.['client_request'] === 10) {
                    qspGoto(s, 'masseuse_work', '4_pre');
                  } else {
                    qspGoto(s, 'masseuse_work', '5_pre');
                  }
                }
              }
            } else {
              if (((s as any).job_rank ?? 0)?.['city_salon_masseuse'] === 6) {
                qspGoto(s, 'masseuse_work', '5_pre');
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterFastShift(s: GameState, scene: SceneBuilder): void {
  if (((s as any).salon ?? 0)?.['work_minutes'] >= 235) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLastClient(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).job_rank ?? 0)?.['city_salon_masseuse'] === 1) {
      ((s as any).masseuse_shift = (s as any).masseuse_shift ?? {})['mass_count'] = ((s as any).masseuse_shift['mass_count'] ?? 0) + (1);
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enter1Stats(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).job_rank ?? 0)?.['city_salon_masseuse'] === 2) {
        if (((s as any).masseuse ?? 0)?.['client_request'] <= 7) {
          ((s as any).salon = (s as any).salon ?? {})['nude_mass_count'] = ((s as any).salon['nude_mass_count'] ?? 0) + (1);
        }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enter1Stats(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (((s as any).job_rank ?? 0)?.['city_salon_masseuse'] === 3) {
          if (((s as any).masseuse ?? 0)?.['client_request'] >= 11) {
            ((s as any).masseuse_shift = (s as any).masseuse_shift ?? {})['mass_count'] = ((s as any).masseuse_shift['mass_count'] ?? 0) + (1);
            qspGoto(s, 'masseuse_work', '1_stats');
          } else {
            if (((s as any).masseuse ?? 0)?.['client_request'] >= 7) {
              ((s as any).salon = (s as any).salon ?? {})['nude_mass_count'] = ((s as any).salon['nude_mass_count'] ?? 0) + (1);
              qspGoto(s, 'masseuse_work', '1_stats');
            } else {
              qspGoto(s, 'masseuse_work', '3_pre');
            }
          }
        } else {
          if (((s as any).job_rank ?? 0)?.['city_salon_masseuse'] === 4) {
            if (((s as any).masseuse ?? 0)?.['client_request'] >= 12) {
              qspGoto(s, 'masseuse_work', '1_pre');
            } else {
              if (((s as any).masseuse ?? 0)?.['client_request'] >= 10) {
                qspGoto(s, 'masseuse_work', '2_pre');
              } else {
                if (((s as any).masseuse ?? 0)?.['client_request'] >= 8) {
                  qspGoto(s, 'masseuse_work', '3_pre');
                } else {
                  qspGoto(s, 'masseuse_work', '4_pre');
                }
              }
            }
          } else {
            if (((s as any).job_rank ?? 0)?.['city_salon_masseuse'] === 5) {
              if (((s as any).masseuse ?? 0)?.['client_request'] === 12) {
                qspGoto(s, 'masseuse_work', '2_pre');
              } else {
                if (((s as any).masseuse ?? 0)?.['client_request'] === 11) {
                  qspGoto(s, 'masseuse_work', '3_pre');
                } else {
                  if (((s as any).masseuse ?? 0)?.['client_request'] === 10) {
                    qspGoto(s, 'masseuse_work', '4_pre');
                  } else {
                    qspGoto(s, 'masseuse_work', '5_pre');
                  }
                }
              }
            } else {
              if (((s as any).job_rank ?? 0)?.['city_salon_masseuse'] === 6) {
                qspGoto(s, 'masseuse_work', '5_pre');
              }
            }
          }
        }
      }
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBegin(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enter1Stats(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal_oneline', 'massage_give', 30, 'no_orgasm_msg');
  ((s as any).salon = (s as any).salon ?? {})['work_minutes'] = ((s as any).salon['work_minutes'] ?? 0) + (30);
  if ((Math.floor(Math.random() * 3) + 0) === 2) {
    ((s as any).massage = (s as any).massage ?? {})['client_tip'] = (Math.floor(Math.random() * 201) + 0);
    ((s as any).massage = (s as any).massage ?? {})['shift_tips'] = ((s as any).massage['shift_tips'] ?? 0) + (((s as any).massage ?? 0)?.['client_tip']);
  }
  // TODO-QSP: end
  scene.build();
}

function enter3Stats(s: GameState, scene: SceneBuilder): void {
  ((s as any).salon = (s as any).salon ?? {})['work_minutes'] = ((s as any).salon['work_minutes'] ?? 0) + (30);
  if (((s as any).masseuse ?? 0)?.['client_type'] > 0) {
    qspCall(s, 'arousal_oneline', 'massage_give', 15, 'no_orgasm_msg', '', 'prostitution');
  }
  qspCall(s, 'arousal_oneline', 'hj', ((s as any).masseuse_time_temp ?? 0), 'no_orgasm_msg', '', 'prostitution');
  if ((Math.floor(Math.random() * 3) + 0) === 2) {
    ((s as any).massage = (s as any).massage ?? {})['client_tip'] = (Math.floor(Math.random() * 201) + 0);
    ((s as any).massage = (s as any).massage ?? {})['shift_tips'] = ((s as any).massage['shift_tips'] ?? 0) + (((s as any).massage ?? 0)?.['client_tip']);
  }
  // TODO-QSP: end
  scene.build();
}

function enter4Stats(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal_oneline', 'massage_give', 30, 'no_orgasm_msg', '', 'prostitution');
  ((s as any).salon = (s as any).salon ?? {})['work_minutes'] = ((s as any).salon['work_minutes'] ?? 0) + (30);
  if ((Math.floor(Math.random() * 3) + 0) === 2) {
    ((s as any).massage = (s as any).massage ?? {})['client_tip'] = (Math.floor(Math.random() * 201) + 0);
    ((s as any).massage = (s as any).massage ?? {})['shift_tips'] = ((s as any).massage['shift_tips'] ?? 0) + (((s as any).massage ?? 0)?.['client_tip']);
  }
  // TODO-QSP: end
  scene.build();
}

function enter5Stats(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal_oneline', 'massage_give', 30, 'no_orgasm_msg', '', 'prostitution');
  ((s as any).salon = (s as any).salon ?? {})['work_minutes'] = ((s as any).salon['work_minutes'] ?? 0) + (30);
  if ((Math.floor(Math.random() * 3) + 0) === 2) {
    ((s as any).massage = (s as any).massage ?? {})['client_tip'] = (Math.floor(Math.random() * 201) + 0);
    ((s as any).massage = (s as any).massage ?? {})['shift_tips'] = ((s as any).massage['shift_tips'] ?? 0) + (((s as any).massage ?? 0)?.['client_tip']);
  }
  // TODO-QSP: end
  scene.build();
}

function enterNormalEnd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal_oneline', 'massage_give', 15, 'no_orgasm_msg');
  ((s as any).salon = (s as any).salon ?? {})['work_minutes'] = ((s as any).salon['work_minutes'] ?? 0) + (15);
  qspCall(s, 'stat', '');
  if (((s as any).salon ?? 0)?.['work_minutes'] >= 235) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLastClient(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPrepareNextMenu(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enter1Pre(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/salon/work/room.jpg');
  scene.text('You hear a buzz on the intercom and the receptionist\'s voice sound.');
  // TODO-QSP: dynamic text: "<<$pcs_firstname>>, you have a customer who has requested a <b>body massage</b>...
  scene.text(`"${((s as any).pcs_firstname ?? '')}, you have a customer who has requested a <b>body massage</b>, maximum of 30 minutes."`);
  scene.text('As soon as she\'s done speaking, the door opens and a man walks in.');
  scene.text('"Hello sir, if you\'d like to undress and lay on the table we can begin. You can place your clothes in the basket in the corner and there is a towel for you to place over your hips, just tell me when you\'re ready."');
  scene.text('He nods at you and you turn your back to face the corner, listening to the sound of clothes rustling, followed by the creaking of the table, and then a brief moment of silence. "I\'m ready."');
  scene.text('Nodding once, you turn and step over to the table.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Begin the massage', goto: ['masseuse_work', '1'] },
  ]);
  scene.build();
}

function enter1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/salon/work/normalchest.jpg');
  qspCall(s, 'arousal_oneline', 'massage_give', 15, 'no_orgasm_msg');
  ((s as any).salon = (s as any).salon ?? {})['work_minutes'] = ((s as any).salon['work_minutes'] ?? 0) + (15);
  qspCall(s, 'stat', '');
  scene.text('You oil up the client\'s body and begin kneading it with your hands, working through his muscles and loosening them up.');
  if ((Math.floor(Math.random() * 3) + 1) === 3) {
    scene.text('While you do, you can\'t help but glance at the small towel covering his hips when you can see something hardening and shifting beneath it.');
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      scene.actions([
        { label: 'Ignore it', handler: (st: GameState) => {
    qspCall(st, 'arousal_oneline', 'massage_give', 15, 'no_orgasm_msg');
    ((st as any).salon = (st as any).salon ?? {})['work_minutes'] = ((st as any).salon['work_minutes'] ?? 0) + (15);
    scene.text('Staying professional, you ignore his arousal and continue with the massage as if you didn\'t notice. Once his time is up, he gets dressed and thanks you for the massage before leaving.');
    if ((Math.floor(Math.random() * 3) + 0) === 2) {
      ((st as any).massage = (st as any).massage ?? {})['client_tip'] = (Math.floor(Math.random() * 201) + 0);
      ((st as any).massage = (st as any).massage ?? {})['shift_tips'] = ((st as any).massage['shift_tips'] ?? 0) + (((st as any).massage ?? 0)?.['client_tip']);
      // TODO-QSP: dynamic text: Looking back to the table, you see he left a tip of <<$func(''money'', ''string_...
      scene.text(`Looking back to the table, you see he left a tip of ${qspFunc(s, 'money', 'string_profit', ((st as any).massage ?? 0)?.['client_tip'] ?? '')} for you on the table.`);
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNormalEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        { label: 'Slip your hand under the towel and jerk him off', goto: ['masseuse_work', '1.handjob1'] },
      ]);
    } else {
      scene.text('The client smiles at you when he sees you spot at his growing erection.');
      scene.text('"Hey girlie, why don\'t you give me a massage down there too? It\'s <i>real</i> stiff. I could really use something to loosen it up."');
      scene.actions([
        { label: 'No', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/normalchest.jpg');
    if (((st as any).job_rank ?? 0)?.['city_salon_masseuse'] < 3) {
      scene.text('"What? No way! If you wanted that you should have hired one of the other girls."');
    } else {
      scene.text('"If you wanted that then you should have paid for it," you say sternly.');
    }
    scene.text('"Didn\'t know I wanted it till I saw your pretty face," he smirks. "You sure? I\'ll give you a nice little tip afterwards."');
    scene.actions([
      { label: 'Still no', handler: (st: GameState) => {
    scene.text('"Ugh. Still no."');
    // TODO-QSP: dynamic text: "Okay, how about you just give me a peek of what''s underneath that robe of your...
    scene.text(`"Okay, how about you just give me a peek of what's underneath that robe of yours?" he says, eyeing your thighs beneath the hem of your robe. "You don't have to do anything else, just take off the robe. I'll give you ${qspFunc(s, 'money', 'string_profit', 200)}. Just... slip off your robe..."`);
    scene.actions([
      { label: 'Still no!', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/normalback.jpg');
    if (((st as any).job_rank ?? 0)?.['city_salon_masseuse'] === 1) {
      scene.text('"No! Why won\'t you take that for an answer?! I\'m not a whore! Keep this up I\'ll call the manager and you\'re getting kicked out. <i>No refund.</i>"');
    } else {
      scene.text('"No! I told you, if you wanted that then you should have paid for it! Keep this up I\'ll call the manager and you\'re getting kicked out. <i>No refund.</i>"');
    }
    scene.text('"Fine, fine," he grumbles and flips over so you can do his back, staying quiet for the rest of the massage. When you\'re done, he gets dressed and quickly leaves.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNormalEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'I suppose...', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/normalchest.jpg');
    // TODO-QSP: dynamic text: "<<$func(''money'', ''string_profit'', 200)>>?" You chew on your lip for a momen...
    scene.text(`"${qspFunc(s, 'money', 'string_profit', 200)}?" You chew on your lip for a moment considering. "I suppose... as long as I'm only taking off the robe... But nothing else! Okay?"`);
    scene.text('"Sure thing sweetheart," he grins back at you. "Now let\'s see that body."');
    scene.actions([
      { label: 'Undress', goto: ['masseuse_work', '1.naked'] },
    ]);
  } },
    ]);
  } },
      { label: 'Well...', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/normalchest.jpg');
    scene.text('<i>Well...</i> you think to yourself. <i>For a little money, I guess I could just...</i>');
    scene.text('"I suppose I could..." you say as you slip your hand underneath his towel.');
    scene.actions([
      { label: 'Jerk him off', goto: ['masseuse_work', '1.handjob2'] },
    ]);
  } },
    ]);
  } },
        { label: 'Slide your hand down', goto: ['masseuse_work', '1.handjob3'] },
        { label: 'Do I get a tip?', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/normalchest.jpg');
    scene.text('"That depends," you say. "Do I get a tip in return?"');
    scene.text('His smile falters for a brief moment. "Of course! A girl deserves a little something for going the extra mile for her customers."');
    scene.actions([
      { label: 'Too bad', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/normalchest.jpg');
    scene.text('"Well, too bad. That\'s not what I\'m here for. Now flip over, it\'s time to do your back."');
    scene.text('He blinks in surprise but otherwise complies.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/normalback.jpg');
    scene.text('Turning him over, you massage his back while he stays quiet for the rest of the session. When you\'re done, he gets dressed quickly and leaves.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNormalEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
      { label: 'Jerk him off', goto: ['masseuse_work', '1.handjob1'] },
    ]);
  } },
      ]);
    }
  } else {
    scene.text('Once his time is up, he gets dressed and thanks you for the massage before leaving.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNormalEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enter1_handjob1(s: GameState, scene: SceneBuilder): void {
  ((s as any).salon = (s as any).salon ?? {})['hj_count'] = ((s as any).salon['hj_count'] ?? 0) + (1);
  qspCall(s, 'arousal_oneline', 'hj', ((s as any).masseuse_time_temp ?? 0), '', 'prostitution');
  ((s as any).salon = (s as any).salon ?? {})['work_minutes'] = ((s as any).salon['work_minutes'] ?? 0) + (((s as any).masseuse_time_temp ?? 0));
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/massage/hj1.jpg');
  scene.text('Sliding your hand down beneath the towel, you draw out his raging erection and begin oiling it up with your hand while continuing to massage the rest of his body with your other hand. Just like any other massage, you vary everything. Sometimes you grip him hard and jerk out long, drawn out strokes. Sometimes you softly pull on his cock with quick and rapid tugs. But always you keep an eye on his reactions.');
  scene.text('After a short time, you see him begin to tense up and you know he\'s about to cum.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish him off', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'hands', ((st as any).npcID ?? 0));
    qspCall(st, 'stat', '');
    scene.text('Making sure to draw the full length of his shaft, you squeeze the customer\'s dick with a fair amount of pressure and begin milking him for all he\'s got. White jets of cum spurt from his tip and land on his stomach, the rest of it coating your hands. You smile at his blissful expression, watching ever moment of his orgasm.');
    scene.actions([
      { label: 'Clean up', handler: (st: GameState) => {
    (st as any).cumspclnt = 9;
    qspCall(st, 'cum_cleanup', '');
    ((st as any).massage = (st as any).massage ?? {})['sex_tips'] = ((st as any).massage['sex_tips'] ?? 0) + (300);
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/mall/salon/work/room.jpg');
    scene.text('The "massage" now over, you wipe off the oil and cum on his body and allow him to get dressed while you rinse your hands.');
    scene.text('"That was a great massage, you\'ve got talented hands," he smirks.');
    // TODO-QSP: dynamic text: "Here''s a little something extra," he says, handing you <<$func(''money'', ''st...
    scene.text(`"Here's a little something extra," he says, handing you ${qspFunc(s, 'money', 'string_profit', 300)}. "Maybe I'll stop by again sometime for your services. Maybe you'll even offer something a little more."`);
    if (((st as any).salon ?? 0)?.['work_minutes'] >= 235) {
      scene.text('With a wink, he leaves. Before doing anything else, you take a look at the clock to see if you have time for another client.');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLastClient(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      scene.text('With a wink, he leaves. Slipping your well earned tip into your pocket, you begin changing the sheets to prepare for your next client.');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPrepareNextMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter1_handjob2(s: GameState, scene: SceneBuilder): void {
  ((s as any).salon = (s as any).salon ?? {})['hj_count'] = ((s as any).salon['hj_count'] ?? 0) + (1);
  qspCall(s, 'arousal_oneline', 'hj', ((s as any).masseuse_time_temp ?? 0), '', 'prostitution');
  ((s as any).salon = (s as any).salon ?? {})['work_minutes'] = ((s as any).salon['work_minutes'] ?? 0) + (((s as any).masseuse_time_temp ?? 0));
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/massage/hj1.jpg');
  scene.text('Grabbing hold of of the client\'s stiff cock, you tentatively draw it out from underneath the towel and begin to work it with your hand. He smiles at you as you begin to put more effort into it, oiling up his shaft, pumping up and down on it in smooth motions with solid pressure.');
  scene.text('You continue to jerk him for several minutes until you feel him tense up and you think he\'s about to cum.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish him off', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'hands', ((st as any).npcID ?? 0));
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/massage/hj_cum.mp4');
    scene.text('Making sure to draw the full length of his shaft, you continue to pump his cock as white jets of cum spurt from the tip and land on his stomach, the rest of it coating your hands.');
    scene.actions([
      { label: 'Clean up', handler: (st: GameState) => {
    (st as any).cumspclnt = 9;
    qspCall(st, 'cum_cleanup', '');
    ((st as any).massage = (st as any).massage ?? {})['sex_tips'] = ((st as any).massage['sex_tips'] ?? 0) + (300);
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/mall/salon/work/room.jpg');
    scene.text('The "massage" now over, you wipe off the oil and cum on his body and allow him to get dressed while you rinse your hands.');
    scene.text('"That was a great massage, you\'ve got talented hands," he smirks.');
    // TODO-QSP: dynamic text: "Your tip, as promised," he says, handing you <<$func(''money'', ''string_profit...
    scene.text(`"Your tip, as promised," he says, handing you ${qspFunc(s, 'money', 'string_profit', 300)}. "Maybe I'll stop by again sometime for your services. Maybe even get a <i>full body</i> service from you."`);
    if (((st as any).salon ?? 0)?.['work_minutes'] >= 235) {
      scene.text('With a wink, he leaves. Before doing anything else, you take a look at the clock to see if you have time for another client.');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLastClient(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      scene.text('With a wink, he leaves. Slipping your well earned tip into your pocket, you begin changing the sheets to prepare for your next client.');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPrepareNextMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter1_handjob3(s: GameState, scene: SceneBuilder): void {
  ((s as any).salon = (s as any).salon ?? {})['hj_count'] = ((s as any).salon['hj_count'] ?? 0) + (1);
  qspCall(s, 'arousal_oneline', 'hj', ((s as any).masseuse_time_temp ?? 0), '', 'prostitution');
  ((s as any).salon = (s as any).salon ?? {})['work_minutes'] = ((s as any).salon['work_minutes'] ?? 0) + (((s as any).masseuse_time_temp ?? 0));
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/massage/hj1.jpg');
  scene.text('You give him a dirty grin and begin to run your hand down his stomach to reach under the towel and take hold of his cock. Taking hold of it in a firm grasp, you draw it out and start working it. Nice long strokes followed by short pumps at the base before teasing the tip with just your index finger and thumb. He moans under your touch and you maintain eye contact with him the entire time until you\'re sure he\'s just about to burst.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish him off', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'hands', ((st as any).npcID ?? 0));
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/massage/hj_cum.mp4');
    scene.text('Still staring into his eyes, watch him orgasm, feeling his cock pulse under your fingers and something viscous liquid that definitely isn\'t oil begin to slide down your hand. You keep jerking him off, making sure you got him for all he\'s worth until you\'re sure nothing is left.');
    if (((st as any).trait_vars ?? 0)?.['cumeater'] === 1) {
      scene.actions([
        { label: 'Lick your hand off', handler: (st: GameState) => {
    (st as any).cumspclnt = 9;
    qspCall(st, 'cum_cleanup', '');
    scene.img('images/locations/city/citycenter/mall/salon/work/room.jpg');
    scene.text('Still watching the client, you raise your hand to your lips and shove your fingers inside your mouth. You taste the bitter flavor of semen mixed with the massage oils and suck every drop of the former off each of your digits and gulp it all down. Smiling at him, you take a towel and begin to wipe him down, cleaning his body of his own cum and the rest of the oil before allowing him to get dressed.');
    if (((st as any).salon ?? 0)?.['work_minutes'] >= 235) {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLastClient(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPrepareNext(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Reach for a towel', handler: (st: GameState) => {
    (st as any).cumspclnt = 9;
    qspCall(st, 'cum_cleanup', '');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/mall/salon/work/room.jpg');
    scene.text('The "massage" now over, you take a towel and wipe off the oil and cum on his body and allow him to get dressed while you rinse your hands.');
    scene.text('"Oh yeah, I feel nice and loose now," he smirks.');
    if ((Math.floor(Math.random() * 2) + 0) === 1) {
      scene.text('"My pleasure," you murmur. "A good <b>job</b> done is it\'s own reward."');
      scene.text('You smile innocently at your added emphasis.');
      scene.text('"Damn..." he breathes. "I gotta come back for you..."');
      if (((st as any).salon ?? 0)?.['work_minutes'] >= 235) {
        scene.text('With that, he leaves. Before doing anything else, you take a look at the clock to see if you have time for another client.');
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLastClient(st, scene); (st as any).locArgs = __savedLocArgs; }
      } else {
        scene.text('With that, he leaves and you begin changing the sheets to prepare for your next client.');
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPrepareNextMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
      }
    } else {
      ((st as any).massage = (st as any).massage ?? {})['sex_tips'] = ((st as any).massage['sex_tips'] ?? 0) + (300);
      // TODO-QSP: dynamic text: "Here''s a little something extra," he says, handing you <<$func(''money'', ''st...
      scene.text(`"Here's a little something extra," he says, handing you ${qspFunc(s, 'money', 'string_profit', 300)}. "For doing such a good job."`);
      scene.text('"My pleasure," you murmur. "A good <b>job</b> done is it\'s own reward."');
      scene.text('You smile innocently at your added emphasis.');
      scene.text('"Damn..." he breathes. "I gotta come back for you..."');
      if (((st as any).salon ?? 0)?.['work_minutes'] >= 235) {
        scene.text('With that, he leaves. Before doing anything else, you take a look at the clock to see if you have time for another client.');
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLastClient(st, scene); (st as any).locArgs = __savedLocArgs; }
      } else {
        scene.text('With that, he leaves. Slipping your well earned tip into your pocket, you begin changing the sheets to prepare for your next client.');
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPrepareNextMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
      }
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter1_naked(s: GameState, scene: SceneBuilder): void {
  (s as any).robe = 0;
  ((s as any).salon = (s as any).salon ?? {})['nude_mass_count'] = ((s as any).salon['nude_mass_count'] ?? 0) + (1);
  qspCall(s, 'arousal_oneline', 'massage_give', ((s as any).masseuse_time_temp ?? 0));
  ((s as any).salon = (s as any).salon ?? {})['work_minutes'] = ((s as any).salon['work_minutes'] ?? 0) + (((s as any).masseuse_time_temp ?? 0));
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/mall/salon/work/naked.jpg');
  if (((s as any).pcs_inhib ?? 0) < 30) {
    scene.text('You slowly untie the belt of your robe and pull it open revealing your breasts and pussy. Seeing the client leer at your body causes you to blush furiously, but you ignore it as best you can and slip the robe from your shoulders to place it on a nearby table to continue the massage.');
  } else {
    scene.text('You untie the belt of your robe and pull it open revealing your breasts and pussy. Ignoring the client\'s leer, you place the robe on a nearby table and continue with the massage.');
  }
  // TODO-QSP: dynamic text: The massage continues with you kneading his body completely naked, though he kee...
  scene.text(`The massage continues with you kneading his body completely naked, though he keeps the towel over his raging erection at your request. Soon enough, the session is over and he gets dressed, leaving ${qspFunc(s, 'money', 'string_profit', 200)} on the table as promised.`);
  scene.text('"Thanks for the eye candy," he says with a wink before leaving.');
  ((s as any).massage = (s as any).massage ?? {})['sex_tips'] = ((s as any).massage['sex_tips'] ?? 0) + (200);
  if (((s as any).salon ?? 0)?.['work_minutes'] >= 235) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLastClient(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPrepareNext(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enter2Pre(s: GameState, scene: SceneBuilder): void {
  (s as any).robe = 0;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/mall/salon/work/room.jpg');
  scene.text('You hear a buzz on the intercom and the receptionist\'s voice sound.');
  // TODO-QSP: dynamic text: "<<$pcs_firstname>>, you have a customer who has requested a <b>massage with a v...
  scene.text(`"${((s as any).pcs_firstname ?? '')}, you have a customer who has requested a <b>massage with a view</b>, maximum of 30 minutes."`);
  scene.text('As soon as she\'s done speaking, the door opens and a man walks in.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    ((st as any).salon = (st as any).salon ?? {})['nude_mass_count'] = ((st as any).salon['nude_mass_count'] ?? 0) + (1);
    scene.img('images/locations/city/citycenter/mall/salon/work/undress.mp4');
    if (((st as any).pcs_inhib ?? 0) > 40) {
      scene.text('"Hello sir, if you\'d like to undress and lay on the table we can begin," you say, untying the belt around your robe and pulling it open to reveal your naked body underneath. Shrugging out of the robe completely, you continue. "You can place your clothes in the basket in the corner." He finishes undressing eagerly and lays down on the table. As you step over to him, his gaze roams your body and in return you can see he\'s rock-hard.');
    } else {
      scene.text('"Hello sir, if you\'d like to undress and lay on the table we can begin," you say, untying the belt around your robe and pulling it open to reveal your naked body underneath. Your face blazes with heat and embarrassment, but you stay as professional as possible, shrugging out of the robe completely and continuing. "You can place your clothes in the basket in the corner." He finishes undressing eagerly and lays down on the table. As you step over to him, his gaze roams your body and in return you can see he\'s rock-hard causing your blush to somehow intensify.');
    }
    scene.actions([
      { label: 'Begin the massage', goto: ['masseuse_work', '2'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal_oneline', 'massage_give', 30);
  ((s as any).salon = (s as any).salon ?? {})['work_minutes'] = ((s as any).salon['work_minutes'] ?? 0) + (30);
  (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 5) + 1));
  qspCall(s, 'stat', '');
  scene.img(`images/locations/city/citycenter/mall/salon/work/nude_massage/${(Math.floor(Math.random() * 5) + 1)}.jpg`);
  if (((s as any).pcs_inhib ?? 0) > 40) {
    scene.text('You oil up the client and begin kneading it with your hands, working through his muscles and loosening them up. He stares appreciatively at your body throughout the whole process. Occasionally, you lean down to get the right angles to work his body and your breasts brush up against him, though you\'re fairly certain he doesn\'t mind.');
  } else {
    scene.text('You oil up the client and begin kneading it with your hands, working through his muscles and loosening them up. He stares appreciatively at your body throughout the whole process. Occasionally, you lean down to get the right angles to work his body and your breasts brush up against him. And though you\'re fairly certain he doesn\'t mind, it drives you wild with embarrassment.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/room.jpg');
    if (((st as any).pcs_inhib ?? 0) > 40) {
      scene.text('After 30 minutes, you announce his time is up and quickly wipe him down, cleaning his body of leftover oils. You wait for him to put his clothes back on before giving a short bow, saying, "Thank you for your patronage sir," as he exits the room.');
    } else {
      scene.text('After 30 minutes, you announce his time is up and quickly wipe him down, cleaning his body of leftover oils. You wait for him to put his clothes back on before giving a short bow, with a mighty blush, and say, "Thank you for your patronage sir," as he exits the room.');
    }
    if ((Math.floor(Math.random() * 3) + 0) === 2) {
      ((st as any).massage = (st as any).massage ?? {})['client_tip'] = (Math.floor(Math.random() * 301) + 0);
      ((st as any).massage = (st as any).massage ?? {})['shift_tips'] = ((st as any).massage['shift_tips'] ?? 0) + (((st as any).massage ?? 0)?.['client_tip']);
      // TODO-QSP: dynamic text: Looking back to the table, you see he left a tip of <<$func(''money'', ''string_...
      scene.text(`Looking back to the table, you see he left a tip of ${qspFunc(s, 'money', 'string_profit', ((st as any).massage ?? 0)?.['client_tip'] ?? '')} for you on the table.`);
    }
    (st as any).robe = 1;
    scene.text('Only once he\'s left do you reach for your robe and take a look at the clock.');
    if (((st as any).salon ?? 0)?.['work_minutes'] >= 235) {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLastClient(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPrepareNext(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
  ]);
  scene.build();
}

function enter3Pre(s: GameState, scene: SceneBuilder): void {
  (s as any).robe = 0;
  scene.img('images/locations/city/citycenter/mall/salon/work/room.jpg');
  scene.text('You hear a buzz on the intercom and the receptionist\'s voice sound.');
  // TODO-QSP: dynamic text: "<<$pcs_firstname>>, you have a customer who has requested an <b>old fashioned m...
  scene.text(`"${((s as any).pcs_firstname ?? '')}, you have a customer who has requested an <b>old fashioned massage</b>, maximum of 30 minutes."`);
  scene.text('As soon as she\'s done speaking, the door opens and a man walks in.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/undress.mp4');
    scene.text('"Hello sir, if you\'d like to undress and lay on the table we can begin. You can place your clothes in the basket in the corner." You undo the belt on your robe and pull it open to reveal your naked body underneath. "We can also begin with a body massage or just skip straight to the handjob if you would prefer that instead."');
    if (((st as any).masseuse ?? 0)?.['client_type'] === 0) {
      scene.text('"Yeah, let\'s do that," the client grins as he drops his pants, revealing an impressive erection."');
      scene.text('"Whatever you like sir," you say, shrugging out of the robe completely and waiting by the table while he removes the rest of his clothing.');
      scene.actions([
        { label: 'Jerk him off', goto: ['masseuse_work', '3.1'] },
      ]);
    } else {
      scene.text('"I think I\'d like to start by relaxing with the massage."');
      scene.text('"Whatever you like sir," you say, shrugging out of the robe completely and waiting by the table while he removes the rest of his clothing.');
      scene.actions([
        { label: 'Begin the massage', goto: ['masseuse_work', '3'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enter3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal_oneline', 'massage_give', 15, 'no_orgasm_msg', '', 'prostitution');
  ((s as any).salon = (s as any).salon ?? {})['work_minutes'] = ((s as any).salon['work_minutes'] ?? 0) + (15);
  qspCall(s, 'stat', '');
  scene.img(`images/locations/city/citycenter/mall/salon/work/nude_massage/${(Math.floor(Math.random() * 5) + 1)}.jpg`);
  scene.text('You oil up the client and begin kneading it with your hands, working through his muscles and loosening them up. He stares appreciatively at your body throughout the whole process. Occasionally, you lean down to get the right angles to work his body and your breasts brush up against him, though you\'re fairly certain he doesn\'t mind.');
  scene.text('After about half the session has gone by, the client seems to be in a pleasant stupor. His breathing is deep and relaxed and almost seems to be at the edge of sleep and you decide this is the optimal time to get to the main course. Snaking your hand down his body, you gently wrap your hand around his member. The client grunts and gives a faint smile, his cock quickly standing to attention at your touch as you begin to work it.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get to work', goto: ['masseuse_work', '3.1'] },
  ]);
  scene.build();
}

function enter3_1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal_oneline', 'hj', ((s as any).masseuse_time_temp ?? 0), '', 'prostitution');
  ((s as any).salon = (s as any).salon ?? {})['work_minutes'] = ((s as any).salon['work_minutes'] ?? 0) + (((s as any).masseuse_time_temp ?? 0));
  ((s as any).salon = (s as any).salon ?? {})['hj_count'] = ((s as any).salon['hj_count'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/massage/hj2.jpg');
  scene.text('After giving it a quick oil, you take the client\'s cock in both hands and start working it, experimenting with what he might like best. Long drawn out strokes with heavy pressure? Fast jerking motions with medium pressure? Does he like barely any pressure? Just the feeling of your hand gliding up and down his glistening member? As you experiment, you keep an eye on his reactions, checking to see what get him writhing in a good way.');
  scene.text('Soon enough, you think you\'ve found his ticket and within minutes of that you feel his cock begin to pulse.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish him off', handler: (st: GameState) => {
    if (((st as any).masseuse ?? 0)?.['client_type'] === 0) {
      qspCall(st, 'cum_call', 'hands', ((st as any).npcID ?? 0));
      qspCall(st, 'stat', '');
      scene.img('images/shared/sex/massage/hj_cum.mp4');
      scene.text('Maintaining the same motions you did before, you don\'t let up for a moment until you see cum gush from his cock. Soon his spray turns into a mere dribble and it does so all over your hands.');
      scene.text('You smile at him. "Did you enjoy your massage sir?"');
      scene.text('"Oh most definitely," he smiles back. "You\'ve got magic hands."');
      scene.text('"That\'s why they hired me sir! Magic hands."');
      scene.text('"Well I\'m ready to see the other kind of magic too. I think I\'m relaxed enough to fully enjoy the massage now."');
      scene.text('"Of course sir. Just let me clean my hands."');
      scene.actions([
        { label: 'Get a towel', handler: (st: GameState) => {
    (st as any).cumspclnt = 9;
    qspCall(st, 'cum_cleanup', '');
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/massage/hj_cum.mp4');
    scene.text('Reaching to the side, you grab a towel to wipe your hands clean as well as the client\'s cum that landed on his own body. With that done, you toss it into a laundry bin and get out the oil again to begin the massage in earnest.');
    scene.actions([
      { label: 'Begin the massage', goto: ['masseuse_work', '3.2'] },
    ]);
  } },
        { label: 'Lick them clean', handler: (st: GameState) => {
    (st as any).cumspclnt = 9;
    ((st as any).stat = (st as any).stat ?? {})['swallow'] = ((st as any).stat['swallow'] ?? 0) + (1);
    qspCall(st, 'cum_cleanup', '');
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/massage/hj_cum.mp4');
    scene.text('Still smiling at the client, you raise your hand to your lips stick your tongue out to give your hand a thorough tongue bath. You taste the bitter flavor of semen mixed with the massage oils and your tongue picks up every drop of the white liquid before a quick swallow followed by a beaming smile. Only after that, you take a towel and begin to wipe him down, cleaning his body of his own cum before reaching for the oil to begin the massage in earnest.');
    scene.actions([
      { label: 'Begin the massage', goto: ['masseuse_work', '3.2'] },
    ]);
  } },
      ]);
    } else {
      qspCall(st, 'cum_call', 'hands', ((st as any).npcID ?? 0));
      qspCall(st, 'cum_call', 'breasts', ((st as any).npcID ?? 0));
      qspCall(st, 'stat', '');
      scene.img('images/shared/sex/massage/hj_cum.mp4');
      scene.text('Maintaining the same motions you did before, you don\'t let up for a moment until you see cum gush from his cock. Just cause you think he\'d like it, you angle it towards yourself and let it spatter all over your breasts. Soon his spray turns into a mere dribble and it does so all over your hands.');
      scene.text('You smile at him. "Did you enjoy your massage sir?"');
      scene.text('"Oh most definitely," he smiles back. "You\'ve got magic hands."');
      scene.text('"That\'s why they hired me sir! Magic hands."');
      scene.actions([
        { label: 'Finish up', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/room.jpg');
    scene.text('Taking a towel, you quickly wipe him down, ensuring his body is cum free. Once that is done, you allow him to get up and get dressed while you stand to the side, his cum still spattering your hands and tits as an after service eye candy for him. Once dressed, you give him a short bow, saying, "Thank you for your patronage sir," as he exits the room.');
    if ((Math.floor(Math.random() * 3) + 0) === 2) {
      ((st as any).massage = (st as any).massage ?? {})['client_tip'] = (Math.floor(Math.random() * 301) + 0);
      ((st as any).massage = (st as any).massage ?? {})['sex_tips'] = ((st as any).massage['sex_tips'] ?? 0) + (((st as any).massage ?? 0)?.['client_tip']);
      // TODO-QSP: dynamic text: Looking back to the table, you see he left a tip of <<$func(''money'', ''string_...
      scene.text(`Looking back to the table, you see he left a tip of ${qspFunc(s, 'money', 'string_profit', ((st as any).massage ?? 0)?.['client_tip'] ?? '')} for you on the table.`);
    }
    scene.text('Only once he\'s left do you look down at the cum on your body. You ought to clean up for your next customer. If you have one that is, you think before taking a look at the clock.');
    if (((st as any).salon ?? 0)?.['work_minutes'] >= 235) {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLastClient(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPrepareNext(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enter3_2(s: GameState, scene: SceneBuilder): void {
  ((s as any).salon = (s as any).salon ?? {})['work_minutes'] = ((s as any).salon['work_minutes'] ?? 0) + ((30 - ((s as any).masseuse_time_temp ?? 0)));
  qspCall(s, 'arousal_oneline', 'massage_give', (30 - ((s as any).masseuse_time_temp ?? 0)));
  qspCall(s, 'stat', '');
  scene.img(`images/locations/city/citycenter/mall/salon/work/nude_massage/${(Math.floor(Math.random() * 5) + 1)}.jpg`);
  scene.text('You oil up the client and begin kneading it with your hands, working through his muscles and loosening them up. He stares appreciatively at your body throughout the whole process. Occasionally, you lean down to get the right angles to work his body and your breasts brush up against him, though you\'re fairly certain he doesn\'t mind.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/room.jpg');
    // TODO-QSP: dynamic text: After <<30 - masseuse_time_temp>> minutes, you announce his time is up and quick...
    scene.text(`After ${30 - ((st as any).masseuse_time_temp ?? '')} minutes, you announce his time is up and quickly wipe him down, cleaning his body of leftover oils. You wait for him to put his clothes back on before giving a short bow, saying, "Thank you for your patronage sir," as he exits the room.`);
    (st as any).robe = 1;
    if ((Math.floor(Math.random() * 3) + 0) === 2) {
      ((st as any).massage = (st as any).massage ?? {})['client_tip'] = (Math.floor(Math.random() * 301) + 0);
      ((st as any).massage = (st as any).massage ?? {})['sex_tips'] = ((st as any).massage['sex_tips'] ?? 0) + (((st as any).massage ?? 0)?.['client_tip']);
      // TODO-QSP: dynamic text: Looking back to the table, you see he left a tip of <<$func(''money'', ''string_...
      scene.text(`Looking back to the table, you see he left a tip of ${qspFunc(s, 'money', 'string_profit', ((st as any).massage ?? 0)?.['client_tip'] ?? '')} for you on the table.`);
    }
    if (((st as any).salon ?? 0)?.['work_minutes'] >= 235) {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLastClient(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPrepareNext(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
  ]);
  scene.build();
}

function enter4Pre(s: GameState, scene: SceneBuilder): void {
  (s as any).robe = 0;
  scene.img('images/locations/city/citycenter/mall/salon/work/room.jpg');
  scene.text('You hear a buzz on the intercom and the receptionist\'s voice sound.');
  // TODO-QSP: dynamic text: "<<$pcs_firstname>>, you have a customer who has requested a <b>head massage</b>...
  scene.text(`"${((s as any).pcs_firstname ?? '')}, you have a customer who has requested a <b>head massage</b>, maximum of 30 minutes."`);
  scene.text('As soon as she\'s done speaking, the door opens and a man walks in.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/undress.mp4');
    scene.text('"Hello sir, if you\'d like to undress and lay on the table we can begin. You can place your clothes in the basket in the corner." You undo the belt on your robe and pull it open to reveal your naked body underneath. "We can also begin with a body massage or I can start using my mouth right away if you would prefer that instead."');
    if (((st as any).masseuse ?? 0)?.['client_type'] === 0) {
      scene.text('"I think I\'d like to start by relaxing with the massage."');
      scene.text('"Whatever you like sir," you say, shrugging out of the robe completely and waiting by the table while he removes the rest of his clothing.');
      scene.actions([
        { label: 'Begin the massage', goto: ['masseuse_work', '4'] },
      ]);
    } else {
      if (((st as any).masseuse ?? 0)?.['client_type'] === 1) {
        scene.text('"Yeah, let\'s do that," the client grins as he drops his pants, revealing an impressive erection."');
        scene.text('"Whatever you like sir," you say, shrugging out of the robe completely and waiting by the table while he removes the rest of his clothing.');
        scene.actions([
          { label: 'Blow him', goto: ['masseuse_work', '4.1'] },
        ]);
      } else {
        scene.text('"Yeah, let\'s do that," the client grins as he drops his pants, revealing an impressive erection."');
        scene.text('"Whatever you like sir," you say, shrugging out of the robe completely and waiting by the table while he removes the rest of his clothing.');
        scene.text('"Great. Now get on the table."');
        scene.actions([
          { label: 'Get on the table', goto: ['masseuse_work', '4.2'] },
        ]);
      }
    }
  } },
  ]);
  scene.build();
}

function enter4(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal_oneline', 'massage_give', 15, 'no_orgasm_msg', '', 'prostitution');
  ((s as any).salon = (s as any).salon ?? {})['work_minutes'] = ((s as any).salon['work_minutes'] ?? 0) + (15);
  ((s as any).masseuse = (s as any).masseuse ?? {})['massage_first'] = 1;
  qspCall(s, 'stat', '');
  scene.img(`images/locations/city/citycenter/mall/salon/work/nude_massage/${(Math.floor(Math.random() * 5) + 1)}.jpg`);
  scene.text('You oil up the client and begin kneading it with your hands, working through his muscles and loosening them up. He stares appreciatively at your body throughout the whole process. Occasionally, you lean down to get the right angles to work his body and your breasts brush up against him, though you\'re fairly certain he doesn\'t mind.');
  scene.text('After about half the session has gone by, the client seems to be in a pleasant stupor. His breathing is deep and relaxed and almost seems to be at the edge of sleep and you decide this is the optimal time to get to the main course.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Start blowing him', goto: ['masseuse_work', '4.1'] },
  ]);
  scene.build();
}

function enter4_1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal_oneline', 'bj', ((s as any).masseuse_time_temp ?? 0), '', 'prostitution');
  ((s as any).salon = (s as any).salon ?? {})['bj_count'] = ((s as any).salon['bj_count'] ?? 0) + (1);
  ((s as any).salon = (s as any).salon ?? {})['work_minutes'] = ((s as any).salon['work_minutes'] ?? 0) + (((s as any).masseuse_time_temp ?? 0));
  scene.img('images/shared/sex/massage/bj1.mp4');
  scene.text('Bending down over the table, you run your lips down the client\'s shaft and start sucking him off. You lick lightly at the tip, you take as much of his length as you can, you pull out every trick you have in the book to make him feel good, and it\'s not long until you know he\'s about to cum.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish the job', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).npcID ?? 0));
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/massage/bj1.mp4');
    scene.text('Even as you feel his cum spurt into your mouth, you never stop sucking, going up and down until your mouth is full and nothing else is coming out. Remembering store policy, you gather up every drop and tilt your head back to swallow, giving the client a clean smile afterwards.');
    if (((st as any).masseuse ?? 0)?.['massage_first'] === 1) {
      ((st as any).masseuse = (st as any).masseuse ?? {})['massage_first'] = 0;
      scene.text('"Would you like your massage now sir?"');
      scene.text('"No, that\'s plenty for me. I got what I came for," he grins. "Though I wouldn\'t mind a tongue bath to clean up before I head out."');
      scene.text('"Certainly sir," you say, bending over and thoroughly licking every part of his dick clean.');
    } else {
      scene.text('"Did you enjoy your massage today sir?"');
      scene.text('"I did, you really know how to work a cock."');
      scene.text('"Thank you sir! Let me just clean you up so you can dress." You lean back down and use your tongue to thoroughly clean the remaining fluids from his dick.');
    }
    scene.actions([
      { label: 'Finish the session', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/room.jpg');
    scene.text('Soon after, the client hops off the table and you wait for him to put his clothes back on before giving a short bow, saying, "Thank you for your patronage sir," as he exits the room.');
    (st as any).robe = 1;
    if ((Math.floor(Math.random() * 3) + 0) === 2) {
      ((st as any).massage = (st as any).massage ?? {})['client_tip'] = (Math.floor(Math.random() * 401) + 0);
      ((st as any).massage = (st as any).massage ?? {})['sex_tips'] = ((st as any).massage['sex_tips'] ?? 0) + (((st as any).massage ?? 0)?.['client_tip']);
      // TODO-QSP: dynamic text: Looking back to the table, you see he left a tip of <<$func(''money'', ''string_...
      scene.text(`Looking back to the table, you see he left a tip of ${qspFunc(s, 'money', 'string_profit', ((st as any).massage ?? 0)?.['client_tip'] ?? '')} for you on the table.`);
    }
    if (((st as any).salon ?? 0)?.['work_minutes'] >= 235) {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLastClient(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPrepareNext(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter4_2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal_oneline', 'bj', ((s as any).masseuse_time_temp ?? 0), '', 'prostitution', 'rough');
  ((s as any).salon = (s as any).salon ?? {})['work_minutes'] = ((s as any).salon['work_minutes'] ?? 0) + (((s as any).masseuse_time_temp ?? 0));
  scene.img('images/shared/sex/massage/bj2.mp4');
  scene.text('You do as the client asks and lay down on the table. He pulls you off of it so your shoulders are right at the edge of the table and your head hangs off it. As your head tilts back you see the client\'s cock dangling upside down in front of you before he grabs you by the head and shoves it into your mouth.');
  scene.text('"Mmmrph~!"');
  scene.text('He helps himself to your breasts with his other hand while he roughly throat fucks you. For your part, you do your best to relax yourself and make this as enjoyable for him as possible. It takes a few minutes, but soon enough you reach the finish line.');
  scene.text('"Nnngh! Here it comes!"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Swallow', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).npcID ?? 0));
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/massage/bj2.mp4');
    scene.text('The client\'s cum sprays directly into the back of your throat and you have to force yourself not to cough on instinct before more starts coming out. You swallow it as fast as you can just so it doesn\'t choke you or come out your nose and keep swallowing until nothing else is left for you to swallow. The client gives your breasts one more fondle each before slowly withdrawing himself from your mouth like a sword from a sheath.');
    scene.text('"Ahh, now that was really refreshing," he says, cricking his neck back and forth.');
    scene.text('"Will that be all sir?" you ask, head still hanging off the edge of the table.');
    scene.text('"Yeah, I think so for now. Maybe I\'ll just come back later if I need another fix."');
    scene.text('"As you wish sir."');
    scene.actions([
      { label: 'Finish the session', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/room.jpg');
    scene.text('Righting yourself, you swing your legs off the table and stand, waiting for the client to put his clothes back on. Once he\'s fully dressed, you give a short bow, saying, "Thank you for your patronage sir," as he exits the room.');
    (st as any).robe = 1;
    if ((Math.floor(Math.random() * 3) + 0) === 2) {
      ((st as any).massage = (st as any).massage ?? {})['client_tip'] = (Math.floor(Math.random() * 401) + 0);
      ((st as any).massage = (st as any).massage ?? {})['sex_tips'] = ((st as any).massage['sex_tips'] ?? 0) + (((st as any).massage ?? 0)?.['client_tip']);
      // TODO-QSP: dynamic text: Looking back to the table, you see he left a tip of <<$func(''money'', ''string_...
      scene.text(`Looking back to the table, you see he left a tip of ${qspFunc(s, 'money', 'string_profit', ((st as any).massage ?? 0)?.['client_tip'] ?? '')} for you on the table.`);
    }
    if (((st as any).salon ?? 0)?.['work_minutes'] >= 235) {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLastClient(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPrepareNext(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter5Pre(s: GameState, scene: SceneBuilder): void {
  (s as any).vaginal_slip = 20;
  (s as any).ar_vag_lube = 1;
  (s as any).robe = 0;
  scene.img('images/locations/city/citycenter/mall/salon/work/room.jpg');
  scene.text('You hear a buzz on the intercom and the receptionist\'s voice sound.');
  // TODO-QSP: dynamic text: "<<$pcs_firstname>>, you have a customer who has requested a <b>full body massag...
  scene.text(`"${((s as any).pcs_firstname ?? '')}, you have a customer who has requested a <b>full body massage</b>, maximum of 30 minutes."`);
  scene.text('As soon as she\'s done speaking, the door opens and a man walks in.');
  if (((s as any).pcs_inhib ?? 0) < 40) {
    scene.text('"Hello sir, if you\'d like to undress and we can begin as soon as you\'re ready." You pull off your robe and pump huge globs of lubricant from a bottle into your hands, wiping it across your pussy lips and your entire body. You cheeks go bright pink when he shamelessly watches you finger the lube inside your pussy. "I\'m sure you\'re eager to dive in as quickly as possible."');
  } else {
    scene.text('"Hello sir, if you\'d like to undress and we can begin as soon as you\'re ready." You pull off your robe and pump huge globs of lubricant from a bottle into your hands, wiping it across your pussy lips and your entire body. Something in his pants stands at attention when he sees you finger the lube inside your pussy. "I\'m sure you want to dive in as quickly as possible."');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Fuck the client', handler: (st: GameState) => {
    ((st as any).salon = (st as any).salon ?? {})['fuck_count'] = ((st as any).salon['fuck_count'] ?? 0) + (1);
    qspCall(st, 'cum_call', 'precum', ((st as any).npcID ?? 0));
    qspCall(st, 'arousal_oneline', 'vaginal', (((st as any).masseuse_time_temp ?? 0)+15), '', 'prostitution', 'rough');
    ((st as any).salon = (st as any).salon ?? {})['work_minutes'] = ((st as any).salon['work_minutes'] ?? 0) + ((((st as any).masseuse_time_temp ?? 0)+15));
    qspCall(st, 'stat', '');
    qspGoto(st, 'masseuse_work', '5');
  } },
  ]);
  scene.build();
}

function enter5(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_rand = (Math.floor(Math.random() * 20) + 1);
  if (((s as any).temp_rand ?? 0) <= 7) {
    ((s as any).masseuse = (s as any).masseuse ?? {})['position'] = 'miss';
    scene.img(`images/shared/sex/massage/miss${((s as any).temp_rand ?? '')}.mp4`);
  } else {
    if (((s as any).temp_rand ?? 0) <= 13) {
      ((s as any).masseuse = (s as any).masseuse ?? {})['position'] = 'doggy';
      scene.img(`images/shared/sex/massage/doggy${((s as any).temp_rand ?? '')-7}.mp4`);
    } else {
      if (((s as any).temp_rand ?? 0) === 14) {
        ((s as any).masseuse = (s as any).masseuse ?? {})['position'] = 'doggy';
        scene.img('images/shared/sex/massage/fuck1.mp4');
      } else {
        ((s as any).masseuse = (s as any).masseuse ?? {})['position'] = 'cowgirl';
        scene.img(`images/shared/sex/massage/cowgirl${((s as any).temp_rand ?? '')-14}.mp4`);
      }
    }
  }
  scene.text('You spend the entire session being thoroughly enjoyed by your client, fucking in any and every position he could possibly want you in. The sound of flesh slapping against flesh is deafening, the only other thing being able to be heard is the groan of your voice as you are pounded relentlessly until he cums.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', goto: ['masseuse_work', '5.1'] },
    { label: 'Next position', goto: ['masseuse_work', '5'] },
  ]);
  scene.build();
}

function enter5_1(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 2) + 0) === 1) {
    qspCall(s, 'cum_call', '', ((s as any).npcID ?? 0));
    qspCall(s, 'stat', '');
    if (((s as any).masseuse ?? 0)?.['position'] === 'miss') {
      scene.img(`images/shared/sex/massage/creampie${(Math.floor(Math.random() * 4) + 3)}.mp4`);
    } else {
      if (((s as any).masseuse ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/massage/creampie2.mp4');
      } else {
        scene.img('images/shared/sex/cum/cum8.mp4');
      }
    }
    if (((s as any).pcs_horny ?? 0) >= 90) {
      (s as any).orgasm_or = 'yes';
      scene.text('Eventually, the client starts cumming. He keeps hammering you and grunts hard, and you can feel his semen spurt deeper inside you with every thrust. The sensation causes you to orgasm as well, groaning with pleasure right alongside him. At some point the client finishes ejaculating and removes his cock from your pussy, his cum flowing out after.');
    } else {
      scene.text('Eventually, the client starts cumming. He keeps hammering you and grunts hard, and you can feel his semen spurt deeper inside you with every thrust. At some point the client finishes ejaculating and removes his cock from your pussy, his cum flowing out after.');
    }
    scene.actions([
      { label: 'Get up', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/room.jpg');
    scene.text('Standing on unsteady legs, you wait patiently while the client dresses himself, a slurry of lubricant, pussy juice, and cum trickling down your legs the whole time. Just before he turns to leave, you give a small bow, saying, "Thank you for your patronage." The door clicks shut and you release an exhausted breath, leaning back against the table and taking a moment to rest.');
    if ((Math.floor(Math.random() * 3) + 0) === 2) {
      ((st as any).massage = (st as any).massage ?? {})['client_tip'] = (Math.floor(Math.random() * 501) + 0);
      ((st as any).massage = (st as any).massage ?? {})['sex_tips'] = ((st as any).massage['sex_tips'] ?? 0) + (((st as any).massage ?? 0)?.['client_tip']);
      // TODO-QSP: dynamic text: Looking back to the table, you see he left a tip of <<$func(''money'', ''string_...
      scene.text(`Looking back to the table, you see he left a tip of ${qspFunc(s, 'money', 'string_profit', ((st as any).massage ?? 0)?.['client_tip'] ?? '')} for you on the table.`);
    }
    scene.text('Then you look at the clock on the wall to check how much time you have left in your shift.');
    if (((st as any).salon ?? 0)?.['work_minutes'] >= 235) {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLastClient(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPrepareNext(st, scene); (st as any).locArgs = __savedLocArgs; }
      scene.text('Looking down at your cum dripping pussy, you think to yourself if you care enough to clean it off. Company policy says you should be completely clean for each new customer but...');
      scene.actions([
        { label: 'Don\'t bother', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/room.jpg');
    scene.text('Eh, who cares. The next guy can get sloppy seconds. He\'ll probably just think it\'s lube. Your breather over, you slip on your robe and reset the room.');
    if (((st as any).masseuse ?? 0)?.['break'] === 0) {
      scene.text('Now the only question left is if you should you take a break or just wait for the next client?');
    } else {
      scene.text('Guess you should just wait for the next client now.');
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPrepareNextMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        { label: 'Wipe your pussy', handler: (st: GameState) => {
    (st as any).cumspclnt = 15;
    qspCall(st, 'cum_cleanup', '');
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/cum/clean_pussy.mp4');
    scene.text('Best to just stick to the policy. Grabbing a soft towel, you carefully wipe the cum from your pussy before tossing it into the cum laundry bin. Afterwards, you slip on your robe and reset the room.');
    if (((st as any).masseuse ?? 0)?.['break'] === 0) {
      scene.text('Now the only question left is if you should you take a break or just wait for the next client?');
    } else {
      scene.text('Guess you should just wait for the next client now.');
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPrepareNextMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
  } },
    ]);
  } else {
    qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0));
    qspCall(s, 'cum_call', 'hair', ((s as any).npcID ?? 0));
    qspCall(s, 'cum_call', 'mouth', ((s as any).npcID ?? 0));
    qspCall(s, 'stat', '');
    scene.img(`images/shared/sex/massage/facial${(Math.floor(Math.random() * 2) + 1)}.mp4`);
    scene.text('After an indeterminable amount of time, you hear the client shouting at you.');
    scene.text('"Spread \'em, spread \'em, spread \'em, spread \'em!"');
    scene.text('Obligingly, you open your legs as wide as they can go and he jumps out from between them, rushing to your face, and immediately ejaculating all over it. Just like your legs, you open your mouth as wide as possible, trying to catch any stray droplets that land in it while licking the client\'s cock all over. Once it feels like he\'s done cumming, you adhere once again to company policy and swallow everything before collapsing backwards on to the table.');
    scene.actions([
      { label: 'Get up', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/room.jpg');
    scene.text('Standing on unsteady legs, you wait patiently while the client dresses himselfm. Just before he turns to leave, you give a small bow, face still painted with his cum, and say, "Thank you for your patronage.". The door clicks shut and you release an exhausted breath, sagging against the table and taking a moment to rest. Looking at the clock on the wall to check how much time you have left in your shift.');
    if ((Math.floor(Math.random() * 3) + 0) === 2) {
      ((st as any).massage = (st as any).massage ?? {})['client_tip'] = (Math.floor(Math.random() * 501) + 0);
      ((st as any).massage = (st as any).massage ?? {})['sex_tips'] = ((st as any).massage['sex_tips'] ?? 0) + (((st as any).massage ?? 0)?.['client_tip']);
      // TODO-QSP: dynamic text: Looking back to the table, you see he left a tip of <<$func(''money'', ''string_...
      scene.text(`Looking back to the table, you see he left a tip of ${qspFunc(s, 'money', 'string_profit', ((st as any).massage ?? 0)?.['client_tip'] ?? '')} for you on the table.`);
    }
    if (((st as any).salon ?? 0)?.['work_minutes'] >= 235) {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLastClient(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      (st as any).cumspclnt = 12;
      qspCall(st, 'cum_cleanup', '');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPrepareNext(st, scene); (st as any).locArgs = __savedLocArgs; }
      scene.text('Looks like you still have some customers to serve. Well, you can\'t serve them looking like this. You grab a towel and clean your face and hair off before tossing it into a laundry bin and resetting the room.');
      if (((st as any).masseuse ?? 0)?.['break'] === 0) {
        scene.text('Now the only question left is if you should you take a break or just wait for the next client?');
      } else {
        scene.text('Guess you should just wait for the next client now.');
      }
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPrepareNextMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterJobInterview1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
  scene.text('"I actually wanted to know if you had any job openings available."');
  scene.text('"We have several openings for female masseuses. How do you feel about that?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'I\'m not interested', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"I\'m not really interested in that kind of work. Don\'t you have anything else like a makeup assistant or salesgirl or something?"');
    scene.text('"Well, we really don\'t have anything else we need help with right now. We do have those positions you\'re asking about, but they\'re all filled. " The woman gives you a sympathetic smile. "Sorry."');
    scene.actions([
      { label: 'Leave', goto: ['salon', 'start'] },
      { label: 'Tell me more about the masseuse job', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"Well... if that\'s all you have, tell me more about the masseuse job then."');
    scene.text('"I\'d be happy to!" she smiles.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterJobOffer(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    { label: 'Tell me about the job', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"I might be interested. Tell me more about it?"');
    scene.text('"I\'d be happy to!" she smiles.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterJobOffer(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterJobOffer(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: "Shifts are four hours long and pay <<$func(''money'', ''string_profit'', 400)>>...
  scene.text(`"Shifts are four hours long and pay ${qspFunc(s, 'money', 'string_profit', 400)} per shift. We allow employees to schedule their own shifts rather than being assigned, but senior employees get priority over newer employees. We expect you to work 5 shifts if you're part time or 10 shifts if you're full time. We do not provide overtime compensation so if you choose to work more shifts or are kept late with a customer, you will only be paid for your shift."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'That\'s not a lot of pay', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"That\'s not a lot of money in terms of pay..."');
    scene.text('"You get to keep the tips," the woman shrugs. She looks around the room to see if anyone is standing nearby before leaning forward to whisper to you.');
    scene.text('"To be honest, we do have... other kinds of work available if you want. But it isn\'t strictly speaking legal."');
    scene.actions([
      { label: 'I don\'t want to hear about this', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"I don\'t want to hear about this!" you recoil in disgust. "I just wanted to have a job, not break the law!"');
    scene.text('With that you step away from her.');
    scene.actions([
      { label: 'Leave', goto: ['salon', 'start'] },
    ]);
  } },
      { label: 'What kind of work?', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"What kind of work?" you ask curiously.');
    scene.text('"Well..."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWhoreOffer(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    { label: 'Sounds fine', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"Okay, that all sounds fine."');
    scene.text('"Great!" she says. "And are you a certified massage therapist?"');
    if (((st as any).license ?? 0)?.['masseuse'] === 1) {
      ((st as any).masseuse = (st as any).masseuse ?? {})['pending_rank'] = 1;
      ((st as any).masseuse = (st as any).masseuse ?? {})['hourly'] = 100;
      scene.text('"Yes I am."');
      scene.text('"Okay, can I see your certificate?" You pull out the paper that certifies you as a massage therapist."');
      scene.text('"Great. I\'ll just get your contract set up for you," she says, typing something out on her computer.');
      scene.actions([
        { label: 'Next', goto: ['masseuse_work', 'part_time_full_time'] },
      ]);
    } else {
      scene.text('"No..."');
      scene.text('"In that case, you can still work as a masseuse here, but you will be limited to one kind of work."');
      scene.text('"What kind of work?" you ask curiously.');
      scene.text('"Sex work," the receptionist says matter-of-factly.');
      scene.actions([
        { label: 'What?!', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"What?!" you gasp, shocked.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWhoreOnlyOffer(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterWhoreOnlyOffer(s: GameState, scene: SceneBuilder): void {
  scene.text('"I\'m sorry. Let me explain. In addition to giving normal massages, some of our masseuses offer more intimate services. Namely, performing the massages while naked, performing handjobs, performing blowjobs, or having sex with the customer. What I mean to say is that we function as a salon, a massage parlor, and a brothel. However you, without any massage experience, we cannot trust you to provide services as a masseuse. Therefore, you can only work here if you are willing to be a whore. And your work would be limited to vaginal intercourse only, as we package handjobs and blowjobs with massages. Due to your lack of versatility, it also means your hourly rates would be reduced."');
  scene.text('The receptionist describes the whole thing in the same business-like tone she used when she was telling you about the hours and the pay.');
  // TODO-QSP: dynamic text: "The pay for a whore-only employee starts at <<$func(''money'', ''string_profit'...
  scene.text(`"The pay for a whore-only employee starts at ${qspFunc(s, 'money', 'string_profit', 600)} an hour. Of course, should you obtain a masseuse certification, we would increase your pay appropriately as well. As it happens, we do need more whores as some of our part timers just quit recently. Are you interested in the job?"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'No thanks', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"Thanks, but no thanks," you say, shaking your head. "I\'m not interested in that kind of work."');
    scene.text('"Hmm. Well if you ever change your mind, you\'re welcome to come back. While you\'re here is there anything else I can offer you?"');
    scene.actions([
      { label: 'No', goto: ['salon', 'start'] },
      { label: 'Sure, let me look', goto: ['salon', 'services'] },
    ]);
  } },
    { label: 'You\'ll take the job', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    ((st as any).masseuse = (st as any).masseuse ?? {})['pending_rank'] = 6;
    ((st as any).masseuse = (st as any).masseuse ?? {})['hourly'] = 150;
    scene.text('"Yes," you nod. "I\'ll take the job."');
    scene.text('"Excellent," she smiles back. "Let\'s do the paperwork."');
    scene.actions([
      { label: 'Next', goto: ['masseuse_work', 'part_time_full_time'] },
    ]);
  } },
    { label: 'Sure, whoring is easy (yes)', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    ((st as any).masseuse = (st as any).masseuse ?? {})['pending_rank'] = 6;
    ((st as any).masseuse = (st as any).masseuse ?? {})['hourly'] = 150;
    scene.text('"Sure, I\'ll be your whore," you say. "Easy enough to fuck people for money."');
    scene.text('"Excellent," she smiles back. "Let\'s do the paperwork."');
    scene.actions([
      { label: 'Next', goto: ['masseuse_work', 'part_time_full_time'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterWhoreOffer(s: GameState, scene: SceneBuilder): void {
  ((s as any).masseuse = (s as any).masseuse ?? {})['brothel_know'] = 1;
  scene.text('"In addition to giving normal massages, some of our masseuses offer more intimate services. Namely, performing the massages while naked, performing handjobs, performing blowjobs, or having sex with the customer. What I mean to say is that we function as a salon, a massage parlor, and a brothel. If you would like to be paid more, we offer specialty positions for sex work. Are you interested in that kind of work?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Ew, not interested', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"Ew," you say, wrinkling your nose in disgust. "Yeah, no, I\'m not interested in that."');
    // TODO-QSP: dynamic text: "Are you sure? We pay our whores up to <<$func(''money'', ''string_profit'', 100...
    scene.text(`"Are you sure? We pay our whores up to ${qspFunc(s, 'money', 'string_profit', 1000)} per shift. And you don't have to do anything you don't want to. There are plenty of girls who only do naked massages and no sexual acts or girls who give blowjobs but don't have sex. If you're really not interested, a normal masseuse position is all we have to offer."`);
    scene.actions([
      { label: 'Not interested in all', handler: (st: GameState) => {
    scene.text('"Not at all!" you say. "As if anybody would want to work at a place like this."');
    scene.text('"Oh. Well I\'m sorry to hear that. We really could use the help. Let me know if you change your mind. In the mean time, can I offer you in any of our other services?"');
    scene.actions([
      { label: 'Just leave', goto: ['salon', 'start'] },
      { label: 'Take a look while you\'re here', goto: ['salon', 'services'] },
    ]);
  } },
      { label: 'I\'d rather just work as a masseuse', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"No way," you say. "I\'m not about selling my body like that. But I guess a normal masseuse job is fine."');
    scene.text('"Okay! We always need those." she says. "And are you a certified massage therapist?"');
    if (((st as any).license ?? 0)?.['masseuse'] === 1) {
      ((st as any).masseuse = (st as any).masseuse ?? {})['pending_rank'] = 1;
      ((st as any).masseuse = (st as any).masseuse ?? {})['hourly'] = 100;
      scene.text('"Yes I am."');
      scene.text('"Okay, can I see your certificate?" You pull out the paper that certifies you as a massage therapist."');
      scene.text('"Great. I\'ll just get your contract set up for you," she says, typing something out on her computer.');
      scene.actions([
        { label: 'Next', goto: ['masseuse_work', 'part_time_full_time'] },
      ]);
    } else {
      scene.text('"No..."');
      scene.text('"Sorry, but we need you to have one of those to work here. If you\'re still interested, they offer a 10 session course at the community center in the industrial area."');
      scene.actions([
        { label: 'Leave', goto: ['salon', 'start'] },
      ]);
    }
  } },
      { label: 'Well...', handler: (st: GameState) => {
    scene.text('"Well..." you say. The money is pretty tempting. "I guess you could tell me more about working as a whore to find out if I\'m really interested or not..."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWhoreOffer2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    { label: 'Tell me more', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"Tell me more about this."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWhoreOffer2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterWhoreOffer2(s: GameState, scene: SceneBuilder): void {
  scene.text('"Let me explain. If you want the highest pay as a whore you will be expected to do any of the work we have on the menu. That includes basic body massages, massages given while you are naked, handjobs, blowjobs, and of course, sex. But each customer pays for a different service, we don\'t have any all included packages. If you aren\'t comfortable with going so far, you can choose to perform only lesser services, but for less pay of course. You can just do oral and handjobs if you prefer with no fucking, or just performing normal massages while naked. It\'s no problem for us, we\'ll just pay you less.');
  // TODO-QSP: dynamic text: "We pay <<$func(''money'', ''string_profit'', 1000)>> per shift for full whores,...
  scene.text(`"We pay ${qspFunc(s, 'money', 'string_profit', 1000)} per shift for full whores, ${qspFunc(s, 'money', 'string_profit', 700)} for oral masseuses, ${qspFunc(s, 'money', 'string_profit', 600)} for happy end masseuses, ${qspFunc(s, 'money', 'string_profit', 500)} for naked masseuses, and of course, ${qspFunc(s, 'money', 'string_profit', 400)} for regular masseuses. All employees also enjoy a 50% discount of any other services the salon has to offer. After that, everything else is the same. We let the whores pick and choose their own shifts. Four hour shifts at a time. Pay day is Friday."`);
  scene.text('She lays everything out for you as calmly and methodically as if she were trying to sell a body oil.');
  scene.text('"That about covers it. Still interested?"');
  if (((s as any).pcs_inhib ?? 0) >= 35) {
    scene.actions([
      { label: 'I wouldn\'t mind being a naked masseuse', goto: ['masseuse_work', 'naked_masseuse_accept'] },
    ]);
  } else {
    qspCall(s, 'willpower', 'skill', 'inhib', 'self', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'I wouldn\'t mind being a naked masseuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'I wouldn\'t mind being a naked masseuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', '');
  }, goto: ['masseuse_work', 'naked_masseuse_accept'] },
      ]);
    }
  }
  if (((s as any).pcs_inhib ?? 0) >= 40  ||  ((s as any).stat ?? 0)?.['prostitute_times'] > 20) {
    scene.actions([
      { label: 'I can give handjobs', goto: ['masseuse_work', 'handjob_masseuse_accept'] },
    ]);
  } else {
    qspCall(s, 'willpower', 'prostitution', 'self', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'I can give handjobs', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'I can give handjobs', handler: (st: GameState) => {
    qspCall(st, 'willpower', '');
  }, goto: ['masseuse_work', 'handjob_masseuse_accept'] },
      ]);
    }
  }
  if (((s as any).pcs_inhib ?? 0) >= 50  ||  ((s as any).stat ?? 0)?.['prostitute_times'] > 35) {
    scene.actions([
      { label: 'I can give blowjobs', goto: ['masseuse_work', 'blowjob_masseuse_accept'] },
    ]);
  } else {
    qspCall(s, 'willpower', 'prostitution', 'self', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'I can give blowjobs', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'I can give blowjobs', handler: (st: GameState) => {
    qspCall(st, 'willpower', '');
  }, goto: ['masseuse_work', 'blowjob_masseuse_accept'] },
      ]);
    }
  }
  if (((s as any).pcs_inhib ?? 0) >= 60  ||  ((s as any).stat ?? 0)?.['prostitute_times'] > 50) {
    scene.actions([
      { label: 'Sure, I\'ll be a whore', goto: ['masseuse_work', 'whore_masseuse_accept'] },
    ]);
  } else {
    qspCall(s, 'willpower', 'prostitution', 'self', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Sure, I\'ll be a whore', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Sure, I\'ll be a whore', handler: (st: GameState) => {
    qspCall(st, 'willpower', '');
  }, goto: ['masseuse_work', 'whore_masseuse_accept'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'On second thought, maybe no', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"On second thought, maybe no."');
    scene.text('"Oh, okay. Well what about being a regular masseuse? Still not interested?"');
    scene.actions([
      { label: 'Still no', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"I don\'t think so either."');
    scene.text('"Hmm. Well if you ever change your mind, you\'re welcome to come back. While you\'re here is there anything else I can offer you?"');
    scene.actions([
      { label: 'No', goto: ['salon', 'start'] },
      { label: 'Sure, let me look', goto: ['salon', 'services'] },
    ]);
  } },
      { label: 'I guess that\'s fine', handler: (st: GameState) => {
    ((st as any).masseuse = (st as any).masseuse ?? {})['pending_rank'] = 1;
    ((st as any).masseuse = (st as any).masseuse ?? {})['hourly'] = 100;
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"I guess that\'s fine."');
    scene.text('"So, are you a certified massage therapist?"');
    if (((st as any).license ?? 0)?.['masseuse'] === 1) {
      scene.text('"Yes I am."');
      scene.text('"Okay, can I see your certificate?" You pull out the paper that certifies you as a massage therapist."');
      scene.text('"Great. I\'ll just get your contract set up for you," she says, typing something out on her computer.');
      scene.actions([
        { label: 'Next', goto: ['masseuse_work', 'part_time_full_time'] },
      ]);
    } else {
      scene.text('"No..."');
      // TODO-QSP: dynamic text: "In that case, I can only offer you a position as a whore with a reduced pay of ...
      scene.text(`"In that case, I can only offer you a position as a whore with a reduced pay of ${qspFunc(s, 'money', 'string_profit', 600)} per shift instead of the standard ${qspFunc(s, 'money', 'string_profit', 1000)} per shift."`);
      scene.text('"Whore? Reduced pay?" you sputter. "Why?"');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWhoreOnlyAppend(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
    ]);
  } },
    { label: 'Rather just be a regular masseuse', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"I think I\'d rather just be a regular masseuse."');
    scene.text('"That\'s fine too! Always need those." she says. "And are you a certified massage therapist?"');
    if (((st as any).license ?? 0)?.['masseuse'] === 1) {
      ((st as any).masseuse = (st as any).masseuse ?? {})['pending_rank'] = 1;
      ((st as any).masseuse = (st as any).masseuse ?? {})['hourly'] = 100;
      scene.text('"Yes I am."');
      scene.text('"Okay, can I see your certificate?" You pull out the paper that certifies you as a massage therapist."');
      scene.text('"Great. I\'ll just get your contract set up for you," she says, typing something out on her computer.');
      scene.actions([
        { label: 'Next', goto: ['masseuse_work', 'part_time_full_time'] },
      ]);
    } else {
      scene.text('"No..."');
      // TODO-QSP: dynamic text: "In that case, I can only offer you a position as a whore with a reduced pay of ...
      scene.text(`"In that case, I can only offer you a position as a whore with a reduced pay of ${qspFunc(s, 'money', 'string_profit', 600)} per shift instead of the standard ${qspFunc(s, 'money', 'string_profit', 1000)} per shift."`);
      scene.text('"Whore? Reduced pay?" you sputter.');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWhoreOnlyAppend(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
  ]);
  scene.build();
}

function enterNakedMasseuseAccept(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
  scene.text('"I wouldn\'t mind being a naked masseuse," you say.');
  scene.text('"Alright, that\'s fine." she says. "And are you a certified massage therapist?"');
  if (((s as any).license ?? 0)?.['masseuse'] === 1) {
    ((s as any).masseuse = (s as any).masseuse ?? {})['pending_rank'] = 2;
    ((s as any).masseuse = (s as any).masseuse ?? {})['hourly'] = 125;
    scene.text('"Yes I am."');
    scene.text('"Okay, can I see your certificate?" You pull out the paper that certifies you as a massage therapist."');
    scene.text('"Great. I\'ll just get your contract set up for you," she says, typing something out on her computer.');
    scene.actions([
      { label: 'Next', goto: ['masseuse_work', 'part_time_full_time'] },
    ]);
  } else {
    scene.text('"What? No?"');
    // TODO-QSP: dynamic text: "In that case, I can only offer you a position as a whore with a reduced pay of ...
    scene.text(`"In that case, I can only offer you a position as a whore with a reduced pay of ${qspFunc(s, 'money', 'string_profit', 600)} per shift instead of the standard ${qspFunc(s, 'money', 'string_profit', 1000)} per shift."`);
    scene.text('"Whore? Reduced pay?" you sputter. "Why?"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWhoreOnlyAppend(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterHandjobMasseuseAccept(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
  scene.text('"I wouldn\'t mind giving the occasional handjob," you say.');
  scene.text('"Alright, that\'s fine." she says. "And are you a certified massage therapist?"');
  if (((s as any).license ?? 0)?.['masseuse'] === 1) {
    ((s as any).masseuse = (s as any).masseuse ?? {})['pending_rank'] = 3;
    ((s as any).masseuse = (s as any).masseuse ?? {})['hourly'] = 150;
    scene.text('"Yes I am."');
    scene.text('"Okay, can I see your certificate?" You pull out the paper that certifies you as a massage therapist."');
    scene.text('"Great. I\'ll just get your contract set up for you," she says, typing something out on her computer.');
    scene.actions([
      { label: 'Next', goto: ['masseuse_work', 'part_time_full_time'] },
    ]);
  } else {
    scene.text('"What? No?"');
    // TODO-QSP: dynamic text: "In that case, I can only offer you a position as a whore with a reduced pay of ...
    scene.text(`"In that case, I can only offer you a position as a whore with a reduced pay of ${qspFunc(s, 'money', 'string_profit', 600)} per shift instead of the standard ${qspFunc(s, 'money', 'string_profit', 1000)} per shift."`);
    scene.text('"Whore? Reduced pay?" you sputter. "Why?"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWhoreOnlyAppend(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBlowjobMasseuseAccept(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
  scene.text('"I can give blowjobs," you say.');
  scene.text('"Great!" she says. "And are you a certified massage therapist?"');
  if (((s as any).license ?? 0)?.['masseuse'] === 1) {
    ((s as any).masseuse = (s as any).masseuse ?? {})['pending_rank'] = 4;
    ((s as any).masseuse = (s as any).masseuse ?? {})['hourly'] = 175;
    scene.text('"Yes I am."');
    scene.text('"Okay, can I see your certificate?" You pull out the paper that certifies you as a massage therapist."');
    scene.text('"Great. I\'ll just get your contract set up for you," she says, typing something out on her computer.');
    scene.actions([
      { label: 'Next', goto: ['masseuse_work', 'part_time_full_time'] },
    ]);
  } else {
    scene.text('"What? No?"');
    // TODO-QSP: dynamic text: "In that case, I can only offer you a position as a whore with a reduced pay of ...
    scene.text(`"In that case, I can only offer you a position as a whore with a reduced pay of ${qspFunc(s, 'money', 'string_profit', 600)} per shift instead of the standard ${qspFunc(s, 'money', 'string_profit', 1000)} per shift."`);
    scene.text('"Whore? Reduced pay?" you sputter. "Why?"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWhoreOnlyAppend(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterWhoreMasseuseAccept(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
  scene.text('"Sure, I\'ll be your whore," you say. "Easy enough to fuck people for money."');
  scene.text('"Fantastic!" she says. "And are you a certified massage therapist?"');
  if (((s as any).license ?? 0)?.['masseuse'] === 1) {
    ((s as any).masseuse = (s as any).masseuse ?? {})['pending_rank'] = 5;
    ((s as any).masseuse = (s as any).masseuse ?? {})['hourly'] = 250;
    scene.text('"Yes I am."');
    scene.text('"Okay, can I see your certificate?" You pull out the paper that certifies you as a massage therapist."');
    scene.text('"Great. I\'ll just get your contract set up for you," she says, typing something out on her computer.');
    scene.actions([
      { label: 'Next', goto: ['masseuse_work', 'part_time_full_time'] },
    ]);
  } else {
    scene.text('"What? No?"');
    // TODO-QSP: dynamic text: "In that case, you will take a reduced pay of <<$func(''money'', ''string_profit...
    scene.text(`"In that case, you will take a reduced pay of ${qspFunc(s, 'money', 'string_profit', 600)} per shift instead of the standard ${qspFunc(s, 'money', 'string_profit', 1000)} per shift."`);
    scene.text('"Why?" you sputter.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWhoreOnlyAppend(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterWhoreOnlyAppend(s: GameState, scene: SceneBuilder): void {
  scene.text('"Lack of versatility," she shrugs. "We package handjobs and blowjobs with massages. Without the ability to offer these together, the only part of you we can use is your pussy. Of course, if you obtain certification, your pay would be increased up to the standard rate. Are you still interested in the job?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'No thanks', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"Thanks, but no thanks," you say, shaking your head. "I\'m not interested if the pay is reduced."');
    scene.text('"Hmm. Well if you ever change your mind, you\'re welcome to come back. While you\'re here is there anything else I can offer you?"');
    scene.actions([
      { label: 'No', goto: ['salon', 'start'] },
      { label: 'Sure, let me look', goto: ['salon', 'services'] },
    ]);
  } },
    { label: 'You\'ll take the job', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    ((st as any).masseuse = (st as any).masseuse ?? {})['pending_rank'] = 6;
    ((st as any).masseuse = (st as any).masseuse ?? {})['hourly'] = 150;
    scene.text('"I guess," you nod. "It\'s better than nothing."');
    scene.text('"Excellent," she smiles back. "Let\'s do the paperwork."');
    scene.actions([
      { label: 'Next', goto: ['masseuse_work', 'part_time_full_time'] },
    ]);
  } },
    { label: 'Sure, whoring is easy (yes)', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    ((st as any).masseuse = (st as any).masseuse ?? {})['pending_rank'] = 6;
    ((st as any).masseuse = (st as any).masseuse ?? {})['hourly'] = 150;
    scene.text('"Sure, I\'ll do it for less," you say. "Getting fucked for money is better than working for a living."');
    scene.text('"Excellent," she smiles back. "Let\'s do the paperwork."');
    scene.actions([
      { label: 'Next', goto: ['masseuse_work', 'part_time_full_time'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterPartTimeFullTime(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
  scene.text('"Were you looking to be a full timer or a part timer? As a reminder, full timers are expected to work 10 shifts a week, part timers work 5. Full timers also get priority on available shifts."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Part time', handler: (st: GameState) => {
    ((st as any).masseuse = (st as any).masseuse ?? {})['shifts_required'] = 5;
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"Part time."');
    scene.text('"Okay," she prints out a piece of paper and pushes a pen towards you. "This is an employee contract for a part time masseuse. Just sign there at the bottom and I\'ll give you a quick orientation."');
    scene.actions([
      { label: 'Sign', handler: (st: GameState) => {
    if (((st as any).masseuse ?? 0)?.['pending_rank'] === 1) {
      qspGoto(st, 'masseuse_work', 'masseuse_orientation');
    } else {
      qspGoto(st, 'masseuse_work', 'whore_orientation');
    }
  } },
    ]);
  } },
    { label: 'Full time', handler: (st: GameState) => {
    ((st as any).masseuse = (st as any).masseuse ?? {})['shifts_required'] = 10;
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"Full time."');
    scene.text('"Okay," she prints out a piece of paper and pushes a pen towards you. "This is an employee contract for a full time masseuse. Just sign there at the bottom and I\'ll give you a quick orientation."');
    scene.actions([
      { label: 'Sign', handler: (st: GameState) => {
    if (((st as any).masseuse ?? 0)?.['pending_rank'] === 1) {
      qspGoto(st, 'masseuse_work', 'masseuse_orientation');
    } else {
      qspGoto(st, 'masseuse_work', 'whore_orientation');
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMasseuseOrientation(s: GameState, scene: SceneBuilder): void {
  ((s as any).masseuse = (s as any).masseuse ?? {})['hired_day'] = ((s as any).daystart ?? 0);
  qspCall(s, 'jobs', 'set_employed', 'city_salon_masseuse');
  qspCall(s, 'jobs', 'set_rank', 'city_salon_masseuse', ((s as any).masseuse ?? 0)?.['pending_rank']);
  ((s as any).masseuse = (s as any).masseuse ?? {})['salon_state'] = '';
  ((s as any).masseuse = (s as any).masseuse ?? {})['pending_rank'] = 0;
  scene.img('images/locations/city/citycenter/mall/salon/salon.jpg');
  scene.text('You scribble out a signature and she takes the paper back from you.');
  scene.text('"Thank you very much! So for future reference, I\'m Xian, one of the managers here. All your clients will come to me and will be able to request you based on whether you are available or not. Now if you\'ll quickly follow me," she gets up from her chair and moves around the desk towards the back.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Follow her', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/lockers.jpg');
    scene.text('"Here is the locker room for you to put your personal things when working. We have a strict uniform policy here. All massage therapists must wear one of the salon robes. No personal clothing is allowed under the robe. That means no shirts, no dresses, no pants, or underwear of any kind is allowed beneath the robe. By the way, here\'s yours." Picking a hanger up off a rack, she hands you a thin white robe that your nipples might tear through on a cold day and a hemline that ends just above the halfway point of your thigh. Not waiting for any questions, she assigns you a locker as well before quickly moving on to the next room.');
    scene.actions([
      { label: 'Follow', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/room.jpg');
    scene.text('"These are our massage rooms. You will be assigned a random one on a given day and expected to be inside and ready within a half hour of your shift starting. When your shift is over you are expected to make it clean and ready for the next girl or for the next day if you are working a closing shift. On that wall there is a clock," she gestures, "to keep track of how long the session is going and when a client\'s time is up. By the door you will also notice an intercom. Before each client comes in I will buzz you to let you know you have a customer and what kind of service he wishes to receive. Our massage services are as follows:');
    scene.text('A massage is simply a body massage.');
    scene.text('A naked massage is \'a massage with a view.\' ');
    scene.text('Handjob requests are referred to as an \'old fashioned\' massage and oral requests are \'head\' massages. ');
    scene.text('Clients who pay to fuck are requesting \'full body\' massages. ');
    scene.text('And of course, if any client is roughhousing, you may use the intercom to signal me that security intervention is necessary."');
    scene.text('She continues to speak at a rapid pace, leaving no room for you to squeeze in any sort of question.');
    scene.text('"If a customer cums in your mouth you are expected to swallow. If a customer cums inside your pussy they are not liable if you become pregnant. We do not offer birth control or additional compensation for birth control if you are not already on it. Every new customer should be greeted with a clean face and body, so again if a customer cums inside you, you are expected to wipe yourself for the next customer. Any towel with bodily fluids can be thrown into the pink laundry bin, any other towel can be thrown in the blue. When the customer is preparing to leave, you are not to redress if already naked. When they exit the room, you will bow and say, \'Thank you for your patronage sir,\'" she says, modelling the action and words for you. "I will continue to send in clients unless you are 5 minutes or less from the end of your shift. If your shift ends while still with a client, you must still finish the session with them. You will not be compensated for extra time. Next we\'ll move to the break room."');
    scene.actions([
      { label: 'Follow her', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/break.jpg');
    scene.text('"You are allowed one 15 minute break per shift taken at a time of your choosing. Feel free to rehydrate, have a snack, or smoke a cigarette if that is your habit while in this room. And that concludes orientation." She leads you back out to the front.');
    scene.actions([
      { label: 'Follow her!', goto: ['masseuse_work', 'questions'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterWhoreOrientation(s: GameState, scene: SceneBuilder): void {
  ((s as any).masseuse = (s as any).masseuse ?? {})['hired_day'] = ((s as any).daystart ?? 0);
  qspCall(s, 'jobs', 'set_employed', 'city_salon_masseuse');
  qspCall(s, 'jobs', 'set_rank', 'city_salon_masseuse', ((s as any).masseuse ?? 0)?.['pending_rank']);
  ((s as any).masseuse = (s as any).masseuse ?? {})['salon_state'] = '';
  ((s as any).masseuse = (s as any).masseuse ?? {})['pending_rank'] = 0;
  scene.img('images/locations/city/citycenter/mall/salon/salon.jpg');
  scene.text('You scribble out a signature and she takes the paper back from you.');
  scene.text('"Thank you very much! For future reference, I\'m Xian, one of the managers here. All your clients will come to me and will be able to request you based on whether you are available or not. Now if you\'ll quickly follow me," she gets up from her chair and moves around the desk towards the back.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Follow her', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/lockers.jpg');
    scene.text('"Here is the locker room for you to put your personal things when working. We have a strict uniform policy here. All massage therapists must wear one of the salon robes. No personal clothing is allowed under the robe. That means no shirts, no dresses, no pants, or underwear of any kind is allowed beneath the robe. By the way, here\'s yours." Picking a hanger up off a rack, she hands you a thin white robe that your nipples might tear through on a cold day and a hemline that ends just above the halfway point of your thigh. Not waiting for any questions, she assigns you a locker as well before quickly moving on to the next room.');
    scene.actions([
      { label: 'Follow', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/room.jpg');
    scene.text('"These are our massage rooms. You will be assigned a random one on a given day and expected to be inside and ready within a half hour of your shift starting. When your shift is over you are expected to make it clean and ready for the next girl or for the next day if you are working a closing shift. On that wall there is a clock," she gestures, "to keep track of how long the session is going and when a client\'s time is up. By the door you will also notice an intercom. Before each client comes in I will buzz you to let you know you have a customer and what kind of service he wishes to receive. Our massage services are as follows:');
    scene.text('A massage is simply a body massage.');
    scene.text(' A naked massage is \'a massage with a view.\' ');
    scene.text('Handjob requests are referred to as an \'old fashioned massage\' and oral requests are \'head massages\'. ');
    // TODO-QSP: 'Clients who pay to fuck are requesting ''full body'' massages. ' + iif(job_rank['city_salon_masseus...
    scene.text('If any client is roughhousing, you may use the intercom to signal me that security intervention is necessary."');
    scene.text('She continues to speak at a rapid pace, leaving no room for you to squeeze in any sort of question.');
    scene.text('"If a customer cums in your mouth you are expected to swallow. If a customer cums inside your pussy they are not liable if you become pregnant. We have a no condom policy in this establishment and we do not offer birth control or additional compensation for birth control if you are not already on it. Every new customer should be greeted with a clean face and body and you are expected to wipe yourself after every customer. Any towel with bodily fluids can be thrown into the pink laundry bin, any other towel can be thrown in the blue. When the customer is preparing to leave, you are not to redress if already naked. When they exit the room, you will bow and say, \'Thank you for your patronage sir,\'" she says, modelling the action and words for you. "I will continue to send in clients unless you are 5 minutes or less from the end of your shift. If your shift ends while still with a client, you must still finish the session with them. You will not be compensated for extra time. Next we\'ll move to the break room."');
    scene.actions([
      { label: 'Follow her', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/break.jpg');
    scene.text('"You are allowed one 15 minute break per shift taken at a time of your choosing. Feel free to rehydrate, have a snack, or smoke a cigarette if that is your habit while in this room. And that concludes orientation." She leads you back out to the front.');
    scene.actions([
      { label: 'Follow her!', goto: ['masseuse_work', 'questions'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterQuestions(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
  scene.text('"We schedule who\'s working every Sunday so be sure to come in then to set your hours. Pay day is Friday. You can pick it up from me any time on or after that day. Do you have any questions?"');
  if (((s as any).job_rank ?? 0)?.['city_salon_masseuse'] === 1) {
    if (((s as any).masseuse ?? 0)?.['brothel_know'] === 1) {
      scene.actions([
        { label: 'Why did you tell me about the whoring?', handler: (st: GameState) => {
    ((st as any).masseuse = (st as any).masseuse ?? {})['brothel_question'] = 1;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterQuestions(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"Uhhhh, yeah... Why did you tell me about all the whoring stuff? I thought we agreed I\'m just working as a normal masseuse?"');
    scene.text('"In case you wanted to change jobs," she says simply. "I might have mentioned it before but even if you\'re just a masseuse right now, you might change your mind in the future. As long as you have the certificate, you are welcome to ascend or descend to any level of masseuse here. As it is such a fluid system, even if you\'re not doing the work it\'s easiest to explain it all in one orientation."');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Why did you tell me all that... other stuff?', handler: (st: GameState) => {
    ((st as any).masseuse = (st as any).masseuse ?? {})['brothel_question'] = 1;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterQuestions(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"Uhhhh, yeah... Why did you tell me about all that... other stuff?"');
    scene.text('"In case you wanted to change jobs and because I didn\'t want to you to be surprised by any of the other work we do here," she says simply. "We also offer many sex services to customers. As long as you have the certificate, you are welcome to ascend or descend to any level of employee here. As it is such a fluid system, even if you\'re not doing the work it\'s easiest to explain it all in one orientation."');
  } },
      ]);
    }
  }
  if (((s as any).masseuse ?? 0)?.['brothel_question'] === 1) {
    scene.actions([
      { label: 'This is a brothel?!', handler: (st: GameState) => {
    ((st as any).masseuse = (st as any).masseuse ?? {})['brothel_know'] = 1;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterQuestions(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"Wait, do you mean this is some kind of brothel?!"');
    scene.text('"Well, yes. Of course," she says, giving you an eye. "Surely you didn\'t think that a massage parlor in <i>this</i> town was <i>just</i> a massage parlor did you?"');
  } },
    ]);
  }
  if (((s as any).masseuse ?? 0)?.['brothel_know'] === 1) {
    scene.actions([
      { label: 'What if I want to change jobs?', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"What if I want to change jobs?" you ask.');
    if (((st as any).job_rank ?? 0)?.['city_salon_masseuse'] !== 6) {
      scene.text('"You just let me know and we\'ll change it. You\'ll start on your new position with new pay immediately after. If you do it before payday, you\'ll be paid for that rate instead of your previous rate."');
    } else {
      scene.text('"Then you\'ll have to become a certified massage therapist," she shrugs. "Without that certification, you\'re only good for your pussy. I believe they offer a masseuse course at the community centre in the industrial area."');
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'No more questions', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"I\'m pretty much clear on everything I think."');
    scene.text('"Great! So would you like to set your shifts for next week then?"');
    scene.text('"Sure."');
    scene.actions([
      { label: 'Look at the schedule', goto: ['masseuse_work', 'set_schedule', 'this_week'] },
    ]);
  } },
    { label: 'Why the uniform?', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"Why is the uniform policy so uhh..." you glance at the skimpy robe. "... strict?"');
    scene.text('"It is important to maintain a sense of uniformity here. It ensures our customers that everyone working here is a professional and that any employee is just as good as another. And we are also a beauty salon. As the essence of beauty, we must do our best to make sure our girls look beautiful. Thinly veiled beauty is only exceeded by naked beauty. But that would openly advertise us as a brothel since public nudity does not abide with public law. We dress for the customers, not ourselves."');
    scene.text('"Ahuh..." you say. "Right. And was that policy invented by a man or a woman?"');
    scene.text('Xian blinks. "A woman of course. All our policies were created by the owner, Madam Lao."');
  } },
  ]);
  scene.build();
}

function enterJobChange(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
  scene.text('"I wanted to change the kind of work I\'ve been doing."');
  if (((s as any).job_rank ?? 0)?.['city_salon_masseuse'] === 6) {
    scene.text('"Did you get a massage therapist certification?"');
    if (((s as any).license ?? 0)?.['masseuse'] === 1) {
      scene.text('"Yes," you say and hand it over. Xian looks it over and nods once, handing it back to you.');
      scene.text('"Very well. What job did you want to do instead then?"');
    } else {
      scene.text('"No."');
      scene.text('"Then you may not change jobs. You are only permitted to be a whore."');
    }
  } else {
    scene.text('"Yes? What did you want to change?"');
  }
  if (((s as any).license ?? 0)?.['masseuse'] === 1) {
    if (((s as any).masseuse ?? 0)?.['shifts_required'] === 5) {
      scene.actions([
        { label: 'I wanted to start working full time', handler: (st: GameState) => {
    ((st as any).masseuse = (st as any).masseuse ?? {})['shifts_required'] = 10;
    scene.text('"Alright, sure thing. I\'ll make a note of it. Anything else?"');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'I wanted to switch to part time', handler: (st: GameState) => {
    ((st as any).masseuse = (st as any).masseuse ?? {})['shifts_required'] = 5;
    scene.text('"Alright, sure thing. I\'ll make a note of it. Anything else?"');
  } },
      ]);
    }
    if (((s as any).job_rank ?? 0)?.['city_salon_masseuse'] !== 1) {
      scene.actions([
        { label: 'Change jobtype to a normal masseuse', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"I wanted to start working as a normal masseuse."');
    // TODO-QSP: dynamic text: "Okay," she clacks a few times on a laptop in front of her. "There. Your details...
    scene.text(`"Okay," she clacks a few times on a laptop in front of her. "There. Your details have been updated and you are now a regular masseuse. Your pay has been reduced to ${qspFunc(s, 'money', 'string_profit', 400)} per shift. Anything else?"`);
    qspCall(st, 'jobs', 'set_rank', 'city_salon_masseuse', 1);
    ((st as any).masseuse = (st as any).masseuse ?? {})['hourly'] = 100;
  } },
      ]);
    }
    if (((s as any).job_rank ?? 0)?.['city_salon_masseuse'] !== 2) {
      if (((s as any).pcs_inhib ?? 0) >= 35) {
        scene.actions([
          { label: 'Change jobtype to nude masseuse', goto: ['masseuse_work', 'job_change_nude'] },
        ]);
      } else {
        qspCall(s, 'willpower', 'prostitution', 'self', 'medium');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Change jobtype to nude masseuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Change jobtype to nude masseuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', '');
  }, goto: ['masseuse_work', 'job_change_nude'] },
          ]);
        }
      }
    }
    if (((s as any).job_rank ?? 0)?.['city_salon_masseuse'] !== 3) {
      if (((s as any).pcs_inhib ?? 0) >= 40  ||  ((s as any).stat ?? 0)?.['prostitute_times'] > 20) {
        scene.actions([
          { label: 'Change jobtype to handjob masseuse', goto: ['masseuse_work', 'job_change_handjob'] },
        ]);
      } else {
        qspCall(s, 'willpower', 'prostitution', 'self', 'medium');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Change jobtype to handjob masseuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Change jobtype to handjob masseuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', '');
  }, goto: ['masseuse_work', 'job_change_handjob'] },
          ]);
        }
      }
    }
    if (((s as any).job_rank ?? 0)?.['city_salon_masseuse'] !== 4) {
      if (((s as any).pcs_inhib ?? 0) >= 50  ||  ((s as any).stat ?? 0)?.['prostitute_times'] > 35) {
        scene.actions([
          { label: 'Change jobtype to oral masseuse', goto: ['masseuse_work', 'job_change_oral'] },
        ]);
      } else {
        qspCall(s, 'willpower', 'prostitution', 'self', 'medium');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Change jobtype to oral masseuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Change jobtype to oral masseuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', '');
  }, goto: ['masseuse_work', 'job_change_oral'] },
          ]);
        }
      }
    }
    if (((s as any).job_rank ?? 0)?.['city_salon_masseuse'] !== 5) {
      if (((s as any).pcs_inhib ?? 0) >= 60  ||  ((s as any).stat ?? 0)?.['prostitute_times'] > 50) {
        scene.actions([
          { label: 'Change jobtype to whore', goto: ['masseuse_work', 'job_change_whore'] },
        ]);
      } else {
        qspCall(s, 'willpower', 'prostitution', 'self', 'medium');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Change jobtype to whore', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Change jobtype to whore', handler: (st: GameState) => {
    qspCall(st, 'willpower', '');
  }, goto: ['masseuse_work', 'job_change_whore'] },
          ]);
        }
      }
    }
    scene.actions([
      { label: 'That\'s all', goto: ['salon', 'start'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Don\'t change your job', goto: ['salon', 'receptionist_talk_menu'] },
  ]);
  scene.build();
}

function enterJobChangeNude(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
  scene.text('"I wanted to change to being a nude masseuse."');
  // TODO-QSP: dynamic text: "Okay," she clacks a few times on a laptop in front of her. "There. Your details...
  scene.text(`"Okay," she clacks a few times on a laptop in front of her. "There. Your details have been updated and you are now a nude masseuse. Your pay has been updated to ${qspFunc(s, 'money', 'string_profit', 500)} per shift. Anything else?"`);
  qspCall(s, 'jobs', 'set_rank', 'city_salon_masseuse', 2);
  ((s as any).masseuse = (s as any).masseuse ?? {})['hourly'] = 125;
  qspCall(s, 'salon', 'receptionist_talk_menu');
  // TODO-QSP: end
  scene.build();
}

function enterJobChangeHandjob(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
  scene.text('"I wanted to change to being a handjob masseuse."');
  // TODO-QSP: dynamic text: "Okay," she clacks a few times on a laptop in front of her. "There. Your details...
  scene.text(`"Okay," she clacks a few times on a laptop in front of her. "There. Your details have been updated and you are now a handjob masseuse. Your pay has been updated to ${qspFunc(s, 'money', 'string_profit', 600)} per shift. Anything else?"`);
  qspCall(s, 'jobs', 'set_rank', 'city_salon_masseuse', 3);
  ((s as any).masseuse = (s as any).masseuse ?? {})['hourly'] = 150;
  qspCall(s, 'salon', 'receptionist_talk_menu');
  // TODO-QSP: end
  scene.build();
}

function enterJobChangeOral(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
  scene.text('"I wanted to change to being an oral masseuse."');
  // TODO-QSP: dynamic text: "Okay," she clacks a few times on a laptop in front of her. "There. Your details...
  scene.text(`"Okay," she clacks a few times on a laptop in front of her. "There. Your details have been updated and you are now an oral masseuse. Your pay has been updated to ${qspFunc(s, 'money', 'string_profit', 700)} per shift. Anything else?"`);
  qspCall(s, 'jobs', 'set_rank', 'city_salon_masseuse', 4);
  ((s as any).masseuse = (s as any).masseuse ?? {})['hourly'] = 175;
  qspCall(s, 'salon', 'receptionist_talk_menu');
  // TODO-QSP: end
  scene.build();
}

function enterJobChangeWhore(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
  scene.text('"I wanted to start working as a whore."');
  // TODO-QSP: dynamic text: "Okay," she clacks a few times on a laptop in front of her. "There. Your details...
  scene.text(`"Okay," she clacks a few times on a laptop in front of her. "There. Your details have been updated and you are now a whore. Your pay has been updated to ${qspFunc(s, 'money', 'string_profit', 1000)} per shift. Anything else?"`);
  qspCall(s, 'jobs', 'set_rank', 'city_salon_masseuse', 5);
  ((s as any).masseuse = (s as any).masseuse ?? {})['hourly'] = 250;
  qspCall(s, 'salon', 'receptionist_talk_menu');
  // TODO-QSP: end
  scene.build();
}

function enterPayday(s: GameState, scene: SceneBuilder): void {
  ((s as any).masseuse = (s as any).masseuse ?? {})['paycheck'] = qspFunc(s, 'jobs', 'paycheck', 'city_salon_masseuse', 'cash');
  scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
  scene.text('"I\'m here to pick up my pay for this week Xian."');
  scene.text('"Okay!" She opens up a drawer and thumbs through a few different labels before reaching into one and picking up an envelope. She hands it over to you.');
  if (((s as any).masseuse ?? 0)?.['hired_day'] <= ((s as any).daystart ?? 0) - 7) {
  } else {
    if (((s as any).job_shifts_this_period ?? 0)?.['city_salon_masseuse'] < ((s as any).masseuse ?? 0)?.['shifts_required']) {
      ((s as any).masseuse = (s as any).masseuse ?? {})['warning'] = ((s as any).masseuse['warning'] ?? 0) - (1);
      // TODO-QSP: dynamic text: "Hey, you only worked <<job_shifts_this_period[''city_salon_masseuse'']>> this w...
      scene.text(`"Hey, you only worked ${((s as any).job_shifts_this_period ?? 0)?.['city_salon_masseuse'] ?? ''} this week. You were supposed to work ${((s as any).masseuse ?? 0)?.['shifts_required'] ?? ''}."`);
      scene.text('"Sorry," you say, reaching for the envelope. "Won\'t happen again."');
      // TODO-QSP: dynamic text: "Better not." You try to pull the envelope away but Xian holds on tight to it, n...
      scene.text(`"Better not." You try to pull the envelope away but Xian holds on tight to it, not budging until you make eye contact. "${((s as any).masseuse ?? 0)?.['warning'] ?? ''} more times and you're fired."`);
      scene.text('She lets go.');
    } else {
      if (((s as any).job_shifts_this_period ?? 0)?.['city_salon_masseuse'] >= ((s as any).masseuse ?? 0)?.['shifts_required']) {
        if (((s as any).job_shifts_this_period ?? 0)?.['city_salon_masseuse'] > ((s as any).masseuse ?? 0)?.['shifts_required']) {
          // TODO-QSP: dynamic text: "By the way, thank you for covering those extra shifts this week <<$pcs_firstnam...
          scene.text(`"By the way, thank you for covering those extra shifts this week ${((s as any).pcs_firstname ?? '')}. Really helpful for us."`);
          scene.text('"No problem Xian," you say, taking the envelope. "I could use the extra cash."');
        }
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPaydayEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'salon', 'receptionist_talk_menu');
  // TODO-QSP: end
  scene.build();
}

function enterPaydayEnd(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: Looking inside, you see it''s stuffed with cash that counts out to <<$func(''mon...
  scene.text(`Looking inside, you see it's stuffed with cash that counts out to ${qspFunc(s, 'money', 'format', ((s as any).masseuse ?? 0)?.['paycheck'] ?? '')}.`);
  ((s as any).masseuse = (s as any).masseuse ?? {})['money_earned'] = ((s as any).masseuse['money_earned'] ?? 0) + (((s as any).masseuse ?? 0)?.['paycheck']);
  if (((s as any).job_rank ?? 0)?.['city_salon_masseuse'] === 2) {
    ((s as any).masseuse = (s as any).masseuse ?? {})['nude_mass_money_earned'] = ((s as any).masseuse['nude_mass_money_earned'] ?? 0) + (((s as any).masseuse ?? 0)?.['paycheck']);
  } else {
    if (((s as any).job_rank ?? 0)?.['city_salon_masseuse'] > 2) {
      ((s as any).masseuse = (s as any).masseuse ?? {})['sex_money_earned'] = ((s as any).masseuse['sex_money_earned'] ?? 0) + (((s as any).masseuse ?? 0)?.['paycheck']);
    }
  }
  ((s as any).masseuse = (s as any).masseuse ?? {})['paycheck'] = 0;
  // TODO-QSP: end
  scene.build();
}

function enterResignation(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
  scene.text('"I actually wanted to resign my position here."');
  scene.text('"Oh," she says. "I\'m sorry to hear that."');
  if (((s as any).job_bonus_pay ?? 0)?.['city_salon_masseuse'] > 0) {
    ((s as any).masseuse = (s as any).masseuse ?? {})['paycheck'] = qspFunc(s, 'jobs', 'paycheck', 'city_salon_masseuse', 'cash');
    scene.text('Reaching down below the desk, she shuffles around in a drawer and stuffs some money into an envelope. "Well, here\'s your pay for the shifts you worked earlier this week."');
  }
  scene.text('"If you ever want to come back, you just let us know," she smiles at you.');
  ((s as any).masseuse = (s as any).masseuse ?? {})['last_rank'] = ((s as any).job_rank ?? 0)?.['city_salon_masseuse'];
  qspCall(s, 'jobs', 'set_terminated', 'city_salon_masseuse');
  ((s as any).masseuse = (s as any).masseuse ?? {})['salon_state'] = 'resigned';
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['salon', 'start'] },
  ]);
  scene.build();
}

function enterRehire1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
  scene.text('"Hey Xian. Actually, I wanted to know if I could start working here again?"');
  if (((s as any).masseuse ?? 0)?.['last_rank'] === 1) {
    // TODO-QSP: dynamic text: "Of course <<$pcs_firstname>>, you know we always need more masseuses. Did you w...
    scene.text(`"Of course ${((s as any).pcs_firstname ?? '')}, you know we always need more masseuses. Did you want your old job back or did you want to become a specialty masseuse?"`);
    scene.actions([
      { label: 'My old job', handler: (st: GameState) => {
    ((st as any).masseuse = (st as any).masseuse ?? {})['pending_rank'] = 1;
    ((st as any).masseuse = (st as any).masseuse ?? {})['hourly'] = 100;
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"My old job is fine."');
    // TODO-QSP: dynamic text: "Okay," she clacks a few times on a laptop in front of her. "There. Like you nev...
    scene.text(`"Okay," she clacks a few times on a laptop in front of her. "There. Like you never left. Payment at ${qspFunc(s, 'money', 'string_profit', 400)} per shift."`);
    scene.actions([
      { label: 'Next', goto: ['masseuse_work', 'rehire2'] },
    ]);
  } },
    ]);
  } else {
    // TODO-QSP: dynamic text: "Of course <<$pcs_firstname>>, you know we always need more girls. Did you want ...
    scene.text(`"Of course ${((s as any).pcs_firstname ?? '')}, you know we always need more girls. Did you want your old job back or did you want to change to a different one?"`);
    scene.actions([
      { label: 'My old job', handler: (st: GameState) => {
    ((st as any).masseuse = (st as any).masseuse ?? {})['pending_rank'] = ((st as any).masseuse ?? 0)?.['last_rank'];
    if (((st as any).masseuse ?? 0)?.['last_rank'] === 2) {
      ((st as any).masseuse = (st as any).masseuse ?? {})['hourly'] = 125;
    } else {
      if (((st as any).masseuse ?? 0)?.['last_rank'] === 3) {
        ((st as any).masseuse = (st as any).masseuse ?? {})['hourly'] = 150;
      } else {
        if (((st as any).masseuse ?? 0)?.['last_rank'] === 4) {
          ((st as any).masseuse = (st as any).masseuse ?? {})['hourly'] = 175;
        } else {
          if (((st as any).masseuse ?? 0)?.['last_rank'] === 5) {
            ((st as any).masseuse = (st as any).masseuse ?? {})['hourly'] = 250;
          } else {
            if (((st as any).masseuse ?? 0)?.['last_rank'] === 6) {
              ((st as any).masseuse = (st as any).masseuse ?? {})['hourly'] = 150;
            } else {
              ((st as any).masseuse = (st as any).masseuse ?? {})['hourly'] = 100;
            }
          }
        }
      }
    }
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"My old job is fine."');
    // TODO-QSP: dynamic text: "Okay." She clacks a few times on a laptop in front of her. "There. Like you nev...
    scene.text(`"Okay." She clacks a few times on a laptop in front of her. "There. Like you never left. Payment at ${qspFunc(s, 'money', 'string_profit', (((st as any).masseuse ?? {})?.['hourly'] ?? 0)*4)} per shift."`);
    scene.actions([
      { label: 'Next', goto: ['masseuse_work', 'rehire2'] },
    ]);
  } },
    ]);
  }
  if (((s as any).license ?? 0)?.['masseuse'] === 1) {
    if (((s as any).pcs_inhib ?? 0) >= 35) {
      scene.actions([
        { label: 'Nude masseuse', goto: ['masseuse_work', 'naked_rehire'] },
      ]);
    } else {
      qspCall(s, 'willpower', 'prostitution', 'self', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Nude masseuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Nude masseuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', '');
  }, goto: ['masseuse_work', 'naked_rehire'] },
        ]);
      }
    }
    if (((s as any).pcs_inhib ?? 0) >= 40  ||  ((s as any).stat ?? 0)?.['prostitute_times'] > 20) {
      scene.actions([
        { label: 'Handjob masseuse', goto: ['masseuse_work', 'handjob_rehire'] },
      ]);
    } else {
      qspCall(s, 'willpower', 'prostitution', 'self', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Handjob masseuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Handjob masseuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', '');
  }, goto: ['masseuse_work', 'handjob_rehire'] },
        ]);
      }
    }
    if (((s as any).pcs_inhib ?? 0) >= 50  ||  ((s as any).stat ?? 0)?.['prostitute_times'] > 35) {
      scene.actions([
        { label: 'Oral masseuse', goto: ['masseuse_work', 'oral_rehire'] },
      ]);
    } else {
      qspCall(s, 'willpower', 'prostitution', 'self', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Oral masseuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Oral masseuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', '');
  }, goto: ['masseuse_work', 'oral_rehire'] },
        ]);
      }
    }
    if (((s as any).pcs_inhib ?? 0) >= 60  ||  ((s as any).stat ?? 0)?.['prostitute_times'] > 50) {
      scene.actions([
        { label: 'Whore', goto: ['masseuse_work', 'whore_rehire'] },
      ]);
    } else {
      qspCall(s, 'willpower', 'prostitution', 'self', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Whore', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Whore', handler: (st: GameState) => {
    qspCall(st, 'willpower', '');
  }, goto: ['masseuse_work', 'whore_rehire'] },
        ]);
      }
    }
    scene.actions([
      { label: 'Normal masseuse', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"I wanted to start working as a masseuse."');
    // TODO-QSP: dynamic text: "Okay," she clacks a few times on a laptop in front of her. "There. Officially r...
    scene.text(`"Okay," she clacks a few times on a laptop in front of her. "There. Officially rehired as a masseuse. Payment at ${qspFunc(s, 'money', 'string_profit', 400)} per shift."`);
    ((st as any).masseuse = (st as any).masseuse ?? {})['pending_rank'] = 1;
    ((st as any).masseuse = (st as any).masseuse ?? {})['hourly'] = 100;
    scene.actions([
      { label: 'Next', goto: ['masseuse_work', 'rehire2'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterNakedRehire(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
  scene.text('"I wanted to work as a nude masseuse."');
  ((s as any).masseuse = (s as any).masseuse ?? {})['pending_rank'] = 2;
  ((s as any).masseuse = (s as any).masseuse ?? {})['hourly'] = 125;
  // TODO-QSP: dynamic text: "Okay," she clacks a few times on a laptop in front of her. "There. Officially r...
  scene.text(`"Okay," she clacks a few times on a laptop in front of her. "There. Officially rehired as a nude masseuse. Payment at ${qspFunc(s, 'money', 'string_profit', (((s as any).masseuse ?? {})?.['hourly'] ?? 0)*4)} per shift."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Next', goto: ['masseuse_work', 'rehire2'] },
  ]);
  scene.build();
}

function enterHandjobRehire(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
  scene.text('"I wanted to work as a handjob masseuse."');
  ((s as any).masseuse = (s as any).masseuse ?? {})['pending_rank'] = 3;
  ((s as any).masseuse = (s as any).masseuse ?? {})['hourly'] = 150;
  // TODO-QSP: dynamic text: "Okay," she clacks a few times on a laptop in front of her. "There. Officially r...
  scene.text(`"Okay," she clacks a few times on a laptop in front of her. "There. Officially rehired as a handjob masseuse. Payment at ${qspFunc(s, 'money', 'string_profit', (((s as any).masseuse ?? {})?.['hourly'] ?? 0)*4)} per shift."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Next', goto: ['masseuse_work', 'rehire2'] },
  ]);
  scene.build();
}

function enterOralRehire(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
  scene.text('"I wanted to work as an oral masseuse."');
  ((s as any).masseuse = (s as any).masseuse ?? {})['pending_rank'] = 4;
  ((s as any).masseuse = (s as any).masseuse ?? {})['hourly'] = 175;
  // TODO-QSP: dynamic text: "Okay," she clacks a few times on a laptop in front of her. "There. Officially r...
  scene.text(`"Okay," she clacks a few times on a laptop in front of her. "There. Officially rehired as an oral masseuse. Payment at ${qspFunc(s, 'money', 'string_profit', (((s as any).masseuse ?? {})?.['hourly'] ?? 0)*4)} per shift."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Next', goto: ['masseuse_work', 'rehire2'] },
  ]);
  scene.build();
}

function enterWhoreRehire(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
  scene.text('"I wanted to start working as a whore."');
  ((s as any).masseuse = (s as any).masseuse ?? {})['pending_rank'] = 5;
  ((s as any).masseuse = (s as any).masseuse ?? {})['hourly'] = 250;
  // TODO-QSP: dynamic text: "Okay," she clacks a few times on a laptop in front of her. "There. Officially r...
  scene.text(`"Okay," she clacks a few times on a laptop in front of her. "There. Officially rehired as a whore. Payment at ${qspFunc(s, 'money', 'string_profit', (((s as any).masseuse ?? {})?.['hourly'] ?? 0)*4)} per shift."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Next', goto: ['masseuse_work', 'rehire2'] },
  ]);
  scene.build();
}

function enterRehire2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'jobs', 'set_employed', 'city_salon_masseuse');
  qspCall(s, 'jobs', 'set_rank', 'city_salon_masseuse', ((s as any).masseuse ?? 0)?.['pending_rank']);
  ((s as any).masseuse = (s as any).masseuse ?? {})['salon_state'] = '';
  ((s as any).masseuse = (s as any).masseuse ?? {})['pending_rank'] = 0;
  scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
  scene.text('"And did you want to come back as a part timer or a full timer?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Part time', handler: (st: GameState) => {
    ((st as any).masseuse = (st as any).masseuse ?? {})['shifts_required'] = 5;
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"Part time."');
    scene.text('"Okay." She taps out a few more keys on her computer. "There we go. All set. Did you want to pick up some shifts now?"');
    scene.actions([
      { label: 'Maybe later', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"Maybe later."');
    scene.text('"Okay, just let me know.');
    scene.actions([
      { label: 'Leave', goto: ['salon', 'start'] },
    ]);
  } },
      { label: 'Sure', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"Sure," you say.');
    scene.text('"Here\'s what we have available right now..."');
    scene.actions([
      { label: 'Take a look', goto: ['masseuse_work', 'set_schedule', 'this_week'] },
    ]);
  } },
    ]);
  } },
    { label: 'Full time', handler: (st: GameState) => {
    ((st as any).masseuse = (st as any).masseuse ?? {})['shifts_required'] = 10;
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"Full time."');
    scene.text('"Okay." She taps out a few more keys on her computer. "There we go. All set. Did you want to pick up some shifts now?"');
    scene.actions([
      { label: 'Maybe later', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"Maybe later."');
    scene.text('"Okay, just let me know.');
    scene.actions([
      { label: 'Leave', goto: ['salon', 'start'] },
    ]);
  } },
      { label: 'Sure', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"Sure," you say.');
    scene.text('"Here\'s what we have available right now..."');
    scene.actions([
      { label: 'Take a look', goto: ['masseuse_work', 'set_schedule', 'this_week'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterFired(s: GameState, scene: SceneBuilder): void {
  ((s as any).masseuse = (s as any).masseuse ?? {})['salon_state'] = 'fired';
  ((s as any).masseuse = (s as any).masseuse ?? {})['warning'] = (-1);
  qspCall(s, 'jobs', 'set_fired', 'city_salon_masseuse');
  scene.img('images/locations/city/citycenter/mall/salon/salon.jpg');
  scene.text('Coming into the salon, you see Xian stand up to greet you.');
  // TODO-QSP: dynamic text: "<<$pcs_firstname>>, you missed another shift this week."
  scene.text(`"${((s as any).pcs_firstname ?? '')}, you missed another shift this week."`);
  scene.text('"Oh yeah, I\'m sorry about tha-"');
  // TODO-QSP: dynamic text: She shakes her head and cuts you off. "That''s three missed shifts <<$pcs_firstn...
  scene.text(`She shakes her head and cuts you off. "That's three missed shifts ${((s as any).pcs_firstname ?? '')}. You're fired."`);
  if (((s as any).job_bonus_pay ?? 0)?.['city_salon_masseuse'] > 0) {
    ((s as any).masseuse = (s as any).masseuse ?? {})['paycheck'] = qspFunc(s, 'jobs', 'paycheck', 'city_salon_masseuse', 'cash');
    scene.text('She shoves an envelope into your hands. "This is pay for the shifts you worked earlier this week."');
  }
  scene.text('The sudden confrontation has you stunned.');
  scene.text('"But-"');
  scene.text('"Your employee discount has been revoked and you are not permitted into unauthorized areas. That is all."');
  scene.text('And with that she sits down back behind the reception desk.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['salon', 'start'] },
  ]);
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
    case 'change_for_work_stress':
      enterChangeForWorkStress(s, scene);
      break;
    case 'massage_room':
      enterMassageRoom(s, scene);
      break;
    case 'shift_start':
      enterShiftStart(s, scene);
      break;
    case 'shift_end':
      enterShiftEnd(s, scene);
      break;
    case 'last_client':
      enterLastClient(s, scene);
      break;
    case 'final_cleanup':
      enterFinalCleanup(s, scene);
      break;
    case 'stretch_out':
      enterStretchOut(s, scene);
      break;
    case 'final_cleanup_menu':
      enterFinalCleanupMenu(s, scene);
      break;
    case 'break_question':
      enterBreakQuestion(s, scene);
      break;
    case 'prepare_next':
      enterPrepareNext(s, scene);
      break;
    case 'prepare_next_menu':
      enterPrepareNextMenu(s, scene);
      break;
    case 'customer_generate':
      enterCustomerGenerate(s, scene);
      break;
    case 'begin':
      enterBegin(s, scene);
      break;
    case 'fast_shift':
      enterFastShift(s, scene);
      break;
    case '1_stats':
      enter1Stats(s, scene);
      break;
    case '3_stats':
      enter3Stats(s, scene);
      break;
    case '4_stats':
      enter4Stats(s, scene);
      break;
    case '5_stats':
      enter5Stats(s, scene);
      break;
    case 'normal_end':
      enterNormalEnd(s, scene);
      break;
    case '1_pre':
      enter1Pre(s, scene);
      break;
    case '1':
      enter1(s, scene);
      break;
    case '1.handjob1':
      enter1_handjob1(s, scene);
      break;
    case '1.handjob2':
      enter1_handjob2(s, scene);
      break;
    case '1.handjob3':
      enter1_handjob3(s, scene);
      break;
    case '1.naked':
      enter1_naked(s, scene);
      break;
    case '2_pre':
      enter2Pre(s, scene);
      break;
    case '2':
      enter2(s, scene);
      break;
    case '3_pre':
      enter3Pre(s, scene);
      break;
    case '3':
      enter3(s, scene);
      break;
    case '3.1':
      enter3_1(s, scene);
      break;
    case '3.2':
      enter3_2(s, scene);
      break;
    case '4_pre':
      enter4Pre(s, scene);
      break;
    case '4':
      enter4(s, scene);
      break;
    case '4.1':
      enter4_1(s, scene);
      break;
    case '4.2':
      enter4_2(s, scene);
      break;
    case '5_pre':
      enter5Pre(s, scene);
      break;
    case '5':
      enter5(s, scene);
      break;
    case '5.1':
      enter5_1(s, scene);
      break;
    case 'job_interview1':
      enterJobInterview1(s, scene);
      break;
    case 'job_offer':
      enterJobOffer(s, scene);
      break;
    case 'whore_only_offer':
      enterWhoreOnlyOffer(s, scene);
      break;
    case 'whore_offer':
      enterWhoreOffer(s, scene);
      break;
    case 'whore_offer2':
      enterWhoreOffer2(s, scene);
      break;
    case 'naked_masseuse_accept':
      enterNakedMasseuseAccept(s, scene);
      break;
    case 'handjob_masseuse_accept':
      enterHandjobMasseuseAccept(s, scene);
      break;
    case 'blowjob_masseuse_accept':
      enterBlowjobMasseuseAccept(s, scene);
      break;
    case 'whore_masseuse_accept':
      enterWhoreMasseuseAccept(s, scene);
      break;
    case 'whore_only_append':
      enterWhoreOnlyAppend(s, scene);
      break;
    case 'part_time_full_time':
      enterPartTimeFullTime(s, scene);
      break;
    case 'masseuse_orientation':
      enterMasseuseOrientation(s, scene);
      break;
    case 'whore_orientation':
      enterWhoreOrientation(s, scene);
      break;
    case 'questions':
      enterQuestions(s, scene);
      break;
    case 'job_change':
      enterJobChange(s, scene);
      break;
    case 'job_change_nude':
      enterJobChangeNude(s, scene);
      break;
    case 'job_change_handjob':
      enterJobChangeHandjob(s, scene);
      break;
    case 'job_change_oral':
      enterJobChangeOral(s, scene);
      break;
    case 'job_change_whore':
      enterJobChangeWhore(s, scene);
      break;
    case 'payday':
      enterPayday(s, scene);
      break;
    case 'payday_end':
      enterPaydayEnd(s, scene);
      break;
    case 'resignation':
      enterResignation(s, scene);
      break;
    case 'rehire1':
      enterRehire1(s, scene);
      break;
    case 'naked_rehire':
      enterNakedRehire(s, scene);
      break;
    case 'handjob_rehire':
      enterHandjobRehire(s, scene);
      break;
    case 'oral_rehire':
      enterOralRehire(s, scene);
      break;
    case 'whore_rehire':
      enterWhoreRehire(s, scene);
      break;
    case 'rehire2':
      enterRehire2(s, scene);
      break;
    case 'fired':
      enterFired(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const masseuse_work: LocationDef = {
  name: 'masseuse_work',
  title: 'You strip down out of your clothes and stuff them into your ',
  region: 'other',
  enter: enter,
};
