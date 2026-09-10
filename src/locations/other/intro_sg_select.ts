import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[0] ?? 0) === 'start') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_creation', 'start'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'SGStart2') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_creation', 'start2'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'SGStart3') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_creation', 'start3'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'pav_start') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_creation', 'pav_start'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'pav_parents_start') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_creation', 'pav_parents_start'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'push_start') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_creation', 'push_start'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'pav_sharing_start') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_creation', 'pav_sharing_start'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'gad_start') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_creation', 'gad_start'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'charselect') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_creation', 'charselect'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'charselect_nerd') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_creation', 'charselect_nerd'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'random_start') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_creation', 'random_start'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'nerdinfo') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_creation', 'nerdinfo'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'jockinfo') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_creation', 'jockinfo'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'popularinfo') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_creation', 'popularinfo'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'gopnikinfo') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_creation', 'gopnikinfo'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'outcastinfo') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_creation', 'outcastinfo'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'nerd') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_creation', 'nerd'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'nerdqueen') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_creation', 'nerdqueen'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'jock') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_creation', 'jock'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'volleyball') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_creation', 'volleyball'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'cool') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_creation', 'cool'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'socialite') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_creation', 'socialite'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'gopnik') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_creation', 'gopnik'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'gopnikstart') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_creation', 'gopnikstart'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'outcast') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_creation', 'outcast'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'friendless') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_creation', 'friendless'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'sg_settings') {
    qspCall(s, 'intro_initialization', 'sg_settings');
    // TODO-QSP: exit
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'set_exit_acts') {
    qspCall(s, 'intro_character_creation', 'set_exit_acts', ((s as any).locArgs?.[1] ?? 0));
    // TODO-QSP: exit
  }
  scene.build();
}

export const intro_sg_select: LocationDef = {
  name: 'intro_sg_select',
  region: 'other',
  enter: enter,
};
