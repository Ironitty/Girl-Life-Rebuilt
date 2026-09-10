// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).modelpay = (((s as any).pcs_mdlng ?? 0)/2 * 10) + ((((s as any).min ?? 0)(((s as any).fame ?? 0)?.['city_modelling'], 700) + ((s as any).pcs_apprnc ?? 0))/2);
  // TODO-QSP: :reroll_1
  (s as any).special_model['roll'] = 2000;
  (s as any).special_skill_model['roll'] = 2000;
  if (((s as any).first_fame_event ?? 0) < 1) {
    scene.actions([{ label: 'Continue', goto: ['foto_events', 'topless1'] }]);
  } else {
    (s as any).mdlng_fame_event = Math.floor(Math.random() * 3) + 1;
    if (((s as any).mdlng_fame_event ?? 0) === 1  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).daystage ?? 0) < 3) {
      scene.actions([{ label: 'Continue', goto: ['foto_events', 'pool1'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['foto_events', 'tennis'] }]);
      if (((s as any).mdlng_fame_event ?? 0) === 2  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).daystage ?? 0) < 3) {
        scene.actions([{ label: 'Continue', goto: ['foto_events', 'pool1'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['foto_events2', 'champagne1'] }]);
        // TODO-QSP: jump 'reroll_1'
      }
    }
  }
  scene.build();
}

export const foto_events: LocationDef = {
  name: 'foto_events',
  title: 'Photographer',
  region: 'other',
  enter: enter,
};
