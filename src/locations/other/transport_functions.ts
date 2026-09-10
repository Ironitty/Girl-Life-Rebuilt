import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystart ?? 0) >= ((s as any).transportVars ?? 0)?.['trainpass_day']) {
    if (qspFunc(s, 'money', 'can_afford', 250) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 250);
      (s as any).transportVars['trainpass_day'] = ((s as any).daystart ?? 0) + 1;
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Return', goto: ['<<$loc>>', '<<$loc_arg>>'] },
      ]);
    }
    scene.actions([
      { label: 'Buy a daily pass (1 day) [+$func(\'money\', \'get_cost_string\', 250)]' }, // TODO-QSP: empty action body
    ]);
  }
  scene.actions([
    { label: 'Buy a weekly pass (7 days) [+$func(\'money\', \'get_cost_string\', 1250)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 1250) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 1250);
      (s as any).transportVars['trainpass_day'] = ((s as any).daystart ?? 0) + 7;
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Return', goto: ['<<$loc>>', '<<$loc_arg>>'] },
      ]);
    }
  } },
    { label: 'Buy a monthly pass (30 days) [+$func(\'money\', \'get_cost_string\', 3750)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 3750) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 3750);
      (s as any).transportVars['trainpass_day'] = ((s as any).daystart ?? 0) + 30;
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Return', goto: ['<<$loc>>', '<<$loc_arg>>'] },
      ]);
    }
  } },
    { label: 'Buy a yearly pass (365 days) [+$func(\'money\', \'get_cost_string\', 32500)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 32500) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 32500);
      (s as any).transportVars['trainpass_day'] = ((s as any).daystart ?? 0) + 365;
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Return', goto: ['<<$loc>>', '<<$loc_arg>>'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

export const transport_functions: LocationDef = {
  name: 'transport_functions',
  region: 'other',
  enter: enter,
};
