import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_park', 'start');
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    if (((s as any).month ?? 0) >= 11  &&  ((s as any).month ?? 0) <= 12  ||  ((s as any).month ?? 0) >= 1  &&  ((s as any).month ?? 0) <= 3) {
      if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 23) {
      }
      if (((s as any).hour ?? 0) >= 0  &&  ((s as any).hour ?? 0) <= 7) {
      }
    } else {
      if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 23) {
      }
      if (((s as any).hour ?? 0) >= 0  &&  ((s as any).hour ?? 0) <= 7) {
      }
    }
  }
  qspCall(s, 'music_actions', 'clear_restrictions');
  if ((!((s as any).WalkInsidePark ?? 0))) {
    (s as any).WalkInsidePark = 1;
  }
  qspCall(s, 'stat', '');
  scene.text('<center><b>Park</b></center>');
  scene.img('images/locations/city/centralpark/park.jpg');
  scene.text('The central park is huge. Sandy paths spread out in every direction, and every so often you\'ll find a bench to take a seat. In the summer, you\'ll see a lot people playing ball, relaxing, or have a picnic in the more open areas, while in the winter you\'ll meet families with their children sledding down the grass banks.');
  scene.text('Despite its almost paradise-like appearance, the park can be very dangerous once the sun goes down.');
  scene.text('There is a sign that points in the general direction of the city center. You estimate the walk to the city center would take 35 minutes.');
  scene.text('The second sign points in the direction of the residential area. If you had to guess, the walk to the residential would take 20 minutes.');
  scene.text('The third sign says city industrial district on it. You estimate that the walk would take at least an hour.');
  if (((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) <= 22) {
    scene.text('The small café in the park is open. You could sit there and have some food.');
  }
  if (((s as any).drugVars ?? 0)?.['city_drugden'] === 0) {
    scene.text('The <a href="exec: gt \'city_park\', \'junkies\'">junkies</a> hang out near the cafe.');
  }
  if (((s as any).hour ?? 0) >= 9  ||  ((s as any).hour ?? 0) <= 20) {
    scene.text('There is an all year <a href="exec:gt \'city_park\', \'luna\'">fair</a> at the park which you can visit.');
  } else {
    // TODO-QSP: dynamic text: There is an all year fair at the park, but it's currently closed. Opening hours ...
    scene.text('There is an all year fair at the park, but it\'s currently closed. Opening hours are from \'+func(\'time\', \'get_time_string\', 9, 0)+\' to \'+func(\'time\', \'get_time_string\', 21, 0)+\'.');
  }
  if (qspFunc(s, 'car_funcs', 'is_here')) {
    // TODO-QSP: dynamic text: <a href="exec:gs 'carF', 'start'">Your <<$car['name']>></a> is parked nearby.
    scene.text(`<a href="exec:gs 'carF', 'start'">Your ${((s as any).car ?? 0)?.['name']}</a> is parked nearby.`);
  }
  if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).PCloSkirt ?? 0) > 2  &&  ((s as any).hour ?? 0) > 6  &&  ((s as any).hour ?? 0) <= 20  &&  (Math.floor(Math.random() * 101) + 0) >= 80) {
    qspCall(s, 'arousal', 'flash', (-5));
    scene.text('A man walks past you and notices that you didn\'t put on any panties.');
    scene.text('He whistles at you. "Did you forget to put on your underwear today, honey?"');
    if (((s as any).pcs_inhib ?? 0) >= 35) {
      qspCall(s, 'flash', 'butt', 'outdoors', 2, 2);
      qspCall(s, 'mood', 'raise', 'tiny');
      scene.text('"Nope!" you call back. "Just remembered not to!"');
      scene.text('You flip up the back of your skirt, flashing your ass at him before you keep walking with a bit of a spring in your step.');
    } else {
      if (((s as any).pcs_inhib ?? 0) > 30) {
        (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (1);
        scene.text('"Nah, just didn\'t feel like it," you shrug and continue on your way.');
      } else {
        qspCall(s, 'mood', 'lower', 'tiny');
        scene.text('You blush with shame and try to walk out of his sight as fast as possible.');
      }
    }
  }
  qspCall(s, 'treeCircEntry', 'CentralPark');
  if (((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) <= 22) {
    scene.actions([
      { label: 'Have some food in the café', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['ParkKafe', 'start'] },
    ]);
  }
  if (((s as any).hour ?? 0) >= 20  ||  ((s as any).hour ?? 0) < 6) {
    if (((s as any).home ?? 0)?.['current'] === ''  &&  ((s as any).tanwork ?? 0) === 0  &&  qspFunc(s, 'uniutil', 'student', 'not_enrolled')) {
      scene.text('It\'s quite dark now, and you have nowhere to stay nearby. Maybe you should try to sleep on a bench?');
    } else {
      scene.text('It\'s quite dark now, and you don\'t feel like walking. Maybe you should try to sleep on a bench?');
    }
    scene.actions([
      { label: 'Sleep on a bench', goto: ['placer_sex', 'sleeping_park_bench'] },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['joints'] > 0  &&  ((s as any).drugVars ?? 0)?.['weed_high'] === 0) {
    scene.actions([
      { label: 'Smoke a joint', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'drugs', 'joint');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  if (((s as any).pusher ?? 0) === 1  &&  ((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 21) {
    scene.text('There\'s a drug dealer casually sitting on one of the benches. He\'s trying not to be too suspicious.');
    scene.actions([
      { label: 'Buy "Pale Lady" aka cocaine [+$func(\'money\', \'get_cost_string\', 360)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 360) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 10;
      (s as any).temp_doses = 0;
      if (qspFunc(s, 'money', 'can_afford', ((s as any).temp_doses ?? 0) * 360) !== 1  ||  ((s as any).temp_doses ?? 0) <= 0) {
        scene.text('"Either tell me how many you want to buy or get lost!"');
      } else {
        // TODO-QSP: gs 'money', 'pay', temp_doses * 360
        ((s as any).mc_inventory ?? {})['cocaine'] = (((s as any).mc_inventory ?? {})['cocaine'] ?? 0) + (((s as any).temp_doses ?? 0));
        scene.text('You quickly pull your purse out and pay him, hoping nobody saw you giving him money, and he passes you the doses you\'ve paid for. You can safely sniff the stuff at home.');
      }
      scene.actions([
        { label: 'Casually walk away', goto: ['city_park', 'start'] },
      ]);
    }
  } },
    ]);
  }
  if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 22  &&  ((s as any).parkrunday ?? 0) !== ((s as any).daystart ?? 0)) {
    if ((!((s as any).PSport ?? 0))) {
      scene.text('You could go for a run in the park if you were wearing sports clothes and shoes.');
    } else {
      if (((s as any).pcs_stam ?? 0) < ((s as any).stammax ?? 0) / 5) {
        scene.actions([
          { label: 'Go for a run in the park (1:00)', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You''re too exhausted to do this. ...
  } },
        ]);
      } else {
        if (((s as any).pcs_energy ?? 0) < 10) {
          scene.actions([
            { label: 'Go for a run in the park (1:00)', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You''re so hungry you can''t face ...
  } },
          ]);
        } else {
          if (((s as any).pcs_hydra ?? 0) < 10) {
            scene.actions([
              { label: 'Go for a run in the park (1:00)', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You''re so thirsty you can''t face...
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Go for a run in the park (1:00)', goto: ['city_park', 'run'] },
            ]);
          }
        }
      }
    }
  }
  qspCall(s, 'music_actions', 'start');
  if (((s as any).hour ?? 0) >= 21  ||  ((s as any).hour ?? 0) < 8) {
    // TODO-QSP: If succubusQW = 14 and suchuntday ! daystart:
    scene.actions([
      { label: 'Go hunting (this can take a lot of time)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (40 + (Math.floor(Math.random() * 21) + 0) - 5 * ((s as any).succublvl ?? 0));
    qspCall(s, 'stat', '');
    if ((Math.floor(Math.random() * 8) + 0) - ((s as any).succublvl ?? 0) < 2) {
      (s as any).suchunt = 1;
      scene.actions([{ label: 'Continue', goto: ['park_walkevents', '1'] }]);
    } else {
      qspCall(s, 'mood', 'lower', 'tiny');
      scene.text('No luck! After searching for half an hour, you find no one. For such a large city, you would have thought there would be more suitable prey around. Your needs remain, so maybe another search will be required?');
      scene.actions([
        { label: 'Continue', goto: ['city_park', 'start'] },
      ]);
    }
  } },
    ]);
  }
  if (((s as any).knowsfairy ?? 0) >= 1  &&  ((s as any).pcs_magik ?? 0) > 4) {
    scene.actions([
      { label: 'Find a place the Fairy may be', handler: (st: GameState) => {
    (st as any).fairylooking = 1;
  }, goto: ['park_walkeventsrnd', ''] },
    ]);
  }
  // TODO-QSP: end
  qspCall(s, 'kseniyaQW', 'events');
  qspCall(s, 'flash', 'park');
  qspCall(s, 'blackmailer', 'set_park_act');
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk to the Residential Area (0:20)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
  }, goto: ['city_residential', ''] },
    { label: 'Walk to the City Center (0:35)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 35;
  }, goto: ['city_center', ''] },
    { label: 'Walk to the City Industrial Region (1:00)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
  }, goto: ['city_industrial', ''] },
    { label: 'Walk around the park (1:00)', goto: ['park_walkeventsrnd', ''] },
    { label: 'Sit on a bench', goto: ['placer_sex', 'sitting_park_bench'] },
  ]);
  scene.build();
}

function enterLuna(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_park', 'luna');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>The Funfair</b></center>');
  scene.img('images/locations/city/centralpark/luna.jpg');
  scene.text('The funfair sits in the heart of the park and attracts families, people on vacation, and loving couples from all over town. It\'s a popular gathering spot and a place to forget your worries for a few hours.');
  // TODO-QSP: dynamic text: Opening hours are '+func('time', 'get_time_string', 9, 0)+' to '+func('time', 'g...
  scene.text('Opening hours are \'+func(\'time\', \'get_time_string\', 9, 0)+\' to \'+func(\'time\', \'get_time_string\', 21, 0)+\'');
  if (((s as any).vladimirQW ?? 0)?.['stage'] === 0  &&  ((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 20  &&  ((s as any).week ?? 0) > 5  &&  ((s as any).pcs_hotcat ?? 0) >= 6) {
    scene.text('<a href="exec:gt \'vladimirQW_loc\'">A strong looking man is staring at you from the fences.</a>.');
  }
  if (((s as any).hour ?? 0) < 9  ||  ((s as any).hour ?? 0) >= 21) {
    // TODO-QSP: dynamic text: The fair is now closed. It will reopen at '+func('time', 'get_time_string', 9, 0...
    scene.text('The fair is now closed. It will reopen at \'+func(\'time\', \'get_time_string\', 9, 0)+\'.');
    return;
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back to the park', goto: ['city_park', 'start'] },
    { label: 'Distribute flyers to earn some money (1:00)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'money', 'earn', 50);
    qspCall(s, 'mood', 'lower', 'tiny');
    scene.img('images/locations/shared/park/job_flyer.jpg');
    // TODO-QSP: dynamic text: You spend an hour walking through the park and the funfair, chatting up random v...
    scene.text('You spend an hour walking through the park and the funfair, chatting up random visitors and trying to give them one of your flyers. You\'re paid \' + $func(\'money\', \'string_profit\', 50) + \' for your efforts.');
    scene.actions([
      { label: 'Move away', goto: ['city_park', 'luna'] },
    ]);
  } },
    { label: 'Buy some shawarma [+$func(\'money\', \'get_cost_string\', 50)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 50) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 50);
      qspCall(s, 'stat', '');
      (s as any).minut = ((s as any).minut ?? 0) + 15;
      (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
      qspCall(s, 'mood', 'raise', 'small');
      (s as any).fat = ((s as any).fat ?? 0) + (2);
      (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (30);
      (s as any).cumspclnt = 2;
      qspCall(s, 'cum_cleanup', '');
      (s as any).pcs_breath = 0;
      scene.img('images/locations/city/centralpark/luna1.jpg');
      scene.text('You enjoy the shawarma.');
      scene.actions([
        { label: 'Move away', goto: ['city_park', 'luna'] },
      ]);
    }
  } },
    { label: 'Buy some lemonade [+$func(\'money\', \'get_cost_string\', 50)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 50) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 50);
      qspCall(s, 'stat', '');
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
      qspCall(s, 'mood', 'raise', 'small');
      (s as any).fat = ((s as any).fat ?? 0) + (1);
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (40);
      (s as any).cumspclnt = 2;
      qspCall(s, 'cum_cleanup', '');
      (s as any).pcs_breath = 0;
      scene.img('images/locations/city/centralpark/luna1.jpg');
      scene.text('You happily drink the refreshing lemonade.');
      scene.actions([
        { label: 'Move away', goto: ['city_park', 'luna'] },
      ]);
    }
  } },
    { label: 'Ride the carousel [+$func(\'money\', \'get_cost_string\', 50)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 50) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 30;
      qspCall(s, 'money', 'pay', 50);
      qspCall(s, 'exp_gain', 'sprt', 2);
      qspCall(s, 'mood', 'raise', 'tiny');
      scene.img('images/locations/city/centralpark/karusel.jpg');
      // TODO-QSP: dynamic text: You pay ' + $func('money', 'string_price', 50) + ' to ride the carousel.
      scene.text('You pay \' + $func(\'money\', \'string_price\', 50) + \' to ride the carousel.');
      scene.actions([
        { label: 'Move away', goto: ['city_park', 'luna'] },
      ]);
    }
  } },
    { label: 'Shoot some targets [+$func(\'money\', \'get_cost_string\', 100)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 100) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 30;
      qspCall(s, 'money', 'pay', 100);
      scene.img('images/locations/city/centralpark/tir.jpg');
      // TODO-QSP: dynamic text: You pay ' + $func('money', 'string_price', 100) + ' for ten bullets. If you're a...
      scene.text('You pay \' + $func(\'money\', \'string_price\', 100) + \' for ten bullets. If you\'re able to hit all ten targets, you win a teddy bear.');
      scene.actions([
        { label: 'Shoot', handler: (st: GameState) => {
    (s as any).tirkoef = ((s as any).pcs_agil ?? 0) + ((s as any).pcs_shoot ?? 0);
    (s as any).tirmin = ((s as any).tirkoef ?? 0) * 20 / 100;
    (s as any).tirand = (Math.floor(Math.random() * (tirkoef + tirmin - tirkoef - tirmin + 1)) + (tirkoef - tirmin));
    if (((s as any).tirand ?? 0) >= 80) {
      (s as any).mishka = ((s as any).mishka ?? 0) + (1);
      qspCall(s, 'mood', 'raise', 'tiny');
      scene.text('You\'re able to hit all the targets. Congratulations, you\'ve won a teddy bear!');
    } else {
      if (((s as any).tirand ?? 0) >= 70) {
        scene.text('You hit all but the last target, much to your annoyance.');
      } else {
        if (((s as any).tirand ?? 0) >= 60) {
          scene.text('You hit eight targets.');
        } else {
          if (((s as any).tirand ?? 0) >= 50) {
            scene.text('You hit seven targets.');
          } else {
            if (((s as any).tirand ?? 0) >= 40) {
              scene.text('You hit six targets.');
            } else {
              if (((s as any).tirand ?? 0) >= 30) {
                scene.text('You\'re only able to hit half the targets.');
              } else {
                if (((s as any).tirand ?? 0) >= 25) {
                  scene.text('You only hit four targets.');
                } else {
                  if (((s as any).tirand ?? 0) >= 20) {
                    scene.text('You only hit three targets.');
                  } else {
                    if (((s as any).tirand ?? 0) >= 15) {
                      scene.text('You only hit two targets.');
                    } else {
                      if (((s as any).tirand ?? 0) >= 10) {
                        scene.text('You only hit one target.');
                      } else {
                        qspCall(s, 'mood', 'lower', 'tiny');
                        scene.text('You don\'t hit a single target.');
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    qspCall(s, 'exp_gain', 'shoot', 1);
    scene.actions([
      { label: 'Move away', goto: ['city_park', 'luna'] },
    ]);
  } },
      ]);
    }
  } },
    { label: 'Hit the dynamometer [+$func(\'money\', \'get_cost_string\', 20)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 20) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      scene.img('images/locations/city/centralpark/silomer.jpg');
      // TODO-QSP: dynamic text: You pay ' + $func('money', 'string_price', 20) + ' to play Ring-The-Bell.
      scene.text('You pay \' + $func(\'money\', \'string_price\', 20) + \' to play Ring-The-Bell.');
      scene.actions([
        { label: 'Bump', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 25;
    qspCall(s, 'money', 'pay', 20);
    (s as any).stKo = ((s as any).pcs_stren ?? 0) * 20/100;
    (s as any).damage = (Math.floor(Math.random() * (pcs_stren + stKo - pcs_stren - stKo + 1)) + (pcs_stren - stKo));
    qspCall(s, 'exercise', 'tier2', 5, 'stren');
    // TODO-QSP: dynamic text: An LED screen lights up and shows you your score: <<damage>>
    scene.text(`An LED screen lights up and shows you your score: ${((s as any).damage ?? 0)}`);
    if (((s as any).damage ?? 0) > ((s as any).maxdamage ?? 0)) {
      (s as any).maxdamage = qspUntranslated(s, "damage & 'Congratulations! A new personal best!'", { location: "city_park" });
    } else {
      scene.text('You swing the hammer as hard as you can, but it\'s enough to set a new record.');
    }
    scene.actions([
      { label: 'Move away', goto: ['city_park', 'luna'] },
    ]);
  } },
      ]);
    }
  } },
    { label: 'One-Armed Bandit', goto: ['city_park', 'avtomat'] },
  ]);
  scene.build();
}

function enterAvtomat(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/centralpark/avtomat.jpg');
  // TODO-QSP: dynamic text: The rules of the game are very simple: throw ' + $func('money', 'string_price', ...
  scene.text('The rules of the game are very simple: throw \' + $func(\'money\', \'string_price\', 5) + \' into the slot and pull the lever. With a bit of luck, you can win the jackpot of \' + $func(\'money\', \'string_profit\', 1000) + \'.');
  if (((s as any).hour ?? 0) <= 20) {
    scene.actions([
      { label: 'Throw in a coin and pull the lever [+$func(\'money\', \'get_cost_string\', 5)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 5) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      scene.actions([{ label: 'Continue', goto: ['city_park', 'avtomat2'] }]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Move away from the slot machine', goto: ['city_park', 'luna'] },
  ]);
  scene.build();
}

function enterAvtomat2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'money', 'pay', 5);
  qspCall(s, 'stat', '');
  (s as any).avtrand = Math.floor(Math.random() * 101) + 0;
  if (((s as any).avtrand ?? 0) === 100) {
    qspCall(s, 'money', 'earn', 1000);
    // TODO-QSP: dynamic text: Jackpot! You win ' + $func('money', 'string_profit', 1000) + '.
    scene.text('Jackpot! You win \' + $func(\'money\', \'string_profit\', 1000) + \'.');
  } else {
    if (((s as any).avtrand ?? 0) >= 95) {
      qspCall(s, 'money', 'earn', 100);
      // TODO-QSP: dynamic text: You win ' + $func('money', 'string_profit', 100) + '.
      scene.text('You win \' + $func(\'money\', \'string_profit\', 100) + \'.');
    } else {
      if (((s as any).avtrand ?? 0) >= 85) {
        qspCall(s, 'money', 'earn', 10);
        // TODO-QSP: dynamic text: You win ' + $func('money', 'string_profit', 10) + '.
        scene.text('You win \' + $func(\'money\', \'string_profit\', 10) + \'.');
      } else {
        if (((s as any).avtrand ?? 0) >= 75) {
          qspCall(s, 'money', 'earn', 5);
          // TODO-QSP: dynamic text: You win ' + $func('money', 'string_profit', 5) + '.
          scene.text('You win \' + $func(\'money\', \'string_profit\', 5) + \'.');
        } else {
          scene.text('Unfortunately, you didn\'t win anything this time.');
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Try your luck once more', goto: ['city_park', 'avtomat'] },
  ]);
  scene.build();
}

function enterWhore(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_park', 'whore');
  qspCall(s, 'stat', '');
  scene.text('<center><b>The road near the park</b></center>');
  if (((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) <= 23) {
    scene.img('images/locations/city/centralpark/park1.jpg');
    scene.text('A number of <a href="exec:gt \'prostitute\', \'start\'">prostitutes</a> are standing along the roadside. Some are picked up by passing cars.');
  } else {
    if (((s as any).hour ?? 0) >= 4  &&  ((s as any).hour ?? 0) < 16) {
      scene.img('images/locations/city/centralpark/glpark.jpg');
      scene.text('Cars pass by, but there\'s nothing interesting to see at this time of day.');
    } else {
      scene.img('images/locations/city/centralpark/park1.jpg');
      scene.text('Cars pass by, but there\'s nothing interesting to see at this time of day.');
    }
  }
  if (((s as any).pcs_inhib ?? 0) > 35) {
    scene.actions([
      { label: 'Flash your breasts', handler: (st: GameState) => {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (2);
    qspCall(s, 'flash', 'tits', 'outdoors', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go back to the park', goto: ['city_park', 'start'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back to the park (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_park', 'start'] },
  ]);
  scene.build();
}

function enterProst(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/centralpark/park2.jpg');
  if (((s as any).whoreQW ?? 0) === 2) {
    scene.text('The prostitutes look at you with curiosity.');
  } else {
    if (((s as any).whoreQW ?? 0) === 1) {
      scene.text('The prostitutes look at you with interest.');
      scene.actions([
        { label: 'Talk', handler: (st: GameState) => {
    (s as any).whoreQW = 2;
    scene.text('You walk up to a prostitute and ask her how things are done here.');
    scene.text('"If you want to work here, you need to dress like a whore and wear some make-up. We don\'t work for a pimp or anything, but we need to \'pay tribute\' to both Stella and Peacock."');
    scene.text('"Can\'t you just say no?" you ask. "It seems unfair to have to hand over your… uh, hard earned money."');
    scene.text('The woman snorts. "You don\'t say \'no\' to these kinds of people. You either pay up or bad shit happens to you. You hear?"');
    scene.text('You just nod and the woman walks away in search of clients.');
    scene.actions([
      { label: 'Leave', goto: ['city_park', 'prost'] },
    ]);
  } },
      ]);
    } else {
      scene.text('"Hey, you\'re not one of us! Are you one of Stella\'s goons? Let\'s see you try and \'collect\' for her after I knock your teeth out!"');
      qspCall(s, 'npcgeneratec', '', 0, 'Stoned Prostitute', Math.floor(Math.random() * 16) + 15);
      qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
      scene.actions([
        { label: 'Fight back', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'fight', 'initFight');
    qspCall(s, 'fight_npcdata', 'prostitute');
  }, goto: ['fight', 'start'] },
      ]);
    }
  }
  if (((s as any).whoreQW ?? 0) > 1  &&  (((s as any).PCloStyle ?? 0) === 4  ||  ((s as any).PCloProstitute ?? 0) === 1)) {
    scene.actions([
      { label: 'Search for clients (0:15)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).whrand = Math.floor(Math.random() * 101) + 0;
    if (((s as any).whrand ?? 0) <= 5) {
      scene.text('A black jeep roars up to you and a man leans out of the window. "Hey slut, it\'s time to pay tribute to the Peacock. Come over here!"');
      scene.actions([
        { label: 'Give him money [+$func(\'money\', \'get_cost_string\', 1000, ...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 1000, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 1000, 'cash');
      scene.text('You hand over the money to the man and he counts it before nodding. The window rolls back up and the jeep roars off just as quickly as it arrived.');
      scene.actions([
        { label: 'Move away', goto: ['city_park', 'prost'] },
      ]);
    }
  } },
        { label: 'Fight back', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'npcgeneratec', '', 0, 'Bandit', Math.floor(Math.random() * 23) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'fight', 'initFight');
    qspCall(s, 'fight_npcdata', 'bandit');
  }, goto: ['fight', 'start'] },
      ]);
    } else {
      if (((s as any).whrand ?? 0) > 5  &&  ((s as any).whrand ?? 0) <= 60) {
        (s as any).minut = ((s as any).minut ?? 0) + 15;
        ((s as any).stat ?? {})['bj'] = (((s as any).stat ?? {})['bj'] ?? 0) + (1);
        (s as any).guy = ((s as any).guy ?? 0) + (1);
        qspCall(s, 'money', 'earn', 500);
        qspCall(s, 'arousal_funcs', 'stretch', 'oral', 1);
        qspCall(s, 'npcgeneratec', '', 0, 'Client', Math.floor(Math.random() * 16) + 15);
        qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
        qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0));
        qspCall(s, 'dinSex', 'std_trigger_oral');
        scene.img('images/locations/highway/sex/car.jpg');
        // TODO-QSP: dynamic text: A car pulls up alongside you and the man sitting behind the wheel asks how much ...
        scene.text('A car pulls up alongside you and the man sitting behind the wheel asks how much it would cost for a blowjob. He agrees to your fee of \' + $func(\'money\', \'string_profit\', 500) + \' and opens the passenger door for you.');
        scene.text('You climb inside as he pulls his pants down and exposes his hard cock. Getting down to business, you lean down and wrap your lips tightly around his shaft before you start sucking, trying to take his dick as deep as possible while teasing him with your tongue.');
        scene.text('After just a few seconds, the client suddenly groans and his cock twitches in your mouth as he blows his load of warm cum into your throat.');
        scene.text('You swallow his cum and he quickly zips his pants up before dumping you back on the sidewalk and driving away.');
        scene.actions([
          { label: 'Return to the park', goto: ['city_park', 'prost'] },
        ]);
      } else {
        if (((s as any).whrand ?? 0) > 60  &&  ((s as any).whrand ?? 0) <= 90) {
          (s as any).minut = ((s as any).minut ?? 0) + 15;
          scene.text('You\'re walking along the sidewalk, showing off your body and your charms, but it\'s completely in vain. Nobody is interested in you.');
          scene.actions([
            { label: 'Return to the park', goto: ['city_park', 'prost'] },
          ]);
        } else {
          scene.text('A prostitute approaches you. "I see you, slut. If you don\'t want any problems, then you have to pay Stella. Come over here."');
          scene.actions([
            { label: 'Give her money [+$func(\'money\', \'get_cost_string\', 500)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 500) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 500);
      scene.text('You give the money to the prostitute and she counts it before nodding. She then turns and walks away.');
      scene.actions([
        { label: 'Move away', goto: ['city_park', 'prost'] },
      ]);
    }
  } },
            { label: 'Fight back', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'npcgeneratec', '', 0, 'Prostitute', Math.floor(Math.random() * 16) + 15);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'fight', 'initFight');
    qspCall(s, 'fight_npcdata', 'prostitute');
  }, goto: ['fight', 'start'] },
          ]);
        }
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Move away', goto: ['city_park', 'start'] },
  ]);
  scene.build();
}

function enterRape1(s: GameState, scene: SceneBuilder): void {
  ((s as any).stat ?? {})['rape_count'] = (((s as any).stat ?? {})['rape_count'] ?? 0) + (1);
  qspCall(s, 'npcgeneratec', '', 0, 'Rapist', Math.floor(Math.random() * 23) + 18);
  qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
  scene.img('images/locations/city/centralpark/sex/rape.jpg');
  scene.text('You\'re suddenly hit on the head and wake up sometime later in a bush with some guy holding you firmly in place.');
  scene.text('As you look down at yourself, you realize that you\'re not wearing anything, but before you can even react, the man suddenly rams his dick into your pussy.');
  qspCall(s, 'arousal', 'vaginal', 5, 'rape');
  // TODO-QSP: end
  scene.actions([
    { label: 'Try to resist', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 15, 'rape', 'rough');
    qspCall(s, 'cum_call', '');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'money', 'set', 0, 'cash');
    scene.text('You try everything that\'s possible in your situation to resist him, but he just tightens his grip and doesn\'t stop fucking you.');
    scene.text('Sometime later, he begins to groan and you feel his hot cum flowing inside your pussy. You hope that he didn\'t impregnate you as he zips up his pants, takes your money, and leaves.');
    scene.actions([
      { label: 'Leave', goto: ['city_park', 'start'] },
    ]);
  } },
    { label: 'Just let it happen', handler: (st: GameState) => {
    ((s as any).stat ?? {})['anal'] = (((s as any).stat ?? {})['anal'] ?? 0) + (1);
    scene.img('images/locations/city/centralpark/sex/rapean.jpg');
    scene.text('It doesn\'t take long for the rapist to realize you\'re not resisting.');
    scene.text('"Good girl!" he says as he pushes you onto all fours so that he can take you doggy-style.');
    scene.text('He spreads your buttocks and pushes his cock into your ass, causing you to cry out in pain, but he holds your mouth shut and doesn\'t stop fucking your asshole.');
    qspCall(s, 'arousal', 'anal', 15, 'rape');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).spafinloc = 12;
    qspCall(s, 'cum_manage', '');
    (s as any).spafinloc = 11;
    qspCall(s, 'cum_manage', '');
    qspCall(s, 'arousal', 'bj', 15, 'rape');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'money', 'set', 0, 'cash');
    scene.img('images/locations/city/centralpark/sex/cum.jpg');
    scene.text('"Give me a blowjob and you\'ll get your reward for not resisting, girl," he tells you.');
    scene.text('You nod obediently before pulling yourself up onto your knees and taking his dick into your mouth.');
    scene.text('It doesn\'t take long for him to groan out in pleasure. "You better swallow it all, slut!"');
    scene.text('You suddenly taste his cum on your tongue and swallow every drop of it.');
    scene.text('Once he\'s done, he stands up and buttons up his pants before taking your money.');
    scene.text('"Have a nice day, slut," he says with a grin before leaving.');
    scene.actions([
      { label: 'Stand up and leave', goto: ['city_park', 'start'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterJunkies(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  ((s as any).drugVars ?? {})['city_drugden'] = 1;
  scene.text('The junkies look at you with an apprehensive gaze. They probably think you\'re a police officer.');
  scene.text('"We don\'t sell no drugs! Go to the Drug House, ye can get some there!"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk away from them', goto: ['city_park', 'start'] },
  ]);
  scene.build();
}

function enterRun(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exercise', 'tier1', 60, 'run');
  scene.text('<center><b>Park</b></center>');
  scene.img('images/locations/shared/park/parkbeg.jpg');
  scene.text('You choose paths randomly, running them up and down. About an hour later, you\'re out of breath and heavily sweating.');
  if (((s as any).hour ?? 0) >= 20) {
    (s as any).parkrand = Math.floor(Math.random() * 11) + 0;
    if (((s as any).parkrand ?? 0) >= 8) {
      scene.text('A man steps out of the shadow of a tree and runs up to you. Before you can react, he grabs you and starts dragging you into the bushes.');
      qspCall(s, 'npcgeneratec', '', 0, 'Rapist', Math.floor(Math.random() * 23) + 18);
      qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
      if (((s as any).succubusQW ?? 0) === 14) {
        // TODO-QSP: Act 'Lure him in and feed (this can take a lot of time)':
        scene.text('You wait until he has dragged you almost to the bushes before turning on him.');
        scene.actions([
          { label: 'Continue', goto: ['succubus', 'RapistFight'] },
        ]);
      }
      scene.actions([
        { label: 'Fight', handler: (st: GameState) => {
    qspCall(s, 'fight', 'initFight');
    qspCall(s, 'fight_npcdata', 'rapist');
  }, goto: ['fight', 'start'] },
      ]);
    }
    return;
  }
  // TODO-QSP: end
  if (((s as any).pcs_inhib ?? 0) >= 35  ||  (((s as any).pcs_inhib ?? 0) >= 25  &&  ((s as any).trait_vars ?? 0)?.['exhibitionist'] > 0)) {
    scene.actions([
      { label: 'Expose your breasts', handler: (st: GameState) => {
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      scene.img('images/locations/shared/park/flash\'+rand(3, 4)+\'.jpg');
    } else {
      scene.img('images/locations/shared/park/flash\'+rand(1, 2)+\'.mp4');
    }
    scene.text('Halfway through your run, you pull up your top and expose your breasts. The cool air against your warm skin causes you to shiver, and almost immediately your nipples start to harden, a mixed reaction from the air hitting them and your growing excitement.');
    qspCall(s, 'park_walkevents', 'run_reactions');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish your run', handler: (st: GameState) => {
    scene.text('You feel great after your run. You\'re a bit sweaty, but you\'ve managed to improve your stamina, and you even feel a bit slimmer.');
    scene.actions([
      { label: 'Continue', goto: ['city_park', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'luna':
      enterLuna(s, scene);
      break;
    case 'avtomat':
      enterAvtomat(s, scene);
      break;
    case 'avtomat2':
      enterAvtomat2(s, scene);
      break;
    case 'whore':
      enterWhore(s, scene);
      break;
    case 'prost':
      enterProst(s, scene);
      break;
    case 'rape1':
      enterRape1(s, scene);
      break;
    case 'junkies':
      enterJunkies(s, scene);
      break;
    case 'run':
      enterRun(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const city_park: LocationDef = {
  name: 'city_park',
  title: 'Park',
  region: 'city',
  locationType: 'event_outdoors',
  locclass: 'city_park',
  enter: enter,
};
