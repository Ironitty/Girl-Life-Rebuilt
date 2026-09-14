// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  scene.text('Your Party');
  // TODO-QSP: dynamic text: First line. <<$KGD['place']>> <<$KGD['place_2']>> <<$KGD['place_3']>>
  scene.text(`First line. ${((s as any).KGD ?? 0)?.['place'] ?? ''} ${((s as any).KGD ?? 0)?.['place_2'] ?? ''} ${((s as any).KGD ?? 0)?.['place_3'] ?? ''}`);
  // TODO-QSP: dynamic text: Second line. <<$KGD['place_4']>> <<$KGD['place_5']>> <<$KGD['place_6']>>
  scene.text(`Second line. ${((s as any).KGD ?? 0)?.['place_4'] ?? ''} ${((s as any).KGD ?? 0)?.['place_5'] ?? ''} ${((s as any).KGD ?? 0)?.['place_6'] ?? ''}`);
  scene.text('');
  scene.text('Game enemy');
  scene.text('');
  // TODO-QSP: dynamic text: First line. <<$KGD['placev']>> <<$KGD['placev2']>> <<$KGD['placev3']>>
  scene.text(`First line. ${((s as any).KGD ?? 0)?.['placev'] ?? ''} ${((s as any).KGD ?? 0)?.['placev2'] ?? ''} ${((s as any).KGD ?? 0)?.['placev3'] ?? ''}`);
  // TODO-QSP: dynamic text: Second line. <<$KGD['placev4']>> <<$KGD['placev5']>> <<$KGD['placev6']>>
  scene.text(`Second line. ${((s as any).KGD ?? 0)?.['placev4'] ?? ''} ${((s as any).KGD ?? 0)?.['placev5'] ?? ''} ${((s as any).KGD ?? 0)?.['placev6'] ?? ''}`);
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
