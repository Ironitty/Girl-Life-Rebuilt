import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[0] ?? 0) === 'start') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_custom', 'start'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'modgrup') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_custom', 'modgrup'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'modrel') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_custom', 'modrel'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'modrel_fam') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_custom', 'modrel_fam'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'modrel_pop') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_custom', 'modrel_pop'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'modrel_ath') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_custom', 'modrel_ath'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'modrel_ner') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_custom', 'modrel_ner'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'modrel_gop') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_custom', 'modrel_gop'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'modrel_out') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_custom', 'modrel_out'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'modrel_tea') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_custom', 'modrel_tea'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'modrel_oth') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_custom', 'modrel_oth'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'none') {
    qspCall(s, 'intro_character_custom', 'none');
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'setval') {
    qspCall(s, 'intro_character_custom', 'setval');
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'setval2') {
    qspCall(s, 'intro_character_custom', 'setval2');
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'setval3') {
    qspCall(s, 'intro_character_custom', 'setval3');
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'modrel_setup') {
    qspCall(s, 'intro_character_custom', 'modrel_setup', ((s as any).locArgs?.[1] ?? 0));
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'pol_grup_set') {
    // TODO-QSP: gs 'intro_character_custom', 'pol_grup_set', ARGS[1], ARGS[2], ARGS[3]
  }
  scene.build();
}

export const intro_sg_select_custom: LocationDef = {
  name: 'intro_sg_select_custom',
  region: 'other',
  enter: enter,
};
