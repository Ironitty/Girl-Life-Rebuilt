// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).notification_message ?? 0)[0] !== ''  &&  ((s as any)._n_counter ?? 0)?.['shown'] === 1  &&  ((s as any)._n_counter ?? 0)?.['lock'] === 0) {
    ((s as any)._n_counter = (s as any)._n_counter ?? {})['lock'] = 1;
    if (((s as any)._n_counter ?? 0)?.['timer'] >= 0) {
      ((s as any)._n_counter = (s as any)._n_counter ?? {})['timer'] = ((s as any)._n_counter['timer'] ?? 0) - (500);
    } else {
      if (((s as any).notification_message ?? 0)[1] !== '') {
        (s as any).stat_msg = (String(((s as any).stat_msg ?? 0)).split((((s as any).notification_message ?? 0)?.[0] ?? 0)).join((((s as any).notification_message ?? 0)?.[1] ?? 0)));
        ((s as any)._n_counter = (s as any)._n_counter ?? {})['timer'] = (((s as any)._n_counter ?? 0)?.['duration']);
      } else {
        (s as any).stat_msg = (String(((s as any).stat_msg ?? 0)).split((((s as any).notification_message ?? 0)?.[0] ?? 0)).join(undefined));
        ((s as any)._n_counter = (s as any)._n_counter ?? {})['shown'] = 0;
      }
    }
    ((s as any)._n_counter = (s as any)._n_counter ?? {})['lock'] = 0;
  }
  if (((s as any).music_loop ?? 0) === 1  &&  ((s as any).track_loop ?? 0) !== '') {
  }
  scene.build();
}

export const counter: LocationDef = {
  name: 'counter',
  region: 'other',
  enter: enter,
};
