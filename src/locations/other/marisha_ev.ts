// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).marisha_day = ((s as any).daystart ?? 0);
  if (((s as any).MarishaQW ?? 0)?.['Event'] === 0) {
    scene.actions([{ label: 'Continue', goto: ['marisha_ev', '0'] }]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['marisha_ev', '1'] }]);
    if (((s as any).MarishaQW ?? 0)?.['Event'] === 2) {
      scene.actions([{ label: 'Continue', goto: ['marisha_ev', '2'] }]);
    }
  }
  scene.build();
}

export const marisha_ev: LocationDef = {
  name: 'marisha_ev',
  title: 'As you are walking away from the boys, you notice a girl pee',
  region: 'other',
  enter: enter,
};
