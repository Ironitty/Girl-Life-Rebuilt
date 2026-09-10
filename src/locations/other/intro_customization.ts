import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[0] ?? 0) === 'start') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_custom', 'start'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'modclo_menu') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_custom', 'modclo_menu'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'modclo_tattoos') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_custom', 'modclo_tattoos'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'modclo') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_custom', 'modclo'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'modapp') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_custom', 'modapp'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'modite') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_custom', 'modite'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'modite_cos') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_custom', 'modite_cos'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'modite_pha') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_custom', 'modite_pha'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'modite_mis') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_custom', 'modite_mis'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'modatt') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_custom', 'modatt'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'modskl') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_custom', 'modskl'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'modskl_men') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_custom', 'modskl_men'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'modskl_spo') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_custom', 'modskl_spo'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'modskl_com') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_custom', 'modskl_com'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'modskl_bea') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_custom', 'modskl_bea'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'modskl_art') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_custom', 'modskl_art'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'modskl_job') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_custom', 'modskl_job'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'birthday') {
    scene.actions([{ label: 'Continue', goto: ['intro_character_custom', 'birthday'] }]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'setgenbsize') {
    qspCall(s, 'intro_character_custom', 'setgenbsize');
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'modrel_setup3') {
    qspCall(s, 'intro_character_custom', 'modrel_setup3');
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'modrel_setup4') {
    qspCall(s, 'intro_character_custom', 'modrel_setup4');
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
  if (((s as any).locArgs?.[0] ?? 0) === 'setbodymass') {
    qspCall(s, 'intro_character_custom', 'setbodymass');
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'none') {
    qspCall(s, 'intro_character_custom', 'none');
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'modclo_loop') {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', $ARGS[1], $ARGS[2], $ARGS[3]
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'modpur') {
    // TODO-QSP: gt 'intro_character_custom', 'modpur', $ARGS[1], ARGS[2]
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'modrel_setup2') {
    qspCall(s, 'intro_character_custom', 'modrel_setup2', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  }
  scene.build();
}

export const intro_customization: LocationDef = {
  name: 'intro_customization',
  region: 'other',
  enter: enter,
};
