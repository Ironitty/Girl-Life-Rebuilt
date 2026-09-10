// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/2.jpg');
    } else {
      scene.img('images/shared/sex/vag/doggy/2.jpg');
      if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
        scene.img('images/shared/sex/vag/cowgirl/3.jpg');
      }
      // TODO-QSP: $sex_ev['bed_room']
    }
  }
  scene.build();
}

export const sex_ev_sex: LocationDef = {
  name: 'sex_ev_sex',
  title: '"I need you inside me <i>now</i>," you gasp, desperate to sk',
  region: 'other',
  enter: enter,
};
