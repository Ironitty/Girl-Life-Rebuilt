// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterMoncheri(s: GameState, scene: SceneBuilder): void {
  (s as any).RESULT = 'Mon Chéri shoe number ' + ((s as any).locArgs?.[1] ?? 0) + '.';
  scene.build();
}

function enterCats(s: GameState, scene: SceneBuilder): void {
  (s as any).RESULT = 'Pussy Cats shoe number ' + ((s as any).locArgs?.[1] ?? 0) + '.';
  scene.build();
}

function enterBomba(s: GameState, scene: SceneBuilder): void {
  (s as any).RESULT = 'Tsar Bomba shoe number ' + ((s as any).locArgs?.[1] ?? 0) + '.';
  scene.build();
}

function enterDolls(s: GameState, scene: SceneBuilder): void {
  (s as any).RESULT = 'Patchwork Dolls shoe number ' + ((s as any).locArgs?.[1] ?? 0) + '.';
  scene.build();
}

function enterEroto(s: GameState, scene: SceneBuilder): void {
  (s as any).RESULT = 'Erotomaniac shoe number ' + ((s as any).locArgs?.[1] ?? 0) + '.';
  scene.build();
}

function enterScandalicious(s: GameState, scene: SceneBuilder): void {
  (s as any).RESULT = 'Scandalicious shoe number ' + ((s as any).locArgs?.[1] ?? 0) + '.';
  scene.build();
}

function enterGm(s: GameState, scene: SceneBuilder): void {
  (s as any).RESULT = 'G&M shoe number ' + ((s as any).locArgs?.[1] ?? 0) + '.';
  scene.build();
}

function enterDanilovich(s: GameState, scene: SceneBuilder): void {
  (s as any).RESULT = 'Training shoe number ' + ((s as any).locArgs?.[1] ?? 0) + '.';
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'moncheri':
      enterMoncheri(s, scene);
      break;
    case 'cats':
      enterCats(s, scene);
      break;
    case 'bomba':
      enterBomba(s, scene);
      break;
    case 'dolls':
      enterDolls(s, scene);
      break;
    case 'eroto':
      enterEroto(s, scene);
      break;
    case 'scandalicious':
      enterScandalicious(s, scene);
      break;
    case 'gm':
      enterGm(s, scene);
      break;
    case 'danilovich':
      enterDanilovich(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const _shoe_description: LocationDef = {
  name: '_shoe_description',
  region: 'other',
  enter: enter,
};
