// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['think_virgin'] === 1  &&  ((s as any).sex_ev ?? 0)?.['virgin_fuck'] === 0  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
    scene.img('images/shared/sex/foreplay/miss3.jpg');
    // TODO-QSP: dynamic text: <<$npcdesc>> pushes you down onto the bed on hands and knees and spreads your ch...
    scene.text(`${((s as any).npcdesc ?? 0)} pushes you down onto the bed on hands and knees and spreads your cheeks apart, preparing to fuck you from behind.`);
    scene.actions([
      { label: 'Stop him (virgin)', goto: ['sex_ev_virgin', 'lover_wait'] },
      { label: 'Let <<$npcdesc>> take your virginity', goto: ['sex_ev_virgin', 'start3'] },
    ]);
  } else {
    if (((s as any).sex_ev ?? 0)?.['last_position'] !== ((s as any).sex_ev ?? 0)?.['position']) {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_doggy', 'doggy_switch'
  } },
      ]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['first_insertion'] === 0) {
        scene.actions([
          { label: 'Bend over', goto: ['sex_ev_doggy', 'doggy_first_insertion'] },
        ]);
      } else {
        if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] !== ''  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
          // TODO-QSP: xgt 'sex_ev_doggy', 'doggy_goto2'
        } else {
          (s as any).sex_ev['position'] = 'doggy';
          (s as any).sex_ev['cock_inserted'] = 1;
          if (((s as any).sex_ev ?? 0)?.['speed'] === 0) {
            (s as any).sex_ev['speed'] = Math.floor(Math.random() * 3) + 1;
          }
          (s as any).sex_ev['pos_speed'] = 'doggy<<sex_ev[\'speed\']>>';
          scene.actions([
            { label: 'Let <<$npcdesc>> fuck you', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_doggy', $sex_ev['pos_speed']
  } },
          ]);
        }
        scene.actions([
          { label: 'Insertion', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_doggy', 'doggy_insert_slow'
  } },
        ]);
      }
      scene.actions([
        { label: 'Bend over (doggystyle)', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_doggy', 'doggy_bend_over'
  } },
      ]);
    }
    scene.actions([
      { label: 'Bend over (doggystyle)', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_doggy', 'doggy_bend_over'
  } },
    ]);
  }
  scene.build();
}

export const sex_ev_doggy: LocationDef = {
  name: 'sex_ev_doggy',
  region: 'other',
  enter: enter,
};
