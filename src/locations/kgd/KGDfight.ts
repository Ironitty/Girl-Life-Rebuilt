// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  scene.text('Your Party');
  scene.text(`First line. ${(((s as any).KGD ?? 0)?.['place'] ?? '')} ${(((s as any).KGD ?? 0)?.['place_2'] ?? '')} ${(((s as any).KGD ?? 0)?.['place_3'] ?? '')}`);
  scene.text(`Second line. ${(((s as any).KGD ?? 0)?.['place_4'] ?? '')} ${(((s as any).KGD ?? 0)?.['place_5'] ?? '')} ${(((s as any).KGD ?? 0)?.['place_6'] ?? '')}`);
  scene.text('');
  scene.text('Game enemy');
  scene.text('');
  scene.text(`First line. ${(((s as any).KGD ?? 0)?.['placev'] ?? '')} ${(((s as any).KGD ?? 0)?.['placev2'] ?? '')} ${(((s as any).KGD ?? 0)?.['placev3'] ?? '')}`);
  scene.text(`Second line. ${(((s as any).KGD ?? 0)?.['placev4'] ?? '')} ${(((s as any).KGD ?? 0)?.['placev5'] ?? '')} ${(((s as any).KGD ?? 0)?.['placev6'] ?? '')}`);
  scene.actions([
    { label: 'Leave', goto: ['KGDgame', ''] },
  ]);
  scene.build();
}

export const KGDfight: LocationDef = {
  name: 'KGDfight',
  title: 'Your Party',
  region: 'kgd',
  enter: enter,
};
