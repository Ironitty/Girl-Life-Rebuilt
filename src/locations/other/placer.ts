// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterInit(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).placerParameter) (s as any).placerParameter = {}; (s as any).placerParameter['friend_index'] = 0;
  if (!(s as any).placerParameter) (s as any).placerParameter = {}; (s as any).placerParameter['friend_horny'] = 0;
  if (!(s as any).placerParameter) (s as any).placerParameter = {}; (s as any).placerParameter['friend_dom'] = 0;
  if (!(s as any).placerParameter) (s as any).placerParameter = {}; (s as any).placerParameter['friend_slut'] = 0;
  if (!(s as any).placerParameter) (s as any).placerParameter = {}; (s as any).placerParameter['friend_alko'] = 0;
  if (!(s as any).placerStringParameter) (s as any).placerStringParameter = {}; (s as any).placerStringParameter['ev_name'] = '';
  if (!(s as any).placerStringParameter) (s as any).placerStringParameter = {}; (s as any).placerStringParameter['ev_name_a'] = '';
  if (!(s as any).placerStringParameter) (s as any).placerStringParameter = {}; (s as any).placerStringParameter['ev_name_om'] = '';
  if (!(s as any).placerParameter) (s as any).placerParameter = {}; (s as any).placerParameter['mass_number_meet'] = 0;
  if (!(s as any).placerParameter) (s as any).placerParameter = {}; (s as any).placerParameter['want_to_meet'] = 0;
  if (!(s as any).placerParameter) (s as any).placerParameter = {}; (s as any).placerParameter['number_of_man'] = 0;
  if (!(s as any).placerParameter) (s as any).placerParameter = {}; (s as any).placerParameter['recognize_status'] = 0;
  if (!(s as any).placerParameter) (s as any).placerParameter = {}; (s as any).placerParameter['know_slut'] = 0;
  if (!(s as any).placerParameter) (s as any).placerParameter = {}; (s as any).placerParameter['slut_visual'] = 0;
  if (!(s as any).placerStringParameter) (s as any).placerStringParameter = {}; (s as any).placerStringParameter['text_start_meet'] = '';
  if (!(s as any).placerStringParameter) (s as any).placerStringParameter = {}; (s as any).placerStringParameter['text_friend_refuse'] = '';
  if (!(s as any).placerStringParameter) (s as any).placerStringParameter = {}; (s as any).placerStringParameter['text_someone'] = '';
  if (!(s as any).placerParameter) (s as any).placerParameter = {}; (s as any).placerParameter['location_index'] = 0;
  if (!(s as any).placerParameter) (s as any).placerParameter = {}; (s as any).placerParameter['player_act'] = 0;
  if (((s as any).placerParameter ?? 0)?.['location_index'] === 0) {
    scene.actions([{ label: 'Continue', goto: ['placer_pav_park', ''] }]);
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'init':
      enterInit(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const placer: LocationDef = {
  name: 'placer',
  region: 'other',
  enter: enter,
};
