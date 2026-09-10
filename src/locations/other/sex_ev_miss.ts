// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['think_virgin'] === 1  &&  ((s as any).sex_ev ?? 0)?.['virgin_fuck'] === 0  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
    scene.img('images/shared/sex/foreplay/miss3.jpg');
    // TODO-QSP: dynamic text: <<$npcdesc>> pushes you down onto the bed and puts his hands on your knees and s...
    scene.text(`${((s as any).npcdesc ?? 0)} pushes you down onto the bed and puts his hands on your knees and spreads your legs apart, preparing to fuck you.`);
    scene.actions([
      { label: 'Stop him (virgin)', goto: ['sex_ev_virgin', 'lover_wait'] },
      { label: 'Let <<$npcdesc>> take your virginity', goto: ['sex_ev_virgin', 'start3'] },
    ]);
  } else {
    if (((s as any).sex_ev ?? 0)?.['initiative'] === 'girl') {
      scene.actions([
        { label: 'Spread your legs', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_miss', 'miss_spread'
  } },
      ]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['new_pos'] === 1) {
        scene.actions([
          { label: 'Spread your legs', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_miss', 'miss_spread'
  } },
        ]);
      } else {
        if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] !== ''  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
          scene.actions([{ label: 'Continue', goto: ['sex_ev_miss', 'miss_goto2'] }]);
        } else {
          (s as any).sex_ev['position'] = 'miss';
          (s as any).sex_ev['cock_inserted'] = 1;
          if (((s as any).sex_ev ?? 0)?.['speed'] === 0) {
            (s as any).sex_ev['speed'] = Math.floor(Math.random() * 3) + 1;
          }
          (s as any).sex_ev['pos_speed'] = 'miss<<sex_ev[\'speed\']>>';
          if (((s as any).sex_ev ?? 0)?.['mood_type'] === 'romantic'  &&  ((s as any).sex_ev ?? 0)?.['speed'] < 3) {
            scene.actions([
              { label: 'Make love to <<$npcdesc>>', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_miss', $sex_ev['pos_speed']
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Let <<$npcdesc>> fuck you', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_miss', $sex_ev['pos_speed']
  } },
            ]);
          }
        }
        scene.actions([
          { label: 'Insertion', goto: ['sex_ev_miss', 'miss_insert_slow'] },
        ]);
      }
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_miss', 'miss_switch'
  } },
      ]);
    }
    scene.actions([
      { label: 'Spread your legs', goto: ['sex_ev_miss', 'miss_first_insertion'] },
    ]);
  }
  scene.build();
}

export const sex_ev_miss: LocationDef = {
  name: 'sex_ev_miss',
  region: 'other',
  enter: enter,
};
