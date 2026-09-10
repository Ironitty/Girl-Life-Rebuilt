import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['think_virgin'] === 1  &&  ((s as any).sex_ev ?? 0)?.['virgin_fuck'] === 0  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
    qspCall(s, 'sex_ev_cowgirl', 'cowgirl_virgin_pre');
  } else {
    if (((s as any).sex_ev ?? 0)?.['initiative'] === 'girl') {
      scene.actions([
        { label: 'Climb on top of him', goto: ['sex_ev_cowgirl', 'cowgirl_climb_on'] },
      ]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
        qspCall(s, 'sex_ev_cowgirl', 'cowgirl_insert_menu');
      } else {
        scene.actions([{ label: 'Continue', goto: ['sex_ev_cowgirl', 'cowgirl_goto2'] }]);
        (s as any).sex_ev['position'] = 'cowgirl';
        (s as any).sex_ev['cock_inserted'] = 1;
        if (((s as any).sex_ev ?? 0)?.['speed'] === 0) {
          (s as any).sex_ev['speed'] = Math.floor(Math.random() * 3) + 1;
        }
        (s as any).sex_ev['pos_speed'] = 'cowgirl<<sex_ev[\'speed\']>>';
        scene.actions([
          { label: 'Ride <<$npcdesc>>', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_cowgirl', $sex_ev['pos_speed']
  } },
        ]);
      }
      scene.actions([
        { label: 'Continue', goto: ['sex_ev_cowgirl', 'cowgirl_switch'] },
      ]);
    }
    scene.actions([
      { label: 'Climb on top of him', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_cowgirl', 'cowgirl_first_insertion'
  } },
    ]);
  }
  scene.build();
}

export const sex_ev_cowgirl: LocationDef = {
  name: 'sex_ev_cowgirl',
  region: 'other',
  enter: enter,
};
