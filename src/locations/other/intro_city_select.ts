import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[0] ?? 0) === 'start') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_creation', 'start'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'start2') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_creation', 'start2'] }]);
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
    scene.actions([{ label: 'Continue', goto: ['intro_character_creation', 'group_desc', 'nerd'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'jockinfo') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_creation', 'group_desc', 'jock'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'popularinfo') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_creation', 'group_desc', 'cool'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'gopnikinfo') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_creation', 'group_desc', 'gopnik'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'outcastinfo') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_creation', 'group_desc', 'outcast'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'nerd') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_creation', 'group_desc', 'nerd'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'nerdqueen') {
    // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'nerd', 'nerdqueen'
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'goodstudent') {
    // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'nerd', 'goodstudent'
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'computergeek') {
    // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'nerd', 'computergeek'
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'chessplayer') {
    // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'nerd', 'chessplayer'
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'jock') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_creation', 'group_desc', 'jock'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'volleyball') {
    // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'jock', 'volleyball'
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'dancer') {
    // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'jock', 'dancer'
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'runner') {
    // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'jock', 'runner'
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'football') {
    // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'jock', 'football'
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'cool') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_creation', 'group_desc', 'cool'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'socialite') {
    // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'cool', 'socialite'
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'beautiful') {
    // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'cool', 'beautiful'
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'anorexic') {
    // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'cool', 'anorexic'
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'bimbo') {
    // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'cool', 'bimbo'
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'gopnik') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_creation', 'group_desc', 'gopnik'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'gopnikstart') {
    // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'gopnik', 'gopnikstart'
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'troublemaker') {
    // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'gopnik', 'troublemaker'
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'vitekgf') {
    // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'gopnik', 'vitekgf'
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'alternative') {
    // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'gopnik', 'alternative'
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'outcast') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_creation', 'group_desc', 'outcast'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'friendless') {
    // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'outcast', 'friendless'
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'uglyduckling') {
    // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'outcast', 'uglyduckling'
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'goodgirl') {
    // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'outcast', 'goodgirl'
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'slut') {
    // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'outcast', 'slut'
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'goth') {
    // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'outcast', 'goth'
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'poor') {
    // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'outcast', 'poor'
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

export const intro_city_select: LocationDef = {
  name: 'intro_city_select',
  region: 'other',
  enter: enter,
};
