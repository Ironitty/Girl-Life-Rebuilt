import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).ml_time_left = ((s as any).ml_performance ?? 0)?.['max_perform_minutes']-((s as any).ml_performance ?? 0)?.['performed_minutes'];
  if (((s as any).ml_activities ?? 0)?.['enabled'] === 0  &&  (((s as any).ml_guitar ?? 0)?.['hasguitar']  ||  ((s as any).vokal_lvl ?? 0) > 5)) {
    (s as any).ml_activities['enabled'] = 1;
  }
  if (((s as any).ml_activities ?? 0)?.['enabled'] === 0  ||  ((s as any).ml_no_music ?? 0) !== 0) {
    // TODO-QSP: exit
  }
  if (((s as any).alko ?? 0) > 5) {
    scene.text('You are too drunk to stream or record music without messing up or throwing up into your guitar.');
  } else {
    scene.text('You can\'t make music in the rain, no matter how much movies try to tell you otherwise.');
    if (((s as any).location_type ?? 0) === 'public_outdoors'  &&  ((s as any).temper ?? 0) < 5) {
      scene.text('It\'s too cold to make music.');
    } else {
      if (((s as any).hour ?? 0) < 8) {
        scene.text('It\'s too early to do anything noisy like playing the guitar or singing.');
      } else {
        scene.text('It\'s too late to do anything noisy like playing the guitar or singing.');
        if (((s as any).ml_settings ?? 0)?.['its_me'] === 1) {
          if (((s as any).ml_guitar ?? 0)?.['hasguitar'] === 1  &&  (((s as any).ml_guitar ?? 0)?.['carried'] === 1  ||  ((s as any).ml_guitar ?? 0)?.['location'] === ((s as any).loc ?? 0))) {
            // TODO-QSP: pl '<center><a href="exec: gs ''music_actions'', ''available_actions''"><img title="Click to to see ...
          } else {
            // TODO-QSP: pl '<center><a href="exec: gs ''music_actions'', ''available_actions''"><img title="Click to to see ...
          }
        } else {
          scene.actions([
            { label: 'Available musical activities', handler: (st: GameState) => {
    qspCall(st, 'music_actions', 'available_actions');
  } },
          ]);
        }
      }
      if (((s as any).ml_guitar ?? 0)?.['hasguitar'] === 1  &&  ((s as any).location_type ?? 0) === 'private') {
        qspCall(s, 'music_actions', 'put_down_pick_up');
      }
    }
  }
  scene.build();
}

export const music_actions: LocationDef = {
  name: 'music_actions',
  title: '(You are too tired)',
  region: 'other',
  locationType: 'private',
  description: ['You are too drunk to stream or record music without messing up or throwing up into your guitar.'],
  enter: enter,
};
