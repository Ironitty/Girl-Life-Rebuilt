import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

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
  // TODO-QSP: end
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
  // TODO-QSP: end
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
      scene.actions([
        { label: 'Study(1:00)', goto: ['therapist_home', 'study'] },
      ]);
    }
    if (((s as any).locat ?? 0)?.['A186'] === 2  &&  ((s as any).hour ?? 0) >= 21) {
      scene.actions([
        { label: 'Make love to you Husband', goto: ['therapist_home', 'sex'] },
      ]);
    }
    scene.actions([
      { label: 'Play on your laptop', handler: (st: GameState) => {
    qspCall(st, 'therapist_home', 'leave', 'komp', 'start');
  } },
    ]);
  }
  // TODO-QSP: end
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
  // TODO-QSP: end
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
  // TODO-QSP: end
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
  // TODO-QSP: end
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
  // TODO-QSP: end
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
  // TODO-QSP: end
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
  scene.build();
}

function enterPreSleep2(s: GameState, scene: SceneBuilder): void {
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
  scene.build();
}

function enterWakeup(s: GameState, scene: SceneBuilder): void {
  if (((s as any).therapistQW ?? 0)?.['hotel_firstnight'] === 1) {
    scene.actions([{ label: 'Continue', goto: ['therapist_home', 'first_morning'] }]);
  }
  scene.actions([{ label: 'Continue', goto: ['therapist_home', 'wakeup1'] }]);
  scene.build();
}

function enterWakeup1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/cum/vagcreampie/after1.jpg');
  scene.text('You wake up in the morning and scoot off the bed.');
  scene.text('You move and stretch to remove the stiffness of sleep.');
  scene.text('You feel your husband\'s cum leak out of you as you make your way to the kitchen area and make your husband some eggs and bacon before you go clean up and start your day.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Cook breakfast', handler: (st: GameState) => {
    qspCall(st, 'wakeup_events', 'exit');
  }, goto: ['therapist_home', 'cook'] },
  ]);
  scene.build();
}

function enterSex(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A186');
  qspCall(s, 'arousal', 'foreplay', (-1));
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/therapist/naked1.jpg');
  scene.text('You lay down on the bed, squeezing your boobs in anticipation of your husband coming to you.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 10, 'sub');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/therapist/sex.jpg');
    scene.text('Your husband walks over to the bed and lays next to you and starts to rub a hand over your breasts and gives them a squeeze.');
    scene.text('He leans in and sucks on your nipples making you moan softly. He spends a few minutes nursing on your breasts and squeezing them before he gets between your legs and pushes into you.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 20, 'sub');
    qspCall(s, 'arousal', 'foreplay', (-20), 'sub');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/therapist/sex2.jpg');
    scene.text('Its not long before he\'s making love to you, moaning your name all the while fondling you.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'cum_call', '', 0, 'A186', 2, 0, 15000, 60);
    qspCall(s, 'arousal', 'end');
    scene.img('images/shared/sex/cum/vagcreampie/after1.jpg');
    scene.text('He groans and you feel his seed enter your womb and then he lays his head on your breasts and starts to snore a little.');
    scene.actions([
      { label: 'Go to sleep', handler: (st: GameState) => {
    if (((s as any).trait_vars ?? 0)?.['sensitivity_override'] === 1) {
      ((s as any).trait_vars ?? {})['sensitivity_override'] = 0;
    }
    qspCall(s, 'shortgs', 'autosave');
  }, goto: ['pre_sleep', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterFirstNight(s: GameState, scene: SceneBuilder): void {
  ((s as any).therapistQW ?? {})['hotel_firstnight'] = 1;
  scene.img('images/characters/pavlovsk/resident/therapist/naked1.jpg');
  scene.text('You lay down on the bed, as you have done all your life, ready to sleep the night away, when your husband joins you.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'kiss', 10, 'sub');
    qspCall(s, 'arousal', 'foreplay', (-10), 'sub');
    qspCall(s, 'arousal', 'vaginal', (-5), 'sub');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/therapist/sex.jpg');
    scene.text('He starts to kiss your lips and neck while his hands move to your breasts. You return any kiss that is placed on your lips. It\'s not long after starting that he is on top of you, his cock inside you, pumping away as if his life depends on it.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 15, 'sub');
    qspCall(s, 'cum_call', '', 0, 'A186', 2, 0, 15000, 60);
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/resident/therapist/sex2.jpg');
    scene.text('You know deep down something is wrong but you only know that you are able to get off with him and accept his form of love. With each thrust inside you, you have a small orgasm. After a few minutes, you feel him dump a large load inside you and holds you close to him, not pulling out.');
    // TODO-QSP: dynamic text: <<$func('wrap', 'hypno', '"We will be doing this every night, of every day, unti...
    scene.text(`${qspFunc(s, 'wrap', 'hypno', '"We will be doing this every night, of every day, until one of us drops dead"')} he says more of a joke than anything. ${qspFunc(s, 'wrap', 'hypno', qspUntranslated(s, "'\"You will be unable to sleep unless I am with you. You belong to me  &", { location: "therapist_home" }))} He orders. ${qspFunc(s, 'wrap', 'hypno', '"You will be in my bed every night. If you are not, you will be punished in whatever way I see fitting"')}`);
    scene.actions([
      { label: 'Yes, sir', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/vagcreampie/after1.jpg');
    // TODO-QSP: dynamic text: <<$func('wrap', 'hypno', '"Good, now rest, for tomorrow, you will start your lif...
    scene.text(`${qspFunc(s, 'wrap', 'hypno', '"Good, now rest, for tomorrow, you will start your life as my wife"')} He says holding you to his chest and pulling a blanket over you two and you drift off to sleep.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).trait_vars ?? 0)?.['sensitivity_override'] === 1) {
      ((s as any).trait_vars ?? {})['sensitivity_override'] = 0;
    }
    qspCall(s, 'pre_sleep_events', 'event_end');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterFirstMorning(s: GameState, scene: SceneBuilder): void {
  ((s as any).therapistQW ?? {})['hotel_firstnight'] = 2;
  (s as any).pcs_energy = 100;
  (s as any).pcs_hydra = 100;
  scene.img('images/characters/pavlovsk/resident/therapist/naked1.jpg');
  scene.text('You wake up and see your husband already awake and working on something on his laptop. "Good Morning, Dear. How about you make us some breakfast?" he says and you slide out of bed and move over to the kitchenette and start to make him breakfast. While you hand him his plate of food, you hear a snap and you go blank.');
  // TODO-QSP: dynamic text: <<$func('wrap', 'hypno', '"My Wife, every morning you will wake up and make brea...
  scene.text(`${qspFunc(s, 'wrap', 'hypno', '"My Wife, every morning you will wake up  &&  make breakfast for Me  &&  our children. I can handle lunch on my own, dinner too, but when we move to a larger place, you will be responsible for dinner too, Understand?"')} he says and you say in a monotone voice "Yes, Sir"`);
  scene.text('The snap is heard again and you blink for a moment. "You ok, wife?" he asks');
  scene.text('You nod. "Yes, just drifted off" you reply');
  scene.text('"Oh, well go take a shower and then go get some air" He orders');
  // TODO-QSP: end
  scene.actions([
    { label: 'Take a Shower', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/therapist/hotel_shower1.mp4');
    (s as any).noshampoo = 1;
    qspCall(s, 'din_van', 'showerdin');
    scene.text('You stand in the shower and let the water pour over you. You think about your life.');
    scene.text('You are still a teenager and now you are married. You can\'t recall how it all happened but you feel a bit worried but also happy. As if it\'s just first-time jitters.');
    scene.text('You finish up and get dressed. When you walk into the hotel room, you see that your husband has already left for the day, so you head out yourself.');
    scene.actions([
      { label: 'Leave the Hotel', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'wear_last_worn');
    qspCall(s, 'wakeup_events', 'exit');
    qspCall(s, 'therapist_home', 'leave', 'pav_market');
  } },
    ]);
  } },
  ]);
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
    case 'pre_sleep2':
      enterPreSleep2(s, scene);
      break;
    case 'wakeup':
      enterWakeup(s, scene);
      break;
    case 'wakeup1':
      enterWakeup1(s, scene);
      break;
    case 'sex':
      enterSex(s, scene);
      break;
    case 'first_night':
      enterFirstNight(s, scene);
      break;
    case 'first_morning':
      enterFirstMorning(s, scene);
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
