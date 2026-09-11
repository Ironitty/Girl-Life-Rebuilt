import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (((s as any).args ?? 0)[0] === 'start') {
    qspCall(s, 'core_library', 'setloc', 'cafe_parco', 'start');
    qspCall(s, 'stat', '');
    scene.text('<center><b>Cafe "Del Parco"</b></center>');
    scene.img('images/locations/pavlovsk/park/cafe/caffe_del_parco\' + iif(hour > 20 or hour < 7, \'_night\', \') + \'.jpg');
    // TODO-QSP: dynamic text: The newly opened cafe "Del Parco", with its striking facade, lots of tables and ...
    scene.text('The newly opened cafe "Del Parco", with its striking facade, lots of tables and a summer terrace. Opening hours are between \' + $func(\'time\', \'get_time_string\', 14, 0) + \' and \' + $func(\'time\', \'get_time_string\', 21, 0) + \'.');
    if (((s as any).hour ?? 0) >= 14  &&  ((s as any).hour ?? 0) < 21) {
      // TODO-QSP: act 'Enter the cafe': gt 'cafe_parco', 'inner'
    }
    scene.actions([
      { label: 'Return to the square', goto: ['pav_park', 'start'] },
    ]);
  }
  scene.build();
}

function enterInner(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'cafe_parco', 'inner');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/cafe/caffe_del_parco_in.jpg');
  if (((s as any).ml_venues ?? 0)?.['del_parco'] === 1  &&  (((s as any).ml_delparcoQW ?? 0)?.['Stage'] === 1  ||  ((s as any).ml_delparcoQW ?? 0)?.['Stage'] === 2)  &&  (((s as any).daystart ?? 0) <= ((s as any).ml_delparcoQW ?? 0)?.['Next Date'])) {
    scene.actions([
      { label: 'Speak with Zariyah about her offer', goto: ['music_delparco', 'talkwithzariyah'] },
    ]);
  }
  if (((s as any).ml_venues ?? 0)?.['del_parco'] === 1  &&  ((s as any).ml_delparcoQW ?? 0)?.['Stage'] === 3  &&  (((s as any).daystart ?? 0) !== ((s as any).ml_delparcoQW ?? 0)?.['Next Date'])) {
    scene.actions([
      { label: 'Accept Zariyah\'s offer', goto: ['music_delparco', 'acceptafterthinking'] },
    ]);
  }
  if (((s as any).ml_venues ?? 0)?.['del_parco'] === 1  &&  ((s as any).ml_delparcoQW ?? 0)?.['Stage'] === 4  &&  ((s as any).ml_gigday ?? 0)?.['delparco'] === ((s as any).daystart ?? 0)  &&  ((s as any).ml_gighour ?? 0)?.['delparco'] === ((s as any).hour ?? 0)) {
    scene.actions([
      { label: 'Perform at the cafe', goto: ['music_delparco', 'eveningshow'] },
    ]);
  }
  if (((s as any).LariskaQW ?? 0)?.['story'] === 12  &&  ((s as any).week ?? 0) === 6) {
    // TODO-QSP: act 'Join Lariska and Lev': gt 'lariska_storyline', 'Boyfriend_3'
  }
  if (((s as any).NatbelQW ?? 0)?.['bday_invite'] === 1  &&  ((s as any).daystart ?? 0) === ((s as any).NatbelQW ?? 0)?.['bday_day']  &&  ((s as any).day ?? 0) < 13  &&  (((s as any).hour ?? 0) === 18  &&  ((s as any).minut ?? 0) >= 30  ||  ((s as any).hour ?? 0) === 19)) {
    qspCall(s, 'natbel_friend', 'bday_del_parco');
  }
  if ((((s as any).sunWeather ?? 0) === 0  ||  ((s as any).temper ?? 0) < 5)  &&  ((s as any).week ?? 0) % 2 === 0  &&  (((s as any).hour ?? 0) >= 14  &&  ((s as any).hour ?? 0) < 20)  &&  ((s as any).mey_vika_qw_day ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).mey_vika_qw_day = ((s as any).daystart ?? 0);
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 11) + 10);
    scene.text('You notice Vicky and Vanya sitting at a table.');
    if (((s as any).mey_vika ?? 0)?.['mey_vika_qw'] < 3) {
      scene.text('You\'re not really close with either of them, so you don\'t really know how to approach them.');
    } else {
      if (((s as any).mey_vika ?? 0)?.['mey_vika_qw'] < 5) {
        scene.text('While passing of their table, you greet them with a simple "Hi".');
        if (((s as any).npc_rel ?? 0)?.['A15'] < 20) {
          scene.text('Vicky and Vanya only glance in your direction and turn away. Having nothing more to say, you quickly move on.');
        } else {
          scene.text('Vicky and Vanya answer "Hi" back at the same time. Having just wanted to greet them, you continue on your way.');
        }
      } else {
        if (((s as any).mey_vika ?? 0)?.['mey_vika_qw'] >= 5) {
          if (((s as any).npc_rel ?? 0)?.['A15'] < 50) {
            scene.text('You approach the couple and greet them, but they don\'t pay any attention to you.');
          } else {
            scene.text('You approach the couple and greet them.');
            scene.text('Vicky starts gossiping straight as always while Vanya mostly jokes about the things you two were talking about.');
            scene.text('You chat for a few minutes.');
          }
          if (((s as any).npc_rel ?? 0)?.['A15'] >= 60) {
            if (((s as any).mey_vika ?? 0)?.['mey_vika_qw'] === 10) {
              scene.text('Vicky and Vanya invite you to join them.');
              if (qspFunc(s, 'money', 'can_afford', 300) === 0) {
                scene.actions([
                  { label: 'Refuse', handler: (st: GameState) => {
    scene.text('You\'re pretty much broke and don\'t want to be impudent by asking them to pay for you, so you decide to thank them for the invite but that you have a thing elsewhere that you need to attend.');
    scene.actions([
      { label: 'Leave', goto: ['city_park', ''] },
    ]);
  } },
                ]);
              }
              scene.actions([
                { label: 'Agree', handler: (st: GameState) => {
    ((s as any).mey_vika ?? {})['mey_vika_qw'] = 15;
  }, goto: ['mey_vika_events', 'cafe_qw'] },
              ]);
            } else {
              if (((s as any).mey_vika ?? 0)?.['mey_vika_qw'] >= 7) {
                scene.text('As you\'re getting up from the table, you notice Vicky whispering something to Vanya. You notice Vanya\'s hand stroking and squeezing Vicky\'s ass as they stare at you with lust in their eyes…');
              }
            }
          }
        }
      }
    }
  } else {
    scene.text('You don\'t see anyone familiar here.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Exit the cafe', goto: ['pav_park', 'start'] },
    { label: 'Order from the menu (0:05)', handler: (st: GameState) => {
    // TODO-QSP: gs 'food_menu'
  } },
    { label: 'Order take-out (0:20) [+$func(\'money\', \'get_cost_string\', 350)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 350) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 350);
      scene.actions([{ label: 'Continue', goto: ['food', 'fast_food'] }]);
    }
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'inner':
      enterInner(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const cafe_parco: LocationDef = {
  name: 'cafe_parco',
  title: 'Cafe "Del Parco"',
  region: 'other',
  locationType: 'public_indoors',
  enter: enter,
};
