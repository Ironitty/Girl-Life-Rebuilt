import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterDefault2(s: GameState, scene: SceneBuilder): void {
  (s as any).music_loop = 0;
  qspCall(s, 'core_library', 'setloc', 'pav_commcenter', '');
  qspCall(s, 'family_schedule', '');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Community Center</b></center>');
  scene.img('images/locations/pavlovsk/community/\' + iif(DayStage < 4, \'dk.jpg\', \'dk_night.jpg\') + \'');
  if (((s as any).hour ?? 0) === 19  &&  ((s as any).minut ?? 0) >= 40  &&  ((s as any).week ?? 0) >= 5  &&  ((s as any).week ?? 0) < 7) {
    scene.actions([
      { label: 'Wait in line for the disco to open (0:<<iif(60-minut < 10, "0<<60-minut>>", 60-minut)>>) [+$func(\'money\', \'get_cost_string\', 25)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 25) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      // TODO-QSP: gs 'money', 'pay', 25 & minut += (60 - minut) & pav_disco_in = daystart & gt 'pav_disco'
    }
  } },
    ]);
  } else {
    if (((s as any).hour ?? 0) >= 20  &&  ((s as any).hour ?? 0) <= 23  &&  ((s as any).week ?? 0) >= 5  &&  ((s as any).week ?? 0) < 7) {
      scene.text('The entrance to the community center is full of young people. The guys are hanging around smoking and joking while the girls are in small groups, all dressed up and gossiping. You see the bushes moving - Pavlovsk\'s famous make out garden.');
      // TODO-QSP: dynamic text: You hear people in the alley beside the club. <a href="exec:minut += 5 & gt 'pav...
      scene.text('You hear people in the alley beside the club. <a href="exec:minut += 5 & gt \'pav_commcenter\', \'alley\'">Investigate</a>.');
      if (((s as any).gdkincum ?? 0) === ((s as any).daystart ?? 0)  &&  (((s as any).cumloc ?? 0)[6] === 0  &&  ((s as any).cumloc ?? 0)[7] === 0)  &&  ((s as any).cumloc ?? 0)[11] === 0) {
        (s as any).gdkincum = 0;
      }
      if (((s as any).gdkincum ?? 0) !== ((s as any).daystart ?? 0)) {
        if (((s as any).pav_disco_in ?? 0) === ((s as any).daystart ?? 0)) {
          scene.actions([
            { label: 'Return to the dance', goto: ['pav_disco', ''] },
          ]);
        } else {
          if (qspFunc(s, 'money', 'can_afford', 25) === 1) {
            scene.actions([
              { label: 'Go to the dance ( [+$func(\'money\', \'string_price\', 25) + \')\']', handler: (st: GameState) => {
    qspCall(st, 'money', 'pay', 25);
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_disco', ''] },
            ]);
          } else {
            // TODO-QSP: dynamic text: The dance is on, but you don't have the ' + $func('money', 'string_price', 25) +...
            scene.text('The dance is on, but you don\'t have the \' + $func(\'money\', \'string_price\', 25) + \' needed to pay the entrance fee.');
          }
        }
      } else {
        if ((((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1)  &&  ((s as any).cumloc ?? 0)[11] === 1) {
          scene.text('You should clean the cum off your face and clothes before heading back to the dance.');
        } else {
          if (((s as any).cumloc ?? 0)[11] === 1) {
            scene.text('You should clean the cum off your face before heading back to the dance.');
          } else {
            if (((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1) {
              scene.text('You should clean the cum off your clothes before heading back to the dance.');
            }
          }
        }
      }
    } else {
      scene.text('The community center has sports facilities and offers classes in the evening.');
      // TODO-QSP: dynamic text: It houses a small library which is open from ' + func('time', 'get_time_string',...
      scene.text('It houses a small library which is open from \' + func(\'time\', \'get_time_string\', 8, 0) + \' until \' + func(\'time\', \'get_time_string\', 18, 0) + \'.');
      // TODO-QSP: dynamic text: Upstairs, there are some hobby clubs available from ' + func('time', 'get_time_s...
      scene.text('Upstairs, there are some hobby clubs available from \' + func(\'time\', \'get_time_string\', 12, 0) + \' until \' + func(\'time\', \'get_time_string\', 20, 0) + \'.');
      // TODO-QSP: dynamic text: The sports section is open from ' + func('time', 'get_time_string', 14, 0) + ' u...
      scene.text('The sports section is open from \' + func(\'time\', \'get_time_string\', 14, 0) + \' until \' + func(\'time\', \'get_time_string\', 20, 0) + \' during the week and from \' + func(\'time\', \'get_time_string\', 9, 0) + \' until \' + func(\'time\', \'get_time_string\', 20, 0) + \' during the weekend.');
      // TODO-QSP: dynamic text: On Friday and Saturday evenings, from ' + func('time', 'get_time_string', 20, 0)...
      scene.text('On Friday and Saturday evenings, from \' + func(\'time\', \'get_time_string\', 20, 0) + \' to midnight, the main hall is used as a club with popular music and dancing. Entry fee is \' + $func(\'money\', \'string_price\', 25) + \'.');
    }
  }
  if ((((s as any).daystart ?? 0) % 365) !== 1) {
    if (((s as any).month ?? 0) > 8  &&  ((s as any).ml_guitarlesson ?? 0)?.['advertisement'] === 0) {
      scene.actions([{ label: 'Continue', goto: ['music_guitarlesson', 'advertisement'] }]);
    }
    if ((((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 14  &&  ((s as any).hour ?? 0) < 20)  ||  (((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 20)) {
      // TODO-QSP: act 'Go to the sports section': gt 'gdksport', 'start'
    }
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 18) {
      // TODO-QSP: act 'Go to the library': gt 'pav_library'
    }
    if (((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) < 20) {
      // TODO-QSP: act 'Go upstairs to the hobby clubs': gt 'pav_commclubs'
    }
  } else {
    scene.text('The community center is closed for New Years Eve.');
  }
  if (((s as any).nerd_game ?? 0)?.['game_day'] === ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) === 19  &&  ((s as any).yearstart ?? 0) === 1) {
    // TODO-QSP: act 'Wait for game night to start': minut += 60 - minut
    scene.actions([{ label: 'Continue', goto: ['nerd_game_night', 'game'] }]);
  }
  if (((s as any).nerd_game ?? 0)?.['game_day'] === ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) === 20  &&  ((s as any).yearstart ?? 0) === 1) {
    // TODO-QSP: act 'Go up stairs to the hobby clubs and <b>Join nerds</b>': gt 'nerd_game_night', 'game'
  }
  if (((s as any).hour ?? 0) >= 8) {
    // TODO-QSP: act 'Go to the toilets': gt 'gdktoilet', 'start'
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
  qspCall(s, 'pushkin_ballet_res', 'check_start_evt');
  if (((s as any).locat ?? 0)?.['Anya'] === 10) {
    scene.text('Your sister <a href="exec:gt \'sister\', \'pav_commcenter\'">Anya</a> is sitting with a group of boys and girls, drinking beer.');
  }
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['pav_residential', ''] },
    { label: 'Check the noticeboard', handler: (st: GameState) => {
    qspCall(st, 'adverts_manager', 'start');
  } },
    { label: 'Walk to the bus station (0:01)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['bus', 'community'] },
  ]);
  scene.build();
}

function enterAlley(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/community/piss.jpg');
  scene.text('The alley is a quiet place that young people often use instead of the toilet.');
  scene.text('Some girls are currently using it for such a purpose.');
  scene.actions([
    { label: 'Leave', goto: ['pav_commcenter', ''] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'alley':
      enterAlley(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pav_commcenter: LocationDef = {
  name: 'pav_commcenter',
  title: 'Community Center',
  region: 'pavlovsk',
  locationType: 'public_outdoors',
  enter: enter,
};
