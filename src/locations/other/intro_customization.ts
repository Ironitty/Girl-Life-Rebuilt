import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_custom', 'start');
  scene.build();
}

function enterModcloMenu(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_custom', 'modclo_menu');
  scene.build();
}

function enterModcloTattoos(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_custom', 'modclo_tattoos');
  scene.build();
}

function enterModclo(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_custom', 'modclo');
  scene.build();
}

function enterModapp(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_custom', 'modapp');
  scene.build();
}

function enterModite(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_custom', 'modite');
  scene.build();
}

function enterModiteCos(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_custom', 'modite_cos');
  scene.build();
}

function enterModitePha(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_custom', 'modite_pha');
  scene.build();
}

function enterModiteMis(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_custom', 'modite_mis');
  scene.build();
}

function enterModatt(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_custom', 'modatt');
  scene.build();
}

function enterModskl(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_custom', 'modskl');
  scene.build();
}

function enterModsklMen(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_custom', 'modskl_men');
  scene.build();
}

function enterModsklSpo(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_custom', 'modskl_spo');
  scene.build();
}

function enterModsklCom(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_custom', 'modskl_com');
  scene.build();
}

function enterModsklBea(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_custom', 'modskl_bea');
  scene.build();
}

function enterModsklArt(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_custom', 'modskl_art');
  scene.build();
}

function enterModsklJob(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_custom', 'modskl_job');
  scene.build();
}

function enterBirthday(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_custom', 'birthday');
  scene.build();
}

function enterSetgenbsize(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'intro_character_custom', 'setgenbsize');
  scene.build();
}

function enterModrelSetup3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'intro_character_custom', 'modrel_setup3');
  scene.build();
}

function enterModrelSetup4(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'intro_character_custom', 'modrel_setup4');
  scene.build();
}

function enterSetval(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'intro_character_custom', 'setval');
  scene.build();
}

function enterSetval2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'intro_character_custom', 'setval2');
  scene.build();
}

function enterSetval3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'intro_character_custom', 'setval3');
  scene.build();
}

function enterSetbodymass(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'intro_character_custom', 'setbodymass');
  scene.build();
}

function enterNone(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'intro_character_custom', 'none');
  scene.build();
}

function enterModcloLoop(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_custom', 'modclo_loop', String((s as any).locArgs?.[1] ?? ''), String((s as any).locArgs?.[2] ?? ''));
  scene.build();
}

function enterModpur(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_custom', 'modpur', String((s as any).locArgs?.[1] ?? ''), 'ARGS[2]');
  scene.build();
}

function enterModrelSetup2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'intro_character_custom', 'modrel_setup2', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'modclo_menu':
      enterModcloMenu(s, scene);
      break;
    case 'modclo_tattoos':
      enterModcloTattoos(s, scene);
      break;
    case 'modclo':
      enterModclo(s, scene);
      break;
    case 'modapp':
      enterModapp(s, scene);
      break;
    case 'modite':
      enterModite(s, scene);
      break;
    case 'modite_cos':
      enterModiteCos(s, scene);
      break;
    case 'modite_pha':
      enterModitePha(s, scene);
      break;
    case 'modite_mis':
      enterModiteMis(s, scene);
      break;
    case 'modatt':
      enterModatt(s, scene);
      break;
    case 'modskl':
      enterModskl(s, scene);
      break;
    case 'modskl_men':
      enterModsklMen(s, scene);
      break;
    case 'modskl_spo':
      enterModsklSpo(s, scene);
      break;
    case 'modskl_com':
      enterModsklCom(s, scene);
      break;
    case 'modskl_bea':
      enterModsklBea(s, scene);
      break;
    case 'modskl_art':
      enterModsklArt(s, scene);
      break;
    case 'modskl_job':
      enterModsklJob(s, scene);
      break;
    case 'birthday':
      enterBirthday(s, scene);
      break;
    case 'setgenbsize':
      enterSetgenbsize(s, scene);
      break;
    case 'modrel_setup3':
      enterModrelSetup3(s, scene);
      break;
    case 'modrel_setup4':
      enterModrelSetup4(s, scene);
      break;
    case 'setval':
      enterSetval(s, scene);
      break;
    case 'setval2':
      enterSetval2(s, scene);
      break;
    case 'setval3':
      enterSetval3(s, scene);
      break;
    case 'setbodymass':
      enterSetbodymass(s, scene);
      break;
    case 'none':
      enterNone(s, scene);
      break;
    case 'modclo_loop':
      enterModcloLoop(s, scene);
      break;
    case 'modpur':
      enterModpur(s, scene);
      break;
    case 'modrel_setup2':
      enterModrelSetup2(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const intro_customization: LocationDef = {
  name: 'intro_customization',
  region: 'other',
  enter: enter,
};
