import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (((s as any).trait_vars ?? 0)?.['sensitivity'] <= -2) {
    ((s as any).trait_vars ?? {})['sensitivity_override'] = 1;
  }
  scene.build();
}

function enterLeave(s: GameState, scene: SceneBuilder): void {
  if (((s as any).trait_vars ?? 0)?.['sensitivity_override'] === 1) {
    ((s as any).trait_vars ?? {})['sensitivity_override'] = 0;
  }
  // TODO-QSP: gt $ARGS[1], $ARGS[2]
  scene.build();
}

function enterHotelEnter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hotel_arrive ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).hotel_arrive = ((s as any).daystart ?? 0);
    scene.img('images/characters/pavlovsk/resident/therapist/arrive.jpg');
  } else {
    scene.img('images/characters/pavlovsk/resident/therapist/hotel_arrive4.jpg');
  }
  if (((s as any).locat ?? 0)?.['A186'] === 2) {
    scene.text('You return to your hotel room where you and your husband live and see him working on his laptop. You remove all your clothes and kneel before him. He places a hand on your head before leaning in and kisses your lips.');
  } else {
    scene.text('You return to your hotel room where you and your husband live. You remove all your clothes without a second thought.');
  }
  if (((s as any).clothingworntype ?? 0) !== 'nude') {
    qspCall(s, 'outfit', 'strip_all');
  }
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'therapist_home', 'leave', 'HotelRoom', 'therapist');
  } },
  ]);
  scene.build();
}

function enterSet_Hotelacts(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 22) {
    if (((s as any).university ?? 0)?.['student'] === 1) {
      // TODO-QSP: act 'Study(1:00)': gt 'therapist_home', 'study'
    }
    if (((s as any).locat ?? 0)?.['A186'] === 2  &&  ((s as any).hour ?? 0) >= 21) {
      // TODO-QSP: act 'Make love to you Husband': gt 'therapist_home', 'sex'
    }
    scene.actions([
      { label: 'Play on your laptop', handler: (st: GameState) => {
    qspCall(st, 'therapist_home', 'leave', 'komp', 'start');
  } },
    ]);
  }
  scene.actions([
    { label: 'Relax (1:00)', goto: ['therapist_home', 'relax'] },
  ]);
  scene.build();
}

function enterRelax(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'mood', 'raise', 'medium');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/therapist/hotel_wait_tv.jpg');
  scene.text('You lay down on the bed and relax for an hour.');
  scene.actions([
    { label: 'Back', handler: (st: GameState) => {
    qspCall(st, 'therapist_home', 'leave', 'HotelRoom', 'therapist');
  } },
  ]);
  scene.build();
}

function enterStudy(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'exp_gain', 'intel', 2);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/therapist/hotel_wait_book.jpg');
  scene.text('You sit down at the table and start to study your notes.');
  scene.text('You an hour studying before you feel like you need a break.');
  scene.actions([
    { label: 'Take a break', handler: (st: GameState) => {
    qspCall(st, 'therapist_home', 'leave', 'HotelRoom', 'therapist');
  } },
    { label: 'Continue studying (1:00)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'exp_gain', 'intel', 2);
    qspCall(s, 'stat', '');
    scene.text('You spend another hour studying before you feel like you need a break.');
    scene.actions([
      { label: 'Take a break', handler: (st: GameState) => {
    qspCall(st, 'therapist_home', 'leave', 'HotelRoom', 'therapist');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterWardrobe(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'start') {
    qspCall(s, 'therapist_home', 'leave', 'wardrobe', 'start');
  }
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    qspCall(s, 'therapist_home', 'leave', 'HotelRoom', 'therapist');
  }
  (s as any).hotelWiFi = 0;
  qspCall(s, 'therapist_home', 'leave', 'pav_hotel');
  scene.build();
}

function enterShower(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/therapist/hotel_shower1.mp4');
  scene.text('You quickly shower before heading back out to the main room.');
  (s as any).noshampoo = 1;
  qspCall(s, 'din_van', 'showerdin');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Finish showering', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/therapist/naked.jpg');
    scene.actions([
      { label: 'Leave the bathroom', handler: (st: GameState) => {
    qspCall(st, 'therapist_home', 'leave', 'HotelRoom', 'therapist');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterCook(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'stat', '');
  scene.img('images/shared/home/kitchen/cook.jpg');
  scene.text('You walk to the kitchen area and make dinner for yourself and your husband. It\'s a simple dinner with veggies and meat with potatoes.');
  scene.actions([
    { label: 'Eat cooked food', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'food', 'medium_meal_stats');
    qspCall(s, 'food', 'medium_meal_text');
    qspCall(s, 'arousal', 'foreplay', 10, 'sub');
    qspCall(s, 'stat', '');
    scene.text('You give him his plate and he gives your boob a squeeze before he eats and you sit on the bed behind him and eat yourself.');
    scene.actions([
      { label: 'Finish eating', handler: (st: GameState) => {
    qspCall(st, 'therapist_home', 'leave', 'HotelRoom', 'therapist');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterPreSleep(s: GameState, scene: SceneBuilder): void {
  ((s as any).therapistQW ?? {})['hotel_sleep_flag'] = 1;
  scene.actions([{ label: 'Continue', goto: ['therapist_home', 'pre_sleep2'] }]);
  if (((s as any).locArgs?.[0] ?? 0) === 'pre_sleep2') {
    if (((s as any).therapistQW ?? 0)?.['hotel_firstnight'] === 0) {
      scene.actions([{ label: 'Continue', goto: ['therapist_home', 'first_night'] }]);
    }
    scene.img('images/shared/sex/sleep/fondle1.jpg');
    scene.text('You lay on your back under the covers trying to get some sleep.');
    scene.text('During the night, you feel something that feels like someone is having sex with you.');
    scene.text('Your husband is taking you while you sleep, as is his right as your man.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).trait_vars ?? 0)?.['sensitivity_override'] === 1) {
      ((s as any).trait_vars ?? {})['sensitivity_override'] = 0;
    }
    qspCall(s, 'pre_sleep_events', 'event_end');
  } },
    ]);
  } else {
    if (((s as any).locArgs?.[0] ?? 0) === 'wakeup') {
      if (((s as any).therapistQW ?? 0)?.['hotel_firstnight'] === 1) {
        scene.actions([{ label: 'Continue', goto: ['therapist_home', 'first_morning'] }]);
      }
      scene.actions([{ label: 'Continue', goto: ['therapist_home', 'wakeup1'] }]);
    } else {
      if (((s as any).locArgs?.[0] ?? 0) === 'wakeup1') {
        scene.img('images/shared/sex/cum/vagcreampie/after1.jpg');
        scene.text('You wake up in the morning and scoot off the bed.');
        scene.text('You move and stretch to remove the stiffness of sleep.');
        scene.text('You feel your husband\'s cum leak out of you as you make your way to the kitchen area and make your husband some eggs and bacon before you go clean up and start your day.');
        scene.actions([
          { label: 'Cook breakfast', handler: (st: GameState) => {
    qspCall(st, 'wakeup_events', 'exit');
  }, goto: ['therapist_home', 'cook'] },
        ]);
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'leave':
      enterLeave(s, scene);
      break;
    case 'hotel_enter':
      enterHotelEnter(s, scene);
      break;
    case 'set_Hotelacts':
      enterSet_Hotelacts(s, scene);
      break;
    case 'relax':
      enterRelax(s, scene);
      break;
    case 'study':
      enterStudy(s, scene);
      break;
    case 'wardrobe':
      enterWardrobe(s, scene);
      break;
    case 'shower':
      enterShower(s, scene);
      break;
    case 'cook':
      enterCook(s, scene);
      break;
    case 'pre_sleep':
      enterPreSleep(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const therapist_home: LocationDef = {
  name: 'therapist_home',
  title: 'You return to your hotel room where you and your husband liv',
  region: 'other',
  enter: enter,
};
