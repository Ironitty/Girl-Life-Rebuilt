import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterPavParkImage(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h2>Pavlovsk Park</h2></center>');
  if (((s as any).month ?? 0) === 3  ||  ((s as any).month ?? 0) === 4  ||  ((s as any).month ?? 0) === 5) {
    if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
      scene.img('images/locations/pavlovsk/lake/skver.spring.jpg');
    } else {
      scene.img('images/locations/pavlovsk/lake/skver.spring.night.jpg');
    }
  } else {
    if (((s as any).month ?? 0) === 6  ||  ((s as any).month ?? 0) === 7  ||  ((s as any).month ?? 0) === 8) {
      if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
        scene.img('images/locations/pavlovsk/park/skver.jpg');
      } else {
        scene.img('images/locations/pavlovsk/lake/skver.summer.night.jpg');
      }
    } else {
      if (((s as any).month ?? 0) === 9  ||  ((s as any).month ?? 0) === 10  ||  ((s as any).month ?? 0) === 11) {
        if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
          scene.img('images/locations/pavlovsk/lake/skver.autumn.jpg');
        } else {
          scene.img('images/locations/pavlovsk/lake/skver.autumn.night.jpg');
        }
      } else {
        if (((s as any).month ?? 0) === 1  ||  ((s as any).month ?? 0) === 2  ||  ((s as any).month ?? 0) === 12) {
          if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
            scene.img('images/locations/pavlovsk/lake/skver.winter.jpg');
          } else {
            scene.img('images/locations/pavlovsk/lake/skver.winter.night.jpg');
          }
        }
      }
    }
  }
  scene.build();
}

function enterAlbFatherMeeting_1(s: GameState, scene: SceneBuilder): void {
  (s as any).AlbinaQW['ParkRally'] = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/event/meeting/meeting1.jpg');
  scene.text('A speech is ringing out to a cheering crowd.');
  scene.text('"We need to take care of the corruption in our police force! How many of our daughters must be raped because our petty excuses for officers allow crime to run rampant in our streets for a handful of rubles from the very criminals they\'re supposed to fight?"');
  scene.text('You take a closer look and see that it\'s Albina\'s father speaking. He\'s going hard on the authorities while the crowd gets rowdier.');
  scene.text('"Calm down, everyone! Don\'t take out your anger now! Instead, show them at the ballots how upset you truly are!" Albina\'s father finishes to cheers from the crowd.');
  scene.actions([
    { label: 'Go on with your day', goto: ['pav_park', 'start'] },
  ]);
  scene.build();
}

function enterAlbFatherMeeting_2(s: GameState, scene: SceneBuilder): void {
  (s as any).AlbinaQW['ParkRally'] = 2;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/event/meeting/meeting2.jpg');
  scene.text('"Don\'t believe the ridiculous accusations thrown against me! They\'re fake news!" He slams the podium as he passionately speaks.');
  scene.text('The crowd keeps calm, except for his most die-hard supporters, who yell profanities and accusations against the current administration as Albina\'s father continues.');
  scene.text('"My opponents are desperate, desperate because I\'m about to unravel their web of lies, corruption and bribes that let them laugh at you from up in their ivory towers while you fight for scraps down in the dirt!"');
  scene.text('He slams the podium again.');
  scene.actions([
    { label: 'Go on with your day', goto: ['pav_park', 'start'] },
  ]);
  scene.build();
}

function enterAlbFatherMeeting_3(s: GameState, scene: SceneBuilder): void {
  (s as any).AlbinaQW['ParkRally'] = 3;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/event/meeting/meeting3.jpg');
  scene.text('You walk over to see the commotion, and you see Albina\'s father speaking to the crowd as usual. This time, however, he seems very nervous and stutters while speaking to the masses. He continues for a few more minutes, and is sweating profoundly by the end of the speech as some of the crowd call him out on his hypocrisy.');
  scene.text('He clears his throat a few times. "And now for some entertainment from my daughter and her dance group. If you look to the right, there are some refreshments available."');
  scene.text('He awkwardly steps away from the podium as the music starts, and the girls reluctantly step out. They\'re all wearing skintight, skimpy leotards that leave nothing to the imagination. Some men whistle and holler while others and most of the women look on in disgust, whispering that they can\'t believe that young girls would wear such revealing outfits.');
  scene.text('You stay and watch the performance. The girls are clearly uncomfortable with the situation, and you see Albina glare at her father a few times. Finally, the girls finish their performance and quickly run from the stage as Albina\'s father desperately tries to appease his diminishing crowd as everyone leaves, yourself included.');
  scene.actions([
    { label: 'Leave', goto: ['pav_park', 'start'] },
  ]);
  scene.build();
}

function enterDeeperPark(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_park', 'deeper_park');
  qspCall(s, 'stat', '');
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    if (((s as any).month ?? 0) >=11  &&  ((s as any).month ?? 0) <= 12  ||  ((s as any).month ?? 0) >=1  &&  ((s as any).month ?? 0) <=3) {
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
  if (((s as any).month ?? 0) >= 3  &&  ((s as any).month ?? 0) < 6) {
    if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
      scene.text('<center><h2>Pavlovsk Park</h2></center>');
      scene.img('images/locations/pavlovsk/lake/skver.spring.jpg');
      scene.text('As you go deeper into the park, you see fewer and fewer people. There are some nice trails to walk along deeper in the park, plus some secluded areas where kids and teenagers alike enjoy hanging out.');
      if ((!((s as any).sunWeather ?? 0))) {
        if (((s as any).temper ?? 0) < 5) {
          scene.text('You can\'t believe it, but it\'s snowing today. With winter over, you had hoped the snow was done for the year.');
        } else {
          scene.text('You frown as you feel the rain pelting your body. Otherwise, spending time in the park would be a lovely day.');
        }
      }
    } else {
      qspCall(s, 'exp_gain', 'prcptn', Math.floor(Math.random() * 2) + 1);
      scene.text('<center><h2>Pavlovsk Park</h2></center>');
      scene.img('images/locations/pavlovsk/lake/skver.spring.night.jpg');
      scene.text('As you go deeper into the park, you see someone running through the park in the distance, probably using it as a shortcut to go home faster. Unfortunately, they\'re the only person you see at the moment.');
      scene.text('There are some nice trails to walk along deeper in the park. However, you\'re well aware it can get dangerous in the park the darker it gets.');
      if ((!((s as any).sunWeather ?? 0))) {
        if (((s as any).temper ?? 0) < 5) {
          scene.text('You can\'t believe it, but it\'s snowing tonight. With winter over, you had hoped that the snow was done for the year.');
        } else {
          scene.text('You frown as you feel the rain pelting your body. Otherwise, spending time in the park would be such a lovely evening.');
        }
      }
    }
  } else {
    if (((s as any).month ?? 0) >= 6  &&  ((s as any).month ?? 0) < 9) {
      if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
        scene.text('<center><h2>Pavlovsk Park</h2></center>');
        scene.img('images/locations/pavlovsk/park/skver.jpg');
        scene.text('As you go deeper into the park, you see fewer and fewer people, only occasional groups hanging out together or families having a picnic.');
        scene.text('There are some excellent trails to walk along deeper in the park, plus some secluded areas where kids and teenagers alike enjoy hanging out.');
        if ((!((s as any).sunWeather ?? 0))) {
          if (((s as any).temper ?? 0) < 5) {
            scene.text('You can\'t believe it, but it\'s snowing today. Why is it snowing in the middle of summer?! You look up at the heavens and get no response.');
          } else {
            scene.text('You frown as you feel the rain pelting your body, but your frown gives way to a smile. The warm rain feels good on your exposed skin.');
          }
        }
      } else {
        qspCall(s, 'exp_gain', 'prcptn', Math.floor(Math.random() * 2) + 1);
        scene.text('<center><h2>Pavlovsk Park</h2></center>');
        scene.img('images/locations/pavlovsk/lake/skver.summer.night.jpg');
        scene.text('As you go deeper into the park, you see one person running through the park in the distance, probably using it as a shortcut to go home faster. Unfortunately, they\'re the only person you see at the moment.');
        scene.text('There are some nice trails to walk along deeper in the park. However, you\'re well aware it can get dangerous in the park the darker it gets.');
        if ((!((s as any).sunWeather ?? 0))) {
          if (((s as any).temper ?? 0) < 5) {
            scene.text('You can\'t believe it, but it\'s snowing this evening. Why is it snowing in the middle of summer?! You look up at the heavens and get no response.');
          } else {
            scene.text('You frown as you feel the rain pelting your body, but your frown gives way to a smile. The warm rain feels good on your exposed skin.');
          }
        }
      }
    } else {
      if (((s as any).month ?? 0) >= 9  &&  ((s as any).month ?? 0) < 12) {
        if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
          scene.text('<center><h2>Pavlovsk Park</h2></center>');
          scene.img('images/locations/pavlovsk/lake/skver.autumn.jpg');
          scene.text('As you go deeper into the park, you see fewer and fewer people. There are some nice trails to walk along deeper in the park, plus some secluded areas where kids and teenagers alike enjoy hanging out.');
          if ((!((s as any).sunWeather ?? 0))) {
            if (((s as any).temper ?? 0) < 5) {
              scene.text('You can\'t believe it, but it\'s snowing today. You hope this isn\'t a sign that winter is coming early this year.');
            } else {
              scene.text('You frown as you feel the rain pelting your body. Otherwise, spending time in the park would be a lovely day.');
            }
          }
        } else {
          scene.text('<center><h2>Pavlovsk Park</h2></center>');
          scene.img('images/locations/pavlovsk/lake/skver.autumn.night.jpg');
          scene.text('As you go deeper into the park, you see one person running through the park in the distance, probably using it as a shortcut to go home faster. Unfortunately, they\'re the only person you see at the moment.');
          scene.text('There are some nice trails to walk along deeper in the park. However, you\'re well aware it can get dangerous in the park the darker it gets, and the chill in the air doesn\'t help make your surroundings feel any more inviting.');
          if ((!((s as any).sunWeather ?? 0))) {
            if (((s as any).temper ?? 0) < 5) {
              scene.text('You can\'t believe it, but it\'s snowing today. You hope this isn\'t a sign that winter is coming early this year.');
            } else {
              scene.text('You frown as you feel the rain pelting your body. Otherwise, spending time in the park would be such a lovely evening.');
            }
          }
        }
      } else {
        if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
          scene.text('<center><h2>Pavlovsk Park</h2></center>');
          scene.img('images/locations/pavlovsk/lake/skver.winter.jpg');
          scene.text('As you go deeper into the park, you see fewer and fewer people. The ones you see are mostly hurrying along or couples on romantic walks together.');
          scene.text('There are some excellent trails to walk along deeper in the park, plus some secluded areas where kids and teenagers alike enjoy hanging out.');
          if ((!((s as any).sunWeather ?? 0))) {
            if (((s as any).temper ?? 0) < 5) {
              scene.text('You look up at the snow coming down. Despite the cold, it is a beautiful sight to behold.');
            } else {
              scene.text('You frown as you feel the freezing rain pelting your body. The cold water chills you to the bone.');
            }
          }
        } else {
          scene.text('<center><h2>Pavlovsk Park</h2></center>');
          scene.img('images/locations/pavlovsk/lake/skver.winter.night.jpg');
          scene.text('The main square of Pavlovsk Park. It\'s winter, and the nights in Pavlovsk are freezing.');
          scene.text('As you expected, this part of the park is completely deserted at night. However, you occasionally see a wild animal scrounging for food.');
          if ((!((s as any).sunWeather ?? 0))) {
            if (((s as any).temper ?? 0) < 5) {
              scene.text('You look up at the snow coming down. Despite the cold, it is a beautiful sight to behold.');
            } else {
              scene.text('You frown as you feel the freezing rain pelting your body. The cold water chills you to the bone.');
            }
          }
        }
      }
    }
  }
  if ((((s as any).sunWeather ?? 0) === 1  &&  ((s as any).temper ?? 0) > 0)) {
    qspCall(s, 'anushka_konstantinov_schedule', '');
    qspCall(s, 'arkadi_fyodorov_schedule', '');
    qspCall(s, 'radomir_popov_schedule', '');
    qspCall(s, 'valentin_bogdanov_schedule', '');
    if ((Math.floor(Math.random() * 3) + 0) === 0  ||  ((s as any).gopniksev ?? 0)?.['rand'] === 0) {
      (s as any).gopniksev['rand'] = Math.floor(Math.random() * 4) + 1;
    }
    if (((s as any).gopniksev ?? 0)?.['rand'] === 1  &&  ((s as any).gopniksev ?? 0)?.['gopgirls'] !== ((s as any).daystart ?? 0)  &&  ((s as any).locat ?? 0)?.['A144'] === 23  &&  ((((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) < 18)  ||  (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) < 18))) {
      // TODO-QSP: dynamic text: You see your classmates <a href="exec:minut += 3 & gt 'pav_parkev', 'gopgirls'">...
      scene.text('You see your classmates <a href="exec:minut += 3 & gt \'pav_parkev\', \'gopgirls\'">Lena, Lera, Anushka and Alyona</a> sitting at a picnic table, drinking beer and hanging out.');
    } else {
      if (((s as any).gopniksev ?? 0)?.['rand'] === 2  &&  ((s as any).gopniksev ?? 0)?.['gopboys'] !== ((s as any).daystart ?? 0)  &&  ((s as any).locat ?? 0)?.['A156'] === 23  &&  ((((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) < 18)  ||  (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) < 18))) {
        // TODO-QSP: dynamic text: You see your classmates <a href="exec:minut += 3 & gt 'pav_parkev', 'gopboys'">V...
        scene.text('You see your classmates <a href="exec:minut += 3 & gt \'pav_parkev\', \'gopboys\'">Vitek, Dan, Lavrenti, Roman, Arkadi, Vasily and Pauline</a> sitting at a picnic table, drinking beer and hanging out.');
      } else {
        if (((s as any).gopniksev ?? 0)?.['rand'] === 3  &&  ((s as any).gopniksev ?? 0)?.['gopniks'] !== ((s as any).daystart ?? 0)  &&  ((s as any).locat ?? 0)?.['A144'] === 23  &&  ((s as any).locat ?? 0)?.['A154'] === 23  &&  ((s as any).locat ?? 0)?.['A156'] === 23  &&  ((s as any).locat ?? 0)?.['A158'] === 23  &&  ((((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) < 18)  ||  (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) < 18))) {
          // TODO-QSP: dynamic text: You see your classmates <a href="exec:minut += 3 & gt 'pav_parkev', 'gopniks'">V...
          scene.text('You see your classmates <a href="exec:minut += 3 & gt \'pav_parkev\', \'gopniks\'">Vitek, Dan, Lavrenti, Roman, Arkadi, Valentin, Radomir, Vasily, Pauline, Lena, Lera, Anushka and Alyona</a> sitting at a picnic table, drinking beer and hanging out.');
        } else {
          if (((s as any).gopniksev ?? 0)?.['rand'] === 4  &&  ((s as any).gopniksev ?? 0)?.['gopskver'] !== ((s as any).daystart ?? 0)  &&  ((((s as any).week ?? 0) >= 6  &&  ((((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 12)  ||  (((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) < 20)))  ||  (((s as any).week ?? 0) < 6  &&  (((s as any).hour ?? 0) >= 18  &&  ((s as any).hour ?? 0) < 20)))) {
            // TODO-QSP: dynamic text: You see your classmates <a href="exec:minut += 3 & gt 'gopskver'">Vitek, Dan and...
            scene.text('You see your classmates <a href="exec:minut += 3 & gt \'gopskver\'">Vitek, Dan and Vasily</a> sitting on a park bench, drinking beer.');
          } else {
            (s as any).gopniksev['rand'] = Math.floor(Math.random() * 4) + 1;
            scene.text('You don\'t see any of the gopniks hanging out in the park.');
          }
        }
      }
    }
  }
  qspCall(s, 'treeCircEntry', 'PavlovskPark');
  qspCall(s, 'kseniyaQW', 'events');
  qspCall(s, 'flash', 'park');
  qspCall(s, 'pav_park', 'set_run_act');
  qspCall(s, 'pav_park', 'set_sleep_act');
  if (((s as any).mc_inventory ?? 0)?.['joints'] > 0  &&  ((s as any).drugVars ?? 0)?.['weed_high'] === 0) {
    scene.actions([
      { label: 'Smoke a joint', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'drugs', 'joint');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  qspCall(s, 'camera', 'check_location');
  scene.actions([
    { label: 'Walk to the Residential area (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
    { label: 'Walk to the Commercial area (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_commercial', ''] },
    { label: 'Walk to Pushkin (0:25)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 25;
  }, goto: ['pushkin', ''] },
    { label: 'Go back to the entrance (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['pav_park', 'start'] },
    { label: 'Go for a walk (0:15)', handler: (st: GameState) => {
    if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  (Math.floor(Math.random() * 4) + 0) === 0  &&  (Math.floor(Math.random() * 4) + 1) <= ((s as any).pcs_magik ?? 0)  &&  (((s as any).hour ?? 0) <= 6  ||  ((s as any).hour ?? 0) >= 19)) {
      (s as any).minut = ((s as any).minut ?? 0) + 15;
      qspCall(s, 'stat', '');
      scene.actions([{ label: 'Continue', goto: ['MagEncounterFairy', ''] }]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 15;
      qspCall(s, 'stat', '');
      qspCall(s, 'pav_parkev', 'go_for_walk2');
    }
  } },
    { label: 'Sit down on the bench', goto: ['placer_sex', 'sitting_park_bench'] },
  ]);
  scene.build();
}

function enterSetRunAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 22  &&  ((s as any).daybegskver ?? 0) !== ((s as any).daystart ?? 0)) {
    if ((!((s as any).PSport ?? 0))) {
      scene.text('You could jog around the park if you were wearing sports clothes and shoes.');
    } else {
      if (((s as any).pcs_stam ?? 0) < ((s as any).stammax ?? 0) / 5) {
        scene.actions([
          { label: 'Jog through the park (1:00)', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You are too exhausted to do this. ...
  } },
        ]);
      } else {
        if (((s as any).pcs_energy ?? 0) < 10) {
          scene.actions([
            { label: 'Jog through the park (1:00)', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too hungry to do this.')
  } },
          ]);
        } else {
          if (((s as any).pcs_hydra ?? 0) < 10) {
            scene.actions([
              { label: 'Jog through the park (1:00)', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too thirsty to do this.')
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Jog through the park (1:00)', goto: ['pav_park', 'run'] },
            ]);
          }
        }
      }
    }
  }
  scene.build();
}

function enterRun(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exercise', 'tier1', 60, 'run');
  (s as any).daybegskver = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/park/parkbeg.jpg');
  scene.text('You prepare for a nice jog through the beautiful park, pacing yourself so you last for a full hour.');
  if (((s as any).pcs_inhib ?? 0) >= 35  ||  (((s as any).pcs_inhib ?? 0) >= 25  &&  ((s as any).trait_vars ?? 0)?.['exhibitionist'] > 0)) {
    scene.actions([
      { label: 'Expose your breasts', handler: (st: GameState) => {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (2);
    qspCall(s, 'arousal', 'flash', 5);
    qspCall(s, 'arousal', 'end');
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      scene.img('images/locations/shared/park/flash\'+rand(3, 4)+\'.jpg');
    } else {
      scene.img('images/locations/shared/park/flash\'+rand(1, 2)+\'.mp4');
    }
    scene.text('Halfway through your run, you pull up your top and expose your breasts. The cool air against your warm skin causes you to shiver.');
    scene.text('Almost immediately, your nipples start to harden, a mixed reaction from the air hitting them and your growing excitement.');
    qspCall(s, 'pav_park', 'run_reactions');
  } },
    ]);
  }
  scene.actions([
    { label: 'Finish your run', handler: (st: GameState) => {
    scene.text('You feel great after your jogging session. You\'re a bit sweaty, but you\'ve also improved your stamina. You even feel a bit slimmer.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterRunReactions(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) >= 20) {
    scene.text('Being so late, there isn\'t anyone in the park who can see you, but it doesn\'t matter. The thrill and pleasure are still there.');
    scene.text('Once you\'re finished, you make sure to pull your top back down.');
    qspCall(s, 'arousal', 'flashlite', (-10));
    qspCall(s, 'arousal', 'end');
  } else {
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      scene.text('Despite being daytime, you go unnoticed during your run. However, you still find yourself aroused and excited by the thought of being seen by a stranger or someone you know.');
      scene.text('Once you\'re finished, you make sure to pull your top back down.');
      qspCall(s, 'arousal', 'flashlite', (-10));
      qspCall(s, 'arousal', 'end');
    } else {
      scene.text('You come across a group of gopniks loitering in a circle, empty beer bottles scattered around them. They\'re loudly talking among themselves, but as you near the group, one of them notices you and quickly interrupts his friends to point you out to everyone.');
      scene.text('You can\'t help but smile slightly as you watch them rush to stand and then fight over getting at the front so they can see you better. As you run by, some start to clap and whistle while a few shout at you.');
      scene.text('"Is this real, or am I fucking dreaming?!"');
      scene.text('"You need a running partner, babe? I can go all day, every day!"');
      scene.text('"Just another crazy slut."');
      scene.text('You continue your run until their catcalling can\'t be heard anymore.');
      qspCall(s, 'arousal', 'flashlite', (-10));
      qspCall(s, 'arousal', 'end');
    }
  }
  scene.text('You feel great after your jogging session. Of course, you\'re a bit sweaty, but you\'ve also improved your stamina. You even feel a bit slimmer.');
  scene.actions([
    { label: 'Finish your run', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterSetSleepAct(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).hour ?? 0) >= 20  ||  ((s as any).hour ?? 0) < 6)  &&  (((s as any).pcs_sleep ?? 0) <= 30  ||  ((s as any).cheatVars ?? 0)?.['sleep'] !== 0)) {
    (s as any).pavlovsk_home = qspFunc(s, 'homes_properties', 'has_access', 'shared_apartment')  ||  qspFunc(s, 'homes_properties', 'has_access', 'meynold_household')  ||  qspFunc(s, 'homes_properties', 'has_access', 'parents_home')  ||  qspFunc(s, 'homes_properties', 'has_access', 'lyceum_dorm');
    if (((s as any).pavlovsk_home ?? 0) === 0  &&  ((s as any).job_status ?? 0)?.['pav_voc_school_teacher'] !== 'employed'  &&  ((s as any).HotelRoom ?? 0)?.['pav'] < 1) {
      if (qspFunc(s, 'money', 'can_afford', 500)) {
        scene.text('It\'s pretty dark now. Maybe you could get a room in the hotel?');
      } else {
        scene.text('It\'s pretty dark now and you have nowhere to stay nearby. Maybe you should try to sleep on a bench?');
      }
      if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
        scene.text('You could also try your luck at Uncle Shulgin\'s apartment?');
      }
    } else {
      if (((s as any).pavlovsk_home ?? 0) === 1  &&  (((s as any).hour ?? 0) >= 22  ||  ((s as any).hour ?? 0) < 6)) {
        scene.text('It\'s pretty dark outside and you\'re starting to feel tired. Maybe you should head home?');
      } else {
        if (((s as any).HotelRoom ?? 0)?.['pav'] > 0) {
          scene.text('It\'s pretty dark outside and you\'re starting to feel tired. Maybe you should head back to the hotel?');
        } else {
          scene.text('It\'s pretty dark now and you\'re starting to feel tired. Maybe you should try sleeping on a bench?');
        }
      }
    }
    scene.actions([
      { label: 'Sleep on a bench', goto: ['pav_park', 'sleeping_park_bench'] },
    ]);
  }
  scene.build();
}

function enterSleepingParkBench(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (5);
  (s as any).pcs_hairbsh = 0;
  qspCall(s, 'sleep_simple', 'simple');
  if (((s as any).PCloStyle2 ?? 0) === 4  ||  ((s as any).PCloSchool ?? 0) === 1) {
    scene.img('images/locations/shared/park/sleeping_park_form.jpg');
  } else {
    if (((s as any).PCloSkirt ?? 0) > 0) {
      scene.img('images/locations/shared/park/sleeping_park_dress.jpg');
    } else {
      if (((s as any).PCloPants ?? 0) > 3) {
        scene.img('images/locations/shared/park/sleeping_park_shorts.jpg');
      } else {
        scene.img('images/locations/shared/park/sleeping_park_jeans.jpg');
      }
    }
  }
  if (((s as any).pcs_makeup ?? 0) !== 1  &&  (!((s as any).cosmetic_tattoo ?? 0))) {
    (s as any).pcs_makeup = 0;
    (s as any).vidageday = ((s as any).vidageday ?? 0) - (1);
    scene.text('Your makeup smears across your face as you sleep, which is harmful to your appearance. Your skin ages faster from this.');
  }
  scene.text('You\'re feeling tired and decide to try and get some sleep on the park bench.');
  if (((s as any).alko ?? 0) >= 7  &&  ((s as any).pcs_hotcat ?? 0) >= 6) {
    scene.actions([{ label: 'Continue', goto: ['placer_sex', 'sleeping_park_alco_rape'] }]);
  }
  scene.actions([
    { label: 'Wake up', handler: (st: GameState) => {
    if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).PCloSkirt ?? 0) > 0) {
      scene.img('images/locations/shared/park/sleeping_park.jpg');
      scene.text('You wake up with a smile, stretching your arms and legs while flashing your bare pussy to the entire park.');
    } else {
      if (((s as any).PCloSkirt ?? 0) > 0  &&  (Math.floor(Math.random() * 10) + 1) <= 9) {
        qspCall(s, 'underwear', 'dispose');
        scene.img('images/locations/shared/park/sleeping_park.jpg');
        scene.text('You wake up with a smile, stretching your arms and legs when you suddenly realize your panties are missing. You quickly close your legs as you fearfully hope that whoever took them didn\'t take advantage of you while you were sleeping.');
      } else {
        scene.img('images/locations/shared/park/sleeping_park2.jpg');
        scene.text('You wake up with a smile, stretching your arms and legs.');
      }
    }
    if ((Math.floor(Math.random() * 10) + 0) < 6  &&  ((s as any).money ?? 0) > 0) {
      qspCall(s, 'money', 'set', 0, 'cash');
      scene.text('You realize that someone stole your money while you were sleeping!');
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'pav_park_image':
      enterPavParkImage(s, scene);
      break;
    case 'alb_father_meeting_1':
      enterAlbFatherMeeting_1(s, scene);
      break;
    case 'alb_father_meeting_2':
      enterAlbFatherMeeting_2(s, scene);
      break;
    case 'alb_father_meeting_3':
      enterAlbFatherMeeting_3(s, scene);
      break;
    case 'deeper_park':
      enterDeeperPark(s, scene);
      break;
    case 'set_run_act':
      enterSetRunAct(s, scene);
      break;
    case 'run':
      enterRun(s, scene);
      break;
    case 'run_reactions':
      enterRunReactions(s, scene);
      break;
    case 'set_sleep_act':
      enterSetSleepAct(s, scene);
      break;
    case 'sleeping_park_bench':
      enterSleepingParkBench(s, scene);
      break;
    default:
      enterPavParkImage(s, scene);
      break;
  }
}

export const pav_park: LocationDef = {
  name: 'pav_park',
  title: '<br>You are too exhausted to do this. Recover your stamina before trying to go for a run.',
  region: 'pavlovsk',
  locationType: 'public_outdoors',
  locclass: 'city_park',
  enter: enter,
};
