import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).yearstart ?? 0) < 2  ||  ((s as any).week ?? 0) >= 5  ||  ((s as any).hour ?? 0) < 15  ||  ((s as any).hour ?? 0) >= 18) {
    // TODO-QSP: exit
  }
  if (((s as any).NatbelQW ?? 0)?.['FriendLover'] < 9) {
    // TODO-QSP: exit
  }
  if (((s as any).NatbelQW ?? 0)?.['uni_nightclub_date'] < 2) {
    // TODO-QSP: exit
    // TODO-QSP: !! Must have completed the nightclub date first (sets value to 2)
  }
  (s as any).natbel_here = 1;
  if (((s as any).week ?? 0) >= 4) {
    if (qspFunc(s, 'money', 'can_afford', 930, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney ?? ''), curActs: [] };
    } else {
      scene.actions([{ label: 'Continue', goto: ['natbel_uni_dates', 'nightclub_date_ask'] }]);
    }
    scene.actions([
      { label: 'Ask Natasha to the nightclub [+$func(\'money\', \'get_cost_string\', 930, \'...]' }, // TODO-QSP: empty action body
    ]);
  }
  scene.build();
}

export const natbel_uni_dates: LocationDef = {
  name: 'natbel_uni_dates',
  title: '(Wear a nice dress)',
  region: 'other',
  locclass: 'changingroom',
  enter: enter,
};
