import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h2>Pavlovsk Park</h2></center>');
  if (((s as any).month ?? 0) === 3  ||  ((s as any).month ?? 0) === 4  ||  ((s as any).month ?? 0) === 5) {
    if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
      scene.img('images/locations/pavlovsk/lake/skver.spring.jpg');
    } else {
      scene.img('images/locations/pavlovsk/lake/skver.spring.night.jpg');
    }
  } else {
    if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
      scene.img('images/locations/pavlovsk/park/skver.jpg');
    } else {
      scene.img('images/locations/pavlovsk/lake/skver.summer.night.jpg');
    }
    if (((s as any).month ?? 0) === 9  ||  ((s as any).month ?? 0) === 10  ||  ((s as any).month ?? 0) === 11) {
      if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
        scene.img('images/locations/pavlovsk/lake/skver.autumn.jpg');
      } else {
        scene.img('images/locations/pavlovsk/lake/skver.autumn.night.jpg');
      }
    } else {
      if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
        scene.img('images/locations/pavlovsk/lake/skver.winter.jpg');
      } else {
        scene.img('images/locations/pavlovsk/lake/skver.winter.night.jpg');
      }
    }
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'start'  ||  ((s as any).locArgs?.[0] ?? 0) === '') {
    qspCall(s, 'core_library', 'setloc', 'pav_park', 'start');
    qspCall(s, 'stat', '');
    qspCall(s, 'vicky_meynold_schedule', '');
    qspCall(s, 'Zvereva_schedule', '');
    qspCall(s, 'schedule', 'A23');
    qspCall(s, 'music_actions', 'clear_restrictions');
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
    qspCall(s, 'pav_park', 'pav_park_image');
    if (((s as any).month ?? 0) === 3  ||  ((s as any).month ?? 0) === 4  ||  ((s as any).month ?? 0) === 5) {
      if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
        scene.text('The main square of Pavlovsk Park. Spring has come, melting the worst of the snow. As a result, the trees are sprouting new leaves.');
        scene.text('There are puddles everywhere, all the remains from the melted snow. Many people in the park are having fun with them, trying to jump over them and mocking those that fail. They\'re not particularly deep though; plenty of others just walk through without giving them a second thought.');
        scene.text('The park isn\'t particularly crowded this time of year. However, many people think it\'s too cold to spend much time outdoors.');
        if (((s as any).sunWeather ?? 0) === 0) {
          if (((s as any).temper ?? 0) < 5) {
            scene.text('You can\'t believe it, but it\'s snowing today. With winter over, you had hoped the snow was done for the year.');
          } else {
            scene.text('You frown as you feel the rain pelting your body. Otherwise, it would be a nice day to spend in the park.');
          }
        }
      } else {
        qspCall(s, 'exp_gain', 'prcptn', Math.floor(Math.random() * 2) + 1);
        scene.text('The main square of Pavlovsk Park. Spring has come, melting the worst of the snow. As a result, the trees are sprouting new leaves.');
        scene.text('There is no particular reason to visit the park during the night, so it\'s largely deserted. However, in the distance, you see one person running through the park, probably using it as a shortcut to go home faster.');
        if (((s as any).sunWeather ?? 0) === 0) {
          if (((s as any).temper ?? 0) < 5) {
            scene.text('You can\'t believe it, but it\'s snowing tonight. With winter over, you had hoped that the snow was done for the year.');
          } else {
            scene.text('You frown as you feel the rain pelting your body. Otherwise, it would be a lovely evening to spend in the park.');
          }
        }
      }
    }
    if (((s as any).month ?? 0) === 6  ||  ((s as any).month ?? 0) === 7  ||  ((s as any).month ?? 0) === 8) {
      if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
        scene.text('The main square of Pavlovsk Park. At this time of year, it\'s one of the primary places in town where locals and tourists enjoy spending their spare time.');
        scene.text('It\'s always busy: people are resting, walking, playing and dating to their heart\'s desires, enjoying the pleasant surroundings.');
        if (((s as any).sunWeather ?? 0) === 0) {
          if (((s as any).temper ?? 0) < 5) {
            scene.text('You can\'t believe it, but it\'s snowing today. Why is it snowing in the middle of summer?! You look up at the heavens and get no response.');
          } else {
            scene.text('You frown as you feel the rain pelting your body, but your frown gives way to a smile. The warm rain feels good on your exposed skin.');
          }
        }
      } else {
        qspCall(s, 'exp_gain', 'prcptn', Math.floor(Math.random() * 2) + 1);
        scene.text('The main square of Pavlovsk Park. At this time of year, it\'s one of the places where locals and tourists enjoy going in their spare time.');
        scene.text('However, there is no particular reason to visit the park during the night, and as a result, it\'s largely deserted. In the distance, you see one person running through the park, probably using it as a shortcut to get home faster.');
        if (((s as any).sunWeather ?? 0) === 0) {
          if (((s as any).temper ?? 0) < 5) {
            scene.text('You can\'t believe it, but it\'s snowing this evening. Why is it snowing in the middle of summer?! You look up at the heavens and get no response.');
          } else {
            scene.text('You frown as you feel the rain pelting your body, but your frown gives way to a smile. The warm rain feels good on your exposed skin.');
          }
        }
      }
    }
    if (((s as any).month ?? 0) === 9  ||  ((s as any).month ?? 0) === 10  ||  ((s as any).month ?? 0) === 11) {
      if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
        scene.text('The main square of Pavlovsk Park. Autumn has come, and some trees are already shedding their leaves. The leaves still on the trees have changed colour and are a beautiful mix of red and brown.');
        scene.text('Everywhere in the park, people enjoy nature. Some take photos of the fallen leaves, kids play around and couples walk hand-in-hand, simply enjoying each other\'s company.');
        if (((s as any).sunWeather ?? 0) === 0) {
          if (((s as any).temper ?? 0) < 5) {
            scene.text('You can\'t believe it, but it\'s snowing today. You hope this isn\'t a sign that winter is coming early this year.');
          } else {
            scene.text('You frown as you feel the rain pelting your body. Otherwise, it would be a nice day to spend in the park.');
          }
        }
      } else {
        scene.text('The main square of Pavlovsk Park. Autumn has come, and some trees are already shedding their leaves.');
        scene.text('It gets pretty cold at night, and you try to stay active to keep yourself warm. The lone soul you see running across the park is probably trying to get home faster and out of the cold.');
        if (((s as any).sunWeather ?? 0) === 0) {
          if (((s as any).temper ?? 0) < 5) {
            scene.text('You can\'t believe it, but it\'s snowing today. You hope this isn\'t a sign that winter is coming early this year.');
          } else {
            scene.text('You frown as you feel the rain pelting your body. Otherwise, it would be a lovely evening to spend in the park.');
          }
        }
      }
    }
    if (((s as any).month ?? 0) === 1  ||  ((s as any).month ?? 0) === 2  ||  ((s as any).month ?? 0) === 12) {
      if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
        scene.text('The main square of Pavlovsk Park. It\'s winter, and the park is busy with locals and tourists alike.');
        scene.text('There\'s snow everywhere, and kids have gathered to make snowmen and enjoy snowball fights. Some adults are joining them, happy to play like kids again for a moment.');
        if (((s as any).sunWeather ?? 0) === 0) {
          if (((s as any).temper ?? 0) < 5) {
            scene.text('You look up at the snow coming down. Despite the cold, it is a beautiful sight to behold.');
          } else {
            scene.text('You frown as you feel the freezing rain pelting your body. The cold water chills you to the bone.');
          }
        }
      } else {
        scene.text('The main square of Pavlovsk Park. It\'s winter, and the nights in Pavlovsk are freezing.');
        scene.text('As you expected, the park is mostly deserted. However, you occasionally see a wild animal scrounging for food.');
        if (((s as any).sunWeather ?? 0) === 0) {
          if (((s as any).temper ?? 0) < 5) {
            scene.text('You look up at the snow coming down. Despite the cold, it is a beautiful sight to behold.');
          } else {
            scene.text('You frown as you feel the freezing rain pelting your body. The cold water chills you to the bone.');
          }
        }
      }
    }
    if (((s as any).hour ?? 0) > 8  &&  ((s as any).hour ?? 0) < 19) {
      // TODO-QSP: 'There''s a small <a href="exec:minut += 5
      // TODO-QSP: gt ''pav_cinema''">movie theatre</a> in the park.'
    }
    // TODO-QSP: dynamic text: The newly opened cafe <a href="exec:gt'cafe_parco','start'">"Del Parco"</a>, wit...
    scene.text('The newly opened cafe <a href="exec:gt\'cafe_parco\',\'start\'">"Del Parco"</a>, with an eye-catching facade, lots of tables and a summer terrace. Two paths lead out of the park. One brings you to the <a href="exec:minut += 5 & gt \'pav_commercial\'">commercial</a> area, the other to the <a href="exec:minut += 5 & gt \'pav_residential\'">residential</a> area.');
    if (((((s as any).month ?? 0) === 8  &&  ((s as any).day ?? 0) > 20)  ||  (((s as any).month ?? 0) === 9  &&  ((s as any).day ?? 0) < 16))  &&  ((s as any).week ?? 0) > 5  &&  ((s as any).hour ?? 0) > 8  &&  ((s as any).hour ?? 0) < 20  &&  ((s as any).AlbinaQW ?? 0)?.['ParkRally'] === 0) {
      // TODO-QSP: dynamic text: <br>You overhear someone speaking in front of a crowd. The crowd is quite rowdy,...
      scene.text('<br>You overhear someone speaking in front of a crowd. The crowd is quite rowdy, yelling and clapping throughout the <a href="exec: minut += 2 & gt \'pav_park\', \'alb_father_meeting_1\'">meeting</a>.');
    } else {
      // TODO-QSP: dynamic text: Once again, a large crowd has gathered in the town center. You can hear Albina's...
      scene.text('Once again, a large crowd has gathered in the town center. You can hear Albina\'s father holding a public <a href="exec: minut += 2 & gt \'pav_park\', \'alb_father_meeting_2\'">meeting</a>.');
      if (((((s as any).month ?? 0) === 10  &&  ((s as any).day ?? 0) > 20)  ||  (((s as any).month ?? 0) === 11  &&  ((s as any).day ?? 0) < 16))  &&  ((s as any).week ?? 0) > 5  &&  ((s as any).hour ?? 0) > 8  &&  ((s as any).hour ?? 0) < 20  &&  ((s as any).AlbinaQW ?? 0)?.['ParkRally'] === 2  &&  ((s as any).AlbinaQW ?? 0)?.['StarletsShutDown'] === 0  &&  ((s as any).AlbinaQW ?? 0)?.['StarletsJoined'] === 0) {
        // TODO-QSP: dynamic text: By this time, you're well aware that Albina's father is holding a <a href="exec:...
        scene.text('By this time, you\'re well aware that Albina\'s father is holding a <a href="exec: minut += 2 & gt \'pav_park\', \'alb_father_meeting_3\'">meeting</a>, though they have erected a big stage.');
      }
      if (((s as any).PCloInhibit ?? 0) >= 40) {
        qspCall(s, 'mood', 'lower', 'medium');
        // TODO-QSP: dynamic text: You notice passers-by in the park pointing at you as you walk and overhear one o...
        scene.text(`You notice passers-by in the park pointing at you as you walk and overhear one older lady telling her friend: "There's that ${((s as any).pcs_lastname ?? 0)} girl. Youth these days, they have no shame at all!"`);
      }
      if (((s as any).GvstreBoy ?? 0) === 1) {
        // TODO-QSP: 'You see <a href="exec:numnpc = SkverBoy
        // TODO-QSP: gt ''Gnpc''"><<$nameBoyfrend[SkverBoy]>></a> walking across the main square of the park. He doesn''t...
      }
      if (((s as any).week ?? 0) <= 5  &&  ((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) < 20  &&  ((s as any).strelaQW ?? 0) === -2  &&  ((s as any).fedorKozlovQW ?? 0) <= -10  &&  ((s as any).FedorOutcast ?? 0) === 0) {
        scene.text('You can see the <a href="exec:gt \'FedorMisc\', \'Outcast Intro\'">train tracks</a> from here.');
      } else {
        scene.text('You can see the train tracks where <a href="exec:gt \'FedorMisc\', \'Outcast\'">Fedor</a> spends his time.');
      }
      if (((s as any).rexPark ?? 0) === 1  &&  ((s as any).rexParkDay ?? 0) === ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) < 18) {
        scene.text('You see Rex walking in the park.');
        scene.actions([
          { label: 'Go and see Rex', goto: ['rex_events', 'skver'] },
        ]);
      }
      if (((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 9  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).socialchg ?? 0)?.['tVanya_day'] !== ((s as any).daystart ?? 0)) {
        scene.text('<a href="exec:gt \'gschool_socialchg1\',\'tVanya\'">Vanya</a> is out on a light jog and is slowly approaching you.');
      }
      if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).locat ?? 0)?.['Christina'] === 9  &&  ((s as any).socialchg ?? 0)?.['tChris_Lina_jog'] !== ((s as any).daystart ?? 0)) {
        scene.text('You spot <a href="exec:gt \'Zvereva_events\',\'Chris_Lina_park\'">Christina</a> and Lina jogging around the park.');
      }
      if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).locat ?? 0)?.['A23'] === 8  &&  ((s as any).socialchg ?? 0)?.['tAlbina_jog'] !== ((s as any).daystart ?? 0)) {
        scene.text('You spot <a href="exec:gt \'albina_events\',\'albina_jogging_pav\'">Albina</a> out on a jog, attracting a small amount of attention from both men and boys. She stops just ahead of you to fix her shoelace.');
      }
      qspCall(s, 'treeCircEntry', 'PavlovskPark');
      if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 22) {
        scene.actions([
          { label: 'Distribute flyers to earn money (<<$func(\'money\', \'string_profit\', 50)>>) (1:00)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'money', 'earn', 50);
    qspCall(s, 'mood', 'lower', 'small');
    qspCall(s, 'stat', '');
    scene.text('<center><h2>Pavlovsk Park</h2></center>');
    scene.img('images/locations/shared/park/job_flyer.jpg');
    // TODO-QSP: dynamic text: You spend an hour handing out advertising flyers to park visitors and receive <<...
    scene.text(`You spend an hour handing out advertising flyers to park visitors and receive ${qspFunc(s, 'money', 'string_profit', 50)} for your efforts.`);
    scene.actions([
      { label: 'Continue', goto: ['pav_park', 'start'] },
    ]);
  } },
        ]);
      }
      qspCall(s, 'music_actions', 'start');
      qspCall(s, 'jobs', 'get_job_definition', 'pav_tour_guide');
      if (qspFunc(s, 'jobs', 'is_work_day', 'pav_tour_guide') === 1) {
        if (((s as any).job_status ?? 0)?.['pav_tour_guide'] === ''  ||  ((s as any).job_status ?? 0)?.['pav_tour_guide'] === 'terminated') {
          scene.actions([
            { label: 'Apply for the Tour Guide job (<<$func(\'time\', \'get_time_string\', 0, 30)>>)', goto: ['tour_guide', 'apply_for_job'] },
          ]);
        } else {
          if (qspFunc(s, 'jobs', 'is_arrival_time', 'pav_tour_guide') === 1) {
            scene.actions([
              { label: 'Work as Tour Guide (<<$func(\'time\', \'get_time_string\', 8, 0)>>)', goto: ['tour_guide', 'tourstart'] },
            ]);
          }
        }
      }
      if (((s as any).mey_vika ?? 0)?.['mey_vika_qw'] > 0  &&  ((s as any).mey_vika ?? 0)?.['mey_vika_qw'] < 27  &&  ((s as any).mey_vika ?? 0)?.['qw_day'] !== ((s as any).daystart ?? 0)) {
        if (((s as any).locat ?? 0)?.['Vicky'] !== 11) {
          scene.text('<br>Vicky and Vanya are never in the park at this time.');
        } else {
          scene.actions([
            { label: 'Look for Vicky and Vanya (0:05-0:25)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'mey_vika_events', 'park_meet');
    qspCall(s, 'stat', '');
  } },
          ]);
        }
      }
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
      qspCall(s, 'lover', 'lover_events');
      qspCall(s, 'prostitution_functions', 'check_solicitation_event');
      qspCall(s, 'camera', 'check_location');
      qspCall(s, 'blackmailer', 'set_park_act');
      scene.actions([
        { label: 'Go for a walk (0:15)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    if (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 0  &&  ((s as any).exhibitionQW ?? 0) === 0) {
      // TODO-QSP: gt 'kseniyaQW', 'event1', 1
    }
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).mey_vika ?? 0)?.['mey_vika_qw'] > 0  &&  ((s as any).mey_vika ?? 0)?.['mey_vika_qw'] < 27  &&  ((s as any).mey_vika ?? 0)?.['qw_day'] !== ((s as any).daystart ?? 0)  &&  ((s as any).locat ?? 0)?.['Vicky'] === 11) {
      qspCall(s, 'mey_vika_events', 'park_meet');
      qspCall(s, 'stat', '');
    } else {
      qspCall(s, 'pav_parkev', 'go_for_walk1');
    }
  } },
        { label: 'Sit on the bench', goto: ['placer_sex', 'sitting_park_bench'] },
      ]);
    }
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
      { label: 'Go further into the park (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['pav_park', 'deeper_park'] },
    ]);
  }
  scene.build();
}

export const pav_park: LocationDef = {
  name: 'pav_park',
  title: '<br>You are too exhausted to do this. Recover your stamina before trying to go for a run.',
  region: 'pavlovsk',
  locationType: 'public_outdoors',
  locclass: 'city_park',
  description: ['The main square of Pavlovsk Park. Spring has come, melting the worst of the snow. As a result, the trees are sprouting new leaves.'],
  enter: enter,
};
