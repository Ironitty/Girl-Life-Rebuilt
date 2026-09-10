import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystart ?? 0) < 760) {
    // TODO-QSP: exit
  }
  if (((s as any).natbelQW ?? 0)?.['uni_dates'] < 10) {
    // TODO-QSP: exit
  }
  if (((s as any).natbelQW ?? 0)?.['uni_dates_nightclub_1'] === 0) {
    // TODO-QSP: exit
  }
  if (((s as any).natbelQW ?? 0)?.['uni_dates_mall_1'] === 0) {
    // TODO-QSP: exit
  }
  if (((s as any).natbelQW ?? 0)?.['uni_dates_library_1'] === 0) {
    // TODO-QSP: exit
  }
  if (((s as any).natbelQW ?? 0)?.['uni_dates_cafe_1'] === 0) {
    // TODO-QSP: exit
  }
  if (((s as any).natbelQW ?? 0)?.['uni_dates_beach_1'] === 0) {
    // TODO-QSP: exit
  }
  if (((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) < 21) {
    if (((s as any).natbelQW ?? 0)?.['uni_dates_sonia_event'] === 0) {
      scene.actions([
        { label: 'Search for Natasha to chat with her about the fashion blog', handler: (st: GameState) => {
    (s as any).natbelQW['uni_dates_sonia_event'] = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    scene.img('images/locations/city/island/university/dorm/dorm_room/room.jpg');
    scene.text('You have an idea about using the fashion blog you know Natasha works on so you try to call her but get no answer.');
    scene.text('Having got no reply you decide to take a quick look in the Coffee Hole, however, she isn\'t there either.');
    scene.text('Finally you decide to try her dorm room on the off chance so head there.');
    scene.actions([
      { label: 'Enter Natasha\'s room', goto: ['natbel_uni_dates_2', 'enter_natasha_room'] },
    ]);
  } },
      ]);
    }
  }
  if (((s as any).natbelQW ?? 0)?.['designs_chat_done'] === 1  &&  ((s as any).natbelQW ?? 0)?.['designs_aphrodite_done'] === 0) {
    scene.actions([
      { label: 'Ask Aphrodite Photography about Natasha\'s designs', goto: ['natbel_uni_dates_2', 'visit_aphrodite'] },
    ]);
  }
  if (((s as any).natbelQW ?? 0)?.['designs_aphrodite_done'] === 1  &&  ((s as any).natbelQW ?? 0)?.['tailor_visit_day'] === 0) {
    if (((s as any).week ?? 0) >= 1  &&  ((s as any).week ?? 0) <= 5  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 16) {
      scene.actions([
        { label: 'Take Natasha\'s designs to the tailor', goto: ['natbel_uni_dates_2', 'visit_tailor'] },
      ]);
    }
  }
  if (((s as any).natbelQW ?? 0)?.['tailor_visit_day'] > 0  &&  ((s as any).natbelQW ?? 0)?.['tailor_collected'] === 0) {
    if (((s as any).daystart ?? 0) >= ((s as any).natbelQW ?? 0)?.['tailor_visit_day'] + 30) {
      if (((s as any).week ?? 0) >= 1  &&  ((s as any).week ?? 0) <= 5  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 16) {
        if (qspFunc(s, 'money', 'can_afford', 10000) === 0) {
          s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
        } else {
          scene.actions([{ label: 'Continue', goto: ['natbel_uni_dates_2', 'collect_tailor'] }]);
        }
        scene.actions([
          { label: 'Collect the clothes from the tailor [+$func(\'money\', \'get_cost_string\', 10000)]' }, // TODO-QSP: empty action body
        ]);
      }
    }
  }
  scene.build();
}

export const natbel_uni_dates_2: LocationDef = {
  name: 'natbel_uni_dates_2',
  region: 'other',
  enter: enter,
};
