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

function enterModgrup(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_custom', 'modgrup');
  scene.build();
}

function enterModrel(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_custom', 'modrel');
  scene.build();
}

function enterModrelFam(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_custom', 'modrel_fam');
  scene.build();
}

function enterModrelPop(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_custom', 'modrel_pop');
  scene.build();
}

function enterModrelAth(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_custom', 'modrel_ath');
  scene.build();
}

function enterModrelNer(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_custom', 'modrel_ner');
  scene.build();
}

function enterModrelGop(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_custom', 'modrel_gop');
  scene.build();
}

function enterModrelOut(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_custom', 'modrel_out');
  scene.build();
}

function enterModrelTea(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_custom', 'modrel_tea');
  scene.build();
}

function enterModrelOth(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_custom', 'modrel_oth');
  scene.build();
}

function enterNone(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'intro_character_custom', 'none');
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

function enterModrelSetup(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'intro_character_custom', 'modrel_setup', ((s as any).locArgs?.[1] ?? 0));
  scene.build();
}

function enterPolGrupSet(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'intro_character_custom', 'pol_grup_set', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0));
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'modgrup':
      enterModgrup(s, scene);
      break;
    case 'modrel':
      enterModrel(s, scene);
      break;
    case 'modrel_fam':
      enterModrelFam(s, scene);
      break;
    case 'modrel_pop':
      enterModrelPop(s, scene);
      break;
    case 'modrel_ath':
      enterModrelAth(s, scene);
      break;
    case 'modrel_ner':
      enterModrelNer(s, scene);
      break;
    case 'modrel_gop':
      enterModrelGop(s, scene);
      break;
    case 'modrel_out':
      enterModrelOut(s, scene);
      break;
    case 'modrel_tea':
      enterModrelTea(s, scene);
      break;
    case 'modrel_oth':
      enterModrelOth(s, scene);
      break;
    case 'none':
      enterNone(s, scene);
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
    case 'modrel_setup':
      enterModrelSetup(s, scene);
      break;
    case 'pol_grup_set':
      enterPolGrupSet(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const intro_sg_select_custom: LocationDef = {
  name: 'intro_sg_select_custom',
  region: 'other',
  enter: enter,
};
