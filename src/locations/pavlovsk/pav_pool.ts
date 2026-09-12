import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterBuilding(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_pool', 'building');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/swim/entrance.jpg');
  if (((s as any).hour ?? 0) >= 21  ||  ((s as any).hour ?? 0) < 8) {
    // TODO-QSP: dynamic text: The swimming pool is currently closed. Opening hours are from '+func('time', 'ge...
    scene.text('The swimming pool is currently closed. Opening hours are from \'+func(\'time\', \'get_time_string\', 8, 0)+\' to \'+func(\'time\', \'get_time_string\', 21, 0)+\'.');
    return;
  }
  scene.text('Pavlovsk\'s public swimming pool is rather dated, but still serves it\'s purpose quite well.');
  // TODO-QSP: dynamic text: The entrance fee is <<$func('money', 'string_price', 100)>> for the full day, bu...
  scene.text(`The entrance fee is ${qspFunc(s, 'money', 'string_price', 100)} for the full day, but students get a discount and it only costs them ${qspFunc(s, 'money', 'string_price', 60)}.`);
  if (((s as any).job_status ?? 0)?.['pav_pool_lifeguard'] !== 'employed') {
    ((s as any).pav_swimpool ?? {})['entrancefee'] = ((((s as any).gschoolVars ?? 0)?.['school_diploma'] <= 0) ? (60) : (100));
  }
  if (((s as any).job_status ?? 0)?.['pav_pool_lifeguard'] !== 'employed'  &&  (((s as any).job_hiring_step ?? 0)?.['pav_pool_lifeguard'] === 1  &&  ((s as any).week ?? 0) === 6  ||  ((s as any).job_hiring_step ?? 0)?.['pav_pool_lifeguard'] === 2  &&  ((s as any).week ?? 0) === 7)) {
    if (((s as any).hour ?? 0) === 8) {
      scene.text('You enter the building and are greeted by the chief lifeguard, who immediately shows you to the staff locker room.');
      return;
      scene.actions([
        { label: 'Continue', goto: ['pav_pool_lifeguard', 'training'] },
      ]);
    } else {
      // TODO-QSP: dynamic text: You were supposed to show up for lifeguard training today at ' + $func('time', '...
      scene.text('You were supposed to show up for lifeguard training today at \' + $func(\'time\', \'get_time_string\', 8, 0) + \'!');
    }
  } else {
    if (((s as any).job_status ?? 0)?.['pav_pool_lifeguard'] === 'employed'  &&  qspFunc(s, 'jobs', 'is_work_day', 'pav_pool_lifeguard', ((s as any).daystart ?? 0)) === 1  &&  ((s as any).job_last_work_day ?? 0)?.['pav_pool_lifeguard'] < ((s as any).daystart ?? 0)) {
      if (((s as any).hour ?? 0) === 11) {
        scene.text('The crowds are starting to queue up to enter as you head inside and make your way to the staff locker room to get ready for your shift.');
        return;
        scene.actions([
          { label: 'Wait for your shift to start (<<iif(minut=0, \'1:00\', \'0:<<60-minut>>\')>>)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + ((60 - ((s as any).minut ?? 0)));
  }, goto: ['pav_pool_lifeguard', 'start_shift'] },
        ]);
      } else {
        if (((s as any).hour ?? 0) === 12) {
          scene.text('The crowds have already arrived as you hurry inside and head to the staff locker room to get ready for your shift. You hope nobody will mind that you\'re late.');
          return;
          scene.actions([
            { label: 'Go to work', goto: ['pav_pool_lifeguard', 'start_shift'] },
          ]);
        } else {
          if (((s as any).hour ?? 0) > 12) {
            // TODO-QSP: dynamic text: You missed your lifeguard shift! You should have been here by ' + $func('time', ...
            scene.text('You missed your lifeguard shift! You should have been here by \' + $func(\'time\', \'get_time_string\', 12, 0) + \'!');
          }
        }
      }
    }
  }
  if (((s as any).job_status ?? 0)?.['pav_pool_lifeguard'] === 'employed') {
    scene.text('Since you work here, you\'ve been granted free entry on your days off.');
    scene.actions([
      { label: 'Enter', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['pav_pool', 'entrance'] },
    ]);
  } else {
    if (((s as any).pav_swimpool ?? 0)?.['entrancepaid'] === ((s as any).daystart ?? 0)) {
      scene.text('<b>You\'ve already paid the fee, so you can enter.</b>');
      scene.actions([
        { label: 'Enter', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['pav_pool', 'entrance'] },
      ]);
    } else {
      scene.actions([
        { label: 'Pay and enter [+$func(\'money\', \'get_cost_string\', pav_sw...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((s as any).pav_swimpool ?? 0)?.['entrancefee']) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 2;
      // TODO-QSP: gs 'money', 'pay', pav_swimpool['entrancefee']
      ((s as any).pav_swimpool ?? {})['entrancepaid'] = ((s as any).daystart ?? 0);
      qspCall(s, 'stat', '');
      scene.actions([{ label: 'Continue', goto: ['pav_pool', 'entrance'] }]);
    }
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['pav_residential', ''] },
  ]);
  scene.build();
}

function enterEntrance(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_pool', 'entrance');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/swim/entrance.jpg');
  scene.text('You\'re currently inside the entrance to the swimming pool.');
  // TODO-QSP: dynamic text: From here, you can access the <a href="exec: minut += 1 & gt 'pav_pool', 'locker...
  scene.text('From here, you can access the <a href="exec: minut += 1 & gt \'pav_pool\', \'lockerfemale\'">girls locker room</a>, visit the <a href="exec: minut += 1 & gt \'pav_pool\', \'cafeteria\'">cafeteria</a> or browse the pool\'s <a href="exec: minut += 1 & gt \'pav_pool\', \'store\'">store</a>.');
  scene.text('There\'s a sign by the store\'s entrance that reads: "If closed, I\'m working in the pool. Be back soon." It seems like the store clerk is also the janitor.');
  if (((s as any).job_hiring_step ?? 0)?.['pav_pool_lifeguard'] === 0  &&  (((s as any).year ?? 0) === 2016  &&  ((s as any).month ?? 0) < 10)) {
    // TODO-QSP: dynamic text: You also notice a sign stating that the pool is looking for an extra lifeguard a...
    scene.text('You also notice a sign stating that the pool is looking for an extra lifeguard and that anyone interested should apply in the main office between \'+func(\'time\', \'get_time_string\', 9, 0)+\' and \'+func(\'time\', \'get_time_string\', 18, 0)+\'.');
    if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 18) {
      scene.actions([
        { label: 'Apply for the lifeguard job', goto: ['pav_pool', 'lifeguard_apply'] },
      ]);
    }
  }
  if (((s as any).job_status ?? 0)?.['pav_pool_lifeguard'] === 'employed') {
    scene.actions([
      { label: 'Quit your job as a lifeguard', goto: ['pav_pool', 'lifeguard_quit'] },
    ]);
  }
  if (((s as any).job_status ?? 0)?.['pav_pool_lifeguard'] === 'employed'  &&  ((s as any).job_rank ?? 0)?.['pav_pool_lifeguard'] === 0  &&  (((s as any).year ?? 0) === 2017  &&  ((s as any).month ?? 0) === 6)  &&  (Math.floor(Math.random() * 2) + 0) === 0  &&  (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 18)) {
    // TODO-QSP: dynamic text: You see <a href="exec: minut += 1 & gt 'pav_pool', 'lifeguard_offer'">Maria</a> ...
    scene.text('You see <a href="exec: minut += 1 & gt \'pav_pool\', \'lifeguard_offer\'">Maria</a> approaching from her office, trying to get your attention.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    if (((s as any).PSwim ?? 0) === 1) {
      scene.text('<br>You need to change out of your swimwear if you want to leave!');
      scene.actions([
        { label: 'Return', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['pav_pool', 'entrance'] },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 2;
      qspCall(s, 'stat', '');
      scene.actions([{ label: 'Continue', goto: ['pav_pool', 'building'] }]);
    }
  } },
  ]);
  scene.build();
}

function enterStore(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'core_library', 'setloc', 'pav_pool', 'store');
  qspCall(s, 'stat', '');
  if (((s as any).pav_swimpool ?? 0)?.['storeclerkvisit'] > 0  &&  (((((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 10)  ||  ((s as any).hour ?? 0) >= 17)  &&  (Math.floor(Math.random() * 10) + 0) < 8)  ||  (Math.floor(Math.random() * 10) + 0) < 3) {
    scene.img('images/locations/pavlovsk/community/swim/store.jpg');
    scene.text('The store is closed right now. The clerk must be doing janitor work somewhere.');
  } else {
    scene.text('<center><h3Pool Store</h3></center>');
    scene.img('images/locations/pavlovsk/community/swim/store.jpg');
    scene.text('The store is small and barely has anything on display, but they might have some swimwear available. There is a divider if you wish to try anything on, but it doesn\'t seem to offer much privacy.');
    scene.actions([
      { label: 'Ask for swimwear', handler: (st: GameState) => {
    if (qspFunc(s, 'clothing', 'is_owned', 'scandalicious_bikinis', 46) === 0) {
      scene.actions([{ label: 'Continue', goto: ['pav_pool_events', 'store_swimsuit_buy'] }]);
    }
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.text('<center><h3>Pool Store</h3></center>');
    scene.img('images/locations/pavlovsk/community/swim/storeclerk.jpg');
    scene.text('You already own a bikini which looks similar to the one they have on sale here.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_pool', 'store'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['pav_pool', 'entrance'] },
  ]);
  scene.build();
}

function enterLockerfemale(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_pool', 'lockerfemale');
  if (((s as any).temp_curclothes ?? 0) === 'nude') {
    if (((s as any).PSwim ?? 0) === 1) {
      scene.actions([{ label: 'Continue', goto: ['pav_pool_events', 'locker_nude_to_swim'] }]);
    } else {
      if (((s as any).clothingworntype ?? 0) !== 'nude'  ||  ((s as any).pantyworntype ?? 0) !== 'none') {
        scene.actions([{ label: 'Continue', goto: ['pav_pool_events', 'locker_nude_to_clothed'] }]);
      }
    }
  } else {
    if (((s as any).temp_curclothes ?? 0) === 'swimwear') {
      if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).pantyworntype ?? 0) === 'none') {
        scene.actions([{ label: 'Continue', goto: ['pav_pool_events', 'locker_swim_to_nude'] }]);
      } else {
        if (((s as any).PSwim ?? 0) !== 1) {
          scene.actions([{ label: 'Continue', goto: ['pav_pool_events', 'locker_swim_to_clothed'] }]);
        }
      }
    } else {
      if (((s as any).temp_curclothes ?? 0) === 'norm') {
        if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).pantyworntype ?? 0) === 'none') {
          scene.actions([{ label: 'Continue', goto: ['pav_pool_events', 'locker_clothed_to_nude'] }]);
        } else {
          if (((s as any).PSwim ?? 0) === 1) {
            scene.actions([{ label: 'Continue', goto: ['pav_pool_events', 'locker_clothed_to_swim'] }]);
          }
        }
      }
    }
  }
  if ((Math.floor(Math.random() * 10) + 0) === 0  &&  ((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).pantyworntype ?? 0) === 'none'  &&  (!((s as any).locArgs?.[1] ?? 0))) {
    scene.actions([{ label: 'Continue', goto: ['pav_pool_events', 'naked_locker'] }]);
  }
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/swim/lockers.jpg');
  scene.text('The changing rooms are old, murky and uncomfortable. They\'re also very cramped and you always feel compelled to leave as quickly as possible. The small windows on one side don\'t make you feel any better.');
  // TODO-QSP: dynamic text: From here, you can access the <a href="exec: minut += 1 & gt 'pav_pool', 'shower...
  scene.text('From here, you can access the <a href="exec: minut += 1 & gt \'pav_pool\', \'showerfemale\'">showers</a> or go to the <a href="exec: minut += 1 & gt \'pav_pool\', \'mirror\'">mirrors</a> area, highly contested in busy times. You can also access the pool, but only if you\'re wearing swimwear.');
  // TODO-QSP: dynamic text: A small <a href="exec:minut += 1 & gt 'pav_pool', 'locker_fountain'">water fount...
  scene.text('A small <a href="exec:minut += 1 & gt \'pav_pool\', \'locker_fountain\'">water fountain</a> sitting against one of the walls.');
  if (qspFunc(s, 'changingroom', 'count_swim_item') === 0  &&  ((s as any).clothingworntype ?? 0) !== 'nude') {
    scene.text('You should buy some swimwear if you intend on spending time at the pool.');
  } else {
    scene.actions([
      { label: 'Change your clothes', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).pantyworntype ?? 0) === 'none') {
    } else {
      if (((s as any).PSwim ?? 0) === 1) {
      }
    }
  }, goto: ['changingroom', '', '1'] },
    ]);
  }
  if ((((s as any).pcs_makeup ?? 0) === 1  ||  ((s as any).cosmetic_tattoo ?? 0) > 0)  &&  ((s as any).PSwim ?? 0) === 1) {
    scene.actions([
      { label: 'Enter the pool area', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_pool', 'pool'] },
    ]);
  } else {
    if ((!((s as any).PSwim ?? 0))) {
      scene.text('You need to put some swimwear on first if you want to go into the pool.');
    }
    if (((s as any).pcs_makeup ?? 0) !== 1  &&  (!((s as any).cosmetic_tattoo ?? 0))) {
      scene.text('You need to wash your make-up off first if you want to go into the pool.');
    }
  }
  if (((s as any).clothingworntype ?? 0) !== 'nude') {
    scene.actions([
      { label: 'Strip all clothing', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'outfit', 'strip_all');
  }, goto: ['pav_pool', 'lockerfemale'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      scene.text('<br>You need to get dressed first!');
      scene.actions([
        { label: 'Return', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_pool', 'lockerfemale'] },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 3;
      qspCall(s, 'stat', '');
      scene.actions([{ label: 'Continue', goto: ['pav_pool', 'entrance'] }]);
    }
  } },
  ]);
  scene.build();
}

function enterShowerfemale(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/swim/showergirl.jpg');
  scene.text('The showers have seen better days. Thankfully, the water from the shower is very warm and feels great on your skin.');
  if (((s as any).clothingworntype ?? 0) !== 'nude') {
    scene.text('You need to strip before you can shower.');
  } else {
    scene.actions([
      { label: 'Take a shower', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'din_van', 'showerdin');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/gym/shower/watch.jpg');
    if (((s as any).hour ?? 0) < 10) {
      scene.text('Almost nobody comes here this early in the morning, so you have the shower to yourself.');
    } else {
      if (((s as any).hour ?? 0) < 12) {
        scene.text('The pool is rather busy at this time, mostly with families with children and a few older people. An older woman is showering right now, but it\'s otherwise quiet.');
      } else {
        if (((s as any).hour ?? 0) < 18) {
          scene.text('The pool and showers are crowded and you have to wait for someone else to finish first.');
        } else {
          if (((s as any).hour ?? 0) < 20) {
            scene.text('Not many people visit the pool this late in the evening, with only a handful of adults coming for an after work swim. You have the shower to yourself.');
          } else {
            scene.text('It\'s rather late and the pool will be closing soon. You think you\'re among the last people in the building, so you\'re alone and can enjoy the shower all to yourself.');
          }
        }
      }
    }
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the shower.');
    }
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 3) + 0) === 0  &&  ((s as any).hour ?? 0) >= 18  &&  ((s as any).hour ?? 0) < 21) {
      scene.actions([{ label: 'Continue', goto: ['pav_pool_events', 'shower_late'] }]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 1;
      scene.actions([{ label: 'Continue', goto: ['pav_pool', 'showerfemale'] }]);
    }
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back to the changing room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_pool', 'lockerfemale'] },
  ]);
  scene.build();
}

function enterMirror(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_pool', 'mirror');
  if ((Math.floor(Math.random() * 10) + 0) === 0  &&  ((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).pantyworntype ?? 0) === 'none'  &&  (!((s as any).locArgs?.[1] ?? 0))) {
    scene.actions([{ label: 'Continue', goto: ['pav_pool_events', 'naked_mirror'] }]);
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/swim/mirrorsink.jpg');
  // TODO-QSP: dynamic text: The area where the <a href="exec: minut += 1 & gt 'mirror', 'start'">mirrors</a>...
  scene.text('The area where the <a href="exec: minut += 1 & gt \'mirror\', \'start\'">mirrors</a> are is just as murky as the rest of the changing room. It\'s almost like the owners don\'t care about the dilapidated appearance.');
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    scene.text('You are completely naked.');
  }
  if (((s as any).cumloc ?? 0)[11] + ((s as any).cumloc ?? 0)[12] + ((s as any).cumloc ?? 0)[16] > 0) {
    scene.actions([
      { label: 'Clean the cum from your face', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_makeup = 1;
    qspCall(s, 'cum_cleanup', '', 9);
    qspCall(s, 'cum_cleanup', '', 13);
    if (((s as any).pcs_sweat ?? 0) > 19) {
      (s as any).pcs_sweat = ((s as any).pcs_sweat ?? 0) - (5);
    }
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/swim/washface.jpg');
    scene.text('You carefully wash the cum from your face at the sink.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_pool', 'mirror'] },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_makeup ?? 0) !== 1  &&  (!((s as any).cosmetic_tattoo ?? 0))) {
    scene.actions([
      { label: 'Wash your make-up off', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_makeup = 1;
    if (((s as any).pcs_sweat ?? 0) > 19) {
      (s as any).pcs_sweat = ((s as any).pcs_sweat ?? 0) - (5);
    }
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/swim/washface.jpg');
    scene.text('You carefully wash away your make-up at the sink.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_pool', 'mirror'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back to the changing room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_pool', 'lockerfemale'] },
  ]);
  scene.build();
}

function enterLockerFountain(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/swim/water_fountain.jpg');
  scene.text('The water fountain looks cleaner than the rest of the changing room, but you still question how hygienic it would be to drink the water from it.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Don\'t drink', handler: (st: GameState) => {
    scene.text('You decide against drinking from the water fountain.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_pool', 'lockerfemale'] },
    ]);
  } },
    { label: 'Drink some water', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'beverage', 'water_stats');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/bathroom/waterfountain.jpg');
    scene.text('You take a few sips of water from the fountain while trying not to think of your murky surroundings.');
    scene.actions([
      { label: 'Finish drinking', goto: ['pav_pool', 'lockerfemale'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterCafeteria(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_pool', 'cafeteria');
  qspCall(s, 'stat', '');
  scene.img(`images/locations/pavlovsk/community/swim/cafeteria${Math.floor(Math.random() * 2) + 1}.jpg`);
  // TODO-QSP: dynamic text: The cafeteria doesn't have a lot on the menu and only offers some basic snacks a...
  scene.text(`The cafeteria doesn't have a lot on the menu and only offers some basic snacks and beverages. A sign states that all snacks cost ${qspFunc(s, 'money', 'string_price', 100)}, all drinks cost ${qspFunc(s, 'money', 'string_price', 80)} and that only cash is accepted as payment.`);
  scene.text('Two girls in bikinis are currently ordering from the cashier.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Order', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    scene.img('images/locations/pavlovsk/community/swim/cafeteriaturn.jpg');
    scene.text('It\'s finally your turn and you take a seat on one of the stools.');
    if (((s as any).job_status ?? 0)?.['pav_pool_lifeguard'] === 'employed') {
      scene.text('Since you work here, you get a small discount at the cafeteria.');
    }
    (s as any).snack_price = ((((s as any).job_status ?? 0)?.['pav_pool_lifeguard'] === 'employed') ? (80) : (100));
    if (qspFunc(s, 'money', 'can_afford', ((s as any).snack_price ?? 0), 'cash') === 0) {
      if (((s as any).job_status ?? 0)?.['pav_pool_lifeguard'] === 'employed') {
        scene.text('Even with your discount, you still don\'t have enough money to buy a snack.');
      } else {
        scene.text('You don\'t have enough money to buy a snack.');
      }
    } else {
      scene.actions([
        { label: 'Buy a snack (<<$func(\'money\', \'string_price\', snack_price)>>) (0:05)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'money', 'pay', ((s as any).snack_price ?? 0), 'cash');
    qspCall(s, 'food', 'snack_stats');
    qspCall(s, 'stat', '');
    scene.img('images/shared/food/food.jpg');
    scene.text('You enjoy a small and tasty, but somewhat fattening, snack.');
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_pool', 'cafeteria'] },
    ]);
  } },
      ]);
    }
    (s as any).drink_price = ((((s as any).job_status ?? 0)?.['pav_pool_lifeguard'] === 'employed') ? (60) : (80));
    if (qspFunc(s, 'money', 'can_afford', ((s as any).drink_price ?? 0), 'cash') === 0) {
      if (((s as any).job_status ?? 0)?.['pav_pool_lifeguard'] === 'employed') {
        scene.text('Even with your discount, you still don\'t have enough money to buy any of the drinks on display.');
      } else {
        scene.text('You don\'t have enough money to buy any of the drinks on display.');
      }
    } else {
      scene.actions([
        { label: 'Buy a juice (<<$func(\'money\', \'string_price\', drink_price)>>) (0:05)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'money', 'pay', ((s as any).drink_price ?? 0), 'cash');
    qspCall(s, 'beverage', 'juice_stats');
    qspCall(s, 'stat', '');
    scene.img('images/shared/drinks/juice.jpg');
    scene.text('You buy and enjoy a refreshing juice.');
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_pool', 'cafeteria'] },
    ]);
  } },
        { label: 'Buy a coffee (<<$func(\'money\', \'string_price\', drink_price)>>) (0:05)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'money', 'pay', ((s as any).drink_price ?? 0), 'cash');
    qspCall(s, 'beverage', 'coffee_stats');
    qspCall(s, 'stat', '');
    scene.img('images/shared/drinks/coffee.jpg');
    scene.text('You buy and enjoy a hot coffee.');
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_pool', 'cafeteria'] },
    ]);
  } },
        { label: 'Buy a tea (<<$func(\'money\', \'string_price\', drink_price)>>) (0:05)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'money', 'pay', ((s as any).drink_price ?? 0), 'cash');
    qspCall(s, 'beverage', 'tea_stats');
    qspCall(s, 'stat', '');
    scene.img('images/shared/drinks/tea.jpg');
    scene.text('You buy and enjoy a relaxing cup of tea.');
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_pool', 'cafeteria'] },
    ]);
  } },
        { label: 'Buy an energy drink (<<$func(\'money\', \'string_price\', drink_price)>>) (0:05)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'money', 'pay', ((s as any).drink_price ?? 0), 'cash');
    qspCall(s, 'beverage', 'energy_drink_stats');
    qspCall(s, 'stat', '');
    scene.img('images/shared/drinks/energy_drink.jpg');
    scene.text('You buy and enjoy an energy drink.');
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_pool', 'cafeteria'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Drink some water (0:05)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'beverage', 'water_stats');
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/brothel/barorderwater.jpg');
    scene.text('You enjoy a glass of water.');
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_pool', 'cafeteria'] },
    ]);
  } },
      { label: 'Leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
  }, goto: ['pav_pool', 'entrance'] },
    ]);
  } },
    { label: 'Leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
  }, goto: ['pav_pool', 'entrance'] },
  ]);
  scene.build();
}

function enterPool(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_pool', 'pool');
  qspCall(s, 'stat', '');
  if (((s as any).hour ?? 0) < 10) {
    scene.img('images/locations/pavlovsk/community/swim/pool1.jpg');
    scene.text('The pool is almost empty this early in the morning. You can enjoy it almost all to yourself.');
  } else {
    if (((s as any).hour ?? 0) < 12) {
      scene.img('images/locations/pavlovsk/community/swim/pool2.jpg');
      scene.text('The pool is mostly used by families with children and older people at this time.');
    } else {
      if (((s as any).hour ?? 0) < 18) {
        scene.img('images/locations/pavlovsk/community/swim/pool3.jpg');
        scene.text('The pool is crowded with all kinds of people. This won\'t be a relaxing swim…');
      } else {
        if (((s as any).hour ?? 0) < 20) {
          scene.img('images/locations/pavlovsk/community/swim/pool4.jpg');
          scene.text('Not many visit the pool this late in the evening, with only a few adults coming for an after work swim.');
        } else {
          if (((s as any).hour ?? 0) < 21) {
            scene.img('images/locations/pavlovsk/community/swim/pool5.jpg');
            scene.text('It\'s rather late and the pool will be closing soon, so you\'re mostly alone and can enjoy the pool all to yourself.');
          } else {
            scene.img('images/locations/pavlovsk/community/swim/pool5.jpg');
            scene.text('It\'s late and the pool is closing.');
          }
        }
      }
    }
  }
  scene.text('The pool is rather old, but still has a certain charm to it. The wall to wall windows allow for a nice atmosphere during the day and there is an upper balcony where people often watch from above.');
  scene.text('From here, you can access the female locker room.');
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 21) {
    scene.actions([
      { label: 'Climb into the pool', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.img(`images/locations/pavlovsk/community/swim/ladder${Math.floor(Math.random() * 2) + 1}.jpg`);
    scene.text('You slowly climb down the ladder into the pool, probing the temperature as you go down.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_pool', 'poolwater'] },
    ]);
  } },
      { label: 'Dive into the water', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/swim/diving.jpg');
    if (((s as any).pcs_agil ?? 0) < 45) {
      scene.text('You climb up to the top of the diving board and try to jump elegantly into the water, but the landing is anything but that…');
      if ((!((s as any).PCloOnePiece ?? 0))) {
        (s as any).temp_rand = Math.floor(Math.random() * 100) + 0;
        if (((s as any).temp_rand ?? 0) < 20) {
          scene.actions([
            { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/swim/bareass.jpg');
    scene.text('As you enter the water, your bikini bottom slides down your legs and leaves your ass exposed. Thankfully, nobody seems to notice and you quickly pull it up before anyone sees you.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_pool', 'poolwater'] },
    ]);
  } },
          ]);
        } else {
          if (((s as any).temp_rand ?? 0) < 40) {
            scene.actions([
              { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/swim/toploosen.jpg');
    scene.text('As you enter the water, the knot of your bikini top loosens and your breasts pop out. Thankfully, nobody seems to notice and you quickly tie it back on before anyone sees you.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_pool', 'poolwater'] },
    ]);
  } },
            ]);
          } else {
            if (((s as any).temp_rand ?? 0) < 50) {
              scene.actions([
                { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/swim/losttop.jpg');
    scene.text('You dive into the pool and pop your head out of the water thinking that you still need to improve on your diving when you hear some boys giggling and looking at you. It\'s then that you realize your bikini top is gone!');
    scene.text('You cover your breasts and frantically look for your bikini top. Thankfully, you spot it floating nearby, grab it and quickly put it back on. The boys smile at you and leave.');
    qspCall(s, 'mood', 'lower', 'tiny');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_pool', 'poolwater'] },
    ]);
  } },
              ]);
            } else {
              if (((s as any).temp_rand ?? 0) < 60) {
                scene.actions([
                  { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/swim/bottomlost2.jpg');
    scene.text('You dive into the pool and pop your head out of the water thinking that you still need to improve your diving when you feel the water tickling your bare pussy and realize that your bikini bottom is gone!');
    scene.text('You cover your groin and frantically look for your bikini bottom. Thankfully, you spot it floating nearby, grab it and quickly slide it back on before anyone notices.');
    qspCall(s, 'mood', 'lower', 'tiny');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_pool', 'poolwater'] },
    ]);
  } },
                ]);
              }
            }
          }
        }
      }
    } else {
      if (((s as any).pcs_agil ?? 0) < 70) {
        scene.text('You climb up to the top of the diving board and jump, but end up painfully bellyflopping into the water. You need to practice being more agile.');
      } else {
        scene.text('You climb up to the top of the diving board and make a very elegant jump, sliding into the water without causing a single ripple.');
      }
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_pool', 'poolwater'] },
    ]);
  } },
      { label: 'Sit with your feet in the water', goto: ['pav_pool_events', 'feetwater'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to female locker room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_pool', 'lockerfemale'] },
  ]);
  scene.build();
}

function enterPoolwater(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_pool', 'poolwater');
  (s as any).pcs_hairbsh = 0;
  qspCall(s, 'cum_cleanup', '', 10);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/swim/inwater.jpg');
  scene.text('You are in the water. It feels very relaxing.');
  if (((s as any).deodorant_on ?? 0) === 1) {
    qspCall(s, 'sweat', 'remove_deo');
    scene.text('<br>Your deodorant gets washed away.');
  }
  if (((s as any).hour ?? 0) < 10) {
    scene.text('The pool is almost empty this early in the morning, so you have it almost all to yourself.');
  } else {
    if (((s as any).hour ?? 0) < 12) {
      scene.text('The pool mostly contains families with children and older people swimming.');
    } else {
      if (((s as any).hour ?? 0) < 18) {
        scene.text('The pool is crowded with all kinds of people. It\'s difficult to move around and exercising will be impossible.');
      } else {
        if (((s as any).hour ?? 0) < 20) {
          scene.text('Not many visit the pool this late in the evening, with only a few adults in the water.');
        } else {
          scene.text('It\'s rather late and the pool will be closing soon. You are among the last people in the building, so you can enjoy the pool all to yourself.');
        }
      }
    }
  }
  if (((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) < 18) {
    scene.text('It\'s rather busy, but you can try to do a bit of swimming or dive for a bit of fun. You could also just try to relax at the edge of the pool or right here in the water.');
  } else {
    scene.text('The pool is almost empty, so you\'re free to do a bit of relaxed swimming, exercise with a more powerful swim or dive for a bit of fun. You could also just relax at the edge of the pool or right here in the water.');
  }
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 21) {
    if (((s as any).hour ?? 0) < 12  ||  ((s as any).hour ?? 0) >= 18) {
      scene.actions([
        { label: 'Exercise', goto: ['pav_pool_events', 'exerciseswim'] },
      ]);
    }
    scene.actions([
      { label: 'Relaxed swim', goto: ['pav_pool_events', 'relaxedswim'] },
      { label: 'Dive', goto: ['pav_pool_events', 'dive'] },
      { label: 'Relax at the edge of the pool', goto: ['pav_pool_events', 'edgepool'] },
      { label: 'Relax in the water', goto: ['pav_pool_events', 'relaxedwater'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Exit pool', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_pool', 'exitpool'] },
  ]);
  scene.build();
}

function enterExitpool(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_pool', 'exitpool');
  qspCall(s, 'stat', '');
  (s as any).temp_rand = Math.floor(Math.random() * 15) + 0;
  if (((s as any).temp_rand ?? 0) < 4  &&  ((s as any).PCloOnePiece ?? 0) === 0  &&  ((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) < 18) {
    scene.img('images/locations/pavlovsk/community/swim/exitloosebra.jpg');
    scene.text('As you exit the pool, you don\'t notice that your top has loosened and your breasts are almost on full display for all to see. You finally notice when your top falls off and your breasts are fully exposed.');
    if (((s as any).pcs_inhib ?? 0) >= 40) {
      scene.actions([
        { label: 'Put it back on here', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/swim/losttop.jpg');
    scene.text('You blush slightly as you fumble to grab your top, leaving your breasts exposed to a group of grinning boys in the pool.');
    scene.text('"We\'ve already seen them, so you might as well keep them out!"');
    if (((s as any).tits ?? 0) >= 4) {
      scene.text('"Yeah, leave those knockers hanging out! It\'s not like that bikini was doing much to hold them in anyway!"');
    }
    scene.text('You pick up your bikini top, trying not to show anything else as you put it back on, much to the disappoinment of the boys.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_pool', 'pool'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Run to the locker room to fix it', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/swim/losttop.jpg');
    scene.text('Blushing heavily, you cover up as best as you can, but a group of boys have already seen you and seem to be enjoying the show.');
    scene.text('"Oh, come on! We already saw them, let us see some more!"');
    if (((s as any).tits ?? 0) >= 4) {
      scene.text('"It\'s not like that bikini was doing a good job holding those knockers in place anyway!"');
    }
    scene.text('You pick up your bikini top, trying not to show anything else as you run towards the locker rooms to put it back on.');
    qspCall(s, 'mood', 'lower', 'small');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_pool', 'lockerfemale'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).temp_rand ?? 0) === 4  &&  ((s as any).PCloOnePiece ?? 0) === 0  &&  ((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) < 18) {
      scene.img('images/locations/pavlovsk/community/swim/exitloosebra.jpg');
      scene.text('As you exit the pool, you don\'t notice that your bikini top has loosened and your breasts are almost on full display for all to see.');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/swim/bratkid.jpg');
    scene.text('You finally notice when your top falls off and your breasts are completely exposed. You cover them as best as you can and turn around to look for your top just in time to see a boy pick it up with a devious smile.');
    scene.text('"If you want it back, come and get it!" He then jumps in the water and swims off.');
    scene.actions([
      { label: 'Run to the locker room', handler: (st: GameState) => {
    scene.text('Blushing in embarrassment, you run to the locker room. Once there you strip naked. You can get rid of this bottom since it\'s useless now.');
    qspCall(s, 'outfit', 'strip_all');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_pool', 'lockerfemale'] },
    ]);
  } },
      { label: 'Jump into the water after him', handler: (st: GameState) => {
    ((s as any).pav_swimpool ?? {})['boystole'] = 1;
    ((s as any).pav_swimpool ?? {})['toplost'] = 1;
    scene.img('images/locations/pavlovsk/community/swim/losttop.jpg');
    scene.text('You jump bravely into the water after him. He swims off towards the other side of the pool and you attempt to follow, but the pool is full and many notice your lewdness. You suddenly realize, stop and cover yourself as a number of people stare at you.');
    scene.text('You could try to reach the edge of the pool, but you would have to get very close to other people. You could also wait and hope that the pool empties a little without calling attention to yourself.');
    scene.actions([
      { label: 'Wait', goto: ['pav_pool_events', 'watertoplost'] },
      { label: 'Try to reach the edge', goto: ['pav_pool_events', 'tryreachedgenotop'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.img(`images/locations/pavlovsk/community/swim/ladder${Math.floor(Math.random() * 2) + 1}.jpg`);
      scene.text('You climb out of the pool.');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_pool', 'pool'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterLifeguardApply(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/swim/lifeguard_office.jpg');
  scene.text('Finding your way to the specified office, you knock on the door and enter to see a middle aged woman in a red one piece swimsuit sitting at a desk looking over some paperwork.');
  scene.text('"Can I help you?" she asks as she looks up at you.');
  scene.text('"Yes," you reply. "I\'m here about the lifeguard job?"');
  scene.text('"Ah," she replies in turn. "Take a seat."');
  scene.text('She points to the chair in front of her and you take a seat.');
  scene.text('"Stupid question, but I need to ask it. You <i>can</i> swim, yes?"');
  scene.text('You nod. "Since I was a little girl. I think I actually learned how to swim in this very pool."');
  scene.text('"Okay then. The job\'s simple," she states. "One of our lifeguards is in a spot of bother right now and I need someone to cover for them on weekends during our busy period between 12 and 6. The job\'s only temporary for now, but we\'ll see how things work out and it might become permanent. Sound good?"');
  scene.text('"How much is the pay?" you ask.');
  // TODO-QSP: dynamic text: The woman smiles. "The obvious question. You'll get <<$func('money', 'string_pro...
  scene.text(`The woman smiles. "The obvious question. You'll get ${qspFunc(s, 'money', 'string_profit', 250)} a day, plus free entry to the pool and a discount at the cafeteria when you're not on shift. Still interested?"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Take the job', handler: (st: GameState) => {
    ((s as any).job_hiring_step ?? {})['pav_pool_lifeguard'] = 1;
    qspCall(s, 'stat', '');
    scene.text('You nod. "Sounds good. When do I start?"');
    scene.text('"I don\'t see you actually needing to do anything other than make sure the swimmers behave themselves, but I need you to come by next Saturday when we open at 8 so I can give you some training. It will take a few hours over the course of two days, but I\'m not authorised to pay you for it."');
    scene.text('You frown slightly, but still nod.');
    scene.text('"Great, now if you\'ll excuse me, I need to head to the pool and make sure Vadim is actually doing his job. I swear that boy can\'t keep it in his pants and has to flirt with every bikini-clad pretty girl that walks through here."');
    scene.text('She quickly ushers you out of her office and locks the door before hurrying off. As she disappears down the hallway, you realize that you didn\'t even exchange names.');
    scene.actions([
      { label: 'Return to the entrance area', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['pav_pool', 'entrance'] },
    ]);
  } },
    { label: 'Turn the offer down', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('You shake your head. "Sorry, but it doesn\'t sound like this job is for me."');
    scene.text('She nods. "Understandable. The offer <i>might</i> still stand if you change your mind."');
    scene.text('She then stands up from her desk.');
    scene.text('"If you\'ll excuse me, I need to head to the pool and make sure Vadim is actually doing his job. I swear that boy can\'t keep it in his pants and has to flirt with every bikini-clad pretty girl that walks through here."');
    scene.text('She quickly ushers you out of her office and locks the door before hurrying off.');
    scene.actions([
      { label: 'Return to the entrance area', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['pav_pool', 'entrance'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterLifeguardQuit(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/swim/lifeguard_office.jpg');
  scene.text('You make your way to Maria\'s office and knock on the door before entering.');
  // TODO-QSP: dynamic text: Maria smiles at you from behind her desk. "Hello <<$pcs_firstname>>. How can I h...
  scene.text(`Maria smiles at you from behind her desk. "Hello ${((s as any).pcs_firstname ?? 0)}. How can I help you?"`);
  scene.text('"I was thinking of moving on from this job," you reply.');
  scene.text('"I understand. This isn\'t the most glamorous job, especially for a young woman like yourself who probably has ambitions beyond this town, yes?"');
  scene.text('You just smile and nod as she types something into her computer.');
  scene.text('"Are you 100% sure that you want to quit?" she asks. "There\'s no going back once I remove you from our system."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Yes', handler: (st: GameState) => {
    qspCall(s, 'jobs', 'set_terminated', 'pav_pool_lifeguard');
    scene.text('"Yes, I\'m sure," you state. "I enjoyed working here, but I think it\'s time for me to go."');
    scene.text('"Of course," she replies. "It was a pleasure to work with you. Have a nice day."');
    scene.text('She returns her attention to her computer as you turn to leave her office.');
    scene.actions([
      { label: 'Leave', goto: ['pav_pool', 'entrance'] },
    ]);
  } },
    { label: 'Change your mind', handler: (st: GameState) => {
    scene.text('"On second thought, I think I might stay a little longer. Just until I figure some things out."');
    scene.text('"Okay…" she replies, looking a little confused. "You\'re free to continue working here as long as you want."');
    scene.text('She then returns her attention to her computer as you turn to leave her office.');
    scene.actions([
      { label: 'Leave', goto: ['pav_pool', 'entrance'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterLifeguardOffer(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/swim/lifeguard_office.jpg');
  // TODO-QSP: dynamic text: "I need to speak with you, <<$pcs_firstname>>," she says as she approaches you. ...
  scene.text(`"I need to speak with you, ${((s as any).pcs_firstname ?? 0)}," she says as she approaches you. "Come with me to my office."`);
  scene.text('You follow her to her office and she motions for you to take a seat.');
  scene.text('"We need to discuss your employment here," she says and your heart starts racing as she sits across from you.');
  scene.text('"You\'ve been working with us far longer than I originally expected and have proven to be a most reliable employee, far better than the girl you\'re covering, which brings me to my next point."');
  scene.text('She looks you straight in the eye. Is she going to fire you?');
  scene.text('"The idiot got herself in even more trouble over the past few months, so her job is up for grabs if you\'re interested?"');
  scene.text('You breathe a sigh of relief. "I thought you were going to let me go, not offer me a permanent position!"');
  scene.text('"Like I said, you\'ve proven yourself an excellent employee, so her job is yours if you want it. You\'ll still be working between 12 and 6, but you would now be working Thursday and Friday as well as the weekend. What do you say?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Accept', handler: (st: GameState) => {
    qspCall(s, 'jobs', 'set_rank', 'pav_pool_lifeguard', 1);
    qspCall(s, 'jobs', 'change_schedule', 'pav_pool_lifeguard', 1);
    scene.text('"I accept," you reply. "I\'m in need of a summer job that now school is over."');
    scene.text('"Excellent," she smiles. "Don\'t be afraid to quit if you have plans to go to university or whatever."');
    scene.text('She returns her attention to her computer as you turn to leave her office.');
    scene.actions([
      { label: 'Leave', goto: ['pav_pool', 'entrance'] },
    ]);
  } },
    { label: 'Turn her down', handler: (st: GameState) => {
    qspCall(s, 'jobs', 'set_terminated', 'pav_pool_lifeguard');
    scene.text('"Sorry, but I wasn\'t thinking of making this a permanent job," you reply.');
    scene.text('"I understand. A girl like you probably has ambitions beyond this town, like going to university?"');
    scene.text('You just smile and nod.');
    scene.text('"Then I need you to understand that I can\'t keep you in that case since I need someone permanent to replace that air headed bimbo. I\'m sorry to see you go, but good luck with your future."');
    scene.text('You both stand up and she shakes your hand before walking you to the door of her office.');
    scene.actions([
      { label: 'Leave', goto: ['pav_pool', 'entrance'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'building':
      enterBuilding(s, scene);
      break;
    case 'entrance':
      enterEntrance(s, scene);
      break;
    case 'store':
      enterStore(s, scene);
      break;
    case 'lockerfemale':
      enterLockerfemale(s, scene);
      break;
    case 'showerfemale':
      enterShowerfemale(s, scene);
      break;
    case 'mirror':
      enterMirror(s, scene);
      break;
    case 'locker_fountain':
      enterLockerFountain(s, scene);
      break;
    case 'cafeteria':
      enterCafeteria(s, scene);
      break;
    case 'pool':
      enterPool(s, scene);
      break;
    case 'poolwater':
      enterPoolwater(s, scene);
      break;
    case 'exitpool':
      enterExitpool(s, scene);
      break;
    case 'lifeguard_apply':
      enterLifeguardApply(s, scene);
      break;
    case 'lifeguard_quit':
      enterLifeguardQuit(s, scene);
      break;
    case 'lifeguard_offer':
      enterLifeguardOffer(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pav_pool: LocationDef = {
  name: 'pav_pool',
  title: '<br>You need to change out of your swimwear if you want to leave!',
  region: 'pavlovsk',
  locationType: 'public_indoors',
  enter: enter,
};
