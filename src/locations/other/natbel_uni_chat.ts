import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystart ?? 0) < 579) {
    // TODO-QSP: exit
    // TODO-QSP: !! 579: 2017-08-01
  }
  if (((s as any).daystart ?? 0) >= 1400) {
    // TODO-QSP: exit
    // TODO-QSP: !! roughly when uni ends
  }
  if (((s as any).hour ?? 0) < 16  ||  ((s as any).hour ?? 0) >= 21) {
    // TODO-QSP: exit
  }
  (s as any).natbel_here = 0;
  if (((s as any).NatbelQW ?? 0)?.['uni_nightclub_date'] === 0) {
    if (((s as any).NatbelQW ?? 0)?.['blocked'] === 1) {
      if (((s as any).daystart ?? 0) > ((s as any).NatbelQW ?? 0)?.['block_day']) {
        if (((s as any).NatbelQW ?? 0)?.['block_reason'] === 'uni') {
          (s as any).natbel_here = 1;
          if (qspFunc(s, 'money', 'can_afford', 240) === 0) {
            s.scene = { ...s.scene, mainText: String((s as any).noMoney ?? ''), curActs: [] };
          } else {
            scene.actions([{ label: 'Continue', goto: ['natbel_uni_chat', 'coffee_hole_chat_brokenup_1'] }]);
          }
          scene.actions([
            { label: 'You spot Natasha looking very sorry for herself [+$func(\'money\', \'get_cost_string\', 240)]' }, // TODO-QSP: empty action body
          ]);
        }
      }
    }
  } else {
    (s as any).natbel_here = 1;
    if (((s as any).NatbelQW ?? 0)?.['QWstage'] < 3) {
      (s as any).natbel_here = 1;
      if (qspFunc(s, 'money', 'can_afford', 1362) === 0) {
        s.scene = { ...s.scene, mainText: String((s as any).noMoney ?? ''), curActs: [] };
      } else {
        scene.actions([{ label: 'Continue', goto: ['natbel_uni_chat', 'coffee_hole_chat_strangers_1'] }]);
      }
      scene.actions([
        { label: 'You spot Natasha looking very sorry for herself [+$func(\'money\', \'get_cost_string\', 1362)]' }, // TODO-QSP: empty action body
      ]);
    }
    scene.actions([
      { label: 'You spot Natasha looking very sorry for herself [+$func(\'money\', \'get_cost_string\', 240)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 240) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney ?? ''), curActs: [] };
    } else {
      scene.actions([{ label: 'Continue', goto: ['natbel_uni_chat', 'coffee_hole_chat_gf_1'] }]);
    }
  } },
    ]);
  }
  if (((s as any).NatbelQW ?? 0)?.['uni_nightclub_date'] === 1) {
    if (((s as any).week ?? 0) === 6  &&  ((s as any).hour ?? 0) >= 19) {
      if (((s as any).NatbelQW ?? 0)?.['FriendLover'] >= 3) {
        (s as any).natbel_here = 1;
        if (qspFunc(s, 'money', 'can_afford', 660) === 0) {
          s.scene = { ...s.scene, mainText: String((s as any).noMoney ?? ''), curActs: [] };
        } else {
          scene.actions([{ label: 'Continue', goto: ['natbel_uni_chat', 'coffee_hole_nightclubdate_gf_1'] }]);
        }
        scene.actions([
          { label: 'Go to The Coffee Hole to meet Natasha [+$func(\'money\', \'get_cost_string\', 660)]' }, // TODO-QSP: empty action body
        ]);
      }
    } else {
      (s as any).natbel_here = 1;
      scene.actions([
        { label: 'Go to The Coffee Hole to meet Natasha [+$func(\'money\', \'get_cost_string\', 660)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 660) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney ?? ''), curActs: [] };
    } else {
      scene.actions([{ label: 'Continue', goto: ['natbel_uni_chat', 'coffee_hole_nightclubdate_strangers_1'] }]);
    }
  } },
      ]);
    }
  }
  scene.build();
}

export const natbel_uni_chat: LocationDef = {
  name: 'natbel_uni_chat',
  region: 'other',
  enter: enter,
};
